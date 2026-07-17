import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Code of Conduct | SAK College of Nursing',
  description: 'Student Code of Conduct and professional guidelines at SAK College of Nursing.',
};

export default function CodeOfConductPage() {
  const conductRules = [
    {
      title: "Professional Uniform",
      desc: "Students must wear the prescribed, clean, and ironed uniform during clinical postings and college hours.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
      ),
      color: "var(--primary-color)",
      bg: "rgba(13, 148, 136, 0.1)"
    },
    {
      title: "Punctuality",
      desc: "Punctuality is mandatory. Latecomers will not be allowed to attend classes or clinical rotations.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      ),
      color: "var(--secondary-color)",
      bg: "rgba(2, 132, 199, 0.1)"
    },
    {
      title: "Mobile Phones",
      desc: "Use of mobile phones is strictly prohibited in classrooms, laboratories, and hospital wards.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="8" y1="2" x2="16" y2="2"></line></svg>
      ),
      color: "#ef4444",
      bg: "rgba(239, 68, 68, 0.1)"
    },
    {
      title: "Respectful Behavior",
      desc: "Respectful behavior towards faculty, staff, patients, and fellow students is required at all times.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      ),
      color: "var(--accent-color)",
      bg: "rgba(20, 184, 166, 0.1)"
    },
    {
      title: "Strict Discipline",
      desc: "Any form of indiscipline, insubordination, or damage to college property will result in strict disciplinary action.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      ),
      color: "#8b5cf6",
      bg: "rgba(139, 92, 246, 0.1)"
    }
  ];

  return (
    <main>
      <PageHeader title="Code of Conduct" breadcrumb="Rules / Code of Conduct" />
      
      <section className="container" style={{ padding: '2rem 0 6rem 0', maxWidth: '1100px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-on-load">
          <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1rem' }}>Discipline & Professionalism</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            Nursing is a noble and highly disciplined profession. SAK College expects all students to maintain the highest standards of personal and professional conduct on and off campus.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {conductRules.map((rule, idx) => (
            <div key={idx} className="glass-panel card-3d staggered-entry" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden', animationDelay: `${0.1 * (idx + 1)}s` }}>
              {/* Decorative background shape */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: rule.bg,
                opacity: 0.6,
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
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>
                  {rule.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
