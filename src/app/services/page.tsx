import Navbar from "@/components/navbar";
import ListofServices from "@/components/ListofServices";
export default function Services() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-[#fef9f6] px-36 py-12">
        <ListofServices />
      </main>
    </>
  );
}
