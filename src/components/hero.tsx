import Image from "next/image";

function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-5xl">
      {/* Hero Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-xl w-full md:-mr-16 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#23235b] leading-tight mb-4">
          Where caring
          <br />
          is our calling
        </h1>
        <p className="text-[#23235bcc] text-base md:text-lg mb-6">
          Klinik Dr Twins merupakan klinik perubatan yang sesuai untuk seisi
          keluarga dengan suasana minimalis yang menyenangkan saat anda memasuki
          klinik kami. Kami menawarkan rawatan yang komprehensif serta
          dilengkapi dengan peralatan terbaru dan canggih.
        </p>
        <button className="bg-[#c18e4a] text-white rounded-lg px-6 py-2 font-medium hover:bg-[#a97a3a] transition-colors">
          Contact us
        </button>
      </div>
      {/* Hero Image */}
      <div className="w-full md:w-[520px] h-[340px] relative rounded-2xl overflow-hidden shadow-md">
        <Image
          src="/hero.jpg"
          alt="Klinik Dr Twins front desk"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
