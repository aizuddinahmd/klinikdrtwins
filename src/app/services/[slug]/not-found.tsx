import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-[#18181a] mb-4">
        Perkhidmatan tidak dijumpai
      </h2>
      <p className="text-gray-700 mb-8">
        Maaf, perkhidmatan yang anda cari tidak dijumpai.
      </p>
      <Link
        href="/"
        className="inline-block bg-[#c18e4a] text-white rounded-xl px-8 py-3 text-base font-medium hover:bg-[#a97a3a] transition-colors"
      >
        Kembali ke Laman Utama
      </Link>
    </div>
  );
}
