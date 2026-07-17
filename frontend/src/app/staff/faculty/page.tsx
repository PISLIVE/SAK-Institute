import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Core Faculty | Staff',
  description: 'Meet the core teaching faculty at SAK College of Nursing.',
};

export default function FacultyPage() {
  const facultyList = [
    { name: 'Prof. Mary Kom', designation: 'Vice Principal & HOD OBG', qualification: 'M.Sc. Nursing (OBG)' },
    { name: 'Dr. Sarah Johnson', designation: 'Professor & HOD Med-Surg', qualification: 'Ph.D., M.Sc. Nursing' },
    { name: 'Prof. Robert Smith', designation: 'Professor & HOD Community Health', qualification: 'M.Sc. Nursing' },
    { name: 'Dr. Emily Chen', designation: 'Associate Professor, Pediatrics', qualification: 'Ph.D., M.Sc. Nursing' },
    { name: 'Dr. Alan Turing', designation: 'Professor & HOD Psychiatry', qualification: 'Ph.D., M.Sc. Nursing' },
    { name: 'Ms. Anita Sharma', designation: 'Assistant Professor', qualification: 'M.Sc. Nursing' },
    { name: 'Mr. David Lee', designation: 'Senior Lecturer', qualification: 'M.Sc. Nursing' },
    { name: 'Ms. Priya Patel', designation: 'Clinical Instructor', qualification: 'B.Sc. Nursing' },
  ];

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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {facultyList.map((faculty, index) => (
            <div key={index} className="glass-panel card-3d" style={{ padding: '2rem', textAlign: 'center', borderTop: '4px solid var(--primary-color)' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#e2e8f0', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>👩‍🏫</div>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }} className="animate-on-load">{faculty.name}</h3>
              <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{faculty.designation}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{faculty.qualification}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
