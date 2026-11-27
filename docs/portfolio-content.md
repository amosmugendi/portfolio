# Amos Mugendi — Portfolio content and rebrand brief

Draft for review · 27 November 2026

This document defines the content for the rebuild. Quoted copy is proposed website text. Editorial notes, evidence, and confirmation items stay out of the public site. The website has not been changed at this stage.

## 1. Positioning

**Name:** Amos Mugendi

**Proposed headline:** Software Engineer & UI/UX Designer

**Supporting line:** Backend engineering, product workflows, and interfaces built around the people who use them.

The portfolio should show a software engineer who connects customer requirements, interface decisions, and implementation. Engineering remains a clear professional foundation, while UI/UX has a dedicated collection with substantive case studies. Keep formal employment titles separate from this portfolio headline.

Primary audiences: engineering hiring teams, product and design hiring teams, and potential clients looking for someone who can connect design with delivery. Current availability and preferred engagement type need confirmation before publication.

Do not lead with a rotating list of MERN developer, freelancer, and open-source contributor. Explain the work through specific examples rather than a broad collection of titles.

## 2. Site structure

| Destination | Content | Purpose |
| --- | --- | --- |
| Home | Introduction, selected work, capabilities, short bio, contact | Establish identity and direct visitors to relevant work |
| Engineering | Recent software projects and individual case studies | Explain technical judgment, contribution, and delivery |
| UI/UX | Design projects and individual case studies | Show problems, workflows, iterations, and screen designs |
| About | Working approach, career history, skills, education | Provide professional context |
| Contact | Home/About section linked from navigation | Make reaching out easy without a thin standalone page |
| CV | Download action | Give recruiters a current document without a full PDF-only page |

Suggested navigation: **Work · UI/UX · About · Contact**, with **Download CV** as a secondary action. “Work” opens the engineering collection. Link the two collections wherever a project includes both disciplines; avoid repeating the same narrative.

Keep `/project` working through a redirect when moving to the new collection. Redirect `/resume` to the updated CV destination. Final addresses can be chosen during implementation.

## 3. Home page — proposed copy

### Hero

> Amos Mugendi
>
> Software Engineer & UI/UX Designer
>
> I build software and design the workflows behind it.
>
> My work connects backend systems, business requirements, and usable interfaces—from recruitment platforms to agricultural marketplaces and enterprise tools.

Primary action: **Explore engineering work**

Secondary action: **Explore UI/UX projects**

Supporting links: **Download CV · Get in touch**

Location: **Nairobi, Kenya**. Add remote availability only after reconfirming it.

### Selected work

> Recent work across software engineering and product design.

Start with Punditspace, Tradecare Market, and the GLOBALG.A.P. Checklist Bridge. Use one project image, a clear discipline label, a short problem statement, and a case-study link for each. For the UI/UX selection, feature Punditspace, WFG, and Tradecare Market; use the checklist bridge as a focused workflow example.

### Capabilities

**Backend engineering**

> APIs, data models, integrations, and background workflows that support real business operations.

**UI/UX and interface design**

> Turning requirements into clear navigation, practical screens, and workflows that account for different users and states.

**Product delivery**

> Connecting design and implementation through stakeholder conversations, technical decisions, reviews, and iterative improvements.

### Short introduction

> I’m a software engineer based in Nairobi with experience across recruitment, enterprise software, workforce operations, and financial systems. I also contribute to UI/UX design, customer requirements gathering, and interface implementation. I enjoy work where understanding the workflow matters as much as writing the code.

### Contact

> Have a product to build or a workflow to improve?
>
> Tell me what you’re working on and where you need help.

Actions: **Email me · LinkedIn · GitHub**.

## 4. Engineering collection

Introduction:

> Selected software projects, with a closer look at the problems, technical decisions, and contributions behind them.

Show three or four strong cases at launch. A project belongs here when we can explain Amos’s implementation contribution and show appropriate evidence. A design file alone does not establish implementation or launch.

### Punditspace — recruitment and talent workflows

**Card copy:**

> Engineering contributions to a recruitment and talent platform spanning candidate, employer, and staff experiences.

