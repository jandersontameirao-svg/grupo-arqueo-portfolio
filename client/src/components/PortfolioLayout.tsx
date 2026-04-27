import { motion } from "framer-motion";
import { Link } from "wouter";
import { ASSETS } from "@/lib/assets";
import { Home, ArrowRight } from "lucide-react";

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

      {/* FOOTER */}
      <footer className="py-10" style={{ backgroundColor: '#2A2A2A' }}>
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={ASSETS.logoGrupoArqueo} alt="Grupo Arqueo" className="h-8 w-auto brightness-0 invert" />
          <p className="font-light" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 'var(--text-caption)' }}>
            &copy; 2016–2026 Grupo Arqueo. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* ═══════════ FLOATING NAVIGATION BUTTONS ═══════════ */}

      {/* Voltar ao Índice — fixo canto inferior esquerdo */}
      <Link href="/">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="fixed bottom-8 left-8 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full cursor-pointer group"
          style={{
            backgroundColor: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <Home className="w-4 h-4 transition-all duration-300 group-hover:scale-110" style={{ color: '#888' }} />
          <span className="font-medium transition-colors duration-300 group-hover:text-[#EE7501]" style={{ color: '#888', fontSize: 'var(--text-caption)' }}>
            Voltar ao Índice
          </span>
        </motion.div>
      </Link>

      {/* Próximo — fixo canto inferior direito */}
      {nextPath && (
        <Link href={nextPath}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3 rounded-full cursor-pointer group"
            style={{
              backgroundColor: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            <span className="font-medium tracking-wider uppercase transition-colors duration-300" style={{ color: '#888', fontSize: 'var(--text-caption)' }}>
              PRÓXIMO
            </span>
            <span className="font-semibold transition-colors duration-300 group-hover:text-[#EE7501]" style={{ color: '#2A2A2A', fontSize: 'var(--text-small)' }}>
              {nextLabel}
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: '#EE7501' }} />
          </motion.div>
        </Link>
      )}
    </div>
  );
}
