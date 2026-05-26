import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/shared/Layout";
import ErrorBoundary from "./components/ErrorBoundary";

const ResumeBuilder = lazy(() => import("./components/resume-builder/ResumeBuilder").then(m => ({ default: m.ResumeBuilder })));
const AIAnalysis = lazy(() => import("./components/analysis/AIAnalysis").then(m => ({ default: m.AIAnalysis })));
const Dashboard = lazy(() => import("./pages/Dashboard").then(m => ({ default: m.Dashboard })));
const Templates = lazy(() => import("./pages/Templates").then(m => ({ default: m.Templates })));
const Settings = lazy(() => import("./pages/Settings").then(m => ({ default: m.Settings })));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <ErrorBoundary>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div className="p-6">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/builder" element={<ResumeBuilder />} />
              <Route path="/builder/:resumeId" element={<ResumeBuilder />} />
              <Route path="/analysis" element={<AIAnalysis />} />
              <Route path="/analysis/:resumeId" element={<AIAnalysis />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/settings" element={<Settings />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </ErrorBoundary>
);

export default App;
