import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export const metadata = {
  title: `devBevs | Products`,
  description: 'My products',
};

export default function ProductPage() {
  // This is what we want using cookies
  const cartCookie = getCookie('cartQuantity');

  const cart = !cartCookie ? [] : parseJson(cartCookie);

  const productsWithQuantity = products.map((product) => {
    const matchingProductFromCookie = cart.find(
      (productObject) => product.id === productObject.id,
    );
    return {
      ...product,
      cart: matchingProductFromCookie?.cart,
    };
  });

  return (
    <main>
      These are my products
      {productsWithQuantity.map((product) => (
        <div key={`product-div-${product.id}`}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
          <br />
          <Image
            src={`/images/${product.image}.png`}
            alt={`/database/${product.alt}`}
            width={400}
            height={400}
          />
          {products.cartQuantity}
        </div>
      ))}
    </main>
  );
}
