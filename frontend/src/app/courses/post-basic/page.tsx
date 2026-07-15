import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Post Basic B.Sc. Nursing | Courses Offered',
  description: 'Post Basic B.Sc. Nursing program details.',
};

export default function PostBasicBScNursingPage() {
  return (
    <main>
      <PageHeader title="Post Basic B.Sc. Nursing" breadcrumb="Courses / Post Basic B.Sc." />
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2rem' }}>Program Overview</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Designed for registered nurses holding a GNM diploma, this program upgrades their qualifications to a bachelor's degree, expanding their clinical expertise and career opportunities.
            </p>
            <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-color)' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Eligibility Criteria</h3>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
                <li>Passed Higher Secondary/Senior Secondary/Intermediate/10+2 or an equivalent examination.</li>
                <li>Obtained a certificate in General Nursing and Midwifery (GNM) and registered as R.N.R.M. with the State Nurses Registration Council.</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="glass-panel" style={{ padding: '2rem', background: 'var(--primary-color)', color: 'white' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'white' }}>Course Highlights</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Duration</span>
                <span>2 Years</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Intake Capacity</span>
                <span>40 Seats</span>
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
