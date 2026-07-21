# Teens of Purpose — Design System

**Direction: "Purpose in Motion"**

Energy comes from editorial confidence — typography, photography, scale, asymmetry, motion — not from decorative color, gradients, or literal fire imagery. Black and warm white are the visual foundation; color is a rare, earned event that marks a genuinely significant moment rather than a mood that saturates the whole site. Restraint is what makes the color land.

The idea of "purpose as fire/light" survives only as an underlying concept — becoming, direction, light entering a room — never as a visible flame motif.

---

## 1. Core Concept

Teens of Purpose should feel like a restrained, confident editorial brand, not a themed event. The site's excitement is produced by bold typography, cinematic black-and-white photography, and deliberate motion — with color deployed sparingly, so that when it appears, it means something.

---

## 2. Color System

### Foundation
| Name | Hex | Use |
|---|---|---|
| Purpose Black | `#0A0A0A` | Primary dark background |
| Warm White | `#F7F5F0` | Primary light background |
| Near-Black Text | `#111111` | Headline text on light backgrounds |

### Primary Accent — used sparingly
| Name | Hex | Use |
|---|---|---|
| Signal Red-Orange | `#FF3B1F` | CTAs, the Conference/Countdown color block, urgency moments |

More "alert/beacon" than "campfire" — reads as momentum, not flame.

### Secondary Accent
| Name | Hex | Use |
|---|---|---|
| Electric Blue | `#2A4DFF` | Trust/credibility signals — cooler contrast that also prevents the brand reading as fire-coded |

### Reflective Tone
| Name | Hex | Use |
|---|---|---|
| Warm Cream | `#EFE6D8` | Intimate/reflective sections, in place of plain white — feels like paper or candlelight without introducing a hue |

### Text
| Context | Headline | Body |
|---|---|---|
| On Purpose Black | `#F7F5F0` | `#B8B5AE` |
| On Warm White / Cream | `#111111` | `#55524A` |

### Rules: When Each Color Appears

- **Purpose Black** — the "bold and confident" mode: hero, speakers/talent, any section meant to feel editorial and assertive. White text, full-bleed imagery. Accent colors appear only as a small, deliberate flourish — never to fill the frame.
- **Warm White / Cream** — the "reflective" mode: manifesto, experience preview, parents & leaders, footer. Near-black text, framed imagery, generous pacing.
- **Signal Red-Orange** — earned and rare: every CTA button site-wide (the one place it appears outside a dedicated color moment), the Conference/Countdown color block, and any bring-a-friend/urgency moment. Never the dominant color of more than one section per scroll. Never paired with blue at full saturation in the same frame.
- **Electric Blue** — reserved for trust/credibility/skill signals: speaker credibility tags, schedule/workshop labels, links, the Parents & Leaders section. Deliberately cooler and quieter than red — marks "this is real," not "act now."
- **Never:** gradients as a default surface treatment, decorative textures/patterns, two accent colors dominant in the same section, tinted backgrounds outside the designated color/cream moments.

### The Rhythm

**DARK → LIGHT → COLOR → DARK → LIGHT**, repeating down the page. Color is a beat in a sequence, not a constant — see the Appendix for a worked example.

---

## 3. Typography

All typefaces are freely available via Google Fonts.

| Role | Typeface | Notes |
|---|---|---|
| Display headlines | **Unbounded** | Weights 700–900 only, used sparingly for maximum impact — not throughout |
| Manifesto / testimony / intimate voice | **Fraunces** | Warm contemporary serif; avoids the "traditional church serif" cliché while keeping gravitas |
| Body copy, subheads, kicker labels | **Plus Jakarta Sans** | Humanist, warm, highly legible; also carries confident mid-size type so restraint reads correctly |
| Countdown / stat numerals | **Bebas Neue** | Condensed poster numerals only |

### Hierarchy (desktop → mobile)
| Level | Desktop | Mobile |
|---|---|---|
| Hero display | 96–160px | 48–64px |
| Section headline | 56–72px | 32–40px |
| Subhead | 28–36px | 20–24px |
| Body | 18–20px | 16–17px |

Hero display type is allowed to crop at the viewport edge intentionally. Body text runs larger than typical SaaS defaults — confident, not cautious.

### Structural Device

Small all-caps kicker labels ("SPEAKERS," "THE EXPERIENCE") in wide-tracked Plus Jakarta Sans replace colorful pill-chips as the default categorization device — a magazine section-tag, not a UI chip. Extreme scale contrast on the same spread (a huge headline beside a tiny caption) is a deliberate, recurring editorial move.

### Oversized Type as a Creative Device

- Words bleeding off-frame at the viewport edge
- Mixed-weight stacking (one word bold, rest thin, within the same line)
- Countdown digits treated as graphic elements, sized like a scoreboard, not a UI widget

---

