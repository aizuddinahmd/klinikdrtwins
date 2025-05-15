"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    icon: "/ibu-mengandung.svg",
    title: "Rawatan Ibu Mengandung",
    desc: "Kami menyediakan perkhidmatan seperti <i>ultrasound scan baby</i>, buka buku pink, ujian kehamilan, minum air gula dan lain-lain",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/rawatan-pesakit-luar.png",
    title: "Rawatan Pesakit Luar",
    desc: "Kami menyediakan rawatan kesihatan yang biasa dilakukan di klinik kami, contohnya seperti rawatan demam, batuk, selsema, gastrik atau GERD, migrain dan lain-lain",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/pemeriksaan-kesihatan.png",
    title: "Pemeriksaan Kesihatan",
    desc: "Kami menyediakan perkhidmatan untuk pelbagai jenis pemeriksaan kesihatan seperti pelajar, pekerja asing, GDL dan e-hailing.",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/ultrasound-scan.png",
    title: "Ultrasound Scan",
    desc: "Kami menggunakan mesin Ultrasound yang terkini yang boleh mengimbas secara 2d, 3d, 4d & 5d.",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/pemeriksaan-kuning-bayi.png",
    title: "Pemeriksaan Kuning Bayi",
    desc: "Inovaso perubatan terkini yang dikembangkan secara eksklusif untuk menghilangkan kesulitan dan kesakitan bayi",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/ujian-darah.png",
    title: "Ujian Darah",
    desc: "Kami menyediakan perkhidmatan ujian saringan kesihatan melalui pengambilan darah",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/cucian-luka.png",
    title: "Cucian Luka",
    desc: "Kami menyediakan perkhidmatan cucian luka seperti luka kencing manis, luka selepas operasi, luka kemalangan dan lain-lain",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/rawatan-asma.png",
    title: "Rawatan Asma & Sedut Kahak",
    desc: "Kami menyediakan rawatan nebulizer untuk pesakit asma. Kami juga melakukan sedutan kahak bagi melegakan pesakit yang batuk terbahak",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/vaksinasi-imunisasi.png",
    title: "Vaksinasi & Imunisasi",
    desc: "Dapatkan vaksin untuk pengendali makanan iaitu vaksin typhoid, vaksin influenza dan Umrah & Hajj",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/housecall-doctor.png",
    title: "Housecall Doctor",
    desc: "Kami menyediakan perkhidmatan rawatan doktor ke rumah anda",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/covid-rtk-pcr.png",
    title: "Covid RTK & PCR",
    desc: "Kami menyediakan perkhidmatan ujian covid RTK dan PCR secara temu janji",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/perancangan-keluarga.png",
    title: "Perancangan Keluarga",
    desc: "Kami menyediakan perkhidmatan suntikan IM Depo bagi mencegah kehamilan.",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/kesihatan-wanita.png",
    title: "Kesihatan Wanita",
    desc: "Kami menyediakan perkhidmatan ujian untuk mengetahui tahap kesuburan anda dan ujian Pap Smear untuk saringan kanser pangkal rahim.",
    button: "Ketahui lebih lanjut",
  },
  {
    icon: "/services/perkhidmatan-kaunseling.png",
    title: "Perkhidmatan Kaunseling",
    desc: "Kami juga menyediakan perkhidmatan kaunseling",
    button: "Ketahui lebih lanjut",
  },
  // Add more services as needed
];

export default function Services2() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const maxIndex = services.length - visible;

  const handlePrev = () => setIndex((i) => (i > 0 ? i - 1 : maxIndex));
  const handleNext = () => setIndex((i) => (i < maxIndex ? i + 1 : 0));

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2340] mb-4 md:mb-0">
            The Best Quality
            <br />
            Service You Can Get
          </h2>
          <p className="text-gray-500 max-w-md">
            We use only the best quality materials on the market in order to
            provide the best products to our patients
          </p>
        </div>
        <div className="relative">
          <div className="flex gap-6 justify-center">
            {services.slice(index, index + visible).map((s, i) => (
              <div
                key={s.title}
                className={`flex flex-col items-center bg-white rounded-2xl p-8 w-full max-w-xs min-h-[320px] border transition
                  ${
                    i === 1
                      ? "shadow-xl border-none z-10"
                      : "border-gray-200 shadow-sm z-0"
                  }
                `}
              >
                <div className="w-16 h-16 rounded-full bg-[#f5f8fd] flex items-center justify-center mb-4 shadow">
                  <Image src={s.icon} alt={s.title} width={40} height={40} />
                </div>
                <h3 className="text-lg font-bold text-[#1a2340] mb-2 text-center">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-base mb-6 text-center">
                  {s.desc}
                </p>
                {/* <button
                  className={`rounded-full px-6 py-2 font-medium flex items-center gap-2 transition
                    ${
                      i === 1
                        ? "bg-[#2563eb] text-white shadow hover:bg-[#1d4ed8]"
                        : "border border-[#2563eb] text-[#2563eb] bg-white hover:bg-[#2563eb] hover:text-white"
                    }
                  `}
                >
                  know this more <span className="text-lg">&rarr;</span>
                </button> */}
              </div>
            ))}
          </div>
          {/* Carousel navigation */}

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-2xl shadow hover:bg-gray-100 transition"
              aria-label="Previous"
            >
              &larr;
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-2xl shadow hover:bg-gray-100 transition"
              aria-label="Next"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
