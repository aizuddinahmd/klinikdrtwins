import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full py-16 max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Top Left: Large Image */}
        <div className="rounded-2xl overflow-hidden border border-gray-300">
          <Image
            src="/drtwins-team.jpg"
            alt="Team"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Top Right: About Card */}
        <div className="rounded-2xl bg-[#386963] text-white p-8 flex flex-col justify-center min-h-[300px]">
          <h3 className="text-lg font-semibold mb-4">ABOUT THE PROJECT</h3>
          <p className="text-base leading-relaxed">
            Development of a convenient and intuitive site for dental clinic.
            The project included the development of UX/UI-design of the site,
            logo and corporate identity. My goal is to convey the
            professionalism and high level of the clinic service through visual
            identity and a convenient user interface.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Bottom Left: Small Image */}
        <div className="rounded-2xl overflow-hidden border border-gray-300">
          <Image
            src="/clinic-6.JPG"
            alt="Clinic"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Bottom Center: Logo/Icon */}
        <div className="rounded-2xl border border-gray-300 bg-white flex items-center justify-center p-8 min-h-[180px]">
          <Image
            src="/drtwins-logo-single.png"
            alt="Logo"
            width={120}
            height={120}
            className="object-cover"
          />
        </div>
        {/* Bottom Right: Small Image */}
        <div className="rounded-2xl overflow-hidden border border-gray-300">
          <Image
            src="/clinic-2.JPG"
            alt="clinic"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
