import Button from "@/components/button";
import { shoe8 } from "../../public/assets/images";
import Image from "next/image";
export default function AboutUs() {
  return (
    <section className="max-container lg:flex-row flex-col padding-x flex  padding-b  gap-4 ">
      <div className=" flex flex-1 flex-col justify-center   ">
        <h2 className="text-4xl max-sm:text-2xl font-semibold font-palanquin">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="font-montserrat max-sm:text-[15px] text-md text-slate-gray max-w-lg mt-5">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="font-montserrat max-sm:text-[15px] text-md text-slate-gray max-w-lg mt-3">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="w-[200px] mt-3">
          <Button buttonText={"View Details"} />
        </div>
      </div>

      <div className=" flex flex-1 justify-center items-center">
        <Image
          className="object-contain lg:w-[522px] lg:h-[572px]"
          src={shoe8}
        />
      </div>
    </section>
  );
}
