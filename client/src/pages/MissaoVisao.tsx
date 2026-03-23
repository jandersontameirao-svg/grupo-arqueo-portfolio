import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { Target, Eye, Shield, Handshake, Heart, Users, Sparkles, Scale } from "lucide-react";
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
      {/* ═══════════════════ HERO SECTION — CINEMATIC ═══════════════════ */}
      <section className="relative min-h-[420px] lg:min-h-[520px] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/hero-mvv-arqueo-GK5J6R6QaWvJCr4P9a8Syu.webp"
            alt="Artefatos arqueológicos em paisagem brasileira"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay from bottom */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(42,42,42,0.95) 0%, rgba(42,42,42,0.7) 35%, rgba(42,42,42,0.3) 60%, rgba(42,42,42,0.1) 100%)'
            }}
          />
        </div>

        {/* Content positioned at bottom */}
        <div className="container relative z-10 pb-14 lg:pb-20">
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
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #EE7501, #861720)' }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#EE7501' }}>Direcionamento Estratégico</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6 text-white"
            >
              Missão, Visão e{' '}
              <span style={{ color: '#EE7501' }}>Valores</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base lg:text-lg font-light leading-relaxed text-white/70"
              style={{ maxWidth: '600px' }}
            >
              Os pilares que guiam nossas decisões, ações e relacionamentos — compromisso com a excelência, a inovação e a preservação do patrimônio cultural brasileiro.
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


      {/* ═══════════════════ VALORES — HEXAGONAL HONEYCOMB ═══════════════════ */}
      <section className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="container">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#861720' }}>Valores</span>
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to left, #861720, #EE7501)' }} />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight" style={{ color: '#2A2A2A' }}>
              Os pilares que <span style={{ color: '#EE7501' }}>sustentam</span> nossa atuação
            </h2>
          </motion.div>

          {/* Hexagonal honeycomb layout */}
          <div className="relative mx-auto" style={{ maxWidth: '750px' }}>
            {/* Desktop: Honeycomb grid */}
            <div className="hidden lg:block relative" style={{ height: '580px' }}>
              {/* Row 1: 2 hexagons */}
              {[
                { ...valores[0], x: '12%', y: '0%' },
                { ...valores[1], x: '52%', y: '0%' },
              ].map((item, idx) => {
                const Icon = item.icon;
                const i = idx;
                const isActive = activeValor === i;
                return (
                  <motion.div
                    key={`r1-${idx}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    onMouseEnter={() => setActiveValor(i)}
                    onMouseLeave={() => setActiveValor(null)}
                    className="absolute cursor-pointer transition-all duration-500"
                    style={{
                      left: item.x,
                      top: item.y,
                      width: '250px',
                      height: '220px',
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                      zIndex: isActive ? 20 : 10,
                    }}
                  >
                    <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-6">
                      {/* Hexagon SVG background */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 220" preserveAspectRatio="none">
                        <polygon
                          points="125,0 245,55 245,165 125,220 5,165 5,55"
                          fill={isActive ? item.color : `${item.color}18`}
                          stroke={item.color}
                          strokeWidth={isActive ? '2' : '1'}
                          opacity={isActive ? 1 : 0.9}
                          className="transition-all duration-500"
                        />
                      </svg>
                      {/* Content */}
                      <div className="relative z-10">
                        <Icon className="w-8 h-8 mx-auto mb-3 transition-colors duration-500" style={{ color: isActive ? '#FFFFFF' : item.color }} />
                        <h3 className="text-base font-bold mb-2 transition-colors duration-500" style={{ color: isActive ? '#FFFFFF' : '#2A2A2A' }}>{item.title}</h3>
                        <p className="text-[11px] leading-snug font-light transition-colors duration-500 px-2" style={{ color: isActive ? 'rgba(255,255,255,0.85)' : '#888' }}>{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Row 2: 3 hexagons (offset) — includes center label */}
              {[
                { ...valores[2], x: '-8%', y: '33%' },
                { x: '32%', y: '33%', isCenter: true },
                { ...valores[3], x: '72%', y: '33%' },
              ].map((item, idx) => {
                if ('isCenter' in item && item.isCenter) {
                  return (
                    <motion.div
                      key="center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                      className="absolute"
                      style={{
                        left: item.x,
                        top: item.y,
                        width: '250px',
                        height: '220px',
                        zIndex: 15,
                      }}
                    >
                      <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-6">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 220" preserveAspectRatio="none">
                          <polygon
                            points="125,0 245,55 245,165 125,220 5,165 5,55"
                            fill="#861720"
                            stroke="#861720"
                            strokeWidth="2"
                          />
                        </svg>
                        <div className="relative z-10">
                          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/50 block mb-2">Nossos</span>
                          <h3 className="text-2xl font-bold text-white leading-tight">Valores</h3>
                          <div className="w-10 h-0.5 mx-auto mt-3 rounded-full" style={{ background: 'linear-gradient(to right, #EE7501, transparent)' }} />
                        </div>
                      </div>
                    </motion.div>
                  );
                }
                const valorItem = item as typeof valores[0] & { x: string; y: string };
                const Icon = valorItem.icon;
                const globalIdx = idx === 0 ? 2 : 3;
                const isActive = activeValor === globalIdx;
                return (
                  <motion.div
                    key={`r2-${idx}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: globalIdx * 0.1 }}
                    onMouseEnter={() => setActiveValor(globalIdx)}
                    onMouseLeave={() => setActiveValor(null)}
                    className="absolute cursor-pointer transition-all duration-500"
                    style={{
                      left: valorItem.x,
                      top: valorItem.y,
                      width: '250px',
                      height: '220px',
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                      zIndex: isActive ? 20 : 10,
                    }}
                  >
                    <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-6">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 220" preserveAspectRatio="none">
                        <polygon
                          points="125,0 245,55 245,165 125,220 5,165 5,55"
                          fill={isActive ? valorItem.color : `${valorItem.color}18`}
                          stroke={valorItem.color}
                          strokeWidth={isActive ? '2' : '1'}
                          opacity={isActive ? 1 : 0.9}
                          className="transition-all duration-500"
                        />
                      </svg>
                      <div className="relative z-10">
                        <Icon className="w-8 h-8 mx-auto mb-3 transition-colors duration-500" style={{ color: isActive ? '#FFFFFF' : valorItem.color }} />
                        <h3 className="text-base font-bold mb-2 transition-colors duration-500" style={{ color: isActive ? '#FFFFFF' : '#2A2A2A' }}>{valorItem.title}</h3>
                        <p className="text-[11px] leading-snug font-light transition-colors duration-500 px-2" style={{ color: isActive ? 'rgba(255,255,255,0.85)' : '#888' }}>{valorItem.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Row 3: 2 hexagons */}
              {[
                { ...valores[4], x: '12%', y: '66%' },
                { ...valores[5], x: '52%', y: '66%' },
              ].map((item, idx) => {
                const Icon = item.icon;
                const globalIdx = idx + 4;
                const isActive = activeValor === globalIdx;
                return (
                  <motion.div
                    key={`r3-${idx}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: globalIdx * 0.1 }}
                    onMouseEnter={() => setActiveValor(globalIdx)}
                    onMouseLeave={() => setActiveValor(null)}
                    className="absolute cursor-pointer transition-all duration-500"
                    style={{
                      left: item.x,
                      top: item.y,
                      width: '250px',
                      height: '220px',
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                      zIndex: isActive ? 20 : 10,
                    }}
                  >
                    <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-6">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 220" preserveAspectRatio="none">
                        <polygon
                          points="125,0 245,55 245,165 125,220 5,165 5,55"
                          fill={isActive ? item.color : `${item.color}18`}
                          stroke={item.color}
                          strokeWidth={isActive ? '2' : '1'}
                          opacity={isActive ? 1 : 0.9}
                          className="transition-all duration-500"
                        />
                      </svg>
                      <div className="relative z-10">
                        <Icon className="w-8 h-8 mx-auto mb-3 transition-colors duration-500" style={{ color: isActive ? '#FFFFFF' : item.color }} />
                        <h3 className="text-base font-bold mb-2 transition-colors duration-500" style={{ color: isActive ? '#FFFFFF' : '#2A2A2A' }}>{item.title}</h3>
                        <p className="text-[11px] leading-snug font-light transition-colors duration-500 px-2" style={{ color: isActive ? 'rgba(255,255,255,0.85)' : '#888' }}>{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile: Stacked hexagons */}
            <div className="lg:hidden grid grid-cols-2 gap-4">
              {valores.map((valor, i) => {
                const Icon = valor.icon;
                const isActive = activeValor === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    onTouchStart={() => setActiveValor(i)}
                    onTouchEnd={() => setActiveValor(null)}
                    className="relative cursor-pointer"
                    style={{ aspectRatio: '250/220' }}
                  >
                    <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-4">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 220" preserveAspectRatio="none">
                        <polygon
                          points="125,0 245,55 245,165 125,220 5,165 5,55"
                          fill={isActive ? valor.color : `${valor.color}18`}
                          stroke={valor.color}
                          strokeWidth="1"
                          opacity={isActive ? 1 : 0.9}
                        />
                      </svg>
                      <div className="relative z-10">
                        <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: isActive ? '#FFFFFF' : valor.color }} />
                        <h3 className="text-xs font-bold mb-1" style={{ color: isActive ? '#FFFFFF' : '#2A2A2A' }}>{valor.title}</h3>
                        <p className="text-[9px] leading-snug font-light px-1" style={{ color: isActive ? 'rgba(255,255,255,0.85)' : '#888' }}>{valor.desc.substring(0, 60)}...</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
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
