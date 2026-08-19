import { useEffect, useState } from "react";

const TARGET = new Date("2026-08-24T00:00:00+05:30").getTime();

export function Countdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const diff = Math.max(0, TARGET - now);

  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff / 3_600_000) % 24);
  const mins = Math.floor((diff / 60_000) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  const cells: [string, number][] = [
    ["Days", days],
    ["Hours", hours],
    ["Minutes", mins],
    ["Seconds", secs],
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-4">
      {cells.map(([label, val]) => (
        <div
          key={label}
          className="
            relative group
            rounded-xl
            px-3 py-4 sm:px-4 sm:py-5
            text-center

            backdrop-blur-md
            bg-white/40
            border border-white/30

            shadow-md
            transition duration-300
            hover:-translate-y-1 hover:shadow-xl
          "
        >
          {/* ✅ gradient top line */}
          <div className="
              absolute top-0 left-0 w-full h-1
              bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400
              rounded-t-xl
            " />

          {/* ✅ soft glass shine */}
          <div className="
              absolute inset-0 rounded-xl
              bg-white/20
              opacity-40
              pointer-events-none
            " />

          {/* ✅ Number (keep strong for readability) */}
          <div className="
              relative z-10
              font-bold
              text-3xl sm:text-4xl
              text-gray-900
            ">
            {String(val).padStart(2, "0")}
          </div>

          {/* ✅ Label */}
          <div className="
              relative z-10
              mt-1
              text-[10px] sm:text-xs
              uppercase tracking-wider
              text-gray-700
            ">
            {label}
          </div>

          {/* ✅ bottom decorative dot */}
          <div className="
              absolute bottom-2 left-1/2 -translate-x-1/2
              w-1.5 h-1.5
              bg-emerald-400
              rounded-full
              opacity-70
            " />
        </div>
      ))}
    </div>
  );
}