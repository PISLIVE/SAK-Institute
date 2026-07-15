import Image from 'next/image';
import styles from './FacilitiesSection.module.css';

export default function FacilitiesSection() {
  return (
    <section className={styles.facilitiesSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>World-Class Facilities</h2>
          <p className={styles.subtitle}>
            Experience hands-on training with our state-of-the-art medical infrastructure designed to mirror modern clinical environments.
          </p>
        </div>
        
        <div className={styles.grid}>
          <div className={`glass-panel ${styles.facilityCard}`}>
            <div className={styles.imageWrapper}>
              <Image src="/lab.png" alt="Nursing Simulation Lab" width={400} height={300} className={styles.image} />
            </div>
            <div className={styles.content}>
              <h3>Advanced Simulation Labs</h3>
              <p>Practice clinical skills in a risk-free environment with high-fidelity mannequins and modern hospital equipment.</p>
            </div>
          </div>
          
          <div className={`glass-panel ${styles.facilityCard}`}>
            <div className={styles.imagePlaceholder}>
              <span>🏥</span>
            </div>
            <div className={styles.content}>
              <h3>Parent Hospital Tie-ups</h3>
              <p>Gain real-world experience through clinical rotations at our affiliated multi-specialty hospitals.</p>
            </div>
          </div>
          
          <div className={`glass-panel ${styles.facilityCard}`}>
            <div className={styles.imagePlaceholder}>
              <span>📚</span>
            </div>
            <div className={styles.content}>
              <h3>Central Library</h3>
              <p>Access thousands of medical journals, reference books, and digital resources to support your academic journey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
