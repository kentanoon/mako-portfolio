"use client";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`text-[11px] tracking-[0.25em] uppercase text-[var(--text-muted)] ${className}`}
    >
      {children}
    </span>
  );
}
