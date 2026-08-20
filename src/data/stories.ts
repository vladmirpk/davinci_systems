export const serviceStories: Record<
  string,
  {
    audience: string;
    problem: string;
    result: string;
    journey: { n: string; title: string; text: string }[];
    capabilities: string[];
  }
> = {
  'odoo-erp': {
    audience: 'Finance, operations, sales and HR teams that have outgrown spreadsheets and disconnected apps.',
    problem: 'Each department keeps its own truth. Month-end is a reconciliation exercise, not a close.',
    result: 'One Odoo system — accounting, inventory, sales, CRM and HR — configured to the way the organisation already works.',
    journey: [
      { n: '01', title: 'Discover', text: 'Map how invoices, stock, orders and people actually move today.' },
      { n: '02', title: 'Scope modules', text: 'Go live with the suite that keeps the business alive first — not every app in the catalogue.' },
      { n: '03', title: 'Configure', text: 'Chart of accounts, warehouses, taxes, access rights and document flows.' },
      { n: '04', title: 'Extend & connect', text: 'Custom modules and banks, payments, tax and legacy links where they earn their keep.' },
      { n: '05', title: 'Migrate', text: 'Opening balances, products, partners and open documents — checked, not hoped.' },
      { n: '06', title: 'Go-live & own', text: 'Role-based training, hypercare, then a support model the team can run.' },
    ],
    capabilities: ['Accounting', 'Sales & CRM', 'Inventory', 'HR', 'Manufacturing', 'Projects'],
  },
  'school-erp': {
    audience: 'Independent schools, campus groups and administrators who cannot afford a split between academics and fees.',
    problem: 'A learner is enrolled in one tool, billed in another, and parents are messaged from a third list.',
    result: 'One student record from admissions through academics, fees and the parent portal.',
    journey: [
      { n: '01', title: 'Admissions', text: 'Applications, placement and enrolment into a single learner identity.' },
      { n: '02', title: 'Academics', text: 'Classes, timetables, attendance and assessment on that same record.' },
      { n: '03', title: 'Fees', text: 'Invoices, receipts and aged balances the finance office can defend.' },
      { n: '04', title: 'Parents', text: 'A portal that shows the same child, the same bill, the same messages.' },
      { n: '05', title: 'Term-time', text: 'Proven against fee runs, reports and enrolment peaks — not a quiet week.' },
      { n: '06', title: 'Support', text: 'Training for administrators and cover through the first full term.' },
    ],
    capabilities: ['Enrolment', 'Timetables', 'Fee billing', 'Exams', 'Staff records', 'Parent portal'],
  },
  ecommerce: {
    audience: 'Retailers and brands who need the shop window, warehouse and ledger to tell the same story.',
    problem: 'Orders land online while stock and invoices live somewhere else. Fulfilment becomes guesswork.',
    result: 'Catalogue to cash: products, cart, local payments, fulfilment and invoicing in one flow.',
    journey: [
      { n: '01', title: 'Catalogue', text: 'Products, variants, prices and availability from a stock source of truth.' },
      { n: '02', title: 'Cart & checkout', text: 'A path customers finish — guest or account — with clear shipping choices.' },
      { n: '03', title: 'Payments', text: 'Local and card methods that post cleanly into finance, not a side spreadsheet.' },
      { n: '04', title: 'Fulfilment', text: 'Pick, pack, dispatch and exceptions the warehouse can actually run.' },
      { n: '05', title: 'Ledger', text: 'Invoices and revenue that match what left the store.' },
      { n: '06', title: 'Operate', text: 'Promotions, returns and reporting without breaking the operational picture.' },
    ],
    capabilities: ['Storefront', 'Inventory sync', 'Payments', 'Order management', 'Invoicing', 'Returns'],
  },
  'custom-apps': {
    audience: 'Organisations whose process is specific enough that packaged software keeps getting bent out of shape.',
    problem: 'The real work lives in email, shared drives and a hero spreadsheet nobody else understands.',
    result: 'A maintainable application around the process — owned by the team, integrated with core systems.',
    journey: [
      { n: '01', title: 'Understand', text: 'Watch the work. Name the constraints, the exceptions and the outcome that matters.' },
      { n: '02', title: 'Architect', text: 'Data model, roles, integrations and a first release that can actually ship.' },
      { n: '03', title: 'Engineer', text: 'Build, test and document — not a prototype that cannot be handed over.' },
      { n: '04', title: 'Integrate', text: 'Connect ERP, payments, identity or legacy so the new tool is not another island.' },
      { n: '05', title: 'Deploy', text: 'Migrate, train and go-live with a support window.' },
      { n: '06', title: 'Evolve', text: 'A backlog and ownership model so the system keeps pace.' },
    ],
    capabilities: ['Portals', 'Operations tools', 'Records systems', 'APIs', 'Identity', 'Reporting'],
  },
  invoicing: {
    audience: 'Finance teams who issue volume invoices and cannot afford an ambiguous audit trail.',
    problem: 'Quotes, invoices and collections live in different places. Aged debt is a debate, not a report.',
    result: 'Quote through collections and statements — with a trail finance and audit can follow.',
    journey: [
      { n: '01', title: 'Quote', text: 'Structured offers that convert to invoices without retyping.' },
      { n: '02', title: 'Invoice', text: 'Tax-correct documents, sequences and customer statements.' },
      { n: '03', title: 'Collect', text: 'Reminders, partial payments and allocation against the right bill.' },
      { n: '04', title: 'Reconcile', text: 'Bank and cash matching that closes the loop.' },
      { n: '05', title: 'Age', text: 'Clear aged debt the credit team can act on.' },
      { n: '06', title: 'Report', text: 'Management packs and an audit trail that survives questions.' },
    ],
    capabilities: ['Quotes', 'Tax invoices', 'Receipts', 'Statements', 'Aged debt', 'Audit log'],
  },
  automation: {
    audience: 'Operations leaders tired of chasing approvals, status and documents through inboxes.',
    problem: 'The process is known. The execution is tribal. Work waits on the next reminder.',
    result: 'Visual workflows that route, notify and record — people keep judgement, software keeps the tempo.',
    journey: [
      { n: '01', title: 'Map', text: 'The real path: who requests, who approves, what system must update.' },
      { n: '02', title: 'Design', text: 'A flow the operators recognise — not a theoretical BPM diagram.' },
      { n: '03', title: 'Automate', text: 'Routing, SLAs, document generation and system writes.' },
      { n: '04', title: 'Notify', text: 'The right person, once, with the context they need to decide.' },
      { n: '05', title: 'Record', text: 'An audit of who did what, when — without extra admin.' },
      { n: '06', title: 'Improve', text: 'Bottlenecks become visible. The next increment is obvious.' },
    ],
    capabilities: ['Approvals', 'Routing', 'Notifications', 'Document packs', 'SLA clocks', 'Handoffs'],
  },
  enterprise: {
    audience: 'Groups that need governance, identity and integrations as much as they need new features.',
    problem: 'Tools proliferate. Ownership is unclear. Change is either frozen or chaotic.',
    result: 'A platform with architecture, access control, documentation and an operating model that lasts.',
    journey: [
      { n: '01', title: 'Assess', text: 'Landscape, risks, and which systems are actually sources of truth.' },
      { n: '02', title: 'Architect', text: 'Domains, integrations, identity and a sequencing that can be funded.' },
      { n: '03', title: 'Govern', text: 'Roles, environments, change control and logging from the start.' },
      { n: '04', title: 'Integrate', text: 'APIs and events so departments share data without copy-paste.' },
      { n: '05', title: 'Deploy', text: 'Staged cutovers with rollback, training and hypercare.' },
      { n: '06', title: 'Operate', text: 'Support, metrics and a roadmap that survives organisational change.' },
    ],
    capabilities: ['Architecture', 'Identity', 'Integrations', 'Security', 'Documentation', 'Support'],
  },
  ai: {
    audience: 'Teams drowning in documents, exceptions or forecasting work that is still done by hand.',
    problem: 'AI demos stay in the lab because they are not wired into a process people already trust.',
    result: 'Intelligence inside the workflow — extract, suggest, forecast — with a human still accountable.',
    journey: [
      { n: '01', title: 'Locate the work', text: 'Which steps are slow, repetitive and already documented?' },
      { n: '02', title: 'Use existing data', text: 'Invoices, records, history — not a fantasy dataset.' },
      { n: '03', title: 'Embed', text: 'Suggestions appear where the user already works, not in a side chatbot.' },
      { n: '04', title: 'Review', text: 'Confidence scores and a human confirm step for anything that matters.' },
      { n: '05', title: 'Measure', text: 'Time saved and error rates, not vanity accuracy slides.' },
      { n: '06', title: 'Retrain', text: 'Feedback from operators becomes the next increment.' },
    ],
    capabilities: ['Document capture', 'Classification', 'Forecasting', 'Assistants', 'Exception queues', 'Audit'],
  },
  gis: {
    audience: 'Land, infrastructure, agriculture and resource teams who decide in space, not only in tables.',
    problem: 'Assets live in a spreadsheet. The map is a PDF. Field teams cannot close the loop.',
    result: 'Capture, map, analyse and act — location as part of the operational picture.',
    journey: [
      { n: '01', title: 'Capture', text: 'Field GPS, existing cadastre, drone or satellite layers.' },
      { n: '02', title: 'Map', text: 'Assets, boundaries and events on a shared spatial picture.' },
      { n: '03', title: 'Link', text: 'Join GIS to ERP, work orders or farmer records.' },
      { n: '04', title: 'Analyse', text: 'What is where, what has changed, what is at risk.' },
      { n: '05', title: 'Act', text: 'Planning, dispatch and compliance from the same map.' },
      { n: '06', title: 'Maintain', text: 'Layers stay current because the field can update them.' },
    ],
    capabilities: ['Field capture', 'Asset layers', 'Imagery', 'Work orders', 'Reporting', 'ERP link'],
  },
};

