export const siteMeta = {
  title: "Mateusz Dąbrowski | Backend-leaning web developer",
  description:
    "Portfolio for Mateusz Dąbrowski: practical software work, large-application maintenance, and public projects across Rust, TypeScript, Python, Kotlin, and PHP.",
  siteName: "grobacz.eu",
  navLabel: "grobacz://profile",
};

export const hero = {
  prompt: "$ whoami",
  heading: "Mateusz Dąbrowski",
  subheading: "backend-leaning web developer",
  intro:
    "I work on software that has to stay useful: maintaining and extending large applications, building pragmatic tools, and shipping code people actually depend on.",
  supportingText:
    "Long term b2b contract with ZnanyLekarz Sp. z o.o. I work across multiple technologies and languages — recent focus around PHP, JS, C#, automation in GitHub Actions, and platform solutions like ArgoCD and k8s. Daily use of AI tools for planning, design, debugging, coding, documentation, and testing.",
};

export const primaryLinks = [
  { label: "GitHub", href: "https://github.com/grobacz/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mateusz-d%C4%85browski-a4172878/",
  },
  { label: "Email", href: "mailto:grobacz@gmail.com" },
];

export const highlightCards = [
  {
    label: "current",
    title: "Global reach, local compliance",
    body: "I work with companies operating across borders — tailoring products to country-specific policies, legal rules, and local requirements. I figure out what needs to be done and get it done. No hand-holding required.",
  },
  {
    label: "public code",
    title: "Contractor work stays proprietary. Here's the demo projects instead.",
    body: "I can't show client code, so I built a few demo projects to illustrate the ideas I work with. Some of the heavier lifting is AI-assisted — faster delivery, broader scope visibility.",
  },
];

export const projects = [
  {
    id: "repo_01",
    title: "crm.grobacz.eu",
    href: "https://github.com/grobacz/crm.grobacz.eu",
    summary:
      "A full-stack CRM with a Symfony 6 GraphQL API, Vue 3 frontend, and PostgreSQL. Includes Docker Compose for local development and production deployment.",
    details: "PHP, Vue, GraphQL, Symfony, PostgreSQL, Docker",
  },
  {
    id: "repo_02",
    title: "clinic-demo",
    href: "https://github.com/grobacz/clinic-demo",
    summary:
      "A demonstration project showcasing a medical clinic management workflow with patient scheduling and records handling.",
    details: "TypeScript, Node.js, PostgreSQL",
  },
  {
    id: "repo_03",
    title: "distributed-rabbit",
    href: "https://github.com/grobacz/distributed-rabbit",
    summary:
      "A RabbitMQ federation demo exploring distributed messaging patterns across multiple nodes.",
    details: "Rust, RabbitMQ, Docker",
  },
];

export const strengths = [
  "Maintaining and extending large applications",
  "Backend-leaning product work without frontend posturing",
  "Practical tooling across Rust, TypeScript, Python, Kotlin, and PHP",
  "Local-first apps, sync flows, persistence, and stateful interfaces",
  "Shipping useful software without making the portfolio itself the product",
];

export const about = [
  "I prefer practical systems over portfolio gimmicks. The public trail is consistent: work on large applications professionally, and side projects that solve concrete problems instead of mimicking startup landing pages.",
  "The public repos reflect a range of approaches: a full-stack CRM with Symfony GraphQL and Vue, a TypeScript/Node clinic demo, and a Rust RabbitMQ federation project. The common thread is real behavior, state, and implementation detail over surface polish.",
  "The best fit is product or platform work where reliability, iteration, and substance matter more than dressing everything up as a design exercise.",
];

export const contact = {
  label: "contact",
  body: "Email is the fastest route. LinkedIn covers the CV-level timeline; GitHub shows the public code.",
};
