import { Twitter, Youtube, Instagram, Twitch, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-background/60 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Newsletter */}
        <div className="glass-strong mb-16 grid gap-8 rounded-2xl p-8 md:grid-cols-2 md:items-center md:p-12">
          <div>
            <div className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              ▎ Classified Briefings
            </div>
            <h3 className="font-display text-3xl font-bold uppercase md:text-4xl">
              Join the case files.
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get new evidence, behind-the-scenes leaks, and early access codes.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                placeholder="detective@precinct.gov"
                className="w-full rounded-md border border-border bg-input/40 py-3 pl-11 pr-4 font-mono text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-primary px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:glow-blood"
            >
              Enlist
            </button>
          </form>
        </div>

        <div className="grid gap-12 pb-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="relative h-9 w-9">
                <div className="absolute inset-0 border border-primary blink-dot" />
                <div className="absolute inset-1 bg-primary/20" />
                <span className="absolute inset-0 grid place-items-center font-display text-xs font-bold tracking-widest text-primary">
                  SZ
                </span>
              </div>
              <span className="font-display text-xl font-bold tracking-[0.25em]">
                SUSPECT<span className="text-primary">·</span>ZERO
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A psychological detective thriller where every clue hides a lie and
              every choice leaves a fingerprint.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Youtube, Instagram, Twitch].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-primary">
              Game
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">About</a></li>
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#suspects" className="hover:text-foreground">Suspects</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Editions</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-primary">
              Precinct HQ
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contact@suspectzero.game</li>
              <li>press@suspectzero.game</li>
              <li>support@suspectzero.game</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/40 py-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Suspect Zero. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">EULA</a>
            <span className="text-primary">● SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
