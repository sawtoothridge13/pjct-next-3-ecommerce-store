import './styles/globals.scss';
import { Open_Sans } from 'next/font/google';
import Footer from './components/layout/footer';
import Header from './components/layout/header';

const nunito = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
