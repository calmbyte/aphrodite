import { PropsWithChildren } from 'react';

export default function EllipseBackground({ children }: PropsWithChildren) {
  return <div className="ellipse-background h-[1200px]">{children}</div>;
}
