'use client';

import { useState, useEffect } from 'react';
import styles from '../AdminPages.module.css';
import { FaTrash, FaUserPlus } from 'react-icons/fa';

type AdminUser = {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState('');

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('SUB_ADMIN');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/admin-users');
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      }
    } catch (error) {
      console.error('Failed to fetch users', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      const res = await fetch('/api/admin-users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role })
      });

      if (res.ok) {
        setIsAdding(false);
        setName('');
        setEmail('');
        setPassword('');
        setRole('SUB_ADMIN');
        fetchUsers();
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to create user');
      }
    } catch (err) {
      setError('An error occurred while creating the user.');
    }
  };

  const handleDeleteUser = async (id: string, userEmail: string) => {
    if (!confirm(`Are you sure you want to revoke access for ${userEmail}?`)) return;

    try {
      const res = await fetch(`/api/admin-users/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setUsers(users.filter(u => u.id !== id));
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to delete user');
      }
    } catch (error) {
      console.error('Failed to delete user', error);
    }
  };

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className={styles.title}>Admin Staff</h1>
          <p className={styles.subtitle}>Manage dashboard access and permissions</p>
        </div>
        <button className={styles.submitBtn} style={{ marginTop: 0 }} onClick={() => setIsAdding(!isAdding)}>
           {isAdding ? 'Cancel' : <><FaUserPlus style={{ marginRight: '8px' }} /> Add Staff</>}
        </button>
      </div>

      {isAdding && (
        <div className={styles.formCard} style={{ marginBottom: '2rem' }}>
          <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>Create New Account</h2>
          
          {error && <div style={{ background: '#fee2e2', color: '#dc2626', padding: '0.75rem', borderRadius: '0.375rem', marginBottom: '1rem', fontSize: '0.875rem' }}>{error}</div>}

          <form onSubmit={handleCreateUser} className={styles.form}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="John Doe" />
              </div>
              
              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="staff@sakcollege.edu" />
              </div>

              <div className={styles.formGroup}>
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Minimum 6 characters" minLength={6} />
              </div>

              <div className={styles.formGroup}>
                <label>Role</label>
                <select value={role} onChange={e => setRole(e.target.value)} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', width: '100%' }}>
                  <option value="SUB_ADMIN">Sub-Admin (Standard Access)</option>
                  <option value="ADMIN">Master Admin (Full Access)</option>
                </select>
              </div>
            </div>
            
            <button type="submit" className={styles.submitBtn}>Create Account</button>
          </form>
        </div>
      )}

      {loading ? (
        <p>Loading staff...</p>
      ) : (
        <div className={styles.card}>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={5} className={styles.empty}>
                      No admin staff found.
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.id}>
                      <td className={styles.fw500}>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <span className={styles.statusBadge} style={{ background: user.role === 'ADMIN' ? '#dbeafe' : '#f3f4f6', color: user.role === 'ADMIN' ? '#1e40af' : '#4b5563', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
                          {user.role}
                        </span>
                      </td>
                      <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                      <td>
                        <button 
                          onClick={() => handleDeleteUser(user.id, user.email)}
                          style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}
                          title="Revoke Access"
                        >
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
      )}
    </div>
  );
}
