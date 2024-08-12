"use client";
import { useState } from "react";
import Image from "next/image";
import { collectionBackground, bigShoe1 } from "../../public/assets/images";
import Button from "@/components/button";
import { shoes, statistics } from "@/constants";

const Hero = () => {
  const [currentShoeImage, setCurrentShoeImage] = useState(bigShoe1);

  const onSelectShoeImage = (shoe) => {
    setCurrentShoeImage(shoe.bigShoe);
  };

  return (
    <section className="flex flex-col xl:flex-row w-full max-container min-h-screen gap-20">
      <div className="xl:w-2/5 xl:padding-l padding-l flex flex-col items-start z-10 pt-28 max-xl:pt-24">
        <p className="font-montserrat text-lg text-coral-red font-medium">
          Our Summer collections
        </p>
        <h1 className="text-8xl max-sm:text-[72px] max-sm:leading-[80px] font-palanquin font-bold mt-10">
          <span className="xl:bg-white xl:whitespace-nowrap z-20 tracking-tighter padding-r">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red"> Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-md text-slate-gray mt-10 mb-5 xl:max-w-md xl:leading-8">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button buttonText={"Shop Now"} />

        <div className="flex gap-5 sm:gap-10 flex-wrap mt-9">
          {statistics.map((stats) => {
            return (
              <div key={stats.value} className="flex flex-col gap-1">
                <h3 className="text-4xl font-bold font-palanquin">
                  {stats.value}
                </h3>
                <p className="font-montserrat text-lg text-slate-gray">
                  {stats.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-1 xl:min-h-full justify-center items-center relative">
        <Image
          src={collectionBackground}
          className="w-full h-full object-cover z-[-1]"
          alt="Collection Background"
          layout="fill"
        />
        <Image
          width={450}
          height={450}
          src={currentShoeImage}
          className="object-cover pt-20 pb-10 z-[-1] max-w-full max-h-full"
        />

        <div className="flex gap-4 left-[10%] absolute bottom-0 translate-y-[35%]">
          {shoes.map((shoe) => {
            return (
              <div
                onClick={() => onSelectShoeImage(shoe)}
                key={shoe.thumbnail}
                className={`flex items-center justify-center h-20 w-20 lg:h-32 lg:w-32 bg-card bg-center bg-cover rounded-lg cursor-pointer ${
                  currentShoeImage === shoe.bigShoe
                    ? "border-coral-red border-2"
                    : "border-pale-blue border-2"
                }`}
              >
                <Image
                  src={shoe.thumbnail}
                  height={120}
                  width={80}
                  alt="shoe thumbnail"
                  className="max-w-full max-h-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
