import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { FaClock, FaUsers, FaGraduationCap, FaCheckCircle, FaFileAlt } from 'react-icons/fa';
import styles from '../CourseDetail.module.css';

export const metadata = {
  title: 'M.Sc. Nursing | Courses Offered',
  description: 'Master of Science in Nursing program details.',
};

export default function MScNursingPage() {
  return (
    <main>
      <PageHeader title="M.Sc. Nursing" breadcrumb="Courses / M.Sc. Nursing" />
      <section className={styles.container}>
        <div className={styles.gridContainer}>
          <div className="animate-on-load">
            <div className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <FaFileAlt style={{ color: 'var(--accent-color)' }} /> Program Overview
              </h2>
              <p className={styles.overviewText}>
                A specialized postgraduate program aimed at preparing advanced nursing practitioners, educators, and researchers. Students can specialize in Medical-Surgical, Pediatrics, OBG, Community Health, or Psychiatry.
              </p>
            </div>

            <div className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <FaCheckCircle style={{ color: 'var(--accent-color)' }} /> Eligibility Criteria
              </h2>
              <ul className={styles.eligibilityList}>
                <li className={styles.eligibilityItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>B.Sc. Nursing/B.Sc. Hons. Nursing/Post Basic B.Sc. Nursing with minimum of 55% aggregate marks.</span>
                </li>
                <li className={styles.eligibilityItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>Minimum one year of work experience after Basic B.Sc. Nursing.</span>
                </li>
                <li className={styles.eligibilityItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>Registered Nurse and Registered Midwife with any State Nursing Registration Council.</span>
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
                  <span className={styles.highlightValue}>25 Seats</span>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.iconBox}><FaGraduationCap /></div>
                <div className={styles.highlightText}>
                  <span className={styles.highlightLabel}>Specializations</span>
                  <span className={styles.highlightValue}>5 Disciplines</span>
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
