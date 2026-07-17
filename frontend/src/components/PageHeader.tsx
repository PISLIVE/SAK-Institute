import styles from './PageHeader.module.css';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <div className={styles.pageHeader}>
      {/* Background Image Container with Ken Burns effect */}
      <div className={styles.bgImage}></div>
      <div className={styles.overlay}></div>
      
      <div className={`container ${styles.content}`}>
        <h1 className={`${styles.title} animate-on-load`}>{title}</h1>
        <div className={`${styles.breadcrumbs} animate-on-load`} style={{ animationDelay: '0.2s' }}>
          <Link href="/" className="hover-text">Home</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{breadcrumb}</span>
        </div>
      </div>
    </div>
  );
}
