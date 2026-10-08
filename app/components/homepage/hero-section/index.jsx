import { personalData } from '@/utils/data/personal-data';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdDownload } from 'react-icons/md';

function HeroSection() {
  return (
    <section className="relative grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
      <div>
        <p className="mb-6 font-mono text-sm tracking-wide text-[#a52b65]">🌷 DATA, CURIOSITY & A LITTLE PINK</p>
        <h1 className="text-4xl font-bold leading-tight text-[#542b42] sm:text-5xl lg:text-6xl">
          Hi there ✨,<br />I’m <span className="text-[#a52b65]">{personalData.name}</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#65505c]">Data Analyst · Analytics Engineer<br />Turning messy data into clear stories and insights that help people.</p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-[#793d59]">
          {['📊 Data storytelling', '⚙️ Pipelines & automation', '🧠 Machine learning'].map(label => (
            <span key={label} className="rounded-full border border-[#f7c6d9] bg-[#ffd1dc80] px-3 py-2">{label}</span>
          ))}
        </div>
        <div className="my-7 flex items-center gap-5 text-[#a52b65]">
          <Link href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-transform hover:scale-110"><BsGithub size={28} /></Link>
          <Link href={personalData.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-transform hover:scale-110"><BsLinkedin size={28} /></Link>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="#projects" className="rounded-full bg-[#a52b65] px-6 py-3 font-medium text-white transition-colors hover:bg-[#84204f]">Explore my projects ↗</Link>
          <Link href={personalData.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#a52b65] px-6 py-3 font-medium text-[#a52b65] transition-colors hover:bg-[#ffd1dc]">Get resume <MdDownload size={18} /></Link>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl border border-[#f7c6d9] bg-[#fff7fb] shadow-[0_20px_60px_-25px_#d889aa]">
        <div className="flex items-center gap-2 border-b border-[#f7c6d9] bg-[#ffd1dc80] px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-[#f7a8b8]" /><span className="h-3 w-3 rounded-full bg-[#f5c6ec]" /><span className="h-3 w-3 rounded-full bg-[#ffb6c1]" />
          <span className="ml-auto font-mono text-xs text-[#793d59]">mia’s little corner of the internet</span>
        </div>
        <div className="p-6 sm:p-8">
          <Image src="/coding-cat.jpeg" alt="A coding cat from Mia’s GitHub profile" width={480} height={480} priority className="mx-auto h-auto w-full max-w-80 rounded-2xl" />
          <p className="mt-6 text-center font-mono text-sm text-[#a52b65]">SQL, Python, R & a curious mind 🐱</p>
          <p className="mt-2 text-center text-sm text-[#65505c]">Always learning. Always happy to connect.</p>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
