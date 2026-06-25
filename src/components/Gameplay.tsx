import { motion } from "framer-motion";
import crimeScene from "@/assets/gameplay-crimescene.jpg";
import interrogation from "@/assets/gameplay-interrogation.jpg";
import board from "@/assets/gameplay-evidenceboard.jpg";

const screens = [
  {
    img: crimeScene,
    code: "SCN-001",
    title: "Crime Scene Investigation",
    desc: "Sweep the room with your flashlight. Tag evidence. Note the position of every drop of blood.",
  },
  {
    img: interrogation,
    code: "INT-204",
    title: "Suspect Interrogation",
    desc: "Watch their hands. Their breathing. Use leverage. Break them or lose the case.",
  },
  {
    img: board,
    code: "BRD-009",
    title: "Live Evidence Board",
    desc: "Connect suspects, motives and timelines. The web you weave decides who walks free.",
  },
];

export function Gameplay() {
  return (
    <section id="gameplay" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-2xl">
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" />
            <span>03 — Inside the Game</span>
          </div>
          <h2 className="font-display text-5xl font-bold uppercase md:text-7xl">
            Tools of the <span className="text-primary">trade</span>.
          </h2>
        </div>

        <div className="space-y-24">
          {screens.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid gap-12 md:grid-cols-2 md:items-center ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 via-transparent to-accent/30 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
                <div className="glass-strong scanline relative overflow-hidden rounded-xl border border-border/60">
                  {/* Window chrome */}
                  <div className="flex items-center justify-between border-b border-border/60 bg-background/80 px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-evidence/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      // SZ_OS · MODULE {s.code}
                    </span>
                    <span className="blink-dot h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    {/* HUD overlay */}
                    <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-accent">
                      <div>● REC 00:14:22</div>
                      <div className="mt-1 text-evidence">EVIDENCE: 07/12</div>
                    </div>
                    <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-foreground/80">
                      [ press F to flag ]
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
                  Module · 0{i + 1}
                </div>
                <h3 className="mb-4 font-display text-4xl font-bold uppercase md:text-5xl">
                  {s.title}
                </h3>
                <p className="mb-6 text-muted-foreground md:text-lg">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {["Forensics", "AI Suspects", "Branching Logic", "Real-time Clues"]
                    .slice(0, 3)
                    .map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/60 bg-card/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
