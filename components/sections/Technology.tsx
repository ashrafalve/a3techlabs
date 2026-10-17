import { Decor } from "@/components/Decor";
import { techGroups } from "@/lib/site";

export function Technology() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden border-t border-line"
    >
      <Decor variant="arc" className="right-0 top-12 h-56 w-56" />
      <div className="shell section-pad relative">
        <header
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          data-reveal="init"
        >
          <div>
            <p className="eyebrow">Technology</p>
            <h2 className="section-title mt-6">
              A modern, proven technology stack
            </h2>
          </div>
          <p className="section-lede md:max-w-sm">
            We choose technologies for longevity, performance and
            maintainability — not novelty. The right tool for the product,
            every time.
          </p>
        </header>

        <div className="mt-12 border-t border-line md:mt-16" data-reveal="init">
          {techGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-3 border-b border-line py-5 md:grid-cols-12 md:items-baseline md:gap-8 md:py-6"
            >
              <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase md:col-span-2">
                {group.label}
              </p>
              <div className="flex flex-wrap items-baseline gap-x-7 gap-y-2.5 md:col-span-10">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-[15px] tracking-[-0.01em] text-fg/85 md:text-base"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
