import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export const metadata = {
  title: 'Rules & Regulations | SAK College of Nursing',
  description: 'Overview of the rules, regulations, and policies at SAK College of Nursing.',
};

export default function RulesPage() {
  return (
    <main>
      <PageHeader title="Rules & Regulations" breadcrumb="Rules" />
      
      <section className="container" style={{ padding: '4rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2.5rem' }} className="animate-on-load">Our Policies & Guidelines</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
            At SAK College of Nursing, we maintain a disciplined and conducive environment for learning and growth. Please familiarize yourself with our core rules and regulations to ensure a harmonious campus life.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Code of Conduct */}
          <Link href="/rules/code-of-conduct" className="hover-lift" style={{ textDecoration: 'none' }}>
            <div className="glass-panel card-3d" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(13, 148, 136, 0.1)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
                color: 'var(--primary-color)'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }} className="animate-on-load">Code of Conduct</h3>
              <p style={{ color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '2rem' }}>
                Guidelines for professional behavior, dress code, and general conduct on campus and during clinical postings.
              </p>
              <div style={{ color: 'var(--accent-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Read More
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </Link>

          {/* Anti-Ragging Policy */}
          <Link href="/rules/anti-ragging" className="hover-lift" style={{ textDecoration: 'none' }}>
            <div className="glass-panel card-3d" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(2, 132, 199, 0.1)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
                color: 'var(--secondary-color)'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              </div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }} className="animate-on-load">Anti-Ragging Policy</h3>
              <p style={{ color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '2rem' }}>
                Zero tolerance policy towards any form of ragging. Learn about our strict measures and reporting mechanisms.
              </p>
              <div style={{ color: 'var(--secondary-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Read More
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </Link>

          {/* Hostel Rules */}
          <Link href="/rules/hostel-rules" className="hover-lift" style={{ textDecoration: 'none' }}>
            <div className="glass-panel card-3d" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(20, 184, 166, 0.1)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
                color: 'var(--accent-color)'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }} className="animate-on-load">Hostel Rules</h3>
              <p style={{ color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '2rem' }}>
                Guidelines for residents regarding timings, visitors, discipline, and facilities usage to ensure a safe stay.
              </p>
              <div style={{ color: 'var(--accent-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Read More
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
