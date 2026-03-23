import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

/**
 * ECOSSISTEMA — Página 04 (REDESIGN PREMIUM EDITORIAL)
 * Design: Institucional premium, editorial, sofisticado
 * Conceito: Grupo Arqueo como núcleo central de um ecossistema integrado
 * SEM framer-motion — usando CSS animations nativas
 */

const empresas = [
  {
    id: "arqueoproject",
    name: "Arqueoproject",
    logo: ASSETS.logoArqueoproject,
    tagline: "Pesquisa Arqueológica e Consultoria",
    color: "#EE7501",
    colorSoft: "rgba(238,117,1,0.08)",
    url: "https://www.arqueoproject.com.br",
    desc: "Empresa-mãe do grupo, especializada em pesquisa arqueológica preventiva e consultoria para licenciamento sociocultural. Atua em todo o ciclo de gestão arqueológica, desde o diagnóstico até o resgate e monitoramento.",
    competencias: ["Diagnóstico Arqueológico", "Prospecção e Resgate", "Monitoramento Arqueológico", "Laudos e Relatórios Técnicos", "Gestão de Acervo"],
    position: "Pesquisa & Consultoria",
  },
  {
    id: "arqueogis",
    name: "ArqueoGIS",
    logo: ASSETS.logoArqueogis,
    tagline: "Tecnologia e Dados Geoespaciais",
    color: "#861720",
    colorSoft: "rgba(134,23,32,0.08)",
    url: "https://www.arqueogis.com.br",
    desc: "Plataforma de tecnologia e gestão de dados geoespaciais aplicados à arqueologia. Desenvolve soluções de geoprocessamento, sensoriamento remoto e sistemas de informação geográfica para projetos arqueológicos.",
    competencias: ["Geoprocessamento", "Sensoriamento Remoto", "SIG Arqueológico", "Modelagem 3D", "Banco de Dados Espaciais"],
    position: "Tecnologia & Dados",
  },
  {
    id: "arqueocean",
    name: "ArqueoOcean",
    logo: ASSETS.logoArqueocean,
    tagline: "Arqueologia Subaquática",
    color: "#2C7EB3",
    colorSoft: "rgba(44,126,179,0.08)",
    url: "https://www.arqueocean.com.br",
    desc: "Divisão especializada em arqueologia subaquática e costeira. Atua em projetos offshore, portuários e de infraestrutura costeira, com equipe certificada em mergulho científico e técnico.",
    competencias: ["Arqueologia Subaquática", "Prospecção Costeira", "Levantamento Offshore", "Mergulho Científico", "Patrimônio Naval"],
    position: "Operações Subaquáticas",
  },
  {
    id: "arqueoeduc",
    name: "ArqueoEduc",
    logo: ASSETS.logoArqueoeduc,
    tagline: "Educação Patrimonial e Comunicação",
    color: "#C0392B",
    colorSoft: "rgba(192,57,43,0.08)",
    url: "https://www.arqueoeduc.com.br",
    desc: "Braço educacional e de comunicação social do grupo. Desenvolve programas de educação patrimonial, comunicação social e engajamento comunitário como parte dos processos de licenciamento.",
    competencias: ["Educação Patrimonial", "Comunicação Social", "Engajamento Comunitário", "Produção de Conteúdo", "Programas Educativos"],
    position: "Educação & Comunicação",
  },
];

const eixosSinergia = [
  { label: "Especialização Técnica", desc: "Cada empresa domina sua área com profundidade e excelência operacional." },
  { label: "Capacidade Operacional", desc: "Estrutura integrada que amplia escala e eficiência em projetos complexos." },
  { label: "Inovação Aplicada", desc: "Tecnologia e metodologias avançadas em todas as frentes de atuação." },
  { label: "Integração Estratégica", desc: "Visão compartilhada que transforma especialidades em soluções completas." },
];

const sinergiaColors = ['#EE7501', '#861720', '#2C7EB3', '#C0392B'];

