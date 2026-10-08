// @flow strict

import { FaGithub } from 'react-icons/fa';

function ProjectCard({ project, index }) {
  const projectUrl = project.code || project.demo;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/90 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_#d889aa] focus-within:border-accent/40">
      <div className="flex items-center gap-1.5 border-b border-line bg-blush/40 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f7a8b8]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f5c6ec]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffb6c1]" />
        <span className="ml-auto font-mono text-xs text-muted">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h3 className="text-lg font-semibold leading-snug text-ink">
          {projectUrl ? (
            // Stretched link: the whole card is clickable
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 group-hover:text-accent"
            >
              {project.name}
              <span className="sr-only"> (opens GitHub in a new tab)</span>
            </a>
          ) : project.name}
        </h3>
        {project.role && (
          <p className="mt-1 font-mono text-xs text-accent">{project.role}</p>
        )}
        <p className="mt-2 text-sm leading-relaxed text-body">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tools">
          {project.tools.map(tool => (
            <li key={tool} className="rounded-full bg-blush/50 px-2.5 py-0.5 text-xs font-medium text-[#793d59]">
              {tool}
            </li>
          ))}
        </ul>

        {projectUrl && (
          <p className="mt-auto flex items-center gap-2 pt-4 text-sm font-medium text-accent" aria-hidden="true">
            <FaGithub />
            View on GitHub
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </p>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
