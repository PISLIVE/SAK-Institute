import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Bank Details | SAK College of Nursing',
  description: 'Official bank details for fee payment at SAK College of Nursing.',
};

export default function BankDetailsPage() {
  return (
    <main>
      <PageHeader title="Bank Details" breadcrumb="Bank Details" />
      
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          
          {/* Left Column: Bank Account Info */}
          <div className="glass-panel card-3d" style={{ padding: '3rem', borderTop: '4px solid var(--accent-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '3rem', background: '#f0fdfa', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--primary-color)' }}>🏦</div>
              <div>
                <h3 style={{ color: 'var(--text-primary)', margin: '0 0 0.5rem 0', fontSize: '1.5rem' }} className="animate-on-load">Official Account</h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>For NEFT / RTGS / IMPS Transfers</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #cbd5e1', paddingBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Account Name</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 700, textAlign: 'right' }}>SAK College of Nursing</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #cbd5e1', paddingBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Bank Name</span>
                <span style={{ color: 'var(--text-primary)', textAlign: 'right' }}>[Bank Name Here]</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #cbd5e1', paddingBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Account Number</span>
                <span style={{ color: 'var(--text-primary)', fontFamily: 'monospace', fontSize: '1.1rem', textAlign: 'right' }}>0000 0000 0000</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #cbd5e1', paddingBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>IFSC Code</span>
                <span style={{ color: 'var(--text-primary)', fontFamily: 'monospace', fontSize: '1.1rem', textAlign: 'right' }}>ABCD0123456</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Branch</span>
                <span style={{ color: 'var(--text-primary)', textAlign: 'right' }}>Guwahati Main Branch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Instructions */}
          <div style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }} className="animate-on-load">Payment Instructions</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7' }}>
              To ensure a smooth fee payment process and immediate confirmation of your admission or semester renewal, please strictly adhere to the following guidelines:
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}>✓</span>
                <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>Always mention the <strong>Student Name and Course Name</strong> in the transaction remarks/narration.</p>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}>✓</span>
                <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>Save a screenshot of the successful transaction or keep the bank receipt safe.</p>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}>✓</span>
                <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>Email the receipt to <strong>accounts@sakcollege.edu</strong> within 24 hours of the transfer.</p>
              </li>
            </ul>

            <div style={{ marginTop: '2.5rem', padding: '1.5rem', backgroundColor: '#fffbeb', borderLeft: '4px solid #f59e0b', color: '#92400e', borderRadius: '0 8px 8px 0', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <strong>Important Notice:</strong> We do not accept cash payments above ₹20,000 at the campus counter. All major tuition fees must be processed electronically.
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
