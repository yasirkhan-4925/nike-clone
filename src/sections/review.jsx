import { reviews } from "@/constants";
import Image from "next/image";
import { star } from "../../public/assets/icons";
export default function Reviews() {
  return (
    <section className="padding bg-pale-blue mt-14">
      <div className="flex flex-col items-center justify-center">
        <h2 className=" text-2xl sm:text-4xl font-bold font-palanquin text-center">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h2>

        <p className="text-center max-w-lg  mt-3  text-md sm:text-lg text-slate-gray font-montserrat">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      <div className="flex items-center justify-evenly  gap-12 mt-10 sm:mt-20  flex-wrap">
        {reviews.map((review) => (
          <div
            className="flex flex-col items-center justify-center"
            key={review.customerName}
          >
            <Image
              height={1000}
              width={140}
              className="rounded-full"
              src={review.imgURL}
            />
            <p className="text-center max-w-sm tex-md font-montserrat text-slate-gray mt-8 ">
              {review.feedback}
            </p>

            <div className="flex flex-col items-center mt-3  gap-2 ">
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

            <h2 className="font-palanquin font-bold text-2xl sm:text-[30px] mt-3">
              {review.customerName}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
