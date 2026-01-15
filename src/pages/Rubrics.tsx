import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { InfoBox } from "@/components/InfoBox";
import { WeightBadge } from "@/components/WeightBadge";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { FileText, CheckCircle, XCircle, AlertTriangle, Play, ChevronLeft, ChevronRight, Tag, Edit3, Calculator, FileCheck, ListChecks, Palette, AlertOctagon, Sparkles, Target, Scale, CheckCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const Rubrics = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const videos = [
    { 
      id: "7MSBlFAiRDs", 
      title: "Rubrics Foundational Training",
      description: "Learn what rubrics are, how they're used to evaluate AI responses, and why your work matters for training models.",
      timestamps: [
        { time: "0:06", seconds: 6, title: "Task creation walkthrough" },
        { time: "55:21", seconds: 3321, title: "Task rubric generation/editing walkthrough" },
        { time: "1:23:46", seconds: 5026, title: "Prompt/rubric example walkthrough" },
      ]
    },
    { 
      id: "ZwvWp5XbkFE", 
      title: "How to Build Effective Rubrics",
      description: "Learn the process of moving from a prompt to criteria to weights.",
      timestamps: [
        { time: "0:15", seconds: 15, title: "Prompt and rubric example walkthrough" },
        { time: "17:00", seconds: 1020, title: "Prompt and rubric creation walkthrough" },
      ]
    },
    { 
      id: "zjhlomlJu10", 
      title: "Writing Effective Criteria",
      description: "Learn the seven qualities that make criteria clear, testable, and useful for training.",
      timestamps: [
        { time: "42:50", seconds: 2570, title: "Task example walkthrough" },
        { time: "48:00", seconds: 2880, title: "Task prompt/rubric full walkthrough" },
      ]
    },
  ];

  const weightTable = [
    { weight: 10, meaning: "Critical requirement. Cannot be missed.", example: "Outputs a complete Excel file with working formulas" },
    { weight: 5, meaning: "Important requirement. Core financial logic.", example: "Calculates EV/EBITDA using Enterprise Value / LTM EBITDA" },
    { weight: 3, meaning: "Significant requirement. Technical execution.", example: "Uses data table function for sensitivity analysis" },
    { weight: 1, meaning: "Nice to have. Formatting or style.", example: "Removes gridlines in Excel" },
  ];

  const rubricCategories = [
    {
      icon: ListChecks,
      title: "Instruction Following",
      description: "Check whether the solution follows explicit instructions and requirements exactly as specified in the prompt.",
      example: "Follows the prompt instruction to calculate EV/EBITDA for all peer companies listed in the input file.",
      color: "text-primary"
    },
    {
      icon: Palette,
      title: "Client Readiness & Presentation",
      description: "Focus on presentation quality, formatting, and whether the output is ready to share with clients or stakeholders.",
      example: "Formats the PowerPoint with consistent fonts, aligned elements, and professional color scheme suitable for client presentation.",
      color: "text-chart-1"
    },
    {
      icon: Calculator,
      title: "Technical Correctness",
      description: "Check if the model reasons correctly about mathematical relations, formulas, and financial calculations.",
      example: "Calculates WACC using the formula: (E/V × Re) + (D/V × Rd × (1-T)) where E is equity value, D is debt value, V is total value.",
      color: "text-chart-2"
    },
    {
      icon: FileCheck,
      title: "Transparency & Auditability",
      description: "Check whether the work is traceable, well-documented, and can be audited or reviewed by others.",
      example: "Includes formula references in Excel cells rather than hardcoded values, allowing for easy verification of calculations.",
      color: "text-chart-3"
    },
    {
      icon: Target,
      title: "Internal Consistency",
      description: "Check whether the output is internally consistent across all sections, tabs, and referenced values.",
      example: "Uses the same EBITDA figure across the DCF model, trading comps, and summary page without discrepancies.",
      color: "text-chart-4"
    },
    {
      icon: Scale,
      title: "Risk & Compliance",
      description: "Check whether the output adheres to risk management principles and compliance requirements.",
      example: "Includes appropriate disclaimers and notes potential risks or limitations in the analysis assumptions.",
      color: "text-chart-5"
    }
  ];

  const rules = [
    { 
      title: "Self-Contained Criteria", 
      description: "Each criterion must stand alone. A reader must be able to evaluate it without seeing the prompt, the model answer, or other criteria. Never reference \"the requirement above\" or \"the input file.\"", 
      bad: "Matches the requirement stated in the prompt", 
      good: "Calculates EV/EBITDA using Enterprise Value / LTM EBITDA" 
    },
    { 
      title: "Specific & Measurable Criteria", 
      description: "Use explicit, objective details. Describe measurable attributes like specific formulas, cell references, or calculation methods.", 
      bad: "Creates a good sensitivity table", 
      good: "Creates a 5x5 sensitivity table with Buyout Premium % (15-25%) as column inputs and Exit Multiple (26-34x) as row inputs" 
    },
    { 
      title: "Process-Oriented", 
      description: "Validate not only the final numerical output but also the model's ability to follow the correct workflow. Describe the method used, not just the outcome.", 
      bad: "Gets the correct WACC value", 
      good: "Calculates WACC using the formula: (E/V × Re) + (D/V × Rd × (1-T)) where E is equity value, D is debt value, V is total value" 
    },
    { 
      title: "Avoid Literal String Matching", 
      description: "Do not penalize the LLM for not using exact quoted labels when the intent is clear. Avoid penalizing for tab names or column headers that are functionally equivalent.", 
      bad: "Names the tab exactly 'Sources and Uses'", 
      good: "Creates a tab for sources and uses analysis" 
    },
    { 
      title: "Criteria Must Be Atomic", 
      description: "Each item must test one measurable thing. If you're using \"and\" to combine multiple requirements, split them into separate criteria.", 
      bad: "Creates a comps table with correct formatting and calculates all multiples correctly", 
      good: "Calculates EV/Revenue multiple for each peer company" 
    },
    { 
      title: "No Justification in Criteria", 
      description: "Criteria must state only the requirement — never include reasoning or justification. Remove phrases like \"to ensure...\", \"in order to...\", or \"because...\".", 
      bad: "Hides gridlines in Excel to maintain a professional appearance", 
      good: "Hides gridlines in Excel" 
    },
    { 
      title: "Define Entities Abstractly", 
      description: "Avoid overfitting to specific task details. If your rubric mentions specific companies, define them abstractly so the rubric generalizes beyond a single task.", 
      bad: "Creates individual tabs for Apple, Microsoft, Google, and Amazon", 
      good: "Creates individual tabs for each peer company in the comp set" 
    },
    { 
      title: "Avoid Template Strings", 
      description: "Do not include explicit template strings like {{prompt}} in rubrics. This increases token count and hallucination probability.", 
      bad: "Includes the {{company_name}} in the header", 
      good: "Includes the target company name in the header" 
    },
    { 
      title: "Verb-Led Criteria (Best Practice)", 
      description: "Criteria should start with an action verb when possible: Calculates, Creates, Outputs, Uses, Applies, Formats, Links, Includes, Populates, References.", 
      bad: "The model has correct EBITDA formula", 
      good: "Calculates EBITDA as Revenue minus Operating Expenses plus Depreciation and Amortization" 
    },
    { 
      title: "Tool-Specific When Applicable", 
      description: "Reference specific tools or functions when checking tool usage. Be explicit about what tool calls are expected.", 
      bad: "Uses Excel properly", 
      good: "Calls the add_worksheet function to create a new tab for sensitivity analysis" 
    },
  ];

  const errorTags = [
    {
      tag: "Not Self-Contained",
      definition: "A criterion that requires external context (the prompt, other criteria, or input files) to understand what it's testing.",
      problem: "Reviewers must be able to evaluate each criterion independently without referencing other materials.",
      badExample: "Follows the MD's formatting preferences.",
      goodExample: "Applies blue shading (color code #4472C4) to column headers."
    },
    {
      tag: "Not Measurable",
      definition: "A criterion that uses subjective or vague language that cannot be objectively evaluated.",
      problem: "If two reviewers could disagree on whether a criterion is met, it's not measurable.",
      badExample: "Creates a professional-looking presentation.",
      goodExample: "Creates a PowerPoint slide with landscape orientation and dimensions of 11\" width × 7.5\" height."
    },
    {
      tag: "Stacked",
      definition: "A criterion that tests multiple requirements in a single item.",
      problem: "A single ✓/✗ cannot fairly score multiple conditions. Each requirement needs its own criterion.",
      badExample: "Creates a DCF model with correct terminal value, discount rate, and present value calculations.",
      goodExample: "Calculates terminal value using the perpetuity growth method.",
      emphasis: true,
      splitExample: {
        original: "Creates a DCF model with correct terminal value, discount rate, and present value calculations.",
        split: [
          "Calculates terminal value using the perpetuity growth method.",
          "Calculates discount rate using WACC formula.",
          "Calculates present value of projected cash flows."
        ]
      },
      ruleOfThumb: "If a criterion contains \"and,\" it is almost always stacked and must be split."
    },
    {
      tag: "Overfitted",
      definition: "A criterion that is too specific to one particular task and won't generalize.",
      problem: "Rubrics should evaluate the model's ability to perform the type of task, not memorize specific details.",
      badExample: "Creates tabs named 'Apple', 'Microsoft', 'Google', and 'Amazon'.",
      goodExample: "Creates a separate tab for each peer company in the comparison set."
    },
    {
      tag: "String Literal",
      definition: "A criterion that penalizes the model for not using exact quoted labels or names.",
      problem: "Penalizing for not using exact naming conventions doesn't make sense when the intent is clear.",
      badExample: "Names the worksheet exactly 'Trading Comps Analysis'.",
      goodExample: "Creates a worksheet for trading comparables analysis.",
      emphasis: true
    },
    {
      tag: "Duplicate",
      definition: "Two or more criteria that test the same requirement.",
      problem: "Duplicates artificially inflate or deflate scores by testing one thing multiple times.",
      badExample: "Criterion 3: 'Calculates EV using market cap plus net debt.'\nCriterion 7: 'Derives Enterprise Value from equity value and debt.'",
      goodExample: "Keep only one criterion: 'Calculates Enterprise Value as Market Capitalization plus Net Debt.'"
    },
    {
      tag: "Category Mismatch",
      definition: "A criterion that is categorized incorrectly (e.g., a Reasoning criterion marked as Formatting).",
      problem: "Incorrect categorization makes it harder to analyze model performance across different skills.",
      badExample: "Reasoning: 'Formats the header row with bold text.'",
      goodExample: "Formatting/Style: 'Formats the header row with bold text.'"
    },
    {
      tag: "Missing Tool Reference",
      definition: "A Tool Call criterion that doesn't specify which tool or function is being checked.",
      problem: "Tool Call criteria should explicitly reference the expected tool or function call.",
      badExample: "Opens a new spreadsheet.",
      goodExample: "Calls the create_workbook function to create a new Excel file."
    },
    {
      tag: "Unclear Wording",
      definition: "A criterion with vague or imprecise language that could be interpreted multiple ways.",
      problem: "Unclear wording leads to inconsistent evaluation across reviewers.",
      badExample: "Uses appropriate assumptions for the LBO model.",
      goodExample: "Uses an exit multiple assumption between 8x and 12x EV/EBITDA."
    }
  ];

  return (
    <Layout>
      <PageHeader 
        icon={FileText} 
        title="Rubric Guide" 
        description="Learn how to create objective, measurable evaluation criteria for investment banking AI tasks. Your rubrics will help evaluate model performance across reasoning, tool usage, and financial analysis." 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Video Gallery */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Play className="h-6 w-6 text-primary" />
              <h2 className="font-serif text-2xl font-bold text-foreground">Training Videos</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              These videos provide foundational training on rubrics. While some examples may reference other domains, the core principles apply directly to investment banking tasks.
            </p>
            
            {/* Carousel */}
            <div className="relative">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {videos.map((video, index) => (
                    <CarouselItem key={video.id}>
                      <div className="space-y-4">
                        <YouTubeEmbed videoId={video.id} title={video.title} />
                        <div className="text-center space-y-1">
                          <p className="font-medium text-foreground">{video.title}</p>
                          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">{video.description}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              
              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/3 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={() => api?.scrollPrev()}
                disabled={current === 0}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/3 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={() => api?.scrollNext()}
                disabled={current === count - 1}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Slide Indicator */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      current === index 
                        ? "w-8 bg-primary" 
                        : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Video {current + 1} of {count}
              </span>
            </div>
          </section>

          {/* Critical: Synthetic Rubric Section */}
          <section className="rounded-xl border-2 border-destructive/50 bg-destructive/5 p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-destructive/20 text-destructive">
                <AlertOctagon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Critical: You Must Edit the Synthetic Rubric</h2>
                <p className="text-muted-foreground">
                  For every task, you receive a <strong>synthetically generated draft rubric</strong>. This is a starting point meant to speed you up—<strong>not a finished evaluation framework</strong>.
                </p>
              </div>
            </div>

            {/* What It Is / Is Not */}
            <div className="grid sm:grid-cols-2 gap-4">
              <ContentCard className="border-chart-1/30">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5 text-chart-1" />
                  <h3 className="font-semibold text-foreground">What It Is</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  A starting point meant to speed you up—not a finished evaluation framework.
                </p>
              </ContentCard>
              <ContentCard className="border-destructive/30">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="h-5 w-5 text-destructive" />
                  <h3 className="font-semibold text-foreground">What It Is Not</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  It is <strong>not submission-quality</strong> and should never be used "as-is."
                </p>
              </ContentCard>
            </div>

            <InfoBox type="warning" title="Default Assumption">
              The synthetic rubric is <strong>incomplete</strong>, <strong>overly generic</strong>, and <strong>missing banker judgment</strong>. If a rubric looks "fine as-is," it is almost certainly not revised enough.
            </InfoBox>

            {/* Non-Negotiable Expectation */}
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Non-Negotiable Expectation
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                You must <strong>materially revise</strong> the synthetic rubric until it is:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0" />
                  <span><strong>Banker-grade</strong> — reads like a deal team lead wrote it</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0" />
                  <span><strong>Submission-quality</strong> — ready for real evaluation use</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0" />
                  <span><strong>Aligned</strong> — matches the prompt and ideal deliverable</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0" />
                  <span><strong>Verifiable & fair</strong> — objective criteria, realistic standards</span>
                </li>
              </ul>
            </div>

            {/* How to Edit Workflow */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Edit3 className="h-5 w-5 text-primary" />
                How to Edit a Synthetic Rubric (Required Workflow)
              </h3>
              <div className="space-y-4">
                <ContentCard>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Extract the Real Requirements</h4>
                      <p className="text-sm text-muted-foreground mb-2">From the prompt, identify:</p>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Required deliverable (Excel / PPT / Word + what must be in it)</li>
                        <li>Key calculations/definitions (e.g., EV formula, discount formulas, time periods)</li>
                        <li>Explicit instructions (peer set, formatting constraints, required outputs, required tools)</li>
                        <li>What would make the output usable on a live deal</li>
                      </ul>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Rebuild Criteria to Banker-Verifiable Checks</h4>
                      <p className="text-sm text-muted-foreground mb-2">Rewrite criteria so they are:</p>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li><strong>Binary</strong> (true/false)</li>
                        <li><strong>Objective</strong> (not "good / strong / clean")</li>
                        <li><strong>Specific</strong> (entity + metric + period + method where relevant)</li>
                        <li><strong>Self-contained</strong> (no "as above," no external research required)</li>
                        <li><strong>Mostly non-stacked</strong> (one concept per criterion; stack only when inseparable)</li>
                      </ul>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Fix Weights to Reflect Banker Priorities</h4>
                      <p className="text-sm text-muted-foreground mb-2">Use weights (typically 1 / 3 / 5 / 10) to reflect impact:</p>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Critical financial logic, definitions, and core outputs should carry the most weight</li>
                        <li>Formatting should matter, but never outweigh correctness</li>
                      </ul>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Ensure Complete Coverage Across Categories</h4>
                      <p className="text-sm text-muted-foreground mb-2">Confirm the rubric evaluates the solution across:</p>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Instruction Following</li>
                        <li>Client Readiness & Presentation</li>
                        <li>Technical Correctness</li>
                        <li>Transparency & Auditability</li>
                        <li>Internal Consistency</li>
                        <li>Risk & Compliance</li>
                      </ul>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">5</div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Make the Language Human and Banker-Like</h4>
                      <p className="text-sm text-muted-foreground">
                        Remove robotic or generic phrasing. Use banker terms correctly. Ask yourself: <em>How would you describe this to your coworkers?</em> Criteria should be readable and practical—like a VP reviewing analyst work.
                      </p>
                    </div>
                  </div>
                </ContentCard>
              </div>
            </div>

            {/* Semantic Precision Cheat Sheet */}
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Semantic Precision Cheat Sheet
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Goal:</strong> Create rows that are flexible enough for different layouts but strict enough to catch errors.
              </p>
              <InfoBox type="info" className="mb-4">
                <strong>The Golden Rule:</strong> Identify the <em>what</em> and the <em>logic</em>, never the coordinate.
              </InfoBox>

              {/* Analytical Correctness */}
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-chart-2" />
                  1. Analytical Correctness & Logic
                </h4>
                <p className="text-sm text-muted-foreground mb-3">Focus: Does the math work, regardless of where it sits?</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50 border-b border-border">
                        <th className="text-left py-2 px-2 font-semibold text-destructive">Bad (Vague)</th>
                        <th className="text-left py-2 px-2 font-semibold text-destructive">Bad (Too Rigid)</th>
                        <th className="text-left py-2 px-2 font-semibold text-chart-1">Good (Semantic)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-2 px-2">"The model is built correctly."</td>
                        <td className="py-2 px-2">"Cell B15 calculates WACC using the formula from B10 and B11."</td>
                        <td className="py-2 px-2">"The cell labeled 'WACC' dynamically links to the Cost of Equity and Cost of Debt inputs found in the Assumptions section."</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-2">"Check the sensitivity table."</td>
                        <td className="py-2 px-2">"The table in range J10:N15 varies WACC and Growth."</td>
                        <td className="py-2 px-2">"A Sensitivity Table is present that varies the input labeled 'WACC' against the input labeled 'Terminal Growth Rate'."</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-2">"Ensure formulas work."</td>
                        <td className="py-2 px-2">"Check that cell E50 does not contain hardcodes."</td>
                        <td className="py-2 px-2">"The 'EBITDA' calculation row contains only formulas (no hardcoded numbers) derived from Revenue and OpEx lines."</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Internal Consistency */}
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4 text-chart-4" />
                  2. Internal Consistency (Tie-Outs)
                </h4>
                <p className="text-sm text-muted-foreground mb-3">Focus: Do the numbers match across distinct files/sections?</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50 border-b border-border">
                        <th className="text-left py-2 px-2 font-semibold text-destructive">Bad (Vague)</th>
                        <th className="text-left py-2 px-2 font-semibold text-destructive">Bad (Too Rigid)</th>
                        <th className="text-left py-2 px-2 font-semibold text-chart-1">Good (Semantic)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-2 px-2">"The deck and model match."</td>
                        <td className="py-2 px-2">"Slide 4 matches cell D50."</td>
                        <td className="py-2 px-2">"The 'Implied Share Price' figure on the Valuation Summary slide matches the 'Implied Share Price' output in the Excel model."</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-2">"Assumptions are consistent."</td>
                        <td className="py-2 px-2">"Cell C5 is 5.0%."</td>
                        <td className="py-2 px-2">"The 'Revenue Growth' assumption in the model matches the growth rate explicitly requested in the Prompt."</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Formatting & Structure */}
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                  <Palette className="h-4 w-4 text-chart-1" />
                  3. Formatting & Structure
                </h4>
                <p className="text-sm text-muted-foreground mb-3">Focus: Are the required elements present and legible?</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50 border-b border-border">
                        <th className="text-left py-2 px-2 font-semibold text-destructive">Bad (Vague)</th>
                        <th className="text-left py-2 px-2 font-semibold text-destructive">Bad (Too Rigid)</th>
                        <th className="text-left py-2 px-2 font-semibold text-chart-1">Good (Semantic)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-2 px-2">"Format the table well."</td>
                        <td className="py-2 px-2">"The table must start in Cell A1."</td>
                        <td className="py-2 px-2">"The Financial Summary table includes distinct headers that are visually differentiated (e.g., bolded or shaded) from the data rows."</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 px-2">"Make it look professional."</td>
                        <td className="py-2 px-2">"Use Arial font size 10."</td>
                        <td className="py-2 px-2">"All body text utilizes the font family and size specified in the prompt's Style Guide (or Arial if unspecified)."</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* How to Write Locators */}
              <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-primary" />
                  How to Write "Locators"
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Since we cannot use coordinates (A1, Slide 3), use these "Anchor Points" to help annotators find the right data to grade:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 rounded bg-card border border-border">
                    <p className="font-medium text-foreground mb-1">1. By Label Name</p>
                    <p className="text-xs text-muted-foreground">Instead of: "Cell C4..."</p>
                    <p className="text-xs text-chart-1">Use: "The row labeled 'Net Income'..."</p>
                  </div>
                  <div className="p-3 rounded bg-card border border-border">
                    <p className="font-medium text-foreground mb-1">2. By Section Header</p>
                    <p className="text-xs text-muted-foreground">Instead of: "Rows 10-20..."</p>
                    <p className="text-xs text-chart-1">Use: "The section titled 'Operating Assumptions'..."</p>
                  </div>
                  <div className="p-3 rounded bg-card border border-border">
                    <p className="font-medium text-foreground mb-1">3. By File Function</p>
                    <p className="text-xs text-muted-foreground">Instead of: "The second tab..."</p>
                    <p className="text-xs text-chart-1">Use: "The worksheet containing the DCF Analysis..."</p>
                  </div>
                  <div className="p-3 rounded bg-card border border-border">
                    <p className="font-medium text-foreground mb-1">4. By Logical Relationship</p>
                    <p className="text-xs text-muted-foreground">Instead of: "The bottom right number..."</p>
                    <p className="text-xs text-chart-1">Use: "The final calculated Output of the sensitivity table..."</p>
                  </div>
                </div>
              </div>

              {/* Splitting Rule Example */}
              <div>
                <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                  <ListChecks className="h-4 w-4 text-chart-3" />
                  Updated "Splitting" Rule Example
                </h4>
                <p className="text-sm text-muted-foreground mb-3">How to split a complex requirement without assuming layout:</p>
                <div className="space-y-3">
                  <div className="p-3 rounded bg-destructive/10 border border-destructive/30">
                    <p className="text-xs font-medium text-destructive mb-1">The "Bad" Composite Row:</p>
                    <p className="text-xs text-muted-foreground">"The Comps table is at the top of the sheet and calculates the median correctly."</p>
                  </div>
                  <div className="p-3 rounded bg-chart-1/10 border border-chart-1/30">
                    <p className="text-xs font-medium text-chart-1 mb-2">The "Good" Split (Semantic):</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li><strong>Row A:</strong> "A table titled 'Comparable Company Analysis' (or similar) is present in the active worksheet." <span className="text-muted-foreground/60">(Existence)</span></li>
                      <li><strong>Row B:</strong> "The 'Median' row in the Comps table is calculated using the MEDIAN() function applied to the correct peer data range." <span className="text-muted-foreground/60">(Correctness)</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Problems Table */}
            <div>
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                Common Problems in Synthetic Rubrics (and What to Do)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted/50 border-b border-border">
                      <th className="text-left py-2 px-3 font-semibold text-foreground">Problem</th>
                      <th className="text-left py-2 px-3 font-semibold text-foreground">Fix</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-2 px-3">Stacked criteria (tests multiple concepts)</td>
                      <td className="py-2 px-3">Split into atomic items unless inseparable</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 px-3">Non-self-contained criteria (missing context)</td>
                      <td className="py-2 px-3">Add missing entity/metric/period/definition so it stands alone</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 px-3">Vague language ("correct," "professional," "appropriate")</td>
                      <td className="py-2 px-3">Replace with measurable requirements (formulas, tie-outs, required outputs)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 px-3">Missing coverage (key deliverable elements not evaluated)</td>
                      <td className="py-2 px-3">Add criteria for all must-have outputs and auditability checks</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 px-3">Overly rigid / overfit requirements</td>
                      <td className="py-2 px-3">Keep criteria generalizable unless prompt demands specifics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Done Checklist */}
            <div className="p-4 rounded-lg bg-chart-1/10 border border-chart-1/30">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-chart-1" />
                Quick "Done" Test
              </h3>
              <p className="text-sm text-muted-foreground mb-3">A synthetic rubric is fully revised only when:</p>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0" />
                  It reflects how a real banker would evaluate the work
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0" />
                  Criteria are verifiable, specific, and fair
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0" />
                  Weights match importance
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0" />
                  No critical deliverable elements are missing
                </li>
              </ul>
            </div>
          </section>

          {/* Accordion Sections */}
          <Accordion type="multiple" className="space-y-4">
            
            {/* Basics */}
            <AccordionItem value="basics" className="border rounded-xl px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Rubric Basics
              </AccordionTrigger>
              <AccordionContent className="space-y-8 pb-6">
                {/* What is a Rubric */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">What Is a Rubric?</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A rubric is a scoring guide — a list of specific things to look for when evaluating 
                    an AI's response to an investment banking task. Rubrics turn subjective questions ("Was this analysis good?") into 
                    objective ones ("Did this model correctly calculate EV/EBITDA?").
                  </p>
                  <ContentCard>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Example:</strong> Instead of asking "Did the AI build a good LBO model?", 
                      we check specific criteria like "Calculates IRR using the XIRR function with correct cash flow inputs" ✓ or ✗
                    </p>
                  </ContentCard>
                </div>

                {/* Rubric Focus */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Rubric Focus Breakdown</h3>
                  <p className="text-muted-foreground mb-4">Your rubric should balance evaluation across different aspects:</p>
                  <div className="grid grid-cols-3 gap-4">
                    <ContentCard className="text-center">
                      <p className="text-3xl font-bold text-primary mb-2">50%</p>
                      <p className="text-sm font-medium text-foreground">Final Output</p>
                      <p className="text-xs text-muted-foreground mt-1">Formulas, important content</p>
                    </ContentCard>
                    <ContentCard className="text-center">
                      <p className="text-3xl font-bold text-chart-1 mb-2">30%</p>
                      <p className="text-sm font-medium text-foreground">Process</p>
                      <p className="text-xs text-muted-foreground mt-1">Tool use + instruction following</p>
                    </ContentCard>
                    <ContentCard className="text-center">
                      <p className="text-3xl font-bold text-chart-2 mb-2">20%</p>
                      <p className="text-sm font-medium text-foreground">Formatting</p>
                      <p className="text-xs text-muted-foreground mt-1">Client-ready styling</p>
                    </ContentCard>
                  </div>
                </div>

                {/* Criteria Count by Tier */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Expected Criteria Count by Task Tier</h3>
                  <p className="text-muted-foreground mb-4">
                    The number of criteria you create should scale with task complexity. Use this as a guide when editing your synthetic rubric:
                  </p>
                  <div className="space-y-3">
                    <ContentCard className="border-l-4 border-l-primary">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">Full LBO, DCF, Merger Model</p>
                          <p className="text-sm text-muted-foreground">Complex multi-sheet models with integrated calculations</p>
                        </div>
                        <span className="text-lg font-bold text-primary">80–120</span>
                      </div>
                    </ContentCard>
                    <ContentCard className="border-l-4 border-l-chart-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">Operating Model, Sensitivity Tables, Covenant Analysis</p>
                          <p className="text-sm text-muted-foreground">Moderate complexity with focused financial logic</p>
                        </div>
                        <span className="text-lg font-bold text-chart-1">40–70</span>
                      </div>
                    </ContentCard>
                    <ContentCard className="border-l-4 border-l-chart-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">Comps, Precedent Transactions, Valuation Ranges</p>
                          <p className="text-sm text-muted-foreground">Structured analysis with standard calculations</p>
                        </div>
                        <span className="text-lg font-bold text-chart-2">20–40</span>
                      </div>
                    </ContentCard>
                    <ContentCard className="border-l-4 border-l-chart-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">Pitchbooks, CIMs, Presentations, Trackers</p>
                          <p className="text-sm text-muted-foreground">Content-heavy deliverables with formatting requirements</p>
                        </div>
                        <span className="text-lg font-bold text-chart-3">30–60</span>
                      </div>
                    </ContentCard>
                    <ContentCard className="border-l-4 border-l-chart-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">Data Room Management, Q&A Tracking, Emails</p>
                          <p className="text-sm text-muted-foreground">Process-oriented tasks with fewer calculations</p>
                        </div>
                        <span className="text-lg font-bold text-chart-4">10–25</span>
                      </div>
                    </ContentCard>
                  </div>
                  <InfoBox type="info" title="Why This Matters" className="mt-4">
                    If your synthetic rubric has significantly fewer criteria than expected for the task tier, you likely need to add more. If it has too many, check for stacked criteria or duplicates that should be consolidated.
                  </InfoBox>
                </div>

                {/* Weight System */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Understanding the Weight System</h3>
                  <p className="text-muted-foreground mb-4">Each criterion gets a weight that reflects its importance. Use weights of 1, 3, 5, or 10:</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-3 px-4 text-left font-semibold text-foreground">Weight</th>
                          <th className="py-3 px-4 text-left font-semibold text-foreground">Meaning</th>
                          <th className="py-3 px-4 text-left font-semibold text-foreground">Example</th>
                        </tr>
                      </thead>
                      <tbody>
                        {weightTable.map((row, i) => (
                          <tr key={i} className="border-b border-border">
                            <td className="py-3 px-4"><WeightBadge weight={row.weight} /></td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">{row.meaning}</td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">{row.example}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Rubric Categories */}
            <AccordionItem value="categories" className="border rounded-xl px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Rubric Categories
              </AccordionTrigger>
              <AccordionContent className="space-y-6 pb-6">
                <p className="text-muted-foreground">
                  Rubrics evaluate criteria based on the following categories. Each criterion should be assigned to the most appropriate category:
                </p>
                <div className="space-y-4">
                  {rubricCategories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <ContentCard key={index}>
                        <div className="flex items-start gap-4">
                          <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted ${category.color}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-2">{category.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                            <div className="p-3 rounded-lg bg-muted/50 border border-border">
                              <p className="text-xs font-medium text-foreground mb-1">Example:</p>
                              <p className="text-sm text-muted-foreground italic">{category.example}</p>
                            </div>
                          </div>
                        </div>
                      </ContentCard>
                    );
                  })}
                </div>

                <InfoBox type="info" title="Column Definitions">
                  <ul className="text-sm space-y-2 mt-2">
                    <li><strong>Criterion:</strong> The specific behavior you're checking for</li>
                    <li><strong>Category:</strong> Instruction Following, Client Readiness & Presentation, Technical Correctness, Transparency & Auditability, Internal Consistency, or Risk & Compliance</li>
                    <li><strong>Weight:</strong> The relative importance (1, 3, 5, or 10)</li>
                  </ul>
                </InfoBox>
              </AccordionContent>
            </AccordionItem>

            {/* Writing Rules */}
            <AccordionItem value="writing-rules" className="border rounded-xl px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                10 Rules for Good Criteria
              </AccordionTrigger>
              <AccordionContent className="space-y-6 pb-6">
                {rules.map((rule, i) => (
                  <ContentCard key={i}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{rule.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">{rule.description}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div className="flex gap-2 items-start text-sm p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                            <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{rule.bad}</span>
                          </div>
                          <div className="flex gap-2 items-start text-sm p-3 rounded-lg bg-chart-1/5 border border-chart-1/20">
                            <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{rule.good}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ContentCard>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Common Mistakes */}
            <AccordionItem value="common-mistakes" className="border rounded-xl px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Common Mistakes to Avoid
              </AccordionTrigger>
              <AccordionContent className="space-y-8 pb-6">
                {/* Stacked Criteria */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Stacked Criteria</h3>
                  <p className="text-muted-foreground mb-4">
                    A stacked criterion tries to test more than one measurable requirement at the same time. This makes evaluation ambiguous because a single ✓ / ✗ cannot fairly score multiple conditions.
                  </p>

                  <ContentCard className="mb-4">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      How to Spot Stacked Criteria
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      A stacked criterion almost always contains words like <strong>"and," "as well as," "along with,"</strong> or multiple verifiable conditions in one sentence.
                    </p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>Uses "and" to join two measurable requirements</li>
                      <li>Tests multiple calculations in one line</li>
                      <li>Combines formatting and logic checks</li>
                    </ul>
                  </ContentCard>

                  <ContentCard className="mb-4">
                    <h4 className="font-semibold text-foreground mb-4">Examples: Stacked vs. Atomic</h4>
                    <div className="space-y-6">
                      <div>
                        <div className="flex gap-2 items-start text-sm p-3 rounded-lg bg-destructive/5 border border-destructive/20 mb-3">
                          <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">"Calculates EV/EBITDA <strong>and</strong> EV/Revenue multiples for each peer company"</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex gap-2 items-start text-sm p-3 rounded-lg bg-chart-1/5 border border-chart-1/20">
                            <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">"Calculates EV/EBITDA multiple for each peer company"</span>
                          </div>
                          <div className="flex gap-2 items-start text-sm p-3 rounded-lg bg-chart-1/5 border border-chart-1/20">
                            <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">"Calculates EV/Revenue multiple for each peer company"</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ContentCard>

                  <InfoBox type="warning" title="Stacking Exception">
                    As a general guideline, avoid stacking. However, for complex prompts where the number of criteria would become unwieldy, stacking may be necessary. Use your best judgment. Stacked rubrics will be unstacked programmatically afterwards.
                  </InfoBox>
                </div>

                {/* What to Avoid */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">What to Avoid When Penalizing LLMs</h3>
                  <p className="text-muted-foreground mb-4">
                    Think about what is fair to penalize an LLM for. Avoid:
                  </p>
                  
                  <div className="space-y-4">
                    <ContentCard>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-foreground mb-1">Category-based penalization</h4>
                          <p className="text-sm text-muted-foreground">Do not flag a task as "bad" solely due to its category classification; evaluate based on quality and alignment with criteria.</p>
                        </div>
                      </div>
                    </ContentCard>

                    <ContentCard>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-foreground mb-1">Literal string matching</h4>
                          <p className="text-sm text-muted-foreground">Avoid penalizing for not using exact quoted labels (e.g., tab names) when the intent is clear and the naming is functionally correct.</p>
                        </div>
                      </div>
                    </ContentCard>

                    <ContentCard>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-foreground mb-1">Explicit template strings</h4>
                          <p className="text-sm text-muted-foreground">Do not include placeholders like {"{{prompt}}"} in rubrics. This increases tokens and hallucination probability.</p>
                        </div>
                      </div>
                    </ContentCard>

                    <ContentCard>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-foreground mb-1">Task-specific overfitting</h4>
                          <p className="text-sm text-muted-foreground">Avoid overly specific requirements (e.g., naming exact companies); define entities abstractly so the rubric generalizes beyond a single task.</p>
                        </div>
                      </div>
                    </ContentCard>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Error Taxonomy */}
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-destructive via-yellow-500 to-destructive bg-[length:200%_200%] animate-gradient-shift">
            <AccordionItem value="error-taxonomy" className="rounded-[10px] px-6 bg-background border-none">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-2">
                  <Tag className="h-5 w-5 text-primary" />
                  Comprehensive Error Taxonomy
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 space-y-8">
                {/* General Principle */}
                <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-serif text-lg font-bold text-foreground mb-3">General Principle</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/30">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-destructive" />
                        <span className="font-semibold text-destructive">Major Errors</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Violate the <strong>how (methodology)</strong> — they break the model and would make you send nothing rather than send the output to a client
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Edit3 className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                        <span className="font-semibold text-yellow-600 dark:text-yellow-500">Minor Errors</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Affect the <strong>how well (execution quality)</strong> — they need fixing but wouldn't cause client embarrassment
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rubric Errors Section */}
                <div>
                  <h4 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Rubric Errors
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Major Rubric Errors */}
                    <div className="rounded-2xl border-2 border-destructive bg-destructive/5 p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-destructive/10">
                          <AlertTriangle className="h-5 w-5 text-destructive" />
                        </div>
                        <div>
                          <h5 className="font-bold text-destructive">Major Rubric Errors</h5>
                        </div>
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
                            <li>Missing criteria for deal-breaking methodology violations</li>
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
                            <li>Minor formatting issues outscore methodology failures</li>
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
                        <div>
                          <h5 className="font-bold text-yellow-600 dark:text-yellow-500">Minor Rubric Errors</h5>
                        </div>
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
                </div>

                {/* Detailed Criteria Error Tags */}
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-4">
                    <Tag className="h-4 w-4 text-primary" />
                    Criteria Error Tags (Major)
                  </h4>
                  
                  <div className="space-y-4">
                    {errorTags.map((item) => (
                      <div 
                        key={item.tag} 
                        className={`rounded-xl border p-4 ${item.emphasis ? 'border-destructive/50 bg-destructive/5' : 'border-border bg-card'}`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 text-sm font-semibold rounded-lg bg-destructive/10 text-destructive">
                            {item.tag}
                          </span>
                          {item.emphasis && (
                            <span className="px-2 py-0.5 text-xs font-medium rounded bg-destructive text-destructive-foreground">
                              Common
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3">{item.definition}</p>
                        
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                            <div className="flex items-center gap-1.5 mb-1">
                              <XCircle className="h-3.5 w-3.5 text-destructive" />
                              <span className="text-xs font-semibold text-destructive">Bad</span>
                            </div>
                            <p className="text-xs text-muted-foreground italic">"{item.badExample}"</p>
                          </div>
                          <div className="p-3 rounded-lg bg-chart-1/5 border border-chart-1/20">
                            <div className="flex items-center gap-1.5 mb-1">
                              <CheckCircle className="h-3.5 w-3.5 text-chart-1" />
                              <span className="text-xs font-semibold text-chart-1">Good</span>
                            </div>
                            <p className="text-xs text-muted-foreground italic">"{item.goodExample}"</p>
                          </div>
                        </div>

                        {item.ruleOfThumb && (
                          <div className="mt-3 p-2 rounded bg-muted/50 border border-border">
                            <p className="text-xs text-muted-foreground"><strong>Tip:</strong> {item.ruleOfThumb}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Minor Criteria Error Tags */}
                <div className="p-4 rounded-xl border-2 border-yellow-500 bg-yellow-500/5">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <Edit3 className="h-4 w-4 text-yellow-600 dark:text-yellow-500" />
                    Criteria Error Tags (Minor)
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-500 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-foreground">Not Verb-Led</span>
                        <p className="text-xs text-muted-foreground">Criteria don't start with action verbs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-500 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-foreground">LLM-Generated Wording</span>
                        <p className="text-xs text-muted-foreground">Uses AI-style phrasing that could be more natural</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-500 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-foreground">Grammar & Wording</span>
                        <p className="text-xs text-muted-foreground">Minor grammatical issues or unclear wording</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-500 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-foreground">Redundant Criteria</span>
                        <p className="text-xs text-muted-foreground">Some overlap between criteria but not duplicates</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            </div>

          </Accordion>

          {/* Comprehensive Rubric Review Checklist */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <CheckCheck className="h-6 w-6 text-chart-1" />
              <h2 className="font-serif text-2xl font-bold text-foreground">Rubric Review Checklist</h2>
            </div>
            <p className="text-muted-foreground">
              Use this granular checklist as you complete each rubric. Check off each item before submitting.
            </p>

            {/* Pre-Review Setup */}
            <ContentCard className="border-primary/20">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
                Pre-Review Setup
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <span className="text-muted-foreground">Read through the complete prompt and understand the task requirements</span>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <span className="text-muted-foreground">Review the step-by-step instructions for the expected workflow</span>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <span className="text-muted-foreground">Examine the ideal deliverable to understand gold standard output</span>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <span className="text-muted-foreground">Identify all required output types (Excel, PowerPoint, PDF, etc.)</span>
                </div>
              </div>
            </ContentCard>

            {/* Criteria Quality Check */}
            <ContentCard className="border-primary/20">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
                Criteria Quality Check
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-xs text-muted-foreground italic mb-3">For each criterion, verify the following:</p>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Self-Contained</span>
                    <p className="text-xs text-muted-foreground">Can be evaluated without referencing the prompt, other criteria, or input files</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Atomic</span>
                    <p className="text-xs text-muted-foreground">Tests exactly one measurable requirement (no "and" combining multiple checks)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Specific & Measurable</span>
                    <p className="text-xs text-muted-foreground">Uses explicit, objective details (formulas, methods, cell references)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Process-Oriented</span>
                    <p className="text-xs text-muted-foreground">Validates methodology and workflow, not just final numerical answers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Verb-Led</span>
                    <p className="text-xs text-muted-foreground">Starts with action verb: Calculates, Creates, Outputs, Uses, Applies, Formats</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">No Justification</span>
                    <p className="text-xs text-muted-foreground">States requirement only — no "to ensure...", "in order to...", or "because..."</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Abstract Entities</span>
                    <p className="text-xs text-muted-foreground">Uses "target company" or "peer company" instead of specific company names</p>
                  </div>
                </div>
              </div>
            </ContentCard>

            {/* Avoid Common Errors */}
            <ContentCard className="border-primary/20">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">3</span>
                Avoid Common Errors
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-xs text-muted-foreground italic mb-3">Confirm none of these issues exist:</p>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">No Stacked Criteria</span>
                    <p className="text-xs text-muted-foreground">Split any criteria testing multiple requirements into separate items</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">No String Literals</span>
                    <p className="text-xs text-muted-foreground">Don't require exact tab names, labels, or quoted strings when intent is clear</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">No Duplicates</span>
                    <p className="text-xs text-muted-foreground">Each requirement tested only once — no redundant criteria</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">No Template Strings</span>
                    <p className="text-xs text-muted-foreground">Removed all {"{{placeholder}}"} syntax from criteria</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">No Overfitting</span>
                    <p className="text-xs text-muted-foreground">Criteria would generalize to similar tasks, not just this specific prompt</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">No Vague Language</span>
                    <p className="text-xs text-muted-foreground">Removed "appropriate", "professional", "good" — use specific standards</p>
                  </div>
                </div>
              </div>
            </ContentCard>

            {/* Category & Coverage */}
            <ContentCard className="border-primary/20">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">4</span>
                Category & Coverage Check
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-xs text-muted-foreground italic mb-3">Verify category assignments and coverage:</p>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Correct Categories</span>
                    <p className="text-xs text-muted-foreground">Each criterion assigned to most appropriate category (Instruction Following, Technical Correctness, etc.)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Instruction Following Covered</span>
                    <p className="text-xs text-muted-foreground">Criteria verify explicit prompt requirements are met</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Technical Correctness Covered</span>
                    <p className="text-xs text-muted-foreground">Criteria validate formulas, calculations, and financial methodology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Client Readiness Covered</span>
                    <p className="text-xs text-muted-foreground">Criteria check presentation quality and formatting standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Internal Consistency Covered</span>
                    <p className="text-xs text-muted-foreground">Criteria verify values match across sections/tabs/deliverables</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">No Critical Gaps</span>
                    <p className="text-xs text-muted-foreground">All essential requirements from step-by-step are evaluated</p>
                  </div>
                </div>
              </div>
            </ContentCard>

            {/* Weight Distribution */}
            <ContentCard className="border-primary/20">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">5</span>
                Weight Distribution Check
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-xs text-muted-foreground italic mb-3">Confirm weights are appropriately assigned:</p>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Weight 10: Deal-Breakers Only</span>
                    <p className="text-xs text-muted-foreground">Reserved for critical requirements that would make output unusable if missed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Weight 5: Core Financial Logic</span>
                    <p className="text-xs text-muted-foreground">Used for important calculations and methodology requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Weight 3: Technical Execution</span>
                    <p className="text-xs text-muted-foreground">Used for significant but non-critical technical requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Weight 1: Nice-to-Haves Only</span>
                    <p className="text-xs text-muted-foreground">Reserved for formatting, style, and polish items</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Methodology {">"} Formatting</span>
                    <p className="text-xs text-muted-foreground">Higher weights on methodology failures than formatting issues</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Distinguishes Quality</span>
                    <p className="text-xs text-muted-foreground">Rubric can differentiate between passing and failing outputs</p>
                  </div>
                </div>
              </div>
            </ContentCard>

            {/* Final Verification */}
            <ContentCard className="border-primary/20 bg-primary/5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">6</span>
                Final Verification
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-xs text-muted-foreground italic mb-3">Complete these final checks before submission:</p>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Coherence Check</span>
                    <p className="text-xs text-muted-foreground">No criteria contradict each other; all standards can be met simultaneously</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Step-by-Step Alignment</span>
                    <p className="text-xs text-muted-foreground">All critical steps from step-by-step instructions have corresponding criteria</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Prompt Alignment</span>
                    <p className="text-xs text-muted-foreground">All explicit prompt requirements have corresponding criteria</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">IB Convention Validation</span>
                    <p className="text-xs text-muted-foreground">Includes criteria for fundamental investment banking conventions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Client-Ready Standard</span>
                    <p className="text-xs text-muted-foreground">Rubric catches errors that would cause client embarrassment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Inter-Rater Reliability</span>
                    <p className="text-xs text-muted-foreground">Any evaluator would score criteria the same way (no ambiguity)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                  <div>
                    <span className="text-muted-foreground font-medium">Save & Submit</span>
                    <p className="text-xs text-muted-foreground">Progress saved and block submitted/finished before exiting</p>
                  </div>
                </div>
              </div>
            </ContentCard>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default Rubrics;
