# Speakers — Design Spec (Increment A)

**Date:** 2026-07-21
**Status:** Approved, ready for implementation planning
**Part of:** the multi-increment build of the Teens of Purpose site. Sequence: **A. Speakers** → B. Experience → C. Parents & Leaders → D. Schedule & Bible Quiz → E. Final CTA + Footer. Each increment is designed, approved, and built on its own.

---

## 1. Goal

Introduce the conference speakers across two surfaces:

1. A **homepage teaser** — three portraits + names — that lets a visitor recognise who's coming, then invites them onward.
2. A **dedicated `/speakers` page** — alternating portrait/notes rows with a short bio for each speaker, closing on the Organizer/Host.

This is the **Speakers DARK beat** in the design system's `DARK → LIGHT → COLOR → DARK → LIGHT` homepage rhythm (Hero → More Than A Conference → Conference → **Speakers** → Experience).

## 2. Scope

**In scope**
- `content/speakers.ts` — typed content model + placeholder data for 3 speakers and 1 organizer.
- Homepage `SpeakersTeaser` section, wired into `app/page.tsx` after `ConferenceSection`.
- `/speakers` route (`app/speakers/page.tsx`) with three alternating speaker rows + an Organizer/Host block.
- Speaker components under `components/sections/speakers/`.
- Small refactor to `ImagePlaceholder` to support non-rounded (bleed) portraits.

**Out of scope (later increments)**
- Nav change — Speakers gets **no** primary nav slot; the page is reached via the teaser's "Meet the speakers →" link only.
- Per-speaker detail pages (the `slug` field is reserved for future use, not routed yet).
- Real photography/bios — placeholders now, swapped later via `imageSrc`.

## 3. Decisions (resolved during brainstorming)

- **Organizer placement:** a distinct "Your Host / The Convener" block at the **foot of the `/speakers` page**, below the three speakers — framed as host, not a fourth speaker. (Not on the homepage.)
- **Speakers in nav:** no. Homepage-teaser link is the only entry point.
- **Host block tone:** the page is DARK (Purpose Black); the host block **shifts to Warm Cream** — the design system's intimate/reflective mode — for a warm closing beat and a clear break from the speakers.
- **Mobile teaser layout:** horizontal **scroll-snap swipe** (the design system's called-out mobile speaker-grid behavior), not a vertical stack. Desktop is a 3-up grid.

## 4. Content model — `content/speakers.ts`

Mirrors the placeholder-data pattern of `content/conference.ts` (typed shape + exported constant, swappable for CMS later).

```ts
export type Speaker = {
  /** Reserved for future per-speaker routes; not routed in this increment. */
  slug: string;
  name: string;
  /** Electric-Blue credibility tag, e.g. "Guest Minister", "Worship Artist". */
  role: string;
  /** One line shown under the name on the homepage teaser. */
  hook: string;
  /** 2–3 sentences on what they do, shown on the /speakers page row. */
  bio: string;
  /** Public path to the real photo, e.g. "/media/speakers/ada.jpg". Placeholder until then. */
  imageSrc?: string;
};

export type Organizer = {
  name: string;
  /** e.g. "Convener". */
  role: string;
  /** Warm note on her passion for teenagers. */
  note: string;
  imageSrc?: string;
};

export const speakers: Speaker[];   // length 3, placeholder data
export const organizer: Organizer;  // placeholder data
```

Placeholder copy is on-brand and clearly generic (e.g. "Speaker One", role "Guest Minister") so the sections look finished with zero assets — same philosophy as `ImagePlaceholder` and the hero video placeholder.

## 5. Homepage teaser — `SpeakersTeaser` (DARK)

- **Placement:** `app/page.tsx`, immediately after `<ConferenceSection />`, before Experience (future).
- **Tone:** Purpose Black background, white type — DARK editorial mode.
- **Heading:** reuses `SectionHeading` with `tone="dark"` and `eyebrow="Speakers"`.
- **Cards:** three `SpeakerCard`s. Each: B&W portrait **bleeding to the card edge (no radius)**, name in bold Unbounded, a small **Electric-Blue** role tag, one-line `hook` beneath.
- **Onward link:** "Meet the speakers →" linking to `/speakers`.
- **Responsive:**
  - **Desktop (lg+):** 3-up grid with thin 1px hairline gutters (magazine-grid feel; no boxed/shadowed cards).
  - **Mobile:** horizontal **scroll-snap** carousel — swipe through portraits — using native overflow scroll, no Stories/Reels chrome.

## 6. `/speakers` page — `app/speakers/page.tsx`

- **Page metadata:** `title`/`description` set for the route; a single `<h1>` ("Speakers" / equivalent) for the page.
- **Speaker rows:** three `SpeakerRow`s, DARK (Purpose Black, white type), alternating via a `reverse` prop:
  - Speaker 1 — portrait **left**, notes right.
  - Speaker 2 — notes left, portrait **right** (`reverse`).
  - Speaker 3 — portrait **left**, notes right.
  - Each row: full B&W portrait one side; name (Unbounded) + Electric-Blue role tag + `bio` the other. Asymmetric, generous spacing.
  - **Mobile:** each row collapses to portrait-over-notes (single column), `reverse` ignored.
- **Host block:** `OrganizerBlock` at the foot of the page. Background lifts from Purpose Black to **Warm Cream** (reflective mode): one **framed** portrait (rounded, with margin — reflective treatment) + her `note`, near-black type. Distinct from the speaker rows in both layout and tone.

## 7. Components & refactor

New, under `components/sections/speakers/`:

| Component | Responsibility | Depends on |
|---|---|---|
| `SpeakersTeaser.tsx` | Homepage DARK section; heading + 3 cards + onward link; grid↔swipe responsive | `SpeakerCard`, `SectionHeading`, `content/speakers` |
| `SpeakerCard.tsx` | Single teaser portrait card: bleed image, name, blue role tag, hook | `ImagePlaceholder`, one `Speaker` |
| `SpeakerRow.tsx` | One `/speakers` row; `reverse` prop for alternating layout | `ImagePlaceholder`, one `Speaker` |
| `OrganizerBlock.tsx` | Cream host block: framed portrait + note | `ImagePlaceholder`, `Organizer` |

**Refactor — `ImagePlaceholder`:** currently hard-codes `rounded-2xl` (reflective framing only). Add a `radius?: boolean` prop (default `true`). DARK bleed portraits (teaser cards, page rows) pass `radius={false}` for sharp, full-bleed edges per the design system; the cream host portrait keeps the default rounded frame. This avoids duplicating the placeholder/real-image logic.

## 8. Motion & accessibility

- **Motion:** Framer Motion with the shared `EASE = [0.16, 1, 0.3, 1]`; hard-edged, no-overshoot reveals on scroll-into-view (`whileInView`, `once: true`), staggered — consistent with `ConferenceSection` and `Navigation`. `useReducedMotion` respected (no transforms when reduced).
- **Accessibility:** every portrait has descriptive `alt` (falls back to the placeholder's `role="img"` + `aria-label` pattern); the teaser section is `aria-labelledby` its heading; `/speakers` has one `<h1>` and set page metadata; the onward link and role tags are real semantic elements.

## 9. Verification

- `next build` and `eslint` pass.
- Homepage renders the teaser after Conference; DARK rhythm holds.
- `/speakers` renders three alternating rows + the cream host block; layout reverses correctly on desktop and collapses cleanly on mobile.
- Placeholder portraits render on-brand with zero real assets.
- Reduced-motion: no transform animations when the user prefers reduced motion.
