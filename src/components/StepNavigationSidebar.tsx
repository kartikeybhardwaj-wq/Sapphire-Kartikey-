import { useState, useEffect } from "react";
import { CheckCircle, Circle, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  number: number;
  title: string;
  id: string;
}

interface StepNavigationSidebarProps {
  steps: Step[];
  currentStep: number;
  completedSteps?: number[];
  skippedSteps?: number[];
  onStepClick?: (stepNumber: number) => void;
}

export const StepNavigationSidebar = ({
  steps,
  currentStep,
  completedSteps = [],
  skippedSteps = [],
  onStepClick,
}: StepNavigationSidebarProps) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getStepStatus = (stepNumber: number) => {
    if (completedSteps.includes(stepNumber)) return "completed";
    if (skippedSteps.includes(stepNumber)) return "skipped";
    if (stepNumber === currentStep) return "current";
    if (stepNumber < currentStep) return "past";
    return "future";
  };

  const scrollToStep = (stepId: string) => {
    const element = document.getElementById(stepId);
    if (element) {
      const offset = 120; // Account for header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      if (onStepClick) {
        const step = steps.find((s) => s.id === stepId);
        if (step) onStepClick(step.number);
      }
    }
  };

  return (
    <aside
      className={cn(
        "w-64 flex-shrink-0 border-r border-border bg-muted/30 p-6 space-y-2 transition-all",
        isSticky && "sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto"
      )}
    >
      <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
        Workflow Steps
      </h3>
      <nav className="space-y-1">
        {steps.map((step) => {
          const status = getStepStatus(step.number);
          return (
            <button
              key={step.id}
              onClick={() => scrollToStep(step.id)}
              className={cn(
                "w-full flex items-start gap-3 p-3 rounded-lg text-left transition-all hover:bg-muted/50",
                status === "current" && "bg-primary/10 border border-primary/30",
                status === "completed" && "opacity-75",
                status === "skipped" && "opacity-50"
              )}
            >
              <div className="flex-shrink-0 mt-0.5">
                {status === "completed" ? (
                  <CheckCircle className="h-5 w-5 text-chart-1" />
                ) : status === "skipped" ? (
                  <Minus className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Circle
                    className={cn(
                      "h-5 w-5",
                      status === "current"
                        ? "text-primary fill-primary/20"
                        : "text-muted-foreground"
                    )}
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={cn(
                      "text-xs font-bold",
                      status === "current"
                        ? "text-primary"
                        : status === "completed"
                        ? "text-chart-1"
                        : "text-muted-foreground"
                    )}
                  >
                    {step.number}
                  </span>
                  {status === "skipped" && (
                    <span className="text-xs text-muted-foreground italic">(skipped)</span>
                  )}
                </div>
                <p
                  className={cn(
                    "text-sm font-medium leading-tight",
                    status === "current"
                      ? "text-foreground"
                      : status === "completed"
                      ? "text-foreground line-through"
                      : "text-muted-foreground"
                  )}
                >
                  {step.title}
                </p>
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
