import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { Target, Eye, Shield, Handshake, Heart, Users, Sparkles, Scale, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";

/**
 * MISSÃO, VISÃO E VALORES — Página 03
 * Design: Hero compacto com gradiente sólido + seções Missão/Visão lado a lado + Valores em grid escuro
 * Color Palette: Vinho (#861720), Laranja (#EE7501), Azul (#2C7EB3), Grafite (#2A2A2A)
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

      {/* ═══════════════════ HERO — COMPACTO COM GRADIENTE ═══════════════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: '#2A2A2A' }}>
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06]" style={{ backgroundColor: '#EE7501' }} />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-[0.04]" style={{ backgroundColor: '#2C7EB3' }} />
          {/* Diagonal line decoration */}
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(255,255,255,0.5) 80px, rgba(255,255,255,0.5) 81px)`,
            }}
          />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT — Title & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #EE7501, #861720)' }} />
                <span className="text-[11px] font-semibold tracking-[0.4em] uppercase" style={{ color: '#EE7501' }}>Direcionamento Estratégico</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6 text-white">
                Missão, Visão e{' '}
                <span style={{ color: '#EE7501' }}>Valores</span>
              </h1>

              <p className="text-base lg:text-lg font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Os pilares que guiam nossas decisões, ações e relacionamentos. Cada dia, reafirmamos nosso compromisso com a{' '}
                <strong className="text-white font-medium">excelência</strong>, a{' '}
                <strong className="text-white font-medium">inovação</strong> e a preservação do patrimônio cultural brasileiro.
              </p>
            </motion.div>

            {/* RIGHT — Three mini-cards preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-4"
            >
              {[
                { icon: Target, label: "Missão", color: "#861720", text: "Liderar o mercado de patrimônio sociocultural e arqueológico" },
                { icon: Eye, label: "Visão", color: "#2C7EB3", text: "Ser o principal HUB do Brasil em serviços socioculturais" },
                { icon: Shield, label: "Valores", color: "#EE7501", text: "6 pilares que sustentam nossa atuação com integridade" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-5 rounded-xl p-5 transition-all duration-300 hover:translate-x-2"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}30` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-0.5">{item.label}</h3>
                      <p className="text-xs font-light" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.text}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-auto flex-shrink-0" style={{ color: 'rgba(255,255,255,0.2)' }} />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ MISSÃO & VISÃO — SIDE BY SIDE ═══════════════════ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

            {/* MISSÃO CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#861720' }}
            >
              <div className="p-8 lg:p-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(238,117,1,0.2)' }}
                  >
                    <Target className="w-7 h-7" style={{ color: '#EE7501' }} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.3em] uppercase block" style={{ color: 'rgba(255,255,255,0.4)' }}>Nossa</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">Missão</h2>
                  </div>
                </div>

                {/* Accent line */}
                <div className="w-16 h-[2px] rounded-full mb-8" style={{ background: 'linear-gradient(to right, #EE7501, transparent)' }} />

                {/* Content */}
                <p className="text-lg lg:text-xl font-light leading-relaxed text-white/90 mb-6">
                  Liderar o mercado de serviços na área de{' '}
                  <strong className="text-white font-semibold">patrimônio sociocultural e arqueológico</strong>{' '}
                  com estratégias inovadoras e adaptativas, alinhando nossas operações com as necessidades dinâmicas de nossos parceiros.
                </p>

                <div className="flex items-start gap-3 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#EE7501' }} />
                  <p className="text-sm lg:text-base font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    Contribuindo ativamente para a{' '}
                    <span style={{ color: '#EE7501' }} className="font-medium">sustentabilidade ambiental, social e econômica</span>{' '}
                    do Brasil.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* VISÃO CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(44,126,179,0.15)', boxShadow: '0 4px 40px rgba(0,0,0,0.04)' }}
            >
              <div className="p-8 lg:p-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(44,126,179,0.1)' }}
                  >
                    <Eye className="w-7 h-7" style={{ color: '#2C7EB3' }} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.3em] uppercase block" style={{ color: '#999' }}>Nossa</span>
                    <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: '#2A2A2A' }}>Visão</h2>
                  </div>
                </div>

                {/* Accent line */}
                <div className="w-16 h-[2px] rounded-full mb-8" style={{ background: 'linear-gradient(to right, #2C7EB3, transparent)' }} />

                {/* Content */}
                <p className="text-lg lg:text-xl font-light leading-relaxed mb-6" style={{ color: '#333' }}>
                  Solidificar nossa posição como o{' '}
                  <strong className="font-semibold" style={{ color: '#2C7EB3' }}>principal HUB do Brasil</strong>{' '}
                  em produtos e serviços socioculturais e arqueológicos.
                </p>

                <div className="flex items-start gap-3 pt-6" style={{ borderTop: '1px solid rgba(44,126,179,0.12)' }}>
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#2C7EB3' }} />
                  <p className="text-sm lg:text-base font-light leading-relaxed" style={{ color: '#777' }}>
                    Estabelecendo um padrão de{' '}
                    <span style={{ color: '#EE7501' }} className="font-medium">excelência, eficiência e inovação</span>{' '}
                    que se torne referência no mercado nacional.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════ VALORES SECTION ═══════════════════ */}
      <section className="py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: '#2A2A2A' }}>
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 lg:mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: 'rgba(238, 117, 1, 0.5)' }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#EE7501' }}>Nossos Valores</span>
              <div className="w-8 h-px" style={{ backgroundColor: 'rgba(238, 117, 1, 0.5)' }} />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Os pilares que <span style={{ color: '#EE7501' }}>sustentam</span> nossa atuação
            </h2>
            <p className="text-base lg:text-lg font-light max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Cada valor representa um compromisso inegociável que orienta nossas decisões e fortalece nossos relacionamentos.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {valores.map((valor, i) => {
              const Icon = valor.icon;
              const isHovered = hoveredValor === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onMouseEnter={() => setHoveredValor(i)}
                  onMouseLeave={() => setHoveredValor(null)}
                  className="group relative rounded-2xl p-7 lg:p-8 cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor: isHovered ? valor.color : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${isHovered ? valor.color : 'rgba(255,255,255,0.08)'}`,
                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                    boxShadow: isHovered ? `0 20px 50px ${valor.color}40` : '0 2px 10px rgba(0,0,0,0.1)',
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-8 right-8 h-[2px] rounded-b-full transition-all duration-300"
                    style={{
                      backgroundColor: isHovered ? 'rgba(255,255,255,0.3)' : valor.color,
                      opacity: isHovered ? 1 : 0.5,
                    }}
                  />

                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                    style={{
                      backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : `${valor.color}20`,
                    }}
                  >
                    <Icon
                      className="w-7 h-7 transition-colors duration-300"
                      style={{ color: isHovered ? '#FFFFFF' : valor.color }}
                    />
                  </div>

                  <h3 className="text-lg font-bold mb-2 transition-colors duration-300 text-white">
                    {valor.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed font-light transition-colors duration-300"
                    style={{ color: isHovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)' }}
                  >
                    {valor.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </PortfolioLayout>
  );
}
