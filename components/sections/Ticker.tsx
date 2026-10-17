const items = [
  "Web Platforms",
  "Mobile Apps",
  "SaaS Products",
  "ERP & Management",
  "Custom Software",
  "AI & Automation",
  "Cloud & APIs",
  "Business Systems",
];

function Group() {
  return (
    <>
      {items.map((item) => (
        <span
          key={item}
          className="flex flex-none items-center gap-7 px-7 font-mono text-[11px] tracking-[0.18em] text-muted uppercase"
        >
          {item}
          <span className="h-1 w-1 flex-none rounded-full bg-brand" />
        </span>
      ))}
    </>
  );
}

export function Ticker() {
  return (
    <div
      className="ticker-mask border-y border-line py-5"
      aria-hidden="true"
    >
      <div className="ticker-track">
        <Group />
        <Group />
      </div>
    </div>
  );
}
