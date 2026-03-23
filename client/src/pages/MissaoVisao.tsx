import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { Target, Eye, Shield, Handshake, Heart, Users, Sparkles, Scale } from "lucide-react";
import { useState } from "react";

/**
 * MISSÃO, VISÃO E VALORES — Página 03 (UNIFIED HERO)
 * Design: Um único Hero dinâmico com 3 tabs (Missão, Visão, Valores)
 * Color Palette: Vinho (#861720), Laranja (#EE7501), Azul (#2C7EB3), Grafite (#2A2A2A)
 * Dados reais extraídos de grupoarqueo.com.br
 */

const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/hero-mvv-arqueo-GK5J6R6QaWvJCr4P9a8Syu.webp";

export default function MissaoVisao() {
  const [activeTab, setActiveTab] = useState<'missao' | 'visao' | 'valores'>('missao');
  const [activeValor, setActiveValor] = useState<number | null>(null);

  const valores = [
    { icon: Shield, title: "Integridade", desc: "Mantemos nossa palavra com firmeza, assegurando confiança em cada compromisso que assumimos.", color: "#861720" },
    { icon: Handshake, title: "Honestidade", desc: "Nossas ações e comunicações são pautadas pela transparência e sinceridade.", color: "#2C7EB3" },
    { icon: Heart, title: "Paixão", desc: "Apreciamos profundamente nossa atuação, e essa paixão inspira excelência em nossos serviços.", color: "#EE7501" },
    { icon: Users, title: "Equipe", desc: "Unimos forças, valorizando a contribuição única de cada membro para alcançar objetivos comuns.", color: "#861720" },
    { icon: Sparkles, title: "Diversidade", desc: "Reconhecemos e respeitamos as diferenças individuais como fonte de enriquecimento e inovação.", color: "#2C7EB3" },
    { icon: Scale, title: "Responsabilidade", desc: "Compromisso com o impacto positivo de nossas ações sobre o patrimônio cultural e as comunidades.", color: "#EE7501" },
  ];

  const tabs = [
    { key: 'missao' as const, label: 'Missão', icon: Target, color: '#861720' },
    { key: 'visao' as const, label: 'Visão', icon: Eye, color: '#2C7EB3' },
    { key: 'valores' as const, label: 'Valores', icon: Shield, color: '#EE7501' },
  ];

  return (
    <PortfolioLayout
      chapterNum="03"
      chapterTitle="Missão, Visão e Valores"
      prevPath="/quem-somos"
      prevLabel="Quem Somos"
      nextPath="/ecossistema"
      nextLabel="Ecossistema do Grupo"
    >
      {/* ═══════════════════ HERO UNIFICADO — FULL SCREEN ═══════════════════ */}
      <section className="relative min-h-[90vh] lg:min-h-[100vh] flex flex-col overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img src={heroImage} alt="Patrimônio arqueológico brasileiro" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(42,42,42,0.4) 0%, rgba(42,42,42,0.6) 30%, rgba(42,42,42,0.85) 60%, rgba(42,42,42,0.97) 100%)'
            }}
          />
        </div>

        {/* Top content — Title area */}
        <div className="container relative z-10 pt-16 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #EE7501, #861720)' }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#EE7501' }}>Direcionamento Estratégico</span>
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-white mb-4">
              Missão, Visão e{' '}
              <span style={{ color: '#EE7501' }}>Valores</span>
            </h1>
            <p className="text-base lg:text-lg font-light text-white/60 max-w-xl">
              Os pilares que guiam nossas decisões e fortalecem nosso compromisso com o patrimônio cultural brasileiro.
            </p>
          </motion.div>
        </div>

        {/* Bottom content — Interactive tabs + content */}
        <div className="container relative z-10 mt-auto pb-12 lg:pb-20">
          {/* Tab navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-2 lg:gap-3 mb-8"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="flex items-center gap-2 lg:gap-3 px-5 lg:px-8 py-3 lg:py-4 rounded-full transition-all duration-500 cursor-pointer"
                  style={{
                    backgroundColor: isActive ? tab.color : 'rgba(255,255,255,0.08)',
                    border: `1px solid ${isActive ? tab.color : 'rgba(255,255,255,0.15)'}`,
                    boxShadow: isActive ? `0 8px 30px ${tab.color}40` : 'none',
                  }}
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.5)' }} />
                  <span
                    className="text-sm lg:text-base font-semibold transition-colors duration-300"
                    style={{ color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.5)' }}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Tab content panels */}
          <div className="relative" style={{ minHeight: '280px' }}>
            {/* MISSÃO */}
            {activeTab === 'missao' && (
              <motion.div
                key="missao"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl lg:rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(134,23,32,0.9) 0%, rgba(134,23,32,0.7) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-4 p-8 lg:p-12 flex flex-col justify-center"
                    style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: 'rgba(238, 117, 1, 0.2)' }}
                    >
                      <Target className="w-7 h-7" style={{ color: '#EE7501' }} />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 block mb-2">Nossa</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">Missão</h2>
                    <div className="w-14 h-1 mt-5 rounded-full" style={{ background: 'linear-gradient(to right, #EE7501, transparent)' }} />
                  </div>
                  <div className="lg:col-span-8 p-8 lg:p-12 flex items-center">
                    <div>
                      <p className="text-lg lg:text-xl font-light leading-relaxed text-white/90 mb-5">
                        Liderar o mercado de serviços na área de <strong className="text-white font-semibold">patrimônio sociocultural e arqueológico</strong> com estratégias inovadoras e adaptativas, alinhando nossas operações com as necessidades dinâmicas de nossos parceiros.
                      </p>
                      <p className="text-base font-light leading-relaxed text-white/60">
                        Contribuindo ativamente para a <span style={{ color: '#EE7501' }} className="font-medium">sustentabilidade ambiental, social e econômica</span> do Brasil.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VISÃO */}
            {activeTab === 'visao' && (
              <motion.div
                key="visao"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl lg:rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(44,126,179,0.9) 0%, rgba(44,126,179,0.7) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-8 p-8 lg:p-12 flex items-center order-2 lg:order-1">
                    <div>
                      <p className="text-lg lg:text-xl font-light leading-relaxed text-white/90 mb-5">
                        Solidificar nossa posição como o <strong className="text-white font-semibold">principal HUB do Brasil</strong> em produtos e serviços socioculturais e arqueológicos.
                      </p>
                      <p className="text-base font-light leading-relaxed text-white/60">
                        Estabelecendo um padrão de <span style={{ color: '#EE7501' }} className="font-medium">excelência, eficiência e inovação</span> que se torne referência no mercado nacional.
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-4 p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2 lg:text-right"
                    style={{ borderLeft: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 lg:ml-auto"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                    >
                      <Eye className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 block mb-2">Nossa</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">Visão</h2>
                    <div className="w-14 h-1 mt-5 rounded-full lg:ml-auto" style={{ background: 'linear-gradient(to right, #EE7501, transparent)' }} />
                  </div>
                </div>
              </motion.div>
            )}

            {/* VALORES */}
            {activeTab === 'valores' && (
              <motion.div
                key="valores"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl lg:rounded-3xl overflow-hidden p-6 lg:p-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(42,42,42,0.95) 0%, rgba(42,42,42,0.85) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                {/* Header */}
                <div className="text-center mb-6 lg:mb-8">
                  <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#EE7501' }}>Nossos Valores</span>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mt-2">Os pilares que <span style={{ color: '#EE7501' }}>sustentam</span> nossa atuação</h3>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                  {valores.map((valor, i) => {
                    const Icon = valor.icon;
                    const isActive = activeValor === i;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        onMouseEnter={() => setActiveValor(i)}
                        onMouseLeave={() => setActiveValor(null)}
                        className="relative cursor-pointer rounded-xl p-5 lg:p-6 text-center transition-all duration-300"
                        style={{
                          backgroundColor: isActive ? valor.color : 'rgba(255,255,255,0.06)',
                          border: `1px solid ${isActive ? valor.color : 'rgba(255,255,255,0.1)'}`,
                          transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                          boxShadow: isActive ? `0 12px 30px ${valor.color}50` : 'none',
                        }}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300"
                          style={{
                            backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : `${valor.color}20`,
                          }}
                        >
                          <Icon className="w-6 h-6 transition-colors duration-300" style={{ color: isActive ? '#FFFFFF' : valor.color }} />
                        </div>
                        <h4 className="text-sm lg:text-base font-bold mb-1.5 transition-colors duration-300"
                          style={{ color: isActive ? '#FFFFFF' : '#FFFFFF' }}
                        >
                          {valor.title}
                        </h4>
                        <p className="text-[10px] lg:text-xs leading-snug font-light transition-colors duration-300"
                          style={{ color: isActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)' }}
                        >
                          {valor.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

    </PortfolioLayout>
  );
}
