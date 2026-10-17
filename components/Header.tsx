"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowRight } from "@/components/icons";
import { navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0 || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-bg/85 backdrop-blur-md"
          : "border-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <a
          href="#home"
          aria-label="A3TechLabs — home"
          className="flex-none"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative py-1 text-sm transition-colors duration-200 ${
                  isActive ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-0.5 left-0 h-px bg-brand transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary hidden sm:inline-flex">
            Start a Project
            <ArrowRight size={16} className="btn-arrow" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="burger grid h-10 w-10 place-items-center gap-[5px] text-fg lg:hidden"
            data-open={open ? "true" : "false"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity,visibility] duration-300 ease-out lg:hidden ${
          open
            ? "max-h-[600px] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className={`shell border-t border-line pt-2 pb-8 ${
            open ? "" : "pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between border-b border-line py-4 text-base transition-colors ${
                active === link.href.slice(1)
                  ? "text-fg"
                  : "text-muted hover:text-fg"
              }`}
            >
              {link.label}
              <ArrowRight size={15} className="text-brand" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-6 w-full"
          >
            Start a Project
            <ArrowRight size={16} className="btn-arrow" />
          </a>
        </nav>
      </div>
    </header>
  );
}
