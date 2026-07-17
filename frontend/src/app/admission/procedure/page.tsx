import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Admission Procedure | SAK College of Nursing',
  description: 'Learn about the step-by-step admission procedure at SAK College of Nursing.',
};

export default function AdmissionProcedurePage() {
  return (
    <main>
      <PageHeader title="Admission Procedure" breadcrumb="Admission Procedure" />
      
      <section className="container" style={{ padding: '4rem 0' }}>
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }} className="animate-on-load">How to Apply</h2>
        <div style={{ display: 'grid', gap: '2rem' }}>
          <div className="glass-panel card-3d" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--accent-color)' }} className="animate-on-load">Step 1: Enquiry & Information Gathering</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Candidates can visit the college campus or contact our admission counselors to understand the eligibility criteria and course details.</p>
          </div>
          <div className="glass-panel card-3d" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--accent-color)' }} className="animate-on-load">Step 2: Submission of Application Form</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Fill out the application form available online or collect it from the admission office. Submit it along with the required processing fee.</p>
          </div>
          <div className="glass-panel card-3d" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--accent-color)' }} className="animate-on-load">Step 3: Document Verification</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Shortlisted candidates will be called for document verification. Bring all original academic certificates, ID proofs, and photographs.</p>
          </div>
          <div className="glass-panel card-3d" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--accent-color)' }} className="animate-on-load">Step 4: Final Admission & Fee Payment</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Upon successful verification, candidates must pay the admission fee to secure their seat in the respective nursing program.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
