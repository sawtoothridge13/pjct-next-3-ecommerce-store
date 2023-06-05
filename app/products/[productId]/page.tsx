import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import AddToCartComponent from '../../components/AddToCartComponent';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: `devBevs | Product`,
  description:
    'Choose quantity of product, read product description and add item to cart',
};

type Props = {
  params: { productId: string };
};

export default function ProductPage(props: Props) {
  const product = getProductById(Number(props.params.productId));

  if (!product) {
    notFound();
  }

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

      <p data-test-id="product-price"> Price ${product.price}</p>
      {/* <QuantityButton quantity={product.quantity} data-test-id="product-quantity" /> */}
      <AddToCartComponent
        productId={product.id}
        data-test-id="product-add-to-cart"
      />
    </main>
  );
}
