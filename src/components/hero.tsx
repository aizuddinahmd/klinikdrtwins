import Image from "next/image";

function Hero() {
  return (
    <section className="relative w-full min-h-[500px] flex flex-col md:flex-row items-center justify-between bg-[#fef9f6] overflow-hidden rounded-3xl mb-16">
      {/* Curve on the right */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#fef9f6] to-[#c18e4a]">
        <Image
          src={`/drtwins.png`}
          alt="Hero Curve"
          fill
          className="object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 px-8 py-16 max-w-2xl md:ml-12">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#9eaf7c] to-[#c18e4a] bg-clip-text text-transparent">
          Klinik mesra wanita &<span className="block">Kanak-Kanak</span>
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

export default Hero;
