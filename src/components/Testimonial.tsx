import { Star } from "lucide-react";

interface TestimonialProps {
  comment: string;
  name: string;
  rating: number; // e.g. 4.5
}

export default function Testimonial({
  comment,
  name,
  rating,
}: TestimonialProps) {
  // Calculate full and half stars
  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));
  const fullStars = Math.floor(safeRating);
  const halfStar = safeRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="bg-[#9eaf7c] rounded-2xl border border-[#e5e0f6] p-8 max-w-lg mx-auto flex flex-col items-center gap-4">
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="text-yellow-400 fill-yellow-400 w-5 h-5" />
        ))}
        {halfStar && (
          <Star className="text-yellow-400 fill-yellow-400/50 w-5 h-5" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className="text-gray-300 w-5 h-5" />
        ))}
        <span className="ml-2 text-lg font-semibold text-[#44454a]">
          {safeRating.toFixed(1)}
        </span>
      </div>
      <p className="text-lg text-center text-[#ebebef] italic">
        &quot;{comment}&quot;
      </p>
      <span className="text-base font-medium text-[#ebebef]">{name}</span>
    </div>
  );
}
