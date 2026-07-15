import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Transport | Facilities',
  description: 'Transportation facilities at SAK College of Nursing.',
};

export default function TransportPage() {
  return (
    <main>
      <PageHeader title="Transport Facility" breadcrumb="Facilities / Transport" />
      <section className="container" style={{ padding: '4rem 0 6rem 0', minHeight: '50vh', textAlign: 'center' }}>
        <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 3rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem', opacity: 0.8 }}>🚌</div>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>College Fleet</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            SAK College of Nursing maintains a dedicated fleet of buses for the safe and comfortable transportation of our students and staff. 
            These buses operate on scheduled routes covering major areas of the city and provide daily transport to and from affiliated hospitals for clinical postings and community health visits.
          </p>
        </div>
      </section>
    </main>
  );
}
