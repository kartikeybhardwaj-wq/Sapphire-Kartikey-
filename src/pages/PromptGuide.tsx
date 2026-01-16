import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { InfoBox } from "@/components/InfoBox";
import { StepCard } from "@/components/StepCard";
import { PageNavigation } from "@/components/PageNavigation";
import { ChapterSection } from "@/components/ChapterSection";
import { PageNavigationMenu } from "@/components/PageNavigationMenu";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ArrowRight, FlaskConical, PenLine, FileText, AlertTriangle, ListChecks, ShieldAlert, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PromptGuide = () => {
  const navigationItems = [
    { id: "step-1", label: "Choose a Dataset" },
    { id: "step-2", label: "Write a Prompt" },
    { id: "step-3", label: "Dealbreaker Review" },
    { id: "step-4", label: "Test Your Prompt" },
    { id: "example-prompts-section", label: "Example Prompts" },
  ];
  const scrollToExamples = () => {
    const element = document.getElementById("example-prompts-section");
    if (element) {
      const offset = 140; // Account for header + some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      
      // Add highlight effect
      element.classList.add("highlight-section");
      setTimeout(() => {
        element.classList.remove("highlight-section");
      }, 2000);
    }
  };

  return (
    <Layout>
      <PageHeader 
        icon={PenLine} 
        title="Prompt Guide" 
        description="Prompts define the realism and quality of the entire task. A strong prompt ensures the work produced reflects real investment banking workflows." 
      />

      <div className="flex gap-0 w-full">
        <PageNavigationMenu items={navigationItems} />
        
        <div className="container mx-auto px-4 py-8 pt-4 flex-1 min-w-0">
        {/* Gold Example Prompts Button */}
        <div className="max-w-3xl mx-auto mb-10">
          <Button
            onClick={scrollToExamples}
            className="w-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-600 text-foreground font-semibold text-base py-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-600/30 hover-lift"
            size="lg"
          >
            <Sparkles className="h-5 w-5 mr-2" />
            Example Prompts
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {/* Purpose */}
          <ContentCard id="purpose-section" className="border-2 border-primary/30">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">Purpose</h2>
            <p className="text-muted-foreground mb-4">
              Prompts define the realism and quality of the entire task. A strong prompt ensures the work produced reflects real investment banking workflows, requires meaningful analyst effort, and can be evaluated consistently using a banker-grade rubric.
            </p>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="font-medium text-foreground">
                <strong>Core test:</strong> If you gave this prompt to 50 bankers, they should be able to execute it without needing additional clarification and produce broadly comparable outputs.
              </p>
            </div>
          </ContentCard>

          {/* Steps */}
          <div className="space-y-0">
            <div id="step-1">
              <StepCard step={1} title="Choose a Dataset">
                <div className="space-y-4">
                {/* Folder Structure Instructions */}
                <div className="p-4 rounded-lg bg-primary/5 border-2 border-primary/30">
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    Task Folder Setup
                  </h4>
                  <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-3">
                    <li>
                      <span className="font-medium text-foreground">Find your folder</span> in the{" "}
                      <a 
                        href="https://drive.google.com/drive/folders/1OuzKueSlLa-JsMLGM8Rw68DmtUT1qYH0?usp=drive_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        Fellow Folders <ArrowRight className="h-3 w-3" />
                      </a>
                      {" "}(each person has a folder with their name)
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Create a task folder</span> — name it with your <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">task_id</code>
                    </li>
                    <li>
                      <span className="font-medium text-foreground">Create 3 subfolders</span> inside your task folder:
                    </li>
                  </ol>
                  
                  <div className="mt-3 ml-6 grid gap-2">
                    <div className="flex items-center gap-3 p-2 rounded bg-background border border-border">
                      <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Input/</span>
                      <span className="text-sm text-muted-foreground">Upload input files you'll reference in your prompt</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded bg-background border border-border">
                      <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Ideal Deliverable/</span>
                      <span className="text-sm text-muted-foreground">Your completed output files (the "gold standard" answer)</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded bg-background border border-border">
                      <span className="font-mono text-xs bg-muted px-2 py-1 rounded">Model Output/</span>
                      <span className="text-sm text-muted-foreground">What GPT 5.2A outputs when you test your prompt</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="font-medium text-foreground mb-2">Option 1 (Recommended)</h4>
                  <p className="text-muted-foreground">
                    Review the Fellow Data Room to choose the companies for a hypothetical task you'll create.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="font-medium text-foreground mb-2">Option 2</h4>
                  <p className="text-muted-foreground mb-2">
                    Bring any dataset that meets the requirements below:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    <li>Any public filings or documents</li>
                    <li>Upload them to your <code className="px-1 py-0.5 rounded bg-muted text-xs font-mono">Input/</code> folder</li>
                    <li>Do not use MNPI or any private/confidential materials from your firm</li>
                  </ul>
                </div>
                </div>
              </StepCard>
            </div>

            <div id="step-2">
              <StepCard step={2} title="Write a Prompt">
                <div className="space-y-6">
                {/* Prompt Requirements Card */}
                <ContentCard className="border-2 border-primary/30">
                  <h4 className="font-serif text-lg font-bold text-foreground mb-4">Prompt Requirements (Must Follow)</h4>
                  <p className="text-muted-foreground mb-6">
                    Your prompt will be used to benchmark an LLM's ability to produce client-ready investment banking deliverables. Write the prompt so that a typical investment banking analyst would have no ambiguity about what to produce and how to evaluate it.
                  </p>
                  
                  <div className="space-y-4">
                    {/* WHO */}
                    <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Company / Deal Anchor (Who)</p>
                        <p className="text-sm text-muted-foreground">The prompt must be anchored to a specific company, transaction, or clearly defined situation. If the workflow is company-specific, you must name the company (or provide a fully specified anonymized profile).</p>
                      </div>
                    </div>

                    {/* WHY */}
                    <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Purpose and Audience (Why)</p>
                        <p className="text-sm text-muted-foreground mb-2">State what the deliverable is for and who it is for (e.g., VP/MD review, client meeting, investment committee, potential investors).</p>
                        <p className="text-sm text-muted-foreground">Include any relevant preferences or standards that affect the output (e.g., "your MD prefers concise slides," "use our bank's formatting conventions").</p>
                      </div>
                    </div>

                    {/* WHAT */}
                    <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Deliverable Clarity (What)</p>
                        <p className="text-sm text-muted-foreground mb-2">Your prompt must make the intended deliverable(s) unambiguous to a typical investment banking analyst.</p>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                          <li>If the deliverable would not be 100% obvious from the context, explicitly specify the deliverable(s) and format(s) (e.g., Excel model, PowerPoint deck, Word memo)</li>
                          <li>If multiple deliverables are needed, explicitly list each one</li>
                        </ul>
                      </div>
                    </div>

                    {/* WHEN */}
                    <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                        <span className="text-sm font-bold">4</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Time Context (When)</p>
                        <p className="text-sm text-muted-foreground mb-2">Include an explicit reference date (e.g., "Assume today is December 12, 2025").</p>
                        <p className="text-sm text-muted-foreground">If relevant, specify the as-of period(s) for financials or inputs (e.g., FY2024A, LTM Sep 2025).</p>
                      </div>
                    </div>

                    {/* Backups */}
                    <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                        <span className="text-sm font-bold">5</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Assume Backups Are Always Required (Hard Requirement)</p>
                        <p className="text-sm text-muted-foreground mb-2">Regardless of the primary deliverable, the ideal final output must always include backup/supporting files that show the underlying work and allow auditability.</p>
                        <p className="text-sm text-muted-foreground mb-2"><strong>Example:</strong> If the primary deliverable is a PowerPoint slide with a table, the ideal output must also include an Excel backup containing the underlying calculations, inputs, and assumptions.</p>
                        <p className="text-sm text-muted-foreground">Backup files must be sufficient for a reviewer to trace key numbers, verify assumptions, and recreate outputs without redoing the analysis from scratch.</p>
                      </div>
                    </div>

                  {/* Banker Bible */}
                    <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                        <span className="text-sm font-bold">6</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Banker Bible Alignment</p>
                        <p className="text-sm text-muted-foreground mb-2">The deliverable must follow Banker Bible standards for structure, formatting, labeling, assumptions hygiene, and professionalism.</p>
                        <p className="text-sm text-muted-foreground">If you believe a deviation is justified, explicitly flag it in the prompt context.</p>
                        <Link to="/rubrics/banker-bible" className="inline-flex items-center gap-1 mt-2 text-sm text-primary hover:underline">
                          View full Banker Bible requirements →
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-lg bg-background border-2 border-primary/30">
                    <p className="font-medium text-foreground mb-2">
                      <strong>Default assumption:</strong> The Banker Bible is correct unless you specifically override this in the prompt context.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      This means every rubric must account for Banker Bible formatting requirements (color coding, integrity checks, no errors, etc.) unless explicitly overridden.
                    </p>
                  </div>
                </ContentCard>

                {/* Disqualifying Issues */}
                <ContentCard className="border-2 border-destructive/50">
                  <h4 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5 text-destructive" />
                    Disqualifying Prompt Issues (May Be Rejected)
                  </h4>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-start">
                      <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Missing company / transaction anchor (where one is required)</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Bank-centric workflow</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">No reference date</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Unclear source of truth for inputs (encourages hallucination)</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Deliverable is ambiguous when it wouldn't be obvious to an IB analyst</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">No backup/supporting files requirement</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Instructions conflict with Banker Bible without an explicit flagged deviation</span>
                    </div>
                  </div>
                </ContentCard>

                {/* Recommended Prompt Structure */}
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Recommended Prompt Structure
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">Strong prompts typically include:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Objective</strong> (what is being requested and why)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Detailed task instructions</strong> (calculations, structure, assumptions)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Explicit deliverables</strong> (file types and outputs)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Formatting and style expectations</strong></span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Constraints and validation requirements</strong></span>
                    </li>
                  </ul>
                </div>

                {/* Prompt vs Prompt Context */}
                <ContentCard className="border-2 border-primary/30">
                  <h4 className="font-serif text-lg font-bold text-foreground mb-4">Prompt vs. Prompt Context</h4>
                  <p className="text-muted-foreground mb-6">
                    Understanding the difference between the <strong>Prompt</strong> and <strong>Prompt Context</strong> is essential for creating high-quality tasks.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {/* Prompt Column */}
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <PenLine className="h-4 w-4 text-primary" />
                        Prompt
                      </h5>
                      <p className="text-sm text-muted-foreground mb-3">
                        The <strong>core task</strong> — what you are asking the model to do.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>The objective and deliverables</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Specific calculations, assumptions, and logic</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Step-by-step instructions for the task</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Constraints and validation requirements</span>
                        </li>
                      </ul>
                    </div>

                    {/* Context Column */}
                    <div className="p-4 rounded-lg bg-muted/50 border border-border">
                      <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        Prompt Context
                      </h5>
                      <p className="text-sm text-muted-foreground mb-3">
                        The <strong>environment and standards</strong> — how the work should be presented.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Formatting and style guidelines (colors, fonts, shading)</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Bank or firm-specific conventions</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Role and situational background</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Tool-specific standards (Excel, PowerPoint)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Example Context */}
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <p className="text-sm font-semibold text-foreground mb-2">Example Prompt Context:</p>
                    <p className="text-sm text-muted-foreground italic">
                      "XYZ Bank formatting avoids gridlines, bolds headers and key rows, uses blue shading for highlights, yellow input cells, blue font for hardcoded values, green font for linked values, and black font for calculated values. Use auditable formulas and avoid excessive calculations in a single cell."
                    </p>
                  </div>

                  <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="font-semibold text-foreground mb-3">Key Distinction</p>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Prompt Context</strong> should include the background knowledge any banker would inherently think about when solving the problem — things like formatting conventions, firm standards, and typical workflow assumptions.</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>The Prompt</strong> should explicitly state any assumptions that are <em>not</em> inherently obvious — specific numerical inputs, deal-specific parameters, or unique constraints that a banker wouldn't automatically know.</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3">
                      Both are submitted together, but separating them conceptually ensures nothing is missed.
                    </p>
                  </div>
                </ContentCard>
              </div>
            </StepCard>
            </div>
          </div>

          {/* Major / Minor Errors for Prompt */}
          <ContentCard id="major-minor-errors" className="border-2 border-primary/30">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Major vs. Minor Prompt Errors
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Major Prompt Errors */}
              <div className="rounded-xl border-2 border-destructive bg-destructive/5 p-4">
                <h4 className="font-bold text-destructive text-sm mb-3">Major Prompt Errors</h4>
                <p className="text-xs text-muted-foreground mb-3 italic">Fundamentally broken — cannot be used</p>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">Pass rate issues</p>
                    <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                      <li>Prompt produces {">"}50% pass rate on claude-sonnet-4-20250514</li>
                      <li>Task is impossible to complete as specified</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">Missing critical constraints</p>
                    <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                      <li>No specification of required valuation approach</li>
                      <li>Missing required sections or deliverable components</li>
                      <li>No comparable company selection criteria when needed</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">Ambiguous scope</p>
                    <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                      <li>Unclear boundaries allowing models to skip workflow steps</li>
                      <li>Missing essential context practitioners would always have</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">Conflicting instructions</p>
                    <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                      <li>Contradictory requirements making task impossible</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Minor Prompt Errors */}
              <div className="rounded-xl border-2 border-yellow-500 bg-yellow-500/5 p-4">
                <h4 className="font-bold text-yellow-600 text-sm mb-3">Minor Prompt Errors (3-1 points)</h4>
                <p className="text-xs text-muted-foreground mb-3 italic">Needs improvement but usable</p>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">Verbosity issues</p>
                    <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                      <li>Slightly verbose but doesn't impact model performance</li>
                      <li>Could be more concise but intent is clear</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">Organizational issues</p>
                    <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                      <li>Ordering could be more logical but doesn't confuse</li>
                      <li>Structure could be improved but models understand</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">Missing nice-to-haves</p>
                    <ul className="text-xs text-muted-foreground space-y-0.5 list-disc list-inside">
                      <li>Missing preferred formatting styles</li>
                      <li>Could add more examples but still understandable</li>
                      <li>Missing non-essential details</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ContentCard>

          {/* Final Prompt Check */}
          <ContentCard id="final-prompt-check" className="border-2 border-chart-1/30">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-chart-1" />
              Final Prompt Check
            </h2>
            <p className="text-muted-foreground mb-4">Before submitting a prompt, confirm:</p>
            
            <div className="space-y-3">
              <div className="flex gap-3 items-center p-3 rounded-lg bg-muted/50 border border-border">
                <CheckCircle className="h-5 w-5 text-chart-1 flex-shrink-0" />
                <span className="text-foreground">The task is clear and self-contained</span>
              </div>
              <div className="flex gap-3 items-center p-3 rounded-lg bg-muted/50 border border-border">
                <CheckCircle className="h-5 w-5 text-chart-1 flex-shrink-0" />
                <span className="text-foreground">The workflow is representative of real banking work</span>
              </div>
              <div className="flex gap-3 items-center p-3 rounded-lg bg-muted/50 border border-border">
                <CheckCircle className="h-5 w-5 text-chart-1 flex-shrink-0" />
                <span className="text-foreground">Completion would reasonably take more than one hour</span>
              </div>
              <div className="flex gap-3 items-center p-3 rounded-lg bg-muted/50 border border-border">
                <CheckCircle className="h-5 w-5 text-chart-1 flex-shrink-0" />
                <span className="text-foreground">Deliverables are explicit and realistic</span>
              </div>
              <div className="flex gap-3 items-center p-3 rounded-lg bg-muted/50 border border-border">
                <CheckCircle className="h-5 w-5 text-chart-1 flex-shrink-0" />
                <span className="text-foreground">The prompt supports rigorous rubric-based evaluation</span>
              </div>
            </div>
            
            <InfoBox type="warning" className="mt-4">
              If any of these are missing, revise the prompt before use.
            </InfoBox>
          </ContentCard>

          {/* Dealbreaker Review */}
          <div className="space-y-0">
            <div id="step-3">
              <StepCard step={3} title="Complete the Dealbreaker Review">
                <div className="space-y-6">
                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldAlert className="h-5 w-5 text-destructive" />
                    <h4 className="font-semibold text-foreground">Required After Writing Your Prompt</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The Dealbreaker Review identifies egregious errors that, if made while executing the task, would be unacceptable on a live deal and trigger immediate escalation, rework, or loss of credibility.
                  </p>
                </div>

                <ContentCard>
                  <h4 className="font-serif text-lg font-bold text-foreground mb-4">Purpose</h4>
                  <p className="text-muted-foreground mb-4">The Dealbreaker Review ensures that:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>The prompt reflects real consequences of poor execution</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>The task has clear "red lines" consistent with live banking work</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Evaluation is grounded in banker judgment, not just checklist scoring</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-sm text-foreground">
                      <strong>Guiding question:</strong> <em>If this mistake happened on a live deal, would it seriously damage credibility, delay the process, or risk losing the mandate?</em>
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">If yes, it belongs in the Dealbreaker Review.</p>
                  </div>
                </ContentCard>

                <ContentCard>
                  <h4 className="font-serif text-lg font-bold text-foreground mb-4">What to Include</h4>
                  <p className="text-muted-foreground mb-4">List at least <strong>5 dealbreaker areas</strong> as short, clear statements. Each should:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Describe a specific failure mode</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Be framed in banker terms (not model or system language)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Reflect mistakes that are material, not cosmetic</span>
                    </li>
                  </ul>
                  <InfoBox type="warning">
                    Do not assign weights or turn dealbreakers into rubric criteria. They are separate.
                  </InfoBox>
                </ContentCard>

                <ContentCard className="border border-primary/20">
                  <h4 className="font-serif text-lg font-bold text-foreground mb-4">Common Dealbreaker Categories</h4>
                  <p className="text-sm text-muted-foreground mb-4 italic">You don't need all of these, but most tasks will touch several.</p>
                  
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-muted/50 border border-border">
                      <p className="font-semibold text-foreground text-sm mb-1">1. Material Financial Logic or Definition Errors</p>
                      <p className="text-xs text-muted-foreground">Incorrect EV/equity definitions, misapplied exit multiples, mixing time periods (LTM vs NTM)</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50 border border-border">
                      <p className="font-semibold text-foreground text-sm mb-1">2. Fabricated or Unsupported Numbers</p>
                      <p className="text-xs text-muted-foreground">Inventing inputs not in data, outputs that don't tie to calculations</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50 border border-border">
                      <p className="font-semibold text-foreground text-sm mb-1">3. Ignoring Explicit Instructions</p>
                      <p className="text-xs text-muted-foreground">Wrong peer set, missing required sensitivities, ignoring VP-specified methodology</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50 border border-border">
                      <p className="font-semibold text-foreground text-sm mb-1">4. Unusable or Broken Deliverables</p>
                      <p className="text-xs text-muted-foreground">Missing files, unauditable models, mislabeled or uninterpretable tables</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50 border border-border">
                      <p className="font-semibold text-foreground text-sm mb-1">5. Internal Inconsistency and Lack of Tie-Outs</p>
                      <p className="text-xs text-muted-foreground">Totals that don't foot, inconsistent units, conflicting outputs across tabs</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50 border border-border">
                      <p className="font-semibold text-foreground text-sm mb-1">6. Tool Misuse That Undermines Credibility</p>
                      <p className="text-xs text-muted-foreground">Hardcoding instead of formulas, wrong tool for the task, breaking realistic workflows</p>
                    </div>
                  </div>
                </ContentCard>

                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="font-medium text-foreground mb-3">Example Dealbreaker Statements</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground italic">
                    <li>"Incorrectly defines Enterprise Value in a way that materially affects valuation conclusions."</li>
                    <li>"Produces outputs that cannot be traced back to inputs or formulas."</li>
                    <li>"Ignores explicit VP instructions regarding capital structure or sensitivity requirements."</li>
                  </ul>
                </div>

                <InfoBox type="success">
                  <strong>Quality check:</strong> A strong Dealbreaker Review lists at least 5 items, focuses on material failures (not stylistic preferences), and reflects real banking escalation triggers.
                </InfoBox>
                </div>
              </StepCard>
            </div>
          </div>

          {/* Test Your Prompt */}
          <div className="space-y-0">
            <div id="step-4">
              <StepCard step={4} title="Test Your Prompt in GPT 5.2A">
                <div className="space-y-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <FlaskConical className="h-5 w-5 text-primary" />
                    <h4 className="font-medium text-foreground">Verify You Stumped the Model</h4>
                  </div>
                  <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
                    <li>Take your prompt and navigate to ChatGPT (make sure you are logged in and using 5.2 Pro – you should have been given access by us!)</li>
                    <li>Paste your prompt and upload any input deliverables that are required</li>
                    <li>View the model response and ensure the model is stumped</li>
                    <li>Download the model output deliverable and trajectory and paste it back into the platform</li>
                  </ol>
                </div>
                
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="font-medium text-foreground mb-2">What does "stumped" mean?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    A model is considered stumped when it makes <strong>at least one dealbreaker error</strong> or other egregious mistakes in its output.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Compare the model's output against your Dealbreaker Review — if the model avoids all dealbreakers and produces a near-perfect deliverable, your prompt is not challenging enough and needs more complexity.
                  </p>
                  
                  {/* Model Output Quality Rating Table */}
                  <div className="mt-4 border border-border rounded-lg overflow-hidden">
                    <div className="bg-primary/10 px-4 py-2 border-b border-border">
                      <h5 className="font-semibold text-foreground text-sm">How bad is my model output?</h5>
                    </div>
                    <div className="divide-y divide-border">
                      <div className="p-3 bg-chart-1/10">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-chart-1">1</span>
                          <span className="font-medium text-foreground text-sm">Good / Acceptable</span>
                          <span className="text-xs bg-chart-1/20 text-chart-1 px-2 py-0.5 rounded-full">Not bad enough</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Mostly correct, complete, and usable. Minor issues only (small omissions, slight style mismatch, tiny factual slip). A reasonable user could still rely on it with minimal edits.</p>
                      </div>
                      <div className="p-3 bg-chart-2/10">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-chart-2">2</span>
                          <span className="font-medium text-foreground text-sm">Slightly bad</span>
                          <span className="text-xs bg-chart-2/20 text-chart-2 px-2 py-0.5 rounded-full">Still not bad enough</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Some noticeable problems, but the core deliverable is still usable. Errors are limited in scope (a few incorrect statements, some missing pieces, mild confusion). With light-to-moderate editing, it becomes acceptable.</p>
                      </div>
                      <div className="p-3 bg-chart-3/10">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-chart-3">3</span>
                          <span className="font-medium text-foreground text-sm">Bad</span>
                          <span className="text-xs bg-chart-3/20 text-chart-3 px-2 py-0.5 rounded-full">Borderline</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Clear failures that would cause real user pain. Either (a) important omissions, (b) multiple errors, or (c) confusing structure that makes it hard to use. A careful user could salvage it, but it takes meaningful rework. This is the "borderline" score: sometimes acceptable for "sufficiently bad," sometimes not, depending on task stakes.</p>
                      </div>
                      <div className="p-3 bg-destructive/10">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-destructive">4</span>
                          <span className="font-medium text-foreground text-sm">Very bad</span>
                          <span className="text-xs bg-destructive/20 text-destructive px-2 py-0.5 rounded-full">Sufficiently bad</span>
                        </div>
                        <p className="text-xs text-muted-foreground">The deliverable fails the task in a major way. Key requirements are missing, incorrect, or contradicted. It would mislead users, break if executed, or be unusable without substantial rewrite. This should generally qualify as "sufficiently bad."</p>
                      </div>
                      <div className="p-3 bg-destructive/10">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-destructive">5</span>
                          <span className="font-medium text-foreground text-sm">Catastrophically bad</span>
                          <span className="text-xs bg-destructive/20 text-destructive px-2 py-0.5 rounded-full">Definitely sufficiently bad</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Fundamentally wrong, unsafe, or nonsensical. Hallucinated requirements, invented facts, or output that directly conflicts with the prompt. Could cause serious negative outcomes if followed. Cannot be salvaged without starting over.</p>
                      </div>
                    </div>
                    <div className="bg-primary/5 px-4 py-2 border-t border-border">
                      <p className="text-xs text-muted-foreground"><strong>Target:</strong> Your prompt should produce model output rated <strong>4 or 5</strong> to be considered sufficiently challenging.</p>
                    </div>
                  </div>
                </div>
              </div>
            </StepCard>
            </div>
          </div>

          {/* Is your prompt not complex enough? */}
          <ContentCard className="mt-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Is your prompt not complex enough?</h3>
            <p className="text-muted-foreground mb-6">
              If the model is performing too well on your prompt, use these levers to increase difficulty:
            </p>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[180px]">Difficulty Lever</TableHead>
                    <TableHead className="min-w-[200px]">What to Change</TableHead>
                    <TableHead className="min-w-[150px]">What it Stresses</TableHead>
                    <TableHead className="min-w-[250px]">Example of How to Apply</TableHead>
                    <TableHead className="min-w-[220px]">Failure Modes it Surfaces</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Increase input volume</TableCell>
                    <TableCell>Add more input files / exhibits</TableCell>
                    <TableCell>Retrieval, synthesis, consistency</TableCell>
                    <TableCell>Add 10-K + earnings deck + data room summary + debt schedule</TableCell>
                    <TableCell>Missed key data, contradictions, hallucinated numbers</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Increase input heterogeneity</TableCell>
                    <TableCell>Mix formats (PDF tables, slides, text memos)</TableCell>
                    <TableCell>Parsing + cross-doc joining</TableCell>
                    <TableCell>Include PDF financials + PPT KPIs + covenant memo</TableCell>
                    <TableCell>Misread tables, wrong units, dropped context</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Add temporal complexity</TableCell>
                    <TableCell>Multiple periods, LTM, partial-year, pro forma</TableCell>
                    <TableCell>Time-series alignment</TableCell>
                    <TableCell>"FY23A–FY25E + LTM Sep 2025; bridge to LTM"</TableCell>
                    <TableCell>Period misalignment, double counting</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Add multi-scenario requirements</TableCell>
                    <TableCell>Base/upside/downside with toggles</TableCell>
                    <TableCell>Scenario modeling discipline</TableCell>
                    <TableCell>3-case model + outputs + sensitivity tables</TableCell>
                    <TableCell>Hardcoding, broken toggles, inconsistent outputs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Increase model integration</TableCell>
                    <TableCell>Require full 3-statement or S&U integration</TableCell>
                    <TableCell>Accounting logic + integrity</TableCell>
                    <TableCell>"Build integrated 3-statement + sources/uses + debt schedule"</TableCell>
                    <TableCell>Doesn't balance, circularity mishandled</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Increase capital structure complexity</TableCell>
                    <TableCell>Multiple tranches, PIK, revolver, covenants</TableCell>
                    <TableCell>Financing logic</TableCell>
                    <TableCell>Term loan + notes + revolver + PIK toggle</TableCell>
                    <TableCell>Mis-modeled interest, wrong debt waterfall</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Add deliverable packaging</TableCell>
                    <TableCell>Excel + PPT + appendix/book assembly</TableCell>
                    <TableCell>End-to-end workflow</TableCell>
                    <TableCell>"Model + 1-slide summary + PDF appendix"</TableCell>
                    <TableCell>Missing backups, broken links, poor sources</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Increase stakeholder preferences</TableCell>
                    <TableCell>Add specific constraints or formatting rules</TableCell>
                    <TableCell>Instruction-following</TableCell>
                    <TableCell>"MD wants 1 slide per message, headline = conclusion"</TableCell>
                    <TableCell>Ignored instructions, wrong format, missing requirements</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <InfoBox type="info" className="mt-6">
              <p className="text-sm">
                <strong>How to use this table:</strong> To make a prompt <strong>moderately difficult</strong>, apply 2–3 levers. 
                To make it <strong>hard</strong>, apply 4–6 levers, but keep inputs sufficient so it's solvable.
              </p>
            </InfoBox>
          </ContentCard>

          {/* Example Prompts Section - Moved to End */}
          <ChapterSection id="example-prompts-section" chapter={5} title="Example Prompts">
            <ContentCard 
              className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background transition-all duration-500"
            >
            {/* Example 1 */}
            <div className="mb-6 p-5 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="font-semibold text-lg text-foreground mb-4">LBO Sensitivity Expansion</h4>
              
              <details className="group mb-4">
                <summary className="cursor-pointer text-sm font-medium text-primary hover:text-primary/80">View full prompt</summary>
                <div className="mt-3 p-4 rounded-lg bg-background border border-border text-sm text-muted-foreground space-y-3">
                  <p>I'm an investment banking analyst in the Consumer & Retail group at XYZ Bank, and I built a simple first-pass LBO model for ELF based on a request from my VP. After discussing the model, my VP now wants to see a clean sensitivity analysis on sponsor returns.</p>
                  <p>I want to include sensitivity tables (5x5 cells) for:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Buyout Premium % vs. Exit Multiple (center around 20% premium in 2.5% steps, and 30x multiple in 2x steps)</li>
                    <li>Buyout Premium % vs. Revenue Growth % (same premium input as above, center around 25% revenue growth in 2.5% steps)</li>
                    <li>Total Leverage (% of Total Uses) vs. Exit Multiple (center around 50% total leverage in 10% steps, same multiple steps as above)</li>
                    <li>Debt % of Total Leverage vs. Exit Multiple (center around 50% debt in 10% steps, and 30x multiple in 2x steps)</li>
                  </ul>
                  <p>Each sensitivity table should output 5-year MOIC and IRR together (format the corner cell and number format accordingly). For the first three tables, hold the other base assumptions from the LBO model constant and footnote the assumptions that are not being sensitized below each table. For the last table, hold total leverage at 50% of total uses and keep the other assumptions constant.</p>
                  <p>You will need to adjust how the model inputs total leverage and the debt/PIK split to support these sensitivities. Place the tables below the LBO model and offset them to the right. Format the tables with clear labels, highlight the center output (which should tie across all tables to the base-case 5-year return), and add the Sensitivity Analysis section to the print area as a new page.</p>
                  <p>Create a single PowerPoint slide where you paste the four sensitivity tables in a 4x4 layout as pictures, and include a tagline and footnotes. Provide the updated Excel LBO model and the PowerPoint slide.</p>
                  <p>XYZ Bank formatting avoids Excel gridlines, bolds key headers and summary rows, and uses standard blue shading for highlights. PowerPoint uses a blue color palette with black font for body text.</p>
                </div>
              </details>
              
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-sm font-semibold text-foreground mb-3">Why this prompt works:</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Low ambiguity:</strong> Specifies exact sensitivity tables, cell dimensions, center values, and step sizes</li>
                  <li>• <strong>1+ hour workflow:</strong> Requires model restructuring, multiple sensitivity tables, formatting, and PowerPoint creation</li>
                  <li>• <strong>Real banker work:</strong> VP feedback loop on an existing model, standard sensitivity analysis deliverable</li>
                </ul>
              </div>
            </div>

            {/* Example 2 */}
            <div className="mb-6 p-5 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="font-semibold text-lg text-foreground mb-4">First-Pass LBO Model Build</h4>
              
              <details className="group mb-4">
                <summary className="cursor-pointer text-sm font-medium text-primary hover:text-primary/80">View full prompt</summary>
                <div className="mt-3 p-4 rounded-lg bg-background border border-border text-sm text-muted-foreground space-y-3">
                  <p>I'm an investment banking analyst in the Consumer & Retail group at XYZ Bank, and my VP has asked me to build a simple first-pass LBO model for ELF. He believes a traditional term-loan-only structure does not work at current valuation levels and suggested a mixed term debt / PIK structure, with each representing 25% of total uses.</p>
                  <p>Using the provided FactSet data for ELF (share price, equity capitalization, enterprise value, income statement, and key items) as of November 16, 2025, build a five-year LBO model in Excel that includes:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>A transaction overview with assumptions, TEV build, buyout enterprise value build applying a 20% premium to share price, and sources and uses</li>
                    <li>A simple operating model (LTM plus five years) with 25% revenue growth, flat EBITDA margin, capex and D&A as a percentage of revenue, cash taxes at 30% using a simplified EBIT-based approach, and change in net working capital equal to 1% of annual revenue growth</li>
                    <li>A cash flow build from EBITDA to free cash flow, a term loan schedule, and a PIK preferred schedule</li>
                    <li>An exit and returns analysis showing sponsor MOIC and IRR using a 30.0x exit EBITDA multiple</li>
                  </ul>
                  <p>Assume the term loan interest rate is 6.5%, the PIK preferred rate is 10.0%, and transaction fees equal 1.0% of buyout TEV. FactSet includes all required items except capex as of Sep-2025 LTM, so use the capex figure from the Mar-2025 fiscal year and footnote this in the model.</p>
                  <p>Include a management promote where 7.5% of equity gains are paid to management before calculating sponsor returns. The model should be cleanly formatted, logically structured, and printable on no more than two pages.</p>
                  <p>Provide the LBO model in Excel.</p>
                  <p>XYZ Bank formatting avoids gridlines, bolds headers and key rows, uses blue shading for highlights, yellow input cells, blue font for hardcoded values, green font for linked values, and black font for calculated values. Use auditable formulas and avoid excessive calculations in a single cell.</p>
                </div>
              </details>
              
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-sm font-semibold text-foreground mb-3">Why this prompt works:</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Low ambiguity:</strong> All assumptions explicitly stated (growth rates, margins, interest rates, exit multiple)</li>
                  <li>• <strong>1+ hour workflow:</strong> Full LBO model build from scratch with transaction overview, operating model, debt schedules, and returns</li>
                  <li>• <strong>Real banker work:</strong> VP request for first-pass model with specific deal structure (term debt + PIK)</li>
                </ul>
              </div>
            </div>

            {/* Example 3 */}
            <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="font-semibold text-lg text-foreground mb-4">M&A Due Diligence Tracker</h4>
              
              <details className="group mb-4">
                <summary className="cursor-pointer text-sm font-medium text-primary hover:text-primary/80">View full prompt</summary>
                <div className="mt-3 p-4 rounded-lg bg-background border border-border text-sm text-muted-foreground space-y-3">
                  <p>You are on an M&A transaction and responsible for managing the buyer due diligence workstream. Create an Excel-based due diligence tracker to track and monitor all buyer questions throughout the process.</p>
                  <p>You must deliver:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>An Excel tracker</li>
                    <li>A PowerPoint summary deck with key metrics and visuals</li>
                    <li>A PDF export of the PowerPoint</li>
                  </ul>
                  <p>The Excel tracker should include dummy data for two buyers ("Buyer 1" and "Buyer 2") and contain:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>A cover tab titled "Project Sapphire"</li>
                    <li>A summary tab aggregating all buyers, showing total questions, questions by status, questions by topic, and a breakout by priority</li>
                    <li>Buyer-specific summary tabs ("Summary – Buyer 1" and "Summary – Buyer 2")</li>
                    <li>Buyer-specific question tabs ("Buyer 1" and "Buyer 2") with columns for question number, date requested, topic, subtopic, priority, question/request, buyer comments, response location, response text, date responded, and status</li>
                  </ul>
                  <p>The Topic, Subtopic, Priority, and Status columns should use dropdowns with predefined values. Apply conditional formatting to the Status column so each status has a distinct color. Include a dashboard-style view that updates automatically based on the buyer tabs.</p>
                  <p>Provide the Excel file, PowerPoint deck, and PDF export.</p>
                </div>
              </details>
              
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-sm font-semibold text-foreground mb-3">Why this prompt works:</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Low ambiguity:</strong> Exact tab structure, column definitions, dropdown values, and conditional formatting specified</li>
                  <li>• <strong>1+ hour workflow:</strong> Multi-tab Excel build, dummy data population, PowerPoint deck, and PDF export</li>
                  <li>• <strong>Real banker work:</strong> Standard M&A workstream deliverable used on live transactions</li>
                </ul>
              </div>
            </div>
            </ContentCard>
          </ChapterSection>

          {/* Continue to Output Guide */}
          <div className="pt-4">
            <Link 
              to="/output" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Continue to Output Guide
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

export default PromptGuide;
