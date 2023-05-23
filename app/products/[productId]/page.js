import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';

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
      <h1>{params.name}</h1>
      <Image
        src={`/images/${singleProduct.type}.png`}
        width={200}
        height={200}
      />
    </main>
  );
}
