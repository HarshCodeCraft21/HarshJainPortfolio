import { lazy, Suspense } from "react";
import { Hero } from "./components/portfolio/Hero";
import { Navbar } from "./components/portfolio/Navbar";

const About = lazy(() =>
  import("./components/portfolio/Sections").then(({ About }) => ({ default: About })),
);
const Skills = lazy(() =>
  import("./components/portfolio/Sections").then(({ Skills }) => ({ default: Skills })),
);
const Projects = lazy(() =>
  import("./components/portfolio/Sections").then(({ Projects }) => ({ default: Projects })),
);
const Experience = lazy(() =>
  import("./components/portfolio/Sections").then(({ Experience }) => ({ default: Experience })),
);
const Education = lazy(() =>
  import("./components/portfolio/Sections").then(({ Education }) => ({ default: Education })),
);
const Achievements = lazy(() =>
  import("./components/portfolio/Sections").then(({ Achievements }) => ({ default: Achievements })),
);
const ResumeCTA = lazy(() =>
  import("./components/portfolio/Sections").then(({ ResumeCTA }) => ({ default: ResumeCTA })),
);
const Footer = lazy(() =>
  import("./components/portfolio/Sections").then(({ Footer }) => ({ default: Footer })),
);

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <ResumeCTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
