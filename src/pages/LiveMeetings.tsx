import { Layout } from "@/components/Layout";
import { ContentCard } from "@/components/ContentCard";
import { PageHeader } from "@/components/PageHeader";
import { Video, Calendar, ExternalLink } from "lucide-react";

const LiveMeetings = () => {
  return (
    <Layout>
      <div className="space-y-8 max-w-4xl">
        <PageHeader
          icon={Video}
          title="Live Meetings"
          description="Join scheduled live sessions for Q&A, walkthroughs, and team discussions."
        />

        <ContentCard>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Video className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-foreground">Upcoming Sessions</h2>
              <p className="text-sm text-muted-foreground">Check back for scheduled live meetings</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-background border border-border">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Project Sapphire | Optional Support Call</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>Daily at 2:00 PM PST</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Drop in for live Q&A, troubleshooting, and support from the team.
                  </p>
                </div>
                <a
                  href="https://joinhandshake.zoom.us/j/98111090565?jst=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm transition-all hover:bg-primary/90 shrink-0"
                >
                  <span>Join Zoom</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-background border border-border">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">[Optional] Project Sapphire Kick-Off Call</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>6:00 – 6:45 PM PST</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-3 pl-6">
                    <p>Mon, Jan 13 • Tue, Jan 14 • Wed, Jan 15 • Thu, Jan 16 • Fri, Jan 17</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Kick-off sessions to get you started with Project Sapphire.
                  </p>
                </div>
                <a
                  href="https://joinhandshake.zoom.us/j/91727713569?jst=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm transition-all hover:bg-primary/90 shrink-0"
                >
                  <span>Join Zoom</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </ContentCard>
      </div>
    </Layout>
  );
};

export default LiveMeetings;
