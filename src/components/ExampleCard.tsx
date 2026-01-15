import { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CriterionCard } from "./CriterionCard";
import { Badge } from "@/components/ui/badge";

interface Criterion {
  item: number;
  weight: number;
  criterion: string;
}

interface ExampleCardProps {
  number: number;
  category: string;
  useCase: string;
  attributes: string[];
  prompt: string;
  criteria: Criterion[];
}

export const ExampleCard = ({
  number,
  category,
  useCase,
  attributes,
  prompt,
  criteria,
}: ExampleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const positiveCriteria = criteria.filter((c) => c.weight > 0);
  const negativeCriteria = criteria.filter((c) => c.weight < 0);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Golden Example {number}</span>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">Category: {category}</h3>
            <p className="text-sm text-muted-foreground mt-1">Use Case: {useCase}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-xs font-medium text-muted-foreground mb-2">Attributes:</p>
          <div className="flex flex-wrap gap-2">
            {attributes.map((attr, i) => (
              <Badge key={i} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors cursor-default">
                {attr}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Prompt */}
      <div className="p-6 border-b border-border">
        <h4 className="font-semibold text-foreground mb-3">Prompt</h4>
        <p className="text-sm text-muted-foreground leading-relaxed bg-accent/50 p-4 rounded-lg italic">
          "{prompt}"
        </p>
      </div>

      {/* Criteria Preview / Full */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-foreground">
            Rubric ({criteria.length} Criteria)
          </h4>
          <div className="flex items-center gap-3 text-sm font-medium">
            <span className="text-chart-1 bg-chart-1/10 px-2 py-0.5 rounded">+{positiveCriteria.length} positive</span>
            <span className="text-destructive bg-destructive/10 px-2 py-0.5 rounded">{negativeCriteria.length} negative</span>
          </div>
        </div>

        {/* Preview */}
        {!isExpanded && (
          <div className="space-y-3">
            {criteria.slice(0, 3).map((c) => (
              <CriterionCard key={c.item} {...c} />
            ))}
          </div>
        )}

        {/* Full List */}
        {isExpanded && (
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
              <h5 className="text-sm font-medium text-chart-1 mb-3">Positive Criteria</h5>
              <div className="space-y-3">
                {positiveCriteria.map((c) => (
                  <CriterionCard key={c.item} {...c} />
                ))}
              </div>
            </div>
            <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
              <h5 className="text-sm font-medium text-destructive mb-3">Negative Criteria</h5>
              <div className="space-y-3">
                {negativeCriteria.map((c) => (
                  <CriterionCard key={c.item} {...c} />
                ))}
              </div>
            </div>
          </div>
        )}

        <Button
          variant="ghost"
          className="w-full mt-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-2" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-2" />
              View All {criteria.length} Criteria
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
