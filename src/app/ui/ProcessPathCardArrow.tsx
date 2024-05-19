import Image from 'next/image';

type ProcessPathCardArrowProps = {
  arrowPosition: 'top' | 'bottom' | 'none';
};

export default function ProcessPathCardArrow({ arrowPosition }: ProcessPathCardArrowProps) {
  if (arrowPosition === 'none') return null;
  return (
    <Image
      src={arrowPosition === 'top' ? '/arrow-top.svg' : '/arrow-bottom.svg'}
      alt={`arrow-${arrowPosition}`}
      width={100}
      height={150}
      className={`process-path-card-arrow ${arrowPosition} lg:block`}
    />
  );
}