export const industryStories: Record<
  string,
  { journey: { n: string; title: string; text: string }[]; related: string[] }
> = {
  education: {
    related: ['school-erp', 'invoicing', 'automation', 'odoo-erp'],
    journey: [
      { n: '01', title: 'Enrol', text: 'Admissions into a durable learner record.' },
      { n: '02', title: 'Teach', text: 'Classes, attendance and assessment.' },
      { n: '03', title: 'Bill', text: 'Fees that match the enrolled child.' },
      { n: '04', title: 'Inform', text: 'Parents see the same truth as the school.' },
    ],
  },
  retail: {
    related: ['ecommerce', 'odoo-erp', 'invoicing', 'automation'],
    journey: [
      { n: '01', title: 'List', text: 'Catalogue from real stock.' },
      { n: '02', title: 'Sell', text: 'Checkout and local payments.' },
      { n: '03', title: 'Fulfil', text: 'Warehouse and last mile.' },
      { n: '04', title: 'Close', text: 'Invoices that match dispatches.' },
    ],
  },
  professional: {
    related: ['custom-apps', 'invoicing', 'automation', 'odoo-erp'],
    journey: [
      { n: '01', title: 'Scope', text: 'Engagements that can be delivered.' },
      { n: '02', title: 'Track', text: 'Time, tasks and documents.' },
      { n: '03', title: 'Bill', text: 'Invoices from actual work.' },
      { n: '04', title: 'Report', text: 'Utilisation and WIP leadership can trust.' },
    ],
  },
  government: {
    related: ['enterprise', 'custom-apps', 'automation', 'gis'],
    journey: [
      { n: '01', title: 'Record', text: 'Identity and case files with access control.' },
      { n: '02', title: 'Route', text: 'Accountable workflows, not inbox chains.' },
      { n: '03', title: 'Serve', text: 'Public or internal services with an audit trail.' },
      { n: '04', title: 'Report', text: 'Evidence for oversight, not reconstructed packs.' },
    ],
  },
  mining: {
    related: ['odoo-erp', 'gis', 'automation', 'enterprise'],
    journey: [
      { n: '01', title: 'Site', text: 'Assets and stores where the work happens.' },
      { n: '02', title: 'Procure', text: 'Contractors, spares and approvals.' },
      { n: '03', title: 'Comply', text: 'Traceability the sector expects.' },
      { n: '04', title: 'Close', text: 'Cost and inventory that finance can defend.' },
    ],
  },
  agriculture: {
    related: ['gis', 'odoo-erp', 'ecommerce', 'automation'],
    journey: [
      { n: '01', title: 'Grow', text: 'Fields, inputs and seasons on a map.' },
      { n: '02', title: 'Move', text: 'Harvest, stores and logistics.' },
      { n: '03', title: 'Sell', text: 'Buyers, contracts and payments.' },
      { n: '04', title: 'Trace', text: 'From plot to invoice when asked.' },
    ],
  },
  enterprise: {
    related: ['odoo-erp', 'enterprise', 'automation', 'ai'],
    journey: [
      { n: '01', title: 'Unify', text: 'Shared data across functions.' },
      { n: '02', title: 'Integrate', text: 'Systems that talk without spreadsheets.' },
      { n: '03', title: 'Govern', text: 'Identity, change and ownership.' },
      { n: '04', title: 'Scale', text: 'A platform that survives the next restructure.' },
    ],
  },
};
