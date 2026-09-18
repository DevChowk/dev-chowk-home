/**
 * TWO KINDS OF CONTENT LIVE HERE — read this before editing.
 *
 * 1. EDITORIAL — situations, capabilities, engagement, faqs, testimonials,
 *    products, trackRecord. These now live in Sanity and the site reads them
 *    from there. The copies below are the SEED SOURCE ONLY
 *    (`scripts/seed.mts`). Editing them here changes nothing on the site —
 *    edit in /studio instead.
 *
 * 2. TAXONOMY — skillGroups, stack, aiOffers, aiTags. These stay in code on
 *    purpose: they describe the codebase's capabilities and change with it,
 *    not with marketing. The site reads these directly.
 */

// ---------------------------------------------------------------------------
// 01 — When to call us
// ---------------------------------------------------------------------------

export type Situation = {
  n: string
  title: string
  body: string
}

export const situations: Situation[] = [
  {
    n: '01',
    title: 'Launching something new',
    body: 'You have a validated idea, funding or a mandate — and no engineering organisation yet. We take it from architecture to a product in customers’ hands, making the decisions that are cheap now and expensive later.',
  },
  {
    n: '02',
    title: 'A system that’s straining',
    body: 'Growth, load or a departed team has exposed the limits of what you have. We stabilise it, find the real constraint and get delivery moving again — without a rewrite you can’t afford.',
  },
  {
    n: '03',
    title: 'A team that needs senior capacity',
    body: 'Your engineers are stretched, or you need a capability you don’t have in-house: AI, cloud, an entire domain. We plug in as an accountable unit, not a pair of hands.',
  },
]

// ---------------------------------------------------------------------------
// 02 — What we do
// ---------------------------------------------------------------------------

export type Capability = {
  n: string
  title: string
  body: string
  tags: string[]
}

export const capabilities: Capability[] = [
  {
    n: '01',
    title: 'Technology consulting & architecture',
    body: 'Independent assessment of what you have, what it will cost to get where you’re going, and what not to build. Delivered as a written plan you can act on with or without us.',
    tags: ['ARCHITECTURE REVIEW', 'TECHNICAL DUE DILIGENCE', 'ROADMAP', 'VENDOR SELECTION'],
  },
  {
    n: '02',
    title: 'Product engineering',
    body: 'Web and mobile products delivered end to end, from data model to release. We write the code, own the deployments and remain accountable after launch.',
    tags: ['TYPESCRIPT', 'NEXT.JS', 'REACT NATIVE', 'NODE', 'POSTGRES'],
  },
  {
    n: '03',
    title: 'Modernisation & rescue',
    body: 'Taking over an existing codebase is a discipline of its own. We map it, stabilise it and resume delivery — a migration path, not a rewrite.',
    tags: ['CODE AUDIT', 'REFACTORING', 'TEST COVERAGE', 'MIGRATION'],
  },
  {
    n: '04',
    title: 'Scalability & performance',
    body: 'Data modelling, caching, queues, observability and cost — the engineering that decides whether today’s system survives ten times the load.',
    tags: ['CAPACITY', 'CACHING', 'QUEUES', 'OBSERVABILITY', 'COST'],
  },
  {
    n: '05',
    title: 'Dedicated feature & domain teams',
    body: 'Give us a feature or an entire domain — billing, search, notifications, administration — and we own it end to end: design, build, test, rollout and support.',
    tags: ['END-TO-END', 'BILLING', 'SEARCH', 'RBAC', 'ADMIN'],
  },
  {
    n: '06',
    title: 'AI engineering',
    body: 'Retrieval-augmented assistants, LLM features, WhatsApp and web agents, and workflow automation — grounded in your data, scoped by your permissions, and evaluated, monitored and maintained like any other production system.',
    tags: ['RAG', 'LLM INTEGRATION', 'ASSISTANTS', 'AGENTS', 'EVALS', 'VECTOR SEARCH'],
  },
  {
    n: '07',
    title: 'Cloud, DevOps & infrastructure',
    body: 'Environments, pipelines, releases, rollbacks and monitoring. The difference between working on a laptop and working in production.',
    tags: ['AWS', 'DOCKER', 'KUBERNETES', 'TERRAFORM', 'CI/CD'],
  },
]

