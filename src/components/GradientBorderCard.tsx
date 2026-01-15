import { cn } from "@/lib/utils";

interface GradientBorderCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientBorderCard = ({ children, className }: GradientBorderCardProps) => {
  return (
    <div className="relative rounded-lg">
      {/* Animated gradient border - absolute positioned behind */}
      <div className="absolute -inset-[1.5px] rounded-lg bg-gradient-to-r from-primary/25 via-secondary/40 to-primary/25 bg-[length:200%_200%] animate-gradient-shift opacity-80" />
      {/* Inner content with solid background that covers the gradient */}
      <div className={cn("relative rounded-lg bg-card p-4 h-full", className)}>
        {children}
      </div>
    </div>
  );
};
