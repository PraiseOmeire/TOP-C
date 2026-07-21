# Experience → Footer — Combined Design Spec (Increments B–E)

**Date:** 2026-07-21
**Status:** Approved, ready for implementation
**Part of:** the Teens of Purpose site build. Increment A (Speakers) shipped separately. This doc covers the **remaining homepage sections B–E in one pass** — all rendered on the homepage (`app/page.tsx`), not separate routes.

---

## 1. Goal

Complete the homepage below the Speakers teaser with four content sections plus a footer:

- **B. Experience** — the substance of the weekend (Worship, Bible Study, Skill Acquisition: AI/Tech + Design).
- **D. Schedule — Two Days** — the two-day timetable with times, plus the Bible Quiz competition.
- **C. Parents & Leaders** — the one section addressed to adults; a trust/reassurance beat.
- **E. Final CTA** — the closing full-color register push.
- **E. Footer** — global site footer.

Design comes from `docs/DESIGN_SYSTEM.md` ("Purpose in Motion"), optimized with the frontend-design skill: one loud signature moment (the Schedule scoreboard), everything else quiet and disciplined; copy written from the reader's side.

## 2. Homepage section order & tonal rhythm

The design system's rule is `DARK → LIGHT → COLOR`, no two same-tone beats adjacent. Final homepage order:

| Order | Section | Component | Tone | Anchor id |
|---|---|---|---|---|
| 1 | Hero *(built)* | `Hero` | DARK | — |
| 2 | More Than A Conference *(built)* | `MoreThanAConference` | LIGHT | `about` |
| 3 | Conference + Countdown *(built)* | `ConferenceSection` | COLOR | `conference` |
| 4 | Speakers teaser *(built)* | `SpeakersTeaser` | DARK | `speakers` |
| 5 | **Experience** | `ExperienceSection` | LIGHT (cream) | `experience` |
| 6 | **Schedule — Two Days** | `ScheduleSection` | DARK | `schedule` |
| 7 | **Parents & Leaders** | `ParentsLeaders` | LIGHT (warm-white/blue) | `parents-and-leaders` |
| 8 | **Final CTA** | `FinalCta` | COLOR (red-orange) | `register` |
| 9 | **Footer** | `Footer` (global, in `layout.tsx`) | DARK | — |

Resulting beat sequence from Speakers on: `D → L → D → L → C → D` — clean alternation, and the Schedule (DARK) separates the two LIGHT sections.

## 3. Decisions (resolved during brainstorming)

- **Experience vs Schedule:** two separate sections — Experience is thematic (LIGHT), Schedule is the timetable (DARK). Not merged into one day-by-day block.
- **Parents & Leaders third card:** **Genuine Community** (alongside the given Safe Environment and Biblical Teaching).
- **Footer includes:** quick links, social media, contact email, location & host — all four.
- **Bible Quiz** lives in the Schedule section as a featured strip with a small red-orange "win a prize" accent.
- **Footer is global** (rendered from `layout.tsx`), so `/speakers` gets it too.

## 4. Section designs

### 4.1 Experience — `ExperienceSection` (LIGHT, cream)

- **Background:** Warm Cream (`bg-warm-cream`), near-black type — the design system's reflective/editorial mode.
- **Heading:** `SectionHeading` (light), eyebrow `"The Experience"`, a display title (e.g. "What The Weekend Holds").
- **Body:** a **magazine-style program index** — full-width rows separated by 1px hairline rules (not boxed cards). Each row: an Electric-Blue kicker tag + big Unbounded title + one honest line of copy.
  1. **Worship** — tag *Presence*.
  2. **Bible Study** — tag *The Word*.
  3. **Skill Acquisition** — tag *New This Year* — this row **breaks the pattern**, expanding into two sub-cards, **AI & Tech** and **Design**. This visual break is earned because "new this year" is true information, not decoration (frontend-design: structure encodes content). This is the section's quiet signature.
- **Content model:** `content/experience.ts` — `ExperiencePillar[]` where a pillar may carry optional `items: { name; blurb }[]` (used by Skill Acquisition) and a `tag`.
- **Motion:** staggered hairline-row reveals on scroll (shared `EASE`, reduced-motion respected).

### 4.2 Schedule — Two Days — `ScheduleSection` (DARK, signature)

- **Background:** Purpose Black, white type.
- **Signature:** **oversized Bebas Neue** day/time numerals treated as a scoreboard graphic — the only place besides the countdown these poster numerals appear.
- **Layout:** two day blocks side-by-side on desktop, stacked on mobile:
  - **DAY 1 · AUG 14 · 2:00–6:00 PM** — opening session list.
  - **DAY 2 · AUG 15 · 8:00 AM–4:00 PM** — labeled *main event*; fuller session list (worship, bible study, skill sessions, quiz).
  - Each block: "DAY 1/2" + date + time range in Bebas, then a short session list in Plus Jakarta Sans.
- **Bible Quiz feature:** a full-width strip beneath the day blocks — title, one line ("test your knowledge, win a prize"), and a small **Signal Red-Orange** "Win a prize" tag (the one earned urgency flourish in a dark frame; red stays rare per the color rules).
- **Content model:** `content/schedule.ts` — `ScheduleDay[]` (`{ label; date; timeRange; sessions: string[]; isMain? }`) and a `bibleQuiz: { title; blurb; prizeTag }`.
- **Data reconciliation:** update `content/conference.ts` `targetDateISO` from `2026-08-14T09:00:00+01:00` to `2026-08-14T14:00:00+01:00` so the countdown matches Day 1's 2 PM start. Single-line change; `ConferenceSection`/`Countdown` consume it unchanged.

