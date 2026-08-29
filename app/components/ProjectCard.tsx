"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedLink from "./AnimatedLink";

export interface ProjectCardData {
  _id: string;
  title: string;
  summary: string;
  tech?: string;
  liveUrl?: string;
  codeUrl?: string;
  imageUrl: string;
}

export default function ProjectCard({
  project,
  index,
  total,
}: {
  project: ProjectCardData;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  const isEven = index % 2 === 0;
  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      className={isLast ? "sticky" : "sticky pb-10"}
      style={{ top: `${96 + index * 16}px`, zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale }}
        className={`grid grid-cols-1 gap-8 rounded-3xl border border-neutral-800 p-8 shadow-2xl shadow-black/40 md:grid-cols-2 md:gap-16 md:p-12 ${
          isEven ? "bg-[var(--background)]" : "bg-neutral-950"
        }`}
      >
        <div
          className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-900 ${
            isEven ? "" : "md:order-2"
          }`}
        >
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="font-mono text-sm text-[var(--muted)]">
            ({String(index + 1).padStart(2, "0")})
          </span>
          <h3 className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 text-[var(--muted)]">{project.summary}</p>
          {project.tech && (
            <p className="mt-4 font-mono text-xs tracking-widest text-white/70 uppercase">
              {project.tech}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-x-8">
            {project.liveUrl && (
              <AnimatedLink
                href={project.liveUrl}
                label="Live"
                textSizeClasses="text-lg"
                spacingClasses="pb-1"
              />
            )}
            {project.codeUrl && (
              <AnimatedLink
                href={project.codeUrl}
                label="Code"
                textSizeClasses="text-lg"
                spacingClasses="pb-1"
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
