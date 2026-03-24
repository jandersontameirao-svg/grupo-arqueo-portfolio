'use client';

import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

interface Estado {
  sigla: string;
  nome: string;
  ativo: boolean;
  projetos: number;
  regiao: string;
  posicao: [number, number, number];
}

// Dados dos estados com posições aproximadas no mapa
const estadosData: Estado[] = [
  // Norte
  { sigla: 'AC', nome: 'Acre', ativo: false, projetos: 0, regiao: 'Norte', posicao: [-8, 2, -3] },
  { sigla: 'AM', nome: 'Amazonas', ativo: true, projetos: 3, regiao: 'Norte', posicao: [-3, 3, -2] },
  { sigla: 'AP', nome: 'Amapá', ativo: true, projetos: 1, regiao: 'Norte', posicao: [1, 4, -1] },
  { sigla: 'PA', nome: 'Pará', ativo: true, projetos: 2, regiao: 'Norte', posicao: [0, 2, -1] },
  { sigla: 'RR', nome: 'Roraima', ativo: false, projetos: 0, regiao: 'Norte', posicao: [0, 5, -2] },
  { sigla: 'TO', nome: 'Tocantins', ativo: true, projetos: 2, regiao: 'Norte', posicao: [-2, 1, 0] },
  
  // Nordeste
  { sigla: 'AL', nome: 'Alagoas', ativo: true, projetos: 1, regiao: 'Nordeste', posicao: [3, -2, 1] },
  { sigla: 'BA', nome: 'Bahia', ativo: true, projetos: 5, regiao: 'Nordeste', posicao: [2, -3, 1] },
  { sigla: 'CE', nome: 'Ceará', ativo: true, projetos: 1, regiao: 'Nordeste', posicao: [3, -1, 0] },
  { sigla: 'MA', nome: 'Maranhão', ativo: true, projetos: 16, regiao: 'Nordeste', posicao: [1, 0, 0] },
  { sigla: 'PB', nome: 'Paraíba', ativo: true, projetos: 1, regiao: 'Nordeste', posicao: [3.5, -1.5, 0] },
  { sigla: 'PE', nome: 'Pernambuco', ativo: true, projetos: 4, regiao: 'Nordeste', posicao: [3.2, -2, 0] },
  { sigla: 'PI', nome: 'Piauí', ativo: true, projetos: 2, regiao: 'Nordeste', posicao: [2, -1, 0] },
  { sigla: 'RN', nome: 'Rio Grande do Norte', ativo: true, projetos: 1, regiao: 'Nordeste', posicao: [3.5, -0.5, 0] },
  { sigla: 'SE', nome: 'Sergipe', ativo: false, projetos: 0, regiao: 'Nordeste', posicao: [3.2, -2.5, 0] },
  
  // Centro-Oeste
  { sigla: 'DF', nome: 'Distrito Federal', ativo: true, projetos: 2, regiao: 'Centro-Oeste', posicao: [-1, -1, 0] },
  { sigla: 'GO', nome: 'Goiás', ativo: true, projetos: 1, regiao: 'Centro-Oeste', posicao: [-1, -2, 0] },
  { sigla: 'MS', nome: 'Mato Grosso do Sul', ativo: true, projetos: 6, regiao: 'Centro-Oeste', posicao: [-2, -3, 0] },
  { sigla: 'MT', nome: 'Mato Grosso', ativo: true, projetos: 3, regiao: 'Centro-Oeste', posicao: [-2, -1, 0] },
  
  // Sudeste
  { sigla: 'ES', nome: 'Espírito Santo', ativo: true, projetos: 1, regiao: 'Sudeste', posicao: [2, -3, 0] },
  { sigla: 'MG', nome: 'Minas Gerais', ativo: true, projetos: 12, regiao: 'Sudeste', posicao: [1, -2.5, 0] },
  { sigla: 'RJ', nome: 'Rio de Janeiro', ativo: true, projetos: 2, regiao: 'Sudeste', posicao: [1.5, -3.5, 0] },
  { sigla: 'SP', nome: 'São Paulo', ativo: true, projetos: 4, regiao: 'Sudeste', posicao: [0, -3, 0] },
  
  // Sul
  { sigla: 'PR', nome: 'Paraná', ativo: true, projetos: 3, regiao: 'Sul', posicao: [0, -4, 0] },
  { sigla: 'RS', nome: 'Rio Grande do Sul', ativo: true, projetos: 2, regiao: 'Sul', posicao: [-0.5, -5, 0] },
  { sigla: 'SC', nome: 'Santa Catarina', ativo: true, projetos: 2, regiao: 'Sul', posicao: [0.5, -4.5, 0] },
];

