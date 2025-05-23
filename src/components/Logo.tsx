import Image from "next/image";

const logoIcons = [
  {
    id: 1,
    src: "/panel/1.png",
    alt: "Logo",
  },
  {
    id: 2,
    src: "/panel/2.png",
    alt: "Logo",
  },
  {
    id: 3,
    src: "/panel/3.png",
    alt: "Logo",
  },
  {
    id: 4,
    src: "/panel/4.png",
    alt: "Logo",
  },
  {
    id: 5,
    src: "/panel/5.png",
    alt: "Logo",
  },
  {
    id: 6,
    src: "/panel/6.png",
    alt: "Logo",
  },
  {
    id: 7,
    src: "/panel/7.png",
    alt: "Logo",
  },
  {
    id: 8,
    src: "/panel/8.png",
    alt: "Logo",
  },
  {
    id: 9,
    src: "/panel/9.png",
    alt: "Logo",
  },
  {
    id: 10,
    src: "/panel/10.png",
    alt: "Logo",
  },
  {
    id: 11,
    src: "/panel/11.png",
    alt: "Logo",
  },
  {
    id: 12,
    src: "/panel/12.png",
    alt: "Logo",
  },
  {
    id: 13,
    src: "/panel/13.png",
    alt: "Logo",
  },
  {
    id: 14,
    src: "/panel/14.png",
    alt: "Logo",
  },
  {
    id: 15,
    src: "/panel/15.png",
    alt: "Logo",
  },
  {
    id: 16,
    src: "/panel/16.png",
    alt: "Logo",
  },
  {
    id: 17,
    src: "/panel/17.png",
    alt: "Logo",
  },
  {
    id: 18,
    src: "/panel/18.png",
    alt: "Logo",
  },
  {
    id: 19,
    src: "/panel/19.png",
    alt: "Logo",
  },
  {
    id: 20,
    src: "/panel/20.png",
    alt: "Logo",
  },
  {
    id: 21,
    src: "/panel/21.png",
    alt: "Logo",
  },
  {
    id: 22,
    src: "/panel/22.png",
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
