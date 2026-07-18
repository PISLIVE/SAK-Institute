"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './QuickConnect.module.css';

export default function QuickConnect() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`${styles.quickConnectContainer} ${isOpen ? styles.open : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.expandMenu}>
        <a href="tel:+918884330808" className={styles.actionItem} title="Call Us">
          <div className={styles.iconWrapper}>📞</div>
          <span className={styles.label}>Call Us</span>
        </a>
        <a href="https://wa.me/918884330808" target="_blank" rel="noopener noreferrer" className={styles.actionItem} title="WhatsApp">
          <div className={styles.iconWrapper}>💬</div>
          <span className={styles.label}>WhatsApp</span>
        </a>
        <Link href="/admission/online-application" target="_blank" rel="noopener noreferrer" className={styles.actionItem} title="Apply Now">
          <div className={styles.iconWrapper}>📝</div>
          <span className={styles.label}>Apply Now</span>
        </Link>
      </div>

      <div className={styles.mainButton}>
        <div className={styles.pulseRing}></div>
        <svg 
          className={styles.chatIcon} 
          width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          {isOpen ? (
            <line x1="18" y1="6" x2="6" y2="18"></line>
          ) : (
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          )}
          {isOpen && <line x1="6" y1="6" x2="18" y2="18"></line>}
        </svg>
      </div>
    </div>
  );
}
