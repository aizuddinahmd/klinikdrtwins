import Navbar from "../components/navbar";
// import Hero from "../components/hero";
import DescriptionSection from "../components/description-section";
// import Services from "@/components/Services";
import FeaturesLeft from "@/components/FeaturesLeft";
// import Services2 from "@/components/Services2";
import FeaturesRight from "@/components/FeaturesRight";
// import Hero2 from "@/components/Hero2";
// import Hero3 from "@/components/Hero3";
// import Testimonial from "@/components/Testimonial";
import Services3 from "@/components/Services3";
import AboutUs from "@/components/AboutUs";
import ListofTestimonials from "../components/ListofTestimonials";
// import Hero from "@/components/hero";
import Hero2 from "@/components/Hero2";
import Footer from "@/components/Footer";
import AboutUs2 from "@/components/AboutUs2";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-[#fef9f6] px-4 py-12">
        {/* <Hero /> */}
        <Hero2 />
        {/* <Hero3 /> */}
        <DescriptionSection />
        {/* <Services /> */}
        {/* <Services2 /> */}
        <Services3 />
        <AboutUs />
        <FeaturesRight />
        <FeaturesLeft />
        <AboutUs2 />
        <ListofTestimonials />
        <Footer />
      </main>
    </>
  );
}
