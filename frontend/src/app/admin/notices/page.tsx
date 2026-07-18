'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Notices.module.css';
import { FaPlus, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

type Notice = {
  id: string;
  content: string;
  link: string | null;
  isActive: boolean;
  createdAt: string;
};

export default function AdminNoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  
  const router = useRouter();

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const res = await fetch('/api/notices');
      const data = await res.json();
      setNotices(data);
    } catch (error) {
      console.error('Failed to fetch notices', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    const strippedContent = content.replace(/<[^>]*>?/gm, '').trim();
    if (!strippedContent) return;

    try {
      setIsAdding(true);
      const res = await fetch('/api/notices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, link }),
      });
      
      if (res.ok) {
        setContent('');
        setLink('');
        fetchNotices();
        router.refresh();
      }
    } catch (error) {
      console.error('Failed to add notice', error);
    } finally {
      setIsAdding(false);
    }
  };

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    try {
      await fetch(`/api/notices/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !currentStatus }),
      });
      fetchNotices();
      router.refresh();
    } catch (error) {
      console.error('Failed to update notice', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this notice?')) return;
    
    try {
      await fetch(`/api/notices/${id}`, {
        method: 'DELETE',
      });
      fetchNotices();
      router.refresh();
    } catch (error) {
      console.error('Failed to delete notice', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Manage Notice Board</h1>
      <p className={styles.subtitle}>Add, update, or remove notices scrolling on the homepage.</p>

      <div className={styles.addCard}>
        <h2>Add New Notice</h2>
        <form onSubmit={handleAddNotice} className={styles.addForm}>
          <div className={styles.formGroup}>
            <label>Notice Content *</label>
            <div style={{ background: 'white', marginBottom: '1rem', border: '1px solid #cbd5e1', borderRadius: '4px', overflow: 'hidden' }}>
              <ReactQuill 
                theme="snow" 
                value={content} 
                onChange={setContent} 
                placeholder="e.g., Admission Open for BSc Nursing 2026"
                style={{ height: '200px', border: 'none' }}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Link (Optional)</label>
            <input 
              type="url" 
              value={link} 
              onChange={(e) => setLink(e.target.value)} 
              placeholder="e.g., https://sakcollege.com/apply"
            />
          </div>
          <button type="submit" disabled={isAdding || !content.replace(/<[^>]*>?/gm, '').trim()} className={styles.submitBtn} style={{ marginTop: '3rem' }}>
            <FaPlus /> {isAdding ? 'Adding...' : 'Add Notice'}
          </button>
        </form>
      </div>

      <div className={styles.listCard}>
        <h2>Current Notices</h2>
        {loading ? (
          <p>Loading notices...</p>
        ) : notices.length === 0 ? (
          <p className={styles.empty}>No notices found. Add one above!</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Content</th>
                <th>Link</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice) => (
                <tr key={notice.id} className={!notice.isActive ? styles.inactiveRow : ''}>
                  <td>
                    <div dangerouslySetInnerHTML={{ __html: notice.content }} />
                  </td>
                  <td>{notice.link ? <a href={notice.link} target="_blank" rel="noopener noreferrer">View Link</a> : '-'}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${notice.isActive ? styles.active : styles.inactive}`}>
                      {notice.isActive ? 'Active' : 'Hidden'}
                    </span>
                  </td>
                  <td className={styles.actions}>
                    <button 
                      onClick={() => handleToggleStatus(notice.id, notice.isActive)}
                      className={styles.toggleBtn}
                      title={notice.isActive ? "Hide Notice" : "Show Notice"}
                    >
                      {notice.isActive ? <FaTimes /> : <FaCheck />}
                    </button>
                    <button 
                      onClick={() => handleDelete(notice.id)}
                      className={styles.deleteBtn}
                      title="Delete Notice"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
