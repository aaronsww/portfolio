import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import Reveal from "../../components/Reveal";
import JournalTimeline from "../../components/JournalTimeline";
import { client } from "../../../sanity/lib/client";
import { journalEntriesQuery } from "../../../sanity/lib/queries";
import type { JournalEntry } from "../../../sanity/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Builds, trips, and everything in between.",
};

export default async function JournalIndexPage() {
  const entries = await client.fetch<JournalEntry[]>(journalEntriesQuery);

  return (
    <main>
      <SiteNav />
      <section className="mx-auto max-w-5xl px-6 pt-40 pb-24 md:px-12">
        <Reveal>
          <p className="mb-6 font-mono text-xs tracking-widest text-[var(--accent)] uppercase">
            Journal
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl tracking-tight md:text-7xl">
            Builds, trips, and everything in between.
          </h1>
        </Reveal>

        <div className="mt-20">
          <JournalTimeline entries={entries} />
        </div>
      </section>
    </main>
  );
}
