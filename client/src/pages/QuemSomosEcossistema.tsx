import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Arquéologa',
    role: 'CEO',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Arqueo78_d2742b35.webp',
  },
  {
    id: 'diretora',
    name: 'Diretora Administrativa',
    role: 'e Financeira',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/fernandamelhorada_f9facca9.webp',
  },
  {
    id: 'cso',
    name: 'CSO',
    role: '',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Gerrson_0a84a91a.webp',
  },
  {
    id: 'diretor',
    name: 'Diretor de Estratégia',
    role: 'Contencioso e Qualidade',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Carlucioportfolio_797c4f70.webp',
  },
  {
    id: 'tesoureira',
    name: 'Tesoureira',
    role: '',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Laviniaportfolio2_a1d02cd0.webp',
  },
  {
    id: 'arqueologo',
    name: 'Arqueólogo',
    role: '',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/carlosfabianoportfolio_683faf41.webp',
  },
  {
    id: 'arqueologa',
    name: 'Arqueóloga',
    role: '',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/FabianaPortfolio_918325e1.webp',
  },
  {
    id: 'coord-pesquisa',
    name: 'Coord. de Pesquisa',
    role: 'e Licenciamento',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/S%C3%A2mara_d6e3d226.webp',
  },
  {
    id: 'gerente-projetos',
    name: 'Gerente de Projetos',
    role: '',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/643-RIC_3179_73874ff3.webp',
  },
  {
    id: 'analista-geo',
    name: 'Analista de',
    role: 'Geoprocessamento',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Brunonakagomiportfolio_de1be588.webp',
  },
  {
    id: 'assessor',
    name: 'Assessor',
    role: 'Jurídico',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/SilvioPortfolio2_d43b29f1.webp',
  },
  {
    id: 'coord-comercial',
    name: 'Coord. Comercial',
    role: 'e de Relacionamento',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Samantaportfolio(2)_0f24cb85.webp',
  },
];

// Posições radiais equilibradas (sem hierarquia)
const positions = [
  { top: '50%', left: '50%', size: 'large', zIndex: 10 }, // CEO - centro
  { top: '12%', left: '28%', size: 'medium', zIndex: 8 }, // Diretora - topo esquerda
  { top: '8%', left: '72%', size: 'medium', zIndex: 8 }, // CSO - topo direita
  { top: '28%', left: '8%', size: 'medium', zIndex: 8 }, // Diretor - esquerda
  { top: '28%', left: '92%', size: 'medium', zIndex: 8 }, // Tesoureira - direita
  { top: '50%', left: '12%', size: 'small', zIndex: 7 }, // Arqueólogo - esquerda centro
  { top: '50%', left: '88%', size: 'small', zIndex: 7 }, // Arqueóloga - direita centro
  { top: '72%', left: '28%', size: 'small', zIndex: 7 }, // Coord. Pesquisa - embaixo esquerda
  { top: '72%', left: '72%', size: 'small', zIndex: 7 }, // Gerente Projetos - embaixo direita
  { top: '18%', left: '50%', size: 'small', zIndex: 7 }, // Analista Geo - topo centro
  { top: '82%', left: '50%', size: 'small', zIndex: 7 }, // Assessor - embaixo centro
  { top: '42%', left: '50%', size: 'small', zIndex: 7 }, // Coord. Comercial - centro
];

const sizeMap = {
  large: { width: 180, height: 180, border: 5, textSize: 'sm', textWeight: 'bold' },
  medium: { width: 140, height: 140, border: 4, textSize: 'xs', textWeight: 'semibold' },
  small: { width: 110, height: 110, border: 3, textSize: '[10px]', textWeight: 'medium' },
};

export default function QuemSomosEcossistema() {
  return (
    <div className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nosso Time
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma equipe multidisciplinar dedicada à excelência em arqueologia, pesquisa e inovação
          </p>
        </motion.div>

        {/* Team Composition - Radial Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto rounded-3xl overflow-hidden"
          style={{
            maxWidth: '1000px',
            height: '900px',
            background: 'linear-gradient(135deg, #861720 0%, #6B1219 25%, #A01B28 50%, #EE7501 100%)',
            boxShadow: '0 30px 90px rgba(134, 23, 32, 0.35)',
          }}
        >
          {/* Subtle background circles - minimalist */}
          <div className="absolute inset-0" style={{ zIndex: 0 }}>
            <div className="absolute rounded-full" style={{ width: 400, height: 400, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid rgba(255,255,255,0.08)' }} />
            <div className="absolute rounded-full" style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid rgba(255,255,255,0.05)' }} />
          </div>

          {/* Team Members - Radial Distribution */}
          {teamMembers.map((member, index) => {
            const pos = positions[index];
            const size = sizeMap[pos.size as keyof typeof sizeMap];
            const isCenter = pos.size === 'large';

            return (
              <div
                key={member.id}
                className="absolute"
                style={{
                  zIndex: pos.zIndex,
                  top: pos.top,
                  left: pos.left,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Profile Circle */}
                  <div
                    className="rounded-full overflow-hidden shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                    style={{
                      width: size.width,
                      height: size.height,
                      border: `${size.border}px solid rgba(255,255,255,0.6)`,
                      boxShadow: isCenter
                        ? '0 0 0 8px rgba(255,255,255,0.2), 0 20px 60px rgba(0,0,0,0.3)'
                        : '0 0 0 4px rgba(255,255,255,0.1), 0 15px 40px rgba(0,0,0,0.2)',
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Name and Role - Clean Typography */}
                  <div className="mt-4 text-center">
                    <p
                      className={`text-white font-${size.textWeight} text-${size.textSize} leading-tight drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]`}
                      style={{
                        maxWidth: pos.size === 'large' ? '140px' : pos.size === 'medium' ? '110px' : '90px',
                        fontSize: size.textSize === 'sm' ? '14px' : size.textSize === 'xs' ? '12px' : '10px',
                        fontWeight: size.textWeight === 'bold' ? 700 : size.textWeight === 'semibold' ? 600 : 500,
                      }}
                    >
                      {member.name}
                    </p>
                    {member.role && (
                      <p
                        className="text-white/80 text-[9px] leading-tight drop-shadow-lg mt-1"
                        style={{
                          maxWidth: pos.size === 'large' ? '140px' : pos.size === 'medium' ? '110px' : '90px',
                          fontWeight: 400,
                        }}
                      >
                        {member.role}
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Team Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Excelência</h3>
            <p className="text-gray-600">Comprometidos com os mais altos padrões de qualidade em cada projeto</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Colaboração</h3>
            <p className="text-gray-600">Trabalhando juntos para alcançar objetivos compartilhados e inovadores</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">💡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Inovação</h3>
            <p className="text-gray-600">Explorando novas metodologias e perspectivas em arqueologia</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
