import React from 'react';
import Link from 'next/link';
import styles from '../privacy-policy/Privacy.module.css'; // Reusing the same formal document aesthetic

export const metadata = {
  title: 'Terms of Service | SAK College of Nursing',
  description: 'Terms of Service and Conditions for SAK College of Nursing.',
};

export default function TermsOfServicePage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.documentContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </header>

        <div className={styles.content}>
          <p>
            Welcome to the SAK College of Nursing website. By accessing or using our website, you agree to comply with and be bound by the following Terms of Service. Please review them carefully.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By using this website, you accept these Terms of Service in full. If you disagree with these terms or any part of these terms, you must not use our website.
          </p>

          <h2>2. Use of Website Content</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of SAK College of Nursing unless otherwise stated. You may view and print pages for personal, non-commercial use only.
          </p>

          <h2>3. Admission and Applications</h2>
          <p>
            Submitting an online application or enquiry does not guarantee admission. All admissions are subject to the fulfillment of eligibility criteria, document verification, and availability of seats.
          </p>

          <h2>4. User Conduct</h2>
          <p>You agree not to use our website to:</p>
          <ul>
            <li>Transmit any malicious code, viruses, or harmful data.</li>
            <li>Attempt to gain unauthorized access to our servers or network.</li>
            <li>Submit false or misleading information in forms or applications.</li>
          </ul>

          <h2>5. Limitation of Liability</h2>
          <p>
            SAK College of Nursing will not be liable for any direct, indirect, incidental, or consequential damages arising out of or in connection with the use of this website or the information contained within it.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Any changes will be updated on this page, and your continued use of the website signifies your acceptance of the revised terms.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            For any queries regarding these Terms of Service, please contact us at:
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
