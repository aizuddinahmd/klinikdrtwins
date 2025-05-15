"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

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

  // Add more features as needed
];

export default function ListofServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {services.map((service) => (
        <Card
          key={service.title}
          className="border-[#bcbcbc] bg-white p-8 hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
        >
          <CardContent className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 mb-4 md:mb-0 md:mr-6">
              <Image
                src={service.icon}
                alt={service.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col items-start">
              <h3 className="font-bold text-xl mb-2 text-[#18181a]">
                {service.title}
              </h3>
              <p
                className="text-gray-700 text-base mb-6"
                dangerouslySetInnerHTML={{ __html: service.desc }}
              />
              <button className="bg-[#c18e4a] text-white rounded-xl px-8 py-3 text-base font-medium w-full mt-auto hover:bg-[#a97a3a] transition-colors">
                {service.button}
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
