import PageHeader from '@/components/PageHeader';
import styles from './Contact.module.css';
import ContactForm from './ContactForm';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

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
                <div className={styles.icon}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="animate-on-load">Campus Address</h3>
                  <p>SAK College Campus<br />Banglore, India</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="animate-on-load">Call Us</h3>
                  <p>+91 8884330808</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="animate-on-load">Email Us</h3>
                  <p>info@sakcollege.edu<br />admissions@sakcollege.edu</p>
                </div>
              </div>
            </div>

            <div className={styles.socialFollow}>
              <h3>Follow Our Journey</h3>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialBtn}><FaFacebookF style={{ marginRight: '6px' }}/> Facebook</a>
                <a href="#" className={styles.socialBtn}><FaTwitter style={{ marginRight: '6px' }}/> Twitter</a>
                <a href="#" className={styles.socialBtn}><FaInstagram style={{ marginRight: '6px' }}/> Instagram</a>
              </div>
            </div>
          </div>

          {/* Contact Form Component */}
          <div className={styles.contactFormWrapper}>
            <ContactForm />
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
