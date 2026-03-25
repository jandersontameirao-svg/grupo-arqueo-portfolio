import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { Search, FileText, Pickaxe, Monitor, GraduationCap, Anchor, Database, ClipboardCheck } from "lucide-react";

/**
 * SOLUÇÕES — Página 05 (Reestruturada)
 * Design: Blocos temáticos, cards minimalistas, escalável para muitos cards
 * - Hero limpo e forte
 * - 5 blocos temáticos com títulos e descrições leves
 * - Cards minimalistas: apenas ícone + nome
 * - Dois níveis: padrão + destaque sutil
 * - Grid 3 colunas (desktop), 2 (tablet), 1 (mobile)
 * - Aparência institucional premium, não catálogo técnico
 */

// Blocos temáticos com suas soluções
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
    color: "#2C7EB3", // Azul
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
    color: "#861720", // Bordo
    solutions: [
      { name: "Geoprocessamento e SIG", icon: Database, featured: true },
      { name: "Modelagem 3D", icon: Database, featured: false },
      { name: "Sensoriamento Remoto", icon: Database, featured: false },
    ],
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
      {/* Hero Section — Moderno e compacto */}
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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Capacidades</span>
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
              Soluções integradas para{' '}
              <span style={{ color: '#EE7501' }}>patrimônio e arqueologia</span>
            </h1>
            <p className="text-base lg:text-lg font-light leading-relaxed" style={{ color: '#666', maxWidth: '650px' }}>
              Um portfólio abrangente de serviços técnicos especializados, cobrindo todo o ciclo de pesquisa, gestão e preservação do patrimônio arqueológico e sociocultural.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px my-8 lg:my-12" style={{ backgroundColor: '#E6E6E6' }} />

      {/* Solution Blocks — Modular, scalable architecture */}
      <section className="py-10 lg:py-16">
        <div className="container">
          {solutionBlocks.map((block, blockIdx) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: blockIdx * 0.1 }}
              className={`mb-12 lg:mb-16 ${blockIdx !== solutionBlocks.length - 1 ? 'pb-12 lg:pb-16 border-b' : ''}`}
              style={{ borderBottomColor: blockIdx !== solutionBlocks.length - 1 ? '#E6E6E6' : 'transparent' }}
            >
              {/* Block Header */}
              <div className="mb-8 lg:mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6" style={{ backgroundColor: block.color }} />
                  <h2 className="text-2xl lg:text-3xl font-bold" style={{ color: '#2A2A2A' }}>
                    {block.title}
                  </h2>
                </div>
                <p className="text-sm lg:text-base font-light leading-relaxed" style={{ color: '#888', maxWidth: '700px' }}>
                  {block.description}
                </p>
              </div>

              {/* Solutions Grid — Minimalist cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                {block.solutions.map((sol, solIdx) => {
                  const Icon = sol.icon;
                  const isFeatured = sol.featured;

                  return (
                    <motion.div
                      key={solIdx}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                      transition={{ 
                        duration: 0.5, 
                        delay: solIdx * 0.06,
                        ease: 'easeOut'
                      }}
                      className="group cursor-pointer transition-all duration-500 hover:-translate-y-0.5"
                    >
                      {/* Card container — Minimalist and premium */}
                      <div
                        className={`h-full flex flex-col items-center justify-center p-5 lg:p-6 rounded-lg transition-all duration-500 text-center ${
                          isFeatured ? 'hover:shadow-lg' : 'hover:shadow-md'
                        }`}
                        style={{
                          backgroundColor: isFeatured ? '#FAFAF8' : '#FFFFFF',
                          border: `1px solid ${isFeatured ? block.color : '#E6E6E6'}`,
                          boxShadow: isFeatured ? `0 2px 8px ${block.color}14` : '0 1px 3px rgba(0,0,0,0.06)',
                        }}
                      >
                        {/* Icon — Premium styling */}
                        <div
                          className="mb-3 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-105"
                          style={{
                            backgroundColor: isFeatured ? `${block.color}15` : '#F3EFEA',
                          }}
                        >
                          <Icon
                            className="w-6 h-6 transition-colors duration-300"
                            style={{
                              color: isFeatured ? block.color : '#999',
                            }}
                          />
                        </div>

                        {/* Title — Clean and legible */}
                        <h3
                          className="text-sm lg:text-base font-semibold leading-tight"
                          style={{ color: '#2A2A2A' }}
                        >
                          {sol.name}
                        </h3>

                        {/* Featured indicator — Subtle */}
                        {isFeatured && (
                          <div className="mt-2 text-[10px] font-medium uppercase tracking-wider" style={{ color: block.color }}>
                            Destaque
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section — Closing institutional message */}
      <section className="py-10 lg:py-12 border-t" style={{ borderTopColor: '#E6E6E6' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h3 className="text-base lg:text-lg font-bold mb-3" style={{ color: '#2A2A2A' }}>
              Soluções customizadas
            </h3>
            <p className="text-xs lg:text-sm font-light leading-relaxed" style={{ color: '#888' }}>
              Além de nossos serviços principais, desenvolvemos soluções integradas e personalizadas conforme as necessidades específicas de cada projeto. Converse com nossos especialistas para conhecer as possibilidades.
            </p>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
