import Image from "next/image";
import { collectionBackground, bigShoe1 } from "../../public/assets/images";
const Hero = () => {
  return (
    <section className="flex flex-col xl:flex-row w-full max-container  min-h-screen  gap-20 ">
      <div className="xl:w-2/5  xl:padding-x  padding-x flex flex-col  items-start  z-10 pt-28 max-xl:pt-24 ">
        <p className="font-montserrat text-lg text-coral-red font-medium">
          Our Summer collections
        </p>
        <h1 className="text-8xl max-sm:text-[72px]  max-sm:leading-[80px] font-palanquin font-bold mt-10">
          <span className="xl:bg-white xl:whitespace-nowrap z-20 tracking-tighter padding-r">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red"> Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-md   text-slate-gray mt-10 mb-5 xl:max-w-md   xl:leading-8">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
      </div>

      <div className=" flex flex-1 xl:min-h-full justify-center items-center relative">
        <Image
          src={collectionBackground}
          className="w-full h-full object-cover z-[-1]"
          alt="Collection Background"
          layout="fill"
        />
        <Image
          width={550}
          height={550}
          src={bigShoe1}
          className=" object-cover pt-20 pb-10 "
        />
      </div>
    </section>
  );
};

export default Hero;
