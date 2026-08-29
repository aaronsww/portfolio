import Reveal from "./Reveal";
import ProjectCard, { type ProjectCardData } from "./ProjectCard";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";
import { projectsQuery } from "../../sanity/lib/queries";
import type { Project } from "../../sanity/lib/site";

export default async function Projects() {
  const projects = await client.fetch<Project[]>(projectsQuery);

  if (!projects.length) return null;

  const cards: ProjectCardData[] = projects
    .filter((project) => project.image?.asset)
    .map((project) => ({
      _id: project._id,
      title: project.title,
      summary: project.summary,
      tech: project.tech?.join(", "),
      liveUrl: project.liveUrl,
      codeUrl: project.codeUrl,
      imageUrl: urlForImage(project.image).width(1600).height(1200).fit("crop").url(),
    }));

  if (!cards.length) return null;

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 md:px-12">
      <Reveal>
        <p className="mb-12 font-mono text-xs tracking-widest text-[var(--accent)] uppercase">
          Projects
        </p>
      </Reveal>

      <div className="relative">
        {cards.map((project, i) => (
          <ProjectCard key={project._id} project={project} index={i} total={cards.length} />
        ))}
      </div>
    </section>
  );
}
