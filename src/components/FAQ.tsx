import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What platforms is Suspect Zero available on?",
    a: "Suspect Zero launches on PC (Steam, Epic), PlayStation 5, Xbox Series X|S, and Mac. A Switch 2 version is in development.",
  },
  {
    q: "Is there multiplayer or co-op?",
    a: "The base experience is single player. A 2-player co-op detective mode (Partners in Crime) is included free in the Deluxe & Collector editions.",
  },
  {
    q: "How long does an average playthrough take?",
    a: "Around 22-28 hours for a single ending. Expect 60+ hours to uncover all six endings and every hidden clue.",
  },
  {
    q: "Are choices really permanent?",
    a: "Yes. Save scumming is disabled by design. Once you accuse a suspect, the city — and the game — moves on.",
  },
  {
    q: "Will there be DLC and updates?",
    a: "Yes. Four post-launch case files are confirmed, plus regular free updates with new evidence types and cosmetic detective skins.",
  },
  {
    q: "Is the game appropriate for younger players?",
    a: "Suspect Zero is rated M for Mature. It contains depictions of crime scenes, blood, and psychological horror themes.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-10 bg-accent" />
            <span>07 — Briefing</span>
            <span className="h-px w-10 bg-accent" />
          </div>
          <h2 className="font-display text-5xl font-bold uppercase md:text-7xl">
            Frequently <br /> <span className="text-primary">interrogated</span>.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className={`glass overflow-hidden rounded-xl transition-colors ${
                open === i ? "border-primary/40" : ""
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-bold uppercase tracking-wide">
                    {f.q}
                  </span>
                </div>
                <Plus
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-border/40 px-6 pb-6 pt-4 pl-16 text-muted-foreground">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
