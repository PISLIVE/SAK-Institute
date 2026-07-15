import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'B.Sc. Nursing | Courses Offered',
  description: 'Bachelor of Science in Nursing program details.',
};

export default function BScNursingPage() {
  return (
    <main>
      <PageHeader title="B.Sc. Nursing" breadcrumb="Courses / B.Sc. Nursing" />
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2rem' }}>Program Overview</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              The B.Sc. Nursing program prepares students to become competent professional nurses who can provide comprehensive care in preventive, promotive, curative, and rehabilitative health sectors.
            </p>
            <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-color)' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Eligibility Criteria</h3>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
                <li>10+2 class passed with Science (PCB) & English Core/English Elective with aggregate of 45% marks.</li>
                <li>Students appearing in 10+2 examination in Science conducted by National Institute of Open School with 45% marks.</li>
                <li>Minimum age for admission will be 17 years.</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="glass-panel" style={{ padding: '2rem', background: 'var(--primary-color)', color: 'white' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'white' }}>Course Highlights</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Duration</span>
                <span>4 Years (8 Semesters)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Intake Capacity</span>
                <span>100 Seats</span>
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
