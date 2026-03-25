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
    name: 'CEO',
    role: 'Arqueóloga',
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
    name: 'Assessor Jurídico',
    role: '',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/SilvioPortfolio2_d43b29f1.webp',
  },
  {
    id: 'coord-comercial',
    name: 'Coord. Comercial',
    role: 'e de Relacionamento',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Samantaportfolio(2)_0f24cb85.webp',
  },
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

        {/* Team Grid - Same size circles in rows */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="rounded-3xl overflow-hidden py-16 px-8"
          style={{
            background: 'linear-gradient(135deg, #861720 0%, #6B1219 25%, #A01B28 50%, #EE7501 100%)',
            boxShadow: '0 30px 90px rgba(134, 23, 32, 0.35)',
          }}
        >
          {/* Grid of team members */}
          <div className="flex flex-wrap justify-center gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center group cursor-pointer"
                style={{ width: '165px' }}
              >
                {/* Outer ring */}
                <div
                  className="rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                  style={{
                    width: 150,
                    height: 150,
                    border: '2px solid rgba(255,255,255,0.2)',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    boxShadow: '0 0 20px rgba(255,255,255,0.05), inset 0 0 15px rgba(255,255,255,0.03)',
                  }}
                >
                  {/* Inner photo circle */}
                  <div
                    className="rounded-full overflow-hidden transition-all duration-300 group-hover:shadow-lg"
                    style={{
                      width: 130,
                      height: 130,
                      border: '3px solid rgba(255,255,255,0.6)',
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

                {/* Name and Role */}
                <div className="mt-4 text-center">
                  <p className="text-white font-semibold text-xs leading-tight drop-shadow-lg">
                    {member.name}
                  </p>
                  {member.role && (
                    <p className="text-white/70 text-[10px] leading-tight mt-0.5 drop-shadow-lg">
                      {member.role}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
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
