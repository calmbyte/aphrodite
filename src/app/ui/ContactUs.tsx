import Image from 'next/image';
import ContactForm from './ContactForm';

export default function ContactUs() {
  return (
    <section className="contact-us section-container">
      <div className="flex flex-col basis-[40%]">
        <h3 className="text-[40px] text-gradient">
          Love to hear from you,
          <br />
          Get in touch!
        </h3>
        <p className="text-[18px]">Fill up the form and our team will get back to you soon!</p>
        <Image
          alt="form"
          src="/form_img.svg"
          width={302}
          height={230}
          className="hidden md:inline-block self-center mt-[158px]"
        />
      </div>
      <ContactForm />
    </section>
  );
}
