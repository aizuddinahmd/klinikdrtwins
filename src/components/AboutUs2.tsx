"use client";

import Image from "next/image";

interface Doctor {
  name: string;
  specialty: string;
  description: string;
  image: string;
  years: number;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Amalina",
    specialty: "Resident Doctor",
    description: "MBbCh (Tanta,Egypt)",
    image: "/doctor/amalia.png", // Replace with your image paths
    years: 8,
  },
  {
    name: "Dr. Amalia",
    specialty: "Resident Doctor",
    description: "MBbCh (Tanta,Egypt)",
    image: "/doctor/amalina.png",
    years: 5,
  },
  {
    name: "Dr. Farzana",
    specialty: "Resident Doctor",
    description: "MBBS (JUST, Jordan)",
    image: "/doctor/farzana.png",
    years: 10,
  },
];

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div
      className={`group relative flex flex-col items-center rounded-3xl bg-white transition-all duration-300 overflow-hidden min-w-[260px] max-w-[320px] w-full hover:scale-105`}
    >
      {/* Doctor Image */}
      <div className="relative w-full h-full flex items-center justify-center bg-white hover:bg-[#c18e4a]">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={180}
          height={180}
          className="w-7xl h-7xl"
        />
      </div>
      {/* Info (show on hover) */}
      <div className="absolute min-w-[260px] max-w-[320px] bottom-0 p-5 flex flex-col gap-1 bg-opacity-90 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-xs bg-transparent m-2">
        <div className="text-lg font-semibold text-[#23235b]">
          {doctor.name}
        </div>
        <div className="text-sm text-[#4f7fff] font-medium">
          {doctor.specialty}
        </div>
        <div className="text-xs text-[#44454a] mb-2">{doctor.description}</div>
      </div>
    </div>
  );
}

export default function AboutUs2() {
  const index = 0;
  const visible = 3;

  return (
    <section className="w-full bg-[#f5f7fd] py-16 px-4 rounded-3xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Right: Doctor Cards */}
        <div className="flex-1 flex flex-col md:flex-row gap-6 justify-center w-full overflow-x-auto md:overflow-visible">
          {doctors.slice(index, index + visible).map((doctor) => (
            <DoctorCard key={doctor.name} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}
