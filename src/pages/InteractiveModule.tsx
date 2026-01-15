import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { InteractiveRubricModule } from "@/components/interactive/InteractiveRubricModule";
import { GraduationCap } from "lucide-react";

const InteractiveModule = () => {
  return (
    <Layout>
      <PageHeader 
        icon={GraduationCap} 
        title="Interactive Learning" 
        description="Learn rubric best practices through an interactive, step-by-step module with real examples and exercises." 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <InteractiveRubricModule />
        </div>
      </div>
    </Layout>
  );
};

export default InteractiveModule;
