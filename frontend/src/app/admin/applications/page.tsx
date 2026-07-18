'use client';

import { useState, useEffect } from 'react';
import styles from '../AdminPages.module.css';
import { FaEye, FaDownload, FaTimes, FaSearch, FaPrint } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { exportToCSV } from '@/utils/exportToCSV';

type Application = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  district: string | null;
  state: string | null;
  qualification: string;
  stream: string;
  percentage: string;
  passingYear: string;
  institution: string;
  course: string;
  source: string | null;
  status: string;
  createdAt: string;
};

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await fetch('/api/applications');
      const data = await res.json();
      setApplications(Array.isArray(data) ? data : []);
    } catch (err) {
      toast.error('Failed to load applications');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await fetch(`/api/applications/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchApplications();
      if (selectedApp && selectedApp.id === id) {
        setSelectedApp({ ...selectedApp, status: newStatus });
      }
      toast.success(`Status updated to ${newStatus}`);
    } catch (err) {
      toast.error('Failed to update status');
      console.error(err);
    }
  };

  const handleExportCSV = () => {
    exportToCSV(filteredApplications, `applications_${new Date().toISOString().split('T')[0]}`);
  };

  const filteredApplications = applications.filter(app => {
    const q = searchQuery.toLowerCase();
    return (
      app.firstName.toLowerCase().includes(q) ||
      app.lastName.toLowerCase().includes(q) ||
      app.email.toLowerCase().includes(q) ||
      app.phone.includes(q)
    );
  });

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className={styles.title}>Admission Applications</h1>
          <p className={styles.subtitle}>View, manage, and process all submitted admission applications.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div className={styles.searchWrapper}>
            <FaSearch className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Search by name, email, or phone..." 
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
        ) : applications.length === 0 ? (
          <p className={styles.empty}>No applications found.</p>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Applicant Name</th>
                  <th>Contact Info</th>
                  <th>Course Applied</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.map((app) => (
                  <tr key={app.id}>
                    <td>{new Date(app.createdAt).toLocaleDateString()}</td>
                    <td className={styles.fw500}>{app.firstName} {app.lastName}</td>
                    <td>
                      <div><a href={`mailto:${app.email}`}>{app.email}</a></div>
                      <div className={styles.textSm}>{app.phone}</div>
                    </td>
                    <td className={styles.fw500}>{app.course.toUpperCase()}</td>
                    <td>
                      <span className={`${styles.statusBadge} ${styles[app.status.toLowerCase()] || styles.pending}`}>
                        {app.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td>
                      <button 
                        onClick={() => setSelectedApp(app)}
                        style={{ color: '#0ea5e9', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', padding: '0.5rem' }}
                        title="View Details"
                      >
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selectedApp && (
        <div className={styles.modalOverlay} onClick={() => setSelectedApp(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={`${styles.modalHeader} no-print`}>
              <h2>Application Details</h2>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => window.print()} className={styles.submitBtn} style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem' }}>
                  <FaPrint /> Print
                </button>
                <button onClick={() => setSelectedApp(null)} className={styles.closeBtn}><FaTimes /></button>
              </div>
            </div>
            
            <div className={styles.modalBody} id="printableArea">
              <div className={styles.detailGrid}>
                <div className={styles.detailItem}>
                  <label>Full Name</label>
                  <p>{selectedApp.firstName} {selectedApp.lastName}</p>
                </div>
                <div className={styles.detailItem}>
                  <label>Date of Birth</label>
                  <p>{selectedApp.dob}</p>
                </div>
                <div className={styles.detailItem}>
                  <label>Gender</label>
                  <p>{selectedApp.gender}</p>
                </div>
                <div className={styles.detailItem}>
                  <label>Applied Course</label>
                  <p className={styles.fw500}>{selectedApp.course.toUpperCase()}</p>
                </div>
                <div className={styles.detailItem}>
                  <label>Email</label>
                  <p><a href={`mailto:${selectedApp.email}`}>{selectedApp.email}</a></p>
                </div>
                <div className={styles.detailItem}>
                  <label>Phone Number</label>
                  <p>{selectedApp.phone}</p>
                </div>
                <div className={styles.detailItem}>
                  <label>District</label>
                  <p>{selectedApp.district || 'N/A'}</p>
                </div>
                <div className={styles.detailItem}>
                  <label>State</label>
                  <p>{selectedApp.state || 'N/A'}</p>
                </div>
              </div>
              
              <h3 className={styles.sectionTitle} style={{ marginTop: '2rem' }}>Academic Details</h3>
              <div className={styles.detailGrid}>
                <div className={styles.detailItem}>
                  <label>Qualification</label>
                  <p>{selectedApp.qualification}</p>
                </div>
                <div className={styles.detailItem}>
                  <label>Stream / Major</label>
                  <p>{selectedApp.stream}</p>
                </div>
                <div className={styles.detailItem}>
                  <label>Institution Attended</label>
                  <p>{selectedApp.institution}</p>
                </div>
                <div className={styles.detailItem}>
                  <label>Passing Year</label>
                  <p>{selectedApp.passingYear}</p>
                </div>
                <div className={styles.detailItem}>
                  <label>Percentage / Grade</label>
                  <p className={styles.fw500}>{selectedApp.percentage}%</p>
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <div className={styles.statusControls}>
                <label>Change Status:</label>
                <select 
                  value={selectedApp.status} 
                  onChange={(e) => updateStatus(selectedApp.id, e.target.value)}
                  className={styles.statusSelect}
                >
                  <option value="PENDING">Pending</option>
                  <option value="UNDER_REVIEW">Under Review</option>
                  <option value="ACCEPTED">Accepted / Admitted</option>
                  <option value="REJECTED">Rejected</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