Case-study direction: recruitment workflows, permissions, candidate information, background processing, and the connection between administration and user-facing features. Earlier work includes configurable welcome credits and candidate-role classification; inspect the relevant changes before selecting the final technical narrative.

Explain which features Amos implemented or led, which decisions were collaborative, and what changed for the user. Use a simplified architecture diagram, a focused workflow, and sanitized interface images. Historical production work is evidence of involvement, not proof that a full rollout or backfill is currently complete.

### GLOBALG.A.P. Checklist Bridge — audit workflow automation

**Card copy:**

> A tool being built to move offline audit checklists into osapiens, with validation and review before upload.

Current local README describes a NestJS API, Next.js frontend, and shared TypeScript types. The design covers upload, matching, preview, correction, rechecking, and changes review.

Potential technical story: translating spreadsheet data into a target form, separating blocking errors from warnings, and keeping corrections visible before submission. Confirm the implemented scope and Amos’s individual contribution before turning these design intentions into engineering claims. Present status as **In development**, unless newer evidence establishes otherwise.

### Tradecare Market — marketplace and operational workflows

**Card copy:**

> A produce marketplace connecting shopping experiences with organisational ordering and operational tools.

Explain the implemented portion of catalogue, pricing, ordering, approvals, or fulfilment once inspected. The Pen file contains a much larger design scope; label design and implementation separately. Confirm the technical stack from the current owning repositories before publishing stack badges.

### FarmDataPod / Tradecare FDP — optional technical deep dive

**Card copy:**

> Agricultural software work centred on farmer records, field activities, planning, and advisory workflows.

Use this only when we can show a distinct contribution with enough depth to stand apart from Tradecare Market. Earlier architecture discussions were proposals; do not describe them as a completed distributed system. Confirm the product’s preferred public name and project dates.

### Older projects

Remove the POS, train booking, student API, movie app, blog, and portfolio-self card from the featured collection. Keep an optional compact “Earlier work” section only if these projects still add useful evidence and their links work. A project without a demo should simply omit that action.

## 5. UI/UX collection

Introduction:

> Selected interface and workflow design projects—from candidate onboarding and staff workspaces to commerce, compliance, and professional services.

Use the existing Pen designs as source material for screenshots, annotated flows, and comparisons. Curate a few meaningful screens rather than publishing entire canvases. Present desktop and mobile views where they demonstrate a real design decision.

### Punditspace — candidate experience and staff workspaces

**Proposed case-study title:** Making recruitment workflows easier to navigate.

**Card copy:**

> Candidate onboarding, dashboards, and staff workspaces for navigating recruitment and customer information.

Inspected designs include candidate overview, job matches, applications, interviews, onboarding, experience and education; a staff workspace launcher and recruitment workspace; and customer management with employer and candidate profiles, subscriptions, support, teams, notes, and activity. Additional opened files cover administration and staff permissions, intelligence and reporting, candidate/employer/admin messaging, and commercial welcome-credit controls. These extend the inventory; their top-level screen lists were reviewed, rather than every nested screen.

Suggested story:

1. Introduce the different tasks candidates and staff need to complete.
2. Show how onboarding captures profile information across manageable stages.
3. Explain the separation between candidate navigation, recruitment operations, and customer management.
4. Walk through one candidate journey and one staff journey with annotated screens.
5. Describe iterations, the user feedback behind them, and implementation status where known.

Lead with the candidate flow; use staff and customer management as a second chapter or linked case study if the material becomes too long. Confirm personal authorship, collaborators, and research methods. The files establish design scope, not measured usability improvement.

### Tradecare Market — shopping and role-based ordering

**Proposed case-study title:** Bringing produce discovery and ordering into one experience.

**Card copy:**

> A desktop and mobile marketplace design spanning product discovery, checkout, and organisational ordering workflows.

Strong, documented design decisions include moving the mobile catalogue earlier, shortening explanatory sections, displaying prices, distinguishing fresh goods with Zao Safi labels, and tightening header and footer navigation.

