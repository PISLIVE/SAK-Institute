import PageHeader from '@/components/PageHeader';
import Image from 'next/image';

export const metadata = {
  title: 'Pediatric Nursing | Department',
  description: 'Department of Pediatric Nursing at SAK College of Nursing.',
};

export default function PediatricDepartmentPage() {
  return (
    <main>
      <PageHeader title="Pediatric Nursing" breadcrumb="Department" />
      
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left Column: About & HOD */}
          <div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '2rem' }}>About the Department</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
              Child Health (Pediatric) Nursing focuses on the specialized care of infants, children, and adolescents. 
              Our department trains students in pediatric growth and development, neonatal intensive care, and the compassionate management of childhood illnesses.
            </p>
            
            <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '3rem' }}>👩‍⚕️</div>
                <div>
                  <h3 style={{ color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Dr. Emily Chen</h3>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Head of Department (HOD)<br/>M.Sc. Pediatric Nursing, 10+ Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Facilities & Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', height: '250px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/gallery4.jpeg" 
                alt="Pediatric Nursing Lab" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Key Facilities</h3>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: '1.8' }}>
              <li>Dedicated Maternal & Child Health (MCH) Lab</li>
              <li>Infant CPR and Neonatal Resuscitation Models</li>
              <li>Pediatric Play Therapy Corner</li>
              <li>Incubator and Radiant Warmer training sets</li>
            </ul>
          </div>
          
        </div>
      </section>
    </main>
  );
}
