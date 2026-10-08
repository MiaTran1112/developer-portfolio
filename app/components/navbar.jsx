// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { MdDownload } from "react-icons/md";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-lg font-bold tracking-tight text-accent">
          MIA TRAN
        </Link>

        <ul className="no-scrollbar ml-auto flex min-w-0 items-center overflow-x-auto text-sm max-sm:[mask-image:linear-gradient(to_right,#000_85%,transparent)]">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block whitespace-nowrap rounded-md px-2.5 py-1.5 text-body transition-colors hover:bg-blush/60 hover:text-accent sm:px-3"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={personalData.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong md:inline-flex"
        >
          Resume <MdDownload size={16} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
