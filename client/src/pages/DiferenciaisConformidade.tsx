import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { Cpu, Users, Clock, Map, Layers, TrendingUp, Shield, FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

/**
 * DIFERENCIAIS & CONFORMIDADE — Página 05
 * Design: Premium layout combining competitive advantages and compliance/certifications
 */

export default function DiferenciaisConformidade() {
  const { t } = useI18n();

  const diferenciais = [
    {
      icon: Layers,
      title: t.diferenciais.items.d1.title,
      desc: t.diferenciais.items.d1.desc,
      highlight: t.diferenciais.items.d1.highlight,
    },
    {
      icon: Cpu,
      title: t.diferenciais.items.d2.title,
      desc: t.diferenciais.items.d2.desc,
      highlight: t.diferenciais.items.d2.highlight,
    },
    {
      icon: Clock,
      title: t.diferenciais.items.d3.title,
      desc: t.diferenciais.items.d3.desc,
      highlight: t.diferenciais.items.d3.highlight,
    },
    {
      icon: Map,
      title: t.diferenciais.items.d4.title,
      desc: t.diferenciais.items.d4.desc,
      highlight: t.diferenciais.items.d4.highlight,
    },
    {
      icon: TrendingUp,
      title: t.diferenciais.items.d5.title,
      desc: t.diferenciais.items.d5.desc,
      highlight: t.diferenciais.items.d5.highlight,
    },
    {
      icon: Users,
      title: t.diferenciais.items.d6.title,
      desc: t.diferenciais.items.d6.desc,
      highlight: t.diferenciais.items.d6.highlight,
    },
  ];

  const estruturas = [
    {
      title: t.diferenciais.structures.s1.title,
      description: t.diferenciais.structures.s1.description,
      icon: Shield,
    },
    {
      title: t.diferenciais.structures.s2.title,
      description: t.diferenciais.structures.s2.description,
      icon: FileText,
    },
    {
      title: t.diferenciais.structures.s3.title,
      description: t.diferenciais.structures.s3.description,
      icon: Users,
    },
    {
      title: t.diferenciais.structures.s4.title,
      description: t.diferenciais.structures.s4.description,
      icon: Cpu,
    },
  ];

  const policies = t.diferenciais.policies;

  return (
    <PortfolioLayout
      chapterNum="05"
      chapterTitle={t.diferenciais.badge.replace('05 — ', '')}
      prevPath="/solucoes"
      prevLabel={t.home.sections.solucoes}
      nextPath="/numeros-territorio"
      nextLabel={t.home.sections.numeros}
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
              <span className="font-medium tracking-[0.3em] uppercase" style={{ color: '#861720', fontSize: 'var(--text-caption)' }}>{t.diferenciais.conformitySection.label}</span>
            </div>
            <div className="flex items-center gap-6 lg:gap-8 mb-6">
              <img src={ASSETS.logo10anos} alt="10 Anos" className="h-[5.75rem] lg:h-[6.9rem] xl:h-[8.05rem] flex-shrink-0" />
              <h1 className="font-bold leading-tight" style={{ color: '#2A2A2A', fontSize: 'var(--text-hero)' }}>
                <span className="whitespace-nowrap">{t.diferenciais.heroTitle}</span><br />
                <span style={{ color: '#EE7501' }}>{t.diferenciais.heroHighlight}</span> {t.diferenciais.heroEnd}
              </h1>
            </div>
            <p className="font-light leading-relaxed" style={{ color: '#555', maxWidth: '700px', fontSize: 'var(--text-body)' }}>
              {t.diferenciais.heroDescription}
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
                  <h3 className="font-bold mb-3" style={{ color: '#2A2A2A', fontSize: 'var(--text-subtitle)' }}>
                    {item.title}
                  </h3>
                  <p className="mb-4" style={{ color: '#666', lineHeight: '1.6', fontSize: 'var(--text-small)' }}>
                    {item.desc}
                  </p>
                  <div
                    className="font-semibold px-3 py-1 rounded-full inline-block"
                    style={{
                      fontSize: 'var(--text-caption)',
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
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }} />
              <span className="font-semibold tracking-[0.4em] uppercase" style={{ color: '#861720', fontSize: 'var(--text-caption)' }}>{t.diferenciais.conformitySection.label}</span>
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to left, #861720, #EE7501)' }} />
            </div>
            <h2 className="font-bold leading-tight" style={{ color: '#2A2A2A', fontSize: 'var(--text-section-title)' }}>
              {t.diferenciais.conformitySection.title}
            </h2>
            <p className="mt-6 font-light leading-relaxed max-w-3xl mx-auto" style={{ color: '#666', fontSize: 'var(--text-body)' }}>
              {t.diferenciais.conformitySection.description}
            </p>
          </motion.div>

          {/* Estruturas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
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
                  <h3 className="font-bold mb-2" style={{ color: '#2A2A2A', fontSize: 'var(--text-subtitle)' }}>
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#555', fontSize: 'var(--text-small)' }}>
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Policies Section */}
          <div className="bg-white rounded-xl p-8 lg:p-12">
            <h3 className="font-bold mb-8 text-center" style={{ color: '#2A2A2A', fontSize: 'var(--text-subtitle)' }}>
              {t.diferenciais.policiesTitle}
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
