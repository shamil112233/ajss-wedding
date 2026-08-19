import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const COUPLE = { bride: "Shafana", groom: "Amjad" };

export function Envelope({ onOpen }: { onOpen: () => void }) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      const t = setTimeout(onOpen, 1700);
      return () => clearTimeout(t);
    }
  }, [opened, onOpen]);

  return (
    <AnimatePresence>
      <motion.div
        key="envelope"
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gradient-night px-6"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* sparkles */}
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="pointer-events-none absolute h-1 w-1 rounded-full bg-gold animate-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}

        <div className="relative w-full max-w-md">
          {/* Envelope */}
          <motion.div
            className="relative aspect-[4/5] w-full"
            animate={opened ? { scale: 0.92, y: -10 } : {}}
          >
            {/* body */}
            <div
            className="absolute inset-0 rounded-md shadow-emerald"
            style={{
            background: "linear-gradient(135deg, #fffdf7, #f5efe3)",
            }}
            />
            <div className="absolute inset-3 rounded-sm border border-gold/40" />

            {/* letter peeking out */}
            <motion.div
              className="absolute inset-x-6 bottom-6 top-24 rounded-sm bg-gradient-parchment p-6 text-center shadow-2xl"
              initial={{ y: 40, opacity: 0 }}
              animate={opened ? { y: -60, opacity: 1 } : { y: 60, opacity: 0.6 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-arabic text-2xl leading-loose text-emerald-deep">
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              </p>
              <div className="divider-ornament my-3 text-gold">۞</div>
              <p className="text-xs uppercase tracking-[0.3em] text-maroon/80">Wedding Invitation</p>
              <p className="mt-4 font-display text-3xl text-emerald-deep">
                {COUPLE.groom} <span className="font-script text-gold">&</span> {COUPLE.bride}
              </p>
              <p className="mt-2 text-xs italic text-foreground/70">Monday, 24 August 2026</p>
            </motion.div>

            {/* Flap */}
            <motion.div
              className="absolute inset-x-0 top-0 origin-top"
              style={{
                height: "55%",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
              animate={opened ? { rotateX: -180 } : { rotateX: 0 }}
              transition={{ duration: 1.1, ease: [0.6, 0, 0.4, 1] }}
            >
              <svg viewBox="0 0 100 70" className="h-full w-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
                <defs>
                  <linearGradient id="flapGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#fffdf7" />
                    <stop offset="100%" stopColor="#e8decc" />
                  </linearGradient>
                </defs>
                <polygon points="0,0 100,0 50,68" fill="url(#flapGrad)" stroke="#b99a5a" strokeWidth="0.4" />
                <text x="50" y="32" textAnchor="middle" fontSize="9" fill="oklch(0.78 0.13 80)" fontFamily="Pinyon Script">
                  A &amp; S
                </text>
              </svg>
            </motion.div>

            {/* Wax seal */}
            {!opened && (
              <motion.button
                onClick={() => setOpened(true)}
                whileTap={{ scale: 0.92 }}
                className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2"
                aria-label="Open invitation"
              >
                <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-maroon to-[oklch(0.22_0.1_25)] shadow-[0_8px_30px_rgba(0,0,0,0.5)] ring-2 ring-gold/60">
                  <span className="font-script text-2xl text-gold">A&amp;S</span>
                </div>
              </motion.button>
            )}
          </motion.div>

          <div className="mt-10 text-center">
            {!opened ? (
              <button onClick={() => setOpened(true)} className="btn-gold">
                Open Invitation
              </button>
            ) : (
              <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
                Bismillah · Entering
              </p>
            )}
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-ivory/50">
              Tap the seal to begin
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
