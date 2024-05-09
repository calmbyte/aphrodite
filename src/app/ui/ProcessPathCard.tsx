import ProcessPathCardArrow from '@/app/ui/ProcessPathCardArrow';

type ProcessPathCardProps = {
  num: number;
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
      <section>
        <h3 className="text-[24px] mb-4">
          <span>{num}</span> {title}
        </h3>
        <p>{description}</p>
      </section>
      <ProcessPathCardArrow arrowPosition={arrowPosition} />
    </div>
  );
}
