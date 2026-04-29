import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { I18nProvider } from "./i18n/I18nProvider";
import LanguageSelector from "./components/LanguageSelector";
import Home from "./pages/Home";
import CeoMessage from "./pages/CeoMessage";
import QuemSomosEcossistema from "./pages/QuemSomosEcossistema";
import Solucoes from "./pages/Solucoes";
import DiferenciaisConformidade from "./pages/DiferenciaisConformidade";
import NumerosTerritori from "./pages/NumerosTerritori";
import Cases from "./pages/Cases";
import Territorio from "./pages/Territorio";
import Parceiros from "./pages/Parceiros";
import Conformidade from "./pages/Conformidade";
import MissaoVisao from "./pages/MissaoVisao";
import Contato from "./pages/Contato";
import CaseDetail from "./pages/CaseDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ceo" component={CeoMessage} />
      <Route path="/quem-somos" component={QuemSomosEcossistema} />
      <Route path="/ecossistema" component={QuemSomosEcossistema} />
      <Route path="/missao-visao" component={MissaoVisao} />
      <Route path="/solucoes" component={Solucoes} />
      <Route path="/diferenciais" component={DiferenciaisConformidade} />
      <Route path="/conformidade" component={DiferenciaisConformidade} />
      <Route path="/numeros" component={NumerosTerritori} />
      <Route path="/numeros-territorio" component={NumerosTerritori} />
      <Route path="/presenca-territorial" component={NumerosTerritori} />
      <Route path="/cases" component={Cases} />
      <Route path="/cases/:id" component={CaseDetail} />
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
      <I18nProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <LanguageSelector />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </I18nProvider>
    </ErrorBoundary>
  );
}

export default App;
