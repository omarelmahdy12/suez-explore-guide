import { useState, useEffect, useCallback } from "react";

interface FavoriteItem {
  attractionId: string;
  rating: number;
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    const saved = localStorage.getItem("ismailia-favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("ismailia-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = useCallback((attractionId: string) => {
    setFavorites((prev) => {
      const exists = prev.find((f) => f.attractionId === attractionId);
      if (exists) return prev.filter((f) => f.attractionId !== attractionId);
      return [...prev, { attractionId, rating: 0 }];
    });
  }, []);

  const isFavorite = useCallback(
    (attractionId: string) => favorites.some((f) => f.attractionId === attractionId),
    [favorites]
  );

  const setRating = useCallback((attractionId: string, rating: number) => {
    setFavorites((prev) =>
      prev.map((f) => (f.attractionId === attractionId ? { ...f, rating } : f))
    );
  }, []);

  const getRating = useCallback(
    (attractionId: string) => favorites.find((f) => f.attractionId === attractionId)?.rating || 0,
    [favorites]
  );

  return { favorites, toggleFavorite, isFavorite, setRating, getRating };
}
