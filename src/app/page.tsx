import About from './ui/About';
import Footer from './ui/Footer';
import HeroBanner from './ui/HeroBanner';
import ProcessPath from './ui/ProcessPath';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <About />
      <ProcessPath />
      <Footer />
    </main>
  );
}
