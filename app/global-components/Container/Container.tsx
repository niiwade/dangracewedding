import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  customClasses?: string;
}

export default function Container({
  children,
  customClasses,
}: ContainerProps): JSX.Element {
  return (
    <div
      className={`container mx-auto px-2.5${customClasses ? ` ${customClasses}` : ""}`}
    >
      {children}
    </div>
  );
}
