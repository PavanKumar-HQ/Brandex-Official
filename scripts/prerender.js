import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.brandex.co.in';

const pages = [
  {
    path: 'about',
    title: 'About Brandex | Technology Leadership & Engineering Philosophy',
    description: 'Meet Brandex — a technology, digital transformation, and custom software company based in Bangalore, India. Founded by Sathvik Nagesh and Pavan Kumar S.',
    h1: 'About Brandex — Technology, Innovation & Business Growth',
    content: `
      <article>
        <h2>Who We Are</h2>
        <p>Brandex is an end-to-end Technology, Digital Transformation, Business Solutions and Infrastructure Company headquartered in Vijaynagar, Bangalore, India. We partner with fast-growing startups, established SMEs, and enterprise leaders to architect, build, automate, secure, and scale modern digital products.</p>
        
        <h2>Our Core Mission & Philosophy</h2>
        <p>We believe every line of code must directly serve a measurable business outcome. Technology should eliminate operational friction, unlock new revenue channels, and deliver undeniable competitive advantage. We take complete ownership of the product lifecycle — from initial product discovery and system architecture to high-throughput deployment and 24/7 managed support.</p>

        <h2>Founders & Leadership Team</h2>
        <ul>
          <li><strong>Sathvik Nagesh</strong> — Founder & Chief Technology Officer (CTO). Leads software architecture, AI agent research, and enterprise infrastructure engineering. (<a href="/team/sathvik-nagesh">Profile</a>)</li>
          <li><strong>Pavan Kumar S</strong> — Co-Founder & Chief Executive Officer (CEO). Leads company vision, strategic software delivery, institutional university partnerships, Geniusphere AI literacy workshops, and builder community operations. (<a href="/team/pavan-kumar">Profile</a>)</li>
        </ul>

        <h2>United Nations Sustainable Development Goals (SDG) Alignment</h2>
        <p>Brandex supports the United Nations 2030 Agenda for Sustainable Development, aligning its software engineering, educational programs, and community initiatives with:</p>
        <ul>
          <li><strong>SDG 4: Quality Education</strong> (Target 4.4, 4.7) — Hands-on AI literacy, prompt engineering, and collegiate coding workshops.</li>
          <li><strong>SDG 8: Decent Work & Economic Growth</strong> (Target 8.2, 8.6) — Campus Ambassador leadership, student developer mentorship, and builder incubation.</li>
          <li><strong>SDG 9: Industry, Innovation & Infrastructure</strong> (Target 9.5, 9.c) — High-performance enterprise software systems and open-source developer tooling.</li>
          <li><strong>SDG 10: Reduced Inequalities</strong> (Target 10.2) — Democratizing frontier technology education in tier-2 and tier-3 colleges across Karnataka.</li>
          <li><strong>SDG 17: Partnerships for the Goals</strong> (Target 17.16, 17.17) — Academic, school, and builder community partnerships.</li>
        </ul>
        <p><small>Compliance Disclaimer: Brandex supports the Sustainable Development Goals. The content of this website has not been approved by the United Nations and does not reflect the official views of the United Nations.</small></p>

        <h2>Why Ambitious Brands Choose Brandex</h2>
        <ul>
          <li><strong>Single Dedicated Partner:</strong> Full-stack software engineering, AI workflow automation, cloud infrastructure, cybersecurity hardening, and branding — all under one roof.</li>
          <li><strong>Zero-Trust Security:</strong> Security is engineered from day one, not bolted on after launch.</li>
          <li><strong>Transparent Engagement:</strong> Fixed milestone delivery, transparent pricing, and 100% source code / IP ownership for clients.</li>
          <li><strong>Dedicated Post-Launch Support:</strong> Comprehensive Annual Maintenance Contracts (AMCs) and proactive system monitoring.</li>
        </ul>

        <h2>Corporate Headquarters & Verified Location</h2>
        <p>Office Address: #121, 13th Main M.C. Layout, Vijaynagar, Bangalore - 560040, Karnataka, India.</p>
        <p>Direct Inquiries: <a href="mailto:team@brandex.co.in">team@brandex.co.in</a> | Telephone: +91 94809 44727</p>
      </article>
    `
  },
  {
    path: 'contact',
    title: 'Contact Brandex | Schedule Technical Consultation | Bangalore',
    description: 'Contact Brandex in Bangalore to discuss your custom software, web development, AI automation, or infrastructure project. Get a direct engineering consultation.',
    h1: 'Contact Brandex — Start Your Next Project',
    content: `
      <article>
        <h2>Connect with Our Engineering Team</h2>
        <p>Have an ambitious project or complex engineering challenge? Reach out to our Bangalore leadership team for a comprehensive technical consultation, architectural review, or project estimate.</p>

        <h2>Direct Contact Points</h2>
        <ul>
          <li><strong>Official Email:</strong> <a href="mailto:team@brandex.co.in">team@brandex.co.in</a></li>
          <li><strong>Direct Phone:</strong> +91 94809 44727</li>
          <li><strong>Business Inquiries:</strong> Response within 24 business hours.</li>
          <li><strong>Languages Spoken:</strong> English, Hindi, Kannada</li>
        </ul>

        <h2>Headquarters Location & Visiting</h2>
        <p>Brandex Labs Headquarters:<br>
        #121, 13th Main M.C. Layout, Vijaynagar,<br>
        Bangalore - 560040, Karnataka, India.<br>
        Geographic Coordinates: 12.9719° N, 77.5300° E</p>

        <h2>What We Can Help You Build</h2>
        <ul>
          <li>Custom SaaS Applications & Web Platforms</li>
          <li>High-Performance Corporate & E-commerce Websites</li>
          <li>Intelligent AI Agents & Workflow Automation Pipelines</li>
          <li>Cloud Migration & Infrastructure Optimization</li>
          <li>Cybersecurity Audits & Zero-Trust Architecture</li>
        </ul>
      </article>
    `
  },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy & Data Protection | Brandex',
    description: 'Learn how Brandex collects, processes, and protects client data, codebases, and digital assets in accordance with applicable data privacy standards.',
    h1: 'Brandex Privacy Policy & Data Protection',
    content: `
      <article>
        <p><em>Last updated: July 10, 2026.</em></p>
        <h2>1. Commitment to Privacy</h2>
        <p>At Brandex (https://www.brandex.co.in), we respect your privacy and are committed to safeguarding all personal and technical data you entrust to us. This Privacy Policy outlines how we collect, process, store, and protect your information.</p>

        <h2>2. Information We Collect</h2>
        <p>We collect information you explicitly provide when submitting consultation requests, contact forms, or entering into service contracts (including your name, corporate email address, phone number, and project specifications). We also record anonymous technical telemetry (browser type, device specifications, IP address, and load latencies) to improve performance and security.</p>

        <h2>3. Use of Personal & Technical Data</h2>
        <p>Information gathered is strictly utilized to:</p>
        <ul>
          <li>Provide, customize, and maintain software engineering and digital services.</li>
          <li>Communicate project milestones, technical deliverables, and support updates.</li>
          <li>Prevent security threats, unauthorized access, and fraudulent behavior.</li>
          <li>Comply with applicable Indian and international data protection laws.</li>
        </ul>
        <p>We do not sell, license, rent, or trade your personal information to third parties.</p>

        <h2>4. Data Security & Storage Standards</h2>
        <p>All sensitive client data and codebases are stored using enterprise encryption at rest and in transit, strict zero-trust role-based access controls, and multi-factor authentication protocols.</p>

        <h2>5. Contact & Data Officer</h2>
        <p>For any privacy inquiries, data deletion requests, or compliance audits, contact our Data Privacy team at <a href="mailto:team@brandex.co.in">team@brandex.co.in</a>.</p>
      </article>
    `
  },
  {
    path: 'terms-and-conditions',
    title: 'Terms & Conditions of Service | Brandex',
    description: 'Read the Terms and Conditions governing software engineering engagements, IP ownership, warranty, and web properties of Brandex.',
    h1: 'Terms and Conditions of Service',
    content: `
      <article>
        <h2>1. Agreement to Terms</h2>
        <p>By accessing https://www.brandex.co.in or contracting Brandex for software engineering, web development, AI automation, or IT infrastructure services, you agree to adhere to these Terms and Conditions.</p>

        <h2>2. Intellectual Property & Code Ownership</h2>
        <p>Unless explicitly stipulated in a Master Services Agreement (MSA), upon complete payment of all project milestones, clients retain 100% full intellectual property ownership of all custom software, codebases, designs, and digital assets produced by Brandex.</p>

        <h2>3. Warranty & Service Level Commitments</h2>
        <p>Brandex provides dedicated warranty periods for custom software deployments to ensure bug-free operation and adherence to agreed technical specifications.</p>

        <h2>4. Contact Information</h2>
        <p>For contractual or legal inquiries: <a href="mailto:team@brandex.co.in">team@brandex.co.in</a>.</p>
      </article>
    `
  },
  {
    path: 'services',
    title: 'Custom Software, Web Development & AI Automation Services | Brandex',
    description: 'Explore Brandex engineering capabilities: custom software development, high-performance web platforms, intelligent AI automation pipelines, and cybersecurity consulting.',
    h1: 'End-to-End Technology & Digital Solutions',
    content: `
      <article>
        <h2>Comprehensive Engineering Capabilities</h2>
        <p>Brandex provides comprehensive technology services that take your business from vision to scalable production:</p>
        <ul>
          <li><strong><a href="/services/software-development">Custom Software Development:</a></strong> Full-stack applications, scalable APIs, and bespoke ERP/CRM systems.</li>
          <li><strong><a href="/services/website-development">Website Development:</a></strong> High-performance, SEO-maximized web experiences built for high conversion.</li>
          <li><strong><a href="/services/ai-automation">AI & Workflow Automation:</a></strong> Autonomous agents, LLM integrations, and robotic process automation.</li>
          <li><strong><a href="/services/cybersecurity">Cybersecurity:</a></strong> Infrastructure audits, penetration testing, and zero-trust security architecture.</li>
        </ul>
      </article>
    `
  },
  {
    path: 'projects',
    title: 'Projects & Case Studies | Custom Software & Web Platforms | Brandex',
    description: 'Explore custom software, enterprise CRMs, business automation platforms, and high-performance web applications built by Brandex in Bangalore.',
    h1: 'Projects & Case Studies — Production Track Record',
    content: `
      <article>
        <h2>Enterprise Software, CRMs & Web Applications</h2>
        <p>Explore how Brandex designs, builds, and deploys custom CRMs, automation systems, and high-conversion web applications:</p>
        <ul>
          <li><strong><a href="/products/travel-crm">Travel CRM Platform:</a></strong> Custom Travel CRM and automated itinerary management software featuring Word/PDF document parsing, travel directory knowledge bases, dynamic QR codes, and vector PDF generation.</li>
          <li><strong><a href="/case-studies/the-man-wanders-globe">The Man Wanders Globe:</a></strong> Luxury bespoke travel portal with curated tour packages and fast booking workflows.</li>
          <li><strong><a href="/case-studies/srushti-publications">Srushti Publications:</a></strong> High-throughput e-commerce publishing architecture with instant search and automated invoicing.</li>
          <li><strong><a href="/case-studies/geniusphere">GeniuSphere:</a></strong> Immersive 3D WebGL Learning Management System.</li>
          <li><strong><a href="/case-studies/vignan-public-school">Vignan Public School:</a></strong> Unified digital campus and academic portal.</li>
          <li><strong><a href="/case-studies/qshala-quiz-league">Qshala Quiz League:</a></strong> Real-time gamified event platform.</li>
        </ul>
      </article>
    `
  },
  {
    path: 'projects/travel-crm',
    title: 'Travel CRM & Itinerary Automation Software | Brandex',
    description: 'Explore the custom Travel CRM built by Brandex for travel agencies and tour operators to manage clients, quotations, itineraries, travel directories, and automated PDF generation.',
    h1: 'A Travel CRM Built Around How Travel Businesses Actually Work',
    content: `
      <article>
        <h2>Custom Travel CRM &amp; Itinerary Automation Software</h2>
        <p>Brandex engineered a custom Travel CRM and itinerary automation platform for travel agencies, tour operators, and destination management companies (DMCs). It turns existing Word or PDF itineraries into structured, branded, and editable travel workflows automatically.</p>

        <h3>Core Capabilities</h3>
        <ul>
          <li><strong>Document-to-Itinerary Parsing:</strong> Upload Word (.docx) or PDF itineraries to extract destinations, hotel stays, daily activities, and pricing into modular, editable fields.</li>
          <li><strong>Customizable Itinerary Builder:</strong> Assemble day-by-day trip schedules, transport details, meal inclusions, and dynamic group pricing.</li>
          <li><strong>Reusable Travel Directory:</strong> Maintain a centralized catalog of hotels, destinations, sightseeing spots, and activities to reuse across itineraries without re-typing.</li>
          <li><strong>Quotation &amp; Lead Management:</strong> Connect customer enquiries, quotations, lead conversion, confirmed trips, and revenue tracking in one system.</li>
          <li><strong>Vector PDF Generation:</strong> Automated high-resolution, structured PDF output with selectable typography, embedded dynamic QR codes, and clickable WhatsApp communication buttons.</li>
          <li><strong>Client 360 &amp; Reference Tracking:</strong> Single customer view with unique reference IDs (#TRV-8941) for every quotation and document.</li>
        </ul>

        <h3>Transparent Agency Pricing</h3>
        <p><strong>Early Adopter Launch Plan:</strong> <del>₹2,000/month</del> <strong>₹1,500/month</strong> (~₹50/day). Includes unlimited itineraries, AI document auto-parsing from Word/PDF, high-resolution vector PDF generator, master travel directory, and full sales pipeline with zero setup fees, monthly billing, and free migration assistance.</p>
        <p><strong>Custom Enterprise &amp; DMC Network:</strong> Tailored architecture, private cloud VPC deployment, GDS/flight API integrations, and multi-branch role permissions.</p>

        <h3>Frequently Asked Questions</h3>
        <dl>
          <dt><strong>What is this Travel CRM?</strong></dt>
          <dd>A custom software platform engineered by Brandex for travel agencies and tour operators to manage clients, quotations, itineraries, travel data, and automated travel documents from one centralized system.</dd>
          <dt><strong>How much does the Travel CRM cost?</strong></dt>
          <dd>The standard agency suite is regular ₹2,000/month, currently discounted to an early adopter launch offer of ₹1,500/month (₹50/day) with zero setup fees, unlimited itineraries, and monthly billing.</dd>
          <dt><strong>What can the Travel CRM do?</strong></dt>
          <dd>It manages clients and quotations, converts quotations into leads, maintains travel directories of hotels and activities, creates and customizes day-by-day itineraries, imports information from existing documents, generates professional vector PDFs, and includes interactive elements such as WhatsApp links and dynamic QR codes.</dd>
          <dt><strong>Who is it for?</strong></dt>
          <dd>Travel agencies, tour operators, destination management companies, and luxury travel curators looking to eliminate disconnected spreadsheets, manual Word templates, and unorganized WhatsApp communications.</dd>
        </dl>

        <p><a href="/contact?service=Custom%20Software">Claim ₹1,500/mo Launch Offer with Brandex</a> | <a href="/projects">Explore all projects</a></p>
      </article>
    `
  },
  {
    path: 'products/invoice-builder',
    title: 'Invoice Software & Billing Tool — ₹6,000 Lifetime | Brandex',
    description: 'Create professional invoices, manage inventory, track revenue and organize customers with Brandex Invoice Builder. Get lifetime access for ₹6,000 with zero subscriptions.',
    h1: 'Invoice Software Built for Businesses That Want More Than Just Invoices',
    content: `
      <article>
        <h2>Professional Invoicing, Real-Time Billing &amp; Inventory Management</h2>
        <p>Brandex Invoice Builder is a complete software application engineered for small businesses, agencies, and enterprises to generate professional invoices, manage stock inventory, track revenue cashflow, and maintain customer accounts — with zero recurring subscriptions for a one-time lifetime license of ₹6,000.</p>

        <h3>Core Capabilities</h3>
        <ul>
          <li><strong>Real-Time Invoicing:</strong> Create, edit, and preview invoices immediately with automated tax, GST (CGST/SGST/IGST), and discount math.</li>
          <li><strong>12+ Invoice Templates:</strong> Switch effortlessly between Minimalist, Corporate Blue, Modern Dark Slate, and Classic Bordered layouts.</li>
          <li><strong>Inventory &amp; Stock Sync:</strong> Maintain items, unit rates, and live stock quantities that update automatically as items are invoiced.</li>
          <li><strong>Client &amp; Customer CRM:</strong> Store billing addresses, tax IDs, and complete transaction histories.</li>
          <li><strong>Monthly Revenue Dashboard:</strong> Track paid, pending, and overdue transactions to maintain business cashflow visibility.</li>
          <li><strong>Vector PDF Output:</strong> High-resolution print-ready documents with selectable text, bank details, and dynamic UPI QR payment codes.</li>
        </ul>

        <h3>Transparent Pricing</h3>
        <p><strong>Standard Lifetime License:</strong> ₹6,000 (One-time payment, zero recurring subscription fees, unlimited invoices, full product features).</p>
        <p><strong>Custom Development &amp; Integrations:</strong> Tailored invoice designs, payment gateway integrations (Razorpay, Stripe), custom ERP/Tally sync, or customer self-service portals quoted separately based on requirements.</p>

        <p><a href="/contact?service=Invoice%20Builder%20Lifetime">Get Invoice Builder (₹6,000 Lifetime)</a> | <a href="/projects">Explore all projects</a></p>
      </article>
    `
  },
  {
    path: 'projects/invoice-builder',
    title: 'Invoice Software & Billing Tool — ₹6,000 Lifetime | Brandex',
    description: 'Create professional invoices, manage inventory, track revenue and organize customers with Brandex Invoice Builder. Get lifetime access for ₹6,000 with zero subscriptions.',
    h1: 'Invoice Software Built for Businesses That Want More Than Just Invoices',
    content: `
      <article>
        <h2>Professional Invoicing, Real-Time Billing &amp; Inventory Management</h2>
        <p>Brandex Invoice Builder is a complete software application engineered for small businesses, agencies, and enterprises to generate professional invoices, manage stock inventory, track revenue cashflow, and maintain customer accounts — with zero recurring subscriptions for a one-time lifetime license of ₹6,000.</p>

        <p><a href="/products/invoice-builder">View Product Details &amp; Purchase</a></p>
      </article>
    `
  },
  {
    path: 'community',
    title: 'Brandex Community — Builders, Founders & Creators Ecosystem',
    description: 'Join the Brandex Community: an ecosystem for builders, developers, founders, and students in Bangalore exploring modern technology, software, startups, and open source.',
    h1: 'Build. Learn. Share. Repeat. — Brandex Community',
    content: `
      <article>
        <h2>An Ecosystem for Builders, Founders &amp; Creators</h2>
        <p>Brandex Community is an open ecosystem for developers, designers, entrepreneurs, and students exploring technology, startups, digital products, and practical software engineering.</p>
        
        <h3>Core Initiatives</h3>
        <ul>
          <li><strong>Open Source:</strong> Production-grade templates, CLI tools, UI components, and software experiments.</li>
          <li><strong>Bangalore Builder Meetups:</strong> In-person developer sessions, product teardowns, and architecture discussions.</li>
          <li><strong>Brandex Hackathons:</strong> 48-hour build sprints solving real problems with mentorship from senior engineers.</li>
          <li><strong>Builder Stories:</strong> Real journeys and technical teardowns from builders across the ecosystem.</li>
          <li><strong>Practical Bootcamps:</strong> Project-based cohorts bridging theory and real-world software engineering.</li>
        </ul>

        <p><a href="https://discord.gg/brandex">Join Brandex Discord</a> | <a href="/education">Explore Education &amp; Workshops</a></p>
      </article>
    `
  },
  {
    path: 'community/events',
    title: 'Community Events & Meetups | Brandex Ecosystem Bangalore',
    description: 'Explore upcoming builder meetups, 48-hour hackathons, and technical teardowns organized by Brandex Community in Bangalore and online.',
    h1: 'Meetups, Hackathons &amp; Build Sessions',
    content: `
      <article>
        <h2>Connect, Build, and Ship Together</h2>
        <p>Join in-person and online events hosted by Brandex Community in Bangalore, from technical architecture teardowns to rapid weekend hackathons.</p>
        <p><a href="https://discord.gg/brandex">RSVP on Discord</a> | <a href="/community">Back to Community Hub</a></p>
      </article>
    `
  },
  {
    path: 'community/stories',
    title: 'Builder Stories & Technical Teardowns | Brandex Community',
    description: 'Read technical breakdowns, product engineering case studies, and architecture teardowns written by builders in the Brandex ecosystem.',
    h1: 'Builder Stories &amp; System Teardowns',
    content: `
      <article>
        <h2>Real Technical Decisions &amp; Post-Mortems</h2>
        <p>Explore engineering architectures, case studies, and technical breakthroughs behind software built within the Brandex ecosystem.</p>
        <p><a href="/community">Back to Community Hub</a></p>
      </article>
    `
  },
  {
    path: 'education',
    title: 'Brandex Education — Practical Technology Workshops for Schools & Colleges',
    description: 'Brandex Education partners with schools, universities, and student communities to deliver hands-on workshops in AI, cybersecurity, web development, and digital skills.',
    h1: 'Technology education built for the real world.',
    content: `
      <article>
        <h2>Hands-On Technology Education &amp; Institutional Training</h2>
        <p>Brandex Education works with schools, colleges, universities, and student communities to deliver practical workshops, bootcamps, and campus programs.</p>

        <h3>Core Programs</h3>
        <ul>
          <li><strong>AI &amp; Modern Productivity:</strong> LLMs, prompt engineering, AI research workflows, and responsible automation.</li>
          <li><strong>Cybersecurity &amp; Digital Safety:</strong> Threat awareness, online security hygiene, network safety, and ethical concepts.</li>
          <li><strong>Finance &amp; Digital Economy:</strong> Payment gateways, digital accounting, and tech business models.</li>
          <li><strong>Web &amp; Software Engineering:</strong> Full-stack development with React, TypeScript, Git, and deployment.</li>
          <li><strong>Product Thinking &amp; Startups:</strong> Fast MVP building, validation, and building in public.</li>
        </ul>

        <p><a href="/education#inquiry">Request a Workshop for Your Institution</a> | <a href="/education/campus-ambassador">Join Campus Ambassador Program</a></p>
      </article>
    `
  },
  {
    path: 'education/workshops',
    title: 'Technology Workshops for Schools & Colleges | Brandex Education',
    description: 'Explore in-depth curriculums for practical technology workshops across AI, cybersecurity, full-stack software development, and digital skills.',
    h1: 'Institutional Workshop Curriculums',
    content: `
      <article>
        <h2>Practical Curriculums Led by Practicing Engineers</h2>
        <p>Comprehensive syllabi for half-day, full-day, and multi-day workshops conducted across Karnataka and online nationwide.</p>
        <p><a href="/education#inquiry">Book a Workshop</a></p>
      </article>
    `
  },
  {
    path: 'education/campus-ambassador',
    title: 'Brandex Campus Ambassador Program — Student Tech Leadership',
    description: 'Become a Brandex Campus Ambassador. Lead developer workshops, build student tech initiatives, and gain hands-on mentorship from software engineers.',
    h1: 'Brandex Campus Ambassador Program',
    content: `
      <article>
        <h2>Student Community Leadership &amp; Mentorship</h2>
        <p>Lead student tech initiatives, host build sessions, and gain direct mentorship from Brandex engineers and founders.</p>
        <p><a href="/education/campus-ambassador">Apply for Campus Ambassador</a></p>
      </article>
    `
  },
  {
    path: 'case-studies',
    title: 'Client Case Studies & Engineering Results | Brandex',
    description: 'Read verified client case studies and technical outcomes delivered by Brandex across custom software, e-commerce, web applications, and digital platforms.',
    h1: 'Case Studies & Production Track Record',
    content: `
      <article>
        <h2>Measurable Impact Across Industries</h2>
        <p>See how Brandex helps brands achieve exceptional growth, operational efficiency, and performance:</p>
        <ul>
          <li><strong><a href="/products/travel-crm">Travel CRM Platform:</a></strong> Custom Travel CRM with itinerary automation, document parsing, and dynamic QR PDFs.</li>
          <li><strong>The Man Wanders Globe:</strong> Luxury travel booking platform with sub-second speeds and custom booking workflows.</li>
          <li><strong>Vignan Public School:</strong> Comprehensive institutional management platform and parent-teacher portal.</li>
          <li><strong>Vignan Tutorials:</strong> Interactive student learning management system and exam portal.</li>
          <li><strong>Srushti Publications:</strong> Digital publishing and e-commerce distribution engine.</li>
          <li><strong>Geniusphere:</strong> EdTech learning platform built for scale.</li>
          <li><strong>Qshala Quiz League:</strong> Live interactive quiz application handling concurrent real-time participants.</li>
        </ul>
      </article>
    `
  },
  {
    path: 'industries',
    title: 'Industry-Specific Software & Digital Solutions | Brandex',
    description: 'Tailored software, digital transformation, and business automation solutions for 22+ industries including Healthcare, Retail, Education, Real Estate, and Manufacturing.',
    h1: 'Technology Solutions Built for Every Industry',
    content: `
      <article>
        <h2>22+ Industries Served</h2>
        <p>Brandex builds tailored technology solutions for businesses across all major industries:</p>
        <ul>
          <li><strong>Startups:</strong> MVP development, branding, digital presence, and scalable infrastructure.</li>
          <li><strong>MSMEs:</strong> ERP, website, digital marketing, and office setup solutions.</li>
          <li><strong>Enterprises:</strong> Enterprise software, cybersecurity, cloud infrastructure, and AI systems.</li>
          <li><strong>Healthcare:</strong> Hospital management systems, patient portals, appointment booking, and billing.</li>
          <li><strong>Education:</strong> School ERP, college management, LMS, admissions automation, student portals.</li>
          <li><strong>Retail:</strong> POS software, e-commerce platforms, inventory, billing, and digital marketing.</li>
          <li><strong>Restaurants & F&B:</strong> Online ordering, kitchen display systems, billing, and WhatsApp bots.</li>
          <li><strong>Hotels & Hospitality:</strong> Booking systems, property management software, and smart rooms.</li>
          <li><strong>Real Estate:</strong> Property listing platforms, agent CRM, lead management, and digital marketing.</li>
          <li><strong>Manufacturing:</strong> ERP, inventory management, IoT, and business automation.</li>
          <li><strong>Logistics:</strong> Fleet management, route optimization, delivery tracking, and customer alerts.</li>
          <li><strong>Finance:</strong> Fintech apps, loan management, payment portals, and compliance systems.</li>
        </ul>
      </article>
    `
  },
  {
    path: 'faq',
    title: 'Frequently Asked Questions | Services, Pricing & Process | Brandex',
    description: 'Find clear answers to common questions about Brandex custom software engineering, web development, pricing models, delivery timelines, and support.',
    h1: 'Frequently Asked Questions — Brandex',
    content: `
      <article>
        <h2>General Questions</h2>
        <p>Brandex is an end-to-end Technology, Digital Transformation, Business Solutions, and Infrastructure Company based in Bangalore, India. We help businesses build, automate, secure, design, modernize, and scale.</p>
        
        <h2>Services</h2>
        <p>We offer Custom Software Development, Website Development, AI & Workflow Automation, Cybersecurity, Branding, Digital Marketing, Office Setup, Solar, HVAC, and more.</p>

        <h2>Location</h2>
        <p>We are headquartered at #121, 13th Main M.C. Layout, Vijaynagar, Bangalore - 560040, Karnataka, India. We serve clients across India and internationally.</p>

        <h2>Contact</h2>
        <p>Email: <a href="mailto:team@brandex.co.in">team@brandex.co.in</a> | Phone: +91 94809 44727</p>
        <p><a href="/contact">Get a Free Consultation</a></p>
      </article>
    `
  },
  {
    path: 'solutions',
    title: 'Enterprise Business Solutions & Digital Infrastructure | Brandex',
    description: 'Explore 80+ integrated business solutions by Brandex: custom ERPs, CRM systems, e-commerce, WhatsApp automation, CCTV, networking, and digital infrastructure.',
    h1: 'Complete Business Solutions by Brandex',
    content: `
      <article>
        <h2>80+ Business Solutions</h2>
        <p>Brandex provides comprehensive business solutions across Digital, Physical Infrastructure, and AI categories:</p>

        <h3>Digital Solutions</h3>
        <ul>
          <li>Business Website — Professional websites designed to generate leads and establish credibility.</li>
          <li>E-Commerce Platform — Full-featured online stores with payment gateway integration.</li>
          <li>CRM Solution — Capture leads, manage customers, and increase sales.</li>
          <li>ERP Platform — Manage operations, automate processes, generate reports.</li>
          <li>AI Chatbot — 24/7 intelligent customer support.</li>
          <li>WhatsApp Automation — Automated customer communication via WhatsApp.</li>
        </ul>

        <h3>Physical Infrastructure (Bangalore)</h3>
        <ul>
          <li>CCTV Installation — IP camera systems for offices, warehouses, and retail.</li>
          <li>Solar Panel Installation — Reduce electricity costs with solar energy.</li>
          <li>HVAC Systems — Air conditioning and ventilation for offices.</li>
          <li>Office Interior Design — Complete office space planning and execution.</li>
          <li>IT Networking — Structured cabling, WiFi, and network infrastructure.</li>
        </ul>
      </article>
    `
  },
  {
    path: 'resources',
    title: 'Resources Hub | Guides, Case Studies & Tech Insights | Brandex',
    description: 'Access technical guides, business growth insights, engineering playbooks, and case studies from the Brandex team in Bangalore.',
    h1: 'Brandex Resources — Knowledge That Grows Your Business',
    content: `
      <article>
        <h2>Free Business & Technology Resources</h2>
        <p>Access insights, guides, and case studies from the Brandex team to help you make smarter business and technology decisions:</p>
        <ul>
          <li><a href="/blog">Blog</a> — In-depth articles on technology, digital transformation, and business growth.</li>
          <li><a href="/case-studies">Case Studies</a> — Real projects, real outcomes from Brandex clients.</li>
          <li><a href="/faq">FAQs</a> — Answers to common questions about services, pricing, and processes.</li>
        </ul>
        <p><a href="/contact">Contact us</a> for customized technology advice.</p>
      </article>
    `
  },
  {
    path: 'careers',
    title: 'Careers at Brandex | Business Development, Social Media & Videographer Roles',
    description: 'Join Brandex in Bangalore. Open roles for Business Development & Lead Generation Intern, Social Media Management Intern, and On-Site Videographer with competitive compensation.',
    h1: 'Careers at Brandex — Build Your Future With Us',
    content: `
      <article>
        <h2>Join Our Growing Bangalore Team</h2>
        <p>We are expanding our growth and creative media team in Bangalore. Competitive compensation and stipend are provided for all positions.</p>
        <h3>Active Open Positions</h3>
        <ul>
          <li><strong>Business Development and Lead Generation Intern</strong> (Bangalore / Hybrid) — B2B lead generation, client prospecting, CRM pipelines, and outbound sales strategy.</li>
          <li><strong>Social Media Management Intern</strong> (Bangalore / Hybrid) — Content strategy, LinkedIn and Instagram growth, copywriting, and tech brand community building.</li>
          <li><strong>On-Site Videographer</strong> (Bangalore - On-Site) — Cinematography, reels/shorts editing, client story captures, and visual storytelling.</li>
        </ul>
        <p>Apply directly on our website or visit our <a href="https://www.linkedin.com/company/brandex-lab">LinkedIn page</a>.</p>
      </article>
    `
  },
  {
    path: 'blog',
    title: 'Brandex Engineering Blog | Software Architecture, AI & Tech Strategy',
    description: 'Deep technical essays, engineering playbooks, and strategic growth blueprints for modern digital brands and ambitious founders.',
    h1: 'Brandex Engineering & Strategy Blog',
    content: `
      <article>
        <h2>Technical Insights & Strategic Playbooks</h2>
        <p>Read in-depth research, architectural blueprints, and growth analyses by the Brandex engineering team.</p>
        <ul>
          <li><a href="/blog/how-to-choose-erp-system-india-2026">Custom ERP vs Off-The-Shelf SaaS in India 2026</a></li>
          <li><a href="/blog/whatsapp-business-api-automation-guide">WhatsApp Business API Automation Playbook</a></li>
          <li><a href="/blog/website-redesign-checklist-conversion-audit">Website Redesign & Conversion Audit Checklist</a></li>
          <li><a href="/blog/cybersecurity-checklist-sme-india-dpdp">India DPDP Act SME Cybersecurity Checklist</a></li>
          <li><a href="/blog/core-web-vitals-inp-mastery">Core Web Vitals INP Optimization Blueprint</a></li>
        </ul>
      </article>
    `
  },
  {
    path: 'services/software-development',
    title: 'Custom Software Development Company | Brandex Bangalore',
    description: 'Bespoke custom software development company in Bangalore. We engineer custom CRMs, enterprise ERPs, cloud SaaS applications, and automated workflows with 100% IP ownership.',
    h1: 'Custom Software Development — Brandex',
    content: `
      <article>
        <h2>Bespoke Software Engineering</h2>
        <p>Brandex builds custom software solutions tailored to your exact business requirements — from simple web applications to complex enterprise systems:</p>
        <ul>
          <li>Full-stack web application development (React, Next.js, Node.js, Python)</li>
          <li>Scalable RESTful API and microservices architecture</li>
          <li>Enterprise ERP and CRM systems</li>
          <li>SaaS platform development with multi-tenant architecture</li>
          <li>Mobile application development (iOS & Android)</li>
          <li>Database design and optimization (PostgreSQL, MySQL, MongoDB)</li>
          <li>Third-party API integrations and payment gateway setup</li>
          <li>Annual Maintenance Contracts (AMC) and post-launch support</li>
        </ul>
        <p><a href="/contact">Get a free consultation</a> for your software project.</p>
      </article>
    `
  },
  {
    path: 'services/website-development',
    title: 'High-Performance Website Development Services | Brandex',
    description: 'Custom website development company in Bangalore. We build high-speed corporate websites, headless e-commerce platforms, and web portals optimized for SEO and conversion.',
    h1: 'Website Development — Brandex',
    content: `
      <article>
        <h2>High-Performance Websites Built to Convert</h2>
        <p>Brandex designs and develops websites that establish credibility, drive leads, and rank on search engines:</p>
        <ul>
          <li>Corporate and business websites optimized for SEO and Core Web Vitals</li>
          <li>E-commerce platforms with product management and payment integration</li>
          <li>Landing pages optimized for conversion</li>
          <li>Portfolio and professional websites</li>
          <li>Real estate listing portals</li>
          <li>Educational and institutional websites</li>
          <li>Responsive, mobile-first design</li>
          <li>WordPress, Shopify, and custom-built solutions</li>
        </ul>
        <p><a href="/contact">Start your website project</a> with Brandex today.</p>
      </article>
    `
  },
  {
    path: 'services/ai-automation',
    title: 'AI & Workflow Automation Services | Custom Agents & LLMs | Brandex',
    description: 'Custom AI agent development, workflow automation pipelines, WhatsApp automation, and LLM integrations in Bangalore to eliminate manual tasks and scale operations.',
    h1: 'AI & Workflow Automation — Brandex',
    content: `
      <article>
        <h2>Intelligent Automation for Modern Businesses</h2>
        <p>Brandex builds AI-powered systems and automation pipelines that save time, reduce errors, and scale your operations:</p>
        <ul>
          <li>Custom AI agents and LLM integrations (GPT-4, Gemini, Claude)</li>
          <li>WhatsApp and chatbot automation</li>
          <li>Business process automation (BPA) and robotic process automation (RPA)</li>
          <li>RAG (Retrieval-Augmented Generation) systems for knowledge management</li>
          <li>CRM and ERP workflow automation</li>
          <li>Email, notification, and reporting automations</li>
          <li>Data pipeline automation and ETL processes</li>
          <li>n8n, Make (Integromat), and custom automation frameworks</li>
        </ul>
        <p><a href="/contact">Automate your business</a> with Brandex today.</p>
      </article>
    `
  },
  {
    path: 'services/cybersecurity',
    title: 'Cybersecurity Services & Zero-Trust Architecture | Brandex',
    description: 'Enterprise cybersecurity services in Bangalore: penetration testing, vulnerability assessments, zero-trust network access, and cloud infrastructure hardening.',
    h1: 'Cybersecurity — Brandex',
    content: `
      <article>
        <h2>Zero-Trust Security for Modern Businesses</h2>
        <p>Brandex implements security-first architectures to protect your business from modern cyber threats:</p>
        <ul>
          <li>Comprehensive security audits and vulnerability assessments</li>
          <li>Penetration testing and red team exercises</li>
          <li>Zero-trust network access (ZTNA) architecture</li>
          <li>CCTV and physical access control (Bangalore)</li>
          <li>Cloud security hardening (AWS, GCP, Azure)</li>
          <li>SSL certificate management and HTTPS enforcement</li>
          <li>Biometric and access control systems</li>
          <li>Data encryption and compliance (GDPR, ISO 27001 readiness)</li>
          <li>Security monitoring and incident response</li>
        </ul>
        <p><a href="/contact">Secure your business</a> with Brandex today.</p>
      </article>
    `
  },
  {
    path: 'projects',
    title: 'Projects, Products & Case Studies | Brandex',
    description: 'Explore software products, custom CRMs, automation platforms, and web applications built by Brandex in Bangalore.',
    h1: 'Software Products & Projects — Brandex',
    content: `
      <article>
        <h2>Software Products Ready for Sale</h2>
        <ul>
          <li><a href="/products/travel-crm">Travel CRM & Itinerary Software</a> — ₹1,500/mo launch offer (Regular ₹2,000/mo). Complete travel agency operations, Word/PDF document auto-parsing, and vector PDF generator.</li>
          <li><a href="/products/invoice-builder">Brandex Invoice Builder</a> — ₹6,000 lifetime license (Regular ₹8,000). Real-time billing, inventory sync, and revenue dashboards with zero monthly fees.</li>
        </ul>
      </article>
    `
  },
  {
    path: 'products/travel-crm',
    title: 'Travel CRM & Itinerary Software — ₹1,500/mo (Regular ₹2,000) | Brandex',
    description: 'All-in-one Travel CRM and Itinerary Automation Platform for travel agencies and tour operators. Launch Offer: ₹1,500/mo (Regular ₹2,000/mo) with zero setup fees.',
    h1: 'Brandex Travel CRM & Itinerary Software',
    content: `
      <article>
        <h2>A Complete Travel Operations & Itinerary Platform</h2>
        <p>Manage enquiries, quotations, clients, itineraries, travel directories, and trip documents from one unified system. Turn Word and PDF itineraries into structured, editable travel documents automatically.</p>
        <p><strong>Pricing:</strong> Regular ₹2,000/month, currently discounted to Launch Offer ₹1,500/month (Save ₹500/mo • ₹50/day) with zero setup fees and free file migration.</p>
        <p><a href="/contact?service=Travel%20CRM%20Standard">Get Travel CRM</a> or book a live product demo.</p>
      </article>
    `
  },
  {
    path: 'projects/travel-crm',
    title: 'Travel CRM & Itinerary Software — ₹1,500/mo (Regular ₹2,000) | Brandex',
    description: 'All-in-one Travel CRM and Itinerary Automation Platform for travel agencies and tour operators. Launch Offer: ₹1,500/mo (Regular ₹2,000/mo) with zero setup fees.',
    h1: 'Brandex Travel CRM & Itinerary Software',
    content: `
      <article>
        <h2>A Complete Travel Operations & Itinerary Platform</h2>
        <p>Manage enquiries, quotations, clients, itineraries, travel directories, and trip documents from one unified system. Turn Word and PDF itineraries into structured, editable travel documents automatically.</p>
        <p><strong>Pricing:</strong> Regular ₹2,000/month, currently discounted to Launch Offer ₹1,500/month (Save ₹500/mo • ₹50/day) with zero setup fees and free file migration.</p>
        <p><a href="/contact?service=Travel%20CRM%20Standard">Get Travel CRM</a> or book a live product demo.</p>
      </article>
    `
  },
  {
    path: 'products/invoice-builder',
    title: 'Invoice Software & Billing Tool — ₹6,000 Lifetime (Regular ₹8,000) | Brandex',
    description: 'Create professional invoices, manage inventory, track revenue and organize customers with Brandex Invoice Builder. Launch offer: ₹6,000 lifetime access (Regular ₹8,000) with zero subscriptions.',
    h1: 'Brandex Invoice Builder — Billing & Inventory Software',
    content: `
      <article>
        <h2>Real-Time Invoicing & Inventory Management</h2>
        <p>Create professional invoices in real time, manage inventory, track revenue, and organize your entire billing workflow from one unified system — without recurring monthly subscriptions.</p>
        <p><strong>Pricing:</strong> Regular ₹8,000, currently on Launch Offer at ₹6,000 for a lifetime license (Save ₹2,000 / 25% OFF). Pay once, own forever.</p>
        <p><a href="/contact?service=Invoice%20Builder%20Lifetime">Get Lifetime License (₹6,000)</a> or request bespoke customization.</p>
      </article>
    `
  },
  {
    path: 'products',
    title: 'Software Products, SaaS Tools & Lifetime Licenses | Brandex',
    description: 'Explore ready-to-buy software products by Brandex: Travel CRM (₹1,500/mo) and Invoice Builder (₹6,000 Lifetime). Streamline operations with dedicated business software.',
    h1: 'Commercial Software Products by Brandex',
    content: `
      <article>
        <h2>Software Built to Run & Scale Your Business</h2>
        <p>Explore commercial software products developed and maintained by Brandex in Bangalore. Available via flexible monthly subscriptions or one-time lifetime licenses with zero recurring fees.</p>
        <ul>
          <li><strong><a href="/products/travel-crm">Brandex Travel CRM:</a></strong> ₹1,500/month (Regular ₹2,000/mo). All-in-one travel agency operations, Word/PDF itinerary auto-parsing, and quotation management.</li>
          <li><strong><a href="/products/invoice-builder">Brandex Invoice Builder:</a></strong> ₹6,000 Lifetime (Regular ₹8,000). Real-time invoicing, stock inventory synchronization, and revenue analytics.</li>
        </ul>
        <p><a href="/case-studies">Explore Custom Client Case Studies</a> | <a href="/contact">Contact Sales</a></p>
      </article>
    `
  },
  {
    path: 'community',
    title: 'Brandex Community — Builders, Founders & Creators Ecosystem',
    description: 'Join Brandex Community: an ecosystem for builders, founders, and creators exploring AI, software engineering, cybersecurity, open source, and product startups.',
    h1: 'Brandex Community — Build. Learn. Share. Repeat.',
    content: `
      <article>
        <h2>A Community for Builders, Founders and Creators</h2>
        <p>Brandex Community is an ecosystem for people who are building things, learning technology, starting companies, creating products, and sharing what they learn.</p>
        <p>Explore Open Source initiatives, Builder Stories, developer meetups, hackathons, and practical bootcamps. Join the official Brandex Discord to collaborate.</p>
        <p><a href="https://discord.gg/brandex">Join Brandex Discord</a> | <a href="/community/events">Upcoming Events</a> | <a href="/community/stories">Builder Stories</a></p>
      </article>
    `
  },
  {
    path: 'community/events',
    title: 'Community Events, Meetups & Hackathons | Brandex Community',
    description: 'Explore upcoming and past Brandex meetups, developer hackathons, technical workshops, and builder teardowns.',
    h1: 'Brandex Community Events & Hackathons',
    content: `
      <article>
        <h2>Upcoming & Recent Ecosystem Gatherings</h2>
        <p>Participate in hands-on hackathons, technical architecture sessions, and founder meetups hosted across Bangalore and online.</p>
        <p><a href="https://discord.gg/brandex">Register for Events via Discord</a></p>
      </article>
    `
  },
  {
    path: 'community/stories',
    title: 'Builder Stories & Product Teardowns | Brandex Community',
    description: 'Read in-depth builder journeys, open-source case studies, and engineering breakdowns from founders and creators inside the Brandex ecosystem.',
    h1: 'Builder Stories & Engineering Teardowns',
    content: `
      <article>
        <h2>Real Stories from Real Builders</h2>
        <p>Explore technical deep-dives and founder journeys on high-throughput microservices, local AI agents, automated billing pipelines, and zero-trust deployments.</p>
      </article>
    `
  },
  {
    path: 'education',
    title: 'Brandex Education — Practical Technology Workshops for Schools & Colleges',
    description: 'Brandex Education delivers hands-on, industry-tested technology workshops, bootcamps, and campus programs in AI, Cybersecurity, Web Engineering, and Digital Skills.',
    h1: 'Brandex Education — Technology Built for the Real World',
    content: `
      <article>
        <h2>Helping Students Learn Technology Beyond the Classroom</h2>
        <p>We collaborate with schools, engineering colleges, universities, and student communities to deliver hands-on, practical programs.</p>
        <h2>Workshops & Programs</h2>
        <ul>
          <li>AI & Productivity Tools for Academic & Career Acceleration</li>
          <li>Applied Cybersecurity, Defensive Hardening & Ethical Hacking</li>
          <li>Modern Web Development & Production Software Engineering</li>
          <li>Personal Finance, Digital Operations & Tech Entrepreneurship</li>
        </ul>
        <p><a href="/education/workshops">View Workshop Catalog</a> | <a href="/education/campus-ambassador">Campus Ambassador Program</a> | <a href="/education#inquiry-form">Request a Workshop</a></p>
      </article>
    `
  },
  {
    path: 'education/workshops',
    title: 'Technology Workshops Catalog for Institutions | Brandex Education',
    description: 'Explore the complete curriculum of practical technology workshops for colleges and institutions covering AI, Cybersecurity, Full-Stack Development, and Digital Skills.',
    h1: 'Brandex Education Workshop Catalog',
    content: `
      <article>
        <h2>Curriculum & Workshop Modules</h2>
        <p>Explore detailed syllabi and learning outcomes for our high-impact 1-day to 4-week workshops designed for engineering students and academic institutions.</p>
      </article>
    `
  },
  {
    path: 'education/campus-ambassador',
    title: 'Campus Ambassador Program | Brandex Education',
    description: 'Lead the technology movement at your college. Represent Brandex, organize campus hackathons, and connect students with industry workshops.',
    h1: 'Brandex Campus Ambassador Program',
    content: `
      <article>
        <h2>Lead the Tech Movement on Your Campus</h2>
        <p>Apply to become a Brandex Campus Ambassador to spearhead developer meetups, workshops, and student hackathons at your university.</p>
      </article>
    `
  },
  {
    path: 'team/sathvik-nagesh',
    title: 'Sathvik Nagesh — Founder & Chief Technology Officer | Brandex',
    description: 'Sathvik Nagesh leads technology architecture, engineering, and product vision at Brandex. Specializing in high-performance web systems, custom CRM/ERP, and enterprise AI workflows.',
    h1: 'Sathvik Nagesh — Founder & Chief Technology Officer',
    content: `
      <article>
        <img src="/team/sathvik-nagesh.jpg" alt="Sathvik Nagesh, Founder & CTO of Brandex" width="400" height="500" />
        <h2>About Sathvik Nagesh</h2>
        <p>Sathvik Nagesh is the Founder and Chief Technology Officer at Brandex. With a deep background in full-stack software engineering, distributed systems, and modern web architectures, Sathvik oversees technical strategy, code quality, and engineering execution across all Brandex products and client engagements.</p>
        <h2>Core Technical Competencies</h2>
        <p>Full-Stack Web Engineering (React, Next.js, TypeScript, Node.js), Distributed Systems & Cloud Architecture (AWS, GCP, Supabase, Edge), Autonomous AI Agents & Contextual LLM Workflows, Core Web Vitals Optimization, Technical SEO, and Zero-Trust Cybersecurity.</p>
        <h2>Direct Contact & Verified Channels</h2>
        <p>Email: <a href="mailto:sathvik@brandex.co.in">sathvik@brandex.co.in</a> | LinkedIn: <a href="https://www.linkedin.com/in/sathvik-nagesh/">sathvik-nagesh</a> | GitHub: <a href="https://github.com/Sathvik-Nagesh">Sathvik-Nagesh</a> | Headquarters: Bangalore, India.</p>
      </article>
    `
  },
  {
    path: 'team/pavan-kumar',
    title: 'Pavan Kumar S — Co-Founder & CEO | Brandex',
    description: 'Pavan Kumar S is the Co-Founder and CEO of Brandex, a technology and custom software engineering enterprise based in Bengaluru. Leading executive strategy, AI literacy, and university partnerships.',
    h1: 'Pavan Kumar S — Co-Founder & Chief Executive Officer',
    content: `
      <article>
        <img src="/team/pavan-kumar.webp" alt="Pavan Kumar S, Co-Founder & CEO of Brandex" width="400" height="500" />
        <h2>About Pavan Kumar S</h2>
        <p>Pavan Kumar S is the Co-Founder and Chief Executive Officer (CEO) of Brandex, an end-to-end technology and custom software systems enterprise headquartered in Bengaluru, Karnataka, India. Pavan directs enterprise strategy, custom software delivery governance, institutional university partnerships, Geniusphere AI literacy workshops, and builder community ecosystems.</p>
        <p><em>Disambiguation Note:</em> Pavan Kumar S is an Indian technology executive and software entrepreneur based in Bengaluru, distinct from the Indian film director Pawan Kumar.</p>
        <h2>Core Executive & Technology Competencies</h2>
        <p>Executive Leadership & Strategy, AI Literacy & Technology Workshops, Geniusphere Educational Programs, Campus Ambassador Networks, Custom Software Project Governance, and Builder Hackathons.</p>
        <h2>Direct Contact & Entity Channels</h2>
        <p>Email: <a href="mailto:pavankumar@brandex.co.in">pavankumar@brandex.co.in</a> | LinkedIn: <a href="https://www.linkedin.com/in/pavankumarofficialcareers/">pavankumarofficialcareers</a> | GitHub: <a href="https://github.com/Pavan-Kumar-HQ">Pavan-Kumar-HQ</a> | Headquarters: Bangalore, India.</p>
      </article>
    `
  }
];

function prerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  if (!fs.existsSync(distDir)) {
    console.log('dist directory not found, skipping prerender.');
    return;
  }

  const baseHtmlPath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(baseHtmlPath)) {
    console.log('dist/index.html not found, skipping prerender.');
    return;
  }

  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

  for (const page of pages) {
    const pageDir = path.resolve(distDir, page.path);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    const canonicalUrl = `${BASE_URL}/${page.path}`;

    // Replace title, description, canonical, and inject semantic root content
    let pageHtml = baseHtml
      .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
      .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${page.description}" />`)
      .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
      .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${page.title}" />`)
      .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${page.description}" />`)
      .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);

    // Replace root content
    const rootRegex = /<div id="root">[\s\S]*?<\/div>/;
    const replacementRoot = `<div id="root">
      <header>
        <nav aria-label="Main Navigation">
          <a href="/">Brandex Home</a> |
          <a href="/services">Services</a> |
          <a href="/projects">Projects Hub</a> |
          <a href="/products/travel-crm">Travel CRM</a> |
          <a href="/products/invoice-builder">Invoice Builder</a> |
          <a href="/community">Community</a> |
          <a href="/community/events">Events</a> |
          <a href="/education">Education</a> |
          <a href="/education/workshops">Workshops</a> |
          <a href="/education/campus-ambassador">Campus Ambassador</a> |
          <a href="/services/software-development">Custom Software</a> |
          <a href="/services/website-development">Website Development</a> |
          <a href="/services/ai-automation">AI & Automation</a> |
          <a href="/services/cybersecurity">Cybersecurity</a> |
          <a href="/solutions">Solutions</a> |
          <a href="/industries">Industries</a> |
          <a href="/case-studies">Case Studies</a> |
          <a href="/about">About Us</a> |
          <a href="/careers">Careers</a> |
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main>
        <h1>${page.h1}</h1>
        ${page.content}
      </main>
      <footer>
        <p>&copy; 2026 Brandex. #121, 13th Main M.C. Layout, Vijaynagar, Bangalore - 560040, India.</p>
        <p>Phone: +91 94809 44727 | Email: team@brandex.co.in</p>
        <p><a href="/community">Community</a> | <a href="/education">Education</a> | <a href="/projects">Projects</a> | <a href="/products/travel-crm">Travel CRM Platform</a> | <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-and-conditions">Terms</a> | <a href="/llms.txt">llms.txt</a> | <a href="/sitemap.xml">Sitemap</a></p>
      </footer>
    </div>`;

    pageHtml = pageHtml.replace(rootRegex, replacementRoot);

    const outPath = path.resolve(pageDir, 'index.html');
    fs.writeFileSync(outPath, pageHtml, 'utf8');
    console.log(`✅ Prerendered /${page.path}/index.html`);
  }

  // Also create dist/privacy/index.html (alias for privacy-policy)
  const privacyDir = path.resolve(distDir, 'privacy');
  if (!fs.existsSync(privacyDir)) {
    fs.mkdirSync(privacyDir, { recursive: true });
  }
  const privacyPolicyHtml = fs.readFileSync(path.resolve(distDir, 'privacy-policy', 'index.html'), 'utf8');
  fs.writeFileSync(path.resolve(privacyDir, 'index.html'), privacyPolicyHtml, 'utf8');
  console.log(`✅ Prerendered /privacy/index.html`);
}

prerender();
