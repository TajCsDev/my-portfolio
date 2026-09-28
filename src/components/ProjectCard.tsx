import { useState } from "react";
import type { Project } from "../data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  const [imageIndex, setImageIndex] = useState(0);
  const image = project.images[imageIndex];

  return (
    <article className="panel flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="project-art relative flex h-64 items-center justify-center p-5">
        <a
          href={image.src}
          target="_blank"
          rel="noreferrer"
          className="h-full w-full"
          aria-label={`Open full-size: ${image.alt}`}
        >
          <img
            className="h-full w-full rounded-lg object-contain"
            src={image.src}
            alt={image.alt}
            loading="lazy"
            width="720"
            height="460"
          />
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] px-6 py-3">
        <span className="muted font-mono text-[10px]">
          {String(imageIndex + 1).padStart(2, "0")} /{" "}
          {String(project.images.length).padStart(2, "0")}
        </span>
        <div className="flex gap-1" aria-label={`${project.title} screenshots`}>
          {project.images.map((item, index) => (
            <button
              type="button"
              key={item.src}
              aria-label={`Show ${item.alt}`}
              aria-pressed={index === imageIndex}
              className="flex h-7 w-7 items-center justify-center rounded-full"
              onClick={() => setImageIndex(index)}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${index === imageIndex ? "bg-[var(--accent)]" : "bg-[var(--muted)] opacity-40"}`}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow">{project.category}</p>
          <span className="tag">{project.status}</span>
        </div>
        <h3 className="text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="muted mt-3 text-sm leading-7">{project.description}</p>
        <ul className="my-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li className="tag" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
        {project.note && (
          <p className="muted mb-5 text-xs leading-6">{project.note}</p>
        )}
        <details className="mt-auto border-t border-[var(--line)] pt-5">
          <summary className="accent-link cursor-pointer text-sm font-medium">
            My contribution
          </summary>
          <p className="muted mt-4 text-sm leading-7">{project.contribution}</p>
        </details>
      </div>
    </article>
  );
}
