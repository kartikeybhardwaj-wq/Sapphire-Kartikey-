import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { StepCard } from "@/components/StepCard";
import { InfoBox } from "@/components/InfoBox";
import { LoomEmbed } from "@/components/LoomEmbed";
import { PageNavigation } from "@/components/PageNavigation";
import { ProgressBar } from "@/components/ProgressBar";
import { StepNavigationSidebar } from "@/components/StepNavigationSidebar";
import { ChapterSection } from "@/components/ChapterSection";
import { Workflow, ArrowRight, Clock, CheckCircle, XCircle, ExternalLink, FileSpreadsheet, FileText, Presentation } from "lucide-react";
import { Link } from "react-router-dom";

const WorkflowPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [skippedSteps, setSkippedSteps] = useState<number[]>([]);

  const steps = [
    { number: 1, title: "Choose a Dataset", id: "step-1" },
    { number: 2, title: "Write a Prompt", id: "step-2" },
    { number: 3, title: "Test Model in Agent Mode", id: "step-3" },
    { number: 4, title: "Write the Ideal Deliverable", id: "step-4" },
    { number: 5, title: "Write the Step-by-Step Instructions", id: "step-5" },
    { number: 6, title: "Generate the Rubric", id: "step-6" },
    { number: 7, title: "Review and Revise the Rubric", id: "step-7" },
    { number: 8, title: "Submit + Get Paid", id: "step-8" },
  ];

  // Calculate progress based on current step (assuming 12.5% per step)
  const progress = ((currentStep - 1) / steps.length) * 100;

  useEffect(() => {
    const handleScroll = () => {
      // Determine current step based on scroll position
      const stepElements = steps.map((step) => document.getElementById(step.id));
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = stepElements.length - 1; i >= 0; i--) {
        const element = stepElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentStep(i + 1);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <PageHeader 
        icon={Workflow} 
        title="Task Workflow" 
        description="Follow these 8 steps to complete each investment banking task. From choosing your dataset to submitting your final rubric." 
      />

      <div 
        className="container mx-auto px-4 py-8 w-full"
        style={{
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box'
        }}
      >
        <div className="max-w-5xl mx-auto flex gap-8">
          {/* Step Navigation Sidebar */}
          <StepNavigationSidebar
            steps={steps}
            currentStep={currentStep}
            completedSteps={completedSteps}
            skippedSteps={skippedSteps}
            onStepClick={setCurrentStep}
          />

          {/* Main Content */}
          <div className="flex-1 min-w-0 space-y-12">
          {/* Steps Overview */}
          <div className="mb-8 p-4 rounded-lg bg-muted/50 border border-border">
            <h3 className="font-semibold text-foreground mb-3">Steps Overview</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              {["Choose Dataset", "Write Prompt", "Test Model", "Ideal Deliverable", "Step-by-Step", "Generate Rubric", "Review & Revise", "Submit"].map((step, i) => (
                <span key={step} className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {i + 1}. {step}
                </span>
              ))}
            </div>
          </div>

            {/* Chapter 1: Setup */}
            <ChapterSection chapter={1} title="Setup & Planning">
              <div id="step-1">
                <StepCard step={1} title="Choose a Dataset">
              <p className="mb-4">
                Select the data you'll use for your task. This forms the foundation of your prompt.
              </p>

              <LoomEmbed videoId="97c4c436bfe34337bc7665cbbc178e47" title="Choose a Dataset Walkthrough" />

              {/* Folder Structure Instructions */}
              <div className="p-4 rounded-lg bg-primary/5 border-2 border-primary/30 mb-4">
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
                      Fellow Folders <ExternalLink className="h-3 w-3" />
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
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="font-medium text-foreground mb-2">Option 1 (Recommended)</h4>
                  <p className="text-muted-foreground">
                    Review the Fellow Data Room to choose the dataset for the task you'll create.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="font-medium text-foreground mb-2">Option 2</h4>
                  <p className="text-muted-foreground mb-2">
                    Bring any dataset that meets requirements:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    <li>Any public filings or documents</li>
                    <li>Upload them to your <code className="px-1 py-0.5 rounded bg-muted text-xs font-mono">Input/</code> folder</li>
                    <li>Do not use MNPI or any private/confidential materials from your firm</li>
                  </ul>
                </div>
              </div>

              <InfoBox type="warning" className="mt-4">
                <ul className="list-disc list-inside space-y-1">
                  <li>Ensure data is publicly available and not confidential</li>
                  <li>Choose data that supports a 30-90 minute banking workflow</li>
                  <li>Consider what tools (Excel, PPT, Word) will be needed</li>
                </ul>
              </InfoBox>
                </StepCard>
              </div>
            </ChapterSection>

            {/* Chapter 2: Prompt Development */}
            <ChapterSection chapter={2} title="Prompt Development">
              <div id="step-2">
                <StepCard step={2} title="Write a Prompt">
              <p className="mb-4">
                Draft your prompt following the guidelines below. Your prompt should reflect a realistic investment banking workflow.
              </p>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-sm my-4">
                <video
                  src="/videos/write-prompt-tutorial.mp4"
                  title="Write a Prompt and Test Model Walkthrough"
                  controls
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border mb-4">
                <h4 className="font-medium text-foreground mb-3">Prompt Requirements</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Multi-step reasoning:</strong> Require multi-step reasoning and reflect authentic investment-banking workflows</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Substantive:</strong> At least 3+ sentences that require a thoughtful response</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Original:</strong> No copying standard questions or past work</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Natural:</strong> Represent a request you would realistically make in your day-to-day</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Multimodal:</strong> Include multimodal inputs or outputs (Excel, PDF, PPT) whenever possible</span>
                  </li>
                </ul>
              </div>

              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-medium text-primary mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" /> Good Examples
                  </h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground">Earnings Analysis Email</p>
                      <p>Review the Q2 2025 earnings transcript for CoreWeave, identify 3–4 material takeaways relevant to growth and profitability outlook...</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Sellside Marketing Materials</p>
                      <p>Create a 15-page slide deck for a beauty/skincare brand sellside process...</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <h4 className="font-medium text-destructive mb-2 flex items-center gap-2">
                    <XCircle className="h-4 w-4" /> Bad Examples
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>❌ "Help me identify this ticker" — Too one-off</p>
                    <p>❌ "Solve for WACC" — Too basic</p>
                    <p>❌ "Tell me about the Marriott" — Too general</p>
                  </div>
                </div>
              </div>

              <InfoBox type="info" className="mb-4">
                Please vary your syntax and phrasing as we want a diverse set of prompts asked in different ways.
              </InfoBox>

              <Link to="/prompts" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition-colors">
                Read the Prompt Guide
                <ArrowRight className="h-4 w-4" />
              </Link>
                </StepCard>
              </div>
            </ChapterSection>

            {/* Chapter 3: Testing & Validation */}
            <ChapterSection chapter={3} title="Testing & Validation">
              <div id="step-3">
                <StepCard step={3} title="Test Model in Agent Mode">
              <p className="mb-4">
                Before creating your ideal deliverable, test your prompt in Agent Mode to confirm the model fails at the task. This validates that your prompt is appropriately challenging.
              </p>

              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 mb-4">
                <h4 className="font-medium text-destructive mb-2 flex items-center gap-2">
                  <XCircle className="h-4 w-4" /> What Constitutes a Model Failure?
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The model should perform at <strong>less than 50% accuracy</strong> compared to what you expected. This means:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Missing more than half of the required calculations or analyses</li>
                  <li>Producing incorrect methodology or formulas in the majority of cases</li>
                  <li>Failing to follow the core workflow steps you outlined</li>
                  <li>Output that would be unusable or require significant rework</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border mb-4">
                <h4 className="font-medium text-foreground mb-3">How to Test</h4>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
                  <li>Run your prompt through the model in Agent Mode</li>
                  <li>Review the output against your expected deliverable</li>
                  <li>Estimate the accuracy percentage (aim for {"<"}50% pass rate)</li>
                  <li>If the model succeeds ({">"}50%), increase task complexity or add constraints</li>
                </ol>
              </div>

              <InfoBox type="info" className="mb-4">
                <strong>Why this matters:</strong> Tasks where the model already succeeds don't help train the model. We need tasks that challenge current capabilities so the model can learn from the gap between its output and your ideal deliverable.
              </InfoBox>
                </StepCard>
              </div>
            </ChapterSection>

            {/* Chapter 4: Deliverable Creation */}
            <ChapterSection chapter={4} title="Deliverable Creation">
              <div id="step-4">
                <StepCard step={4} title="Write the Ideal Deliverable">
              <p className="mb-4">
                In the output subfolder, upload your final deliverable in its native format (Excel, PowerPoint, or Word, as applicable).
              </p>

              <LoomEmbed videoId="b1b32df3acc64066ba34e96b51651251" title="Ideal Deliverable Walkthrough" />

              <div className="grid gap-3 mb-4">
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

              <InfoBox type="warning" className="mb-4">
                <strong>Important:</strong> Do NOT convert files into Google Sheets or Google Slides. Submit complete working files, not just final numbers.
              </InfoBox>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <h4 className="font-medium text-foreground mb-3">Best Practices</h4>
                <div className="grid gap-2 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="font-medium text-foreground">Completeness:</span>
                    <span>Include all elements a VP or MD would expect to see</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-foreground">Accuracy:</span>
                    <span>Ensure all calculations and data are correct</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-foreground">Formatting:</span>
                    <span>Follow your firm's standard formatting guidelines</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-foreground">Clarity:</span>
                    <span>Make it easy for evaluators to understand what's included</span>
                  </div>
                </div>
              </div>
                </StepCard>
              </div>

              <div id="step-5">
                <StepCard step={5} title="Write the Step-by-Step Instructions">
              <p className="mb-4">
                Lay out a clear step-by-step explanation of how to solve your task.
              </p>

              <LoomEmbed videoId="ea4969d404694df1acb45c30e53ab05a" title="Step-by-Step Instructions Walkthrough" />

              <div className="p-4 rounded-lg bg-muted/50 border border-border mb-4">
                <h4 className="font-medium text-foreground mb-2">Example: "Line up comps" prompt</h4>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                  <li>Create an excel sheet</li>
                  <li>Pull the market data from the dataroom / factset and add them as source tabs</li>
                  <li>Normalize / clean up data</li>
                  <li>Calculate additional valuation multiples</li>
                  <li>Format the comps table</li>
                </ol>
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="font-medium text-foreground mb-3">Guidelines</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="font-bold text-primary">1.</span>
                    <span><strong>Be Specific:</strong> Each step should clearly describe what needs to be done</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-primary">2.</span>
                    <span><strong>Follow Logical Order:</strong> Steps should flow naturally from beginning to end</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-primary">3.</span>
                    <span><strong>Include Tool Usage:</strong> Specify which tools (Excel, Web Search, etc.) are used in each step</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-primary">4.</span>
                    <span><strong>Match Your Ideal Output:</strong> Steps should lead to the exact deliverable you created</span>
                  </li>
                </ul>
              </div>
                </StepCard>
              </div>
            </ChapterSection>

            {/* Chapter 5: Rubric Development */}
            <ChapterSection chapter={5} title="Rubric Development">
              <div id="step-6">
                <StepCard step={6} title="Generate the Rubric">
              <p className="mb-4">
                Press "Continue" to automatically generate the synthetic rubric. Please be patient as it takes a moment to load.
              </p>

              <LoomEmbed videoId="c57a74e808434c2f951957f019c226c2" title="Generate the Rubric Walkthrough" />

              <InfoBox type="warning" className="mb-4">
                <strong>Note:</strong> The synthetic rubric will not be good enough and will require your refinement in Step 7.
              </InfoBox>

              <div className="p-4 rounded-lg bg-muted/50 border border-border mb-4">
                <h4 className="font-medium text-foreground mb-3">What Happens During Generation</h4>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                  <li>The platform analyzes your prompt, ideal deliverable, and step-by-step instructions</li>
                  <li>It automatically creates rubric criteria based on your task requirements</li>
                  <li>Criteria are categorized (Instruction Following, Technical Correctness, Client Readiness, etc.)</li>
                  <li>Weights are assigned based on importance</li>
                </ol>
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="font-medium text-foreground mb-3">Focus Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-primary text-lg">50%</span>
                    <span className="text-muted-foreground">Final output (formulas / important content)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-primary text-lg">30%</span>
                    <span className="text-muted-foreground">Process step by step (tool use + instruction following)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-primary text-lg">20%</span>
                    <span className="text-muted-foreground">Formatting (client-ready/style)</span>
                  </div>
                </div>
              </div>

              <Link to="/rubrics" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition-colors mt-4">
                Read the Rubric Guide
                <ArrowRight className="h-4 w-4" />
              </Link>
                </StepCard>
              </div>

              <div id="step-7">
                <StepCard step={7} title="Review and Revise the Rubric">
              <p className="mb-4">
                Carefully review the generated rubric and make all necessary adjustments. Your revised rubric should be submission-quality and ready for use.
              </p>

              <LoomEmbed videoId="e4f611f315784c00a198a868e0e83403" title="Review and Revise Rubric Walkthrough" />

              <div className="p-4 rounded-lg bg-muted/50 border border-border mb-4">
                <h4 className="font-medium text-foreground mb-3">Common Issues to Fix</h4>
                <div className="grid gap-2 text-sm">
                  <div className="flex gap-3 items-start">
                    <span className="font-medium text-foreground min-w-[140px]">Stacked Criteria:</span>
                    <span className="text-muted-foreground">Split criteria that test multiple concepts into separate items</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-medium text-foreground min-w-[140px]">Non-Self-Contained:</span>
                    <span className="text-muted-foreground">Add missing context so criteria stand alone</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-medium text-foreground min-w-[140px]">Vague Language:</span>
                    <span className="text-muted-foreground">Replace subjective terms with specific, measurable requirements</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-medium text-foreground min-w-[140px]">Missing Coverage:</span>
                    <span className="text-muted-foreground">Ensure all aspects of your ideal deliverable are evaluated</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mb-4">
                <h4 className="font-medium text-foreground mb-2">Rubric Quality Checklist</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    Each criterion is self-contained with all necessary context
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    Criteria are atomic (test one concept each)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    Specific numbers, dates, or formulas are included where applicable
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    All categories are represented (Instruction Following, Technical Correctness, Client Readiness, etc.)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    Weights appropriately reflect importance (1, 3, 5, 10 scale)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    Coverage is complete — no critical elements missing
                  </li>
                </ul>
              </div>

              <Link to="/rubrics" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition-colors">
                Read the Rubric Guide
                <ArrowRight className="h-4 w-4" />
              </Link>
                </StepCard>
              </div>
            </ChapterSection>

            {/* Chapter 6: Submission */}
            <ChapterSection chapter={6} title="Submission">
              <div id="step-8">
                <StepCard step={8} title="Submit + Get Paid">
              <p className="mb-4">
                After receiving approval from the reviewer, you're done! Your high-quality rubric will be used to evaluate AI model performance.
              </p>

              <InfoBox type="success">
                Check your "My Tasks" list regularly to see if any tasks have been sent back with feedback.
              </InfoBox>
                </StepCard>
              </div>
            </ChapterSection>

          {/* Time Cap Info */}
          <InfoBox type="warning" title="Task Time Expectation" className="mb-8">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="mb-2">
                  We expect most tasks to take <strong>30–90 minutes</strong> depending on complexity.
                </p>
                <p>
                  Choose data that supports a realistic banking workflow within this timeframe.
                </p>
              </div>
            </div>
          </InfoBox>

          {/* Rubric Categories Quick Reference */}
          <ContentCard className="mb-8">
            <h3 className="font-semibold text-foreground mb-4 text-lg">Rubric Categories Quick Reference</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-muted/50 border border-border">
                <span className="font-medium text-foreground">Instruction Following:</span>
                <span className="text-muted-foreground ml-2">Check whether the solution follows explicit instructions exactly</span>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border">
                <span className="font-medium text-foreground">Client Readiness & Presentation:</span>
                <span className="text-muted-foreground ml-2">Focus on presentation quality and clarity</span>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border">
                <span className="font-medium text-foreground">Technical Correctness:</span>
                <span className="text-muted-foreground ml-2">Check if the model reasons correctly about mathematical relations</span>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border">
                <span className="font-medium text-foreground">Transparency & Auditability:</span>
                <span className="text-muted-foreground ml-2">Ensure work is traceable, documented, and verifiable</span>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border">
                <span className="font-medium text-foreground">Internal Consistency:</span>
                <span className="text-muted-foreground ml-2">Check that outputs are consistent across sections</span>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border">
                <span className="font-medium text-foreground">Risk & Compliance:</span>
                <span className="text-muted-foreground ml-2">Evaluate adherence to regulatory and risk guidelines</span>
              </div>
            </div>
          </ContentCard>

          {/* Quick Links */}
          <ContentCard variant="highlight">
            <h3 className="font-semibold text-foreground mb-4 text-lg">Quick Links</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link 
                to="/prompts" 
                className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <ArrowRight className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">Prompt Guide</span>
              </Link>
              <Link 
                to="/rubrics" 
                className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <ArrowRight className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">Rubric Guide</span>
              </Link>
            </div>
          </ContentCard>

            <PageNavigation />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WorkflowPage;
