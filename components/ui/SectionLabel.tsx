import { clsx } from "clsx";

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({
  children,
  light = false,
  className,
}: SectionLabelProps) {
  return (
    <span
      className={clsx(
        "block text-[0.7em] font-medium tracking-[2px] uppercase mb-[1.5em]",
        className
      )}
      style={{ color: light ? "var(--sage-400)" : "var(--sage-500)" }}
    >
      {children}
    </span>
  );
}
