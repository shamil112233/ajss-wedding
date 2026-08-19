export function Lanterns() {
  const lanterns = [
    { left: "6%", top: "12%", delay: "0s", scale: 1 },
    { left: "88%", top: "18%", delay: "1.5s", scale: 0.8 },
    { left: "14%", top: "70%", delay: "0.8s", scale: 0.7 },
    { left: "82%", top: "62%", delay: "2.2s", scale: 0.9 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {lanterns.map((l, i) => (
        <div
          key={i}
          className="absolute animate-lantern"
          style={{ left: l.left, top: l.top, animationDelay: l.delay }}
        >
          <div
            className="relative"
            style={{ transform: `scale(${l.scale})` }}
          >
            <div className="mx-auto h-2 w-px bg-gold/40" />
            <svg viewBox="0 0 40 60" className="h-16 w-10 drop-shadow-[0_0_20px_rgba(212,168,76,0.55)]">
              <defs>
                <radialGradient id={`l${i}`} cx="50%" cy="55%" r="55%">
                  <stop offset="0%" stopColor="oklch(0.95 0.16 80)" />
                  <stop offset="60%" stopColor="oklch(0.78 0.18 70)" />
                  <stop offset="100%" stopColor="oklch(0.45 0.12 50)" />
                </radialGradient>
              </defs>
              <path d="M20 6 L32 18 L32 42 L20 54 L8 42 L8 18 Z" fill={`url(#l${i})`} stroke="oklch(0.4 0.08 40)" strokeWidth="0.6" />
              <path d="M14 22 Q20 18 26 22 M14 32 Q20 36 26 32" fill="none" stroke="oklch(0.3 0.05 40)" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Petals({ count = 18 }: { count?: number }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden>
      {Array.from({ length: count }).map((_, i) => {
        const dur = 12 + Math.random() * 14;
        const size = 8 + Math.random() * 10;
        return (
          <span
            key={i}
            className="absolute animate-petal"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}vh`,
              width: size,
              height: size,
              animationDuration: `${dur}s`,
              animationDelay: `${Math.random() * dur}s`,
            }}
          >
            <svg viewBox="0 0 10 10" className="h-full w-full">
              <ellipse cx="5" cy="5" rx="4.5" ry="2.2" fill="oklch(0.96 0.04 85 / 0.7)" />
            </svg>
          </span>
        );
      })}
    </div>
  );
}

export function Sparkles({ count = 30 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold animate-sparkle"
          style={{
            width: 2 + Math.random() * 2,
            height: 2 + Math.random() * 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}
