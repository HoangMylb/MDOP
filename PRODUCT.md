# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: Next.js (App Router) with TypeScript, selected for a production-grade responsive commerce experience with strong route-level performance, accessible interaction primitives, and intentional motion. The implementation must keep unnecessary client-side JavaScript low and protect LCP.

## Users

Primary users are people in Vietnam considering their first Porsche purchase. They need to move from aspiration to an informed, low-friction next step: understand the range, identify a suitable model, evaluate meaningful trade-offs, personalize a vehicle, and choose between availability, a test drive, advisor support, or simulated reservation.

## Product Purpose

MDOP (Make Dreams. Own Porsche.) is a portfolio/design-study conversion and automotive-commerce experience centred on Porsche vehicles. It makes premium automotive desire actionable through clear model discovery, evaluation, configuration, confidence-building, and simulated purchase intent. It does not process real commercial transactions.

Success means users can confidently explore Porsche models, understand differences, compare two or three models, open a vehicle detail page, configure and save a vehicle, check simulated inventory, book a test drive, request consultation, and begin a simulated reservation or purchase-intent flow.

## Positioning

MDOP is Porsche-quality product presentation joined to decision-led premium commerce for first-time buyers in Vietnam. Its differentiator is the sustained pairing of desirable vehicle presentation with a plainly visible, context-appropriate next action: **the product stays desirable; the next step stays obvious.**

## Operating Context

The core funnel is **DESIRE → DISCOVERY → EVALUATION → CONFIDENCE → INTENT → ACTION**. Users may arrive to browse a model family, compare 2–3 vehicles, explore available vehicles, configure a chosen model, return to a saved configuration, ask an advisor a question, book a test drive, or signal reservation intent.

Primary journeys include model discovery (Home → Models → Detail → Configure → Save/Continue), high-intent lead capture (Home/Campaign → Detail → Proof → Test drive/Consultation), comparison (Models → Compare → Choose → Configure/Inventory/Consultation), simulated inventory evaluation, and resuming a saved vehicle.

## Capabilities and Constraints

- Support model exploration, filtering by relevant vehicle and use-case criteria, model detail, 2–3 vehicle comparison, configuration, saved configurations, simulated inventory, test-drive booking, consultation requests, and simulated reservation/purchase-intent flows.
- Every important surface has one primary action, a subordinate secondary action, and lower-emphasis exploratory actions. Do not make all actions equally prominent.
- Product data must carry `verified`, `demo`, or `unknown` status. Exact prices, performance, range, dimensions, finance rates, delivery dates, inventory, testimonials, scarcity, and other product claims must never be fabricated. Unverified/demo information remains visibly distinguishable during development.
- The mobile web experience must complete the same buying funnel as desktop; it is not browse-only. Keyboard navigation, visible focus, semantic HTML, accessible forms and dialogs, reduced-motion support, responsive optimized imagery, and strong LCP discipline are required.
- Motion may reinforce product understanding and spatial continuity but must never delay information or CTA access. Avoid heavy WebGL unless it has clear conversion value.
- This is a design study: use Porsche-quality visual assets appropriately, do not distort logos, and do not imply a real transaction or verified commercial availability without supporting data.

## Brand Commitments

MDOP means **Make Dreams. Own Porsche.** It is a premium, precise, engineered, desirable, restrained, confident, tactile, fast, purchase-ready automotive experience. The governing design and product contracts are [MDOP_BRIEF.md](MDOP_BRIEF.md) and [MDOP_DESIGN_SKILL.md](MDOP_DESIGN_SKILL.md); future work must treat them as authoritative.

The conversion priority order is: product clarity, conversion clarity, vehicle desirability, decision confidence, product discovery, friction reduction, visual craft, motion, then brand theater.

MDOP must not become a cinematic portfolio, YDAP with extra buttons, a generic ecommerce catalogue, a Shopify-like store, SaaS dashboard, bento-grid site, or futuristic HUD.

## Evidence on Hand

- Authoritative project brief: [MDOP_BRIEF.md](MDOP_BRIEF.md).
- Authoritative conversion and design contract: [MDOP_DESIGN_SKILL.md](MDOP_DESIGN_SKILL.md).
- No confirmed product catalog, pricing, performance data, inventory, financing data, delivery dates, testimonials, customer proof, or transaction system is currently provided. Future work must use supported verified data or explicitly labelled demo/unknown states.

## Product Principles

1. Desire opens the funnel; clarity closes the gap.
2. Every screen must reduce a real buying uncertainty or advance a clear next decision.
3. Confidence comes from transparent product information, understandable process, and calm proof—not pressure tactics.
4. Product interactions must make the choice and its consequence clear, especially in comparison and configuration.
5. Premium quality includes accessible, responsive, fast completion of the full buying flow.

## Accessibility & Inclusion

MDOP must use semantic HTML, complete keyboard navigation, visible focus states, accessible forms and dialogs, reduced-motion support, and responsive behavior that preserves the complete buyer journey across desktop, laptop, tablet, and mobile. Performance and optimized imagery are conversion requirements, with strong LCP discipline and minimal unnecessary JavaScript.
