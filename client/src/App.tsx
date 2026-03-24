import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CeoMessage from "./pages/CeoMessage";
import QuemSomos from "./pages/QuemSomos";
import MissaoVisao from "./pages/MissaoVisao";
import Ecossistema from "./pages/Ecossistema";
import Solucoes from "./pages/Solucoes";
import Diferenciais from "./pages/Diferenciais";
import NumerosTerritori from "./pages/NumerosTerritori";
import Cases from "./pages/Cases";
import Territorio from "./pages/Territorio";
import Parceiros from "./pages/Parceiros";
import Conformidade from "./pages/Conformidade";
import Contato from "./pages/Contato";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ceo" component={CeoMessage} />
      <Route path="/quem-somos" component={QuemSomos} />
      <Route path="/missao-visao" component={MissaoVisao} />
      <Route path="/ecossistema" component={Ecossistema} />
      <Route path="/solucoes" component={Solucoes} />
      <Route path="/diferenciais" component={Diferenciais} />
      <Route path="/numeros" component={NumerosTerritori} />
      <Route path="/presenca-territorial" component={NumerosTerritori} />
      <Route path="/cases" component={Cases} />
      <Route path="/territorio" component={Territorio} />
      <Route path="/parceiros" component={Parceiros} />
      <Route path="/conformidade" component={Conformidade} />
      <Route path="/contato" component={Contato} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
