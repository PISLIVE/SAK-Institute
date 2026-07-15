import PageHeader from '@/components/PageHeader';
import Image from 'next/image';

export const metadata = {
  title: 'Community Health Nursing | Department',
  description: 'Department of Community Health Nursing at SAK College of Nursing.',
};

export default function CommunityHealthDepartmentPage() {
  return (
    <main>
      <PageHeader title="Community Health Nursing" breadcrumb="Department" />
      
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left Column: About & HOD */}
          <div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '2rem' }}>About the Department</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
              The Department of Community Health Nursing trains students to deliver holistic healthcare services outside the traditional hospital setting. 
              We focus on preventive, promotive, and rehabilitative care, preparing nurses to lead health camps, rural outreach programs, and public health initiatives.
            </p>
            
            <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '3rem' }}>👨‍⚕️</div>
                <div>
                  <h3 style={{ color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>Prof. Robert Smith</h3>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Head of Department (HOD)<br/>M.Sc. Community Health Nursing, 12+ Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Facilities & Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', height: '250px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/gallery3.jpeg" 
                alt="Community Health Field Visit" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Key Activities</h3>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: '1.8' }}>
              <li>Rural and Urban Health Postings</li>
              <li>Organization of Health Assessment Camps</li>
              <li>Public Health Awareness Campaigns</li>
              <li>Family Folder System & Home Visits</li>
            </ul>
          </div>
          
        </div>
      </section>
    </main>
  );
}
