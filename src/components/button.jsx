import Image from "next/image";
import { arrowRight } from "../../public/assets/icons";
export default function Button({ buttonText }) {
  return (
    <button className=" flex items-center justify-center mt-5  gap-3 bg-coral-red py-4 px-7 text-md font-montserrat tracking-normal  text-white rounded-full">
      {buttonText}
      <Image src={arrowRight} />
    </button>
  );
}
