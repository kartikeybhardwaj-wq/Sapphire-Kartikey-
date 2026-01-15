import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { InfoBox } from "@/components/InfoBox";
import { PageNavigation } from "@/components/PageNavigation";
import { BookOpen, ArrowRight, Target, FileText, ExternalLink, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {

  return (
    <Layout>
      <PageHeader
        icon={BookOpen}
        title="Welcome to Project Sapphire"
        description="Create high-quality investment banking tasks and evaluation rubrics for AI model training."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Why This Matters */}
          <ContentCard variant="highlight">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Why This Matters
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Project Sapphire is unique because you will generate tasks that reflect realistic investment-banking workflows 
              and evaluate model performance. You'll help the models understand end-to-end banking scenarios, how tasks connect, 
              where current AI falls short, and how it can improve.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="flex gap-3">
                <Target className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Real Impact</p>
                  <p className="text-sm text-muted-foreground">
                    Your expertise will directly shape more accurate and responsible AI used by millions.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Quality Standards</p>
                  <p className="text-sm text-muted-foreground">
                    Tasks must be realistic, original, and directly reflect investment banking workflows.
                  </p>
                </div>
              </div>
            </div>
          </ContentCard>

          {/* What You'll Create */}
          <ContentCard>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              For Each Task, You'll Create
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">A Prompt</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    A complex investment-banking workflow request that requires multi-step reasoning.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">An Ideal Deliverable</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    The complete working file (Excel, PowerPoint, or Word) you would produce in a real work setting.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Step-by-Step Instructions</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    A clear explanation of how to solve your task, step by step.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">A Revised Rubric</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Revisions to the model-generated synthetic rubric to improve its accuracy and coverage.
                  </p>
                </div>
              </div>
            </div>
          </ContentCard>

          {/* Time Guidance */}
          <ContentCard>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Time Guidance
            </h2>
            <p className="text-muted-foreground mb-4">
              Please budget 2–3 hours total per task (prompt + reasoning + output), on average:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-muted/50 text-center">
                <p className="text-2xl font-bold text-primary">30 min</p>
                <p className="text-sm text-muted-foreground">Craft the prompt</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 text-center">
                <p className="text-2xl font-bold text-primary">30–90 min</p>
                <p className="text-sm text-muted-foreground">Workflow & output</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 text-center">
                <p className="text-2xl font-bold text-primary">4 hrs max</p>
                <p className="text-sm text-muted-foreground">Complex tasks</p>
              </div>
            </div>
          </ContentCard>

          {/* Quick Links */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/onboarding"
              className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <div>
                <p className="font-semibold text-foreground">Get Started</p>
                <p className="text-sm text-muted-foreground">Complete the onboarding checklist</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link
              to="/workflow"
              className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <div>
                <p className="font-semibold text-foreground">View Workflow</p>
                <p className="text-sm text-muted-foreground">See the 7-step process</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>

          {/* Communication */}
          <InfoBox type="info" title="Communication">
            For any questions about the task, payments, or access issues, reach out via Slack or email.
          </InfoBox>

          {/* Platform CTA */}
          <div className="text-center pt-4">
            <a
              href="https://ai.joinhandshake.com/fellow/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-all hover:bg-primary/90"
            >
              Open Annotation Platform
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <PageNavigation />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
