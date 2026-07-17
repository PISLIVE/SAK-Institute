import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Merit List | SAK College of Nursing',
  description: 'View the latest admission merit lists for SAK College of Nursing.',
};

export default function MeritListPage() {
  return (
    <main>
      <PageHeader title="Merit List for Admission" breadcrumb="Merit List" />
      
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)' }} className="animate-on-load">Latest Announcements</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto' }}>Check your admission status and counselling dates from the lists below.</p>
        </div>

        <div className="glass-panel card-3d" style={{ padding: '4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(to bottom, #ffffff, #f8fafc)' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem', opacity: 0.8 }}>📋</div>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }} className="animate-on-load">Academic Session 2024-2025</h3>
          <p style={{ color: 'var(--text-secondary)', margin: '0 auto 2.5rem auto', maxWidth: '500px', lineHeight: '1.7', fontSize: '1.1rem' }}>
            The merit list for the upcoming academic session is currently being compiled. Shortlisted candidates will be notified via email and SMS once the list is officially published here.
          </p>
          <div style={{ display: 'inline-flex', gap: '1rem', alignItems: 'center' }}>
            <button className="btn-primary" disabled style={{ padding: '1rem 2rem', opacity: 0.5, cursor: 'not-allowed' }}>
              Download Merit List PDF
            </button>
            <span style={{ color: '#ef4444', fontWeight: 600, fontSize: '0.9rem', padding: '0.5rem 1rem', background: '#fef2f2', borderRadius: '20px' }}>Not yet published</span>
          </div>
        </div>

        {/* Previous Years Archive (Placeholder) */}
        <div style={{ marginTop: '5rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', display: 'inline-block' }} className="animate-on-load">Previous Years' Archives</h3>
          <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: 'white', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary-color)' }}>Final Merit List - Session 2023-2024</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Published on: 15th August 2023</p>
              </div>
              <button disabled style={{ padding: '0.5rem 1rem', background: '#f1f5f9', color: '#64748b', border: 'none', borderRadius: '4px', cursor: 'not-allowed' }}>Archived</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: 'white', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary-color)' }}>Final Merit List - Session 2022-2023</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Published on: 20th August 2022</p>
              </div>
              <button disabled style={{ padding: '0.5rem 1rem', background: '#f1f5f9', color: '#64748b', border: 'none', borderRadius: '4px', cursor: 'not-allowed' }}>Archived</button>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
