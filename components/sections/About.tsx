import { Decor } from "@/components/Decor";
import { site } from "@/lib/site";

const meta = [
  { label: "Location", value: site.location },
  { label: "Focus", value: "Web · Mobile · SaaS · ERP" },
  { label: "Approach", value: "Design → Build → Support" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-line bg-surface"
    >
      <Decor variant="dots" className="right-10 top-10 h-40 w-40" />
      <div className="shell section-pad relative grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4" data-reveal="init" data-reveal-style="left">
          <p className="eyebrow">About</p>
          <h2 className="mt-6 text-2xl font-medium tracking-[-0.02em] text-fg md:text-[1.75rem]">
            About A3TechLabs
          </h2>

          <dl className="mt-9 border-t border-line">
            {meta.map((item) => (
              <div
                key={item.label}
                className="flex items-baseline justify-between gap-4 border-b border-line py-3.5"
              >
                <dt className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                  {item.label}
                </dt>
                <dd className="text-right text-[13px] text-fg/90">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-8" data-reveal="init" data-reveal-style="right">
          <p className="text-xl leading-snug font-medium tracking-[-0.015em] text-fg md:text-[1.75rem] md:leading-[1.45]">
            A3TechLabs is a software development company focused on building
            practical digital products for businesses, startups and
            organizations. From websites and mobile applications to SaaS
            platforms, ERP systems and custom software, we turn ideas and
            business requirements into reliable digital solutions.
          </p>
          <p className="mt-8 max-w-[62ch] text-base leading-relaxed text-muted">
            We work as a focused engineering partner — scoping carefully,
            communicating clearly and shipping software that keeps working
            after launch. Whether you need a new product built from scratch or
            an existing system extended, the same standards apply.
          </p>
        </div>
      </div>
    </section>
  );
}
