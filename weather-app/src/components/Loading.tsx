import * as styles from '@/styles/components/loading.css';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={`${styles.icon} ${styles.animatedSun}`}>
        <div className={styles.sun}>
          <div className={styles.rays}></div>
        </div>
      </div>
    </div>
  );
}
