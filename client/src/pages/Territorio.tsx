import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import MapaBrasilSVG, { type EstadoData } from "@/components/MapaBrasilSVG";
import { useState } from "react";

/**
 * PRESENÇA TERRITORIAL — Página 09
 * Design: Hero section + Mapa SVG real do Brasil com contornos dos estados
 * Layout: Texto à esquerda + Mapa à direita (referência: site Grupo Arqueo)
 */

const estados = [
  { uf: "RN", nome: "Rio Grande do Norte", regiao: "Nordeste", projetos: "40+" },
  { uf: "PB", nome: "Paraíba", regiao: "Nordeste", projetos: "35+" },
  { uf: "PE", nome: "Pernambuco", regiao: "Nordeste", projetos: "25+" },
  { uf: "CE", nome: "Ceará", regiao: "Nordeste", projetos: "20+" },
  { uf: "BA", nome: "Bahia", regiao: "Nordeste", projetos: "20+" },
  { uf: "PI", nome: "Piauí", regiao: "Nordeste", projetos: "15+" },
  { uf: "MA", nome: "Maranhão", regiao: "Nordeste", projetos: "10+" },
  { uf: "SE", nome: "Sergipe", regiao: "Nordeste", projetos: "8+" },
  { uf: "AL", nome: "Alagoas", regiao: "Nordeste", projetos: "5+" },
  { uf: "MG", nome: "Minas Gerais", regiao: "Sudeste", projetos: "15+" },
  { uf: "SP", nome: "São Paulo", regiao: "Sudeste", projetos: "10+" },
  { uf: "RJ", nome: "Rio de Janeiro", regiao: "Sudeste", projetos: "8+" },
  { uf: "GO", nome: "Goiás", regiao: "Centro-Oeste", projetos: "10+" },
  { uf: "DF", nome: "Distrito Federal", regiao: "Centro-Oeste", projetos: "5+" },
  { uf: "TO", nome: "Tocantins", regiao: "Norte", projetos: "5+" },
  { uf: "PA", nome: "Pará", regiao: "Norte", projetos: "3+" },
];

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
      {/* Hero Section with Map + Regions — Layout: Text Left + Map Right + Regions Below */}
      <section className="relative min-h-auto lg:min-h-[800px] flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="container relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#EE7501' }}>Território</span>
              </div>
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
                Atuação em <span style={{ color: '#EE7501' }}>23 estados</span> brasileiros e o <span style={{ color: '#EE7501' }}>DF</span>
              </h1>
              <p className="text-base lg:text-lg font-light leading-relaxed mb-8" style={{ color: '#555', maxWidth: '520px' }}>
                Com escritórios em Brasília, Natal e São Paulo, o Grupo Arqueo possui presença estratégica para atender projetos em todas as regiões do Brasil, com destaque para o Nordeste, onde concentra a maior parte de sua atuação.
              </p>

              {/* Selected state info */}
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

              {/* Legend */}
              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#861720' }} />
                  <span className="text-xs" style={{ color: '#666' }}>Com atuação</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#C4C4C4' }} />
                  <span className="text-xs" style={{ color: '#666' }}>Sem atuação</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
                  minHeight: '500px',
                }}
              >
                <MapaBrasilSVG
                  onEstadoSelect={setSelectedEstado}
                  selectedEstado={selectedEstado}
                />
              </div>
            </motion.div>
          </div>

          {/* Regions Summary — Integrated into Hero */}
          <div className="w-full">
            <h2 className="text-xl lg:text-2xl font-bold mb-8 text-center" style={{ color: '#2A2A2A' }}>Distribuição por Região</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-3xl mx-auto">
            {regioes.map((reg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5"
                style={{ backgroundColor: '#F9F8F6', borderTop: `3px solid ${reg.color}` }}
              >
                <span className="text-2xl font-bold" style={{ color: reg.color }}>{reg.count}</span>
                <p className="text-xs font-medium mt-1" style={{ color: '#2A2A2A' }}>estados</p>
                <p className="text-xs font-light" style={{ color: '#888' }}>{reg.nome}</p>
              </motion.div>
            ))})
            </div>
          </div>
        </div>
      </section>


    </PortfolioLayout>
  );
}
