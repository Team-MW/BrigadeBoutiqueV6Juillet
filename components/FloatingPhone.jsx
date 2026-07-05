'use client';
import { PhoneCall } from 'lucide-react';
import styles from './FloatingPhone.module.css';

export default function FloatingPhone() {
  return (
    <a href="tel:0756916593" className={styles.floatingBtn} aria-label="Appeler La Brigade Mobile">
      <div className={styles.iconContainer}>
        <PhoneCall size={28} />
      </div>
      <span className={styles.tooltip}>07 56 91 65 93</span>
    </a>
  );
}
