"use client";
import Image from "next/image";
import { footerLogo } from "../../public/assets/images";
import { footerLinks, socialMedia } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black     padding-x pt-20 pb-12">
      <div className=" flex flex-col lg:flex-row  gap-20 flex-wrap max-container ">
        <div className="flex flex-col items-start  max-w-sm ">
          <Image src={footerLogo} width={150} />
          <p className="font-montserrat  text-lg text-white-400 mt-6 ">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex  gap-4  mt-6">
            {socialMedia.map((item) => (
              <div key={item.alt} className="bg-white p-3 rounded-full">
                <Image alt={item.alt} src={item.src} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between flex-wrap gap-5 ">
          {footerLinks.map((item) => (
            <div key={item.title} className="flex flex-col gap-5">
              <h2 className="text-white font-palanquin text-2xl  ">
                {item.title}
              </h2>
              <div className="flex flex-col gap-3">
                {item.links.map((link) => (
                  <Link
                    key={link.link}
                    className="text-white-400 font-palanquin text-lg"
                    href={link.link}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" max-container flex justify-between items-center font-palanquin text-lg mt-14 flex-wrap max-md:gap-y-2 max-md:justify-center max-md:flex-col">
        <p className="text-white-400 ">
          &#169; Copyright. All rights reserved.{" "}
        </p>
        <p className="cursor-pointer text-white-400">Terms & Conditions</p>
      </div>
    </footer>
  );
}
