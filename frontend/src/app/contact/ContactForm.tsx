"use client";

import { useState } from 'react';
import styles from './Contact.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        alert('Something went wrong. Please try again.');
        setStatus('idle');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.formCard} style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ fontSize: '4rem', color: '#10b981', marginBottom: '1rem' }}>✓</div>
        <h3 style={{ color: 'var(--primary-color)', margin: '0 0 1rem 0' }}>Message Sent!</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Thank you for reaching out to us. We will get back to you shortly.</p>
        <button onClick={() => setStatus('idle')} className="btn-primary" style={{ padding: '0.8rem 2rem' }}>Send Another Message</button>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <h3 className="animate-on-load">Send us a Message</h3>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="John Doe" required />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" required />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="course">Subject / Course Inquiry</label>
          <select id="course" name="course" required defaultValue="">
            <option value="" disabled hidden>Select an option</option>
            <option value="admission">General Admission Inquiry</option>
            <option value="gnm">GNM (General Nursing)</option>
            <option value="bsc">B.Sc. Nursing</option>
            <option value="post-basic">Post Basic B.Sc. Nursing</option>
            <option value="msc">M.Sc. Nursing</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} placeholder="How can we help you?" required></textarea>
        </div>

        <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }} disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
