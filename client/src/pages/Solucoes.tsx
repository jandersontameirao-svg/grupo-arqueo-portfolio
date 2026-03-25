import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { Search, FileText, Pickaxe, Monitor, GraduationCap, Anchor, Database, ClipboardCheck } from "lucide-react";

/**
 * SOLUÇÕES — Página 05
 * Design: Hero section similar to Home with image background + gradient overlay
 */

const solucoes = [
  {
    icon: Search,
    title: "Diagnóstico Arqueológico",
    desc: "Levantamento e avaliação do potencial arqueológico de áreas destinadas a empreendimentos, com análise documental, prospecção de superfície e elaboração de laudos técnicos.",
    tags: ["Levantamento", "Análise Documental", "Prospecção"],
  },
  {
    icon: Pickaxe,
    title: "Prospecção e Resgate",
    desc: "Execução de escavações arqueológicas controladas para prospecção e resgate de sítios, com registro detalhado, coleta de material e análise laboratorial.",
    tags: ["Escavação", "Registro", "Análise Laboratorial"],
  },
  {
    icon: Monitor,
    title: "Monitoramento Arqueológico",
    desc: "Acompanhamento técnico durante obras de engenharia para garantir a preservação de eventuais vestígios arqueológicos identificados durante a execução.",
    tags: ["Acompanhamento", "Obras", "Preservação"],
  },
  {
    icon: FileText,
    title: "Laudos e Relatórios",
    desc: "Elaboração de documentação técnica completa para atendimento às exigências do IPHAN e demais órgãos reguladores do patrimônio cultural.",
    tags: ["IPHAN", "Documentação", "Conformidade"],
  },
  {
    icon: GraduationCap,
    title: "Educação Patrimonial",
    desc: "Desenvolvimento e execução de programas de educação patrimonial e comunicação social integrados aos processos de licenciamento ambiental.",
    tags: ["Programas", "Comunicação Social", "Comunidades"],
  },
  {
    icon: Anchor,
    title: "Arqueologia Subaquática",
    desc: "Pesquisa e gestão do patrimônio arqueológico subaquático e costeiro, com equipe certificada em mergulho científico e técnicas especializadas.",
    tags: ["Offshore", "Mergulho", "Patrimônio Naval"],
  },
  {
    icon: Database,
    title: "Geoprocessamento e SIG",
    desc: "Soluções de tecnologia geoespacial aplicadas à arqueologia, incluindo modelagem 3D, sensoriamento remoto e sistemas de informação geográfica.",
    tags: ["GIS", "Modelagem 3D", "Sensoriamento"],
  },
  {
    icon: ClipboardCheck,
    title: "Gestão de Licenciamento",
    desc: "Gerenciamento completo do processo de licenciamento sociocultural junto ao IPHAN e órgãos estaduais, com acompanhamento de prazos e condicionantes.",
    tags: ["IPHAN", "Prazos", "Condicionantes"],
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
      {/* Hero Section — Similar to Home */}
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
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Competências</span>
            </div>
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
              Soluções completas para o{' '}
              <span style={{ color: '#EE7501' }}>licenciamento sociocultural</span>
            </h1>
            <p className="text-base lg:text-lg font-light leading-relaxed" style={{ color: '#555', maxWidth: '600px' }}>
              Oferecemos um portfólio abrangente de serviços técnicos especializados, cobrindo todo o ciclo de pesquisa e gestão do patrimônio arqueológico e sociocultural.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px my-16 lg:my-24" style={{ backgroundColor: '#E6E6E6' }} />

      {/* Solutions grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solucoes.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group p-6 lg:p-8 transition-all duration-500 hover:-translate-y-1"
                  style={{ backgroundColor: '#FFFFFF', borderBottom: '2px solid transparent' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = '#EE7501'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = 'transparent'; }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: '#F3EFEA' }}>
                      <Icon className="w-5 h-5 group-hover:text-[#EE7501] transition-colors" style={{ color: '#2C7EB3' }} />
                    </div>
                    <div>
                      <h3 className="text-sm lg:text-base font-bold mb-2" style={{ color: '#2A2A2A' }}>{sol.title}</h3>
                      <p className="text-xs font-light leading-relaxed mb-4" style={{ color: '#888' }}>{sol.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {sol.tags.map((tag, j) => (
                          <span key={j} className="px-2 py-0.5 text-[10px] font-medium" style={{ backgroundColor: '#F3EFEA', color: '#666' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


    </PortfolioLayout>
  );
}
