import Image from 'next/dist/client/image';
import React from 'react';
import logo from '../public/images/devbevslogo2.png';
import GenerateButton from './GenerateButton';
import styles from './layout.module.scss';

export const metadata = {
  title: `devBevs | Home`,
  description:
    'A line of adult beverages brewed, vinified, and distilled with the tears of software and web developers. ',
};

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
