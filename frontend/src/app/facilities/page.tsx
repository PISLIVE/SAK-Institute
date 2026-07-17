import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export const metadata = {
  title: 'Facilities | SAK College of Nursing',
  description: 'Explore the world-class facilities and infrastructure at SAK College of Nursing.',
};

export default function FacilitiesPage() {
  const facilities = [
    {
      title: "Library",
      href: "/facilities/library",
      desc: "Our extensive library houses thousands of medical books, journals, and digital resources for comprehensive research.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
      ),
      color: "var(--primary-color)",
      bg: "rgba(13, 148, 136, 0.1)"
    },
    {
      title: "Laboratories",
      href: "/facilities/laboratories",
      desc: "State-of-the-art nursing labs including Anatomy, Nutrition, and Fundamentals of Nursing for hands-on practice.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"></path><path d="M14 9.3V1.99"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path><path d="M5.52 16h12.96"></path></svg>
      ),
      color: "var(--secondary-color)",
      bg: "rgba(2, 132, 199, 0.1)"
    },
    {
      title: "Hostel & Mess",
      href: "/facilities/hostel",
      desc: "Safe and comfortable accommodation with nutritious meals, designed to provide a home away from home.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      ),
      color: "var(--accent-color)",
      bg: "rgba(20, 184, 166, 0.1)"
    },
    {
      title: "Transport",
      href: "/facilities/transport",
      desc: "Dedicated fleet of buses ensuring safe and convenient daily commuting for students and clinical postings.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="15.5" r="1.5"></circle><circle cx="15.5" cy="15.5" r="1.5"></circle><path d="M3 11h18"></path><path d="M8 7v4"></path><path d="M16 7v4"></path></svg>
      ),
      color: "#f59e0b",
      bg: "rgba(245, 158, 11, 0.1)"
    },
    {
      title: "Clinical Training",
      href: "/facilities/clinical-training",
      desc: "Tie-ups with reputed multi-specialty hospitals to provide rigorous and diverse real-world clinical experience.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
      ),
      color: "#8b5cf6",
      bg: "rgba(139, 92, 246, 0.1)"
    }
  ];

  return (
    <main>
      <PageHeader title="Campus Facilities" breadcrumb="Facilities" />
      
      <section className="container" style={{ padding: '5rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2.5rem' }} className="animate-on-load">World-Class Infrastructure</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
            We provide an environment that fosters academic excellence and personal growth. Explore the top-tier amenities and infrastructure available at SAK College of Nursing.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {facilities.map((fac, idx) => (
            <Link key={idx} href={fac.href} className="hover-lift" style={{ textDecoration: 'none' }}>
              <div className="glass-panel card-3d" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                
                {/* Decorative background shape */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  backgroundColor: fac.bg,
                  opacity: 0.6,
                  zIndex: 0
                }}></div>

                <div style={{ position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ 
                    width: '70px', height: '70px', borderRadius: '20px', backgroundColor: fac.bg, 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
                    color: fac.color
                  }}>
                    {fac.icon}
                  </div>
                  <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }} className="animate-on-load">{fac.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '2rem', lineHeight: '1.6' }}>
                    {fac.desc}
                  </p>
                  
                  <div style={{ color: fac.color, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 'auto' }}>
                    Explore Details
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
