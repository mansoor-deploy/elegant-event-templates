
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LuxeEmbrace from "./pages/LuxeEmbrace";
import VintageAffair from "./pages/VintageAffair";
import CelestialUnion from "./pages/CelestialUnion";
import MysticWhisper from "./pages/MysticWhisper";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/luxe-embrace" element={<LuxeEmbrace />} />
          <Route path="/vintage-affair" element={<VintageAffair />} />
          <Route path="/celestial-union" element={<CelestialUnion />} />
          <Route path="/mystic-whisper" element={<MysticWhisper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
