import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Fees Structure | SAK College of Nursing',
  description: 'View the fee structure for various nursing programs at SAK College of Nursing.',
};

export default function FeesStructurePage() {
  return (
    <main>
      <PageHeader title="Fees Structure" breadcrumb="Fees Structure" />
      
      <section className="container" style={{ padding: '4rem 0' }}>
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '2rem', textAlign: 'center' }} className="animate-on-load">Program Fees</h2>
        <div className="glass-panel card-3d" style={{ padding: '2rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--primary-color)' }}>
                <th style={{ padding: '1rem', color: 'var(--text-primary)' }}>Program Name</th>
                <th style={{ padding: '1rem', color: 'var(--text-primary)' }}>Duration</th>
                <th style={{ padding: '1rem', color: 'var(--text-primary)' }}>Admission Fee (1st Year)</th>
                <th style={{ padding: '1rem', color: 'var(--text-primary)' }}>Tuition Fee (Per Year)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '1rem' }}>GNM (General Nursing)</td>
                <td style={{ padding: '1rem' }}>3 Years</td>
                <td style={{ padding: '1rem' }}>₹ --,---</td>
                <td style={{ padding: '1rem' }}>₹ --,---</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '1rem' }}>B.Sc. Nursing</td>
                <td style={{ padding: '1rem' }}>4 Years</td>
                <td style={{ padding: '1rem' }}>₹ --,---</td>
                <td style={{ padding: '1rem' }}>₹ --,---</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '1rem' }}>Post Basic B.Sc. Nursing</td>
                <td style={{ padding: '1rem' }}>2 Years</td>
                <td style={{ padding: '1rem' }}>₹ --,---</td>
                <td style={{ padding: '1rem' }}>₹ --,---</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem' }}>M.Sc. Nursing</td>
                <td style={{ padding: '1rem' }}>2 Years</td>
                <td style={{ padding: '1rem' }}>₹ --,---</td>
                <td style={{ padding: '1rem' }}>₹ --,---</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>* Note: Fees are subject to change based on university guidelines. Hostel and transport fees are charged separately.</p>
        </div>
      </section>
    </main>
  );
}
