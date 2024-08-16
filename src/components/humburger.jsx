// components/HamburgerMenu.jsx
import { motion } from "framer-motion";

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      onClick={toggleMenu}
      className={`cursor-pointer   relative   h-[20px]  w-[30px]    `}
    >
      <motion.div
        initial={{ rotate: 0, top: 0 }}
        animate={{
          top: isOpen ? "50%" : 0,
          translateY: isOpen ? "-50%" : 0,
          rotate: isOpen ? -45 : 0,
        }}
        className={`bg-slate-gray h-[4px] w-full absolute  rounded-full  `}
      />
      <motion.div
        initial={{
          opacity: 1,
          top: "50%",
          translateY: "-50%",
        }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        className={`bg-slate-gray h-[4px] w-[70%] absolute right-0 rounded-full  `}
      />
      <motion.div
        initial={{ rotate: 0, bottom: 0, width: "50%", right: 0 }}
        animate={{
          bottom: isOpen ? "50%" : 0,
          translateY: isOpen ? "50%" : 0,
          rotate: isOpen ? 45 : 0,
          width: isOpen ? "100%" : "50%",

          //   bottom: isOpen ? "50%" : "0%",
          //   transform: isOpen ? "translate-y-[50%]" : "translate-y-[0%]",
          //   rotate: isOpen ? -45 : 0,
        }}
        className={`bg-slate-gray h-[4px] w-[10px]  absolute rounded-full `}
      />
    </div>
  );
};

export default HamburgerMenu;
