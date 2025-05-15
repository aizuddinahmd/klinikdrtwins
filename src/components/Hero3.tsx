import Image from "next/image";

export default function Hero3() {
  return (
    <section className="relative w-full min-h-[720px] flex flex-col items-center justify-center bg-[#fef9f6] overflow-hidden rounded-3xl mb-16">
      {/* Background image absolutely positioned */}
      <div className="hidden md:block absolute inset-0 z-0 h-full w-full ">
        <Image
          src={`/hero-1.png`}
          alt="Hero Curve"
          fill
          className="object-cover h-full blur-xs"
        />
      </div>
      {/* Content centered and above the image */}
      <div className="relative z-10 flex flex-col gap-6 px-8 py-16 max-w-2xl items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[black] bg-clip-text text-center">
          Empowering Women<span className="block">Nurturing Children</span>
        </h1>
        <p className="text-lg text-[#44454a] max-w-lg">
          Klinik Dr Twins merupakan klinik perubatan yang sesuai untuk seisi
          keluarga. Kami menawarkan rawatan yang komprehensif serta dilengkapi
          dengan peralatan terbaru dan canggih.
        </p>
        <button className="bg-[#9eaf7c] text-white rounded-xl px-8 py-4 text-lg font-semibold w-fit hover:bg-[#a97a3a] transition-colors">
          Get Appointment
        </button>
      </div>
    </section>
  );
}
