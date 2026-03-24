'use client';

import { useState, useEffect } from 'react';
import statsData from '../data/stats.json';

export default function Numeros() {
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
    .segment-bar {
      animation: fadeInUp 0.6s ease-out forwards;
    }
  `;

  // Preparar dados dos segmentos a partir das estatísticas
  const tiposData = Object.entries(statsData.tipos).map(([name, count]) => ({
    name,
    count: count as number,
  }));
  
  // Calcular percentagem relativa ao máximo
  const maxCount = Math.max(...tiposData.map(t => t.count));
  const segmentos = tiposData.map(seg => ({
    name: seg.name,
    count: seg.count.toString(),
    percentage: Math.round((seg.count / maxCount) * 100),
  }));

  return (
    <div className="min-h-screen bg-white">
      <style>{animationStyles}</style>

      {/* Hero Institucional */}
      <section className="py-20 lg:py-32 px-4 lg:px-8" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[11px] font-semibold tracking-[0.35em] uppercase" style={{ color: '#EE7501' }}>
            Nossa Trajetória
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-6 mb-6 leading-tight" style={{ color: '#1A1A1A' }}>
            Escala, presença e consistência operacional
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed" style={{ color: '#555555' }}>
            Mais de dez anos de atuação, presença em múltiplos territórios e experiência consolidada em diferentes contextos do licenciamento ambiental e do patrimônio cultural.
          </p>
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

      {/* Métricas com Hierarquia */}
      <section className="py-20 lg:py-32 px-4 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          {/* Métrica Principal */}
          <div 
            className={`mb-20 lg:mb-32 text-center metric-fade-in metric-primary ${animateMetrics ? '' : 'opacity-0'}`}
            style={{ animationPlayState: animateMetrics ? 'running' : 'paused' }}
          >
            <div 
              className="text-7xl lg:text-8xl font-bold mb-4"
              style={{ color: '#EE7501' }}
            >
              {statsData.total_projetos}+
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
              Projetos e processos gerenciados
            </h3>
            <p className="text-base lg:text-lg max-w-3xl mx-auto" style={{ color: '#666666' }}>
              Atuação em múltiplos contextos regulatórios e territoriais, consolidando experiência em diferentes tipologias de empreendimento
            </p>
          </div>

          {/* Métricas Secundárias */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 lg:mb-32">
            {/* Secundária 1 */}
            <div 
              className={`text-center metric-fade-in metric-secondary-1 ${animateMetrics ? '' : 'opacity-0'}`}
              style={{ animationPlayState: animateMetrics ? 'running' : 'paused' }}
            >
            <div 
              className="text-5xl lg:text-6xl font-bold mb-3"
              style={{ color: '#861720' }}
            >
              24
            </div>
            <h3 className="text-xl lg:text-2xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
              Estados com atuação comprovada
            </h3>
              <p className="text-sm lg:text-base" style={{ color: '#666666' }}>
                Presença nacional consolidada em múltiplos territórios
              </p>
            </div>

            {/* Secundária 2 */}
            <div 
              className={`text-center metric-fade-in metric-secondary-2 ${animateMetrics ? '' : 'opacity-0'}`}
              style={{ animationPlayState: animateMetrics ? 'running' : 'paused' }}
            >
              <div 
                className="text-5xl lg:text-6xl font-bold mb-3"
                style={{ color: '#2C7EB3' }}
              >
                10
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
                Anos de experiência no mercado
              </h3>
              <p className="text-sm lg:text-base" style={{ color: '#666666' }}>
                Trajetória de crescimento e consolidação institucional
              </p>
            </div>
          </div>

          {/* Métricas Complementares */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Complementar 1 */}
            <div 
              className={`text-center metric-fade-in metric-complementary-1 ${animateMetrics ? '' : 'opacity-0'}`}
              style={{ animationPlayState: animateMetrics ? 'running' : 'paused' }}
            >
              <div 
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: '#EE7501' }}
              >
                4
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-1" style={{ color: '#1A1A1A' }}>
                Empresas no ecossistema
              </h3>
              <p className="text-xs lg:text-sm" style={{ color: '#666666' }}>
                Estrutura integrada de especialidades
              </p>
            </div>

            {/* Complementar 2 */}
            <div 
              className={`text-center metric-fade-in metric-complementary-2 ${animateMetrics ? '' : 'opacity-0'}`}
              style={{ animationPlayState: animateMetrics ? 'running' : 'paused' }}
            >
              <div 
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: '#861720' }}
              >
                3
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-1" style={{ color: '#1A1A1A' }}>
                Escritórios estratégicos
              </h3>
              <p className="text-xs lg:text-sm" style={{ color: '#666666' }}>
                Capilaridade operacional nacional
              </p>
            </div>

            {/* Complementar 3 */}
            <div 
              className={`text-center metric-fade-in metric-complementary-3 ${animateMetrics ? '' : 'opacity-0'}`}
              style={{ animationPlayState: animateMetrics ? 'running' : 'paused' }}
            >
              <div 
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: '#2C7EB3' }}
              >
                120+
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-1" style={{ color: '#1A1A1A' }}>
                Profissionais envolvidos
              </h3>
              <p className="text-xs lg:text-sm" style={{ color: '#666666' }}>
                Capacidade técnica consolidada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Distribuição por Segmento - Seção Escura */}
      <section className="py-20 lg:py-32 px-4 lg:px-8" style={{ backgroundColor: '#2A2A2A' }}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Diversidade setorial
            </h2>
            <p className="text-base lg:text-lg" style={{ color: '#CCCCCC' }}>
              A atuação do Grupo Arqueo abrange setores estratégicos da infraestrutura e do desenvolvimento nacional, com experiência acumulada em múltiplas tipologias de empreendimento.
            </p>
          </div>

          {/* Segmentos */}
          <div className="space-y-6 lg:space-y-8">
            {segmentos.map((seg, idx) => (
              <div 
                key={idx}
                className={`segment-bar ${animateMetrics ? '' : 'opacity-0'}`}
                style={{ animationDelay: `${0.7 + idx * 0.1}s`, animationPlayState: animateMetrics ? 'running' : 'paused' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base lg:text-lg font-semibold" style={{ color: '#FFFFFF' }}>
                    {seg.name}
                  </h4>
                  <span className="text-lg lg:text-xl font-bold" style={{ color: '#EE7501' }}>
                    {seg.count}
                  </span>
                </div>
                <div 
                  className="h-2 rounded-full"
                  style={{ 
                    backgroundColor: '#444444',
                    overflow: 'hidden'
                  }}
                >
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: animateMetrics ? `${seg.percentage}%` : '0%',
                      backgroundColor: '#EE7501'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fechamento Conceitual */}
      <section className="py-20 lg:py-32 px-4 lg:px-8" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl lg:text-2xl leading-relaxed font-medium" style={{ color: '#1A1A1A' }}>
            Cada indicador sintetiza uma trajetória construída com técnica, gestão e compromisso institucional. Os números expressam a consistência de uma atuação orientada por escala, excelência e visão de longo prazo.
          </p>
        </div>
      </section>
    </div>
  );
}
