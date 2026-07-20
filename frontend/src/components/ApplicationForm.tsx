"use client";

import { useState, useRef } from 'react';
import styles from './ApplicationForm.module.css';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { toast } from 'react-hot-toast';

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [appId, setAppId] = useState<string>('');
  const receiptRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address2: '', // honeypot
    dob: '',
    gender: '',
    district: '',
    state: '',
    qualification: '',
    stream: '',
    percentage: '',
    passingYear: '',
    institution: '',
    course: '',
    source: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (response.ok) {
        setAppId(data.applicationId);
        setStatus('success');
        toast.success('Application submitted successfully!');
      } else {
        toast.error(data.error || 'Failed to submit application. Please try again.');
        setStatus('idle');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again later.');
      setStatus('idle');
    }
  };

  const downloadReceipt = async () => {
    if (!receiptRef.current) return;
    
    try {
      const canvas = await html2canvas(receiptRef.current, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Scale height proportionally
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`SAK_Application_${appId}.pdf`);
    } catch (error) {
      console.error('Failed to generate PDF', error);
      toast.error('Could not download receipt. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h2>Application Submitted Successfully!</h2>
        <p>Your application ID is <strong>{appId}</strong>. We have sent a confirmation email to you. Our admissions team will review your application and contact you soon.</p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
          <button onClick={downloadReceipt} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download Receipt
          </button>
          <button onClick={() => { setStatus('idle'); setStep(1); setFormData({...formData, course: ''}); }} className={styles.btnOutline}>Submit Another</button>
        </div>

        {/* Hidden Receipt for PDF Generation */}
        <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
          <div ref={receiptRef} style={{ width: '800px', padding: '40px', background: '#ffffff', color: '#1f2937', fontFamily: 'Arial, sans-serif' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #0d9488', paddingBottom: '20px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img src="/sak-logo.png" style={{ width: '70px', height: '80px', objectFit: 'contain' }} alt="SAK Logo" />
                <div>
                  <h1 style={{ color: '#0d9488', margin: '0 0 5px 0', fontSize: '28px', textTransform: 'uppercase', letterSpacing: '1px' }}>SAK College of Nursing</h1>
                  <p style={{ margin: '0', color: '#4b5563', fontSize: '14px' }}>Banglore, India | Approved by INC & Srimanta Sankaradeva University</p>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <h2 style={{ margin: '0 0 8px 0', color: '#1f2937', fontSize: '22px' }}>Application Receipt</h2>
                <div style={{ display: 'inline-block', background: '#f3f4f6', padding: '8px 15px', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
                  <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: '#6b7280', textTransform: 'uppercase' }}>Application ID</p>
                  <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px', color: '#0d9488' }}>{appId}</p>
                </div>
              </div>
            </div>
            
            {/* Main Details Section */}
            <h3 style={{ fontSize: '18px', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px', marginBottom: '15px' }}>1. Program Information</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px', fontSize: '15px' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '12px 15px', background: '#f8fafc', border: '1px solid #e2e8f0', width: '30%', fontWeight: 'bold', color: '#475569' }}>Applied Course</td>
                  <td style={{ padding: '12px 15px', border: '1px solid #e2e8f0', fontWeight: 'bold', color: '#0d9488', fontSize: '16px' }}>{formData.course.toUpperCase()}</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 15px', background: '#f8fafc', border: '1px solid #e2e8f0', fontWeight: 'bold', color: '#475569' }}>Application Date</td>
                  <td style={{ padding: '12px 15px', border: '1px solid #e2e8f0' }}>{new Date().toLocaleString()}</td>
                </tr>
              </tbody>
            </table>

            <h3 style={{ fontSize: '18px', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px', marginBottom: '15px' }}>2. Personal Details</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px', fontSize: '15px' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '10px 15px', background: '#f8fafc', border: '1px solid #e2e8f0', width: '25%', fontWeight: 'bold', color: '#475569' }}>Applicant Name</td>
                  <td style={{ padding: '10px 15px', border: '1px solid #e2e8f0', width: '25%' }}>{formData.firstName} {formData.lastName}</td>
                  <td style={{ padding: '10px 15px', background: '#f8fafc', border: '1px solid #e2e8f0', width: '25%', fontWeight: 'bold', color: '#475569' }}>Gender</td>
                  <td style={{ padding: '10px 15px', border: '1px solid #e2e8f0', width: '25%' }}>{formData.gender}</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 15px', background: '#f8fafc', border: '1px solid #e2e8f0', fontWeight: 'bold', color: '#475569' }}>Date of Birth</td>
                  <td style={{ padding: '10px 15px', border: '1px solid #e2e8f0' }}>{formData.dob}</td>
                  <td style={{ padding: '10px 15px', background: '#f8fafc', border: '1px solid #e2e8f0', fontWeight: 'bold', color: '#475569' }}>Phone Number</td>
                  <td style={{ padding: '10px 15px', border: '1px solid #e2e8f0' }}>{formData.phone}</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 15px', background: '#f8fafc', border: '1px solid #e2e8f0', fontWeight: 'bold', color: '#475569' }}>Email Address</td>
                  <td style={{ padding: '10px 15px', border: '1px solid #e2e8f0' }} colSpan={3}>{formData.email}</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 15px', background: '#f8fafc', border: '1px solid #e2e8f0', width: '25%', fontWeight: 'bold', color: '#475569' }}>District</td>
                  <td style={{ padding: '10px 15px', border: '1px solid #e2e8f0', width: '25%' }}>{formData.district}</td>
                  <td style={{ padding: '10px 15px', background: '#f8fafc', border: '1px solid #e2e8f0', width: '25%', fontWeight: 'bold', color: '#475569' }}>State</td>
                  <td style={{ padding: '10px 15px', border: '1px solid #e2e8f0', width: '25%' }}>{formData.state}</td>
                </tr>
              </tbody>
            </table>

            <h3 style={{ fontSize: '18px', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px', marginBottom: '15px' }}>3. Academic Qualifications</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px', fontSize: '15px' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '10px 15px', background: '#f8fafc', border: '1px solid #e2e8f0', width: '25%', fontWeight: 'bold', color: '#475569' }}>Highest Qualification</td>
                  <td style={{ padding: '10px 15px', border: '1px solid #e2e8f0', width: '25%' }}>{formData.qualification}</td>
                  <td style={{ padding: '10px 15px', background: '#f8fafc', border: '1px solid #e2e8f0', width: '25%', fontWeight: 'bold', color: '#475569' }}>Stream / Major</td>
                  <td style={{ padding: '10px 15px', border: '1px solid #e2e8f0', width: '25%' }}>{formData.stream}</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 15px', background: '#f8fafc', border: '1px solid #e2e8f0', fontWeight: 'bold', color: '#475569' }}>Institution Attended</td>
                  <td style={{ padding: '10px 15px', border: '1px solid #e2e8f0' }} colSpan={3}>{formData.institution}</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 15px', background: '#f8fafc', border: '1px solid #e2e8f0', fontWeight: 'bold', color: '#475569' }}>Passing Year</td>
                  <td style={{ padding: '10px 15px', border: '1px solid #e2e8f0' }}>{formData.passingYear}</td>
                  <td style={{ padding: '10px 15px', background: '#f8fafc', border: '1px solid #e2e8f0', fontWeight: 'bold', color: '#475569' }}>Percentage / Grade</td>
                  <td style={{ padding: '10px 15px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>{formData.percentage}%</td>
                </tr>
              </tbody>
            </table>
            
            {/* Footer */}
            <div style={{ marginTop: '50px', paddingTop: '20px', borderTop: '2px dashed #cbd5e1', color: '#64748b', fontSize: '13px', lineHeight: '1.5' }}>
              <p style={{ margin: '0 0 10px 0' }}><strong>Declaration:</strong> I hereby declare that the information provided above is true and correct to the best of my knowledge.</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginTop: '40px' }}>
                <div>
                  <p style={{ margin: 0 }}>________________________</p>
                  <p style={{ margin: '5px 0 0 0', fontWeight: 'bold' }}>Admissions Office</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ margin: 0, fontStyle: 'italic', color: '#94a3b8' }}>This is a computer-generated receipt<br/>and does not require a physical signature.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="User" maxLength={50} pattern="^[a-zA-Z\s]+$" title="Only letters and spaces allowed" />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Name" maxLength={50} pattern="^[a-zA-Z\s]+$" title="Only letters and spaces allowed" />
              </div>
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="user@example.com" />
              </div>
              <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 1234567891" maxLength={15} pattern="^\+?[0-9\s\-]{10,15}$" title="Enter a valid 10 to 15 digit phone number" />
              </div>
              <div className={styles.inputGroup}>
                <label>Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required min="1970-01-01" max="2008-12-31" title="Must be at least 17 years of age" />
              </div>
              <div className={styles.inputGroup}>
                <label>Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>District</label>
                <input type="text" name="district" value={formData.district} onChange={handleChange} required placeholder="E.g., Kamrup" maxLength={50} />
              </div>
              <div className={styles.inputGroup}>
                <label>State</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} required placeholder="E.g., Assam" maxLength={50} />
              </div>
            </div>
            
            {/* Honeypot field - invisible to users, bots will fill it */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label>Address 2 (Leave Blank)</label>
              <input type="text" name="address2" value={formData.address2} onChange={handleChange} tabIndex={-1} autoComplete="off" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.formStep}>
            <h3>Academic Background</h3>
            <div className={styles.grid2}>
              <div className={styles.inputGroup}>
                <label>Highest Qualification</label>
                <select name="qualification" value={formData.qualification} onChange={handleChange} required>
                  <option value="" disabled>Select Qualification</option>
                  <option value="12th">10+2 / Higher Secondary</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="gnm">GNM Diploma</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Stream / Major</label>
                <input type="text" name="stream" value={formData.stream} onChange={handleChange} required placeholder="e.g. Science (PCB)" />
              </div>
              <div className={styles.inputGroup}>
                <label>Percentage / CGPA</label>
                <input type="text" name="percentage" value={formData.percentage} onChange={handleChange} required placeholder="e.g. 85%" />
              </div>
              <div className={styles.inputGroup}>
                <label>Passing Year</label>
                <input type="number" name="passingYear" value={formData.passingYear} onChange={handleChange} required placeholder="2023" min="2010" max="2026" />
              </div>
            </div>
            <div className={styles.inputGroup} style={{ marginTop: '1.5rem' }}>
              <label>School / College Name</label>
              <input type="text" name="institution" value={formData.institution} onChange={handleChange} required placeholder="Name of previous institution" />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.formStep}>
            <h3>Course Selection</h3>
            <div className={styles.grid1}>
              <div className={styles.inputGroup}>
                <label>Program Applying For</label>
                <select name="course" value={formData.course} onChange={handleChange} required>
                  <option value="" disabled>Select a Program</option>
                  <option value="gnm">General Nursing & Midwifery (GNM)</option>
                  <option value="bsc">Basic B.Sc. Nursing</option>
                  <option value="pb-bsc">Post Basic B.Sc. Nursing</option>
                  <option value="msc">M.Sc. Nursing</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>How did you hear about us?</label>
                <select name="source" value={formData.source} onChange={handleChange} required>
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