// ---------------------------------------------------------------------------
// 03 — How we work
// ---------------------------------------------------------------------------

export type EngagementStep = {
  n: string
  title: string
  /** Duration, in the mono eyebrow style. No prices — rates are discussed on the call. */
  meta: string
  body: string
}

export const engagement = {
  steps: [
    {
      n: '01',
      title: 'Call',
      meta: '30 minutes · free',
      body: 'We establish fit and scope. If we’re not the right firm, we say so and point you to someone who is.',
    },
    {
      n: '02',
      title: 'Trial sprint',
      meta: 'Two weeks · no charge',
      body: 'Two weeks of real work from your backlog, delivered to production standard, to jump-start the project. You keep everything we produce, whether or not we continue.',
    },
    {
      n: '03',
      title: 'Discovery',
      meta: '1–2 weeks',
      body: 'Architecture, delivery plan, estimate and risks — written down and yours to use with any team.',
    },
    {
      n: '04',
      title: 'Build',
      meta: 'Scoped or ongoing',
      body: 'A defined scope where the work is clear; an ongoing engagement where it isn’t. Working software every sprint and a written status every week.',
    },
    {
      n: '05',
      title: 'Run',
      meta: 'Ongoing · optional',
      body: 'Ongoing ownership if you want it — monitoring, maintenance, improvements, on-call. Or a documented handover to your team.',
    },
  ] satisfies EngagementStep[],
}

// ---------------------------------------------------------------------------
// What we build with — the breadth strip under the hero.
// A statement of what we offer and work with, grouped so it scans. The
// shipped-vs-adjacent distinction lives in the /services stack grid.
// ---------------------------------------------------------------------------

export type SkillGroup = { area: string; items: string[] }

export const skillGroups: SkillGroup[] = [
  {
    area: 'AI & automation',
    items: [
      'LangChain',
      'LangGraph',
      'LlamaIndex',
      'RAG',
      'Vector search',
      'OpenAI',
      'Gemini',
      'Claude',
      'Open models',
      'AI chatbots',
      'WhatsApp assistants',
      'AI agents',
      'Workflow automation',
      'n8n / Zapier / Make',
      'Prompt engineering',
      'Evals & guardrails',
      'MCP / tool use',
      'Document extraction',
    ],
  },
  {
    area: 'Product engineering',
    items: [
      'TypeScript',
      'React',
      'Next.js',
      'React Native',
      'Node.js',
      'NestJS',
      'Express',
      'Python',
      'FastAPI',
      'GraphQL',
      'REST APIs',
      'WebSockets',
      'Microservices',
      'Event-driven systems',
      'Kafka / queues',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Redis',
      'DynamoDB',
    ],
  },
  {
    area: 'Cloud & DevOps',
    items: [
      'AWS',
      'GCP / Azure',
      'Docker',
      'Kubernetes',
      'Terraform',
      'GitHub Actions',
      'CI/CD',
      'Zero-downtime deploys',
      'Serverless',
      'Vercel / Cloudflare',
      'Monitoring & observability',
      'Cost optimisation',
    ],
  },
  {
    area: 'Growth & SEO',
    items: [
      'Technical SEO',
      'Core Web Vitals',
      'Structured data',
      'Analytics (GA4, PostHog)',
      'A/B testing',
      'Conversion optimisation',
      'Landing pages',
      'Headless CMS (Sanity)',
      'Email & marketing automation',
    ],
  },
  {
    area: 'Product, design & quality',
    items: [
      'UI/UX design',
      'Design systems',
      'Accessibility (WCAG 2.2)',
      'Figma & prototyping',
      'Jest',
      'Playwright',
      'QA & UAT',
      'Performance engineering',
      'Security (OAuth 2.0, RBAC, OWASP)',
    ],
  },
  {
    area: 'Integrations & business systems',
    items: [
      'Payments (Stripe, Razorpay)',
      'WhatsApp Business API',
      'SMS & voice (Twilio)',
      'SSO & authentication',
      'Multi-tenancy',
      'Admin panels & dashboards',
      'CRM / ERP integration',
      'Third-party APIs',
      'Data pipelines & reporting',
    ],
  },
]

