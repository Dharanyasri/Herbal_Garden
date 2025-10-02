import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";
import PlantGuide from "./pages/PlantGuide";
import SignIn from "./pages/SignIn";
import Quiz from "./pages/Quiz";
import Traditions from "./pages/Traditions";
import Preparations from "./pages/Preparations";
import FeatureIdeas from "./pages/FeatureIdeas";
import { Navbar } from './components/Navbar';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/guide" element={<PlantGuide />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/traditions" element={<Traditions />} />
          <Route path="/preparations" element={<Preparations />} />
          <Route path="/features" element={<FeatureIdeas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
