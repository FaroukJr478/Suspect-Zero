import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Digital",
    price: 39,
    tag: "Standard Edition",
    desc: "The full investigation. All 12 cases, six endings.",
    features: [
      "Full base game",
      "12 murder cases",
      "All 6 endings",
      "Digital soundtrack (sample)",
    ],
    accent: "border-border/60",
    cta: "Buy Digital",
  },
  {
    name: "Deluxe",
    price: 59,
    tag: "Most Popular",
    desc: "Everything in Digital + early access to the next case.",
    features: [
      "Everything in Digital",
      "Season Pass · 4 future cases",
      "Full digital soundtrack",
      "Detective's Notebook (PDF)",
      "Exclusive Trench Coat skin",
    ],
    accent: "border-primary/60 glow-blood",
    highlight: true,
    cta: "Buy Deluxe",
  },
  {
    name: "Collector",
    price: 129,
    tag: "Limited · 5,000 copies",
    desc: "For obsessive minds. Physical goods included.",
    features: [
      "Everything in Deluxe",
      "Physical case file replica",
      "Numbered evidence board print",
      "Polaroid suspect set (×8)",
      "Behind-the-scenes art book",
    ],
    accent: "border-accent/60 glow-neon",
    cta: "Pre-Order",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-2xl">
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" />
            <span>06 — Editions</span>
          </div>
          <h2 className="font-display text-5xl font-bold uppercase md:text-7xl">
            Pick your <span className="text-primary">badge</span>.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-strong relative flex flex-col rounded-2xl border-2 p-8 ${t.accent} ${
                t.highlight ? "lg:-translate-y-4 lg:scale-[1.02]" : ""
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary-foreground">
                  ★ Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t.tag}
                </div>
                <h3 className="mt-1 font-display text-3xl font-bold uppercase">{t.name}</h3>
              </div>

              <div className="mb-6 flex items-baseline gap-2">
                <span className="font-display text-6xl font-bold">${t.price}</span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  USD
                </span>
              </div>

              <p className="mb-6 text-sm text-muted-foreground">{t.desc}</p>

              <ul className="mb-8 space-y-3 border-t border-border/40 pt-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto rounded-md py-3 font-display text-sm font-bold uppercase tracking-[0.2em] transition-all ${
                  t.highlight
                    ? "bg-primary text-primary-foreground hover:glow-blood"
                    : "border border-border bg-card hover:border-primary/60 hover:bg-primary/10"
                }`}
              >
                {t.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
