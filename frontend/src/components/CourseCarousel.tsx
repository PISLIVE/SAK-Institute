import Link from 'next/link';
import styles from './CourseCarousel.module.css';
import { prisma } from '@/lib/prisma';

export default async function CourseCarousel() {
  const dbCourses = await prisma.course.findMany({
    where: { isActive: true },
    take: 6, // Show up to 6 courses on homepage
  });

  const fallbackIcons = ['🏥', '⚕️', '🎓', '🔬', '💉', '👩‍⚕️'];
  const fallbackImages = ['/nursing_students.png', '/medical_research.png'];

  if (dbCourses.length === 0) {
    return null; // Don't show if no courses in DB
  }

  return (
    <section className={styles.coursesSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Programs We Offer</h2>
          <p className={styles.subtitle}>Discover a range of undergraduate and postgraduate courses tailored to industry needs.</p>
        </div>
        
        <div className={styles.grid}>
          {dbCourses.map((course, index) => {
            const icon = fallbackIcons[index % fallbackIcons.length];
            const image = fallbackImages[index % fallbackImages.length];
            
            return (
              <div 
                key={course.id} 
                className={`glass-panel ${styles.card}`}
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className={styles.icon}>{icon}</div>
                <h3 className={styles.cardTitle}>{course.name}</h3>
                <p className={styles.cardDesc}>{course.description || `Duration: ${course.duration} | Seats: ${course.seats}`}</p>
                <Link href="/courses" className={styles.cardLink}>
                  Learn More &rarr;
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
