import PageHeader from '@/components/PageHeader';
import styles from './AntiRagging.module.css';
import { FaShieldAlt, FaGavel, FaUsers } from 'react-icons/fa';

export const metadata = {
  title: 'Anti-Ragging Policy | Rules',
  description: 'Anti-ragging policy at SAK College of Nursing.',
};

export default function AntiRaggingPage() {
  return (
    <main>
      <PageHeader title="Anti-Ragging Policy" breadcrumb="Rules / Anti-Ragging" />
      <section className={styles.container}>
        <div className={styles.policyCard}>
          <div className={styles.topBorder}></div>
          
          <div className={styles.headerRow}>
            <div className={styles.iconBox}>
              <FaShieldAlt />
            </div>
            <div>
              <h2 className={styles.title}>Zero Tolerance Policy</h2>
              <p className={styles.subtitle}>Ragging is a criminal offense</p>
            </div>
          </div>
          
          <p className={styles.description}>
            SAK College of Nursing maintains a strict zero-tolerance policy towards ragging in any form. We are committed to providing a safe, secure, and welcoming environment for all freshers.
          </p>
          
          <div className={styles.actionBox}>
            <strong><FaGavel style={{ marginRight: '0.5rem', marginBottom: '-2px' }} /> Action against Ragging:</strong> Any student found guilty of ragging or abetting ragging will face immediate suspension, cancellation of admission, and will be reported to the police as per the directives of the Supreme Court of India and INC guidelines.
          </div>
          
          <h3 className={styles.sectionTitle}>
            <FaUsers style={{ color: 'var(--primary-color)' }} /> Anti-Ragging Committee
          </h3>
          <p className={styles.committeeText}>
            An active Anti-Ragging Committee and Squad patrol the campus and hostels to prevent any incidents. Students in distress can contact the toll-free national anti-ragging helpline or immediately reach out to the college principal.
          </p>
        </div>
      </section>
    </main>
  );
}
