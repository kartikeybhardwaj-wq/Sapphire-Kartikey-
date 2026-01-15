interface ProgressBarProps {
  progress: number; // 0-100
  label?: string;
  showPercentage?: boolean;
}

export const ProgressBar = ({ progress, label, showPercentage = true }: ProgressBarProps) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  
  return (
    <div className="w-full space-y-2">
      {label && (
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">{label}</span>
          {showPercentage && (
            <span className="text-sm font-semibold text-primary">{Math.round(clampedProgress)}%</span>
          )}
        </div>
      )}
      <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
};
