import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import QuantityButton from '../../QuantityButton';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: '{devBevs} | Products',
  description: 'All of {devBevs} products',
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
      <QuantityButton />
    </main>
  );
}
