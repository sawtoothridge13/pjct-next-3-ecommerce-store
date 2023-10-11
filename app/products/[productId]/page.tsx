import '../../styles/globals.scss';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import styles from '../../styles/productpage.module.scss';
import QuantityButtons from './QuantityButtons';

export const metadata = {
  title: 'Product',
  description: 'Choose Amount and add product to cart',
};

// define type of params productId = string because it's from the URL
export type Props = {
  params: { productId: string };
};

export default async function ProductPage(props: Props) {
  const singleProduct = await getProductById(Number(props.params.productId)); // calling function from database to get productId with url params
  if (!singleProduct) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <section className={styles.product}>
        <div className={styles.productCard}>
          <h1>{singleProduct.name}</h1>
          <figure className={styles.productImage}>
            <Image
              alt={singleProduct.alt}
              src={`/images/${singleProduct.alt.toLowerCase()}.png`}
              data-test-id="product-image"
              width={512}
              height={512}
            />
          </figure>
          <figcaption className={styles.productInfo}>
            {singleProduct.description}
            <br />
          </figcaption>
          <p>
            Price:{' '}
            <span data-test-id="product-price">{singleProduct.price}</span> €
          </p>
          <QuantityButtons productId={singleProduct.id} />
        </div>
      </section>
    </main>
  );
}
