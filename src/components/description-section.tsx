import Image from "next/image";

function DescriptionSection() {
  return (
    <section className="flex flex-col md:flex-row gap-6 justify-center my-16 px-4">
      {/* Card 1: Hubungi Kami */}
      <div className="flex flex-col md:flex-1 items-center bg-transparent bg-opacity-90 backdrop-blur-xs rounded-2xl shadow-md p-8 min-w-[260px] max-w-sm mx-auto z-20">
        <Image
          src={`/open.png`}
          alt="Phone"
          width={56}
          height={56}
          className="mb-4"
        />
        <h3 className="font-bold text-lg mb-2 text-[#232323]">Hubungi Kami</h3>
        <p className="text-gray-700 text-md">03-8920 9625</p>
        <p className="text-gray-700 text-md">011-5665 3180</p>
      </div>
      {/* Card 2: Waktu Operasi */}
      <div className="flex flex-col md:flex-1 items-center bg-transparent bg-opacity-90 backdrop-blur-xs rounded-2xl shadow-md p-8 min-w-[260px] max-w-sm mx-auto z-20">
        <Image
          src={`/open.png`}
          alt="Open"
          width={56}
          height={56}
          className="mb-4"
        />
        <h3 className="font-bold text-lg mb-2 text-[#23235b]">Waktu Operasi</h3>
        <p className="text-gray-700 text-md">
          <span className="font-semibold">Setiap Hari</span> : 8.30 AM - 10 PM
        </p>
      </div>
      {/* Card 3: Lokasi */}
      <div className="flex flex-col md:flex-1 items-center bg-transparent bg-opacity-100 backdrop-blur-xs rounded-2xl shadow-md p-8 min-w-[260px] max-w-sm mx-auto z-20">
        <Image
          src={`/location.png`}
          alt="Location"
          width={56}
          height={56}
          className="mb-4"
        />
        <h3 className="font-bold text-lg mb-2 text-[#232323]">Lokasi</h3>
        <p className="text-gray-700 text-md">Seksyen 15,</p>
        <p className="text-gray-700 text-md">Bandar Baru Bangi</p>
      </div>
    </section>
  );
}

export default DescriptionSection;
