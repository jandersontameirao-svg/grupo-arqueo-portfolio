import React from 'react';
import { motion } from 'framer-motion';

interface TeamBubble {
  id: string;
  name: string;
  role: string;
  image: string;
  // Position as percentage
  top: string;
  left: string;
  // Size of the inner photo circle
  photoSize: number;
  // Size of the outer glow ring
  ringSize: number;
  zIndex: number;
}

const teamBubbles: TeamBubble[] = [
  {
    id: 'ceo',
    name: 'CEO',
    role: 'Arqueóloga',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Arqueo78_d2742b35.webp',
    top: '42%',
    left: '48%',
    photoSize: 260,
    ringSize: 310,
    zIndex: 10,
  },
  {
    id: 'diretora',
    name: 'Diretora',
    role: 'Administrativa',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/fernandamelhorada_f9facca9.webp',
    top: '28%',
    left: '18%',
    photoSize: 160,
    ringSize: 195,
    zIndex: 8,
  },
  {
    id: 'cso',
    name: 'CSO',
    role: '',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Gerrson_0a84a91a.webp',
    top: '8%',
    left: '68%',
    photoSize: 120,
    ringSize: 150,
    zIndex: 8,
  },
  {
    id: 'diretor',
    name: 'Diretor',
    role: 'Estratégia',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Carlucioportfolio_797c4f70.webp',
    top: '68%',
    left: '22%',
    photoSize: 140,
    ringSize: 172,
    zIndex: 8,
  },
  {
    id: 'tesoureira',
    name: 'Tesoureira',
    role: '',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Laviniaportfolio2_a1d02cd0.webp',
    top: '42%',
    left: '82%',
    photoSize: 140,
    ringSize: 172,
    zIndex: 8,
  },
  {
    id: 'arqueologo',
    name: 'Arqueólogo',
    role: '',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/carlosfabianoportfolio_683faf41.webp',
    top: '58%',
    left: '8%',
    photoSize: 110,
    ringSize: 138,
    zIndex: 7,
  },
  {
    id: 'arqueologa',
    name: 'Arqueóloga',
    role: '',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/FabianaPortfolio_918325e1.webp',
    top: '12%',
    left: '35%',
    photoSize: 105,
    ringSize: 132,
    zIndex: 7,
  },
  {
    id: 'coord-pesquisa',
    name: 'Coord.',
    role: 'Pesquisa',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/S%C3%A2mara_d6e3d226.webp',
    top: '78%',
    left: '48%',
    photoSize: 115,
    ringSize: 142,
    zIndex: 7,
  },
  {
    id: 'gerente-projetos',
    name: 'Gerente',
    role: 'Projetos',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/643-RIC_3179_73874ff3.webp',
    top: '72%',
    left: '72%',
    photoSize: 110,
    ringSize: 138,
    zIndex: 7,
  },
  {
    id: 'analista-geo',
    name: 'Analista',
    role: 'Geo',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Brunonakagomiportfolio_de1be588.webp',
    top: '18%',
    left: '52%',
    photoSize: 90,
    ringSize: 115,
    zIndex: 7,
  },
  {
    id: 'assessor',
    name: 'Assessor',
    role: 'Jurídico',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/SilvioPortfolio2_d43b29f1.webp',
    top: '88%',
    left: '15%',
    photoSize: 85,
    ringSize: 108,
    zIndex: 7,
  },
  {
    id: 'coord-comercial',
    name: 'Coord.',
    role: 'Comercial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Samantaportfolio(2)_0f24cb85.webp',
    top: '62%',
    left: '92%',
    photoSize: 80,
    ringSize: 102,
    zIndex: 7,
  },
];

// Decorative empty circles (just outlines)
const decorCircles = [
  { top: '5%', left: '10%', size: 28, opacity: 0.25 },
  { top: '15%', left: '88%', size: 22, opacity: 0.2 },
  { top: '35%', left: '5%', size: 18, opacity: 0.18 },
  { top: '85%', left: '88%', size: 26, opacity: 0.22 },
  { top: '92%', left: '42%', size: 20, opacity: 0.15 },
  { top: '48%', left: '95%', size: 16, opacity: 0.2 },
  { top: '8%', left: '48%', size: 14, opacity: 0.15 },
  { top: '75%', left: '4%', size: 24, opacity: 0.18 },
  { top: '30%', left: '92%', size: 20, opacity: 0.2 },
  { top: '55%', left: '30%', size: 12, opacity: 0.12 },
  { top: '22%', left: '78%', size: 16, opacity: 0.15 },
  { top: '90%', left: '68%', size: 18, opacity: 0.18 },
];

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

        {/* Team Composition - Bubble Map Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto rounded-3xl overflow-hidden"
          style={{
            maxWidth: '1100px',
            height: '700px',
            background: 'linear-gradient(135deg, #861720 0%, #7A1520 30%, #A01B28 55%, #C43A1A 75%, #EE7501 100%)',
            boxShadow: '0 30px 90px rgba(134, 23, 32, 0.35)',
          }}
        >
          {/* Concentric background circles - subtle */}
          <div className="absolute inset-0" style={{ zIndex: 0 }}>
            <div className="absolute rounded-full" style={{ width: 350, height: 350, top: '42%', left: '48%', transform: 'translate(-50%, -50%)', border: '1.5px solid rgba(255,255,255,0.06)' }} />
            <div className="absolute rounded-full" style={{ width: 520, height: 520, top: '42%', left: '48%', transform: 'translate(-50%, -50%)', border: '1.5px solid rgba(255,255,255,0.04)' }} />
            <div className="absolute rounded-full" style={{ width: 720, height: 720, top: '42%', left: '48%', transform: 'translate(-50%, -50%)', border: '1px solid rgba(255,255,255,0.03)' }} />
          </div>

          {/* Decorative empty circles (small dots with ring) */}
          {decorCircles.map((dot, i) => (
            <div
              key={`dot-${i}`}
              className="absolute rounded-full"
              style={{
                top: dot.top,
                left: dot.left,
                width: dot.size,
                height: dot.size,
                border: `3px solid rgba(255,255,255,${dot.opacity})`,
                backgroundColor: `rgba(255,255,255,${dot.opacity * 0.3})`,
                zIndex: 1,
              }}
            />
          ))}

          {/* Team Bubbles */}
          {teamBubbles.map((member, index) => {
            const isCenter = member.id === 'ceo';
            const ringGap = (member.ringSize - member.photoSize) / 2;

            return (
              <div
                key={member.id}
                className="absolute"
                style={{
                  zIndex: member.zIndex,
                  top: member.top,
                  left: member.left,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Outer glow ring */}
                  <div
                    className="rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{
                      width: member.ringSize,
                      height: member.ringSize,
                      border: isCenter
                        ? '3px solid rgba(255,255,255,0.3)'
                        : '2px solid rgba(255,255,255,0.2)',
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      boxShadow: isCenter
                        ? '0 0 40px rgba(255,255,255,0.08), inset 0 0 30px rgba(255,255,255,0.04)'
                        : '0 0 20px rgba(255,255,255,0.05), inset 0 0 15px rgba(255,255,255,0.03)',
                    }}
                  >
                    {/* Inner photo circle */}
                    <div
                      className="rounded-full overflow-hidden transition-all duration-300 group-hover:shadow-lg"
                      style={{
                        width: member.photoSize,
                        height: member.photoSize,
                        border: isCenter
                          ? '4px solid rgba(255,255,255,0.7)'
                          : '3px solid rgba(255,255,255,0.55)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
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
