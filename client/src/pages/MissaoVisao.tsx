import PortfolioLayout from "@/components/PortfolioLayout";
import { Target, Eye, Shield, Handshake, Heart, Users, Sparkles, Scale, ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * MISSÃO, VISÃO E VALORES — Página 03
 * Design: Fundo claro, sem animações de fade, cores sólidas fortes
 * Missão/Visão em cards lado a lado, Valores em grid com hover
 */

const valores = [
  { icon: Shield, title: "Integridade", desc: "Mantemos nossa palavra com firmeza, assegurando confiança em cada compromisso que assumimos.", color: "#861720" },
  { icon: Handshake, title: "Honestidade", desc: "Nossas ações e comunicações são pautadas pela transparência e sinceridade.", color: "#2C7EB3" },
  { icon: Heart, title: "Paixão", desc: "Apreciamos profundamente nossa atuação, e essa paixão inspira excelência em nossos serviços.", color: "#EE7501" },
  { icon: Users, title: "Equipe", desc: "Unimos forças, valorizando a contribuição única de cada membro para alcançar objetivos comuns.", color: "#861720" },
  { icon: Sparkles, title: "Diversidade", desc: "Reconhecemos e respeitamos as diferenças individuais como fonte de enriquecimento e inovação.", color: "#2C7EB3" },
  { icon: Scale, title: "Responsabilidade", desc: "Compromisso com o impacto positivo de nossas ações sobre o patrimônio cultural e as comunidades.", color: "#EE7501" },
];

export default function MissaoVisao() {
  const [hoveredValor, setHoveredValor] = useState<number | null>(null);

  return (
    <PortfolioLayout
      chapterNum="03"
      chapterTitle="Missão, Visão e Valores"
      prevPath="/quem-somos"
      prevLabel="Quem Somos"
      nextPath="/ecossistema"
      nextLabel="Ecossistema do Grupo"
    >

      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{ backgroundColor: '#F9F8F6' }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #EE7501, #861720)' }} />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: '#861720' }}
              >
                Direcionamento Estratégico
              </span>
            </div>

            <h1
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
              style={{ color: '#1A1A1A' }}
            >
              Missão, Visão e{' '}
              <span style={{ color: '#EE7501' }}>Valores</span>
            </h1>

            <p
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: '#555', maxWidth: '600px' }}
            >
              Os pilares que guiam nossas decisões, ações e relacionamentos. Cada dia, reafirmamos nosso compromisso com a{' '}
              <strong style={{ color: '#1A1A1A' }}>excelência</strong>, a{' '}
              <strong style={{ color: '#1A1A1A' }}>inovação</strong> e a preservação do patrimônio cultural brasileiro.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ MISSÃO & VISÃO — SIDE BY SIDE ═══════════════════ */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

            {/* MISSÃO CARD */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#861720' }}
            >
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(238,117,1,0.25)' }}
                  >
                    <Target className="w-7 h-7" style={{ color: '#EE7501' }} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase block" style={{ color: 'rgba(255,255,255,0.5)' }}>Nossa</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">Missão</h2>
                  </div>
                </div>

                <div className="w-16 h-0.5 rounded-full mb-8" style={{ background: 'linear-gradient(to right, #EE7501, transparent)' }} />

                <p className="text-lg lg:text-xl font-light leading-relaxed text-white mb-6" style={{ opacity: 0.9 }}>
                  Liderar o mercado de serviços na área de{' '}
                  <strong className="text-white font-semibold">patrimônio sociocultural e arqueológico</strong>{' '}
                  com estratégias inovadoras e adaptativas, alinhando nossas operações com as necessidades dinâmicas de nossos parceiros.
                </p>

                <div className="flex items-start gap-3 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#EE7501' }} />
                  <p className="text-sm lg:text-base font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Contribuindo ativamente para a{' '}
                    <span style={{ color: '#EE7501' }} className="font-medium">sustentabilidade ambiental, social e econômica</span>{' '}
                    do Brasil.
                  </p>
                </div>
              </div>
            </div>

            {/* VISÃO CARD */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid rgba(44,126,179,0.2)',
                boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
              }}
            >
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(44,126,179,0.12)' }}
                  >
                    <Eye className="w-7 h-7" style={{ color: '#2C7EB3' }} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase block" style={{ color: '#999' }}>Nossa</span>
                    <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: '#1A1A1A' }}>Visão</h2>
                  </div>
                </div>

                <div className="w-16 h-0.5 rounded-full mb-8" style={{ background: 'linear-gradient(to right, #2C7EB3, transparent)' }} />

                <p className="text-lg lg:text-xl font-light leading-relaxed mb-6" style={{ color: '#333' }}>
                  Solidificar nossa posição como o{' '}
                  <strong className="font-semibold" style={{ color: '#2C7EB3' }}>principal HUB do Brasil</strong>{' '}
                  em produtos e serviços socioculturais e arqueológicos.
                </p>

                <div className="flex items-start gap-3 pt-6" style={{ borderTop: '2px solid rgba(44,126,179,0.12)' }}>
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#2C7EB3' }} />
                  <p className="text-sm lg:text-base font-light leading-relaxed" style={{ color: '#666' }}>
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

      {/* ═══════════════════ VALORES SECTION ═══════════════════ */}
      <section className="py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: '#F4F3F1' }}>
        <div className="container">
          {/* Header */}
          <div className="text-center mb-14 lg:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#EE7501' }}>Nossos Valores</span>
              <div className="w-8 h-px" style={{ backgroundColor: '#EE7501' }} />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: '#1A1A1A' }}>
              Os pilares que <span style={{ color: '#EE7501' }}>sustentam</span> nossa atuação
            </h2>
            <p className="text-base lg:text-lg font-light max-w-2xl mx-auto" style={{ color: '#777' }}>
              Cada valor representa um compromisso inegociável que orienta nossas decisões e fortalece nossos relacionamentos.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {valores.map((valor, i) => {
              const Icon = valor.icon;
              const isHovered = hoveredValor === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredValor(i)}
                  onMouseLeave={() => setHoveredValor(null)}
                  className="relative rounded-2xl p-7 lg:p-8 cursor-pointer"
                  style={{
                    backgroundColor: isHovered ? valor.color : '#FFFFFF',
                    border: `2px solid ${isHovered ? valor.color : 'rgba(0,0,0,0.06)'}`,
                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                    boxShadow: isHovered ? `0 20px 50px ${valor.color}30` : '0 2px 16px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full"
                    style={{
                      backgroundColor: isHovered ? 'rgba(255,255,255,0.4)' : valor.color,
                      opacity: isHovered ? 1 : 0.7,
                      transition: 'all 0.3s ease',
                    }}
                  />

                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : `${valor.color}15`,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{
                        color: isHovered ? '#FFFFFF' : valor.color,
                        transition: 'color 0.3s ease',
                      }}
                    />
                  </div>

                  <h3
                    className="text-lg font-bold mb-2"
                    style={{
                      color: isHovered ? '#FFFFFF' : '#1A1A1A',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {valor.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed font-light"
                    style={{
                      color: isHovered ? 'rgba(255,255,255,0.9)' : '#777',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {valor.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </PortfolioLayout>
  );
}
