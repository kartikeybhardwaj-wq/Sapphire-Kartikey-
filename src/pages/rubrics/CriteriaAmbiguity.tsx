import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { InfoBox } from "@/components/InfoBox";
import { PageNavigation } from "@/components/PageNavigation";
import { HelpCircle, CheckCircle, XCircle, Target, Users, ArrowRight } from "lucide-react";

const CriteriaAmbiguity = () => {
  const vagueWords = [
    { word: "good", replacement: "specify measurable attributes (size, axes, outputs, labels)" },
    { word: "appropriate", replacement: "define exact values or ranges" },
    { word: "proper", replacement: "state the standard being applied" },
    { word: "correct", replacement: "describe the expected method/formula/output" },
    { word: "reasonable", replacement: "provide bounds or tolerance" },
    { word: "professional / clean", replacement: "list specific formatting rules" },
    { word: "well-structured", replacement: "specify required sections/tabs/slides" },
  ];

  const examples = [
    {
      title: "Example 1: \"Good sensitivity table\" (too vague)",
      bad: "Creates a good sensitivity table.",
      good: "Excel file contains a 5×5 sensitivity table (excluding headers/labels) with Buyout Premium % on one axis covering 15%, 17.5%, 20%, 22.5%, 25%, and Exit Multiple (x) on the other axis covering 26x, 28x, 30x, 32x, 34x.",
      why: "No interpretation needed—dimensions and axis values are explicit."
    },
    {
      title: "Example 2: \"Appropriate assumptions\" (subjective)",
      bad: "Uses appropriate assumptions for the LBO model.",
      good: "Exit multiple assumption is set to 30.0x EBITDA in the model's exit assumptions and is the value used to calculate Exit EV = Exit Multiple × Year 5 EBITDA in the base case.",
      why: "It states the exact assumption and where/how it must flow."
    },
    {
      title: "Example 3: \"Professional presentation\" (interpretation-heavy)",
      bad: "Creates a professional-looking presentation.",
      good: "PowerPoint file includes one slide with the four sensitivity tables pasted as images (not editable Excel objects) arranged in a 2×2 grid, with a clear headline and a footnote containing source, date, and disclaimer.",
      why: "Defines exactly what \"professional\" means for this deliverable."
    },
    {
      title: "Example 4: \"Built correctly\" (doesn't say what to check)",
      bad: "The model is built correctly.",
      good: "Sources & Uses balances (Sources = Uses), and the Debt line is calculated as: Debt = (Total Leverage % × Total Uses) × (Debt % of Total Leverage), with both percentage inputs linked to labeled assumption cells.",
      why: "Checks one core correctness requirement with explicit formula behavior."
    },
    {
      title: "Example 5: \"Formats the table well\" (vague)",
      bad: "Formats the sensitivity tables well.",
      good: "Each sensitivity table has clear row/column headers labeling the sensitized variables (e.g., 'Buyout Premium %', 'Exit Multiple (x)') and the center/base-case output cell is visually highlighted to draw attention.",
      why: "Specifies concrete formatting elements that are easy to verify."
    },
    {
      title: "Example 6: \"Uses the correct tool\" (unclear what that means)",
      bad: "Uses the correct Excel method to create sensitivities.",
      good: "Each sensitivity table is populated using Excel's two-variable Data Table functionality (What‑If Analysis → Data Table), rather than manual copy/paste or static hardcoded values.",
      why: "Names the exact tool behavior being checked."
    },
    {
      title: "Example 7: \"Outputs are correct\" (not actionable)",
      bad: "The sensitivity outputs are correct.",
      good: "The center output cell (MOIC / IRR) in each sensitivity table ties to the base model's 5‑year returns within tolerance (±0.1x MOIC and ±10–25 bps IRR), and the center values are consistent across all four tables.",
      why: "Defines what \"correct\" means and includes a tolerance for rounding."
    },
    {
      title: "Example 8: \"Has required sections\" (undefined)",
      bad: "Includes all required sections.",
      good: "Excel print settings include the Sensitivity Analysis section in the print area and it prints as a new page separate from the base LBO model.",
      why: "Names the exact requirement and expected print behavior."
    }
  ];

  return (
    <Layout>
      <PageHeader 
        icon={HelpCircle} 
        title="Criteria: Ambiguous" 
        description="Criteria must use explicit, objective details. If two reviewers could disagree, it's not measurable." 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Definition */}
          <ContentCard className="border-primary/30">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">What Makes a Criterion Ambiguous?</h2>
            <p className="text-muted-foreground mb-4">
              An <strong>ambiguous criterion</strong> uses subjective or vague language that can't be evaluated objectively. 
              It leaves room for interpretation, meaning two reviewers could score the same output differently.
            </p>
            <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
              <p className="text-sm font-medium text-foreground mb-1">Problem:</p>
              <p className="text-sm text-muted-foreground">
                Inconsistent scoring creates noisy evaluation and poor training signals.
              </p>
            </div>
          </ContentCard>

          {/* The Two-Reviewer Test */}
          <ContentCard className="border-amber-500/30 bg-amber-500/5">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-amber-500" />
              The Two-Reviewer Test
            </h2>
            <p className="text-muted-foreground mb-4">
              Before submitting any criterion, ask:
            </p>
            <div className="p-4 rounded-lg bg-background border border-border">
              <p className="text-center text-foreground font-medium text-lg">
                "If two different reviewers graded this criterion on the same deliverable, would they <span className="text-primary">definitely</span> agree?"
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center font-medium">
              If there's any chance of disagreement, rewrite it to be more specific.
            </p>
          </ContentCard>

          {/* Words to Avoid */}
          <ContentCard>
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">Words That Signal Ambiguity (Rewrite These)</h2>
            <p className="text-sm text-muted-foreground mb-4">
              These words usually require tightening:
            </p>
            <div className="space-y-2">
              {vagueWords.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border">
                  <div className="flex items-center gap-2 min-w-[160px]">
                    <XCircle className="h-4 w-4 text-destructive flex-shrink-0" />
                    <span className="font-medium text-destructive text-sm">"{item.word}"</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item.replacement}</span>
                </div>
              ))}
            </div>
          </ContentCard>

          {/* How to Make Measurable */}
          <ContentCard>
            <h2 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              How to Make Criteria Measurable
            </h2>
            <p className="text-muted-foreground mb-4">
              Replace vague language with:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                <h4 className="font-medium text-foreground mb-2">Specific Numbers</h4>
                <p className="text-sm text-muted-foreground">
                  Counts, dimensions, step sizes, tolerances
                </p>
              </div>
              <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                <h4 className="font-medium text-foreground mb-2">Explicit Formulas</h4>
                <p className="text-sm text-muted-foreground">
                  e.g., (Target ÷ Median) − 1
                </p>
              </div>
              <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                <h4 className="font-medium text-foreground mb-2">Defined Deliverable Behaviors</h4>
                <p className="text-sm text-muted-foreground">
                  Excel data tables, pasted as pictures
                </p>
              </div>
              <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                <h4 className="font-medium text-foreground mb-2">Binary Conditions</h4>
                <p className="text-sm text-muted-foreground">
                  Present/absent; ties/doesn't tie
                </p>
              </div>
            </div>
          </ContentCard>

          {/* Examples Section */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Improved Examples</h2>
            <p className="text-muted-foreground mb-6">
              Below are examples rewritten in the same spirit as your "gold" rubric: specific, banker-grade, and verifiable.
            </p>
            <div className="space-y-6">
              {examples.map((example, index) => (
                <ContentCard key={index}>
                  <h3 className="font-semibold text-foreground mb-4">{example.title}</h3>
                  <div className="space-y-4">
                    <div className="flex gap-2 items-start p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium text-destructive mb-1">Ambiguous (not measurable)</p>
                        <p className="text-sm text-muted-foreground">"{example.bad}"</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 items-start p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                      <CheckCircle className="h-5 w-5 text-chart-1 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium text-chart-1 mb-1">Specific (measurable)</p>
                        <p className="text-sm text-muted-foreground">"{example.good}"</p>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-muted/50 border border-border">
                      <p className="text-xs text-muted-foreground">
                        <strong>Why this is better:</strong> {example.why}
                      </p>
                    </div>
                  </div>
                </ContentCard>
              ))}
            </div>
          </section>

          {/* Key Takeaway */}
          <ContentCard className="bg-primary/5 border-primary/30">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">Key Takeaway</h2>
            <p className="text-muted-foreground">
              Avoid <strong>"good/appropriate/professional/correct"</strong> unless you immediately define it with measurable requirements. 
              In Sapphire, criteria should read like banker QA checks: explicit dimensions, inputs, formulas, and deliverable behaviors 
              that two reviewers would score the same way.
            </p>
          </ContentCard>

          <PageNavigation />

        </div>
      </div>
    </Layout>
  );
};

export default CriteriaAmbiguity;
