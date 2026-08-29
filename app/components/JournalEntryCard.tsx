import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import { urlForImage } from "../../sanity/lib/image";
import { kindLabels, type JournalEntry } from "../../sanity/lib/journal";

const dateFormatter = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" });

export default function JournalEntryCard({ entry }: { entry: JournalEntry }) {
  const cover = entry.images?.[0];
  const extraImageCount = (entry.images?.length ?? 0) - 1;

  return (
    <Reveal width="100%">
      <Link
        href={`/journal/${entry.slug}`}
        className="group grid grid-cols-1 items-center gap-6 rounded-3xl border border-neutral-800 p-6 transition-colors duration-300 hover:border-[var(--accent)] md:grid-cols-[160px_1fr] md:gap-8 md:p-8"
      >
        {cover ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-900 md:aspect-square">
            <Image
              src={urlForImage(cover).width(320).height(320).fit("crop").url()}
              alt={cover.caption || entry.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 160px"
            />
          </div>
        ) : (
          <div className="hidden aspect-square w-full items-center justify-center rounded-xl border border-dashed border-neutral-800 md:flex">
            <span className="font-mono text-xs text-[var(--muted)] uppercase">{kindLabels[entry.kind]}</span>
          </div>
        )}

        <div>
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[var(--muted)] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
            {kindLabels[entry.kind]}
            <span aria-hidden="true">&middot;</span>
            <time dateTime={entry.date}>{dateFormatter.format(new Date(entry.date))}</time>
          </div>

          <h3 className="mt-3 text-xl font-medium tracking-tight transition-colors group-hover:text-[var(--accent)] md:text-2xl">
            {entry.title}
          </h3>

          {extraImageCount > 0 && (
            <p className="mt-4 font-mono text-xs text-[var(--muted)]">
              +{extraImageCount} more photo{extraImageCount > 1 ? "s" : ""}
            </p>
          )}
        </div>
      </Link>
    </Reveal>
  );
}
