import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { Cpu, Users, Clock, ShieldCheck, Layers, TrendingUp } from "lucide-react";

/**
 * DIFERENCIAIS — Página 06
 * Design: Hero section similar to Home with image background + gradient overlay
 */

const diferenciais = [
  {
    icon: Cpu,
    title: "Inovação Tecnológica",
    desc: "Utilizamos tecnologias proprietárias e ferramentas de ponta em geoprocessamento, modelagem 3D e gestão de dados, garantindo precisão e eficiência em cada projeto.",
    highlight: "Tecnologia proprietária ArqueoGIS",
  },
  {
    icon: Users,
    title: "Equipe Multidisciplinar",
    desc: "Contamos com arqueólogos, historiadores, geógrafos, biólogos, educadores e especialistas em tecnologia, formando uma equipe completa e integrada.",
    highlight: "Profissionais especializados em cada área",
  },
  {
    icon: Clock,
    title: "Agilidade Processual",
    desc: "Gestão estratégica de prazos e processos junto ao IPHAN e órgãos estaduais, com acompanhamento proativo de condicionantes e entregas.",
    highlight: "Cumprimento rigoroso de cronogramas",
  },
  {
    icon: ShieldCheck,
    title: "Compliance e Governança",
    desc: "Programa robusto de compliance com código de conduta, política anticorrupção e gestão de riscos, assegurando integridade em todas as operações.",
    highlight: "Código de Conduta e Política Anticorrupção",
  },
  {
    icon: Layers,
    title: "Ecossistema Integrado",
    desc: "Quatro empresas especializadas operando de forma integrada, cobrindo desde a pesquisa de campo até educação patrimonial e arqueologia subaquática.",
    highlight: "Solução completa em um único grupo",
  },
  {
    icon: TrendingUp,
    title: "Experiência Comprovada",
    desc: "Mais de 250 projetos gerenciados em 16 estados brasileiros, atendendo aos maiores empreendimentos de infraestrutura e energia do país.",
    highlight: "250+ projetos em 10 anos",
  },
];

export default function Diferenciais() {
  return (
    <PortfolioLayout
      chapterNum="06"
      chapterTitle="Diferenciais"
      prevPath="/solucoes"
      prevLabel="Soluções"
      nextPath="/numeros"
      nextLabel="Números"
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
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Vantagens Competitivas</span>
            </div>
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
              O que nos torna{' '}
              <span style={{ color: '#EE7501' }}>referência</span> no setor
            </h1>
            <p className="text-base lg:text-lg font-light leading-relaxed" style={{ color: '#555', maxWidth: '600px' }}>
              Nossos diferenciais são construídos sobre uma base sólida de competência técnica, inovação tecnológica e compromisso com a excelência operacional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px my-16 lg:my-24" style={{ backgroundColor: '#E6E6E6' }} />

      {/* Diferenciais grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((dif, i) => {
              const Icon = dif.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative overflow-hidden"
                >
                  <div className="p-8 lg:p-10 h-full transition-all duration-500" style={{ backgroundColor: '#FFFFFF' }}>
                    {/* Number */}
                    <span className="absolute top-4 right-4 text-5xl font-bold" style={{ color: 'rgba(238,117,1,0.06)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="w-10 h-10 flex items-center justify-center mb-6 transition-colors duration-300" style={{ backgroundColor: '#F3EFEA' }}>
                      <Icon className="w-5 h-5 group-hover:text-[#EE7501] transition-colors" style={{ color: '#2C7EB3' }} />
                    </div>

                    <h3 className="text-base font-bold mb-3" style={{ color: '#2A2A2A' }}>{dif.title}</h3>
                    <p className="text-xs font-light leading-relaxed mb-4" style={{ color: '#888' }}>{dif.desc}</p>

                    <div className="pt-4" style={{ borderTop: '1px solid #F3EFEA' }}>
                      <p className="text-xs font-medium" style={{ color: '#EE7501' }}>{dif.highlight}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote strip */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#F3EFEA' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg lg:text-2xl font-light leading-relaxed italic" style={{ color: '#2A2A2A' }}>
              "A combinação de competência técnica, inovação tecnológica e gestão estratégica
              é o que diferencia o Grupo Arqueo no mercado de consultoria arqueológica."
            </p>
            <div className="w-12 h-0.5 mx-auto mt-8" style={{ backgroundColor: '#EE7501' }} />
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
