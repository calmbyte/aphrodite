import Card from './ui/Card';
import HeroBanner from './ui/HeroBanner';
import ProcessPath from './ui/ProcessPath';
import CardWithImage from './ui/CardWithImage';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <section className="flex flex-col md:flex-row mt-8 md:mt-[120px] gap-[40px] justify-center px-4">
        <CardWithImage />
        <Card />
      </section>
      <ProcessPath />
    </main>
  );
}
