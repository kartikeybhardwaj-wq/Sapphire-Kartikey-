import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { InfoBox } from "@/components/InfoBox";
import { PageNavigation } from "@/components/PageNavigation";
import { BoxSelect, CheckCircle, XCircle, FileText, Eye, AlertTriangle, Zap, Users, Target } from "lucide-react";

const CriteriaSelfContainment = () => {
  const examples = [
    {
      title: "Example 1: Formatting Preferences",
      bad: "Follows the MD's formatting preferences.",
      good: "Applies blue header shading to the table header row and bolds column headers.",
      note: "Avoid overly specific RGB/hex unless the project truly requires exact colors. The key is clarity and gradeability."
    },
    {
      title: "Example 2: Generic Prompt Reference",
      bad: "Matches the requirement stated in the prompt.",
      good: "Calculates EV/EBITDA as Enterprise Value ÷ LTM EBITDA for each peer company."
    },
    {
      title: "Example 3: Input File Dependency",
      bad: "Uses the correct assumptions from the input file.",
      good: "Excel model includes an Assumptions section that lists the discount rate used for the DCF valuation.",
      note: "The deliverable must contain the assumptions so they can be graded from the output itself. Value ranges (e.g., 8%–12%) would be a separate criterion."
    },
    {
      title: "Example 4: \"Above\" Reference",
      bad: "Follows the format specified above.",
      good: "Formats currency values with a $ symbol and consistent scaling (e.g., $M) and uses consistent decimal precision across the output table."
    },
    {
      title: "Example 5: Vague Coverage",
      bad: "Includes all required sections.",
      good: "Word/PDF deliverable includes an Executive Summary section at the beginning of the document."
    },
    {
      title: "Example 6: Multi-Deliverable Specificity",
      bad: "Includes the tables in the output file.",
      good: "The ELF LBO Excel model contains the sensitivity tables, and the PowerPoint slide contains those tables pasted as images (not editable Excel objects)."
    }
  ];

  const commonViolations = [
    '"the requirement above"',
    '"as specified in the prompt"',
    '"the input file"',
    '"per the MD\'s request"',
    '"following the template"',
    '"the correct format"',
    '"all required sections"',
    '"as mentioned earlier"'
  ];

  return (
    <Layout>
      <PageHeader 
        icon={BoxSelect} 
        title="Self-Containment" 
        description="Each criterion must stand alone. A reader must be able to evaluate it without seeing the prompt, model answer, or other criteria." 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Definition */}
          <ContentCard className="border-primary/30">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">What Is Self-Containment?</h2>
            <p className="text-muted-foreground mb-4">
              A <strong>self-contained criterion</strong> includes all information needed to evaluate it. 
              A reviewer (or grader) should not need to reference the prompt, input files, or other criteria to understand what is being tested.
            </p>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm font-medium text-foreground mb-2">Test:</p>
              <p className="text-sm text-muted-foreground">
                Can someone who has never seen the prompt read this criterion and know exactly what to check?
              </p>
              <p className="text-sm font-medium text-primary mt-2">
                If not, it's not self-contained.
              </p>
            </div>
          </ContentCard>

          {/* Why It Matters */}
          <ContentCard>
            <h2 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              Why Self-Containment Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-chart-1" />
                  <h4 className="font-medium text-foreground">Consistent Evaluation</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Self-contained criteria reduce interpretation variance. Different reviewers grade the same work the same way.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-4 w-4 text-amber-500" />
                  <h4 className="font-medium text-foreground">Faster Review</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Reviewers don't need to flip between the rubric, prompt, and files to understand what's being tested.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-primary" />
                  <h4 className="font-medium text-foreground">Better Training Signal</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Clear, self-contained criteria produce cleaner, more reliable scoring signals. Vague references introduce noise.
                </p>
              </div>
            </div>
          </ContentCard>

          {/* Additional Requirements */}
          <section className="rounded-xl border-2 border-amber-500/50 bg-amber-500/5 p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-600">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-2">Additional Sapphire Requirements</h2>
                <p className="text-muted-foreground text-sm">
                  These requirements are especially important for banking deliverables.
                </p>
              </div>
            </div>

            {/* Requirement 1: Inputs must be in deliverable */}
            <ContentCard>
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold">1</span>
                If a criterion depends on "inputs," those inputs must be present in the deliverable
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Criteria should be gradeable from the output deliverable itself. If the task relies on input files or external data, 
                the model should incorporate that information into the deliverable in an auditable way.
              </p>
              
              <div className="p-4 rounded-lg bg-chart-1/5 border border-chart-1/20 mb-4">
                <p className="text-sm font-medium text-foreground mb-2">Best practice:</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Require a dedicated <strong>Sources / Inputs / Assumptions</strong> area in the deliverable, such as:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>a "Sources" tab</li>
                  <li>an "Inputs" tab</li>
                  <li>a clearly labeled "Assumptions" section</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-3">
                  This allows criteria to reference values that are visible inside the file, not hidden in external inputs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-4 w-4 text-destructive" />
                    <span className="text-xs font-medium text-destructive">Not self-contained (requires external file access)</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"Uses the correct EBITDA from the input file."</p>
                </div>
                <div className="p-3 rounded-lg bg-chart-1/5 border border-chart-1/20">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-chart-1" />
                    <span className="text-xs font-medium text-chart-1">Self-contained (gradeable from the deliverable)</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"Excel model includes a clearly labeled 'Sources / Inputs' tab that lists the LTM EBITDA used in the model (with units) and the EBITDA value ties to the EBITDA used in the operating build."</p>
                </div>
              </div>
            </ContentCard>

            {/* Requirement 2: Name deliverables explicitly */}
            <ContentCard>
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold">2</span>
                When referencing deliverables, name the deliverable explicitly
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Criteria must be explicit about which output file they apply to (Excel vs PowerPoint vs Word/PDF), 
                especially when a task has multiple deliverables.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-4 w-4 text-destructive" />
                    <span className="text-xs font-medium text-destructive">Bad (ambiguous)</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"The output file includes the sensitivity tables."</p>
                </div>
                <div className="p-3 rounded-lg bg-chart-1/5 border border-chart-1/20">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-chart-1" />
                    <span className="text-xs font-medium text-chart-1">Good (specific)</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"The ELF LBO Excel model includes four 5×5 sensitivity tables in the 'Sensitivity Analysis' section."</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-muted/50 border border-border">
                <p className="text-xs text-muted-foreground">
                  If the task has multiple companies or files, specify the target deliverable clearly 
                  (e.g., "NKE CIM Word doc", "ELF DCF Excel model", "Due Diligence Tracker Excel file").
                </p>
              </div>
            </ContentCard>
          </section>

          {/* Common Violations */}
          <ContentCard>
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">Common Violations (Non-Self-Contained Language)</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Avoid criteria that rely on missing context, such as:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              {commonViolations.map((phrase, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-destructive/5 border border-destructive/20">
                  <XCircle className="h-4 w-4 text-destructive flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{phrase}</span>
                </div>
              ))}
            </div>
            <InfoBox type="warning" title="If You're Tempted to Write One of These...">
              Rewrite the criterion to include the missing details directly.
            </InfoBox>
          </ContentCard>

          {/* Examples Section */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Examples</h2>
            <div className="space-y-6">
              {examples.map((example, index) => (
                <ContentCard key={index}>
                  <h3 className="font-semibold text-foreground mb-4">{example.title}</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex gap-2 items-start p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-medium text-destructive mb-1">Not Self-Contained</p>
                          <p className="text-sm text-muted-foreground">"{example.bad}"</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 items-start p-4 rounded-lg bg-chart-1/5 border border-chart-1/20">
                        <CheckCircle className="h-5 w-5 text-chart-1 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-medium text-chart-1 mb-1">Self-Contained</p>
                          <p className="text-sm text-muted-foreground">"{example.good}"</p>
                        </div>
                      </div>
                    </div>
                    
                    {example.note && (
                      <div className="p-3 rounded-lg bg-muted/50 border border-border">
                        <div className="flex items-start gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-muted-foreground">{example.note}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </ContentCard>
              ))}
            </div>
          </section>

          {/* Quick Rewrite Rule */}
          <ContentCard className="bg-primary/5 border-primary/30">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">Quick Rewrite Rule</h2>
            <p className="text-muted-foreground mb-4">
              If your criterion references something outside itself (prompt, input file, template, "above"), rewrite it so it states:
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
                <CheckCircle className="h-5 w-5 text-chart-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground"><strong>Exactly what output to check</strong></span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
                <CheckCircle className="h-5 w-5 text-chart-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground"><strong>Exactly what content/format/math is required</strong></span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
                <CheckCircle className="h-5 w-5 text-chart-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground"><strong>Where it should appear</strong> (tab/section/slide) when relevant</span>
              </div>
            </div>
            <InfoBox type="info" title="Remember">
              Self-contained criteria are longer—but they're clearer, fairer, and easier to score.
            </InfoBox>
          </ContentCard>

          <PageNavigation />

        </div>
      </div>
    </Layout>
  );
};

export default CriteriaSelfContainment;
