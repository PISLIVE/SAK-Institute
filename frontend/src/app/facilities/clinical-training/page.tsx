import PageHeader from '@/components/PageHeader';
import Image from 'next/image';

export const metadata = {
  title: 'Clinical Training | Facilities',
  description: 'Hospital affiliations and clinical training at SAK College of Nursing.',
};

export default function ClinicalTrainingPage() {
  return (
    <main>
      <PageHeader title="Clinical Training" breadcrumb="Facilities / Clinical Training" />
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Hospital Affiliations</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Practical experience is the cornerstone of nursing education. SAK College of Nursing is affiliated with multiple multi-specialty and super-specialty hospitals to ensure our students receive comprehensive, hands-on clinical exposure in various medical disciplines.
            </p>
            <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-color)' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Training Areas</h3>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
                <li>Intensive Care Units (ICU & NICU)</li>
                <li>Operation Theaters & Recovery Rooms</li>
                <li>Emergency & Trauma Care</li>
                <li>Maternity & Labour Wards</li>
                <li>Psychiatric & Rehabilitation Centers</li>
              </ul>
            </div>
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <Image 
              src="/gallery9.jpeg" 
              alt="Clinical Training" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
