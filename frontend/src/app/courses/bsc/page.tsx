import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { FaClock, FaUsers, FaGraduationCap, FaCheckCircle, FaFileAlt } from 'react-icons/fa';
import styles from '../CourseDetail.module.css';

export const metadata = {
  title: 'B.Sc. Nursing | Courses Offered',
  description: 'Bachelor of Science in Nursing program details.',
};

export default function BScNursingPage() {
  return (
    <main>
      <PageHeader title="B.Sc. Nursing" breadcrumb="Courses / B.Sc. Nursing" />
      <section className={styles.container}>
        <div className={styles.gridContainer}>
          <div className="animate-on-load">
            <div className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <FaFileAlt style={{ color: 'var(--accent-color)' }} /> Program Overview
              </h2>
              <p className={styles.overviewText}>
                The B.Sc. Nursing program prepares students to become competent professional nurses who can provide comprehensive care in preventive, promotive, curative, and rehabilitative health sectors.
              </p>
            </div>

            <div className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <FaCheckCircle style={{ color: 'var(--accent-color)' }} /> Eligibility Criteria
              </h2>
              <ul className={styles.eligibilityList}>
                <li className={styles.eligibilityItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>10+2 class passed with Science (PCB) & English Core/English Elective with aggregate of 45% marks.</span>
                </li>
                <li className={styles.eligibilityItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>Students appearing in 10+2 examination in Science conducted by National Institute of Open School with 45% marks.</span>
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
                  <span className={styles.highlightValue}>4 Years (8 Semesters)</span>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.iconBox}><FaUsers /></div>
                <div className={styles.highlightText}>
                  <span className={styles.highlightLabel}>Intake Capacity</span>
                  <span className={styles.highlightValue}>100 Seats</span>
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
