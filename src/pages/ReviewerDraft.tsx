import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { InfoBox } from "@/components/InfoBox";
import { CheckCircle, XCircle, ArrowRight, ExternalLink, AlertTriangle, Star, Clock, MessageSquare, Shield, Users, FileCheck, Archive, Flag, Edit3, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Reviewer = () => {
  const errorTags = [
    {
      tag: "Double Negative",
      definition: "A criterion that uses two negatives, making it confusing to evaluate.",
      problem: "Double negatives create ambiguity about what the criterion is actually testing.",
      badExample: "Does not recommend any laptop that is not lightweight.",
      goodExample: "Recommends at least one laptop weighing 3.5 pounds or less."
    },
    {
      tag: "Duplicate",
      definition: "Two or more criteria that test the same requirement.",
      problem: "Duplicates artificially inflate or deflate scores by testing one thing multiple times.",
      badExample: "Criterion 3: 'Recommends at least one backpack with 25L capacity.'\nCriterion 7: 'Recommends at least one backpack holding 25 liters or more.'",
      goodExample: "Keep only one criterion: 'Recommends at least one backpack with a capacity of at least 25 liters.'"
    },
    {
      tag: "Inverse",
      definition: "A positive and negative criterion that are exact opposites of each other.",
      problem: "Inverses test the same condition twice from opposite directions, which is redundant.",
      badExample: "Positive: 'Recommends at least one chair 18 inches or taller.'\nNegative: 'Recommends any chair shorter than 18 inches.'",
      goodExample: "Keep only the positive: 'Recommends at least one chair with a seat height of at least 18 inches.'"
    },
    {
      tag: "Model-Focused",
      definition: "A criterion that evaluates how the AI writes or formats its response, not the products it recommends.",
      problem: "Rubrics must evaluate product attributes. Criteria about URLs, sentence structure, explanation quality, or wording style are invalid unless explicitly required by the prompt.",
      badExample: "Recommends a product with a URL that contains the product name.",
      goodExample: "Recommends at least one laptop with 16GB RAM or more.",
      emphasis: true,
      extraExamples: [
        { bad: "Mentions measurements in millimeters rather than inches.", reason: "Evaluates phrasing, not product attributes. (Valid only if millimeters is specified in the prompt or standard for the product category.)" },
        { bad: "Uses objective specs in three descriptions.", reason: "Evaluates AI's writing style." },
        { bad: "Uses bullet points to describe key specifications.", reason: "Evaluates formatting, not product attributes." }
      ]
    },
    {
      tag: "Not Measurable",
      definition: "A criterion that uses subjective or vague language that cannot be objectively evaluated.",
      problem: "If two reviewers could disagree on whether a criterion is met, it's not measurable.",
      badExample: "Recommends at least one laptop with excellent battery life.",
      goodExample: "Recommends at least one laptop with a battery capacity of 4500 mAh or greater."
    },
    {
      tag: "Not Relevant",
      definition: "A criterion that tests something outside the scope of product evaluation or is time-sensitive.",
      problem: "Criteria about stock status, prices, shipping, or current promotions change over time and cannot be reliably evaluated.",
      badExample: "Recommends at least one laptop that is available in stock right now.",
      goodExample: "Recommends at least one laptop with a 15.6-inch display."
    },
    {
      tag: "Not Self-Contained",
      definition: "A criterion that requires external context (the prompt, other criteria, or images) to understand what it's testing.",
      problem: "Reviewers must be able to evaluate each criterion independently without referencing other materials.",
      badExample: "Matches the user's concerns mentioned above.",
      goodExample: "Recommends at least one vacuum cleaner with a HEPA filter."
    },
    {
      tag: "Stacked",
      definition: "A criterion that tests multiple requirements in a single item.",
      problem: "A single ✓/✗ cannot fairly score multiple conditions. Each requirement needs its own criterion.",
      badExample: "Recommends at least one vacuum that is cordless and under 6 lbs and has HEPA filtration.",
      goodExample: "Split into three separate criteria.",
      emphasis: true,
      splitExample: {
        original: "Recommends at least one vacuum that is cordless and under 6 lbs and has HEPA filtration.",
        split: [
          "Recommends at least one cordless vacuum.",
          "Recommends at least one vacuum weighing under 6 lbs.",
          "Recommends at least one vacuum with HEPA filtration."
        ]
      },
      ruleOfThumb: "If a criterion contains \"and,\" it is almost always stacked and must be split."
    },
    {
      tag: "Timelessness",
      definition: "A criterion that references time-sensitive information that will become outdated.",
      problem: "Criteria must work years from now. References to years, prices, ratings, reviews, or seasonal items are invalid.",
      badExample: "Recommends at least one of the top-rated TVs of 2024.",
      goodExample: "Recommends at least one TV with a refresh rate of 120Hz or higher."
    },
    {
      tag: "Unclear Wording",
      definition: "A criterion with vague or imprecise language that could be interpreted multiple ways.",
      problem: "Unclear wording leads to inconsistent evaluation across reviewers.",
      badExample: "Recommends a moderately sized suitcase.",
      goodExample: "Recommends at least one suitcase with dimensions not exceeding 22 x 14 x 9 inches."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <PageHeader icon={Shield} title="Reviewer Instructions" description="Reviewers are the final checkpoint for quality. Your contributions directly shape the dataset that trains AI shopping assistants." />

        <Accordion type="multiple" className="space-y-4 mt-8">
          {/* What Reviewers Do */}
          <AccordionItem value="what-reviewers-do" className="border rounded-xl px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary" />
                What Reviewers Do
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="grid gap-4 md:grid-cols-2">
                <ContentCard>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-chart-1 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Ensure Quality Standards</p>
                      <p className="text-sm text-muted-foreground">You are the final safeguard before the task becomes training data.</p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard>
                  <div className="flex items-start gap-3">
                    <FileCheck className="h-5 w-5 text-chart-1 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Correct the Task</p>
                      <p className="text-sm text-muted-foreground">There is no revision step. If fixable in under 30 minutes, you fix it yourself.</p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-chart-1 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Add Constructive Feedback</p>
                      <p className="text-sm text-muted-foreground">Fellows don't see your inline edits—they only see your written notes.</p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-chart-1 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Rate Before Editing</p>
                      <p className="text-sm text-muted-foreground">Provide a 1–5 quality rating before making any edits.</p>
                    </div>
                  </div>
                </ContentCard>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Review Workflow */}
          <AccordionItem value="review-workflow" className="border rounded-xl px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                Review Workflow
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <ContentCard className="mb-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4">
                  <div className="flex flex-col items-center text-center px-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-2">
                      <span className="font-bold text-secondary">​A</span>
                    </div>
                    <p className="font-semibold text-foreground">Attempter</p>
                    <p className="text-xs text-muted-foreground">Creates task</p>
                  </div>

                  <ArrowRight className="h-5 w-5 text-muted-foreground hidden md:block" />
                  <div className="h-5 w-px bg-muted-foreground/30 md:hidden" />

                  <div className="flex flex-col items-center text-center px-4">
                    <div className="w-12 h-12 rounded-full bg-chart-3/20 flex items-center justify-center mb-2">
                      <span className="font-bold text-chart-3">R1</span>
                    </div>
                    <p className="font-semibold text-foreground">Review Round 1</p>
                    <p className="text-xs text-muted-foreground">Fixes issues, rates Attempt</p>
                  </div>

                  <ArrowRight className="h-5 w-5 text-muted-foreground hidden md:block" />
                  <div className="h-5 w-px bg-muted-foreground/30 md:hidden" />

                  <div className="flex flex-col items-center text-center px-4">
                    <div className="w-12 h-12 rounded-full bg-chart-2/20 flex items-center justify-center mb-2">
                      <span className="font-bold text-chart-2">R2</span>
                    </div>
                    <p className="font-semibold text-foreground">Review Round 2</p>
                    <p className="text-xs text-muted-foreground">Reviews R1, rates R1</p>
                  </div>

                  <ArrowRight className="h-5 w-5 text-muted-foreground hidden md:block" />
                  <div className="h-5 w-px bg-muted-foreground/30 md:hidden" />

                  <div className="flex flex-col items-center text-center px-4">
                    <div className="w-12 h-12 rounded-full bg-chart-1/20 flex items-center justify-center mb-2">
                      <CheckCircle className="h-5 w-5 text-chart-1" />
                    </div>
                    <p className="font-semibold text-foreground">Approved</p>
                    <p className="text-xs text-muted-foreground">Becomes training data</p>
                  </div>
                </div>
              </ContentCard>

              <InfoBox type="info" title="Role Flexibility">
                Reviewers are not "above" Attempters. You may be doing only reviewing, only attempting, or a mix of both. Roles shift based on accuracy, attention to detail, and quality of feedback.
              </InfoBox>
            </AccordionContent>
          </AccordionItem>

          {/* How to Access Tasks */}
          <AccordionItem value="access-tasks" className="border rounded-xl px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              How to Access & Claim Tasks
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <ContentCard>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-sm font-bold text-secondary">1</span>
                    <p className="text-foreground">
                      Go to the{" "}
                      <a href="https://ai.joinhandshake.com/fellow/014d80ad-36d9-4af6-a78b-b1a755e5e390/tasks" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline inline-flex items-center gap-1">
                        Annotation Dashboard <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-sm font-bold text-secondary">2</span>
                    <div>
                      <p className="text-foreground">In the top-left you'll see:</p>
                      <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside">
                        <li><strong>My Tasks</strong> — tasks you created or are reviewing</li>
                        <li><strong>Available Tasks</strong> — tasks you can claim</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-sm font-bold text-secondary">3</span>
                    <p className="text-foreground">Claim a task from Available Tasks.</p>
                  </li>
                </ol>

                <InfoBox type="success" className="mt-4">
                  You will never be asked to review your own task. If it ever appears, simply skip it.
                </InfoBox>
              </ContentCard>
            </AccordionContent>
          </AccordionItem>

          {/* Step-by-Step Review */}
          <AccordionItem value="perform-review" className="border rounded-xl px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              How to Perform a Review
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="space-y-4">
                <ContentCard>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Read the Entire Task</h3>
                      <p className="text-sm text-muted-foreground">Read the prompt, rubric, and model response completely.</p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard variant="highlight">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Decide on a Quality Rating</h3>
                      <p className="text-sm text-muted-foreground mb-2">Before making any edits, decide what quality rating (1–5) you would give this task as submitted. You'll use this rating later in Step 8. (See the <strong>Rating Scale</strong> section below for what each rating means.)</p>
                      <p className="text-sm text-muted-foreground font-medium">This rating must reflect the task as originally submitted, not after your corrections.</p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Fix the Task</h3>
                      <p className="text-sm text-muted-foreground">Correct all issues in the rubric. See the <strong>Rubric Error Tags</strong> section below for the complete list of errors you must catch and fix.</p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">4</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Confirm Edit Access</h3>
                      <p className="text-sm text-muted-foreground">A popup will appear asking <strong>"Edit rubric? Editing the rubric requires you to approve this task."</strong> Click <strong>Edit</strong> to continue. This simply grants you editing permissions—no changes will be made automatically.</p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard variant="warning">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">5</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Save Your Changes</h3>
                      <p className="text-sm text-muted-foreground">Click <strong>Continue</strong> on the rubric screen. Do not skip this—otherwise your work is lost.</p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-chart-1 flex items-center justify-center text-chart-1-foreground font-bold">6</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Approve the Task</h3>
                      <p className="text-sm text-muted-foreground">Once all issues are fixed, click <strong>Approve</strong>.</p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard variant="highlight">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">7</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Add Error Tags</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Click <strong>"Add feedback"</strong> next to each block or criterion with errors → Click <strong>"Type"</strong> on the comment box → Select <strong>"Major errors"</strong> to access the error tags.
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Apply the correct error tag for every rubric violation you identified.</strong> See the <strong>Rubric Error Tags</strong> section below for the complete reference.
                      </p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">8</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Rate the Task (1–5)</h3>
                      <p className="text-sm text-muted-foreground">At the bottom of the task, select your <strong>quality rating</strong> using the rating you decided in Step 2. This reflects how good the task was <em>before</em> your edits. (See the <strong>Rating Scale</strong> section below.)</p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">9</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Leave Feedback (Optional)</h3>
                      <p className="text-sm text-muted-foreground mb-2">A feedback field will appear. As long as you've added error tags, this is <strong>optional</strong>—but a quick summary of changes is encouraged.</p>
                      <p className="text-sm text-muted-foreground">To skip, just type anything into the field. Your feedback is shared directly with attempters, so be constructive.</p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard variant="warning">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-chart-1 flex items-center justify-center text-chart-1-foreground font-bold">10</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Submit Task</h3>
                      <p className="text-sm text-muted-foreground">Click <strong>"Submit Task"</strong> to complete the review. This is required—do not skip this step.</p>
                    </div>
                  </div>
                </ContentCard>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Rating Scale */}
          <AccordionItem value="rating-scale" className="border rounded-xl px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-secondary" />
                Quality Rating Scale
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-semibold text-foreground bg-muted/30 w-16">Score</th>
                      <th className="text-left p-3 font-semibold text-foreground bg-muted/30">Prompt</th>
                      <th className="text-left p-3 font-semibold text-foreground bg-muted/30">Rubric</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3 align-top">
                        <div className="w-10 h-10 rounded-full bg-chart-1/20 flex items-center justify-center">
                          <span className="font-bold text-chart-1 text-lg">5</span>
                        </div>
                      </td>
                      <td className="p-3 align-top text-sm text-muted-foreground">
                        <p className="mb-2">Prompt covers all the core requirements:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Timeless</li>
                          <li>Roughly aligns with the category and use case</li>
                          <li>Clear request for a product</li>
                          <li>Mixture of implicit and explicit requirements</li>
                        </ul>
                      </td>
                      <td className="p-3 align-top text-sm text-muted-foreground">
                        Only minor errors are present (grammatical tweaks, or slight word alterations)
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 align-top">
                        <div className="w-10 h-10 rounded-full bg-chart-2/20 flex items-center justify-center">
                          <span className="font-bold text-chart-2 text-lg">4</span>
                        </div>
                      </td>
                      <td className="p-3 align-top text-sm text-muted-foreground">
                        <p className="mb-2">Prompt covers all the core requirements:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Timeless</li>
                          <li>Roughly aligns with the category and use case</li>
                          <li>Clear request for a product</li>
                          <li>Mixture of implicit and explicit requirements</li>
                        </ul>
                      </td>
                      <td className="p-3 align-top text-sm text-muted-foreground">
                        1-2 rubric error tags apply
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 align-top">
                        <div className="w-10 h-10 rounded-full bg-chart-3/20 flex items-center justify-center">
                          <span className="font-bold text-chart-3 text-lg">3</span>
                        </div>
                      </td>
                      <td className="p-3 align-top text-sm text-muted-foreground">
                        <p className="mb-2">Prompt covers all the core requirements:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Timeless</li>
                          <li>Roughly aligns with the category and use case</li>
                          <li>Clear request for a product</li>
                          <li>Mixture of implicit and explicit requirements</li>
                        </ul>
                      </td>
                      <td className="p-3 align-top text-sm text-muted-foreground">
                        3-5 rubric error tags apply
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 align-top">
                        <div className="w-10 h-10 rounded-full bg-chart-4/20 flex items-center justify-center">
                          <span className="font-bold text-chart-4 text-lg">2</span>
                        </div>
                      </td>
                      <td className="p-3 align-top text-sm text-muted-foreground">
                        Prompt contains elements of timelessness or a lack of a shopping request
                      </td>
                      <td className="p-3 align-top text-sm text-muted-foreground">
                        5-8 rubric error tags apply
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 align-top">
                        <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                          <span className="font-bold text-destructive text-lg">1</span>
                        </div>
                      </td>
                      <td className="p-3 align-top text-sm text-muted-foreground">
                        Prompt clearly did not have effort or thought put into it, either lacking in detail or lacking a specific shopping request
                      </td>
                      <td className="p-3 align-top text-sm text-muted-foreground">
                        8+ rubric error tags apply
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Rubric Error Tags - The Authoritative Reference */}
          <AccordionItem value="error-tags" className="border rounded-xl px-6 border-secondary/50">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-secondary" />
                Rubric Error Tags
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="mb-6">
                <p className="text-muted-foreground mb-4">
                  Error tags are how reviewers identify rubric violations. Each tag corresponds directly to a rubric rule. <strong>Applying the correct error tag is mandatory for each identified issue.</strong>
                </p>
                <InfoBox type="info" title="Rubric Quality Principles">
                  Every rubric criterion must be: <strong>Atomic</strong>, <strong>Objective</strong>, <strong>Measurable</strong>, <strong>Timeless</strong>, <strong>Self-contained</strong>, and <strong>Product-focused</strong>. If a criterion violates any of these principles, apply the corresponding error tag.
                </InfoBox>
              </div>

              <div className="space-y-6">
                {errorTags.map((item, index) => (
                  <div 
                    key={item.tag} 
                    className={`rounded-xl border p-5 ${item.emphasis ? 'border-secondary bg-secondary/5' : 'border-border'}`}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <span className="shrink-0 px-3 py-1 text-sm font-semibold rounded-lg bg-secondary text-secondary-foreground">
                        {item.tag}
                      </span>
                      {item.emphasis && (
                        <span className="shrink-0 px-2 py-1 text-xs font-medium rounded bg-destructive/10 text-destructive">
                          Common Issue
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">Definition:</p>
                        <p className="text-sm text-muted-foreground">{item.definition}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">Why it's a problem:</p>
                        <p className="text-sm text-muted-foreground">{item.problem}</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 mt-4">
                        <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                          <div className="flex items-center gap-2 mb-2">
                            <XCircle className="h-4 w-4 text-destructive" />
                            <span className="text-xs font-semibold text-destructive">Invalid</span>
                          </div>
                          <p className="text-sm text-muted-foreground italic whitespace-pre-line">"{item.badExample}"</p>
                        </div>
                        <div className="p-3 rounded-lg bg-chart-1/5 border border-chart-1/20">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="h-4 w-4 text-chart-1" />
                            <span className="text-xs font-semibold text-chart-1">Valid</span>
                          </div>
                          <p className="text-sm text-muted-foreground italic">"{item.goodExample}"</p>
                        </div>
                      </div>

                      {/* Extra examples for Model-Focused */}
                      {item.extraExamples && (
                        <div className="mt-4 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                          <p className="text-sm font-medium text-foreground mb-3">More invalid examples:</p>
                          <div className="space-y-2">
                            {item.extraExamples.map((ex, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                                <div>
                                  <span className="text-sm text-muted-foreground italic">"{ex.bad}"</span>
                                  <span className="text-xs text-muted-foreground ml-2">— {ex.reason}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Split example for Stacked */}
                      {item.splitExample && (
                        <div className="mt-4">
                          <p className="text-sm font-medium text-foreground mb-3">How to fix a stacked criterion:</p>
                          <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20 mb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <XCircle className="h-4 w-4 text-destructive" />
                              <span className="text-xs font-semibold text-destructive">Stacked (Invalid)</span>
                            </div>
                            <p className="text-sm text-muted-foreground italic">"{item.splitExample.original}"</p>
                          </div>
                          <div className="p-3 rounded-lg bg-chart-1/5 border border-chart-1/20">
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle className="h-4 w-4 text-chart-1" />
                              <span className="text-xs font-semibold text-chart-1">Split into 3 atomic criteria</span>
                            </div>
                            <ul className="space-y-1">
                              {item.splitExample.split.map((s, i) => (
                                <li key={i} className="text-sm text-muted-foreground italic">"{s}"</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Rule of thumb for Stacked */}
                      {item.ruleOfThumb && (
                        <InfoBox type="warning" className="mt-4">
                          <strong>Rule of Thumb:</strong> {item.ruleOfThumb}
                        </InfoBox>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Minor Errors */}
          <AccordionItem value="minor-errors" className="border rounded-xl px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              Minor Errors
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <p className="text-sm text-muted-foreground mb-4">These don't break the task but should be fixed when possible:</p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-start gap-3 p-4 rounded-lg border border-muted bg-muted/10">
                  <Edit3 className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Not Verb-Led</p>
                    <p className="text-xs text-muted-foreground">Criterion doesn't start with an action verb (e.g., "Recommends...", "Includes..."). This is a best practice for clarity, but it should not affect the quality score—fix if you have time, but don't penalize the attempter for it.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border border-muted bg-muted/10">
                  <Edit3 className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Prompt Implementation</p>
                    <p className="text-xs text-muted-foreground">Prompt doesn't correctly implement the use case.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border border-muted bg-muted/10">
                  <Edit3 className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Grammar & Wording</p>
                    <p className="text-xs text-muted-foreground">Minor grammar or wording mistakes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border border-muted bg-muted/10">
                  <Edit3 className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Categorization</p>
                    <p className="text-xs text-muted-foreground">Incorrect categorization label.</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Escalating Unsalvageable Tasks */}
          <AccordionItem value="escalation" className="border rounded-xl px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              <div className="flex items-center gap-2">
                <Flag className="h-5 w-5 text-destructive" />
                Escalating Unsalvageable Tasks
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <ContentCard variant="warning">
                <div className="space-y-4">
                  <p className="text-foreground">
                    If you come across a task that is <strong>really bad</strong>—either the prompt is fundamentally flawed, or the rubric is in such poor shape that it cannot be salvaged—you should escalate it.
                  </p>

                  <div className="p-4 rounded-lg border-2 border-warning bg-warning/10">
                    <p className="font-semibold text-warning mb-2">⚠️ You cannot edit prompts</p>
                    <p className="text-sm text-muted-foreground">
                      Reviewers currently cannot modify prompts. If the prompt itself is flawed (contradictory, unrealistic, too simple, etc.), you must escalate the task—even if the rubric is acceptable.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg border-2 border-destructive bg-destructive/10">
                    <p className="font-semibold text-destructive mb-2">⚠️ Only escalate rubrics if in a DIRE state</p>
                    <p className="text-sm text-muted-foreground">
                      For rubric issues, escalation is reserved for tasks that would take significantly longer than 30 minutes to fix, or where the rubric is so flawed that fixing it would essentially mean creating a new one from scratch.
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold text-foreground mb-2">How to Escalate:</p>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">1</span>
                        <span>Click the <strong>three dots (⋮)</strong> at the top right of the screen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">2</span>
                        <span>Select <strong>"Report task"</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">3</span>
                        <span>Choose <strong>"Escalation"</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">4</span>
                        <span>Add a <strong>note explaining why</strong> you're escalating (e.g., "Prompt is fundamentally flawed—asks for contradictory requirements" or "Rubric has 12+ errors and would need complete rewrite")</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">5</span>
                        <span>Click <strong>"Skip"</strong> at the top right to move on to the next task</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </ContentCard>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="quality-monitoring" className="border rounded-xl px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              How Reviewer Quality Is Evaluated
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <ContentCard>
                <p className="text-muted-foreground mb-4">We track:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-chart-1" />
                    Your 1–5 ratings given in R2
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-chart-1" />
                    How often R2 reviewers must fix your edits
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-chart-1" />
                    Number of rubric errors you miss
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-chart-1" />
                    Quality of written feedback
                  </li>
                </ul>
              </ContentCard>
            </AccordionContent>
          </AccordionItem>

          {/* Final Tips */}
          <AccordionItem value="final-tips" className="border rounded-xl px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              Final Tips for Reviewers
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="grid gap-4 md:grid-cols-2">
                <InfoBox type="info" title="Be Decisive">
                  If it's broken, fix it.
                </InfoBox>
                <InfoBox type="success" title="Be Kind">
                  Fellows are learning. Provide feedback you wish you'd receive.
                </InfoBox>
                <InfoBox type="warning" title="Be Precise">
                  Vague feedback does not help anyone improve.
                </InfoBox>
                <InfoBox type="info" title="Be Consistent">
                  The same error should trigger the same correction every time.
                </InfoBox>
              </div>

              <ContentCard variant="highlight" className="mt-6">
                <p className="text-center font-semibold text-foreground">
                  Aim for perfection. Tasks become training data—they must be flawless.
                </p>
              </ContentCard>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
};

export default Reviewer;
