import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { InfoBox } from "@/components/InfoBox";
import { PageNavigation } from "@/components/PageNavigation";
import { CheckCircle, XCircle, AlertTriangle, FileCheck, Palette, FileSpreadsheet, Presentation, Shield, Quote, Info } from "lucide-react";

const BankerBibleChecklist = () => {
  return (
    <Layout>
      <PageHeader 
        icon={FileCheck} 
        title="Key Rubric Items: Banker Bible" 
        description="Ensure every rubric accounts for these Banker Bible formatting and compliance requirements." 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Overview */}
          <ContentCard className="border-2 border-primary/30">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">Universal Module: Banker Bible Compliance</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="font-medium text-foreground mb-2">Default Rule</p>
                <p className="text-sm text-muted-foreground">
                  Unless the prompt or prompt context explicitly overrides a specific Banker Bible standard, evaluate the output against Banker Bible requirements below.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="font-medium text-foreground mb-2">Override Rule</p>
                <p className="text-sm text-muted-foreground">
                  If overridden, cite the exact prompt/context text and score against the override.
                </p>
              </div>
            </div>
          </ContentCard>

          {/* Section A: FUNDAMENTAL */}
          <ContentCard className="border-2 border-destructive/50">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-destructive" />
              <h2 className="font-serif text-xl font-bold text-foreground">Section A: FUNDAMENTAL (Gating / Must Pass)</h2>
            </div>
            <InfoBox type="warning" className="mb-6">
              If any FUNDAMENTAL item fails, the deliverable is not client-ready (overall result = Fail / Needs Revision), regardless of other scores.
            </InfoBox>

            <div className="space-y-6">
              {/* A1 */}
              <div className="p-4 rounded-lg bg-background border-2 border-destructive/30">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive text-destructive-foreground flex-shrink-0">
                    <span className="text-sm font-bold">A1</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-2">Excel Color Coding (DEFAULT = Blue/Black/Green)</p>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <p className="font-medium text-foreground">Requirement (default):</p>
                      <ul className="space-y-1 ml-4">
                        <li className="flex gap-2 items-center">
                          <span className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></span>
                          <span><strong className="text-blue-600">Blue text</strong> = hard-coded inputs (typed values)</span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <span className="w-3 h-3 rounded-full bg-black flex-shrink-0"></span>
                          <span><strong>Black text</strong> = formulas referencing the same sheet</span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <span className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0"></span>
                          <span><strong className="text-green-600">Green text</strong> = formulas referencing other sheets/workbooks</span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <span className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></span>
                          <span><strong className="text-red-600">Red text</strong> = flags / errors / items requiring attention (only when appropriate)</span>
                        </li>
                      </ul>
                      <p className="mt-3 italic text-xs">Override allowed only if: prompt/context explicitly states a different color system.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* A2 */}
              <div className="p-4 rounded-lg bg-background border-2 border-destructive/30">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive text-destructive-foreground flex-shrink-0">
                    <span className="text-sm font-bold">A2</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-2">No Visible Excel Errors ("Beauty Mode")</p>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div className="flex gap-2 items-start">
                        <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0 mt-0.5" />
                        <span><strong>Pass if:</strong> No visible #REF!, #DIV/0!, #VALUE!, #N/A, etc. in any final/shared tabs.</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span><strong>Fail if:</strong> Any visible error codes appear in the final output.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* A3 */}
              <div className="p-4 rounded-lg bg-background border-2 border-destructive/30">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive text-destructive-foreground flex-shrink-0">
                    <span className="text-sm font-bold">A3</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-2">Mandatory Integrity Checks Present and Passing</p>
                    <p className="text-sm text-muted-foreground mb-2 italic">Evaluate only those relevant to the deliverable type (3-statement, LBO, M&A, etc.).</p>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div className="flex gap-2 items-start">
                        <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0 mt-0.5" />
                        <span><strong>Pass if:</strong> Checks exist and show ✓/OK for:</span>
                      </div>
                      <ul className="ml-6 space-y-1">
                        <li>• Balance sheet balances (if 3-statement)</li>
                        <li>• Cash flow ties (if applicable)</li>
                        <li>• IS ↔ BS flow check (if applicable)</li>
                        <li>• Sources = Uses (if M&A/LBO)</li>
                        <li>• Any explicitly required tie-outs in prompt</li>
                      </ul>
                      <div className="flex gap-2 items-start mt-2">
                        <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span><strong>Fail if:</strong> Checks are missing where applicable OR any check fails.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* A4 */}
              <div className="p-4 rounded-lg bg-background border-2 border-destructive/30">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive text-destructive-foreground flex-shrink-0">
                    <span className="text-sm font-bold">A4</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-2">Centralized Assumptions / No Scattered Hardcodes</p>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div className="flex gap-2 items-start">
                        <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0 mt-0.5" />
                        <span><strong>Pass if:</strong> Key assumptions live in a clearly labeled assumptions/input area and flow through via links; no "random 21%" hardcoded throughout calc tabs.</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span><strong>Fail if:</strong> Material assumptions are hardcoded in multiple places outside designated input areas.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* A5 */}
              <div className="p-4 rounded-lg bg-background border-2 border-destructive/30">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive text-destructive-foreground flex-shrink-0">
                    <span className="text-sm font-bold">A5</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-2">Negative Numbers Displayed with Parentheses</p>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div className="flex gap-2 items-start">
                        <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0 mt-0.5" />
                        <span><strong>Pass if:</strong> Negatives shown like (1,234) in financial statements / key tables.</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span><strong>Fail if:</strong> Negatives use minus signs (-1,234) in final outputs.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* A6 */}
              <div className="p-4 rounded-lg bg-background border-2 border-destructive/30">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive text-destructive-foreground flex-shrink-0">
                    <span className="text-sm font-bold">A6</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-2">No Placeholders / Client Errors</p>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div className="flex gap-2 items-start">
                        <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0 mt-0.5" />
                        <span><strong>Pass if:</strong> No "TBD/XXX/lorem ipsum," wrong client name, or stale date in final deliverable.</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span><strong>Fail if:</strong> Any placeholder text or incorrect client identifiers appear.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContentCard>

          {/* Section B: QUALITY FACTORS */}
          <ContentCard className="border-2 border-yellow-500/50">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
              <h2 className="font-serif text-xl font-bold text-foreground">Section B: QUALITY FACTORS (Scoring Considerations)</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              These factors affect scoring but are not automatic fails. Evaluate each on a scale and weight appropriately.
            </p>

            <div className="space-y-6">
              {/* B1 */}
              <div className="p-4 rounded-lg bg-background border border-yellow-500/30">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-yellow-950 flex-shrink-0">
                    <span className="text-sm font-bold">B1</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-2">Number Formatting is Consistent and Appropriate</p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Units labeled ($, $mm, %, x)</li>
                      <li>• Decimals consistent by type (e.g., % with one decimal, per-share with two)</li>
                      <li>• Consistency across tabs/outputs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* B2 */}
              <div className="p-4 rounded-lg bg-background border border-yellow-500/30">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-yellow-950 flex-shrink-0">
                    <span className="text-sm font-bold">B2</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
                      <p className="font-semibold text-foreground">Clean Model/Deck Hygiene</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium text-foreground mb-1">Excel:</p>
                        <ul className="space-y-1 ml-4">
                          <li>• No gridlines (if applicable), sensible freeze panes, readable spacing</li>
                          <li>• Tabs logically ordered and named</li>
                          <li>• No leftover "Sheet1/Sheet2" junk</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">PPT:</p>
                        <ul className="space-y-1 ml-4">
                          <li>• No overlaps/misalignment, consistent spacing, consistent font usage</li>
                          <li>• Visual hierarchy is clear</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* B3 */}
              <div className="p-4 rounded-lg bg-background border border-yellow-500/30">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-yellow-950 flex-shrink-0">
                    <span className="text-sm font-bold">B3</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Presentation className="h-4 w-4 text-muted-foreground" />
                      <p className="font-semibold text-foreground">Charts/Tables are Banker-Clean</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">PPT/outputs:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• No chart junk (no 3D, no default "Chart Title," minimal gridlines)</li>
                      <li>• Direct labels preferred; units shown</li>
                      <li>• Tables aligned; headers/totals visually clear</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* B4 */}
              <div className="p-4 rounded-lg bg-background border border-yellow-500/30">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-yellow-950 flex-shrink-0">
                    <span className="text-sm font-bold">B4</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-2">Sources and Auditability</p>
                    <div className="text-sm text-muted-foreground">
                      <p className="mb-2"><strong>Pass at high score if:</strong></p>
                      <ul className="space-y-1 ml-4">
                        <li>• Charts/tables have specific source footnotes (and dates where relevant)</li>
                        <li>• Backup workbooks/tabs allow a reviewer to trace key numbers quickly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* B5 */}
              <div className="p-4 rounded-lg bg-background border border-yellow-500/30">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-yellow-950 flex-shrink-0">
                    <span className="text-sm font-bold">B5</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-2">Versioning / File Management Behavior (Lightweight)</p>
                    <div className="text-sm text-muted-foreground">
                      <p className="mb-2"><strong>High score if:</strong></p>
                      <ul className="space-y-1 ml-4">
                        <li>• Filenames are versioned (v1/v2) and not overwritten</li>
                        <li>• Output folder clearly separates working vs final (if required by task)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContentCard>

          {/* Example Criteria Section */}
          <ContentCard className="border-2 border-primary/30">
            <div className="flex items-center gap-2 mb-4">
              <Quote className="h-6 w-6 text-primary" />
              <h2 className="font-serif text-xl font-bold text-foreground">Example Criteria: Banker Bible Compliance</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Copy-paste ready criterion language for your rubrics. Adapt as needed for specific deliverables.
            </p>

            {/* Section A Examples */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-destructive" />
                <h3 className="font-serif text-lg font-semibold text-foreground">Section A — FUNDAMENTAL (Gating / Must Pass)</h3>
              </div>
              <p className="text-xs text-muted-foreground italic">
                Use these as pass/fail "must pass" checks (if any fail → deliverable is not client-ready).
              </p>

              {/* A1 Example */}
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-medium text-destructive mb-2">A1. Excel color coding (Default = Blue / Black / Green / Red)</p>
                <div className="bg-background p-3 rounded border border-border/50">
                  <p className="text-sm text-foreground italic">
                    "Excel uses banker color-coding: hardcoded typed inputs are blue font, same-sheet formulas are black font, cross-sheet references are green font, and red font is reserved only for flags/errors (when used)."
                  </p>
                </div>
              </div>

              {/* A2 Example */}
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-medium text-destructive mb-2">A2. No visible Excel errors ("beauty mode")</p>
                <div className="bg-background p-3 rounded border border-border/50">
                  <p className="text-sm text-foreground italic">
                    "No visible Excel error codes (#REF!, #DIV/0!, #VALUE!, #N/A) appear on any final/print-ready tabs (e.g., Summary, Output, Sensitivity Analysis)."
                  </p>
                </div>
              </div>

              {/* A3 Example */}
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-medium text-destructive mb-2">A3. Mandatory integrity checks present and passing (as applicable)</p>
                <p className="text-xs text-muted-foreground mb-2 italic">Choose the example that matches the deliverable type:</p>
                <div className="space-y-2">
                  <div className="bg-background p-3 rounded border border-border/50">
                    <p className="text-xs font-medium text-muted-foreground mb-1">LBO / M&A example:</p>
                    <p className="text-sm text-foreground italic">
                      "Sources & Uses tie-out equals 0 (Sources = Uses) in the final Excel model."
                    </p>
                  </div>
                  <div className="bg-background p-3 rounded border border-border/50">
                    <p className="text-xs font-medium text-muted-foreground mb-1">3-statement example:</p>
                    <p className="text-sm text-foreground italic">
                      "Balance Sheet balances (Total Assets = Total Liabilities + Equity) for all projection years in the final Excel model."
                    </p>
                  </div>
                  <div className="bg-background p-3 rounded border border-border/50">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Sensitivity / tie-out example:</p>
                    <p className="text-sm text-foreground italic">
                      "The center output cell (MOIC / IRR) in each sensitivity table ties to the base-case returns in the model within tolerance (±0.1x MOIC and ±10–25 bps IRR)."
                    </p>
                  </div>
                </div>
              </div>

              {/* A4 Example */}
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-medium text-destructive mb-2">A4. Centralized assumptions / no scattered hardcodes</p>
                <div className="bg-background p-3 rounded border border-border/50">
                  <p className="text-sm text-foreground italic">
                    "Key assumptions (e.g., buyout premium, exit multiple, revenue growth, total leverage %, debt/PIK split) are located in a clearly labeled assumptions/input section and flow through the model via linked formulas (i.e., not re-hardcoded across calculation areas)."
                  </p>
                </div>
              </div>

              {/* A5 Example */}
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-medium text-destructive mb-2">A5. Negative numbers displayed with parentheses</p>
                <div className="bg-background p-3 rounded border border-border/50">
                  <p className="text-sm text-foreground italic">
                    "Negative values in final financial tables are displayed with parentheses (e.g., (1,234)) rather than minus signs (e.g., -1,234)."
                  </p>
                </div>
              </div>

              {/* A6 Example */}
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-medium text-destructive mb-2">A6. No placeholders / client errors</p>
                <div className="bg-background p-3 rounded border border-border/50">
                  <p className="text-sm text-foreground italic">
                    "Final deliverables contain no placeholder text (e.g., TBD, XXX, lorem ipsum) and no incorrect company/client identifiers or stale dates in headers/footnotes."
                  </p>
                </div>
              </div>
            </div>

            {/* Section B Examples */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <h3 className="font-serif text-lg font-semibold text-foreground">Section B — Banker Bible Quality (Scored / Non-Gating)</h3>
              </div>
              <p className="text-xs text-muted-foreground italic">
                These are strong, "banker clean" criteria that typically carry low-to-medium weights (depending on the task).
              </p>

              {/* B1 Example */}
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-medium text-yellow-600 mb-2">B1. Number formatting is consistent and appropriate</p>
                <div className="space-y-2">
                  <div className="bg-background p-3 rounded border border-border/50">
                    <p className="text-sm text-foreground italic">
                      "Units and formats are consistent across outputs: currency values show the intended units ($, $M / $mm), multiples use an 'x' suffix, and percentages use a '%' suffix with consistent decimal precision."
                    </p>
                  </div>
                  <div className="bg-background p-3 rounded border border-border/50">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Sensitivity-specific anchor example:</p>
                    <p className="text-sm text-foreground italic">
                      "Sensitivity table outputs display MOIC to one decimal place with an 'x' suffix (X.Xx) and IRR to one decimal place with a '%' suffix (Y.Y%)."
                    </p>
                  </div>
                </div>
              </div>

              {/* B2 Example */}
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-medium text-yellow-600 mb-2">B2. Clean model/deck hygiene</p>
                <div className="space-y-2">
                  <div className="bg-background p-3 rounded border border-border/50">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Excel hygiene example:</p>
                    <p className="text-sm text-foreground italic">
                      "Excel gridlines are hidden on final/print-ready tabs, and the model contains no leftover default tabs (e.g., 'Sheet1', 'Sheet2')."
                    </p>
                  </div>
                  <div className="bg-background p-3 rounded border border-border/50">
                    <p className="text-xs font-medium text-muted-foreground mb-1">PPT hygiene example:</p>
                    <p className="text-sm text-foreground italic">
                      "PowerPoint slide elements do not overlap and are consistently aligned with clean spacing (tables, headline, and footnote are readable and not clipped)."
                    </p>
                  </div>
                </div>
              </div>

              {/* B3 Example */}
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-medium text-yellow-600 mb-2">B3. Charts/tables are banker-clean</p>
                <div className="space-y-2">
                  <div className="bg-background p-3 rounded border border-border/50">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Table cleanliness example:</p>
                    <p className="text-sm text-foreground italic">
                      "PowerPoint tables are pasted as pictures (not editable objects), with no formulas visible and no Excel UI artifacts (gridlines, selection boxes)."
                    </p>
                  </div>
                  <div className="bg-background p-3 rounded border border-border/50">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Chart cleanliness example:</p>
                    <p className="text-sm text-foreground italic">
                      "Charts have labeled units, no default placeholders (e.g., no 'Chart Title'), and avoid 'chart junk' (e.g., no 3D effects)."
                    </p>
                  </div>
                </div>
              </div>

              {/* B4 Example */}
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-medium text-yellow-600 mb-2">B4. Sources and auditability</p>
                <div className="space-y-2">
                  <div className="bg-background p-3 rounded border border-border/50">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Footnote criteria:</p>
                    <p className="text-sm text-foreground italic">
                      "PowerPoint footnote includes (a) source line (e.g., 'Source: Company filings, [Bank] analysis'), (b) an 'As of' date, and (c) a disclaimer such as 'For discussion purposes only' or 'Illustrative analysis based on assumptions.'"
                    </p>
                  </div>
                  <div className="bg-background p-3 rounded border border-border/50">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Auditability example:</p>
                    <p className="text-sm text-foreground italic">
                      "Key outputs can be traced quickly: the model clearly labels where MOIC and IRR are calculated and the sensitivity tables reference those base output cells."
                    </p>
                  </div>
                </div>
              </div>

              {/* B5 Example */}
              <div className="p-4 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-medium text-yellow-600 mb-2">B5. Versioning / file management behavior (lightweight)</p>
                <p className="text-xs text-muted-foreground mb-2 italic">Keep this low-weight / "nice to have," and avoid overly rigid naming.</p>
                <div className="bg-background p-3 rounded border border-border/50">
                  <p className="text-sm text-foreground italic">
                    "Delivered files use descriptive filenames that include the company name and deliverable type and include a version indicator (e.g., v1/v2), rather than ambiguous names like 'final_FINAL2.'"
                  </p>
                </div>
              </div>
            </div>

            {/* Override Note */}
            <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20 flex gap-3">
              <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm mb-1">Override Handling</p>
                <p className="text-sm text-muted-foreground">
                  If the prompt explicitly specifies a different formatting or color-coding system, score against the prompt's stated system instead of the default Banker Bible standard.
                </p>
              </div>
            </div>
          </ContentCard>

          {/* Quick Reference Checklist */}
          <ContentCard className="border-2 border-chart-1/30">
            <div className="flex items-center gap-2 mb-4">
              <Palette className="h-6 w-6 text-chart-1" />
              <h2 className="font-serif text-xl font-bold text-foreground">Quick Reference: Rubric Coverage Checklist</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              For every rubric you create, verify that you have criteria covering these items (where applicable to the deliverable):
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-destructive" />
                  FUNDAMENTAL (Must Include)
                </h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>☐ Excel color coding compliance</li>
                  <li>☐ No visible Excel errors</li>
                  <li>☐ Integrity checks present and passing</li>
                  <li>☐ Centralized assumptions</li>
                  <li>☐ Parentheses for negative numbers</li>
                  <li>☐ No placeholders or client errors</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  QUALITY (Consider Including)
                </h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>☐ Number formatting consistency</li>
                  <li>☐ Model/deck hygiene</li>
                  <li>☐ Chart/table cleanliness</li>
                  <li>☐ Sources and auditability</li>
                  <li>☐ File versioning (if applicable)</li>
                </ul>
              </div>
            </div>

            <InfoBox type="success" className="mt-6">
              <strong>Tip:</strong> When creating a rubric, start by mapping your criteria to these Banker Bible items. Any gap in coverage should prompt you to add a criterion.
            </InfoBox>
          </ContentCard>

          <PageNavigation />
        </div>
      </div>
    </Layout>
  );
};

export default BankerBibleChecklist;
