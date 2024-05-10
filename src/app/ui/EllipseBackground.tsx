import { PropsWithChildren } from 'react';

export default function EllipseBackground({ children }: PropsWithChildren) {
  return <div className="ellipse-background max-md:h-[800px] h-[1400px]">{children}</div>;
}
