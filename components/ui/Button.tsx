import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary" | "cta";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const baseStyles =
  "inline-flex items-center gap-[0.5em] font-medium tracking-[1.5px] uppercase text-[0.85em] transition-all duration-500 cursor-pointer";

const variants = {
  primary:
    "px-[1.5em] py-[0.875em] rounded-full bg-[var(--dark)] text-[var(--cream)] hover:bg-[var(--sage-500)]",
  secondary:
    "px-[1.5em] py-[0.875em] rounded-full border border-[var(--dark)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--cream)]",
  cta: "text-[var(--dark)] hover:gap-[0.75em] group",
};

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="transition-transform duration-300 group-hover:translate-x-1"
  >
    <path
      d="M2 7h10M8 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Button({
  variant = "primary",
  href,
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = clsx(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {variant === "cta" && <ArrowIcon />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {variant === "cta" && <ArrowIcon />}
    </button>
  );
}
