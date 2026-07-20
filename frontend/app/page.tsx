import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Trust from "@/components/landing/Trust";
import Features from "@/components/landing/Features";
import FAQ from "@/components/landing/FAQ";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Trust />
      <Features />
      <FAQ />
    </main>
  );
}