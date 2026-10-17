import { Decor } from "@/components/Decor";
import { ArrowRight } from "@/components/icons";
import { solutions } from "@/lib/site";

export function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden border-t border-line bg-surface"
    >
      <Decor variant="arc" className="-left-24 -top-24 h-72 w-72" />
      <div className="shell section-pad relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5" data-reveal="init" data-reveal-style="left">
          <p className="eyebrow">Solutions</p>
          <h2 className="section-title mt-6">
            Technology Built Around Your Business
          </h2>
          <p className="section-lede mt-6">
            We don&apos;t force businesses into one-size-fits-all software.
            Every engagement starts with how your business actually works —
            then we shape the technology around it.
          </p>
          <a href="#contact" className="btn btn-ghost mt-8">
            Discuss your project
            <ArrowRight size={16} className="btn-arrow" />
          </a>
        </div>

        <div className="lg:col-span-7">
          <ul className="border-t border-line">
            {solutions.map((solution, index) => (
              <li
                key={solution.title}
                className="group border-b border-line"
                data-reveal="init"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <div className="flex items-start gap-5 py-5 transition-colors duration-300 group-hover:bg-hover md:items-center md:py-6">
                  <span className="mt-1.5 h-2.5 w-2.5 flex-none rounded-full border border-line-strong transition-colors duration-300 group-hover:border-brand group-hover:bg-brand md:mt-0" />
                  <div className="min-w-0 flex-1 md:flex md:items-baseline md:justify-between md:gap-10">
                    <span className="text-base font-medium tracking-[-0.01em] text-fg md:text-lg">
                      {solution.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted md:mt-0 md:max-w-[52%] md:text-right">
                      {solution.detail}
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="mt-1 hidden flex-none -translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:mt-0 md:block"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
