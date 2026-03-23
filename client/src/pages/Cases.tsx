import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { useState } from "react";
import { MapPin, Calendar, Building2 } from "lucide-react";

/**
 * CASES — Página 08
 * Design: Hero section similar to Home with image background + gradient overlay
 */

const cases = [
  {
    title: "Complexo Eólico Serra da Borborema",
    sector: "Energia Eólica",
    location: "Paraíba",
    year: "2023",
    client: "Confidencial",
    desc: "Diagnóstico arqueológico, prospecção e monitoramento para complexo eólico com mais de 200 aerogeradores. Gestão completa do licenciamento sociocultural junto ao IPHAN.",
    services: ["Diagnóstico", "Prospecção", "Monitoramento", "Educação Patrimonial"],
  },
  {
    title: "Parque Solar Chapada dos Veadeiros",
    sector: "Energia Solar",
    location: "Goiás",
    year: "2022",
    client: "Confidencial",
    desc: "Pesquisa arqueológica preventiva para implantação de parque solar em área de alta sensibilidade arqueológica. Identificação e resgate de sítios pré-coloniais.",
    services: ["Diagnóstico", "Resgate", "Laudos Técnicos"],
  },
  {
    title: "LT 500kV Recife–Teresina",
    sector: "Linhas de Transmissão",
    location: "PE / PI",
    year: "2023",
    client: "Confidencial",
    desc: "Acompanhamento arqueológico de linha de transmissão de 800km, com prospecção em faixa de servidão e monitoramento durante implantação de torres.",
    services: ["Prospecção", "Monitoramento", "Relatórios IPHAN"],
  },
  {
    title: "Duplicação BR-101 Norte",
    sector: "Rodovias",
    location: "Rio Grande do Norte",
    year: "2021",
    client: "DNIT",
    desc: "Programa de pesquisa arqueológica para duplicação de trecho da BR-101, incluindo resgate de sítios históricos e pré-coloniais ao longo do corredor rodoviário.",
    services: ["Diagnóstico", "Resgate", "Educação Patrimonial", "Gestão de Acervo"],
  },
  {
    title: "Mineração Serra do Espinhaço",
    sector: "Mineração",
    location: "Minas Gerais",
    year: "2022",
    client: "Confidencial",
    desc: "Levantamento arqueológico e educação patrimonial para projeto de mineração em região com alto potencial arqueológico. Identificação de sítios rupestres.",
    services: ["Levantamento", "Educação Patrimonial", "Comunicação Social"],
  },
  {
    title: "Porto Offshore Pecém",
    sector: "Infraestrutura",
    location: "Ceará",
    year: "2023",
    client: "Confidencial",
    desc: "Arqueologia subaquática para expansão portuária, com levantamento de patrimônio naval e costeiro. Equipe de mergulho científico certificada.",
    services: ["Arqueologia Subaquática", "Levantamento Costeiro", "Mergulho Científico"],
  },
];

const sectors = ["Todos", ...Array.from(new Set(cases.map(c => c.sector)))];

export default function Cases() {
  const [activeFilter, setActiveFilter] = useState("Todos");
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
      {/* Hero Section — Similar to Home */}
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
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Portfólio</span>
            </div>
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
              Projetos que demonstram nossa{' '}
              <span style={{ color: '#EE7501' }}>capacidade</span>
            </h1>
            <p className="text-base lg:text-lg font-light leading-relaxed" style={{ color: '#555', maxWidth: '600px' }}>
              Seleção de projetos representativos da nossa atuação em diferentes setores e regiões do Brasil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px my-16 lg:my-24" style={{ backgroundColor: '#E6E6E6' }} />

      {/* Cases + Filter */}
      <section className="py-16 lg:py-24">
        <div className="container">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setActiveFilter(sector)}
                  className="px-4 py-2 text-xs font-medium transition-all duration-300"
                  style={{
                    backgroundColor: activeFilter === sector ? '#2A2A2A' : '#FFFFFF',
                    color: activeFilter === sector ? '#FFFFFF' : '#2A2A2A',
                    border: `1px solid ${activeFilter === sector ? '#2A2A2A' : '#E6E6E6'}`,
                  }}
                >
                  {sector}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Cases grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((caseItem, i) => (
              <motion.div
                key={caseItem.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-6 lg:p-8 transition-all duration-300"
                style={{ backgroundColor: '#FFFFFF', borderLeft: '3px solid #EE7501' }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className="px-2 py-0.5 text-[10px] font-medium" style={{ backgroundColor: '#F3EFEA', color: '#EE7501' }}>
                    {caseItem.sector}
                  </span>
                </div>

                <h3 className="text-base lg:text-lg font-bold mb-3" style={{ color: '#2A2A2A' }}>{caseItem.title}</h3>

                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" style={{ color: '#888' }} />
                    <span className="text-xs font-light" style={{ color: '#888' }}>{caseItem.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" style={{ color: '#888' }} />
                    <span className="text-xs font-light" style={{ color: '#888' }}>{caseItem.year}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3 h-3" style={{ color: '#888' }} />
                    <span className="text-xs font-light" style={{ color: '#888' }}>{caseItem.client}</span>
                  </div>
                </div>

                <p className="text-xs font-light leading-relaxed mb-4" style={{ color: '#666' }}>{caseItem.desc}</p>

                <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: '1px solid #F3EFEA' }}>
                  {caseItem.services.map((s, j) => (
                    <span key={j} className="px-2 py-0.5 text-[10px] font-medium" style={{ backgroundColor: '#F3EFEA', color: '#555' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
