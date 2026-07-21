import { ArrowRight, Download, Github, Linkedin, Mail, Rocket } from "lucide-react";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { CONTACT, RESUME_URL } from "./data";

const TECH_PILLS = [
  { label: "React", Icon: SiReact, position: "left-0 top-[14%]" },
  { label: "Node.js", Icon: SiNodedotjs, position: "right-0 top-[14%]" },
  { label: "MongoDB", Icon: SiMongodb, position: "-left-2 top-[41%]" },
  { label: "Express", Icon: SiExpress, position: "-right-2 top-[41%]" },
  { label: "Python", Icon: SiPython, position: "bottom-[16%] left-0" },
  { label: "TypeScript", Icon: SiTypescript, position: "bottom-[16%] right-0" },
  { label: "JavaScript", Icon: SiJavascript, position: "bottom-0 left-[16%]" },
  { label: "Tailwind CSS", Icon: SiTailwindcss, position: "bottom-0 right-[16%]" },
];

function ProfilePortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[30rem] py-4 sm:py-6">
      <div aria-hidden className="absolute inset-[14%] rounded-full bg-[#D6B37A]/20 blur-[90px]" />
      <div className="relative mx-auto aspect-square w-[min(100%,24rem)]">
        <div
          aria-hidden
          className="absolute inset-0 rounded-full border border-dashed border-[#D6B37A]/30"
        />
        <div aria-hidden className="absolute inset-5 rounded-full border border-[#E7C78A]/35" />
        <div
          aria-hidden
          className="absolute inset-9 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(231,199,138,0.25),transparent_66%)]"
        />
        <div
          className="absolute inset-7 overflow-hidden rounded-full border border-[#E7C78A]/20 bg-[#D6B37A]/10"
        >
          <img
            src="/ProfileImage.png"
            alt="Harsh Jain, Full Stack Developer"
            className="h-full w-full scale-110 object-cover object-top"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_55%,#0B0B0B_93%)]"
        />
      </div>

      {TECH_PILLS.map(({ label, Icon, position }) => (
        <div
          key={label}
          className={`absolute z-10 hidden items-center gap-2 rounded-full border border-[#E7C78A]/25 bg-[#151515]/70 px-3 py-2 text-[11px] font-medium text-[#F8F8F8] shadow-[0_10px_30px_-16px_rgba(214,179,122,0.8)] backdrop-blur-xl md:inline-flex ${position}`}
        >
          <Icon className="h-3.5 w-3.5 text-[#D6B37A]" />
          {label}
        </div>
      ))}
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B37A]/50 hover:bg-[#D6B37A]/10 hover:text-[#E7C78A]"
    >
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-5 pb-10 pt-24 sm:px-8 sm:pt-28 lg:min-h-screen lg:pb-8 lg:pt-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(248,248,248,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(248,248,248,0.045) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 12%, transparent 76%)",
          }}
        />
        <div className="absolute -left-32 top-10 h-[30rem] w-[30rem] rounded-full bg-[#D6B37A]/[0.13] blur-[140px]" />
        <div className="absolute -right-24 top-1/3 h-[34rem] w-[34rem] rounded-full bg-[#E7C78A]/[0.1] blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[100px]" />
        <div className="absolute left-0 right-0 top-[22%] h-px bg-gradient-to-r from-transparent via-[#D6B37A]/20 to-transparent" />
        <div className="absolute bottom-[18%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        {[
          { top: "16%", left: "15%" },
          { top: "24%", left: "82%" },
          { top: "63%", left: "8%" },
          { top: "77%", left: "75%" },
          { top: "46%", left: "54%" },
        ].map((particle, index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-[#E7C78A]"
            style={{
              top: particle.top,
              left: particle.left,
              boxShadow: "0 0 10px rgba(231,199,138,0.8)",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#0B0B0B_100%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-6">
          <div className="relative z-10 text-center lg:col-span-7 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D6B37A]/35 bg-[#151515]/60 px-3.5 py-2 text-xs font-medium text-[#E7C78A] backdrop-blur-xl">
              <Rocket className="h-3.5 w-3.5" />
              Full Stack Developer
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.42em] text-neutral-500">
              Hi, I&apos;m
            </p>
            <h1 className="mt-3 font-sans text-[clamp(4rem,9vw,6.25rem)] font-semibold leading-[0.84] tracking-[-0.065em] text-[#F8F8F8]">
              HARSH
              <span
                className="mt-2 block bg-gradient-to-br font-bold tracking-[-0.025em] from-[#F8F8F8] via-[#E7C78A] to-[#A9844E] bg-clip-text text-transparent"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                JAIN
              </span>
            </h1>
            <h2 className="mx-auto mt-6 max-w-xl text-2xl font-medium leading-tight tracking-[-0.03em] text-[#F8F8F8] sm:text-3xl lg:mx-0">
              Building Scalable Web Applications{" "}
              <span className="text-[#D6B37A]">with Modern Technologies</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-neutral-400 lg:mx-0 sm:text-base">
              I craft scalable, secure and modern web applications with a strong focus on user
              experience, performance, and clean architecture.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D6B37A] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_42px_-15px_rgba(214,179,122,0.9)]"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-[#F8F8F8] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B37A]/50 hover:bg-[#D6B37A]/10 hover:text-[#E7C78A]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
            <div className="mt-6 flex justify-center gap-3 lg:justify-start">
              <SocialLink href={CONTACT.github} label="GitHub">
                <Github className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={CONTACT.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={`mailto:${CONTACT.email}`} label="Email">
                <Mail className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <ProfilePortrait />
            <p className="pointer-events-none absolute right-52 top-64 hidden -translate-x-[28%] -translate-y-1/2 -rotate-90 whitespace-nowrap font-serif text-2xl italic tracking-[0.22em] text-[#E7C78A]/30 xl:block">
              Code. Build. Learn. Repeat.
            </p>
          </div>
        </div>

        <div className="mt-8 grid rounded-3xl border border-white/10 bg-[#151515]/65 p-2 backdrop-blur-xl sm:grid-cols-2 lg:mt-2 lg:grid-cols-4">
          {[
            ["2+", "Internships"],
            ["MCA", "JECRC University"],
            ["100%", "Passion for Coding"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`px-5 py-4 text-center ${index > 0 ? "sm:border-l sm:border-white/10" : ""}`}
            >
              <p className="text-2xl font-semibold tracking-tight text-[#E7C78A]">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-neutral-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
