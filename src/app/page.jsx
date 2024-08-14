import Navbar from "@/components/navbar";
import AboutUs from "@/sections/aboutUs";
import Hero from "@/sections/hero";
import PopularProducts from "@/sections/popularProducts";
import Reviews from "@/sections/review";
import Services from "@/sections/services";
import SpecialOffers from "@/sections/specialOffers";

const Home = () => {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <PopularProducts />
      <AboutUs />
      <Services />
      <SpecialOffers />
      <Reviews />
    </main>
  );
};

export default Home;
