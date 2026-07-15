import PageHeader from '@/components/PageHeader';
import Image from 'next/image';

export const metadata = {
  title: "Principal's Profile | Staff",
  description: "Message and profile of the Principal at SAK College of Nursing.",
};

export default function PrincipalPage() {
  return (
    <main>
      <PageHeader title="Principal's Profile" breadcrumb="Staff / Principal" />
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
          
          <div style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <Image 
              src="/gallery7.jpeg" 
              alt="Principal Profile" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem', fontSize: '2.5rem' }}>Dr. Elizabeth James</h2>
            <h4 style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem', fontWeight: 500 }}>Principal, SAK College of Nursing</h4>
            
            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Message from the Principal</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontStyle: 'italic' }}>
                "Welcome to SAK College of Nursing. Our mission is to prepare compassionate, highly skilled, and ethical nursing professionals who can meet the dynamic healthcare needs of society. We provide a supportive, evidence-based learning environment that challenges our students to achieve excellence in both academics and clinical practice."
              </p>
            </div>

            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Qualifications</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
              <li>Ph.D. in Nursing, Global Medical University</li>
              <li>M.Sc. Nursing (Medical-Surgical), State Nursing Institute</li>
              <li>B.Sc. Nursing, City Hospital College</li>
              <li>Over 25 years of experience in clinical practice and academic leadership</li>
            </ul>
          </div>
          
        </div>
      </section>
    </main>
  );
}
