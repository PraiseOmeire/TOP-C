"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { PurposeMark } from "@/components/brand/PurposeMark";

// Everything lives on the homepage, so these are in-page anchors (see the
// section `id`s on the homepage sections).
const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Conference", href: "/#conference" },
  { label: "Experience", href: "/#experience" },
  { label: "Parents & Leaders", href: "/#parents-and-leaders" },
];

// Past this scroll distance the transparent bar over the Hero solidifies.
const SCROLL_THRESHOLD = 64;

// Hard-edged, no overshoot — per DESIGN_SYSTEM.md's Motion Language.
const EASE = [0.16, 1, 0.3, 1] as const;

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > SCROLL_THRESHOLD);
  });

  // Close the menu on navigation. Adjusted during render (React's recommended
  // pattern for resetting state when a prop changes) rather than in an
  // effect, so it doesn't trigger a cascading render.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (isMenuOpen) setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const isSolid = isScrolled || isMenuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          isSolid
            ? "border-white/10 bg-purpose-black/95 backdrop-blur-sm"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.15em] text-warm-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal focus-visible:text-signal"
          >
            <PurposeMark className="h-5 w-5 text-warm-white" />
            Teens of Purpose
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 lg:flex"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-sans text-sm uppercase tracking-[0.15em] transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal focus-visible:text-signal ${
                    isActive ? "text-signal" : "text-warm-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="https://forms.gle/ihdhsghatDEQnwtn8"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-signal bg-signal px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-purpose-black transition-colors duration-300 hover:bg-purpose-black hover:text-warm-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal sm:px-5 sm:py-2.5"
            >
              Register
            </Link>

            <MenuToggle
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu pathname={pathname} onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

function MenuToggle({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="relative flex h-10 w-10 flex-col items-center justify-center gap-[6px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal lg:hidden"
    >
      <motion.span
        className="block h-[1.5px] w-6 bg-warm-white"
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
        transition={{ duration: 0.25, ease: EASE }}
      />
      <motion.span
        className="block h-[1.5px] w-6 bg-warm-white"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="block h-[1.5px] w-6 bg-warm-white"
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
        transition={{ duration: 0.25, ease: EASE }}
      />
    </button>
  );
}

function MobileMenu({
  pathname,
  onClose,
}: {
  pathname: string | null;
  onClose: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusable = containerRef.current?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])"
    );
    focusable?.[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      id="mobile-menu"
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 z-40 flex flex-col justify-center bg-purpose-black px-6 lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: EASE }}
    >
      <nav aria-label="Primary" className="flex flex-col gap-1 pt-20">
        {NAV_LINKS.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: reduceMotion ? 0 : 0.08 * index,
                ease: EASE,
              }}
            >
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={onClose}
                className={`block border-b border-white/10 py-4 font-display text-4xl uppercase tracking-tight transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal focus-visible:text-signal ${
                  isActive ? "text-signal" : "text-warm-white"
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: reduceMotion ? 0 : 0.08 * NAV_LINKS.length,
          ease: EASE,
        }}
        className="pt-8"
      >
        <Link
          href="https://forms.gle/ihdhsghatDEQnwtn8"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="inline-block border border-signal bg-signal px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-purpose-black transition-colors duration-300 hover:bg-purpose-black hover:text-warm-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-white"
        >
          Register
        </Link>
      </motion.div>
    </motion.div>
  );
}
