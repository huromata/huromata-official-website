import { ReactNode } from "react";
import Container from "@/components/Container";

type SectionProps = {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contained?: boolean;
};

export default function Section({
  id,
  title,
  description,
  children,
  className = "",
  contained = true
}: SectionProps) {
  const inner = (
    <>
      {(title || description) && (
        <header className="mb-12 max-w-3xl">
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">{title}</h2>
          )}
          {description && <p className="mt-4 text-lg text-zinc-500 leading-relaxed">{description}</p>}
        </header>
      )}
      {children}
    </>
  );

  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`}>
      {contained ? <Container>{inner}</Container> : inner}
    </section>
  );
}
