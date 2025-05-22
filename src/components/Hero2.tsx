import Image from "next/image";

export default function Hero2() {
  return (
    <section className="w-full md:h-[720px] flex flex-row md:flex-row justify-center bg-[#fef9f6] overflow-hidden rounded-3xl mb-16 pb-16 container top-0 sticky">
      {/* Content */}
      <div className="top-0 sticky z-0 flex flex-col gap-6 px-8  max-w-5xl md:ml-12">
        <h1 className="text-xl md:text-[84px] font-extrabold leading-tight text-[#44454a] bg-clip-text text-center">
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
      <div className="hidden md:block z-10 top-0">
        <Image
          src={`/drtwins.png`}
          alt="dr twins"
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
