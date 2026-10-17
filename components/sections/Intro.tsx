import { Decor } from "@/components/Decor";
import { capabilities } from "@/lib/site";

export function Intro() {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <Decor variant="rings" className="right-0 -top-10 h-48 w-48" />
      <div className="shell section-pad relative">
        <div
          className="grid gap-8 lg:grid-cols-12 lg:gap-16"
          data-reveal="init"
        >
          <div className="lg:col-span-6">
            <p className="eyebrow">Introduction</p>
            <h2 className="mt-6 max-w-[24ch] text-2xl leading-snug font-medium tracking-[-0.02em] text-fg md:text-[1.75rem]">
              From idea to production, we build software that solves real
              problems.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-9">
            <p className="text-base leading-relaxed text-muted md:text-[17px]">
              A3TechLabs works with startups, businesses and organizations to
              design, develop and maintain digital products — from the first
              prototype through to production, iteration and long-term
              support.
            </p>
          </div>
        </div>

        <div className="hairline-grid mt-14 grid-cols-1 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <div
              key={item.label}
              className="p-6 md:p-7"
              data-reveal="init"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-5 text-base font-medium tracking-[-0.01em] text-fg">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
