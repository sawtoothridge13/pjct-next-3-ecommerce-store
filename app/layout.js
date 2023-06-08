import './globals.scss';
import { Fira_Code } from 'next/font/google';
import Link from 'next/link';
import { getProductById, products } from '../database/products';
import styles from './layout.module.scss';
import { getQuantities } from './products/[productId]/actions';

const inter = Fira_Code({ subsets: ['latin'] });

export default async function RootLayout({ children }) {
  const cartProducts = await getQuantities();
  cartProducts.map((cartProduct) => {
    products.find((quantity) => cartProduct.id === quantity.id);
    return { ...cartProduct };
  });

  const productsWithQuantity = cartProducts.map((cartProduct) => {
    const product = getProductById(cartProduct.id);
    if (product && cartProduct.quantity) {
      return {
        ...product,
        price: product.price,
        quantity: cartProduct.quantity,
      };
    }
  });
  const totalCartQuantity = productsWithQuantity.reduce(
    (total, product) => total + (product.quantity || 0),
    0,
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header" data-test-id="products-link">
          <Link className="cartLink" href="/cart">
            <span className={styles.cart}>Cart: {totalCartQuantity}</span>
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
                <Link href="/thankyou">Thank You</Link>
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
