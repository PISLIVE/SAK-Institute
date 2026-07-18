'use client';

import { useState, useEffect } from 'react';
import styles from '../AdminPages.module.css';

type Settings = {
  id: string;
  collegeName: string;
  email: string;
  phone: string;
  address: string;
  facebookUrl: string | null;
  twitterUrl: string | null;
  instagramUrl: string | null;
  linkedinUrl: string | null;
};

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => setSettings(data))
      .catch((err) => console.error('Error fetching settings:', err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!settings) return;
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      
      if (res.ok) {
        setMessage('Settings saved successfully!');
      } else {
        setMessage('Failed to save settings.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred.');
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  if (!settings) return <div>Loading settings...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Site Settings</h1>
      <p className={styles.subtitle}>Manage global website information.</p>

      <div className={styles.formCard}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>College Name</label>
            <input type="text" name="collegeName" value={settings.collegeName} onChange={handleChange} required />
          </div>
          
          <div className={styles.formGroup}>
            <label>Contact Email</label>
            <input type="email" name="email" value={settings.email} onChange={handleChange} required />
          </div>
          
          <div className={styles.formGroup}>
            <label>Contact Phone</label>
            <input type="text" name="phone" value={settings.phone} onChange={handleChange} required />
          </div>
          
          <div className={styles.formGroup}>
            <label>Physical Address</label>
            <input type="text" name="address" value={settings.address} onChange={handleChange} required />
          </div>
          
          <h3 className={styles.sectionTitle}>Social Media Links</h3>
          
          <div className={styles.formGroup}>
            <label>Facebook URL</label>
            <input type="url" name="facebookUrl" value={settings.facebookUrl || ''} onChange={handleChange} />
          </div>
          
          <div className={styles.formGroup}>
            <label>Twitter URL</label>
            <input type="url" name="twitterUrl" value={settings.twitterUrl || ''} onChange={handleChange} />
          </div>
          
          <div className={styles.formGroup}>
            <label>Instagram URL</label>
            <input type="url" name="instagramUrl" value={settings.instagramUrl || ''} onChange={handleChange} />
          </div>
          
          <div className={styles.formGroup}>
            <label>LinkedIn URL</label>
            <input type="url" name="linkedinUrl" value={settings.linkedinUrl || ''} onChange={handleChange} />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={saving}>
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
          
          {message && <p className={styles.message}>{message}</p>}
        </form>
      </div>
    </div>
  );
}
