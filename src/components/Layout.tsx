import { SearchCommand } from "@/components/SearchCommand";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Menu } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <ScrollProgressBar />
      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
            <div className="px-4">
              <div className="flex h-14 items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <SidebarTrigger className="text-foreground hover:bg-muted">
                    <Menu className="h-5 w-5" />
                  </SidebarTrigger>
                  <div className="md:hidden">
                    <span className="font-semibold text-foreground">Project Sapphire</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <SearchCommand />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-border bg-muted/50 py-8 mt-16">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm text-muted-foreground font-medium">Project Sapphire</p>
              <p className="text-xs text-muted-foreground mt-1">
                Questions? Reach out via Slack or email.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};
