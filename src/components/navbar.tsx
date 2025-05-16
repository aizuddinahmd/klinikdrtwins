import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="w-full bg-[#fef9f6] border-b border-[#e5e0f6]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src={`/drtwins-logo.png`}
              alt="Klinik Dr Twins Logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </Link>
        </div>
        {/* Nav Links */}
        <div className="flex-1 flex justify-center gap-10">
          <Link
            href="services"
            className="text-[#23235b] font-medium hover:text-[#c18e4a] transition-colors"
          >
            Perkhidmatan
          </Link>
        </div>
        {/* Contact Button */}
        <Link
          href="#contact"
          className="hidden md:block bg-[#c18e4a] text-white rounded-xl px-7 py-2 font-medium hover:bg-[#a97a3a] transition-colors text-base shadow-none"
        >
          Hubungi Kami
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
