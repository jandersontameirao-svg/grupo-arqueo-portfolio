import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { useState } from "react";
import { MapPin, Calendar, Building2, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useI18n } from "@/i18n";

/**
 * CASES — Página 08
 * Design: Portfólio Técnico Institucional Premium
 * 
 * ABORDAGEM:
 * - Mini cases com imagem real de campo no topo
 * - Hierarquia: 1 destaque + 2 médios + 3 padrão
 * - Identidade institucional robusta (não SaaS/app)
 * - Acabamento editorial técnico
 * - Textura territorial sutil
 * - Filtros elegantes e discretos
 */

const CASE_IMAGES = {
  eolico: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/case-eolico-campo-9TpHskadowdaC7mKXivMwa.webp',
  solar: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/case-solar-chapada-WeFQXrDYNzteb95Ja38NQb.webp',
  lt: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_UfDa0V_image_562de634.png',
  rodovia: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/case-rodovia-br101-FF3Tvm49pnsToQWfYJ8pcg.webp',
  mineracao: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/case-mineracao-espinhaco-jq6sz7sgBCojXSrNFegSYf.webp',
  porto: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_kvIUHj_image_1e7d480e.png',
  canoas: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_KcoCzi_image_15477b6a.png',
  cabuí: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_GSER2w_image_d3cd477d.png',
  rumo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/ferrovia-rumo-hq-KUxJitH4ENtze9YyqztwhP.webp',
  candiota: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_rifsIP_image_8c7db124.png',
  abdonBatista: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_LLDXY1_image_14391220.png',
  mariaIsabel: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/loteamento-maria-isabel-ma-CrAUBRQKG2z7BbAMz3SwRe.webp',
  belaVista: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/loteamento-bela-vista-sp-mUTBuadXC9WcvBCbvPCcYC.webp',
  paranoazinho: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/loteamento-paranoazinho-df-6Sw2mMtWUr9FRRfXpa8vLg.webp',
};

