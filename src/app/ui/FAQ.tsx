import Accordion from './AccordionItem';

const faqs = [
  {
    title: 'What is CalmByte AI and how can it help my business?',
    text: 'CalmByte AI provides a personalized AI assistant named Byte that helps businesses save time and boost efficiency. Simply upload your documents, and Byte will create a custom AI model. You can then chat with Byte to get quick answers and insights based on the content of your documents.',
  },
  {
    title: 'How do I get started with CalmByte AI?',
    text: 'Getting started is easy! Just sign up on our website, upload your document, and Byte will create an AI model for you. Once the model is ready, you can easily share AI powered chat with whoever you want, so they can to get answers and insights from your documents.',
  },
  {
    title: 'Do I need any technical knowledge to use CalmByte AI?',
    text: 'No technical knowledge is required! CalmByte AI is designed to be user-friendly, so you can easily upload documents and chat with Byte without any technical expertise.',
  },
  {
    title: 'What types of documents can I upload to create an AI model?',
    text: 'You can upload various types of text documents, including reports, manuals, policies, and more. Byte can handle a wide range of content to provide you with accurate and helpful responses.',
  },
  {
    title: 'Is my data safe with CalmByte AI?',
    text: 'Yes, your data is safe with us. We prioritize your privacy and security, ensuring that your documents and any information derived from them are protected with industry-standard security measures.',
  },
];

export default function FAQ() {
  return (
    <main className="section-container flex flex-col justify-center overflow-hidden pb-32 mt-8 md:mt-[120px]">
      <h1 className="text-3xl font-semibold mb-4">FAQ</h1>

      <div className="divide-y divide-slate-200">
        {faqs.map((faq, index) => (
          <Accordion key={index} title={faq.title} id={`faqs-${index}`}>
            {faq.text}
          </Accordion>
        ))}
      </div>
    </main>
  );
}
