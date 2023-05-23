import Image from 'next/image';
import wine from '../../../app/public/images/wine.png';
import wineBackground from '../../../app/public/images/winebackground.png';
import styles from './Wine.module.scss';

export const metadata = {
  title: '{devBevs} | Wine',
  description: 'camelCaseCabernet',
};

export default function Wine() {
  return (
    <>
      <h1>camelCaseCabernet</h1>
      <Image src={wine} alt="wine bottle" className={styles.photos} />
      <button>Add to cart</button>
      <section>
        <Image
          src={wineBackground}
          alt="woman crying holding glass of wine"
          className={styles.backgroundPhoto}
        />
      </section>
    </>
  );
}
