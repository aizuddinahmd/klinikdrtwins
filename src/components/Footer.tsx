import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-[#fef9f6] border-t border-[#e5e0f6] py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center mb-4 md:mb-0">
          <Image
            src="/drtwins-logo-single.png"
            alt="Klinik Dr Twins Logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </Link>
        {/* Social Media Links */}
        <div className="flex gap-6 ">
          <Link
            href="https://facebook.com/klinikdrtwins"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[#23235b] hover:text-[#c18e4a] transition-colors"
          >
            {/* Facebook SVG */}
            <svg
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </Link>
          <Link
            href="https://instagram.com/klinikdrtwins"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#23235b] hover:text-[#c18e4a] transition-colors"
          >
            {/* Instagram SVG */}
            <svg
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.388 3.635 1.355 2.668 2.322 2.41 3.495 2.352 4.772.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.316 2.45 1.283 3.417.967.967 2.14 1.225 3.417 1.283C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.45-.316 3.417-1.283.967-.967 1.225-2.14 1.283-3.417.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.058-1.277-.316-2.45-1.283-3.417-.967-.967-2.14-1.225-3.417-1.283C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
            </svg>
          </Link>
          <Link
            href="https://tiktok.com/@klinikdrtwins"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-[#23235b] hover:text-[#c18e4a] transition-colors"
          >
            {/* TikTok SVG */}
            <svg
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.75 2.25h3a.75.75 0 0 1 .75.75v2.25a3.75 3.75 0 0 0 3.75 3.75h1.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-1.5a6.75 6.75 0 1 1-6.75-6.75V3a.75.75 0 0 1 .75-.75zm0 3V9a4.5 4.5 0 1 0 4.5 4.5h2.25v-1.5a6.75 6.75 0 0 1-6.75-6.75z" />
            </svg>
          </Link>
          <Link
            href="https://wa.me/601156653180"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-[#23235b] hover:text-[#c18e4a] transition-colors"
          >
            {/* WhatsApp SVG */}
            <svg
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.896 6.994c-.003 5.456-4.438 9.891-9.893 9.891zm8.413-18.304A11.815 11.815 0 0 0 12.05 0C5.495 0 .057 5.437.05 12.092c0 2.137.56 4.223 1.623 6.067L.057 24l6.019-1.579a11.888 11.888 0 0 0 5.978 1.528h.005c6.554 0 11.892-5.437 11.899-12.092a11.82 11.82 0 0 0-3.473-8.762z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
