'use client';

import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { useI18n } from "@/i18n";
import { motion } from "framer-motion";
import { Search, FileText, Pickaxe, Monitor, GraduationCap, Anchor, Database, ClipboardCheck, Shield, Users, Lightbulb, Zap } from "lucide-react";

/**
 * SOLUÇÕES — Página 05 (Reestruturada com 3 blocos temáticos)
 * 
 * BLOCO 1: Consultoria e Assessoria (Estratégia)
 * BLOCO 2: Serviços Arqueológicos (Execução)
 * BLOCO 3: Soluções Complementares (Inovação)
 * 
 * Design: Cards com borda lateral colorida, ícone, título com fundo colorido, categoria e descrição
 * Grid responsivo 3 colunas
 * Cores do Grupo Arqueo: Azul, Bordo, Laranja, Amarelo
 */

// Componente para renderizar um bloco de serviços
function ServiceBlock({ title, subtitle, services }: { title: string; subtitle: string; services: { name: string; description: string; icon: any; color: string; category: string }[] }) {
  return (
    <section className="border-t first:border-t-0" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
      <div className="container">
        {/* Título e subtítulo do bloco */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12"
        >
          <h2 className="font-bold mb-4" style={{ color: '#2A2A2A', fontSize: 'var(--text-section-title)' }}>
            {title}
          </h2>
          <p className="leading-relaxed max-w-3xl" style={{ color: '#666', fontSize: 'var(--text-body)' }}>
            {subtitle}
          </p>
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, idx) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.name}
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
                    borderLeft: `4px solid ${service.color}`,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-lg mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${service.color}15`,
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: service.color }}
                    />
                  </div>

                  {/* Title com fundo colorido */}
                  <h3
                    className="font-bold mb-2 leading-tight px-4 py-2 rounded-full inline-block text-white"
                    style={{ fontSize: 'var(--text-subtitle)', backgroundColor: service.color }}
                  >
                    {service.name}
                  </h3>

                  {/* Category */}
                  <p
                    className="font-medium mb-4"
                    style={{ fontSize: 'var(--text-caption)', color: service.color }}
                  >
                    {service.category}
                  </p>

                  {/* Description */}
                  <p
                    className="leading-relaxed flex-grow"
                    style={{ fontSize: 'var(--text-body)', color: '#666' }}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Solucoes() {
  const { t } = useI18n();

  // BLOCO 1: Consultoria e Assessoria
  const consultoriaServices = t.solucoes.servicesConsultoria.map((service, idx) => ({
    name: service.name,
    description: service.description,
    icon: [ClipboardCheck, Lightbulb, Shield, Monitor, FileText][idx],
    color: "#2C7EB3",
    category: t.solucoes.consultoriaTitle
  }));

  // BLOCO 2: Serviços Arqueológicos
  const arqueologicosServices = t.solucoes.servicesArqueologicos.map((service, idx) => ({
    name: service.name,
    description: service.description,
    icon: [Search, FileText, Monitor, Pickaxe, Monitor, Pickaxe, Shield, Database, Anchor][idx],
    color: "#861720",
    category: t.solucoes.arqueologicosTitle
  }));

  // BLOCO 3: Soluções Complementares
  const complementaresServices = t.solucoes.servicesComplementares.map((service, idx) => ({
    name: service.name,
    description: service.description,
    icon: [Monitor, GraduationCap, Users, Database, Zap, GraduationCap][idx],
    color: "#EE7501",
    category: t.solucoes.complementaresTitle
  }));

  return (
    <PortfolioLayout
      chapterNum="05"
      chapterTitle={t.solucoes.badge.replace('04 — ', '')}
      prevPath="/missao-visao"
      prevLabel={t.home.sections.missao}
      nextPath="/diferenciais"
      nextLabel={t.home.sections.diferenciais}
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
        <div className="container relative z-10" style={{ padding: 'var(--space-section) var(--container-padding)' }}>
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
              <h1 className="font-bold leading-tight mb-6" style={{ color: '#2A2A2A', fontSize: 'var(--text-hero)' }}>
                {t.solucoes.heroTitle}{' '}
                <span style={{ color: '#EE7501' }}>{t.solucoes.heroHighlight}</span>
              </h1>

              <p className="leading-relaxed" style={{ color: '#666', fontSize: 'var(--text-body)' }}>
                {t.solucoes.heroDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOCO 1: Consultoria e Assessoria */}
      <ServiceBlock
        title={t.solucoes.consultoriaTitle}
        subtitle={t.solucoes.consultoriaSubtitle}
        services={consultoriaServices}
      />

      {/* BLOCO 2: Serviços Arqueológicos */}
      <ServiceBlock
        title={t.solucoes.arqueologicosTitle}
        subtitle={t.solucoes.arqueologicosSubtitle}
        services={arqueologicosServices}
      />

      {/* BLOCO 3: Soluções Complementares */}
      <ServiceBlock
        title={t.solucoes.complementaresTitle}
        subtitle={t.solucoes.complementaresSubtitle}
        services={complementaresServices}
      />

      {/* CTA Section */}
      <section className="border-t" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bold mb-4" style={{ color: '#2A2A2A', fontSize: 'var(--text-section-title)' }}>
              {t.solucoes.ctaTitle}
            </h2>
            <p className="leading-relaxed max-w-2xl mx-auto" style={{ color: '#666', fontSize: 'var(--text-body)' }}>
              {t.solucoes.ctaDescription}
            </p>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
