import { Building2, Globe, BookOpen, Lightbulb, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { useI18n } from "@/i18n";

/**
 * QUEM SOMOS & ECOSSISTEMA — Página 02
 * Design: Premium modern layout combining company history and ecosystem structure
 * Sections: Timeline + Ecossistema com 6 empresas + Pilares da Sinergia
 */

export default function QuemSomosEcossistema() {
  const { t } = useI18n();
  const [selectedEmpresa, setSelectedEmpresa] = useState<string | null>(null);
  const [hoveredEmpresa, setHoveredEmpresa] = useState<string | null>(null);
  const [currentPilarIndex, setCurrentPilarIndex] = useState(0);
  const [diagramLoaded, setDiagramLoaded] = useState(false);
  const [hoveredTimelineIdx, setHoveredTimelineIdx] = useState<number | null>(null);
  const [showProposalForm, setShowProposalForm] = useState(false);
  const [selectedProposalCompany, setSelectedProposalCompany] = useState<string | null>(null);
  const [proposalFormData, setProposalFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [proposalSubmitting, setProposalSubmitting] = useState(false);
  const [proposalSuccess, setProposalSuccess] = useState(false);
  const diagramRef = useRef<HTMLDivElement>(null);

  const timeline = [
    {
      year: "2016",
      title: t.quemSomos.timeline.t2016.title,
      desc: t.quemSomos.timeline.t2016.desc,
      icon: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logotipoarqueoproject_832696c9.png",
      badgeColor: "#861720",
      arcColor: "#861720",
    },
    {
      year: "2018",
      title: t.quemSomos.timeline.t2018.title,
      desc: t.quemSomos.timeline.t2018.desc,
      icon: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logotipoarqueogis_1d0612e0.png",
      badgeColor: "#861720",
      arcColor: "#861720",
    },
    {
      year: "2020",
      title: t.quemSomos.timeline.t2019.title,
      desc: t.quemSomos.timeline.t2019.desc,
      icon: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logotipoarqueoeduc_53b598dc.png",
      badgeColor: "#F4D03F",
      arcColor: "#F4D03F",
    },
    {
      year: "2021",
      title: t.quemSomos.timeline.t2020.title,
      desc: t.quemSomos.timeline.t2020.desc,
      icon: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logotipoarqueocean_5677314a.png",
      badgeColor: "#2C7EB3",
      arcColor: "#2C7EB3",
    },
    {
      year: "2022",
      title: t.quemSomos.timeline.t2022.title,
      desc: t.quemSomos.timeline.t2022.desc,
      icon: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logotipoarqueorede_475fe661.png",
      badgeColor: "#F4A460",
      arcColor: "#F4A460",
    },
    {
      year: "2022",
      title: t.quemSomos.timeline.t2024.title,
      desc: t.quemSomos.timeline.t2024.desc,
      icon: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logotiposigepa_40f65c8b.png",
      badgeColor: "#EE7501",
      arcColor: "#EE7501",
    },
    {
      year: "2026",
      title: t.quemSomos.timeline.t2026.title,
      desc: t.quemSomos.timeline.t2026.desc,
      icon: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logogrupoarqueo_197db654.png",
      badgeColor: "#EE7501",
      arcColor: "#EE7501",
    },
  ];

  const pilares = [
    {
      num: "01",
      title: t.quemSomos.pilares.p1.title,
      desc: t.quemSomos.pilares.p1.desc,
    },
    {
      num: "02",
      title: t.quemSomos.pilares.p2.title,
      desc: t.quemSomos.pilares.p2.desc,
    },
    {
      num: "03",
      title: t.quemSomos.pilares.p3.title,
      desc: t.quemSomos.pilares.p3.desc,
    },
    {
      num: "04",
      title: t.quemSomos.pilares.p4.title,
      desc: t.quemSomos.pilares.p4.desc,
    },
  ];

  // 6 empresas no ecossistema
  const empresas = [
    {
      id: "arqueoproject",
      name: t.quemSomos.empresas.arqueoproject.name,
      subtitle: t.quemSomos.empresas.arqueoproject.subtitle,
      color: "#861720",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logotipo arqueoproject_dc821965.png",
      description: t.quemSomos.empresas.arqueoproject.description,
      competencias: t.quemSomos.empresas.arqueoproject.competencias,
    },
    {
      id: "arqueogis",
      name: t.quemSomos.empresas.arqueogis.name,
      subtitle: t.quemSomos.empresas.arqueogis.subtitle,
      color: "#EE7501",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logotipo arqueogis_d6fd1185.png",
      description: t.quemSomos.empresas.arqueogis.description,
      competencias: t.quemSomos.empresas.arqueogis.competencias,
    },
    {
      id: "arqueocean",
      name: t.quemSomos.empresas.arqueocean.name,
      subtitle: t.quemSomos.empresas.arqueocean.subtitle,
      color: "#0B7BA8",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logotipo arqueocean_a76a6921.png",
      description: t.quemSomos.empresas.arqueocean.description,
      competencias: t.quemSomos.empresas.arqueocean.competencias,
    },
    {
      id: "arqueoeduc",
      name: t.quemSomos.empresas.arqueoeduc.name,
      subtitle: t.quemSomos.empresas.arqueoeduc.subtitle,
      color: "#EE7501",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logotipo arqueoeduc_21b5e098.png",
      description: t.quemSomos.empresas.arqueoeduc.description,
      competencias: t.quemSomos.empresas.arqueoeduc.competencias,
    },
    {
      id: "arqueoconsult",
      name: t.quemSomos.empresas.arqueorede.name,
      subtitle: t.quemSomos.empresas.arqueorede.subtitle,
      color: "#EE7501",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logotipo arqueorede_5ea32f79.png",
      description: t.quemSomos.empresas.arqueorede.description,
      competencias: t.quemSomos.empresas.arqueorede.competencias,
    },
    {
      id: "arqueolabs",
      name: t.quemSomos.empresas.sigepa.name,
      subtitle: t.quemSomos.empresas.sigepa.subtitle,
      color: "#EE7501",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logotiposigepa_9b34b495.png",
      description: t.quemSomos.empresas.sigepa.description,
      competencias: t.quemSomos.empresas.sigepa.competencias,
    },
  ];

  const selectedEmpresaData = empresas.find(e => e.id === selectedEmpresa);

  return (
    <PortfolioLayout
      chapterNum="02"
      chapterTitle={t.quemSomos.badge.replace('02 — ', '')}
      prevPath="/ceo"
      prevLabel={t.home.sections.ceo}
      nextPath="/missao-visao"
      nextLabel={t.home.sections.missao}
    >
      <div className="w-full">
        {/* SEÇÃO 1B: QUEM SOMOS + TRAJETÓRIA - Hero Mesclado - REFINADO */}
        <section className="relative overflow-hidden" style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-section) var(--container-padding)' }}>
          {/* Background sutil premium */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #861720 0%, transparent 50%), radial-gradient(circle at 80% 50%, #EE7501 0%, transparent 50%)' }} />
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Título Principal - Com Logo 10 Anos */}
            <div className="mb-10 lg:mb-12 flex items-center justify-center gap-8">
              {/* Logo 10 Anos */}
              <div className="hidden lg:flex flex-shrink-0">
                <img src={ASSETS.logo10anos} alt="10 Anos" className="w-64 h-64 object-contain" />
              </div>
              
              {/* Texto Principal */}
              <div>
                <h2 className="font-bold leading-tight" style={{ color: '#1A1A1A', fontSize: 'var(--text-section-title)' }}>
                  {t.quemSomos.heroTitle} <span style={{ color: '#EE7501', fontWeight: 800 }}>{t.quemSomos.heroHighlight1}</span> {t.quemSomos.heroConnector} <span style={{ color: '#EE7501', fontWeight: 800 }}>{t.quemSomos.heroHighlight2}</span> {t.quemSomos.heroAnd} <span style={{ color: '#EE7501', fontWeight: 800 }}>{t.quemSomos.heroHighlight3}</span>.
                </h2>
              </div>
            </div>

            {/* Timeline com linha horizontal - REFINADA */}
            <div className="relative">
              {/* Linha horizontal de conexão - mais visível */}
              <div className="hidden lg:block absolute top-[140px] left-[8%] right-[8%] h-[3px]" style={{ backgroundColor: '#D0CCCA' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-8">
                {timeline.map((item, idx) => {
                  const isHovered = hoveredTimelineIdx === idx;
                  const isImageIcon = typeof item.icon === 'string';
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15, duration: 0.6 }}
                      className="relative flex flex-col items-center text-center"
                      onMouseEnter={() => setHoveredTimelineIdx(idx)}
                      onMouseLeave={() => setHoveredTimelineIdx(null)}
                    >
                      {/* Círculo grande com ícone - AUMENTADO */}
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.15 : 1,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 20,
                          duration: 0.3,
                        }}
                        className="w-32 h-32 lg:w-36 lg:h-36 rounded-full flex items-center justify-center mb-8 relative z-10"
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '4px solid #E0DEDA',
                          boxShadow: isHovered
                            ? '0 12px 48px rgba(238, 117, 1, 0.25), 0 0 0 8px rgba(238, 117, 1, 0.1)'
                            : '0 8px 32px rgba(0,0,0,0.08)',
                          transition: 'box-shadow 0.3s ease-out',
                        }}
                      >
                        {isImageIcon ? (
                          <img src={item.icon} alt={item.title} className="w-12 h-12 lg:w-14 lg:h-14 object-contain" />
                        ) : (
                          (() => {
                            const Icon = item.icon as any;
                            return <Icon className="w-12 h-12 lg:w-14 lg:h-14" style={{ color: item.badgeColor, opacity: 0.85 }} />;
                          })()
                        )}
                      </motion.div>

                      {/* Badge do ano */}
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center -mt-4 mb-5 relative z-20 shadow-lg"
                        style={{ backgroundColor: item.badgeColor }}
                      >
                        <span className="text-white text-sm font-bold">{item.year}</span>
                      </div>

                      {/* Título - DESTACADO */}
                       <h5 className="font-bold mb-3" style={{ color: '#1A1A1A', fontSize: 'var(--text-subtitle)' }}>
                        {item.title}
                      </h5>

                      {/* Descrição - MELHOR LEGIBILIDADE */}
                       <p className="leading-relaxed max-w-[240px]" style={{ color: '#666666', fontSize: 'var(--text-body)' }}>
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: TÍTULO DO ECOSSISTEMA */}
        <section style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-block) var(--container-padding)' }}>
          <div className="max-w-7xl mx-auto">
                <h2 className="font-bold leading-tight" style={{ color: '#1A1A1A', fontSize: 'var(--text-section-title)' }}>
              {t.quemSomos.ecosystemSectionTitle} <span style={{ color: "#EE7501", fontWeight: 800 }}>{t.quemSomos.ecosystemSectionHighlight}</span> {t.quemSomos.ecosystemSectionEnd}
            </h2>
          </div>
        </section>

        {/* SEÇÃO 4: ECOSSISTEMA - Layout Principal - REFINADO */}
        <section style={{ backgroundColor: "#FAFAF9", padding: 'var(--space-section) var(--container-padding)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Coluna Principal - Diagrama - COM MAIS PRESENÇA */}
              <div className="lg:col-span-3">
                {/* Diagrama Orbital - AUMENTADO */}
                <div
                  ref={diagramRef}
                  className="flex justify-center mb-8"
                  style={{
                    opacity: diagramLoaded ? 1 : 0,
                    transform: diagramLoaded ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
                    transition: "opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Semtítulo-6_5e5eb982.webp"
                    alt="Diagrama Orbital Grupo Arqueo"
                    className="w-full max-w-2xl h-auto drop-shadow-xl"
                    onLoad={() => setDiagramLoaded(true)}
                    style={{ pointerEvents: "none" }}
                  />
                </div>

                {/* Navegação Inferior - Cards Refinados */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {empresas.map(emp => (
                    <button
                      key={emp.id}
                      onClick={() => setSelectedEmpresa(emp.id)}
                      onMouseEnter={() => setHoveredEmpresa(emp.id)}
                      onMouseLeave={() => setHoveredEmpresa(null)}
                      className="text-left p-4 lg:p-5 rounded-xl transition-all duration-300 logo-fade-in"
                      style={{
                        backgroundColor: selectedEmpresa === emp.id ? `${emp.color}12` : "transparent",
                        border: selectedEmpresa === emp.id ? `2px solid ${emp.color}` : `1px solid #E0DEDA`,
                        opacity: hoveredEmpresa === emp.id || selectedEmpresa === emp.id ? 1 : 0.75,
                        transform: hoveredEmpresa === emp.id ? "scale(1.03) translateY(-2px)" : "scale(1)",
                        boxShadow: selectedEmpresa === emp.id ? `0 8px 24px ${emp.color}15` : "none",
                      }}
                    >
                      <p className="font-bold" style={{ color: emp.color, fontSize: 'var(--text-body)' }}>
                        {emp.name}
                      </p>
                      <p className="mt-1.5" style={{ color: "#999999", fontSize: 'var(--text-small)' }}>
                        {emp.subtitle}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Coluna Lateral - Painel Contextual - MAIS INTEGRADO */}
              <div className="lg:col-span-2">
                {selectedEmpresaData ? (
                  <div
                    className="sticky top-8 p-8 rounded-2xl"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: `2px solid ${selectedEmpresaData.color}20`,
                      boxShadow: `0 12px 40px ${selectedEmpresaData.color}12`,
                    }}
                  >
                    {/* Logo Grande no Topo */}
                    <div
                      className="w-32 h-32 flex items-center justify-center mb-12 mx-auto"
                    >
                      <img src={selectedEmpresaData.logo} alt={selectedEmpresaData.name} className="w-28 h-28 object-contain" />
                    </div>

                    {/* Nome e Subtítulo */}
                    <h3 className="font-bold mb-3 text-center" style={{ color: selectedEmpresaData.color, letterSpacing: "-0.3px", lineHeight: "1.3", fontSize: 'var(--text-subtitle)' }}>
                      {selectedEmpresaData.name}
                    </h3>
                    <p className="font-semibold tracking-widest uppercase mb-10 text-center" style={{ color: "#888888", fontSize: 'var(--text-caption)' }}>
                      {selectedEmpresaData.subtitle}
                    </p>

                    {/* Divisor */}
                    <div className="h-px mb-10" style={{ backgroundColor: "#E0E0E0" }} />

                    {/* Descrição - CULTURAL E INSTITUCIONAL */}
                    <p className="leading-relaxed mb-10" style={{ color: "#555555", fontWeight: 400, lineHeight: "1.7", fontSize: 'var(--text-body)' }}>
                      {selectedEmpresaData.description}
                    </p>

                    {/* Competências */}
                    <div className="mb-10">
                      <p className="font-semibold uppercase tracking-wider mb-4" style={{ color: "#999999", fontSize: 'var(--text-caption)' }}>
                        {t.quemSomos.competencias}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedEmpresaData.competencias.map((comp, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1.5 rounded-md font-medium transition-all duration-200 hover:shadow-sm"
                            style={{
                              backgroundColor: `${selectedEmpresaData.color}10`,
                              color: selectedEmpresaData.color,
                              border: `1px solid ${selectedEmpresaData.color}25`,
                            }}
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Divisor */}
                    <div className="h-px mb-8" style={{ backgroundColor: "#E0E0E0" }} />

                    {/* Botão CTA - Solicitar Proposta */}
                    <button
                      onClick={() => {
                        setSelectedProposalCompany(selectedEmpresa);
                        setShowProposalForm(true);
                      }}
                      className="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg active:scale-95"
                      style={{
                        backgroundColor: selectedEmpresaData.color,
                        color: "#FFFFFF",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {t.quemSomos.solicitarProposta}
                    </button>
                  </div>
                ) : (
                  <div
                    className="sticky top-8 p-8 rounded-2xl text-center"
                    style={{
                      backgroundColor: "#F5F5F5",
                      border: "1px dashed #E0DEDA",
                    }}
                  >
                    <p style={{ color: "#999999" }}>{t.quemSomos.selectCompany}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════ NOSSO TIME SECTION - GRID ORGANIZADO ═════════════════ */}
        <section className="relative" style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-section) var(--container-padding)' }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            {/* Section Title */}
            <div className="text-center mb-10">
              <h2 className="font-bold leading-tight mb-4" style={{ color: '#1A1A1A', fontFamily: 'serif', fontSize: 'var(--text-section-title)' }}>
                {t.quemSomos.teamTitle}
              </h2>
              <p className="leading-relaxed max-w-2xl mx-auto" style={{ color: '#999999', fontSize: 'var(--text-body)' }}>
                {t.quemSomos.teamDescription}
              </p>
            </div>

            {/* Team Grid Layout - 5+5+2 organizado conforme referência */}
            <div
              className="relative mx-auto rounded-3xl overflow-hidden px-8 py-10 lg:px-12 lg:py-14"
              style={{
                maxWidth: '1200px',
                background: 'linear-gradient(135deg, #861720 0%, #6B1219 25%, #A01B28 50%, #EE7501 100%)',
                boxShadow: '0 30px 90px rgba(134, 23, 32, 0.35)',
              }}
            >
              {/* Decorative circles in background */}
              <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                <div className="absolute rounded-full border border-white/8" style={{ width: 400, height: 400, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                <div className="absolute rounded-full border border-white/5" style={{ width: 650, height: 650, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
              </div>

              {/* ROW 1 - 5 membros */}
              <div className="relative z-10 flex justify-center gap-8 lg:gap-12 mb-8">
                {[
                  { name: t.quemSomos.teamRoles.ceo, img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028979380/YVzvTJspnjgDgBXf.webp', pos: 'center 22%', scale: 1.45 },
                  { name: t.quemSomos.teamRoles.adminDirector, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/fernandamelhorada_f9facca9.webp', pos: 'center 20%', scale: 1.45 },
                  { name: t.quemSomos.teamRoles.treasurer, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Laviniaportfolio2_a1d02cd0.webp', pos: 'center 18%', scale: 1.45 },
                  { name: t.quemSomos.teamRoles.strategyDirector, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Carlucioportfolio_797c4f70.webp', pos: 'center 18%', scale: 1.15 },
                  { name: t.quemSomos.teamRoles.cso, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Gerrson_0a84a91a.webp', pos: 'center 12%', scale: 1.1 },
                ].map((member, idx) => (
                  <div key={idx} className="flex flex-col items-center group cursor-pointer">
                    <div className="rounded-full overflow-hidden shadow-xl transition-all duration-300 group-hover:scale-110" style={{ width: 140, height: 140, border: '4px solid rgba(255,255,255,0.45)', boxShadow: '0 0 0 6px rgba(255,255,255,0.12), 0 10px 30px rgba(0,0,0,0.25)', position: 'relative' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 0 6px rgba(255,255,255,0.3), 0 0 30px rgba(238,117,1,0.6), 0 20px 40px rgba(0,0,0,0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 0 6px rgba(255,255,255,0.12), 0 10px 30px rgba(0,0,0,0.25)'; }}>
                      <img src={member.img} alt={member.name.split('\n')[0]} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" style={{ objectPosition: member.pos, transform: `scale(${member.scale})`, imageRendering: 'auto' }} />
                    </div>
                    <span className="text-white font-semibold text-[10px] mt-2 text-center leading-tight max-w-[130px] drop-shadow-lg transition-all duration-300 group-hover:text-yellow-100" style={{ whiteSpace: 'pre-line' }}>{member.name}</span>
                  </div>
                ))}
              </div>

              {/* ROW 2 - 5 membros */}
              <div className="relative z-10 flex justify-center gap-8 lg:gap-12 mb-8">
                {[
                  { name: t.quemSomos.teamRoles.legalAdvisor, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/SilvioPortfolio2_d43b29f1.webp', pos: 'center 18%', scale: 1.15 },
                  { name: t.quemSomos.teamRoles.researchCoord, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/S%C3%A2mara_d6e3d226.webp', pos: 'center 12%', scale: 1.1 },
                  { name: t.quemSomos.teamRoles.projectManager, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/643-RIC_3179_73874ff3.webp', pos: 'center 5%', scale: 1.15 },
                  { name: t.quemSomos.teamRoles.commercialCoord, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Samantaportfolio(2)_0f24cb85.webp', pos: 'center 10%', scale: 1.1 },
                  { name: t.quemSomos.teamRoles.opsCoord, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Lucas2portfolio_aa63d96d.webp', pos: 'center 12%', scale: 1.1 },
                ].map((member, idx) => (
                  <div key={idx} className="flex flex-col items-center group cursor-pointer">
                    <div className="rounded-full overflow-hidden shadow-xl transition-all duration-300 group-hover:scale-110" style={{ width: 140, height: 140, border: '4px solid rgba(255,255,255,0.45)', boxShadow: '0 0 0 6px rgba(255,255,255,0.12), 0 10px 30px rgba(0,0,0,0.25)', position: 'relative' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 0 6px rgba(255,255,255,0.3), 0 0 30px rgba(238,117,1,0.6), 0 20px 40px rgba(0,0,0,0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 0 6px rgba(255,255,255,0.12), 0 10px 30px rgba(0,0,0,0.25)'; }}>
                      <img src={member.img} alt={member.name.split('\n')[0]} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" style={{ objectPosition: member.pos, transform: `scale(${member.scale})`, imageRendering: 'auto' }} />
                    </div>
                    <span className="text-white font-semibold text-[10px] mt-2 text-center leading-tight max-w-[130px] drop-shadow-lg transition-all duration-300 group-hover:text-yellow-100" style={{ whiteSpace: 'pre-line' }}>{member.name}</span>
                  </div>
                ))}
              </div>

              {/* ROW 3 - 5 membros */}
              <div className="relative z-10 flex justify-center gap-8 lg:gap-12 flex-wrap mb-8">
                {[
                  { name: t.quemSomos.teamRoles.archaeologistF, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/FabianaPortfolio_918325e1.webp', pos: 'center 8%', scale: 1.12 },
                  { name: t.quemSomos.teamRoles.archaeologistF, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/faça_essa_imagem_202603251054_4fb88472.webp', pos: 'center 10%', scale: 1.12 },
                  { name: t.quemSomos.teamRoles.archaeologistM, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/carlosfabianoportfolio_683faf41.webp', pos: 'center 15%', scale: 1.12 },
                  { name: t.quemSomos.teamRoles.archaeologistM, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/faça_essa_imagem_202603251052_bf77fd54.webp', pos: 'center 10%', scale: 1.12 },
                  { name: t.quemSomos.teamRoles.researcher, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/faça_essa_imagem_202603251118_aec2ebef.webp', pos: 'center 10%', scale: 1.12 },
                ].map((member, idx) => (
                  <div key={idx} className="flex flex-col items-center group cursor-pointer">
                    <div className="rounded-full overflow-hidden shadow-xl transition-all duration-300 group-hover:scale-110" style={{ width: 140, height: 140, border: '4px solid rgba(255,255,255,0.45)', boxShadow: '0 0 0 6px rgba(255,255,255,0.12), 0 10px 30px rgba(0,0,0,0.25)', position: 'relative' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 0 6px rgba(255,255,255,0.3), 0 0 30px rgba(238,117,1,0.6), 0 20px 40px rgba(0,0,0,0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 0 6px rgba(255,255,255,0.12), 0 10px 30px rgba(0,0,0,0.25)'; }}>
                      <img src={member.img} alt={member.name.split('\n')[0]} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" style={{ objectPosition: member.pos, transform: `scale(${member.scale})`, imageRendering: 'auto' }} />
                    </div>
                    <span className="text-white font-semibold text-[10px] mt-2 text-center leading-tight max-w-[130px] drop-shadow-lg transition-all duration-300 group-hover:text-yellow-100" style={{ whiteSpace: 'pre-line' }}>{member.name}</span>
                  </div>
                ))}  
              </div>

              {/* ROW 4 - 3 membros */}
              <div className="relative z-10 flex justify-center gap-8 lg:gap-12 flex-wrap">
                {[
                  { name: t.quemSomos.teamRoles.geoAnalyst, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Brunonakagomiportfolio_4ce89876.webp', pos: 'center 12%', scale: 1.15 },
                  { name: t.quemSomos.teamRoles.techArchaeologyM, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/faça_essa_imagem_202603251103_53c6f31a.webp', pos: 'center 10%', scale: 1.12 },
                  { name: t.quemSomos.teamRoles.techArchaeologyF, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/faça_essa_imagem_202603251108_e4d33d44.webp', pos: 'center 10%', scale: 1.12 },
                ].map((member, idx) => (
                  <div key={idx} className="flex flex-col items-center group cursor-pointer">
                    <div className="rounded-full overflow-hidden shadow-xl transition-all duration-300 group-hover:scale-110" style={{ width: 140, height: 140, border: '4px solid rgba(255,255,255,0.45)', boxShadow: '0 0 0 6px rgba(255,255,255,0.12), 0 10px 30px rgba(0,0,0,0.25)', position: 'relative' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 0 6px rgba(255,255,255,0.3), 0 0 30px rgba(238,117,1,0.6), 0 20px 40px rgba(0,0,0,0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 0 6px rgba(255,255,255,0.12), 0 10px 30px rgba(0,0,0,0.25)'; }}>
                      <img src={member.img} alt={member.name.split('\n')[0]} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" style={{ objectPosition: member.pos, transform: `scale(${member.scale})`, imageRendering: 'auto' }} />
                    </div>
                    <span className="text-white font-semibold text-[10px] mt-2 text-center leading-tight max-w-[130px] drop-shadow-lg transition-all duration-300 group-hover:text-yellow-100" style={{ whiteSpace: 'pre-line' }}>{member.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Valores - Excelência, Colaboração, Inovação */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: '🎯', title: t.quemSomos.values.excellence, desc: t.quemSomos.values.excellenceDesc },
                { icon: '🤝', title: t.quemSomos.values.collaboration, desc: t.quemSomos.values.collaborationDesc },
                { icon: '💡', title: t.quemSomos.values.innovation, desc: t.quemSomos.values.innovationDesc },
              ].map((val, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#EE7501' }}>
                    <span className="text-white text-lg">{val.icon}</span>
                  </div>
                  <h4 className="font-bold mb-2" style={{ color: '#1A1A1A', fontSize: 'var(--text-body)' }}>{val.title}</h4>
                  <p className="leading-relaxed" style={{ color: '#888888', fontSize: 'var(--text-small)' }}>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* MODAL - Formulário de Proposta */}
      {showProposalForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
          >
            {/* Header */}
            <div className="mb-6">
              <h2 className="font-bold mb-2" style={{ color: '#1A1A1A', fontSize: 'var(--text-subtitle)' }}>
                {t.quemSomos.proposalForm.title}
              </h2>
              <p style={{ color: '#888888', fontSize: 'var(--text-small)' }}>
                {t.quemSomos.proposalForm.subtitle}
              </p>
            </div>

            {/* Formulário */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setProposalSubmitting(true);
                
                // Simular envio de dados
                setTimeout(() => {
                  console.log('Proposta enviada:', { ...proposalFormData, empresa: selectedProposalCompany });
                  setProposalSuccess(true);
                  setProposalSubmitting(false);
                  
                  // Fechar modal apos 2 segundos
                  setTimeout(() => {
                    setShowProposalForm(false);
                    setProposalSuccess(false);
                    setProposalFormData({ name: '', email: '', phone: '', company: '', message: '' });
                  }, 2000);
                }, 1500);
              }}
              className="space-y-4"
            >
              {/* Nome */}
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: '#666666' }}>
                  {t.quemSomos.proposalForm.name}
                </label>
                <input
                  type="text"
                  required
                  value={proposalFormData.name}
                  onChange={(e) => setProposalFormData({ ...proposalFormData, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#E0E0E0' }}
                  placeholder={t.quemSomos.proposalForm.namePlaceholder}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: '#666666' }}>
                  {t.quemSomos.proposalForm.email}
                </label>
                <input
                  type="email"
                  required
                  value={proposalFormData.email}
                  onChange={(e) => setProposalFormData({ ...proposalFormData, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#E0E0E0' }}
                  placeholder={t.quemSomos.proposalForm.emailPlaceholder}
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: '#666666' }}>
                  {t.quemSomos.proposalForm.phone}
                </label>
                <input
                  type="tel"
                  value={proposalFormData.phone}
                  onChange={(e) => setProposalFormData({ ...proposalFormData, phone: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#E0E0E0' }}
                  placeholder={t.quemSomos.proposalForm.phonePlaceholder}
                />
              </div>

              {/* Empresa */}
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: '#666666' }}>
                  {t.quemSomos.proposalForm.company}
                </label>
                <input
                  type="text"
                  value={proposalFormData.company}
                  onChange={(e) => setProposalFormData({ ...proposalFormData, company: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#E0E0E0' }}
                  placeholder={t.quemSomos.proposalForm.companyPlaceholder}
                />
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: '#666666' }}>
                  {t.quemSomos.proposalForm.message}
                </label>
                <textarea
                  required
                  value={proposalFormData.message}
                  onChange={(e) => setProposalFormData({ ...proposalFormData, message: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 resize-none"
                  style={{ borderColor: '#E0E0E0' }}
                  rows={4}
                  placeholder={t.quemSomos.proposalForm.messagePlaceholder}
                />
              </div>

              {/* Botões */}
              {!proposalSuccess ? (
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowProposalForm(false);
                      setProposalFormData({ name: '', email: '', phone: '', company: '', message: '' });
                    }}
                    disabled={proposalSubmitting}
                    className="flex-1 py-2 px-4 rounded-lg font-semibold transition-all disabled:opacity-50"
                    style={{ backgroundColor: '#F5F5F5', color: '#666666' }}
                  >
                    {t.quemSomos.proposalForm.cancel}
                  </button>
                  <button
                    type="submit"
                    disabled={proposalSubmitting}
                    className="flex-1 py-2 px-4 rounded-lg font-semibold text-white transition-all hover:shadow-lg active:scale-95 disabled:opacity-75"
                    style={{ backgroundColor: '#EE7501' }}
                  >
                    {proposalSubmitting ? t.quemSomos.proposalForm.sending : t.quemSomos.proposalForm.send}
                  </button>
                </div>
              ) : (
                <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#E8F5E9' }}>
                  <p className="font-semibold" style={{ color: '#2E7D32' }}>
                    {t.quemSomos.proposalForm.success}
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#558B2F' }}>
                    {t.quemSomos.proposalForm.successSub}
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </PortfolioLayout>
  );
}
