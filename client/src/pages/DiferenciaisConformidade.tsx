import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { Cpu, Users, Clock, Map, Layers, TrendingUp, Shield, FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

/**
 * DIFERENCIAIS & CONFORMIDADE — Página 05
 * Design: Premium layout combining competitive advantages and compliance/certifications
 */

const diferenciais = [
  {
    icon: Layers,
    title: "Ecossistema Integrado de Soluções",
    desc: "Atuação articulada entre arqueologia, patrimônio cultural, educação, tecnologia, gestão e comunicação, com soluções complementares sob uma lógica integrada.",
    highlight: "Solução completa em um único grupo",
  },
  {
    icon: Cpu,
    title: "Tecnologia Proprietária Aplicada ao Campo",
    desc: "Uso de tecnologia própria para padronizar dados, qualificar registros, aumentar rastreabilidade e tornar a operação técnica mais eficiente.",
    highlight: "Tecnologia proprietária ArqueoGIS",
  },
  {
    icon: Clock,
    title: "Estratégia Processual com Visão de Negócio",
    desc: "Integração entre licenciamento, gestão processual, análise de risco e suporte técnico para decisões mais seguras e melhor previsibilidade operacional.",
    highlight: "Gestão estratégica de processos",
  },
  {
    icon: Map,
    title: "Inteligência Territorial e de Dados",
    desc: "Análise integrada de dados territoriais, arqueológicos e ambientais para subsidiar decisões estratégicas, identificar oportunidades e mitigar riscos em projetos de patrimônio.",
    highlight: "Inteligência aplicada ao território",
  },
  {
    icon: TrendingUp,
    title: "Especialização Técnica em Ambientes Complexos",
    desc: "Capacidade de atuação em contextos técnicos diversos, inclusive situações de maior complexidade territorial, operacional e arqueológica.",
    highlight: "Atuação em ambientes complexos",
  },
  {
    icon: Users,
    title: "Padronização com Capilaridade Nacional",
    desc: "Presença ampliada e capacidade de mobilização combinadas com processos padronizados, coordenação técnica e consistência nas entregas.",
    highlight: "Presença em 16 estados brasileiros",
  },
];

const estruturas = [
  {
    title: "Governança e Compliance",
    description: "Estrutura institucional apoiada em diretrizes internas",
    icon: Shield,
    details: "Atuação sustentada por políticas, processos, responsabilidades definidas e compromisso institucional com integridade e conformidade."
  },
  {
    title: "Padronização Operacional",
    description: "Métodos, fluxos, rotinas e parâmetros técnicos",
    icon: FileText,
    details: "Processos padronizados que asseguram consistência, controle e qualidade técnica mesmo em cenários complexos e escaláveis."
  },
  {
    title: "Integração Multidisciplinar",
    description: "Articulação entre arqueologia, gestão, patrimônio cultural, tecnologia e suporte técnico",
    icon: Users,
    details: "Soluções mais completas e coordenadas resultantes da integração entre diferentes áreas de especialização."
  },
  {
    title: "Tecnologia e Inteligência Aplicada",
    description: "Uso de soluções digitais, organização de dados, inteligência operacional e instrumentos técnicos",
    icon: Cpu,
    details: "Ferramentas e processos que ampliam eficiência, rastreabilidade e capacidade analítica para apoiar decisões e ampliar eficácia."
  },
];

const policies = [
  "Política de Compliance e Ética Corporativa",
  "Política de Proteção de Dados e Privacidade",
  "Política de Segurança da Informação",
  "Política de Responsabilidade Social Corporativa",
  "Código de Conduta Profissional",
  "Política de Gestão de Riscos",
];

export default function DiferenciaisConformidade() {
  return (
    <PortfolioLayout
      chapterNum="05"
      chapterTitle="Diferenciais & Conformidade"
      prevPath="/solucoes"
      prevLabel="Soluções"
      nextPath="/numeros-territorio"
      nextLabel="Números & Território"
    >
      {/* ═══════════════════ SEÇÃO 1: DIFERENCIAIS ═══════════════════ */}
      <section className="relative min-h-[300px] lg:min-h-[380px] flex items-center overflow-hidden" style={{ paddingTop: 'var(--space-block)', paddingBottom: 'var(--space-block)' }}>
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
            <div className="flex items-center gap-6 lg:gap-8 mb-6">
              <img src={ASSETS.logo10anos} alt="10 Anos" className="h-[5.75rem] lg:h-[6.9rem] xl:h-[8.05rem] flex-shrink-0" />
              <h1 className="font-bold leading-tight" style={{ color: '#2A2A2A', fontSize: 'var(--text-hero)' }}>
                <span className="whitespace-nowrap">O que nos torna</span><br />
                <span style={{ color: '#EE7501' }}>referência</span> no setor
              </h1>
            </div>
            <p className="text-base lg:text-lg font-light leading-relaxed" style={{ color: '#555', maxWidth: '700px' }}>
              Diferenciais que ampliam previsibilidade, inteligência aplicada e capacidade de entrega em projetos de patrimônio cultural e arqueologia preventiva.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px my-2 lg:my-4" style={{ backgroundColor: '#E6E6E6' }} />

      {/* Diferenciais Grid */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-section) var(--container-padding)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-8 rounded-xl border-l-4 transition-all hover:shadow-lg"
                  style={{
                    borderLeftColor: idx % 3 === 0 ? '#861720' : idx % 3 === 1 ? '#EE7501' : '#2C7EB3',
                    backgroundColor: '#F9F8F6',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: idx % 3 === 0 ? '#861720' : idx % 3 === 1 ? '#EE7501' : '#2C7EB3',
                      color: '#FFFFFF'
                    }}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#2A2A2A' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#666', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                  <div
                    className="text-xs font-semibold px-3 py-1 rounded-full inline-block"
                    style={{
                      backgroundColor: idx % 3 === 0 ? '#861720' : idx % 3 === 1 ? '#EE7501' : '#2C7EB3',
                      color: '#FFFFFF'
                    }}
                  >
                    {item.highlight}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div style={{ height: '1px', backgroundColor: '#E0E0E0' }} />

      {/* ═══════════════════ SEÇÃO 2: CONFORMIDADE ═══════════════════ */}
      <section style={{ backgroundColor: '#F9F8F6', padding: 'var(--space-section) var(--container-padding)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#861720' }}>Estrutura Organizacional</span>
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to left, #861720, #EE7501)' }} />
            </div>
            <h2 className="font-bold leading-tight" style={{ color: '#2A2A2A', fontSize: 'var(--text-section-title)' }}>
              Estruturas que sustentam <span style={{ color: '#861720' }}>nossa entrega</span>
            </h2>
            <p className="mt-6 text-base lg:text-lg font-light leading-relaxed max-w-3xl mx-auto" style={{ color: '#666' }}>
              Bases organizacionais, técnicas e operacionais que asseguram consistência, controle e qualidade nas entregas.
            </p>
          </motion.div>

          {/* Estruturas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {estruturas.map((item, i) => {
              const Icon = item.icon;
              const colors = ['#861720', '#EE7501', '#2C7EB3', '#861720'];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-xl border-l-4 transition-all duration-300"
                  style={{
                    borderLeftColor: colors[i],
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                    style={{ backgroundColor: colors[i], color: '#FFF' }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#2A2A2A' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: colors[i] }}>
                    {item.description}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#555' }}>
                    {item.details}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Policies Section */}
          <div className="bg-white rounded-xl p-8 lg:p-12">
            <h3 className="font-bold mb-8 text-center" style={{ color: '#2A2A2A', fontSize: 'var(--text-subtitle)' }}>
              Diretrizes <span style={{ color: '#861720' }}>institucionais</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {policies.map((policy, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ backgroundColor: '#EE7501' }}
                  >
                    <CheckCircle size={16} style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <p style={{ color: '#2A2A2A', fontWeight: 600, fontSize: '0.95rem' }}>
                      {policy}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
