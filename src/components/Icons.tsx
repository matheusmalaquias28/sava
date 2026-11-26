import type { IconName } from "@/lib/solutions";
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export function ArrowUpRight(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function Plus(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Check(props: P) {
  return (
    <svg {...base(props)}>
      <path d="m5 12.5 4.2 4.2L19 7" />
    </svg>
  );
}

export function WhatsApp(props: P) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.24-9.43 9.44-9.43a9.38 9.38 0 0 1 9.43 9.44c0 5.2-4.23 9.43-9.44 9.43m8.03-17.46A11.27 11.27 0 0 0 12.05.71C5.79.71.7 5.8.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.33 11.33 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.35-11.34 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}

export function Phone(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

export function Mail(props: P) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  );
}

export function Pin(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function Instagram(props: P) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
    </svg>
  );
}

export function Linkedin(props: P) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

const solutionIcons: Record<IconName, (p: P) => React.ReactElement> = {
  building: (p) => (
    <svg {...base(p)}>
      <path d="M4 21V5l8-2v18M12 21V8l8 3v10M3 21h18M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2" />
    </svg>
  ),
  truck: (p) => (
    <svg {...base(p)}>
      <path d="M2 6h11v10H2zM13 9h4.5L21 12.5V16h-8" />
      <circle cx="6" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  ),
  ship: (p) => (
    <svg {...base(p)}>
      <path d="M3 15h18l-2.5 4.5h-13zM6 15V9h12v6M9 9V5h6v4M2 21c1.5 0 2-.8 3.3-.8S7 21 8.3 21s2-.8 3.3-.8 2 .8 3.4.8 2-.8 3.3-.8 1.8.8 3.7.8" />
    </svg>
  ),
  people: (p) => (
    <svg {...base(p)}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c.6-3.4 3-5.5 6-5.5s5.4 2.1 6 5.5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16.5 14.6c2.4.2 4 2 4.5 4.6" />
    </svg>
  ),
  heart: (p) => (
    <svg {...base(p)}>
      <path d="M12 20s-7.5-4.4-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.6 12 20 12 20Z" />
      <path d="M8.5 12h2l1-2 1.5 4 1-2h1.5" />
    </svg>
  ),
  crown: (p) => (
    <svg {...base(p)}>
      <path d="m3 8 4.5 4L12 5l4.5 7L21 8l-2 10H5z" />
      <path d="M5 21h14" />
    </svg>
  ),
  shield: (p) => (
    <svg {...base(p)}>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6z" />
      <rect x="9" y="10.5" width="6" height="5" rx="1" />
      <path d="M10.2 10.5V9a1.8 1.8 0 0 1 3.6 0v1.5" />
    </svg>
  ),
  gavel: (p) => (
    <svg {...base(p)}>
      <path d="m13.5 4.5 6 6M11 7l6 6M12.3 5.7l-4.6 4.6 6 6 4.6-4.6zM9.5 13.5 3 20M4 21h9" />
    </svg>
  ),
  scale: (p) => (
    <svg {...base(p)}>
      <path d="M12 4v16M7 20h10M5 7h14M12 4l1 1.5" />
      <path d="M5 7 2.5 13a3 3 0 0 0 5 0zM19 7l-2.5 6a3 3 0 0 0 5 0z" />
    </svg>
  ),
  contract: (p) => (
    <svg {...base(p)}>
      <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z" />
      <path d="M14 3v5h5M8.5 12h7M8.5 15.5h4M14 18l1.4 1.2L18 16.5" />
    </svg>
  ),
  chart: (p) => (
    <svg {...base(p)}>
      <path d="M3 21h18M5 17l4.5-4.5 3.5 3L20 8.5" />
      <path d="M15 8.5h5v5" />
    </svg>
  ),
};

export function SolutionIcon({ name, ...props }: { name: IconName } & P) {
  const C = solutionIcons[name];
  return <C {...props} />;
}

/** Ícones de linha extras do menu. */
const navIcons = {
  grid: (p: P) => (
    <svg {...base(p)}>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.2" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.2" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.2" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.2" />
    </svg>
  ),
} satisfies Record<string, (p: P) => React.ReactElement>;

export type NavIconName = keyof typeof navIcons;

export function NavIcon({ name, ...props }: { name: NavIconName } & P) {
  const C = navIcons[name];
  return <C {...props} />;
}
