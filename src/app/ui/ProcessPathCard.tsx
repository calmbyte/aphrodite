type ProcessPathCardProps = {
  num: number;
  title: string;
  description: string;
};

export default function ProcessPathCard({
  num,
  title,
  description,
}: ProcessPathCardProps) {
  return (
    <section className="process-path-card">
      <h3 className="text-[24px]">
        <span>{num}</span> {title}
      </h3>
      <p>{description}</p>
    </section>
  );
}