The current design also includes checkout, M-Pesa payment states, orders, staff tools, supplier and buyer portals, worker allowances, approvals, and error states. Select the homepage-to-checkout journey for the main story, with one organisational workflow as a deeper example.

Show an early and revised mobile layout if both versions can be recovered. Explain why less introductory content gave shopping greater priority. Do not claim higher conversion without analytics. Prices and sample orders in mockups are illustrative; Zao Safi descriptions must not imply unverified organic certification.

### WFG Advocates — professional services website

**Proposed case-study title:** Helping visitors find the right legal support.

**Card copy:**

> A responsive law firm website connecting practice areas, legal education, and enquiries through clear audience-focused navigation.

The inspected design contains desktop and mobile Home, About, Practice Areas, Legal Care, The Checklist Lawyer, Community, Training and Events, and Enquire screens, plus enquiry and article-discovery states.

Suggested story:

1. Explain the needs of individuals and professionals, SMEs and startups, and institutional visitors.
2. Show how the homepage directs people towards services, educational content, or an enquiry.
3. Walk through The Checklist Lawyer library: keyword search, audience and topic filters, no-results recovery, and the empty-library state.
4. Show the desktop-to-mobile adaptation and enquiry form states.
5. Explain the balance between general education and a route to personalised professional advice.

Use the homepage, practice-area navigation, filtered library, and enquiry flow as the core visuals. Article titles in the design are explicitly draft examples awaiting firm review. Do not publish them as approved legal guidance, client results, or evidence of a launched library. Confirm Amos’s role, collaborators, project dates, implementation status, and the firm’s preferred public name.

### GLOBALG.A.P. Checklist Bridge — correction and validation experience

**Proposed case-study title:** Helping auditors resolve checklist problems before upload.

**Card copy:**

> An audit checklist interface for previewing mapped answers, correcting problems, and reviewing changes before submission.

Inspected screens show blocking errors versus warnings, a problems-only editor, answer and due-date corrections, rechecking, and a summary before upload. Show the journey **upload → preview → fix → recheck → review → submit**.

Discuss visibility of system status and recovery from errors. Screen sample counts, progress percentages, and sample farm information are mock data, not product impact metrics.

### Tcert — information architecture and verification

**Proposed case-study title:** Organising standards, audit enquiries, and certificate verification.

**Card copy:**

> A certification website design with clearer paths to standards information, audit enquiries, and certificate lookup.

Inspected material includes foundations, reusable components, a sitemap, content map, user journeys, responsive screen layouts, verification states, and handoff notes. Useful story: reducing competition between information-heavy sections and giving verification a dedicated destination.

The design names a three-click journey target. Treat that as a design target and documented walkthrough, not evidence of a study with users. The current README describes certificate lookup using local sample data; do not present this as an independently verified live certification registry.

### Tradecare Africa — ecosystem website

**Proposed case-study title:** Giving a multi-product ecosystem a clearer web presence.

**Card copy:**

> A corporate website design bringing organisation, ecosystem, impact, and partner information into a shared navigation and visual language.

Inspected frames include desktop and mobile home, ecosystem, about, impact, case study, partners, insights, article, and contact pages, alongside shared navigation and component designs. Keep this as a supporting case unless its decisions and contribution are stronger than one of the main cases.

### Tradecare Academy — supporting project

**Proposed card copy:**

> An education website concept organising programmes and occupational certifications with desktop and mobile navigation.

The opened Pen document includes an Academy homepage, programme dropdown, expanded mobile menu, pre-launch navigation, footer, certification page, and reusable icons and screen states. Keep this in the supporting collection unless a deeper contribution story is established. Do not treat components and starter dashboard examples in unrelated open documents as original portfolio projects.

## 6. Case-study writing structure

Each case study should answer the following without forcing a long process narrative:

1. **Overview:** What is the product, and who is it for?
2. **My role:** Responsibilities, dates, collaborators, and boundaries of ownership.
3. **Problem:** The specific user or business difficulty.
4. **Constraints:** Existing software, devices, data, permissions, time, or workflow rules.
5. **Decisions:** Two or three choices and why they were made, supported by artifacts.
6. **Work:** Annotated screens, a flow, implementation detail, or a small architecture diagram.
7. **Result and status:** What was designed, implemented, reviewed, or released. State what remains untested.
8. **Reflection:** A concrete lesson or next improvement.

