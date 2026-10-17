import { ContactForm } from "@/components/ContactForm";
import { Decor } from "@/components/Decor";
import {
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsApp,
} from "@/components/icons";
import { site } from "@/lib/site";

const details = [
  {
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    external: false,
    Icon: IconMail,
  },
  {
    label: "Phone",
    value: site.contact.phone,
    href: `tel:${site.contact.phone}`,
    external: false,
    Icon: IconPhone,
  },
  {
    label: "WhatsApp",
    value: site.contact.phone,
    href: site.contact.whatsapp,
    external: true,
    Icon: IconWhatsApp,
  },
  {
    label: "Location",
    value: site.location,
    href: undefined,
    external: false,
    Icon: IconPin,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line"
    >
      <Decor variant="rings" className="-left-40 bottom-0 h-[360px] w-[360px]" />
      <div className="shell section-pad relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5" data-reveal="init" data-reveal-style="left">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mt-6">
            Tell us what you&apos;re building
          </h2>
          <p className="section-lede mt-6">
            Share a few details about your project and we&apos;ll come back to
            you with next steps, scope and a clear way forward.
          </p>

          <dl className="mt-10 border-t border-line">
            {details.map(({ label, value, href, external, Icon }) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 border-b border-line py-4"
              >
                <dt className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                  <Icon size={14} className="text-brand" />
                  {label}
                </dt>
                <dd className="min-w-0 truncate text-[13px] text-fg/90">
                  {href ? (
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="transition-colors duration-200 hover:text-brand"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7" data-reveal="init" data-reveal-style="right">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
