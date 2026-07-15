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
      </div>
      
      {/* Abstract decorative elements */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
    </section>
  );
}