export type TrackRecordItem = {
  n: string
  title: string
  body: string
}

export const trackRecord: TrackRecordItem[] = [
  {
    n: '01',
    title: 'EdTech at national scale',
    body: 'Node.js microservices behind an assisted-learning platform serving 700,000+ active learners — service boundaries, contract design, indexed data models and API-layer caching that cut response times 25–30% on the busiest endpoints.',
  },
  {
    n: '02',
    title: 'Production AI for B2B sales',
    body: 'LLM integration inside a sales-intelligence platform: automated prospect research and personalised outreach for hundreds of prospects a week, with prompt templates, token controls, sanitisation and graceful fallbacks so the AI held up in production.',
  },
  {
    n: '03',
    title: 'Global regulatory coverage',
    body: 'A compliance product spanning 70+ countries, with a modular architecture that kept scaling as the regulatory dataset grew into new markets.',
  },
  {
    n: '04',
    title: 'Delivery infrastructure',
    body: 'GitHub Actions CI/CD hardened across dev, staging and production — deploy frequency up 2–3×, zero-downtime releases, and an ingestion pipeline that took content onboarding from hours to minutes.',
  },
  {
    n: '05',
    title: 'Multi-tenant SaaS, real-time and access control',
    body: 'Multi-tenant analytics dashboards, real-time chat, OAuth 2.0, role-based access control and versioned migrations — the plumbing every serious product needs and few teams get right first time.',
  },
]

// ---------------------------------------------------------------------------
// AI engineering — what we actually build
// ---------------------------------------------------------------------------

export type AiOffer = { n: string; title: string; body: string }

export const aiOffers: AiOffer[] = [
  {
    n: '01',
    title: 'Knowledge assistants (RAG)',
    body: 'Answers grounded in your documents, tickets and data — retrieval, chunking, vector search and citations, scoped by the user’s permissions so the model never sees what the person can’t.',
  },
  {
    n: '02',
    title: 'LLM features inside your product',
    body: 'Summarisation, generation, classification and extraction built into existing workflows as first-class features, with the prompt, cost and latency engineering that keeps them reliable at volume.',
  },
  {
    n: '03',
    title: 'Conversational assistants on WhatsApp and web',
    body: 'Assistants that hold real conversations with your customers — on WhatsApp, in-app or on the web — backed by your systems rather than improvising. KundaliPro runs on exactly this.',
  },
  {
    n: '04',
    title: 'Agents and workflow automation',
    body: 'Multi-step automations that research, draft, decide and act across your tools — sales outreach, support triage, back-office processing — with human approval where it matters.',
  },
  {
    n: '05',
    title: 'Evaluation, guardrails and observability',
    body: 'Test sets, automated evals, input sanitisation, token and cost controls, fallbacks and monitoring. The difference between an AI demo and an AI feature you can keep in production.',
  },
  {
    n: '06',
    title: 'Model and vendor strategy',
    body: 'OpenAI, Gemini, Claude, or open models — chosen per use case on quality, cost, latency and data residency, with a migration path so you’re never locked to one vendor.',
  },
]

export const aiTags = [
  'RAG',
  'VECTOR SEARCH',
  'LLM INTEGRATION',
  'WHATSAPP ASSISTANTS',
  'AGENTS',
  'EVALS',
  'GUARDRAILS',
  'OPENAI',
  'GEMINI',
  'CLAUDE',
]

// ---------------------------------------------------------------------------
// Technology & skills
// `core` = shipped in production. `extended` = adjacent, in-demand technology
// we build with. Prune anything you wouldn't stand behind on a call.
// ---------------------------------------------------------------------------

export type StackRow = { area: string; core: string[]; extended: string[] }

