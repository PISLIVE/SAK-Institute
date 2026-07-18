import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { FaClock, FaUsers, FaGraduationCap, FaCheckCircle, FaFileAlt } from 'react-icons/fa';
import styles from '../CourseDetail.module.css';

export const metadata = {
  title: 'GNM | Courses Offered',
  description: 'General Nursing and Midwifery (GNM) program details.',
};

export default function GNMPage() {
  return (
    <main>
      <PageHeader title="General Nursing & Midwifery (GNM)" breadcrumb="Courses / GNM" />
      <section className={styles.container}>
        <div className={styles.gridContainer}>
          <div className="animate-on-load">
            <div className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <FaFileAlt style={{ color: 'var(--accent-color)' }} /> Program Overview
              </h2>
              <p className={styles.overviewText}>
                The GNM program is designed to prepare general nurses who will function as members of the health team beginning with consultancies for first-level positions in both hospitals and community health environments.
              </p>
            </div>

            <div className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <FaCheckCircle style={{ color: 'var(--accent-color)' }} /> Eligibility Criteria
              </h2>
              <ul className={styles.eligibilityList}>
                <li className={styles.eligibilityItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>10+2 with English and must have obtained a minimum of 40% at the qualifying examination.</span>
                </li>
                <li className={styles.eligibilityItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>Candidates are also eligible from State Open School recognized by State Government and National Institute of Open School (NIOS).</span>
                </li>
                <li className={styles.eligibilityItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>Minimum age for admission will be 17 years.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="animate-on-load" style={{ animationDelay: '0.2s' }}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Course Highlights</h3>
              
              <div className={styles.highlightItem}>
                <div className={styles.iconBox}><FaClock /></div>
                <div className={styles.highlightText}>
                  <span className={styles.highlightLabel}>Duration</span>
                  <span className={styles.highlightValue}>3 Years</span>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.iconBox}><FaUsers /></div>
                <div className={styles.highlightText}>
                  <span className={styles.highlightLabel}>Intake Capacity</span>
                  <span className={styles.highlightValue}>60 Seats</span>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.iconBox}><FaGraduationCap /></div>
                <div className={styles.highlightText}>
                  <span className={styles.highlightLabel}>Mode</span>
                  <span className={styles.highlightValue}>Full-Time, On-Campus</span>
                </div>
              </div>

              <Link href="/admission/online-application" target="_blank" rel="noopener noreferrer" className={styles.applyButton}>
                Apply for this Course
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
