import PageHeader from '@/components/PageHeader';
import styles from './Contact.module.css';

export const metadata = {
  title: 'Contact Us | SAK College of Nursing',
  description: 'Get in touch with SAK Group of Institutions for admissions, inquiries, or more information.',
};

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      <PageHeader title="Contact Us" breadcrumb="Contact" />

      <section className="container">
        <div className={styles.contactGrid}>

          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.description}>
              Have questions about our nursing programs, admissions, or campus facilities?
              Reach out to our dedicated support team.
            </p>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.icon}>📍</div>
                <div>
                  <h3 className="animate-on-load">Campus Address</h3>
                  <p>SAK College Campus<br />Guwahati, Assam</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>📞</div>
                <div>
                  <h3 className="animate-on-load">Call Us</h3>
                  <p>+91 884330808</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>✉️</div>
                <div>
                  <h3 className="animate-on-load">Email Us</h3>
                  <p>info@sakcollege.edu<br />admissions@sakcollege.edu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.contactFormWrapper}>
            <div className={styles.formCard}>
              <h3 className="animate-on-load">Send us a Message</h3>
              <form className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="john@example.com" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="+91 98765 43210" required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" required>
                    <option value="">Select an option</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="courses">Course Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="How can we help you?" required></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.73587637841!2d91.68832968383804!3d26.143210452336344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133ff%3A0x2bbd1332436bde32!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
