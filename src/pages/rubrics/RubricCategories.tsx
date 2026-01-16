import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { InfoBox } from "@/components/InfoBox";
import { PageNavigation } from "@/components/PageNavigation";
import { PageNavigationMenu } from "@/components/PageNavigationMenu";
import { FolderOpen, ListChecks, Palette, Calculator, FileCheck, Target, Scale } from "lucide-react";

const RubricCategories = () => {
  const navigationItems = [
    { id: "overview", label: "Understanding Categories" },
    { id: "six-categories", label: "The Six Categories" },
    { id: "category-mismatch", label: "Avoiding Category Mismatch" },
  ];
  const categories = [
    {
      icon: ListChecks,
      title: "Instruction Following",
      description: "Check whether the solution follows explicit instructions and requirements exactly as specified in the prompt.",
      examples: [
        "Follows the prompt instruction to calculate EV/EBITDA for all peer companies listed in the input file.",
        "Includes all five required sections specified in the prompt: Executive Summary, Market Analysis, Financial Projections, Risk Assessment, and Recommendations.",
        "Uses the specific discount rate (8.5%) provided in the prompt for the DCF calculation."
      ],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Palette,
      title: "Client Readiness & Presentation",
      description: "Focus on presentation quality, formatting, and whether the output is ready to share with clients or stakeholders.",
      examples: [
        "Formats the PowerPoint with consistent fonts, aligned elements, and professional color scheme suitable for client presentation.",
        "Applies currency formatting with $ symbol and thousands separator to all monetary values.",
        "Removes gridlines and applies consistent row heights across all Excel tabs."
      ],
      color: "text-chart-1",
      bgColor: "bg-chart-1/10"
    },
    {
      icon: Calculator,
      title: "Technical Correctness",
      description: "Check if the model reasons correctly about mathematical relations, formulas, and financial calculations.",
      examples: [
        "Calculates WACC using the formula: (E/V × Re) + (D/V × Rd × (1-T)) where E is equity value, D is debt value, V is total value.",
        "Computes Free Cash Flow as EBIT × (1 - Tax Rate) + D&A - CapEx - Change in NWC.",
        "Applies the correct mid-year convention by discounting cash flows at t = 0.5, 1.5, 2.5, etc."
      ],
      color: "text-chart-2",
      bgColor: "bg-chart-2/10"
    },
    {
      icon: FileCheck,
      title: "Transparency & Auditability",
      description: "Check whether the work is traceable, well-documented, and can be audited or reviewed by others.",
      examples: [
        "Includes formula references in Excel cells rather than hardcoded values, allowing for easy verification of calculations.",
        "Documents all key assumptions in a dedicated 'Assumptions' tab with clear labels and source references.",
        "Uses named ranges for key inputs to make formulas more readable and auditable."
      ],
      color: "text-chart-3",
      bgColor: "bg-chart-3/10"
    },
    {
      icon: Target,
      title: "Internal Consistency",
      description: "Check whether the output is internally consistent across all sections, tabs, and referenced values.",
      examples: [
        "Uses the same EBITDA figure across the DCF model, trading comps, and summary page without discrepancies.",
        "Ensures the share price on the cover page matches the implied share price calculated in the valuation section.",
        "Links all Revenue references to a single source cell to prevent inconsistencies."
      ],
      color: "text-chart-4",
      bgColor: "bg-chart-4/10"
    },
    {
      icon: Scale,
      title: "Risk & Compliance",
      description: "Check whether the output adheres to risk management principles and compliance requirements.",
      examples: [
        "Includes appropriate disclaimers and notes potential risks or limitations in the analysis assumptions.",
        "Flags any data points that fall outside of industry-standard ranges for further review.",
        "Includes a sensitivity analysis showing the impact of key assumption changes on valuation."
      ],
      color: "text-chart-5",
      bgColor: "bg-chart-5/10"
    }
  ];

  return (
    <Layout>
      <PageHeader 
        icon={FolderOpen} 
        title="Rubric Categories" 
        description="Rubrics evaluate criteria based on six categories. Each criterion should be assigned to the most appropriate category." 
      />

      <div className="flex gap-0 w-full">
        <PageNavigationMenu items={navigationItems} />
        
        <div className="container mx-auto px-4 py-12 flex-1 min-w-0">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Overview */}
            <ContentCard id="overview" className="border-primary/30">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">Understanding Categories</h2>
            <p className="text-muted-foreground mb-4">
              Every criterion in your rubric should be assigned to one of six categories. This helps organize the rubric 
              and ensures comprehensive coverage across all aspects of the deliverable.
            </p>
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h4 className="font-medium text-foreground mb-2">Why Categories Matter</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Ensures you don't overweight one area (e.g., all formatting, no logic)</li>
                <li>Helps identify gaps in rubric coverage</li>
                <li>Enables analysis of model performance by skill area</li>
                <li>Makes rubrics more organized and easier to review</li>
              </ul>
            </div>
          </ContentCard>

            {/* Categories */}
            <section id="six-categories">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">The Six Categories</h2>
            <div className="space-y-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <ContentCard key={index}>
                    <div className="flex items-start gap-4">
                      <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${category.bgColor} ${category.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-lg font-bold text-foreground mb-2">{category.title}</h3>
                        <p className="text-muted-foreground mb-4">{category.description}</p>
                        
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-foreground">Example Criteria:</p>
                          {category.examples.map((example, i) => (
                            <div key={i} className="p-3 rounded-lg bg-muted/50 border border-border">
                              <p className="text-sm text-muted-foreground italic">"{example}"</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ContentCard>
                );
              })}
            </div>
          </section>

            {/* Category Mismatch Warning */}
            <ContentCard id="category-mismatch">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">Avoiding Category Mismatch</h2>
            <p className="text-muted-foreground mb-4">
              A common error is assigning criteria to the wrong category. This makes it harder to analyze model performance.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                <p className="text-xs font-medium text-destructive mb-2">Wrong Category</p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Technical Correctness:</strong> "Formats the header row with bold text."
                </p>
                <p className="text-xs text-muted-foreground">
                  This is formatting, not technical correctness.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                <p className="text-xs font-medium text-chart-1 mb-2">Correct Category</p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Client Readiness & Presentation:</strong> "Formats the header row with bold text."
                </p>
                <p className="text-xs text-muted-foreground">
                  Correctly categorized as presentation/formatting.
                </p>
              </div>
            </div>
          </ContentCard>

          {/* Column Definitions */}
          <InfoBox type="info" title="Column Definitions">
            <ul className="text-sm space-y-2 mt-2">
              <li><strong>Criterion:</strong> The specific behavior you're checking for</li>
              <li><strong>Category:</strong> One of the six categories listed above</li>
              <li><strong>Weight:</strong> The relative importance (1, 3, 5, or 10)</li>
            </ul>
          </InfoBox>

            <PageNavigation />

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RubricCategories;
