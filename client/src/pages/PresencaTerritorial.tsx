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
  const estadosData: { [key: string]: Estado } = {
    'AC': { sigla: 'AC', nome: 'Acre', ativo: false, projetos: 0, regiao: 'Norte' },
    'AM': { sigla: 'AM', nome: 'Amazonas', ativo: true, projetos: 3, regiao: 'Norte' },
    'AP': { sigla: 'AP', nome: 'Amapá', ativo: true, projetos: 1, regiao: 'Norte' },
    'PA': { sigla: 'PA', nome: 'Pará', ativo: true, projetos: 2, regiao: 'Norte' },
    'RR': { sigla: 'RR', nome: 'Roraima', ativo: false, projetos: 0, regiao: 'Norte' },
    'TO': { sigla: 'TO', nome: 'Tocantins', ativo: true, projetos: 2, regiao: 'Norte' },
    
    'AL': { sigla: 'AL', nome: 'Alagoas', ativo: true, projetos: 1, regiao: 'Nordeste' },
    'BA': { sigla: 'BA', nome: 'Bahia', ativo: true, projetos: 5, regiao: 'Nordeste' },
    'CE': { sigla: 'CE', nome: 'Ceará', ativo: true, projetos: 1, regiao: 'Nordeste' },
    'MA': { sigla: 'MA', nome: 'Maranhão', ativo: true, projetos: 16, regiao: 'Nordeste' },
    'PB': { sigla: 'PB', nome: 'Paraíba', ativo: true, projetos: 1, regiao: 'Nordeste' },
    'PE': { sigla: 'PE', nome: 'Pernambuco', ativo: true, projetos: 4, regiao: 'Nordeste' },
    'PI': { sigla: 'PI', nome: 'Piauí', ativo: true, projetos: 2, regiao: 'Nordeste' },
    'RN': { sigla: 'RN', nome: 'Rio Grande do Norte', ativo: true, projetos: 1, regiao: 'Nordeste' },
    'SE': { sigla: 'SE', nome: 'Sergipe', ativo: false, projetos: 0, regiao: 'Nordeste' },
    
    'DF': { sigla: 'DF', nome: 'Distrito Federal', ativo: true, projetos: 2, regiao: 'Centro-Oeste' },
    'GO': { sigla: 'GO', nome: 'Goiás', ativo: true, projetos: 1, regiao: 'Centro-Oeste' },
    'MS': { sigla: 'MS', nome: 'Mato Grosso do Sul', ativo: true, projetos: 6, regiao: 'Centro-Oeste' },
    'MT': { sigla: 'MT', nome: 'Mato Grosso', ativo: true, projetos: 3, regiao: 'Centro-Oeste' },
    
    'ES': { sigla: 'ES', nome: 'Espírito Santo', ativo: true, projetos: 1, regiao: 'Sudeste' },
    'MG': { sigla: 'MG', nome: 'Minas Gerais', ativo: true, projetos: 12, regiao: 'Sudeste' },
    'RJ': { sigla: 'RJ', nome: 'Rio de Janeiro', ativo: true, projetos: 2, regiao: 'Sudeste' },
    'SP': { sigla: 'SP', nome: 'São Paulo', ativo: true, projetos: 4, regiao: 'Sudeste' },
    
    'PR': { sigla: 'PR', nome: 'Paraná', ativo: true, projetos: 3, regiao: 'Sul' },
    'RS': { sigla: 'RS', nome: 'Rio Grande do Sul', ativo: true, projetos: 2, regiao: 'Sul' },
    'SC': { sigla: 'SC', nome: 'Santa Catarina', ativo: true, projetos: 2, regiao: 'Sul' },
  };

  const estados = Object.values(estadosData);
  const estadosAtivos = estados.filter(e => e.ativo);
  const totalProjetos = estadosAtivos.reduce((sum, e) => sum + e.projetos, 0);

  const getCor = (estado: Estado) => {
    if (!estado.ativo) return '#E5E5E5';
    if (estado.projetos > 10) return '#EE7501';
    if (estado.projetos > 5) return '#FF9E3D';
    if (estado.projetos > 2) return '#FFB366';
    return '#FFD699';
  };

  const getCorTexto = (estado: Estado) => {
    if (!estado.ativo) return '#999999';
    return '#FFFFFF';
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center" style={{ color: '#1A1A1A' }}>
            Mapa de atuação
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mapa SVG */}
            <div className="lg:col-span-2 flex justify-center">
              <svg viewBox="0 0 1000 1200" className="w-full max-w-2xl" style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }}>
                {/* Mapa simplificado do Brasil com estados */}
                
                {/* Norte */}
                <g onClick={() => setEstadoSelecionado(estadosData['AC'])} style={{ cursor: 'pointer' }}>
                  <rect x="50" y="50" width="120" height="100" fill={getCor(estadosData['AC'])} stroke="#999" strokeWidth="2" />
                  <text x="110" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['AC'])}>AC</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['AM'])} style={{ cursor: 'pointer' }}>
                  <rect x="200" y="50" width="120" height="100" fill={getCor(estadosData['AM'])} stroke="#999" strokeWidth="2" />
                  <text x="260" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['AM'])}>AM</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['RR'])} style={{ cursor: 'pointer' }}>
                  <rect x="350" y="50" width="120" height="100" fill={getCor(estadosData['RR'])} stroke="#999" strokeWidth="2" />
                  <text x="410" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['RR'])}>RR</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['AP'])} style={{ cursor: 'pointer' }}>
                  <rect x="500" y="50" width="120" height="100" fill={getCor(estadosData['AP'])} stroke="#999" strokeWidth="2" />
                  <text x="560" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['AP'])}>AP</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['PA'])} style={{ cursor: 'pointer' }}>
                  <rect x="650" y="50" width="120" height="100" fill={getCor(estadosData['PA'])} stroke="#999" strokeWidth="2" />
                  <text x="710" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['PA'])}>PA</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['TO'])} style={{ cursor: 'pointer' }}>
                  <rect x="800" y="50" width="120" height="100" fill={getCor(estadosData['TO'])} stroke="#999" strokeWidth="2" />
                  <text x="860" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['TO'])}>TO</text>
                </g>

                {/* Nordeste */}
                <g onClick={() => setEstadoSelecionado(estadosData['MA'])} style={{ cursor: 'pointer' }}>
                  <rect x="50" y="200" width="120" height="100" fill={getCor(estadosData['MA'])} stroke="#999" strokeWidth="2" />
                  <text x="110" y="255" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['MA'])}>MA</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['PI'])} style={{ cursor: 'pointer' }}>
                  <rect x="200" y="200" width="120" height="100" fill={getCor(estadosData['PI'])} stroke="#999" strokeWidth="2" />
                  <text x="260" y="255" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['PI'])}>PI</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['CE'])} style={{ cursor: 'pointer' }}>
                  <rect x="350" y="200" width="120" height="100" fill={getCor(estadosData['CE'])} stroke="#999" strokeWidth="2" />
                  <text x="410" y="255" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['CE'])}>CE</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['RN'])} style={{ cursor: 'pointer' }}>
                  <rect x="500" y="200" width="120" height="100" fill={getCor(estadosData['RN'])} stroke="#999" strokeWidth="2" />
                  <text x="560" y="255" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['RN'])}>RN</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['PB'])} style={{ cursor: 'pointer' }}>
                  <rect x="650" y="200" width="120" height="100" fill={getCor(estadosData['PB'])} stroke="#999" strokeWidth="2" />
                  <text x="710" y="255" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['PB'])}>PB</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['PE'])} style={{ cursor: 'pointer' }}>
                  <rect x="800" y="200" width="120" height="100" fill={getCor(estadosData['PE'])} stroke="#999" strokeWidth="2" />
                  <text x="860" y="255" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['PE'])}>PE</text>
                </g>

                {/* Nordeste (continuação) */}
                <g onClick={() => setEstadoSelecionado(estadosData['AL'])} style={{ cursor: 'pointer' }}>
                  <rect x="50" y="350" width="120" height="100" fill={getCor(estadosData['AL'])} stroke="#999" strokeWidth="2" />
                  <text x="110" y="405" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['AL'])}>AL</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['SE'])} style={{ cursor: 'pointer' }}>
                  <rect x="200" y="350" width="120" height="100" fill={getCor(estadosData['SE'])} stroke="#999" strokeWidth="2" />
                  <text x="260" y="405" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['SE'])}>SE</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['BA'])} style={{ cursor: 'pointer' }}>
                  <rect x="350" y="350" width="120" height="100" fill={getCor(estadosData['BA'])} stroke="#999" strokeWidth="2" />
                  <text x="410" y="405" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['BA'])}>BA</text>
                </g>

                {/* Centro-Oeste */}
                <g onClick={() => setEstadoSelecionado(estadosData['MT'])} style={{ cursor: 'pointer' }}>
                  <rect x="500" y="350" width="120" height="100" fill={getCor(estadosData['MT'])} stroke="#999" strokeWidth="2" />
                  <text x="560" y="405" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['MT'])}>MT</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['DF'])} style={{ cursor: 'pointer' }}>
                  <rect x="650" y="350" width="120" height="100" fill={getCor(estadosData['DF'])} stroke="#999" strokeWidth="2" />
                  <text x="710" y="405" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['DF'])}>DF</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['GO'])} style={{ cursor: 'pointer' }}>
                  <rect x="800" y="350" width="120" height="100" fill={getCor(estadosData['GO'])} stroke="#999" strokeWidth="2" />
                  <text x="860" y="405" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['GO'])}>GO</text>
                </g>

                {/* Centro-Oeste (continuação) */}
                <g onClick={() => setEstadoSelecionado(estadosData['MS'])} style={{ cursor: 'pointer' }}>
                  <rect x="500" y="500" width="120" height="100" fill={getCor(estadosData['MS'])} stroke="#999" strokeWidth="2" />
                  <text x="560" y="555" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['MS'])}>MS</text>
                </g>

                {/* Sudeste */}
                <g onClick={() => setEstadoSelecionado(estadosData['MG'])} style={{ cursor: 'pointer' }}>
                  <rect x="650" y="500" width="120" height="100" fill={getCor(estadosData['MG'])} stroke="#999" strokeWidth="2" />
                  <text x="710" y="555" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['MG'])}>MG</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['SP'])} style={{ cursor: 'pointer' }}>
                  <rect x="800" y="500" width="120" height="100" fill={getCor(estadosData['SP'])} stroke="#999" strokeWidth="2" />
                  <text x="860" y="555" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['SP'])}>SP</text>
                </g>

                {/* Sudeste (continuação) */}
                <g onClick={() => setEstadoSelecionado(estadosData['RJ'])} style={{ cursor: 'pointer' }}>
                  <rect x="50" y="650" width="120" height="100" fill={getCor(estadosData['RJ'])} stroke="#999" strokeWidth="2" />
                  <text x="110" y="705" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['RJ'])}>RJ</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['ES'])} style={{ cursor: 'pointer' }}>
                  <rect x="200" y="650" width="120" height="100" fill={getCor(estadosData['ES'])} stroke="#999" strokeWidth="2" />
                  <text x="260" y="705" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['ES'])}>ES</text>
                </g>

                {/* Sul */}
                <g onClick={() => setEstadoSelecionado(estadosData['PR'])} style={{ cursor: 'pointer' }}>
                  <rect x="350" y="650" width="120" height="100" fill={getCor(estadosData['PR'])} stroke="#999" strokeWidth="2" />
                  <text x="410" y="705" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['PR'])}>PR</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['SC'])} style={{ cursor: 'pointer' }}>
                  <rect x="500" y="650" width="120" height="100" fill={getCor(estadosData['SC'])} stroke="#999" strokeWidth="2" />
                  <text x="560" y="705" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['SC'])}>SC</text>
                </g>
                
                <g onClick={() => setEstadoSelecionado(estadosData['RS'])} style={{ cursor: 'pointer' }}>
                  <rect x="650" y="650" width="120" height="100" fill={getCor(estadosData['RS'])} stroke="#999" strokeWidth="2" />
                  <text x="710" y="705" textAnchor="middle" fontSize="16" fontWeight="bold" fill={getCorTexto(estadosData['RS'])}>RS</text>
                </g>
              </svg>
            </div>

            {/* Painel Lateral */}
            <div>
              {estadoSelecionado ? (
                <div
                  className="p-6 rounded-lg sticky top-8"
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
                  className="p-6 rounded-lg text-center sticky top-8"
                  style={{ backgroundColor: '#FAFAF9', color: '#666666' }}
                >
                  <p className="text-sm">
                    Clique em um estado no mapa para visualizar detalhes
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Legenda */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: '#E5E5E5' }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#1A1A1A' }}>
              Legenda de intensidade
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded" style={{ backgroundColor: '#EE7501' }}></div>
                <span className="text-sm">10+ projetos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded" style={{ backgroundColor: '#FF9E3D' }}></div>
                <span className="text-sm">5-10 projetos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded" style={{ backgroundColor: '#FFB366' }}></div>
                <span className="text-sm">2-5 projetos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded" style={{ backgroundColor: '#FFD699' }}></div>
                <span className="text-sm">1 projeto</span>
              </div>
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