### 4.3 Parents & Leaders — `ParentsLeaders` (LIGHT, blue/trust)

- **Background:** Warm White (`bg-warm-white`) — deliberately cooler than Experience's cream — with Electric-Blue accents. The single blue-coded beat.
- **Tone:** calmer, more whitespace, less excitement — the section that speaks to adults. The lead/reassurance line is set in **Fraunces** (intimate voice), not Unbounded.
- **Heading:** eyebrow `"Parents & Leaders"`; title is the parent's own question — **"Can I trust this with my teenager?"** (frontend-design: write from the reader's side).
- **Cards:** three restrained cards, thin 1px hairline frames, an Electric-Blue kicker tag each, minimal chrome:
  1. **Safe Environment** — experienced volunteers, safeguarding.
  2. **Biblical Teaching** — Christ-centered, sound doctrine, experienced ministers.
  3. **Genuine Community** — healthy friendships, a place to belong.
- **Content model:** `content/parents-leaders.ts` — `TrustCard[]` (`{ id; tag; title; body }`).

### 4.4 Final CTA — `FinalCta` (COLOR, red-orange)

- **Background:** full-bleed Signal Red-Orange — the homepage's second and final full-color moment, echoing the Hero.
- **Content:** oversized Unbounded headline allowed to crop at the viewport edge; a *bring-a-friend* supporting line; a **black-on-red** Register button (per the design system's CTA-on-color treatment); date + location repeated (`August 14 & 15, 2026 — Magboro, Ogun State`, sourced from `conferenceDetails`).
- **Anchor:** `id="register"` — the target of every "Register"/"Get Your Ticket" link site-wide.
- **Motion:** a single confident reveal; no colored flashes; restrained.

### 4.5 Footer — `Footer` (DARK, global)

- **Placement:** rendered in `app/layout.tsx` after `{children}`, inside the existing flex-column body, so it sits at the bottom of every page.
- **Background:** Purpose Black, editorial layout, thin hairline dividers, monochrome line icons.
- **Content (all four picks):**
  - Large wordmark + Purpose Mark.
  - **Quick links:** homepage section anchors (About/`#about`, Conference/`#conference`, Speakers/`#speakers`, Experience/`#experience`, Parents & Leaders/`#parents-and-leaders`) + Register.
  - **Social media:** Instagram / X / TikTok / YouTube — minimal mono line icons, placeholder handles/URLs.
  - **Contact email:** placeholder enquiries address.
  - **Location & host:** Magboro, Ogun State + host/organizing church name + conference dates.
  - Copyright line.
- **Content model:** `content/site.ts` — `{ socials: {label; href}[]; contactEmail; location; hostChurch; quickLinks: {label; href}[] }`, all placeholder, clearly swappable.

## 5. Navigation reconciliation

Because every section now lives on the homepage, the nav's non-existent routes become homepage anchors:

- In `components/navigation/Navigation.tsx`, change `NAV_LINKS` hrefs: `About → /#about`, `Conference → /#conference`, `Experience → /#experience`, `Parents & Leaders → /#parents-and-leaders`. `Register` stays `/#register` (or `/register` if a route is added later — for now the homepage CTA anchor).
- Each homepage section gets the matching `id` (see §2 table) so the anchors resolve. `Speakers` remains reachable via the teaser link plus `#speakers`.
- The active-link styling keyed on `pathname` still works for `/` vs `/speakers`; anchors don't change `pathname`, which is acceptable (no per-section active state required).

## 6. Components & files

New content files (typed placeholder data, `conference.ts` pattern):
`content/experience.ts`, `content/schedule.ts`, `content/parents-leaders.ts`, `content/site.ts`.

New components:

| Path | Responsibility |
|---|---|
| `components/sections/experience/ExperienceSection.tsx` | Cream program-index section |
| `components/sections/experience/ExperienceRow.tsx` | One hairline-ruled pillar row (+ optional sub-cards) |
| `components/sections/schedule/ScheduleSection.tsx` | Dark two-day scoreboard + quiz strip |
| `components/sections/schedule/DayBlock.tsx` | One day's Bebas time block + session list |
| `components/sections/parents-leaders/ParentsLeaders.tsx` | Trust section |
| `components/sections/parents-leaders/TrustCard.tsx` | One trust card |
| `components/sections/final-cta/FinalCta.tsx` | Red-orange closing CTA |
| `components/footer/Footer.tsx` | Global footer |

Edits: `app/page.tsx` (add sections 5–8 in order, with anchor ids), `app/layout.tsx` (render `Footer`), `components/navigation/Navigation.tsx` (anchor hrefs), `content/conference.ts` (targetDateISO 14:00).

## 7. Motion & accessibility

- **Motion:** Framer Motion, shared `EASE = [0.16, 1, 0.3, 1]`, hard-edged `whileInView` reveals (`once: true`), staggered — consistent with existing sections. `useReducedMotion` respected everywhere.
- **Accessibility:** each section `aria-labelledby` its heading; one `<h1>` remains the Hero (these are `<h2>`); social icon links have accessible labels; the Register button/link is a real semantic control; anchor targets have matching `id`s; color is never the sole carrier of meaning (tags carry text).

## 8. Verification

- `next build` + TypeScript + `eslint` (new files) pass.
- Homepage renders sections in the §2 order; tonal rhythm holds (`D→L→D→L→C→D`).
- Nav + footer quick links scroll to the correct sections via anchors.
- Countdown target matches Day 1 (2 PM).
- Footer appears on both `/` and `/speakers`.
- Reduced-motion: no transform animations when preferred.
- Responsive: day blocks stack, program rows/sub-cards reflow, CTA type scales, footer columns stack on mobile.
