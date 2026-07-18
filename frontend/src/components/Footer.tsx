"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTopBorder}></div>
      <div className={styles.footerContainer}>

        {/* Column 1: Brand & Socials */}
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/sak-logo.png"
              alt="SAK Group of Institutions Logo"
              width={65}
              height={75}
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
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
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
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>SAK College Campus, Guwahati, Assam</span>
            </li>
            <li>
              <FaPhoneAlt className={styles.contactIcon} />
              <a href="tel:+918884330808">+91 8884330808</a>
            </li>
            <li>
              <FaEnvelope className={styles.contactIcon} />
              <a href="mailto:info@sakcollege.edu">info@sakcollege.edu</a>
            </li>
          </ul>

          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <p>Subscribe to our newsletter</p>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email address" required />
              <button type="submit" aria-label="Subscribe">
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <div className={styles.bottomContainer}>
          <p>&copy; {new Date().getFullYear()} SAK Group of Institutions. All rights reserved.</p>
          <p className={styles.creditText}>
            Designed and Developed by <a href="https://novi-q-technologies.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>NoviQ Technologies</a>
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
            <Link href="/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
