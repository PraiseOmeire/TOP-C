type PurposeMarkProps = {
  className?: string;
};

/**
 * The Ascending Line — a diagonal stroke terminating in a Signal Red-Orange
 * point. Direction/becoming, deliberately not a flame. See DESIGN_SYSTEM.md,
 * "The Purpose Mark."
 */
export function PurposeMark({ className }: PurposeMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <line
        x1="4"
        y1="20"
        x2="17"
        y2="7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="19" cy="5" r="2.5" fill="#FF3B1F" />
    </svg>
  );
}
