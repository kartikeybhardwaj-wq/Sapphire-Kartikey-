import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle, XCircle, Info } from "lucide-react";

interface InfoBoxProps {
  type: "info" | "success" | "warning" | "error";
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const icons = {
  info: Info,
  success: CheckCircle,
  warning: AlertCircle,
  error: XCircle,
};

export const InfoBox = ({ type, title, children, className }: InfoBoxProps) => {
  const Icon = icons[type];

  return (
    <div
      className={cn(
        "flex gap-4 rounded-lg border p-4 transition-all",
        type === "info" && "bg-secondary/10 border-secondary/30",
        type === "success" && "bg-chart-1/10 border-chart-1/30",
        type === "warning" && "bg-chart-3/10 border-chart-3/30",
        type === "error" && "bg-destructive/10 border-destructive/30",
        className
      )}
    >
      <div
        className={cn(
          "flex-shrink-0",
          type === "info" && "text-secondary",
          type === "success" && "text-chart-1",
          type === "warning" && "text-chart-3",
          type === "error" && "text-destructive"
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        {title && <p className="font-semibold text-foreground mb-1">{title}</p>}
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
};
