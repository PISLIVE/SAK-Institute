"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './SplashScreen.module.css';

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // Start fading out after 1.8s to allow longer animations to finish
    const fadeTimer = setTimeout(() => {
      setAnimateOut(true);
    }, 1800);

    // Completely remove from DOM after 2.6s
    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className={`${styles.splashScreen} ${animateOut ? styles.fadeOut : ''}`}>
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>
      
      <div className={styles.glassContainer}>
        <div className={styles.logoContainer}>
          <Image 
            src="/sak-logo.png" 
            alt="SAK College Logo" 
            width={120} 
            height={140} 
            className={styles.logo}
            style={{ objectFit: 'contain' }}
            priority
          />
          <div className={styles.pulseRing}></div>
          <div className={styles.pulseRing2}></div>
        </div>
        
        <h2 className={styles.brandName}>
          <span className={styles.textGradient}>SAK Group of Institutions</span>
        </h2>
        
        <div className={styles.loadingWrapper}>
          <div className={styles.loadingBarContainer}>
            <div className={styles.loadingBar}>
              <div className={styles.loadingGlow}></div>
            </div>
          </div>
          <p className={styles.loadingText}>Initializing...</p>
        </div>
      </div>
    </div>
  );
}
