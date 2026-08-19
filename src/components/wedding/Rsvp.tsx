import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Wish = { name: string; message: string };

export function RsvpForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    family: "",
    guests: 1,
    attending: "yes",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem("rsvp") ?? "[]");
      existing.push({ ...form, ts: Date.now() });
      localStorage.setItem("rsvp", JSON.stringify(existing));
    } catch {}
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-xl">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-10 text-center"
          >
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-gradient-gold text-emerald-deep shadow-gold">
              ❤
            </div>
            <h3 className="font-display text-3xl text-emerald-deep">JazakAllahu Khairan</h3>
            <p className="mt-3 text-foreground/75">
              Your response has been received. Your duas are our greatest blessing.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <Field label="Your Name">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Mobile Number">
                <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
              </Field>
              <Field label="Family Name">
                <input value={form.family} onChange={(e) => setForm({ ...form, family: e.target.value })} className={inputCls} />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Guests">
                <input required type="number" min={1} max={20} value={form.guests} onChange={(e) => setForm({ ...form, guests: +e.target.value })} className={inputCls} />
              </Field>
              <Field label="Will You Attend?">
                <select value={form.attending} onChange={(e) => setForm({ ...form, attending: e.target.value })} className={inputCls}>
                  <option value="yes">In sha Allah, Yes</option>
                  <option value="maybe">Trying to make it</option>
                  <option value="no">Unable to attend</option>
                </select>
              </Field>
            </div>
            <Field label="Duas & Wishes">
              <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls} />
            </Field>
            <button type="submit" className="btn-gold w-full justify-center">
              Submit RSVP
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-gold/30 bg-ivory/90 px-4 py-3 text-foreground font-body outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30 royal-input";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs uppercase tracking-[0.2em] text-emerald-deep/80">{label}</span>
      {children}
    </label>
  );
}

export function Wishes() {
  const sample: Wish[] = [
    { name: "Rashid Uncle", message: "May Allah bless your union with mercy and love. Barakallahu lakuma." },
    { name: "Fathima", message: "Couldn't be happier for you both. Endless duas from our family." },
    { name: "Shahul & Family", message: "A match made in Jannah. May your home be filled with light." },
    { name: "Nadia", message: "Tears of joy reading this invite. See you on the day, In sha Allah." },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {sample.map((w) => (
        <div key={w.name} className="parchment-card rounded-xl p-5">
          <p className="font-display text-lg italic text-foreground/85">"{w.message}"</p>
          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gold">— {w.name}</p>
        </div>
      ))}
    </div>
  );
}
