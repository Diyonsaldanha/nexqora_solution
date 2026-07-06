

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#ff7f49",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const WebIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4.5" width="18" height="15" rx="2" />
    <line x1="3" y1="8.5" x2="21" y2="8.5" />
    <circle cx="6.2" cy="6.5" r="0.5" fill="#ff7f49" stroke="none" />
    <circle cx="8.4" cy="6.5" r="0.5" fill="#ff7f49" stroke="none" />
    <path d="M9.5 12.5L7.5 14.5L9.5 16.5" />
    <path d="M14.5 12.5L16.5 14.5L14.5 16.5" />
  </svg>
);

export const MobileIcon = () => (
  <svg {...iconProps}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
    <line x1="10.3" y1="18.3" x2="13.7" y2="18.3" />
  </svg>
);

export const DesktopIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="12.5" rx="1.5" />
    <line x1="8" y1="20" x2="16" y2="20" />
    <line x1="12" y1="16.5" x2="12" y2="20" />
  </svg>
);

export const CloudIcon = () => (
  <svg {...iconProps}>
    <path d="M7.2 18h10.3a3.4 3.4 0 0 0 0-6.8 5 5 0 0 0-9.5-1.6A3.9 3.9 0 0 0 7.2 18Z" />
  </svg>
);

export const ShieldCheckIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3.2l7 2.9v5.1c0 4.4-3 8-7 9-4-1-7-4.6-7-9V6.1l7-2.9Z" />
    <path d="M9 12.2l2 2 4-4.2" />
  </svg>
);

export const GlobeIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="8.5" />
    <line x1="3.5" y1="12" x2="20.5" y2="12" />
    <path d="M12 3.5c2.3 2.4 3.7 5.5 3.7 8.5s-1.4 6.1-3.7 8.5" />
    <path d="M12 3.5c-2.3 2.4-3.7 5.5-3.7 8.5s1.4 6.1 3.7 8.5" />
  </svg>
);

export interface ServiceCapability {
  title: string;
  desc: string;
}

