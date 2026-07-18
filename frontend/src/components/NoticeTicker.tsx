"use client";

import Link from 'next/link';
import styles from './NoticeTicker.module.css';

export default function NoticeTicker() {
  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.tickerLabel}>LATEST UPDATES</div>
      <div className={styles.tickerContainer}>
        <div className={styles.tickerContent}>
          <div className={styles.tickerItem}>
            📢 Admissions Open for B.Sc Nursing 2026-2027 Academic Year! <Link href="/admission/online-application" target="_blank" rel="noopener noreferrer" className={styles.tickerLink}>Apply Now</Link>
          </div>
          <span className={styles.separator}>|</span>
          <div className={styles.tickerItem}>
            🏆 SAK College ranked #1 in Assam for Clinical Placements 2025.
          </div>
          <span className={styles.separator}>|</span>
          <div className={styles.tickerItem}>
            📅 Last date for GNM Applications is August 15th. Don't miss out!
          </div>
          
          {/* Duplicate for seamless looping */}
          <span className={styles.separator}>|</span>
          <div className={styles.tickerItem}>
            📢 Admissions Open for B.Sc Nursing 2026-2027 Academic Year! <Link href="/admission/online-application" target="_blank" rel="noopener noreferrer" className={styles.tickerLink}>Apply Now</Link>
          </div>
          <span className={styles.separator}>|</span>
          <div className={styles.tickerItem}>
            🏆 SAK College ranked #1 in Assam for Clinical Placements 2025.
          </div>
          <span className={styles.separator}>|</span>
          <div className={styles.tickerItem}>
            📅 Last date for GNM Applications is August 15th. Don't miss out!
          </div>
        </div>
      </div>
    </div>
  );
}
