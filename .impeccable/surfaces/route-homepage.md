---
version: 1
slug: "route-homepage"
primary_target: "route:/"
related_targets: ["route:/models", "route:/compare", "route:/inventory", "route:/configure"]
---

# Homepage conversion architecture

## Job, audience, and mode

- **Mode:** Persuade with product-like transactional interactions.
- **Audience:** Vietnamese first-time Porsche buyers, arriving with high desire but uneven model knowledge and varying purchase intent.
- **Job:** Help a visitor identify a relevant Porsche, understand the meaningful next decision, and move to one clear action without losing the emotional pull of the vehicle.
- **Primary outcome:** `Khám phá các dòng xe` → model detail. Secondary outcome: `Xây dựng chiếc Porsche của bạn`; high-intent outcome: `Xe có sẵn`.
- **Language:** Vietnamese only for this phase. Technical product truth and transaction language must remain unambiguous.

## Three structural directions considered

### 1. Model Atlas — range-first orientation

- **Core concept / visual metaphor:** A curated automotive atlas: the full Porsche range is the first decision object, arranged as broad editorial model bands rather than a product grid.
- **Funnel structure:** Hero → six-family panorama → finder → featured model → compare → inventory → ownership → proof → final action.
- **Hero architecture:** Full-bleed vehicle view with one primary route to the atlas, one build route, and the available-now utility.
- **Model discovery:** Horizontal/vertical family panorama; each family has one use-case sentence, product-status field, and “Xem dòng xe”. The first screen of the section reveals all six family names before deep scrolling.
- **Featured product:** A model spotlight breaks the atlas with a larger image and compact decision rail.
- **Compare / inventory entry:** A persistent-but-subordinate “So sánh tối đa 3 mẫu” affordance begins after a model is selected; inventory enters as a compact high-intent module after comparison.
- **CTA strategy:** Explore remains primary until a visitor chooses a family; thereafter detail/configure becomes contextual.
- **Motion / mobile:** M3 crossfades and disciplined family transitions; mobile turns the panorama into editorial stacked bands with a visible family index.
- **Conversion strength:** Fastest route to range comprehension; strong for visitors who already know a body type.
- **Conversion risk:** Six families arrive before first-time buyers have a framework, so it can make the range feel intimidating.

### 2. Porsche Fit — need-first guided purchase

- **Core concept / visual metaphor:** A calm advisor’s first conversation: needs narrow the range before the range is revealed.
- **Funnel structure:** Hero → “Bạn cần một chiếc xe cho điều gì?” decision entry → recommendation set → model family exploration → featured product → compare → confidence → inventory → final action.
- **Hero architecture:** Product image alongside two entry lanes: “Tự khám phá dòng xe” and “Tìm chiếc Porsche phù hợp”. The former remains primary.
- **Model discovery:** The finder comes before the complete model range and asks a maximum of five decision-relevant questions. It recommends a small, explainable set, with “Xem toàn bộ dòng xe” always available.
- **Featured product:** The recommendation’s lead model gets the cinematic moment; its rationale is visible next to the product.
- **Compare / inventory entry:** Comparison emerges from the recommended shortlist; available-now becomes an optional shortcut once a category or result is known.
- **CTA strategy:** Finder completion promotes “Xem các mẫu phù hợp”; configuration remains gated until a model is deliberately chosen.
- **Motion / mobile:** M2–M3; questions move as an accessible stepper, not a quiz. Mobile uses one question per viewport with persistent progress and an explicit exit to all models.
- **Conversion strength:** Lowest cognitive load for undecided first-time buyers and clearest personalization story.
- **Conversion risk:** Asking for answers too early can feel like lead qualification and weakens vehicle desire for visitors who came to browse.

### 3. Drive Line — desire-to-decision progression **(selected)**

