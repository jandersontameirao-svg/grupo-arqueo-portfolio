import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { useState } from "react";
import { MapPin, Calendar, Building2, ArrowRight, Zap } from "lucide-react";

/**
 * CASES — Página 08
 * Design: Vitrine Premium com Hover Interativo
 * 
 * EFEITO HOVER:
 * - Overlay com resumo de impacto revelado ao passar mouse
 * - Transição suave com backdrop blur
 * - Ícone de impacto com animação
 * - Dados estratégicos destacados
 */

const cases = [
  {
    title: "Complexo Eólico Serra da Borborema",
    sector: "Energia Eólica",
    location: "Paraíba",
    year: "2023",
    client: "Confidencial",
    desc: "Gestão estratégica de licenciamento sociocultural para complexo de 200+ aerogeradores. Diagnóstico arqueológico abrangente, prospecção intensiva e monitoramento contínuo com educação patrimonial integrada.",
    services: ["Diagnóstico", "Prospecção", "Monitoramento", "Educação Patrimonial"],
    impact: "200+ aerogeradores licenciados | 1.200+ hectares prospectados | 8 sítios arqueológicos identificados | 500+ pessoas beneficiadas",
    featured: true,
  },
  {
    title: "Parque Solar Chapada dos Veadeiros",
    sector: "Energia Solar",
    location: "Goiás",
    year: "2022",
    client: "Confidencial",
    desc: "Pesquisa arqueológica preventiva em área de alta sensibilidade. Identificação, documentação e resgate de sítios pré-coloniais com geração de conhecimento científico relevante.",
    services: ["Diagnóstico", "Resgate", "Laudos Técnicos"],
    impact: "850 hectares prospectados | 12 sítios pré-coloniais documentados | 3 publicações científicas | 2 teses de mestrado apoiadas",
    featured: false,
  },
  {
    title: "LT 500kV Recife–Teresina",
    sector: "Linhas de Transmissão",
    location: "PE / PI",
    year: "2023",
    client: "Confidencial",
    desc: "Acompanhamento arqueológico de 800km com prospecção sistemática em faixa de servidão. Monitoramento durante implantação de torres com relatórios técnicos IPHAN conformes.",
    services: ["Prospecção", "Monitoramento", "Relatórios IPHAN"],
    impact: "800km de faixa prospectada | 45 torres monitoradas | 6 sítios arqueológicos protegidos | 100% conformidade IPHAN",
    featured: false,
  },
  {
    title: "Duplicação BR-101 Norte",
    sector: "Rodovias",
    location: "Rio Grande do Norte",
    year: "2021",
    client: "DNIT",
    desc: "Programa de pesquisa arqueológica para duplicação rodoviária. Resgate de sítios históricos e pré-coloniais com gestão de acervo e educação patrimonial em comunidades locais.",
    services: ["Diagnóstico", "Resgate", "Educação Patrimonial", "Gestão de Acervo"],
    impact: "250km de corredor rodoviário | 18 sítios resgatados | 3.500+ artefatos catalogados | 800+ pessoas em programas comunitários",
    featured: false,
  },
  {
    title: "Mineração Serra do Espinhaço",
    sector: "Mineração",
    location: "Minas Gerais",
    year: "2022",
    client: "Confidencial",
    desc: "Levantamento arqueológico em região de alto potencial. Identificação de sítios rupestres com educação patrimonial e comunicação social estratégica.",
    services: ["Levantamento", "Educação Patrimonial", "Comunicação Social"],
    impact: "1.500 hectares levantados | 22 sítios rupestres identificados | 15 publicações em mídia | 600+ pessoas em ações educativas",
    featured: false,
  },
  {
    title: "Porto Offshore Pecém",
    sector: "Infraestrutura",
    location: "Ceará",
    year: "2023",
    client: "Confidencial",
    desc: "Arqueologia subaquática para expansão portuária. Levantamento de patrimônio naval e costeiro com equipe de mergulho científico certificada.",
    services: ["Arqueologia Subaquática", "Levantamento Costeiro", "Mergulho Científico"],
    impact: "5km² de fundo marinho prospectado | 8 estruturas navais documentadas | 2 expedições científicas | 100+ horas de mergulho",
    featured: false,
  },
];

const sectors = ["Todos", ...Array.from(new Set(cases.map(c => c.sector)))];

