import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const allPages = [
  { path: "/", label: "Welcome" },
  { path: "/onboarding", label: "Onboarding" },
  { path: "/roles", label: "Roles" },
  { path: "/workflow", label: "Workflow" },
  { path: "/prompts", label: "Prompt" },
  { path: "/output", label: "Output" },
  { path: "/rubrics", label: "Rubric Overview" },
  { path: "/rubrics/stacked", label: "Criteria: Stacked" },
  { path: "/rubrics/self-containment", label: "Criteria: Self-Contained" },
  { path: "/rubrics/ambiguity", label: "Criteria: Ambiguous" },
  { path: "/rubrics/weights", label: "Weights" },
  { path: "/rubrics/categories", label: "Categories" },
  { path: "/rubrics/banker-bible", label: "Banker Bible" },
  { path: "/error-taxonomy", label: "Major / Minor Errors" },
  { path: "/task-walkthrough", label: "Task Walkthrough" },
  { path: "/task-distribution", label: "Task Distribution" },
  { path: "/examples", label: "Examples" },
  { path: "/faq", label: "FAQ" },
  { path: "/pay", label: "Pay" },
];

export const PageNavigation = () => {
  const location = useLocation();
  const currentIndex = allPages.findIndex(page => page.path === location.pathname);
  
  const prevPage = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const nextPage = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  if (currentIndex === -1) return null;

  return (
    <div className="flex items-center justify-between pt-8 mt-8 border-t border-border">
      {prevPage ? (
        <Button variant="outline" asChild>
          <Link to={prevPage.path} className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{prevPage.label}</span>
            <span className="sm:hidden">Previous</span>
          </Link>
        </Button>
      ) : (
        <div />
      )}
      
      {nextPage ? (
        <Button variant="default" asChild>
          <Link to={nextPage.path} className="flex items-center gap-2">
            <span className="hidden sm:inline">{nextPage.label}</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
};