- **Core concept / visual metaphor:** A composed drive line: every major section is a distinct station on one continuous route from desire to action. The product stays visually dominant while each station resolves exactly one buying question.
- **Funnel structure:** Hero decision entry → orienting range → guided choice → featured product → compare → available now → ownership confidence → product/engineering proof → final decision.
- **Hero architecture:** One product image does the emotional work. A compact decision module answers what MDOP is, what the visitor is viewing, where to go, and which route is primary. `Khám phá các dòng xe` is visually dominant; `Xây dựng chiếc Porsche của bạn` is secondary; `Xe có sẵn` is a utility link.
- **Model discovery:** A six-family editorial sequence supplies the complete range before asking the user to answer questions. Each family is readable as a product lane, never a repeated rounded card.
- **Featured product:** A single, full-width “proof of desire” moment combines one vehicle with only decision-relevant, data-status-aware facts and two actions.
- **Compare / inventory entry:** Comparison is introduced exactly when the visitor has seen the range and may be unsure; inventory follows as the higher-intent, more compact transactional station.
- **CTA strategy:** One primary action per station; action labels become more committed only when the visitor has enough context. No global button cluster.
- **Motion / mobile:** M3/selective M4 for continuity along the route; mobile keeps the same station order, switches scale and interaction rather than removing decision support.
- **Conversion strength:** Best balance of desirability, range clarity, and a gradual commitment ladder. It preserves browsing freedom while making alternatives obvious.
- **Conversion risk:** Requires strong editorial pacing; if sections repeat information, the route becomes long. Each station must have a distinct question and exit.

## Direction evaluation

Scores are qualitative design assessments (10 = strongest fit for MDOP), not claims about measured performance.

| Direction | Vehicle desirability | Product clarity | CTA hierarchy | Model discovery | Confidence | Friction | Mobile conversion | Performance | Visual originality | Result |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Model Atlas | 9 | 8 | 8 | 9 | 7 | 7 | 7 | 9 | 8 | Strong range-led alternate |
| Porsche Fit | 7 | 9 | 8 | 8 | 9 | 8 | 9 | 9 | 7 | Strong advisor-led alternate |
| **Drive Line** | **9** | **9** | **9** | **9** | **9** | **8** | **9** | **9** | **9** | **Chosen** |

## Chosen sequence: Drive Line

### 01. Hero / Decision Entry

- **Funnel stage:** Desire → Discovery.
- **User intent:** Understand what MDOP offers and choose a sensible first path without losing the vehicle moment.
- **Required information:** MDOP proposition; visible Porsche vehicle/model identity; concise role statement; no unsupported price/specification; the three entry actions.
- **Primary action:** `Khám phá các dòng xe` → `/models`.
- **Secondary / utility:** `Xây dựng chiếc Porsche của bạn` → model-selection entry to `/configure`; `Xe có sẵn` → `/inventory`.
- **Friction resolved:** “I like Porsche, but I don’t know where to start.”
- **Visual role:** Desire mode. One decisive full-bleed car image; product identity and decision entry are a calm, legible counterweight—not ornamental headline theatre.
- **Desktop:** Header stays functional; copy/action module occupies a protected high-contrast zone that never obscures the vehicle’s defining form. No carousel or autoplay video required for comprehension.
- **Mobile:** Product image, model identity, positioning, then primary CTA appear in the first viewport. Secondary action is adjacent; available-now remains a text utility. Crop is intentionally art-directed, not a shrunken desktop hero.
- **Analytics:** `view_home`, `home_hero_primary_cta`, `home_hero_build_cta`, `home_hero_inventory_cta`, `home_hero_model_impression`.

### 02. Model Families / Range Orientation

- **Funnel stage:** Discovery.
- **User intent:** See the Porsche range and understand each family’s role before committing to a model.
- **Required information:** 911, Taycan, Macan, Cayenne, Panamera, 718; a concise use-case cue; body/use-case category; product-data status when a price field or factual attribute appears.
- **Primary action:** `Xem dòng xe` for the focused family → `/models/[model]` or family-filtered `/models`.
- **Secondary action:** `So sánh mẫu này` adds a candidate only after explicit user selection.
- **Friction resolved:** “I don’t know which family is relevant to me.”
- **Visual role:** Discovery in editorial automotive lanes—large imagery, alternating crop/scale, clear labels, no supermarket grid or identical card stack.
- **Desktop:** Six lanes use a visible index and focus state. One lane may expand in place; all family names remain quickly scannable. Keyboard users move by real links/buttons, not hover-only regions.
- **Mobile:** A vertical editorial sequence with a persistent “6 dòng xe” index/progress; each lane has a generous image, one cue, and one action. Avoid a horizontal swipe-only rail.
- **Analytics:** `view_model_families`, `select_model_family`, `start_compare_from_family`, `view_model_data_status`.

