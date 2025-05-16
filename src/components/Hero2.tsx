import Image from "next/image";

export default function Hero2() {
  return (
    <section className="relative w-full md:h-[740px] flex flex-row md:flex-row justify-center bg-[#fef9f6] overflow-hidden rounded-3xl mb-16">
      {/* Curve on the right */}
      <div className="hidden md:block z-10">
        <Image
          src={`/drtwins.png`}
          alt="Hero Curve"
          fill
          className="object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-0 flex flex-col gap-6 px-8 py-16 max-w-3xl md:ml-12 top-13">
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-[#44454a] bg-clip-text text-center">
          Empowering Women<span className="block">Nurturing Children</span>
        </h1>
        {/* <p className="text-lg text-[#44454a] max-w-lg">
          Klinik Dr Twins merupakan klinik perubatan yang sesuai untuk seisi
          keluarga. Kami menawarkan rawatan yang komprehensif serta dilengkapi
          dengan peralatan terbaru dan canggih.
        </p> */}
        {/* <button className="bg-[#9eaf7c] text-white rounded-xl px-8 py-4 text-lg font-semibold w-fit hover:bg-[#a97a3a] transition-colors">
          Get Appointment
        </button> */}
      </div>
    </section>
  );
}
