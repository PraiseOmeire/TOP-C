import Link from "next/link";
import { PurposeMark } from "@/components/brand/PurposeMark";
import { siteInfo } from "@/content/site";

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
              className="flex items-center gap-2 font-display text-lg font-bold uppercase tracking-[0.15em] text-warm-white focus-visible:outline-none focus-visible:text-signal"
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
                    className="font-sans text-sm uppercase tracking-[0.1em] text-warm-white transition-colors hover:text-signal focus-visible:outline-none focus-visible:text-signal"
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
            <ul className="mt-5 flex flex-col gap-3">
              {siteInfo.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm uppercase tracking-[0.1em] text-warm-white transition-colors hover:text-signal focus-visible:outline-none focus-visible:text-signal"
                  >
                    {social.label}
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
                className="font-sans text-sm text-warm-white transition-colors hover:text-signal focus-visible:outline-none focus-visible:text-signal"
              >
                {siteInfo.contactEmail}
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
