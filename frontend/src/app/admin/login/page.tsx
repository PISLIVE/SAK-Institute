'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './Login.module.css';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError('Invalid credentials');
      } else {
        router.push('/admin');
        router.refresh();
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.splitContainer}>
      <div className={styles.leftPane}>
        <div className={styles.leftContent}>
          <div className={styles.logoWrapper}>
            <Image src="/sak-logo.png" alt="SAK Logo" width={120} height={120} style={{ objectFit: 'contain' }} />
          </div>
          <h1>SAK Group of Institutions</h1>
          <p>Excellence in Nursing Education</p>
        </div>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.rightPane}>
        <div className={styles.loginCard}>
          <div className={styles.header}>
            <h2>Admin Portal</h2>
            <p>Sign in to manage the college website</p>
          </div>
          
          {error && <div className={styles.error}>{error}</div>}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
        <div className={styles.loginFooter}>
          &copy; {new Date().getFullYear()} SAK Group of Institutions. All rights reserved.
        </div>
      </div>
    </div>
  );
}
