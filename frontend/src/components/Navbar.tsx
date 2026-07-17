"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Next.js App Router pattern for closing menus on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setMobileMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
          <div className={styles.topLinks}>
            <Link href="/">HOME</Link>
            <span className={styles.divider}>|</span>
            <Link href="/contact">CONTACT US</Link>
            <span className={styles.divider}>|</span>
            <Link href="/admission/apply" className={styles.applyBtnTop}>ENQUIRE NOW</Link>
          </div>
        </div>
      </div>

      {/* Middle Header */}
      <div className={styles.middleHeader}>
        <div className={styles.middleContainer}>
          <Link href="/" className={styles.logoArea}>
            <Image
              src="/sak-logo.png"
              alt="SAK Group of Institutions Logo"
              width={70}
              height={80}
              className={styles.logoImg}
              style={{ objectFit: 'contain' }}
            />
            <div className={styles.brandText}>
              <h1 className={styles.collegeName}>SAK Group of Institute</h1>
              <p className={styles.collegeSubName}>Excellence in Education</p>
            </div>          </Link>

          <div className={styles.contactInfo}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>EMAIL</span>
              <a href="mailto:info@sakcollege.edu" className={styles.infoValue}>info@sakcollege.edu</a>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>CALL US</span>
              <a href="tel:+918884330808" className={styles.infoValue}>+91 8884330808</a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${styles.mainNav} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.navContainer}>
          <ul className={styles.navLinks}>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT US</Link></li>
            {/* Dropdown Menu for Courses */}
            <li className={`${styles.dropdown} ${activeDropdown === 'courses' ? styles.dropdownActive : ''}`}>
              <span className={styles.dropdownTrigger} onClick={() => toggleDropdown('courses')}>
                COURSES OFFERED
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.chevron}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/courses/gnm">GNM (General Nursing)</Link></li>
                <li><Link href="/courses/bsc">B.Sc. Nursing</Link></li>
                <li><Link href="/courses/post-basic">Post Basic B.Sc. Nursing</Link></li>
                <li><Link href="/courses/msc">M.Sc. Nursing</Link></li>
              </ul>
            </li>

            {/* Dropdown Menu for Admission */}
            <li className={`${styles.dropdown} ${activeDropdown === 'admission' ? styles.dropdownActive : ''}`}>
              <span className={styles.dropdownTrigger} onClick={() => toggleDropdown('admission')}>
                ADMISSION
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.chevron}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/admission/procedure">Admission Procedure</Link></li>
                <li><Link href="/admission/merit-list">Merit List for Admission</Link></li>
                <li><Link href="/admission/fees">Fees Structure</Link></li>
                <li><Link href="/admission/apply">Enquire Now</Link></li>
                <li><Link href="/admission/prospectus">Prospectus</Link></li>
                <li><Link href="/admission/bank-details">Bank Details</Link></li>
              </ul>
            </li>

            {/* Dropdown Menu for Department */}
            <li className={`${styles.dropdown} ${activeDropdown === 'department' ? styles.dropdownActive : ''}`}>
              <span className={styles.dropdownTrigger} onClick={() => toggleDropdown('department')}>
                DEPARTMENT
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.chevron}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/department/medical-surgical">Medical Surgical Nursing</Link></li>
                <li><Link href="/department/community-health">Community Health Nursing</Link></li>
                <li><Link href="/department/pediatric">Pediatric Nursing</Link></li>
                <li><Link href="/department/psychiatric">Psychiatric Nursing</Link></li>
                <li><Link href="/department/obg">OBG Nursing</Link></li>
              </ul>
            </li>
            {/* Dropdown Menu for Teaching Staff */}
            <li className={`${styles.dropdown} ${activeDropdown === 'staff' ? styles.dropdownActive : ''}`}>
              <span className={styles.dropdownTrigger} onClick={() => toggleDropdown('staff')}>
                TEACHING STAFF
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.chevron}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/staff/principal">Principal&apos;s Profile</Link></li>
                <li><Link href="/staff/faculty">Core Faculty</Link></li>
                <li><Link href="/staff/guest-lecturers">Guest Lecturers</Link></li>
                <li><Link href="/staff/administration">Administration</Link></li>
              </ul>
            </li>
            {/* Dropdown Menu for Facilities */}
            <li className={`${styles.dropdown} ${activeDropdown === 'facilities' ? styles.dropdownActive : ''}`}>
              <span className={styles.dropdownTrigger} onClick={() => toggleDropdown('facilities')}>
                FACILITIES
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.chevron}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/facilities/library">Library</Link></li>
                <li><Link href="/facilities/laboratories">Laboratories</Link></li>
                <li><Link href="/facilities/hostel">Hostel & Mess</Link></li>
                <li><Link href="/facilities/transport">Transport</Link></li>
                <li><Link href="/facilities/clinical-training">Clinical Training</Link></li>
              </ul>
            </li>

            {/* Dropdown Menu for Rules */}
            <li className={`${styles.dropdown} ${activeDropdown === 'rules' ? styles.dropdownActive : ''}`}>
              <span className={styles.dropdownTrigger} onClick={() => toggleDropdown('rules')}>
                RULES
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.chevron}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/rules/code-of-conduct">Code of Conduct</Link></li>
                <li><Link href="/rules/anti-ragging">Anti-Ragging Policy</Link></li>
                <li><Link href="/rules/hostel-rules">Hostel Rules</Link></li>
              </ul>
            </li>
          </ul>
          
          {/* Mobile Only: Contact & Socials */}
          <div className={styles.mobileContactAndSocials}>
            <div className={styles.mobileContact}>
              <a href="mailto:info@sakcollege.edu">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                info@sakcollege.edu
              </a>
              <a href="tel:+918884330808">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +91 8884330808
              </a>
            </div>
            <div className={styles.mobileSocials}>
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
        </div>
      </nav>
    </header>
  );
}
