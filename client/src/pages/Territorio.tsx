import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import MapaBrasilSVG, { type EstadoData } from "@/components/MapaBrasilSVG";
import { useState } from "react";

/**
 * PRESENÇA TERRITORIAL — Página 09
 * Design: Layout compacto com regiões integradas ao mapa
 * Mapa preservado integralmente — sem alterações
 */

const regioes = [
  { nome: "Nordeste", count: 8, color: "#EE7501" },
  { nome: "Sudeste", count: 4, color: "#2C7EB3" },
  { nome: "Centro-Oeste", count: 4, color: "#861720" },
  { nome: "Norte", count: 5, color: "#5B8C3E" },
  { nome: "Sul", count: 3, color: "#6B4C8A" },
];

export default function Territorio() {
  const [selectedEstado, setSelectedEstado] = useState<EstadoData | null>(null);

  return (
    <PortfolioLayout
      chapterNum="09"
      chapterTitle="Presença Territorial"
      prevPath="/cases"
      prevLabel="Cases"
      nextPath="/contato"
      nextLabel="Contato"
    >
      {/* Hero Section — Título + Regiões + Mapa integrados */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="container">
          {/* Header */}
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
            <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#EE7501' }}>Território</span>
          </div>
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3" style={{ color: '#2A2A2A' }}>
            Atuação em <span style={{ color: '#EE7501' }}>23 estados</span> brasileiros e o <span style={{ color: '#EE7501' }}>DF</span>
          </h1>
          <p className="text-sm lg:text-base font-light leading-relaxed mb-10 max-w-2xl" style={{ color: '#666' }}>
            Com escritórios em Brasília, Natal e São Paulo, o Grupo Arqueo possui presença estratégica para atender projetos em todas as regiões do Brasil, com destaque para o Nordeste, onde concentra a maior parte de sua atuação.
          </p>

          {/* Distribuição por Região — inline */}
          <div className="grid grid-cols-5 gap-3 lg:gap-4 mb-12">
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
                <span className="text-xl lg:text-2xl font-bold" style={{ color: reg.color }}>{reg.count}</span>
                <p className="text-[10px] lg:text-xs font-medium mt-0.5" style={{ color: '#2A2A2A' }}>estados</p>
                <p className="text-[10px] lg:text-xs font-light" style={{ color: '#888' }}>{reg.nome}</p>
              </motion.div>
            ))}
          </div>

          {/* Mapa + Painel lateral */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start">
            {/* Mapa — preservado integralmente */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 8px 40px rgba(0,0,0,0.06)' }}
              >
                <MapaBrasilSVG
                  onEstadoSelect={setSelectedEstado}
                  selectedEstado={selectedEstado}
                />
              </motion.div>
            </div>

            {/* Painel lateral */}
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
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: '#861720' }}>
                      {selectedEstado.sigla}
                    </div>
                    <div>
                      <p className="text-sm font-bold" style={{ color: '#2A2A2A' }}>{selectedEstado.nome}</p>
                      <p className="text-xs" style={{ color: '#888' }}>{selectedEstado.regiao}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-2xl font-bold" style={{ color: '#EE7501' }}>{selectedEstado.projetos}</span>
                    <span className="text-xs" style={{ color: '#888' }}>projetos realizados</span>
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

    </PortfolioLayout>
  );
}
