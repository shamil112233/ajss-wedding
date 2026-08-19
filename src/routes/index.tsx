import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import heroImg from "@/assets/wedding-background.jpeg";
import patternImg from "@/assets/pattern-emerald.jpg";
import lanternImg from "@/assets/lantern.jpg";
import brideImg from "@/assets/bride.jpg";
import groomImg from "@/assets/groom.jpg";
import venueImg from "@/assets/venue.jpg";
import moonImg from "@/assets/moonlight.jpg";

import { Envelope } from "@/components/wedding/Envelope";
import { Countdown } from "@/components/wedding/Countdown";
import { Lanterns, Petals, Sparkles } from "@/components/wedding/Decor";
import { ArchFrame, Ornament, SectionHeading } from "@/components/wedding/Ornament";
import { RsvpForm, Wishes } from "@/components/wedding/Rsvp";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amjad & Shafana — A Malabar Wedding Celebration" },
      { name: "description", content: "Join Amjad & Shafana for their Nikah and Walima — 24 August 2026" },
      { property: "og:title", content: "Amjad & Shafana · Nikah & Walima" },
      { property: "og:description", content: "With the blessings of Allah, we joyfully invite you to our wedding celebration." },
    ],
  }),
  component: Invitation,
});

const BRIDE = "Shafana Sanah";
const GROOM = "Mohammed Amjad";
const DATE_LONG = "Monday, 24 August 2026";
const HIJRI = "11 Rabi‘ al‑Awwal 1448 AH";
const VENUE_NAME = "Grand View Convention Centre";
const VENUE_ADDR = "Nelloli, Chattiparamba, Kerala, India";
const MAP_Q = encodeURIComponent(`${VENUE_NAME}, ${VENUE_ADDR}`);

function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