export interface ServiceProcessStep {
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  Icon: React.ComponentType;
  heroDescription: string;
  capabilities: ServiceCapability[];
  process: ServiceProcessStep[];
  stack: string[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDesc: "Custom enterprise websites, portals, and SaaS platforms built on modern frameworks.",
    Icon: WebIcon,
    heroDescription:
      "From marketing sites to complex internal portals, we build web applications that load fast, hold up under real traffic, and stay easy for your team to maintain long after launch.",
    capabilities: [
      { title: "Custom Web Apps", desc: "Platforms built around how your business actually works, not a template stretched to fit." },
      { title: "SaaS Product Builds", desc: "Multi-tenant architecture, billing, auth, and admin tooling designed in from day one." },
      { title: "Performance & SEO", desc: "Core Web Vitals, server-side rendering, and technical SEO handled properly, not bolted on." },
      { title: "API & Integrations", desc: "Clean REST or GraphQL APIs, plus integrations with the tools you already run on." },
    ],
    process: [
      { title: "Discovery & Scope", desc: "We map your workflows and requirements before a single screen gets designed." },
      { title: "Architecture & Design", desc: "Data models and interfaces get planned together, so the build doesn't stall later." },
      { title: "Build & QA", desc: "Iterative development with regular check-ins and real testing, not a reveal at the end." },
      { title: "Launch & Iterate", desc: "We ship, watch how it performs, and keep refining based on real usage." },
    ],
    stack: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Dev",
    shortDesc: "High-performance native and hybrid apps for a seamless experience on iOS & Android.",
    Icon: MobileIcon,
    heroDescription:
      "Native performance where it matters, shared code where it saves you time. We ship apps that feel at home on both iOS and Android without doubling your engineering cost.",
    capabilities: [
      { title: "Native & Cross-Platform", desc: "React Native or fully native builds, chosen based on what your app actually needs." },
      { title: "Offline-First Design", desc: "Apps that stay usable on flaky connections and sync cleanly once you're back online." },
      { title: "App Store Readiness", desc: "Submission, review compliance, and release management handled end to end." },
      { title: "Push & Notifications", desc: "Engagement flows that respect the user instead of spamming them." },
    ],
    process: [
      { title: "Product Discovery", desc: "We define the core flows worth building first, and what can wait." },
      { title: "UX & Prototyping", desc: "Clickable prototypes so the app feels right before a line of native code is written." },
      { title: "Build & Device Testing", desc: "Development across real devices, not just simulators." },
      { title: "Launch & App Store Release", desc: "We manage submission, review, and the first post-launch fixes." },
    ],
    stack: ["React Native", "Swift", "Kotlin", "Firebase", "GraphQL", "Fastlane"],
  },
  {
    slug: "desktop-solutions",
    title: "Desktop Solutions",
    shortDesc: "Robust desktop software for offline capability, heavy computation, and system integration.",
    Icon: DesktopIcon,
    heroDescription:
      "For workloads that need local horsepower, tighter system access, or reliable offline operation, we build desktop software that fits directly into how your team already works.",
    capabilities: [
      { title: "Cross-Platform Desktop Apps", desc: "One codebase running cleanly on Windows, macOS, and Linux." },
      { title: "System-Level Integration", desc: "File system access, hardware I/O, and OS-level features done properly." },
      { title: "Offline & Heavy Compute", desc: "Local processing for data-heavy or latency-sensitive tasks." },
      { title: "Auto-Update & Distribution", desc: "Signed builds with seamless update pipelines, so rollouts don't mean a support ticket." },
    ],
    process: [
      { title: "Requirements & Architecture", desc: "We identify what has to run locally versus in the cloud." },
      { title: "Prototype & UI", desc: "Early builds you can click through on your own machine." },
      { title: "Build & Integration Testing", desc: "Tested across the operating systems your team actually uses." },
      { title: "Packaging & Rollout", desc: "Signed installers and an update pipeline ready from day one." },
    ],
    stack: ["Electron", "Tauri", "C# / .NET", "Rust", "SQLite", "WPF"],
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    shortDesc: "Secure cloud migration, server management, and scalable infrastructure architecture.",
    Icon: CloudIcon,
    heroDescription:
      "We plan, migrate, and manage cloud infrastructure that scales with real usage, not theoretical peak load, and stays inside a budget you actually set.",
    capabilities: [
      { title: "Cloud Migration", desc: "Moving legacy systems to the cloud without the downtime horror stories." },
      { title: "Infrastructure as Code", desc: "Reproducible environments you can version, review, and roll back." },
      { title: "Scalable Architecture", desc: "Auto-scaling, load balancing, and caching set up before you need them." },
      { title: "Monitoring & Cost Control", desc: "Real visibility into uptime, performance, and spend." },
    ],
    process: [
      { title: "Infrastructure Audit", desc: "A clear look at what's running, what it costs, and where the risk is." },
      { title: "Migration Planning", desc: "A cutover plan that protects uptime, not just a checklist." },
      { title: "Build & Provisioning", desc: "Infrastructure defined as code, so it's repeatable and reviewable." },
      { title: "Monitoring & Optimization", desc: "Ongoing tuning of performance and cost once you're live." },
    ],
    stack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Nginx"],
  },
  {
    slug: "iso-consultancy",
    title: "ISO Consultancy",
    shortDesc: "Professional guidance for ISO certification, compliance audits, and process standardization.",
    Icon: ShieldCheckIcon,
    heroDescription:
      "Certification shouldn't mean a year of paperwork bolted onto how your team already operates. We help you build ISO-aligned processes that hold up in an audit and don't slow anyone down.",
    capabilities: [
      { title: "Gap Assessment", desc: "A clear picture of where you stand against ISO 9001 or 27001 before you commit to anything." },
      { title: "Documentation & Controls", desc: "Policies written for your actual environment, not a copy-pasted template." },
      { title: "Internal Audits", desc: "Practice runs that catch issues before the external auditor does." },
      { title: "Certification Support", desc: "Hands-on support through the certification audit itself." },
    ],
    process: [
      { title: "Gap Assessment", desc: "Benchmarking your current processes against the standard." },
      { title: "Documentation & Controls", desc: "Building the policies and records auditors expect to see." },
      { title: "Internal Audit", desc: "A dry run that surfaces gaps while there's still time to fix them." },
      { title: "Certification Support", desc: "On-site or remote support through the actual audit." },
    ],
    stack: ["ISO 9001", "ISO 27001", "Risk Registers", "Statement of Applicability", "Internal Audit Programs"],
  },
  {
    slug: "domain-hosting",
    title: "Domain & Hosting",
    shortDesc: "Complete digital identity management, DNS services, SSL security, and premium hosting.",
    Icon: GlobeIcon,
    heroDescription:
      "Your domain, DNS, and hosting are infrastructure too. We set them up correctly the first time so they're one less thing to worry about.",
    capabilities: [
      { title: "Domain Management", desc: "Registration, renewals, and DNS records configured correctly and documented." },
      { title: "SSL & Security", desc: "Certificates, HTTPS enforcement, and hardened server configuration." },
      { title: "Managed Hosting", desc: "Server setup, monitoring, and maintenance sized for your actual traffic." },
      { title: "Email & DNS Records", desc: "SPF, DKIM, and DMARC configured so your email actually lands in the inbox." },
    ],
    process: [
      { title: "Requirements Review", desc: "Understanding your traffic, email, and uptime needs." },
      { title: "Domain & DNS Setup", desc: "Records configured correctly the first time, then documented." },
      { title: "Hosting Provisioning", desc: "Servers sized for your real traffic, not guesswork." },
      { title: "Ongoing Monitoring", desc: "Uptime, renewals, and certificates tracked so nothing quietly expires." },
    ],
    stack: ["Cloudflare", "Nginx", "Let's Encrypt", "cPanel", "Route 53", "PM2"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}