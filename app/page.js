import Image from 'next/dist/client/image';
import logo from '../public/images/devbevslogo.png';
import GenerateButton from './GenerateButton';
import styles from './layout.module.scss';

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <h1>Welcome to &#123;devBevs&#125; </h1>
        </div>
      </section>
      <p>
        A line of beverages inspired by the blood, sweat and tears of web
        developers
      </p>
      <section className={styles.section}>
        <Image src={logo} alt="devbevs logo" className={styles.logo} />
      </section>
      <GenerateButton>Generate</GenerateButton>
    </main>
  );
}
