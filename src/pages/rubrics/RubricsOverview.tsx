import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { InfoBox } from "@/components/InfoBox";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { PageNavigation } from "@/components/PageNavigation";
import { ChapterSection } from "@/components/ChapterSection";
import { MajorMinorQuiz } from "@/components/MajorMinorQuiz";
import { PageNavigationMenu } from "@/components/PageNavigationMenu";
import { FileText, CheckCircle, XCircle, Play, ChevronLeft, ChevronRight, AlertOctagon, Sparkles, Target, Edit3, AlertTriangle, ListChecks, Tag } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const RubricsOverview = () => {
  const navigationItems = [
    { id: "chapter-1", label: "Overview & Fundamentals" },
    { id: "what-is-rubric", label: "What Is a Rubric?" },
    { id: "what-is-criterion", label: "What Is a Criterion?" },
    { id: "common-failures", label: "Common Failure Points" },
    { id: "training-videos", label: "Training Videos" },
    { id: "knowledge-check", label: "Knowledge Check" },
    { id: "chapter-2", label: "Synthetic Rubric Editing" },
    { id: "chapter-3", label: "Criteria Guidelines" },
  ];
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

  return (
    <Layout>
      <PageHeader 
        icon={FileText} 
        title="Rubric Guide" 
        description="Learn how to create objective, measurable evaluation criteria for investment banking AI tasks. Your rubrics will help evaluate model performance across reasoning, tool usage, and financial analysis." 
      />

      <div className="flex gap-0 w-full">
        <PageNavigationMenu items={navigationItems} />
        
        <div className="container mx-auto px-4 py-8 pt-4 flex-1 min-w-0">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Chapter 1: Overview & Fundamentals */}
          <ChapterSection id="chapter-1" chapter={1} title="Overview & Fundamentals">
            {/* What is a Rubric */}
            <ContentCard id="what-is-rubric">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                What Is a Rubric?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A rubric is a scoring guide — a list of specific things to look for when evaluating 
                an AI's response to an investment banking task. Rubrics turn subjective questions ("Was this analysis good?") into 
                objective ones ("Did this model correctly calculate EV/EBITDA?").
              </p>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Example:</strong> Instead of asking "Did the AI build a good LBO model?", 
                  we check specific criteria like "Calculates IRR using the XIRR function with correct cash flow inputs" ✓ or ✗
                </p>
              </div>
            </ContentCard>

            {/* What is a Criterion */}
            <ContentCard id="what-is-criterion">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-primary" />
                What Is a Criterion?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A criterion is a single, measurable requirement that can be evaluated as true or false. Each criterion should:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Be <strong>self-contained</strong> — evaluable without external context</li>
                <li>Be <strong>atomic</strong> — test one concept at a time</li>
                <li>Be <strong>specific and measurable</strong> — use explicit details, not vague language</li>
                <li>Be <strong>process-oriented</strong> — validate methodology, not just outcomes</li>
              </ul>
            </ContentCard>

            {/* Common Failure Points */}
            <ContentCard id="common-failures" className="border-2 border-destructive/30">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Common Failure Points When Writing Rubrics
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-destructive" />
                    Stacked Criteria
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Testing multiple requirements in a single criterion. <strong>Fix:</strong> Split into atomic items.
                  </p>
                  <div className="text-xs text-muted-foreground bg-background p-2 rounded">
                    <span className="font-medium text-destructive">Bad:</span> "Creates a comps table with correct formatting and calculates all multiples correctly"
                    <br />
                    <span className="font-medium text-chart-1">Good:</span> Split into separate criteria for formatting and each multiple calculation
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-destructive" />
                    Ambiguity
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Using vague language that can't be objectively evaluated. <strong>Fix:</strong> Use specific, measurable requirements.
                  </p>
                  <div className="text-xs text-muted-foreground bg-background p-2 rounded">
                    <span className="font-medium text-destructive">Bad:</span> "Creates a good sensitivity table"
                    <br />
                    <span className="font-medium text-chart-1">Good:</span> "Creates a 5x5 sensitivity table with Buyout Premium % (15-25%) as column inputs and Exit Multiple (26-34x) as row inputs"
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-destructive" />
                    Bad Weighting
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Assigning weights that don't reflect importance. <strong>Fix:</strong> Critical logic gets weight 10, formatting gets weight 1.
                  </p>
                  <div className="text-xs text-muted-foreground bg-background p-2 rounded">
                    <span className="font-medium text-destructive">Bad:</span> Formatting criterion with weight 10, core calculation with weight 1
                    <br />
                    <span className="font-medium text-chart-1">Good:</span> Core calculation with weight 10, formatting with weight 1
                  </div>
                </div>
              </div>
            </ContentCard>

            {/* Video Gallery - Enhanced Visibility */}
            <ContentCard id="training-videos" className="border-2 border-primary/30">
              <div className="flex items-center gap-2 mb-4">
                <Play className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-xl font-bold text-foreground">Training Videos</h2>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                These videos provide foundational training on rubrics. While some examples may reference other domains, the core principles apply directly to investment banking tasks.
              </p>
              
              {/* Enhanced Carousel with Better Visibility */}
              <div className="relative bg-muted/30 rounded-xl p-4 border-2 border-primary/20">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                  Interactive Video Slider
                </div>
                
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
                
                {/* Enhanced Navigation Arrows */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/95 backdrop-blur-sm border-2 border-primary/30 hover:border-primary shadow-lg"
                  onClick={() => api?.scrollPrev()}
                  disabled={current === 0}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/95 backdrop-blur-sm border-2 border-primary/30 hover:border-primary shadow-lg"
                  onClick={() => api?.scrollNext()}
                  disabled={current === count - 1}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Enhanced Slide Indicator */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="flex gap-2">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`h-3 rounded-full transition-all ${
                        current === index 
                          ? "w-10 bg-primary shadow-md" 
                          : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to video ${index + 1}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">
                  Video {current + 1} of {count}
                </span>
              </div>
            </ContentCard>

            {/* Knowledge Check Divider */}
            <div id="knowledge-check" className="my-20 space-y-6">
              {/* Decorative Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gradient-to-r from-transparent via-border to-transparent" />
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-background px-6 py-2 rounded-full border-2 border-primary/30 shadow-sm">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      Knowledge Check
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Major vs Minor Errors Quiz */}
              <div className="mt-10">
                <MajorMinorQuiz />
              </div>
            </div>
          </ChapterSection>

          {/* Chapter 2: Synthetic Rubric Editing */}
          <ChapterSection id="chapter-2" chapter={2} title="Synthetic Rubric Editing">
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
              
              {/* 50% Minimum Callout */}
              <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/30">
                <p className="text-lg font-bold text-destructive text-center">
                  At least 50% of the rubric must be tweaked
                </p>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                You must <strong>materially revise</strong> the synthetic rubric until it is:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm mb-4">
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

              <p className="text-sm font-medium text-foreground mb-2">When editing, always:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0" />
                  <span><strong>Correct unclear wording</strong> — delete LLM-vibe content and increase specificity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-chart-1 flex-shrink-0" />
                  <span><strong>Make criteria succinct</strong> — trim unnecessary words while preserving meaning</span>
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

                <ContentCard className="border-amber-500/30 bg-amber-500/5">
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-sm">6</div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Ask Yourself These Questions</h4>
                      <p className="text-sm text-muted-foreground mb-3">Before submitting, review each criterion and ask:</p>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-background border border-border">
                          <p className="text-sm font-medium text-foreground mb-1">1) Is the criterion ambiguous?</p>
                          <p className="text-xs text-muted-foreground mb-2">Could two reasonable evaluators disagree on what this means? If yes, rewrite using explicit, measurable requirements (dimensions, axes, formulas, outputs, tolerances).</p>
                          <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded mb-2">
                            <span className="font-medium text-destructive">Ambiguous (bad):</span> "Uses appropriate formatting."
                          </div>
                          <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                            <span className="font-medium text-chart-1">Measurable (good):</span> "Each sensitivity table includes bold row/column headers that label the sensitized variables (e.g., 'Buyout Premium %' and 'Exit Multiple (x)'), and units are shown (% and x)."
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-background border border-border">
                          <p className="text-sm font-medium text-foreground mb-1">2) Is there unnecessary or extra content?</p>
                          <p className="text-xs text-muted-foreground mb-2">Does every word add evaluative value? Cut filler. Keep the measurable requirement.</p>
                          <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded mb-2">
                            <span className="font-medium text-destructive">Bloated (bad):</span> "The model should ensure that it properly and correctly calculates the total debt amount in Sources & Uses in accordance with the leverage assumptions."
                          </div>
                          <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                            <span className="font-medium text-chart-1">Tight (good):</span> "Debt in Sources & Uses is calculated as (Total Leverage % × Total Uses) × (Debt % of Total Leverage) and links to the labeled leverage input cells."
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-background border border-border">
                          <p className="text-sm font-medium text-foreground mb-1">3) Does this seem LLM-generated?</p>
                          <p className="text-xs text-muted-foreground mb-2">If it reads robotic, generic, or like marketing language, rewrite it into a concrete banker check.</p>
                          <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded mb-2">
                            <span className="font-medium text-destructive">LLM-vibe (bad):</span> "Demonstrates a comprehensive understanding of sponsor return sensitivities and presents insights in a professional manner."
                          </div>
                          <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                            <span className="font-medium text-chart-1">Banker-grade (good):</span> "PowerPoint slide includes a one-sentence tagline stating the sponsor return range with specific numbers (e.g., MOIC range and IRR range) consistent with the sensitivity outputs."
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
                          <p className="text-sm font-medium text-foreground mb-1">Quick rule</p>
                          <p className="text-xs text-muted-foreground">
                            If a criterion contains words like "appropriate," "proper," "professional," "comprehensive," or "well done," it almost always needs to be rewritten into a specific deliverable behavior (what exists, where it exists, and how it's calculated/formatted).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ContentCard>
              </div>
            </div>
            </section>
          </ChapterSection>

          {/* Chapter 3: Criteria Guidelines */}
          <ChapterSection id="chapter-3" chapter={3} title="Criteria Guidelines">
            <ContentCard>
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">Expected Criteria Count by Task Type</h2>
            <p className="text-muted-foreground mb-4">
              Different task types require different numbers of criteria. Use these ranges as a guide:
            </p>
            <div className="space-y-3">
              {[
                { type: "Full 3-Statement / LBO / Merger Model", range: "70–120+", description: "Highly complex, full build-outs with multiple tabs", color: "border-l-primary" },
                { type: "Operating Model, Sensitivity Tables, Covenant Analysis", range: "40–70", description: "Moderate complexity with focused financial logic", color: "border-l-chart-1" },
                { type: "Comps, Precedent Transactions, Valuation Ranges", range: "20–40", description: "Structured analysis with standard calculations", color: "border-l-chart-2" },
                { type: "Pitchbooks, CIMs, Presentations, Trackers", range: "30–60", description: "Content-heavy deliverables with formatting requirements", color: "border-l-chart-3" },
                { type: "Data Room Management, Q&A Tracking, Emails", range: "10–25", description: "Process-oriented tasks with fewer calculations", color: "border-l-chart-4" },
              ].map((item, i) => (
                <div key={i} className={`p-4 rounded-lg bg-card border border-border border-l-4 ${item.color}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{item.type}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="text-lg font-bold text-foreground">{item.range}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <InfoBox type="info" title="Why This Matters" className="mt-4">
              If your synthetic rubric has significantly fewer criteria than expected for the task tier, 
              you likely need to add more. If it has too many, check for stacked criteria or duplicates 
              that should be consolidated.
            </InfoBox>
          </ContentCard>
          </ChapterSection>

          <PageNavigation />

        </div>
      </div>
      </div>
    </Layout>
  );
};

export default RubricsOverview;
