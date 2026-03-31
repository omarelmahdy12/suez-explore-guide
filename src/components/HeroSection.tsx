import { Search } from "lucide-react";
import heroImage from "@/assets/hero-ismailia.jpg";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function HeroSection({ searchQuery, onSearchChange }: HeroSectionProps) {
  return (
    <section className="relative h-[420px] overflow-hidden">
      <img src={heroImage} alt="Ismailia waterfront at sunset" className="absolute inset-0 h-full w-full object-cover" width={1920} height={768} />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-2 font-display text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl drop-shadow-lg">
          Discover Ismailia
        </h1>
        <p className="mb-8 max-w-xl text-base text-primary-foreground/90 md:text-lg drop-shadow">
          Explore the beautiful tourist attractions of Ismailia Governorate — where history meets the Suez Canal
        </p>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search attractions..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-full border border-border bg-card/95 py-3 pl-12 pr-4 text-foreground shadow-lg backdrop-blur placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </section>
  );
}
