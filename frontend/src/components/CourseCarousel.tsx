import Link from 'next/link';
import styles from './CourseCarousel.module.css';

const courses = [
  {
    id: 'gnm',
    title: 'GNM (General Nursing)',
    desc: 'Comprehensive training in general nursing and midwifery to prepare you for clinical excellence.',
    icon: '🏥',
    image: '/nursing_students.png'
  },
  {
    id: 'bsc',
    title: 'B.Sc. Nursing',
    desc: 'A 4-year degree program focusing on advanced nursing principles, anatomy, and patient care.',
    icon: '⚕️',
    image: '/medical_research.png'
  },
  {
    id: 'post-basic',
    title: 'Post Basic B.Sc. Nursing',
    desc: 'Upgrade your GNM diploma to a full bachelor\'s degree to expand your career opportunities.',
    icon: '🎓',
    image: '/nursing_students.png'
  },
  {
    id: 'msc',
    title: 'M.Sc. Nursing',
    desc: 'Specialized postgraduate program for advanced clinical practice and nursing management.',
    icon: '🔬',
    image: '/medical_research.png'
  }
];

export default function CourseCarousel() {
  return (
    <section className={styles.coursesSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Programs We Offer</h2>
          <p className={styles.subtitle}>Discover a range of undergraduate and postgraduate courses tailored to industry needs.</p>
        </div>
        
        <div className={styles.grid}>
          {courses.map(course => (
            <div 
              key={course.id} 
              className={`glass-panel ${styles.card}`}
              style={{ backgroundImage: `url(${course.image})` }}
            >
              <div className={styles.icon}>{course.icon}</div>
              <h3 className={styles.cardTitle}>{course.title}</h3>
              <p className={styles.cardDesc}>{course.desc}</p>
              <Link href={`/courses/${course.id}`} className={styles.cardLink}>
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
