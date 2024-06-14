import Image from 'next/image';

export default function CardWithImage() {
  return (
    <div className="card">
      <div className="card-border"></div>
      <div className="card-content">
        <h2 className="text-[40px] mb-6">About Us</h2>
        <p>
          At CalmByte, we understand the intricate demands of companies. With years of expertise in
          the industry, we&apos;ve developed an
          <span className="font-semibold">innovative AI assistant</span> tailored to optimize your
          resources in a fast-paced tech environment.
        </p>
        <p>
          Our team is committed to revolutionizing the way businesses operate, offering intuitive
          solutions that help companies reduce time waste and enhance efficiency, empowering them to
          focus on what truly matters: achieving their strategic goals and driving productivity.
        </p>
      </div>
      <div className="relative w-full h-[149px] mt-auto">
        <Image alt="coral" src="/coral.jpg" fill />
      </div>
    </div>
  );
}
