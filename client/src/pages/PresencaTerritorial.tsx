'use client';

import { useState } from 'react';

interface Estado {
  sigla: string;
  nome: string;
  ativo: boolean;
  projetos: number;
  regiao: string;
}

export default function PresencaTerritorial() {
  const [estadoSelecionado, setEstadoSelecionado] = useState<Estado | null>(null);

  // Dados dos 24 estados onde o Grupo Arqueo atua
  const estados: Estado[] = [
    // Região Norte
    { sigla: 'AM', nome: 'Amazonas', ativo: true, projetos: 3, regiao: 'Norte' },
    { sigla: 'AP', nome: 'Amapá', ativo: true, projetos: 1, regiao: 'Norte' },
    { sigla: 'PA', nome: 'Pará', ativo: true, projetos: 2, regiao: 'Norte' },
    { sigla: 'TO', nome: 'Tocantins', ativo: true, projetos: 2, regiao: 'Norte' },
    
    // Região Nordeste
    { sigla: 'MA', nome: 'Maranhão', ativo: true, projetos: 16, regiao: 'Nordeste' },
    { sigla: 'PI', nome: 'Piauí', ativo: true, projetos: 2, regiao: 'Nordeste' },
    { sigla: 'CE', nome: 'Ceará', ativo: true, projetos: 1, regiao: 'Nordeste' },
    { sigla: 'RN', nome: 'Rio Grande do Norte', ativo: true, projetos: 1, regiao: 'Nordeste' },
    { sigla: 'PB', nome: 'Paraíba', ativo: true, projetos: 1, regiao: 'Nordeste' },
    { sigla: 'PE', nome: 'Pernambuco', ativo: true, projetos: 4, regiao: 'Nordeste' },
    { sigla: 'AL', nome: 'Alagoas', ativo: true, projetos: 1, regiao: 'Nordeste' },
    { sigla: 'BA', nome: 'Bahia', ativo: true, projetos: 5, regiao: 'Nordeste' },
    
    // Região Centro-Oeste
    { sigla: 'MT', nome: 'Mato Grosso', ativo: true, projetos: 3, regiao: 'Centro-Oeste' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul', ativo: true, projetos: 6, regiao: 'Centro-Oeste' },
    { sigla: 'GO', nome: 'Goiás', ativo: true, projetos: 1, regiao: 'Centro-Oeste' },
    { sigla: 'DF', nome: 'Distrito Federal', ativo: true, projetos: 2, regiao: 'Centro-Oeste' },
    
    // Região Sudeste
    { sigla: 'MG', nome: 'Minas Gerais', ativo: true, projetos: 12, regiao: 'Sudeste' },
    { sigla: 'SP', nome: 'São Paulo', ativo: true, projetos: 4, regiao: 'Sudeste' },
    { sigla: 'RJ', nome: 'Rio de Janeiro', ativo: true, projetos: 2, regiao: 'Sudeste' },
    { sigla: 'ES', nome: 'Espírito Santo', ativo: true, projetos: 1, regiao: 'Sudeste' },
    
    // Região Sul
    { sigla: 'PR', nome: 'Paraná', ativo: true, projetos: 3, regiao: 'Sul' },
    { sigla: 'SC', nome: 'Santa Catarina', ativo: true, projetos: 2, regiao: 'Sul' },
    { sigla: 'RS', nome: 'Rio Grande do Sul', ativo: true, projetos: 2, regiao: 'Sul' },
    
    // Estados inativos
    { sigla: 'AC', nome: 'Acre', ativo: false, projetos: 0, regiao: 'Norte' },
    { sigla: 'RR', nome: 'Roraima', ativo: false, projetos: 0, regiao: 'Norte' },
    { sigla: 'SE', nome: 'Sergipe', ativo: false, projetos: 0, regiao: 'Nordeste' },
  ];

  const estadosAtivos = estados.filter(e => e.ativo);
  const totalProjetos = estadosAtivos.reduce((sum, e) => sum + e.projetos, 0);

  const getCor = (estado: Estado) => {
    if (!estado.ativo) return '#E5E5E5';
    if (estado.projetos > 10) return '#EE7501';
    if (estado.projetos > 5) return '#FF9E3D';
    if (estado.projetos > 2) return '#FFB366';
    return '#FFD699';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-32 px-4 lg:px-8" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 lg:gap-8 mb-8">
            <img
              src="https://cdn.jsdelivr.net/gh/grupo-arqueo/assets/logo-10-anos.png"
              alt="10 Anos"
              className="h-16 lg:h-20 w-auto flex-shrink-0"
            />
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: '#1A1A1A' }}>
              Presença territorial nacional
            </h1>
          </div>
        </div>
      </section>

      {/* Estatísticas Rápidas */}
      <section className="py-12 lg:py-16 px-4 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#EE7501' }}>
                24
              </div>
              <h3 className="text-lg lg:text-xl font-bold" style={{ color: '#1A1A1A' }}>
                Estados
              </h3>
              <p className="text-sm" style={{ color: '#666666' }}>
                Cobertura nacional
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#861720' }}>
                {estadosAtivos.length}
              </div>
              <h3 className="text-lg lg:text-xl font-bold" style={{ color: '#1A1A1A' }}>
                Estados ativos
              </h3>
              <p className="text-sm" style={{ color: '#666666' }}>
                Com atuação comprovada
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#2C7EB3' }}>
                {totalProjetos}+
              </div>
              <h3 className="text-lg lg:text-xl font-bold" style={{ color: '#1A1A1A' }}>
                Projetos
              </h3>
              <p className="text-sm" style={{ color: '#666666' }}>
                Distribuídos territorialmente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa Interativo */}
      <section className="py-20 lg:py-32 px-4 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center" style={{ color: '#1A1A1A' }}>
            Mapa de atuação
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Grid de Estados */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-4 md:grid-cols-5 gap-3">
                {estados.map((estado) => (
                  <button
                    key={estado.sigla}
                    onClick={() => setEstadoSelecionado(estado)}
                    className="p-3 rounded-lg font-bold text-sm transition-all hover:scale-105 cursor-pointer"
                    style={{
                      backgroundColor: getCor(estado),
                      color: estado.ativo ? '#FFFFFF' : '#999999',
                      border: estadoSelecionado?.sigla === estado.sigla ? '3px solid #1A1A1A' : 'none',
                      opacity: estado.ativo ? 1 : 0.5,
                    }}
                    title={estado.nome}
                  >
                    {estado.sigla}
                  </button>
                ))}
              </div>

              {/* Legenda */}
              <div className="mt-12 pt-8 border-t" style={{ borderColor: '#E5E5E5' }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: '#1A1A1A' }}>
                  Legenda de intensidade
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#EE7501' }}></div>
                    <span className="text-sm">10+ projetos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#FF9E3D' }}></div>
                    <span className="text-sm">5-10 projetos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#FFB366' }}></div>
                    <span className="text-sm">2-5 projetos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#FFD699' }}></div>
                    <span className="text-sm">1 projeto</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Painel Lateral */}
            <div>
              {estadoSelecionado ? (
                <div
                  className="p-6 rounded-lg"
                  style={{
                    backgroundColor: getCor(estadoSelecionado),
                    color: estadoSelecionado.ativo ? '#FFFFFF' : '#666666',
                  }}
                >
                  <h3 className="text-2xl font-bold mb-2">
                    {estadoSelecionado.sigla}
                  </h3>
                  <p className="text-sm mb-4 opacity-90">
                    {estadoSelecionado.nome}
                  </p>

                  {estadoSelecionado.ativo ? (
                    <>
                      <div className="mb-4">
                        <p className="text-sm opacity-75">Região</p>
                        <p className="text-lg font-semibold">
                          {estadoSelecionado.regiao}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm opacity-75">Projetos</p>
                        <p className="text-3xl font-bold">
                          {estadoSelecionado.projetos}
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm">
                      Sem atuação comprovada
                    </p>
                  )}
                </div>
              ) : (
                <div
                  className="p-6 rounded-lg text-center"
                  style={{ backgroundColor: '#FAFAF9', color: '#666666' }}
                >
                  <p className="text-sm">
                    Clique em um estado para visualizar detalhes
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Distribuição por Região */}
      <section className="py-20 lg:py-32 px-4 lg:px-8" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center" style={{ color: '#1A1A1A' }}>
            Distribuição por região
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'].map((regiao) => {
              const estadosRegiao = estadosAtivos.filter(e => e.regiao === regiao);
              const projetosRegiao = estadosRegiao.reduce((sum, e) => sum + e.projetos, 0);
              return (
                <div
                  key={regiao}
                  className="p-6 rounded-lg text-center"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#1A1A1A' }}>
                    {regiao}
                  </h3>
                  <div className="text-3xl font-bold mb-2" style={{ color: '#EE7501' }}>
                    {estadosRegiao.length}
                  </div>
                  <p className="text-sm" style={{ color: '#666666' }}>
                    {projetosRegiao} projetos
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fechamento */}
      <section className="py-20 lg:py-32 px-4 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl lg:text-2xl leading-relaxed font-medium" style={{ color: '#1A1A1A' }}>
            A presença territorial do Grupo Arqueo reflete uma estratégia de capilaridade operacional, com estrutura consolidada em múltiplos contextos regulatórios, ambientais e culturais do Brasil.
          </p>
        </div>
      </section>
    </div>
  );
}
