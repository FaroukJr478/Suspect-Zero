import { motion } from "framer-motion";
import { Search, Fingerprint, MessageSquareWarning, Puzzle, Skull } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Investigate Crime Scenes",
    desc: "Sweep blood-stained rooms, abandoned warehouses and silent alleys. Nothing is where it should be.",
  },
  {
    icon: Fingerprint,
    title: "Analyze Evidence",
    desc: "Dust for prints, run forensics, decode encrypted phones. Every detail matters.",
  },
  {
    icon: MessageSquareWarning,
    title: "Interrogate Suspects",
    desc: "Read micro-expressions. Press hard. One slip of the tongue can break the case.",
  },
  {
    icon: Puzzle,
    title: "Solve the Puzzles",
    desc: "Connect motives, alibis and timelines on the live evidence board with red string.",
  },
  {
    icon: Skull,
    title: "Catch the Killer",
    desc: "Make the call before the next body drops. One wrong arrest — and they vanish forever.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" />
            <span>01 — The Investigation</span>
          </div>
          <h2 className="font-display text-5xl font-bold uppercase md:text-7xl">
            Think like a <span className="text-primary text-glow-blood">detective</span>.
            <br />
            Hunt like a <span className="text-accent text-glow-neon">predator</span>.
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Suspect Zero is a slow-burn psychological thriller where every choice
            leaves a fingerprint. Five core mechanics drive the hunt.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group glass relative overflow-hidden rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="absolute -right-6 -top-6 font-display text-7xl font-bold text-foreground/5">
                  0{i + 1}
                </div>
                <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/5 transition-all group-hover:border-primary group-hover:bg-primary/15 group-hover:glow-blood">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="relative mb-2 font-display text-lg font-bold uppercase tracking-wide">
                  {s.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
