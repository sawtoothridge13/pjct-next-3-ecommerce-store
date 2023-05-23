import Image from 'next/image';
import whiskey from '../../../app/public/images/whiskey.png';
import whiskeyBackground from '../../../app/public/images/whiskeybackground.png';
import styles from './Whiskey.module.scss';

export const metadata = {
  title: '{devBevs} | Whiskey',
  description: 'ERROR: 500 Whiskey',
};

export default function Whiskey() {
  return (
    <div>
      <main>
        <h1>ERROR: 500 Whiskey</h1>
        <Image src={whiskey} alt="whiskey bottle" className={styles.photos} />
        <button>Add to cart</button>
        <section>
          <Image
            src={whiskeyBackground}
            alt="man breaking down over glass of whiskey"
            className={styles.backgroundPhoto}
          />
        </section>
      </main>
    </div>
  );
}
