import Image from 'next/image';
import beer from '../../../app/public/images/beer.png';
import beerBackground from '../../../app/public/images/beerbackground.png';
import styles from './Beer.module.scss';

export const metadata = {
  title: '{devBevs} | Beer',
  description: 'API IPA',
};

export default function Beer() {
  return (
    <>
      <h1>API IPA</h1>
      <Image src={beer} alt="beer bottle" className={styles.photos} />
      <button>Add to cart</button>
      <section>
        <Image
          src={beerBackground}
          alt="people celebrating drinking beer"
          className={styles.backgroundPhoto}
        />
      </section>
    </>
  );
}
