import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Testimonial from "./Testimonial";

const testimonials = [
  {
    comment:
      "Klinik Dr Twins gave me the best care! The staff are friendly and professional.",
    name: "Aisyah Binti Ahmad",
    rating: 4.5,
  },
  {
    comment: "Doktor sangat membantu dan suasana klinik sangat selesa.",
    name: "Muhammad Faiz",
    rating: 5,
  },
  {
    comment: "Rawatan yang diberikan sangat memuaskan dan harga berpatutan.",
    name: "Nurul Izzati",
    rating: 4,
  },
  {
    comment: "Klinik terbaik untuk keluarga saya!",
    name: "Siti Mariam",
    rating: 5,
  },
  {
    comment:
      "Klinik Dr Twins gave me the best care! The staff are friendly and professional.",
    name: "Aisyah Binti Ahmad",
    rating: 4.5,
  },
  {
    comment: "Doktor sangat membantu dan suasana klinik sangat selesa.",
    name: "Muhammad Faiz",
    rating: 5,
  },
  {
    comment: "Rawatan yang diberikan sangat memuaskan dan harga berpatutan.",
    name: "Nurul Izzati",
    rating: 4,
  },
  {
    comment: "Klinik terbaik untuk keluarga saya!",
    name: "Siti Mariam",
    rating: 5,
  },
];

export default function ListofTestimonials() {
  return (
    <section className="w-full py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#18181a] mb-8 text-center">
        Apa Kata Pesakit Kami
      </h2>
      <div className="max-w-5xl mx-auto">
        <Carousel>
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem
                key={i}
                className="basis-full md:basis-1/2 lg:basis-1/4 flex justify-center"
              >
                <Testimonial {...t} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
