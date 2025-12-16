import { Toaster } from "@/components/test/ui/toaster";
import { Toaster as Sonner } from "@/components/test/ui/sonner";
import { TooltipProvider } from "@/components/test/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DocPage from "./pages/DocPage";
import SubmodulePage from "./pages/SubmodulePage";
import PncpPage from "./pages/PncpPage"; // Import PncpPage
import DocLayout from "@/components/test/DocLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DocLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/docs/:category/:page" element={<DocPage />} />
            <Route path="/modulos/:module/:submodule" element={<SubmodulePage />} />
            <Route path="/pncp/:category" element={<PncpPage />} /> 
            <Route path="/pncp/:category/:option" element={<PncpPage />} /> 
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
