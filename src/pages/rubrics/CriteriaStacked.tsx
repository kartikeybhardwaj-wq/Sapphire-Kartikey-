import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { InfoBox } from "@/components/InfoBox";
import { PageNavigation } from "@/components/PageNavigation";
import { PageNavigationMenu } from "@/components/PageNavigationMenu";
import { Layers, CheckCircle, XCircle, AlertTriangle, ArrowRight, Check, X } from "lucide-react";

const CriteriaStacked = () => {
  const navigationItems = [
    { id: "definition", label: "What Is a Stacked Criterion?" },
    { id: "how-to-spot", label: "How to Spot Stacked Criteria" },
    { id: "the-fix", label: "The Fix: Make It Atomic" },
    { id: "examples", label: "Examples: Stacked → Atomic" },
    { id: "key-distinction", label: "The Key Distinction" },
    { id: "more-examples", label: "More Examples" },
    { id: "checklist", label: "Practical Checklist" },
    { id: "summary", label: "Summary" },
  ];
  const stackedExamples = [
    {
      title: "Example 1: DCF Core Mechanics",
      bad: "Creates a DCF model with correct terminal value, discount rate, and present value calculations.",
      good: [
        "Calculates terminal value using the perpetuity growth method (or the prompt-specified method).",
        "Calculates discount rate using a Weighted Average Cost of Capital (WACC) approach (or the prompt-specified approach).",
        "Calculates present value of projected cash flows using the specified discount rate."
      ]
    },
    {
      title: "Example 2: Trading Comps Multiples",
      bad: "Calculates EV/EBITDA and EV/Revenue multiples for each peer company.",
      good: [
        "Calculates EV/EBITDA multiple for each peer company.",
        "Calculates EV/Revenue multiple for each peer company."
      ]
    },
    {
      title: "Example 3: Comps Table Build + Formatting",
      bad: "Creates a comps table with correct formatting and calculates all multiples correctly.",
      good: [
        "Creates a comps table that includes all required rows/columns for the peer set and the target (as applicable).",
        "Calculates EV/EBITDA multiple for each company using formulas.",
        "Calculates EV/Revenue multiple for each company using formulas.",
        "Applies banker-standard header formatting to the comps table (e.g., header shading and bold headers)."
      ]
    },
    {
      title: "Example 4: Sensitivity Table (Very Stacked)",
      bad: "The model includes a sensitivity table that varies WACC and terminal growth rate, uses proper data table functionality, and formats outputs as percentages.",
      good: [
        "Creates a sensitivity table varying WACC assumptions across the specified range.",
        "Creates a sensitivity table varying terminal growth rate across the specified range.",
        "Uses Excel data table functionality (or the prompt-specified method) to populate the sensitivity outputs.",
        "Formats IRR outputs as percentages with consistent decimal precision."
      ]
    }
  ];

  const allowedVsNotAllowedExamples = [
    {
      title: "Example A: One concept across multiple places",
      type: "allowed",
      criterion: "All four sensitivity tables are labeled consistently with the correct row/column drivers (premium, exit multiple, revenue growth, leverage, debt %), matching the prompt's specified centers and step sizes.",
      reason: "This is one unified check: correct labeling/driver structure across repeated tables."
    },
    {
      title: "Example B: Correct labeling + correct math",
      type: "not-allowed",
      criterion: "All four sensitivity tables are labeled correctly and the MOIC/IRR outputs are calculated correctly.",
      split: [
        "All four sensitivity tables are labeled correctly with the appropriate row/column drivers and step sizes per the prompt.",
        "Sensitivity table MOIC/IRR outputs are calculated from the model's returns logic and populate correctly across the full 5x5 grid."
      ]
    },
    {
      title: "Example C: Two calculations in one line",
      type: "not-allowed",
      criterion: "Calculates EV as Equity Value + Net Debt and calculates EV/EBITDA for each peer.",
      split: [
        "Calculates Enterprise Value (EV) using the prompt-specified definition.",
        "Calculates EV/EBITDA for each peer using formulas."
      ]
    },
    {
      title: "Example D: Paired outputs that function as one deliverable element",
      type: "conditional",
      criterion: "Each sensitivity table outputs a combined MOIC / IRR in the designated corner cell with the correct number formats.",
      reason: "If the task explicitly defines the \"combined MOIC/IRR corner cell\" as one output object, this is one unified check.",
      notAllowedAdditions: [
        "…and includes a blue header",
        "…and removes gridlines"
      ]
    }
  ];

  return (
    <Layout>
      <PageHeader 
        icon={Layers} 
        title="Stacked Criteria" 
        description="A stacked criterion tests multiple requirements in a single item. Learn to identify and split them for fair evaluation." 
      />

      <div className="flex gap-0 w-full">
        <PageNavigationMenu items={navigationItems} />
        
        <div className="container mx-auto px-4 py-12 flex-1 min-w-0">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Definition */}
            <ContentCard id="definition" className="border-primary/30">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">What Is a Stacked Criterion?</h2>
            <p className="text-muted-foreground mb-4">
              A <strong>stacked criterion</strong> tries to test more than one measurable requirement at the same time. 
              This makes evaluation ambiguous because a single ✓ / ✗ cannot fairly score multiple independent conditions.
            </p>
            <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
              <p className="text-sm font-medium text-foreground mb-2">Why it's a problem:</p>
              <p className="text-sm text-muted-foreground">
                If the model gets one part right and one part wrong, you can't score it fairly. 
                The criterion should be split into separate, atomic checks.
              </p>
            </div>
          </ContentCard>

            {/* How to Spot */}
            <ContentCard id="how-to-spot">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              How to Spot Stacked Criteria
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Stacked criteria often include:
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Words like <strong>"and," "as well as," "along with," "plus"</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Multiple verifiable conditions in a single sentence</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Multiple verbs testing different actions (e.g., "builds and formats and summarizes")</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>More than one calculation or metric in one line</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Combining logic + formatting in one item</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Referencing several distinct outputs or values at once</span>
              </li>
            </ul>

            <div className="p-4 rounded-lg bg-muted/50 border border-border mb-4">
              <p className="text-sm font-medium text-foreground mb-2">Common stacked patterns:</p>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <XCircle className="h-3 w-3 text-destructive flex-shrink-0" />
                  <span>"Calculates X and Y"</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="h-3 w-3 text-destructive flex-shrink-0" />
                  <span>"Builds the table and formats it"</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="h-3 w-3 text-destructive flex-shrink-0" />
                  <span>"Uses the right method and provides conclusions"</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="h-3 w-3 text-destructive flex-shrink-0" />
                  <span>"Creates the file and includes all tabs and adds charts"</span>
                </div>
              </div>
            </div>

            <InfoBox type="warning" title="Rule of Thumb">
              <p className="mb-2">If a criterion contains "and," it is usually stacked and should be split.</p>
              <p className="text-xs opacity-80">
                However, there is an important caveat: Some criteria contain multiple words or checks that are actually part of one inseparable requirement. Those can remain as a single criterion if they represent one unified thesis.
              </p>
            </InfoBox>
          </ContentCard>

            {/* The Fix */}
            <ContentCard id="the-fix">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">The Fix: Make It Atomic</h2>
            <p className="text-muted-foreground mb-4">
              Each criterion should test <strong>one measurable thing</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="h-4 w-4 text-destructive" />
                  <span className="font-semibold text-sm text-destructive">Stacked (Bad)</span>
                </div>
                <p className="text-xs text-muted-foreground">Multiple independent requirements combined into one ✓/✗</p>
              </div>
              <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-chart-1" />
                  <span className="font-semibold text-sm text-chart-1">Atomic (Good)</span>
                </div>
                <p className="text-xs text-muted-foreground">One requirement per criterion so partial correctness can earn partial credit via separate rows</p>
              </div>
            </div>
          </ContentCard>

            {/* Examples Section */}
            <section id="examples">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Examples: Stacked → Atomic</h2>
            <div className="space-y-6">
              {stackedExamples.map((example, index) => (
                <ContentCard key={index}>
                  <h3 className="font-semibold text-foreground mb-4">{example.title}</h3>
                  <div className="space-y-4">
                    <div className="flex gap-2 items-start p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium text-destructive mb-1">Stacked (bad)</p>
                        <p className="text-sm text-muted-foreground">"{example.bad}"</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                    
                    <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="h-5 w-5 text-chart-1" />
                        <p className="text-xs font-medium text-chart-1">Split into atomic (good)</p>
                      </div>
                      <div className="space-y-2">
                        {example.good.map((item, i) => (
                          <div key={i} className="flex gap-2 items-start text-sm p-2 rounded bg-background border border-border">
                            <span className="text-chart-1 font-bold text-xs">{i + 1}.</span>
                            <span className="text-muted-foreground">"{item}"</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ContentCard>
              ))}
            </div>
          </section>

            {/* Key Distinction Section */}
            <section id="key-distinction" className="pt-8 border-t border-border">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">The Key Distinction</h2>
            <p className="text-lg text-muted-foreground mb-6">"Looks Stacked" vs "Actually One Requirement"</p>
            
            <ContentCard className="mb-6">
              <p className="text-muted-foreground">
                Some criteria contain multiple elements but are still acceptable as one criterion if they represent a <strong>single, inseparable check</strong>—meaning the parts are not independently meaningful and would never be scored separately in practice.
              </p>
            </ContentCard>

            {/* When Allowed */}
            <ContentCard className="border-chart-1/30 mb-6">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-chart-1" />
                When "Apparent Stacking" Is Allowed (OK to keep together)
              </h3>
              <p className="text-sm text-muted-foreground mb-4">You may keep a criterion combined if:</p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-chart-1 flex-shrink-0 mt-0.5" />
                  <span>It tests <strong>one unified concept</strong>, applied across multiple places, and</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-chart-1 flex-shrink-0 mt-0.5" />
                  <span>Splitting would create <strong>artificial partial credit</strong> that doesn't make sense, and</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-chart-1 flex-shrink-0 mt-0.5" />
                  <span>The elements are <strong>tightly linked</strong> and evaluated as one "pass/fail" quality bar</span>
                </li>
              </ul>

              {/* Three Allowed Patterns */}
              <div className="p-4 rounded-lg bg-chart-1/10 border border-chart-1/30 mb-6">
                <p className="text-sm font-bold text-foreground mb-3">Allowed stacking is usually limited to three patterns:</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-chart-1 font-bold">1.</span>
                    <span><strong>Consistency/tie-out across repeated objects</strong> (e.g., base case ties across all sensitivity tables)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-chart-1 font-bold">2.</span>
                    <span><strong>Compliance bundles</strong> where missing any sub-part fails the requirement (source + date + disclaimer)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-chart-1 font-bold">3.</span>
                    <span><strong>Single deliverable objects</strong> that are inherently combined (e.g., "MOIC / IRR combined output cell")</span>
                  </li>
                </ul>
              </div>

              {/* Real Examples Section */}
              <div className="space-y-4">
                <p className="text-sm font-medium text-foreground">Real-World Allowed Examples:</p>
                
                {/* Example 1: Base-case consistency */}
                <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                  <p className="text-xs font-medium text-chart-1 mb-1">Pattern 1: Base-case consistency across repeated tables</p>
                  <p className="text-sm text-muted-foreground mb-2 italic">
                    "The center output cell value (MOIC / IRR) is identical across all four sensitivity tables (within ±0.1x for MOIC and ±10 bps for IRR, accounting for rounding). The base case is consistent across all sensitivities."
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Why allowed:</strong> This is one unified check: "Do all tables tie to the same base case?" It's inherently cross-table and doesn't meaningfully benefit from partial credit.
                  </p>
                </div>

                {/* Example 2: PPT transfer fidelity */}
                <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                  <p className="text-xs font-medium text-chart-1 mb-1">Pattern 1: PPT transfer fidelity (Excel → PPT)</p>
                  <p className="text-sm text-muted-foreground mb-2 italic">
                    "The four sensitivity tables pasted as pictures in the PowerPoint slide visually match the formatted Excel tables (same values, same highlighting of center cells, same headers and footnotes), confirming that the final Excel state was transferred."
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Why allowed:</strong> This is one unified concept: the PPT reflects the final Excel output. Splitting into "values match" vs "highlighting match" vs "headers match" usually isn't useful—if the paste is wrong, the slide is wrong.
                  </p>
                </div>

                {/* Example 3: Compliance bundle */}
                <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                  <p className="text-xs font-medium text-chart-1 mb-1">Pattern 2: Compliance/footnote completeness</p>
                  <p className="text-sm text-muted-foreground mb-2 italic">
                    "The PowerPoint footnote includes source, date, and disclaimer, including data source … reference date … and disclaimer …"
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Why allowed:</strong> This is one unified concept: "Does the footnote meet minimum compliance-style components?" In many banking contexts, missing any one component fails the standard, so it's reasonable to keep bundled as a single pass/fail.
                  </p>
                </div>

                {/* Example 4: Combined output cell */}
                <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                  <p className="text-xs font-medium text-chart-1 mb-1">Pattern 3: Combined MOIC / IRR output cell as one deliverable object</p>
                  <p className="text-sm text-muted-foreground mb-2 italic">
                    "Each sensitivity table outputs a combined MOIC / IRR metric in a single cell format (e.g., '2.5x / 18.5%'), not separate MOIC and IRR columns."
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Why allowed:</strong> This is one unified output requirement: the deliverable object is the "combined MOIC/IRR cell." Splitting into separate checks can be unnecessary if the prompt treats it as one combined output.
                  </p>
                </div>

                {/* Example 5: Footnote accuracy */}
                <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                  <p className="text-xs font-medium text-chart-1 mb-1">Pattern 1: Footnote accuracy as a single tie-out check</p>
                  <p className="text-sm text-muted-foreground mb-2 italic">
                    "The footnote assumptions stated below each table … match the actual base-case values used in the LBO model and sensitivity center, with no discrepancies …"
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Why allowed:</strong> This is one unified concept: "Do the footnotes truthfully describe what the model is actually holding constant?" It's naturally evaluated as a tie-out check, not a set of independent micro-checks.
                  </p>
                </div>

                {/* Example 6: Unit consistency */}
                <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                  <p className="text-xs font-medium text-chart-1 mb-1">Pattern 1: Unit consistency across axes and outputs</p>
                  <p className="text-sm text-muted-foreground mb-2 italic">
                    "Units are consistent across all sensitivity table axes and outputs (… % vs x …), with no unit confusion or mislabeling."
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Why allowed:</strong> This is one unified concept: no unit confusion anywhere in the sensitivity deliverable. Splitting into 5 separate unit criteria often creates noise without improving scoring fairness.
                  </p>
                </div>
              </div>
            </ContentCard>

            {/* Not Allowed */}
            <ContentCard className="border-destructive/30 mb-6">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-destructive" />
                Not Allowed: Combining Unrelated Concepts (True Stacking)
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                A criterion becomes stacked when it combines two different dimensions that should be scored independently—most commonly <strong>logic/output correctness + formatting/style</strong>.
              </p>

              <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20 mb-4">
                <p className="text-xs font-medium text-destructive mb-2">Not Allowed Example</p>
                <p className="text-sm text-muted-foreground mb-3 italic">
                  "The center output cell value (MOIC / IRR) is identical across all four sensitivity tables (within ±0.1x for MOIC and ±10 bps for IRR) and includes a blue header."
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  <strong>Why this is stacked:</strong> It tests two unrelated things:
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                  <li>• a returns consistency tie-out (logic / output correctness)</li>
                  <li>• a formatting choice (blue header)</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">
                  Those are independently true/false and should earn independent credit.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                <p className="text-xs font-medium text-chart-1 mb-2">Split into atomic criteria (recommended):</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-2 items-start">
                    <span className="text-chart-1 font-bold text-xs">1.</span>
                    <span className="italic">"The center output cell value (MOIC / IRR) is identical across all four sensitivity tables (within ±0.1x MOIC and ±10 bps IRR, accounting for rounding)."</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-chart-1 font-bold text-xs">2.</span>
                    <span className="italic">"Sensitivity tables include a header row formatted using the bank's standard blue header style (or prompt-specified formatting)."</span>
                  </li>
                </ul>
              </div>
            </ContentCard>
          </section>

            {/* More Examples: Allowed vs Not Allowed */}
            <section id="more-examples">
            <h2 className="font-serif text-xl font-bold text-foreground mb-6">More Examples: Allowed vs Not Allowed</h2>
            <div className="space-y-4">
              {allowedVsNotAllowedExamples.map((example, index) => (
                <ContentCard key={index} className={example.type === 'allowed' ? 'border-chart-1/20' : example.type === 'conditional' ? 'border-amber-500/20' : 'border-destructive/20'}>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    {example.type === 'allowed' && <CheckCircle className="h-4 w-4 text-chart-1" />}
                    {example.type === 'not-allowed' && <XCircle className="h-4 w-4 text-destructive" />}
                    {example.type === 'conditional' && <AlertTriangle className="h-4 w-4 text-amber-500" />}
                    {example.title}
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      example.type === 'allowed' ? 'bg-chart-1/10 text-chart-1' : 
                      example.type === 'conditional' ? 'bg-amber-500/10 text-amber-600' :
                      'bg-destructive/10 text-destructive'
                    }`}>
                      {example.type === 'allowed' ? 'Allowed' : example.type === 'conditional' ? 'Sometimes Allowed' : 'Not Allowed'}
                    </span>
                  </h3>
                  
                  <div className={`p-3 rounded-lg mb-3 ${
                    example.type === 'allowed' ? 'bg-chart-1/5 border border-chart-1/20' : 
                    example.type === 'conditional' ? 'bg-amber-500/5 border border-amber-500/20' :
                    'bg-destructive/5 border border-destructive/20'
                  }`}>
                    <p className="text-sm text-muted-foreground italic">"{example.criterion}"</p>
                  </div>

                  {example.reason && (
                    <p className="text-xs text-muted-foreground mb-3">
                      <strong>Why:</strong> {example.reason}
                    </p>
                  )}

                  {example.split && (
                    <div className="p-3 rounded-lg bg-chart-1/5 border border-chart-1/20">
                      <p className="text-xs font-medium text-chart-1 mb-2">Split:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {example.split.map((item, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span className="text-chart-1 font-bold text-xs">{i + 1}.</span>
                            <span className="italic">"{item}"</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {example.notAllowedAdditions && (
                    <div className="mt-3 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                      <p className="text-xs font-medium text-destructive mb-2">But NOT allowed if you add unrelated style requirements:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {example.notAllowedAdditions.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <X className="h-3 w-3 text-destructive flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-muted-foreground mt-2">Those should be separate formatting criteria.</p>
                    </div>
                  )}
                </ContentCard>
              ))}
            </div>
          </section>

            {/* Practical Checklist */}
            <ContentCard id="checklist" className="border-primary/30">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">Practical Checklist Before You Keep Something "Combined"</h2>
            <p className="text-sm text-muted-foreground mb-4">Before deciding not to split, ask:</p>
            <div className="space-y-3">
              <div className="flex gap-3 items-start p-3 rounded-lg bg-muted/50 border border-border">
                <span className="text-primary font-bold">1.</span>
                <span className="text-sm text-muted-foreground">Is this one unified concept that would be evaluated together in real banking review?</span>
              </div>
              <div className="flex gap-3 items-start p-3 rounded-lg bg-muted/50 border border-border">
                <span className="text-primary font-bold">2.</span>
                <span className="text-sm text-muted-foreground">If the model got only half of this right, would partial credit make sense?</span>
              </div>
              <div className="flex gap-3 items-start p-3 rounded-lg bg-muted/50 border border-border">
                <span className="text-primary font-bold">3.</span>
                <span className="text-sm text-muted-foreground">Are the components inseparable (like a tie-out across repeated tables)?</span>
              </div>
              <div className="flex gap-3 items-start p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                <span className="text-destructive font-bold">4.</span>
                <span className="text-sm text-muted-foreground">Am I accidentally combining logic/output correctness with formatting/style?</span>
              </div>
            </div>
            <InfoBox type="warning" title="Key Rule" className="mt-4">
              If #4 is "yes," you should split it.
            </InfoBox>
          </ContentCard>

            {/* Summary */}
            <ContentCard id="summary" className="bg-primary/5 border-primary/30">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">Summary</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground"><strong>Default:</strong> avoid stacking; write atomic criteria.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="h-5 w-5 text-chart-1 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>Allowed exception:</strong> criteria that "look stacked" but test one unified, inseparable concept (often consistency/tie-out checks across repeated objects).</span>
              </li>
              <li className="flex gap-3 items-start">
                <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong>Not allowed:</strong> combining unrelated dimensions—especially correctness + formatting—in one criterion.</span>
              </li>
            </ul>

            <div className="p-4 rounded-lg bg-background border border-border">
              <p className="text-sm font-bold text-foreground mb-3">Simple Rule:</p>
              <div className="grid gap-2 text-sm">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0 mt-0.5" />
                  <span>Consistency/tie-out across repeated objects</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0 mt-0.5" />
                  <span>Compliance bundles where missing any sub-part fails the requirement</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0 mt-0.5" />
                  <span>Single deliverable objects that are inherently combined</span>
                </div>
                <div className="flex items-start gap-2 text-destructive mt-2 pt-2 border-t border-border">
                  <XCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span><strong>Not allowed:</strong> bundling formatting + math, two different calculations, or two independent outputs into one criterion.</span>
                </div>
              </div>
            </div>
          </ContentCard>

            <PageNavigation />

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CriteriaStacked;
