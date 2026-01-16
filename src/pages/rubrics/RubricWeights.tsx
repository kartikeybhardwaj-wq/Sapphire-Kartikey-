import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { InfoBox } from "@/components/InfoBox";
import { WeightBadge } from "@/components/WeightBadge";
import { PageNavigation } from "@/components/PageNavigation";
import { PageNavigationMenu } from "@/components/PageNavigationMenu";
import { Scale, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";

const RubricWeights = () => {
  const navigationItems = [
    { id: "weight-system", label: "Understanding the Weight System" },
    { id: "weighting-principles", label: "Weighting Principles" },
    { id: "common-mistakes", label: "Common Weighting Mistakes" },
    { id: "key-takeaway", label: "Key Takeaway" },
  ];
  const weightTable = [
    { 
      weight: 10, 
      meaning: "Critical requirement. Cannot be missed.", 
      example: "Outputs a complete Excel file with working formulas",
      useCases: [
        "Core deliverable exists and is functional",
        "Fundamental financial logic (e.g., EV to Equity bridge)",
        "Critical methodology requirements"
      ]
    },
    { 
      weight: 5, 
      meaning: "Important requirement. Core financial logic.", 
      example: "Calculates EV/EBITDA using Enterprise Value / LTM EBITDA",
      useCases: [
        "Key calculations and formulas",
        "Important analytical components",
        "Required sections or outputs"
      ]
    },
    { 
      weight: 3, 
      meaning: "Significant requirement. Technical execution.", 
      example: "Uses data table function for sensitivity analysis",
      useCases: [
        "Technical execution details",
        "Secondary calculations",
        "Supporting analysis components"
      ]
    },
    { 
      weight: 1, 
      meaning: "Nice to have. Formatting or style.", 
      example: "Removes gridlines in Excel",
      useCases: [
        "Formatting preferences",
        "Style choices",
        "Non-essential enhancements"
      ]
    },
  ];


  return (
    <Layout>
      <PageHeader 
        icon={Scale} 
        title="Rubric Weights" 
        description="Each criterion gets a weight that reflects its importance. Learn how to assign weights of 1, 3, 5, or 10 based on impact." 
      />

      <div className="flex gap-0 w-full">
        <PageNavigationMenu items={navigationItems} />
        
        <div className="container mx-auto px-4 py-12 flex-1 min-w-0">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Weight System */}
            <ContentCard id="weight-system" className="border-primary/30">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">Understanding the Weight System</h2>
            <p className="text-muted-foreground mb-6">
              Weights reflect how critical each criterion is to the overall quality of the deliverable. 
              Use weights of <strong>1, 3, 5, or 10</strong> to indicate relative importance.
            </p>
            
            <div className="space-y-6">
              {weightTable.map((row, i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="flex items-start gap-4">
                    <WeightBadge weight={row.weight} />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{row.meaning}</h3>
                      <p className="text-sm text-muted-foreground mb-3 italic">"{row.example}"</p>
                      <div className="space-y-1">
                        {row.useCases.map((useCase, j) => (
                          <div key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-chart-1" />
                            <span>{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContentCard>

            {/* Weighting Principles */}
            <ContentCard id="weighting-principles">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Weighting Principles
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                <h4 className="font-medium text-foreground mb-2">Core Logic {">"} Presentation</h4>
                <p className="text-sm text-muted-foreground">
                  Critical financial logic, definitions, and core outputs should carry the most weight. 
                  Formatting should matter, but never outweigh correctness.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                <h4 className="font-medium text-foreground mb-2">Methodology {">"} Output</h4>
                <p className="text-sm text-muted-foreground">
                  How the model arrives at an answer matters as much as the answer itself. 
                  Weight process and reasoning criteria appropriately.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                <h4 className="font-medium text-foreground mb-2">Client Impact Matters</h4>
                <p className="text-sm text-muted-foreground">
                  Ask yourself: "If this was wrong, would it embarrass us in front of a client?" 
                  Weight accordingly.
                </p>
              </div>
            </div>
          </ContentCard>


            {/* Common Mistakes */}
            <ContentCard id="common-mistakes">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Common Weighting Mistakes
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                <h4 className="font-medium text-destructive mb-1">Over-weighting formatting</h4>
                <p className="text-sm text-muted-foreground">
                  Giving Weight 5 or 10 to font choices, colors, or gridlines when the core calculations matter more.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                <h4 className="font-medium text-destructive mb-1">Under-weighting methodology</h4>
                <p className="text-sm text-muted-foreground">
                  Giving Weight 1 to formula correctness or calculation logic that would break the entire model if wrong.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                <h4 className="font-medium text-destructive mb-1">Flat weighting</h4>
                <p className="text-sm text-muted-foreground">
                  Using the same weight (e.g., all 5s) for every criterion. This defeats the purpose of weighted scoring.
                </p>
              </div>
            </div>
          </ContentCard>

            {/* Key Takeaway */}
            <InfoBox id="key-takeaway" type="info" title="Key Takeaway">
            Use weights to reflect banker priorities. Critical financial logic should carry Weight 10, 
            while nice-to-have formatting can be Weight 1. The total weighted score should meaningfully 
            differentiate between good and poor model outputs.
          </InfoBox>

            <PageNavigation />

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RubricWeights;
