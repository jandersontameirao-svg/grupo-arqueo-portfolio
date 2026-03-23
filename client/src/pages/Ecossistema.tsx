import { motion, AnimatePresence } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { useState } from "react";
import { ExternalLink, ArrowRight, ChevronRight } from "lucide-react";

/**
 * ECOSSISTEMA — Página 04 (REDESIGN PREMIUM)
 * Design: Layout moderno com cores dinâmicas por empresa selecionada
 * Cores: Arqueoproject=#EE7501 (laranja), ArqueoGIS=#861720 (vinho), ArqueoOcean=#2C7EB3 (azul), ArqueoEduc=#C0392B (vermelho)
 */

const empresas = [
  {
    id: "arqueoproject",
    name: "Arqueoproject",
    logo: ASSETS.logoArqueoproject,
    tagline: "Pesquisa Arqueológica e Consultoria",
    color: "#EE7501",
    colorLight: "rgba(238,117,1,0.08)",
    colorMid: "rgba(238,117,1,0.15)",
    url: "https://www.arqueoproject.com.br",
    desc: "Empresa-mãe do grupo, especializada em pesquisa arqueológica preventiva e consultoria para licenciamento sociocultural. Atua em todo o ciclo de gestão arqueológica, desde o diagnóstico até o resgate e monitoramento.",
    services: ["Diagnóstico Arqueológico", "Prospecção e Resgate", "Monitoramento Arqueológico", "Laudos e Relatórios Técnicos", "Gestão de Acervo"],
  },
  {
    id: "arqueogis",
    name: "ArqueoGIS",
    logo: ASSETS.logoArqueogis,
    tagline: "Tecnologia e Dados Geoespaciais",
    color: "#861720",
    colorLight: "rgba(134,23,32,0.08)",
    colorMid: "rgba(134,23,32,0.15)",
    url: "https://www.arqueogis.com.br",
    desc: "Plataforma de tecnologia e gestão de dados geoespaciais aplicados à arqueologia. Desenvolve soluções de geoprocessamento, sensoriamento remoto e sistemas de informação geográfica para projetos arqueológicos.",
    services: ["Geoprocessamento", "Sensoriamento Remoto", "SIG Arqueológico", "Modelagem 3D", "Banco de Dados Espaciais"],
  },
  {
    id: "arqueocean",
    name: "ArqueoOcean",
    logo: ASSETS.logoArqueocean,
    tagline: "Arqueologia Subaquática",
    color: "#2C7EB3",
    colorLight: "rgba(44,126,179,0.08)",
    colorMid: "rgba(44,126,179,0.15)",
    url: "https://www.arqueocean.com.br",
    desc: "Divisão especializada em arqueologia subaquática e costeira. Atua em projetos offshore, portuários e de infraestrutura costeira, com equipe certificada em mergulho científico e técnico.",
    services: ["Arqueologia Subaquática", "Prospecção Costeira", "Levantamento Offshore", "Mergulho Científico", "Patrimônio Naval"],
  },
  {
    id: "arqueoeduc",
    name: "ArqueoEduc",
    logo: ASSETS.logoArqueoeduc,
    tagline: "Educação Patrimonial e Comunicação",
    color: "#C0392B",
    colorLight: "rgba(192,57,43,0.08)",
    colorMid: "rgba(192,57,43,0.15)",
    url: "https://www.arqueoeduc.com.br",
    desc: "Braço educacional e de comunicação social do grupo. Desenvolve programas de educação patrimonial, comunicação social e engajamento comunitário como parte dos processos de licenciamento.",
    services: ["Educação Patrimonial", "Comunicação Social", "Engajamento Comunitário", "Produção de Conteúdo", "Programas Educativos"],
  },
];

