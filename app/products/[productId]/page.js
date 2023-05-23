import Image from 'next/dist/client/image';
import { notFound } from 'next/navigation';

export const metadata = {
  title: '{devBevs} | Products',
  description: 'All of {devBevs} products',
};

export default function ProductPage({ params }) {
  const singleProduct = products.find((product) => product.id === params.id);

  if (!singleProduct) {
    notFound();
  }

  return (
    <main>
      <h1>{singleProduct.id}</h1>
      <Image src={`/images/${singleProduct.id}.png`} width={200} height={200} />
    </main>
  );
}
