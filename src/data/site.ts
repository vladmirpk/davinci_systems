export const site = {
  name: 'Davinci Systems',
  shortName: 'DS',
  tagline: 'Engineering Intelligence. Automating Possibility.',
  description:
    'Davinci Systems designs and builds ERP platforms, intelligent applications, and digital solutions that work the way organisations actually work.',
  email: 'hello@davincisystems.co.zw',
  phone: '+263 242 000 000',
  phoneHref: 'tel:+263242000000',
  address: 'Harare, Zimbabwe',
  hours: 'Mon – Fri, 08:00 – 17:00 CAT',
  showTrustedBy: false,
  social: {
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://x.com/',
    youtube: 'https://www.youtube.com/',
  },
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about/' },
  {
    label: 'Solutions',
    href: '/solutions/',
    children: [
      { label: 'Odoo ERP & Business Systems', href: '/solutions/odoo-erp/' },
      { label: 'School ERP', href: '/solutions/school-erp/' },
      { label: 'eCommerce Platforms', href: '/solutions/ecommerce/' },
      { label: 'Custom Business Applications', href: '/solutions/custom-apps/' },
      { label: 'AI & Intelligent Applications', href: '/solutions/ai/' },
      { label: 'All solutions', href: '/solutions/' },
    ],
  },
  {
    label: 'Odoo Services',
    href: '/odoo-services/',
    children: [
      { label: 'Implementation', href: '/odoo-services/#implementation' },
      { label: 'Custom Modules', href: '/odoo-services/#custom-modules' },
      { label: 'Integrations', href: '/odoo-services/#integration' },
      { label: 'Support & Training', href: '/odoo-services/#support' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries/',
    children: [
      { label: 'Education', href: '/industries/education/' },
      { label: 'Retail & Commerce', href: '/industries/retail/' },
      { label: 'Government', href: '/industries/government/' },
      { label: 'Mining & Resources', href: '/industries/mining/' },
      { label: 'All industries', href: '/industries/' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources/',
    children: [
      { label: 'Insights', href: '/resources/' },
      { label: 'Case Studies', href: '/work/' },
      { label: 'Whitepapers', href: '/resources/' },
    ],
  },
  { label: 'Contact', href: '/contact/' },
];

export const capabilities = [
  { icon: 'erp', label: 'ERP' },
  { icon: 'code', label: 'Custom Software' },
  { icon: 'cart', label: 'eCommerce' },
  { icon: 'flow', label: 'Automation' },
  { icon: 'spark', label: 'AI' },
  { icon: 'link', label: 'Integration' },
  { icon: 'map', label: 'GIS' },
];

export const heroSlides = [
  {
    id: 'ecommerce',
    image: 'ecommerce',
    eyebrow: 'eCommerce platforms',
    title: 'Catalogue, checkout,',
    accent: 'payment, fulfilment.',
    text: 'Storefronts and commerce backends that connect products, carts, local payments and stock — a shop that stays honest with the warehouse and the ledger.',
    primary: { href: '/solutions/ecommerce/', label: 'See eCommerce' },
    secondary: { href: '/contact/', label: 'Talk to an Expert' },
  },
  {
    id: 'odoo',
    image: 'odoo',
    eyebrow: 'Odoo ERP & business systems',
    title: 'Accounting, sales, HR and CRM',
    accent: 'in one Odoo system.',
    text: 'We implement, configure and extend Odoo so finance, inventory, sales and people run from one operational picture — not a stack of disconnected tools.',
    primary: { href: '/odoo-services/', label: 'Explore Odoo Services' },
    secondary: { href: '/contact/', label: 'Plan a rollout' },
  },
  {
    id: 'custom',
    image: 'custom',
    eyebrow: 'Custom business applications',
    title: 'Software built around',
    accent: 'your process.',
    text: 'Internal portals, operational tools and customer-facing platforms when off-the-shelf software cannot quite reach how the organisation already works.',
    primary: { href: '/solutions/custom-apps/', label: 'Custom applications' },
    secondary: { href: '/contact/', label: 'Get a Quote' },
  },
  {
    id: 'automation',
    image: 'automation',
    eyebrow: 'Workflow automation',
    title: 'Request, approve, execute —',
    accent: 'without the chase.',
    text: 'Visual workflows for approvals, notifications and hand-offs. The repeatable steps run themselves; people keep the judgement.',
    primary: { href: '/solutions/automation/', label: 'See automation' },
    secondary: { href: '/contact/', label: 'Talk to an Expert' },
  },
];

export const solutions = [
  {
    slug: 'odoo-erp',
    icon: 'erp',
    title: 'Odoo ERP & Business Systems',
    summary: 'Unified finance, operations, HR and CRM on a platform that grows with the organisation.',
    description:
      'We implement, customise and support Odoo so every team works from one source of truth — from accounting and inventory to sales, HR and manufacturing.',
    outcomes: ['Single operational picture', 'Shorter close cycles', 'Fewer disconnected tools'],
  },
  {
    slug: 'school-erp',
    icon: 'school',
    title: 'School ERP',
    summary: 'Admissions, academics, finance and parent communication in one connected school system.',
    description:
      'Purpose-built school management covering enrolment, timetables, fees, exams, staff records and parent portals — designed for institutions that need reliability at term-time scale.',
    outcomes: ['Clear fee visibility', 'Faster enrolment', 'Better parent engagement'],
  },
  {
    slug: 'ecommerce',
    icon: 'cart',
    title: 'eCommerce Platforms',
    summary: 'Catalogues, checkout, payments and fulfilment engineered for real retail operations.',
    description:
      'We design storefronts and commerce backends that connect to inventory, invoicing and delivery — not just a pretty shop window.',
    outcomes: ['Catalogue to cash', 'Local payment methods', 'Stock that stays honest'],
  },
  {
    slug: 'custom-apps',
    icon: 'code',
    title: 'Custom Business Applications',
    summary: 'Bespoke systems for processes that off-the-shelf software cannot quite reach.',
    description:
      'When the work is specific, we build applications around it — internal portals, operational tools and customer-facing platforms that fit how your teams already operate.',
    outcomes: ['Fits existing process', 'Owned and maintainable', 'Integrates with core systems'],
  },
  {
    slug: 'invoicing',
    icon: 'invoice',
    title: 'Invoicing & Billing Platforms',
    summary: 'Quotes, invoices, collections and reporting with audit-ready financial trails.',
    description:
      'Billing platforms that handle quotes through collections, statements and management reporting — built for finance teams who cannot afford ambiguity.',
    outcomes: ['Faster invoicing', 'Clear aged debt', 'Reliable audit trail'],
  },
  {
    slug: 'automation',
    icon: 'flow',
    title: 'Workflow Automation',
    summary: 'Approvals, notifications and hand-offs that run without chasing people for updates.',
    description:
      'We map the real process, then automate the repetitive steps — routing, reminders, document generation and system updates that used to live in inboxes.',
    outcomes: ['Fewer status meetings', 'Consistent hand-offs', 'Time back for skilled work'],
  },
  {
    slug: 'enterprise',
    icon: 'building',
    title: 'Enterprise Systems',
    summary: 'Secure, scalable platforms for organisations that need governance as well as speed.',
    description:
      'Architecture, identity, integrations and operations for systems that must last — with the controls, documentation and support models enterprise teams expect.',
    outcomes: ['Clear ownership', 'Controlled change', 'Room to scale'],
  },
  {
    slug: 'ai',
    icon: 'spark',
    title: 'AI & Intelligent Applications',
    summary: 'Practical intelligence layered onto real workflows — not experiments that never leave the lab.',
    description:
      'Document intelligence, forecasting, assistants and decision support, designed around data you already have and processes people already trust.',
    outcomes: ['Faster decisions', 'Less manual review', 'Insights inside the workflow'],
  },
  {
    slug: 'gis',
    icon: 'map',
    title: 'GIS & Spatial Intelligence',
    summary: 'Maps, assets and field data turned into operational pictures leaders can act on.',
    description:
      'Spatial platforms for land, infrastructure, agriculture and resources — combining GIS, field capture and business systems so location is part of the decision, not a separate report.',
    outcomes: ['Assets on a map', 'Field-to-office flow', 'Better planning signal'],
  },
];

export const odooServices = [
  {
    id: 'implementation',
    icon: 'rocket',
    title: 'Implementation',
    text: 'Scoped, staged rollouts that go live with the modules you need first — not a forever project.',
  },
  {
    id: 'configuration',
    icon: 'sliders',
    title: 'Configuration & Optimisation',
    text: 'Chart of accounts, warehouses, access rights and workflows tuned to how the business actually runs.',
  },
  {
    id: 'custom-modules',
    icon: 'puzzle',
    title: 'Custom Modules',
    text: 'Extensions when standard Odoo is close but not complete — built to upgrade cleanly.',
  },
  {
    id: 'integration',
    icon: 'link',
    title: 'Third-party Integration',
    text: 'Banks, payments, tax, logistics, HR and legacy systems connected without spreadsheet glue.',
  },
  {
    id: 'automation',
    icon: 'flow',
    title: 'Business Automation',
    text: 'Automated documents, follow-ups, replenishment and reporting that keep operations moving.',
  },
  {
    id: 'support',
    icon: 'headset',
    title: 'Support & Training',
    text: 'Hypercare after go-live, role-based training and a support model your team can actually use.',
  },
];

export const odooModules = [
  { icon: 'invoice', label: 'Accounting' },
  { icon: 'cart', label: 'Sales' },
  { icon: 'users', label: 'HR' },
  { icon: 'users', label: 'CRM' },
  { icon: 'boxes', label: 'Inventory' },
  { icon: 'factory', label: 'Manufacturing' },
  { icon: 'cart', label: 'eCommerce' },
  { icon: 'clipboard', label: 'Projects' },
];

export const processSteps = [
  {
    n: '01',
    icon: 'search',
    title: 'Understand',
    text: 'We study the work as it is done today — constraints, people and the outcomes that matter.',
  },
  {
    n: '02',
    icon: 'compass',
    title: 'Architect',
    text: 'A clear system design: modules, data, integrations and a path that can actually be delivered.',
  },
  {
    n: '03',
    icon: 'code',
    title: 'Engineer',
    text: 'Build with discipline — tested, documented and aligned to the architecture, not to last-minute guesses.',
  },
  {
    n: '04',
    icon: 'flow',
    title: 'Automate',
    text: 'Remove the busywork. Approvals, documents and hand-offs run without being chased.',
  },
  {
    n: '05',
    icon: 'rocket',
    title: 'Deploy',
    text: 'Go-live with training, data migration and support so the system is used, not merely installed.',
  },
  {
    n: '06',
    icon: 'refresh',
    title: 'Evolve',
    text: 'Measure, refine and extend. Software should keep pace as the organisation does.',
  },
];

export const industries = [
  {
    slug: 'education',
    icon: 'school',
    title: 'Education',
    summary: 'School and campus systems for enrolment, academics, fees and communication.',
    description:
      'From independent schools to multi-campus groups, we build ERPs and portals that keep academic, finance and parent-facing operations in step.',
  },
  {
    slug: 'retail',
    icon: 'cart',
    title: 'Retail & Commerce',
    summary: 'Stores, catalogues, payments and fulfilment that stay aligned with stock and finance.',
    description:
      'Commerce platforms and back-office systems for retailers who need the shop floor, warehouse and ledger to tell the same story.',
  },
  {
    slug: 'professional',
    icon: 'briefcase',
    title: 'Professional Services',
    summary: 'Projects, time, billing and client work managed in one operational rhythm.',
    description:
      'Practice systems for firms that sell expertise — scoping, delivery, invoicing and reporting without the spreadsheet sprawl.',
  },
  {
    slug: 'government',
    icon: 'landmark',
    title: 'Government',
    summary: 'Transparent, auditable platforms for public services and internal operations.',
    description:
      'Secure applications and records systems designed for accountability, access control and long-lived public programmes.',
  },
  {
    slug: 'mining',
    icon: 'mountain',
    title: 'Mining & Resources',
    summary: 'Assets, compliance, procurement and operations for resource businesses.',
    description:
      'Operational systems that connect sites, stores, contractors and finance — with the traceability the sector demands.',
  },
  {
    slug: 'agriculture',
    icon: 'leaf',
    title: 'Agriculture',
    summary: 'Produce, inputs, logistics and farm operations with spatial and seasonal context.',
    description:
      'Platforms for growers, agribusiness and cooperatives — inventory, traceability, GIS and commercial operations in one picture.',
  },
  {
    slug: 'enterprise',
    icon: 'building',
    title: 'Enterprise',
    summary: 'Cross-functional systems for organisations that have outgrown disconnected tools.',
    description:
      'ERP, integration and custom platforms for groups that need shared data, clear ownership and software that survives organisational change.',
  },
];

export const caseStudies = [
  {
    slug: 'school-management',
    title: 'School Management Platform',
    image: 'case-school',
    process: 'Admissions → academics → fees → parent portal',
    summary: 'A connected school ERP covering enrolment, classes, billing and family communication.',
    industry: 'Education',
  },
  {
    slug: 'ecommerce-retail',
    title: 'eCommerce & Retail Platform',
    image: 'case-ecommerce',
    process: 'Catalogue → checkout → payment → fulfilment',
    summary: 'A retail stack that keeps online orders, store stock and invoicing in one flow.',
    industry: 'Retail',
  },
  {
    slug: 'invoicing-billing',
    title: 'Invoicing & Billing Platform',
    image: 'case-invoicing',
    process: 'Quote → invoice → collections → reporting',
    summary: 'Finance-grade billing with statements, aged debt and a clean audit trail.',
    industry: 'Enterprise',
  },
  {
    slug: 'workflow-ops',
    title: 'Operations Workflow System',
    image: 'case-workflow',
    process: 'Request → approve → execute → record',
    summary: 'Digitised shop-floor and office workflows that replaced email-driven follow-up.',
    industry: 'Enterprise',
  },
];

export const values = [
  {
    icon: 'target',
    title: 'Business first',
    text: 'We start with the work, not the stack. Technology is the means.',
  },
  {
    icon: 'code',
    title: 'Open where it counts',
    text: 'Odoo and open platforms when they reduce lock-in and total cost.',
  },
  {
    icon: 'users',
    title: 'Built with the team',
    text: 'The people who will use the system help shape it — then we train them to own it.',
  },
  {
    icon: 'shield',
    title: 'Durable engineering',
    text: 'Clear architecture, secure defaults and software that can be maintained after go-live.',
  },
];

export const whyUs = [
  { title: 'Expert delivery team', text: 'Engineers, analysts and Odoo specialists who have taken systems live, not just designed them.' },
  { title: 'Open-source focus', text: 'We favour platforms you can own, inspect and extend — especially Odoo.' },
  { title: 'Industry context', text: 'Education, retail, government, mining and agriculture are not afterthoughts.' },
  { title: 'Integration mindset', text: 'New software has to live with what you already run. We design for that from day one.' },
  { title: 'Automation with judgement', text: 'We automate the repeatable steps and leave judgement where it belongs.' },
  { title: 'Support after launch', text: 'Go-live is a milestone, not the end of the engagement.' },
];

export const tech = ['Odoo', 'Python', 'JavaScript', 'AI', 'Cloud', 'PostgreSQL', 'GIS', 'REST APIs'];

export const clients = [
  { name: 'Zingsa', mark: 'Z' },
  { name: 'Agras', mark: 'A' },
  { name: 'Ranch Groceries', mark: 'R' },
  { name: 'Titan Security', mark: 'T' },
  { name: 'Harvest Co', mark: 'H' },
  { name: 'Northbridge', mark: 'N' },
];

export const team = [
  { name: 'Leadership', role: 'Strategy & delivery', bio: 'Sets the engagement, keeps scope honest and stays accountable through go-live.' },
  { name: 'Engineering', role: 'Platforms & integrations', bio: 'Builds the systems — Odoo, custom applications, data and automation.' },
  { name: 'Solutions', role: 'Process & product', bio: 'Translates how the organisation works into software that people will actually use.' },
];
