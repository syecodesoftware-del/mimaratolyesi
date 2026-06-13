import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

interface SplitSectionProps {
  label?: string;
  heading: string;
  body: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  bg?: "cream" | "warm";
}

export default function SplitSection({
  label,
  heading,
  body,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  bg = "cream",
}: SplitSectionProps) {
  const imageFirst = imagePosition === "left";

  const textContent = (
    <div
      className="flex flex-col justify-center px-[2em] py-[5em] lg:px-[5em] lg:py-[7em]"
    >
      <div className="max-w-[30em]">
        {label && <SectionLabel>{label}</SectionLabel>}
        <h2
          className="text-[2.4em] font-medium leading-[1.15] mb-[1em]"
          style={{ color: "var(--dark)" }}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <p
          className="text-[1em] leading-[1.8] mb-[2em]"
          style={{ color: "var(--text-body)" }}
        >
          {body}
        </p>
        {ctaText && ctaHref && (
          <Button variant="cta" href={ctaHref}>
            {ctaText}
          </Button>
        )}
      </div>
    </div>
  );

  const imageContent = (
    <div className="relative min-h-[50svh] lg:min-h-full overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 991px) 100vw, 50vw"
      />
    </div>
  );

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{
        backgroundColor:
          bg === "warm" ? "var(--cream-warm)" : "var(--cream)",
      }}
    >
      {imageFirst ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </section>
  );
}
