import Link from "next/link";
import { PurposeMark } from "@/components/brand/PurposeMark";
import { siteInfo } from "@/content/site";

/**
 * Minimal mono line icons for the socials (currentColor stroke, matching the
 * Purpose Mark's monochrome treatment). Keyed by the placeholder social label;
 * an unmapped label falls back to null so its text name still renders.
 */
function SocialIcon({ label }: { label: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    className: "h-5 w-5",
  } as const;

  switch (label) {
    case "Instagram":
      return (
        <svg {...common}>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="17" cy="7" r="1" fill="currentColor" />
        </svg>
      );
    case "X":
      return (
        <svg {...common}>
          <line
            x1="5"
            y1="5"
            x2="19"
            y2="19"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <line
            x1="19"
            y1="5"
            x2="5"
            y2="19"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "TikTok":
      return (
        <svg {...common}>
          <path
            d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 4c0 2.5 2 4.5 4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...common}>
          <rect
            x="2.5"
            y="6"
            width="19"
            height="12"
            rx="3.5"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M10.5 9.5 14.5 12l-4 2.5z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * Global site footer (DARK) rendered from the root layout, so it closes every
 * page. Editorial layout: wordmark + Purpose Mark, quick links, socials,
 * contact, and location/host — thin hairline dividers, monochrome throughout.
 */
export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-purpose-black px-6 pb-10 pt-20 text-warm-white sm:px-10 sm:pt-24 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12 lg:gap-16">
          {/* Wordmark */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-lg font-bold uppercase tracking-[0.15em] text-warm-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal focus-visible:text-signal"
            >
              <PurposeMark className="h-5 w-5 text-warm-white" />
              Teens of Purpose
            </Link>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-body-on-dark">
              A generation rising to know God and discover purpose.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-body-on-dark">
              Explore
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {siteInfo.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm uppercase tracking-[0.1em] text-warm-white transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal focus-visible:text-signal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="lg:col-span-2">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-body-on-dark">
              Follow
            </h2>
            <ul className="mt-5 flex flex-wrap gap-4">
              {siteInfo.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex text-warm-white transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal focus-visible:text-signal"
                  >
                    {/* Mono line icon; label kept for assistive tech (color is never the sole carrier of meaning). */}
                    <SocialIcon label={social.label} />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + location */}
          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-body-on-dark">
              Get in touch
            </h2>
            <address className="mt-5 flex flex-col gap-3 not-italic">
              <a
                href={`mailto:${siteInfo.contactEmail}`}
                className="font-sans text-sm text-warm-white transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal focus-visible:text-signal"
              >
                {siteInfo.contactEmail}
              </a>
              <a
                href={`tel:${siteInfo.phone.replace(/\s+/g, "")}`}
                className="font-sans text-sm text-warm-white transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal focus-visible:text-signal"
              >
                {siteInfo.phone}
              </a>
              <span className="font-sans text-sm text-body-on-dark">
                {siteInfo.location}
              </span>
              <span className="font-sans text-sm text-body-on-dark">
                {siteInfo.hostChurch}
              </span>
              <span className="font-sans text-sm text-body-on-dark">
                {siteInfo.datesLabel}
              </span>
            </address>
          </div>
        </div>

        <p className="pt-8 font-sans text-xs uppercase tracking-[0.2em] text-body-on-dark">
          &copy; {year} Teens of Purpose
        </p>
      </div>
    </footer>
  );
}
