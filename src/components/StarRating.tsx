import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  onRate: (rating: number) => void;
  size?: number;
}

export default function StarRating({ rating, onRate, size = 16 }: StarRatingProps) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={(e) => {
            e.stopPropagation();
            onRate(star);
          }}
          className="transition-transform hover:scale-110"
        >
          <Star
            size={size}
            className={star <= rating ? "fill-gold text-gold" : "text-muted-foreground/40"}
          />
        </button>
      ))}
    </div>
  );
}
