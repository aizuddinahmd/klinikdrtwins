import Image from "next/image";

const logoIcons = [
  {
    id: 1,
    src: "/logo/logo-1.png",
    alt: "Logo",
  },
  {
    id: 2,
    src: "/logo/logo-2.png",
    alt: "Logo",
  },
  {
    id: 3,
    src: "/logo/logo-3.png",
    alt: "Logo",
  },
  {
    id: 4,
    src: "/logo/logo-4.png",
    alt: "Logo",
  },
  {
    id: 5,
    src: "/logo/logo-5.png",
    alt: "Logo",
  },
  {
    id: 6,
    src: "/logo/logo-6.png",
    alt: "Logo",
  },
];

export default function Logo() {
  return (
    <section className="w-full py-16">
      <div
        x-data="{}"
        x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
        className="w-full inline-flex flex-nowrap overflow-hidden"
      >
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {logoIcons.map((item) => (
            <li key={item.id}>
              <Image src={item.src} alt={item.alt} width={120} height={60} />
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {logoIcons.map((item) => (
            <li key={item.id}>
              <Image src={item.src} alt={item.alt} width={120} height={60} />
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {logoIcons.map((item) => (
            <li key={item.id}>
              <Image src={item.src} alt={item.alt} width={120} height={60} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
