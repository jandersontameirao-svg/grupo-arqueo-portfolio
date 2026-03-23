'use client';

import { useState } from 'react';
import { ASSETS } from '@/lib/assets';

export default function Ecossistema() {
  const [hoveredEmpresa, setHoveredEmpresa] = useState<number | null>(null);

  // 6 empresas no ecossistema
  const empresas = [
    {
      id: 'arqueoproject',
      name: 'Arqueoproject',
      subtitle: 'Pesquisa & Consultoria',
      color: '#861720',
      logo: ASSETS.logoArqueoproject,
      description: 'Empresa-mãe do grupo, especializada em pesquisa arqueológica preventiva e consultoria para licenciamento sociocultural. Atua em todo o ciclo de gestão arqueológica, desde o diagnóstico até o resgate e monitoramento.',
      competencias: ['Diagnóstico Arqueológico', 'Prospecção e Resgate', 'Monitoramento Arqueológico', 'Laudos e Relatórios Técnicos', 'Gestão de Acervo'],
    },
    {
      id: 'arqueogis',
      name: 'ArqueoGIS',
      subtitle: 'Tecnologia & Dados',
      color: '#2C7EB3',
      logo: ASSETS.logoArqueogis,
      description: 'Plataforma de tecnologia e gestão de dados geoespaciais aplicados à arqueologia. Desenvolve soluções de geoprocessamento, sensoriamento remoto e sistemas de informação geográfica para projetos arqueológicos.',
      competencias: ['Geoprocessamento', 'Sensoriamento Remoto', 'SIG Arqueológico', 'Modelagem 3D', 'Banco de Dados Espaciais'],
    },
    {
      id: 'arqueocean',
      name: 'ArqueoOcean',
      subtitle: 'Operações Subaquáticas',
      color: '#2C7EB3',
      logo: ASSETS.logoArqueocean,
      description: 'Divisão especializada em arqueologia subaquática e costeira. Atua em projetos offshore, portuários e de infraestrutura costeira, com equipe certificada em mergulho científico e técnico.',
      competencias: ['Arqueologia Subaquática', 'Prospecção Costeira', 'Levantamento Offshore', 'Mergulho Científico', 'Patrimônio Naval'],
    },
    {
      id: 'arqueoeduc',
      name: 'ArqueoEduc',
      subtitle: 'Educação & Comunicação',
      color: '#861720',
      logo: ASSETS.logoArqueoeduc,
      description: 'Braço educacional e de comunicação social do grupo. Desenvolve programas de educação patrimonial, comunicação social e engajamento comunitário como parte dos processos de licenciamento.',
      competencias: ['Educação Patrimonial', 'Comunicação Social', 'Engajamento Comunitário', 'Produção de Conteúdo', 'Programas Educativos'],
    },
    {
      id: 'arqueorrede',
      name: 'ArqueoRede',
      subtitle: 'Rede Colaborativa',
      color: '#EE7501',
      logo: ASSETS.logoArqueoproject,
      description: 'Plataforma de rede colaborativa que integra profissionais e instituições do setor arqueológico. Facilita parcerias estratégicas e compartilhamento de conhecimento entre especialistas.',
      competencias: ['Networking', 'Colaboração Estratégica', 'Compartilhamento de Conhecimento', 'Parcerias', 'Integração'],
    },
    {
      id: 'sigepa',
      name: 'SIGEPA Plus',
      subtitle: 'Gestão Integrada',
      color: '#EE7501',
      logo: ASSETS.logoArqueoproject,
      description: 'Sistema de gestão integrada para projetos arqueológicos. Centraliza informações, facilita colaboração entre equipes e otimiza processos de documentação e relatórios.',
      competencias: ['Gestão de Projetos', 'Documentação', 'Relatórios', 'Colaboração', 'Integração de Dados'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Orbital Diagram Section */}
      <section className="py-20 lg:py-32 px-4 lg:px-8" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] font-semibold tracking-[0.35em] uppercase" style={{ color: '#EE7501' }}>
              Estrutura Integrada
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3" style={{ color: '#1A1A1A' }}>
              Um ecossistema, múltiplas especialidades
            </h2>
          </div>

          {/* Orbital Diagram - Compact Image */}
          <div className="flex justify-center mb-12">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Semtítulo-6_5e5eb982.webp"
              alt="Diagrama Orbital Grupo Arqueo"
              className="w-full max-w-2xl h-auto drop-shadow-lg"
            />
          </div>

          {/* Enterprise labels below diagram */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {empresas.map((emp, idx) => (
              <div key={emp.id} className="flex flex-col items-center">
                <p className="font-bold text-sm lg:text-base" style={{ color: emp.color }}>
                  {emp.name}
                </p>
                <p className="text-xs lg:text-sm" style={{ color: '#999999' }}>
                  {emp.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration description */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base lg:text-lg" style={{ color: '#666666' }}>
            O Grupo Arqueo estrutura sua atuação por meio de empresas especializadas, capazes de operar de forma complementar, ampliando eficiência, profundidade técnica e capacidade de entrega em diferentes frentes do patrimônio cultural.
          </p>
        </div>
      </section>

      {/* Empresas Details Section */}
      <section className="py-20 lg:py-32 px-4 lg:px-8" style={{ backgroundColor: '#F8F7F5' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] font-semibold tracking-[0.35em] uppercase" style={{ color: '#EE7501' }}>
              Nossas Empresas
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3" style={{ color: '#1A1A1A' }}>
              Especialização que se complementa
            </h2>
          </div>

          {/* Editorial blocks for each empresa */}
          <div className="space-y-16">
            {empresas.map((emp, idx) => (
              <div key={emp.id} className={`grid lg:grid-cols-2 gap-8 items-start ${idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: '#1A1A1A' }}>
                      {emp.name}
                    </h3>
                    <p className="text-sm lg:text-base" style={{ color: emp.color }}>
                      {emp.subtitle}
                    </p>
                  </div>

                  <p className="text-base lg:text-lg mb-8" style={{ color: '#666666' }}>
                    {emp.description}
                  </p>

                  <div>
                    <p className="text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#999999' }}>
                      Competências
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {emp.competencias.map((comp, cidx) => (
                        <span
                          key={cidx}
                          className="px-3 py-1.5 text-xs lg:text-sm rounded-full"
                          style={{
                            backgroundColor: `${emp.color}15`,
                            color: emp.color,
                            border: `1px solid ${emp.color}30`,
                          }}
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-block mt-8 px-6 py-3 rounded-lg font-semibold text-sm transition-all"
                    style={{
                      backgroundColor: emp.color,
                      color: '#FFFFFF',
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.opacity = '0.9';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.opacity = '1';
                    }}
                  >
                    Visitar
                  </a>
                </div>

                {/* Logo/Visual */}
                <div className={`flex items-center justify-center ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div
                    className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${emp.color}10`,
                      border: `2px solid ${emp.color}20`,
                    }}
                  >
                    <img src={emp.logo} alt={emp.name} className="w-32 h-32 lg:w-40 lg:h-40 object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sinergia Section */}
      <section className="py-20 lg:py-32 px-4 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] font-semibold tracking-[0.35em] uppercase" style={{ color: '#EE7501' }}>
              Sinergia
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3 mb-6" style={{ color: '#1A1A1A' }}>
              O valor da integração
            </h2>
            <p className="text-base lg:text-lg max-w-2xl mx-auto" style={{ color: '#666666' }}>
              A força do Grupo Arqueo reside na complementaridade coordenada entre suas empresas.
            </p>
          </div>

          {/* 4 Pillars */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                num: '01',
                title: 'Especialização Técnica',
                desc: 'Cada empresa domina sua área com profundidade e excelência operacional.',
              },
              {
                num: '02',
                title: 'Capacidade Operacional',
                desc: 'Estrutura integrada que amplia escala e eficiência em projetos complexos.',
              },
              {
                num: '03',
                title: 'Inovação Aplicada',
                desc: 'Tecnologia e metodologias avançadas em todas as frentes de atuação.',
              },
              {
                num: '04',
                title: 'Integração Estratégica',
                desc: 'Visão compartilhada que transforma especialidades em soluções completas.',
              },
            ].map((pilar, idx) => (
              <div key={idx} className="p-8 rounded-lg" style={{ backgroundColor: '#F8F7F5' }}>
                <p className="text-4xl font-bold mb-3" style={{ color: '#EE7501' }}>
                  {pilar.num}
                </p>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#1A1A1A' }}>
                  {pilar.title}
                </h3>
                <p style={{ color: '#666666' }}>{pilar.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg lg:text-xl font-semibold" style={{ color: '#1A1A1A' }}>
              Mais do que empresas distintas, um sistema integrado de inteligência, execução e visão de futuro.
            </p>
            <p className="text-sm lg:text-base mt-4" style={{ color: '#EE7501' }}>
              GRUPO ARQUEO
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
