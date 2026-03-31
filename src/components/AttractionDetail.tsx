import { X, Heart, Clock, Ticket, MapPin, ExternalLink } from "lucide-react";
import { Attraction } from "@/data/attractions";
import StarRating from "./StarRating";

interface AttractionDetailProps {
  attraction: Attraction;
  isFavorite: boolean;
  rating: number;
  onToggleFavorite: () => void;
  onRate: (rating: number) => void;
  onClose: () => void;
}

export default function AttractionDetail({
  attraction,
  isFavorite,
  rating,
  onToggleFavorite,
  onRate,
  onClose,
}: AttractionDetailProps) {
  const mapsUrl = `https://www.google.com/maps?q=${attraction.lat},${attraction.lng}`;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3000!2d${attraction.lng}!3d${attraction.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-card shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-card/80 p-2 backdrop-blur transition-colors hover:bg-muted"
        >
          <X className="h-5 w-5 text-card-foreground" />
        </button>

        <img
          src={attraction.image}
          alt={attraction.name}
          className="h-64 w-full object-cover"
          width={800}
          height={600}
        />

        <div className="p-6">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-card-foreground">{attraction.name}</h2>
              <p className="text-base text-muted-foreground" dir="rtl">{attraction.nameAr}</p>
            </div>
            <button
              onClick={onToggleFavorite}
              className="rounded-full border p-2 transition-colors hover:bg-muted"
            >
              <Heart className={`h-5 w-5 ${isFavorite ? "fill-accent text-accent" : "text-muted-foreground"}`} />
            </button>
          </div>

          <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1">
              <Clock className="h-4 w-4" /> {attraction.openingHours}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1">
              <Ticket className="h-4 w-4" /> {attraction.entryFee}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-primary">
              {attraction.category}
            </span>
          </div>

          <p className="mb-2 text-card-foreground leading-relaxed">{attraction.description}</p>
          <p className="mb-6 text-muted-foreground leading-relaxed" dir="rtl">{attraction.descriptionAr}</p>

          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="mb-1 text-sm font-medium text-card-foreground">Rate this attraction</p>
              <StarRating rating={rating} onRate={onRate} size={22} />
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
            >
              <ExternalLink className="h-4 w-4" /> Open in Google Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-lg border">
            <iframe
              src={embedUrl}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${attraction.name}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
