import PageHeader from '@/components/PageHeader';
import Image from 'next/image';

export const metadata = {
  title: 'Medical Surgical Nursing | Department',
  description: 'Department of Medical Surgical Nursing at SAK College of Nursing.',
};

export default function MedicalSurgicalDepartmentPage() {
  return (
    <main>
      <PageHeader title="Medical Surgical Nursing" breadcrumb="Department" />
      
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left Column: About & HOD */}
          <div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '2rem' }} className="animate-on-load">About the Department</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
              The Department of Medical Surgical Nursing provides comprehensive theoretical and practical training in adult nursing care. 
              Our curriculum focuses on equipping students with advanced clinical skills, critical thinking, and the ability to manage acute and chronic illnesses across various healthcare settings.
            </p>
            
            <div className="glass-panel card-3d" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '3rem' }}>👩‍⚕️</div>
                <div>
                  <h3 style={{ color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }} className="animate-on-load">Dr. Sarah Johnson</h3>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Head of Department (HOD)<br/>Ph.D. in Medical Surgical Nursing, 15+ Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Facilities & Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', height: '250px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/gallery2.jpeg" 
                alt="Medical Surgical Lab" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} className="animate-on-load">Key Facilities</h3>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: '1.8' }}>
              <li>Advanced Medical Surgical Simulation Lab</li>
              <li>High-fidelity adult patient simulators (Mannequins)</li>
              <li>ICU and Critical Care setup for training</li>
              <li>Surgical instruments and wound care stations</li>
            </ul>
          </div>
          
        </div>
      </section>
    </main>
  );
}
