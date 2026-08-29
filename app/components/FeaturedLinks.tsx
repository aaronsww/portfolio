import MagneticWrap from "./MagneticWrap";
import Reveal from "./Reveal";
import { client } from "../../sanity/lib/client";
import { featuredLinksQuery } from "../../sanity/lib/queries";
import type { FeaturedLink } from "../../sanity/lib/site";

export default async function FeaturedLinks() {
  const links = await client.fetch<FeaturedLink[]>(featuredLinksQuery);

  if (!links.length) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:px-12">
      <div className="flex flex-col gap-6">
        {links.map((link, i) => (
          <Reveal key={link._id} width="100%">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden border border-neutral-800 px-8 py-16 transition-colors duration-300 hover:border-[var(--accent)] md:px-16 md:py-24"
            >
              <span className="font-mono text-sm text-[var(--muted)]">
                ({String(i + 1).padStart(2, "0")})
              </span>
              <div className="mt-4 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-6xl">
                    {link.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-[var(--muted)]">{link.description}</p>
                </div>
                <MagneticWrap className="shrink-0">
                  <span className="inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase transition-colors group-hover:text-[var(--accent)]">
                    {link.ctaLabel || "Visit Site"}
                    <span aria-hidden="true">&#8599;</span>
                  </span>
                </MagneticWrap>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