const cases = [
  {
    title: "Ferrovia Rumo",
    sector: "Ferrovia",
    location: "Mato Grosso",
    year: "2023",
    client: "Rumo Logística",
    image: CASE_IMAGES.rumo,
    desc: "Reorganização institucional com IPHAN-MT e excelência operacional em prospectão arqueológica. Realização de mais de 8.000 poços-teste com rastreabilidade completa via SIGEPA, demonstrando escala operacional e metodologia diferenciada.",
    services: ["Articulação Institucional", "Escala Operacional", "SIGEPA", "Rastreabilidade de Dados"],
    tier: "standard" as const,
  },
  {
    title: "LT 500kV Terminal Rio-Lagos (Neoenergia)",
    sector: "Linha de Transmissão",
    location: "RJ / SP",
    year: "2023",
    client: "Neoenergia",
    image: CASE_IMAGES.lt,
    desc: "Reestruturação da interlocução com CGLic e avaliação contenciosa qualificada sobre TAC. Reestabelecimento de confiánça institucional com previsibilidade técnica.",
    services: ["Articulação Institucional", "Contencioso Técnico", "CGLic", "Previsibilidade Técnica"],
    tier: "standard" as const,
  },
  {
    title: "PCH Canoas (Santa Catarina)",
    sector: "PCH / Hidrelétrica",
    location: "Santa Catarina",
    year: "2022",
    client: "Confidencial",
    image: CASE_IMAGES.canoas,
    desc: "Análise técnica assertiva na classificação de estruturas históricas, demonstrando precisão conceitual e segurança metodológica em contextos de sensibilidade arqueológica.",
    services: ["Precisão Conceitual", "Segurança Técnica", "Estruturas Históricas", "Classificação Arqueológica"],
    tier: "standard" as const,
  },
  {
    title: "Complexo Eólico Offshore Caucaia (Ceará)",
    sector: "Eólica Offshore",
    location: "Ceará",
    year: "2023",
    client: "Confidencial",
    image: CASE_IMAGES.porto,
    desc: "Reestabelecimento de confiança com CGLic e desenvolvimento de metodologia inovadora para pesquisa arqueológica em ambiente aquático, alinhada às fases do licenciamento ambiental.",
    services: ["Articulação Institucional", "Inovação Metodológica", "Ambiente Aquático", "Licenciamento Ambiental"],
    tier: "secondary" as const,
  },
  {
    title: "LT 230kV Abdon Batista (Santa Catarina)",
    sector: "Linha de Transmissão",
    location: "Santa Catarina",
    year: "2022",
    client: "Confidencial",
    image: CASE_IMAGES.abdonBatista,
    desc: "Gestão in situ de 09 sítios arqueológicos em LT com 90 km de extensão. Educação Patrimonial personalizada com elaboração de Álbum Arqueológico.",
    services: ["Gestão In Situ", "Educação Patrimonial", "Empreendimento Linear", "Patrimônio Local"],
    tier: "standard" as const,
  },
  {
    title: "Loteamento Maria Isabel (Maranhão)",
    sector: "Urbanização / Loteamento",
    location: "Maranhão",
    year: "2021",
    client: "Confidencial",
    image: CASE_IMAGES.mariaIsabel,
    desc: "Educação Patrimonial personalizada com participação de estudantes em visita guiada durante atividade de salvamento arqueológico, conectando aprendizado teórico à prática de campo.",
    services: ["Educação Patrimonial", "Engajamento Social", "Visita Guiada", "Salvamento Arqueológico"],
    tier: "standard" as const,
  },
  {
    title: "Ampliação da SE Candiota 2 (Rio Grande do Sul)",
    sector: "Subestação",
    location: "Rio Grande do Sul",
    year: "2022",
    client: "Confidencial",
    image: CASE_IMAGES.candiota,
    desc: "Análise metodológica arrojada que possibilitou avanço direto para fase de gestão, suprimindo necessidade de estudos preventivos através de aproveitamento técnico de estudos pretéritos.",
    services: ["Otimização do Licenciamento", "Inovação Metodológica", "Estudos Pretéritos", "Eficiência Processual"],
    tier: "standard" as const,
  },
  {
    title: "LT 800kV Xingu - Terminal Rio",
    sector: "Linha de Transmissão",
    location: "PA / RJ",
    year: "2023",
    client: "Confidencial",
    image: CASE_IMAGES.eolico,
    desc: "Análise metodológica arrojada na triagem e escopo com descrição completa de estruturas primárias, possibilitando classificação arqueológica Nível I e antecipação de prazos para LP e LI.",
    services: ["Triagem e Escopo", "Otimização do Licenciamento", "Ganho de Prazo", "Classificação Nível I"],
    tier: "standard" as const,
  },
  {
    title: "Loteamento Residencial Bela Vista (São Paulo)",
    sector: "Urbanização / Loteamento",
    location: "São Paulo",
    year: "2022",
    client: "Confidencial",
    image: CASE_IMAGES.belaVista,
    desc: "Reestabelecimento de confiança com IPHAN-SP através de comunicação institucional assertiva. Avaliação técnica contenciosa que possibilitou análise qualificada sobre aplicabilidade de TAC.",
    services: ["Articulação Institucional", "Contencioso Técnico", "IPHAN-SP", "Previsibilidade Técnica"],
    tier: "standard" as const,
  },
  {
    title: "PCH Cabuí",
    sector: "PCH / Hidrelétrica",
    location: "Minas Gerais",
    year: "2023",
    client: "Confidencial",
    image: CASE_IMAGES.cabuí,
    desc: "Reestabelecimento de confiança com CGLic, desenvolvimento de metodologia inovadora para pesquisa em área histórica e avaliação contenciosa qualificada sobre TAC.",
    services: ["Articulação Institucional", "Área Histórica", "Inovação Metodológica", "Contencioso Técnico"],
    tier: "standard" as const,
  },
  {
    title: "Loteamento Fase 01 e 02 - Fazenda Paranoazinho (Distrito Federal)",
    sector: "Urbanização / Loteamento",
    location: "Distrito Federal",
    year: "2023",
    client: "Confidencial",
    image: CASE_IMAGES.paranoazinho,
    desc: "Reestabelecimento de confiança com IPHAN-DF. Avaliação contenciosa que demonstrou desnecessidade de fase de gestão através de racionalidade técnica e análise de suficiência de estudos pretéritos.",
    services: ["Articulação Institucional", "Contencioso Técnico", "Fase de Gestão", "Racionalidade Metodológica"],
    tier: "standard" as const,
  },
];

