// [] A Cart page (containing a list where products appear when you click on the "Add to cart" button on the single product page), which also shows the total price of all products

import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import QuantityButton from '../components/QuantityButton';

export const metadata = {
  title: `devBevs | Cart`,
  description: 'My cart',
};

export default function CartPage() {
  // This is what we want using cookies
  // const cartCookie = getCookie('cartQuantity');

  // const cart = !cartCookie ? [] : parseJson(cartCookie);

  // const productsWithQuantity = products.map((product) => {
  //   const matchingProductFromCookie = cart.find(
  //     (productObject) => product.id === productObject.id,
  //   );
  //   return {
  //     ...product,
  //     cart: matchingProductFromCookie?.cart,
  //   };
  // });

  return (
    <main>
      Cart Items
      {products.map((product) => (
        <div key={`product-div-${product.id}`}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
          <div href={`/products/${product.id}`}>{product.quantity}</div>
          <button>Remove</button>
          <br />
          <Image
            src={`/images/${product.image}.png`}
            alt={`/database/${product.alt}`}
            width={200}
            height={200}
          />
          {products.cartQuantity}
        </div>
      ))}
    </main>
  );
}
