import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import SiteNav from "../../../components/SiteNav";
import Reveal from "../../../components/Reveal";
import { client } from "../../../../sanity/lib/client";
import { journalEntryBySlugQuery, journalSlugsQuery } from "../../../../sanity/lib/queries";
import { urlForImage } from "../../../../sanity/lib/image";
import { excerptFromBody, kindLabels, type JournalEntry } from "../../../../sanity/lib/journal";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-6 last:mb-0">{children}</p>,
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl font-medium tracking-tight text-white first:mt-0">
        {children}
      </h2>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white underline decoration-[var(--accent)] underline-offset-4 transition-colors hover:text-[var(--accent)]"
      >
        {children}
      </a>
    ),
  },
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(journalSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

async function getEntry(slug: string) {
  return client.fetch<JournalEntry | null>(journalEntryBySlugQuery, { slug });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getEntry(slug);
  if (!entry) return {};

  return {
    title: entry.title,
    description: excerptFromBody(entry.body, 160),
  };
}

export default async function JournalEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = await getEntry(slug);

  if (!entry) notFound();

  return (
    <main>
      <SiteNav />
      <article className="mx-auto max-w-3xl px-6 pt-40 pb-24 md:px-12">
        <Reveal>
          <Link
            href="/journal"
            className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase transition-colors hover:text-white"
          >
            &larr; Journal
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex items-center gap-3 font-mono text-xs tracking-widest uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
            <span className="text-[var(--accent)]">{kindLabels[entry.kind]}</span>
            <span aria-hidden="true" className="text-[var(--muted)]">
              &middot;
            </span>
            <time dateTime={entry.date} className="text-[var(--muted)]">
              {dateFormatter.format(new Date(entry.date))}
            </time>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-6xl">
            {entry.title}
          </h1>
        </Reveal>

        {entry.body && (
          <Reveal delay={0.2} width="100%">
            <div className="mt-10 max-w-none text-lg leading-relaxed text-[var(--muted)]">
              <PortableText value={entry.body} components={portableTextComponents} />
            </div>
          </Reveal>
        )}

        {entry.images && entry.images.length > 0 && (
          <div className="mt-16 flex flex-col gap-8">
            {entry.images.map((image, i) => (
              <Reveal key={i} width="100%">
                <figure>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-900 md:aspect-video">
                    <Image
                      src={urlForImage(image).width(1600).height(900).fit("crop").url()}
                      alt={image.caption || entry.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                  {image.caption && (
                    <figcaption className="mt-3 font-mono text-xs text-[var(--muted)]">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </article>
    </main>
  );
}