function Invitation() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) document.body.style.overflow = "";
    else document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [opened]);

  return (
    <div className="relative overflow-hidden bg-ivory text-foreground">
      {!opened && <Envelope onOpen={() => setOpened(true)} />}
      {opened && <Petals count={14} />}

      {/* ===================== HERO ===================== */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover object-cover blur-[1px] " />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <Sparkles count={50} />
        <Lanterns />

        <motion.div
          {...reveal(0.2)}
          className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center text-ivory"
        >
          <p className="font-arabic text-3xl text-gold sm:text-4xl">السلام عليكم</p>
          <br></br>
          <p className="mt-2 text-xs uppercase tracking-[0.6em] text-gold/80">Assalamu Alaikum</p>

          <Ornament className="mx-auto mt-8 h-4 w-48 text-gold" />

          <p className="mt-8 font-display text-base italic text-ivory/80 sm:text-lg">
            Together with our families,<br/>we joyfully invite you to celebrate our
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.4em] text-gold">Nikah · Reception · Walima</p>

          

<h1 className="mt-8 text-center leading-tight text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
  
  <span className="block font-serif text-5xl sm:text-7xl tracking-wide">
    Mohammed Amjad
  </span>

  <span
    className="block text-gold text-4xl sm:text-5xl my-2"
    style={{ fontFamily: "Pinyon Script, cursive" }}
  >
    &
  </span>

  <span className="block font-serif text-5xl sm:text-7xl tracking-wide">
    Shafana Sanah
  </span>

</h1>



          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-ivory/90 drop-shadow-md">{DATE_LONG}</p>
          <p className="mt-1 font-script text-xl text-gold">{HIJRI}</p>

          <div className="mt-12">
            <Countdown />
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a href="#rsvp" className="btn-gold">RSVP</a>
            <a href="#events" className="btn-outline-gold !text-ivory !border-gold">View Events</a>
          </div>
        </motion.div>
      </section>

      {/* ===================== BISMILLAH / QURAN ===================== */}
      <section className="relative overflow-hidden py-24">
        <img src={patternImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/80 to-ivory" />
        <motion.div {...reveal()} className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="font-arabic text-4xl leading-loose text-emerald-deep sm:text-4xl">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <Ornament className="mx-auto mt-6 h-4 w-40 text-gold" />
          <p className="mt-5 font-arabic text-lg leading-loose text-emerald-deep sm:text-3xl">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
          </p>
          <p className="mt-6 font-display text-sm italic leading-relaxed text-foreground/85 sm:text-base">
            "And among His signs is that He created for you mates from among yourselves,
            that you may find tranquility in them; and He placed between you affection and mercy."
          </p>
          <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-gold">Surah Ar-Rum · 30 : 21</p>

          <div className="mt-10 mx-auto max-w-4xl space-y-6 text-center text-foreground/90">
            <p
              className="text-lg leading-relaxed text-foreground/85 sm:text-xl"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              With the blessings of Allah (SWT), and hearts filled with gratitude, happiness, and love,
              we celebrate the union of two souls in the sacred bond of Nikah and joyfully invite you
              to the wedding reception of
            </p>

            <p className="font-arabic text-3xl leading-relaxed text-emerald-deep sm:text-4xl" style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>محمد أمجد</p>
            <p className="font-arabic text-2xl text-gold sm:text-3xl" style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>و</p>
            <p className="font-arabic text-3xl leading-relaxed text-emerald-deep sm:text-4xl" style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>شفان سنة</p>

            <p
              className="text-lg leading-relaxed sm:text-xl"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              as they begin this beautiful journey together.
            </p>

            <p
              className="text-lg leading-relaxed sm:text-xl"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              We warmly hope you will grace this joyous occasion with your presence and duas.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===================== EVENTS ===================== */}
      <section id="events" className="relative py-24 royal-section-base">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="In sha Allah" title="Wedding Events" arabic="مناسبات الزفاف" />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((e, i) => (
              <motion.article
                {...reveal(i * 0.08)}
                key={e.name}
                className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-ivory/90 p-8 text-center shadow-gold royal-card"
              >
                <div className="absolute inset-x-8 top-0 h-12 rounded-b-full bg-gradient-gold/80 opacity-95" />
                <div className="relative pt-10">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold bg-ivory text-2xl text-emerald-deep shadow-gold royal-glow-ring">
                    {e.icon}
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-emerald-deep">{e.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gold">{e.tag}</p>
                  <div className="my-5 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                  <p className="text-sm text-foreground/85">{e.date}</p>
                  <p className="text-sm text-foreground/85">{e.time}</p>
                  <p className="mt-3 text-xs italic text-foreground/70">{e.venue}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== VENUE ===================== */}
      <section className="relative py-24 royal-section-base">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Join Us At" title="The Venue" arabic="المكان" />

          <motion.div {...reveal()} className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="arch-frame h-[460px] overflow-hidden">
              <img src={venueImg} alt={VENUE_NAME} loading="lazy" className="h-full w-full object-cover" />
            </div>

            <div className="royal-card rounded-[2rem] border border-gold/20 bg-ivory/90 p-8 shadow-gold">
              <div className="space-y-3">
                <span className="royal-badge">Reception Hall</span>
                <h3 className="font-display text-4xl text-emerald-deep">{VENUE_NAME}</h3>
                <p className="text-foreground/75">{VENUE_ADDR}</p>
              </div>

              <div className="royal-map-card mt-6 overflow-hidden">
                <iframe
                  title="Venue Map"
                  className="h-72 w-full"
                  loading="lazy"
                  src={`https://www.google.com/maps?q=${MAP_Q}&output=embed`}
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_Q}`} target="_blank" rel="noreferrer" className="btn-gold">
                  Get Directions
                </a>
                <a
                  href={calendarLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-gold"
                >
                  Save the Date
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`You're invited to ${BRIDE} & ${GROOM}'s wedding on ${DATE_LONG}!`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-gold"
                >
                  Share on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== RSVP ===================== */}
      <section id="rsvp" className="relative py-24 royal-section-base">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Kindly Respond"
            title="RSVP"
            arabic="تأكيد الحضور"
          >
            Your presence will mean the world to us — kindly let us know.
          </SectionHeading>
          <div className="mx-auto mt-12 max-w-3xl royal-card rounded-[3rem] border border-gold/20 bg-gradient-parchment royal-rsvp-bg p-8 shadow-gold">
            <RsvpForm />
          </div>
        </div>
      </section>

      {/* ===================== THANK YOU ===================== */}
      <section className="relative overflow-hidden py-14 text-ivory">
        <img src={moonImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/85 to-night" />
        <Sparkles count={60} />
        <Lanterns />

        <motion.div {...reveal()} className="relative mx-auto max-w-2xl px-4 text-center">
          <div className="relative px-4 py-6">
            <p className="font-arabic text-2xl text-gold sm:text-3xl">جزاكم الله خيراً</p>
            <Ornament className="mx-auto mt-4 h-4 w-40 text-gold" />
            <p className="mx-auto mt-5 max-w-2xl text-xl italic leading-snug text-ivory/90 sm:text-2xl">
              "Your presence and duas are the greatest blessings for our special day. We are truly grateful for your loving support."
            </p>
            <h2 className="mx-auto mt-6 inline-flex items-center justify-center gap-2 text-2xl font-display text-ivory sm:text-3xl">
              <span>{GROOM}</span>
              <span className="text-[#ef4444]">❤</span>
              <span>{BRIDE}</span>
            </h2>
            <div className="mt-4 space-y-0.5">
              <p className="text-[0.72rem] uppercase tracking-[0.35em] text-gold">{DATE_LONG}</p>
              <p className="text-[0.72rem] uppercase tracking-[0.25em] text-ivory/70">{VENUE_NAME} · Chattiparamba</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function calendarLink() {
  const start = "20260214T120000Z";
  const end = "20260214T180000Z";
  const text = encodeURIComponent(`${BRIDE} & ${GROOM} — Nikah & Walima`);
  const loc = encodeURIComponent(`${VENUE_NAME}, ${VENUE_ADDR}`);
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&location=${loc}&details=${encodeURIComponent("With the blessings of Allah, please join us.")}`;
}

