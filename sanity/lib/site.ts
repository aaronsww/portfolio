import type { PortableTextBlock } from "next-sanity";

export interface About {
  eyebrow?: string;
  body?: PortableTextBlock[];
}

export interface ProjectImage {
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

export interface Project {
  _id: string;
  title: string;
  summary: string;
  tech?: string[];
  liveUrl?: string;
  codeUrl?: string;
  image: ProjectImage;
}

export interface FeaturedLink {
  _id: string;
  title: string;
  description: string;
  url: string;
  ctaLabel?: string;
}