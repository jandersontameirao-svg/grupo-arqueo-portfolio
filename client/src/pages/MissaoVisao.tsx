import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { Target, Eye, Shield, Handshake, Heart, Users, Sparkles, Scale, ArrowRight } from "lucide-react";
import { ASSETS } from "@/lib/assets";
import { useState } from "react";

/**
 * MISSÃO, VISÃO E VALORES — Página 03 (REDESIGN PREMIUM)
 * Design: Layout assimétrico moderno com seções visuais impactantes
 * Color Palette: Vinho (#861720), Laranja (#EE7501), Azul (#2C7EB3), Grafite (#2A2A2A)
 * Dados reais extraídos de grupoarqueo.com.br
 */

export default function MissaoVisao() {
  const [activeValor, setActiveValor] = useState<number | null>(null);

  const valores = [
    {
      icon: Shield,
      title: "Integridade",
      desc: "Mantemos nossa palavra com firmeza, assegurando confiança em cada compromisso que assumimos.",
      color: "#861720",
    },
    {
      icon: Handshake,
      title: "Honestidade",
      desc: "Nossas ações e comunicações são pautadas pela transparência e sinceridade.",
      color: "#2C7EB3",
    },
    {
      icon: Heart,
      title: "Paixão",
      desc: "Apreciamos profundamente nossa atuação, e essa paixão inspira excelência em nossos serviços.",
      color: "#EE7501",
    },
    {
      icon: Users,
      title: "Equipe",
      desc: "Unimos forças, valorizando a contribuição única de cada membro para alcançar objetivos comuns.",
      color: "#861720",
    },
    {
      icon: Sparkles,
      title: "Diversidade",
      desc: "Reconhecemos e respeitamos as diferenças individuais como fonte de enriquecimento e inovação para nossa equipe.",
      color: "#2C7EB3",
    },
    {
      icon: Scale,
      title: "Responsabilidade",
      desc: "Compromisso com o impacto positivo de nossas ações sobre o patrimônio cultural e as comunidades envolvidas.",
      color: "#EE7501",
    },
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
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative min-h-[550px] lg:min-h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={ASSETS.heroArqueologia} alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(249,248,246,0.98) 0%, rgba(249,248,246,0.95) 30%, rgba(249,248,246,0.88) 60%, rgba(249,248,246,0.70) 100%)'
            }}
          />
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-80 h-80 rounded-full opacity-[0.03]" style={{ backgroundColor: '#EE7501' }} />
          <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full opacity-[0.03]" style={{ backgroundColor: '#861720' }} />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#861720' }}>Direcionamento Estratégico</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8"
              style={{ color: '#2A2A2A' }}
            >
              Missão, Visão e{' '}
              <span style={{ background: 'linear-gradient(135deg, #EE7501 0%, #861720 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Valores
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg lg:text-xl font-light leading-relaxed"
              style={{ color: '#555', maxWidth: '650px' }}
            >
              Os pilares que guiam nossas decisões, ações e relacionamentos. Cada dia, reafirmamos nosso compromisso com a <strong style={{ color: '#861720' }}>excelência</strong>, a <strong style={{ color: '#EE7501' }}>inovação</strong> e a preservação do patrimônio cultural brasileiro.
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════ MISSÃO & VISÃO — LAYOUT ASSIMÉTRICO ═══════════════════ */}
      <section className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#F9F8F6' }}>
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.02]" style={{ backgroundColor: '#861720', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.02]" style={{ backgroundColor: '#EE7501', transform: 'translate(-30%, 30%)' }} />

        <div className="container">
          {/* MISSÃO — Full width card with asymmetric layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-8"
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #861720 0%, #6B1219 50%, #4A0D12 100%)',
                boxShadow: '0 25px 80px rgba(134, 23, 32, 0.2)',
              }}
            >
              {/* Decorative circles */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                <circle cx="85%" cy="50%" r="200" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <circle cx="85%" cy="50%" r="150" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <circle cx="85%" cy="50%" r="100" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
              </svg>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left: Label */}
                <div className="lg:col-span-4 p-10 lg:p-14 flex flex-col justify-center"
                  style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: 'rgba(238, 117, 1, 0.15)' }}
                    >
                      <Target className="w-8 h-8" style={{ color: '#EE7501' }} />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 block mb-3">Nossa</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                      Missão
                    </h2>
                    <div className="w-16 h-1 mt-6 rounded-full" style={{ background: 'linear-gradient(to right, #EE7501, transparent)' }} />
                  </motion.div>
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-8 p-10 lg:p-14 flex items-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p className="text-lg lg:text-xl font-light leading-relaxed text-white/85 mb-6">
                      Liderar o mercado de serviços na área de <strong className="text-white font-semibold">patrimônio sociocultural e arqueológico</strong> com estratégias inovadoras e adaptativas, alinhando nossas operações com as necessidades dinâmicas de nossos parceiros.
                    </p>
                    <p className="text-base font-light leading-relaxed text-white/60">
                      Contribuindo ativamente para a <span style={{ color: '#EE7501' }} className="font-medium">sustentabilidade ambiental, social e econômica</span> do Brasil.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VISÃO — Inverted asymmetric layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(230, 230, 230, 0.5)',
                boxShadow: '0 15px 60px rgba(0, 0, 0, 0.06)',
              }}
            >
              {/* Decorative gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl" style={{ background: 'linear-gradient(to right, #EE7501, #861720, #2C7EB3)' }} />

              {/* Decorative circles */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                <circle cx="15%" cy="50%" r="180" fill="none" stroke="rgba(44, 126, 179, 0.04)" strokeWidth="1" />
                <circle cx="15%" cy="50%" r="130" fill="none" stroke="rgba(44, 126, 179, 0.03)" strokeWidth="1" />
              </svg>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left: Content */}
                <div className="lg:col-span-8 p-10 lg:p-14 flex items-center order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p className="text-lg lg:text-xl font-light leading-relaxed mb-6" style={{ color: '#444' }}>
                      Solidificar nossa posição como o <strong style={{ color: '#861720' }} className="font-semibold">principal HUB do Brasil</strong> em produtos e serviços socioculturais e arqueológicos.
                    </p>
                    <p className="text-base font-light leading-relaxed" style={{ color: '#777' }}>
                      Estabelecendo um padrão de <span style={{ color: '#EE7501' }} className="font-medium">excelência, eficiência e inovação</span> que se torne referência no mercado nacional.
                    </p>
                  </motion.div>
                </div>

                {/* Right: Label */}
                <div className="lg:col-span-4 p-10 lg:p-14 flex flex-col justify-center order-1 lg:order-2"
                  style={{ borderLeft: '1px solid rgba(230, 230, 230, 0.5)' }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:text-right"
                  >
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 lg:ml-auto"
                      style={{ backgroundColor: 'rgba(44, 126, 179, 0.08)' }}
                    >
                      <Eye className="w-8 h-8" style={{ color: '#2C7EB3' }} />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase block mb-3" style={{ color: '#AAA' }}>Nossa</span>
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#2A2A2A' }}>
                      Visão
                    </h2>
                    <div className="w-16 h-1 mt-6 rounded-full lg:ml-auto" style={{ background: 'linear-gradient(to right, #2C7EB3, transparent)' }} />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════ VALORES — INTERACTIVE GRID ═══════════════════ */}
      <section className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#861720' }}>Valores</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight" style={{ color: '#2A2A2A' }}>
              Os pilares que <span style={{ color: '#EE7501' }}>sustentam</span> nossa atuação
            </h2>
            <p className="mt-6 text-base lg:text-lg font-light leading-relaxed max-w-2xl" style={{ color: '#777' }}>
              Cada valor reflete o compromisso do Grupo Arqueo com a excelência e a ética em todas as suas relações.
            </p>
          </motion.div>

          {/* Values grid — 3x2 with interactive hover */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valores.map((valor, i) => {
              const Icon = valor.icon;
              const isActive = activeValor === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  onMouseEnter={() => setActiveValor(i)}
                  onMouseLeave={() => setActiveValor(null)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
                  style={{
                    backgroundColor: isActive ? valor.color : '#F9F8F6',
                    border: `1px solid ${isActive ? valor.color : 'rgba(230, 230, 230, 0.6)'}`,
                    boxShadow: isActive ? `0 20px 60px ${valor.color}25` : '0 4px 20px rgba(0, 0, 0, 0.03)',
                    transform: isActive ? 'translateY(-8px)' : 'translateY(0)',
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="h-1 w-full transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to right, ${valor.color}, transparent)`,
                      opacity: isActive ? 0 : 1,
                    }}
                  />

                  <div className="p-8 lg:p-10">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500"
                      style={{
                        backgroundColor: isActive ? 'rgba(255,255,255,0.15)' : `${valor.color}10`,
                      }}
                    >
                      <Icon
                        className="w-7 h-7 transition-colors duration-500"
                        style={{ color: isActive ? '#FFFFFF' : valor.color }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg font-bold mb-3 transition-colors duration-500"
                      style={{ color: isActive ? '#FFFFFF' : '#2A2A2A' }}
                    >
                      {valor.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm font-light leading-relaxed transition-colors duration-500"
                      style={{ color: isActive ? 'rgba(255,255,255,0.8)' : '#777' }}
                    >
                      {valor.desc}
                    </p>

                    {/* Arrow indicator */}
                    <div className="mt-6 flex items-center gap-2 transition-all duration-500"
                      style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'translateX(0)' : 'translateX(-10px)' }}
                    >
                      <ArrowRight className="w-4 h-4 text-white/60" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ═══════════════════ COMPROMISSO — FULL WIDTH STATEMENT ═══════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #861720 0%, #6B1219 40%, #2A2A2A 100%)',
          }}
        />
        {/* Decorative elements */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <circle cx="20%" cy="30%" r="200" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <circle cx="80%" cy="70%" r="150" fill="none" stroke="rgba(238,117,1,0.05)" strokeWidth="1" />
          <circle cx="50%" cy="50%" r="300" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
        </svg>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Decorative quote mark */}
            <div className="text-7xl lg:text-8xl font-serif leading-none mb-6" style={{ color: 'rgba(238, 117, 1, 0.3)' }}>
              "
            </div>

            <h3 className="text-2xl lg:text-4xl font-bold text-white leading-snug mb-8">
              Nosso compromisso vai além da conformidade legal — buscamos gerar{' '}
              <span style={{ color: '#EE7501' }}>valor real</span> para o patrimônio cultural brasileiro.
            </h3>

            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="w-12 h-px" style={{ backgroundColor: 'rgba(238, 117, 1, 0.5)' }} />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40">Grupo Arqueo</span>
              <div className="w-12 h-px" style={{ backgroundColor: 'rgba(238, 117, 1, 0.5)' }} />
            </div>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
