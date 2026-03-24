import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import {
  Target, Eye, Shield, Lightbulb, Award, Users, Leaf, ArrowRight,
  FileCheck, Scale, MessageSquare, Lock,
} from "lucide-react";
import { useState } from "react";

/**
 * MISSÃO, VISÃO E VALORES — Página 03
 * Design: Premium institucional — sofisticado, editorial, estratégico
 * Paleta: off-white quente + cores institucionais como accent
 * Tipografia: hierarquia forte, respiro generoso
 */

const pilares = [
  { icon: Shield, title: "Integridade", desc: "Firmeza nos compromissos assumidos, assegurando confiança em cada relação institucional.", color: "#861720", accent: "rgba(134,23,32,0.08)" },
  { icon: Lightbulb, title: "Inovação", desc: "Estratégias adaptativas e soluções tecnológicas que antecipam as demandas do mercado.", color: "#EE7501", accent: "rgba(238,117,1,0.08)" },
  { icon: Leaf, title: "Responsabilidade", desc: "Compromisso com o impacto positivo sobre o patrimônio cultural e as comunidades.", color: "#2C7EB3", accent: "rgba(44,126,179,0.08)" },
  { icon: Award, title: "Excelência", desc: "Padrão operacional elevado em cada etapa, do diagnóstico à entrega final.", color: "#861720", accent: "rgba(134,23,32,0.08)" },
  { icon: Users, title: "Colaboração", desc: "Unimos forças internas e externas, valorizando a contribuição única de cada parceiro.", color: "#EE7501", accent: "rgba(238,117,1,0.08)" },
  { icon: Scale, title: "Diversidade", desc: "Reconhecemos e respeitamos as diferenças como fonte de enriquecimento e inovação.", color: "#2C7EB3", accent: "rgba(44,126,179,0.08)" },
];

const complianceAxes = [
  { icon: FileCheck, title: "Código de Conduta", desc: "Diretrizes éticas que orientam o comportamento de todos os colaboradores e parceiros.", color: "#EE7501" },
  { icon: Scale, title: "Conflito de Interesses", desc: "Mecanismos de prevenção e gestão de situações que possam comprometer a imparcialidade.", color: "#D4A843" },
  { icon: MessageSquare, title: "Transparência e Comunicação", desc: "Canais abertos e processos claros para garantir a integridade das informações.", color: "#2C7EB3" },
  { icon: Lock, title: "Política de Integridade", desc: "Estrutura normativa que assegura conformidade legal e responsabilidade institucional.", color: "#861720" },
];

