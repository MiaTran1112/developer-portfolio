// @flow strict
import { highlights } from "@/utils/data/highlights";
import { FaTrophy } from "react-icons/fa";
import { MdGroups, MdOutlineEvent } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";

const ICONS = {
  'Awards': FaTrophy,
  'Programs & Conferences': MdOutlineEvent,
  'Certifications': TbCertificate,
  'Communities': MdGroups,
};

// Rendered inside the Experience section, under work & education
function Highlights() {
  return (
    <div id="highlights" className="mt-8">
      <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">Beyond the classroom</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(({ title, items }) => {
          const Icon = ICONS[title];

          return (
            <div key={title} className="rounded-2xl border border-line bg-surface/80 p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blush/70 text-accent">
                  {Icon && <Icon size={16} aria-hidden="true" />}
                </span>
                <h4 className="text-sm font-semibold text-ink">{title}</h4>
              </div>
              <ul className="flex flex-col gap-2">
                {items.map(item => (
                  <li key={item.name} className="text-sm leading-snug text-body">
                    {item.name}
                    {item.detail && <span className="block font-mono text-[11px] text-muted">{item.detail}</span>}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Highlights;
