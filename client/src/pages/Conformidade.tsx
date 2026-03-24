import PortfolioLayout from "@/components/PortfolioLayout";
import { motion } from "framer-motion";
import { CheckCircle, Shield, FileText, Award } from "lucide-react";

export default function Conformidade() {
  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Gestão da Qualidade",
      icon: Award,
      details: "Sistema de gestão da qualidade para consultoria arqueológica"
    },
    {
      title: "ISO 14001:2015",
      description: "Gestão Ambiental",
      icon: Shield,
      details: "Compromisso com sustentabilidade e responsabilidade ambiental"
    },
    {
      title: "Licenciamento Ambiental",
      description: "Conformidade Regulatória",
      icon: FileText,
      details: "Certificações e alinhamento com legislação ambiental brasileira"
    },
    {
      title: "Conformidade LGPD",
      description: "Proteção de Dados",
      icon: CheckCircle,
      details: "Proteção de dados pessoais e privacidade conforme LGPD"
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

  return (
    <PortfolioLayout
      chapterNum="11"
      chapterTitle="Conformidade"
      nextPath="/contato"
      nextLabel="Contato"
    >
      {/* ═══════════════════ CERTIFICAÇÕES SECTION ═══════════════════ */}
      <section className="py-20 lg:py-28 relative" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
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
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#861720' }}>Certificações</span>
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to left, #861720, #EE7501)' }} />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight" style={{ color: '#2A2A2A' }}>
              Certificações e <span style={{ color: '#861720' }}>Acreditações</span>
            </h2>
            <p className="mt-6 text-base lg:text-lg font-light leading-relaxed max-w-3xl mx-auto" style={{ color: '#666' }}>
              Mantemos as mais rigorosas certificações internacionais para garantir qualidade, segurança e conformidade em todas as operações.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-xl border transition-all duration-300"
                  style={{
                    borderColor: '#E0E0E0',
                    backgroundColor: '#FAFAFA',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: cert.icon === Award ? '#861720' : cert.icon === Shield ? '#EE7501' : cert.icon === FileText ? '#2C7EB3' : '#861720', color: '#FFF' }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#2A2A2A' }}>
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: '#861720' }}>
                    {cert.description}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
                    {cert.details}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ POLÍTICAS SECTION ═══════════════════ */}
      <section className="py-20 lg:py-28 relative" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #2C7EB3, #861720)' }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#2C7EB3' }}>Políticas</span>
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to left, #2C7EB3, #861720)' }} />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight" style={{ color: '#2A2A2A' }}>
              Políticas <span style={{ color: '#2C7EB3' }}>Corporativas</span>
            </h2>
            <p className="mt-6 text-base lg:text-lg font-light leading-relaxed max-w-3xl mx-auto" style={{ color: '#666' }}>
              Conjunto abrangente de políticas que orientam nossas operações e relacionamentos com stakeholders.
            </p>
          </motion.div>

          {/* Policies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {policies.map((policy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-lg flex items-start gap-4"
                style={{
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  border: '1px solid #E8E8E8'
                }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: '#861720', color: '#FFF' }}
                >
                  <CheckCircle size={16} />
                </div>
                <p className="text-base font-medium" style={{ color: '#2A2A2A' }}>
                  {policy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ COMMITMENT SECTION ═══════════════════ */}
      <section className="py-20 lg:py-28 relative" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
              Nosso Compromisso com <span style={{ color: '#861720' }}>Conformidade</span>
            </h2>
            <p className="text-base lg:text-lg font-light leading-relaxed mb-8" style={{ color: '#666' }}>
              O Grupo Arqueo reafirma seu compromisso inabalável com a conformidade regulatória, ética corporativa e responsabilidade social. Cada membro de nossa equipe está treinado e comprometido com estes princípios, garantindo que todas as operações ocorram dentro dos mais altos padrões de integridade e transparência.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 rounded-lg" style={{ backgroundColor: '#861720', color: '#FFF' }}>
                <p className="font-semibold">100% Conformidade</p>
              </div>
              <div className="px-6 py-3 rounded-lg" style={{ backgroundColor: '#EE7501', color: '#FFF' }}>
                <p className="font-semibold">Auditoria Contínua</p>
              </div>
              <div className="px-6 py-3 rounded-lg" style={{ backgroundColor: '#2C7EB3', color: '#FFF' }}>
                <p className="font-semibold">Transparência Total</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
