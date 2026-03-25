import { ASSETS } from "@/lib/assets";
import { Building2, Globe, BookOpen, Lightbulb, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";

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
      subtitle: "Tecnologia & Dados",
      color: "#2C7EB3",
      logo: ASSETS.logoArqueogis,
      description:
        "Plataforma de tecnologia e gestão de dados geoespaciais aplicados à arqueologia. Desenvolve soluções de geoprocessamento, sensoriamento remoto e sistemas de informação geográfica para projetos arqueológicos.",
      competencias: [
        "Geotecnologias Aplicadas",
        "Inteligência Territorial",
        "Bancos de Dados",
        "Automação de Análises",
        "Visualização Espacial",
      ],
      paperNoEcossistema:
        "Responsável pela transformação digital do grupo, integrando dados e fornecendo inteligência territorial para tomadas de decisão.",
      diferenciais: [
        "Plataformas de SIG customizadas",
        "Análise de dados geoespaciais avançada",
        "Integração de sensoriamento remoto",
      ],
    },
    {
      id: "arqueocean",
      name: "ArqueoOcean",
      subtitle: "Operações Subaquáticas",
      color: "#2C7EB3",
      logo: ASSETS.logoArqueocean,
      description:
        "Divisão especializada em arqueologia subaquática e costeira. Atua em projetos offshore, portuários e de infraestrutura costeira, com equipe certificada em mergulho científico e técnico.",
      competencias: [
        "Diagnóstico Subaquático",
        "Apoio Técnico Offshore",
        "Investigações em Ambientes Aquáticos",
        "Operações Embarcadas",
      ],
      paperNoEcossistema:
        "Especialista em ambientes aquáticos, expandindo a atuação do grupo para setores de energia offshore e infraestrutura costeira.",
      diferenciais: [
        "Certificação em mergulho científico",
        "Operações em águas profundas",
        "Expertise em patrimônio naval",
      ],
    },
    {
      id: "arqueoeduc",
      name: "ArqueoEduc",
      subtitle: "Educação & Comunicação",
      color: "#861720",
      logo: ASSETS.logoArqueoeduc,
      description:
        "Braço educacional e de comunicação social do grupo. Desenvolve programas de educação patrimonial, comunicação social e engajamento comunitário como parte dos processos de licenciamento.",
      competencias: [
        "Educação Patrimonial",
        "Comunicação Estratégica",
        "Engajamento Social",
        "Mediação Institucional",
      ],
      paperNoEcossistema:
        "Responsável pela comunicação institucional e engajamento comunitário, garantindo transparência e valor social dos projetos.",
      diferenciais: [
        "Programas de educação patrimonial inovadores",
        "Comunicação estratégica com stakeholders",
        "Engajamento comunitário estruturado",
      ],
    },
    {
      id: "arqueorrede",
      name: "ArqueoRede",
      subtitle: "Rede Colaborativa",
      color: "#EE7501",
      logo: ASSETS.logoArqueoproject,
      description:
        "Plataforma de rede colaborativa que integra profissionais e instituições do setor arqueológico. Facilita parcerias estratégicas e compartilhamento de conhecimento entre especialistas.",
      competencias: [
        "Integração de Especialistas",
        "Capilaridade Operacional",
        "Apoio Regional",
        "Articulação Técnica em Rede",
      ],
      paperNoEcossistema:
        "Rede que amplia a capilaridade do grupo, conectando especialistas e facilitando operações regionais descentralizadas.",
      diferenciais: [
        "Rede nacional de profissionais",
        "Suporte técnico regionalizado",
        "Parcerias estratégicas consolidadas",
      ],
    },
    {
      id: "sigepa",
      name: "SIGEPA Plus",
      subtitle: "Gestão Integrada",
      color: "#EE7501",
      logo: ASSETS.logoArqueoproject,
      description:
        "Sistema de gestão integrada para projetos arqueológicos. Centraliza informações, facilita colaboração entre equipes e otimiza processos de documentação e relatórios.",
      competencias: [
        "Organização de Dados",
        "Rastreabilidade Operacional",
        "Gestão de Projetos",
        "Padronização de Processos",
      ],
      paperNoEcossistema:
        "Infraestrutura de gestão que integra todas as operações do grupo, garantindo padronização, rastreabilidade e eficiência.",
      diferenciais: [
        "Sistema integrado de gestão de projetos",
        "Padronização de processos operacionais",
        "Rastreabilidade completa de dados",
      ],
    },
  ];

  const nextPilar = () => {
    setCurrentPilarIndex(prev => (prev + 1) % pilares.length);
  };

  const prevPilar = () => {
    setCurrentPilarIndex(prev => (prev - 1 + pilares.length) % pilares.length);
  };

  const goToPilar = (index: number) => {
    setCurrentPilarIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDiagramLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Get selected empresa data
  const selectedEmpresaData = empresas.find(emp => emp.id === selectedEmpresa);

  // CSS para animações
  const animationStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .logo-fade-in {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    .panel-slide {
      animation: slideInRight 0.4s ease-out;
    }
  `;

  return (
    <PortfolioLayout chapterNum="02" chapterTitle="Quem Somos & Ecossistema" prevPath="/" prevLabel="Home" nextPath="/missao-visao" nextLabel="Missão e Valores">
      <div className="min-h-screen bg-white">
        <style>{animationStyles}</style>

        {/* SEÇÃO 1: QUEM SOMOS - Hero */}
        <section className="py-16 lg:py-20 px-4 lg:px-8" style={{ backgroundColor: "#FAFAF9" }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#EE7501" }}>
                  — QUEM SOMOS
                </p>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: "#1A1A1A" }}>
                  Dez anos de <span style={{ color: "#EE7501" }}>excelência</span> em arqueologia
                </h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: "#555555" }}>
                  Há uma década, o Grupo Arqueo une competência técnica, inovação tecnológica e gestão estratégica para oferecer soluções completas em licenciamento sociocultural no Brasil.
                </p>
              </div>
              <div className="flex justify-center">
                <img src={ASSETS.logo10anos} alt="10 Anos Grupo Arqueo" className="h-40 lg:h-56 object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: TIMELINE */}
        <section className="py-16 lg:py-20 px-4 lg:px-8" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-7xl mx-auto">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#EE7501" }}>
              — NOSSA TRAJETÓRIA
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold mb-12" style={{ color: "#1A1A1A" }}>
              Marcos de crescimento
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: item.badgeColor }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold mb-2" style={{ color: item.badgeColor }}>
                        {item.year}
                      </h4>
                      <h5 className="text-lg font-semibold mb-2" style={{ color: "#1A1A1A" }}>
                        {item.title}
                      </h5>
                      <p style={{ color: "#555555" }} className="text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: ECOSSISTEMA - Cabeçalho */}
        <section className="py-16 lg:py-20 px-4 lg:px-8" style={{ backgroundColor: "#FAFAF9" }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-8 lg:gap-12 mb-12">
              <div className="flex-shrink-0">
                <img src={ASSETS.logo10anos} alt="10 Anos Grupo Arqueo" className="h-20 lg:h-28 object-contain" />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: "#1A1A1A" }}>
                  Um ecossistema,<br />múltiplas especialidades
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: ECOSSISTEMA - Layout Principal */}
        <section className="py-12 lg:py-20 px-4 lg:px-8" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Coluna Principal - Diagrama */}
              <div className="lg:col-span-3">
                {/* Diagrama Orbital */}
                <div
                  ref={diagramRef}
                  className="flex justify-center mb-12"
                  style={{
                    opacity: diagramLoaded ? 1 : 0,
                    transform: diagramLoaded ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
                    transition: "opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Semtítulo-6_5e5eb982.webp"
                    alt="Diagrama Orbital Grupo Arqueo"
                    className="w-full max-w-2xl h-auto drop-shadow-lg"
                    onLoad={() => setDiagramLoaded(true)}
                    style={{ pointerEvents: "none" }}
                  />
                </div>

                {/* Navegação Inferior - Cards Clicáveis */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {empresas.map(emp => (
                    <button
                      key={emp.id}
                      onClick={() => setSelectedEmpresa(emp.id)}
                      onMouseEnter={() => setHoveredEmpresa(emp.id)}
                      onMouseLeave={() => setHoveredEmpresa(null)}
                      className="text-left p-4 rounded-lg transition-all duration-300 logo-fade-in"
                      style={{
                        backgroundColor: selectedEmpresa === emp.id ? `${emp.color}15` : "transparent",
                        border: selectedEmpresa === emp.id ? `2px solid ${emp.color}` : `1px solid #E6E6E6`,
                        opacity: hoveredEmpresa === emp.id || selectedEmpresa === emp.id ? 1 : 0.7,
                        transform: hoveredEmpresa === emp.id ? "scale(1.02)" : "scale(1)",
                      }}
                    >
                      <p className="font-bold text-sm" style={{ color: emp.color }}>
                        {emp.name}
                      </p>
                      <p className="text-xs mt-1" style={{ color: "#999999" }}>
                        {emp.subtitle}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Coluna Lateral - Painel Contextual */}
              <div className="lg:col-span-2">
                {selectedEmpresaData ? (
                  <div
                    className="panel-slide sticky top-8 p-6 rounded-xl"
                    style={{ backgroundColor: "#FAFAF9", border: "1px solid #E6E6E6" }}
                  >
                    {/* Logo */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: selectedEmpresaData.color }}
                    >
                      <img src={selectedEmpresaData.logo} alt={selectedEmpresaData.name} className="w-10 h-10 object-contain" />
                    </div>

                    {/* Nome e Subtítulo */}
                    <h3 className="text-xl font-bold mb-1" style={{ color: selectedEmpresaData.color }}>
                      {selectedEmpresaData.name}
                    </h3>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#999999" }}>
                      {selectedEmpresaData.subtitle}
                    </p>

                    {/* Divisor */}
                    <div className="h-px mb-4" style={{ backgroundColor: "#E6E6E6" }} />

                    {/* Descrição */}
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "#555555" }}>
                      {selectedEmpresaData.description}
                    </p>

                    {/* Competências */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#999999" }}>
                        Competências
                      </p>
                      <div className="space-y-2">
                        {selectedEmpresaData.competencias.map((comp, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ backgroundColor: selectedEmpresaData.color }}
                            />
                            <span className="text-sm" style={{ color: "#555555" }}>
                              {comp}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Papel no Ecossistema */}
                    <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: `${selectedEmpresaData.color}10` }}>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: selectedEmpresaData.color }}>
                        Papel no Ecossistema
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "#555555" }}>
                        {selectedEmpresaData.paperNoEcossistema}
                      </p>
                    </div>

                    {/* Diferenciais */}
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#999999" }}>
                        Principais Entregas
                      </p>
                      <div className="space-y-2">
                        {selectedEmpresaData.diferenciais.map((dif, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ backgroundColor: selectedEmpresaData.color }}
                            />
                            <span className="text-sm" style={{ color: "#555555" }}>
                              {dif}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="sticky top-8 p-6 rounded-xl text-center" style={{ backgroundColor: "#FAFAF9", border: "1px solid #E6E6E6" }}>
                    <p style={{ color: "#999999" }}>Selecione uma empresa para ver detalhes</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 5: PILARES DA SINERGIA */}
        <section className="py-16 lg:py-20 px-4 lg:px-8" style={{ backgroundColor: "#FAFAF9" }}>
          <div className="max-w-7xl mx-auto">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#EE7501" }}>
              — PILARES DA SINERGIA
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold mb-12" style={{ color: "#1A1A1A" }}>
              O que sustenta nossa integração
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {pilares.map((pilar, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToPilar(idx)}
                    className="w-full text-left p-6 rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: currentPilarIndex === idx ? "#EE7501" : "#FFFFFF",
                      border: `1px solid ${currentPilarIndex === idx ? "#EE7501" : "#E6E6E6"}`,
                    }}
                  >
                    <p className="text-sm font-bold mb-2" style={{ color: currentPilarIndex === idx ? "#FFFFFF" : "#EE7501" }}>
                      {pilar.num}
                    </p>
                    <h4 className="text-lg font-bold mb-2" style={{ color: currentPilarIndex === idx ? "#FFFFFF" : "#1A1A1A" }}>
                      {pilar.title}
                    </h4>
                    <p style={{ color: currentPilarIndex === idx ? "#FFFFFF" : "#555555" }} className="text-sm">
                      {pilar.desc}
                    </p>
                  </button>
                ))}
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-sm aspect-square rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: "#EE7501" }}>
                  <div className="text-center">
                    <p className="text-6xl font-bold text-white mb-2">{pilares[currentPilarIndex].num}</p>
                    <h4 className="text-2xl font-bold text-white">{pilares[currentPilarIndex].title}</h4>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={prevPilar}
                    className="p-2 rounded-full transition-all"
                    style={{ backgroundColor: "#E6E6E6", color: "#1A1A1A" }}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextPilar}
                    className="p-2 rounded-full transition-all"
                    style={{ backgroundColor: "#E6E6E6", color: "#1A1A1A" }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PortfolioLayout>
  );
}
