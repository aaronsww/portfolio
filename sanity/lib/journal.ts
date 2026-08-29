import type { PortableTextBlock } from "next-sanity";

export type JournalKind = "project" | "trip" | "build" | "note";

export interface JournalImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  caption?: string;
}

export interface JournalEntry {
  _id: string;
  title: string;
  slug: string;
  date: string;
  kind: JournalKind;
  body?: PortableTextBlock[];
  images?: JournalImage[];
}

export function excerptFromBody(body: PortableTextBlock[] | undefined, maxLen = 160): string {
  if (!body) return "";

  const text = body
    .filter((block) => block._type === "block")
    .map((block) =>
      ((block.children as { text?: string }[]) || []).map((child) => child.text || "").join(""),
    )
    .join(" ")
    .trim();

  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).trimEnd() + "…";
}

export function groupEntriesByYear(entries: JournalEntry[]): [number, JournalEntry[]][] {
  const byYear = new Map<number, JournalEntry[]>();

  for (const entry of entries) {
    const year = new Date(entry.date).getFullYear();
    if (!byYear.has(year)) byYear.set(year, []);
    byYear.get(year)!.push(entry);
  }

  return [...byYear.entries()].sort(([a], [b]) => b - a);
}

export const kindLabels: Record<JournalKind, string> = {
  project: "Project",
  trip: "Trip",
  build: "Build",
  note: "Note",
};
