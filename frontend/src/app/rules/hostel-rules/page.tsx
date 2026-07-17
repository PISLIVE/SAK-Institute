import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Hostel Rules | SAK College of Nursing',
  description: 'Hostel rules and regulations at SAK College of Nursing.',
};

export default function HostelRulesPage() {
  const rules = [
    {
      title: "Campus Permissions",
      desc: "Students are not allowed to leave the hostel premises without prior written permission from the Warden.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      ),
      color: "var(--primary-color)",
      bg: "rgba(13, 148, 136, 0.1)"
    },
    {
      title: "Strict Timings",
      desc: "Hostel timings (in-time and out-time) must be strictly adhered to by all residents.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      ),
      color: "var(--secondary-color)",
      bg: "rgba(2, 132, 199, 0.1)"
    },
    {
      title: "Visitor Protocol",
      desc: "Visitors and parents are allowed only during specified visiting hours and must wait in the designated visitor's lounge.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      ),
      color: "var(--accent-color)",
      bg: "rgba(20, 184, 166, 0.1)"
    },
    {
      title: "Electrical Appliances",
      desc: "Use of heavy electrical appliances (heaters, induction cooktops) inside rooms is strictly prohibited for safety reasons.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"></path></svg>
      ),
      color: "#ef4444",
      bg: "rgba(239, 68, 68, 0.1)"
    },
    {
      title: "Study & Discipline",
      desc: "Students must maintain silence during study hours and respect the privacy of their roommates.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
      ),
      color: "#8b5cf6",
      bg: "rgba(139, 92, 246, 0.1)"
    },
    {
      title: "Medical Emergencies",
      desc: "Any medical emergency must be immediately reported to the Warden for prompt assistance.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
      ),
      color: "#f59e0b",
      bg: "rgba(245, 158, 11, 0.1)"
    }
  ];

  return (
    <main>
      <PageHeader title="Hostel Rules & Regulations" breadcrumb="Rules / Hostel Rules" />
      
      <section className="container" style={{ padding: '5rem 0', maxWidth: '1000px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1rem' }} className="animate-on-load">Guidelines for Residents</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            To ensure a peaceful and secure living environment, all hostel residents must strictly follow these rules and regulations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {rules.map((rule, idx) => (
            <div key={idx} className="glass-panel hover-lift card-3d" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              {/* Decorative background shape */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: rule.bg,
                opacity: 0.5,
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '16px', 
                  backgroundColor: rule.bg, 
                  color: rule.color,
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '1.5rem' 
                }}>
                  {rule.icon}
                </div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.25rem' }} className="animate-on-load">
                  {rule.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel card-3d" style={{ marginTop: '4rem', padding: '3rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', color: 'white' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem', opacity: 0.9 }}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'white' }} className="animate-on-load">Failure to Comply</h3>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
            Violation of these rules may result in disciplinary action, including expulsion from the hostel or the institution. Management reserves the right to amend these rules as deemed necessary.
          </p>
        </div>

      </section>
    </main>
  );
}