const EVENTS = [
  { name: "Nikah Ceremony", tag: "The Sacred Vow", icon: "۞", date: "Sunday, 23 Aug 2026", time: "10:30 AM", venue: "Valapuram West Juma Masjid" },
  { name: "Reception", tag: "Wedding Lunch", icon: "☾", date: "Sunday, 23 Aug 2026", time: "12:00 PM", venue: "Marhaba Auditorium, Valapuram" },
  { name: "Walima Feast", tag: "Walima Day", icon: "✿", date: "Monday, 24 Aug 2026", time: "12:00 PM", venue: "Grand View Convention Centre, Nelloli, Chattiparamba" },
];

const FAMILIES = [
  {
    title: "The Bride's Family",
    rows: [
      { role: "Grandparents", names: "Late Haji Abdul Khader & Mrs. Khadeeja Beevi" },
      { role: "Parents", names: "Dr. Abdul Hameed & Mrs. Sajitha Hameed" },
      { role: "Siblings", names: "Aamir Hameed · Zainab Hameed" },
      { role: "Close Family", names: "Rashid Uncle, Fathima Aunty & all loved ones" },
    ],
  },
  {
    title: "The Groom's Family",
    rows: [
      { role: "Grandparents", names: "Late Mr. Ibrahim Kutty & Mrs. Aisha Ibrahim" },
      { role: "Parents", names: "Mr. Mohammed Rahman & Mrs. Suhara Rahman" },
      { role: "Siblings", names: "Hannan Rahman · Nadia Rahman" },
      { role: "Close Family", names: "Shahul Uncle, Safiya Aunty & extended family" },
    ],
  },
];
