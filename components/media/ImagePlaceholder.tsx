import Image from "next/image";

type ImagePlaceholderProps = {
  /** Public path to the real photo, e.g. "/media/community.jpg". Leave undefined to use the placeholder. */
  src?: string;
  alt: string;
  className?: string;
  /**
   * Reflective (LIGHT) images get a rounded frame; energetic (DARK) images
   * bleed to the edge with no radius per DESIGN_SYSTEM.md. Defaults to `true`
   * (rounded) so existing reflective callers are unaffected.
   */
  radius?: boolean;
};

// Radius signals energy vs. depth per DESIGN_SYSTEM.md's UI System:
// reflective sections round their images; energetic/DARK sections keep sharp,
// full-bleed edges.
const FRAME_BASE = "relative overflow-hidden";

/**
 * Placeholder-aware image slot for photography in LIGHT/reflective sections.
 * Once a real photo exists, pass `src` — everything else stays the same.
 * Until then, renders an on-brand monochrome placeholder (same technique as
 * HeroBackground's video placeholder) so sections still look finished with
 * zero assets.
 */
export function ImagePlaceholder({
  src,
  alt,
  className,
  radius = true,
}: ImagePlaceholderProps) {
  const frame = `${FRAME_BASE} ${radius ? "rounded-2xl" : ""}`;

  if (src) {
    return (
      <div className={`${frame} ${className ?? ""}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover [filter:grayscale(1)_contrast(1.1)]"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`${frame} bg-purpose-black ${className ?? ""}`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 25% 20%, rgba(255,255,255,0.12) 0%, rgba(10,10,10,0) 60%), radial-gradient(50% 50% at 80% 75%, rgba(255,255,255,0.07) 0%, rgba(10,10,10,0) 65%), linear-gradient(160deg, #0a0a0a 0%, #1a1a1a 55%, #0a0a0a 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
