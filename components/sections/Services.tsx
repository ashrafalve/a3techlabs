import { Decor } from "@/components/Decor";
import { serviceIcon } from "@/components/icons";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-line"
    >
      <Decor variant="rings" className="-right-40 -top-40 h-[420px] w-[420px]" />
      <Decor variant="dots" className="-left-16 bottom-10 h-40 w-40" />
      <div className="shell section-pad relative">
        <header
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          data-reveal="init"
        >
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="section-title mt-6">What we build</h2>
          </div>
          <p className="section-lede md:max-w-sm">
            From the first line of code to production systems, we design and
            build software across web, mobile, SaaS, ERP and AI.
          </p>
        </header>

        <div className="hairline-grid mt-12 grid-cols-1 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group relative p-7 transition-colors duration-300 hover:bg-hover md:p-8"
              data-reveal="init"
              data-reveal-style="zoom"
              style={{ transitionDelay: `${(index % 3) * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] tracking-[0.12em] text-muted transition-colors duration-300 group-hover:text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="service-icon-well">
                  {serviceIcon(service.id, { size: 24 })}
                </span>
              </div>

              <h3 className="mt-10 text-lg font-semibold tracking-[-0.035em] text-fg">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
