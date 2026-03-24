import { useState } from 'react';

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

// Coordenadas aproximadas dos estados para posicionamento no SVG
const estadosCoordenadas: { [key: string]: { x: number; y: number; size: number } } = {
  'AC': { x: 15, y: 55, size: 35 },
  'AM': { x: 30, y: 35, size: 45 },
  'RR': { x: 45, y: 20, size: 30 },
  'AP': { x: 55, y: 15, size: 25 },
  'PA': { x: 50, y: 40, size: 40 },
  'TO': { x: 45, y: 55, size: 30 },
  'MA': { x: 60, y: 50, size: 35 },
  'PI': { x: 70, y: 55, size: 28 },
  'CE': { x: 80, y: 48, size: 28 },
  'RN': { x: 85, y: 42, size: 20 },
  'PB': { x: 87, y: 48, size: 18 },
  'PE': { x: 85, y: 55, size: 22 },
  'AL': { x: 83, y: 62, size: 15 },
  'SE': { x: 82, y: 68, size: 12 },
  'BA': { x: 75, y: 70, size: 40 },
  'MT': { x: 40, y: 65, size: 38 },
  'DF': { x: 50, y: 72, size: 12 },
  'GO': { x: 50, y: 80, size: 28 },
  'MS': { x: 35, y: 85, size: 32 },
  'MG': { x: 65, y: 80, size: 35 },
  'SP': { x: 55, y: 90, size: 30 },
  'RJ': { x: 70, y: 92, size: 18 },
  'ES': { x: 75, y: 85, size: 16 },
  'PR': { x: 50, y: 100, size: 28 },
  'SC': { x: 55, y: 108, size: 24 },
  'RS': { x: 42, y: 115, size: 32 },
};

interface MapaBrasilSVGProps {
  onEstadoSelect?: (estado: Estado) => void;
  selectedEstado?: Estado | null;
}

export default function MapaBrasilSVG({ onEstadoSelect, selectedEstado }: MapaBrasilSVGProps) {
  const [hoveredEstado, setHoveredEstado] = useState<string | null>(null);

  const getColor = (sigla: string): string => {
    if (selectedEstado?.sigla === sigla) return '#D66A00';
    if (hoveredEstado === sigla) return '#EE7501';
    const estado = estadosData[sigla];
    return estado.ativo ? '#861720' : '#CCCCCC';
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <svg
        viewBox="0 0 100 130"
        className="w-full h-full"
        style={{ maxHeight: '600px' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fundo */}
        <rect width="100" height="130" fill="#F5F5F5" />

        {/* Estados como círculos com labels */}
        {Object.entries(estadosCoordenadas).map(([sigla, coords]) => {
          const estado = estadosData[sigla];
          const color = getColor(sigla);
          
          return (
            <g key={sigla}>
              {/* Círculo do estado */}
              <circle
                cx={coords.x}
                cy={coords.y}
                r={coords.size / 2}
                fill={color}
                stroke="#FFFFFF"
                strokeWidth="1"
                opacity={0.85}
                onMouseEnter={() => setHoveredEstado(sigla)}
                onMouseLeave={() => setHoveredEstado(null)}
                onClick={() => onEstadoSelect?.(estado)}
                style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
              />

              {/* Label do estado */}
              <text
                x={coords.x}
                y={coords.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#FFFFFF"
                fontSize={coords.size > 30 ? '10' : '8'}
                fontWeight="bold"
                pointerEvents="none"
              >
                {sigla}
              </text>

              {/* Tooltip */}
              {hoveredEstado === sigla && (
                <title>{estado.nome} - {estado.projetos} projetos</title>
              )}
            </g>
          );
        })}

        {/* Linhas de divisão entre regiões (opcional) */}
        <line x1="35" y1="0" x2="35" y2="130" stroke="#E5E5E5" strokeWidth="0.5" opacity="0.3" />
        <line x1="55" y1="0" x2="55" y2="130" stroke="#E5E5E5" strokeWidth="0.5" opacity="0.3" />
      </svg>
    </div>
  );
}