export const stack: StackRow[] = [
  {
    area: 'Languages',
    core: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
    extended: ['Go'],
  },
  {
    area: 'Frontend & mobile',
    core: ['React', 'Next.js', 'React Native', 'Redux / Zustand / React Query'],
    extended: ['Tailwind', 'Design systems', 'Accessibility (WCAG 2.2)'],
  },
  {
    area: 'Backend & APIs',
    core: [
      'Node.js',
      'NestJS',
      'Express',
      'AdonisJS',
      'REST',
      'GraphQL',
      'WebSockets',
      'Microservices',
    ],
    extended: ['Event-driven systems', 'Kafka', 'FastAPI'],
  },
  {
    area: 'Data',
    core: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB'],
    extended: ['pgvector', 'OpenSearch / Elasticsearch', 'Data pipelines'],
  },
  {
    area: 'AI engineering',
    core: [
      'OpenAI / Gemini / Claude APIs',
      'Prompt engineering & token controls',
      'WhatsApp assistants',
    ],
    extended: [
      'RAG',
      'pgvector / Pinecone',
      'LangChain',
      'LangGraph',
      'LlamaIndex',
      'AI chatbots',
      'Agents & tool use (MCP)',
      'Workflow automation (n8n, Zapier, Make)',
      'Document extraction',
      'Vercel AI SDK',
      'Evals & guardrails',
    ],
  },
  {
    area: 'Cloud & platform',
    core: ['AWS (EC2, S3, Lambda, DynamoDB)', 'Docker', 'GitHub Actions', 'Zero-downtime CI/CD'],
    extended: ['Kubernetes', 'Terraform', 'Serverless', 'Vercel / Cloudflare', 'Cost optimisation'],
  },
  {
    area: 'Security & access',
    core: ['OAuth 2.0', 'JWT / sessions', 'RBAC'],
    extended: ['API security', 'Secrets management', 'OWASP practices'],
  },
  {
    area: 'Quality & delivery',
    core: ['Jest', 'Playwright', 'Postman contract testing'],
    extended: [
      'OpenTelemetry / Grafana',
      'Performance engineering',
      'AI-assisted delivery (Claude Code, Cursor)',
    ],
  },
  {
    area: 'Growth & SEO',
    core: ['Performance optimisation', 'Headless CMS (Sanity)'],
    extended: [
      'Technical SEO',
      'Core Web Vitals',
      'Structured data',
      'Analytics (GA4, PostHog)',
      'A/B testing',
      'Conversion optimisation',
      'Email & marketing automation',
    ],
  },
  {
    area: 'Integrations & business systems',
    core: [
      'Third-party API integration',
      'Real-time chat',
      'Multi-tenancy',
      'Admin & analytics dashboards',
    ],
    extended: [
      'Payments (Stripe, Razorpay)',
      'WhatsApp Business API',
      'SMS & voice (Twilio)',
      'SSO & authentication',
      'CRM / ERP integration',
      'Data pipelines & reporting',
    ],
  },
]

// ---------------------------------------------------------------------------
// 06 — FAQ
// ---------------------------------------------------------------------------

export type Faq = { q: string; a: string }

export const faqs: Faq[] = [
  {
    q: 'Who owns the code?',
    a: 'You do. Repositories, cloud accounts, credentials and IP are yours from day one.',
  },
  {
    q: 'What is the trial sprint?',
    a: 'Two weeks of real work on your backlog, at no charge, to jump-start the project — delivered to production standard. It’s how we both find out whether this works before either of us commits.',
  },
  {
    q: 'How will we communicate?',
    a: 'A shared channel, a written status every week and decisions recorded in writing. No meetings that could have been a document.',
  },
  {
    q: 'Where is the team?',
    a: 'Fully remote, working with clients across the globe.',
  },
  {
    q: 'What’s the minimum engagement?',
    a: 'Discovery takes one to two weeks. After that, engagements are sized to the work — from a single feature to long-term ownership of a product.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes, before any detailed conversation.',
  },
  {
    q: 'Can you work alongside our engineers?',
    a: 'Yes — as an embedded unit with its own accountability, not as contractors waiting for tickets.',
  },
]

