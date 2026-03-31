import { X, Heart } from "lucide-react";
import { Attraction } from "@/data/attractions";
import StarRating from "./StarRating";

interface FavoritesPanelProps {
  isOpen: boolean;
  onClose: () => void;
  attractions: Attraction[];
  favoriteIds: string[];
  getRating: (id: string) => number;
  onRate: (id: string, rating: number) => void;
  onRemove: (id: string) => void;
  onSelect: (attraction: Attraction) => void;
}

export default function FavoritesPanel({
  isOpen,
  onClose,
  attractions,
  favoriteIds,
  getRating,
  onRate,
  onRemove,
  onSelect,
}: FavoritesPanelProps) {
  const favAttractions = attractions.filter((a) => favoriteIds.includes(a.id));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-foreground/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="h-full w-full max-w-sm overflow-y-auto bg-card shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold text-card-foreground">
            <Heart className="h-5 w-5 text-accent" /> My Favorites
          </h2>
          <button onClick={onClose} className="rounded-lg p-1 hover:bg-muted">
            <X className="h-5 w-5 text-card-foreground" />
          </button>
        </div>

        {favAttractions.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <Heart className="mb-3 h-12 w-12 text-muted-foreground/30" />
            <p className="text-muted-foreground">No favorites yet</p>
            <p className="text-sm text-muted-foreground/70">Tap the heart icon on any attraction to save it here</p>
          </div>
        ) : (
          <div className="p-4 space-y-3">
            {favAttractions.map((attraction) => (
              <div
                key={attraction.id}
                className="flex gap-3 rounded-lg border p-3 cursor-pointer transition-colors hover:bg-muted/50"
                onClick={() => {
                  onSelect(attraction);
                  onClose();
                }}
              >
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="h-16 w-16 rounded-md object-cover"
                  loading="lazy"
                  width={64}
                  height={64}
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-card-foreground truncate">{attraction.name}</h4>
                  <p className="text-xs text-muted-foreground">{attraction.category}</p>
                  <div className="mt-1 flex items-center justify-between">
                    <StarRating rating={getRating(attraction.id)} onRate={(r) => onRate(attraction.id, r)} size={14} />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemove(attraction.id);
                      }}
                      className="text-xs text-accent hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
