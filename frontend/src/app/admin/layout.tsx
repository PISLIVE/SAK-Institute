import AdminSidebar from './AdminSidebar';
import AdminAuthProvider from './AdminAuthProvider';
import styles from './AdminSidebar.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SAK Admin Panel',
  description: 'Control panel for SAK College of Nursing',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthProvider>
      <div className={styles.adminLayout}>
        <AdminSidebar />
        <main className={styles.adminMain}>{children}</main>
      </div>
    </AdminAuthProvider>
  );
}
