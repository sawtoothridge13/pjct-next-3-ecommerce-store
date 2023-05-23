import Image from 'next/dist/client/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import beer from '../../app/public/images/beer.png';
import coffee from '../../app/public/images/coffee.png';
import whiskey from '../../app/public/images/whiskey.png';
import wine from '../../app/public/images/wine.png';
import styles from './Products.module.scss';

export default function ProductPage() {
  return (
<>
      <h1 className={styles.h1}>{params.id}</h1>
      <section className={styles.section}>
        <div className={styles.photoDiv}>
          <Link
            data-test-id="product-1"
            href="/products/coffee"
            className={styles.productname}
          >
            JavaScript Java
          </Link>
          <Image src={coffee} alt="bag of coffee" className={styles.photos} />
        </div>
        <div className={styles.photoDiv}>
          <Link
            data-test-id="product-2"
            href="/products/beer"
            className={styles.productname}
          >
            API IPA
          </Link>
          <Image src={beer} alt="beer bottle" className={styles.photos} />
        </div>
        <div className={styles.photoDiv}>
          <Link
            data-test-id="product-3"
            href="/products/wine"
            className={styles.productname}
          >
            camelCaseCabernet
          </Link>
          <Image src={wine} alt="wine bottle" className={styles.photos} />
        </div>
        <div className={styles.photoDiv}>
          <Link
            data-test-id="product-4"
            href="/products/whiskey"
            className={styles.productname}
          >
            Error 500 Whiskey
          </Link>
          <Image src={whiskey} alt="whiskey bottle" className={styles.photos} />
        </div>
      </section>
    </>
  );
}
