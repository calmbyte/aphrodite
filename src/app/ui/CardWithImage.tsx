import Image from 'next/image';

export default function CardWithImage() {
  return (
    <div className="card">
      <div className="card-border"></div>
      <div className="card-content">
        <h2 className="text-[40px] mb-6">
          Empower Your Events with AI Assistance
        </h2>
        <p>
          At CalmByte, we understand the intricate demands of event creators.
          With years of expertise in the industry, we&apos;ve developed an
          <span className="font-semibold">innovative AI assistant</span>{' '}
          tailored to streamline your event planning process.
        </p>
        <p>
          Our team is committed to revolutionizing the way events are organized,
          offering intuitive solutions that empower creators to focus on what
          truly matters: crafting memorable experiences.
        </p>
      </div>
      <div className="relative w-full h-[149px] mt-auto">
        <Image alt="coral" src="/coral.jpg" fill />
      </div>
    </div>
  );
}
