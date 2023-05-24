import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import AddToCartButton from '../../AddToCartButton';
import QuantityButton from '../../QuantityButton';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: `devBevs | Product`,
  description:
    'Choose quantity of product, read product description and add item to cart',
};

export default function ProductPage({ params }) {
  const singleProduct = getProductById(Number(params.productId));

  if (!singleProduct) {
    notFound();
  }

  return (
    <main>
      <h1>{singleProduct.name}</h1>
      <Image
        data-test-id="product-image"
        src={`/images/${singleProduct.type}.png`}
        width={200}
        height={200}
      />
      <p data-test-id="product-price"> Price ${singleProduct.price}</p>
      <QuantityButton data-test-id="product-quantity" />
      <AddToCartButton data-test-id="product-add-to-cart" />
    </main>
  );
}
