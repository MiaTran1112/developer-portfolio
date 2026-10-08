// @flow strict

import { educations } from "@/utils/data/educations";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { MdAlternateEmail, MdOutlineSchool } from "react-icons/md";
import SectionHeading from "../../helper/section-heading";

const FACTS = [
  { Icon: CiLocationOn, label: "Based in", value: personalData.address },
  { Icon: MdOutlineSchool, label: "Majors", value: `${personalData.majors} @ ${educations[0].institution}` },
  { Icon: MdAlternateEmail, label: "Email", value: personalData.email, href: `mailto:${personalData.email}` },
];

function AboutSection() {
  return (
    <section id="about" className="py-8 md:py-10">
      <SectionHeading index="01" eyebrow="About" title="Who I am" />

      <div className="grid items-center gap-6 md:grid-cols-[auto_1fr] lg:gap-10">
        <div className="mx-auto w-40 rounded-2xl border border-line bg-surface p-1.5 shadow-[0_16px_40px_-20px_#d889aa] transition-transform duration-300 md:w-56 md:-rotate-2 md:hover:rotate-0">
          <Image
            src={personalData.profile}
            width={448}
            height={560}
            alt={personalData.name}
            className="aspect-[4/5] w-full rounded-xl object-cover object-bottom"
          />
        </div>

        <div>
          <p className="mb-2 text-xl font-semibold tracking-tight text-accent md:text-2xl">
            “{personalData.tagline}”
          </p>
          <p className="max-w-prose text-base leading-relaxed text-body lg:text-lg">
            {personalData.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {FACTS.map(({ Icon, label, value, href }) => (
              <li key={label} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-sm text-ink">
                <Icon size={18} aria-hidden="true" className="shrink-0 text-accent" />
                <span className="sr-only">{label}: </span>
                {href ? <a href={href} className="hover:text-accent hover:underline">{value}</a> : value}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="mr-1 font-mono uppercase tracking-[0.15em] text-muted">Outside of work</span>
            {personalData.interests.map(interest => (
              <span key={interest} className="rounded-full border border-line bg-surface/80 px-2.5 py-1 font-medium text-[#793d59]">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
