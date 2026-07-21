import { useEffect, useState } from "react";
import { NAV, RESUME_URL } from "./data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 sm:px-5">
      <nav
        className={`pointer-events-auto mx-auto mt-3 flex h-14 max-w-6xl items-center justify-between rounded-2xl border px-4 transition-all duration-500 sm:px-5 ${
          scrolled
            ? "border-[#D6B37A]/30 bg-[#0B0B0B]/80 shadow-[0_12px_40px_-24px_rgba(214,179,122,0.5)] backdrop-blur-xl"
            : "border-white/10 bg-[#0B0B0B]/55 backdrop-blur-md"
        }`}
      >
        <button
          onClick={() => handleNav("home")}
          className="text-base font-semibold tracking-tight text-[#F8F8F8]"
        >
          Harsh <span className="text-primary">Jain</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV.filter((n) => n.id !== "resume").map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="group relative px-2.5 py-2 text-xs text-neutral-400 transition-colors hover:text-[#E7C78A] xl:px-3.5"
            >
              {item.label}
              <span className="absolute inset-x-2.5 bottom-0 h-px origin-left scale-x-0 bg-[#D6B37A] transition-transform duration-300 group-hover:scale-x-100 xl:inset-x-3.5" />
            </button>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full border border-[#D6B37A]/45 bg-[#D6B37A]/10 px-4 py-2 text-xs font-semibold text-[#E7C78A] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E7C78A] hover:bg-[#D6B37A] hover:text-[#0B0B0B] hover:shadow-[0_10px_28px_-12px_rgba(214,179,122,0.8)]"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-xl p-2 text-[#F8F8F8] lg:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-6xl rounded-2xl border border-[#D6B37A]/20 bg-[#0B0B0B]/90 p-2 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 p-1">
            {NAV.filter((n) => n.id !== "resume").map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="rounded-xl px-3 py-2.5 text-left text-sm text-neutral-400 transition-colors hover:bg-white/[0.04] hover:text-[#E7C78A]"
              >
                {item.label}
              </button>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-xl border border-[#D6B37A]/40 bg-[#D6B37A]/10 px-4 py-2.5 text-center text-sm font-medium text-[#E7C78A]"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
