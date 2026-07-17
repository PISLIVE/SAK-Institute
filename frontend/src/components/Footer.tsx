"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTopWave}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
        </svg>
      </div>
      <div className={`container ${styles.footerContainer}`}>
        
        {/* Column 1: Brand & Socials */}
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logoLink}>
            <Image 
              src="/sak-logo.png" 
              alt="SAK Group of Institutions Logo" 
              width={70} 
              height={80} 
              className={styles.logoImg}
              style={{ objectFit: 'contain' }}
            />
            <div className={styles.brandText}>
              <h2 className={styles.collegeName}>SAK College</h2>
              <p className={styles.collegeSubName}>of Nursing</p>
            </div>
          </Link>
          <p className={styles.description}>
            Empowering the next generation of healthcare leaders through world-class nursing education, cutting-edge clinical training, and a passion for caring.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/courses">Courses Offered</Link></li>
            <li><Link href="/facilities">Our Facilities</Link></li>
            <li><Link href="/department/medical-surgical">Departments</Link></li>
            <li><Link href="/staff/faculty">Core Faculty</Link></li>
          </ul>
        </div>

        {/* Column 3: Admissions & Policy */}
        <div className={styles.footerLinks}>
          <h3>Admissions</h3>
          <ul>
            <li><Link href="/admission/procedure">Admission Procedure</Link></li>
            <li><Link href="/admission/fees">Fees Structure</Link></li>
            <li><Link href="/admission/online-application">Apply Online</Link></li>
            <li><Link href="/rules/code-of-conduct">Code of Conduct</Link></li>
            <li><Link href="/rules/anti-ragging">Anti-Ragging</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact & Newsletter */}
        <div className={styles.footerContact}>
          <h3>Contact & Updates</h3>
          <ul>
            <li>
              <span className={styles.contactIcon}>📍</span>
              <span>SAK College Campus, Guwahati, Assam</span>
            </li>
            <li>
              <span className={styles.contactIcon}>📞</span>
              <a href="tel:+918884330808">+91 8884330808</a>
            </li>
            <li>
              <span className={styles.contactIcon}>✉️</span>
              <a href="mailto:info@sakcollege.edu">info@sakcollege.edu</a>
            </li>
          </ul>
          
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <p>Subscribe to our newsletter</p>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email address" required />
              <button type="submit">→</button>
            </div>
          </form>
        </div>

      </div>
      
      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; {new Date().getFullYear()} SAK Group of Institutions. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/rules">Privacy Policy</Link>
            <Link href="/rules">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
