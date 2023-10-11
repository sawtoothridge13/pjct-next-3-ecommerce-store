import '../../styles/globals.scss';
import styles from '../../styles/footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <a
            className={styles.footerLink}
            href="https://github.com/sawtoothridge13"
            rel="noreferrer"
            target="_blank"
          >
            Doug Andrews
          </a>{' '}
        </p>
      </div>
    </footer>
  );
}
