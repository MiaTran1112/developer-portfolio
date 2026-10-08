// @flow strict
import { educations } from "@/utils/data/educations";
import { MdOutlineSchool } from "react-icons/md";

// Rendered inside the Experience section, next to the work timeline
function Education() {
  return (
    <div id="education">
      <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">Education</h3>
      <ul className="flex flex-col gap-3">
        {educations.map(education => (
          <li key={education.id} className="flex gap-3 rounded-2xl border border-line bg-surface/80 p-4 md:p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blush/70 text-accent">
              <MdOutlineSchool size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="font-mono text-xs text-muted">{education.duration}</p>
              <p className="mt-0.5 font-semibold text-ink">{education.title}</p>
              <p className="text-sm text-body">{education.institution}</p>
              {education.field && <p className="mt-1 text-xs font-medium text-accent">{education.field}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
