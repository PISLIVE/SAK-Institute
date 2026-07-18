"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './NoticeTicker.module.css';

export default function NoticeTicker() {
  const [notices, setNotices] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/notices')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setNotices(data.filter(n => n.isActive));
        }
      })
      .catch((err) => console.error('Failed to fetch notices:', err));
  }, []);

  if (notices.length === 0) return null;

  const renderNotices = () => (
    <>
      {notices.map((notice, index) => (
        <React.Fragment key={notice.id + index}>
          <div className={styles.tickerItem}>
            <span dangerouslySetInnerHTML={{ __html: notice.content }} />{' '}
            {notice.link && (
              <Link href={notice.link} target="_blank" rel="noopener noreferrer" className={styles.tickerLink}>
                Learn More
              </Link>
            )}
          </div>
          <span className={styles.separator}>|</span>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.tickerLabel}>LATEST UPDATES</div>
      <div className={styles.tickerContainer}>
        <div className={styles.tickerContent}>
          {renderNotices()}
          {/* Duplicate for seamless looping */}
          {renderNotices()}
        </div>
      </div>
    </div>
  );
}
