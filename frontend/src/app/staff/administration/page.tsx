import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Administration | Staff',
  description: 'Administrative and support staff at SAK College of Nursing.',
};

export default function AdministrationPage() {
  return (
    <main>
      <PageHeader title="Administrative Staff" breadcrumb="Staff / Administration" />
      <section className="container" style={{ padding: '4rem 0 6rem 0', minHeight: '50vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem' }}>The Backbone of SAK College</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '1rem auto' }}>
            Our dedicated administrative, technical, and support staff ensure the smooth day-to-day operations of the college, hostels, and clinical facilities.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Admission Cell</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Handling all student enrollments, counseling, and document verification.</p>
          </div>
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Accounts Department</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Managing fee collections, scholarships, and financial assistance.</p>
          </div>
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Hostel Wardens</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Ensuring the safety, discipline, and well-being of residential students.</p>
          </div>
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Library & IT Support</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Maintaining academic resources and digital infrastructure across campus.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
