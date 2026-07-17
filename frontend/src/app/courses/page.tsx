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
      title: 'GNM',
      fullName: 'General Nursing & Midwifery',
      duration: '3 Years',
      eligibility: '10+2 with English and 40% minimum.',
      description: 'Prepare as a general nurse to function as a health team member in hospitals and community health environments.',
      career: 'Staff Nurse, Home Health Nurse',
      icon: '🏥',
      color: '#0ea5e9' // sky blue
    },
    {
      title: 'B.Sc. Nursing',
      fullName: 'Basic B.Sc. Nursing',
      duration: '4 Years',
      eligibility: '10+2 Science (PCB) & English with 45%.',
      description: 'Comprehensive undergraduate program preparing competent professional nurses for independent decision-making.',
      career: 'Clinical Nurse Specialist, Educator',
      icon: '⚕️',
      color: '#0d9488' // primary teal
    },
    {
      title: 'P.B. B.Sc. Nursing',
      fullName: 'Post Basic B.Sc. Nursing',
      duration: '2 Years',
      eligibility: 'Registered GNM nurse.',
      description: 'Designed for registered GNM nurses to upgrade skills and earn a Bachelor\'s degree.',
      career: 'Advanced Practice Nurse, Supervisor',
      icon: '🎓',
      color: '#8b5cf6' // violet
    }
  ];

  return (
    <main className={styles.coursesPage}>
      <PageHeader title="Courses Offered" breadcrumb="Courses" />
      
      <section className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '3rem' }}>
        <div className={styles.introText}>
          <h2 className="animate-on-load">Our Nursing Programs</h2>
          <p className="animate-on-load" style={{ animationDelay: '0.2s' }}>
            Transform your passion into a rewarding career. We offer rigorous, INC-approved programs 
            designed to create highly skilled, ethical, and compassionate healthcare professionals.
          </p>
        </div>

        <div className={styles.coursesGrid}>
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`${styles.courseCard} animate-on-load`} 
              style={{ animationDelay: `${0.3 + (index * 0.2)}s` }}
            >
              <div className={styles.cardHeader} style={{ background: `linear-gradient(135deg, ${program.color}15, ${program.color}05)` }}>
                <div className={styles.iconWrapper} style={{ color: program.color, borderColor: `${program.color}30` }}>
                  {program.icon}
                </div>
                <div className={styles.titleWrapper}>
                  <h3 className={styles.shortTitle} style={{ color: program.color }}>{program.title}</h3>
                  <p className={styles.longTitle}>{program.fullName}</p>
                </div>
              </div>
              
              <div className={styles.cardBody}>
                <div className={styles.durationBadge}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>Duration: {program.duration}</span>
                </div>
                
                <p className={styles.description}>{program.description}</p>
                
                <div className={styles.infoSection}>
                  <h4>Eligibility</h4>
                  <p>{program.eligibility}</p>
                </div>
                
                <div className={styles.infoSection}>
                  <h4>Career Outlook</h4>
                  <p>{program.career}</p>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <Link href="/admission/online-application" className={styles.applyBtn} style={{ backgroundColor: program.color }}>
                  Apply Now
                </Link>
                <Link href="/admission/apply" className={styles.enquireBtn} style={{ color: program.color }}>
                  Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
