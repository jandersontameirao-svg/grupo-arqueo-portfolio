import PortfolioLayout from "@/components/PortfolioLayout";
import MapaBrasilSVG from "@/components/MapaBrasilSVG";
import { motion } from "framer-motion";
import statsData from "../data/stats.json";
import { useI18n } from "@/i18n";

/**
 * NÚMEROS & TERRITÓRIO — Página 08
 * Layout alinhado ao protótipo aprovado pela direção:
 * 1) Chamada "Mais de 400 projetos nas cinco regiões do Brasil"
 * 2) "Onde já atuamos" — 23 estados + DF, legenda e mapa estático
 * 3) "Setores atendidos" — pills
 */

export default function NumerosTerritori() {
  const { t } = useI18n();
  const p = t.numeros.proto;

  return (
    <PortfolioLayout
      chapterNum="08"
      chapterTitle={t.numeros.badge.replace('06 — ', '')}
      prevPath="/cases"
      prevLabel={t.home.sections.cases}
      nextPath="/parceiros"
      nextLabel={t.home.sections.parceiros}
    >
      {/* ═══════════ BLOCO 1: CHAMADA ═══════════ */}
      <section style={{ backgroundColor: '#FAFAF9', padding: 'var(--space-section) var(--container-padding)' }}>
        <div className="max-w-5xl mx-auto">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Semtítulo-3_aa567132.webp"
            alt="10 Anos"
            className="h-14 lg:h-16 w-auto mb-6"
          />
          <h1 className="font-bold leading-tight mb-5" style={{ color: '#1A1A1A', fontSize: 'var(--text-hero)' }}>
            {p.heroPrefix} <span style={{ color: '#861720' }}>{statsData.total_projetos} {p.projectsNoun}</span> {p.heroSuffix}
          </h1>
          <p className="max-w-3xl leading-relaxed" style={{ color: '#666', fontSize: 'var(--text-body)' }}>
            {p.lede}
          </p>
        </div>
      </section>

      {/* ═══════════ BLOCO 2: ONDE JÁ ATUAMOS ═══════════ */}
      <section style={{ backgroundColor: '#F9F8F6', padding: 'var(--space-section) var(--container-padding)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold mb-2" style={{ color: '#2A2A2A', fontSize: 'var(--text-section-title)' }}>
            {p.whereTitle}
          </h2>
          <h3 className="font-bold mb-6" style={{ color: '#861720', fontSize: 'var(--text-subtitle)' }}>
            {p.statesAndDF}
          </h3>

          {/* Legenda */}
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-sm flex-shrink-0" style={{ backgroundColor: '#861720' }} />
              <span className="text-sm" style={{ color: '#444' }}>{t.numeros.withActivity}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-sm flex-shrink-0" style={{ backgroundColor: '#C4C4C4' }} />
              <span className="text-sm" style={{ color: '#444' }}>{p.withoutActivityNote}</span>
            </div>
            <p className="pl-6 text-xs" style={{ color: '#999' }}>{p.noActivityStates}</p>
          </div>

          {/* Mapa */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <MapaBrasilSVG flat />
          </motion.div>
        </div>
      </section>

      {/* ═══════════ BLOCO 3: SETORES ATENDIDOS ═══════════ */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-section) var(--container-padding)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold mb-8" style={{ color: '#2A2A2A', fontSize: 'var(--text-section-title)' }}>
            {p.sectorsTitle}
          </h2>
          <div className="flex flex-wrap gap-4">
            {p.sectors.map((setor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="px-5 py-3 rounded-md font-medium"
                style={{
                  backgroundColor: '#F6F1F0',
                  borderLeft: '3px solid #861720',
                  color: '#3A2A2A',
                  fontSize: 'var(--text-body)',
                }}
              >
                {setor}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
