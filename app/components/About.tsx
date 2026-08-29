import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Reveal from "./Reveal";
import { client } from "../../sanity/lib/client";
import { aboutQuery } from "../../sanity/lib/queries";
import type { About } from "../../sanity/lib/site";

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-[0.7em] last:mb-0">{children}</p>,
    muted: ({ children }) => (
      <p className="mb-[0.7em] last:mb-0 text-[var(--muted)]">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => <span className="text-white">{children}</span>,
  },
};

export default async function About() {
  const about = await client.fetch<About | null>(aboutQuery);

  if (!about?.body?.length) return null;

  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-32 md:px-12">
      <Reveal>
        <p className="mb-8 font-mono text-xs tracking-widest text-[var(--accent)] uppercase">
          {about.eyebrow || "About"}
        </p>
      </Reveal>
      <Reveal delay={0.1} width="100%">
        <div className="text-2xl leading-snug tracking-tight md:text-4xl">
          <PortableText value={about.body} components={portableTextComponents} />
        </div>
      </Reveal>
    </section>
  );
}
