# ANDOS Product Audit & Redesign Map

## 1. Source audit

Audit date: 14 August 2026

The repository at the supplied baseline commit did **not** contain an application, routes, business logic, APIs, schemas, or product copy. It contained only:

- `assets/images/file.png` — a monochrome conceptual image with no product UI or embedded business information.
- `assets/images/Y` — an empty one-byte file.

Because no existing ANDOS architecture or functionality was available to inspect, this implementation does not claim to preserve or reproduce undocumented business behavior. Instead, it establishes a production-oriented front-end architecture and explicitly identifies unavailable live data in the interface.

## 2. Transparency decision

The redesign intentionally does not fabricate:

- prices or plan availability;
- users, orders, wallet balances, savings, or points;
- reviews, aggregate review themes, or trust scores;
- operational system status;
- events, countdowns, leaderboards, or reward eligibility;
- support response times;
- payment methods or completed transactions.

Unavailable data is presented as unknown, empty, disconnected, or preview-only. The checkout demonstration cannot place an order and clearly says so.

## 3. Implemented information architecture

### Main

| Area | Implementation |
| --- | --- |
| Home | Guided need → confidence → choice → proof → action journey |
| Services | Search, category filtering, catalogue cards, service details |
| Orders | Order-ID lookup architecture, lifecycle timeline, empty state |
| Wallet | Balance architecture, coupons, payment methods, activity |
| Rewards | Points, streak, levels, badges, redemption, achievements |
| My ANDOS | Next best action, account metrics, active orders, settings |

### Discover

| Area | Implementation |
| --- | --- |
| Events | Live/upcoming/past navigation, transparent empty state, event rule architecture |
| Community | Referral privacy, milestones, community reward architecture |
| Academy | Searchable safety, payment, verification, and service guides |

### Trust & Help

| Area | Implementation |
| --- | --- |
| Trust Center | Price, verification, refund, processing, support, review integrity standards |
| Security & Privacy | PIN, contextual biometrics, phone verification, devices, permission philosophy |
| System Status | Real-data-only system health architecture and status definitions |
| Support | Intent routing, safe message form, explicit disconnected state |
| ANDOS Inbox | Prioritized notification categories and no-spam framing |

## 4. Core flows

### Service discovery

1. Search or browse by category.
2. Read what the service is for.
3. Review processing, requirement, refund, and security context.
4. Compare plan architecture.
5. Preview checkout.

### Checkout architecture

1. Review.
2. Verify, with a contextual “Why do we need this?” explanation.
3. Payment method selection.
4. Confirmation with Order ID/receipt architecture.

The current preview uses placeholders and sends no transaction.

### Order reassurance

1. Enter Order ID.
2. Query a connected order source.
3. Present six visible stages.
4. Show timestamps when available.
5. Explain pending stages through “What’s happening?”.
6. Keep support accessible.

## 5. Design system

### Typography

- Headings: Manrope Variable.
- UI and body: Inter Variable.
- Local font assets are delivered through `@fontsource-variable` rather than a blocking third-party font request.

### Color tokens

- Deep indigo foundation with controlled electric blue/violet accents.
- Warm neutral app background and pure white content surfaces.
- Semantic emerald, amber, rose, and blue.
- Service identity colors are scoped to service icons.

### Spacing and shape

- 4px/8px-derived spacing progression.
- Controls: 10–13px radius.
- Standard surfaces: 15–18px radius.
- Featured surfaces: 20–24px radius.
- Sheets: 26px radius.
- Pills only where the semantic form is genuinely pill-like.

### Elevation

- Level 0: flat background.
- Level 1: border and tiny ambient shadow.
- Level 2: interactive card elevation.
- Level 3: modal/search elevation.
- Featured dark/indigo surfaces use contrast instead of heavy shadow.

### Icons

Lucide React is the single icon system throughout.

### Motion

- 180ms control feedback.
- 280–350ms sheets and dialogs.
- Purposeful page entrance only.
- Full `prefers-reduced-motion` override.

## 6. State coverage

Implemented state patterns include:

- data unavailable notices;
- intentional empty surfaces;
- recoverable order lookup error;
- support form success/disconnected explanation;
- disabled unavailable payment and purchase actions;
- unknown status rather than a false operational status;
- checkout progress and completion;
- focus, hover, active, and disabled controls;
- responsive bottom sheet and mobile navigation states.

Skeleton loading components should be connected when real asynchronous queries are introduced, because their final geometry depends on the API response shapes.

## 7. Mobile-first behavior

- Fixed five-destination bottom navigation.
- Thumb-reachable “More” bottom sheet.
- Edge-safe padding with `env(safe-area-inset-bottom)`.
- 44px primary action targets.
- Full-screen mobile search.
- Bottom-docked mobile checkout.
- Responsive order timeline that changes from horizontal to vertical.
- No permission requests during onboarding.

## 8. Integration boundaries

Production implementation still requires documented contracts for:

1. Authentication and account profile.
2. Service catalogue, pricing, requirements, processing estimates, and comparison-label rules.
3. Verification and OTP/PIN orchestration.
4. Payment provider hand-off and wallet ledger.
5. Order lifecycle and timestamps.
6. Refund eligibility and status.
7. Rewards ledger, levels, achievements, and redemption catalogue.
8. Events, rules, leaderboards, and eligibility.
9. Review verification and aggregation.
10. Notification preferences and inbox delivery.
11. Support ticketing and service-level expectations.
12. Operational monitoring and incident status.

These should be integrated without replacing unknown values with optimistic defaults.
