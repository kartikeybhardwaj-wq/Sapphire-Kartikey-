import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { PageNavigation } from "@/components/PageNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  TrendingUp, 
  FileText, 
  Calendar, 
  Search,
  Building2,
  Landmark,
  LayoutGrid,
  Target,
  BarChart3,
  Users,
  Clock
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TaskType {
  name: string;
  time: string;
}

interface WorkflowCategory {
  category: string;
  icon: typeof Calculator;
  color: string;
  tasks: TaskType[];
}

interface ProductGroup {
  product: string;
  icon: typeof Building2;
  color: string;
  workflows: WorkflowCategory[];
}

const taskDistribution: ProductGroup[] = [
  {
    product: "M&A",
    icon: Building2,
    color: "bg-primary/10 text-primary",
    workflows: [
      {
        category: "Financial Modeling & Scenario Analysis",
        icon: Calculator,
        color: "bg-primary/10 text-primary",
        tasks: [
          { name: "Operating Model", time: "2-4 hours" },
          { name: "3-Statement Integration", time: "30-45 min" },
          { name: "Working Capital Schedules", time: "20-30 min" },
          { name: "CapEx/D&A Forecasting", time: "15-20 min" },
          { name: "DCF Model", time: "1.5-2.5 hours" },
          { name: "Merger Model", time: "2-3 hours" },
          { name: "Sensitivity Tables", time: "15-25 min" },
          { name: "Downside/Base/Upside Cases", time: "45-90 min" },
          { name: "Synergy Modeling", time: "45-90 min" },
          { name: "Pro Forma Adjustments", time: "30-60 min" },
          { name: "Model QC & Formula Audits", time: "45-90 min" }
        ]
      },
      {
        category: "Valuation & Investment Analysis",
        icon: TrendingUp,
        color: "bg-accent/20 text-accent-foreground",
        tasks: [
          { name: "Trading Comps", time: "1-1.5 hours" },
          { name: "Precedent Transactions", time: "1-2 hours" },
          { name: "Premiums Paid Analysis", time: "30-45 min" },
          { name: "Football Field / Valuation Ranges", time: "20-30 min" },
          { name: "Sum-of-the-Parts (SOTP)", time: "45-90 min" },
          { name: "Accretion/Dilution Analysis", time: "45-60 min" },
          { name: "Contribution Analysis", time: "45-60 min" }
        ]
      },
      {
        category: "Client & Marketing Materials",
        icon: FileText,
        color: "bg-muted text-muted-foreground",
        tasks: [
          { name: "Pitchbook Sections", time: "1-2 hours" },
          { name: "CIM Sections", time: "1.5-2.5 hours" },
          { name: "Teaser", time: "45-90 min" },
          { name: "Management Presentation", time: "1-2 hours" },
          { name: "Board Materials", time: "1-1.5 hours" },
          { name: "Market Updates", time: "20-30 min" },
          { name: "Transaction Timeline Graphics", time: "10-15 min" },
          { name: "Deal Structure Diagrams", time: "20-30 min" }
        ]
      },
      {
        category: "Process & Timeline Management",
        icon: Calendar,
        color: "bg-secondary/20 text-secondary-foreground",
        tasks: [
          { name: "Workplans & Process Letters", time: "20-30 min" },
          { name: "Diligence Calendars", time: "20-30 min" },
          { name: "Buyer Tracking & Bid Process", time: "30-60 min" },
          { name: "Internal Coordination (Emails)", time: "5-15 min" },
          { name: "Staple Financing Coordination", time: "20-30 min" }
        ]
      },
      {
        category: "Diligence & Issue Resolution",
        icon: Search,
        color: "bg-destructive/10 text-destructive",
        tasks: [
          { name: "Data Room Management", time: "45-90 min" },
          { name: "Q&A Tracker", time: "20-30 min" },
          { name: "Red Flag Identification", time: "45-60 min" },
          { name: "Vendor Report Analysis", time: "45-90 min" },
          { name: "Management Interview Prep", time: "20-30 min" },
          { name: "Integration Planning Analysis", time: "1-1.5 hours" },
          { name: "Advisor Coordination", time: "10-15 min" }
        ]
      }
    ]
  },
  {
    product: "LevFin",
    icon: Landmark,
    color: "bg-secondary/20 text-secondary-foreground",
    workflows: [
      {
        category: "Financial Modeling & Scenario Analysis",
        icon: Calculator,
        color: "bg-primary/10 text-primary",
        tasks: [
          { name: "Operating Model", time: "2-4 hours" },
          { name: "3-Statement Integration", time: "30-45 min" },
          { name: "Working Capital Schedules", time: "20-30 min" },
          { name: "CapEx/D&A Forecasting", time: "15-20 min" },
          { name: "LBO / Credit Models", time: "3-4 hours" },
          { name: "Debt Schedule Building", time: "45-90 min" },
          { name: "S&U (Sources & Uses)", time: "15-20 min" },
          { name: "Leverage Metrics & Covenant Calculations", time: "20-30 min" },
          { name: "Covenant Headroom Analysis", time: "30-45 min" },
          { name: "Cash Flow Sweeps", time: "30-45 min" },
          { name: "Sensitivity Tables", time: "15-25 min" },
          { name: "Downside/Base/Upside Cases", time: "45-90 min" },
          { name: "Refinancing Scenarios", time: "45-90 min" },
          { name: "Model QC & Formula Audits", time: "45-90 min" }
        ]
      },
      {
        category: "Valuation & Returns Analysis",
        icon: TrendingUp,
        color: "bg-accent/20 text-accent-foreground",
        tasks: [
          { name: "Trading Comps", time: "1-1.5 hours" },
          { name: "Precedent Transactions (LBOs)", time: "1-2 hours" },
          { name: "Football Field / Valuation Ranges", time: "20-30 min" },
          { name: "IRR Calculations", time: "15-20 min" },
          { name: "Cash-on-Cash Returns", time: "15-20 min" },
          { name: "MOIC (Multiple of Invested Capital)", time: "15-20 min" },
          { name: "Dividend Recap Analysis", time: "45-60 min" },
          { name: "Exit Multiple Sensitivity", time: "20-30 min" }
        ]
      },
      {
        category: "Client & Marketing Materials",
        icon: FileText,
        color: "bg-muted text-muted-foreground",
        tasks: [
          { name: "Pitchbook Sections", time: "1-2 hours" },
          { name: "CIM Sections", time: "1.5-2.5 hours" },
          { name: "Lender Presentation / Bank Book", time: "2-3 hours" },
          { name: "Management Presentation", time: "1-2 hours" },
          { name: "Market Updates", time: "20-30 min" },
          { name: "Term Sheet Summary", time: "20-30 min" },
          { name: "Capitalization Tables", time: "20-30 min" },
          { name: "Transaction Timeline Graphics", time: "10-15 min" }
        ]
      },
      {
        category: "Process & Timeline Management",
        icon: Calendar,
        color: "bg-secondary/20 text-secondary-foreground",
        tasks: [
          { name: "Workplans & Process Letters", time: "20-30 min" },
          { name: "Diligence Calendars", time: "20-30 min" },
          { name: "Lender Tracking & Marketing Process", time: "30-60 min" },
          { name: "Internal Coordination (Emails)", time: "5-15 min" },
          { name: "Syndication Strategy", time: "45-60 min" }
        ]
      },
      {
        category: "Diligence & Issue Resolution",
        icon: Search,
        color: "bg-destructive/10 text-destructive",
        tasks: [
          { name: "Data Room Management", time: "45-90 min" },
          { name: "Q&A Tracker", time: "20-30 min" },
          { name: "Red Flag Identification", time: "45-60 min" },
          { name: "Vendor Report Analysis", time: "45-90 min" },
          { name: "Lender Due Diligence Response", time: "45-60 min" },
          { name: "Covenant Negotiation Support", time: "45-60 min" },
          { name: "Advisor Coordination", time: "10-15 min" }
        ]
      }
    ]
  },
  {
    product: "ECM",
    icon: BarChart3,
    color: "bg-accent/20 text-accent-foreground",
    workflows: [
      {
        category: "Financial Modeling & Scenario Analysis",
        icon: Calculator,
        color: "bg-primary/10 text-primary",
        tasks: [
          { name: "Operating Model / Projections", time: "2-4 hours" },
          { name: "3-Statement Integration", time: "30-45 min" },
          { name: "IPO Pricing Models", time: "1-1.5 hours" },
          { name: "Dilution Analysis", time: "45-60 min" },
          { name: "Use of Proceeds Analysis", time: "20-30 min" },
          { name: "Pro Forma Cap Table", time: "30-45 min" },
          { name: "Comparable IPO Analysis", time: "1-1.5 hours" },
          { name: "Follow-On Offering Sizing", time: "45-60 min" },
          { name: "Convertible/Equity-Linked Structures", time: "1-2 hours" }
        ]
      },
      {
        category: "Valuation & Pricing Analysis",
        icon: TrendingUp,
        color: "bg-accent/20 text-accent-foreground",
        tasks: [
          { name: "Trading Comps (Public Comparables)", time: "1-1.5 hours" },
          { name: "Precedent IPOs", time: "1-2 hours" },
          { name: "DCF Valuation", time: "1.5-2.5 hours" },
          { name: "Sum-of-the-Parts (SOTP)", time: "45-90 min" },
          { name: "Price Talk Range / Football Field", time: "45-60 min" },
          { name: "Valuation Bridge (Private to Public)", time: "45-60 min" },
          { name: "Free Float Analysis", time: "20-30 min" }
        ]
      },
      {
        category: "Client & Marketing Materials",
        icon: FileText,
        color: "bg-muted text-muted-foreground",
        tasks: [
          { name: "Equity Story / Investment Highlights", time: "1-1.5 hours" },
          { name: "IPO Prospectus Sections", time: "2-3 hours" },
          { name: "Roadshow Presentation", time: "2-3 hours" },
          { name: "Analyst Day Materials", time: "1-2 hours" },
          { name: "Investor Targeting Analysis", time: "45-60 min" },
          { name: "Peer Positioning Charts", time: "45-60 min" },
          { name: "Offering Structure Summary", time: "20-30 min" },
          { name: "Cornerstone Investor Materials", time: "45-60 min" }
        ]
      },
      {
        category: "Process & Timeline Management",
        icon: Calendar,
        color: "bg-secondary/20 text-secondary-foreground",
        tasks: [
          { name: "IPO Timeline / Workplan", time: "45-60 min" },
          { name: "Roadshow Calendar & Logistics", time: "45-60 min" },
          { name: "Investor Tracking & Order Book", time: "45-90 min" },
          { name: "Filing Coordination (S-1, F-1)", time: "45-60 min" },
          { name: "Regulatory Coordination", time: "20-30 min" },
          { name: "Internal Coordination", time: "5-15 min" }
        ]
      },
      {
        category: "Market Analysis & Investor Engagement",
        icon: Users,
        color: "bg-primary/10 text-primary",
        tasks: [
          { name: "Market Conditions Assessment", time: "45-60 min" },
          { name: "Peer Trading Performance Analysis", time: "45-60 min" },
          { name: "Investor Feedback Synthesis", time: "45-60 min" },
          { name: "Pricing Committee Materials", time: "45-60 min" },
          { name: "Post-IPO Trading Support Analysis", time: "20-30 min" },
          { name: "Aftermarket Performance Tracking", time: "20-30 min" }
        ]
      }
    ]
  },
  {
    product: "DCM",
    icon: Landmark,
    color: "bg-destructive/10 text-destructive",
    workflows: [
      {
        category: "Financial Modeling & Scenario Analysis",
        icon: Calculator,
        color: "bg-primary/10 text-primary",
        tasks: [
          { name: "Operating Model / Projections", time: "2-4 hours" },
          { name: "3-Statement Integration", time: "30-45 min" },
          { name: "Debt Capacity Analysis", time: "1-1.5 hours" },
          { name: "Interest Coverage & Leverage Ratios", time: "30-45 min" },
          { name: "Cash Flow Adequacy / CFADS", time: "45-60 min" },
          { name: "Amortization Schedules", time: "20-30 min" },
          { name: "Refinancing Analysis", time: "45-90 min" },
          { name: "Covenant Headroom Projections", time: "45-60 min" },
          { name: "Debt Sizing & Structure Optimization", time: "1-1.5 hours" }
        ]
      },
      {
        category: "Valuation & Pricing Analysis",
        icon: TrendingUp,
        color: "bg-accent/20 text-accent-foreground",
        tasks: [
          { name: "Bond Comps (Outstanding Issues)", time: "1-1.5 hours" },
          { name: "Precedent Issuances (New Issue Comps)", time: "1-2 hours" },
          { name: "Credit Spread Analysis", time: "45-60 min" },
          { name: "Yield Curve Positioning", time: "45-60 min" },
          { name: "Rating Agency Methodology Application", time: "1-1.5 hours" },
          { name: "All-In Cost Analysis", time: "45-60 min" },
          { name: "Effective Yield Calculations", time: "20-30 min" }
        ]
      },
      {
        category: "Client & Marketing Materials",
        icon: FileText,
        color: "bg-muted text-muted-foreground",
        tasks: [
          { name: "Bond Offering Memorandum Sections", time: "2-3 hours" },
          { name: "Investor Presentation / Roadshow Deck", time: "2-3 hours" },
          { name: "Rating Agency Presentation", time: "1-2 hours" },
          { name: "Credit Story / Highlights", time: "1-1.5 hours" },
          { name: "Terms Summary", time: "20-30 min" },
          { name: "Use of Proceeds Detail", time: "20-30 min" },
          { name: "Capitalization Table (Pre/Post)", time: "20-30 min" },
          { name: "Maturity Profile Charts", time: "20-30 min" }
        ]
      },
      {
        category: "Process & Timeline Management",
        icon: Calendar,
        color: "bg-secondary/20 text-secondary-foreground",
        tasks: [
          { name: "Bond Issuance Timeline / Workplan", time: "45-60 min" },
          { name: "Roadshow Calendar & Logistics", time: "45-60 min" },
          { name: "Investor Tracking & Order Book", time: "45-90 min" },
          { name: "Documentation Coordination", time: "45-60 min" },
          { name: "Rating Agency Process Coordination", time: "45-60 min" },
          { name: "Regulatory Filings (144A, Reg S)", time: "45-60 min" },
          { name: "Internal Coordination", time: "5-15 min" }
        ]
      },
      {
        category: "Market Analysis & Investor Engagement",
        icon: Users,
        color: "bg-primary/10 text-primary",
        tasks: [
          { name: "Bond Market Conditions Assessment", time: "45-60 min" },
          { name: "Credit Market Update", time: "45-60 min" },
          { name: "Peer Issuance Analysis", time: "45-60 min" },
          { name: "Investor Feedback Synthesis", time: "45-60 min" },
          { name: "Pricing Committee Materials", time: "45-60 min" },
          { name: "Post-Pricing Trading Analysis", time: "20-30 min" },
          { name: "Secondary Market Monitoring", time: "20-30 min" }
        ]
      }
    ]
  }
];

