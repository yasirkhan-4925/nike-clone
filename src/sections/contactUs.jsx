import Button from "@/components/button";

export default function ContactUs() {
  return (
    <section className="max-container padding ">
      <div className=" flex flex-col  lg:flex-row   lg:items-center lg:justify-between ">
        <div className="w-full  lg:max-w-lg">
          <h1 className="font-palanquin text-[30px] max-lg:text-center sm:text-4xl font-bold">
            Sign Up for <span className="text-coral-red"> Updates</span> &
            Newsletter{" "}
          </h1>
        </div>
        <div className="  p-2  gap-2 justify-between  flex flex-col w-full lg:w-[40%] sm:flex-row sm:items-center sm:border-[1px] sm:border-slate-gray sm:rounded-full overflow-hidden max-lg:mt-5">
          <input
            className=" font-montserrat  text-slate-gray  text-md flex-1 focus:outline-none  border-slate-gray p-3 max-sm:border-[1px] max-sm:border-slate-gray max-sm:rounded-full"
            placeholder="subsribe@nike.com"
            type="text"
          />

          <Button buttonText={"Sign Up"} />
        </div>
      </div>
    </section>
  );
}
