import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'M.Sc. Nursing | Courses Offered',
  description: 'Master of Science in Nursing program details.',
};

export default function MScNursingPage() {
  return (
    <main>
      <PageHeader title="M.Sc. Nursing" breadcrumb="Courses / M.Sc. Nursing" />
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2rem' }} className="animate-on-load">Program Overview</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              A specialized postgraduate program aimed at preparing advanced nursing practitioners, educators, and researchers. Students can specialize in Medical-Surgical, Pediatrics, OBG, Community Health, or Psychiatry.
            </p>
            <div className="glass-panel card-3d" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-color)' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} className="animate-on-load">Eligibility Criteria</h3>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
                <li>B.Sc. Nursing/B.Sc. Hons. Nursing/Post Basic B.Sc. Nursing with minimum of 55% aggregate marks.</li>
                <li>Minimum one year of work experience after Basic B.Sc. Nursing.</li>
                <li>Registered Nurse and Registered Midwife with any State Nursing Registration Council.</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="glass-panel card-3d" style={{ padding: '2rem', background: 'var(--primary-color)', color: 'white' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'white' }} className="animate-on-load">Course Highlights</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Duration</span>
                <span>2 Years</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Intake Capacity</span>
                <span>25 Seats</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Specializations</span>
                <span>5 Disciplines</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
