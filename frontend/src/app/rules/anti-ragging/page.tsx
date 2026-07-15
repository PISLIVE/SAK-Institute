import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Anti-Ragging Policy | Rules',
  description: 'Anti-ragging policy at SAK College of Nursing.',
};

export default function AntiRaggingPage() {
  return (
    <main>
      <PageHeader title="Anti-Ragging Policy" breadcrumb="Rules / Anti-Ragging" />
      <section className="container" style={{ padding: '4rem 0 6rem 0', maxWidth: '800px' }}>
        <div className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid #ef4444' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ fontSize: '3rem' }}>🛑</div>
            <div>
              <h2 style={{ color: '#ef4444', margin: '0 0 0.5rem 0' }}>Zero Tolerance Policy</h2>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Ragging is a criminal offense.</p>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
            SAK College of Nursing maintains a strict zero-tolerance policy towards ragging in any form. We are committed to providing a safe, secure, and welcoming environment for all freshers.
          </p>
          <div style={{ background: '#fef2f2', padding: '1.5rem', borderRadius: '8px', color: '#991b1b', marginBottom: '2rem' }}>
            <strong>Action against Ragging:</strong> Any student found guilty of ragging or abetting ragging will face immediate suspension, cancellation of admission, and will be reported to the police as per the directives of the Supreme Court of India and INC guidelines.
          </div>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Anti-Ragging Committee</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            An active Anti-Ragging Committee and Squad patrol the campus and hostels to prevent any incidents. Students in distress can contact the toll-free national anti-ragging helpline or immediately reach out to the college principal.
          </p>
        </div>
      </section>
    </main>
  );
}
