import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { PageNavigation } from "@/components/PageNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  UserCheck, 
  Shield, 
  ShieldCheck,
  TrendingUp,
  Info
} from "lucide-react";

const roles = [
  {
    title: "Attempter",
    icon: UserCheck,
    color: "bg-primary/10 text-primary",
    expectations: [
      "Produce high-quality task work that meets Sapphire standards",
      "Show strong attention to detail and effort",
      "Engage with the community (questions, discussions, calibration)",
      "Incorporate feedback and improve quickly"
    ],
    growth: [
      "Access to more complex work",
      "Pathway to R1 Reviewer through consistent high quality"
    ]
  },
  {
    title: "R1 Reviewer",
    icon: Shield,
    color: "bg-secondary/20 text-secondary-foreground",
    expectations: [
      "Review work with high attention to detail",
      "Catch close or subtle mistakes",
      "Provide clear, actionable feedback",
      "Edit and uphold a consistent quality bar"
    ],
    growth: [
      "Collaborate with Attempters to mentor and elevate quality",
      "Pathway to R2 Reviewer"
    ]
  },
  {
    title: "R2 Reviewer",
    icon: ShieldCheck,
    color: "bg-accent/20 text-accent-foreground",
    expectations: [
      "Act as the final quality gate",
      "Maintain alignment across reviewers",
      "Identify systemic issues and raise standards",
      "Partner with the project team on training and instruction improvements"
    ],
    growth: [
      "Ownership of final reviews",
      "Expanded leadership and influence on project quality"
    ]
  }
];

const promotionNotes = [
  "Promotions are not automatic",
  "Based on approval rate, quality, reliability, leadership, and project needs",
  "Demonstrated commitment to improving overall project quality is key"
];

const Roles = () => {
  return (
    <Layout>
      <PageHeader
        icon={Users}
        title="Roles & Promotion Path"
        description="Promotions depend on performance, consistency, and project needs. Leadership roles are earned by showing reliability, inclusivity, and a consistent commitment to improving quality."
      />

      <div className="container mx-auto px-4 py-8 space-y-10">
        {/* Roles Grid */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              Role Progression
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {roles.map((role, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg shrink-0 ${role.color}`}>
                      <role.icon className="h-4 w-4" />
                    </div>
                    <CardTitle className="text-base font-serif">
                      {role.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between gap-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {role.expectations.map((expectation, eIndex) => (
                      <li key={eIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{expectation}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t space-y-1.5 mt-auto">
                    <p className="text-xs font-medium text-foreground mb-1">Growth</p>
                    {role.growth.map((item, gIndex) => (
                      <p key={gIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                        <TrendingUp className="h-3 w-3 text-primary shrink-0 mt-0.5" />
                        {item}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Promotion Notes */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                <Info className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                  Promotion Notes
                </h3>
                <div className="space-y-2">
                  {promotionNotes.map((note, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        {note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <PageNavigation />
      </div>
    </Layout>
  );
};

export default Roles;
