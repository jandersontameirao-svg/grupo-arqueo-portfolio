import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import MapaBrasilSVG, { type EstadoData } from "@/components/MapaBrasilSVG";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import statsData from "../data/stats.json";

/**
 * NÚMEROS & PRESENÇA TERRITORIAL — Página 08
 * Design: Combinação de métricas de escala + mapa interativo do Brasil
 * Layout: Seção de números + Mapa SVG real com contornos dos estados
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
  { nome: "Nordeste", count: 9, color: "#EE7501" },
  { nome: "Sudeste", count: 3, color: "#2C7EB3" },
  { nome: "Centro-Oeste", count: 2, color: "#861720" },
  { nome: "Norte", count: 2, color: "#5B8C3E" },
];

export default function NumerosTerritori() {
  const [selectedEstado, setSelectedEstado] = useState<EstadoData | null>(null);
  const [animateMetrics, setAnimateMetrics] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateMetrics(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // CSS para animações
  const animationStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .metric-fade-in {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    .metric-primary {
      animation-delay: 0.1s;
    }
    .metric-secondary-1 {
      animation-delay: 0.2s;
    }
    .metric-secondary-2 {
      animation-delay: 0.3s;
    }
    .metric-complementary-1 {
      animation-delay: 0.4s;
    }
    .metric-complementary-2 {
      animation-delay: 0.5s;
    }
    .metric-complementary-3 {
      animation-delay: 0.6s;
    }
    .metric-complementary-4 {
      animation-delay: 0.7s;
    }
    .segment-bar {
      animation: fadeInUp 0.6s ease-out forwards;
    }
  `;

  // Preparar dados dos segmentos
  const tiposData = Object.entries(statsData.tipos).map(([name, count]) => ({
    name,
    count: count as number,
  }));
  
  const maxCount = Math.max(...tiposData.map(t => t.count));
  const segmentos = tiposData.map(seg => ({
    name: seg.name,
    count: seg.count.toString(),
    percentage: Math.round((seg.count / maxCount) * 100),
  }));

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

      {/* ═══════════════════ SEÇÃO 1: NÚMEROS ═══════════════════ */}
      <section className="py-20 lg:py-32 px-4 lg:px-8" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="max-w-6xl mx-auto">
          {/* Logo e Título */}
          <div className="flex items-center gap-6 lg:gap-8 mb-8">
            <img
              src="https://cdn.jsdelivr.net/gh/grupo-arqueo/assets/logo-10-anos.png"
              alt="10 Anos"
              className="h-16 lg:h-20 w-auto flex-shrink-0"
            />
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: '#1A1A1A' }}>
              Escala, presença e consistência operacional
            </h1>
          </div>
        </div>
      </section>

      {/* Contextualização */}
      <section className="py-12 lg:py-16 px-4 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-base lg:text-lg" style={{ color: '#666666' }}>
            Os indicadores a seguir sintetizam a trajetória do Grupo Arqueo em escala, presença territorial, estrutura organizacional e capacidade de mobilização técnica.
          </p>
        </div>
      </section>

      {/* Métricas Principais */}
      <section className="py-16 lg:py-20 px-4 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Coluna Esquerda - Métricas Principais */}
            <div className="space-y-8">
              {/* Métrica Principal */}
              <div
                className={`p-8 rounded-2xl ${animateMetrics ? 'metric-fade-in metric-primary' : 'opacity-0'}`}
                style={{
                  backgroundColor: '#F5F5F5',
                  borderLeft: '6px solid #EE7501',
                }}
              >
                <div className="text-5xl lg:text-6xl font-black mb-2" style={{ color: '#EE7501' }}>
                  10+
                </div>
                <div className="text-lg font-semibold" style={{ color: '#2A2A2A' }}>
                  Anos de Atuação
                </div>
              </div>

              {/* Métricas Secundárias */}
              <div className="grid grid-cols-2 gap-6">
                <div
                  className={`p-6 rounded-xl text-center ${animateMetrics ? 'metric-fade-in metric-secondary-1' : 'opacity-0'}`}
                  style={{
                    backgroundColor: '#F5F5F5',
                    borderTop: '4px solid #2C7EB3',
                  }}
                >
                  <div className="text-4xl font-bold mb-1" style={{ color: '#2C7EB3' }}>
                    {statsData.total_projetos}+
                  </div>
                  <div className="text-sm font-medium" style={{ color: '#666' }}>
                    Projetos
                  </div>
                </div>

                <div
                  className={`p-6 rounded-xl text-center ${animateMetrics ? 'metric-fade-in metric-secondary-2' : 'opacity-0'}`}
                  style={{
                    backgroundColor: '#F5F5F5',
                    borderTop: '4px solid #861720',
                  }}
                >
                  <div className="text-4xl font-bold mb-1" style={{ color: '#861720' }}>
                    16
                  </div>
                  <div className="text-sm font-medium" style={{ color: '#666' }}>
                    Estados
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita - Métricas Complementares */}
            <div className="space-y-4">
              {[
                { label: 'Profissionais', value: '50', color: '#2C7EB3', delay: 'metric-complementary-1' },
                { label: 'Clientes Atendidos', value: '200', color: '#EE7501', delay: 'metric-complementary-2' },
                { label: 'Regiões Cobertas', value: '4', color: '#5B8C3E', delay: 'metric-complementary-3' },
                { label: 'Parcerias Estratégicas', value: '57', color: '#861720', delay: 'metric-complementary-4' },
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-lg flex justify-between items-center ${animateMetrics ? `metric-fade-in ${metric.delay}` : 'opacity-0'}`}
                  style={{
                    backgroundColor: '#F9F9F9',
                    borderLeft: `4px solid ${metric.color}`,
                  }}
                >
                  <span style={{ color: '#666', fontWeight: 500 }}>{metric.label}</span>
                  <span className="text-2xl font-bold" style={{ color: metric.color }}>
                    {metric.value}+
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Distribuição por Tipo */}
      <section className="py-16 lg:py-20 px-4 lg:px-8" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold mb-12 text-center" style={{ color: '#2A2A2A' }}>
            Distribuição de Projetos por Tipo
          </h2>
          <div className="space-y-6">
            {segmentos.map((seg, idx) => (
              <div key={idx} className={`${animateMetrics ? 'segment-bar' : 'opacity-0'}`}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold" style={{ color: '#2A2A2A' }}>
                    {seg.name}
                  </span>
                  <span style={{ color: '#EE7501', fontWeight: 'bold' }}>
                    {seg.count} projetos
                  </span>
                </div>
                <div className="w-full h-3 rounded-full" style={{ backgroundColor: '#E0E0E0' }}>
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: animateMetrics ? `${seg.percentage}%` : '0%',
                      background: 'linear-gradient(90deg, #EE7501 0%, #FF9A3C 100%)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div style={{ height: '1px', backgroundColor: '#E0E0E0' }} />

      {/* ═══════════════════ SEÇÃO 2: PRESENÇA TERRITORIAL ═══════════════════ */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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
                  <div className="font-bold text-lg" style={{ color: '#2A2A2A' }}>
                    {selectedEstado.nome}
                  </div>
                  <div className="text-sm mt-2" style={{ color: '#666' }}>
                    <strong>Região:</strong> {selectedEstado.regiao}
                  </div>
                  <div className="text-sm" style={{ color: '#666' }}>
                    <strong>Projetos:</strong> {selectedEstado.projetos}
                  </div>
                </motion.div>
              ) : (
                <p className="text-sm" style={{ color: '#999' }}>
                  Clique em um estado no mapa para ver detalhes
                </p>
              )}
            </motion.div>

            {/* Right: Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <MapaBrasilSVG
                selectedEstado={selectedEstado}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distribuição por Região */}
      <section className="py-16 lg:py-20 px-4 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold mb-12 text-center" style={{ color: '#2A2A2A' }}>
            Distribuição por Região
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regioes.map((regiao, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 rounded-xl text-center"
                style={{
                  backgroundColor: '#F9F9F9',
                  borderTop: `4px solid ${regiao.color}`,
                }}
              >
                <div className="text-4xl font-bold mb-2" style={{ color: regiao.color }}>
                  {regiao.count}
                </div>
                <div className="text-sm font-medium" style={{ color: '#666' }}>
                  {regiao.nome}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Estados */}
      <section className="py-16 lg:py-20 px-4 lg:px-8" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl lg:text-2xl font-bold mb-8" style={{ color: '#2A2A2A' }}>
            Estados de Atuação
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {estados.map((estado, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-4 rounded-lg text-center cursor-pointer transition-all hover:shadow-lg"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E0E0E0',
                }}
              >
                <div className="font-bold text-lg" style={{ color: '#EE7501' }}>
                  {estado.uf}
                </div>
                <div className="text-xs mt-1" style={{ color: '#666' }}>
                  {estado.nome}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
