import Card from './Card';
import CardWithImage from './CardWithImage';

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row mt-8 md:mt-[120px] gap-[40px] justify-center px-4"
    >
      <CardWithImage />
      <Card />
    </section>
  );
}
