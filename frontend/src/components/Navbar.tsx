import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
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
            <Link href="/admission/apply" className={styles.applyBtnTop}>APPLY ONLINE</Link>
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
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.mainNav}>
        <div className={styles.navContainer}>
          <ul className={styles.navLinks}>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT US</Link></li>
            {/* Dropdown Menu for Courses */}
            <li className={styles.dropdown}>
              <span className={styles.dropdownTrigger}>
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
            <li className={styles.dropdown}>
              <span className={styles.dropdownTrigger}>
                ADMISSION
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.chevron}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/admission/procedure">Admission Procedure</Link></li>
                <li><Link href="/admission/merit-list">Merit List for Admission</Link></li>
                <li><Link href="/admission/fees">Fees Structure</Link></li>
                <li><Link href="/admission/apply">Apply Online</Link></li>
                <li><Link href="/admission/prospectus">Prospectus</Link></li>
                <li><Link href="/admission/bank-details">Bank Details</Link></li>
              </ul>
            </li>

            {/* Dropdown Menu for Department */}
            <li className={styles.dropdown}>
              <span className={styles.dropdownTrigger}>
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
            <li className={styles.dropdown}>
              <span className={styles.dropdownTrigger}>
                TEACHING STAFF
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.chevron}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/staff/principal">Principal's Profile</Link></li>
                <li><Link href="/staff/faculty">Core Faculty</Link></li>
                <li><Link href="/staff/guest-lecturers">Guest Lecturers</Link></li>
                <li><Link href="/staff/administration">Administration</Link></li>
              </ul>
            </li>
            {/* Dropdown Menu for Facilities */}
            <li className={styles.dropdown}>
              <span className={styles.dropdownTrigger}>
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
            <li className={styles.dropdown}>
              <span className={styles.dropdownTrigger}>
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
        </div>
      </nav>
    </header>
  );
}
