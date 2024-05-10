import Accordion from './AccordionItem';

export default function FAQ() {
  const faqs = [
    {
      title: 'What are the advantages of your service?',
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    },
    {
      title: 'Are there any fees or commissions in addition to the monthly subscription?',
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    },
    {
      title: "You really don't charge per user? Why not?",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    },
    {
      title: 'What happens when I go over my monthly active limit?',
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    },
  ];

  return (
    <main className="flex flex-col justify-center overflow-hidden w-full pb-32 max-md:px-10 max-lg:px-28 px-56">
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