const sectors = Array.from(new Set(cases.map(c => c.sector)));

/* ────────────────────────────────────────────────────────────────── */
/*  CARD FEATURED — Case destaque principal (full width)             */
/* ────────────────────────────────────────────────────────────────── */
function FeaturedCard({ c, index, t }: { c: typeof cases[0]; index: number; t: any }) {
  const caseUrl = `/cases/${c.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`;
  return (
    <Link href={caseUrl}>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group col-span-full rounded-xl overflow-hidden cursor-pointer"
        style={{
          backgroundColor: '#FFFFFF',
          boxShadow: '0 2px 24px rgba(0,0,0,0.08)',
        }}
      >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Imagem de campo */}
        <div className="relative h-72 lg:h-full min-h-[400px] overflow-hidden">
          <img
            src={c.image}
            alt={c.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay gradiente sutil */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(107,35,50,0.35) 0%, transparent 50%)' }} />
          {/* Badge setor */}
          <div className="absolute top-5 left-5">
            <span
              className="px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase rounded"
              style={{ backgroundColor: '#861720', color: '#FFFFFF' }}
            >
              {c.sector}
            </span>
          </div>
        </div>

        {/* Conteúdo textual */}
        <div className="p-8 lg:p-12 xl:p-14 flex flex-col justify-center">
          {/* Linha decorativa gradiente Arqueo */}
          <div className="w-12 h-[3px] rounded-full mb-6" style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }} />

          {/* Título */}
          <h3 className="font-bold leading-[1.15] mb-5" style={{ color: '#1A1A1A', letterSpacing: '-0.02em', fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'var(--text-section-title)' }}>
            {c.title}
          </h3>

          {/* Metadados */}
          <div className="flex flex-wrap items-center gap-4 mb-6 pb-6" style={{ borderBottom: '1px solid #E8E4DF' }}>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" style={{ color: '#EE7501' }} />
              <span className="text-[13px]" style={{ color: '#666' }}>{c.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" style={{ color: '#2C7EB3' }} />
              <span className="text-[13px]" style={{ color: '#666' }}>{c.year}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" style={{ color: '#861720' }} />
              <span className="text-[13px]" style={{ color: '#666' }}>{c.client}</span>
            </div>
          </div>

          {/* Descrição */}
          <p className="leading-[1.85] mb-8" style={{ color: '#555', fontSize: 'var(--text-body)' }}>
            {c.desc}
          </p>

          {/* Tags técnicas */}
          <div className="flex flex-wrap gap-2 mb-8">
            {c.services.map((s, j) => (
              <span
                key={j}
                className="px-3 py-1 text-[11px] font-medium tracking-[0.05em] uppercase rounded"
                style={{ backgroundColor: '#FFF5EE', color: '#861720', border: '1px solid #F0D5C0' }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTA discreto */}
          <div className="flex items-center gap-1.5 text-[13px] font-semibold transition-colors duration-300 group-hover:opacity-80 cursor-pointer" style={{ color: '#EE7501' }}>
            {t.cases.viewProject} <ChevronRight className="w-4 h-4" />
          </div>
        </div>
        </div>
      </motion.article>
    </Link>
    );
  }

/* ────────────────────────────────────────────────────────────────── */
/*  CARD MEDIUM — Cases intermediários                               */
/* ────────────────────────────────────────────────────────────────── */
function MediumCard({ c, index, t }: { c: typeof cases[0]; index: number; t: any }) {
  const caseUrl = `/cases/${c.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`;
  return (
    <Link href={caseUrl}>
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl overflow-hidden flex flex-col cursor-pointer"
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
      }}
    >
      {/* Imagem de campo */}
      <div className="relative h-56 lg:h-64 overflow-hidden">
        <img
          src={c.image}
          alt={c.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(107,35,50,0.3) 0%, transparent 40%)' }} />
        <div className="absolute top-4 left-4">
          <span
            className="px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase rounded"
            style={{ backgroundColor: '#861720', color: '#FFFFFF' }}
          >
            {c.sector}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-7 lg:p-8 flex flex-col flex-1">
        <div className="w-8 h-[2px] rounded-full mb-4" style={{ background: 'linear-gradient(to right, #EE7501, #2C7EB3)' }} />

        <h3 className="font-bold leading-[1.2] mb-4" style={{ color: '#1A1A1A', letterSpacing: '-0.01em', fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'var(--text-subtitle)' }}>
          {c.title}
        </h3>

        <div className="flex flex-wrap items-center gap-3 mb-4 pb-4" style={{ borderBottom: '1px solid #F0ECE7' }}>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3" style={{ color: '#999' }} />
            <span className="text-[12px]" style={{ color: '#888' }}>{c.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3" style={{ color: '#999' }} />
            <span className="text-[12px]" style={{ color: '#888' }}>{c.year}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Building2 className="w-3 h-3" style={{ color: '#999' }} />
            <span className="text-[12px]" style={{ color: '#888' }}>{c.client}</span>
          </div>
        </div>

        <p className="leading-[1.8] mb-6 flex-1" style={{ color: '#666', fontSize: 'var(--text-small)' }}>
          {c.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {c.services.map((s, j) => (
            <span
              key={j}
              className="px-2.5 py-1 text-[10px] font-medium tracking-[0.05em] uppercase rounded"
              style={{ backgroundColor: '#EEF5FB', color: '#2C7EB3' }}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 text-[12px] font-semibold transition-colors duration-300 group-hover:opacity-80 cursor-pointer" style={{ color: '#EE7501' }}>
          {t.cases.viewProject} <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.article>
    </Link>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/*  CARD STANDARD — Cases padrão refinados                           */
/* ────────────────────────────────────────────────────────────────── */
function StandardCard({ c, index, t }: { c: typeof cases[0]; index: number; t: any }) {
  const caseUrl = `/cases/${c.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`;
  return (
    <Link href={caseUrl}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="group rounded-xl overflow-hidden flex flex-col cursor-pointer"
        style={{
          backgroundColor: '#FFFFFF',
          boxShadow: '0 1px 12px rgba(0,0,0,0.05)',
        }}
      >
      {/* Imagem de campo */}
      <div className="relative h-48 lg:h-56 overflow-hidden">
        <img
          src={c.image}
          alt={c.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(107,35,50,0.25) 0%, transparent 40%)' }} />
        <div className="absolute top-3 left-3">
          <span
            className="px-2 py-1 text-[9px] font-semibold tracking-[0.12em] uppercase rounded"
            style={{ backgroundColor: '#861720', color: '#FFFFFF' }}
          >
            {c.sector}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-1">
        <div className="w-8 h-[2px] rounded-full mb-4" style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }} />

        <h3 className="font-bold leading-[1.2] mb-4" style={{ color: '#1A1A1A', letterSpacing: '-0.01em', fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'var(--text-subtitle)' }}>
          {c.title}
        </h3>

        <div className="flex flex-wrap items-center gap-3 mb-4 pb-4" style={{ borderBottom: '1px solid #F0ECE7' }}>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" style={{ color: '#AAA' }} />
            <span className="text-[11px]" style={{ color: '#999' }}>{c.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" style={{ color: '#AAA' }} />
            <span className="text-[11px]" style={{ color: '#999' }}>{c.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Building2 className="w-3 h-3" style={{ color: '#AAA' }} />
            <span className="text-[11px]" style={{ color: '#999' }}>{c.client}</span>
          </div>
        </div>

        <p className="leading-[1.75] mb-5 flex-1" style={{ color: '#777', fontSize: 'var(--text-small)' }}>
          {c.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {c.services.map((s, j) => (
            <span
              key={j}
              className="px-2 py-0.5 text-[9px] font-medium tracking-[0.05em] uppercase rounded"
              style={{ backgroundColor: '#FFF5EE', color: '#861720' }}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 text-[11px] font-semibold transition-colors duration-300 group-hover:opacity-80 cursor-pointer" style={{ color: '#EE7501' }}>
          {t.cases.viewProject} <ChevronRight className="w-3 h-3" />
        </div>
        </div>
      </motion.article>
    </Link>
    );
  }

/* ────────────────────────────────────────────────────────────────── */
/*  PÁGINA PRINCIPAL                                                 */
/* ────────────────────────────────────────────────────────────────── */
export default function Cases() {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState(sectors[0]);
  const filtered = cases.filter(c => c.sector === activeFilter);

  const standard = filtered.filter(c => c.tier === "standard");

  return (
    <PortfolioLayout
      chapterNum="08"
      chapterTitle={t.cases.badge.replace('07 \u2014 ', '')}
      prevPath="/numeros"
      prevLabel={t.home.sections.numeros}
      nextPath="/parceiros"
      nextLabel={t.home.sections.parceiros}
    >
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-[420px] lg:min-h-[520px] flex items-start lg:items-center overflow-hidden pt-16 lg:pt-0">
        {/* Background com textura territorial */}
        <div className="absolute inset-0 -z-10">
          <img src={ASSETS.heroArqueologia} alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(249,248,246,1) 0%, rgba(249,248,246,0.97) 25%, rgba(249,248,246,0.92) 45%, rgba(249,248,246,0.80) 65%, rgba(249,248,246,0.55) 85%, rgba(249,248,246,0.35) 100%)'
            }}
          />
          {/* Textura sutil de mapa/território */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url(${ASSETS.patternTerritorio})`, backgroundSize: '600px', backgroundRepeat: 'repeat' }} />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Label institucional */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] rounded-full" style={{ backgroundColor: '#6B2332' }} />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: '#6B2332' }}>
                {t.cases.badge}
              </span>
            </div>

            {/* Logo + Headline lado a lado */}
            <div className="flex items-start lg:items-center gap-8 lg:gap-12 mb-6">
              <img src={ASSETS.logo10anos} alt="Grupo Arqueo 10 Anos" className="h-24 lg:h-32 xl:h-40 w-auto flex-shrink-0 mt-0 lg:mt-0" />
              <h1
                className="font-bold leading-[1.1]"
                style={{ fontSize: 'var(--text-hero)', color: '#1A1A1A', letterSpacing: '-0.025em', fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {t.cases.heroTitle}{' '}<br />
                <span className="whitespace-nowrap" style={{ color: '#6B2332' }}>{t.cases.heroHighlight}</span>
              </h1>
            </div>

            {/* Subtítulo estratégico */}
            <p className="leading-[1.8] max-w-2xl" style={{ color: '#555', fontSize: 'var(--text-body)' }}>
              {t.cases.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>



      {/* ═══════════════════ FILTROS + CASES ═══════════════════ */}
      <section className="pb-12 lg:pb-20">
        <div className="container">
          {/* Filtros elegantes com layout melhorado */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 lg:mb-14"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-bold" style={{ color: '#1A1A1A', fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'var(--text-subtitle)' }}>Filtrar por Setor</h2>
              <div className="w-12 h-[2px]" style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }} />
            </div>
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector) => {
                const isActive = activeFilter === sector;
                return (
                  <button
                    key={sector}
                    onClick={() => setActiveFilter(sector)}
                    className="px-5 py-2.5 text-[12px] font-semibold tracking-[0.08em] uppercase transition-all duration-300 rounded-lg hover:shadow-md"
                    style={{
                      backgroundColor: isActive ? '#861720' : '#F5F5F5',
                      color: isActive ? '#FFFFFF' : '#666',
                      border: isActive ? '2px solid #861720' : '2px solid transparent',
                      transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                    }}
                  >
                    {sector}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* ── CASES PADRÃO ── */}
          {standard.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {standard.map((c, i) => (
                <StandardCard key={c.title} c={c} index={i} t={t} />
              ))}
            </div>
          )}

          {/* Mensagem quando filtro não encontra resultados */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p style={{ color: '#999', fontSize: 'var(--text-body)' }}>
                Nenhum projeto encontrado para este filtro.
              </p>
            </div>
          )}
        </div>
      </section>
    </PortfolioLayout>
  );
}
