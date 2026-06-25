import { motion } from "framer-motion";
import { Play, FileVideo } from "lucide-react";
import hero from "@/assets/hero-crimeboard.jpg";
import { Particles, Smoke } from "./Particles";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Detective crime board with suspects"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
      </div>

      <Smoke />
      <Particles count={40} />

      {/* Case file marker */}
      <div className="absolute right-6 top-28 z-10 hidden md:block">
        <div className="glass clip-evidence rotate-3 p-4 font-mono text-[10px] uppercase tracking-widest">
          <div className="text-primary">▎ CASE FILE #00731</div>
          <div className="mt-1 text-muted-foreground">CLASSIFIED · LEVEL 5</div>
          <div className="mt-2 flex items-center gap-2">
            <span className="blink-dot inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-foreground/80">LIVE INVESTIGATION</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-12 bg-primary" />
            <span>A Detective Mystery Game</span>
          </div>

          <h1 className="font-display text-7xl font-bold uppercase leading-[0.9] tracking-tight md:text-[10rem]">
            <span className="block text-glow-blood text-foreground">Suspect</span>
            <span className="relative block">
              <span className="text-glow-neon text-foreground">Zero</span>
              <span className="absolute -bottom-2 left-0 h-1 w-32 bg-primary md:w-48" />
            </span>
          </h1>

          <p className="mt-8 font-display text-2xl uppercase tracking-[0.15em] text-muted-foreground md:text-3xl">
            Every clue <span className="text-primary">hides</span> a lie.
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground/90 md:text-lg">
            Step into the shoes of an elite detective hunting a serial killer who
            leaves no witnesses — only riddles. Investigate, interrogate, and
            connect the threads before midnight strikes.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="group relative flex items-center gap-3 overflow-hidden rounded-md bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:glow-blood"
            >
              <Play className="h-4 w-4 fill-current" />
              Play Now
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
            <button
              type="button"
              className="flex items-center gap-3 rounded-md border border-accent/40 bg-accent/5 px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-accent backdrop-blur-sm transition-all hover:bg-accent/15 hover:glow-neon"
            >
              <FileVideo className="h-4 w-4" />
              Watch Trailer
            </button>
          </div>

          <div className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-border/40 pt-8">
            {[
              { v: "12", l: "Murder Cases" },
              { v: "60+", l: "Suspects" },
              { v: "9.4", l: "User Rating" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-foreground md:text-4xl">
                  {s.v}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-primary/20 bg-background/60 py-2 backdrop-blur">
        <div className="flex items-center gap-8 overflow-hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="ml-6 text-primary">● REC</span>
          <span>EVIDENCE LOGGED · 14 ITEMS</span>
          <span>·</span>
          <span>SUSPECT INTERROGATION SCHEDULED 23:14</span>
          <span>·</span>
          <span className="text-accent">FORENSIC RESULTS PENDING</span>
          <span>·</span>
          <span>VICTIM #7 IDENTIFIED</span>
        </div>
      </div>
    </section>
  );
}
