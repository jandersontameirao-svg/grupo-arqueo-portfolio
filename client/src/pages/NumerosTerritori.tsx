import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import MapaBrasilSVG, { type EstadoData } from "@/components/MapaBrasilSVG";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import statsData from "../data/stats.json";

/**
 * NÚMEROS & PRESENÇA TERRITORIAL — Página 08
 * Design: Layout compacto e estratégico com blocos claros
 * Blocos: 1) Indicadores principais  2) Presença territorial (mapa)  3) Distribuição por tipo
 */

const regioes = [
  { nome: "Nordeste", count: 8, color: "#EE7501" },
  { nome: "Sudeste", count: 4, color: "#2C7EB3" },
  { nome: "Centro-Oeste", count: 4, color: "#861720" },
  { nome: "Norte", count: 5, color: "#5B8C3E" },
  { nome: "Sul", count: 3, color: "#8B4789" },
];

export default function NumerosTerritori() {
  const [selectedEstado, setSelectedEstado] = useState<EstadoData | null>(null);
  const [animateMetrics, setAnimateMetrics] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateMetrics(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const animationStyles = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .metric-fade-in { animation: fadeInUp 0.6s ease-out forwards; }
    .metric-d1 { animation-delay: 0.1s; }
    .metric-d2 { animation-delay: 0.2s; }
    .metric-d3 { animation-delay: 0.3s; }
    .metric-d4 { animation-delay: 0.4s; }
    .metric-d5 { animation-delay: 0.5s; }
  `;

  // Top 8 segmentos para manter compacto
  const tiposData = Object.entries(statsData.tipos)
    .map(([name, count]) => ({ name, count: count as number }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
  
  const maxCount = Math.max(...tiposData.map(t => t.count));

  return (
    <PortfolioLayout
      chapterNum="08"
      chapterTitle="Números & Presença Territorial"
      prevPath="/cases"
      prevLabel="Cases"
      nextPath="/parceiros"
      nextLabel="Nossos Parceiros"
    >
      <style>{animationStyles}</style>

      {/* ═══════════ BLOCO 1: INDICADORES PRINCIPAIS ═══════════ */}
      <section style={{ backgroundColor: '#FAFAF9', padding: 'var(--space-section) var(--container-padding)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Header com logo */}
          <div className="flex items-center gap-6 lg:gap-8 mb-4">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Semtítulo-3_aa567132.webp"
              alt="10 Anos"
              className="h-14 lg:h-18 w-auto flex-shrink-0"
            />
            <div>
              <h1 className="font-bold leading-tight" style={{ color: '#1A1A1A', fontSize: 'var(--text-hero)' }}>
                Escala, presença e consistência operacional
              </h1>
            </div>
          </div>
          <p className="mb-8 max-w-3xl" style={{ color: '#777', fontSize: 'var(--text-body)' }}>
            Os indicadores sintetizam a trajetória do Grupo Arqueo em escala, presença territorial, estrutura organizacional e capacidade de mobilização técnica.
          </p>

          {/* Grid de métricas — layout 3 colunas compacto */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Métrica destaque: Anos */}
            <div
              className={`p-6 lg:p-8 lg:col-span-2 row-span-2 flex flex-col justify-center ${animateMetrics ? 'metric-fade-in metric-d1' : 'opacity-0'}`}
              style={{ backgroundColor: '#FFFFFF', borderLeft: '5px solid #EE7501', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
            >
              <div className="font-black mb-1" style={{ color: '#EE7501', fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)' }}>10+</div>
              <div className="font-semibold" style={{ color: '#2A2A2A', fontSize: 'var(--text-body)' }}>Anos de Atuação</div>
              <div className="mt-2" style={{ color: '#999', fontSize: 'var(--text-caption)' }}>Desde 2015, construindo referência no setor</div>
            </div>

            {/* Projetos */}
            <div
              className={`p-5 lg:p-6 text-center ${animateMetrics ? 'metric-fade-in metric-d2' : 'opacity-0'}`}
              style={{ backgroundColor: '#FFFFFF', borderTop: '4px solid #2C7EB3', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
            >
              <div className="font-bold" style={{ color: '#2C7EB3', fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}>{statsData.total_projetos}+</div>
              <div className="font-medium mt-1" style={{ color: '#666', fontSize: 'var(--text-caption)' }}>Projetos</div>
            </div>

            {/* Estados */}
            <div
              className={`p-5 lg:p-6 text-center ${animateMetrics ? 'metric-fade-in metric-d3' : 'opacity-0'}`}
              style={{ backgroundColor: '#FFFFFF', borderTop: '4px solid #861720', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
            >
              <div className="font-bold" style={{ color: '#861720', fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}>23</div>
              <div className="font-medium mt-1" style={{ color: '#666', fontSize: 'var(--text-caption)' }}>Estados e DF</div>
            </div>

            {/* Profissionais */}
            <div
              className={`p-5 lg:p-6 text-center ${animateMetrics ? 'metric-fade-in metric-d4' : 'opacity-0'}`}
              style={{ backgroundColor: '#FFFFFF', borderTop: '4px solid #5B8C3E', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
            >
              <div className="font-bold" style={{ color: '#5B8C3E', fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}>50+</div>
              <div className="font-medium mt-1" style={{ color: '#666', fontSize: 'var(--text-caption)' }}>Profissionais</div>
            </div>

            {/* Parcerias */}
            <div
              className={`p-5 lg:p-6 text-center ${animateMetrics ? 'metric-fade-in metric-d5' : 'opacity-0'}`}
              style={{ backgroundColor: '#FFFFFF', borderTop: '4px solid #8B4789', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
            >
              <div className="font-bold" style={{ color: '#8B4789', fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}>57+</div>
              <div className="font-medium mt-1" style={{ color: '#666', fontSize: 'var(--text-caption)' }}>Parcerias Estratégicas</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ BLOCO 2: PRESENÇA TERRITORIAL ═══════════ */}
      <section style={{ backgroundColor: '#F9F8F6', padding: 'var(--space-section) var(--container-padding)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
            <span className="font-medium tracking-[0.3em] uppercase" style={{ color: '#EE7501', fontSize: 'var(--text-caption)' }}>Território</span>
          </div>
          <h2 className="font-bold mb-3" style={{ color: '#2A2A2A', fontSize: 'var(--text-section-title)' }}>
            Atuação em <span style={{ color: '#EE7501' }}>23 estados</span> brasileiros e o <span style={{ color: '#EE7501' }}>DF</span>
          </h2>
          <p className="font-light leading-relaxed mb-10 max-w-2xl" style={{ color: '#666', fontSize: 'var(--text-body)' }}>
            Com escritórios em Brasília, Natal e São Paulo, o Grupo Arqueo possui presença estratégica para atender projetos em todas as regiões do Brasil.
          </p>

          {/* Distribuição por Região — inline acima do mapa */}
          <div className="grid grid-cols-5 gap-3 lg:gap-4 mb-10">
            {regioes.map((reg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="p-3 lg:p-4 text-center"
                style={{ backgroundColor: '#FFFFFF', borderTop: `3px solid ${reg.color}`, boxShadow: '0 1px 8px rgba(0,0,0,0.03)' }}
              >
                <span className="font-bold" style={{ color: reg.color, fontSize: 'var(--text-subtitle)' }}>{reg.count}</span>
                <p className="text-[10px] lg:text-xs font-medium mt-0.5" style={{ color: '#2A2A2A' }}>estados</p>
                <p className="text-[10px] lg:text-xs font-light" style={{ color: '#888' }}>{reg.nome}</p>
              </motion.div>
            ))}
          </div>

          {/* Mapa + Info lateral */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start">
            {/* Mapa — preservado integralmente */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <MapaBrasilSVG
                  onEstadoSelect={setSelectedEstado}
                  selectedEstado={selectedEstado}
                />
              </motion.div>
            </div>

            {/* Painel lateral — estado selecionado + legenda */}
            <div className="lg:col-span-2 space-y-6">
              {/* Estado selecionado */}
              {selectedEstado ? (
                <motion.div
                  key={selectedEstado.sigla}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 rounded-lg"
                  style={{ backgroundColor: '#FFFFFF', borderLeft: '4px solid #EE7501', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                >
                  <div className="font-bold" style={{ color: '#2A2A2A', fontSize: 'var(--text-subtitle)' }}>
                    {selectedEstado.nome}
                  </div>
                  <div className="mt-2" style={{ color: '#666', fontSize: 'var(--text-small)' }}>
                    <strong>Região:</strong> {selectedEstado.regiao}
                  </div>
                  <div style={{ color: '#666', fontSize: 'var(--text-small)' }}>
                    <strong>Projetos:</strong> {selectedEstado.projetos}
                  </div>
                </motion.div>
              ) : (
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(134,23,32,0.04)', border: '1px dashed rgba(134,23,32,0.15)' }}>
                  <p className="text-xs" style={{ color: '#888' }}>
                    Clique em um estado no mapa para ver detalhes
                  </p>
                </div>
              )}

              {/* Legenda */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#861720' }} />
                  <span className="text-xs" style={{ color: '#666' }}>Com atuação</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#C4C4C4' }} />
                  <span className="text-xs" style={{ color: '#666' }}>Sem atuação</span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ BLOCO 3: DISTRIBUIÇÃO POR TIPO (compacto) ═══════════ */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-section) var(--container-padding)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold mb-2 text-center" style={{ color: '#2A2A2A', fontSize: 'var(--text-subtitle)' }}>
            Distribuição por Segmento
          </h2>
          <p className="text-center mb-8" style={{ color: '#999', fontSize: 'var(--text-caption)' }}>Principais tipos de projetos realizados</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {tiposData.map((seg, idx) => (
              <div key={idx} className={`${animateMetrics ? 'metric-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${0.1 + idx * 0.06}s` }}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs font-medium" style={{ color: '#444' }}>{seg.name}</span>
                  <span className="text-xs font-bold" style={{ color: '#EE7501' }}>{seg.count}</span>
                </div>
                <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#ECECEC' }}>
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: animateMetrics ? `${Math.round((seg.count / maxCount) * 100)}%` : '0%',
                      background: 'linear-gradient(90deg, #EE7501 0%, #FF9A3C 100%)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PortfolioLayout>
  );
}
