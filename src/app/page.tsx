import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import SplashCursor from "@/components/SplashCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <SplashCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TestimonialCarousel />
      <Contact />
      <Footer />
    </main>
  );
}
