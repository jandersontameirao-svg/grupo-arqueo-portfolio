'use client';

import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { motion } from "framer-motion";
import { Search, FileText, Pickaxe, Monitor, GraduationCap, Anchor, Database, ClipboardCheck } from "lucide-react";

/**
 * SOLUÇÕES — Página 05 (Redesenhada com novo layout)
 * Design: Cards com borda lateral colorida, descrição, ícone, título e badge
 * - Conteúdo original mantido (5 blocos temáticos)
 * - Novo layout: borda lateral 4px colorida, ícone, título, descrição, badge
 * - Grid 3 colunas responsivo
 * - Cores do Grupo Arqueo
 */

// Blocos temáticos com suas soluções - CONTEÚDO ORIGINAL
const solutionBlocks = [
  {
    id: "pesquisa",
    title: "Pesquisa e Diagnóstico",
    description: "Levantamentos especializados e avaliações técnicas para identificar potencial arqueológico e patrimônio cultural.",
    color: "#2C7EB3", // Azul
    solutions: [
      { name: "Diagnóstico Arqueológico", icon: Search, featured: true },
      { name: "Prospecção e Resgate", icon: Pickaxe, featured: false },
      { name: "Pesquisa Documental", icon: FileText, featured: false },
    ],
  },
  {
    id: "gestao",
    title: "Gestão e Licenciamento",
    description: "Gerenciamento completo de processos de licenciamento e conformidade regulatória junto ao IPHAN.",
    color: "#861720", // Bordo
    solutions: [
      { name: "Gestão de Licenciamento", icon: ClipboardCheck, featured: true },
      { name: "Laudos e Relatórios", icon: FileText, featured: false },
      { name: "Conformidade Regulatória", icon: Monitor, featured: false },
    ],
  },
  {
    id: "patrimonio",
    title: "Patrimônio e Educação",
    description: "Programas de preservação, educação patrimonial e comunicação social integrada.",
    color: "#EE7501", // Laranja
    solutions: [
      { name: "Educação Patrimonial", icon: GraduationCap, featured: true },
      { name: "Comunicação Social", icon: FileText, featured: false },
      { name: "Preservação Comunitária", icon: Monitor, featured: false },
    ],
  },
  {
    id: "monitoramento",
    title: "Monitoramento e Salvamento",
    description: "Acompanhamento técnico durante obras e pesquisa especializada em patrimônio subaquático.",
    color: "#F4C430", // Amarelo
    solutions: [
      { name: "Monitoramento Arqueológico", icon: Monitor, featured: true },
      { name: "Arqueologia Subaquática", icon: Anchor, featured: false },
      { name: "Resgate de Sítios", icon: Pickaxe, featured: false },
    ],
  },
  {
    id: "tecnologia",
    title: "Tecnologia e Suporte Técnico",
    description: "Soluções geoespaciais avançadas e tecnologia aplicada à arqueologia e patrimônio cultural.",
    color: "#EE7501", // Laranja
    solutions: [
      { name: "Geoprocessamento e SIG", icon: Database, featured: true },
      { name: "Modelagem 3D", icon: Database, featured: false },
      { name: "Sensoriamento Remoto", icon: Database, featured: false },
    ],
  },
];

// Flattened array de todas as soluções para novo layout
const allSolutions = solutionBlocks.flatMap((block) =>
  block.solutions.map((sol) => ({
    ...sol,
    blockTitle: block.title,
    blockColor: block.color,
    blockDescription: block.description,
  }))
);

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
          <div className="flex items-start gap-8 lg:gap-12">
            {/* Logo 10 anos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block flex-shrink-0"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Semtítulo-3_aa567132.webp"
                alt="10 anos Grupo Arqueo"
                className="w-80 h-auto"
              />
            </motion.div>

            {/* Text Content */}
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
        </div>
      </section>

      {/* Solutions Grid — Cards com borda lateral colorida */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {allSolutions.map((solution, idx) => {
              const Icon = solution.icon;
              
              return (
                <motion.div
                  key={`${solution.blockTitle}-${solution.name}`}
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
                      borderLeft: `4px solid ${solution.blockColor}`,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-lg mb-4 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${solution.blockColor}15`,
                      }}
                    >
                      <Icon
                        className="w-7 h-7"
                        style={{ color: solution.blockColor }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg lg:text-xl font-bold mb-2 leading-tight px-4 py-2 rounded-full inline-block text-white"
                      style={{ backgroundColor: solution.blockColor }}
                    >
                      {solution.name}
                    </h3>

                    {/* Block Category */}
                    <p
                      className="text-xs font-medium mb-3"
                      style={{ color: solution.blockColor }}
                    >
                      {solution.blockTitle}
                    </p>

                    {/* Description */}
                    <p
                      className="text-sm lg:text-base leading-relaxed mb-6 flex-grow"
                      style={{ color: '#666' }}
                    >
                      {solution.blockDescription}
                    </p>

                    {/* Badge - Featured indicator */}
                    {solution.featured && (
                      <div
                        className="inline-block px-3 py-1.5 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: solution.blockColor }}
                      >
                        Solução Estratégica
                      </div>
                    )}
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
