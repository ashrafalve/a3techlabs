import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...props }: IconProps): SVGProps<SVGSVGElement> {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
  };
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function IconBrowser(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <path d="M3 9h18" />
      <path d="M6.5 6.75h.01M9 6.75h.01" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="7" y="2.75" width="10" height="18.5" rx="2" />
      <path d="M10.75 5.5h2.5" />
      <path d="M11 18.25h2" />
    </svg>
  );
}

export function IconLayers(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 3.5 8.5 4.5L12 12.5 3.5 8l8.5-4.5Z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5" />
      <path d="m3.5 16.75 8.5 4.5 8.5-4.5" />
    </svg>
  );
}

export function IconModules(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </svg>
  );
}

export function IconTerminal(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <path d="m7 10 2.5 2L7 14" />
      <path d="M12.5 14.5H17" />
    </svg>
  );
}

export function IconNodes(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="6.5" r="2.25" />
      <circle cx="18" cy="6.5" r="2.25" />
      <circle cx="12" cy="17.5" r="2.25" />
      <path d="M8.25 6.5h7.5" />
      <path d="M7.2 8.4 10.8 15.6" />
      <path d="m16.8 8.4-3.6 7.2" />
    </svg>
  );
}

export function IconSun(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="4.25" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
    </svg>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 13.5A8.5 8.5 0 1 1 10.5 4a7 7 0 0 0 9.5 9.5Z" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.75 6.5 8.25 6 8.25-6" />
    </svg>
  );
}

export function IconPhoneCall(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6L16.5 13l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20.5 11.6a8.4 8.4 0 0 1-12.3 7.4L3.5 20.5l1.6-4.6A8.4 8.4 0 1 1 20.5 11.6Z" />
      <path d="M8.8 8.2c.4-.1.7 0 .9.4l.7 1.3c.1.3.1.5-.1.8l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.2-.2.5-.3.8-.1l1.3.6c.3.2.5.5.4.9-.2 1-1 1.5-2 1.4a9 9 0 0 1-6.1-6.1c-.1-1 .4-1.8 1.4-1.9Z" />
    </svg>
  );
}

export function serviceIcon(id: string, props?: IconProps) {
  const map: Record<string, (p: IconProps) => React.JSX.Element> = {
    web: IconBrowser,
    mobile: IconPhone,
    saas: IconLayers,
    erp: IconModules,
    custom: IconTerminal,
    ai: IconNodes,
  };
  const Icon = map[id] ?? IconTerminal;
  return <Icon {...props} />;
}
