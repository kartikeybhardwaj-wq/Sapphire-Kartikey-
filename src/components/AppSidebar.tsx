import { NavLink } from "@/components/NavLink";
import { BookOpen, ClipboardCheck, Workflow, FileText, Star, DollarSign, ExternalLink, HelpCircle, LayoutGrid, Users, Map, AlertTriangle, FileOutput, PenLine, Layers, BoxSelect, HelpCircle as Ambiguity, Scale, FolderOpen, ChevronDown, Video } from "lucide-react";
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const mainNavItems = [
  { to: "/", label: "Welcome", icon: BookOpen },
  { to: "/live-meetings", label: "Live Meetings", icon: Video },
  { to: "/onboarding", label: "Onboarding", icon: ClipboardCheck },
  { to: "/roles", label: "Roles", icon: Users },
  { to: "/workflow", label: "Workflow", icon: Workflow },
  { to: "/prompts", label: "Prompt", icon: PenLine },
  { to: "/output", label: "Output", icon: FileOutput },
];

const rubricSubItems = [
  { to: "/rubrics", label: "Overview", icon: FileText },
  { to: "/rubrics/stacked", label: "Criteria: Stacked", icon: Layers },
  { to: "/rubrics/self-containment", label: "Criteria: Self-Contained", icon: BoxSelect },
  { to: "/rubrics/ambiguity", label: "Criteria: Ambiguous", icon: Ambiguity },
  { to: "/rubrics/banker-bible", label: "Banker Bible", icon: FileText },
  { to: "/rubrics/weights", label: "Weights", icon: Scale },
  { to: "/rubrics/categories", label: "Categories", icon: FolderOpen },
];

const bottomNavItems = [
  { to: "/error-taxonomy", label: "Major / Minor Errors", icon: AlertTriangle },
  { to: "/task-walkthrough", label: "Task Walkthrough", icon: Map },
  { to: "/task-distribution", label: "Task Distribution", icon: LayoutGrid },
  { to: "/examples", label: "Examples", icon: Star },
  { to: "/faq", label: "FAQ", icon: HelpCircle },
  { to: "/pay", label: "Pay", icon: DollarSign },
];

export function AppSidebar() {
  const [rubricOpen, setRubricOpen] = useState(true);

  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">S</span>
          </div>
          <span className="font-semibold text-sidebar-foreground">Project Sapphire</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-sidebar-foreground/70 rounded-lg transition-all duration-200 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                      activeClassName="text-sidebar-primary bg-sidebar-accent font-semibold"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* Rubrics Collapsible Section */}
              <Collapsible open={rubricOpen} onOpenChange={setRubricOpen}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-sidebar-foreground/70 rounded-lg transition-all duration-200 hover:text-sidebar-foreground hover:bg-sidebar-accent cursor-pointer">
                      <div className="flex items-center gap-3">
                        <FileText className="h-4 w-4" />
                        <span>Rubrics</span>
                      </div>
                      <ChevronDown className={`h-4 w-4 transition-transform ${rubricOpen ? "rotate-180" : ""}`} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                </SidebarMenuItem>
                <CollapsibleContent>
                  <div className="ml-4 border-l border-border pl-2 space-y-1">
                    {rubricSubItems.map((item) => (
                      <SidebarMenuItem key={item.to}>
                        <SidebarMenuButton asChild>
                          <NavLink
                            to={item.to}
                            end={item.to === "/rubrics"}
                            className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-sidebar-foreground/60 rounded-lg transition-all duration-200 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                            activeClassName="text-sidebar-primary bg-sidebar-accent font-semibold"
                          >
                            <item.icon className="h-3.5 w-3.5" />
                            <span>{item.label}</span>
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {bottomNavItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.to}
                      className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-sidebar-foreground/70 rounded-lg transition-all duration-200 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                      activeClassName="text-sidebar-primary bg-sidebar-accent font-semibold"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border">
        <a
          href="https://ai.joinhandshake.com/fellow/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm transition-all hover:bg-primary/90 w-full justify-center"
        >
          <span>Open Platform</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </SidebarFooter>
    </Sidebar>
  );
}
