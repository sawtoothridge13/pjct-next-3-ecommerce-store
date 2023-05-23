'use client';
import styles from './GenerateButton.module.scss';

export function GenerateButton() {
  return (
    <button
      className={styles.generateButton}
      onClick={() => console.log('generate')}
    >
      Generate
    </button>
  );
}
