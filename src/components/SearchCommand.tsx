import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

interface SearchItem {
  title: string;
  description: string;
  path: string;
  keywords: string[];
}

const searchItems: SearchItem[] = [
  // Welcome
  { title: "Welcome", description: "Project overview and getting started", path: "/", keywords: ["home", "start", "introduction", "overview"] },
  
  // Onboarding
  { title: "Onboarding", description: "Complete your onboarding checklist", path: "/onboarding", keywords: ["checklist", "setup", "start", "assessment", "discord", "begin"] },
  { title: "Assessment", description: "20 questions, 90% to pass, 6 attempts", path: "/onboarding", keywords: ["quiz", "test", "pass", "questions", "attempts"] },
  
  // Workflow
  { title: "Workflow", description: "5-step task creation process", path: "/workflow", keywords: ["steps", "process", "create", "task", "submit"] },
  { title: "Reviewer Feedback", description: "Check your task feedback via spreadsheet", path: "/workflow", keywords: ["feedback", "review", "spreadsheet", "quality", "rating"] },
  
  // Prompts
  { title: "Prompt Guide", description: "Rules for writing shopping prompts", path: "/prompts", keywords: ["writing", "rules", "natural", "timeless", "requirements"] },
  { title: "Prompt Rules", description: "10 core rules for prompt creation", path: "/prompts", keywords: ["natural", "realistic", "attributes", "timeless", "difficulty"] },
  
  // Rubrics
  { title: "Rubrics", description: "Evaluation rubric guidelines", path: "/rubrics", keywords: ["criteria", "evaluation", "grading", "weights", "positive", "negative"] },
  { title: "Rubric Weights", description: "Understanding weight systems (0.5, 1, 2)", path: "/rubrics", keywords: ["weights", "scoring", "points", "importance"] },
  { title: "Rubric Rules", description: "Atomic criteria, no justification, product attributes only", path: "/rubrics", keywords: ["atomic", "justification", "attributes", "inverse"] },
  
  // Categories
  { title: "Categories", description: "Shopping categories and use cases", path: "/categories", keywords: ["shopping", "products", "types", "use cases"] },
  { title: "Use Cases", description: "Types of shopping scenarios", path: "/categories", keywords: ["comparing", "problem-solution", "travel", "lifestyle", "gift"] },
  
  // Examples
  { title: "Examples", description: "Golden examples and error examples", path: "/examples", keywords: ["golden", "error", "sample", "correct", "mistakes"] },
  { title: "Golden Examples", description: "Correct task implementation examples", path: "/examples", keywords: ["correct", "proper", "sample", "reference"] },
  { title: "Error Examples", description: "Common mistakes to avoid", path: "/examples", keywords: ["mistakes", "wrong", "avoid", "incorrect"] },
  
  // Reviewer
  { title: "Reviewer Guide", description: "Quality ratings and review process", path: "/reviewer", keywords: ["rating", "quality", "1-5", "review", "feedback"] },
  { title: "Quality Ratings", description: "Understanding 1-5 quality scale", path: "/reviewer", keywords: ["1", "2", "3", "4", "5", "scale", "score"] },
  
  // Pay
  { title: "Pay", description: "Payment information and disputes", path: "/pay", keywords: ["payment", "money", "wednesday", "dispute", "compensation"] },
  { title: "Time Cap", description: "1 hour max per task", path: "/pay", keywords: ["time", "hour", "limit", "cap", "duration"] },
  { title: "Pay Disputes", description: "Submit a pay dispute form", path: "/pay", keywords: ["dispute", "form", "issue", "problem", "compensation"] },
];

export const SearchCommand = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground/70 hover:bg-primary-foreground/20 hover:text-primary-foreground"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden sm:inline text-xs">Search...</span>
        <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-primary-foreground/20 bg-primary-foreground/10 px-1.5 font-mono text-[10px] font-medium text-primary-foreground/50">
          ⌘K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search Project Sapphire..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages & Topics">
            {searchItems.map((item) => (
              <CommandItem
                key={item.title + item.path}
                value={`${item.title} ${item.description} ${item.keywords.join(" ")}`}
                onSelect={() => handleSelect(item.path)}
              >
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
