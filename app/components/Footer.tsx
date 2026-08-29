import AnimatedLink from "./AnimatedLink";
import Reveal from "./Reveal";
import { socials } from "../data/content";

export default function Footer() {
  const [emailName, emailDomain] = socials.email.split("@");

  return (
    <footer id="contact" className="mx-auto max-w-5xl px-6 pt-24 pb-12 md:px-12">
      <Reveal>
        <h2 className="font-[family-name:var(--font-display)] text-[12vw] leading-[0.9] tracking-tight md:text-8xl">
          Let&apos;s build
          <br />
          something.
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col gap-2">
        <AnimatedLink
          href={`mailto:${socials.email}`}
          label={
            <>
              {emailName}
              <wbr />@{emailDomain}
            </>
          }
          isEmail
        />
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-8 border-t border-neutral-800 pt-8 md:flex-row md:items-center">
        <div className="flex gap-6 font-mono text-xs tracking-widest text-[var(--muted)] uppercase">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            LinkedIn
          </a>
        </div>
        <p className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase">
          &copy; Jeevan Aaron, 2026
        </p>
      </div>
    </footer>
  );
}
