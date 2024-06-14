import ProcessPathCard from '@/app/ui/ProcessPathCard';

export default function ProcessPath() {
  return (
    <section id="howTo" className="section-container flex flex-col mt-8 md:mt-[120px]">
      <div className="process-path mx-auto rounded-[20px] w-full py-12 px-4">
        <h2 className="text-[40px] text-center">Process of creating your AI Assistant</h2>
        <div className="sm:px-32 px-0 mb-14 mt-8 text-center">
          CalmByte AI optimizes time management, helping companies reduce time waste and enhance
          efficiency. By automating routine tasks, CalmByte AI enables businesses to focus on
          strategic initiatives and achieve greater productivity.
        </div>
        <div className="w-full flex lg:flex-row max-md:flex-col gap-10">
          <ProcessPathCard
            num={'01'}
            description={'Upload the text document that contains context of the topic.'}
            title={'Start'}
            arrowPosition="top"
          />
          <ProcessPathCard
            num={'02'}
            description={'Calmbyte AI will create a model in seconds.'}
            title={'Process'}
            arrowPosition="bottom"
          />
          <ProcessPathCard
            num={'03'}
            description={'Byte answers users’ questions based on provided context.'}
            title={'User Interaction'}
            arrowPosition="top"
          />
          <ProcessPathCard
            num={'04'}
            description={'Automation of routine tasks leading to resource efficiency .'}
            title={'Optimization'}
            arrowPosition="none"
          />
        </div>
      </div>
    </section>
  );
}