### 03. Find Your Porsche / Guided Choice

- **Funnel stage:** Discovery → Evaluation.
- **User intent:** Reduce choice overload through needs that materially affect fit.
- **Required information:** Questions about body style, daily vs weekend use, seating/practicality, electric vs combustion preference, comfort vs performance priority, and budget range. Budget and all recommendation logic are labelled demo until verified.
- **Primary action:** `Xem các mẫu phù hợp` → a transparent shortlist with “Vì sao phù hợp”.
- **Secondary action:** `Xem toàn bộ dòng xe` returns to complete range without losing progress.
- **Friction resolved:** “I don’t know how to translate my life into a Porsche choice.”
- **Visual role:** Evaluation mode. A precise decision instrument, visually quieter than the range; do not style it as an entertainment quiz.
- **Desktop:** 2–3 questions per meaningful step, with a clear step count, back control, and instant explanation of how answers narrow options. No email gate.
- **Mobile:** One decision per screen, accessible radio/segmented choices with text labels, progress, Back, and “Bỏ qua để xem tất cả”. Results retain the answers and allow edits.
- **Analytics:** `start_finder`, `answer_finder_question`, `complete_finder`, `view_finder_results`, `edit_finder_answer`, `exit_finder_to_models`.

### 04. Featured Vehicle / Proof of Desire

- **Funnel stage:** Evaluation.
- **User intent:** Imagine ownership of one concrete Porsche while seeing enough decision information to continue.
- **Required information:** Featured model name, concise benefit-led positioning, 3–4 verified/demo/unknown-labelled decision attributes, product-status-aware price field if supplied, and why it may suit a first-time buyer.
- **Primary action:** `Xem chi tiết` or `Xây dựng [model]` only when a model is established.
- **Secondary action:** `So sánh với mẫu khác`.
- **Friction resolved:** “The range is interesting, but what does choosing one actually feel like?”
- **Visual role:** Desire mode at its highest intensity. A feature editorial spread with product information continuously visible; no information is delayed behind animation.
- **Desktop:** Large vehicle canvas with a sticky, compact information/action rail after the hero region. Image scale and copy are asymmetric; controls remain direct.
- **Mobile:** Image leads; name, position, primary action and key decision facts follow immediately. The image may hold briefly while details pass, but no oversized sticky overlay.
- **Analytics:** `view_featured_model`, `view_vehicle`, `start_configure`, `start_compare`, `view_model_data_status`.

### 05. Compare / Resolve Uncertainty

- **Funnel stage:** Evaluation → Confidence.
- **User intent:** Understand the relevant difference between two or three models without reading an engineering spreadsheet.
- **Required information:** A clear statement that comparison supports up to three vehicles; dimensions limited to price-status, body/use case, drivetrain, seats, performance category, efficiency/range category, practicality, and key differentiator. Values stay verified/demo/unknown.
- **Primary action:** `So sánh các mẫu` → `/compare` with currently selected candidates preserved.
- **Secondary action:** `Chọn mẫu để so sánh` opens an accessible picker with family/use-case context.
- **Friction resolved:** “I’m interested in more than one; what meaningfully differs?”
- **Visual role:** Evaluation mode. A sharp comparison teaser, designed around differences rather than dense rows.
- **Desktop:** Side-by-side two-model contrast first; add-third affordance remains deliberate. A sticky compare tray appears only after a visitor has chosen at least one candidate.
- **Mobile:** A difference-first chooser, then one dimension at a time or model switcher; never force a microscopic horizontal table. The compare tray becomes a compact bottom action only when populated.
- **Analytics:** `view_compare_teaser`, `start_compare`, `add_compare_model`, `remove_compare_model`, `complete_compare`, `continue_from_compare`.

### 06. Available Now / High-intent Entry

