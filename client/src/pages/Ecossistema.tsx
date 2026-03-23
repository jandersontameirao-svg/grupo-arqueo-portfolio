'use client';

import { useState, useEffect, useRef } from 'react';
import { ASSETS } from '@/lib/assets';

export default function Ecossistema() {
  const [hoveredEmpresa, setHoveredEmpresa] = useState<number | null>(null);
  const [diagramLoaded, setDiagramLoaded] = useState(false);
  const [selectedEmpresa, setSelectedEmpresa] = useState<string | null>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // Trigger animation when component mounts
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
    @keyframes modalFadeIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    .logo-fade-in {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    .modal-content {
      animation: modalFadeIn 0.3s ease-out;
    }
    .logo-clickable {
      cursor: pointer;
      transition: transform 0.2s ease, filter 0.2s ease;
    }
    .logo-clickable:hover {
      transform: scale(1.05);
      filter: brightness(1.1);
    }
  `;

  return (
    <div className="min-h-screen bg-white">
      <style>{animationStyles}</style>
      
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

          {/* Orbital Diagram - Compact Image with Animation */}
          <div 
            ref={diagramRef}
            className="flex justify-center mb-12"
            style={{
              opacity: diagramLoaded ? 1 : 0,
              transform: diagramLoaded ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
              transition: 'opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Semtítulo-6_5e5eb982.webp"
              alt="Diagrama Orbital Grupo Arqueo"
              className="w-full max-w-2xl h-auto drop-shadow-lg"
              onLoad={() => setDiagramLoaded(true)}
              style={{ pointerEvents: 'none' }}
            />
          </div>

          {/* Enterprise labels below diagram with staggered animation */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {empresas.map((emp, idx) => (
              <div 
                key={emp.id} 
                className="flex flex-col items-center logo-fade-in cursor-pointer group"
                style={{
                  animationDelay: `${0.1 + idx * 0.1}s`,
                }}
                onClick={() => setSelectedEmpresa(emp.id)}
              >
                <p 
                  className="font-bold text-sm lg:text-base transition-all duration-300 group-hover:scale-110"
                  style={{ color: emp.color }}
                >
                  {emp.name}
                </p>
                <p className="text-xs lg:text-sm transition-colors duration-300 group-hover:text-gray-700" style={{ color: '#999999' }}>
                  {emp.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Empresa Blocks */}
      <section className="py-20 lg:py-32 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {empresas.map((emp, idx) => (
            <div 
              key={emp.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              onMouseEnter={() => setHoveredEmpresa(idx)}
              onMouseLeave={() => setHoveredEmpresa(null)}
            >
              {/* Logo/Visual */}
              <div 
                className={`flex justify-center lg:justify-${idx % 2 === 1 ? 'end' : 'start'} ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}
                style={{
                  opacity: hoveredEmpresa === null || hoveredEmpresa === idx ? 1 : 0.5,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <div 
                  className="w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: emp.color }}
                >
                  <img 
                    src={emp.logo} 
                    alt={emp.name}
                    className="w-20 lg:w-24 h-20 lg:h-24 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div 
                style={{
                  opacity: hoveredEmpresa === null || hoveredEmpresa === idx ? 1 : 0.5,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: emp.color }}>
                  {emp.name}
                </h3>
                <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: '#999999' }}>
                  {emp.subtitle}
                </p>
                <p className="text-base lg:text-lg leading-relaxed mb-8" style={{ color: '#555555' }}>
                  {emp.description}
                </p>
                
                {/* Competências */}
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#999999' }}>
                    Competências
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {emp.competencias.map((comp, cidx) => (
                      <span
                        key={cidx}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${emp.color}20`,
                          color: emp.color,
                          border: `1px solid ${emp.color}40`,
                        }}
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visit Button */}
                <button
                  className="mt-8 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                  style={{
                    backgroundColor: emp.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Visitar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sinergia Section */}
      <section className="py-20 lg:py-32 px-4 lg:px-8" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] font-semibold tracking-[0.35em] uppercase" style={{ color: '#EE7501' }}>
              Força Integrada
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3" style={{ color: '#1A1A1A' }}>
              Sinergia que gera valor
            </h2>
          </div>

          {/* 4 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'Integração Técnica',
                desc: 'Soluções complementares que se potencializam mutuamente',
              },
              {
                num: '02',
                title: 'Expertise Consolidada',
                desc: 'Mais de uma década de experiência em arqueologia aplicada',
              },
              {
                num: '03',
                title: 'Inovação Contínua',
                desc: 'Tecnologia e metodologias de ponta em cada especialidade',
              },
              {
                num: '04',
                title: 'Impacto Social',
                desc: 'Compromisso com patrimônio cultural e desenvolvimento sustentável',
              },
            ].map((pilar, idx) => (
              <div key={idx} className="text-center">
                <div 
                  className="text-4xl font-bold mb-4"
                  style={{ color: '#EE7501' }}
                >
                  {pilar.num}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#1A1A1A' }}>
                  {pilar.title}
                </h3>
                <p style={{ color: '#666666' }}>
                  {pilar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedEmpresaData && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedEmpresa(null)}
        >
          <div 
            className="modal-content bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              className="p-8 text-white rounded-t-2xl"
              style={{ backgroundColor: selectedEmpresaData.color }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <img 
                    src={selectedEmpresaData.logo} 
                    alt={selectedEmpresaData.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <button
                  onClick={() => setSelectedEmpresa(null)}
                  className="text-white hover:opacity-80 transition-opacity text-2xl"
                >
                  ✕
                </button>
              </div>
              <h2 className="text-3xl font-bold">{selectedEmpresaData.name}</h2>
              <p className="text-sm font-semibold tracking-widest uppercase mt-2 opacity-90">
                {selectedEmpresaData.subtitle}
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-8">
                <p className="text-base leading-relaxed" style={{ color: '#555555' }}>
                  {selectedEmpresaData.description}
                </p>
              </div>

              {/* Competências */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#999999' }}>
                  Competências
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedEmpresaData.competencias.map((comp, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: `${selectedEmpresaData.color}15`,
                        color: selectedEmpresaData.color,
                        border: `1px solid ${selectedEmpresaData.color}40`,
                      }}
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedEmpresa(null)}
                className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: selectedEmpresaData.color,
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
