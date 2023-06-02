import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import AddToCartComponent from './components/AddToCartComponent';
import QuantityButton from './components/QuantityButton';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: `devBevs | Product`,
  description:
    'Choose quantity of product, read product description and add item to cart',
};

type Props = {
  params: { productId: string };
};

type Cookie = {
  id: number;
  cartQuantity?: number;
};

export default function ProductPage(props: Props) {
  const product = getProductById(Number(props.params.productId));

  if (!product) {
    notFound();
  }

  const cartCookie = getCookie('cartQuantity');
  const cart: Cookie[] = !cartCookie ? [] : parseJson(cartCookie);

  const quantityToUpdate = cart.find((productQuantity) => {
    return productQuantity.id === product.id;
  });

  return (
    <main>
      <h1>{product.name}</h1>
      <Image
        data-test-id="product-image"
        src={`/images/${product.image}.png`}
        alt={`/database/${product.alt}`}
        width={600}
        height={600}
      />
      {quantityToUpdate?.cartQuantity}
      <p data-test-id="product-price"> Price ${product.price}</p>
      {/* <QuantityButton productId={product.id} data-test-id="product-quantity" /> */}
      <AddToCartComponent
        productId={product.id}
        data-test-id="product-add-to-cart"
      />
    </main>
  );
}
