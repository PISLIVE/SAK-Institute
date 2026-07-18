'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import styles from './AdminSidebar.module.css';
import { FaTachometerAlt, FaBullhorn, FaEnvelope, FaFileAlt, FaSignOutAlt, FaCog, FaBook, FaUsers, FaImages, FaUserShield } from 'react-icons/fa';

export default function AdminSidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  if (pathname === '/admin/login') return null;

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <FaTachometerAlt /> },
    { name: 'Courses', path: '/admin/courses', icon: <FaBook /> },
    { name: 'Faculty', path: '/admin/faculty', icon: <FaUsers /> },
    { name: 'Gallery', path: '/admin/gallery', icon: <FaImages /> },
    { name: 'Notices', path: '/admin/notices', icon: <FaBullhorn /> },
    { name: 'Enquiries', path: '/admin/enquiries', icon: <FaEnvelope /> },
    { name: 'Applications', path: '/admin/applications', icon: <FaFileAlt /> },
    { name: 'Admin Staff', path: '/admin/users', icon: <FaUserShield /> },
    { name: 'Settings', path: '/admin/settings', icon: <FaCog /> },
  ];

  const handleLogout = () => {
    if (confirm('Are you sure you want to securely logout?')) {
      signOut({ callbackUrl: '/' });
    }
  };

  return (
    <div className={`${styles.sidebar} no-print`}>
      <div className={styles.logo}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <Image src="/sak-logo.png" alt="SAK College Logo" width={80} height={80} style={{ objectFit: 'contain' }} />
        </div>
        <h2>SAK Admin</h2>
        <p>Welcome, {session?.user?.name || 'Admin'}</p>
      </div>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            href={item.path}
            className={`${styles.navItem} ${pathname === item.path ? styles.active : ''}`}
          >
            <span className={styles.icon}>{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
      
      <div className={styles.sidebarFooter}>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          <FaSignOutAlt /> Logout
        </button>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} SAK College.
          <br />All rights reserved.
        </div>
      </div>
    </div>
  );
}