// ---------------------------------------------------------------------------
// 05 — Clients
// ---------------------------------------------------------------------------

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  company: string
  /** Where the quote came from, so it can be checked. */
  source: string
}

/**
 * Real quotes only.
 *
 * These entries are written as visible [BRACKETED] placeholders on purpose:
 * the section renders so the design can be approved, but nothing here can be
 * mistaken for a real client. Replace each field with an actual quote you have
 * permission to publish — or empty this array and the section removes itself.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'placeholder-1',
    quote: '[Paste what this client actually said about working with you.]',
    name: '[CLIENT NAME]',
    role: '[ROLE]',
    company: '[COMPANY]',
    source: '[WHERE THIS CAME FROM]',
  },
  {
    id: 'placeholder-2',
    quote: '[A second quote — ideally one that names a specific problem you solved.]',
    name: '[CLIENT NAME]',
    role: '[ROLE]',
    company: '[COMPANY]',
    source: '[WHERE THIS CAME FROM]',
  },
  {
    id: 'placeholder-3',
    quote: '[A third — shorter is fine. One honest sentence beats a paragraph.]',
    name: '[CLIENT NAME]',
    role: '[ROLE]',
    company: '[COMPANY]',
    source: '[WHERE THIS CAME FROM]',
  },
]

// ---------------------------------------------------------------------------
// 04 — Work
// ---------------------------------------------------------------------------

export type Product = {
  id: string
  name: string
  url: string
  href: string
  tagline: string
  body: string
  detail?: string
  /** Our own product, or built for a client (published with permission). */
  kind: 'own' | 'client'
  client?: { name: string; role?: string }
  /** Engagement facts: what we did, platform, status. */
  scope?: { label: string; value: string }[]
  tags: string[]
}

/**
 * Products in production — our own, and client work published with permission.
 *
 * Copy is drawn from each product's own live site — KundaliPro's feature list
 * and Bumpp's tagline are quoted from the products themselves. Where a site
 * does not say enough to describe it fairly, the gap stays bracketed.
 */
export const products: Product[] = [
  {
    id: 'kundalipro',
    name: 'KundaliPro',
    url: 'kundalipro.in',
    href: 'https://kundalipro.in',
    tagline: 'AI Vedic astrology, delivered on WhatsApp',
    body: 'Birth-chart analysis as a conversation. Users send their birth details once, then ask questions in plain language and receive answers computed against their own rasi and navamsha charts — career and wealth timing, compatibility, muhurat, weekly forecasts. Hindi and English, nothing to install.',
    detail:
      'A conversational model grounded in real chart computation, delivered inside WhatsApp — the production version of the AI work above.',
    kind: 'own',
    scope: [
      { label: 'Role', value: 'Designed, built and operated by Dev Chowk' },
      { label: 'Platform', value: 'WhatsApp' },
      { label: 'Status', value: 'Live' },
    ],
    tags: ['LLM', 'CONVERSATIONAL AI', 'WHATSAPP API', 'CHART ENGINE', 'HINDI + ENGLISH'],
  },
  {
    id: 'bumpp',
    name: 'Bumpp',
    url: 'bumpp.buzz',
    href: 'https://bumpp.buzz',
    tagline: 'Meet people, instantly',
    body: 'A web platform that pairs strangers for real-time conversation, built for Vinayak Sharma as his own venture. We took it from concept to a live product, with the matchmaking, connection handling and session management that random pairing actually needs.',
    detail:
      'Version two is in development now, extending the platform beyond the first release. The hard part of a product like this is never the chat window — it is pairing strangers reliably, holding the connection open, and keeping it responsive as concurrency climbs.',
    kind: 'client',
    client: { name: 'Vinayak Sharma', role: 'influencer' },
    scope: [
      { label: 'Role', value: 'Product engineering and delivery' },
      { label: 'Platform', value: 'Web' },
      { label: 'Status', value: 'Live · v2 in development' },
    ],
    tags: ['WEB PLATFORM', 'REAL-TIME CHAT', 'WEBSOCKETS', 'RANDOM MATCHING', 'SESSION HANDLING'],
  },
]
