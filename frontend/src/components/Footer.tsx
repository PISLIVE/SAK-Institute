import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logoLink}>
            <Image 
              src="/sak-logo.png" 
              alt="SAK Group of Institutions Logo" 
              width={80} 
              height={92} 
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
        </div>

        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/courses">Courses Offered</Link></li>
            <li><Link href="/admission">Admissions</Link></li>
            <li><Link href="/facilities">Facilities</Link></li>
            <li><Link href="/rules">Rules & Regulations</Link></li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h3>Contact Us</h3>
          <ul>
            <li>📍 SAK College Campus, Guwahati, Assam</li>
            <li>📞 +91 8884330808</li>
            <li>✉️ info@sakcollege.edu</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SAK Group of Institutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