const tiers = [
  {
    tier: 1,
    title: "Full LBO, DCF, Merger Model",
    description: "Complex multi-sheet models with integrated calculations",
    criteria: "80–120",
    highlight: true
  },
  {
    tier: 2,
    title: "Operating Model, Sensitivity Tables, Covenant Analysis",
    description: "Moderate complexity with focused financial logic",
    criteria: "40–70",
    highlight: false
  },
  {
    tier: 3,
    title: "Comps, Precedent Transactions, Valuation Ranges",
    description: "Structured analysis with standard calculations",
    criteria: "20–40",
    highlight: false
  },
  {
    tier: 4,
    title: "Pitchbooks, CIMs, Presentations, Trackers",
    description: "Content-heavy deliverables with formatting requirements",
    criteria: "30–60",
    highlight: false
  },
  {
    tier: 5,
    title: "Data Room Management, Q&A Tracking, Emails",
    description: "Process-oriented tasks with fewer calculations",
    criteria: "10–25",
    highlight: false
  }
];

const TaskDistribution = () => {
  return (
    <Layout>
      <PageHeader
        icon={LayoutGrid}
        title="Task Distribution"
        description="Product areas and workflow types you should focus on when creating tasks. Use this as your guide for choosing what to build."
      />

      <div className="container mx-auto px-4 py-8 space-y-10">
        {/* Overview */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  Understanding Product Areas
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tasks are organized by <strong>Product</strong> (M&A, LevFin, ECM, or DCM) and <strong>Workflow Category</strong>. 
                  When choosing your use case and writing prompts, ensure your task aligns with one of the 
                  workflow options listed below. Each task type includes estimated times for both Analyst and Associate levels.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AHT Legend */}
        <Card className="border-border">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">Est. Time:</strong> Average time to complete each deliverable
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Task Distribution by Product */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <LayoutGrid className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              Product Areas & Workflows
            </h2>
          </div>

          <div className="space-y-6">
            {taskDistribution.map((productGroup, pIndex) => (
              <Card key={pIndex} className="overflow-hidden">
                <CardHeader className="pb-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg shrink-0 ${productGroup.color}`}>
                      <productGroup.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg font-serif">
                      {productGroup.product}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <Accordion type="multiple" className="w-full">
                    {productGroup.workflows.map((workflow, wIndex) => (
                      <AccordionItem key={wIndex} value={`${pIndex}-${wIndex}`} className="border-b last:border-b-0">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                          <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded-md shrink-0 ${workflow.color}`}>
                              <workflow.icon className="h-4 w-4" />
                            </div>
                            <span className="font-medium text-left">{workflow.category}</span>
                            <Badge variant="outline" className="ml-2 text-xs">
                              {workflow.tasks.length} tasks
                            </Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="rounded-lg border overflow-hidden">
                            <Table>
                              <TableHeader>
                                <TableRow className="bg-muted/50">
                                  <TableHead className="font-semibold">Task Type</TableHead>
                                  <TableHead className="font-semibold text-right w-[140px]">Est. Time</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {workflow.tasks.map((task, tIndex) => (
                                  <TableRow key={tIndex} className="hover:bg-muted/30">
                                    <TableCell className="font-medium">{task.name}</TableCell>
                                    <TableCell className="text-right text-muted-foreground">{task.time}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Expected Criteria Count Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              Expected Criteria Count
            </h2>
          </div>
          
          <div className="space-y-3">
            {tiers.map((tier) => (
              <div 
                key={tier.tier}
                className="group flex items-center justify-between p-5 rounded-xl border bg-card hover:shadow-sm transition-all cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 rounded-full shrink-0 bg-border group-hover:bg-primary transition-colors" />
                  <div>
                    <p className="font-medium text-foreground">
                      {tier.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {tier.description}
                    </p>
                  </div>
                </div>
                <span className="text-xl font-semibold tabular-nums shrink-0 ml-4 text-foreground group-hover:text-primary transition-colors">
                  {tier.criteria}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-lg">How to Use This Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 rounded-lg bg-muted/50 border border-border/50 hover:bg-accent transition-colors cursor-default">
                <p className="font-semibold text-foreground mb-1">1. Pick a Product Area</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Start by choosing M&A, LevFin, ECM, or DCM based on the type of task you want to create.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border/50 hover:bg-accent transition-colors cursor-default">
                <p className="font-semibold text-foreground mb-1">2. Select a Workflow</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Choose a specific workflow and task type that matches your prompt's focus.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border/50 hover:bg-accent transition-colors cursor-default">
                <p className="font-semibold text-foreground mb-1">3. Use Time Estimates</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Reference the AHT to scope your task appropriately and set expectations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <PageNavigation />
      </div>
    </Layout>
  );
};

export default TaskDistribution;