- **Funnel stage:** Intent.
- **User intent:** See whether a more immediate, configured vehicle path exists.
- **Required information:** Plain explanation that availability is simulated/demo unless verified; a small set of inventory previews with exact model/variant, exterior colour, key configuration, status/location only where supported, and data status.
- **Primary action:** `Xem xe có sẵn` → `/inventory`.
- **Secondary action:** `Xem chi tiết xe` for an individual item.
- **Friction resolved:** “I may not want to wait or configure from scratch.”
- **Visual role:** Action mode. More transactional density, quieter imagery, strong scanability; cards are justified here but remain automotive and decision-led.
- **Desktop:** A short preview with filters deferred to the inventory route; no broad catalogue dropped into the homepage. Status is textual and never colour-only.
- **Mobile:** One or two visible preview vehicles plus the inventory action; filters live on `/inventory` in an accessible sheet, not inside a crowded homepage module.
- **Analytics:** `view_inventory_teaser`, `view_inventory`, `select_inventory_vehicle`, `view_inventory_data_status`, `start_reservation`.

### 07. Ownership Confidence / What Happens Next

- **Funnel stage:** Confidence → Intent.
- **User intent:** Reduce anxiety about a first Porsche purchase before asking for help or configuring.
- **Required information:** Service, warranty, financing, delivery, trade-in, EV charging support, and advisor assistance only as verified content or clearly marked demo/unknown modules. Explain process rather than promise outcomes.
- **Primary action:** `Tìm hiểu quyền sở hữu` → `/ownership`.
- **Secondary action:** `Trao đổi với chuyên viên` → `/contact` with clear pre-form intent.
- **Friction resolved:** “What happens after I choose? Can I get help?”
- **Visual role:** Confidence mode—warm, structured, calm; not a fake logo wall, testimonial carousel, or pressure device.
- **Desktop:** A process-led sequence: understand → personalize → confirm next step. Expandable details retain native semantic disclosure.
- **Mobile:** Short, task-labelled disclosures with an advisor action after—not before—useful information. All dialogs/forms are keyboard and screen-reader accessible.
- **Analytics:** `view_ownership_confidence`, `open_ownership_topic`, `start_consultation`, `start_lead_form`, `submit_lead_form`.

### 08. Product / Engineering Proof

- **Funnel stage:** Confidence.
- **User intent:** Confirm that the emotional choice is backed by credible product craft.
- **Required information:** Only evidence supplied later: verified engineering milestones, official product material, or marked demo placeholders. No fabricated awards, press excerpts, or owner stories.
- **Primary action:** `Khám phá chi tiết sản phẩm` → model detail/models.
- **Secondary action:** None by default; preserve one focused exit.
- **Friction resolved:** “Is there substance behind the design?”
- **Visual role:** A quiet evidence interlude: technical imagery, materials, interior/exterior detail, and concise sources/status. It earns confidence without recreating a spec table.
- **Desktop:** One precise image/data composition, visually controlled after the inventory module.
- **Mobile:** Evidence reads as image → assertion/status → source/detail route. Avoid complex effects or long technical copy.
- **Analytics:** `view_product_proof`, `open_proof_detail`, `view_proof_data_status`, `continue_to_model_detail`.

### 09. Final Decision / Close the Route

- **Funnel stage:** Action.
- **User intent:** Take the next meaningful step after browsing, evaluation, or confidence-building.
- **Required information:** `YOUR PORSCHE STARTS HERE.` adapted into concise Vietnamese copy, a clear explanation of what “build” starts, and a human-support alternative.
- **Primary action:** `Xây dựng chiếc Porsche của bạn` → `/configure` model selection or resume if saved.
- **Secondary action:** `Trao đổi với chuyên viên` → `/contact`.
- **Friction resolved:** “I’m interested, but what is the safe next step?”
- **Visual role:** Action mode: one strong close, not a closing menu. Product image may be present but must not overwhelm the explanation or actions.
- **Desktop:** High-contrast, focused panel with one primary and one secondary action. No extra navigation cluster.
- **Mobile:** Primary action is full-width in-flow; secondary action is visibly subordinate. It never competes with the mobile conversion bar.
- **Analytics:** `view_final_cta`, `start_configure`, `start_consultation`, `start_lead_form`.

