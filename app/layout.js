import './globals.scss';
import { Fira_Code } from 'next/font/google';
import Link from 'next/link';
import styles from './layout.module.scss';

const inter = Fira_Code({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header" data-test-id="products-link">
          <Link className="cartLink" href="/cart">
            <span className={styles.cart}>Cart</span>
          </Link>
          <nav className={styles.navBar}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>

              <li>
                <Link href="/cart">Cart</Link>
              </li>
              <li>
                <Link href="/checkout">Checkout</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          {children}
        </header>
      </body>
    </html>
  );
}
