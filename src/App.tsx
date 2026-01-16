import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { PasswordGate } from "@/components/PasswordGate";
import { ThemeProvider } from "@/context/ThemeContext";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Workflow from "./pages/Workflow";
import PromptGuide from "./pages/PromptGuide";
import OutputGuide from "./pages/OutputGuide";
import RubricsOverview from "./pages/rubrics/RubricsOverview";
import CriteriaStacked from "./pages/rubrics/CriteriaStacked";
import CriteriaSelfContainment from "./pages/rubrics/CriteriaSelfContainment";
import CriteriaAmbiguity from "./pages/rubrics/CriteriaAmbiguity";

import RubricWeights from "./pages/rubrics/RubricWeights";
import RubricCategories from "./pages/rubrics/RubricCategories";
import BankerBibleChecklist from "./pages/rubrics/BankerBibleChecklist";
import ErrorTaxonomy from "./pages/ErrorTaxonomy";
import MultiTurn from "./pages/MultiTurn";
import Categories from "./pages/Categories";
import Examples from "./pages/Examples";
import InteractiveModule from "./pages/InteractiveModule";
import FAQ from "./pages/FAQ";
import Glossary from "./pages/Glossary";
import Pay from "./pages/Pay";
import TaskDistribution from "./pages/TaskDistribution";
import TaskWalkthrough from "./pages/TaskWalkthrough";
import Roles from "./pages/Roles";
import LiveMeetings from "./pages/LiveMeetings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <PasswordGate>
          <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/live-meetings" element={<LiveMeetings />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/workflow" element={<Workflow />} />
            <Route path="/task-walkthrough" element={<TaskWalkthrough />} />
            <Route path="/prompts" element={<PromptGuide />} />
            <Route path="/output" element={<OutputGuide />} />
            <Route path="/rubrics" element={<RubricsOverview />} />
            <Route path="/rubrics/stacked" element={<CriteriaStacked />} />
            <Route path="/rubrics/self-containment" element={<CriteriaSelfContainment />} />
            <Route path="/rubrics/ambiguity" element={<CriteriaAmbiguity />} />
            
            <Route path="/rubrics/weights" element={<RubricWeights />} />
            <Route path="/rubrics/categories" element={<RubricCategories />} />
            <Route path="/rubrics/banker-bible" element={<BankerBibleChecklist />} />
            <Route path="/error-taxonomy" element={<ErrorTaxonomy />} />
            <Route path="/multi-turn" element={<MultiTurn />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/interactive" element={<InteractiveModule />} />
            <Route path="/task-distribution" element={<TaskDistribution />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/pay" element={<Pay />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </BrowserRouter>
        </PasswordGate>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
