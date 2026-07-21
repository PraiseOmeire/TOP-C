export type SiteLink = {
  label: string;
  href: string;
};

export type SiteInfo = {
  /** Homepage section anchors + Register, for nav and footer quick links. */
  quickLinks: SiteLink[];
  /** Social profiles — placeholder handles/URLs until the real ones exist. */
  socials: SiteLink[];
  contactEmail: string;
  location: string;
  hostChurch: string;
  datesLabel: string;
  /** The real registration destination (external form later); placeholder for now. */
  registrationUrl: string;
};

// Single source of truth for cross-cutting site chrome (footer + nav anchors).
// Everything here is placeholder — swap emails, handles, and host details for
// the real ones later.
export const siteInfo: SiteInfo = {
  quickLinks: [
    { label: "About", href: "/#about" },
    { label: "Conference", href: "/#conference" },
    { label: "Speakers", href: "/#speakers" },
    { label: "Experience", href: "/#experience" },
    { label: "Parents & Leaders", href: "/#parents-and-leaders" },
    { label: "Register", href: "/#register" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "TikTok", href: "https://tiktok.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
  contactEmail: "hello@teensofpurpose.org",
  location: "Magboro, Ogun State",
  hostChurch: "Host Church Name",
  datesLabel: "August 14 & 15, 2026",
  registrationUrl: "#",
};
