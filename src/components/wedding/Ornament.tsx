import type { ReactNode } from "react";

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 24" className={className} aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <line x1="0" y1="12" x2="80" y2="12" />
        <line x1="120" y1="12" x2="200" y2="12" />
        <path d="M88 12 Q100 0 112 12 Q100 24 88 12 Z" fill="currentColor" />
        <circle cx="100" cy="12" r="2" fill="var(--ivory)" />
      </g>
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  arabic,
  children,
}: {
  eyebrow?: string;
  title: string;
  arabic?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {arabic && (
        <p className="font-arabic text-2xl text-gold sm:text-3xl">{arabic}</p>
      )}
      {eyebrow && (
        <p className="mt-2 text-[11px] uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-4xl text-emerald-deep sm:text-5xl">{title}</h2>
      <Ornament className="mx-auto mt-4 h-4 w-40 text-gold" />
      {children && <p className="mt-4 text-foreground/75">{children}</p>}
    </div>
  );
}

export function ArchFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`arch-frame relative bg-gradient-emerald ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/40" />
    </div>
  );
}
