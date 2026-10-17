import type { CSSProperties } from "react";
import { ArrowRight, IconPin } from "@/components/icons";

const panelRows = [
  { label: "scope", value: "web · mobile · saas" },
  { label: "systems", value: "erp · crm · operations" },
  { label: "intelligence", value: "ai · automation" },
  { label: "delivery", value: "idea → production" },
];

const bars = [40, 58, 50, 72, 64, 88, 80, 104, 96, 124];

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute -top-44 -right-44 h-[760px] w-[760px] text-line"
          viewBox="0 0 760 760"
          fill="none"
        >
          <circle cx="380" cy="380" r="379" stroke="currentColor" />
          <circle cx="380" cy="380" r="296" stroke="currentColor" />
          <circle cx="380" cy="380" r="213" stroke="currentColor" />
          <circle cx="380" cy="380" r="130" stroke="currentColor" />
          <g className="shape-spin">
            <path
              d="M380 1a379 379 0 0 1 379 379"
              stroke="var(--brand)"
              strokeWidth="3"
              fill="none"
            />
          </g>
        </svg>
      </div>

      <div className="shell relative grid grid-cols-1 items-center gap-16 pt-32 pb-20 md:pt-40 md:pb-28 lg:grid-cols-12 lg:gap-10 lg:pt-44 lg:pb-32">
        <div className="lg:col-span-7">
          <p className="eyebrow rise" style={delay(0)}>
            Software Development &amp; Digital Solutions
          </p>

          <h1
            className="rise mt-7 text-[2.125rem] leading-[1.08] font-semibold tracking-[-0.035em] text-fg sm:text-5xl lg:text-[3.4rem]"
            style={delay(90)}
          >
            <span className="block">Building Digital Products</span>
            <span className="block">
              That Drive Real Business<span className="text-brand">.</span>
            </span>
          </h1>

          <p
            className="rise mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            style={delay(180)}
          >
            A3TechLabs builds custom software, web platforms, mobile
            applications, SaaS products, ERP systems and business management
            solutions tailored to your needs.
          </p>

          <div
            className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={delay(270)}
          >
            <a href="#contact" className="btn btn-primary">
              Start a Project
              <ArrowRight size={16} className="btn-arrow" />
            </a>
            <a href="#services" className="btn btn-ghost">
              Explore Our Services
            </a>
          </div>

          <p
            className="rise mt-12 flex items-center gap-2.5 border-t border-line pt-6 font-mono text-[11px] tracking-[0.16em] text-muted uppercase"
            style={delay(360)}
          >
            <IconPin size={13} className="text-brand" />
            Dhaka, Bangladesh
          </p>
        </div>

        <div className="rise lg:col-span-5" style={delay(200)}>
          <div
            className="relative mx-auto max-w-[480px] lg:max-w-none"
            aria-hidden="true"
          >

            <span className="shape-float absolute -top-6 -right-4 z-10 h-4 w-4 rounded-full bg-brand" />
            <span
              className="shape-float absolute -bottom-5 -left-6 z-10 h-3 w-3 rounded-full border border-line-strong"
              style={{ animationDelay: "1.6s" }}
            />

            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[26px] border border-line" />

            <div className="relative overflow-hidden rounded-[26px] border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                <span>delivery — overview</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              </div>

              <div className="px-4 pt-6 pb-5">
                <svg
                  viewBox="0 0 400 150"
                  className="h-auto w-full text-fg"
                  fill="none"
                >
                  <path d="M0 149.5H400" stroke="var(--line)" />
                  {bars.map((height, index) => {
                    const highlight = index >= bars.length - 3;
                    return (
                      <rect
                        key={index}
                        className="bar"
                        style={delay(160 + index * 70)}
                        x={6 + index * 39}
                        y={150 - height}
                        width="24"
                        height={height}
                        rx="4"
                        fill={highlight ? "var(--brand)" : "currentColor"}
                        opacity={highlight ? 1 : 0.16}
                      />
                    );
                  })}
                </svg>
              </div>

              <div className="grid grid-cols-1 gap-x-6 gap-y-4 px-4 py-5 sm:grid-cols-2">
                {panelRows.map((row) => (
                  <div key={row.label}>
                    <p className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                      {row.label}
                    </p>
                    <p className="mt-1.5 text-[13px] text-fg/90">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-3 flex items-center gap-2.5 rounded-full border border-line bg-bg px-3.5 py-2.5 sm:-left-8">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                custom software
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
