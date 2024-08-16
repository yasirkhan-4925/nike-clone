"use client";

import MobileNav from "@/components/mobileNav";
import Navbar from "@/components/navbar";
import AboutUs from "@/sections/aboutUs";
import ContactUs from "@/sections/contactUs";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import PopularProducts from "@/sections/popularProducts";
import Reviews from "@/sections/review";
import Services from "@/sections/services";
import SpecialOffers from "@/sections/specialOffers";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const Home = () => {
  const [isMobileNavOpen, setToggleMobileNav] = useState(false);

  return (
    <main className="min-h-screen relative">
      <AnimatePresence>
        {isMobileNavOpen ? (
          <MobileNav setToggleMobileNav={setToggleMobileNav} />
        ) : null}
      </AnimatePresence>

      <Navbar
        isOpen={isMobileNavOpen}
        setToggleMobileNav={setToggleMobileNav}
      />
      <Hero />
      <PopularProducts />
      <AboutUs />
      <Services />
      <SpecialOffers />
      <Reviews />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Home;
