# MDOP Design Direction

## Durable visual authority

MDOP is **Porsche product design × editorial commerce × precision UI**: a premium automotive commerce experience where imagery creates desire and interface structure creates confidence. The product is never reduced to a generic catalogue, and the path to action is never hidden behind brand theatre.

## Homepage direction — Drive Line

The homepage uses a single forward **drive line**: each passage answers one increasingly concrete first-buyer question, while a distinct product image or product tool carries that answer. It alternates deliberate modes rather than stacking repeated marketing sections:

1. Desire: decisive vehicle image and immediate decision entry.
2. Discovery: a readable family range, then a guided fit tool.
3. Evaluation: one desirable featured vehicle and a concise comparison entry.
4. Confidence: transactional available-now entry, ownership reassurance, and evidence.
5. Intent/action: one undiluted closing decision.

The lasting design rule is **one dominant conversion layer at a time**. Editorial scale belongs to vehicle imagery and model identity; compact precision belongs to price-state, filters, forms, selection, saved state, and conversion controls. Tinted near-black, warm off-white, graphite/metal neutrals, restrained performance red, and contextual vehicle-paint accents support the product rather than compete with it.

Motion is M3 with selective M4: image reveals, model transitions, selected-state feedback, and continuity between the finder, compare, and product routes. It never gates content, hides a CTA, scroll-jacks, or depends on heavy WebGL. Accessibility, performance, and complete mobile conversion are quality requirements.

## Typography

MDOP uses **Archivo** through Next.js font loading, self-hosted in the production output. It is one engineered type system with two roles: display uses a tighter, heavier scale for hero, model identity, featured vehicle, and final decision; interface uses compact, calmer weights for controls, navigation, data, labels, and status. Model and numeric UI use tabular numerals where applicable. `Bản minh hoạ` remains readable and subordinate rather than faded into the background.

## Motion

MDOP uses a controlled M3 system with selective M4: `140ms` immediate feedback, `240ms` UI/state continuity, and `620ms` only for editorial vehicle reveals. The focal motion is the featured vehicle's restrained viewport-led crop and scale shift. Finder steps move forward/backward by direction; comparison, save, inventory and the contextual mobile action use short state acknowledgements. Motion never gates CTAs, scroll-jacks, or runs as a repeated section-reveal template. Reduced motion removes spatial/image movement while keeping labels, selected states and status feedback clear.

## Responsive conversion

The buying funnel remains complete at every width. Phone layouts make the hero actions and featured-vehicle actions full width, retain each model's image/name/use case/action as one editorial lane, and provide a native keyboard-accessible Menu. The contextual bottom action appears only after model/compare context exists and yields when the final CTA enters view. Tablet and compact laptop layouts move dense multi-column decision surfaces into deliberate single-column or two-column compositions before their minimum widths collide; no commerce action depends on hover.

## Color system

MDOP's palette is governed by semantic surfaces rather than decorative swatches: tinted near-black and graphite for desire/evaluation, warm off-white for reading and decision, and restrained performance red for focus and selected-state emphasis. Text, borders, actions and focus rings adapt to their light or dark surface. `Bản minh hoạ`, `Dữ liệu minh hoạ` and `Chưa xác thực` retain their explicit labels and use contrast-safe demo/unknown tokens; verified tokens are reserved for future confirmed data. Vehicle imagery keeps its original paint identity rather than receiving family-level hue filters.

## Home route boundaries

The Vietnamese homepage serves first-time Porsche buyers in Vietnam. Its primary action is **Khám phá các dòng xe**; **Xây dựng chiếc Porsche của bạn** is secondary; **Xe có sẵn** is a high-intent utility. It does not claim pricing, specifications, availability, ownership benefits, reviews, awards, or commercial outcomes without verified evidence. Demo and unknown states are explicit in the product UI.

See [.impeccable/surfaces/route-homepage.md](.impeccable/surfaces/route-homepage.md) for the route-specific conversion architecture.
