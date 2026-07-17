import PageHeader from '@/components/PageHeader';
import Image from 'next/image';

export const metadata = {
  title: 'Library | Facilities',
  description: 'Central Library of SAK College of Nursing.',
};

export default function LibraryPage() {
  return (
    <main>
      <PageHeader title="Central Library" breadcrumb="Facilities / Library" />
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <Image 
              src="/gallery8.jpeg" 
              alt="Central Library" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2.5rem' }} className="animate-on-load">Knowledge Hub</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Our spacious, well-lit Central Library is the heart of academic life at SAK College. It houses a vast collection of medical and nursing literature to support our students' research and studies.
            </p>
            <div className="glass-panel card-3d" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} className="animate-on-load">Library Resources</h3>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <li>10,000+ Reference Books</li>
                <li>National & International Journals</li>
                <li>Digital Library (E-books & E-journals)</li>
                <li>High-speed Wi-Fi Access</li>
                <li>Quiet Reading Zones</li>
                <li>Audio-Visual Room</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
