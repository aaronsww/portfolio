// Public identifiers — same values as sanity.cli.ts.
// Hosted Studio (sanity deploy) does not have Next.js NEXT_PUBLIC_* env vars,
// so these must have hardcoded fallbacks or the studio bundle crashes in the browser.
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hrrwy4r1";
