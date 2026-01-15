import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { InfoBox } from "@/components/InfoBox";
import { PageNavigation } from "@/components/PageNavigation";
import { ClipboardCheck, ExternalLink } from "lucide-react";

const PLATFORM_URL = "https://ai.joinhandshake.com/fellow/014d80ad-36d9-4af6-a78b-b1a755e5e390/tasks";

const Onboarding = () => {
  const steps = [{
    text: <>Go to the <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Annotation Platform</a></>,
    bullets: [
      "Verify you see Project Sapphire on your dashboard",
      "If you don't see it, reach out via Slack or email"
    ]
  }, {
    text: "Complete the assessment",
    bullets: [
      "Located on the Annotation Platform",
      "You have one attempt maximum — no exceptions",
      "The assessment is unpaid"
    ]
  }, {
    text: "Sign the contract",
    bullets: [
      "Click the \"Issue Contract\" button in the onboarding steps"
    ]
  }, {
    text: "Submit your first tasks",
    bullets: [
      "After passing, you'll be throttled",
      "All task time is paid at your hourly rate",
      "You'll receive feedback on your submissions"
    ]
  }];

  return (
    <Layout>
      <PageHeader 
        icon={ClipboardCheck} 
        title="Onboarding Checklist" 
        description="Complete these steps before you begin creating tasks." 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Quick Link */}
          <a 
            href={PLATFORM_URL}
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-between p-5 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/15 transition-colors"
          >
            <p className="font-semibold text-foreground">Annotation Platform</p>
            <ExternalLink className="h-5 w-5 text-primary" />
          </a>

          {/* Kickoff Call Recording */}
          <ContentCard>
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">
              Project Sapphire Kickoff Call Recording
            </h2>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://drive.google.com/file/d/1dkGzAo9WrPa2CDYlaj6uiX0PB7O8juHY/preview"
                title="Project Sapphire Kickoff Call Recording"
                allow="autoplay"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </ContentCard>

          {/* Checklist */}
          <ContentCard>
            <h2 className="font-serif text-xl font-bold text-foreground mb-6">
              Steps to Complete
            </h2>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="pt-0.5">
                    <p className="text-foreground font-medium">{step.text}</p>
                    {step.bullets.length > 0 && (
                      <ul className="mt-1.5 space-y-0.5 ml-1">
                        {step.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="text-sm text-muted-foreground flex items-baseline gap-2">
                            <span className="text-primary text-xs">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ContentCard>

          {/* Help Info */}
          <InfoBox type="info" title="Need Help?">
            If you have questions about the onboarding process or get stuck, reach out via Slack or email.
          </InfoBox>

          <PageNavigation />
        </div>
      </div>
    </Layout>
  );
};

export default Onboarding;