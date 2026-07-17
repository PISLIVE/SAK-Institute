import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import styles from './Procedure.module.css';

export const metadata = {
  title: 'Admission Procedure | SAK College of Nursing',
  description: 'Learn about the step-by-step admission procedure at SAK College of Nursing.',
};

export default function AdmissionProcedurePage() {
  const steps = [
    {
      title: "Enquiry & Information Gathering",
      description: "Candidates can visit the college campus or contact our expert admission counselors to fully understand the eligibility criteria, course details, and career prospects.",
    },
    {
      title: "Submission of Application Form",
      description: "Fill out the application form available on our online portal or collect a physical copy from the admission office. Submit it along with the required processing fee.",
    },
    {
      title: "Document Verification",
      description: "Shortlisted candidates will be invited for document verification. You will need to present all original academic certificates, ID proofs, and recent passport-sized photographs.",
    },
    {
      title: "Final Admission & Fee Payment",
      description: "Upon successful verification, candidates must pay the initial admission fee to officially secure their seat and begin their journey in the respective nursing program.",
    }
  ];

  return (
    <main className={styles.pageWrapper}>
      <PageHeader title="Admission Procedure" breadcrumb="Admission Procedure" />
      
      <section className={styles.timelineSection}>
        <h2 className={styles.title}>Your Path to Nursing Excellence</h2>
        
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <div className={styles.contentCard}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h2>Ready to Take the First Step?</h2>
          <p>Join the next generation of healthcare leaders. Our online application portal is open and waiting for your submission.</p>
          <Link href="/admission/online-application" className={styles.ctaBtn}>
            Apply Online Now
          </Link>
        </div>
      </section>
    </main>
  );
}
