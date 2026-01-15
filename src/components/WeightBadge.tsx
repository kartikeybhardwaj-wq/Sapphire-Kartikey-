import { cn } from "@/lib/utils";

interface WeightBadgeProps {
  weight: number;
  size?: "sm" | "md";
}

export const WeightBadge = ({ weight, size = "md" }: WeightBadgeProps) => {
  const isPositive = weight > 0;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-mono font-bold rounded-md border",
        size === "sm" && "px-2 py-0.5 text-xs",
        size === "md" && "px-3 py-1 text-sm",
        isPositive
          ? "bg-chart-1/10 text-chart-1 border-chart-1/30"
          : "bg-destructive/20 text-destructive border-destructive/40"
      )}
    >
      {isPositive ? `+${weight}` : weight}
    </span>
  );
};
