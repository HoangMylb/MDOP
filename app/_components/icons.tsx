import type { ReactNode } from "react";

function IconFrame({ children }: Readonly<{ children: ReactNode }>) {
  return <span className="icon-mark" aria-hidden="true">{children}</span>;
}

export function ArrowUpRightIcon() {
  return <IconFrame><svg viewBox="0 0 16 16" fill="none"><path d="M3 13 13 3M5 3h8v8" /></svg></IconFrame>;
}

export function ArrowLeftIcon() {
  return <IconFrame><svg viewBox="0 0 16 16" fill="none"><path d="M13 8H3m4-4-4 4 4 4" /></svg></IconFrame>;
}

export function ArrowUpIcon() {
  return <IconFrame><svg viewBox="0 0 16 16" fill="none"><path d="M8 13V3m-4 4 4-4 4 4" /></svg></IconFrame>;
}

export function SearchIcon() {
  return <IconFrame><svg viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.5" /><path d="m10.5 10.5 3 3" /></svg></IconFrame>;
}

export function CloseIcon() {
  return <IconFrame><svg viewBox="0 0 16 16" fill="none"><path d="m4 4 8 8M12 4l-8 8" /></svg></IconFrame>;
}

export function PersonIcon() {
  return <IconFrame><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="7" r="4" /><path d="M4 22v-2a8 8 0 0 1 16 0v2" /></svg></IconFrame>;
}

export function RoadIcon() {
  return <IconFrame><svg viewBox="0 0 24 24" fill="none"><path d="m4 21 5-18M20 21 15 3M12 4v3m0 5v3m0 5v1" /></svg></IconFrame>;
}

export function SeatIcon() {
  return <IconFrame><svg viewBox="0 0 24 24" fill="none"><path d="M7 3v7l-3 7h12l2-4V6h-5v7h-3" /><path d="M4 21h14" /></svg></IconFrame>;
}

export function FlagIcon() {
  return <IconFrame><svg viewBox="0 0 24 24" fill="none"><path d="M5 22V3m0 1h11l-1 5 1 5H5" /></svg></IconFrame>;
}

export function CarIcon() {
  return <IconFrame><svg viewBox="0 0 24 24" fill="none"><path d="m4 15 2-6h12l2 6v5H4v-5Z" /><path d="m8 9 2-3h4l2 3M7 17h.01M17 17h.01M4 20v1m16-1v1" /></svg></IconFrame>;
}

export function WrenchIcon() {
  return <IconFrame><svg viewBox="0 0 24 24" fill="none"><path d="m14 6 4-4 2 2-4 4M3 21l9-9M7 3l3 3-5 5-3-3 5-5Z" /></svg></IconFrame>;
}

export function ShieldIcon() {
  return <IconFrame><svg viewBox="0 0 24 24" fill="none"><path d="M12 3 19 6v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg></IconFrame>;
}

export function FinanceIcon() {
  return <IconFrame><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="13" height="18" rx="1" /><path d="M8 7h5M8 11h5M8 15h3M18 13l3 2v5l-3 1-3-1v-5l3-2Z" /></svg></IconFrame>;
}

export function BagIcon() {
  return <IconFrame><svg viewBox="0 0 24 24" fill="none"><path d="M5 8h14l-1 13H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg></IconFrame>;
}
