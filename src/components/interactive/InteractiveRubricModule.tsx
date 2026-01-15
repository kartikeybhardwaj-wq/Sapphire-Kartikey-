import { useState } from "react";
import { CheckCircle, AlertTriangle, BookOpen, Target, Users, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface Criterion {
  id: number | string;
  text: string;
  weight: number;
  type: string;
  quality: "good" | "bad" | "problematic";
  teachingPoints: string[];
}

interface InteractiveRubricModuleProps {
  title: string;
  prompt: string;
  idealAnswer: {
    recessionPeriods: string[];
    mcdCalculations: string[];
    wecCalculations: string[];
    averages: string[];
    recommendation: string;
    disclaimers: string[];
  };
  criteria: Criterion[];
}

const defaultPrompt = `I am a risk adverse investor who seeks to utilize market research to select recession proof stocks to add to my portfolio.

Given the following stocks identify the maximum drawdown (Peak-to-trough) during US Recessions between January 1st, 2000, and December 31, 2019. In the case of this analysis, we will use The National Bureau of Economics definition that defines a recession as USREC = 1. Please show the calculation steps utilized to determine the maximum drawdown on the stocks identified below, during each period of recession. Please present your response in the format below.

McDonalds (MCD) Recession Period and dates (Start and Stop as identified by a USREC equivalent to 1), Maximum drawdown

WEC Energy (WEC) Recession Period and dates (Start and Stop as identified by a USREC equivalent to 1), Maximum drawdown

NOTE: Round to the nearest hundredth place.

You can access the report from The National Bureau of Economic here >>> https://fred.stlouisfed.org/series/USREC ; the report is also attached for your convenience. Historical Pricing data is attached.

Unless there is an error or admission. Please only respond as requested and provide the recessionary periods - and the corresponding maximum draw-down calculations.

Assuming the best performance based on the average maximum drawdown during the aforementioned periods, which STOCK should I invest in?`;

const defaultCriteria: Criterion[] = [
  {
    id: 1,
    text: "States that the first recessionary period in the United States per the attached report is from April 1, 2001, through November 1, 2001.",
    weight: 5,
    type: "Mandatory",
    quality: "good",
    teachingPoints: ["Self-contained with specific dates", "References source material", "Atomic - tests one concept"]
  },
  {
    id: 2,
    text: "States that the second recessionary period in the United States per the attached report is from August 1, 2008, through June 01, 2009.",
    weight: 5,
    type: "Mandatory",
    quality: "good",
    teachingPoints: ["Parallel structure to first criterion", "Complete date ranges", "Objective and verifiable"]
  },
  {
    id: 3,
    text: "States McDonald's (MCD) Maximum drawdown is equivalent to 19.35 percent during the recessionary period of April 1, 2001, through November 01, 2001.",
    weight: 5,
    type: "Mandatory",
    quality: "good",
    teachingPoints: ["Self-contained with context", "Specific numerical requirement", "Links calculation to time period"]
  },
  {
    id: 4,
    text: "McDonald's (MCD) Maximum drawdown is calculated as (16.760 - 13.5162)/16.760 X 100 during the recessionary period of April 1, 2001, through November 01, 2001.",
    weight: 5,
    type: "Mandatory",
    quality: "good",
    teachingPoints: ["Shows work requirement", "Exact formula verification", "Promotes transparency in reasoning"]
  },
  {
    id: 13,
    text: "Identifies a recession that is not indicated by the National Bureau of Economics definition that defines a recession as USREC = 1",
    weight: 5,
    type: "Mandatory - Avoid",
    quality: "problematic",
    teachingPoints: ["Negative criterion", "Could be confusing", "Better as positive instruction"]
  },
  {
    id: "stacked",
    text: "States that the first recessionary period is April 1, 2001 through November 1, 2001, and states that the second recessionary period is August 1, 2008 through June 1, 2009.",
    weight: 5,
    type: "Example of Stacking",
    quality: "bad",
    teachingPoints: ["Tests two concepts in one criterion", "Hard to score partial credit", "Should be split into separate criteria"]
  },
  {
    id: "non-contained",
    text: "States that MCD Maximum Drawdown is equivalent to 19.35%",
    weight: 5,
    type: "Non-contained",
    quality: "bad",
    teachingPoints: ["Missing context", "Which time period?", "Evaluator needs additional information"]
  }
];

const steps = [
  {
    title: "Understanding the Task",
    description: "Before creating rubrics, we need to understand what makes an ideal response to this complex financial analysis prompt.",
    type: "overview"
  },
  {
    title: "Develop Your Ideal Answer",
    description: "Based on your expertise, what would a perfect response include?",
    type: "ideal_answer"
  },
  {
    title: "Analyzing Good Criteria",
    description: "Let's examine well-written criteria from this rubric.",
    type: "good_criteria"
  },
  {
    title: "Identifying Problematic Criteria",
    description: "Learn to spot and fix common rubric problems.",
    type: "bad_criteria"
  },
  {
    title: "Key Principles Summary",
    description: "Essential takeaways for writing effective rubrics.",
    type: "summary"
  }
];

export const InteractiveRubricModule = ({
  title = "Finance Rubric Module",
  prompt = defaultPrompt,
  criteria = defaultCriteria,
}: Partial<InteractiveRubricModuleProps>) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, boolean | string>>({});
  const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>({});
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const goodCriteria = criteria.filter(c => c.quality === "good");
  const badCriteria = criteria.filter(c => c.quality === "bad" || c.quality === "problematic");

  const handleAnswer = (questionId: string, answer: boolean | string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const showStepFeedback = (stepId: string) => {
    setShowFeedback(prev => ({ ...prev, [stepId]: true }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex gap-1 mb-6 overflow-x-auto pb-2">
      {steps.map((step, index) => (
        <button
          key={index}
          onClick={() => setCurrentStep(index)}
          className={cn(
            "px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all",
            index === currentStep
              ? "bg-primary text-primary-foreground"
              : completedSteps.has(index)
              ? "bg-chart-1/20 text-chart-1 border border-chart-1/30"
              : "bg-muted text-muted-foreground hover:bg-accent"
          )}
        >
          <span className="flex items-center gap-1.5">
            {completedSteps.has(index) && <Check className="h-3 w-3" />}
            Step {index + 1}
          </span>
        </button>
      ))}
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Learning Objectives
        </h3>
        <ul className="space-y-2 text-foreground">
          <li className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            Identify components of an ideal response
          </li>
          <li className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            Recognize well-written vs. problematic criteria
          </li>
          <li className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            Apply atomicity and self-containment principles
          </li>
          <li className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            Understand the relationship between solutions and rubrics
          </li>
        </ul>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="font-semibold text-foreground mb-3">The Finance Prompt:</h3>
        <div className="bg-accent/50 p-4 rounded-lg text-sm font-mono whitespace-pre-wrap text-muted-foreground max-h-64 overflow-y-auto">
          {prompt}
        </div>
      </div>

      <div className="rounded-xl border border-secondary/30 bg-secondary/10 p-6">
        <h3 className="font-semibold text-foreground mb-2">Why This Example Matters</h3>
        <p className="text-muted-foreground">
          This finance case demonstrates a complex rubric with 14 criteria covering calculations, 
          source verification, and professional disclaimers. You'll learn to distinguish between 
          well-crafted criteria and common pitfalls.
        </p>
      </div>
    </div>
  );

  const idealAnswerChecklist = [
    "Identification of the two recession periods (2001 and 2008-2009)",
    "Specific dates for each recession period",
    "Maximum drawdown calculations for MCD in both periods",
    "Maximum drawdown calculations for WEC in both periods",
    "The actual formulas used for calculations",
    "Average drawdown comparison between the two stocks",
    "Investment recommendation based on the analysis",
    "Professional disclaimers about financial advice"
  ];

  const renderIdealAnswer = () => (
    <div className="space-y-6">
      <div className="rounded-xl border border-chart-1/30 bg-chart-1/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-chart-1" />
          What Should an Ideal Response Include?
        </h3>
        <p className="text-muted-foreground mb-4">
          Before looking at AI responses, envision what a financial expert would provide. 
          Check off what you think should be included:
        </p>
        
        <div className="space-y-3">
          {idealAnswerChecklist.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Checkbox
                id={`ideal_${index}`}
                checked={!!userAnswers[`ideal_${index}`]}
                onCheckedChange={(checked) => handleAnswer(`ideal_${index}`, !!checked)}
              />
              <Label htmlFor={`ideal_${index}`} className="text-foreground cursor-pointer leading-relaxed">
                {item}
              </Label>
            </div>
          ))}
        </div>

        {!showFeedback.ideal && (
          <Button onClick={() => showStepFeedback("ideal")} className="mt-6">
            Check My Thinking
          </Button>
        )}

        {showFeedback.ideal && (
          <div className="mt-6 p-4 bg-card rounded-lg border border-chart-1/20">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-chart-1" />
              Expert Analysis
            </h4>
            <p className="text-muted-foreground mb-3">
              All of these elements are essential! This comprehensive response would include:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-foreground mb-2">Required Data Points:</h5>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Recession periods with exact dates</li>
                  <li>• All drawdown calculations</li>
                  <li>• Comparative analysis</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-foreground mb-2">Professional Standards:</h5>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Show calculation steps</li>
                  <li>• Provide clear recommendation</li>
                  <li>• Include appropriate disclaimers</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderGoodCriteria = () => (
    <div className="space-y-6">
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-primary" />
          Well-Written Criteria Analysis
        </h3>
        <p className="text-muted-foreground mb-4">
          Let's examine some well-crafted criteria from this rubric. Click on each to learn why they work well:
        </p>

        <div className="space-y-4">
          {goodCriteria.map((criterion) => (
            <div key={String(criterion.id)} className="bg-card rounded-lg border border-border overflow-hidden">
              <button
                onClick={() => showStepFeedback(`good_${criterion.id}`)}
                className="w-full p-4 text-left hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs">
                        Weight: {criterion.weight}
                      </Badge>
                      <Badge className="text-xs bg-chart-1/20 text-chart-1 border-chart-1/30">
                        {criterion.type}
                      </Badge>
                    </div>
                    <p className="text-foreground text-sm">{criterion.text}</p>
                  </div>
                  <div className="ml-4 text-muted-foreground">
                    {showFeedback[`good_${criterion.id}`] ? "📖" : "👁️"}
                  </div>
                </div>
              </button>

              {showFeedback[`good_${criterion.id}`] && (
                <div className="px-4 pb-4 border-t border-border bg-accent/30">
                  <h4 className="font-semibold text-foreground mt-3 mb-2 text-sm">Why This Works Well:</h4>
                  <ul className="space-y-1">
                    {criterion.teachingPoints.map((point, index) => (
                      <li key={index} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-chart-1 mr-2 mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-card rounded-lg border border-primary/20">
          <h4 className="font-semibold text-foreground mb-2">Key Success Pattern:</h4>
          <p className="text-muted-foreground text-sm">
            Notice how each criterion is <strong className="text-foreground">self-contained</strong> (includes all needed context), 
            <strong className="text-foreground"> atomic</strong> (tests one thing), and <strong className="text-foreground">specific</strong> (exact numbers and dates).
          </p>
        </div>
      </div>
    </div>
  );

  const renderBadCriteria = () => (
    <div className="space-y-6">
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          Common Rubric Problems
        </h3>
        <p className="text-muted-foreground mb-4">
          Let's examine problematic criteria and learn how to fix them:
        </p>

        <div className="space-y-6">
          {/* Stacked Criteria */}
          <div className="bg-card rounded-lg border border-destructive/20 overflow-hidden">
            <div className="p-4 bg-destructive/5">
              <h4 className="font-semibold text-foreground mb-2">Problem 1: Stacked Criteria</h4>
              <div className="bg-card p-3 rounded border border-destructive/20">
                <p className="text-muted-foreground italic text-sm">
                  "{badCriteria.find(c => c.id === "stacked")?.text}"
                </p>
              </div>
            </div>
            
            <div className="p-4">
              <h5 className="font-medium text-destructive mb-2 text-sm">What's Wrong?</h5>
              <ul className="space-y-1 text-muted-foreground text-sm mb-4">
                <li>• Tests two separate concepts in one criterion</li>
                <li>• Hard to give partial credit</li>
                <li>• Unclear which part failed if response is incomplete</li>
              </ul>

              <h5 className="font-medium text-chart-1 mb-2 text-sm">How to Fix:</h5>
              <div className="bg-chart-1/5 p-3 rounded border border-chart-1/20">
                <p className="text-foreground mb-2 text-sm font-medium">Split into two criteria:</p>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>1. "States that the first recessionary period is April 1, 2001 through November 1, 2001"</li>
                  <li>2. "States that the second recessionary period is August 1, 2008 through June 1, 2009"</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Non-contained Criteria */}
          <div className="bg-card rounded-lg border border-destructive/20 overflow-hidden">
            <div className="p-4 bg-destructive/5">
              <h4 className="font-semibold text-foreground mb-2">Problem 2: Non-Self-Contained</h4>
              <div className="bg-card p-3 rounded border border-destructive/20">
                <p className="text-muted-foreground italic text-sm">
                  "{badCriteria.find(c => c.id === "non-contained")?.text}"
                </p>
              </div>
            </div>
            
            <div className="p-4">
              <h5 className="font-medium text-destructive mb-2 text-sm">What's Wrong?</h5>
              <ul className="space-y-1 text-muted-foreground text-sm mb-4">
                <li>• Missing context - which time period?</li>
                <li>• Evaluator needs to reference other materials</li>
                <li>• Ambiguous and hard to score consistently</li>
              </ul>

              <h5 className="font-medium text-chart-1 mb-2 text-sm">How to Fix:</h5>
              <div className="bg-chart-1/5 p-3 rounded border border-chart-1/20">
                <p className="text-foreground mb-1 text-sm font-medium">Add full context:</p>
                <p className="text-muted-foreground text-sm">
                  "States McDonald's (MCD) Maximum drawdown is equivalent to 19.35 percent during the recessionary period of April 1, 2001, through November 01, 2001"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz */}
        <div className="mt-6 p-4 bg-card rounded-lg border border-border">
          <h4 className="font-semibold text-foreground mb-3">Quick Check: Can you spot the problems?</h4>
          <div className="space-y-3">
            <p className="text-foreground text-sm">
              <strong>Criterion:</strong> "Provides accurate calculations and uses the correct formula and shows work clearly"
            </p>
            <RadioGroup
              value={userAnswers.problem_check as string || ""}
              onValueChange={(value) => handleAnswer("problem_check", value)}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="stacked" id="stacked" />
                <Label htmlFor="stacked" className="text-sm">Stacked (multiple concepts)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="vague" id="vague" />
                <Label htmlFor="vague" className="text-sm">Too vague</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="both" />
                <Label htmlFor="both" className="text-sm">Both problems</Label>
              </div>
            </RadioGroup>
            
            {userAnswers.problem_check === "both" && (
              <div className="mt-2 p-3 bg-chart-1/10 rounded border border-chart-1/20 text-sm flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-chart-1 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">
                  Correct! This criterion has multiple problems: it tests three concepts (accuracy, formula, showing work) and uses vague terms like "clearly."
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSummary = () => (
    <div className="space-y-6">
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Key Principles for Effective Rubrics
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card p-4 rounded-lg border border-chart-1/20">
            <h4 className="font-semibold text-chart-1 mb-3 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Self-contained:</strong> Include all necessary context</li>
              <li><strong className="text-foreground">Atomic:</strong> Test one concept per criterion</li>
              <li><strong className="text-foreground">Specific:</strong> Use exact numbers, dates, formulas</li>
              <li><strong className="text-foreground">Objective:</strong> Minimize subjective interpretation</li>
              <li><strong className="text-foreground">Complete:</strong> Cover all aspects of ideal response</li>
            </ul>
          </div>

          <div className="bg-card p-4 rounded-lg border border-destructive/20">
            <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Stacking:</strong> Multiple concepts in one criterion</li>
              <li><strong className="text-foreground">Vague language:</strong> "Clear," "good," "appropriate"</li>
              <li><strong className="text-foreground">Missing context:</strong> References without full details</li>
              <li><strong className="text-foreground">Double negatives:</strong> Confusing patterns</li>
              <li><strong className="text-foreground">Incomplete coverage:</strong> Missing key elements</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-card rounded-lg border border-primary/20">
          <h4 className="font-semibold text-foreground mb-2">The Golden Rule:</h4>
          <p className="text-foreground text-lg font-medium">
            Your rubric should guide anyone to create the same ideal response you envisioned.
          </p>
          <p className="text-muted-foreground mt-2 text-sm">
            If another expert could use your rubric to generate the perfect answer without seeing 
            the original prompt, you've succeeded.
          </p>
        </div>

        <div className="mt-6 p-4 bg-chart-1/10 rounded-lg border border-chart-1/20">
          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-chart-1" />
            Ready for Practice?
          </h4>
          <p className="text-muted-foreground text-sm">
            You now understand the essential principles for creating effective rubrics. 
            Apply these concepts when creating your own rubrics.
          </p>
        </div>
      </div>
    </div>
  );

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">Progress</span>
          <span className="text-sm font-medium text-foreground">{currentStep + 1} of {steps.length}</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      {/* Step Navigation */}
      {renderStepIndicator()}

      {/* Step Content */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="mb-6">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
            {steps[currentStep].title}
          </h2>
          <p className="text-muted-foreground">
            {steps[currentStep].description}
          </p>
        </div>

        {currentStep === 0 && renderOverview()}
        {currentStep === 1 && renderIdealAnswer()}
        {currentStep === 2 && renderGoodCriteria()}
        {currentStep === 3 && renderBadCriteria()}
        {currentStep === 4 && renderSummary()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 0}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        
        <Button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="gap-2"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
