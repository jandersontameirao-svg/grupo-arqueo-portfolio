import { Building2, Globe, BookOpen, Lightbulb, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";

/**
 * QUEM SOMOS & ECOSSISTEMA — Página 02
 * Design: Premium modern layout combining company history and ecosystem structure
 * Sections: Timeline + Ecossistema com 6 empresas + Pilares da Sinergia
 */

export default function QuemSomosEcossistema() {
  const [selectedEmpresa, setSelectedEmpresa] = useState<string | null>(null);
  const [hoveredEmpresa, setHoveredEmpresa] = useState<string | null>(null);
  const [currentPilarIndex, setCurrentPilarIndex] = useState(0);
  const [diagramLoaded, setDiagramLoaded] = useState(false);
  const diagramRef = useRef<HTMLDivElement>(null);

  const timeline = [
    {
      year: "2016",
      title: "Fundação",
      desc: "Criação da Arqueoproject em Brasília, com foco em consultoria arqueológica para licenciamento ambiental.",
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

  // 6 empresas no ecossistema
  const empresas = [
    {
      id: "arqueoproject",
      name: "Arqueoproject",
      subtitle: "Pesquisa & Consultoria",
      color: "#861720",
      logo: ASSETS.logoArqueoproject,
      description:
        "Empresa-mãe do grupo, especializada em pesquisa arqueológica preventiva e consultoria para licenciamento sociocultural. Atua em todo o ciclo de gestão arqueológica, desde o diagnóstico até o resgate e monitoramento.",
      competencias: [
        "Diagnóstico Arqueológico",
        "Prospecção e Resgate",
        "Monitoramento Arqueológico",
        "Laudos e Relatórios Técnicos",
        "Gestão de Acervo",
      ],
      paperNoEcossistema:
        "Empresa-mãe que coordena a estratégia integrada do grupo, fornecendo expertise em pesquisa arqueológica e consultoria especializada.",
      diferenciais: [
        "Experiência consolidada em arqueologia preventiva",
        "Equipe multidisciplinar de especialistas",
        "Metodologias inovadoras em diagnóstico",
      ],
    },
    {
      id: "arqueogis",
      name: "ArqueoGIS",
      subtitle: "Tecnologia & Geoespacial",
      color: "#2C7EB3",
      logo: ASSETS.logoArqueogis,
      description:
        "Especializada em geotecnologias aplicadas à arqueologia. Desenvolve soluções em SIG, mapeamento, modelagem 3D e análise espacial para otimizar diagnósticos e gestão de patrimônio.",
      competencias: [
        "Sistemas de Informação Geográfica",
        "Mapeamento e Sensoriamento Remoto",
        "Modelagem 3D e Fotogrametria",
        "Análise Espacial Avançada",
        "Visualização de Dados",
      ],
      paperNoEcossistema:
        "Fornece soluções tecnológicas que potencializam a capacidade diagnóstica do grupo, integrando dados espaciais complexos.",
      diferenciais: [
        "Tecnologia de ponta em geoespacial",
        "Integração com sistemas de gestão",
        "Análises preditivas e modelagem",
      ],
    },
    {
      id: "arqueocean",
      name: "ArqueoOcean",
      subtitle: "Arqueologia Marinha",
      color: "#0B7BA8",
      logo: ASSETS.logoArqueocean,
      description:
        "Pioneira em arqueologia marinha e subaquática no Brasil. Realiza prospecções, escavações e monitoramento em ambientes aquáticos, com expertise em patrimônio submerso.",
      competencias: [
        "Prospecção Subaquática",
        "Escavação em Ambientes Aquáticos",
        "Documentação Submarina",
        "Conservação de Artefatos Aquáticos",
        "Monitoramento Marinho",
      ],
      paperNoEcossistema:
        "Expande o escopo do grupo para ambientes marinhos, oferecendo serviços especializados em arqueologia subaquática.",
      diferenciais: [
        "Expertise única em arqueologia marinha",
        "Equipamentos de ponta para ambientes aquáticos",
        "Parcerias com instituições marinhas",
      ],
    },
    {
      id: "arqueoeduc",
      name: "ArqueoEduc",
      subtitle: "Educação & Divulgação",
      color: "#EE7501",
      logo: ASSETS.logoArqueoeduc,
      description:
        "Dedica-se à educação patrimonial e divulgação científica. Desenvolve programas educativos, exposições, conteúdos digitais e ações de engajamento comunitário.",
      competencias: [
        "Programas de Educação Patrimonial",
        "Produção de Conteúdo Científico",
        "Desenvolvimento de Exposições",
        "Engajamento Comunitário",
        "Comunicação Científica",
      ],
      paperNoEcossistema:
        "Responsável pela comunicação do impacto social do grupo, aproximando a arqueologia da sociedade.",
      diferenciais: [
        "Abordagem inovadora em educação patrimonial",
        "Conteúdos digitais de qualidade",
        "Forte engajamento comunitário",
      ],
    },
    {
      id: "arqueoconsult",
      name: "ArqueoConsult",
      subtitle: "Consultoria Estratégica",
      color: "#6B4423",
      logo: ASSETS.logoGrupoArqueo,
      description:
        "Oferece consultoria em gestão de patrimônio cultural para empresas e instituições. Assessora em políticas, planejamento estratégico e implementação de programas de responsabilidade social.",
      competencias: [
        "Consultoria em Gestão de Patrimônio",
        "Planejamento Estratégico",
        "Políticas de Responsabilidade Social",
        "Assessoria Regulatória",
        "Treinamento Corporativo",
      ],
      paperNoEcossistema:
        "Leva a expertise do grupo para o setor corporativo, promovendo práticas sustentáveis de gestão patrimonial.",
      diferenciais: [
        "Experiência em consultoria corporativa",
        "Conhecimento regulatório profundo",
        "Soluções customizadas",
      ],
    },
    {
      id: "arqueolabs",
      name: "ArqueoLabs",
      subtitle: "Pesquisa & Inovação",
      color: "#7B3FF2",
      logo: ASSETS.logoGrupoArqueo,
      description:
        "Laboratório de pesquisa e desenvolvimento focado em inovação metodológica. Experimenta novas técnicas, materiais e abordagens para avançar a prática arqueológica.",
      competencias: [
        "Pesquisa Metodológica",
        "Desenvolvimento de Técnicas",
        "Análises Laboratoriais",
        "Inovação em Arqueologia",
        "Publicações Científicas",
      ],
      paperNoEcossistema:
        "Motor de inovação do grupo, garantindo que as práticas do ecossistema estejam sempre na vanguarda.",
      diferenciais: [
        "Foco em pesquisa de ponta",
        "Parcerias acadêmicas",
        "Publicações em periódicos",
      ],
    },
  ];

  const selectedEmpresaData = empresas.find(e => e.id === selectedEmpresa);

  return (
    <PortfolioLayout
      chapterNum="02"
      chapterTitle="Quem Somos & Ecossistema"
      prevPath="/quem-somos"
      prevLabel="Voltar"
      nextPath="/missao-visao"
      nextLabel="Próximo"
    >
      <div className="w-full">
        {/* SEÇÃO 1B: QUEM SOMOS + TRAJETÓRIA - Hero Mesclado - REFINADO */}
        <section className="py-20 lg:py-32 px-4 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
          {/* Background sutil premium */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #861720 0%, transparent 50%), radial-gradient(circle at 80% 50%, #EE7501 0%, transparent 50%)' }} />
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Título Principal - Com Logo 10 Anos */}
            <div className="mb-16 lg:mb-20 flex items-center justify-center gap-8">
              {/* Logo 10 Anos */}
              <div className="hidden lg:flex flex-shrink-0">
                <img src={ASSETS.logo10anos} alt="10 Anos" className="w-64 h-64 object-contain" />
              </div>
              
              {/* Texto Principal */}
              <div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight" style={{ color: '#1A1A1A' }}>
                  O Grupo Arqueo é um hub de <span style={{ color: '#EE7501', fontWeight: 800 }}>soluções integradas</span> para <span style={{ color: '#EE7501', fontWeight: 800 }}>Arqueologia</span> e <span style={{ color: '#EE7501', fontWeight: 800 }}>Patrimônio cultural</span>.
                </h2>
              </div>
            </div>

            {/* Timeline com linha horizontal - REFINADA */}
            <div className="relative">
              {/* Linha horizontal de conexão - mais visível */}
              <div className="hidden lg:block absolute top-[140px] left-[8%] right-[8%] h-[3px]" style={{ backgroundColor: '#D0CCCA' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
                {timeline.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15, duration: 0.6 }}
                      className="relative flex flex-col items-center text-center"
                    >
                      {/* Círculo grande com ícone - AUMENTADO */}
                      <div
                        className="w-32 h-32 lg:w-36 lg:h-36 rounded-full flex items-center justify-center mb-8 relative z-10 transition-all duration-300 hover:shadow-xl"
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '4px solid #E0DEDA',
                          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                        }}
                      >
                        <Icon className="w-12 h-12 lg:w-14 lg:h-14" style={{ color: item.badgeColor, opacity: 0.85 }} />
                      </div>

                      {/* Badge do ano */}
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center -mt-4 mb-5 relative z-20 shadow-lg"
                        style={{ backgroundColor: item.badgeColor }}
                      >
                        <span className="text-white text-sm font-bold">{item.year}</span>
                      </div>

                      {/* Título - DESTACADO */}
                      <h5 className="text-lg lg:text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                        {item.title}
                      </h5>

                      {/* Descrição - MELHOR LEGIBILIDADE */}
                      <p className="text-sm lg:text-base leading-relaxed max-w-[240px]" style={{ color: '#666666' }}>
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: TÍTULO DO ECOSSISTEMA */}
        <section className="py-12 lg:py-16 px-4 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight" style={{ color: '#1A1A1A' }}>
              Um ecossistema, <span style={{ color: "#EE7501", fontWeight: 800 }}>múltiplas</span> especialidades
            </h2>
          </div>
        </section>

        {/* SEÇÃO 4: ECOSSISTEMA - Layout Principal - REFINADO */}
        <section className="py-16 lg:py-24 px-4 lg:px-8" style={{ backgroundColor: "#FAFAF9" }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Coluna Principal - Diagrama - COM MAIS PRESENÇA */}
              <div className="lg:col-span-3">
                {/* Diagrama Orbital - AUMENTADO */}
                <div
                  ref={diagramRef}
                  className="flex justify-center mb-14"
                  style={{
                    opacity: diagramLoaded ? 1 : 0,
                    transform: diagramLoaded ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
                    transition: "opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Semtítulo-6_5e5eb982.webp"
                    alt="Diagrama Orbital Grupo Arqueo"
                    className="w-full max-w-2xl h-auto drop-shadow-xl"
                    onLoad={() => setDiagramLoaded(true)}
                    style={{ pointerEvents: "none" }}
                  />
                </div>

                {/* Navegação Inferior - Cards Refinados */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {empresas.map(emp => (
                    <button
                      key={emp.id}
                      onClick={() => setSelectedEmpresa(emp.id)}
                      onMouseEnter={() => setHoveredEmpresa(emp.id)}
                      onMouseLeave={() => setHoveredEmpresa(null)}
                      className="text-left p-4 lg:p-5 rounded-xl transition-all duration-300 logo-fade-in"
                      style={{
                        backgroundColor: selectedEmpresa === emp.id ? `${emp.color}12` : "transparent",
                        border: selectedEmpresa === emp.id ? `2px solid ${emp.color}` : `1px solid #E0DEDA`,
                        opacity: hoveredEmpresa === emp.id || selectedEmpresa === emp.id ? 1 : 0.75,
                        transform: hoveredEmpresa === emp.id ? "scale(1.03) translateY(-2px)" : "scale(1)",
                        boxShadow: selectedEmpresa === emp.id ? `0 8px 24px ${emp.color}15` : "none",
                      }}
                    >
                      <p className="font-bold text-sm lg:text-base" style={{ color: emp.color }}>
                        {emp.name}
                      </p>
                      <p className="text-xs lg:text-sm mt-1.5" style={{ color: "#999999" }}>
                        {emp.subtitle}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Coluna Lateral - Painel Contextual - MAIS INTEGRADO */}
              <div className="lg:col-span-2">
                {selectedEmpresaData ? (
                  <div
                    className="panel-slide sticky top-8 p-7 lg:p-8 rounded-2xl"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: `2px solid ${selectedEmpresaData.color}20`,
                      boxShadow: `0 12px 40px ${selectedEmpresaData.color}12`,
                    }}
                  >
                    {/* Logo */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${selectedEmpresaData.color}15` }}
                    >
                      <img src={selectedEmpresaData.logo} alt={selectedEmpresaData.name} className="w-10 h-10 object-contain" />
                    </div>

                    {/* Nome e Subtítulo */}
                    <h3 className="text-2xl font-bold mb-2" style={{ color: selectedEmpresaData.color }}>
                      {selectedEmpresaData.name}
                    </h3>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#999999" }}>
                      {selectedEmpresaData.subtitle}
                    </p>

                    {/* Divisor */}
                    <div className="h-px mb-5" style={{ backgroundColor: "#E6E6E6" }} />

                    {/* Descrição - MAIS ELEGANTE */}
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "#555555", fontWeight: 500 }}>
                      {selectedEmpresaData.description}
                    </p>

                    {/* Competências */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#999999" }}>
                        Competências
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedEmpresaData.competencias.map((comp, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1.5 rounded-full font-medium"
                            style={{
                              backgroundColor: `${selectedEmpresaData.color}12`,
                              color: selectedEmpresaData.color,
                              border: `1px solid ${selectedEmpresaData.color}30`,
                            }}
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="sticky top-8 p-8 rounded-2xl text-center"
                    style={{
                      backgroundColor: "#F5F5F5",
                      border: "1px dashed #E0DEDA",
                    }}
                  >
                    <p style={{ color: "#999999" }}>Selecione uma empresa para ver detalhes</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════ NOSSO TIME SECTION - REFINADO ═════════════════ */}
        <section className="py-24 lg:py-32 relative" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            {/* Section Title - MELHORADO */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }} />
                <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#861720' }}>Equipe</span>
                <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to left, #861720, #EE7501)' }} />
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8" style={{ color: '#1A1A1A' }}>
                Nosso <span style={{ color: '#861720', fontWeight: 900 }}>Time</span> <span style={{ color: '#EE7501', fontWeight: 900 }}>Multidisciplinar</span>
              </h2>
              <p className="text-base lg:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#666666', fontWeight: 500 }}>
                Composta por arqueólogos, historiadores, geógrafos, biólogos, educadores e especialistas em tecnologia, todos comprometidos com a excelência técnica e a inovação contínua.
              </p>
            </motion.div>

            {/* Team Card with orbital dots layout - PREMIUM */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative mx-auto rounded-3xl overflow-hidden"
              style={{
                maxWidth: '1000px',
                height: '800px',
                background: 'linear-gradient(135deg, #861720 0%, #6B1219 25%, #A01B28 50%, #EE7501 100%)',
                boxShadow: '0 30px 90px rgba(134, 23, 32, 0.35)',
              }}
            >
              {/* Orbital rings via SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid meet" style={{ zIndex: 1 }}>
                {/* Orbital rings */}
                <circle cx="500" cy="400" r="160" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <circle cx="500" cy="400" r="280" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />
              </svg>

              {/* Center nucleus - CEO Photo - LARGE */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute z-20 flex flex-col items-center justify-center"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div
                  className="w-40 h-40 rounded-full overflow-hidden shadow-2xl"
                  style={{
                    border: '4px solid rgba(255,255,255,0.9)',
                    boxShadow: '0 0 0 8px rgba(255,255,255,0.15), 0 20px 60px rgba(0,0,0,0.4)',
                  }}
                >
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Arqueo78_d2742b35.webp"
                    alt="CEO"
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(1.05) contrast(1.1)' }}
                  />
                </div>
                <p className="mt-3 text-white font-bold text-center text-sm tracking-wider">CEO</p>
              </motion.div>

              {/* Executive 1 - Top - Diretora Administrativa e Financeira */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute z-10 flex flex-col items-center justify-center"
                style={{
                  top: '5%',
                  left: '50%',
                  transform: 'translate(-50%, 0)',
                }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg" style={{ border: '3px solid rgba(255,255,255,0.8)', boxShadow: '0 0 0 6px rgba(255,255,255,0.1), 0 10px 30px rgba(0,0,0,0.3)' }}>
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/fernandamelhorada_f9facca9.webp" alt="Diretora Administrativa e Financeira" className="w-full h-full object-cover" />
                </div>
                <p className="mt-2 text-white font-bold text-center text-xs tracking-wider leading-tight" style={{ maxWidth: '110px' }}>Diretora Administrativa e Financeira</p>
              </motion.div>

              {/* Executive 2 - Right - CSO */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="absolute z-10 flex flex-col items-center justify-center"
                style={{
                  top: '42%',
                  right: '3%',
                  transform: 'translateY(-50%)',
                }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg" style={{ border: '3px solid rgba(255,255,255,0.8)', boxShadow: '0 0 0 6px rgba(255,255,255,0.1), 0 10px 30px rgba(0,0,0,0.3)' }}>
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Gerrson_0a84a91a.webp" alt="CSO" className="w-full h-full object-cover" />
                </div>
                <p className="mt-2 text-white font-bold text-center text-xs tracking-wider">CSO</p>
              </motion.div>

              {/* Executive 3 - Bottom - Diretor de Estratégia, Contencioso e Qualidade */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute z-10 flex flex-col items-center justify-center"
                style={{
                  bottom: '3%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg" style={{ border: '3px solid rgba(255,255,255,0.8)', boxShadow: '0 0 0 6px rgba(255,255,255,0.1), 0 10px 30px rgba(0,0,0,0.3)' }}>
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Carlucioportfolio_797c4f70.webp" alt="Diretor de Estratégia, Contencioso e Qualidade" className="w-full h-full object-cover" />
                </div>
                <p className="mt-2 text-white font-bold text-center text-xs tracking-wider leading-tight" style={{ maxWidth: '110px' }}>Diretor de Estratégia, Contencioso e Qualidade</p>
              </motion.div>

              {/* Executive 4 - Left - Tesoureira */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="absolute z-10 flex flex-col items-center justify-center"
                style={{
                  top: '42%',
                  left: '3%',
                  transform: 'translateY(-50%)',
                }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg" style={{ border: '3px solid rgba(255,255,255,0.8)', boxShadow: '0 0 0 6px rgba(255,255,255,0.1), 0 10px 30px rgba(0,0,0,0.3)' }}>
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Laviniaportfolio2_a1d02cd0.webp" alt="Tesoureira" className="w-full h-full object-cover" />
                </div>
                <p className="mt-2 text-white font-bold text-center text-xs tracking-wider">Tesoureira</p>
              </motion.div>

            </motion.div>
          </div>
        </section>
      </div>
    </PortfolioLayout>
  );
}
