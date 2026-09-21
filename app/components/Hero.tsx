"use client";

import { motion } from "framer-motion";
import SiteNav from "./SiteNav";

const ease = [0.22, 1, 0.36, 1] as const;

function AnimatedWord({ word, startIndex }: { word: string; startIndex: number }) {
  return (
    <div className="block overflow-hidden">
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 + (startIndex + i) * 0.035, ease }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-32 md:px-12">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 20%, rgba(226,64,42,0.16), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <SiteNav />

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease }}
        className="mb-6 font-mono text-xs tracking-widest text-[var(--muted)] uppercase"
      >
        Engineer &middot; Artist &middot; Inspired
      </motion.p>

      <h1 className="font-[family-name:var(--font-display)] text-[clamp(4.25rem,13vw,18rem)] leading-[0.85] tracking-tight">
        <AnimatedWord word="Jeevan" startIndex={0} />
        <div className="text-[var(--muted)]">
          <AnimatedWord word="Aaron" startIndex={6} />
        </div>
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-10 max-w-md font-mono text-sm text-[var(--muted)]"
      >
        I fall down rabbit holes, get way too obsessed, build things, and the
        occasional adrenaline rush.
      </motion.p>
    </section>
  );
}
