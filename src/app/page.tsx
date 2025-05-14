import Navbar from "../components/navbar";
import Hero from "../components/hero";
import DescriptionSection from "../components/description-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-[#fef9f6] px-4 py-12">
        <Hero />
        <DescriptionSection />
      </main>
    </>
  );
}
