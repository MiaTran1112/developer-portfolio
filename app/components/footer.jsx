// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';

const SOCIALS = [
  { href: personalData.github, label: 'GitHub', Icon: BsGithub },
  { href: personalData.linkedIn, label: 'LinkedIn', Icon: BsLinkedin },
  { href: `mailto:${personalData.email}`, label: 'Email', Icon: MdAlternateEmail },
];

function Footer() {
  return (
    <footer className="border-t border-line bg-canvas/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {personalData.name} · Data Analyst & Analytics Engineer
        </p>
        <div className="flex items-center gap-1">
          {SOCIALS.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full p-2 text-ink transition-colors hover:bg-blush/60 hover:text-accent"
            >
              <Icon size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
