import PageHeader from '@/components/PageHeader';
import Image from 'next/image';

export const metadata = {
  title: 'Prospectus | SAK College of Nursing',
  description: 'Download the official prospectus of SAK College of Nursing.',
};

export default function ProspectusPage() {
  return (
    <main>
      <PageHeader title="College Prospectus" breadcrumb="Prospectus" />
      
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Side: Info & Download */}
          <div className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid var(--primary-color)' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>📖</div>
            <h2 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '2rem' }}>Information Brochure</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
              Our official prospectus is a comprehensive guide to everything SAK College of Nursing has to offer. 
              Inside, you will find detailed information regarding our infrastructure, expert faculty, modern curriculum, and vibrant campus life.
            </p>
            <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px', marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>What's inside?</h4>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                <li>Detailed Course Curriculum & Syllabi</li>
                <li>Hospital Tie-ups & Clinical Training details</li>
                <li>Hostel & Campus Facility highlights</li>
                <li>Complete Fee Structure & Scholarship Info</li>
              </ul>
            </div>
            <button className="btn-primary" disabled style={{ padding: '1rem 2.5rem', width: '100%', fontSize: '1.1rem', opacity: 0.7, cursor: 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download PDF (Coming Soon)
            </button>
          </div>

          {/* Right Side: Image Showcase */}
          <div style={{ position: 'relative', height: '100%', minHeight: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <Image 
              src="/gallery1.jpeg" 
              alt="Nursing Students reading prospectus" 
              fill
              style={{ objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: 'white' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Begin Your Journey</h3>
              <p style={{ opacity: 0.9 }}>Join thousands of alumni making a difference in global healthcare.</p>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
