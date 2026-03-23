import { motion } from "framer-motion";
import { Link } from "wouter";
import { ASSETS } from "@/lib/assets";
import { Home, ArrowLeft, ArrowRight } from "lucide-react";

interface PortfolioLayoutProps {
  children: React.ReactNode;
  chapterNum: string;
  chapterTitle: string;
  prevPath?: string;
  prevLabel?: string;
  nextPath?: string;
  nextLabel?: string;
}

export default function PortfolioLayout({
  children,
  chapterNum,
  chapterTitle,
  prevPath,
  prevLabel,
  nextPath,
  nextLabel,
}: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F9F8F6' }}>
      {/* CONTENT */}
      <main className="flex-1">
        {children}
      </main>

      {/* CHAPTER NAVIGATION */}
      <nav className="py-8 lg:py-12" style={{ backgroundColor: '#F3EFEA' }}>
        <div className="container flex items-center justify-between">
          {prevPath ? (
            <Link href={prevPath}>
              <div className="flex items-center gap-3 group cursor-pointer">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" style={{ color: '#EE7501' }} />
                <div>
                  <p className="text-[10px] font-medium tracking-wider uppercase" style={{ color: '#888' }}>Anterior</p>
                  <p className="text-sm font-semibold" style={{ color: '#2A2A2A' }}>{prevLabel}</p>
                </div>
              </div>
            </Link>
          ) : <div />}
          <Link href="/">
            <div className="flex items-center gap-2 text-xs font-medium cursor-pointer transition-colors hover:text-[#EE7501]" style={{ color: '#888' }}>
              <Home className="w-3.5 h-3.5" />
              Voltar ao Índice
            </div>
          </Link>
          {nextPath ? (
            <Link href={nextPath}>
              <div className="flex items-center gap-3 group cursor-pointer text-right">
                <div>
                  <p className="text-[10px] font-medium tracking-wider uppercase" style={{ color: '#888' }}>Próximo</p>
                  <p className="text-sm font-semibold" style={{ color: '#2A2A2A' }}>{nextLabel}</p>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: '#EE7501' }} />
              </div>
            </Link>
          ) : <div />}
        </div>
      </nav>

      {/* FOOTER */}
      <footer className="py-10" style={{ backgroundColor: '#2A2A2A' }}>
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={ASSETS.logoGrupoArqueo} alt="Grupo Arqueo" className="h-8 w-auto brightness-0 invert" />
          <p className="text-[11px] font-light" style={{ color: 'rgba(255,255,255,0.3)' }}>
            &copy; 2016–2026 Grupo Arqueo. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
