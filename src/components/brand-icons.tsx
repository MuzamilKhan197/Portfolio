import type { SVGProps } from "react";

type BrandIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  strokeWidth?: number;
};

export function Github({
  size = 18,
  strokeWidth = 1.7,
  ...props
}: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.9a3.4 3.4 0 0 0-1-2.6c3.3-.4 6.7-1.6 6.7-7.3A5.7 5.7 0 0 0 19.2 4a5.3 5.3 0 0 0-.1-4s-1.3-.4-4.2 1.6a14.5 14.5 0 0 0-7.6 0C4.4-.4 3.1 0 3.1 0A5.3 5.3 0 0 0 3 4a5.7 5.7 0 0 0-1.5 4.2c0 5.7 3.4 6.9 6.7 7.3A3.4 3.4 0 0 0 7.2 18v4"
        transform="translate(1 1) scale(.9)"
      />
    </svg>
  );
}

export function Linkedin({
  size = 18,
  strokeWidth = 1.7,
  ...props
}: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="8" width="4" height="13" />
      <path d="M11 21V8h4v2c1-3 6-3 6 2v9h-4v-8c0-2-2-2-2 0v8" />
      <circle cx="5" cy="4" r="2" />
    </svg>
  );
}
