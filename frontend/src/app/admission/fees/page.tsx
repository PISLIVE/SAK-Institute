import PageHeader from '@/components/PageHeader';
import styles from './Fees.module.css';
import { FaInfoCircle } from 'react-icons/fa';

export const metadata = {
  title: 'Fees Structure | SAK College of Nursing',
  description: 'View the fee structure for various nursing programs at SAK College of Nursing.',
};

const programs = [
  {
    id: 1,
    name: "GNM (General Nursing)",
    duration: "3 Years",
    admissionFee: "--,---",
    tuitionFee: "--,---"
  },
  {
    id: 2,
    name: "B.Sc. Nursing",
    duration: "4 Years",
    admissionFee: "--,---",
    tuitionFee: "--,---"
  },
  {
    id: 3,
    name: "Post Basic B.Sc. Nursing",
    duration: "2 Years",
    admissionFee: "--,---",
    tuitionFee: "--,---"
  },
  {
    id: 4,
    name: "M.Sc. Nursing",
    duration: "2 Years",
    admissionFee: "--,---",
    tuitionFee: "--,---"
  }
];

export default function FeesStructurePage() {
  return (
    <main>
      <PageHeader title="Fees Structure" breadcrumb="Fees Structure" />
      
      <section className={styles.container}>
        <h2 className={`animate-on-load ${styles.title}`}>Program Fees</h2>
        <p className={`animate-on-load ${styles.subtitle}`}>Transparent and comprehensive fee structures for all our nursing programs.</p>
        
        <div className={styles.tableWrapper}>
          <table className={styles.feesTable}>
            <thead>
              <tr>
                <th className={styles.programCol}>Program Details</th>
                <th>Admission Fee <span style={{ fontSize: '0.8rem', opacity: 0.8 }}><br/>(1st Year)</span></th>
                <th>Tuition Fee <span style={{ fontSize: '0.8rem', opacity: 0.8 }}><br/>(Per Year)</span></th>
              </tr>
            </thead>
            <tbody>
              {programs.map((prog) => (
                <tr key={prog.id}>
                  <td className={styles.programCol}>
                    <span className={styles.programName}>{prog.name}</span>
                    <span className={styles.durationBadge}>{prog.duration}</span>
                  </td>
                  <td>
                    <span className={styles.amount}>
                      <span className={styles.currency}>₹</span> {prog.admissionFee}
                    </span>
                  </td>
                  <td>
                    <span className={styles.amount}>
                      <span className={styles.currency}>₹</span> {prog.tuitionFee}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.note}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <FaInfoCircle style={{ color: 'var(--accent-color)', fontSize: '1.4rem', marginTop: '0.1rem', flexShrink: 0 }} />
            <div>
              <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Important Note:</strong>
              <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>
                Fees are subject to change based on university guidelines and government regulations. 
                Hostel accommodation, mess charges, and transportation fees are charged separately 
                and are not included in the tuition fees shown above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
