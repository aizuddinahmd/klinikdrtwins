import { useState } from "react";
import Image from "next/image";

const features = [
  {
    icon: "/ibu-mengandung.svg",
    title: "Rawatan Ibu Mengandung",
    desc: "Kami menyediakan perkhidmatan seperti <i>ultrasound scan baby</i>, buka buku pink, ujian kehamilan, minum air gula dan lain-lain",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/pesakit-luar.svg",
    title: "Rawatan Pesakit Luar",
    desc: "Kami menyediakan rawatan kesihatan yang biasa dilakukan di klinik kami, contohnya seperti rawatan demam, batuk, selsema, gastrik atau GERD, migrain dan lain-lain",
    button: "Ketahui lebih lanjut",
  },
  // Add more features as needed
];

function FeatureSlider() {
  const [index, setIndex] = useState(0);
  const maxIndex = features.length - 2 >= 0 ? features.length - 2 : 0;

  const handlePrev = () => {
    setIndex((i) => (i > 0 ? i - 1 : maxIndex));
  };
  const handleNext = () => {
    setIndex((i) => (i < maxIndex ? i + 1 : 0));
  };

  return (
    <section className="max-w-6xl mx-auto my-16 px-4" id="perkhidmatan">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Perkhidmatan Kami</h2>
      <div className="relative flex items-center">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute -left-8 md:-left-16 w-14 h-14 rounded-full bg-white shadow flex items-center justify-center text-2xl border border-gray-200 hover:bg-gray-100 transition z-10"
          aria-label="Sebelumnya"
        >
          <span>&larr;</span>
        </button>
        {/* Cards */}
        <div className="flex gap-8 w-full justify-center">
          {features.slice(index, index + 2).map((f) => (
            <div
              key={f.title}
              className="flex flex-col md:flex-row items-center bg-white border border-gray-300 rounded-2xl p-8 w-full max-w-xl min-h-[280px] shadow-sm transition"
            >
              <Image
                src={f.icon}
                alt=""
                width={90}
                height={90}
                className="mb-4 md:mb-0 md:mr-6"
              />
              <div>
                <h3 className="font-bold text-2xl mb-2">{f.title}</h3>
                <p
                  className="text-gray-700 text-lg mb-6"
                  dangerouslySetInnerHTML={{ __html: f.desc }}
                />
                <button className="bg-[#c18e4a] text-white rounded-xl px-7 py-2 font-medium hover:bg-[#a97a3a] transition-colors text-base">
                  {f.button}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute -right-8 md:-right-16 w-14 h-14 rounded-full bg-white shadow flex items-center justify-center text-2xl border border-gray-200 hover:bg-gray-100 transition z-10"
          aria-label="Seterusnya"
        >
          <span>&rarr;</span>
        </button>
      </div>
      {/* Button Group */}
      <div className="flex flex-row justify-center gap-12 mt-12">
        <button className="bg-[#c18e4a] text-white rounded-[2rem] px-16 py-6 text-3xl font-normal focus:outline-none">
          Hubungi Kami
        </button>
        <button className="bg-[#d8d9e0] text-[#232323] rounded-[2rem] px-16 py-6 text-3xl font-normal focus:outline-none">
          Perkhidmatan Kami
        </button>
      </div>
    </section>
  );
}

export default FeatureSlider;
