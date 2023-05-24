import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

export const metadata = {
  title: `devBevs | Products`,
  description: 'My products',
};

export default function ProductPage() {
  return (
    <main>
      These are my products
      {products.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
            <br />
            <Image
              src={`/images/${product.type}.png`}
              width={300}
              height={300}
            />
          </div>
        );
      })}
    </main>
  );
}
