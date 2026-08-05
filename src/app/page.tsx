import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { About } from "@/components/about";
import { Brands } from "@/components/brands";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <About />
        <Brands />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
