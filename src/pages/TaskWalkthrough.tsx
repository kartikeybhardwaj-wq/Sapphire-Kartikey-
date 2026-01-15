import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { GradientBorderCard } from "@/components/GradientBorderCard";
import { PageNavigation } from "@/components/PageNavigation";
import { Map, ChevronDown, AlertTriangle } from "lucide-react";

const TaskWalkthrough = () => {
  return (
    <Layout>
      <PageHeader 
        icon={Map} 
        title="Task Walkthrough" 
        description="Visual guide for each section of the task. See the interface on the left and exactly what to enter on the right." 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Overview Note */}
          <div className="mb-8 p-4 rounded-lg bg-primary/10 border border-primary/30">
            <p className="text-sm text-foreground">
              <strong>📋 Reference Guide:</strong> Use this page as your per-block breakdown of each task section. Each card below corresponds to a specific input field you'll encounter — review it alongside the platform as you work.
            </p>
          </div>

          <div className="space-y-8">

            {/* 1. Prompt Field */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-3">
                  <p className="text-foreground font-medium text-sm leading-relaxed">
                    Write a prompt that accurately reflects a real world banker request. It should be something your MD or VP would ask the analyst or associate on the deal team that would take a second year banker about 45-90 minutes to handle.
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <p className="text-muted-foreground text-sm">Start typing...</p>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Prompt</h3>
                <p className="text-muted-foreground">
                  Write a detailed, realistic investment banking task that an MD or VP would assign. This is the core of your submission.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Should take 45-90 minutes for a 2nd year banker</li>
                  <li>• Must be multi-step and require real analysis</li>
                  <li>• Include specific deliverable expectations</li>
                  <li>• Reference data sources when applicable</li>
                </ul>
              </div>
            </div>

            {/* 2. Additional Context */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-3">
                  <p className="text-foreground font-medium text-sm">
                    Please include any additional context needed
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <p className="text-muted-foreground text-sm">Start typing...</p>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Additional Context</h3>
                <p className="text-muted-foreground">
                  Add any background information, assumptions, or constraints that would help complete the task.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Industry-specific terminology or conventions</li>
                  <li>• Deal stage or timeline context</li>
                  <li>• Client preferences or requirements</li>
                  <li>• Any assumptions to make</li>
                </ul>
              </div>
            </div>

            {/* 3. Role Selection */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Which role would tackle this workflow from the prompt you've created? (can select multiple roles)
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <div className="space-y-3">
                  {["Analyst", "Associate", "VP / ED", "MD"].map((role) => (
                    <div key={role} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded border border-border bg-background" />
                      <span className="text-foreground text-sm">{role}</span>
                    </div>
                  ))}
                </div>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Role Selection</h3>
                <p className="text-muted-foreground">
                  Select the role(s) that would typically handle this type of request. Multiple selections allowed.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Analyst:</strong> Entry-level, execution-focused tasks</li>
                  <li>• <strong>Associate:</strong> More complex analysis and oversight</li>
                  <li>• <strong>VP/ED:</strong> Strategic analysis and client interaction</li>
                  <li>• <strong>MD:</strong> High-level strategic work</li>
                </ul>
              </div>
            </div>

            {/* 4. Coverage Selection */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Which coverage would this prompt pertain to? Select all that apply
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <div className="space-y-3">
                  {["Real Estate", "Tech", "Healthcare", "Industrials", "Consumer / Retail", "Natural Resources"].map((coverage) => (
                    <div key={coverage} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded border border-border bg-background" />
                      <span className="text-foreground text-sm">{coverage}</span>
                    </div>
                  ))}
                </div>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Coverage / Industry</h3>
                <p className="text-muted-foreground">
                  Select the industry sector(s) relevant to your prompt. Choose all that apply.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Match the industry of the data you're using</li>
                  <li>• Consider cross-sector transactions</li>
                  <li>• Helps with task categorization and distribution</li>
                </ul>
              </div>
            </div>

            {/* 5. Product Group */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Which product group would this prompt pertain to? Select all that apply
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <div className="space-y-3">
                  {["M&A", "LevFin", "ECM", "DCM", "FSG", "RX"].map((product) => (
                    <div key={product} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded border border-border bg-background" />
                      <span className="text-foreground text-sm">{product}</span>
                    </div>
                  ))}
                </div>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Product Group</h3>
                <p className="text-muted-foreground">
                  Select the product group(s) this task falls under.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>M&A:</strong> Mergers & Acquisitions</li>
                  <li>• <strong>LevFin:</strong> Leveraged Finance</li>
                  <li>• <strong>ECM:</strong> Equity Capital Markets</li>
                  <li>• <strong>DCM:</strong> Debt Capital Markets</li>
                  <li>• <strong>FSG:</strong> Financial Sponsors Group</li>
                  <li>• <strong>RX:</strong> Restructuring</li>
                </ul>
              </div>
            </div>

            {/* 6. Deal Side */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    What deal side would your prompt be advising for? If M&A should be either sell or buy. If cap markets, should be issuer side. If RX, should be debtor or creditor.
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Sell-side", "Buy-side", "Issuer Side / Capital Raise", "Debtor Side", "Creditor Side"].map((side) => (
                    <span key={side} className="px-4 py-2 rounded-full border border-border bg-background text-foreground text-sm">
                      {side}
                    </span>
                  ))}
                </div>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Deal Side</h3>
                <p className="text-muted-foreground">
                  Select which side of the transaction your prompt addresses.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>M&A:</strong> Choose Sell-side or Buy-side</li>
                  <li>• <strong>Capital Markets:</strong> Choose Issuer Side</li>
                  <li>• <strong>Restructuring:</strong> Choose Debtor or Creditor</li>
                  <li>• Must align with your product group selection</li>
                </ul>
              </div>
            </div>

            {/* 7. Deal Phase */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Please select the deal phase your prompt pertains to.
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <div className="space-y-3">
                  {["Pitch / Origination", "Preparation / Live", "Marketing / Execution", "Signing", "Closing"].map((phase) => (
                    <div key={phase} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded border border-border bg-background" />
                      <span className="text-foreground text-sm">{phase}</span>
                    </div>
                  ))}
                </div>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Deal Phase</h3>
                <p className="text-muted-foreground">
                  Select which phase of the deal lifecycle your prompt addresses.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Pitch / Origination:</strong> Initial client outreach and proposals</li>
                  <li>• <strong>Preparation / Live:</strong> Due diligence and deal structuring</li>
                  <li>• <strong>Marketing / Execution:</strong> Buyer outreach and negotiations</li>
                  <li>• <strong>Signing:</strong> Documentation and agreement finalization</li>
                  <li>• <strong>Closing:</strong> Final closing conditions and integration</li>
                </ul>
              </div>
            </div>

            {/* 8. Task Category */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Which category of task does your prompt fall into?
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    "Category 1 (full LBO, DCF, merger model)",
                    "Category 2 (operating model, sensitivity tables, covenant analysis)",
                    "Category 3 (comps, precedent transactions, valuation ranges)",
                    "Category 4 (pitchbooks, CIMs, presentations, trackers)",
                    "Category 5 (data room management, Q&A tracking, emails)"
                  ].map((category) => (
                    <span key={category} className="px-4 py-2 rounded-full border border-border bg-background text-foreground text-sm">
                      {category}
                    </span>
                  ))}
                </div>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Task Category</h3>
                <p className="text-muted-foreground">
                  Select the complexity category that best matches your task.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Category 1:</strong> Complex financial models (LBO, DCF, merger)</li>
                  <li>• <strong>Category 2:</strong> Analytical models (operating, sensitivity, covenants)</li>
                  <li>• <strong>Category 3:</strong> Valuation work (comps, precedents, ranges)</li>
                  <li>• <strong>Category 4:</strong> Presentation materials (pitchbooks, CIMs)</li>
                  <li>• <strong>Category 5:</strong> Administrative (data room, Q&A, emails)</li>
                </ul>
              </div>
            </div>

            {/* 9. Reference Date */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Please include the reference date. All materials should be from this date or prior.
                    <br />
                    <span className="text-muted-foreground">[Please write 12/22/25]</span>
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <div className="rounded border border-border bg-background p-3 min-h-[40px]" />
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Reference Date</h3>
                <p className="text-muted-foreground">
                  Enter the cut-off date for data and materials used in your task.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use format: MM/DD/YY (e.g., 12/22/25)</li>
                  <li>• All data sources should be from this date or earlier</li>
                  <li>• Ensures consistency with publicly available information</li>
                  <li>• Helps evaluators verify data accuracy</li>
                </ul>
              </div>
            </div>

            {/* 10. Input/Source Files */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Please upload your input/source file link + files below
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <p className="text-muted-foreground text-sm mb-3">Start typing...</p>
                <div className="flex justify-end gap-2 text-muted-foreground">
                  <span className="text-lg">+</span>
                  <span className="text-lg">↑</span>
                </div>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Input/Source Files</h3>
                <p className="text-muted-foreground">
                  Upload source materials and provide Google Drive links.
                </p>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm font-medium text-primary mb-2">⚠️ Requirements:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Convert all files to PDF</strong> before uploading</li>
                    <li>• Include Google Drive link to your inputs folder</li>
                    <li>• No confidential or proprietary data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 11. GPT 5.2 Agent Trajectory */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Please paste your prompt + prompt context and attach your input files into GPT 5.2 Agent mode. Share your trajectory link below.
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <p className="text-muted-foreground text-sm">Start typing...</p>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">GPT 5.2 Agent Trajectory</h3>
                <p className="text-muted-foreground">
                  Run your prompt through GPT 5.2 Agent mode and share the trajectory link.
                </p>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm font-medium text-primary mb-2">How to get the trajectory link:</p>
                  <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                    <li>Paste your prompt + context into GPT 5.2 Agent mode</li>
                    <li>Attach your input files</li>
                    <li>Wait for the Agent run to finish</li>
                    <li>Open the run details</li>
                    <li>Click <strong>Share</strong> (or the link icon)</li>
                    <li>Select <strong>Share trajectory / Copy run link</strong></li>
                    <li>Paste the URL here</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* 12. Agent Model Outputs */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Please download the 5.2 agent model outputs in all formats below.
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <p className="text-muted-foreground text-sm mb-3">Start typing...</p>
                <div className="flex justify-end gap-2 text-muted-foreground">
                  <span className="text-lg">+</span>
                  <span className="text-lg">↑</span>
                </div>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Agent Model Outputs</h3>
                <p className="text-muted-foreground">
                  Download and upload all output files generated by the GPT 5.2 Agent.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Download all files the agent created (Excel, PPT, etc.)</li>
                  <li>• Upload each file in its original format</li>
                  <li>• Include all intermediate outputs if applicable</li>
                </ul>
              </div>
            </div>

            {/* 13. Final Output Link */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Please upload your final output link
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <p className="text-muted-foreground text-sm">Start typing...</p>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Final Output Link</h3>
                <p className="text-muted-foreground">
                  Provide a link to your final output folder in Google Drive.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Link to your Google Drive outputs folder</li>
                  <li>• Ensure folder is shared/accessible</li>
                  <li>• Should contain your ideal deliverable files</li>
                </ul>
              </div>
            </div>

            {/* 14. Final Model PDF */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Please upload your final model PDF. (Convert all excel / ppt files to pdf and share here.) Add your PDF name in the text box.
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <p className="text-muted-foreground text-sm mb-3">Start typing...</p>
                <div className="flex justify-end gap-2 text-muted-foreground">
                  <span className="text-lg">+</span>
                  <span className="text-lg">↑</span>
                </div>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Final Model PDF</h3>
                <p className="text-muted-foreground">
                  Upload a PDF version of your final model/output.
                </p>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm font-medium text-primary mb-2">⚠️ Requirements:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Convert Excel/PPT to PDF</strong> before uploading</li>
                    <li>• Type the PDF filename in the text box</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 15. Step by Step Guidance */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Please provide the step by step guidance for solving the prompt (in the format provided in the instructions)
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <p className="text-muted-foreground text-sm">Start typing...</p>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Step-by-Step Guidance</h3>
                <p className="text-muted-foreground">
                  Provide clear, numbered steps for solving the prompt.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Follow the format in the instructions</li>
                  <li>• Each step should be specific and actionable</li>
                  <li>• Include which tools are used at each step</li>
                  <li>• Steps should lead to the ideal deliverable</li>
                </ul>
              </div>
            </div>

            {/* 16. Final Output Description */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Please describe the final output. Include a summary of what you see in the final output you are delivering.
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <p className="text-muted-foreground text-sm">Start typing...</p>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Final Output Description</h3>
                <p className="text-muted-foreground">
                  Summarize what's included in your final deliverable.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Describe the structure and contents</li>
                  <li>• List key components (tabs, slides, sections)</li>
                  <li>• Highlight important calculations or analyses</li>
                </ul>
              </div>
            </div>

            {/* 17. Deal-Breaking Errors */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    What would be some big, deal-breaking errors an analyst could make here? (Example: Using an unsupported leverage of 9x when market comps are 4.5x). Please refer to instruction guidance.
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <p className="text-muted-foreground text-sm">Start typing...</p>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Deal-Breaking Errors</h3>
                <p className="text-muted-foreground">
                  Identify critical mistakes that would invalidate the work.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Calculation errors (wrong formulas, bad inputs)</li>
                  <li>• Unrealistic assumptions (leverage, multiples)</li>
                  <li>• Missing critical components</li>
                  <li>• Factual inaccuracies in data</li>
                </ul>
              </div>
            </div>

            {/* 18. Time Estimate */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Assuming you are a second year IB analyst, how long would your prompt task request take you to complete? (Ask is only in the interest of the research paper and will not be used to measure the time of this prompt).
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <div className="rounded border border-border bg-background p-3 min-h-[40px]" />
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Time Estimate</h3>
                <p className="text-muted-foreground">
                  Estimate how long a 2nd year analyst would take.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Should be 45-90 minutes typically</li>
                  <li>• For research purposes only</li>
                  <li>• Be realistic based on task complexity</li>
                </ul>
              </div>
            </div>

            {/* 19. Tools Used for Inputs */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Please select the tools used for inputs.
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <div className="space-y-3">
                  {["Excel", "PDF", "PPT", "Outlook / Email", "Web Search", "Word Doc"].map((tool) => (
                    <div key={tool} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded border border-border bg-background" />
                      <span className="text-foreground text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Tools for Inputs</h3>
                <p className="text-muted-foreground">
                  Select all tools/formats used for input data.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Check all that apply to your task</li>
                  <li>• Include data sources and references</li>
                </ul>
              </div>
            </div>

            {/* 20. Tools Used for Outputs */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    Please select the tools used for outputs.
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <div className="space-y-3">
                  {["Excel", "PDF", "PPT", "Outlook / Email", "Word Doc"].map((tool) => (
                    <div key={tool} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded border border-border bg-background" />
                      <span className="text-foreground text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Tools for Outputs</h3>
                <p className="text-muted-foreground">
                  Select all tools/formats used for your deliverable.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Check all that apply to your output</li>
                  <li>• Should match your ideal deliverable format</li>
                </ul>
              </div>
            </div>

            {/* 21. Continue to Rubric */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard>
                <div className="flex items-start justify-between mb-4">
                  <p className="text-foreground font-medium text-sm">
                    When you've completed your rubric, select "Continue" to submit your rubric and continue. You can edit the rubric later.
                  </p>
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                </div>
                <div className="flex justify-end">
                  <span className="px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium">
                    Continue
                  </span>
                </div>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Generate Rubric</h3>
                <p className="text-muted-foreground">
                  Click Continue to auto-generate the initial rubric based on your inputs.
                </p>
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                  <p className="text-sm font-medium text-destructive mb-1">⚠️ Important:</p>
                  <p className="text-sm text-muted-foreground">
                    The rubric will be <strong>synthetically populated</strong> but <strong>must be edited</strong>. The auto-generated criteria are a starting point — you are required to review and refine each item.
                  </p>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• The system will generate rubric criteria</li>
                  <li>• You <strong>must</strong> review and edit in the next step</li>
                  <li>• Don't worry — you can refine it later</li>
                </ul>
              </div>
            </div>

            {/* 22. Rubric Item Structure */}
            <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-muted/30 border border-border">
              <GradientBorderCard className="space-y-4">
                <div>
                  <p className="text-foreground font-semibold text-sm mb-2">Rubric</p>
                  <p className="text-muted-foreground text-xs">Draft saved 30 seconds ago</p>
                </div>
                <div className="border border-border rounded-lg p-4 space-y-4">
                  <p className="text-foreground font-medium text-sm">1. Rubric item</p>
                  
                  <div>
                    <p className="text-foreground text-sm font-medium mb-2">Criterion</p>
                    <div className="rounded border border-border bg-muted/50 p-2 text-sm text-muted-foreground">
                      The response acknowledges that the prompt...
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-foreground text-sm font-medium mb-2">Weight</p>
                    <div className="flex flex-wrap gap-2">
                      {["1", "3", "5", "10"].map((w, i) => (
                        <span key={w} className={`px-3 py-1 rounded border text-sm ${i === 3 ? 'bg-muted border-foreground font-medium' : 'border-border'}`}>
                          {i === 3 && "✓ "}{w}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-foreground text-sm font-medium mb-2">Category</p>
                    <div className="flex flex-wrap gap-2">
                      {["Instruction Following", "Client Readiness & Presentation", "Technical Correctness", "Transparency & Auditability", "Internal Consistency", "Risk & Compliance"].map((cat, i) => (
                        <span key={cat} className={`px-3 py-1 rounded-full border text-xs ${i === 0 ? 'bg-muted border-foreground font-medium' : 'border-border'}`}>
                          {i === 0 && "✓ "}{cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GradientBorderCard>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Rubric Item Structure</h3>
                <p className="text-muted-foreground">
                  Each rubric item has three components you must configure.
                </p>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-muted/50 border border-border">
                    <p className="font-medium text-foreground text-sm">Criterion</p>
                    <p className="text-muted-foreground text-xs">The specific requirement being evaluated. Must be self-contained and atomic.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border border-border">
                    <p className="font-medium text-foreground text-sm">Weight (1, 3, 5, 10)</p>
                    <p className="text-muted-foreground text-xs">Importance level. 10 = critical, 1 = minor detail.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border border-border">
                    <p className="font-medium text-foreground text-sm">Category</p>
                    <p className="text-muted-foreground text-xs">Classification: Instruction Following, Client Readiness, Technical Correctness, Transparency, Internal Consistency, or Risk & Compliance.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Common Issues Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </span>
              Troubleshooting Common Issues
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">Model fails to generate / Synthetic rubric fails to populate</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Navigate to the <strong>Final Output Summary</strong> and slightly modify the text, then rerun the synthetic rubric generation.
                </p>
                <p className="text-muted-foreground text-sm">
                  If the issue persists after multiple attempts, reach out to a project team member.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">Progress not saved when reopening a task</h3>
                <p className="text-muted-foreground text-sm">
                  Make sure to <strong>save your progress</strong> when exiting a task and <strong>submit/finish a block</strong> before exiting. If you follow this process and reopen the task, it will be populated with your previous work.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-destructive/30 bg-destructive/5">
                <h3 className="font-semibold text-foreground mb-2">Any other issues?</h3>
                <p className="text-muted-foreground text-sm">
                  Reach out to a project team member over <strong>Slack</strong> or <strong>email</strong> for assistance.
                </p>
              </div>
            </div>
          </div>

          <PageNavigation />

        </div>
      </div>
    </Layout>
  );
};

export default TaskWalkthrough;
