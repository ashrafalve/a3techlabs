import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";
import { RevealObserver } from "@/components/RevealObserver";

const title =
  "A3TechLabs — Software Solutions That Move Your Business Forward";
const description =
  "A3TechLabs is a software development company building custom software, web platforms, mobile applications, SaaS products, ERP systems and AI solutions for businesses, startups and organizations.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | A3TechLabs",
  },
  description,
  keywords: [
    "A3TechLabs",
    "Software Development Company",
    "Web Development",
    "Mobile App Development",
    "SaaS Development",
    "ERP Software",
    "Custom Software Development",
    "AI Solutions",
    "Next.js Development",
    "React Development",
  ],
  applicationName: "A3TechLabs",
  authors: [{ name: "A3TechLabs" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "A3TechLabs",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0d" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      data-scroll-behavior="smooth"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
