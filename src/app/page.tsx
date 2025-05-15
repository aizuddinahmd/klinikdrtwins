import Navbar from "../components/navbar";
import Hero from "../components/hero";
import DescriptionSection from "../components/description-section";
import Services from "@/components/Services";
import FeaturesLeft from "@/components/FeaturesLeft";
import Services2 from "@/components/Services2";
import FeaturesRight from "@/components/FeaturesRight";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-[#fef9f6] px-4 py-12">
        <Hero />
        <DescriptionSection />
        <Services />
        <Services2 />
        <FeaturesLeft />
        <FeaturesRight />
      </main>
    </>
  );
}
