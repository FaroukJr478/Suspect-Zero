import { motion } from "framer-motion";
import s1 from "@/assets/suspect-1.jpg";
import s2 from "@/assets/suspect-2.jpg";
import s3 from "@/assets/suspect-3.jpg";
import s4 from "@/assets/suspect-4.jpg";

const suspects = [
  {
    img: s1,
    name: "Daniel Vance",
    code: "SUS-001",
    occupation: "Forensic Pathologist",
    motive: "Knew every victim before death",
    suspicion: 78,
    secret: "Falsified three autopsy reports in 2019.",
  },
  {
    img: s2,
    name: "Eva Marlow",
    code: "SUS-002",
    occupation: "Investigative Journalist",
    motive: "Obsessed with the case for 6 years",
    suspicion: 64,
    secret: "Receives anonymous letters from the killer.",
  },
  {
    img: s3,
    name: "Frank Doyle",
    code: "SUS-003",
    occupation: "Ex-Detective",
    motive: "Was suspended after botching the first case",
    suspicion: 91,
    secret: "Owns a storage unit no one knows about.",
  },
  {
    img: s4,
    name: "Arthur Kane",
    code: "SUS-004",
    occupation: "District Attorney",
    motive: "Buried key evidence in the original trial",
    suspicion: 55,
    secret: "Met victim #4 the night she disappeared.",
  },
];

export function Suspects() {
  return (
    <section id="suspects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-2xl">
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" />
            <span>04 — Persons of Interest</span>
          </div>
          <h2 className="font-display text-5xl font-bold uppercase md:text-7xl">
            Four faces. <br />
            One <span className="text-primary text-glow-blood">killer</span>.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Hover any file. The dossier doesn't lie. Neither do they — completely.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {suspects.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-border/60 bg-card"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                {/* Mugshot ID strip */}
                <div className="absolute left-3 top-3 flex items-center gap-2 rounded-sm bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur">
                  <span className="blink-dot h-1.5 w-1.5 rounded-full bg-primary" />
                  {s.code}
                </div>

                {/* Suspicion meter */}
                <div className="absolute right-3 top-3 rounded-sm bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur">
                  <span className={s.suspicion > 75 ? "text-primary" : "text-evidence"}>
                    {s.suspicion}% · SUSPECT
                  </span>
                </div>
              </div>

              <div className="relative space-y-3 p-5">
                <div>
                  <h3 className="font-display text-xl font-bold uppercase">{s.name}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.occupation}
                  </p>
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Motive
                  </div>
                  <p className="text-sm text-foreground/90">{s.motive}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span>Suspicion Level</span>
                    <span className="text-primary">{s.suspicion}%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-border/60">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/60"
                      style={{ width: `${s.suspicion}%` }}
                    />
                  </div>
                </div>

                {/* Hidden secret on hover */}
                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="rounded-md border border-primary/30 bg-primary/5 p-3 mt-1">
                      <div className="mb-1 font-mono text-[9px] uppercase tracking-widest text-primary">
                        ▎ Confidential
                      </div>
                      <p className="text-xs text-foreground/90">{s.secret}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
