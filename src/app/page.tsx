import About from './ui/About';
import Footer from './ui/Footer';
import ContactUs from './ui/ContactUs';
import HeroBanner from './ui/HeroBanner';
import ProcessPath from './ui/ProcessPath';
import EllipseBackground from './ui/EllipseBackground';
import FAQ from './ui/FAQ';
import AdBanner from '@/app/ui/AdBanner';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <About />
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
      <AdBanner />
      <ContactUs />
      <Footer />
    </main>
  );
}
