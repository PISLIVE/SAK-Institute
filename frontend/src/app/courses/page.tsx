import PageHeader from '@/components/PageHeader';
import styles from './Courses.module.css';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export const metadata = {
  title: 'Courses Offered | SAK College of Nursing',
  description: 'Explore our comprehensive nursing programs including GNM, B.Sc. Nursing, and M.Sc. Nursing.',
};

export const dynamic = 'force-dynamic';

export default async function CoursesPage() {
  const dbCourses = await prisma.course.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'asc' }
  });

  // Assign distinct colors/icons dynamically for aesthetics if they are not in the DB
  const aesthetics = [
    { icon: '🏥', color: '#0ea5e9' },
    { icon: '⚕️', color: '#0d9488' },
    { icon: '🎓', color: '#8b5cf6' },
    { icon: '👩‍⚕️', color: '#f59e0b' },
    { icon: '💉', color: '#ec4899' },
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
          {dbCourses.length === 0 ? (
            <p style={{ textAlign: 'center', width: '100%', padding: '3rem', color: '#64748b' }}>Check back soon for updated course offerings.</p>
          ) : (
            dbCourses.map((program, index) => {
              const aesthetic = aesthetics[index % aesthetics.length];
              return (
                <div 
                  key={program.id} 
                  className={`${styles.courseCard} animate-on-load`} 
                  style={{ animationDelay: `${0.3 + (index * 0.2)}s` }}
                >
                  <div className={styles.cardHeader} style={{ background: `linear-gradient(135deg, ${aesthetic.color}15, ${aesthetic.color}05)` }}>
                    <div className={styles.iconWrapper} style={{ color: aesthetic.color, borderColor: `${aesthetic.color}30` }}>
                      {aesthetic.icon}
                    </div>
                    <div className={styles.titleWrapper}>
                      <h3 className={styles.shortTitle} style={{ color: aesthetic.color }}>{program.name}</h3>
                      <p className={styles.longTitle}>{program.seats} Seats Available</p>
                    </div>
                  </div>
                  
                  <div className={styles.cardBody}>
                    <div className={styles.durationBadge}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      <span>Duration: {program.duration}</span>
                    </div>
                    
                    {program.description && <p className={styles.description}>{program.description}</p>}
                    
                    <div className={styles.infoSection}>
                      <h4>Eligibility</h4>
                      <p>{program.eligibility}</p>
                    </div>
                    
                    <div className={styles.infoSection}>
                      <h4>Annual Fees</h4>
                      <p>{program.fees}</p>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <Link href="/admission/online-application" className={styles.applyBtn} style={{ backgroundColor: aesthetic.color }}>
                      Apply Now
                    </Link>
                    <Link href="/admission/apply" className={styles.enquireBtn} style={{ color: aesthetic.color }}>
                      Enquire
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </main>
  );
}
