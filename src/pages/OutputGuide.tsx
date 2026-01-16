import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { InfoBox } from "@/components/InfoBox";
import { StepCard } from "@/components/StepCard";
import { PageNavigation } from "@/components/PageNavigation";
import { ChapterSection } from "@/components/ChapterSection";
import { PageNavigationMenu } from "@/components/PageNavigationMenu";
import { FileSpreadsheet, FileText, Presentation, ArrowRight, Lightbulb, AlertTriangle, ListChecks, XCircle, MessageSquare, FileOutput } from "lucide-react";
import { Link } from "react-router-dom";

const OutputGuide = () => {
  const navigationItems = [
    { id: "step-1", label: "Ideal Deliverable" },
    { id: "step-2", label: "Step-by-Step Instructions" },
    { id: "error-taxonomy", label: "Error Taxonomy" },
  ];

  return (
    <Layout>
      <PageHeader 
        icon={FileOutput} 
        title="Output Guide" 
        description="Learn how to create ideal deliverables, step-by-step instructions, and understand the error taxonomy." 
      />

      <div className="flex gap-0 w-full">
        <PageNavigationMenu items={navigationItems} />
        
        <div className="container mx-auto px-4 py-8 pt-4 flex-1 min-w-0">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Chapter 1: Ideal Deliverable */}
          <ChapterSection id="step-1" chapter={1} title="Ideal Deliverable">
            <div className="space-y-0">
              <StepCard step={1} title="Write the Ideal Deliverable">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  In the output subfolder, upload your final deliverable in its native format (Excel, PowerPoint, or Word, as applicable).
                </p>
                
                <p className="text-muted-foreground">
                  Your submission must be a complete working file, not just a final number. Upload the full document you would produce in a real work setting, including an Excel file with formulas, a PowerPoint deck with charts and links, or a Word document with a clearly structured analysis.
                </p>

                <div className="grid gap-3">
                  <div className="p-3 rounded-lg bg-muted/50 border border-border flex items-center gap-3">
                    <FileSpreadsheet className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Excel file with formulas and calculations</span>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border border-border flex items-center gap-3">
                    <Presentation className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">PowerPoint deck with charts and links</span>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border border-border flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Word document with structured analysis</span>
                  </div>
                </div>

                <InfoBox type="warning">
                  <strong>Important:</strong> Do NOT convert files into Google Sheets or Google Slides.
                </InfoBox>

                {/* Best Practices */}
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="font-medium text-foreground mb-3">Best Practices</h4>
                  <div className="grid gap-3 text-sm">
                    <div className="flex gap-3">
                      <span className="font-medium text-foreground min-w-[120px]">Completeness</span>
                      <span className="text-muted-foreground">Include all elements a VP or MD would expect to see</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-medium text-foreground min-w-[120px]">Accuracy</span>
                      <span className="text-muted-foreground">Ensure all calculations and data are correct</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-medium text-foreground min-w-[120px]">Formatting</span>
                      <span className="text-muted-foreground">Follow your firm's standard formatting guidelines</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-medium text-foreground min-w-[120px]">Clarity</span>
                      <span className="text-muted-foreground">Make it easy for evaluators to understand what's included</span>
                    </div>
                  </div>
                </div>

                {/* Why It Matters */}
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex gap-3">
                    <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Why the Ideal Deliverable Matters</h4>
                      <p className="text-sm text-muted-foreground">
                        Your ideal deliverable sets the gold standard for what the AI should produce. It directly informs the rubric criteria and helps evaluators understand what success looks like.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </StepCard>
            </div>
          </ChapterSection>

          {/* Chapter 2: Step-by-Step Instructions */}
          <ChapterSection id="step-2" chapter={2} title="Step-by-Step Instructions">
            <div className="space-y-0">
              <StepCard step={2} title="Write the Step-by-Step Instruction">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Lay out a clear step-by-step explanation of how to solve your task. Steps should be granular enough that a junior banker could follow them exactly.
                </p>

                {/* Example */}
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="font-medium text-foreground mb-4">Example: "LBO Model Build" prompt</h4>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground mb-2">Excel Setup & Data Gathering</p>
                      <ol className="list-decimal list-inside space-y-1.5 ml-2">
                        <li>Open a new Excel file</li>
                        <li>Create a "Sources" section with tabs for: fully diluted equity cap, debt cap, EV bridge, key statistics, historical share price</li>
                        <li>Create a "Model" tab with sections: entry/exit assumptions, financing assumptions, current EV bridge, sources & uses, financial projections, returns summary</li>
                        <li>Pull current capital structure, shares outstanding, and LTM financials from Sources tabs</li>
                      </ol>
                    </div>
                    
                    <div>
                      <p className="font-medium text-foreground mb-2">Model Formatting</p>
                      <ol className="list-decimal list-inside space-y-1.5 ml-2" start={5}>
                        <li>Add header noting figures in $ millions</li>
                        <li>Apply font colors: blue for inputs, green for linked values, black for formulas</li>
                        <li>Add shaded headers for each section</li>
                      </ol>
                    </div>
                    
                    <div>
                      <p className="font-medium text-foreground mb-2">LBO Calculations</p>
                      <ol className="list-decimal list-inside space-y-1.5 ml-2" start={8}>
                        <li>Calculate implied EV from premium assumption (equity + debt - cash + NCI + preferred)</li>
                        <li>Set leverage, interest rate, debt paydown, and exit multiple assumptions</li>
                        <li>Build FCF including capex, NWC, cash taxes, debt paydown, interest expense</li>
                        <li>Calculate return profile and cash-on-cash multiple</li>
                      </ol>
                    </div>
                    
                    <div>
                      <p className="font-medium text-foreground mb-2">PowerPoint Output</p>
                      <ol className="list-decimal list-inside space-y-1.5 ml-2" start={12}>
                        <li>Open new PPT (11" × 7.5", landscape)</li>
                        <li>Create "Output" tab in Excel for clean outputs (projections, sensitivities, S&U)</li>
                        <li>Paste each output as Enhanced Metafile in PPT</li>
                        <li>Add investment highlights from investor presentation and 10-K MD&A</li>
                        <li>Review for errors and convert to PDF</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Guidelines */}
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-medium text-foreground mb-3">Guidelines for Writing Steps</h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">1</span>
                      <div>
                        <p className="font-medium text-foreground">Be Granular and Specific</p>
                        <p className="text-sm text-muted-foreground">Break down complex tasks into discrete actions — specify exact tabs, sections, and formatting requirements</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">2</span>
                      <div>
                        <p className="font-medium text-foreground">Follow Logical Order</p>
                        <p className="text-sm text-muted-foreground">Steps should flow naturally — data gathering before calculations, model before outputs</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">3</span>
                      <div>
                        <p className="font-medium text-foreground">Specify Tool Usage</p>
                        <p className="text-sm text-muted-foreground">State when to use Excel, PPT, web search, or reference external sources</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">4</span>
                      <div>
                        <p className="font-medium text-foreground">Include Formatting Best Practices</p>
                        <p className="text-sm text-muted-foreground">Document color conventions, layout requirements, and output formatting standards</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">5</span>
                      <div>
                        <p className="font-medium text-foreground">Match Your Ideal Output</p>
                        <p className="text-sm text-muted-foreground">Every step should directly contribute to producing your ideal deliverable</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why It Matters */}
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex gap-3">
                    <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Why Step-by-Step Instructions Matter</h4>
                      <p className="text-sm text-muted-foreground">
                        These instructions serve as the blueprint for both the AI model and the rubric generation process. Clear steps make it easier to identify what should be evaluated at each stage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </StepCard>
            </div>
          </ChapterSection>

          {/* Chapter 3: Error Taxonomy */}
          <ChapterSection id="error-taxonomy" chapter={3} title="Error Taxonomy">
            <ContentCard className="border-2 border-primary/30">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Major vs. Minor Error Taxonomy
            </h2>
            
            {/* General Principle */}
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-6">
              <h4 className="font-semibold text-foreground mb-3">General Principle</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/30">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-4 w-4 text-destructive" />
                    <span className="font-semibold text-destructive text-sm">Major Errors</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Violate the <strong>how (methodology)</strong> — they break the model and would make you send nothing rather than send the output to a client
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <span className="font-semibold text-yellow-600 text-sm">Minor Errors</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Affect the <strong>how well (execution quality)</strong> — they need fixing but wouldn't cause client embarrassment
                  </p>
                </div>
              </div>
            </div>

            {/* Step-by-Step Errors */}
            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <ListChecks className="h-4 w-4 text-primary" />
                Step-by-Step Errors
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {/* Major Step-by-Step Errors */}
                <div className="rounded-xl border-2 border-destructive bg-destructive/5 p-4">
                  <h4 className="font-bold text-destructive text-sm mb-3">Major Step-by-Step Errors (10-5 points)</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">Wrong sequential order</p>
                      <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                        <li>Steps in order that breaks methodology (calculating WACC before determining capital structure)</li>
                        <li>Dependencies violated (using outputs before inputs are calculated)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">Missing critical intermediate steps</p>
                      <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                        <li>Skipping steps that junior bankers must complete (jumping from revenue to EBITDA without showing COGS)</li>
                        <li>Missing validation steps that would catch major errors</li>
                        <li>Omitting sense-checks for critical calculations</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">Contradictory steps</p>
                      <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                        <li>Steps that contradict each other</li>
                        <li>Steps that contradict prompt requirements</li>
                        <li>Steps that violate standard methodology</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">Methodology hiding</p>
                      <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                        <li>Collapsing complex methodology into single step that hides critical thinking</li>
                        <li>Black-boxing calculations that need to be shown explicitly</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Minor Step-by-Step Errors */}
                <div className="rounded-xl border-2 border-yellow-500 bg-yellow-500/5 p-4">
                  <h4 className="font-bold text-yellow-600 text-sm mb-3">Minor Step-by-Step Errors (3-1 points)</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">Granularity issues</p>
                      <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                        <li>Steps could be broken down more but logic is sound</li>
                        <li>Could add more detail but completion is possible</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">Missing non-critical validations</p>
                      <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                        <li>Missing explicit validation steps for minor calculations</li>
                        <li>Could add more sense-checks but major ones are present</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">Organization issues</p>
                      <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                        <li>Steps work but aren't organized in most intuitive sequence</li>
                        <li>Could group related steps better</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">Documentation gaps</p>
                      <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                        <li>Documentation steps could be more thorough</li>
                        <li>Missing some formatting/presentation step details</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Output Errors */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <FileSpreadsheet className="h-4 w-4 text-primary" />
                Final Output Errors
              </h3>
              
              {/* Excel Model Errors */}
              <div className="mb-4">
                <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                  <FileSpreadsheet className="h-4 w-4 text-chart-1" />
                  Excel Model Errors
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl border-2 border-destructive bg-destructive/5 p-4">
                    <h5 className="font-bold text-destructive text-sm mb-3">Major Excel Errors (10-5 points)</h5>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Methodology breaks</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Formulas that fundamentally invert logic (subtracting instead of adding depreciation back to cash flow)</li>
                          <li>Wrong direction on working capital changes</li>
                          <li>Incorrect enterprise to equity value bridge</li>
                          <li>Wrong WACC calculation affecting all DCF values</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Structural failures</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Circular references without intentional circularity</li>
                          <li>Hardcoded numbers where formulas required</li>
                          <li>Broken links across sheets that prevent calculation</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Convention violations</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Sources and uses don't balance</li>
                          <li>Returns calculated incorrectly (IRR, MOIC wrong formulas)</li>
                          <li>Precedent transaction multiples applied to wrong metrics</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border-2 border-yellow-500 bg-yellow-500/5 p-4">
                    <h5 className="font-bold text-yellow-600 text-sm mb-3">Minor Excel Errors (3-1 points)</h5>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Formatting inconsistencies</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Inconsistent number formatting (some $ some not)</li>
                          <li>Inconsistent units (mixing millions and thousands)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Presentation issues</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>No cell coloring to distinguish inputs/formulas/outputs</li>
                          <li>Sheets not in logical order</li>
                          <li>No freeze panes where helpful</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Style choices</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Not using standard IB color schemes</li>
                          <li>Non-standard but functional layout</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PowerPoint Deck Errors */}
              <div className="mb-4">
                <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                  <Presentation className="h-4 w-4 text-chart-2" />
                  PowerPoint Deck Errors
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl border-2 border-destructive bg-destructive/5 p-4">
                    <h5 className="font-bold text-destructive text-sm mb-3">Major PowerPoint Errors (10-5 points)</h5>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Wrong content entirely</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Showing trading comps when precedent transactions required</li>
                          <li>Missing mandated sections (executive summary, valuation summary, risk factors)</li>
                          <li>Deliverable type mismatch (pitch deck when CIM required)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Methodology misrepresentation</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Charts that visualize data incorrectly (wrong axis for waterfall)</li>
                          <li>Tables that show wrong metrics or calculations</li>
                          <li>Graphs that misrepresent relationships or trends</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Misleading conclusions</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Summary slide contradicts detailed analysis</li>
                          <li>Recommendations not supported by analysis shown</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border-2 border-yellow-500 bg-yellow-500/5 p-4">
                    <h5 className="font-bold text-yellow-600 text-sm mb-3">Minor PowerPoint Errors (3-1 points)</h5>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Formatting inconsistencies</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Mixed fonts across slides</li>
                          <li>Inconsistent title styles</li>
                          <li>Varying chart formats across deck</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Layout issues</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Overcrowded slides that are readable but not optimal</li>
                          <li>Inconsistent margins/spacing</li>
                          <li>Elements not perfectly aligned</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Polish issues</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>No logos or branding elements</li>
                          <li>Missing slide transitions where it would help</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PDF Document Errors */}
              <div className="mb-4">
                <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-chart-3" />
                  PDF Document Errors (Pitchbooks, CIMs, Teasers)
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl border-2 border-destructive bg-destructive/5 p-4">
                    <h5 className="font-bold text-destructive text-sm mb-3">Major PDF Errors (10-5 points)</h5>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Content accuracy</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Financial data that contradicts source materials</li>
                          <li>Wrong company in comparable set</li>
                          <li>Incorrect transaction details (dates, values, parties)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Missing required sections</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>No risk factors page when mandated</li>
                          <li>Absent financial projections</li>
                          <li>Missing executive summary or investment highlights</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Compliance failures</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Lacking required disclosures</li>
                          <li>Confidentiality language missing</li>
                          <li>Wrong regulatory language for document type</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border-2 border-yellow-500 bg-yellow-500/5 p-4">
                    <h5 className="font-bold text-yellow-600 text-sm mb-3">Minor PDF Errors (3-1 points)</h5>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Formatting inconsistencies</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Mixed header styles</li>
                          <li>Varying table formats</li>
                          <li>Font variations</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Navigation issues</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>No table of contents when helpful</li>
                          <li>Missing page numbers</li>
                          <li>Unclear section breaks</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Documentation style</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Footnotes not consistently formatted</li>
                          <li>Sources cited inconsistently but present</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cross-Deliverable Coherence */}
              <div className="p-4 rounded-xl border-2 border-destructive bg-destructive/5">
                <h4 className="font-bold text-destructive text-sm mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Cross-Deliverable Coherence (Major Error - 10 points)
                </h4>
                <p className="text-xs text-muted-foreground mb-2 italic">The ultimate major error: final outputs contradict each other</p>
                <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Excel shows 15x EBITDA multiple, PPT shows 12x, PDF says 18x</li>
                  <li>Excel has three scenarios, PPT only presents two, PDF references four</li>
                  <li>Return calculations (IRR, MOIC, cash-on-cash) differ across all three deliverables</li>
                  <li>Company name, transaction details, or key facts inconsistent across materials</li>
                  <li>Timeline of events differs between documents</li>
                  <li>Different valuation methodologies implied across materials</li>
                </ul>
              </div>
            </div>
            </ContentCard>
          </ChapterSection>

          {/* Continue to Rubrics */}
          <div className="pt-4">
            <Link 
              to="/rubrics" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Continue to Rubric Guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <PageNavigation />
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default OutputGuide;
