import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { Search, FileText, Pickaxe, Monitor, GraduationCap, Anchor, Database, ClipboardCheck } from "lucide-react";

/**
 * SOLUÇÕES — Página 05
 * Design: Sistema escalável, modular e elegante para suportar muitos cards
 * - Hero forte com headline clara
 * - Grid responsivo com cards modulares
 * - Dois níveis de cards (padrão + destaque)
 * - Espaçamento inteligente e sofisticado
 * - Escalabilidade sem monotonia
 */

const solucoes = [
  {
    icon: Search,
    title: "Diagnóstico Arqueológico",
    desc: "Levantamento e avaliação do potencial arqueológico de áreas destinadas a empreendimentos, com análise documental, prospecção de superfície e elaboração de laudos técnicos.",
    tags: ["Levantamento", "Análise Documental", "Prospecção"],
    featured: true,
  },
  {
    icon: Pickaxe,
    title: "Prospecção e Resgate",
    desc: "Execução de escavações arqueológicas controladas para prospecção e resgate de sítios, com registro detalhado, coleta de material e análise laboratorial.",
    tags: ["Escavação", "Registro", "Análise Laboratorial"],
    featured: false,
  },
  {
    icon: Monitor,
    title: "Monitoramento Arqueológico",
    desc: "Acompanhamento técnico durante obras de engenharia para garantir a preservação de eventuais vestígios arqueológicos identificados durante a execução.",
    tags: ["Acompanhamento", "Obras", "Preservação"],
    featured: false,
  },
  {
    icon: FileText,
    title: "Laudos e Relatórios",
    desc: "Elaboração de documentação técnica completa para atendimento às exigências do IPHAN e demais órgãos reguladores do patrimônio cultural.",
    tags: ["IPHAN", "Documentação", "Conformidade"],
    featured: true,
  },
  {
    icon: GraduationCap,
    title: "Educação Patrimonial",
    desc: "Desenvolvimento e execução de programas de educação patrimonial e comunicação social integrados aos processos de licenciamento ambiental.",
    tags: ["Programas", "Comunicação Social", "Comunidades"],
    featured: false,
  },
  {
    icon: Anchor,
    title: "Arqueologia Subaquática",
    desc: "Pesquisa e gestão do patrimônio arqueológico subaquático e costeiro, com equipe certificada em mergulho científico e técnicas especializadas.",
    tags: ["Offshore", "Mergulho", "Patrimônio Naval"],
    featured: false,
  },
  {
    icon: Database,
    title: "Geoprocessamento e SIG",
    desc: "Soluções de tecnologia geoespacial aplicadas à arqueologia, incluindo modelagem 3D, sensoriamento remoto e sistemas de informação geográfica.",
    tags: ["GIS", "Modelagem 3D", "Sensoriamento"],
    featured: true,
  },
  {
    icon: ClipboardCheck,
    title: "Gestão de Licenciamento",
    desc: "Gerenciamento completo do processo de licenciamento sociocultural junto ao IPHAN e órgãos estaduais, com acompanhamento de prazos e condicionantes.",
    tags: ["IPHAN", "Prazos", "Condicionantes"],
    featured: false,
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
      {/* Hero Section — Redesigned for strength and clarity */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden">
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
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Portfólio de Soluções</span>
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
              Soluções integradas para o{' '}
              <span style={{ color: '#EE7501' }}>licenciamento sociocultural</span>
            </h1>
            <p className="text-base lg:text-lg font-light leading-relaxed" style={{ color: '#666', maxWidth: '650px' }}>
              Oferecemos um portfólio abrangente e modular de serviços técnicos especializados, cobrindo todo o ciclo de pesquisa, gestão e preservação do patrimônio arqueológico e sociocultural.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px my-16 lg:my-24" style={{ backgroundColor: '#E6E6E6' }} />

      {/* Solutions grid — Scalable, modular system */}
      <section className="py-16 lg:py-28">
        <div className="container">
          {/* Grid header with context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <p className="text-sm font-light" style={{ color: '#888', maxWidth: '700px' }}>
              Cada solução é desenvolvida sob medida, combinando expertise técnica, inovação metodológica e conformidade regulatória. Navegue por nossos serviços principais ou entre em contato para soluções customizadas.
            </p>
          </motion.div>

          {/* Masonry-inspired grid with variable heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solucoes.map((sol, i) => {
              const Icon = sol.icon;
              const isFeatured = sol.featured;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`group transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                    isFeatured ? 'lg:col-span-1' : ''
                  }`}
                >
                  {/* Card container with modular styling */}
                  <div
                    className={`h-full flex flex-col p-7 lg:p-8 rounded-lg transition-all duration-500 ${
                      isFeatured
                        ? 'border-l-4 hover:shadow-lg'
                        : 'border-l-2 hover:shadow-md'
                    }`}
                    style={{
                      backgroundColor: isFeatured ? '#FAFAF8' : '#FFFFFF',
                      borderLeftColor: isFeatured ? '#EE7501' : '#D0D0D0',
                      boxShadow: isFeatured ? '0 4px 12px rgba(238, 117, 1, 0.08)' : 'none',
                    }}
                  >
                    {/* Featured badge */}
                    {isFeatured && (
                      <div className="mb-4">
                        <span
                          className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded"
                          style={{ backgroundColor: '#EE7501', color: '#FFFFFF' }}
                        >
                          Destaque
                        </span>
                      </div>
                    )}

                    {/* Icon container — Premium styling */}
                    <div className="mb-5 flex items-start">
                      <div
                        className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg transition-all duration-300 ${
                          isFeatured ? 'group-hover:scale-110' : 'group-hover:scale-105'
                        }`}
                        style={{
                          backgroundColor: isFeatured ? 'rgba(238, 117, 1, 0.12)' : '#F3EFEA',
                        }}
                      >
                        <Icon
                          className="w-6 h-6 transition-colors duration-300"
                          style={{
                            color: isFeatured ? '#EE7501' : '#2C7EB3',
                          }}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-base lg:text-lg font-bold mb-3 leading-tight"
                      style={{ color: '#2A2A2A' }}
                    >
                      {sol.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm font-light leading-relaxed mb-5 flex-grow"
                      style={{ color: '#777' }}
                    >
                      {sol.desc}
                    </p>

                    {/* Tags — Modular and scalable */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderTopColor: '#E6E6E6' }}>
                      {sol.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 text-[11px] font-medium rounded transition-colors duration-300"
                          style={{
                            backgroundColor: isFeatured ? '#EE7501' : '#F3EFEA',
                            color: isFeatured ? '#FFFFFF' : '#666',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Spacer for future expansion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 lg:mt-28 pt-16 lg:pt-20 border-t"
            style={{ borderTopColor: '#E6E6E6' }}
          >
            <div className="max-w-2xl">
              <h3 className="text-lg lg:text-xl font-bold mb-4" style={{ color: '#2A2A2A' }}>
                Soluções customizadas
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: '#888' }}>
                Além de nossos serviços principais, desenvolvemos soluções integradas e personalizadas conforme as necessidades específicas de cada projeto. Converse com nossos especialistas para conhecer as possibilidades.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
