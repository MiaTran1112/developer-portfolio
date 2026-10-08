// @flow strict

import { experiences } from "@/utils/data/experience";
import SectionHeading from "../../helper/section-heading";
import Education from "../education";
import Highlights from "../highlights";

function Experience() {
  return (
    <section id="experience" className="py-8 md:py-10">
      <SectionHeading index="02" eyebrow="Background" title="Experience & Education" />

      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">Work</h3>
          <ol className="rounded-2xl border border-line bg-surface/80 p-4 md:p-5">
            {experiences.map((experience, index) => {
              const isCurrent = experience.duration.includes("Present");
              const isLast = index === experiences.length - 1;

              return (
                <li key={experience.id} className="relative pl-7">
                  {!isLast && <span aria-hidden="true" className="absolute left-[5px] top-4 bottom-0 w-px bg-line" />}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-accent ${isCurrent ? "bg-accent" : "bg-surface"}`}
                  />
                  <div className={isLast ? "" : "pb-5"}>
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                      <h4 className="font-semibold text-ink">{experience.title}</h4>
                      <span className="font-mono text-xs text-muted">{experience.duration}</span>
                    </div>
                    <p className="mt-0.5 flex items-center gap-2 text-sm text-body">
                      {experience.company}
                      {isCurrent && (
                        <span className="rounded-full bg-blush px-2 py-0.5 text-[11px] font-medium text-accent">Current</span>
                      )}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="lg:col-span-5">
          <Education />
        </div>
      </div>

      <Highlights />
    </section>
  );
};

export default Experience;
