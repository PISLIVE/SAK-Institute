'use client';

import { useState, useEffect } from 'react';
import styles from '../AdminPages.module.css';
import { FaDownload, FaTrash, FaSearch } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { exportToCSV } from '@/utils/exportToCSV';

type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string | null;
  status: string;
  createdAt: string;
};

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await fetch('/api/enquiries');
      const data = await res.json();
      setEnquiries(Array.isArray(data) ? data : []);
    } catch (err) {
      toast.error('Failed to load enquiries');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchEnquiries();
      toast.success(`Status updated to ${newStatus}`);
    } catch (err) {
      toast.error('Failed to update status');
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this enquiry?')) {
      try {
        await fetch(`/api/enquiries/${id}`, { method: 'DELETE' });
        fetchEnquiries();
        toast.success('Enquiry deleted');
      } catch (err) {
        toast.error('Failed to delete enquiry');
      }
    }
  };

  const handleExportCSV = () => {
    exportToCSV(filteredEnquiries, `enquiries_${new Date().toISOString().split('T')[0]}`);
  };

  const filteredEnquiries = enquiries.filter(enq => {
    const q = searchQuery.toLowerCase();
    return (
      enq.name.toLowerCase().includes(q) ||
      enq.email.toLowerCase().includes(q) ||
      enq.phone.includes(q)
    );
  });

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className={styles.title}>Contact Enquiries</h1>
          <p className={styles.subtitle}>View all general inquiries and contact form submissions.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div className={styles.searchWrapper}>
            <FaSearch className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Search enquiries..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <button onClick={handleExportCSV} className={styles.submitBtn} style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}>
            <FaDownload /> Export CSV
          </button>
        </div>
      </div>

      <div className={styles.card}>
        {loading ? (
          <p style={{ padding: '2rem' }}>Loading...</p>
        ) : enquiries.length === 0 ? (
          <p className={styles.empty}>No enquiries found.</p>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Contact Info</th>
                  <th>Course of Interest</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEnquiries.map((enq) => (
                  <tr key={enq.id}>
                    <td>{new Date(enq.createdAt).toLocaleDateString()}</td>
                    <td className={styles.fw500}>{enq.name}</td>
                    <td>
                      <div><a href={`mailto:${enq.email}`}>{enq.email}</a></div>
                      <div className={styles.textSm}>{enq.phone}</div>
                    </td>
                    <td>{enq.course.toUpperCase()}</td>
                    <td className={styles.messageCell} title={enq.message || ''}>{enq.message || '-'}</td>
                    <td>
                      <select 
                        value={enq.status} 
                        onChange={(e) => updateStatus(enq.id, e.target.value)}
                        className={styles.statusBadge}
                        style={{ background: enq.status === 'RESOLVED' ? '#dcfce7' : enq.status === 'REVIEWED' ? '#e0f2fe' : '#fef9c3', border: 'none', cursor: 'pointer', outline: 'none' }}
                      >
                        <option value="PENDING">Pending</option>
                        <option value="REVIEWED">Reviewed</option>
                        <option value="RESOLVED">Resolved</option>
                      </select>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(enq.id)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
