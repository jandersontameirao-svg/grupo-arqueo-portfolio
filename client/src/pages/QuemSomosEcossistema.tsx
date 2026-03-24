import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { Building2, Globe, BookOpen, Lightbulb, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

/**
 * QUEM SOMOS & ECOSSISTEMA — Página 02
 * Design: Premium modern layout combining company history and ecosystem structure
 * Sections: Timeline + Ecossistema com 6 empresas
 */

export default function QuemSomosEcossistema() {
  const [selectedEmpresa, setSelectedEmpresa] = useState<string | null>(null);
  const [currentPilarIndex, setCurrentPilarIndex] = useState(0);
  const diagramRef = useRef<HTMLDivElement>(null);

  const timeline = [
    {
      year: "2016",
      title: "Fundação",
      desc: "Criação do Grupo Arqueo em Brasília, com foco em consultoria arqueológica para licenciamento ambiental.",
      icon: Building2,
      badgeColor: "#861720",
      arcColor: "#861720",
    },
    {
      year: "2018",
      title: "Expansão",
      desc: "Abertura do escritório em Natal/RN e início da atuação em projetos de energia eólica no Nordeste.",
      icon: Globe,
      badgeColor: "#2C7EB3",
      arcColor: "#2C7EB3",
    },
    {
      year: "2020",
      title: "Ecossistema",
      desc: "Lançamento das submarcas ArqueoGIS, ArqueoOcean e ArqueoEduc, ampliando o portfólio de serviços.",
      icon: Lightbulb,
      badgeColor: "#EE7501",
      arcColor: "#EE7501",
    },
    {
      year: "2023",
      title: "Consolidação",
      desc: "Escritório em São Paulo, mais de 250 projetos gerenciados e presença em 16 estados.",
      icon: BookOpen,
      badgeColor: "#861720",
      arcColor: "#861720",
    },
  ];

  const pilares = [
    {
      num: "01",
      title: "Integração Técnica",
      desc: "Soluções complementares que se potencializam mutuamente",
    },
    {
      num: "02",
      title: "Expertise Consolidada",
      desc: "Mais de uma década de experiência em arqueologia aplicada",
    },
    {
      num: "03",
      title: "Inovação Contínua",
      desc: "Tecnologia e metodologias de ponta em cada especialidade",
    },
    {
      num: "04",
      title: "Impacto Social",
      desc: "Compromisso com patrimônio cultural e desenvolvimento sustentável",
    },
  ];

  const empresas = [
    {
      id: "arqueoproject",
      name: "Arqueoproject",
      subtitle: "Pesquisa & Consultoria",
      color: "#861720",
      logo: ASSETS.logoArqueoproject,
      description: "Empresa-mãe do grupo, especializada em pesquisa arqueológica preventiva e consultoria para licenciamento sociocultural.",
      competencias: ["Diagnóstico Arqueológico", "Prospecção e Resgate", "Monitoramento Arqueológico", "Laudos e Relatórios Técnicos", "Gestão de Acervo"],
    },
    {
      id: "arqueogis",
      name: "ArqueoGIS",
      subtitle: "Tecnologia & Dados",
      color: "#2C7EB3",
      logo: ASSETS.logoArqueogis,
      description: "Especializada em geotecnologia, mapeamento e análise de dados arqueológicos com ferramentas SIG avançadas.",
      competencias: ["Mapeamento Arqueológico", "Análise Espacial", "Modelagem 3D", "Banco de Dados Geográficos"],
    },
    {
      id: "arqueoocean",
      name: "ArqueoOcean",
      subtitle: "Arqueologia Subaquática",
      color: "#EE7501",
      logo: ASSETS.logoArqueocean,
      description: "Pioneira em arqueologia subaquática no Brasil, atuando em ambientes marinhos e fluviais.",
      competencias: ["Arqueologia Subaquática", "Prospecção Marinha", "Resgate Subaquático", "Documentação Submarina"],
    },
    {
      id: "arqueoeducacao",
      name: "ArqueoEduc",
      subtitle: "Educação & Divulgação",
      color: "#5B8C3E",
      logo: ASSETS.logoArqueoeduc,
      description: "Dedica-se à educação patrimonial, formação de profissionais e divulgação científica.",
      competencias: ["Educação Patrimonial", "Cursos e Capacitações", "Divulgação Científica", "Musealização"],
    },
    {
      id: "arqueosocial",
      name: "ArqueoSocial",
      subtitle: "Responsabilidade Social",
      color: "#2C7EB3",
      logo: ASSETS.logoArqueocean,
      description: "Responsável por projetos de impacto social, envolvimento comunitário e desenvolvimento sustentável.",
      competencias: ["Engajamento Comunitário", "Projetos Sociais", "Sustentabilidade", "Responsabilidade Social"],
    },
    {
      id: "arqueoconsultoria",
      name: "ArqueoConsultoria",
      subtitle: "Consultoria Estratégica",
      color: "#861720",
      logo: ASSETS.logoArqueoproject,
      description: "Oferece consultoria estratégica em gestão do patrimônio e planejamento de projetos arqueológicos.",
      competencias: ["Consultoria Estratégica", "Gestão de Projetos", "Planejamento Arqueológico", "Análise de Risco"],
    },
  ];

  const nextPilar = () => {
    setCurrentPilarIndex(prev => (prev + 1) % pilares.length);
  };

  const prevPilar = () => {
    setCurrentPilarIndex(prev => (prev - 1 + pilares.length) % pilares.length);
  };

  return (
    <PortfolioLayout
      chapterNum="02"
      chapterTitle="Quem Somos & Ecossistema"
      prevPath="/ceo"
      prevLabel="Mensagem do CEO"
      nextPath="/missao-visao"
      nextLabel="Missão, Visão e Valores"
    >
      {/* ═══════════════════ SEÇÃO 1: QUEM SOMOS ═══════════════════ */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="absolute inset-0 -z-10">
          <img src={ASSETS.heroArqueologia} alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(249,248,246,0.98) 0%, rgba(249,248,246,0.95) 25%, rgba(249,248,246,0.90) 50%, rgba(249,248,246,0.80) 75%, rgba(249,248,246,0.60) 100%)'
            }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6" style={{ color: '#1A1A1A' }}>
              Quem Somos
            </h1>
            <p className="text-lg lg:text-xl font-light leading-relaxed mb-8" style={{ color: '#555', maxWidth: '600px' }}>
              Há 10 anos, o Grupo Arqueo une competência técnica, inovação tecnológica e gestão estratégica para oferecer soluções completas em licenciamento sociocultural no Brasil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 px-4 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center" style={{ color: '#2A2A2A' }}>
            Nossa Trajetória
          </h2>
          <div className="space-y-12">
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className={`flex gap-8 lg:gap-12 items-start ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: item.badgeColor }}
                    >
                      <Icon className="w-10 h-10" style={{ color: '#FFFFFF' }} />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: item.badgeColor }}>
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#2A2A2A' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div style={{ height: '1px', backgroundColor: '#E0E0E0' }} />

      {/* ═══════════════════ SEÇÃO 2: ECOSSISTEMA ═══════════════════ */}
      <section className="py-20 lg:py-28 px-4 lg:px-8" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center" style={{ color: '#2A2A2A' }}>
            Nosso Ecossistema
          </h2>
          <p className="text-lg text-center mb-16" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Seis empresas especializadas trabalhando em sinergia para oferecer soluções integradas
          </p>

          {/* Pilares da Sinergia */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#2A2A2A' }}>
              Pilares da Sinergia
            </h3>
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={prevPilar}
                className="p-2 rounded-full transition-all hover:scale-110"
                style={{ backgroundColor: '#EE7501', color: '#FFFFFF' }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex-1 max-w-2xl">
                <motion.div
                  key={currentPilarIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 rounded-xl text-center"
                  style={{ backgroundColor: '#FFFFFF', border: '2px solid #EE7501' }}
                >
                  <div className="text-4xl font-black mb-3" style={{ color: '#EE7501' }}>
                    {pilares[currentPilarIndex].num}
                  </div>
                  <h4 className="text-2xl font-bold mb-3" style={{ color: '#2A2A2A' }}>
                    {pilares[currentPilarIndex].title}
                  </h4>
                  <p style={{ color: '#666' }}>
                    {pilares[currentPilarIndex].desc}
                  </p>
                </motion.div>
              </div>
              <button
                onClick={nextPilar}
                className="p-2 rounded-full transition-all hover:scale-110"
                style={{ backgroundColor: '#EE7501', color: '#FFFFFF' }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="flex justify-center gap-2">
              {pilares.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPilarIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentPilarIndex ? 'w-8' : ''
                  }`}
                  style={{ backgroundColor: idx === currentPilarIndex ? '#EE7501' : '#DDD' }}
                />
              ))}
            </div>
          </div>

          {/* Grid de Empresas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {empresas.map((empresa, idx) => (
              <motion.div
                key={empresa.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setSelectedEmpresa(empresa.id)}
                className="p-6 rounded-xl cursor-pointer transition-all hover:shadow-lg"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: `2px solid ${empresa.color}`,
                  borderLeft: `6px solid ${empresa.color}`,
                }}
              >
                <img src={empresa.logo} alt={empresa.name} className="h-12 mb-4" />
                <h3 className="text-xl font-bold mb-1" style={{ color: '#2A2A2A' }}>
                  {empresa.name}
                </h3>
                <p className="text-sm mb-3" style={{ color: empresa.color, fontWeight: 600 }}>
                  {empresa.subtitle}
                </p>
                <p className="text-sm" style={{ color: '#666', lineHeight: '1.5' }}>
                  {empresa.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Empresa */}
      {selectedEmpresa && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedEmpresa(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEmpresa(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            {empresas.map(empresa => {
              if (empresa.id !== selectedEmpresa) return null;
              return (
                <div key={empresa.id}>
                  <img src={empresa.logo} alt={empresa.name} className="h-16 mb-6" />
                  <h2 className="text-3xl font-bold mb-2" style={{ color: '#2A2A2A' }}>
                    {empresa.name}
                  </h2>
                  <p className="text-lg mb-6" style={{ color: empresa.color, fontWeight: 600 }}>
                    {empresa.subtitle}
                  </p>
                  <p className="text-lg mb-6" style={{ color: '#666', lineHeight: '1.7' }}>
                    {empresa.description}
                  </p>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#2A2A2A' }}>
                    Competências
                  </h3>
                  <ul className="space-y-2">
                    {empresa.competencias.map((comp, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: empresa.color }}
                        />
                        <span style={{ color: '#666' }}>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </motion.div>
        </div>
      )}
    </PortfolioLayout>
  );
}
