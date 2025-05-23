import Image from "next/image";

function FeaturesRight() {
  return (
    <section className="w-full py-16 flex flex-col md:flex-row-reverse items-center rounded-4xl justify-between gap-12 bg-[#9eaf7c]">
      {/* Right: Main image with overlay */}
      <div className="relative flex-1 flex justify-center items-center">
        <div className="w-full md:w-[480px] md:h-[480px] overflow-hidden">
          <Image
            src="/features/features-2.png"
            alt="features-2"
            width={480}
            height={480}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* Left: Text and small images */}
      <div className="flex-1 flex flex-col px-12 gap-6 items-start">
        <h2 className="text-4xl md:text-5xl font-bold text-[#ebebef] leading-tight">
          Perkhidmatan komprehensif
          <br />
          untuk keluarga anda
        </h2>
        <p className="text-lg text-start text-[#ebebef] max-w-md">
          Pemeriksaan bayi, vaksinasi, dan sokongan penyusuan — semua di bawah
          satu bumbung!
        </p>
        <button className="bg-[#6e785b] text-white rounded-xl px-8 py-3 text-base font-medium flex items-center gap-2 hover:bg-[#8b9575] transition-colors">
          Learn More <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </section>
  );
}

export default FeaturesRight;
