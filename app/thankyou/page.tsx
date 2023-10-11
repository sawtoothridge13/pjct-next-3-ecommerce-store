import '../styles/globals.scss';
import styles from '../styles/thankyou.module.scss';

export const metadata = {
  title: 'Thank you for your order',
  description: 'Your purchase has been confirmed',
};

export default function ThankYouPage() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Order Deployed!</h1>
        <p>Sit back, relax and wait for the next sprint...</p>
      </section>
    </main>
  );
}
