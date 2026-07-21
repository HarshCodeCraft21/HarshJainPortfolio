import {
  Github,
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
  Download,
  ArrowRight,
  Code2,
  Server,
  Database,
  Wrench,
  GraduationCap,
  Briefcase,
  Award,
  FileText,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { ACHIEVEMENTS, CONTACT, EXPERIENCE, PROJECTS, RESUME_URL, SKILLS } from "./data";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal>
      <div className="mb-14 flex flex-col items-center text-center">
        <span className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <div className="mt-5 h-px w-16 bg-primary/60" />
      </div>
    </Reveal>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 sm:px-8"
    >
      {/* subtle background shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/3 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,var(--color-background)_100%)]" />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Hi, I'm</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-7xl md:text-8xl">
            Harsh <span className="text-primary">Jain</span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <h2 className="mt-6 text-xl font-light tracking-wide text-secondary sm:text-2xl md:text-3xl">
            Full Stack Developer
          </h2>
        </Reveal>
        <Reveal delay={320}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build scalable web applications using modern technologies and create clean, responsive
            user experiences.
          </p>
        </Reveal>
        <Reveal delay={420}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_var(--color-primary)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  const points = [
    "Passionate Full Stack Developer",
    "Love building scalable web applications",
    "Interested in Backend Development",
    "Enjoy solving real-world problems",
    "Constant learner",
    "Love clean UI and performance optimization",
  ];
  return (
    <section id="about" className="px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="About" title="A little about me" />
        <div className="grid gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <div className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur">
              <p className="text-4xl font-semibold text-primary">Hello.</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                I'm Harsh — a developer focused on crafting fast, maintainable, and elegant products
                from the database to the pixel.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-3">
            <ul className="grid gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card/40 p-5 text-sm text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const GROUP_ICON: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Additional: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="bg-card/30 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills" title="Tools & technologies" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((g, i) => {
            const Icon = GROUP_ICON[g.group] ?? Code2;
            return (
              <Reveal key={g.group} delay={i * 100}>
                <div className="group h-full rounded-3xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-30px_var(--color-primary)]">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{g.group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-secondary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Projects" title="Selected work" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="group flex h-full flex-col rounded-3xl border border-border bg-card/60 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_25px_60px_-30px_var(--color-primary)]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <span className="h-2 w-2 rounded-full bg-primary/70" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">{p.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] uppercase tracking-wider text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.links.map((l) => {
                    const isLive = l.primary;
                    return (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                          isLive
                            ? "bg-primary text-primary-foreground hover:-translate-y-0.5"
                            : "border border-border text-foreground hover:border-primary/40 hover:text-primary"
                        }`}
                      >
                        {isLive ? (
                          <ExternalLink className="h-3.5 w-3.5" />
                        ) : (
                          <Github className="h-3.5 w-3.5" />
                        )}
                        {l.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="bg-card/30 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div className="relative">
          <div
            aria-hidden
            className="absolute bottom-0 left-5 top-0 w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
          />
          <ol className="space-y-8 sm:space-y-10 lg:space-y-12">
            {EXPERIENCE.map((e, i) => (
              <li key={e.role + e.company}>
                <Reveal delay={i * 120}>
                  <article className="relative grid grid-cols-[minmax(0,1fr)] sm:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)]">
                    <span
                      aria-hidden
                      className={`absolute left-5 top-1/2 h-px w-7 -translate-y-1/2 bg-border sm:w-8 ${
                        i % 2 === 0 ? "sm:left-[calc(50%-2rem)]" : "sm:left-1/2"
                      }`}
                    />
                    <span
                      aria-hidden
                      className="absolute left-5 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 sm:left-1/2"
                    >
                      <span className="block h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                    </span>
                    <div
                      className={`ml-12 rounded-3xl border border-border bg-card/60 p-6 backdrop-blur sm:ml-0 sm:row-start-1 sm:p-7 ${
                        i % 2 === 0 ? "sm:col-start-1 sm:text-right" : "sm:col-start-3 sm:text-left"
                      }`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-primary ${
                          i % 2 === 0 ? "sm:flex-row-reverse" : ""
                        }`}
                      >
                        <Briefcase className="h-3 w-3" />
                        {e.period}
                      </div>
                      <h3 className="mt-3 text-xl font-semibold text-foreground">{e.role}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{e.company}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur sm:p-12">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    Master of Computer Applications (MCA)
                  </h3>
                  <p className="mt-1 text-sm text-secondary">JECRC University</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    2024 – 2027
                  </p>
                </div>
              </div>
              <div className="shrink-0 rounded-2xl border border-primary/40 bg-primary/10 px-6 py-5 text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary">CGPA</p>
                <p className="mt-1 text-4xl font-semibold text-primary">9.14</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="bg-card/30 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Achievements" title="Certificates & wins" />
        <div className="grid gap-6 md:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} delay={i * 120}>
              <div className="group flex h-full flex-col rounded-3xl border border-border bg-card/60 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="flex-1 text-lg font-semibold leading-snug text-foreground">
                  {a.title}
                </h3>
                <a
                  href={a.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
                >
                  <FileText className="h-3.5 w-3.5" />
                  See certificate
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResumeCTA() {
  return (
    <section id="resume" className="px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/60 px-6 py-16 text-center backdrop-blur sm:px-16 sm:py-20">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_60%)] opacity-[0.08]" />
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Resume</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Take my resume for a spin.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              A concise overview of my experience, projects and skills — ready whenever you are.
            </p>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_var(--color-primary)]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg font-semibold text-foreground">
              Harsh <span className="text-primary">Jain</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Full Stack Developer crafting scalable, elegant products.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card/40 px-4 py-3 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span className="truncate">{CONTACT.email}</span>
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card/40 px-4 py-3 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card/40 px-4 py-3 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <Github className="h-4 w-4 text-primary" />
              GitHub
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card/40 px-4 py-3 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <Linkedin className="h-4 w-4 text-primary" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Harsh Jain. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
