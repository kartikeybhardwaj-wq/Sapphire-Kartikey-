import { cn } from "@/lib/utils";

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "highlight" | "warning" | "success";
}

export const ContentCard = ({ children, className, variant = "default" }: ContentCardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border p-6 md:p-8 transition-all hover:shadow-md",
        variant === "default" && "bg-card border-border hover:border-secondary/30",
        variant === "highlight" && "bg-secondary/10 border-secondary/30 hover:border-secondary/50",
        variant === "warning" && "bg-destructive/5 border-destructive/20",
        variant === "success" && "bg-chart-1/10 border-chart-1/20",
        className
      )}
    >
      {children}
    </div>
  );
};
