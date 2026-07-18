import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { FaClock, FaUsers, FaGraduationCap, FaCheckCircle, FaFileAlt } from 'react-icons/fa';
import styles from '../CourseDetail.module.css';

export const metadata = {
  title: 'Post Basic B.Sc. Nursing | Courses Offered',
  description: 'Post Basic B.Sc. Nursing program details.',
};

export default function PostBasicBScNursingPage() {
  return (
    <main>
      <PageHeader title="Post Basic B.Sc. Nursing" breadcrumb="Courses / Post Basic B.Sc." />
      <section className={styles.container}>
        <div className={styles.gridContainer}>
          <div className="animate-on-load">
            <div className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <FaFileAlt style={{ color: 'var(--accent-color)' }} /> Program Overview
              </h2>
              <p className={styles.overviewText}>
                Designed for registered nurses holding a GNM diploma, this program upgrades their qualifications to a bachelor's degree, expanding their clinical expertise and career opportunities.
              </p>
            </div>

            <div className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <FaCheckCircle style={{ color: 'var(--accent-color)' }} /> Eligibility Criteria
              </h2>
              <ul className={styles.eligibilityList}>
                <li className={styles.eligibilityItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>Passed Higher Secondary/Senior Secondary/Intermediate/10+2 or an equivalent examination.</span>
                </li>
                <li className={styles.eligibilityItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>Obtained a certificate in General Nursing and Midwifery (GNM) and registered as R.N.R.M. with the State Nurses Registration Council.</span>
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
                  <span className={styles.highlightValue}>2 Years</span>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.iconBox}><FaUsers /></div>
                <div className={styles.highlightText}>
                  <span className={styles.highlightLabel}>Intake Capacity</span>
                  <span className={styles.highlightValue}>40 Seats</span>
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
