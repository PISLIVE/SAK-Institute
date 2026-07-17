import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export const metadata = {
  title: 'Admissions | SAK College of Nursing',
  description: 'Start your journey with SAK College of Nursing. Find all information regarding admissions, fees, and procedures.',
};

export default function AdmissionLandingPage() {
  const admissionLinks = [
    {
      title: "Apply Online",
      href: "/admission/apply",
      desc: "Ready to start? Fill out our online application form to secure your seat for the upcoming academic year.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
      ),
      isHighlight: true
    },
    {
      title: "Admission Procedure",
      href: "/admission/procedure",
      desc: "Learn about our step-by-step admission process, eligibility criteria, and required documentation.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      )
    },
    {
      title: "Fees Structure",
      href: "/admission/fees",
      desc: "Detailed breakdown of academic fees, hostel charges, and payment schedules for all nursing programs.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
      )
    },
    {
      title: "Download Prospectus",
      href: "/admission/prospectus",
      desc: "Get a comprehensive overview of our college, curriculum, and campus life in our official prospectus.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
      )
    },
    {
      title: "Merit List",
      href: "/admission/merit-list",
      desc: "Check the latest merit lists and admission status for the current academic session.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      )
    },
    {
      title: "Bank Details",
      href: "/admission/bank-details",
      desc: "Official bank account details for fee remittance and online payment instructions.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
      )
    }
  ];

  return (
    <main style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      <PageHeader title="Admissions Center" breadcrumb="Admissions" />
      
      {/* Hero / Intro Section */}
      <section className="container" style={{ padding: '6rem 0 4rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '0.5rem 1.5rem', 
            backgroundColor: 'rgba(13, 148, 136, 0.1)', 
            color: 'var(--primary-color)', 
            borderRadius: '50px',
            fontWeight: '600',
            marginBottom: '1.5rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontSize: '0.85rem'
          }}>
            Admissions Open for 2026-27
          </div>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: '1.2' }} className="animate-on-load">
            Your Journey to Excellence <br/>
            <span className="gradient-text">Starts Here.</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '3rem' }}>
            At SAK College of Nursing, we are committed to nurturing the next generation of compassionate, highly-skilled healthcare professionals. Explore our admission guidelines and take the first step toward a rewarding career in nursing.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="container" style={{ paddingBottom: '6rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {admissionLinks.map((item, idx) => (
            <Link key={idx} href={item.href} style={{ textDecoration: 'none', display: 'block' }}>
              <div 
                className={`glass-panel hover-lift ${item.isHighlight ? 'highlight-card' : ''}`}
                style={{ 
                  padding: '3rem 2.5rem', 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  position: 'relative', 
                  overflow: 'hidden',
                  background: item.isHighlight ? 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' : 'var(--surface-color)',
                  color: item.isHighlight ? 'white' : 'var(--text-primary)',
                  border: item.isHighlight ? 'none' : 'var(--glass-border)',
                  boxShadow: item.isHighlight ? '0 20px 40px rgba(13, 148, 136, 0.25)' : 'var(--glass-shadow)',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease'
                }}
              >
                
                {/* Background decorative blob */}
                {!item.isHighlight && (
                  <div style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(13, 148, 136, 0.04)',
                    zIndex: 0
                  }}></div>
                )}

                <div style={{ position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ 
                    width: '75px', 
                    height: '75px', 
                    borderRadius: '24px', 
                    backgroundColor: item.isHighlight ? 'rgba(255,255,255,0.2)' : 'rgba(13, 148, 136, 0.1)', 
                    color: item.isHighlight ? 'white' : 'var(--primary-color)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginBottom: '2rem',
                    backdropFilter: item.isHighlight ? 'blur(10px)' : 'none'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.75rem', 
                    marginBottom: '1rem',
                    color: item.isHighlight ? 'white' : 'var(--text-primary)'
                  }} className="animate-on-load">
                    {item.title}
                  </h3>
                  <p style={{ 
                    fontSize: '1.1rem',
                    color: item.isHighlight ? 'rgba(255,255,255,0.9)' : 'var(--text-secondary)', 
                    lineHeight: '1.7',
                    flexGrow: 1,
                    marginBottom: '2.5rem'
                  }}>
                    {item.desc}
                  </p>
                  
                  <div style={{ 
                    color: item.isHighlight ? 'white' : 'var(--primary-color)', 
                    fontWeight: '700', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    marginTop: 'auto',
                    fontSize: '1.05rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {item.isHighlight ? "Start Application" : "View Details"}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Help / Contact Section */}
      <section style={{ backgroundColor: 'white', padding: '6rem 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }} className="animate-on-load">Need Guidance?</h3>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
              Our admission counselors are here to help you navigate the process, choose the right course, and answer any questions you might have.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(13, 148, 136, 0.1)', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Call Us</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>+91 8884330808</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(13, 148, 136, 0.1)', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Us</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>info@sakcollege.edu</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: '0 0 auto' }}>
             <Link href="/contact" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px' }}>
                Contact Support
             </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
