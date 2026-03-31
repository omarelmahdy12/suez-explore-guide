import { useState, useMemo } from "react";
import { MapPin } from "lucide-react";
import { attractions } from "@/data/attractions";
import { useFavorites } from "@/hooks/useFavorites";
import { useTheme } from "@/hooks/useTheme";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import AttractionCard from "@/components/AttractionCard";
import AttractionDetail from "@/components/AttractionDetail";
import FavoritesPanel from "@/components/FavoritesPanel";
import type { Attraction } from "@/data/attractions";

export default function Index() {
  const { isDark, toggle: toggleTheme } = useTheme();
  const { favorites, toggleFavorite, isFavorite, setRating, getRating } = useFavorites();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);

  const filtered = useMemo(() => {
    return attractions.filter((a) => {
      const matchesSearch =
        a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.nameAr.includes(searchQuery) ||
        a.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || a.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenFavorites={() => setShowFavorites(true)}
        favCount={favorites.length}
      />

      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Tourist Attractions
            </h2>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> Ismailia Governorate • {filtered.length} places
            </p>
          </div>
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center py-20 text-center">
            <MapPin className="mb-3 h-12 w-12 text-muted-foreground/30" />
            <p className="text-lg font-medium text-muted-foreground">No attractions found</p>
            <p className="text-sm text-muted-foreground/70">Try a different search or category</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((attraction, i) => (
              <AttractionCard
                key={attraction.id}
                attraction={attraction}
                isFavorite={isFavorite(attraction.id)}
                rating={getRating(attraction.id)}
                onToggleFavorite={() => toggleFavorite(attraction.id)}
                onRate={(r) => setRating(attraction.id, r)}
                onClick={() => setSelectedAttraction(attraction)}
                index={i}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="border-t bg-card py-6 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Faculty of Tourism — Suez Canal University. All rights reserved.
        </p>
      </footer>

      {selectedAttraction && (
        <AttractionDetail
          attraction={selectedAttraction}
          isFavorite={isFavorite(selectedAttraction.id)}
          rating={getRating(selectedAttraction.id)}
          onToggleFavorite={() => toggleFavorite(selectedAttraction.id)}
          onRate={(r) => setRating(selectedAttraction.id, r)}
          onClose={() => setSelectedAttraction(null)}
        />
      )}

      <FavoritesPanel
        isOpen={showFavorites}
        onClose={() => setShowFavorites(false)}
        attractions={attractions}
        favoriteIds={favorites.map((f) => f.attractionId)}
        getRating={getRating}
        onRate={setRating}
        onRemove={toggleFavorite}
        onSelect={setSelectedAttraction}
      />
    </div>
  );
}
