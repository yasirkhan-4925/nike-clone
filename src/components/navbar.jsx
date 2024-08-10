import Image from "next/image";
import { headerLogo } from "../../public/assets/images";
import { navLinks } from "@/constants";
import Link from "next/link";
import { hamburger } from "../../public/assets/icons";
const Navbar = () => {
  return (
    <header>
      <nav className="max-container  padding-x py-8 flex items-center justify-between">
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
          <ul className="flex items-center gap-12 text-lg font-montserrat text-slate-gray tracking-normal  leading-normal">
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
        <div className="flex items-center justify-center">
          {
            <Image
              className="lg:hidden"
              src={hamburger}
              height={20}
              width={20}
            />
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
