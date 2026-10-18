export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const site = {
  name: "A3TechLabs",
  tagline: "Software Solutions That Move Your Business Forward",
  footerLine: "Software solutions for ambitious businesses.",
  location: "Dhaka, Bangladesh",
  contact: {
    email: "a3techlabs@gmail.com",
    phone: "01560001883",
    whatsapp: "https://wa.me/8801560001883",
    formEndpoint: "",
  },
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61595258711394" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "WhatsApp", href: "https://wa.me/8801560001883" },
  ],
};

export const capabilities = [
  {
    label: "Web & Mobile",
    detail: "Responsive websites and native-quality applications.",
  },
  {
    label: "SaaS & Platforms",
    detail: "Multi-tenant products designed to scale.",
  },
  {
    label: "ERP & Management",
    detail: "Systems that run day-to-day operations.",
  },
  {
    label: "Custom Software",
    detail: "Tools shaped around your workflow.",
  },
] as const;

export const services = [
  {
    id: "web",
    title: "Web Development",
    description:
      "Custom websites, web applications, dashboards and scalable platforms.",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "Android and iOS applications with modern, reliable user experiences.",
  },
  {
    id: "saas",
    title: "SaaS Development",
    description:
      "Scalable SaaS products, from MVP to production-ready platforms.",
  },
  {
    id: "erp",
    title: "ERP & Management Systems",
    description:
      "Custom ERP, CRM, inventory, HR, accounting and business management software.",
  },
  {
    id: "custom",
    title: "Custom Software",
    description:
      "Software solutions designed around specific business workflows and requirements.",
  },
  {
    id: "ai",
    title: "AI & Automation",
    description:
      "AI-powered applications, intelligent automation, integrations and business workflows.",
  },
] as const;

export const solutions = [
  { title: "Business Management", detail: "Operations, admin and reporting in one place." },
  { title: "E-commerce", detail: "Storefronts, orders, payments and fulfillment." },
  { title: "Logistics & Transportation", detail: "Fleet, dispatch, routing and tracking." },
  { title: "Healthcare", detail: "Clinics, appointments, records and patient flows." },
  { title: "Education", detail: "Learning platforms, courses and student management." },
  { title: "FinTech", detail: "Payments, ledgers, wallets and financial tooling." },
  { title: "Internal Business Tools", detail: "Dashboards and workflows for your teams." },
  { title: "Customer Platforms", detail: "Portals and self-service experiences." },
  { title: "Automation & AI", detail: "Intelligent workflows that remove manual work." },
] as const;

export const techGroups = [
  { label: "Frontend", items: ["Next.js", "React", "TypeScript", "JavaScript"] },
  { label: "Mobile", items: ["React Native", "Flutter"] },
  { label: "Backend", items: ["Node.js", "NestJS", "Laravel", "Django", "FastAPI", "Python"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Firebase", "Supabase"] },
  { label: "Platform", items: ["Docker", "REST APIs"] },
  { label: "AI", items: ["AI / LLM"] },
] as const;

export const processSteps = [
  {
    title: "Discover",
    description: "Understand the business, users and requirements.",
  },
  {
    title: "Plan",
    description: "Define architecture, features and the development roadmap.",
  },
  {
    title: "Design",
    description: "Create a clear, usable and scalable product experience.",
  },
  {
    title: "Develop",
    description: "Build the product with modern technologies and engineering practices.",
  },
  {
    title: "Test & Launch",
    description: "Test, optimize and deploy the product.",
  },
  {
    title: "Improve",
    description: "Continue improving and supporting the product after launch.",
  },
] as const;

export const projects = [
  {
    monogram: "TD",
    title: "Truck Dorkar",
    category: "Logistics & Transportation Platform",
    description:
      "A platform for managing vehicles, routes and shipments with live operational oversight.",
    tags: ["Web Platform", "Operations"],
  },
  {
    monogram: "BP",
    title: "Bangla Park",
    category: "E-commerce & Business Management Platform",
    description:
      "An integrated commerce system combining storefront, inventory and business management.",
    tags: ["E-commerce", "Management"],
  },
  {
    monogram: "IF",
    title: "InsureFlow AI",
    category: "AI-powered Insurance Solution",
    description:
      "An intelligent insurance workflow that automates assessment, document handling and decisions.",
    tags: ["AI", "Insurance"],
  },
  {
    monogram: "TK",
    title: "Ticket Dorkar",
    category: "Ticketing / Service Platform",
    description:
      "A ticketing and service platform for issuing, tracking and resolving requests at scale.",
    tags: ["Ticketing", "Service"],
  },
] as const;

export const whyPoints = [
  {
    title: "Business-focused development",
    description:
      "We start from your goals and workflows, not from technology for its own sake.",
  },
  {
    title: "Modern and scalable technology",
    description:
      "Proven, current stacks that stay maintainable as the product grows.",
  },
  {
    title: "Clean user experiences",
    description:
      "Clear, usable interfaces that make complex software feel simple.",
  },
  {
    title: "Custom-built solutions",
    description:
      "Built around your process instead of forcing you into a template.",
  },
  {
    title: "Transparent communication",
    description:
      "Regular updates, clear scope and direct access to the team building your product.",
  },
  {
    title: "Long-term technical support",
    description:
      "We stay involved after launch for fixes, improvements and new growth.",
  },
] as const;

export const projectTypes = [
  "Website",
  "Mobile App",
  "SaaS",
  "ERP / Management System",
  "Custom Software",
  "AI / Automation",
  "Other",
] as const;
