import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import {
  Target, Eye, Shield, Lightbulb, Award, Users, Leaf, ArrowRight, Scale,
} from "lucide-react";
import { useState } from "react";

/**
 * MISSÃO, VISÃO E VALORES — Página 03
 * Design: Premium institucional — sofisticado, editorial, estratégico
 * Paleta: off-white quente + cores institucionais como accent
 * Tipografia: hierarquia forte, respiro generoso
 *
 * REFINAMENTOS APLICADOS:
 * 1. Hero: headline maior (4.5rem xl), subtítulo fortalecido (text-xl), espaço abaixo reduzido
 * 2. Missão/Visão: grid 50/50, Visão com fundo azulado sutil + padrão, mais presença
 * 3. Princípios: grid 3x2 uniforme, Integridade integrado com badge, sem fragmentação
 * 4. Cards: mais respiro (p-8 a p-10), ícones maiores (w-14), títulos xl-2xl, contraste melhor
 * 5. Ritmo vertical fluido, transições suaves
 */

const pilares = [
  { icon: Shield, title: "Integridade", desc: "Firmeza nos compromissos assumidos, assegurando confiança em cada relação institucional.", color: "#861720", accent: "rgba(134,23,32,0.08)" },
  { icon: Lightbulb, title: "Inovação", desc: "Estratégias adaptativas e soluções tecnológicas que antecipam as demandas do mercado.", color: "#EE7501", accent: "rgba(238,117,1,0.08)" },
  { icon: Leaf, title: "Responsabilidade", desc: "Compromisso com o impacto positivo sobre o patrimônio cultural e as comunidades.", color: "#2C7EB3", accent: "rgba(44,126,179,0.08)" },
  { icon: Award, title: "Excelência", desc: "Padrão operacional elevado em cada etapa, do diagnóstico à entrega final.", color: "#861720", accent: "rgba(134,23,32,0.08)" },
  { icon: Users, title: "Colaboração", desc: "Unimos forças internas e externas, valorizando a contribuição única de cada parceiro.", color: "#EE7501", accent: "rgba(238,117,1,0.08)" },
  { icon: Scale, title: "Diversidade", desc: "Reconhecemos e respeitamos as diferenças como fonte de enriquecimento e inovação.", color: "#2C7EB3", accent: "rgba(44,126,179,0.08)" },
];


