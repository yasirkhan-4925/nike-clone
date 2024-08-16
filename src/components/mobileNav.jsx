import Image from "next/image";
import { headerLogo } from "../../public/assets/images";
import { navLinks } from "@/constants";
import Link from "next/link";

const MobileNav = ({ setToggleMobileNav }) => {
  return (
    <nav
      onClick={() => setToggleMobileNav(false)}
      className=" flex flex-col  bg-black/[0.4] h-screen w-screen fixed top-0 z-50 touch-none lg:hidden"
    >
      <div className="h-full w-[65%] gap-y-6 bg-white flex flex-col p-5 ">
        <div className="self-start">
          <Image src={headerLogo} width={100} />
        </div>

        <div className="flex flex-col font-palanquin text-slate-gray gap-4 text-lg  ">
          {navLinks.map((navLink) => (
            <Link key={navLink.href} href={navLink.href}>
              {navLink.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
