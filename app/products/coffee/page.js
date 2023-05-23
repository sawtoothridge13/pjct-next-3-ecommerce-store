import Image from 'next/image';
import coffee from '../../../app/public/images/coffee.png';
import styles from './Coffee.module.scss';

export const metadata = {
  title: 'devBevs | Coffee',
  description: 'JavaScript Java',
};

export default function Coffee() {
  return (
    <main className={styles.background}>
      <aside className={styles.aside}>
        <h1>JavaScript Java</h1>
        <Image src={coffee} alt="bag of coffee" className={styles.photos} />
        <button>Add to cart</button>
      </aside>
    </main>
  );
}
