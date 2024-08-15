import Image from "next/image";
import { arrowRight } from "../../public/assets/icons";
export default function Button({ buttonText, buttonIcon, isWhiteButton }) {
  return (
    <button
      className={`${
        isWhiteButton
          ? "bg-white border-[1px]  border-slate-gray text-slate-gray"
          : "bg-coral-red text-white"
      }   flex items-center ${
        buttonIcon ? "justify-between" : "justify-center"
      }  gap-3  py-4 px-7 text-md font-montserrat tracking-normal   rounded-full`}
    >
      {buttonText}
      {buttonIcon && <Image src={buttonIcon} />}
    </button>
  );
}