export default function Ecossistema() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = empresas[activeIdx];

  return (
    <PortfolioLayout
      chapterNum="04"
      chapterTitle="Ecossistema do Grupo"
      prevPath="/missao-visao"
      prevLabel="Missão, Visão e Valores"
      nextPath="/solucoes"
      nextLabel="Soluções"
    >

      {/* ═══════════════════ HERO — DARK WITH DYNAMIC COLOR ACCENT ═══════════════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden transition-colors duration-700" style={{ backgroundColor: '#2A2A2A' }}>
        {/* Animated accent blob */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full transition-all duration-700 blur-3xl"
          style={{ backgroundColor: active.color, opacity: 0.07 }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full transition-all duration-700 blur-2xl"
          style={{ backgroundColor: active.color, opacity: 0.04 }}
        />
        {/* Subtle diagonal lines */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(255,255,255,0.5) 80px, rgba(255,255,255,0.5) 81px)`,
          }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT — Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 rounded-full transition-colors duration-500" style={{ backgroundColor: active.color }} />
                <span className="text-[11px] font-semibold tracking-[0.4em] uppercase transition-colors duration-500" style={{ color: active.color }}>Ecossistema</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6 text-white">
                Quatro empresas,{' '}
                <span className="transition-colors duration-500" style={{ color: active.color }}>uma visão integrada</span>
              </h1>

              <p className="text-base lg:text-lg font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                O Grupo Arqueo opera através de um ecossistema de empresas especializadas, cada uma com competência técnica própria, mas todas integradas sob uma mesma visão estratégica de excelência e inovação.
              </p>
            </motion.div>

            {/* RIGHT — Company selector cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-3"
            >
              {empresas.map((empresa, i) => {
                const isActive = activeIdx === i;
                return (
                  <div
                    key={empresa.id}
                    onClick={() => setActiveIdx(i)}
                    className="relative rounded-xl p-5 cursor-pointer transition-all duration-400 group"
                    style={{
                      backgroundColor: isActive ? empresa.color : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${isActive ? empresa.color : 'rgba(255,255,255,0.08)'}`,
                      transform: isActive ? 'scale(1.02)' : 'scale(1)',
                      boxShadow: isActive ? `0 12px 40px ${empresa.color}40` : 'none',
                    }}
                  >
                    <img
                      src={empresa.logo}
                      alt={empresa.name}
                      className="h-7 w-auto mb-3 transition-all duration-300"
                      style={{ filter: isActive ? 'brightness(0) invert(1)' : 'brightness(0) invert(0.7)' }}
                    />
                    <h3 className="text-sm font-bold mb-0.5 transition-colors duration-300"
                      style={{ color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.8)' }}
                    >
                      {empresa.name}
                    </h3>
                    <p className="text-[10px] font-light transition-colors duration-300"
                      style={{ color: isActive ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.35)' }}
                    >
                      {empresa.tagline}
                    </p>
                    {/* Active indicator dot */}
                    {isActive && (
                      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/50" />
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ DETAIL SECTION — DYNAMIC COLOR ═══════════════════ */}
      <section className="py-16 lg:py-24 transition-colors duration-700" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Company header bar */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-500"
                    style={{ backgroundColor: active.colorLight }}
                  >
                    <img src={active.logo} alt={active.name} className="h-9 w-auto" />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold transition-colors duration-500" style={{ color: active.color }}>
                      {active.name}
                    </h2>
                    <p className="text-sm font-light" style={{ color: '#777' }}>{active.tagline}</p>
                  </div>
                </div>
                <a
                  href={active.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-500 hover:opacity-90 hover:gap-3"
                  style={{ backgroundColor: active.color }}
                >
                  Visitar site <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Description */}
                <div className="lg:col-span-3">
                  <div className="rounded-2xl p-8 lg:p-10 h-full" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 20px rgba(0,0,0,0.04)' }}>
                    <div className="w-12 h-[3px] rounded-full mb-6 transition-colors duration-500" style={{ backgroundColor: active.color }} />
                    <p className="text-base lg:text-lg font-light leading-relaxed" style={{ color: '#444' }}>
                      {active.desc}
                    </p>
                  </div>
                </div>

                {/* Services */}
                <div className="lg:col-span-2">
                  <div className="rounded-2xl p-8 lg:p-10 h-full transition-colors duration-500"
                    style={{ backgroundColor: active.color }}
                  >
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-white/60">
                      Competências
                    </h4>
                    <div className="space-y-3">
                      {active.services.map((service, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 py-2.5 px-4 rounded-lg transition-all duration-200"
                          style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                        >
                          <ChevronRight className="w-4 h-4 text-white/50 flex-shrink-0" />
                          <span className="text-sm font-medium text-white">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════ INTEGRATION STRIP ═══════════════════ */}
      <section className="py-10 lg:py-14 transition-colors duration-700" style={{ backgroundColor: active.color }}>
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8 flex-wrap justify-center">
              {empresas.map((e, i) => (
                <img
                  key={e.id}
                  src={e.logo}
                  alt={e.name}
                  className="h-6 lg:h-8 w-auto brightness-0 invert cursor-pointer transition-all duration-300"
                  style={{ opacity: activeIdx === i ? 1 : 0.4 }}
                  onClick={() => setActiveIdx(i)}
                />
              ))}
            </div>
            <p className="text-xs font-light text-center lg:text-right text-white/60">
              Empresas integradas sob uma visão estratégica única
            </p>
          </div>
        </div>
      </section>

    </PortfolioLayout>
  );
}
