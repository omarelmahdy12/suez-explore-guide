import { Heart, Moon, Sun, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenFavorites: () => void;
  favCount: number;
}

export default function Navbar({ isDark, onToggleTheme, onOpenFavorites, favCount }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Faculty of Tourism Logo" className="h-10 w-10 rounded-full object-cover" />
          <div className="hidden sm:block">
            <h2 className="text-sm font-display font-bold text-foreground leading-tight">Ismailia Tourism</h2>
            <p className="text-xs text-muted-foreground">Faculty of Tourism — SCU</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={onOpenFavorites}
            className="relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Heart className="h-4 w-4 text-accent" />
            <span className="hidden sm:inline">Favorites</span>
            {favCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                {favCount}
              </span>
            )}
          </button>

          <button
            onClick={onToggleTheme}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
