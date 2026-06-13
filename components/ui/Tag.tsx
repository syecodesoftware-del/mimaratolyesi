import { clsx } from "clsx";

interface TagProps {
  children: React.ReactNode;
  variant?: "dark" | "outline";
  className?: string;
}

export default function Tag({
  children,
  variant = "dark",
  className,
}: TagProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-[0.75em] py-[0.25em] rounded-full text-[0.65em] font-medium tracking-[1.5px] uppercase",
        variant === "dark" &&
          "bg-[var(--dark)] text-[var(--cream)]",
        variant === "outline" &&
          "border border-[var(--dark)] text-[var(--dark)]",
        className
      )}
    >
      {children}
    </span>
  );
}
