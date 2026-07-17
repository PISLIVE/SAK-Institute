import PageHeader from '@/components/PageHeader';
import ApplicationForm from '@/components/ApplicationForm';

export const metadata = {
  title: 'Online Application | SAK College of Nursing',
  description: 'Apply online for nursing programs at SAK College of Nursing.',
};

export default function OnlineApplicationPage() {
  return (
    <main>
      <PageHeader title="Online Application" breadcrumb="Apply Now" />
      
      <section style={{ padding: '5rem 1rem 8rem 1rem', background: '#f8fafc', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'var(--primary-color)',
          filter: 'blur(100px)',
          opacity: 0.05,
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'var(--secondary-color)',
          filter: 'blur(120px)',
          opacity: 0.05,
          zIndex: 0
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
              Start Your Journey
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Please fill out the application form carefully. Ensure all details match your official documents.
            </p>
          </div>
          
          <div className="animate-on-load">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
