import { prisma } from '@/lib/prisma';
import styles from './Dashboard.module.css';
import { FaUserGraduate, FaEnvelope, FaBullhorn } from 'react-icons/fa';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/admin/login');
  }

  const [applicationsCount, enquiriesCount, noticesCount] = await Promise.all([
    prisma.application.count(),
    prisma.enquiry.count(),
    prisma.notice.count(),
  ]);

  const stats = [
    { label: 'Total Applications', value: applicationsCount, icon: <FaUserGraduate />, color: '#0ea5e9' },
    { label: 'Total Enquiries', value: enquiriesCount, icon: <FaEnvelope />, color: '#8b5cf6' },
    { label: 'Active Notices', value: noticesCount, icon: <FaBullhorn />, color: '#f59e0b' },
  ];

  return (
    <div>
      <h1 className={styles.pageTitle}>Dashboard Overview</h1>
      <p className={styles.pageSubtitle}>Welcome to the SAK College administration panel.</p>

      <div className={styles.statsGrid}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.statCard} style={{ borderBottomColor: stat.color }}>
            <div className={styles.statIcon} style={{ color: stat.color, backgroundColor: `${stat.color}15` }}>
              {stat.icon}
            </div>
            <div className={styles.statInfo}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.welcomeCard}>
        <h2>Get Started</h2>
        <p>Use the sidebar to navigate through the admin sections. You can view all incoming admission applications, contact form enquiries, and update the scrolling notice board on the homepage.</p>
      </div>
    </div>
  );
}
