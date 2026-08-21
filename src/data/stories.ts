export const deliverySteps = [
  { n: '01', title: 'Discover', text: 'We sit with the people who do the work and map the real path, including exceptions.' },
  { n: '02', title: 'Scope', text: 'A first release that can go live — modules, integrations and ownership named in writing.' },
  { n: '03', title: 'Build', text: 'Configure, extend and test against your documents and data, not a demo company.' },
  { n: '04', title: 'Own', text: 'Training, hypercare and a support model so the system stays in the team’s hands.' },
];

export const serviceStories: Record<
  string,
  {
    audience: string;
    problem: string;
    result: string;
    before: string;
    after: string;
    sceneCaption: string;
    journey: { n: string; title: string; text: string }[];
    capabilities: string[];
    parts: { icon: string; title: string; text: string }[];
  }
> = {
  'odoo-erp': {
    audience: 'Finance, operations, sales and HR teams that have outgrown spreadsheets and disconnected apps.',
    problem: 'Each department keeps its own truth. Month-end is a reconciliation exercise, not a close.',
    result: 'One Odoo system — accounting, inventory, sales, CRM and HR — configured to the way the organisation already works.',
    before: 'Invoices, stock and people live in separate tools. Closing the month means reconstructing the story.',
    after: 'One operational picture: post a sale, move stock, pay a bill — and finance already has it.',
    sceneCaption: 'Odoo apps and dashboards on the desk — accounting, sales, inventory and HR in one launcher.',
    journey: [
      { n: '01', title: 'Discover', text: 'Map how invoices, stock, orders and people actually move today.' },
      { n: '02', title: 'Scope modules', text: 'Go live with the suite that keeps the business alive first — not every app in the catalogue.' },
      { n: '03', title: 'Configure', text: 'Chart of accounts, warehouses, taxes, access rights and document flows.' },
      { n: '04', title: 'Extend & connect', text: 'Custom modules and banks, payments, tax and legacy links where they earn their keep.' },
      { n: '05', title: 'Migrate', text: 'Opening balances, products, partners and open documents — checked, not hoped.' },
      { n: '06', title: 'Go-live & own', text: 'Role-based training, hypercare, then a support model the team can run.' },
    ],
    capabilities: ['Accounting', 'Sales & CRM', 'Inventory', 'HR', 'Manufacturing', 'Projects'],
    parts: [
      { icon: 'invoice', title: 'Accounting', text: 'Chart of accounts, taxes, vendor bills and a close that matches operations — not a side spreadsheet.' },
      { icon: 'cart', title: 'Sales & CRM', text: 'Quotes, orders and a pipeline that posts into inventory and invoices without retyping.' },
      { icon: 'boxes', title: 'Inventory', text: 'Warehouses, receipts, deliveries and valuation that finance can defend.' },
      { icon: 'users', title: 'HR', text: 'Contracts, leave and employee records that sit next to the rest of the business, not in a silo.' },
      { icon: 'factory', title: 'Manufacturing', text: 'Bills of materials, work orders and consumption when you actually make things.' },
      { icon: 'clipboard', title: 'Projects', text: 'Tasks, timesheets and billing from delivery — useful when you sell work, not only stock.' },
    ],
  },
  'school-erp': {
    audience: 'Independent schools, campus groups and administrators who cannot afford a split between academics and fees.',
    problem: 'A learner is enrolled in one tool, billed in another, and parents are messaged from a third list.',
    result: 'One student record from admissions through academics, fees and the parent portal.',
    before: 'Enrolment, the class list and the fee book disagree. Parents hear three versions of the same child.',
    after: 'One learner identity: placed, taught, billed and visible to the family from the same record.',
    sceneCaption: 'Administrators working a school ERP — enrolment, fees and parent messages on one screen.',
    journey: [
      { n: '01', title: 'Admissions', text: 'Applications, placement and enrolment into a single learner identity.' },
      { n: '02', title: 'Academics', text: 'Classes, timetables, attendance and assessment on that same record.' },
      { n: '03', title: 'Fees', text: 'Invoices, receipts and aged balances the finance office can defend.' },
      { n: '04', title: 'Parents', text: 'A portal that shows the same child, the same bill, the same messages.' },
      { n: '05', title: 'Term-time', text: 'Proven against fee runs, reports and enrolment peaks — not a quiet week.' },
      { n: '06', title: 'Support', text: 'Training for administrators and cover through the first full term.' },
    ],
    capabilities: ['Enrolment', 'Timetables', 'Fee billing', 'Exams', 'Staff records', 'Parent portal'],
    parts: [
      { icon: 'school', title: 'Enrolment', text: 'Applications, placement and a durable learner identity that academics and finance both use.' },
      { icon: 'clipboard', title: 'Timetables', text: 'Classes, rooms and teachers that stay aligned when the term actually starts.' },
      { icon: 'invoice', title: 'Fee billing', text: 'Invoices, receipts and aged balances tied to the enrolled child — not a parallel list.' },
      { icon: 'target', title: 'Exams', text: 'Assessment, reports and promotion on the same record as attendance.' },
      { icon: 'users', title: 'Staff records', text: 'Contracts, classes taught and access so the right people see the right learners.' },
      { icon: 'mail', title: 'Parent portal', text: 'The family sees the same child, the same bill and the same messages the school does.' },
    ],
  },
  ecommerce: {
    audience: 'Retailers and brands who need the shop window, warehouse and ledger to tell the same story.',
    problem: 'Orders land online while stock and invoices live somewhere else. Fulfilment becomes guesswork.',
    result: 'Catalogue to cash: products, cart, local payments, fulfilment and invoicing in one flow.',
    before: 'The website sells what the warehouse no longer has. Invoices are rebuilt after the parcel leaves.',
    after: 'Catalogue, checkout, payment and dispatch share one stock and one invoice.',
    sceneCaption: 'Storefront, cart and checkout on laptop and phone — a shop customers can actually finish.',
    journey: [
      { n: '01', title: 'Catalogue', text: 'Products, variants, prices and availability from a stock source of truth.' },
      { n: '02', title: 'Cart & checkout', text: 'A path customers finish — guest or account — with clear shipping choices.' },
      { n: '03', title: 'Payments', text: 'Local and card methods that post cleanly into finance, not a side spreadsheet.' },
      { n: '04', title: 'Fulfilment', text: 'Pick, pack, dispatch and exceptions the warehouse can actually run.' },
      { n: '05', title: 'Ledger', text: 'Invoices and revenue that match what left the store.' },
      { n: '06', title: 'Operate', text: 'Promotions, returns and reporting without breaking the operational picture.' },
    ],
    capabilities: ['Storefront', 'Inventory sync', 'Payments', 'Order management', 'Invoicing', 'Returns'],
    parts: [
      { icon: 'cart', title: 'Catalogue', text: 'Products, variants and prices drawn from real availability — not a brochure that lies.' },
      { icon: 'rocket', title: 'Checkout', text: 'A path customers finish: guest or account, shipping they understand, no surprise steps.' },
      { icon: 'invoice', title: 'Payments', text: 'Local and card methods that post into finance, not a private export from the gateway.' },
      { icon: 'boxes', title: 'Fulfilment', text: 'Pick, pack, dispatch and exceptions the warehouse can run without a second system.' },
      { icon: 'link', title: 'Invoicing', text: 'Revenue and tax documents that match what left the store.' },
      { icon: 'refresh', title: 'Returns', text: 'Refunds and restocking that keep stock and the ledger honest.' },
    ],
  },
  'custom-apps': {
    audience: 'Organisations whose process is specific enough that packaged software keeps getting bent out of shape.',
    problem: 'The real work lives in email, shared drives and a hero spreadsheet nobody else understands.',
    result: 'A maintainable application around the process — owned by the team, integrated with core systems.',
    before: 'The process lives in one person’s head and a workbook that cannot be handed over.',
    after: 'A named application: roles, records, integrations and a backlog the organisation can own.',
    sceneCaption: 'A team reviewing a custom operations app — records, forms and a sidebar that matches how they work.',
    journey: [
      { n: '01', title: 'Understand', text: 'Watch the work. Name the constraints, the exceptions and the outcome that matters.' },
      { n: '02', title: 'Architect', text: 'Data model, roles, integrations and a first release that can actually ship.' },
      { n: '03', title: 'Engineer', text: 'Build, test and document — not a prototype that cannot be handed over.' },
      { n: '04', title: 'Integrate', text: 'Connect ERP, payments, identity or legacy so the new tool is not another island.' },
      { n: '05', title: 'Deploy', text: 'Migrate, train and go-live with a support window.' },
      { n: '06', title: 'Evolve', text: 'A backlog and ownership model so the system keeps pace.' },
    ],
    capabilities: ['Portals', 'Operations tools', 'Records systems', 'APIs', 'Identity', 'Reporting'],
    parts: [
      { icon: 'users', title: 'Portals', text: 'A place staff, partners or customers log in to do the work — not another inbox.' },
      { icon: 'clipboard', title: 'Operations tools', text: 'Screens that match the job: queues, exceptions and the next action, not a generic form.' },
      { icon: 'erp', title: 'Records systems', text: 'A source of truth for cases, assets or members that other tools can trust.' },
      { icon: 'link', title: 'APIs', text: 'Clean connections to ERP, payments or legacy so the new app is not an island.' },
      { icon: 'shield', title: 'Identity', text: 'Who can see what, with an audit of who did what — from the first release.' },
      { icon: 'target', title: 'Reporting', text: 'The numbers leadership already asks for, without a weekend of exports.' },
    ],
  },
  invoicing: {
    audience: 'Finance teams who issue volume invoices and cannot afford an ambiguous audit trail.',
    problem: 'Quotes, invoices and collections live in different places. Aged debt is a debate, not a report.',
    result: 'Quote through collections and statements — with a trail finance and audit can follow.',
    before: 'Quotes, invoices and cash live in three places. Aged debt is an argument, not a report.',
    after: 'Quote converts, invoice posts, cash allocates — and statements match the ledger.',
    sceneCaption: 'A finance desk with quotes, tax invoices and aged receivables on screen — a trail you can follow.',
    journey: [
      { n: '01', title: 'Quote', text: 'Structured offers that convert to invoices without retyping.' },
      { n: '02', title: 'Invoice', text: 'Tax-correct documents, sequences and customer statements.' },
      { n: '03', title: 'Collect', text: 'Reminders, partial payments and allocation against the right bill.' },
      { n: '04', title: 'Reconcile', text: 'Bank and cash matching that closes the loop.' },
      { n: '05', title: 'Age', text: 'Clear aged debt the credit team can act on.' },
      { n: '06', title: 'Report', text: 'Management packs and an audit trail that survives questions.' },
    ],
    capabilities: ['Quotes', 'Tax invoices', 'Receipts', 'Statements', 'Aged debt', 'Audit log'],
    parts: [
      { icon: 'clipboard', title: 'Quotes', text: 'Structured offers that convert to invoices without retyping the commercial terms.' },
      { icon: 'invoice', title: 'Tax invoices', text: 'Sequences, tax and documents that stand up when someone asks how the number was made.' },
      { icon: 'check', title: 'Receipts', text: 'Cash and transfers allocated to the right bill, including partial payments.' },
      { icon: 'mail', title: 'Statements', text: 'What the customer owes, in a pack they and you both recognise.' },
      { icon: 'target', title: 'Aged debt', text: 'A list the credit team can act on — not a reconstructed spreadsheet.' },
      { icon: 'shield', title: 'Audit log', text: 'Who changed what, when — so month-end questions have answers.' },
    ],
  },
  automation: {
    audience: 'Operations leaders tired of chasing approvals, status and documents through inboxes.',
    problem: 'The process is known. The execution is tribal. Work waits on the next reminder.',
    result: 'Visual workflows that route, notify and record — people keep judgement, software keeps the tempo.',
    before: 'Work waits in inboxes. Nobody is sure who has it, or what happens next.',
    after: 'Request, approve, execute, record — with an SLA and an audit, without the chase.',
    sceneCaption: 'A visual workflow on screen: Request, Review, Approve, Complete — the path operators already know.',
    journey: [
      { n: '01', title: 'Map', text: 'The real path: who requests, who approves, what system must update.' },
      { n: '02', title: 'Design', text: 'A flow the operators recognise — not a theoretical BPM diagram.' },
      { n: '03', title: 'Automate', text: 'Routing, SLAs, document generation and system writes.' },
      { n: '04', title: 'Notify', text: 'The right person, once, with the context they need to decide.' },
      { n: '05', title: 'Record', text: 'An audit of who did what, when — without extra admin.' },
      { n: '06', title: 'Improve', text: 'Bottlenecks become visible. The next increment is obvious.' },
    ],
    capabilities: ['Approvals', 'Routing', 'Notifications', 'Document packs', 'SLA clocks', 'Handoffs'],
    parts: [
      { icon: 'check', title: 'Approvals', text: 'The right person decides, with the context they need — not a forwarded thread.' },
      { icon: 'flow', title: 'Routing', text: 'Work goes to the next role automatically, including the exceptions you already live with.' },
      { icon: 'mail', title: 'Notifications', text: 'One clear ping, not a storm. People know when it is their turn.' },
      { icon: 'invoice', title: 'Document packs', text: 'The forms and files the next step needs, generated from the record.' },
      { icon: 'target', title: 'SLA clocks', text: 'Work that is late is visible before it becomes a status meeting.' },
      { icon: 'arrow', title: 'Handoffs', text: 'When one system must update another, the hand-off is part of the flow.' },
    ],
  },
  enterprise: {
    audience: 'Groups that need governance, identity and integrations as much as they need new features.',
    problem: 'Tools proliferate. Ownership is unclear. Change is either frozen or chaotic.',
    result: 'A platform with architecture, access control, documentation and an operating model that lasts.',
    before: 'Every department bought a tool. Nobody owns the joins. Change is either frozen or chaotic.',
    after: 'Named systems, named owners, identity and integrations that survive the next restructure.',
    sceneCaption: 'Architecture and operations on a shared screen — identity, integrations and a landscape leadership can fund.',
    journey: [
      { n: '01', title: 'Assess', text: 'Landscape, risks, and which systems are actually sources of truth.' },
      { n: '02', title: 'Architect', text: 'Domains, integrations, identity and a sequencing that can be funded.' },
      { n: '03', title: 'Govern', text: 'Roles, environments, change control and logging from the start.' },
      { n: '04', title: 'Integrate', text: 'APIs and events so departments share data without copy-paste.' },
      { n: '05', title: 'Deploy', text: 'Staged cutovers with rollback, training and hypercare.' },
      { n: '06', title: 'Operate', text: 'Support, metrics and a roadmap that survives organisational change.' },
    ],
    capabilities: ['Architecture', 'Identity', 'Integrations', 'Security', 'Documentation', 'Support'],
    parts: [
      { icon: 'compass', title: 'Architecture', text: 'Which system is the source of truth, and in what order you can afford to change them.' },
      { icon: 'users', title: 'Identity', text: 'Who can access what, across apps — not a new password for every tool.' },
      { icon: 'link', title: 'Integrations', text: 'APIs and events so departments share data without overnight copy-paste.' },
      { icon: 'shield', title: 'Security', text: 'Logging, environments and least privilege from the first release, not a retrofit.' },
      { icon: 'clipboard', title: 'Documentation', text: 'How it runs, who owns it, and what to do when it breaks — written down.' },
      { icon: 'headset', title: 'Support', text: 'A model after go-live: who to call, what is in scope, how change is requested.' },
    ],
  },
  ai: {
    audience: 'Teams drowning in documents, exceptions or forecasting work that is still done by hand.',
    problem: 'AI demos stay in the lab because they are not wired into a process people already trust.',
    result: 'Intelligence inside the workflow — extract, suggest, forecast — with a human still accountable.',
    before: 'People re-type invoices and guess the forecast. The demo never left the lab.',
    after: 'Suggestions appear where the work already happens. A person still confirms what matters.',
    sceneCaption: 'Documents on one side, extracted fields and a confidence score on the other — AI inside the job, not beside it.',
    journey: [
      { n: '01', title: 'Locate the work', text: 'Which steps are slow, repetitive and already documented?' },
      { n: '02', title: 'Use existing data', text: 'Invoices, records, history — not a fantasy dataset.' },
      { n: '03', title: 'Embed', text: 'Suggestions appear where the user already works, not in a side chatbot.' },
      { n: '04', title: 'Review', text: 'Confidence scores and a human confirm step for anything that matters.' },
      { n: '05', title: 'Measure', text: 'Time saved and error rates, not vanity accuracy slides.' },
      { n: '06', title: 'Retrain', text: 'Feedback from operators becomes the next increment.' },
    ],
    capabilities: ['Document capture', 'Classification', 'Forecasting', 'Assistants', 'Exception queues', 'Audit'],
    parts: [
      { icon: 'invoice', title: 'Document capture', text: 'Pull fields from invoices, forms and letters you already receive — not a new scanning cult.' },
      { icon: 'erp', title: 'Classification', text: 'Route the document to the right queue so people stop sorting by hand.' },
      { icon: 'target', title: 'Forecasting', text: 'Demand, cash or exceptions from history you already have, shown where decisions are made.' },
      { icon: 'spark', title: 'Assistants', text: 'Drafts and suggestions inside the screen the user already trusts — not a separate chatbot.' },
      { icon: 'search', title: 'Exception queues', text: 'Low-confidence items wait for a person. High-confidence items move.' },
      { icon: 'shield', title: 'Audit', text: 'What the model suggested, what a human confirmed — so the trail still exists.' },
    ],
  },
  gis: {
    audience: 'Land, infrastructure, agriculture and resource teams who decide in space, not only in tables.',
    problem: 'Assets live in a spreadsheet. The map is a PDF. Field teams cannot close the loop.',
    result: 'Capture, map, analyse and act — location as part of the operational picture.',
    before: 'Assets live in a sheet. The map is a PDF. The field cannot update either.',
    after: 'Capture in the field, see it on the map, act from the same picture as the office.',
    sceneCaption: 'A GIS workstation: satellite layers, asset pins and a field tablet closing the loop.',
    journey: [
      { n: '01', title: 'Capture', text: 'Field GPS, existing cadastre, drone or satellite layers.' },
      { n: '02', title: 'Map', text: 'Assets, boundaries and events on a shared spatial picture.' },
      { n: '03', title: 'Link', text: 'Join GIS to ERP, work orders or farmer records.' },
      { n: '04', title: 'Analyse', text: 'What is where, what has changed, what is at risk.' },
      { n: '05', title: 'Act', text: 'Planning, dispatch and compliance from the same map.' },
      { n: '06', title: 'Maintain', text: 'Layers stay current because the field can update them.' },
    ],
    capabilities: ['Field capture', 'Asset layers', 'Imagery', 'Work orders', 'Reporting', 'ERP link'],
    parts: [
      { icon: 'pin', title: 'Field capture', text: 'GPS, photos and forms from the people who are actually on the land.' },
      { icon: 'map', title: 'Asset layers', text: 'Boundaries, plant, pipes or plots on a shared map — not a marked-up printout.' },
      { icon: 'spark', title: 'Imagery', text: 'Satellite or drone layers when the question is what changed on the ground.' },
      { icon: 'clipboard', title: 'Work orders', text: 'Dispatch and completion from the same spatial picture as planning.' },
      { icon: 'invoice', title: 'Reporting', text: 'What is where, for leadership and for compliance, without redrawing the map.' },
      { icon: 'link', title: 'ERP link', text: 'Join location to stock, farmers or assets so the ledger and the map agree.' },
    ],
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
