import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { InfoBox } from "@/components/InfoBox";
import { PageNavigation } from "@/components/PageNavigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, X, Briefcase } from "lucide-react";

// Step with optional sub-steps
interface Step {
  text: string;
  subSteps?: { text: string; subItems?: string[] }[];
}

// Prompt + Output Examples
const examples: Array<{
  number: number;
  title: string;
  role: string;
  coverage: string;
  inputTools: string[];
  outputTools: string[];
  prompt: string;
  promptContext: string;
  steps: Step[];
}> = [
  {
    number: 1,
    title: "Marriott Comp Table",
    role: "Analyst",
    coverage: "Real Estate Gaming and Lodging, M&A",
    inputTools: ["Excel", "PDF", "Web Search"],
    outputTools: ["Excel"],
    prompt: "Your MD is asking you to create a new comp table for Marriott. Your MD recommended comp companies: X, Y, and Z.",
    promptContext: `Your MD generally likes to see the following metrics at a minimum:
• Market Cap
• P/E
• EBITDA

Your VP likes to see: the min, max, med, mean, 25th/75th percentile (when applicable)

Your firm likes to format: with no gridlines, with blue fill for column headers, and with sources at the bottom of the table`,
    steps: [
      { text: "Create an excel sheet" },
      { 
        text: "Pull the market data from the dataroom / factset and add them as source tabs for X, Y, Z",
        subSteps: [
          { text: "Share price, shares out, market cap" },
          { text: "Net debt, minority interest, preferred → Enterprise Value" },
          { text: "Income statement: revenue, EBITDA, EBIT, net income" },
          { text: "Multiples: EV/Revenue, EV/EBITDA, P/E, etc." },
        ]
      },
      { 
        text: "Normalize / clean up data",
        subSteps: [
          { text: "Adjust for non-recurring items (one-offs, restructuring, COVID relief, etc.)" },
          { text: "Use LTM or NTM metrics consistently across all comps" },
          { text: "Check for stale data (delisting, very illiquid names)" },
        ]
      },
      { 
        text: "Calculate additional valuation multiples",
        subSteps: [
          { text: "EV / LTM Revenue" },
          { text: "EV / LTM EBITDA" },
          { text: "P/E (if relevant)" },
          { text: "Industry-specific metrics (EV/users, EV/subscribers, EV/bed, etc.)" },
        ]
      },
      { 
        text: "Format the comps table",
        subSteps: [
          { text: "Columns: Company, Ticker, Mkt Cap, EV, LTM/NTM metrics, multiples" },
          { text: "Clean up borders" },
          { text: "Hide gridlines" },
          { text: "Potentially highlight:", subItems: ["Median, Mean, 25th/75th percentile, Min, Max, etc.", "Any outliers (with footnotes)"] },
        ]
      },
    ],
  },
  {
    number: 2,
    title: "ELF LBO Sensitivity Analysis",
    role: "Analyst, Associate",
    coverage: "Consumer / Retail, Lev Fin, M&A",
    inputTools: ["Excel"],
    outputTools: ["Excel", "PDF", "PPT"],
    prompt: `I'm an investment banking analyst in the Consumer & Retail group at XYZ Bank, and I built a simple first pass LBO model for ELF based on a request from my VP. After discussing the model, my VP now wants to see a clean sensitivity analysis on sponsor returns. I want to include sensitivity tables (5x5 cells) for:

1. Buyout Premium % vs. Exit Multiple (center around 20% premium in 2.5% steps, and 30x multiple in 2x steps);
2. Buyout Premium % vs. Revenue Growth % (same premium input as above, center around 25% revenue growth in 2.5% steps);
3. Total Leverage (as % of Total Uses) vs. Exit Multiple (center around 50% total leverage in 10% steps, same multiple steps as above);
4. Debt % of Total Leverage vs. Exit Multiple (center around 50% for debt in 10% steps, and 30x multiple in 2x steps).

Each sensitivity table should have the 5-year MOIC / IRR as a combined output. For the first three tables, hold the other base assumptions from the LBO model constant and footnote the assumptions that are not sensitized below each table. For the last table, hold total leverage at 50% of total uses and keep the other base assumptions as is.

Create the table below the LBO model offset to the right, format the tables with clear labels, highlight the center output, and add the Sensitivity Analysis section to the print area as a new page. Create a single PowerPoint output slide where you paste the tables in a 4x4 layout as pictures; include tagline and footnotes.`,
    promptContext: `XYZ bank's formatting avoids Excel gridlines, bolds key aspects (headers, key line items, summary rows) in Excel, and works with Excel's standard blue shades for highlights and improved readability. In PowerPoint XYZ bank also uses a standard blue color palette and sticks to black font other than for highlights or contrast.`,
    steps: [
      { text: "Open the provided ELF LBO model and locate the base assumptions for Buyout Premium, Exit Multiple, and Debt/PIK Split" },
      { text: "Adjust the logic of the leverage input by creating a new assumption input for Total Leverage as % of Total uses and connect it to the debt/PIK split" },
      { text: "Create a new section for Sensitivity Analysis below the model offset to the right" },
      { text: "Create the four sensitivity tables with 5-year MOIC/IRR as combined output using Excel's data table function" },
      { text: "Format sensitivity tables: hide gridlines, bold headers, use borders, highlight center output cells" },
      { text: "Add footnotes below each table for non-sensitized assumptions" },
      { text: "Create a PowerPoint slide with tables in 4x4 layout as pictures with tagline and footnotes" },
    ],
  },
  {
    number: 3,
    title: "Coty Investment Idea",
    role: "Analyst, Associate",
    coverage: "Consumer / Retail, M&A",
    inputTools: ["Excel"],
    outputTools: ["Excel", "PDF", "PPT"],
    prompt: `You're a junior banker in the retail / consumer group of a bulge bracket firm. Your MD covers industry strategics and sponsors active in the space. Those sponsors are sitting on abundant dry powder and are looking to deploy capital. Coty, one of the public companies your group covers has been trading down this year. Your MD would like to pitch a Coty take-private - positioning your team either for a buy-side or sell-side mandate. Your MD had asked you to put together an initial Coty LBO model. You ran the model, the return profile is attractive. Your MD now asks you to put together an overview of the investment idea in a two-page packet on PowerPoint.`,
    promptContext: `The packet should include key investment highlights, sources and uses, pro forma financial projections, the return profile of the take-private, historical financials and returns sensitivity.`,
    steps: [
      { text: "Open a new excel file and create a 'Sources' section with tabs for: fully diluted equity cap, debt cap, EV bridge, key statistics, historical share price" },
      { text: "Create a new 'Model' tab with sections: Entry/exit assumptions, Financing assumptions, Current EV bridge, Sources and uses, Financial projections, Returns summary" },
      { text: "Pull Coty's current capital structure, shares outstanding, and key LTM financials" },
      { text: "Apply formatting best practices: blue for inputs, green for references, black for formulas, shaded headers" },
      { text: "Calculate implied Enterprise Value based on premium percentage assumption" },
      { text: "Make reasonable assumptions on leverage, interest rate, debt paydown, and exit EBITDA multiple" },
      { text: "Build free cash flow including capex, change in NWC, cash taxes, debt paydown and interest expense" },
      { text: "Calculate initial return profile and cash-on-cash multiple" },
      { text: "Create PowerPoint with proper formatting: 11x7.5 inches, consistent titles, page numbers, sources" },
      { text: "Create 'Output' tab in Excel with clean outputs for projections, sensitivity tables, and S&U" },
      { text: "Copy outputs to PPT as 'Picture (Enhanced Metafile)'" },
      { text: "Pull Coty's investor presentation and 10-K, summarize key strategic initiatives and investment highlights" },
      { text: "Create 'Historicals' tab with 2021A-2025A financials highlighting EBITDA, EBIT, operating cash flow, net debt" },
      { text: "Review final packet and convert to PDF" },
    ],
  },
  {
    number: 4,
    title: "Oracle-Intel Combination Analysis",
    role: "Analyst, Associate",
    coverage: "Tech, M&A",
    inputTools: ["Excel", "PDF"],
    outputTools: ["Excel", "PDF", "PPT"],
    prompt: `There are rumors in the market that Oracle (ORCL) is looking to acquire Intel (INTC). Your MD is asking you to put together a combination analysis.`,
    promptContext: `In order to get a better sense of the feasibility and the implications of this acquisition, your MD expects the analysis to include the following:
1. Pro-forma financial profile
2. AVP (analysis at various prices), including:
   • Implied premiums
   • Implied multiples
   • Sources and uses
   • Accretion / dilution`,
    steps: [
      { text: "Pull all relevant source files into one master excel file" },
      { text: "Create a side-by-side financial summary of ORCL and INTC with key operating metrics (revenue, growth rate, margins etc.)" },
      { text: "Add pro-forma columns to show combined metrics" },
      { text: "Add TEV bridge for each company and show trading multiples" },
      { text: "Format output using standard color scheme, font conventions etc." },
      { text: "On a new sheet, create an AVP (Analysis At Various Prices) to show potential deal structures and PF impact" },
      { text: "Use a table format with a range of possible premiums (since purchase price is unknown)" },
      { text: "Import share price metrics to calculate premiums based on historical data (30-day/90-day VWAP, 52-week high/low)" },
      { text: "For each % premium, calculate TEV and implied multiples" },
      { text: "Create dynamic share count calculation capturing dilution from options via treasury stock method" },
      { text: "Calculate available balance sheet cash based on latest reported figures and minimum cash assumption" },
      { text: "Calculate incremental debt capacity based on maximum net leverage assumption" },
      { text: "Calculate equity needed to finance transaction once cash is used and leverage is maxed" },
      { text: "Calculate implied number of new shares issued to INTC shareholders" },
      { text: "Calculate ownership split between ORCL and INTC shareholders" },
      { text: "Calculate PF net leverage" },
      { text: "Assuming synergies are 15% of combined SG&A achieved over 3 years (25% in year 1), calculate accretion/dilution" },
      { text: "Calculate additional synergies required to breakeven (EPS neutral)" },
      { text: "Format output using standard color scheme, font conventions" },
    ],
  },
];