export default function MissaoVisao() {
  const [hoveredPilar, setHoveredPilar] = useState<number | null>(null);
  const [hoveredAxis, setHoveredAxis] = useState<number | null>(null);

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

        <div className="container py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <img src={ASSETS.logo10anos} alt="Grupo Arqueo 10 Anos" className="h-14 lg:h-16 w-auto mb-10" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[2px] rounded-full" style={{ backgroundColor: '#861720' }} />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: '#861720' }}>
                  Direcionamento Estratégico
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.1] mb-8" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
                Os fundamentos que orientam{' '}
                <span className="block" style={{ color: '#861720' }}>nossa atuação</span>
              </h1>

              <p className="text-base lg:text-lg leading-[1.8] max-w-xl" style={{ color: '#666' }}>
                Cada projeto, decisão e relacionamento institucional é guiado por princípios que integram{' '}
                <strong style={{ color: '#1A1A1A' }}>ética</strong>,{' '}
                <strong style={{ color: '#1A1A1A' }}>inovação</strong>,{' '}
                <strong style={{ color: '#1A1A1A' }}>responsabilidade</strong> e{' '}
                <strong style={{ color: '#1A1A1A' }}>excelência operacional</strong>.
              </p>
            </div>


          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to bottom, transparent, #FFFFFF)' }} />
      </section>

      {/* ═══════════════════ 2. MISSÃO & VISÃO ═══════════════════ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="flex items-center gap-3 mb-14 lg:mb-20">
            <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: '#EE7501' }} />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: '#999' }}>Propósito & Direção</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* MISSÃO — Bloco escuro */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden relative" style={{ backgroundColor: '#861720' }}>
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              <div className="relative p-10 lg:p-14">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(238,117,1,0.2)' }}>
                    <Target className="w-7 h-7" style={{ color: '#EE7501' }} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase block" style={{ color: 'rgba(255,255,255,0.45)' }}>Nossa</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ letterSpacing: '-0.01em' }}>Missão</h2>
                  </div>
                </div>

                <div className="w-20 h-[2px] rounded-full mb-10" style={{ background: 'linear-gradient(to right, #EE7501, transparent)' }} />

                <p className="text-lg lg:text-xl leading-[1.8] text-white mb-8" style={{ opacity: 0.92, fontWeight: 300 }}>
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

            {/* VISÃO — Bloco claro, aspiracional */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden relative" style={{ backgroundColor: '#FAFAF8', border: '1px solid rgba(44,126,179,0.15)' }}>
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(to right, #2C7EB3, rgba(44,126,179,0.2))' }} />
              <div className="relative p-10 lg:p-14">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(44,126,179,0.1)' }}>
                    <Eye className="w-7 h-7" style={{ color: '#2C7EB3' }} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase block" style={{ color: '#BBB' }}>Nossa</span>
                    <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: '#1A1A1A', letterSpacing: '-0.01em' }}>Visão</h2>
                  </div>
                </div>

                <div className="w-20 h-[2px] rounded-full mb-10" style={{ background: 'linear-gradient(to right, #2C7EB3, transparent)' }} />

                <p className="text-lg lg:text-xl leading-[1.8] mb-8" style={{ color: '#333', fontWeight: 300 }}>
                  Solidificar nossa posição como o{' '}
                  <strong className="font-semibold" style={{ color: '#2C7EB3' }}>principal HUB do Brasil</strong>{' '}
                  em produtos e serviços socioculturais e arqueológicos.
                </p>

                <div className="flex items-start gap-3 pt-8" style={{ borderTop: '1px solid rgba(44,126,179,0.1)' }}>
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#2C7EB3' }} />
                  <p className="text-sm lg:text-base leading-relaxed" style={{ color: '#888', fontWeight: 300 }}>
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
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container">
          {/* Header */}
          <div className="max-w-2xl mb-16 lg:mb-20">
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

          {/* Layout: Integridade destaque + 5 pilares alinhados */}
          <div className="space-y-6">

            {/* ── Integridade — Card destaque horizontal ── */}
            {(() => {
              const p = pilares[0];
              const Icon = p.icon;
              const isH = hoveredPilar === 0;
              return (
                <div
                  className="rounded-2xl relative cursor-pointer overflow-hidden"
                  style={{
                    backgroundColor: isH ? p.color : '#FFFFFF',
                    border: `1px solid ${isH ? p.color : 'rgba(0,0,0,0.06)'}`,
                    boxShadow: isH ? `0 20px 50px ${p.color}22` : '0 2px 20px rgba(0,0,0,0.04)',
                    transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                  }}
                  onMouseEnter={() => setHoveredPilar(0)}
                  onMouseLeave={() => setHoveredPilar(null)}
                >
                  {/* Accent top bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: p.color, opacity: isH ? 0 : 1, transition: 'opacity 0.4s ease' }} />

                  <div className="p-8 lg:p-10 flex flex-col md:flex-row md:items-center gap-6 lg:gap-10">
                    <div className="flex items-center gap-5 md:gap-6 flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          backgroundColor: isH ? 'rgba(255,255,255,0.18)' : p.accent,
                          transition: 'all 0.4s ease',
                        }}
                      >
                        <Icon className="w-8 h-8" style={{ color: isH ? '#FFF' : p.color, transition: 'color 0.4s ease' }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[9px] font-bold tracking-[0.18em] uppercase px-2 py-0.5 rounded-full" style={{ backgroundColor: isH ? 'rgba(255,255,255,0.15)' : `${p.color}12`, color: isH ? 'rgba(255,255,255,0.8)' : p.color, transition: 'all 0.4s ease' }}>
                            Pilar Fundamental
                          </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: isH ? '#FFF' : '#1A1A1A', transition: 'color 0.4s ease', letterSpacing: '-0.01em' }}>
                          {p.title}
                        </h3>
                      </div>
                    </div>
                    <div className="hidden md:block w-px self-stretch" style={{ backgroundColor: isH ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)', transition: 'background-color 0.4s ease' }} />
                    <p className="text-base lg:text-lg leading-[1.8] flex-1" style={{ color: isH ? 'rgba(255,255,255,0.9)' : '#666', transition: 'color 0.4s ease', fontWeight: 300 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })()}

            {/* ── 5 Pilares complementares — Grid uniforme ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {pilares.slice(1).map((p, idx) => {
                const i = idx + 1;
                const Icon = p.icon;
                const isH = hoveredPilar === i;
                return (
                  <div
                    key={i}
                    className="rounded-2xl relative cursor-pointer overflow-hidden"
                    style={{
                      backgroundColor: isH ? p.color : '#FFFFFF',
                      border: `1px solid ${isH ? p.color : 'rgba(0,0,0,0.06)'}`,
                      boxShadow: isH ? `0 16px 40px ${p.color}20` : '0 2px 16px rgba(0,0,0,0.03)',
                      transform: isH ? 'translateY(-4px)' : 'translateY(0)',
                      transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                    }}
                    onMouseEnter={() => setHoveredPilar(i)}
                    onMouseLeave={() => setHoveredPilar(null)}
                  >
                    {/* Accent top line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: p.color, opacity: isH ? 0 : 0.5, transition: 'opacity 0.35s ease' }} />

                    <div className="p-6 lg:p-7">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                        style={{
                          backgroundColor: isH ? 'rgba(255,255,255,0.18)' : p.accent,
                          transition: 'all 0.35s ease',
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: isH ? '#FFF' : p.color, transition: 'color 0.35s ease' }} />
                      </div>
                      <h3 className="text-base font-bold mb-2" style={{ color: isH ? '#FFF' : '#1A1A1A', transition: 'color 0.35s ease' }}>
                        {p.title}
                      </h3>
                      <p className="text-[13px] leading-[1.7]" style={{ color: isH ? 'rgba(255,255,255,0.85)' : '#888', transition: 'color 0.35s ease', fontWeight: 300 }}>
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════ Divider ═══════════════════ */}
      <div className="container">
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(134,23,32,0.12), rgba(44,126,179,0.12), transparent)' }} />
      </div>

      {/* ═══════════════════ 4. COMPLIANCE & INTEGRIDADE ═══════════════════ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-20">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[2px] rounded-full" style={{ backgroundColor: '#861720' }} />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: '#861720' }}>
                  Governança & Compliance
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] mb-6" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
                Estrutura de{' '}
                <span style={{ color: '#861720' }}>Integridade</span>{' '}
                e Governança
              </h2>
              <p className="text-base lg:text-lg leading-[1.8]" style={{ color: '#666' }}>
                O Grupo Arqueo estrutura sua atuação com base em{' '}
                <strong style={{ color: '#1A1A1A' }}>ética, transparência, conformidade</strong> e{' '}
                <strong style={{ color: '#1A1A1A' }}>responsabilidade institucional</strong>, garantindo maturidade organizacional e credibilidade perante parceiros e stakeholders.
              </p>
            </div>
          </div>

          {/* 4 Eixos — Framework visual com núcleo central */}
          <div className="relative">
            {/* Central nucleus — visible on desktop */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div
                className="w-32 h-32 rounded-full flex flex-col items-center justify-center"
                style={{
                  backgroundColor: '#F9F8F6',
                  border: '2px solid rgba(134,23,32,0.12)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
                }}
              >
                <img src={ASSETS.logoGrupoArqueo} alt="Grupo Arqueo" className="w-16 h-auto opacity-80" />
              </div>
            </div>

            {/* 4 Eixos grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              {complianceAxes.map((axis, i) => {
                const Icon = axis.icon;
                const isH = hoveredAxis === i;
                return (
                  <div
                    key={i}
                    className="rounded-2xl relative cursor-pointer overflow-hidden group"
                    style={{
                      backgroundColor: isH ? '#2A2A2A' : '#FAFAF8',
                      border: `1px solid ${isH ? axis.color : 'rgba(0,0,0,0.06)'}`,
                      boxShadow: isH ? `0 16px 40px rgba(0,0,0,0.1)` : '0 2px 16px rgba(0,0,0,0.02)',
                      transform: isH ? 'translateY(-4px)' : 'translateY(0)',
                      transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                    }}
                    onMouseEnter={() => setHoveredAxis(i)}
                    onMouseLeave={() => setHoveredAxis(null)}
                  >
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: axis.color, opacity: isH ? 1 : 0.5, transition: 'opacity 0.4s ease' }} />

                    <div className="p-8 lg:p-10">
                      <div className="flex items-start gap-5 mb-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: isH ? `${axis.color}30` : `${axis.color}10`,
                            transition: 'all 0.4s ease',
                          }}
                        >
                          <Icon className="w-7 h-7" style={{ color: isH ? axis.color : axis.color, transition: 'color 0.4s ease' }} />
                        </div>
                        <div>
                          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase block mb-1" style={{ color: isH ? axis.color : '#BBB', transition: 'color 0.4s ease' }}>
                            Eixo {String(i + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-xl font-bold" style={{ color: isH ? '#FFF' : '#1A1A1A', transition: 'color 0.4s ease' }}>
                            {axis.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm leading-[1.8]" style={{ color: isH ? 'rgba(255,255,255,0.7)' : '#888', transition: 'color 0.4s ease', fontWeight: 300 }}>
                        {axis.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </PortfolioLayout>
  );
}
