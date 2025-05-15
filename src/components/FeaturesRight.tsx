import Image from "next/image";

function FeaturesRight() {
  return (
    <section className="w-full py-16 flex flex-col md:flex-row-reverse items-center justify-between gap-12 bg-[#9eaf7c]">
      {/* Right: Main image with overlay */}
      <div className="relative flex-1 flex justify-center items-center">
        <div className="w-full md:w-[480px] md:h-[480px] overflow-hidden">
          <Image
            src="/features/features-3.png"
            alt="Main"
            width={480}
            height={480}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Floating card */}
        <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow px-4 py-2 flex items-center gap-2">
          <span className="text-[#9eaf7c] font-semibold">
            We offer a wide range of services to help
          </span>
        </div>
      </div>
      {/* Left: Text and small images */}
      <div className="flex-1 flex flex-col gap-6 items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#ebebef] leading-tight">
          Your Beauty And
          <br />
          Success Starts Here
        </h2>
        <p className="text-lg text-[#ebebef] max-w-md">
          We offer a wide range of services to help you look and feel your best.
          Our experienced stylists are dedicated
        </p>
        <button className="bg-[#6e785b] text-white rounded-xl px-8 py-3 text-base font-medium flex items-center gap-2 hover:bg-[#8b9575] transition-colors">
          Learn More <span className="ml-2">&rarr;</span>
        </button>
        {/* <div className="flex gap-4 mt-8">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow">
            <Image
              src="/features/features-2.png"
              alt="Small 1"
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-48 h- rounded-3xl overflow-hidden shadow">
            <Image
              src="/features/features-2.png"
              alt="Small 2"
              width={112}
              height={144}
              className="object-cover w-full h-full"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default FeaturesRight;