const Examples = () => {
  const [selectedExample, setSelectedExample] = useState<number | null>(null);
  const currentExample = selectedExample !== null ? examples[selectedExample] : null;
  
  return <Layout>
      <PageHeader icon={Star} title="Task Examples" description="Study complete examples showing properly constructed prompts and expected deliverables." />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {selectedExample === null ? <>
            <InfoBox type="info" title="End-to-End Examples">
              These examples show complete tasks including prompts, context, step-by-step instructions, and rubrics. Click on any example to view the full details.
            </InfoBox>

            {/* Full Tasks Section */}
            <section className="mt-8 mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-2">Full Tasks</h2>
              <p className="text-sm text-muted-foreground mb-4">
                View complete tasks with prompts, outputs, and rubrics. Password: <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">viewer</code>
              </p>
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <iframe 
                  src="https://rubric-peek-view.lovable.app/" 
                  className="w-full h-[600px] border-0"
                  title="Full Task Examples"
                />
              </div>
            </section>

            {/* Prompt + Output Examples Section */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Prompt + Output Examples</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {examples.map((example, index) => (
                  <button 
                    key={example.number} 
                    onClick={() => setSelectedExample(index)} 
                    className="group relative rounded-xl border border-border bg-card p-6 text-left transition-all hover:shadow-lg hover:border-primary/50 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <div className="absolute top-3 right-3">
                      <Briefcase className="h-4 w-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
                        {example.number}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-2">
                      {example.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                      {example.coverage}
                    </p>
                  </button>
                ))}
              </div>
            </section>

          </> : currentExample && <>
            <Button variant="ghost" onClick={() => setSelectedExample(null)} className="mb-6 -ml-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all examples
            </Button>

            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-accent p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">Example {currentExample.number}</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">{currentExample.title}</h3>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedExample(null)} className="flex-shrink-0">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">{currentExample.role}</Badge>
                  <Badge variant="outline">{currentExample.coverage}</Badge>
                </div>
                <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
                  <span><strong>Input:</strong> {currentExample.inputTools.join(", ")}</span>
                  <span><strong>Output:</strong> {currentExample.outputTools.join(", ")}</span>
                </div>
              </div>

              <div className="p-6 border-b border-border">
                <h4 className="font-semibold text-foreground mb-3">Prompt</h4>
                <p className="text-sm text-muted-foreground leading-relaxed bg-accent/50 p-4 rounded-lg whitespace-pre-line">
                  {currentExample.prompt}
                </p>
              </div>

              {currentExample.promptContext && (
                <div className="p-6 border-b border-border">
                  <h4 className="font-semibold text-foreground mb-3">Prompt Context</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed bg-muted/50 p-4 rounded-lg whitespace-pre-line">
                    {currentExample.promptContext}
                  </p>
                </div>
              )}

              <div className="p-6">
                <h4 className="font-semibold text-foreground mb-3">Step-by-Step Instructions</h4>
                <ol className="space-y-4 text-sm list-none">
                  {currentExample.steps.map((step, i) => (
                    <li key={i}>
                      <div className="flex gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold flex-shrink-0">{i + 1}.</span>
                        <span className="text-foreground">{step.text}</span>
                      </div>
                      {step.subSteps && step.subSteps.length > 0 && (
                        <ol className="ml-9 mt-2 space-y-1.5 list-none">
                          {step.subSteps.map((subStep, j) => (
                            <li key={j}>
                              <div className="flex gap-2">
                                <span className="text-muted-foreground">{String.fromCharCode(97 + j)}.</span>
                                <span className="text-muted-foreground">{subStep.text}</span>
                              </div>
                              {subStep.subItems && subStep.subItems.length > 0 && (
                                <ol className="ml-6 mt-1 space-y-1 list-none">
                                  {subStep.subItems.map((item, k) => (
                                    <li key={k} className="flex gap-2 text-muted-foreground/80">
                                      <span>{String.fromCharCode(105 + k)}.</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ol>
                              )}
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </>}

          <PageNavigation />
        </div>
      </div>
    </Layout>;
};

export default Examples;