## 4. Photography & Video Treatment

**The rule that does the most work:** photography and video default to **black-and-white / high-contrast monochrome**. Full color is reserved exclusively for the COLOR-beat sections (Conference/Countdown, Belonging, Final CTA). This makes color a signal — "pay attention, this moment matters" — rather than an ambient mood.

### Photography by subject
- **Worship** — concert energy, not a stage recording: silhouettes against gels, shot from inside the crowd, handheld, motion blur/grain acceptable.
- **Prayer/reflective** — intimate, shallow depth of field, close crops on hands/faces/journals, warm practical light, generous negative space — documentary, never staged-smile.
- **Friendships/candid** — handheld, in-between moments (mid-laugh, mid-walk), natural or golden-hour light — never posed eye-contact-with-camera.
- **Speakers** — dynamic low-angle shots, gesture caught mid-motion.
- **Talent performances** — frozen mid-action (mid-jump, mid-note).
- **Bible study/skill sessions** — natural light, close-ups on hands and materials, small-room energy, not stage energy.

All of the above are shot with full documentary/editorial energy but **graded in monochrome by default.**

### Video
- Hero and most motion content graded high-contrast black-and-white.
- Color is introduced as a **narrative event within the footage itself** — cutting to full color exactly when the manifesto line lands, or at a worship/altar-moment peak — so color becomes something that *arrives*, not a static setting.
- On scroll, a black-and-white photo can flash briefly into true color for a single frame the moment it fully enters the viewport, then settle back to monochrome — color as something momentarily *activated*, not passively displayed.
- Mobile: vertical-first (9:16/4:5) cuts as the primary asset, not a cropped-down 16:9. Autoplay muted, tap-to-unmute.
- Working without sound: meaning is carried by burned-in captions and kinetic on-screen word call-outs timed to the cut rhythm — the cut pace itself supplies the "music" even muted.

---

## 5. UI System

- **Buttons** — solid black or solid red-orange (rare), rectangular, no gradients, no offset sticker-shadow. A thin structural rule line above/below, closer to a publication's pull-quote treatment than a festival wristband.
- **Cards** — full-bleed editorial image with a small-caps caption beneath; minimal chrome; thin 1px hairline dividers between grid items rather than boxed, shadowed cards — a magazine-grid feel.
- **Navigation** — black text on white, or white text on black, depending on section; the Purpose Mark is the only color note in the nav itself. Mobile nav is a full-screen oversized-type takeover, not a cramped drawer.
- **Image treatments** — energetic sections: full-bleed, no radius, no border. Reflective sections: framed with margin, occasionally masked into an asymmetric shape.
- **Borders** — thin (1px) hairline rules as the default separator; thicker accent borders reserved for rare, deliberate emphasis.
- **Shadows** — none by default; flat throughout, in keeping with the editorial restraint.
- **Border radius** — sharp/none by default; small radius only where usability requires it (inputs, tags).
- **Icons** — minimal line icons, monochrome only; color reserved strictly for functional state (e.g., an active/selected indicator).
- **Tags/chips** — replaced by the kicker-label device (see Typography); where a literal tag is needed, keep it rectangular, uppercase, letter-spaced, and monochrome except where it deliberately signals credibility (blue) or urgency (red-orange).
- **Countdown timer** — hero-level graphic, not a small widget. Bold Bebas Neue numerals in black or red-orange. Digits change with a clean hard-cut swap rather than a soft flip, matching the overall restraint.
- **Speaker cards** — portrait bleeds to the card edge (no inner padding), name in bold Unbounded, one-line hook beneath, a small Electric Blue credibility tag ("Lead Pastor," "Worship Artist").

---

## 6. Layout Principles

- **Whitespace** is the energy/depth signal itself: dense in energetic sections, generous and single-column in reflective ones.
- **Asymmetry** by default — avoid centered-everything templates; offset headlines against imagery.
- **Overlapping elements** — photos overlapping type, countdown numerals overlapping background imagery.
- **Full-bleed imagery** reserved for energetic (DARK/COLOR) sections; reflective (LIGHT) sections deliberately break full-bleed with framed imagery.
- **Grids** — a loose 12-col structure as scaffolding, broken deliberately with asymmetric spans, not a centered blog column.
- **Large typography** as its own graphic layer throughout, sometimes cropped by the viewport edge.
- **Horizontal scroll** — used specifically for the Experience Preview (day-by-day) and the mobile Speaker grid, for a swipe-through feel without copying Stories/Reels UI chrome directly.
- **Layering/depth** — parallax-driven layered composition (background image, midground, foreground floating text) in the hero and Belonging sections only, for dimensionality without literal 3D.

---

## 7. Motion Language

Motion is confident and precise, not bouncy or effect-heavy:

