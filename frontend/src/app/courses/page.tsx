import PageHeader from '@/components/PageHeader';
import styles from './Courses.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Courses Offered | SAK College of Nursing',
  description: 'Explore our comprehensive nursing programs including GNM, B.Sc. Nursing, and M.Sc. Nursing.',
};

export default function CoursesPage() {
  const programs = [
    {
      title: 'General Nursing & Midwifery (GNM)',
      duration: '3 Years',
      eligibility: '10+2 with English and must have obtained a minimum of 40% at the qualifying examination and English individually from any recognized board.',
      description: 'The GNM program is designed to prepare general nurses who will function as members of the health team beginning with consultancies for first level positions in both hospitals and community health environments.',
      career: 'Staff Nurse, Home Health Nurse, Community Health Worker.',
      icon: '🏥'
    },
    {
      title: 'B.Sc. Nursing (Basic)',
      duration: '4 Years',
      eligibility: '10+2 with Science (PCB) & English Core/English Elective with aggregate of 45% marks from recognized board under AISSCE/CBSE/ICSE/SSCE/HSCE.',
      description: 'A comprehensive undergraduate program that prepares students to be competent professional nurses and midwives who can make independent decisions in nursing situations, protect the rights of and facilitate individuals and groups in pursuit of health.',
      career: 'Clinical Nurse Specialist, Nurse Educator, Nursing Administrator.',
      icon: '⚕️'
    },
    {
      title: 'Post Basic B.Sc. Nursing',
      duration: '2 Years',
      eligibility: 'Pass in GNM after 10+2 or equivalent examination preferably with Science subjects. Registered as a nurse and midwife with any State Nursing Registration Council.',
      description: 'Designed for registered GNM nurses who wish to upgrade their skills and knowledge to earn a Bachelor\'s degree. This program bridges the gap between diploma and degree nursing education.',
      career: 'Advanced Practice Nurse, Nursing Supervisor, Public Health Nurse.',
      icon: '🎓'
    }
  ];

  return (
    <main className={styles.coursesPage}>
      <PageHeader title="Courses Offered" breadcrumb="Courses" />
      
      <section className="container">
        <div className={styles.introText}>
          <h2>Academic Programs</h2>
          <p>
            At SAK College of Nursing, we offer rigorous, INC-approved academic programs designed 
            to transform students into highly skilled, ethical, and compassionate nursing professionals 
            ready to meet the demands of global healthcare.
          </p>
        </div>

        <div className={styles.programList}>
          {programs.map((program, index) => (
            <div key={index} className={styles.programCard}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>{program.icon}</div>
                <div>
                  <h3 className={styles.programTitle}>{program.title}</h3>
                  <span className={styles.duration}>⏱️ Duration: {program.duration}</span>
                </div>
              </div>
              
              <div className={styles.cardBody}>
                <p className={styles.description}>{program.description}</p>
                
                <div className={styles.detailsGrid}>
                  <div className={styles.detailBox}>
                    <h4>Eligibility Criteria</h4>
                    <p>{program.eligibility}</p>
                  </div>
                  <div className={styles.detailBox}>
                    <h4>Career Opportunities</h4>
                    <p>{program.career}</p>
                  </div>
                </div>
                
                <div className={styles.cardFooter}>
                  <Link href="/admission" className="btn-primary">Apply Now</Link>
                  <Link href="/contact" className={styles.enquireLink}>Enquire Details →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
