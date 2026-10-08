// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex flex-wrap items-center justify-between gap-4 py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#a52b65] text-3xl font-bold">
            MIA TRAN
          </Link>
        </div>

        <ul className="flex w-full flex-wrap items-center gap-1 text-sm md:w-auto" id="navbar-default">
          <li>
            <Link className="block px-2 py-2 md:px-4 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-[#542b42] transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-2 py-2 md:px-4 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-[#542b42] transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-2 py-2 md:px-4 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-[#542b42] transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-2 py-2 md:px-4 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-[#542b42] transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-2 py-2 md:px-4 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-[#542b42] transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;