export default function MissaoVisao() {
  const [hoveredPilar, setHoveredPilar] = useState<number | null>(null);

  return (
    <PortfolioLayout
      chapterNum="03"
      chapterTitle="Missão, Visão e Valores"
      prevPath="/quem-somos"
      prevLabel="Quem Somos"
      nextPath="/solucoes"
      nextLabel="Soluções"
    >

      {/* ═══════════════════ 1. HERO INSTITUCIONAL ═══════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(to right, #861720, #EE7501, #2C7EB3)' }} />

        <div className="container py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-8 lg:gap-12 mb-8">
                <img src={ASSETS.logo10anos} alt="Grupo Arqueo 10 Anos" className="h-30 lg:h-36 xl:h-42 w-auto flex-shrink-0" />
                <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.2]" style={{ color: '#1A1A1A', letterSpacing: '-0.025em' }}>
                  Os fundamentos que orientam<br />
                  nossa <span style={{ color: '#EE7501' }}>atuação</span>
                </h1>
              </div>

              <p className="text-lg lg:text-xl leading-[1.75] max-w-2xl" style={{ color: '#555', letterSpacing: '0.01em' }}>
                Cada projeto, decisão e relacionamento institucional é guiado por princípios que integram{' '}
                <strong style={{ color: '#1A1A1A', fontWeight: 600 }}>ética</strong>,{' '}
                <strong style={{ color: '#1A1A1A', fontWeight: 600 }}>inovação</strong>,{' '}
                <strong style={{ color: '#1A1A1A', fontWeight: 600 }}>responsabilidade</strong> e{' '}
                <strong style={{ color: '#1A1A1A', fontWeight: 600 }}>excelência operacional</strong>.
              </p>
            </div>

            {/* Elemento decorativo lateral */}
            <div className="hidden lg:flex lg:col-span-4 items-end justify-end">
              <div className="flex flex-col items-end gap-3 opacity-[0.12]">
                <div className="w-32 h-[2px] rounded-full" style={{ backgroundColor: '#861720' }} />
                <div className="w-20 h-[2px] rounded-full" style={{ backgroundColor: '#EE7501' }} />
                <div className="w-12 h-[2px] rounded-full" style={{ backgroundColor: '#2C7EB3' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: 'linear-gradient(to bottom, transparent, #FFFFFF)' }} />
      </section>

      {/* ═══════════════════ 2. MISSÃO & VISÃO ═══════════════════ */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="flex items-center gap-3 mb-12 lg:mb-16">
            <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: '#EE7501' }} />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: '#999' }}>Propósito & Direção</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* MISSÃO — Bloco escuro, presença forte */}
            <div className="rounded-2xl overflow-hidden relative" style={{ backgroundColor: '#861720' }}>
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              <div className="relative p-10 lg:p-12 xl:p-14 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(238,117,1,0.2)' }}>
                    <Target className="w-7 h-7" style={{ color: '#EE7501' }} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase block" style={{ color: 'rgba(255,255,255,0.45)' }}>Nossa</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ letterSpacing: '-0.01em' }}>Missão</h2>
                  </div>
                </div>

                <div className="w-20 h-[2px] rounded-full mb-8" style={{ background: 'linear-gradient(to right, #EE7501, transparent)' }} />

                <p className="text-lg lg:text-xl leading-[1.8] text-white mb-8 flex-1" style={{ opacity: 0.92, fontWeight: 300 }}>
                  Liderar o mercado de serviços na área de{' '}
                  <strong className="font-semibold text-white">patrimônio sociocultural e arqueológico</strong>{' '}
                  com estratégias inovadoras e adaptativas, alinhando nossas operações com as necessidades dinâmicas de nossos parceiros.
                </p>

                <div className="flex items-start gap-3 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#EE7501' }} />
                  <p className="text-sm lg:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>
                    Contribuindo ativamente para a{' '}
                    <span style={{ color: '#EE7501' }} className="font-medium">sustentabilidade ambiental, social e econômica</span> do Brasil.
                  </p>
                </div>
              </div>
            </div>

            {/* VISÃO — Bloco claro, aspiracional, com mais presença */}
            <div className="rounded-2xl overflow-hidden relative" style={{ backgroundColor: '#F5F8FA', border: '1px solid rgba(44,126,179,0.12)' }}>
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(to right, #2C7EB3, rgba(44,126,179,0.3))' }} />
              {/* Padrão sutil de fundo para dar mais corpo */}
              <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2C7EB3 1px, transparent 0)', backgroundSize: '28px 28px' }} />
              <div className="relative p-10 lg:p-12 xl:p-14 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(44,126,179,0.12)' }}>
                    <Eye className="w-7 h-7" style={{ color: '#2C7EB3' }} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase block" style={{ color: '#AAA' }}>Nossa</span>
                    <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: '#1A1A1A', letterSpacing: '-0.01em' }}>Visão</h2>
                  </div>
                </div>

                <div className="w-20 h-[2px] rounded-full mb-8" style={{ background: 'linear-gradient(to right, #2C7EB3, transparent)' }} />

                <p className="text-lg lg:text-xl leading-[1.8] mb-8 flex-1" style={{ color: '#333', fontWeight: 300 }}>
                  Solidificar nossa posição como o{' '}
                  <strong className="font-semibold" style={{ color: '#2C7EB3' }}>principal HUB do Brasil</strong>{' '}
                  em produtos e serviços socioculturais e arqueológicos.
                </p>

                <div className="flex items-start gap-3 pt-8" style={{ borderTop: '1px solid rgba(44,126,179,0.1)' }}>
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#2C7EB3' }} />
                  <p className="text-sm lg:text-base leading-relaxed" style={{ color: '#777', fontWeight: 300 }}>
                    Estabelecendo um padrão de{' '}
                    <span style={{ color: '#EE7501' }} className="font-medium">excelência, eficiência e inovação</span>{' '}
                    que se torne referência no mercado nacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ Divider ═══════════════════ */}
      <div className="container">
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(134,23,32,0.12), rgba(238,117,1,0.12), transparent)' }} />
      </div>

      {/* ═══════════════════ 3. PILARES ESTRATÉGICOS ═══════════════════ */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container">
          {/* Header */}
          <div className="max-w-2xl mb-14 lg:mb-18">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[2px] rounded-full" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: '#EE7501' }}>
                Pilares Estratégicos
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] mb-5" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
              Princípios que orientam{' '}
              <span style={{ color: '#EE7501' }}>nosso crescimento</span>
            </h2>
            <p className="text-base lg:text-lg leading-[1.8]" style={{ color: '#777' }}>
              Cada pilar representa um compromisso inegociável que orienta nossas decisões, fortalece nossos relacionamentos e sustenta a cultura organizacional do Grupo Arqueo.
            </p>
          </div>

          {/* Layout: Grid uniforme 3x2 — todos os pilares com mesmo peso visual */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {pilares.map((p, idx) => {
              const Icon = p.icon;
              const isH = hoveredPilar === idx;
              const isFirst = idx === 0;
              return (
                <div
                  key={idx}
                  className="rounded-2xl relative cursor-pointer overflow-hidden group"
                  style={{
                    backgroundColor: isH ? p.color : '#FFFFFF',
                    border: `1px solid ${isH ? p.color : 'rgba(0,0,0,0.06)'}`,
                    boxShadow: isH ? `0 20px 50px ${p.color}22` : '0 2px 20px rgba(0,0,0,0.04)',
                    transform: isH ? 'translateY(-4px)' : 'translateY(0)',
                    transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                    backgroundImage: isFirst && isH ? 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/não_mude_mais_202603261130_27c0c1e3.webp)' : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  onMouseEnter={() => setHoveredPilar(idx)}
                  onMouseLeave={() => setHoveredPilar(null)}
                >
                  {/* Overlay escuro para legibilidade quando imagem está visível */}
                  {isFirst && isH && (
                    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />
                  )}
                  
                  {/* Accent top bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: p.color, opacity: isH ? 0 : 0.6, transition: 'opacity 0.4s ease' }} />

                  <div className="p-8 lg:p-9 xl:p-10 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: isH ? 'rgba(255,255,255,0.18)' : p.accent,
                          transition: 'all 0.4s ease',
                        }}
                      >
                        <Icon className="w-7 h-7" style={{ color: isH ? '#FFF' : p.color, transition: 'color 0.4s ease' }} />
                      </div>
                      <div>
                        {isFirst && (
                          <span
                            className="text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full inline-block mb-1"
                            style={{
                              backgroundColor: isH ? 'rgba(255,255,255,0.15)' : `${p.color}12`,
                              color: isH ? 'rgba(255,255,255,0.8)' : p.color,
                              transition: 'all 0.4s ease',
                            }}
                          >
                            Pilar Fundamental
                          </span>
                        )}
                        <h3
                          className="text-xl lg:text-2xl font-bold"
                          style={{
                            color: isH ? '#FFF' : '#1A1A1A',
                            transition: 'color 0.4s ease',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {p.title}
                        </h3>
                      </div>
                    </div>

                    <div className="w-12 h-[1.5px] rounded-full mb-5" style={{ backgroundColor: isH ? 'rgba(255,255,255,0.2)' : `${p.color}30`, transition: 'background-color 0.4s ease' }} />

                    <p
                      className="text-[15px] lg:text-base leading-[1.75]"
                      style={{
                        color: isH ? 'rgba(255,255,255,0.9)' : '#666',
                        transition: 'color 0.4s ease',
                        fontWeight: 300,
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>



    </PortfolioLayout>
  );
}
