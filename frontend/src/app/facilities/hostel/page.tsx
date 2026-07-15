import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Hostel & Mess | Facilities',
  description: 'Residential facilities at SAK College of Nursing.',
};

export default function HostelPage() {
  return (
    <main>
      <PageHeader title="Hostel & Mess" breadcrumb="Facilities / Hostel" />
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div className="glass-panel" style={{ padding: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '2rem' }}>A Home Away From Home</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              We offer safe, secure, and comfortable hostel accommodations for our students. The hostels are designed to provide a conducive environment for both studying and relaxation.
            </p>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.2rem', marginBottom: '2rem' }}>
              <li>24/7 Security & CCTV Surveillance</li>
              <li>Spacious, well-ventilated rooms</li>
              <li>Wi-Fi enabled campus</li>
              <li>Recreation room with TV and indoor games</li>
              <li>On-campus medical assistance</li>
            </ul>
          </div>
          <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '8px' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Mess Facilities</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              The central mess provides hygienic, nutritious, and balanced meals (both vegetarian and non-vegetarian) prepared in a modern kitchen. The menu is regularly updated in consultation with the student committee.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
