import { experiences } from '@/utils/data/experience';
import { personalData } from '@/utils/data/personal-data';
import { projectsData } from '@/utils/data/projects-data';
import { skillsData } from '@/utils/data/skills';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdDownload } from 'react-icons/md';

const STATS = [
  { value: experiences.length, label: 'Data roles & internships' },
  { value: projectsData.length, label: 'Projects on GitHub' },
  { value: skillsData.length, label: 'Tools in my stack' },
  { value: '2×', label: 'First prize, Smith stock pitch' },
];

function HeroSection() {
  return (
    <section className="relative pt-10 pb-4 lg:pt-14">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-line bg-surface/80 px-3 py-1 font-mono text-xs tracking-wide text-accent">
            🌷 DATA, CURIOSITY & A LITTLE PINK
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Hi there ✨,<br />I’m <span className="text-accent">{personalData.name}</span>.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-body">
            <span className="font-semibold text-ink">Data Analyst · Analytics Engineer</span><br />
            Turning messy data into clear stories and insights that help people.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-[#793d59]">
            {['📊 Data storytelling', '⚙️ Pipelines & automation', '🧠 Machine learning'].map(label => (
              <span key={label} className="rounded-full border border-line bg-blush/50 px-3 py-1.5">{label}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="#projects" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-accent/20 transition-colors hover:bg-accent-strong">
              Explore my projects ↗
            </Link>
            <Link href={personalData.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-blush">
              Get resume <MdDownload size={16} aria-hidden="true" />
            </Link>
            <span aria-hidden="true" className="mx-1 hidden h-6 w-px bg-line sm:block" />
            <Link href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-2 text-accent transition-colors hover:bg-blush">
              <BsGithub size={22} />
            </Link>
            <Link href={personalData.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-2 text-accent transition-colors hover:bg-blush">
              <BsLinkedin size={22} />
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_20px_50px_-25px_#d889aa] lg:mr-0">
          <div className="flex items-center gap-1.5 border-b border-line bg-blush/50 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f7a8b8]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f5c6ec]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffb6c1]" />
            <span className="ml-auto font-mono text-[11px] text-[#793d59]">mia’s little corner of the internet</span>
          </div>
          <Image
            src="/coding-cat.jpeg"
            alt="A coding cat from Mia’s GitHub profile"
            width={735}
            height={414}
            priority
            className="aspect-video w-full object-cover"
          />
          <div className="px-4 py-3 text-center">
            <p className="font-mono text-sm text-accent">SQL, Python, R & a curious mind 🐱</p>
            <p className="mt-1 text-xs text-muted">Always learning. Always happy to connect.</p>
          </div>
        </div>
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {STATS.map(({ value, label }) => (
          <div key={label} className="flex flex-col-reverse rounded-xl border border-line bg-surface/80 px-4 py-3">
            <dt className="mt-0.5 text-xs text-muted">{label}</dt>
            <dd className="font-mono text-2xl font-semibold text-accent md:text-3xl">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
export default HeroSection;
