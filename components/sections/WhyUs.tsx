import { Decor } from "@/components/Decor";
import { IconCheck } from "@/components/icons";
import { whyPoints } from "@/lib/site";

export function WhyUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden border-t border-line"
    >
      <Decor variant="blob" className="-right-24 bottom-0 h-80 w-80" />
      <div className="shell section-pad relative">
        <header
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          data-reveal="init"
        >
          <div>
            <p className="eyebrow">Why A3TechLabs</p>
            <h2 className="section-title mt-6">
              Why businesses choose A3TechLabs
            </h2>
          </div>
          <p className="section-lede md:max-w-sm">
            We keep the work straightforward: clear communication, sound
            engineering and software that fits the way your business runs.
          </p>
        </header>

        <div className="hairline-grid mt-12 grid-cols-1 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {whyPoints.map((point, index) => (
            <div
              key={point.title}
              className="p-7 md:p-8"
              data-reveal="init"
              data-reveal-style="zoom"
              style={{ transitionDelay: `${(index % 3) * 80}ms` }}
            >
              <span className="text-brand">
                <IconCheck size={18} />
              </span>
              <h3 className="mt-6 text-base font-medium tracking-[-0.01em] text-fg">
                {point.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
