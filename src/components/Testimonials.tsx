import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    q: "The most immersive detective game I've played in a decade. I forgot I was holding a controller.",
    a: "Marcus R.",
    role: "GameSpire · 9.5/10",
  },
  {
    q: "Every decision feels heavy. I locked up the wrong suspect and the game refused to let me forget it.",
    a: "Lena K.",
    role: "Player Review · Steam",
  },
  {
    q: "It feels like being trapped inside a Fincher movie. The atmosphere is suffocating in the best way.",
    a: "James O.",
    role: "Nightline Gaming",
  },
  {
    q: "I solved the case at 3 AM and immediately started a new playthrough. Six endings — I have to see them all.",
    a: "Priya S.",
    role: "Verified Buyer",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-10 bg-accent" />
              <span>05 — Field Reports</span>
            </div>
            <h2 className="font-display text-5xl font-bold uppercase md:text-7xl">
              Verdicts from <br /> the field.
            </h2>
          </div>
          <div className="glass flex items-center gap-3 rounded-full px-5 py-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-evidence text-evidence" />
              ))}
            </div>
            <span className="font-mono text-xs uppercase tracking-widest">
              9.4 · 24,318 reviews
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.a}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass relative rounded-xl p-8 transition-all hover:border-accent/40"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/20" />
              <blockquote className="font-display text-xl leading-snug text-foreground md:text-2xl">
                "{r.q}"
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-border/40 pt-4">
                <div>
                  <div className="font-display text-sm font-bold uppercase tracking-wider">
                    {r.a}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {r.role}
                  </div>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-3 w-3 fill-primary text-primary" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