function EstadoBox({ estado, selected, onSelect }: { estado: Estado; selected: boolean; onSelect: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      const targetScale = selected ? 1.5 : hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      if (selected) {
        meshRef.current.rotation.z += 0.01;
      }
    }
  });

  const getCor = () => {
    if (!estado.ativo) return '#E5E5E5';
    if (estado.projetos > 10) return '#EE7501';
    if (estado.projetos > 5) return '#FF9E3D';
    if (estado.projetos > 2) return '#FFB366';
    return '#FFD699';
  };

  return (
    <mesh
      ref={meshRef}
      position={estado.posicao}
      onClick={onSelect}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[0.6, 0.6, selected ? 1.2 : 0.6]} />
      <meshStandardMaterial
        color={getCor()}
        emissive={hovered || selected ? getCor() : '#000000'}
        emissiveIntensity={hovered || selected ? 0.5 : 0}
        metalness={0.3}
        roughness={0.4}
      />
      <Text position={[0, 0, 0.4]} fontSize={0.3} color="#FFFFFF" fontWeight="bold">
        {estado.sigla}
      </Text>
    </mesh>
  );
}

function MapaBrasil3D({ estadoSelecionado, setEstadoSelecionado }: any) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <pointLight position={[-10, -10, 10]} intensity={0.5} />
      
      {estadosData.map((estado) => (
        <EstadoBox
          key={estado.sigla}
          estado={estado}
          selected={estadoSelecionado?.sigla === estado.sigla}
          onSelect={() => setEstadoSelecionado(estado)}
        />
      ))}

      <OrbitControls
        autoRotate
        autoRotateSpeed={2}
        enableZoom={true}
        enablePan={true}
        minDistance={15}
        maxDistance={40}
      />
    </>
  );
}

export default function PresencaTerritorial() {
  const [estadoSelecionado, setEstadoSelecionado] = useState<Estado | null>(null);

  const estadosAtivos = estadosData.filter(e => e.ativo);
  const totalProjetos = estadosAtivos.reduce((sum, e) => sum + e.projetos, 0);

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

      {/* Mapa 3D Interativo */}
      <section className="py-20 lg:py-32 px-4 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center" style={{ color: '#1A1A1A' }}>
            Mapa interativo 3D
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Canvas 3D */}
            <div className="lg:col-span-2 rounded-lg overflow-hidden" style={{ height: '600px', backgroundColor: '#F5F5F5' }}>
              <Canvas camera={{ position: [0, 0, 25], fov: 50 }} shadows>
                <MapaBrasil3D estadoSelecionado={estadoSelecionado} setEstadoSelecionado={setEstadoSelecionado} />
              </Canvas>
            </div>

            {/* Painel Lateral */}
            <div>
              {estadoSelecionado ? (
                <div
                  className="p-6 rounded-lg sticky top-8"
                  style={{
                    backgroundColor: estadoSelecionado.ativo ? '#EE7501' : '#E5E5E5',
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
                    Clique em um estado no mapa 3D para visualizar detalhes
                  </p>
                </div>
              )}

              {/* Legenda */}
              <div className="mt-8 pt-6 border-t" style={{ borderColor: '#E5E5E5' }}>
                <h3 className="text-sm font-bold mb-3" style={{ color: '#1A1A1A' }}>
                  Legenda
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: '#EE7501' }}></div>
                    <span className="text-xs">10+ projetos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: '#FF9E3D' }}></div>
                    <span className="text-xs">5-10 projetos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: '#FFB366' }}></div>
                    <span className="text-xs">2-5 projetos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: '#FFD699' }}></div>
                    <span className="text-xs">1 projeto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm mt-8" style={{ color: '#999999' }}>
            💡 Use o mouse para rotacionar, scroll para zoom, arraste para mover
          </p>
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
