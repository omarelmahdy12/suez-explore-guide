import { Heart, Clock, MapPin, Ticket } from "lucide-react";
import { Attraction } from "@/data/attractions";
import StarRating from "./StarRating";

interface AttractionCardProps {
  attraction: Attraction;
  isFavorite: boolean;
  rating: number;
  onToggleFavorite: () => void;
  onRate: (rating: number) => void;
  onClick: () => void;
  index: number;
}

export default function AttractionCard({
  attraction,
  isFavorite,
  rating,
  onToggleFavorite,
  onRate,
  onClick,
  index,
}: AttractionCardProps) {
  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          width={800}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          className="absolute right-3 top-3 rounded-full bg-card/80 p-2 backdrop-blur transition-colors hover:bg-card"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${isFavorite ? "fill-accent text-accent" : "text-foreground"}`}
          />
        </button>
        <span className="absolute left-3 bottom-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
          {attraction.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="mb-1 font-display text-lg font-semibold text-card-foreground">{attraction.name}</h3>
        <p className="mb-1 text-sm text-muted-foreground font-body" dir="rtl">{attraction.nameAr}</p>
        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{attraction.description}</p>

        <div className="mb-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {attraction.openingHours}
          </span>
          <span className="flex items-center gap-1">
            <Ticket className="h-3 w-3" /> {attraction.entryFee}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <StarRating rating={rating} onRate={onRate} />
          <span className="flex items-center gap-1 text-xs text-secondary">
            <MapPin className="h-3 w-3" /> View on map
          </span>
        </div>
      </div>
    </div>
  );
}
