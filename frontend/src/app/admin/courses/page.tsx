'use client';

import { useState, useEffect } from 'react';
import styles from '../AdminPages.module.css';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

type Course = {
  id: string;
  name: string;
  duration: string;
  seats: number;
  fees: string;
  eligibility: string;
  isActive: boolean;
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [formData, setFormData] = useState({
    name: '', duration: '', seats: 0, fees: '', eligibility: ''
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await fetch('/api/courses');
    const data = await res.json();
    setCourses(data);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, seats: Number(formData.seats) }),
    });
    setFormData({ name: '', duration: '', seats: 0, fees: '', eligibility: '' });
    setShowAdd(false);
    fetchCourses();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this course?')) {
      await fetch(`/api/courses/${id}`, { method: 'DELETE' });
      fetchCourses();
    }
  };

  const toggleStatus = async (id: string, currentStatus: boolean) => {
    await fetch(`/api/courses/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isActive: !currentStatus }),
    });
    fetchCourses();
  };

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className={styles.title}>Courses</h1>
          <p className={styles.subtitle}>Manage academic programs and fees.</p>
        </div>
        <button onClick={() => setShowAdd(!showAdd)} className={styles.submitBtn} style={{ marginTop: 0 }}>
          {showAdd ? 'Cancel' : <><FaPlus /> Add Course</>}
        </button>
      </div>

      {showAdd && (
        <div className={styles.formCard} style={{ marginBottom: '2rem' }}>
          <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>Add New Course</h2>
          <form onSubmit={handleAdd} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Course Name</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className={styles.formGroup}>
                <label>Duration</label>
                <input type="text" placeholder="e.g. 3 Years" value={formData.duration} onChange={(e) => setFormData({...formData, duration: e.target.value})} required />
              </div>
              <div className={styles.formGroup}>
                <label>Total Seats</label>
                <input type="number" value={formData.seats} onChange={(e) => setFormData({...formData, seats: Number(e.target.value)})} required />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Fees (Per Year)</label>
              <input type="text" placeholder="e.g. ₹ 80,000" value={formData.fees} onChange={(e) => setFormData({...formData, fees: e.target.value})} required />
            </div>
            <div className={styles.formGroup}>
              <label>Eligibility Criteria</label>
              <textarea rows={3} value={formData.eligibility} onChange={(e) => setFormData({...formData, eligibility: e.target.value})} required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>Save Course</button>
          </form>
        </div>
      )}

      <div className={styles.card}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Duration</th>
                <th>Seats</th>
                <th>Fees</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.length === 0 ? (
                <tr>
                  <td colSpan={6} className={styles.empty}>No courses found. Add one above.</td>
                </tr>
              ) : (
                courses.map((course) => (
                  <tr key={course.id}>
                    <td className={styles.fw500}>{course.name}</td>
                    <td>{course.duration}</td>
                    <td>{course.seats}</td>
                    <td>{course.fees}</td>
                    <td>
                      <button 
                        onClick={() => toggleStatus(course.id, course.isActive)}
                        className={`${styles.statusBadge} ${course.isActive ? styles.admitted : styles.rejected}`}
                        style={{ border: 'none', cursor: 'pointer' }}
                      >
                        {course.isActive ? 'Active' : 'Inactive'}
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(course.id)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>
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
