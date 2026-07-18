import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={`container ${styles.heroContent}`}>
        <h1 className={styles.title}>
          Shape Your Future at <span className="gradient-text">SAK College</span>
        </h1>
        <p className={styles.subtitle}>
          Experience world-class education, cutting-edge facilities, and a vibrant campus life designed to empower the next generation of leaders.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="/courses" className="btn-primary">Explore Courses</Link>
          <Link href="/about" className={styles.btnSecondary}>Discover SAK</Link>
        </div>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <Link href="/admission/online-application" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'var(--secondary-color)', boxShadow: '0 4px 15px rgba(2, 132, 199, 0.4)', padding: '0.85rem 2.5rem', fontSize: '1.1rem' }}>Apply Now</Link>
        </div>
      </div>
      
      {/* Abstract decorative elements */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
    </section>
  );
}
