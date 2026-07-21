import { Hero } from "./components/portfolio/Hero";
import { Navbar } from "./components/portfolio/Navbar";
import {
  About,
  Achievements,
  Education,
  Experience,
  Footer,
  Projects,
  ResumeCTA,
  Skills,
} from "./components/portfolio/Sections";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <ResumeCTA />
      </main>
      <Footer />
    </div>
  );
}
