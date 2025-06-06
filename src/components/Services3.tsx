"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    icon: "/services/rawatan-pesakit-luar-1.png",
    title: "Rawatan Pesakit Luar",
    desc: "Kami menyediakan rawatan kesihatan yang biasa dilakukan di klinik kami, contohnya seperti rawatan demam, batuk, selsema, gastrik atau GERD, migrain dan lain-lain",
  },
  {
    icon: "/services/pemeriksaan-kesihatan-1.png",
    title: "Pemeriksaan Kesihatan",
    desc: "Kami menyediakan perkhidmatan untuk pelbagai jenis pemeriksaan kesihatan seperti pelajar, pekerja asing, GDL dan e-hailing.",
  },
  {
    icon: "/services/ultrasound-scan-1.png",
    title: "Ultrasound Scan",
    desc: "Kami menggunakan mesin Ultrasound yang terkini yang boleh mengimbas secara 2d, 3d, 4d & 5d.",
  },
  {
    icon: "/services/pemeriksaan-kuning-bayi-1.png",
    title: "Pemeriksaan Kuning Bayi",
    desc: "Inovaso perubatan terkini yang dikembangkan secara eksklusif untuk menghilangkan kesulitan dan kesakitan bayi",
  },
  {
    icon: "/services/ujian-darah-1.png",
    title: "Ujian Darah",
    desc: "Kami menyediakan perkhidmatan ujian saringan kesihatan melalui pengambilan darah",
  },
  {
    icon: "/services/cucian-luka-1.png",
    title: "Cucian Luka",
    desc: "Kami menyediakan perkhidmatan cucian luka seperti luka kencing manis, luka selepas operasi, luka kemalangan dan lain-lain",
  },
];

export default function Services3() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full rounded-4xl justify-between gap-12 bg-[#9eaf7c] py-12 px-2 md:px-0">
      <h2 className="text-3xl md:text-4xl font-bold text-[#ebebef] mb-8 px-4">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {services.map((service, i) => {
          // For the center card in the second row, show the description if open
          if (openIndex === i) {
            return (
              <div
                key={service.title}
                className={`relative flex flex-col justify-center items-center bg-white rounded-lg p-6 min-h-[220px] shadow transition
                  ${i === 0 ? "rounded-tl-[70px]" : ""}
                  ${i === 5 ? "rounded-br-[70px]" : ""}
                `}
              >
                <button
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#18181a] text-white flex items-center justify-center text-xl"
                  onClick={() => setOpenIndex(null)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <p className="text-gray-700 text-base text-center">
                  {service.desc}
                </p>
              </div>
            );
          }

          // Normal service card
          return (
            <div
              key={service.title}
              className={`relative group overflow-hidden min-h-[220px] flex items-end rounded-lg shadow transition
                ${i === 0 ? "rounded-tl-[72px]" : ""}
                ${i === 5 ? "rounded-br-[72px]" : ""}
              `}
              style={{ background: "#fff" }}
            >
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-cover w-full h-[200px]"
                style={{ zIndex: 1 }}
              />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-white text-lg font-semibold drop-shadow">
                  {service.title}
                </span>
              </div>
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 text-[#18181a] flex items-center justify-center text-xl z-10 border border-[#e5e5e5] hover:bg-[#f6f6f8]"
                onClick={() => setOpenIndex(i)}
                aria-label="More"
              >
                +
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
