import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle, Circle } from "lucide-react";

interface NavigationItem {
  id: string;
  label: string;
  level?: number;
}

interface PageNavigationMenuProps {
  items: NavigationItem[];
  className?: string;
}

export const PageNavigationMenu = ({ items, className }: PageNavigationMenuProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently in view
      const scrollPosition = window.scrollY + 150; // Offset for header

      for (let i = items.length - 1; i >= 0; i--) {
        const element = document.getElementById(items[i].id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveId(items[i].id);
            break;
          }
        }
      }

      // Always show menu (don't hide at top)
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // Account for header + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  if (items.length === 0) return null;

  return (
    <aside
      className={cn(
        "hidden lg:block fixed left-64 top-14 bottom-0 w-64 flex-shrink-0 border-r border-border bg-background/95 backdrop-blur-sm p-6 space-y-2 overflow-y-auto z-30",
        className
      )}
    >
      <h3 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-wider text-muted-foreground">
        Page Sections
      </h3>
      <nav className="space-y-1">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const itemIndex = items.findIndex((i) => i.id === item.id);
          const isCompleted = activeId && itemIndex < items.findIndex((i) => i.id === activeId);
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "w-full flex items-start gap-3 p-2.5 rounded-lg text-left transition-all hover:bg-muted/50 group",
                isActive && "bg-primary/10 border border-primary/30",
                item.level && item.level > 1 && "ml-4 text-sm"
              )}
            >
              <div className="flex-shrink-0 mt-0.5">
                {isCompleted ? (
                  <CheckCircle className="h-4 w-4 text-chart-1" />
                ) : (
                  <Circle
                    className={cn(
                      "h-4 w-4 transition-colors",
                      isActive
                        ? "text-primary fill-primary/20"
                        : "text-muted-foreground group-hover:text-foreground/60"
                    )}
                  />
                )}
              </div>
              <span
                className={cn(
                  "text-sm leading-tight transition-colors",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground group-hover:text-foreground/80"
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
