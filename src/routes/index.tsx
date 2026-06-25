import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Gameplay } from "@/components/Gameplay";
import { Suspects } from "@/components/Suspects";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suspect Zero — Every Clue Hides a Lie" },
      {
        name: "description",
        content:
          "Suspect Zero is a cinematic detective thriller game. Investigate brutal serial murder cases, interrogate suspects, and uncover the truth before the killer strikes again.",
      },
      { property: "og:title", content: "Suspect Zero — Every Clue Hides a Lie" },
      {
        property: "og:description",
        content:
          "A psychological detective game where every choice leaves a fingerprint. Hunt the killer before midnight strikes.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Gameplay />
        <Suspects />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
