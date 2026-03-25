'use client';

import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { motion } from "framer-motion";
import { Search, FileText, Pickaxe, Monitor, GraduationCap, Anchor, Database, ClipboardCheck } from "lucide-react";

/**
 * SOLUÇÕES — Página 05 (Redesenhada)
 * Design: Cards com borda lateral colorida, descrição completa, ícone, título e badge
 * - Hero limpo
 * - Cards em grid 3 colunas com borda lateral 4px colorida
 * - Descrição completa em cada card
 * - Ícone + Título + Badge
 * - Cores do Grupo Arqueo (bordo, laranja, azul, amarelo)
 * - Aparência premium e institucional
 */

// Dados das soluções com descrição completa
const solutions = [
  {
    id: 1,
    title: "Inovação Tecnológica",
    description: "Utilizamos tecnologias proprietárias e ferramentas de ponta em geoprocessamento, modelagem 3D e gestão de dados, garantindo precisão e eficiência em cada projeto.",
    icon: Database,
    badge: "Tecnologia proprietária ArqueoGIS",
    color: "#861720", // Bordo
  },
  {
    id: 2,
    title: "Equipe Multidisciplinar",
    description: "Contamos com arqueólogos, historiadores, geógrafos, biólogos, educadores e especialistas em tecnologia, formando uma equipe completa e integrada.",
    icon: Monitor,
    badge: "Profissionais especializados em cada área",
    color: "#EE7501", // Laranja
  },
  {
    id: 3,
    title: "Agilidade Processual",
    description: "Gestão estratégica de prazos e processos junto ao IPHAN e órgãos estaduais, com acompanhamento proativo de condicionantes e entregas.",
    icon: ClipboardCheck,
    badge: "Cumprimento rigoroso de cronogramas",
    color: "#2C7EB3", // Azul
  },
  {
    id: 4,
    title: "Compliance e Governança",
    description: "Programa robusto de compliance com código de conduta, política anticorrupção e gestão de riscos, assegurado em todas as operações.",
    icon: FileText,
    badge: "Código de Conduta e Política Anticorrupção",
    color: "#861720", // Bordo
  },
  {
    id: 5,
    title: "Ecossistema Integrado",
    description: "Quatro empresas especializadas operando de forma integrada, cobrindo desde a pesquisa de campo até educação patrimonial e arqueologia subaquática.",
    icon: Pickaxe,
    badge: "Solução completa em um único grupo",
    color: "#EE7501", // Laranja
  },
  {
    id: 6,
    title: "Experiência Comprovada",
    description: "Mais de 250 projetos gerenciados em 16 estados brasileiros, atendendo aos maiores empreendimentos de infraestrutura e energia do país.",
    icon: Search,
    badge: "250+ projetos em 10 anos",
    color: "#2C7EB3", // Azul
  },
];

export default function Solucoes() {
  return (
    <PortfolioLayout
      chapterNum="05"
      chapterTitle="Soluções"
      prevPath="/ecossistema"
      prevLabel="Ecossistema do Grupo"
      nextPath="/diferenciais"
      nextLabel="Diferenciais"
    >
      {/* Hero Section — Limpo e forte */}
      <section className="relative min-h-[350px] lg:min-h-[420px] flex items-center overflow-hidden">
        {/* Background image + gradient overlay */}
        <div className="absolute inset-0 -z-10">
          <img src={ASSETS.heroArqueologia} alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(249,248,246,1) 0%, rgba(249,248,246,0.98) 20%, rgba(249,248,246,0.95) 40%, rgba(249,248,246,0.85) 60%, rgba(249,248,246,0.70) 80%, rgba(249,248,246,0.50) 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
              Soluções integradas para{' '}
              <span style={{ color: '#EE7501' }}>patrimônio e arqueologia</span>
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed" style={{ color: '#666' }}>
              Um portfólio abrangente de serviços técnicos especializados, cobrindo todo o ciclo de pesquisa, gestão e preservação do patrimônio arqueológico e sociocultural.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid — Cards com borda lateral colorida */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon;
              
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                  transition={{ 
                    duration: 0.5, 
                    delay: idx * 0.08,
                    ease: 'easeOut'
                  }}
                  className="group"
                >
                  {/* Card com borda lateral */}
                  <div
                    className="h-full flex flex-col p-6 lg:p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderLeft: `4px solid ${solution.color}`,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-lg mb-4 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${solution.color}15`,
                      }}
                    >
                      <Icon
                        className="w-7 h-7"
                        style={{ color: solution.color }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg lg:text-xl font-bold mb-3 leading-tight"
                      style={{ color: '#2A2A2A' }}
                    >
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm lg:text-base leading-relaxed mb-6 flex-grow"
                      style={{ color: '#666' }}
                    >
                      {solution.description}
                    </p>

                    {/* Badge */}
                    <div
                      className="inline-block px-3 py-1.5 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: solution.color }}
                    >
                      {solution.badge}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 border-t">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#2A2A2A' }}>
              Soluções customizadas
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#666' }}>
              Além de nossos serviços principais, desenvolvemos soluções integradas e personalizadas conforme as necessidades específicas de cada projeto. Converse com nossos especialistas para conhecer as possibilidades.
            </p>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
