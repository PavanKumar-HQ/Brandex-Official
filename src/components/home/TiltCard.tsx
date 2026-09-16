import { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  return (
    <div className={`transition-all duration-200 hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
}
