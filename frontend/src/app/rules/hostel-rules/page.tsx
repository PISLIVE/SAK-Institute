import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Hostel Rules | Rules',
  description: 'Hostel rules and regulations at SAK College of Nursing.',
};

export default function HostelRulesPage() {
  return (
    <main>
      <PageHeader title="Hostel Rules & Regulations" breadcrumb="Rules / Hostel Rules" />
      <section className="container" style={{ padding: '4rem 0 6rem 0', maxWidth: '800px' }}>
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>Guidelines for Residents</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
            To ensure a peaceful and secure living environment, all hostel residents must strictly follow these rules:
          </p>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li>Students are not allowed to leave the hostel premises without prior written permission from the Warden.</li>
            <li>Hostel timings (in-time and out-time) must be strictly adhered to.</li>
            <li>Visitors and parents are allowed only during specified visiting hours and must wait in the designated visitor's lounge.</li>
            <li>Use of heavy electrical appliances (heaters, induction cooktops) inside rooms is strictly prohibited for safety reasons.</li>
            <li>Students must maintain silence during study hours and respect the privacy of their roommates.</li>
            <li>Any medical emergency must be immediately reported to the Warden.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
