import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'GNM | Courses Offered',
  description: 'General Nursing and Midwifery (GNM) program details.',
};

export default function GNMPage() {
  return (
    <main>
      <PageHeader title="General Nursing & Midwifery (GNM)" breadcrumb="Courses / GNM" />
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2rem' }}>Program Overview</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              The GNM program is designed to prepare general nurses who will function as members of the health team beginning with consultancies for first-level positions in both hospitals and community health environments.
            </p>
            <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-color)' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Eligibility Criteria</h3>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
                <li>10+2 with English and must have obtained a minimum of 40% at the qualifying examination.</li>
                <li>Candidates are also eligible from State Open School recognized by State Government and National Institute of Open School (NIOS).</li>
                <li>Minimum age for admission will be 17 years.</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="glass-panel" style={{ padding: '2rem', background: 'var(--primary-color)', color: 'white' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'white' }}>Course Highlights</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Duration</span>
                <span>3 Years</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Intake Capacity</span>
                <span>60 Seats</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Mode</span>
                <span>Full-Time, On-Campus</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
