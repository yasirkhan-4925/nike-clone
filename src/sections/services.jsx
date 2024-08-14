import { services } from "@/constants";
import Image from "next/image";

export default function Services() {
  return (
    <section className="max-container padding-x  padding-b flex gap-5 flex-wrap    justify-center  ">
      {services.map((item) => (
        <div
          key={item.imgURL}
          className=" flex flex-1    sm:min-w-[350px]  flex-col justify-center  shadow-3xl rounded-lg p-10    "
        >
          <Image
            height={50}
            width={50}
            className=" flex justify-center items-center bg-coral-red object-contain p-3 rounded-full"
            src={item.imgURL}
          />
          <h2 className="font-palanquin text-2xl font-bold mt-4">
            {item.label}
          </h2>
          <p className="font-montserrat text-lg text-slate-gray  mt-4">
            {item.subtext}
          </p>
        </div>
      ))}
    </section>
  );
}
