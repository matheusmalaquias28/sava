import type { ReactNode } from "react";
import type { DetailIcon as Name } from "@/lib/details/types";

const paths: Record<Name, ReactNode> = {
  lock: <path d="M6.5 10.5V8a5.5 5.5 0 0 1 11 0v2.5M5 10.5h14v10H5zM12 14.5v2.5" />,
  mail: <path d="M3.5 6h17v12h-17zM4 6.5l8 6.5 8-6.5M15.5 15.5l3 3M18.5 15.5l-3 3" />,
  database: <path d="M5 6c0-1.4 3.1-2.5 7-2.5s7 1.1 7 2.5-3.1 2.5-7 2.5S5 7.4 5 6Zm0 0v12c0 1.4 3.1 2.5 7 2.5M19 6v5M5 12c0 1.4 3.1 2.5 7 2.5M16.5 15.5l4 4M20.5 15.5l-4 4" />,
  user: <path d="M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5 20.5c.7-3.6 3.5-5.5 7-5.5 1.3 0 2.4.2 3.4.7M17.5 15v3M17.5 20.5v.1" />,
  fire: <path d="M12 21c3.6 0 6-2.5 6-5.8 0-3.6-2.6-5.4-3.6-8.7-1.9 1.4-2.6 3.3-2.4 5.2-1.3-.7-2.1-2-2.3-3.5C7.6 10 6 12.4 6 15.2 6 18.5 8.4 21 12 21Z" />,
  bolt: <path d="M13 3 5 13.5h6L10 21l8-10.5h-6z" />,
  water: <path d="M12 3.5S6 10 6 14.2A6 6 0 0 0 18 14.2C18 10 12 3.5 12 3.5ZM9 15a3 3 0 0 0 3 3" />,
  theft: <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6zM12 8v5M12 16v.1" />,
  truck: <path d="M2.5 6.5h11v10h-11zM13.5 9.5h4L21 13v3.5h-7.5M6 19a1.8 1.8 0 1 0 0-3.6A1.8 1.8 0 0 0 6 19Zm11 0a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z" />,
  gear: <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8" />,
  heart: <path d="M12 20s-7.5-4.4-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.6 12 20 12 20ZM8.5 12h2l1-2 1.5 4 1-2h1.5" />,
  scale: <path d="M12 4v16M7 20h10M5 7h14M5 7 2.5 13a3 3 0 0 0 5 0zM19 7l-2.5 6a3 3 0 0 0 5 0z" />,
  document: <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8zM14 3v5h5M8.5 12h7M8.5 15.5h5" />,
  money: <path d="M3 7h18v10H3zM12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6 10v.1M18 14v.1" />,
  clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7.5V12l3 2" />,
  home: <path d="M3.5 10.5 12 4l8.5 6.5M5.5 9v11h13V9M10 20v-5.5h4V20" />,
  building: <path d="M4 21V5l8-2v18M12 21V8l8 3v10M3 21h18M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2" />,
  chart: <path d="M3 21h18M5 17l4.5-4.5 3.5 3L20 8.5M15 8.5h5v5" />,
  box: <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5zM3.5 7.5 12 12l8.5-4.5M12 12v9" />,
};

export function DetailIcon({ name, className }: { name: Name; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {paths[name]}
    </svg>
  );
}
