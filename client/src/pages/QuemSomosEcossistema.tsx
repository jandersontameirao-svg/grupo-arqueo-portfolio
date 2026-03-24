import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Arqueóloga',
    role: 'CEO',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Arqueo78_d2742b35.webp',
  },
  {
    id: 'diretora',
    name: 'Diretora',
    role: 'Administrativa',
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
    name: 'Diretor de',
    role: 'Estratégia',
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
    name: 'Coord. de',
    role: 'Pesquisa',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/S%C3%A2mara_d6e3d226.webp',
  },
  {
    id: 'gerente-projetos',
    name: 'Gerente de',
    role: 'Projetos',
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
    name: 'Coord.',
    role: 'Comercial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Samantaportfolio(2)_0f24cb85.webp',
  },
];

// Posições radiais com leve assimetria controlada e maior espaçamento
const positions = [
  { top: '50%', left: '50%', size: 'large', zIndex: 10 }, // CEO - centro
  { top: '10%', left: '24%', size: 'medium', zIndex: 8 }, // Diretora - topo esquerda (mais espaço)
  { top: '6%', left: '76%', size: 'medium', zIndex: 8 }, // CSO - topo direita (mais espaço, leve assimetria)
  { top: '32%', left: '5%', size: 'medium', zIndex: 8 }, // Diretor - esquerda (mais espaço)
  { top: '32%', left: '95%', size: 'medium', zIndex: 8 }, // Tesoureira - direita (mais espaço)
  { top: '50%', left: '10%', size: 'small', zIndex: 7 }, // Arqueólogo - esquerda centro
  { top: '50%', left: '90%', size: 'small', zIndex: 7 }, // Arqueóloga - direita centro
  { top: '72%', left: '26%', size: 'small', zIndex: 7 }, // Coord. Pesquisa - embaixo esquerda
  { top: '72%', left: '74%', size: 'small', zIndex: 7 }, // Gerente Projetos - embaixo direita
  { top: '14%', left: '50%', size: 'small', zIndex: 7 }, // Analista Geo - topo centro
  { top: '86%', left: '50%', size: 'small', zIndex: 7 }, // Assessor - embaixo centro
  { top: '58%', left: '50%', size: 'small', zIndex: 7 }, // Coord. Comercial - centro
];

const sizeMap = {
  large: { width: 155, height: 155, border: 4.5, textSize: '13px', textWeight: 600, textMargin: '6px' },
  medium: { width: 125, height: 125, border: 3.5, textSize: '11px', textWeight: 600, textMargin: '5px' },
  small: { width: 95, height: 95, border: 3, textSize: '10px', textWeight: 500, textMargin: '4px' },
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

        {/* Team Composition - Radial Layout Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto rounded-3xl overflow-hidden"
          style={{
            maxWidth: '1100px',
            height: '950px',
            background: 'linear-gradient(135deg, #861720 0%, #6B1219 25%, #A01B28 50%, #EE7501 100%)',
            boxShadow: '0 30px 90px rgba(134, 23, 32, 0.35)',
          }}
        >
          {/* Subtle background circles - minimalist and refined */}
          <div className="absolute inset-0" style={{ zIndex: 0 }}>
            <div className="absolute rounded-full" style={{ width: 420, height: 420, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid rgba(255,255,255,0.04)' }} />
            <div className="absolute rounded-full" style={{ width: 640, height: 640, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid rgba(255,255,255,0.03)' }} />
            <div className="absolute rounded-full" style={{ width: 880, height: 880, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid rgba(255,255,255,0.02)' }} />
          </div>

          {/* Team Members - Radial Distribution with Premium Refinement */}
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
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Profile Circle - Premium Refinement */}
                  <div
                    className="rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105"
                    style={{
                      width: size.width,
                      height: size.height,
                      border: `${size.border}px solid rgba(255,255,255,0.65)`,
                      boxShadow: isCenter
                        ? '0 0 0 6px rgba(255,255,255,0.15), 0 0 30px rgba(0,0,0,0.25), inset 0 0 20px rgba(0,0,0,0.05)'
                        : '0 0 0 3px rgba(255,255,255,0.08), 0 12px 32px rgba(0,0,0,0.18), inset 0 0 15px rgba(0,0,0,0.03)',
                      filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.1))',
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Name and Role - Refined Typography */}
                  <div
                    className="text-center"
                    style={{
                      marginTop: `${size.textMargin}`,
                      maxWidth: pos.size === 'large' ? '130px' : pos.size === 'medium' ? '105px' : '85px',
                    }}
                  >
                    <p
                      className="text-white leading-tight drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                      style={{
                        fontSize: size.textSize,
                        fontWeight: size.textWeight,
                        letterSpacing: '0.3px',
                      }}
                    >
                      {member.name}
                    </p>
                    {member.role && (
                      <p
                        className="text-white/75 leading-tight drop-shadow-lg mt-0.5"
                        style={{
                          fontSize: `${parseInt(size.textSize) - 1}px`,
                          fontWeight: 400,
                          letterSpacing: '0.2px',
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

        {/* Team Values Section - Premium Styling */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Excelência</h3>
            <p className="text-gray-600 leading-relaxed">Comprometidos com os mais altos padrões de qualidade em cada projeto</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
              <span className="text-white text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Colaboração</h3>
            <p className="text-gray-600 leading-relaxed">Trabalhando juntos para alcançar objetivos compartilhados e inovadores</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
              <span className="text-white text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Inovação</h3>
            <p className="text-gray-600 leading-relaxed">Explorando novas metodologias e perspectivas em arqueologia</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
