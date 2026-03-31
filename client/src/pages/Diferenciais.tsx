import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { Zap, Code, Compass, Lock, Users, Globe, CheckCircle, Cog, Network, Lightbulb } from "lucide-react";

/**
 * DIFERENCIAIS — Página 06 (Reestruturada)
 * Arquitetura: 3 seções estratégicas
 * Seção 1: 6 diferenciais competitivos reais (forte, premium)
 * Seção 2: 4 estruturas de sustentação institucional (discreta)
 * Bloco Final: Diretrizes Institucionais (integrado)
 */

// SEÇÃO 1: Diferenciais Competitivos
const diferenciais = [
  {
    icon: Network,
    title: "Ecossistema Integrado de Soluções",
    desc: "Atuação articulada entre arqueologia, patrimônio cultural, educação, tecnologia, gestão e comunicação, com soluções complementares sob uma lógica integrada.",
  },
  {
    icon: Code,
    title: "Tecnologia Proprietária Aplicada ao Campo",
    desc: "Uso de tecnologia própria para padronizar dados, qualificar registros, aumentar rastreabilidade e tornar a operação técnica mais eficiente.",
  },
  {
    icon: Compass,
    title: "Estratégia Processual com Visão de Negócio",
    desc: "Integração entre licenciamento, gestão processual, análise de risco e suporte técnico para decisões mais seguras e melhor previsibilidade operacional.",
  },
  {
    icon: Lock,
    title: "Governança, Ética e Compliance",
    desc: "Estrutura institucional apoiada em diretrizes internas, integridade corporativa, compromisso ético e mecanismos formais de conformidade.",
  },
  {
    icon: Zap,
    title: "Especialização Técnica em Ambientes Complexos",
    desc: "Capacidade de atuação em contextos técnicos diversos, inclusive situações de maior complexidade territorial, operacional e arqueológica.",
  },
  {
    icon: Globe,
    title: "Padronização com Capilaridade Nacional",
    desc: "Presença ampliada e capacidade de mobilização combinadas com processos padronizados, coordenação técnica e consistência nas entregas.",
  },
];

// SEÇÃO 2: Estruturas de Sustentação
const estruturas = [
  {
    icon: Lock,
    title: "Governança e Compliance",
    desc: "Atuação sustentada por políticas, processos, responsabilidades definidas e compromisso institucional com integridade e conformidade.",
  },
  {
    icon: Cog,
    title: "Padronização Operacional",
    desc: "Métodos, fluxos, rotinas e parâmetros técnicos que asseguram consistência, controle e qualidade nas entregas.",
  },
  {
    icon: Users,
    title: "Integração Multidisciplinar",
    desc: "Articulação entre arqueologia, gestão, patrimônio cultural, tecnologia e suporte técnico para soluções mais completas.",
  },
  {
    icon: Lightbulb,
    title: "Tecnologia e Inteligência Aplicada",
    desc: "Uso de soluções digitais, organização de dados, inteligência operacional e instrumentos técnicos para apoiar decisões e ampliar eficiência.",
  },
];

// Diretrizes Institucionais
const diretrizes = [
  "Política de Compliance e Ética Corporativa",
  "Política de Segurança da Informação",
  "Código de Conduta Profissional",
  "Política de Proteção de Dados e Privacidade",
  "Política de Responsabilidade Social Corporativa",
  "Política de Gestão de Riscos",
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
      {/* Hero Section */}
      <section className="relative min-h-[350px] lg:min-h-[400px] flex items-center overflow-hidden py-8 lg:py-12">
        <div className="absolute inset-0 -z-10">
          <img src={ASSETS.heroArqueologia} alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(249,248,246,1) 0%, rgba(249,248,246,0.98) 20%, rgba(249,248,246,0.95) 40%, rgba(249,248,246,0.85) 60%, rgba(249,248,246,0.70) 80%, rgba(249,248,246,0.50) 100%)'
            }}
          />
        </div>

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
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Diferenciais Estratégicos</span>
            </div>
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
              O que nos torna <span style={{ color: '#EE7501' }}>referência</span> no setor
            </h1>
            <p className="text-base lg:text-lg font-light leading-relaxed" style={{ color: '#555', maxWidth: '700px' }}>
              Mais do que executar estudos arqueológicos, o Grupo Arqueo integra estratégia, tecnologia, governança e especialização técnica para oferecer previsibilidade, conformidade e inteligência aplicada ao licenciamento e à gestão do patrimônio cultural.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px my-2 lg:my-4" style={{ backgroundColor: '#E6E6E6' }} />

      {/* SEÇÃO 1: Diferenciais Competitivos */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {diferenciais.map((dif, i) => {
              const Icon = dif.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group"
                >
                  <div className="p-8 lg:p-10 h-full bg-white rounded-lg transition-all duration-500 hover:shadow-lg border border-transparent hover:border-gray-100">
                    {/* Icon */}
                    <div className="w-12 h-12 flex items-center justify-center mb-6 rounded-lg transition-all duration-300" style={{ backgroundColor: '#F3EFEA' }}>
                      <Icon className="w-6 h-6 transition-colors" style={{ color: '#2C7EB3' }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-4 leading-tight" style={{ color: '#2A2A2A' }}>
                      {dif.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm font-light leading-relaxed" style={{ color: '#666' }}>
                      {dif.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Separador Visual entre Seções */}
      <div className="py-8 lg:py-12">
        <div className="container">
          <div className="h-px" style={{ backgroundColor: '#E6E6E6' }} />
        </div>
      </div>

      {/* SEÇÃO 2: Estruturas de Sustentação */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#861720' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Fundamentos Internos</span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold mb-4" style={{ color: '#2A2A2A' }}>
              Estruturas que sustentam nossa entrega
            </h2>
            <p className="text-base font-light leading-relaxed" style={{ color: '#666', maxWidth: '700px' }}>
              A consistência da nossa atuação é resultado de bases organizacionais, técnicas e operacionais que reforçam qualidade, previsibilidade e capacidade de execução em diferentes contextos do licenciamento e do patrimônio cultural.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {estruturas.map((est, i) => {
              const Icon = est.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group"
                >
                  <div className="p-8 lg:p-10 h-full bg-white rounded-lg border-l-4 transition-all duration-500" style={{ borderLeftColor: '#861720' }}>
                    {/* Icon */}
                    <div className="w-10 h-10 flex items-center justify-center mb-5 rounded-lg" style={{ backgroundColor: '#F3EFEA' }}>
                      <Icon className="w-5 h-5" style={{ color: '#861720' }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold mb-3" style={{ color: '#2A2A2A' }}>
                      {est.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm font-light leading-relaxed" style={{ color: '#666' }}>
                      {est.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Separador */}
      <div className="h-px" style={{ backgroundColor: '#E6E6E6' }} />

      {/* BLOCO FINAL: Diretrizes Institucionais */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#2C7EB3' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#2C7EB3' }}>Compromisso Institucional</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold mb-10" style={{ color: '#2A2A2A' }}>
              Diretrizes institucionais
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {diretrizes.map((diretriz, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-4 p-6 rounded-lg bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#2C7EB3' }} />
                  <p className="text-sm font-medium" style={{ color: '#2A2A2A' }}>
                    {diretriz}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-lg" style={{ backgroundColor: '#F3EFEA' }}>
              <p className="text-sm font-light leading-relaxed text-center" style={{ color: '#666' }}>
                Essas diretrizes refletem nosso compromisso com a excelência operacional, integridade corporativa e responsabilidade social, formando a base sobre a qual construímos relacionamentos duradouros com clientes, parceiros e a sociedade.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
