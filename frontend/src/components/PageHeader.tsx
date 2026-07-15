import styles from './PageHeader.module.css';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{breadcrumb}</span>
        </div>
      </div>
    </div>
  );
}
