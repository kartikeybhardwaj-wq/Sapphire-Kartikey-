import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { PageNavigation } from "@/components/PageNavigation";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <PageHeader
          icon={HelpCircle}
          title="Frequently Asked Questions"
          description="Common questions and answers about the Project Sapphire workflow."
        />

        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
            <HelpCircle className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-2">To Be Determined</h2>
          <p className="text-muted-foreground max-w-md">
            FAQ content is being updated. Check back soon for answers to common questions.
          </p>
        </div>

        <PageNavigation />
      </div>
    </Layout>
  );
}
