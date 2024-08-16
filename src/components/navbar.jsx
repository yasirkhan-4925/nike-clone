import Image from "next/image";
import { headerLogo } from "../../public/assets/images";
import { navLinks } from "@/constants";
import Link from "next/link";
import { hamburger } from "../../public/assets/icons";
import HamburgerMenu from "./humburger";
const Navbar = ({ setToggleMobileNav, isOpen }) => {
  return (
    <header className=" absolute w-full z-30 ">
      <nav className=" max-container padding-x py-8   flex items-center justify-between  ">
        <div>
          <Link href={"/"}>
            <Image
              src={headerLogo}
              height={29}
              width={129}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-14 text-lg font-montserrat text-slate-gray tracking-normal  leading-normal">
            {navLinks.map((navLink) => (
              <li key={navLink.href}>
                <a href={navLink.href}>{navLink.label}</a>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className=" hidden lg:flex  gap-2 text-lg font-medium font-montserrat max-sm-hidden">
          <a href="/">Sign in</a>
          <div>/</div>
          <a href="/">Explore now</a>
        </div>
        {/* mobile hamburger menu */}
        <div
          onClick={() => setToggleMobileNav(true)}
          className=" lg:hidden flex items-center justify-center  "
        >
          <HamburgerMenu isOpen={isOpen} toggleMenu={setToggleMobileNav} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
