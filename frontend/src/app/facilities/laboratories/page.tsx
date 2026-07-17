import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Laboratories | Facilities',
  description: 'State-of-the-art nursing laboratories at SAK College of Nursing.',
};

export default function LaboratoriesPage() {
  return (
    <main>
      <PageHeader title="Nursing Laboratories" breadcrumb="Facilities / Laboratories" />
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem' }} className="animate-on-load">Hands-on Clinical Training</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '1rem auto' }}>
            Before stepping into a real hospital, our students master their clinical skills in highly realistic, simulated laboratory environments.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-panel card-3d" style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} className="animate-on-load">Nursing Foundation Lab</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Equipped with advanced patient simulators to practice fundamental nursing procedures safely.</p>
          </div>
          <div className="glass-panel card-3d" style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} className="animate-on-load">Anatomy & Physiology Lab</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Features detailed anatomical charts, articulated skeletons, and organ models.</p>
          </div>
          <div className="glass-panel card-3d" style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} className="animate-on-load">MCH & Pediatric Lab</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Simulates a maternity ward for practicing labor, delivery, and neonatal care.</p>
          </div>
          <div className="glass-panel card-3d" style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} className="animate-on-load">Nutrition Lab</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Designed for training students in therapeutic diet planning and preparation.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