## Navigation and persistent conversion behavior

- **Header:** `Dòng xe`, `Cấu hình`, `Xe có sẵn`, `So sánh`, `Quyền sở hữu`; utilities `Tìm kiếm`, `Đã lưu`; header CTA `Xây dựng chiếc Porsche của bạn`. It is functional and visible without becoming a second hero.
- **Sticky desktop behavior:** After the hero, use at most one slim conversion layer at a time. Default state promotes the current section’s primary action; after a model is selected, it may show model name + status-aware price field + `Cấu hình`. The compare tray replaces—not stacks with—the conversion bar only when it has a candidate.
- **Mobile bottom CTA:** No persistent bar in the hero. After a meaningful model choice/finder result, show one compact bottom action with the context-appropriate primary CTA and one secondary text action. Respect safe areas, do not cover content or form controls, and hide/reveal only on predictable scroll direction.
- **Compare entry:** Family and featured-model sections offer `So sánh` only after a model has context. A small, accessible compare tray confirms selected candidates and links to `/compare`; maximum three.
- **Save:** Save is contextual, never a homepage-wide demand. Reveal it on featured-model, finder-result, comparison, and configuration contexts as `Lưu để xem lại`; saved/unsaved state is explicit, locally persistent when implemented, and accessible by `Đã lưu` in the header.

## Data status, motion, and LCP policy

- **Data status:** Status matters wherever a number, availability, price, specification, finance/delivery statement, proof item, or recommendation depends on unverified data. Use a semantic visible label such as `Bản minh hoạ` or `Chưa có dữ liệu xác thực`; never rely on colour alone. Avoid exact data entirely when unknown.
- **Useful motion:** One fast hero image reveal; section-to-section image continuity; selected family/finder-answer/compare-candidate feedback; respectful image crossfade when configuration context changes. Reduced-motion presents the final state instantly.
- **Motion that hurts conversion:** Hero intro gates, autoplay audio/video, carousel autoplay, scroll-jacking, animated CTA movement, heavy physics, and any transition that blocks data/CTA interaction.
- **LCP content:** The hero’s responsive static vehicle image (or video poster only if a video later proves necessary), model identity, concise proposition, and primary CTA load first. Preload only the chosen hero image/font needed for the first viewport. Defer finder, inventory, proof media, noncritical analytics, and below-fold motion; serve responsive AVIF/WebP with explicit dimensions.

## Scope, state, and implementation boundary

- This is an approved strategy for `/`, not UI implementation. `/impeccable craft homepage` should build this order and interaction model without inventing another conversion structure.
- Required interactive states: initial/loading/error for finder and inventory; selected/unavailable/incompatible where applicable; empty/populated compare tray; saved/unsaved; form empty/editing/invalid/submitting/success/error; keyboard, focus, dialog, and reduced-motion states.
- Do not manufacture product facts, prices, inventory, reviews, awards, urgency, or social proof. Keep all homepage copy in Vietnamese until localization strategy changes.
- The direction seed completed with Impeccable seed `8122c276`; all catalogue challengers were declined because their grammar would reduce first-buyer audience identification and/or product clarity. Their useful discipline retained by Drive Line is: the darkroom’s staged, legible progression—without adopting its visual costume.

## Craft implementation record

- **Approved comp:** `.impeccable/mocks/homepage-drive-line-b.png`. The user delegated comp selection by asking for immediate implementation of the already-approved Drive Line. Its compositional rules are: a quiet warm decision rail beside a graphite vehicle stage; the entire range appears as one readable index before the decision tool; inventory becomes denser and calmer than discovery.
- **Asset inventory:** `public/images/mdop-hero.png` is a generated, non-claim visual used as hero, featured-vehicle and art-directed inventory/final crops. Semantic code owns all typography, CTAs, navigation, data-status labels, selection state, comparison tray, finder, proof composition, responsive cropping and motion. No mockup screenshot is shipped as product imagery.
- **Build contract:** preserve the 9 station order, one dominant conversion layer at a time, Vietnamese labels, explicit `Bản minh hoạ` treatment, and the hero’s immediate `Khám phá các dòng xe` path. Do not literalize unverified statements shown inside direction comps.
