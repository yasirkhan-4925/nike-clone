import { products } from "@/constants";
import Image from "next/image";
import { star } from "../../public/assets/icons";

export default function PopularProducts() {
  return (
    <section className="max-container padding mt-10">
      <div className="flex flex-col gap-y-5">
        <h2 className="text-4xl max-sm:text-2xl font-semibold font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="font-montserrat max-sm:text-[15px] text-md text-slate-gray max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-10 grid  md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4 ">
        {products.map((product) => {
          return (
            <div
              key={product.name}
              className="p-5 rounded-lg  flex flex-grow-1 flex-col"
            >
              <Image
                className=" h-[200px]  w-[200px] object-contain "
                src={product.imgURL}
              />
              <div className="flex items-center mt-4 gap-2 ">
                <Image
                  height={25}
                  className="object-cover"
                  width={25}
                  src={star}
                />
                <p className="leading-none text-slate-gray text-lg font-montserrat ">
                  (4.5)
                </p>
              </div>
              <div className="flex flex-col gap-y-2 mt-4">
                <h2 className="text-lg font-palanquin  font-semibold">
                  {product.name}
                </h2>
                <h2 className="font-montserrat text-coral-red font-semibold">
                  {product.price}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