export default function Cases() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const filtered = activeFilter === "Todos" ? cases : cases.filter(c => c.sector === activeFilter);

  return (
    <PortfolioLayout
      chapterNum="08"
      chapterTitle="Cases"
      prevPath="/numeros"
      prevLabel="Números"
      nextPath="/territorio"
      nextLabel="Presença Territorial"
    >
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden">
        {/* Background image + gradient overlay */}
        <div className="absolute inset-0 -z-10">
          <img src={ASSETS.heroArqueologia} alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(249,248,246,1) 0%, rgba(249,248,246,0.98) 20%, rgba(249,248,246,0.95) 40%, rgba(249,248,246,0.85) 60%, rgba(249,248,246,0.70) 80%, rgba(249,248,246,0.50) 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] rounded-full" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: '#EE7501' }}>
                Portfólio de Projetos
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
              Projetos que demonstram{' '}
              <span style={{ color: '#EE7501' }}>nossa capacidade</span>{' '}
              e{' '}
              <span style={{ color: '#EE7501' }}>experiência</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg lg:text-xl leading-[1.8] max-w-2xl" style={{ color: '#555', letterSpacing: '0.01em' }}>
              Seleção representativa de projetos que consolidam nossa posição como referência em arqueologia, patrimônio cultural e licenciamento ambiental em infraestrutura de grande escala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ DIVIDER ═══════════════════ */}
      <div className="h-px my-16 lg:my-24" style={{ background: 'linear-gradient(to right, transparent, rgba(238,117,1,0.2), transparent)' }} />

      {/* ═══════════════════ CASES + FILTER ═══════════════════ */}
      <section className="py-16 lg:py-24">
        <div className="container">
          {/* Filtros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setActiveFilter(sector)}
                  className="px-5 py-2.5 text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-300 rounded-lg"
                  style={{
                    backgroundColor: activeFilter === sector ? '#1A1A1A' : '#FFFFFF',
                    color: activeFilter === sector ? '#FFFFFF' : '#666',
                    border: `1px solid ${activeFilter === sector ? '#1A1A1A' : '#E6E6E6'}`,
                    boxShadow: activeFilter === sector ? '0 8px 24px rgba(26,26,26,0.12)' : 'none',
                  }}
                >
                  {sector}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Cases grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filtered.map((caseItem, i) => {
              const isFeatured = caseItem.featured && filtered.indexOf(caseItem) === 0;
              const isHovered = hoveredCard === i;
              return (
                <motion.div
                  key={caseItem.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`group rounded-2xl overflow-hidden transition-all duration-300 relative ${isFeatured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: `1px solid ${isFeatured ? '#EE7501' : '#E6E6E6'}`,
                    boxShadow: isFeatured 
                      ? '0 20px 60px rgba(238,117,1,0.12)' 
                      : '0 4px 20px rgba(0,0,0,0.06)',
                  }}
                  onMouseEnter={() => {
                    setHoveredCard(i);
                  }}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                  }}
                >
                  {/* Card content */}
                  <div className="p-8 lg:p-10 xl:p-12 h-full flex flex-col">
                    {/* Header com badge e ano */}
                    <div className="flex items-start justify-between mb-6">
                      <span
                        className="px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase rounded-lg"
                        style={{
                          backgroundColor: isFeatured ? 'rgba(238,117,1,0.12)' : '#F3EFEA',
                          color: isFeatured ? '#EE7501' : '#666',
                        }}
                      >
                        {caseItem.sector}
                      </span>
                      {isFeatured && (
                        <span className="px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase rounded-lg" style={{ backgroundColor: 'rgba(238,117,1,0.12)', color: '#EE7501' }}>
                          Destaque
                        </span>
                      )}
                    </div>

                    {/* Título */}
                    <h3 className={`font-bold leading-[1.2] mb-6 transition-all duration-300 ${isFeatured ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}`} style={{ color: '#1A1A1A', letterSpacing: '-0.01em' }}>
                      {caseItem.title}
                    </h3>

                    {/* Metadados */}
                    <div className="flex flex-wrap items-center gap-5 mb-6 pb-6" style={{ borderBottom: '1px solid #F3EFEA' }}>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" style={{ color: '#EE7501' }} />
                        <span className="text-sm font-medium" style={{ color: '#555' }}>{caseItem.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" style={{ color: '#EE7501' }} />
                        <span className="text-sm font-medium" style={{ color: '#555' }}>{caseItem.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" style={{ color: '#EE7501' }} />
                        <span className="text-sm font-medium" style={{ color: '#555' }}>{caseItem.client}</span>
                      </div>
                    </div>

                    {/* Descrição */}
                    <p className="text-base leading-[1.8] mb-8 flex-1" style={{ color: '#666', fontWeight: 300 }}>
                      {caseItem.desc}
                    </p>

                    {/* Serviços */}
                    <div className="flex flex-wrap gap-2 pt-6" style={{ borderTop: '1px solid #F3EFEA' }}>
                      {caseItem.services.map((s, j) => (
                        <span
                          key={j}
                          className="px-3 py-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase rounded-lg"
                          style={{
                            backgroundColor: isFeatured ? 'rgba(238,117,1,0.08)' : '#F3EFEA',
                            color: isFeatured ? '#EE7501' : '#666',
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* CTA sutil */}
                    {isFeatured && (
                      <div className="flex items-center gap-2 mt-6 text-sm font-semibold" style={{ color: '#EE7501' }}>
                        Saiba mais <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* ═══════════════════ HOVER OVERLAY COM IMPACTO ═══════════════════ */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 p-8 lg:p-10 xl:p-12 flex flex-col items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: 'rgba(26, 26, 26, 0.95)',
                        backdropFilter: 'blur(10px)',
                        zIndex: 50,
                      }}
                    >
                      {/* Ícone de impacto com animação */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="mb-6"
                      >
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: 'rgba(238, 117, 1, 0.2)' }}
                        >
                          <Zap className="w-8 h-8" style={{ color: '#EE7501' }} />
                        </div>
                      </motion.div>

                      {/* Título do impacto */}
                      <h4 className="text-lg font-bold text-center mb-4" style={{ color: '#FFFFFF' }}>
                        Impacto do Projeto
                      </h4>

                      {/* Descrição do impacto */}
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-sm leading-[1.8] text-center"
                        style={{ color: '#DDD' }}
                      >
                        {caseItem.impact}
                      </motion.p>

                      {/* CTA */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex items-center gap-2 mt-6 text-sm font-semibold"
                        style={{ color: '#EE7501' }}
                      >
                        Ver detalhes <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
