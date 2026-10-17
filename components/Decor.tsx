type DecorVariant = "rings" | "dots" | "arc" | "blob" | "waves";

type DecorProps = {
  variant: DecorVariant;
  className?: string;
};

export function Decor({ variant, className = "" }: DecorProps) {
  const base = `pointer-events-none absolute ${className}`;

  if (variant === "rings") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        fill="none"
        className={`${base} anim-spin text-brand/15`}
      >
        <circle cx="200" cy="200" r="199" stroke="currentColor" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" />
        <circle cx="200" cy="200" r="101" stroke="currentColor" />
        <circle cx="200" cy="200" r="52" stroke="currentColor" />
        <circle cx="200" cy="1" r="6" fill="currentColor" />
      </svg>
    );
  }

  if (variant === "dots") {
    const step = 28;
    const count = 9;
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 240 240"
        fill="none"
        className={`${base} anim-drift text-fg/20`}
      >
        {Array.from({ length: count }).map((_, row) =>
          Array.from({ length: count }).map((__, col) => (
            <circle
              key={`${row}-${col}`}
              cx={6 + col * step}
              cy={6 + row * step}
              r="1.6"
              fill="currentColor"
            />
          )),
        )}
      </svg>
    );
  }

  if (variant === "arc") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        fill="none"
        className={`${base} anim-float`}
      >
        <path
          d="M200 0A200 200 0 0 1 0 200V0Z"
          fill="var(--brand)"
          opacity="0.08"
        />
        <path
          d="M200 40A160 160 0 0 1 40 200"
          stroke="var(--brand)"
          strokeWidth="2"
          opacity="0.25"
          fill="none"
        />
      </svg>
    );
  }

  if (variant === "blob") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 300 300"
        fill="none"
        className={`${base} anim-drift-slow`}
      >
        <path
          d="M150 20c60 0 130 40 130 110s-70 150-130 150S20 200 20 130 90 20 150 20Z"
          fill="var(--brand)"
          opacity="0.06"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 120"
      fill="none"
      className={`${base} anim-drift-x`}
    >
      <path
        d="M0 90c50 0 70-50 120-50s70 50 120 50 70-50 120-50"
        stroke="var(--brand)"
        strokeWidth="2"
        opacity="0.2"
        fill="none"
      />
      <path
        d="M0 110c50 0 70-50 120-50s70 50 120 50 70-50 120-50"
        stroke="var(--brand)"
        strokeWidth="2"
        opacity="0.1"
        fill="none"
      />
    </svg>
  );
}
