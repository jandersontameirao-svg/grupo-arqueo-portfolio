'use client';

import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface Estado {
  sigla: string;
  nome: string;
  ativo: boolean;
  projetos: number;
  regiao: string;
}

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

function MapaBrasil3D({ estadoSelecionado, setEstadoSelecionado }: any) {
  const groupRef = useRef<THREE.Group>(null);
  const [estados, setEstados] = useState<any[]>([]);

  useEffect(() => {
    // Criar geometria simplificada do mapa do Brasil
    const criarMapaBrasil = () => {
      const estadosGeometria: any[] = [];

      // Dados aproximados dos estados (simplificados para demonstração)
      const estadosCoords = [
        { sigla: 'AC', x: -8, y: 2, width: 1.5, height: 1.5 },
        { sigla: 'AM', x: -3, y: 3, width: 2, height: 2 },
        { sigla: 'RR', x: 0, y: 5, width: 1.5, height: 1.5 },
        { sigla: 'AP', x: 1, y: 4, width: 1, height: 1 },
        { sigla: 'PA', x: 0, y: 2, width: 2, height: 1.5 },
        { sigla: 'TO', x: -2, y: 1, width: 1.5, height: 1 },
        { sigla: 'MA', x: 1, y: 0, width: 1.5, height: 1.5 },
        { sigla: 'PI', x: 2, y: -1, width: 1, height: 1.5 },
        { sigla: 'CE', x: 3, y: -1, width: 1, height: 1 },
        { sigla: 'RN', x: 3.5, y: -0.5, width: 0.8, height: 0.8 },
        { sigla: 'PB', x: 3.5, y: -1.5, width: 0.8, height: 0.8 },
        { sigla: 'PE', x: 3.2, y: -2, width: 0.8, height: 1 },
        { sigla: 'AL', x: 3.2, y: -2.5, width: 0.6, height: 0.8 },
        { sigla: 'SE', x: 3.2, y: -3, width: 0.6, height: 0.6 },
        { sigla: 'BA', x: 2, y: -3, width: 2, height: 2 },
        { sigla: 'MT', x: -2, y: -1, width: 1.5, height: 1.5 },
        { sigla: 'DF', x: -1, y: -1, width: 0.5, height: 0.5 },
        { sigla: 'GO', x: -1, y: -2, width: 1, height: 1 },
        { sigla: 'MS', x: -2, y: -3, width: 1.5, height: 1.5 },
        { sigla: 'MG', x: 1, y: -2.5, width: 1.5, height: 1.5 },
        { sigla: 'SP', x: 0, y: -3, width: 1, height: 1 },
        { sigla: 'RJ', x: 1.5, y: -3.5, width: 0.8, height: 0.8 },
        { sigla: 'ES', x: 2, y: -3, width: 0.6, height: 0.8 },
        { sigla: 'PR', x: 0, y: -4, width: 1, height: 1 },
        { sigla: 'SC', x: 0.5, y: -4.5, width: 0.8, height: 0.8 },
        { sigla: 'RS', x: -0.5, y: -5, width: 1.2, height: 1.2 },
      ];

      estadosCoords.forEach((coord) => {
        const estado = estadosData[coord.sigla];
        if (estado) {
          const altura = estado.ativo ? 0.8 + (estado.projetos * 0.1) : 0.2;
          
          const geometry = new THREE.BoxGeometry(coord.width, altura, coord.height);
          
          const cor = !estado.ativo ? '#E5E5E5' : 
                      estado.projetos > 10 ? '#EE7501' :
                      estado.projetos > 5 ? '#FF9E3D' :
                      estado.projetos > 2 ? '#FFB366' : '#FFD699';
          
          const material = new THREE.MeshStandardMaterial({
            color: cor,
            metalness: 0.3,
            roughness: 0.4,
            emissive: estado.ativo ? cor : '#000000',
            emissiveIntensity: 0.1,
          });

          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(coord.x, altura / 2, coord.y);
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          mesh.userData = { sigla: coord.sigla, estado };
          
          estadosGeometria.push(mesh);
        }
      });

      return estadosGeometria;
    };

    const mapaMeshes = criarMapaBrasil();
    setEstados(mapaMeshes);

    if (groupRef.current) {
      mapaMeshes.forEach(mesh => {
        groupRef.current?.add(mesh);
        
        // Adicionar event listener para clique
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        
        const onMouseClick = (event: MouseEvent) => {
          if (event.target === event.currentTarget) return;
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
          
          raycaster.setFromCamera(mouse, (window as any).__camera);
          const intersects = raycaster.intersectObjects(mapaMeshes);
          
          if (intersects.length > 0) {
            const clicked = intersects[0].object as any;
            if (clicked.userData.estado) {
              setEstadoSelecionado(clicked.userData.estado);
            }
          }
        };

        window.addEventListener('click', onMouseClick);
        return () => window.removeEventListener('click', onMouseClick);
      });
    }
  }, [setEstadoSelecionado]);

  useFrame(() => {
    if (groupRef.current && !estadoSelecionado) {
      groupRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <>
      <ambientLight intensity={0.9} />
      <pointLight position={[15, 15, 15]} intensity={1.2} castShadow />
      <pointLight position={[-15, -15, 15]} intensity={0.6} />
      <pointLight position={[0, 20, 0]} intensity={0.8} />
      
      <group ref={groupRef}>
        {estados.map((mesh, i) => (
          <primitive key={i} object={mesh} />
        ))}
      </group>

      <OrbitControls
        autoRotate={!estadoSelecionado}
        autoRotateSpeed={1.5}
        enableZoom={true}
        enablePan={true}
        minDistance={20}
        maxDistance={50}
      />
    </>
  );
}

export default function PresencaTerritorial() {
  const [estadoSelecionado, setEstadoSelecionado] = useState<Estado | null>(null);

  const estadosAtivos = Object.values(estadosData).filter(e => e.ativo);
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
              <Canvas camera={{ position: [0, 8, 20], fov: 50 }} shadows>
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
