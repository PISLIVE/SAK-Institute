import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Guest Lecturers | Staff',
  description: 'Our esteemed guest lecturers and visiting faculty.',
};

export default function GuestLecturersPage() {
  return (
    <main>
      <PageHeader title="Guest Lecturers" breadcrumb="Staff / Guest Lecturers" />
      <section className="container" style={{ padding: '4rem 0 6rem 0', minHeight: '50vh', textAlign: 'center' }}>
        <div className="glass-panel card-3d" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 3rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem', opacity: 0.8 }}>🎙️</div>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} className="animate-on-load">Visiting Faculty & Experts</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            SAK College of Nursing regularly invites renowned medical practitioners, specialist doctors, and global nursing leaders to conduct seminars, workshops, and specialized guest lectures. 
            This ensures our students gain exposure to the latest advancements and real-world clinical scenarios beyond the standard curriculum.
          </p>
        </div>
      </section>
    </main>
  );
}
