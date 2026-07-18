"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './EnquiryForm.module.css';
import { toast } from 'react-hot-toast';

export default function EnquiryForm() {
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
        toast.success('Enquiry submitted successfully!');
      } else {
        toast.error('Something went wrong. Please try again.');
        setStatus('idle');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <div className={styles.splitLayout}>
      <div className={styles.imagePanel}>
        <Image src="/nursing_students.png" alt="Nursing Students" fill sizes="(max-width: 900px) 100vw, 50vw" style={{objectFit: 'cover'}} />
        <div className={styles.imageOverlay}>
          <h2>Begin Your Nursing Journey</h2>
          <p>Join SAK College of Nursing and transform your passion into a rewarding career in healthcare.</p>
        </div>
      </div>
      
      <div className={styles.formPanel}>
        {status === 'success' ? (
          <div className={styles.successCard}>
            <div className={styles.successIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3>Enquiry Submitted!</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Thank you for reaching out to SAK College of Nursing. Our admission counselor will contact you shortly.</p>
            <button onClick={() => setStatus('idle')} className="btn-primary" style={{ marginTop: '1.5rem', width: '100%' }}>Submit Another Enquiry</button>
          </div>
        ) : (
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <h3>Student Enquiry Form</h3>
              <p>Fill out the details below and we will get back to you.</p>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.inputField}>
                <input type="text" id="name" name="name" required placeholder=" " />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className={styles.inputField}>
                <input type="email" id="email" name="email" required placeholder=" " />
                <label htmlFor="email">Email Address</label>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.inputField}>
                <input type="tel" id="phone" name="phone" required placeholder=" " />
                <label htmlFor="phone">Phone Number</label>
              </div>
              <div className={styles.inputField}>
                <select id="course" name="course" required defaultValue="">
                  <option value="" disabled hidden></option>
                  <option value="gnm">GNM (General Nursing)</option>
                  <option value="bsc">B.Sc. Nursing</option>
                  <option value="post-basic">Post Basic B.Sc. Nursing</option>
                  <option value="msc">M.Sc. Nursing</option>
                </select>
                <label htmlFor="course">Course Interested In</label>
              </div>
            </div>

            <div className={styles.inputField}>
              <textarea id="message" name="message" rows={4} required placeholder=" "></textarea>
              <label htmlFor="message">Your Message / Questions</label>
            </div>
            
            {/* Honeypot field - invisible to users, bots will fill it */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label>Address 2 (Leave Blank)</label>
              <input type="text" name="address2" tabIndex={-1} autoComplete="off" />
            </div>

            <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Submit Enquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
