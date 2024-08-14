import Image from "next/image";
import { offer } from "../../public/assets/images";
import Button from "@/components/button";
import { arrowRight } from "../../public/assets/icons";
export default function SpecialOffers() {
  return (
    <section className="max-container items-start padding-x flex  max-lg:flex-col-reverse items lg:items-center ">
      <div className=" flex  flex-1  mt-5   p-3">
        <Image
          className="object-contain"
          height={600}
          width={700}
          src={offer}
        />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl max-sm:text-2xl font-semibold font-palanquin">
          <span className="text-coral-red">Special</span> Offers
        </h2>
        <p className="font-montserrat max-sm:text-[15px] text-md text-slate-gray max-w-lg mt-5">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="font-montserrat max-sm:text-[15px] text-md text-slate-gray max-w-lg mt-3">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div
          className=" flex-col flex  mt-3  sm:flex-row sm:gap-4 
        "
        >
          <Button buttonText={"Shop Now"} buttonIcon={arrowRight} />

          <Button buttonText={"Learn more"} isWhiteButton />
        </div>
      </div>
    </section>
  );
}
