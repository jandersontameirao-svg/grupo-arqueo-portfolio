"use client";

import { useState, useEffect, useRef } from "react";
import { ASSETS } from "@/lib/assets";

export default function Ecossistema() {
  const [diagramLoaded, setDiagramLoaded] = useState(false);
  const [selectedEmpresa, setSelectedEmpresa] = useState<string | null>(null);
  const [hoveredEmpresa, setHoveredEmpresa] = useState<string | null>(null);
  const [currentPilarIndex, setCurrentPilarIndex] = useState(0);
  const diagramRef = useRef<HTMLDivElement>(null);

  // Pilares da Sinergia
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

  const nextPilar = () => {
    setCurrentPilarIndex(prev => (prev + 1) % pilares.length);
  };

  const prevPilar = () => {
    setCurrentPilarIndex(prev => (prev - 1 + pilares.length) % pilares.length);
  };

  const goToPilar = (index: number) => {
    setCurrentPilarIndex(index);
  };

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
    <div className="min-h-screen bg-white">
      <style>{animationStyles}</style>

      {/* Cabeçalho da Seção */}
      <section
        className="py-16 lg:py-20 px-4 lg:px-8"
        style={{ backgroundColor: "#FAFAF9" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Título com Logo ao Lado */}
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Logo 10 Anos */}
            <div className="flex-shrink-0">
              <img
                src={ASSETS.logo10anos}
                alt="10 Anos Grupo Arqueo"
                className="h-20 lg:h-28 object-contain"
              />
            </div>

            {/* Título */}
            <div>
              <h1
                className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                style={{ color: "#1A1A1A" }}
              >
                Um ecossistema,
                <br />
                múltiplas especialidades
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Layout Principal - Assimétrico */}
      <section
        className="py-12 lg:py-20 px-4 lg:px-8"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Coluna Principal - Diagrama (Maior) */}
            <div className="lg:col-span-3">
              {/* Diagrama Orbital */}
              <div
                ref={diagramRef}
                className="flex justify-center mb-12"
                style={{
                  opacity: diagramLoaded ? 1 : 0,
                  transform: diagramLoaded
                    ? "scale(1) translateY(0)"
                    : "scale(0.95) translateY(20px)",
                  transition:
                    "opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
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
                      backgroundColor:
                        selectedEmpresa === emp.id
                          ? `${emp.color}15`
                          : "transparent",
                      border:
                        selectedEmpresa === emp.id
                          ? `2px solid ${emp.color}`
                          : `1px solid #E6E6E6`,
                      opacity:
                        hoveredEmpresa === emp.id || selectedEmpresa === emp.id
                          ? 1
                          : 0.7,
                      transform:
                        hoveredEmpresa === emp.id ? "scale(1.02)" : "scale(1)",
                    }}
                  >
                    <p
                      className="font-bold text-sm"
                      style={{ color: emp.color }}
                    >
                      {emp.name}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#999999" }}>
                      {emp.subtitle}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Coluna Lateral - Painel Contextual (Menor) */}
            <div className="lg:col-span-2">
              {selectedEmpresaData ? (
                <div
                  className="panel-slide sticky top-8 p-6 rounded-xl"
                  style={{
                    backgroundColor: "#FAFAF9",
                    border: "1px solid #E6E6E6",
                  }}
                >
                  {/* Logo */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: selectedEmpresaData.color }}
                  >
                    <img
                      src={selectedEmpresaData.logo}
                      alt={selectedEmpresaData.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Nome e Subtítulo */}
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: selectedEmpresaData.color }}
                  >
                    {selectedEmpresaData.name}
                  </h3>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{ color: "#999999" }}
                  >
                    {selectedEmpresaData.subtitle}
                  </p>

                  {/* Divisor */}
                  <div
                    className="h-px mb-4"
                    style={{ backgroundColor: "#E6E6E6" }}
                  />

                  {/* Descrição */}
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "#555555" }}
                  >
                    {selectedEmpresaData.description}
                  </p>

                  {/* Competências */}
                  <div className="mb-6">
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-3"
                      style={{ color: "#999999" }}
                    >
                      Competências
                    </p>
                    <div className="space-y-2">
                      {selectedEmpresaData.competencias.map((comp, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{
                              backgroundColor: selectedEmpresaData.color,
                            }}
                          />
                          <span
                            className="text-sm"
                            style={{ color: "#555555" }}
                          >
                            {comp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Papel no Ecossistema */}
                  <div
                    className="mb-6 p-4 rounded-lg"
                    style={{
                      backgroundColor: `${selectedEmpresaData.color}10`,
                    }}
                  >
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-2"
                      style={{ color: selectedEmpresaData.color }}
                    >
                      Papel no Ecossistema
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#555555" }}
                    >
                      {selectedEmpresaData.paperNoEcossistema}
                    </p>
                  </div>

                  {/* Diferenciais */}
                  <div>
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-3"
                      style={{ color: "#999999" }}
                    >
                      Principais Entregas
                    </p>
                    <div className="space-y-2">
                      {selectedEmpresaData.diferenciais.map((dif, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{
                              backgroundColor: selectedEmpresaData.color,
                            }}
                          />
                          <span
                            className="text-sm"
                            style={{ color: "#555555" }}
                          >
                            {dif}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botão Fechar */}
                  <button
                    onClick={() => setSelectedEmpresa(null)}
                    className="w-full mt-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                    style={{
                      backgroundColor: selectedEmpresaData.color,
                      color: "white",
                    }}
                  >
                    Fechar
                  </button>
                </div>
              ) : (
                <div
                  className="sticky top-8 p-6 rounded-xl text-center"
                  style={{
                    backgroundColor: "#FAFAF9",
                    border: "1px solid #E6E6E6",
                  }}
                >
                  <p
                    className="text-lg font-bold mb-2"
                    style={{ color: "#1A1A1A" }}
                  >
                    Selecione uma empresa
                  </p>
                  <p className="text-sm" style={{ color: "#666666" }}>
                    Clique em qualquer unidade do diagrama ou nos cards abaixo
                    para explorar suas competências e papel no ecossistema.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sinergia Section - Carousel Premium */}
      <section
        className="py-20 lg:py-32 px-4 lg:px-8"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span
              className="text-[11px] font-semibold tracking-[0.35em] uppercase"
              style={{ color: "#EE7501" }}
            >
              Forca Integrada
            </span>
            <h2
              className="text-3xl lg:text-4xl xl:text-5xl font-bold mt-4"
              style={{ color: "#1A1A1A" }}
            >
              Sinergia que gera valor
            </h2>
          </div>

          {/* Layout Assimetrico - Cards com Fotos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1 - Grande com Borda Laranja */}
            <div className="lg:row-span-2">
              <div
                className="h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-l-8"
                style={{
                  borderLeftColor: "#EE7501",
                  backgroundColor: "#FFFFFF",
                }}
              >
                {/* Foto */}
                <div className="w-full h-72 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundColor: "#EE7501" }} />
                  <div className="text-center relative z-10">
                    <div
                      className="text-7xl font-bold"
                      style={{ color: "#EE7501" }}
                    >
                      01
                    </div>
                    <p className="text-xs mt-3 tracking-widest uppercase" style={{ color: "#999999" }}>
                      Espaco para foto
                    </p>
                  </div>
                </div>
                {/* Conteudo */}
                <div className="p-10">
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: "#1A1A1A" }}
                  >
                    {pilares[0].title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#666666" }}
                  >
                    {pilares[0].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Vermelho Vinho */}
            <div>
              <div
                className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-l-8"
                style={{
                  borderLeftColor: "#861720",
                  backgroundColor: "#FFFFFF",
                }}
              >
                {/* Foto */}
                <div className="w-full h-56 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundColor: "#861720" }} />
                  <div className="text-center relative z-10">
                    <div
                      className="text-6xl font-bold"
                      style={{ color: "#861720" }}
                    >
                      02
                    </div>
                    <p className="text-xs mt-3 tracking-widest uppercase" style={{ color: "#999999" }}>
                      Espaco para foto
                    </p>
                  </div>
                </div>
                {/* Conteudo */}
                <div className="p-8">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#1A1A1A" }}
                  >
                    {pilares[1].title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#666666" }}
                  >
                    {pilares[1].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Azul */}
            <div>
              <div
                className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-l-8"
                style={{
                  borderLeftColor: "#2C7EB3",
                  backgroundColor: "#FFFFFF",
                }}
              >
                {/* Foto */}
                <div className="w-full h-56 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundColor: "#2C7EB3" }} />
                  <div className="text-center relative z-10">
                    <div
                      className="text-6xl font-bold"
                      style={{ color: "#2C7EB3" }}
                    >
                      03
                    </div>
                    <p className="text-xs mt-3 tracking-widest uppercase" style={{ color: "#999999" }}>
                      Espaco para foto
                    </p>
                  </div>
                </div>
                {/* Conteudo */}
                <div className="p-8">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#1A1A1A" }}
                  >
                    {pilares[2].title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#666666" }}
                  >
                    {pilares[2].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Amarelo Ouro */}
            <div>
              <div
                className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-l-8"
                style={{
                  borderLeftColor: "#FFD700",
                  backgroundColor: "#FFFFFF",
                }}
              >
                {/* Foto */}
                <div className="w-full h-56 bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundColor: "#FFD700" }} />
                  <div className="text-center relative z-10">
                    <div
                      className="text-6xl font-bold"
                      style={{ color: "#FFD700" }}
                    >
                      04
                    </div>
                    <p className="text-xs mt-3 tracking-widest uppercase" style={{ color: "#999999" }}>
                      Espaco para foto
                    </p>
                  </div>
                </div>
                {/* Conteudo */}
                <div className="p-8">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#1A1A1A" }}
                  >
                    {pilares[3].title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#666666" }}
                  >
                    {pilares[3].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
