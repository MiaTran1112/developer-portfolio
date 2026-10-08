// @flow strict

import { skillGroups } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import SectionHeading from "../../helper/section-heading";

function Skills() {
  return (
    <section id="skills" className="py-8 md:py-10">
      <SectionHeading index="03" eyebrow="Skills" title="Tools I work with" />

      <div className="divide-y divide-line rounded-2xl border border-line bg-surface/80">
        {skillGroups.map(group => (
          <div key={group.category} className="grid gap-3 px-4 py-4 md:grid-cols-[13rem_1fr] md:items-center md:px-5">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <li
                  key={skill}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent/50 hover:bg-blush/40"
                >
                  <Image
                    src={skillsImage(skill)?.src}
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] object-contain"
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
