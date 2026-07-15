import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import styles from './About.module.css';

export const metadata = {
  title: 'About Us | SAK College of Nursing',
  description: 'Learn about the history, achievements, mission, and leadership of SAK Group of Institutions.',
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <PageHeader title="About SAK College" breadcrumb="About" />
      
      {/* 1. Welcome & History Section */}
      <section className="container">
        <div className={styles.gridContainer}>
          <div className={styles.textContent}>
            <span className={styles.badge}>ESTABLISHED EXCELLENCE</span>
            <h2 className={styles.sectionTitle}>Welcome to SAK Group of Institutions</h2>
            <p className={styles.paragraph}>
              The SAK Group of Institutions was established with a singular vision: to cultivate a 
              passion for caring and achieve excellence in nursing education. For years, we have been 
              at the forefront of healthcare training in the region, bridging the gap between theoretical 
              knowledge and practical clinical application.
            </p>
            <p className={styles.paragraph}>
              Our state-of-the-art campus is designed to foster a culture of holistic development. 
              Guided by a highly experienced faculty, we ensure that every student who walks through 
              our doors is empowered to become a competent, compassionate, and ethical healthcare professional.
            </p>
            
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Years of Trust</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Placement Assistance</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Expert Faculty</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>2000+</span>
                <span className={styles.statLabel}>Alumni Nurses</span>
              </div>
            </div>
          </div>
          <div className={styles.imagePlaceholder} style={{ position: 'relative' }}>
            <Image 
              src="/gallery1.jpeg" 
              alt="SAK College Building" 
              fill 
              style={{ objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} 
            />
          </div>
        </div>
      </section>

      {/* 2. Mission, Vision & Core Values */}
      <section className={styles.missionVisionSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenterLight}>
            <h2>Our Guiding Principles</h2>
            <p>The foundation of our educational philosophy and institutional culture.</p>
          </div>
          
          <div className={styles.cardGrid}>
            <div className={`glass-panel ${styles.missionCard}`}>
              <div className={styles.iconWrapper}>🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide accessible, high-quality nursing education that fosters clinical excellence, 
                critical thinking, and a lifelong commitment to patient care and community health.
              </p>
            </div>
            
            <div className={`glass-panel ${styles.missionCard}`}>
              <div className={styles.iconWrapper}>👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be a globally recognized center of excellence in nursing education and research, 
                shaping leaders who will transform the healthcare landscape.
              </p>
            </div>
            
            <div className={`glass-panel ${styles.missionCard}`}>
              <div className={styles.iconWrapper}>❤️</div>
              <h3>Core Values</h3>
              <p>
                Integrity, Compassion, Excellence, Respect, and Accountability form the bedrock of 
                our institutional culture and educational philosophy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Achievements & Milestones */}
      <section className={`container ${styles.achievementsSection}`}>
        <div className={styles.sectionHeaderCenter}>
          <h2>Achievements & Milestones</h2>
          <p>Recognitions that drive us to continuously raise the bar in healthcare education.</p>
        </div>
        
        <div className={styles.timelineGrid}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>🏆</div>
            <h4>INC Recognized</h4>
            <p>Fully recognized and approved by the Indian Nursing Council (INC) for maintaining rigorous academic standards.</p>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>🏥</div>
            <h4>Multi-Specialty Tie-ups</h4>
            <p>Affiliated with top-tier, multi-specialty hospitals for advanced clinical rotations and hands-on practice.</p>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>🎓</div>
            <h4>University Affiliation</h4>
            <p>Affiliated with the State Health University, ensuring our degrees hold the highest academic value.</p>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>🔬</div>
            <h4>Modern Infrastructure</h4>
            <p>Pioneers in introducing high-fidelity medical mannequins and advanced simulation labs in the region.</p>
          </div>
        </div>
      </section>

      {/* 4. Campus Tour Showcase */}
      <section className={styles.campusShowcase}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <h2>A Glimpse of Our Campus</h2>
            <p>Explore the vibrant environment where our students learn, grow, and thrive.</p>
          </div>
          
          <div className={styles.campusGrid}>
            <div className={styles.campusImageWrapper} style={{ gridArea: 'img1' }}>
              <Image src="/gallery2.jpeg" alt="Campus View 1" fill style={{ objectFit: 'cover' }} className={styles.campusImage} />
            </div>
            <div className={styles.campusImageWrapper} style={{ gridArea: 'img2' }}>
              <Image src="/gallery3.jpeg" alt="Campus View 2" fill style={{ objectFit: 'cover' }} className={styles.campusImage} />
            </div>
            <div className={styles.campusImageWrapper} style={{ gridArea: 'img3' }}>
              <Image src="/gallery4.jpeg" alt="Campus View 3" fill style={{ objectFit: 'cover' }} className={styles.campusImage} />
            </div>
            <div className={styles.campusImageWrapper} style={{ gridArea: 'img4' }}>
              <Image src="/gallery5.jpeg" alt="Campus View 4" fill style={{ objectFit: 'cover' }} className={styles.campusImage} />
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. Principal's Message */}
      <section className={styles.leadershipSectionWrapper}>
        <div className={`container ${styles.leadershipSection}`}>
          <div className={styles.leadershipCard}>
            <div className={styles.principalImage}>
              <div className={styles.avatarPlaceholder}>👩‍⚕️</div>
            </div>
            <div className={styles.principalText}>
              <span className={styles.badge}>MESSAGE FROM LEADERSHIP</span>
              <h3>Dr. Jane Doe</h3>
              <span className={styles.credentials}>Ph.D. in Nursing, M.Sc. Nursing</span>
              <p className={styles.quote}>
                "Nursing is not just a profession; it is a calling. At SAK College, we are dedicated to 
                nurturing this calling by providing an environment that challenges you academically while 
                supporting you emotionally. We believe in creating nurses who lead with their minds and 
                heal with their hearts."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
