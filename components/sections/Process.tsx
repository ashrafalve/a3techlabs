import { Decor } from "@/components/Decor";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-line"
    >
      <Decor variant="waves" className="left-1/2 bottom-0 h-28 w-[520px] -translate-x-1/2" />
      <div className="shell section-pad relative">
        <header
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          data-reveal="init"
        >
          <div>
            <p className="eyebrow">Process</p>
            <h2 className="section-title mt-6">
              A clear path from idea to production
            </h2>
          </div>
          <p className="section-lede md:max-w-sm">
            Six stages that take a product from first conversation to launch —
            and keep it improving afterwards.
          </p>
        </header>

        <ol className="relative mt-14 grid grid-cols-1 md:mt-20 md:grid-cols-6">
          <span
            aria-hidden="true"
            className="absolute top-1.5 left-0 hidden h-px bg-line-strong md:right-[calc(16.6667%_-_6px)] md:block"
          />
          {processSteps.map((step, index) => {
            const isLast = index === processSteps.length - 1;
            return (
              <li
                key={step.title}
                className="relative pb-10 pl-9 md:pt-10 md:pb-0 md:pl-0 md:pr-5"
                data-reveal="init"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-3 w-3 rounded-full bg-brand"
                />
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute top-6 bottom-0 left-1.5 w-px bg-line-strong md:hidden"
                  />
                )}
                <p className="font-mono text-[11px] tracking-[0.14em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-base font-medium tracking-[-0.01em] text-fg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
