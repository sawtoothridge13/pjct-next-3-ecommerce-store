import styles from '../styles/checkoutpage.module.scss';
import CheckoutForm from './CheckoutForm';

export const metadata = {
  title: 'Checkout',
  description: 'Checkout Form and Payment to get ready for shipping product',
};
export default function CheckoutPage() {
  return (
    <main className={styles.main}>
      <CheckoutForm />
    </main>
  );
}
