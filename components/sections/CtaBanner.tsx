import { ArrowRight } from "@/components/icons";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        fill="none"
        className="anim-spin-rev pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] text-white/15"
      >
        <circle cx="200" cy="200" r="199" stroke="currentColor" />
        <circle cx="200" cy="200" r="140" stroke="currentColor" />
        <circle cx="200" cy="200" r="81" stroke="currentColor" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 300 300"
        fill="none"
        className="anim-drift pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 text-white/10"
      >
        <path
          d="M150 20c60 0 130 40 130 110s-70 150-130 150S20 200 20 130 90 20 150 20Z"
          fill="currentColor"
        />
      </svg>
      <div className="shell section-pad relative grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
        <div className="lg:col-span-7" data-reveal="init" data-reveal-style="left">
          <p className="font-mono text-[11px] tracking-[0.18em] text-on-brand/75 uppercase">
            Next step
          </p>
          <h2 className="mt-6 text-[2rem] leading-[1.05] font-semibold tracking-[-0.03em] text-on-brand md:text-[2.75rem]">
            Have a project in mind?
          </h2>
          <p className="mt-5 text-base text-on-brand/80 md:text-lg">
            Let&apos;s turn your idea into a working product.
          </p>
        </div>

        <div
          className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end"
          data-reveal="init"
          data-reveal-style="right"
        >
          <a href="#contact" className="btn btn-invert">
            Start a Project
            <ArrowRight size={16} className="btn-arrow" />
          </a>
          <a href="#contact" className="btn btn-invert-ghost">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
