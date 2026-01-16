import { useState, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, CheckCircle, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Step {
  id: string;
  label: string;
  content: ReactNode;
}

interface PageStepWizardProps {
  steps: Step[];
  className?: string;
}

export const PageStepWizard = ({ steps, className }: PageStepWizardProps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [visitedSteps, setVisitedSteps] = useState<Set<number>>(new Set([0]));

  const currentStep = steps[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  const goToNext = () => {
    if (!isLastStep) {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      setVisitedSteps(prev => new Set([...prev, nextIndex]));
    }
  };

  const goToPrevious = () => {
    if (!isFirstStep) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const goToStep = (index: number) => {
    setCurrentStepIndex(index);
    setVisitedSteps(prev => new Set([...prev, index]));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && !isLastStep) {
        goToNext();
      } else if (e.key === "ArrowLeft" && !isFirstStep) {
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStepIndex, isFirstStep, isLastStep]);

  return (
    <div className={cn("flex gap-6", className)}>
      {/* Step Navigation Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-20 space-y-2 p-4 rounded-xl border border-border bg-muted/30">
          <h3 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-wider text-muted-foreground px-2">
            Sections
          </h3>
          <nav className="space-y-1">
            {steps.map((step, index) => {
              const isActive = index === currentStepIndex;
              const isVisited = visitedSteps.has(index);
              const isPast = index < currentStepIndex;
              
              return (
                <button
                  key={step.id}
                  onClick={() => goToStep(index)}
                  className={cn(
                    "w-full flex items-start gap-3 p-2.5 rounded-lg text-left transition-all hover:bg-muted/50 group",
                    isActive && "bg-primary/10 border border-primary/30"
                  )}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {isPast ? (
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
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-muted-foreground mb-0.5 block">
                      {index + 1}
                    </span>
                    <span
                      className={cn(
                        "text-sm leading-tight transition-colors block",
                        isActive
                          ? "text-foreground font-medium"
                          : "text-muted-foreground group-hover:text-foreground/80"
                      )}
                    >
                      {step.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>Section {currentStepIndex + 1} of {steps.length}</span>
            <span>{Math.round(((currentStepIndex + 1) / steps.length) * 100)}% complete</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out rounded-full"
              style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Mobile Step Indicator */}
        <div className="lg:hidden mb-4 flex items-center justify-center gap-1.5">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentStepIndex 
                  ? "bg-primary w-6" 
                  : index < currentStepIndex 
                    ? "bg-chart-1" 
                    : "bg-muted-foreground/30"
              )}
            />
          ))}
        </div>

        {/* Current Section Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">{currentStep.label}</h2>
        </div>

        {/* Content Card */}
        <div className="min-h-[400px] p-6 rounded-xl border border-border bg-card">
          <div className="animate-in fade-in duration-300">
            {currentStep.content}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex items-center justify-between">
          <Button
            variant="outline"
            onClick={goToPrevious}
            disabled={isFirstStep}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="hidden sm:inline">Use</span>
            <kbd className="px-2 py-1 rounded bg-muted border border-border text-xs font-mono">←</kbd>
            <kbd className="px-2 py-1 rounded bg-muted border border-border text-xs font-mono">→</kbd>
            <span className="hidden sm:inline">to navigate</span>
          </div>

          <Button
            onClick={goToNext}
            disabled={isLastStep}
            className="gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

