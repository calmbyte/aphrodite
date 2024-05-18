import ProcessPathCard from '@/app/ui/ProcessPathCard';

export default function ProcessPath() {
  return (
    <section id="howTo" className="section-container flex flex-col mt-8 md:mt-[120px]">
      <div className="process-path mx-auto rounded-[20px] w-full py-12 px-4">
        <h2 className="text-[40px] text-center">Process of creating your events </h2>
        <div className="sm:px-32 px-0 mb-14 mt-8 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Has been the
          industry standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Has been the industry standard dummy text ever since
          the 1500s.
        </div>
        <div className="w-full flex lg:flex-row max-md:flex-col gap-10">
          <ProcessPathCard
            num={1}
            description={
              'To begin, you need to create an account on our platform. You can do this by clicking on the "Sign Up" button on our website.'
            }
            title={'Register'}
            arrowPosition="top"
          />
          <ProcessPathCard
            num={2}
            description={
              'Design an event seamlessly supported by automated processes, allowing personalized customization. Adding your logo, theme, preselected topics, and training AI by uploading your event document'
            }
            title={'Create'}
            arrowPosition="bottom"
          />
          <ProcessPathCard
            num={3}
            description={
              'Share your event with attendees, customers, or targeted users through QR codes, private links, social media, and other options of your choice.'
            }
            title={'Share'}
            arrowPosition="top"
          />
          <ProcessPathCard
            num={4}
            description={
              "Byte, our AI assistant, will handle all attendee inquiries and provide necessary information once you've shared your event with them. Sit back, relax, and let your assistant fulfil its purpose."
            }
            title={'Ask Byte'}
            arrowPosition="none"
          />
        </div>
      </div>
    </section>
  );
}