- **Scroll reveals** — hard-edged: type slides in and stops firmly, no overshoot.
- **Image reveals** — clean wipes/masks, not crossfade-duotone effects.
- **Text reveals** — the manifesto reveals word-by-word or line-by-line, timed to scroll.
- **Hover (desktop)** — inverts black/white, or reveals the accent color as a small reward rather than a persistent decoration.
- **Parallax** — hero and Belonging sections only; respects `prefers-reduced-motion`.
- **Page transitions** — a simple, confident hard-cut or a quick directional wipe using the Purpose Mark shape — never a colored flash.
- **Animated counters** — count up on scroll-into-view with a slight bounce/settle at the end.
- **Countdown animation** — digits roll/flip like a scoreboard rather than snapping instantly.

---

## 8. Responsive / Mobile Philosophy

Mobile is not desktop-sections-stacked — content re-choreographs per breakpoint:

- The desktop's layered hero composition becomes a full-screen vertical video moment on mobile — closer to a Reels/TikTok *feel*, without copying its UI chrome.
- Horizontal swipe is used intentionally where content is naturally sequential (speaker cards, day-by-day experience) for a native swipe-through feel.
- Mobile nav is a full-screen, oversized-type takeover, not a cramped hamburger drawer.
- A persistent, thumb-reachable "Register" bottom bar on mobile — borrowed from mobile ticketing/commerce apps because it's genuinely useful here, not imitative.
- Reflective sections keep their generous whitespace on mobile rather than compressing — depth should feel *more* intimate on a personal device, not less.
- Motion scales down for mobile performance (fewer simultaneous parallax layers), but core kinetic-text and wipe transitions are preserved since they carry brand recognition, not decoration.
- Vertical-first (9:16/4:5) video assets are first-class, not a letterboxed crop of a 16:9 desktop asset.

---

## 9. The Purpose Mark

Three concepts, all abstract — none a literal flame.

1. **The Ascending Line** *(recommended starting point)* — a single bold diagonal stroke that starts thin and dark and terminates in a small, bold red-orange point at its tip. Suggests trajectory, direction, and "becoming." Doubles as a page-transition wipe (a line sweeping across the screen), an underline device beneath headlines, and a badge/wristband motif. Reads like a magazine masthead's directional rule mark. Simplest and most versatile across sizes, from favicon to billboard.
2. **The Aperture Mark** — a small geometric mark built from a few angular blades in a radial arrangement, able to render "closed" (a tight dark dot) or "open" (a wider geometric burst) — evoking a life opening toward light/perspective. Works well as an app icon and as a loading/reveal animation.
3. **The Beam Mark** — a bold geometric rectangle/beam, like a single ray of light cutting across darkness. Can double as an actual structural layout device — a beam used to separate sections or cut diagonally across a monochrome photo in red-orange or blue — not just a static logotype.

---

## Appendix: Homepage Rhythm Example

How the color rules play out across the first five homepage sections — **Hero → Manifesto → Conference → Speakers → Experience**, following the DARK → LIGHT → COLOR → DARK → LIGHT rhythm.

**Hero (DARK)** — Full-bleed, high-contrast black-and-white video of the crowd/worship on Purpose Black. Oversized white Unbounded wordmark. The single red-orange CTA button is the only color in the frame.
→ *Transition:* a hard cut from the dark video frame to a bright warm-cream frame as the visitor scrolls, with the Purpose Mark drawing itself once across the screen at the cut — like a page turning from a photograph to a blank journal page.

**Manifesto (LIGHT)** — Warm cream background, oversized black Fraunces line revealing word-by-word on scroll, maximum negative space, zero accent color — the breath after the loud hero.
→ *Transition:* as the last line settles, red-orange bleeds in from one edge of the frame, signaling "and here's where it becomes real, this year."

**Conference / Countdown (COLOR)** — The section arrives fully saturated in red-orange: a bold color block or color-graded key art, black or white countdown numerals, a huge theme title in Unbounded. This is the one visual spike of the whole homepage.
→ *Transition:* the color recedes as fast as it arrived — a hard vertical wipe (the Beam Mark) sweeps the red-orange off-screen to reveal Purpose Black beneath, like a spotlight swinging to the next act.

**Speakers (DARK)** — Purpose Black background, large-format black-and-white portrait grid, names in bold white Unbounded, Electric Blue appearing for the first time as a small credibility tag under each name — deliberately cool and quiet right after the hot color spike.
→ *Transition:* quieter this time — the black background gradually lightens into the next section's warm cream, like a light being turned up slowly.

**Experience Preview (LIGHT)** — Warm cream, calm day-by-day editorial layout, black type, thin hairline dividers, one blue tag per day-card — quiet and information-forward after four consecutive tonal swings.

Each transition uses a distinct device (hard cut, color bleed, wipe, gradual light-up) so the rhythm itself becomes recognizable, not just the palette.
