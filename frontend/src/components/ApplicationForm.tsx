"use client";

import { useState } from 'react';
import styles from './ApplicationForm.module.css';

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  if (status === 'success') {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h2>Application Submitted Successfully!</h2>
        <p>Your application ID is <strong>SAK-{Math.floor(Math.random() * 90000) + 10000}</strong>. We have sent a confirmation email to you. Our admissions team will review your application and contact you soon.</p>
        <button onClick={() => { setStatus('idle'); setStep(1); }} className="btn-primary" style={{ marginTop: '2rem' }}>Submit Another Application</button>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.stepper}>
        <div className={`${styles.step} ${step >= 1 ? styles.activeStep : ''}`}>
          <div className={styles.stepCircle}>1</div>
          <span>Personal Info</span>
        </div>
        <div className={`${styles.stepLine} ${step >= 2 ? styles.activeLine : ''}`}></div>
        <div className={`${styles.step} ${step >= 2 ? styles.activeStep : ''}`}>
          <div className={styles.stepCircle}>2</div>
          <span>Academics</span>
        </div>
        <div className={`${styles.stepLine} ${step >= 3 ? styles.activeLine : ''}`}></div>
        <div className={`${styles.step} ${step >= 3 ? styles.activeStep : ''}`}>
          <div className={styles.stepCircle}>3</div>
          <span>Course</span>
        </div>
      </div>

      <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>

        {step === 1 && (
          <div className={styles.formStep}>
            <h3>Personal Information</h3>
            <div className={styles.grid2}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input type="text" required placeholder="User" maxLength={50} pattern="^[a-zA-Z\s]+$" title="Only letters and spaces allowed" />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input type="text" required placeholder="Name" maxLength={50} pattern="^[a-zA-Z\s]+$" title="Only letters and spaces allowed" />
              </div>
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input type="email" required placeholder="user@example.com" />
              </div>
              <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <input type="tel" required placeholder="+91 1234567891" maxLength={15} pattern="^\+?[0-9\s\-]{10,15}$" title="Enter a valid 10 to 15 digit phone number" />
              </div>
              <div className={styles.inputGroup}>
                <label>Date of Birth</label>
                <input type="date" required min="1970-01-01" max="2008-12-31" title="Must be at least 17 years of age" />
              </div>
              <div className={styles.inputGroup}>
                <label>Gender</label>
                <select required defaultValue="">
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.formStep}>
            <h3>Academic Background</h3>
            <div className={styles.grid2}>
              <div className={styles.inputGroup}>
                <label>Highest Qualification</label>
                <select required defaultValue="">
                  <option value="" disabled>Select Qualification</option>
                  <option value="12th">10+2 / Higher Secondary</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="gnm">GNM Diploma</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Stream / Major</label>
                <input type="text" required placeholder="e.g. Science (PCB)" />
              </div>
              <div className={styles.inputGroup}>
                <label>Percentage / CGPA</label>
                <input type="text" required placeholder="e.g. 85%" />
              </div>
              <div className={styles.inputGroup}>
                <label>Passing Year</label>
                <input type="number" required placeholder="2023" min="2010" max="2026" />
              </div>
            </div>
            <div className={styles.inputGroup} style={{ marginTop: '1.5rem' }}>
              <label>School / College Name</label>
              <input type="text" required placeholder="Name of previous institution" />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.formStep}>
            <h3>Course Selection</h3>
            <div className={styles.grid1}>
              <div className={styles.inputGroup}>
                <label>Program Applying For</label>
                <select required defaultValue="">
                  <option value="" disabled>Select a Program</option>
                  <option value="gnm">General Nursing & Midwifery (GNM)</option>
                  <option value="bsc">Basic B.Sc. Nursing</option>
                  <option value="pb-bsc">Post Basic B.Sc. Nursing</option>
                  <option value="msc">M.Sc. Nursing</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>How did you hear about us?</label>
                <select required defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="social">Social Media</option>
                  <option value="friends">Friends / Family</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className={styles.noticeBox}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <p>By submitting this application, you confirm that all provided information is accurate. You will be required to submit physical copies of your documents during the admission process.</p>
            </div>
          </div>
        )}

        <div className={styles.formActions}>
          {step > 1 ? (
            <button type="button" onClick={handlePrev} className={styles.btnOutline}>Back</button>
          ) : <div></div>}

          {step < 3 ? (
            <button type="submit" className="btn-primary">Continue</button>
          ) : (
            <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
