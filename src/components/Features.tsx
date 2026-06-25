import { motion } from "framer-motion";
import { FolderOpen, Network, Zap, Brain, Timer, GitBranch } from "lucide-react";

const features = [
  { icon: FolderOpen, t: "12 Murder Cases", d: "Each with its own killer, modus operandi and tangled web of lies." },
  { icon: Network, t: "Interactive Crime Board", d: "Pin photos, draw red string between leads, reorganize the truth in real time." },
  { icon: Zap, t: "Hidden Clues & Twists", d: "Re-examine every scene — what you missed yesterday becomes the key today." },
  { icon: Brain, t: "Psychological Profiles", d: "Suspects evolve. Lie to them and they will lie back. Trust nobody." },
  { icon: Timer, t: "Time-Pressure Decisions", d: "The killer doesn't wait. Hesitate and another body hits the morgue." },
  { icon: GitBranch, t: "Branching Endings", d: "Six radically different finales — convict the wrong person and live with it." },
];

export function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-10 bg-accent" />
              <span>02 — Features</span>
            </div>
            <h2 className="font-display text-5xl font-bold uppercase md:text-7xl">
              Built for <br /> obsessive minds.
            </h2>
          </div>
          <p className="text-muted-foreground md:text-lg">
            Every system in Suspect Zero is engineered to make you feel the weight
            of the badge. No hand-holding. No quest markers. Just you, the case,
            and a killer with a head start.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-border/40 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.t}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-card p-10 transition-all duration-500 hover:bg-card/40"
              >
                <Icon className="mb-6 h-8 w-8 text-primary transition-all duration-500 group-hover:scale-110 group-hover:text-accent" />
                <h3 className="mb-3 font-display text-2xl font-bold uppercase">
                  {f.t}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.d}
                </p>
                <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
                  · {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
