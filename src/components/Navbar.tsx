import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Case File" },
  { href: "#features", label: "Features" },
  { href: "#gameplay", label: "Gameplay" },
  { href: "#suspects", label: "Suspects" },
  { href: "#pricing", label: "Editions" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all ${
          scrolled ? "glass-strong rounded-2xl py-3 mx-4 md:mx-auto" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-sm border border-primary blink-dot" />
            <div className="absolute inset-1 bg-primary/20" />
            <span className="absolute inset-0 grid place-items-center font-display text-xs font-bold tracking-widest text-primary">
              SZ
            </span>
          </div>
          <span className="font-display text-lg font-bold tracking-[0.25em]">
            SUSPECT<span className="text-primary">·</span>ZERO
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="hidden rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:glow-blood md:inline-block"
          type="button"
        >
          Play Now
        </button>

        <button
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-4 bg-primary" />
          </div>
        </button>
      </div>

      {open && (
        <div className="glass-strong mx-4 mt-2 rounded-2xl p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
