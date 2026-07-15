import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Apply Online | SAK College of Nursing',
  description: 'Apply online for nursing programs at SAK College of Nursing.',
};

export default function ApplyOnlinePage() {
  const programs = [
    { title: 'GNM (General Nursing)', icon: '/sak-logo.png', link: '/admission/procedure' },
    { title: 'B.Sc. Nursing', icon: '/sak-logo.png', link: '/admission/procedure' },
    { title: 'Post Basic B.Sc. Nursing', icon: '/sak-logo.png', link: '/admission/procedure' },
    { title: 'M.Sc. Nursing', icon: '/sak-logo.png', link: '/admission/procedure' },
  ];

  return (
    <main>
      <PageHeader title="Apply Online" breadcrumb="Apply Online" />
      
      <section style={{ padding: '5rem 1rem 8rem 1rem', background: '#f8fafc' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          
          <h2 style={{ fontSize: '1.8rem', color: '#334155', marginBottom: '2.5rem', fontWeight: 600 }}>
            Welcome to Online Admission Portal
          </h2>
          
          {/* Main College Card */}
          <div style={{ 
            maxWidth: '380px', 
            margin: '0 auto 2rem auto', 
            background: 'white', 
            borderRadius: '12px',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            <div style={{ height: '160px', position: 'relative', borderBottom: '1px solid #e2e8f0' }}>
               <Image 
                  src="/gallery1.jpeg" 
                  alt="SAK College Campus" 
                  fill 
                  style={{objectFit: 'cover'}} 
               />
            </div>
            <div style={{ 
              background: '#f1f5f9', 
              padding: '1.2rem', 
              fontWeight: 700, 
              color: 'var(--primary-color)',
              fontSize: '1.1rem',
              letterSpacing: '0.5px'
            }}>
              SAK College of Nursing
            </div>
          </div>

          {/* Contact Details */}
          <div style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Opp. Govt. Hospital, Main Road, City Center, State, India - 123456<br/>
            Phone No. : +91 98765 43210 , Email: admission@sakcollege.com
          </div>

          {/* Subheading */}
          <p style={{ color: '#334155', fontWeight: 600, marginBottom: '2.5rem', fontSize: '1.05rem' }}>
            Please click on the program link below where you seek admission.
          </p>

          {/* Program Cards Grid */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {programs.map((prog, idx) => (
              <Link href={prog.link} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{ 
                  width: '240px', 
                  background: 'white', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  overflow: 'hidden',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  border: '1px solid #e2e8f0'
                }}
                className="hover-lift"
                >
                  <div style={{ padding: '2rem 1rem' }}>
                    <div style={{ width: '80px', height: '80px', position: 'relative', margin: '0 auto' }}>
                      <Image src={prog.icon} alt={prog.title} fill style={{objectFit: 'contain'}} />
                    </div>
                  </div>
                  <div style={{ 
                    background: '#f8fafc', 
                    width: '100%', 
                    padding: '1.2rem 1rem', 
                    color: '#475569',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    borderTop: '1px solid #e2e8f0',
                    minHeight: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}>
                    {prog.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
