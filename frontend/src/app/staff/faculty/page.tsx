import PageHeader from '@/components/PageHeader';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';

export const metadata = {
  title: 'Core Faculty | Staff',
  description: 'Meet the core teaching faculty at SAK College of Nursing.',
};

export const dynamic = 'force-dynamic';

export default async function FacultyPage() {
  const dbFaculty = await prisma.faculty.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'asc' }
  });

  return (
    <main>
      <PageHeader title="Core Faculty" breadcrumb="Staff / Core Faculty" />
      <section className="container" style={{ padding: '4rem 0 6rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem' }} className="animate-on-load">Our Expert Educators</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '1rem auto' }}>
            Our faculty members are highly qualified, experienced professionals dedicated to mentoring the next generation of nursing leaders.
          </p>
        </div>

        {dbFaculty.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>Faculty profiles will be updated shortly.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {dbFaculty.map((faculty, index) => (
              <div key={faculty.id} className="glass-panel card-3d animate-on-load" style={{ padding: '2rem', textAlign: 'center', borderTop: '4px solid var(--primary-color)', animationDelay: `${0.1 * index}s` }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#f1f5f9', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', overflow: 'hidden', position: 'relative' }}>
                  {faculty.imageUrl ? (
                    <Image src={faculty.imageUrl} alt={faculty.name} fill style={{ objectFit: 'cover' }} />
                  ) : (
                    '👩‍🏫'
                  )}
                </div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{faculty.name}</h3>
                <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{faculty.designation}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{faculty.qualification}</p>
                {faculty.department && <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.8 }}>Dept: {faculty.department}</p>}
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
