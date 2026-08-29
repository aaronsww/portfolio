import { groq } from "next-sanity";

export const aboutQuery = groq`
  *[_id == "about"][0] {
    eyebrow,
    body,
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    summary,
    tech,
    liveUrl,
    codeUrl,
    image {
      asset,
      hotspot,
      crop,
    },
  }
`;

export const featuredLinksQuery = groq`
  *[_type == "featuredLink"] | order(order asc) {
    _id,
    title,
    description,
    url,
    ctaLabel,
  }
`;

const journalEntryFields = groq`
  _id,
  title,
  "slug": slug.current,
  date,
  kind,
  body,
  images[] {
    caption,
    asset,
    hotspot,
    crop,
  },
`;

export const journalEntriesQuery = groq`
  *[_type == "journalEntry" && defined(slug.current)] | order(date desc) {
    ${journalEntryFields}
  }
`;

export const latestJournalEntriesQuery = groq`
  *[_type == "journalEntry" && defined(slug.current)] | order(date desc) [0...3] {
    ${journalEntryFields}
  }
`;

export const journalEntryBySlugQuery = groq`
  *[_type == "journalEntry" && slug.current == $slug][0] {
    ${journalEntryFields}
  }
`;

export const journalSlugsQuery = groq`
  *[_type == "journalEntry" && defined(slug.current)][].slug.current
`;