Use “designed,” “implemented,” “reviewed,” and “released” precisely. Do not invent interviews, personas, user testing, conversion improvements, or sole ownership. If AI tools supported the work, describe Amos’s actual direction, decisions, revisions, and implementation accurately.

## 7. About page — proposed copy

> I work at the intersection of software engineering and product design.
>
> My background spans backend services, business applications, and interface implementation. Across recruitment, enterprise software, HR, and financial systems, I’ve contributed to customer requirements gathering, design work, and software delivery.
>
> I’m interested in the details that make a product useful: how a user gets started, how information is organised, how permissions shape a workflow, and what happens when something goes wrong.
>
> I use that understanding to connect interface decisions with the systems that support them.

### Career timeline to reconfirm

The latest available CV lists the following. Confirm current roles and dates before publication, especially overlaps and Tradecare work that is not represented in that CV.

| Organisation | Recorded role | Recorded dates |
| --- | --- | --- |
| PunditSpace | Lead Software Engineer, part-time | Aug 2025–present |
| Cognativ Inc | Backend Engineer | Oct 2025–present |
| Workforce Africa | Software Engineering Consultant | Nov 2024–Nov 2025 |
| Renga Technologies | Junior Full-Stack Software Engineer | Feb 2022–Oct 2024 |
| Rafiki Bank Microfinance | Software Engineering Intern | May 2021–Jan 2022 |

Add Tradecare with the correct relationship, title, and dates after confirmation. Remove the old site’s “currently employed at Syknown Technologies” statement unless it is still accurate.

### Skills, grouped by work

- **Backend:** Node.js, NestJS, TypeScript, C#, ASP.NET Core, REST APIs.
- **Interfaces:** React, Next.js, Blazor, JavaScript, HTML, CSS, DevExpress, DevExtreme.
- **Data:** PostgreSQL, SQL Server; discuss modelling and optimisation through project examples.
- **Design:** Pen.dev, Figma, Sketch; requirements gathering, interface design, responsive layouts, and workflow improvement.
- **Delivery:** Technical reviews, stakeholder collaboration, mentoring, and iterative delivery.

These are drawn from the recent CV and inspected project context. Prioritise tools tied to visible work. Add Python/Django, infrastructure tools, or other technologies only where the final cases substantiate them. Avoid skill percentages and a large undifferentiated logo wall.

### Education

- BSc Computer Science — Catholic University of Eastern Africa, October 2023 (recorded in CV).
- Software Engineering Certificate — Moringa School, November 2024 (recorded in CV).

Include certifications only after checking the exact credentials and current status. Avoid a headline years-of-experience number until dates and counting conventions are settled.

## 8. Contact and search copy

Recorded email: **amosmugendi07@gmail.com**. Confirm it is the preferred public address.

GitHub: https://github.com/amosmugendi

LinkedIn: confirm the canonical profile; the repo and recent CV contain different slugs.

Keep phone number and personal social accounts out of the initial draft unless requested.

**Page title:** Amos Mugendi | Software Engineer & UI/UX Designer

**Search description:** Explore Amos Mugendi’s software engineering and UI/UX work across recruitment, marketplaces, enterprise applications, and workflow automation.

Use the same name, headline, image, and canonical domain in site metadata and link previews. Replace the current template author’s preview image and URL.

## 9. Cleanup plan for implementation

| Existing content | Proposed action |
| --- | --- |
| Generic greeting and rotating titles | Replace with the new introduction and direct work links |
| Repeated introductory paragraphs | Consolidate into a short homepage bio and fuller About page |
| Old project grid | Replace with recent case studies |
| Empty Blogs navigation link | Remove until there is published writing |
| PDF-only resume page | Replace with an accessible CV download action |
| GitHub calendar | Remove from the main professional story |
| Fork/star navigation button | Remove from primary navigation |
| Skill icon wall | Replace with focused capability groups |
| Outdated employer and generic Web3 claims | Update from confirmed experience |
| Portfolio card describing Next.js | Remove; this repository currently uses React/Create React App |
| Template metadata, README claims, and preview assets | Rewrite to match Amos and the actual rebuilt site |

