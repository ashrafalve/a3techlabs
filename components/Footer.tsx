import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

const explore = navLinks.filter((link) =>
  ["#services", "#solutions"].includes(link.href),
);
const company = navLinks.filter((link) =>
  ["#about", "#contact"].includes(link.href),
);
const socials = site.socials.filter((social) => social.href);

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell pt-14 pb-10 md:pt-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <a href="#home" aria-label="A3TechLabs — home">
              <Logo />
            </a>
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-muted">
              {site.footerLine}
            </p>
            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-9 min-w-9 place-items-center rounded-full border border-line px-3 font-mono text-[10px] tracking-[0.14em] text-muted uppercase transition-colors duration-200 hover:border-line-strong hover:text-fg"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 md:col-span-5 md:col-start-8 md:grid-cols-2"
          >
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                Explore
              </p>
              <ul className="mt-4 space-y-3">
                {explore.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-200 hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                Company
              </p>
              <ul className="mt-4 space-y-3">
                {company.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-200 hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © 2026 A3TechLabs. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            {site.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
