import '../styles/globals.scss';
import styles from '../styles/aboutpage.module.scss';

export const metadata = {
  title: 'devTears | About',
  description: 'About the devTears team and origins',
};

export default function About() {
  return (
    <main className={styles.main}>
      <section>
        {' '}
        <h1>About Us</h1>
        <h2>
          DevBevs, the beverage company inspired by web developers and coders,
          proudly introduces its unique product lineup designed to fuel your
          coding journey. These carefully crafted beverages are more than just
          drinks; they're the perfect companions for your coding adventures.
          <p>
            At DevBevs, we understand that coding is both an art and a science,
            and our beverages are here to support every line of code you write.
            Whether you're debugging, innovating, or celebrating a successful
            project, our beverages are designed to enhance the experience of web
            developers and coders. Cheers to your next coding adventure with
            DevBevs!
          </p>
        </h2>
      </section>
    </main>
  );
}
