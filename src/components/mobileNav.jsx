import Image from "next/image";
import { headerLogo } from "../../public/assets/images";
import { navLinks } from "@/constants";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const MobileNav = ({ setToggleMobileNav }) => {
  return (
    <motion.nav
      key="nav"
      initial={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      animate={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      transition={{ ease: "linear" }}
      onClick={() => setToggleMobileNav(false)}
      className=" flex flex-col h-screen w-screen fixed top-0 z-50 touch-none lg:hidden "
    >
      <motion.div
        key="menu"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ ease: "linear", duration: 0.1 }}
        exit={{ x: "-100%" }}
        className="h-full w-[65%] gap-y-6 bg-white flex flex-col p-5  z-[100] "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="self-start">
          <Image src={headerLogo} width={100} />
        </div>

        <div className="flex flex-col font-palanquin  gap-4 text-lg">
          {navLinks.map((navLink) => (
            <Link
              className="text-coral-red"
              key={navLink.href}
              href={navLink.href}
            >
              {navLink.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default MobileNav;
