import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Code of Conduct | Rules',
  description: 'Student Code of Conduct at SAK College of Nursing.',
};

export default function CodeOfConductPage() {
  return (
    <main>
      <PageHeader title="Code of Conduct" breadcrumb="Rules / Code of Conduct" />
      <section className="container" style={{ padding: '4rem 0 6rem 0', maxWidth: '800px' }}>
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>Discipline & Professionalism</h2>
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
            Nursing is a noble and highly disciplined profession. SAK College expects all students to maintain the highest standards of personal and professional conduct on and off campus.
          </p>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li>Students must wear the prescribed, clean, and ironed uniform during clinical postings and college hours.</li>
            <li>Punctuality is mandatory. Latecomers will not be allowed to attend classes or clinical rotations.</li>
            <li>Use of mobile phones is strictly prohibited in classrooms, laboratories, and hospital wards.</li>
            <li>Respectful behavior towards faculty, staff, patients, and fellow students is required at all times.</li>
            <li>Any form of indiscipline, insubordination, or damage to college property will result in strict disciplinary action.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
