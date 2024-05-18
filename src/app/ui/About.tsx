import Card from './Card';
import CardWithImage from './CardWithImage';

export default function About() {
  return (
    <section
      id="about"
      className="section-container flex flex-col md:flex-row mt-8 md:mt-[120px] gap-[40px]">
      <CardWithImage />
      <Card />
    </section>
  );
}
