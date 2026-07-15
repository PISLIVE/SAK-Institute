import PageHeader from '@/components/PageHeader';
import Image from 'next/image';

export const metadata = {
  title: 'OBG Nursing | Department',
  description: 'Department of Obstetrics and Gynaecological Nursing at SAK College of Nursing.',
};

export default function OBGDepartmentPage() {
  return (
    <main>
      <PageHeader title="OBG Nursing" breadcrumb="Department" />
      
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left Column: About & HOD */}
          <div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '2rem' }}>About the Department</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
              Obstetrics and Gynaecological (OBG) Nursing trains students in the care of women during pregnancy, childbirth, and the postpartum period. 
              Our rigorous program emphasizes safe delivery practices, maternal health, family planning, and newborn resuscitation.
            </p>
            
            <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '3rem' }}>👩‍⚕️</div>
                <div>
                  <h3 style={{ color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Prof. Mary Kom</h3>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Head of Department (HOD)<br/>M.Sc. OBG Nursing, 20+ Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Facilities & Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', height: '250px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/gallery6.jpeg" 
                alt="OBG Nursing Lab" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Key Facilities</h3>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: '1.8' }}>
              <li>Advanced MCH (Maternal & Child Health) Lab</li>
              <li>Birthing Simulators & Pelvic Models</li>
              <li>Clinical Rotations in Maternity Wards & Labour Rooms</li>
              <li>Family Planning counseling training aids</li>
            </ul>
          </div>
          
        </div>
      </section>
    </main>
  );
}
