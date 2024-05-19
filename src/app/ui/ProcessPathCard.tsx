import ProcessPathCardArrow from '@/app/ui/ProcessPathCardArrow';

type ProcessPathCardProps = {
  num: string;
  title: string;
  description: string;
  arrowPosition: 'top' | 'bottom' | 'none';
};

export default function ProcessPathCard({
  num,
  title,
  description,
  arrowPosition,
}: ProcessPathCardProps) {
  return (
    <div className="process-path-card">
      <div className="card-border"></div>
      <section>
        <h3 className="text-[24px] mb-4">
          <span>{num}</span> <span className="process-path-title">{title}</span>
        </h3>
        <p>{description}</p>
      </section>
      <ProcessPathCardArrow arrowPosition={arrowPosition} />
    </div>
  );
}