Do not delete historical source assets until the replacement pages and references are in place. This draft makes no code or page removals.

## 10. Publication checklist and content gaps

Required to finish the content:

- Confirm preferred headline and priority: engineering roles, design roles, client work, or a mix.
- Confirm employment timeline, Tradecare relationship, and preferred contact details.
- Select the final WFG screens and confirm the personal contribution and implementation status.
- Record role, dates, collaborators, and implementation status for each selected project.
- Choose sanitised visuals and confirm what client work may be shown publicly.
- Add a specific result for each project; use a delivered artifact where measured impact is unavailable.
- Verify public links and omit private repository links and internal endpoints.

Launch scope recommendation: a homepage, Engineering and UI/UX collections, About, a contact section, and a CV download. Publish fewer complete case studies rather than filling the collections with unfinished placeholders.

## 11. Evidence notes — internal only

Reviewed the current portfolio routes, homepage, About copy, project cards, skills, navigation, footer, resume component, package manifest, README, and public metadata. Current app: React 17 with Create React App and React Router; not Next.js.

Career content: `/Users/mugendi/Documents/Codex/2026-11-24/https-www-brightermonday-co-ke-listings/outputs/Amos_Mugendi_UI_UX_Designer_CV.md`. This is an earlier tailored CV, not independent verification of every claim.

Pen designs inspected using Pencil MCP:

- `/Users/mugendi/Documents/10_Work/PunditSpace/admindashboard.pen`
- `/Users/mugendi/Documents/10_Work/PunditSpace/candidate-dashboard.pen`
- `/Users/mugendi/Documents/10_Work/PunditSpace/candidate-onboarding.pen` — top-level inventory exposed only a generic frame; substantive onboarding designs were found in candidate-dashboard instead.
- `/Users/mugendi/.pencil/documents/7da4f1ad-c410-4742-8de9-7c90432d0e7d/untitled.pen` — customer management workspace.
- `/Users/mugendi/Projects/Tradecare/tradecare-market-v1/design/Tradecare-Market-Homepage.pen`
- `/Users/mugendi/Projects/Tradecare/global-gap-automations/design/checklist-bridge/checklist-bridge.pen`
- `/Users/mugendi/Projects/Tradecare/t-cert-africa-v2/design/tcert-website.pen`
- `/Users/mugendi/Projects/Tradecare/Tradecare Documentation/Website Designs/tradecare-africa.pen`

Also read the checklist bridge and Tcert local READMEs for status and implementation boundaries. Pen annotations are evidence of design intent and documentation; their embedded claims about testing or outcomes require separate verification.

Additional open Pen documents identified through Pencil MCP:

- `/Users/mugendi/.pencil/documents/ee5856f3-b8bc-4504-abb3-266f7c27f820/untitled.pen` — WFG website; top-level inventory and homepage/library text inspected.
- `/Users/mugendi/.pencil/documents/632b6615-3bad-4987-913e-2bae09167bd3/untitled.pen` — administration workspace inventory.
- `/Users/mugendi/.pencil/documents/5c9bde71-c023-437e-b12a-c30edd71414d/untitled.pen` — intelligence and reporting inventory.
- `/Users/mugendi/.pencil/documents/1fbfb3cf-2db7-449b-a237-91484a255ef4/untitled.pen` — candidate, employer, and admin messaging inventory.
- `/Users/mugendi/.pencil/documents/693b09bc-532e-45f7-a783-545caf269a33/untitled.pen` — commercial welcome-credit and reminder controls inventory.
- `/Users/mugendi/.pencil/documents/28cd3baa-f766-4482-a241-584659952b08/Tradecare-Academy.pen` — Academy screen inventory.

Some other opened documents returned empty inventories or component/demo collections. They were not used as project evidence. No Pen designs were modified.
