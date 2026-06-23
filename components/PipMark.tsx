/**
 * PipMark — the OJ Pippin emblem. A single seed ("pip"), a quiet nod to the
 * name without resorting to a literal apple. An outlined vesica with a soft
 * central vein. Scales cleanly and can be stroke-drawn (see Preloader).
 */
export default function PipMark({
  className = "",
  stroke = "currentColor",
  strokeWidth = 1.4,
}: {
  className?: string;
  stroke?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 96"
      className={className}
      fill="none"
      aria-label="OJ Pippin"
    >
      {/* Seed outline */}
      <path
        d="M32 4 C 15 28, 15 68, 32 92 C 49 68, 49 28, 32 4 Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      {/* Central vein */}
      <path
        d="M32 16 C 27 40, 27 58, 32 80"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
