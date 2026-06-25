import { useMemo } from "react";

export function Particles({ count = 30 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 12,
        duration: Math.random() * 10 + 10,
        red: Math.random() > 0.6,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="float-slow absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.red ? "var(--blood-glow)" : "var(--neon-glow)",
            boxShadow: p.red
              ? "0 0 8px var(--blood-glow)"
              : "0 0 8px var(--neon-glow)",
            opacity: 0.6,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export function Smoke() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="smoke absolute h-[60vh] w-[60vw] rounded-full blur-3xl"
          style={{
            left: `${i * 30 - 10}%`,
            top: `${i * 20}%`,
            background:
              i % 2
                ? "radial-gradient(circle, oklch(0.7 0.18 230 / 8%), transparent 60%)"
                : "radial-gradient(circle, oklch(0.55 0.22 25 / 10%), transparent 60%)",
            animationDelay: `${i * 4}s`,
          }}
        />
      ))}
    </div>
  );
}
