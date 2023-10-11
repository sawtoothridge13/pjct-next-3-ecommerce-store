import './styles/globals.scss';
import Image from 'next/image';
import styles from './styles/page.module.scss';

export const metadata = {
  title: `devBevs | Home`,
  description:
    'A line of adult beverages brewed, vinified, and distilled with the tears of software and web developers. ',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Welcome to &#123;devBevs&#125;</h1>
        <h2>
          A premium of adult beverages brewed, vinified, and distilled with the
          tears of software and web developers
          <Image
            alt="devBevs logo"
            src="/images/landing-page.jpg"
            width="500"
            height="500"
          />
        </h2>
      </section>
    </main>
  );
}
