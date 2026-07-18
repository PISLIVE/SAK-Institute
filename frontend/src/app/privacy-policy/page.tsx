import React from 'react';
import Link from 'next/link';
import styles from './Privacy.module.css';

export const metadata = {
  title: 'Privacy Policy | SAK College of Nursing',
  description: 'Privacy Policy for SAK College of Nursing.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.documentContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </header>

        <div className={styles.content}>
          <p>
            At SAK College of Nursing, we are committed to protecting the privacy and security of our students, staff, and visitors. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, contact details, educational background, and payment information when you apply for courses, fill out enquiry forms, or interact with our website.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>The information we collect is used to:</p>
          <ul>
            <li>Process your admission and enrollment applications.</li>
            <li>Communicate with you regarding course updates, events, and announcements.</li>
            <li>Improve our website functionality and user experience.</li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>
            We implement robust security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet is 100% secure.
          </p>

          <h2>4. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of those external sites. We encourage you to read their privacy policies.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, correct, or request the deletion of your personal data. If you have any concerns regarding your privacy, please contact our administration office.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> info@sakcollege.edu
            <br />
            <strong>Phone:</strong> +91 8884330808
          </p>
          
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link href="/" style={{ color: 'var(--primary-color)', textDecoration: 'underline', fontFamily: 'Inter, sans-serif' }}>
              &larr; Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
