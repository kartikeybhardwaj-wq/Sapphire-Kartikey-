import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { PageNavigation } from "@/components/PageNavigation";
import { DollarSign, Clock, Calendar, ExternalLink, AlertCircle, Gift, FileText, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Pay = () => {
  return (
    <Layout>
      <PageHeader 
        icon={DollarSign} 
        title="Pay Information" 
        description="Learn how pay works under our pay-per-task model and when you can expect to receive payment for your completed work." 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Pay Model Overview */}
          <ContentCard variant="highlight">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <DollarSign className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-2">Pay-Per-Task Model</h2>
                <p className="text-muted-foreground mb-4">
                  You will be <strong>paid for each task once it is approved</strong>. Each task type has a defined payout based on complexity and expected time to complete.
                </p>
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-foreground font-medium text-lg">
                    Average payout: <span className="text-primary font-bold">~$500 per approved task</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Compensation varies by task type — see the full payout distribution below.
                  </p>
                </div>
              </div>
            </div>
          </ContentCard>

          {/* What's Included in Each Task */}
          <ContentCard>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/30 text-foreground">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-2">What's Included in Each Task</h2>
                <p className="text-muted-foreground mb-4">
                  Time expectations and payouts account for all components of task completion:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span><strong>Writing a model-breaking prompt</strong> — crafting a realistic, challenging prompt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span><strong>Creating a client-ready deliverable</strong> — building the complete output</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span><strong>Editing the rubric template</strong> — customizing evaluation criteria</span>
                  </li>
                </ul>
              </div>
            </div>
          </ContentCard>

          {/* Onboarding Incentive */}
          <ContentCard variant="highlight">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-chart-1/10 text-chart-1">
                <Gift className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-2">$300 Onboarding Incentive</h2>
                <p className="text-muted-foreground mb-4">
                  To support you as you get started, we're offering a <strong>$300 onboarding bonus</strong>. You will receive this incentive once you:
                </p>
                <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                  <li>Complete the required training</li>
                  <li>Pass the assessment</li>
                  <li>Get your first task approved</li>
                </ol>
                <p className="text-sm text-muted-foreground mt-4 bg-secondary/20 p-3 rounded-lg">
                  The $300 incentive will be paid <strong>on top of</strong> your task earnings.
                </p>
              </div>
            </div>
          </ContentCard>

          {/* Task Payout Distribution - Embedded Sheet */}
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-foreground mb-2">Task Payout Distribution</h2>
                  <p className="text-muted-foreground">
                    View the complete breakdown of payouts by task type. Compensation is based on complexity and expected time to complete.
                  </p>
                </div>
              </div>
              <div className="w-full rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://docs.google.com/spreadsheets/d/1UUf9o42wDBF3bkKt36z57Z8T_dScz_s1uxwtYOy4nqc/preview?gid=0"
                  className="w-full h-[500px]"
                  title="Task Payout Distribution"
                />
              </div>
              <div className="mt-4 flex justify-end">
                <a 
                  href="https://docs.google.com/spreadsheets/d/1UUf9o42wDBF3bkKt36z57Z8T_dScz_s1uxwtYOy4nqc/edit?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Open in Google Sheets
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Link to Task Distribution */}
          <ContentCard>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/30 text-foreground">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-2">Task Types & Time Estimates</h2>
                <p className="text-muted-foreground mb-4">
                  Tasks span across M&A, LevFin, ECM, and DCM products with varying complexity levels. Time estimates range from <strong>15 minutes to 4+ hours</strong> depending on the deliverable type.
                </p>
                <Link 
                  to="/task-distribution"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm transition-all hover:bg-primary/90"
                >
                  View Full Task Distribution
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ContentCard>

          {/* Pay Schedule */}
          <ContentCard>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/30 text-foreground">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-2">Pay Schedule</h2>
                <p className="text-muted-foreground">
                  Pay for approved tasks is sent <strong>weekly on Wednesdays after 6pm Pacific Time</strong> for the 
                  previous Monday–Sunday work period.
                </p>
              </div>
            </div>
          </ContentCard>

          {/* Pay Disputes */}
          <ContentCard>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <AlertCircle className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-2">Pay Disputes</h2>
                <p className="text-muted-foreground mb-4">
                  If your pay isn't what you expected, you can submit a dispute through the 
                  Pay Dispute Form.
                </p>
                <a 
                  href="https://forms.gle/QnjtHajav9xSiGFj7?_imcp=1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm transition-all hover:bg-secondary/80"
                >
                  Pay Dispute Form
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </ContentCard>

          {/* Summary Stats */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <p className="text-3xl font-bold text-primary mb-2">~$500</p>
              <p className="text-sm text-muted-foreground">Avg. Per Task</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <p className="text-3xl font-bold text-primary mb-2">$300</p>
              <p className="text-sm text-muted-foreground">Onboarding Bonus</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <p className="text-3xl font-bold text-primary mb-2">Weekly</p>
              <p className="text-sm text-muted-foreground">Wed 6PM PT</p>
            </div>
          </div>

          <PageNavigation />
        </div>
      </div>
    </Layout>
  );
};

export default Pay;
