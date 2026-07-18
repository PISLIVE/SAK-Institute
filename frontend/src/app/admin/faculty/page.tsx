'use client';

import { useState, useEffect } from 'react';
import styles from '../AdminPages.module.css';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

type Faculty = {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  department: string | null;
  imageUrl: string | null;
  isActive: boolean;
};

export default function FacultyPage() {
  const [facultyList, setFacultyList] = useState<Faculty[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [formData, setFormData] = useState({
    name: '', designation: '', qualification: '', department: '', imageUrl: ''
  });

  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = async () => {
    const res = await fetch('/api/faculty');
    const data = await res.json();
    setFacultyList(data);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/faculty', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setFormData({ name: '', designation: '', qualification: '', department: '', imageUrl: '' });
    setShowAdd(false);
    fetchFaculty();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this faculty member?')) {
      await fetch(`/api/faculty/${id}`, { method: 'DELETE' });
      fetchFaculty();
    }
  };

  const toggleStatus = async (id: string, currentStatus: boolean) => {
    await fetch(`/api/faculty/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isActive: !currentStatus }),
    });
    fetchFaculty();
  };

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className={styles.title}>Faculty & Staff</h1>
          <p className={styles.subtitle}>Manage teaching staff and their profiles.</p>
        </div>
        <button onClick={() => setShowAdd(!showAdd)} className={styles.submitBtn} style={{ marginTop: 0 }}>
          {showAdd ? 'Cancel' : <><FaPlus /> Add Faculty</>}
        </button>
      </div>

      {showAdd && (
        <div className={styles.formCard} style={{ marginBottom: '2rem' }}>
          <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>Add New Faculty</h2>
          <form onSubmit={handleAdd} className={styles.form}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div className={styles.formGroup}>
                <label>Designation</label>
                <input type="text" placeholder="e.g. Professor, HOD" value={formData.designation} onChange={(e) => setFormData({...formData, designation: e.target.value})} required />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className={styles.formGroup}>
                <label>Qualification</label>
                <input type="text" placeholder="e.g. M.Sc. Nursing" value={formData.qualification} onChange={(e) => setFormData({...formData, qualification: e.target.value})} required />
              </div>
              <div className={styles.formGroup}>
                <label>Department</label>
                <input type="text" value={formData.department} onChange={(e) => setFormData({...formData, department: e.target.value})} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Image URL (Optional)</label>
              <input type="text" placeholder="/placeholder-person.png" value={formData.imageUrl} onChange={(e) => setFormData({...formData, imageUrl: e.target.value})} />
            </div>
            <button type="submit" className={styles.submitBtn}>Save Faculty Member</button>
          </form>
        </div>
      )}

      <div className={styles.card}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Qualification</th>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {facultyList.length === 0 ? (
                <tr>
                  <td colSpan={6} className={styles.empty}>No faculty members found. Add one above.</td>
                </tr>
              ) : (
                facultyList.map((faculty) => (
                  <tr key={faculty.id}>
                    <td className={styles.fw500}>{faculty.name}</td>
                    <td>{faculty.designation}</td>
                    <td>{faculty.qualification}</td>
                    <td>{faculty.department || '-'}</td>
                    <td>
                      <button 
                        onClick={() => toggleStatus(faculty.id, faculty.isActive)}
                        className={`${styles.statusBadge} ${faculty.isActive ? styles.admitted : styles.rejected}`}
                        style={{ border: 'none', cursor: 'pointer' }}
                      >
                        {faculty.isActive ? 'Active' : 'Inactive'}
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(faculty.id)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