export default function Ecossistema() {
  const [hoveredEmpresa, setHoveredEmpresa] = useState<number | null>(null);

  return (
    <PortfolioLayout
      chapterNum="04"
      chapterTitle="Ecossistema do Grupo"
      prevPath="/missao-visao"
      prevLabel="Missão, Visão e Valores"
      nextPath="/solucoes"
      nextLabel="Soluções"
    >

      {/* ═══════════════════ 1. HERO INSTITUCIONAL ═══════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#FAFAF8' }}>
        {/* Top tricolor line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] flex">
          <div className="flex-1" style={{ backgroundColor: '#861720' }} />
          <div className="flex-1" style={{ backgroundColor: '#EE7501' }} />
          <div className="flex-1" style={{ backgroundColor: '#2C7EB3' }} />
        </div>

        {/* Subtle geometric accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 30%, #861720 0%, transparent 50%),
                              radial-gradient(circle at 30% 70%, #EE7501 0%, transparent 50%)`,
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[2px] rounded-full" style={{ backgroundColor: '#861720' }} />
              <span className="text-[11px] font-semibold tracking-[0.35em] uppercase" style={{ color: '#861720' }}>
                Ecossistema
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] mb-8" style={{ color: '#1A1A1A' }}>
              Quatro empresas,{' '}
              <span style={{ color: '#EE7501' }}>uma visão<br />integrada</span>
            </h1>

            <p className="text-lg lg:text-xl font-light leading-relaxed mb-6" style={{ color: '#555' }}>
              O Grupo Arqueo articula empresas com expertises complementares para oferecer soluções integradas em arqueologia preventiva, patrimônio cultural, inovação aplicada e desenvolvimento técnico.
            </p>

            <div className="w-16 h-[2px] rounded-full" style={{ backgroundColor: '#E0DDD8' }} />
          </div>
        </div>
      </section>


      {/* ═══════════════════ 2. DIAGRAMA ORBITAL ═══════════════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: '#F5F4F0' }}>
        <div className="container relative z-10">
          {/* Section header */}
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-[11px] font-semibold tracking-[0.35em] uppercase" style={{ color: '#EE7501' }}>
              Estrutura Integrada
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3" style={{ color: '#1A1A1A' }}>
              Um ecossistema, múltiplas especialidades
            </h2>
          </div>

          {/* Orbital diagram */}
          <div className="relative mx-auto" style={{ maxWidth: '680px', aspectRatio: '1' }}>
            {/* Orbit rings */}
            <div className="absolute inset-[5%] rounded-full" style={{ border: '1.5px solid rgba(134,23,32,0.1)' }} />
            <div className="absolute inset-[15%] rounded-full" style={{ border: '1px solid rgba(134,23,32,0.07)' }} />
            <div className="absolute inset-[28%] rounded-full" style={{ border: '1px dashed rgba(134,23,32,0.05)' }} />

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 680 680" fill="none">
              <line x1="340" y1="340" x2="340" y2="55" stroke="rgba(134,23,32,0.08)" strokeWidth="1" strokeDasharray="4 6" />
              <line x1="340" y1="340" x2="625" y2="340" stroke="rgba(134,23,32,0.08)" strokeWidth="1" strokeDasharray="4 6" />
              <line x1="340" y1="340" x2="340" y2="625" stroke="rgba(134,23,32,0.08)" strokeWidth="1" strokeDasharray="4 6" />
              <line x1="340" y1="340" x2="55" y2="340" stroke="rgba(134,23,32,0.08)" strokeWidth="1" strokeDasharray="4 6" />
            </svg>

            {/* CENTER — Grupo Arqueo nucleus */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div
                className="w-36 h-36 lg:w-44 lg:h-44 rounded-full flex flex-col items-center justify-center"
                style={{
                  background: 'linear-gradient(145deg, #861720, #6B1219)',
                  boxShadow: '0 20px 60px rgba(134,23,32,0.25), 0 0 0 8px rgba(134,23,32,0.08), 0 0 0 16px rgba(134,23,32,0.04)',
                }}
              >
                <img
                  src={ASSETS.logoGrupoArqueo}
                  alt="Grupo Arqueo"
                  className="h-10 lg:h-12 w-auto brightness-0 invert mb-2"
                />
                <span className="text-[9px] lg:text-[10px] font-semibold tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Núcleo
                </span>
              </div>
            </div>

            {/* EMPRESA NODES */}
            {[
              { idx: 0, top: '2%', left: '50%', tx: '-50%', ty: '0' },
              { idx: 1, top: '50%', left: '88%', tx: '-50%', ty: '-50%' },
              { idx: 2, top: '85%', left: '50%', tx: '-50%', ty: '-50%' },
              { idx: 3, top: '50%', left: '2%', tx: '0', ty: '-50%' },
            ].map(({ idx, top, left, tx, ty }) => {
              const emp = empresas[idx];
              const isHovered = hoveredEmpresa === idx;
              return (
                <div
                  key={emp.id}
                  className="absolute z-10 cursor-pointer"
                  style={{
                    top, left,
                    transform: `translate(${tx}, ${ty})`,
                    transition: 'all 0.4s ease',
                  }}
                  onMouseEnter={() => setHoveredEmpresa(idx)}
                  onMouseLeave={() => setHoveredEmpresa(null)}
                >
                  <div
                    className="flex flex-col items-center gap-2"
                    style={{
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.4s ease',
                    }}
                  >
                    <div
                      className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: emp.color,
                        boxShadow: isHovered
                          ? `0 12px 40px ${emp.color}50, 0 0 0 4px ${emp.color}30`
                          : `0 4px 20px ${emp.color}25, 0 0 0 4px ${emp.color}10`,
                        transition: 'all 0.4s ease',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                      }}
                    >
                      <img
                        src={emp.logo}
                        alt={emp.name}
                        className="h-8 lg:h-10 w-auto"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xs lg:text-sm font-bold" style={{ color: isHovered ? emp.color : '#1A1A1A', transition: 'color 0.4s ease' }}>
                        {emp.name}
                      </p>
                      <p className="text-[9px] lg:text-[10px] font-medium tracking-wide" style={{ color: '#999' }}>
                        {emp.position}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Explanatory text */}
          <div className="max-w-2xl mx-auto text-center mt-16">
            <p className="text-base lg:text-lg font-light leading-relaxed" style={{ color: '#666' }}>
              O Grupo Arqueo estrutura sua atuação por meio de empresas especializadas, capazes de operar de forma complementar, ampliando eficiência, profundidade técnica e capacidade de entrega em diferentes frentes do patrimônio cultural.
            </p>
          </div>
        </div>
      </section>


      {/* ═══════════════════ 3. APRESENTAÇÃO EDITORIAL DAS EMPRESAS ═══════════════════ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container">
          {/* Section header */}
          <div className="mb-16 lg:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] rounded-full" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-[11px] font-semibold tracking-[0.35em] uppercase" style={{ color: '#EE7501' }}>
                Nossas Empresas
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: '#1A1A1A' }}>
              Especialização que se{' '}
              <span style={{ color: '#861720' }}>complementa</span>
            </h2>
          </div>

          {/* Editorial blocks — alternating layout */}
          <div className="space-y-12 lg:space-y-16">
            {empresas.map((emp, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={emp.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch`}
                >
                  {/* Main content card */}
                  <div className={`${isEven ? 'lg:col-span-8 lg:col-start-1' : 'lg:col-span-8 lg:col-start-5'} ${isEven ? 'order-2 lg:order-1' : 'order-2'}`}>
                    <div
                      className="rounded-2xl p-8 lg:p-10 h-full relative overflow-hidden group"
                      style={{
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 2px 24px rgba(0,0,0,0.04)',
                        borderLeft: `4px solid ${emp.color}`,
                      }}
                    >
                      {/* Subtle hover accent */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        style={{
                          background: `linear-gradient(135deg, ${emp.colorSoft}, transparent 60%)`,
                          transition: 'opacity 0.6s ease',
                        }}
                      />

                      <div className="relative z-10">
                        {/* Company header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div
                              className="w-14 h-14 rounded-xl flex items-center justify-center"
                              style={{ backgroundColor: emp.colorSoft }}
                            >
                              <img src={emp.logo} alt={emp.name} className="h-8 w-auto" />
                            </div>
                            <div>
                              <h3 className="text-xl lg:text-2xl font-bold" style={{ color: '#1A1A1A' }}>
                                {emp.name}
                              </h3>
                              <p className="text-sm font-medium" style={{ color: emp.color }}>
                                {emp.tagline}
                              </p>
                            </div>
                          </div>
                          <a
                            href={emp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full"
                            style={{
                              color: emp.color,
                              backgroundColor: emp.colorSoft,
                              transition: 'all 0.3s ease',
                            }}
                          >
                            Visitar <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        {/* Separator */}
                        <div className="w-full h-px mb-6" style={{ backgroundColor: 'rgba(0,0,0,0.06)' }} />

                        {/* Description */}
                        <p className="text-base font-light leading-relaxed mb-6" style={{ color: '#555' }}>
                          {emp.desc}
                        </p>

                        {/* Mobile link */}
                        <a
                          href={emp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="lg:hidden inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full"
                          style={{ color: emp.color, backgroundColor: emp.colorSoft }}
                        >
                          Visitar site <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Competências card */}
                  <div className={`${isEven ? 'lg:col-span-4 lg:col-start-9' : 'lg:col-span-4 lg:col-start-1'} ${isEven ? 'order-1 lg:order-2' : 'order-1'}`}>
                    <div
                      className="rounded-2xl p-8 h-full flex flex-col justify-center"
                      style={{ backgroundColor: emp.color }}
                    >
                      <span className="text-[10px] font-semibold tracking-[0.25em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        Competências
                      </span>
                      <div className="space-y-2.5">
                        {emp.competencias.map((comp, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-3 py-2.5 px-4 rounded-lg"
                            style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }} />
                            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>{comp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ═══════════════════ 4. SINERGIA ═══════════════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: '#2A2A2A' }}>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="text-[11px] font-semibold tracking-[0.35em] uppercase" style={{ color: '#EE7501' }}>
              Sinergia
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3" style={{ color: '#FFFFFF' }}>
              O valor da <span style={{ color: '#EE7501' }}>integração</span>
            </h2>
            <p className="text-base font-light mt-4 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
              A força do Grupo Arqueo reside na complementaridade coordenada entre suas empresas.
            </p>
          </div>

          {/* 4 eixos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eixosSinergia.map((eixo, i) => {
              const color = sinergiaColors[i];
              return (
                <div key={i} className="group">
                  <div
                    className="rounded-xl p-7 h-full group-hover:-translate-y-1"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      borderTop: `3px solid ${color}`,
                      transition: 'transform 0.4s ease',
                    }}
                  >
                    <span className="text-3xl font-bold" style={{ color: `${color}50` }}>
                      0{i + 1}
                    </span>
                    <h4 className="text-base font-bold mt-3 mb-3" style={{ color: '#FFFFFF' }}>
                      {eixo.label}
                    </h4>
                    <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {eixo.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Logo strip */}
          <div
            className="flex items-center justify-center gap-10 lg:gap-16 mt-16 pt-10"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            {empresas.map((emp) => (
              <img
                key={emp.id}
                src={emp.logo}
                alt={emp.name}
                className="h-5 lg:h-7 w-auto brightness-0 invert"
                style={{
                  opacity: 0.3,
                  transition: 'opacity 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.3')}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════ 5. FECHAMENTO INSTITUCIONAL ═══════════════════ */}
      <section className="relative py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Decorative quote marks */}
            <div className="flex justify-center mb-6">
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                <path d="M0 32V19.2C0 13.6 1.2 9.2 3.6 6C6 2.8 9.6 0.8 14.4 0L16 4C13.2 4.8 11.2 6 10 7.6C8.8 9.2 8.2 11 8.2 13H16V32H0ZM24 32V19.2C24 13.6 25.2 9.2 27.6 6C30 2.8 33.6 0.8 38.4 0L40 4C37.2 4.8 35.2 6 34 7.6C32.8 9.2 32.2 11 32.2 13H40V32H24Z" fill="#EE7501" fillOpacity="0.2" />
              </svg>
            </div>

            <p className="text-xl lg:text-2xl font-semibold leading-relaxed mb-8" style={{ color: '#2A2A2A' }}>
              Mais do que empresas distintas, um{' '}
              <span style={{ color: '#861720' }}>sistema integrado</span> de inteligência, execução e visão de futuro.
            </p>

            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px" style={{ backgroundColor: '#E0DDD8' }} />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase" style={{ color: '#999' }}>
                Grupo Arqueo
              </span>
              <div className="w-8 h-px" style={{ backgroundColor: '#E0DDD8' }} />
            </div>
          </div>
        </div>
      </section>

    </PortfolioLayout>
  );
}
