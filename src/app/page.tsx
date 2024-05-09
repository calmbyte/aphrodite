import Card from './ui/Card';
import HeroBanner from './ui/HeroBanner';
import ProcessPath from './ui/ProcessPath';
import CardWithImage from './ui/CardWithImage';
import EllipseBackground from './ui/EllipseBackground';
import FAQ from './ui/FAQ';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <section className="flex flex-col md:flex-row mt-8 md:mt-[120px] gap-[40px] justify-center px-4">
        <CardWithImage />
        <Card />
      </section>
      <ProcessPath />
      <EllipseBackground>
        {/* TMP */}
        <div className="w-[1202px] mx-auto flex flex-col justify-center items-center">
          <p className="text-gradient text-[40px] text-center mt-32">
            Engage your event attendees with an AI Assistant
          </p>
          <div
            style={{
              width: '900px',
              height: '600px',
              backgroundColor: '#202026',
              opacity: 0.8,
              marginTop: '50px',
            }}>
            video
          </div>
        </div>
      </EllipseBackground>
      <FAQ />
    </main>
  );
}
