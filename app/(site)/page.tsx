import Hero from "../components/Hero";
import StatsMarquee from "../components/StatsMarquee";
import About from "../components/About";
import JournalTeaser from "../components/JournalTeaser";
import Projects from "../components/Projects";
import FeaturedLinks from "../components/FeaturedLinks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsMarquee />
      <About />
      <JournalTeaser />
      <Projects />
      <FeaturedLinks />
      <Footer />
    </main>
  );
}
