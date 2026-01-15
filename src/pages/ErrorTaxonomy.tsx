import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { PageNavigation } from "@/components/PageNavigation";
import { AlertTriangle, Edit3, MessageSquare, ListChecks, FileSpreadsheet, Presentation, FileText, ClipboardList, Link2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ErrorTaxonomy = () => {
  return (
    <Layout>
      <PageHeader 
        icon={AlertTriangle} 
        title="Major / Minor Errors" 
        description="A quick reference cheat sheet for error types across Prompt, Step-by-Step, Final Output, and Rubric. Use this when you receive a comment with one of these error tags." 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* General Principle */}
          <ContentCard className="border-primary/30 bg-primary/5">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">General Principle</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <span className="font-bold text-destructive">Major Errors</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Violate the <strong>how (methodology)</strong> — they break the model and would make you send nothing rather than send the output to a client
                </p>
              </div>
              <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <Edit3 className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                  <span className="font-bold text-yellow-600 dark:text-yellow-500">Minor Errors</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Affect the <strong>how well (execution quality)</strong> — they need fixing but wouldn't cause client embarrassment
                </p>
              </div>
            </div>
          </ContentCard>

          {/* Tabs for each category */}
          <Tabs defaultValue="prompt" className="w-full">
            <TabsList className="grid w-full grid-cols-4 h-auto">
              <TabsTrigger value="prompt" className="flex flex-col gap-1 py-3">
                <MessageSquare className="h-4 w-4" />
                <span className="text-xs">Prompt</span>
              </TabsTrigger>
              <TabsTrigger value="step-by-step" className="flex flex-col gap-1 py-3">
                <ListChecks className="h-4 w-4" />
                <span className="text-xs">Step-by-Step</span>
              </TabsTrigger>
              <TabsTrigger value="final-output" className="flex flex-col gap-1 py-3">
                <FileSpreadsheet className="h-4 w-4" />
                <span className="text-xs">Final Output</span>
              </TabsTrigger>
              <TabsTrigger value="rubric" className="flex flex-col gap-1 py-3">
                <ClipboardList className="h-4 w-4" />
                <span className="text-xs">Rubric</span>
              </TabsTrigger>
            </TabsList>

            {/* Prompt Errors */}
            <TabsContent value="prompt" className="mt-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Major Prompt Errors */}
                <div className="rounded-2xl border-2 border-destructive bg-destructive/5 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-destructive/10">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    </div>
                    <h3 className="font-bold text-destructive">Major Prompt Errors</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Pass rate issues</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Prompt produces {">"}50% pass rate on claude-sonnet-4-20250514</li>
                        <li>Task is impossible to complete as specified</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Missing critical constraints</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>No specification of required valuation approach (DCF vs comps vs precedent transactions)</li>
                        <li>Missing required sections or deliverable components</li>
                        <li>No comparable company selection criteria when needed</li>
                        <li>Missing target return thresholds or key financial parameters</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Ambiguous scope</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Unclear boundaries that allow models to skip entire workflow steps</li>
                        <li>Missing essential context that practitioners would always have</li>
                        <li>Scope allows for multiple contradictory interpretations</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Conflicting instructions</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Contradictory requirements that make task impossible (build 3-statement model but don't create balance sheet)</li>
                        <li>Instructions that work against each other</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Minor Prompt Errors */}
                <div className="rounded-2xl border-2 border-yellow-500 bg-yellow-500/5 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-yellow-500/10">
                      <Edit3 className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                    </div>
                    <h3 className="font-bold text-yellow-600 dark:text-yellow-500">Minor Prompt Errors (3-1 points)</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Verbosity issues</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Slightly verbose instructions that don't impact model performance</li>
                        <li>Could be more concise but intent is clear</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Organizational issues</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Ordering of information could be more logical but doesn't confuse</li>
                        <li>Structure could be improved but models understand the task</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Missing nice-to-haves</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Missing preferred formatting styles that don't affect core methodology</li>
                        <li>Could add more examples but models still understand</li>
                        <li>Missing non-essential details that don't impact completion</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Step-by-Step Errors */}
            <TabsContent value="step-by-step" className="mt-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Major Step-by-Step Errors */}
                <div className="rounded-2xl border-2 border-destructive bg-destructive/5 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-destructive/10">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    </div>
                    <h3 className="font-bold text-destructive">Major Step-by-Step Errors (10-5 points)</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Wrong sequential order</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Steps in order that breaks methodology (calculating WACC before determining capital structure)</li>
                        <li>Dependencies violated (using outputs before inputs are calculated)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Missing critical intermediate steps</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Skipping steps that junior bankers must complete (jumping from revenue to EBITDA without showing COGS)</li>
                        <li>Missing validation steps that would catch major errors</li>
                        <li>Omitting sense-checks for critical calculations</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Contradictory steps</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Steps that contradict each other</li>
                        <li>Steps that contradict prompt requirements</li>
                        <li>Steps that violate standard methodology</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Methodology hiding</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Collapsing complex methodology into single step that hides critical thinking</li>
                        <li>Black-boxing calculations that need to be shown explicitly</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Minor Step-by-Step Errors */}
                <div className="rounded-2xl border-2 border-yellow-500 bg-yellow-500/5 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-yellow-500/10">
                      <Edit3 className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                    </div>
                    <h3 className="font-bold text-yellow-600 dark:text-yellow-500">Minor Step-by-Step Errors (3-1 points)</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Granularity issues</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Steps could be broken down more but logic is sound</li>
                        <li>Could add more detail but completion is possible</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Missing non-critical validations</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Missing explicit validation steps for minor calculations</li>
                        <li>Could add more sense-checks but major ones are present</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Organization issues</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Steps work but aren't organized in most intuitive sequence</li>
                        <li>Could group related steps better</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Documentation gaps</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Documentation steps could be more thorough</li>
                        <li>Missing some formatting/presentation step details</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Final Output Errors */}
            <TabsContent value="final-output" className="mt-6 space-y-6">
              {/* Excel Model Errors */}
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileSpreadsheet className="h-5 w-5 text-chart-1" />
                  Excel Model Errors
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border-2 border-destructive bg-destructive/5 p-5">
                    <h4 className="font-bold text-destructive text-sm mb-3">Major Excel Errors (10-5 points)</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Methodology breaks</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Formulas that fundamentally invert logic (subtracting instead of adding depreciation back to cash flow)</li>
                          <li>Wrong direction on working capital changes</li>
                          <li>Tax rate applied to wrong line items</li>
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
                          <li>Formula errors that cascade through dependent cells</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Missing critical sections</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>No sensitivity tables when required</li>
                          <li>Absent key schedules (debt schedule in LBO, working capital in 3-statement)</li>
                          <li>Missing required supporting calculations</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Convention violations</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Sources and uses don't balance</li>
                          <li>Returns calculated incorrectly (IRR, MOIC wrong formulas)</li>
                          <li>Precedent transaction multiples applied to wrong metrics</li>
                          <li>Violating fundamental IB Excel conventions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border-2 border-yellow-500 bg-yellow-500/5 p-5">
                    <h4 className="font-bold text-yellow-600 dark:text-yellow-500 text-sm mb-3">Minor Excel Errors (3-1 points)</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Formatting inconsistencies</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Mixed decimal places within same column</li>
                          <li>Inconsistent number formatting (some $ some not)</li>
                          <li>Inconsistent units (mixing millions and thousands without clear labels)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Presentation issues</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>No cell coloring to distinguish inputs/formulas/outputs</li>
                          <li>Sheets not in logical order</li>
                          <li>Missing row/column labels</li>
                          <li>No freeze panes where helpful</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Documentation gaps</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>No assumption sources noted</li>
                          <li>Missing units (millions vs thousands) but derivable from context</li>
                          <li>Tabs not clearly named</li>
                          <li>Missing legend for color coding</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Style choices</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Not using standard IB color schemes (blue/black/green conventions)</li>
                          <li>Charts formatted unconventionally but legibly</li>
                          <li>Non-standard but functional layout</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PowerPoint Deck Errors */}
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Presentation className="h-5 w-5 text-chart-2" />
                  PowerPoint Deck Errors
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border-2 border-destructive bg-destructive/5 p-5">
                    <h4 className="font-bold text-destructive text-sm mb-3">Major PowerPoint Errors (10-5 points)</h4>
                    <div className="space-y-3">
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
                          <li>Executive summary doesn't match content</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Missing critical context</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>No slide explaining valuation approach used</li>
                          <li>No assumptions page</li>
                          <li>Missing required disclosures or disclaimers</li>
                          <li>No methodology explanation</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Structural failures</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Page flow that makes narrative incomprehensible</li>
                          <li>Illogical section ordering</li>
                          <li>Missing critical connecting logic between sections</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border-2 border-yellow-500 bg-yellow-500/5 p-5">
                    <h4 className="font-bold text-yellow-600 dark:text-yellow-500 text-sm mb-3">Minor PowerPoint Errors (3-1 points)</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Formatting inconsistencies</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Mixed fonts across slides</li>
                          <li>Inconsistent title styles</li>
                          <li>Varying chart formats across deck</li>
                          <li>Inconsistent bullet point styles</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Layout issues</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Overcrowded slides that are readable but not optimal</li>
                          <li>Inconsistent margins/spacing</li>
                          <li>Text sizes varying unnecessarily</li>
                          <li>Elements not perfectly aligned</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Labeling gaps</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Charts missing titles but content clear from context</li>
                          <li>No page numbers</li>
                          <li>Missing slide headers where helpful</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Polish issues</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>No logos or branding elements</li>
                          <li>Inconsistent capitalization in headers</li>
                          <li>Slide transitions not smooth</li>
                          <li>Missing animation where it would help</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PDF Document Errors */}
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-chart-3" />
                  PDF Document Errors (Pitchbooks, CIMs, Teasers)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border-2 border-destructive bg-destructive/5 p-5">
                    <h4 className="font-bold text-destructive text-sm mb-3">Major PDF Errors (10-5 points)</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Content accuracy</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Financial data that contradicts source materials</li>
                          <li>Wrong company in comparable set</li>
                          <li>Incorrect transaction details (dates, values, parties)</li>
                          <li>Material misstatements of facts</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Missing required sections</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>No risk factors page when mandated</li>
                          <li>Absent financial projections</li>
                          <li>Missing executive summary</li>
                          <li>No investment highlights or thesis</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Compliance failures</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Lacking required disclosures</li>
                          <li>Confidentiality language missing</li>
                          <li>Wrong regulatory language for document type</li>
                          <li>Missing necessary disclaimers</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Structural errors</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Sections in illogical order that prevents understanding</li>
                          <li>Broken internal references (says "see page 12" but content is on page 8)</li>
                          <li>Missing critical connective tissue between sections</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Methodology errors in exhibits</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Supporting schedules show wrong calculations</li>
                          <li>Appendix tables contradict body</li>
                          <li>Exhibits don't support main document claims</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border-2 border-yellow-500 bg-yellow-500/5 p-5">
                    <h4 className="font-bold text-yellow-600 dark:text-yellow-500 text-sm mb-3">Minor PDF Errors (3-1 points)</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Formatting inconsistencies</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Mixed header styles</li>
                          <li>Varying table formats</li>
                          <li>Inconsistent use of bold/italic</li>
                          <li>Font variations</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Presentation polish</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Low-resolution logos or images</li>
                          <li>Slightly misaligned elements</li>
                          <li>Inconsistent spacing between sections</li>
                          <li>Margins not perfectly uniform</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Navigation issues</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>No table of contents when helpful</li>
                          <li>Missing page numbers</li>
                          <li>Unclear section breaks</li>
                          <li>No bookmarks in long documents</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Documentation style</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Footnotes not consistently formatted</li>
                          <li>Sources cited inconsistently but present</li>
                          <li>Abbreviations not defined on first use</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Visual hierarchy</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                          <li>Important information not emphasized sufficiently but still readable</li>
                          <li>Could use better visual organization</li>
                          <li>Headers not clearly differentiated</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cross-Deliverable Coherence */}
              <div className="p-5 rounded-2xl border-2 border-destructive bg-destructive/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-destructive/10">
                    <Link2 className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-bold text-destructive">Cross-Deliverable Coherence (Major Error - 10 points)</h3>
                    <p className="text-xs text-muted-foreground italic mt-1">The ultimate major error: final outputs contradict each other</p>
                  </div>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Excel shows 15x EBITDA multiple, PPT shows 12x, PDF says 18x</li>
                  <li>Excel has three scenarios, PPT only presents two, PDF references four</li>
                  <li>Return calculations (IRR, MOIC, cash-on-cash) differ across all three deliverables</li>
                  <li>Company name, transaction details, or key facts inconsistent across materials</li>
                  <li>Timeline of events differs between documents</li>
                  <li>Different valuation methodologies implied across materials</li>
                </ul>
              </div>
            </TabsContent>

            {/* Rubric Errors */}
            <TabsContent value="rubric" className="mt-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Major Rubric Errors */}
                <div className="rounded-2xl border-2 border-destructive bg-destructive/5 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-destructive/10">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    </div>
                    <h3 className="font-bold text-destructive">Major Rubric Errors</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Cannot distinguish quality</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Rubric can't distinguish between passing and failing outputs</li>
                        <li>All models score similarly regardless of actual quality</li>
                        <li>Inter-rater agreement {"<"}70% (annotators can't apply consistently)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Missing critical criteria</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Missing criteria for deal-breaking methodology violations that appear in step-by-step</li>
                        <li>Not checking for errors that would cause client embarrassment</li>
                        <li>Missing validation of fundamental IB conventions</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Wrong evaluation approach</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Criteria require exact number matching instead of methodology validation</li>
                        <li>Checking for things not specified in prompt or step-by-step</li>
                        <li>Evaluating format over substance</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Broken weighting</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Weighted incorrectly so minor formatting issues outscore methodology failures</li>
                        <li>Deal-breaking items worth less than trivial execution details</li>
                        <li>Weight distribution doesn't reflect true error severity</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Coherence failures</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Criteria contradict each other</li>
                        <li>Standards impossible to meet simultaneously</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Minor Rubric Errors */}
                <div className="rounded-2xl border-2 border-yellow-500 bg-yellow-500/5 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-yellow-500/10">
                      <Edit3 className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                    </div>
                    <h3 className="font-bold text-yellow-600 dark:text-yellow-500">Minor Rubric Errors</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Clarity issues</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Criteria could be more precisely worded but annotators understand intent</li>
                        <li>Description could use better examples but standard is clear</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Suboptimal organization</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Criteria ordering doesn't follow model-building sequence perfectly</li>
                        <li>Some redundancy between criteria that doesn't affect scoring</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Weight distribution</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Weight distribution slightly suboptimal but still directionally correct</li>
                        <li>Could fine-tune but major errors still weighted appropriately</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Missing edge cases</p>
                      <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Missing some edge case criteria that rarely occur</li>
                        <li>Could be more comprehensive for unusual scenarios</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Criteria Error Tags */}
              <ContentCard className="border-primary/20">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-primary" />
                  Criteria Error Tags Quick Reference
                </h3>
                <div className="grid gap-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                      <p className="font-semibold text-destructive text-sm mb-1">Not Self-Contained</p>
                      <p className="text-xs text-muted-foreground">Criterion requires external context to understand</p>
                    </div>
                    <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                      <p className="font-semibold text-destructive text-sm mb-1">Not Measurable</p>
                      <p className="text-xs text-muted-foreground">Uses subjective language that can't be objectively evaluated</p>
                    </div>
                    <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                      <p className="font-semibold text-destructive text-sm mb-1">Stacked</p>
                      <p className="text-xs text-muted-foreground">Tests multiple requirements in a single item</p>
                    </div>
                    <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                      <p className="font-semibold text-destructive text-sm mb-1">Overfitted</p>
                      <p className="text-xs text-muted-foreground">Too specific to one task, won't generalize</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                      <p className="font-semibold text-yellow-600 dark:text-yellow-500 text-sm mb-1">String Literal</p>
                      <p className="text-xs text-muted-foreground">Penalizes for not using exact quoted labels</p>
                    </div>
                    <div className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                      <p className="font-semibold text-yellow-600 dark:text-yellow-500 text-sm mb-1">Duplicate</p>
                      <p className="text-xs text-muted-foreground">Multiple criteria testing the same requirement</p>
                    </div>
                    <div className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                      <p className="font-semibold text-yellow-600 dark:text-yellow-500 text-sm mb-1">Category Mismatch</p>
                      <p className="text-xs text-muted-foreground">Criterion categorized incorrectly</p>
                    </div>
                    <div className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                      <p className="font-semibold text-yellow-600 dark:text-yellow-500 text-sm mb-1">Unclear Wording</p>
                      <p className="text-xs text-muted-foreground">Vague language with multiple interpretations</p>
                    </div>
                  </div>
                </div>
              </ContentCard>
            </TabsContent>
          </Tabs>

          <PageNavigation />
        </div>
      </div>
    </Layout>
  );
};

export default ErrorTaxonomy;
