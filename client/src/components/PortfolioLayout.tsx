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
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(249,248,246,0.92)' }}>
        <div className="container flex items-center justify-between h-16 lg:h-20">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={ASSETS.logo10anos} alt="Grupo Arqueo" className="h-10 lg:h-14 w-auto" />
            </div>
          </Link>
          <div className="flex items-center gap-4 lg:gap-6">
            <span className="hidden md:block text-xs font-light" style={{ color: '#888' }}>
              Capítulo {chapterNum}
            </span>
            <div className="hidden md:block w-px h-4" style={{ backgroundColor: '#E6E6E6' }} />
            <span className="hidden md:block text-xs font-medium tracking-wider uppercase" style={{ color: '#2A2A2A' }}>
              {chapterTitle}
            </span>
            <Link href="/">
              <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium transition-colors duration-300 cursor-pointer hover:bg-[#EE7501] hover:text-white" style={{ border: '1px solid #E6E6E6', color: '#2A2A2A' }}>
                <Home className="w-3 h-3" />
                <span className="hidden sm:inline">Índice</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, #E6E6E6, transparent)' }} />
      </header>

      {/* CHAPTER HERO BANNER */}
      <section className="pt-28 lg:pt-36 pb-12 lg:pb-16" style={{ backgroundColor: '#2A2A2A' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-6xl lg:text-8xl font-bold" style={{ color: 'rgba(238,117,1,0.15)' }}>
              {chapterNum}
            </span>
            <div className="w-12 h-0.5 mt-4 mb-4" style={{ backgroundColor: '#EE7501' }} />
            <h1 className="text-2xl lg:text-4xl font-bold text-white">{chapterTitle}</h1>
          </motion.div>
        </div>
      </section>

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
          <img src={ASSETS.logo10anos} alt="Grupo Arqueo" className="h-8 w-auto brightness-0 invert" />
          <p className="text-[11px] font-light" style={{ color: 'rgba(255,255,255,0.3)' }}>
            &copy; 2016–2026 Grupo Arqueo. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
