import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { useState } from "react";
import { MapPin, Calendar, Building2, ChevronRight } from "lucide-react";

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
  lt: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/case-lt-transmissao-8cAveDXZuQ8wQrCjMJNYbZ.webp',
  rodovia: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/case-rodovia-br101-FF3Tvm49pnsToQWfYJ8pcg.webp',
  mineracao: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/case-mineracao-espinhaco-jq6sz7sgBCojXSrNFegSYf.webp',
  porto: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/case-porto-pecem-ccYV5LxZNgbQsQ87AteBFk.webp',
};

const cases = [
  {
    title: "Complexo Eólico Serra da Borborema",
    sector: "Energia Eólica",
    location: "Paraíba",
    year: "2023",
    client: "Confidencial",
    image: CASE_IMAGES.eolico,
    desc: "Gestão integral do licenciamento arqueológico para um dos maiores complexos eólicos do Nordeste. Prospecção intensiva em mais de 1.200 hectares, identificação e salvaguarda de 8 sítios arqueológicos, e programa de educação patrimonial alcançando mais de 500 pessoas nas comunidades do entorno.",
    services: ["Diagnóstico", "Prospecção", "Monitoramento", "Educação Patrimonial"],
    tier: "featured" as const,
  },
  {
    title: "Parque Solar Chapada dos Veadeiros",
    sector: "Energia Solar",
    location: "Goiás",
    year: "2022",
    client: "Confidencial",
    image: CASE_IMAGES.solar,
    desc: "Pesquisa arqueológica preventiva em área de alta sensibilidade ambiental e cultural. Documentação de 12 sítios pré-coloniais com geração de conhecimento científico que resultou em publicações acadêmicas relevantes.",
    services: ["Diagnóstico", "Resgate", "Laudos Técnicos"],
    tier: "medium" as const,
  },
  {
    title: "LT 500kV Recife–Teresina",
    sector: "Linhas de Transmissão",
    location: "PE / PI",
    year: "2023",
    client: "Confidencial",
    image: CASE_IMAGES.lt,
    desc: "Prospecção sistemática ao longo de 800km de faixa de servidão, com monitoramento arqueológico durante implantação de torres e 100% de conformidade com exigências IPHAN.",
    services: ["Prospecção", "Monitoramento", "Relatórios IPHAN"],
    tier: "medium" as const,
  },
  {
    title: "Duplicação BR-101 Norte",
    sector: "Rodovias",
    location: "Rio Grande do Norte",
    year: "2021",
    client: "DNIT",
    image: CASE_IMAGES.rodovia,
    desc: "Programa de pesquisa arqueológica em 250km de corredor rodoviário. Resgate de 18 sítios com catalogação de mais de 3.500 artefatos e ações educativas em comunidades locais.",
    services: ["Diagnóstico", "Resgate", "Educação Patrimonial", "Gestão de Acervo"],
    tier: "standard" as const,
  },
  {
    title: "Mineração Serra do Espinhaço",
    sector: "Mineração",
    location: "Minas Gerais",
    year: "2022",
    client: "Confidencial",
    image: CASE_IMAGES.mineracao,
    desc: "Levantamento arqueológico em 1.500 hectares com identificação de 22 sítios rupestres. Programa integrado de educação patrimonial e comunicação social estratégica.",
    services: ["Levantamento", "Educação Patrimonial", "Comunicação Social"],
    tier: "standard" as const,
  },
  {
    title: "Porto Offshore Pecém",
    sector: "Infraestrutura",
    location: "Ceará",
    year: "2023",
    client: "Confidencial",
    image: CASE_IMAGES.porto,
    desc: "Arqueologia subaquática para expansão portuária. Prospecção de 5km² de fundo marinho com documentação de estruturas navais históricas por equipe de mergulho científico certificada.",
    services: ["Arqueologia Subaquática", "Levantamento Costeiro", "Mergulho Científico"],
    tier: "standard" as const,
  },
];

const sectors = ["Todos", ...Array.from(new Set(cases.map(c => c.sector)))];

/* ────────────────────────────────────────────────────────────────── */
/*  CARD FEATURED — Case destaque principal (full width)             */
/* ────────────────────────────────────────────────────────────────── */
function FeaturedCard({ c, index }: { c: typeof cases[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group col-span-full rounded-xl overflow-hidden"
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
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)' }} />
          {/* Badge setor */}
          <div className="absolute top-5 left-5">
            <span
              className="px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase rounded"
              style={{ backgroundColor: 'rgba(255,255,255,0.92)', color: '#6B2332', backdropFilter: 'blur(4px)' }}
            >
              {c.sector}
            </span>
          </div>
        </div>

        {/* Conteúdo textual */}
        <div className="p-8 lg:p-12 xl:p-14 flex flex-col justify-center">
          {/* Linha decorativa bordô */}
          <div className="w-12 h-[3px] rounded-full mb-6" style={{ backgroundColor: '#6B2332' }} />

          {/* Título */}
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-[1.15] mb-5" style={{ color: '#1A1A1A', letterSpacing: '-0.02em', fontFamily: "'Playfair Display', Georgia, serif" }}>
            {c.title}
          </h3>

          {/* Metadados */}
          <div className="flex flex-wrap items-center gap-4 mb-6 pb-6" style={{ borderBottom: '1px solid #E8E4DF' }}>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" style={{ color: '#6B2332' }} />
              <span className="text-[13px]" style={{ color: '#666' }}>{c.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" style={{ color: '#6B2332' }} />
              <span className="text-[13px]" style={{ color: '#666' }}>{c.year}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" style={{ color: '#6B2332' }} />
              <span className="text-[13px]" style={{ color: '#666' }}>{c.client}</span>
            </div>
          </div>

          {/* Descrição */}
          <p className="text-[15px] leading-[1.85] mb-8" style={{ color: '#555' }}>
            {c.desc}
          </p>

          {/* Tags técnicas */}
          <div className="flex flex-wrap gap-2 mb-8">
            {c.services.map((s, j) => (
              <span
                key={j}
                className="px-3 py-1 text-[11px] font-medium tracking-[0.05em] uppercase rounded"
                style={{ backgroundColor: '#F5F0EB', color: '#6B2332', border: '1px solid #E8E0D8' }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTA discreto */}
          <div className="flex items-center gap-1.5 text-[13px] font-semibold transition-colors duration-300 group-hover:opacity-80 cursor-pointer" style={{ color: '#6B2332' }}>
            Ver detalhes do projeto <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/*  CARD MEDIUM — Cases intermediários                               */
/* ────────────────────────────────────────────────────────────────── */
function MediumCard({ c, index }: { c: typeof cases[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl overflow-hidden flex flex-col"
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
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 40%)' }} />
        <div className="absolute top-4 left-4">
          <span
            className="px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase rounded"
            style={{ backgroundColor: 'rgba(255,255,255,0.92)', color: '#6B2332', backdropFilter: 'blur(4px)' }}
          >
            {c.sector}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-7 lg:p-8 flex flex-col flex-1">
        <div className="w-8 h-[2px] rounded-full mb-4" style={{ backgroundColor: '#D4A574' }} />

        <h3 className="text-xl lg:text-2xl font-bold leading-[1.2] mb-4" style={{ color: '#1A1A1A', letterSpacing: '-0.01em', fontFamily: "'Playfair Display', Georgia, serif" }}>
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

        <p className="text-[14px] leading-[1.8] mb-6 flex-1" style={{ color: '#666' }}>
          {c.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {c.services.map((s, j) => (
            <span
              key={j}
              className="px-2.5 py-1 text-[10px] font-medium tracking-[0.05em] uppercase rounded"
              style={{ backgroundColor: '#F5F0EB', color: '#8B6F5C' }}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 text-[12px] font-semibold transition-colors duration-300 group-hover:opacity-80 cursor-pointer" style={{ color: '#6B2332' }}>
          Ver detalhes <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.article>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/*  CARD STANDARD — Cases padrão refinados                           */
/* ────────────────────────────────────────────────────────────────── */
function StandardCard({ c, index }: { c: typeof cases[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group rounded-xl overflow-hidden flex flex-col"
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 1px 12px rgba(0,0,0,0.05)',
      }}
    >
      {/* Imagem de campo */}
      <div className="relative h-44 lg:h-48 overflow-hidden">
        <img
          src={c.image}
          alt={c.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 40%)' }} />
        <div className="absolute top-3 left-3">
          <span
            className="px-2 py-1 text-[9px] font-semibold tracking-[0.12em] uppercase rounded"
            style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#6B2332', backdropFilter: 'blur(4px)' }}
          >
            {c.sector}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-1">
        <div className="w-6 h-[2px] rounded-full mb-3" style={{ backgroundColor: '#D4A574' }} />

        <h3 className="text-lg lg:text-xl font-bold leading-[1.2] mb-3" style={{ color: '#1A1A1A', letterSpacing: '-0.01em', fontFamily: "'Playfair Display', Georgia, serif" }}>
          {c.title}
        </h3>

        <div className="flex flex-wrap items-center gap-3 mb-3 pb-3" style={{ borderBottom: '1px solid #F0ECE7' }}>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" style={{ color: '#AAA' }} />
            <span className="text-[11px]" style={{ color: '#999' }}>{c.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" style={{ color: '#AAA' }} />
            <span className="text-[11px]" style={{ color: '#999' }}>{c.year}</span>
          </div>
        </div>

        <p className="text-[13px] leading-[1.75] mb-5 flex-1" style={{ color: '#777' }}>
          {c.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {c.services.map((s, j) => (
            <span
              key={j}
              className="px-2 py-0.5 text-[9px] font-medium tracking-[0.05em] uppercase rounded"
              style={{ backgroundColor: '#F5F0EB', color: '#8B6F5C' }}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 text-[11px] font-semibold transition-colors duration-300 group-hover:opacity-80 cursor-pointer" style={{ color: '#6B2332' }}>
          Ver detalhes <ChevronRight className="w-3 h-3" />
        </div>
      </div>
    </motion.article>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/*  PÁGINA PRINCIPAL                                                 */
/* ────────────────────────────────────────────────────────────────── */
export default function Cases() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filtered = activeFilter === "Todos" ? cases : cases.filter(c => c.sector === activeFilter);

  const featured = filtered.filter(c => c.tier === "featured");
  const medium = filtered.filter(c => c.tier === "medium");
  const standard = filtered.filter(c => c.tier === "standard");

  return (
    <PortfolioLayout
      chapterNum="08"
      chapterTitle="Cases"
      prevPath="/numeros"
      prevLabel="Números"
      nextPath="/territorio"
      nextLabel="Presença Territorial"
    >
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-[520px] lg:min-h-[620px] flex items-center overflow-hidden">
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
                Portfólio de Projetos
              </span>
            </div>

            {/* Logo + Headline lado a lado */}
            <div className="flex items-center gap-8 lg:gap-12 mb-6">
              <img src={ASSETS.logo10anos} alt="Grupo Arqueo 10 Anos" className="h-30 lg:h-36 xl:h-42 w-auto flex-shrink-0" />
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]"
                style={{ color: '#1A1A1A', letterSpacing: '-0.025em', fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Evidências concretas de capacidade e<br />
                <span className="whitespace-nowrap" style={{ color: '#6B2332' }}>execução comprovada</span>
              </h1>
            </div>

            {/* Subtítulo estratégico */}
            <p className="text-lg lg:text-xl leading-[1.8] max-w-2xl" style={{ color: '#555' }}>
              Cada projeto representa uma operação técnica real, conduzida com rigor metodológico, conformidade regulatória e compromisso com a preservação do patrimônio cultural brasileiro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ DIVIDER ═══════════════════ */}
      <div className="relative py-12 lg:py-16">
        <div className="container">
          <div className="h-px" style={{ background: 'linear-gradient(to right, #6B2332, #D4A574, transparent)' }} />
        </div>
      </div>

      {/* ═══════════════════ FILTROS + CASES ═══════════════════ */}
      <section className="pb-20 lg:pb-32">
        <div className="container">
          {/* Filtros elegantes */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 lg:mb-20"
          >
            <div className="flex flex-wrap gap-2">
              {sectors.map((sector) => {
                const isActive = activeFilter === sector;
                return (
                  <button
                    key={sector}
                    onClick={() => setActiveFilter(sector)}
                    className="px-4 py-2 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-300 rounded"
                    style={{
                      backgroundColor: isActive ? '#6B2332' : 'transparent',
                      color: isActive ? '#FFFFFF' : '#888',
                      border: isActive ? '1px solid #6B2332' : '1px solid #DDD',
                    }}
                  >
                    {sector}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* ── CASES DESTAQUE ── */}
          {featured.length > 0 && (
            <div className="mb-10 lg:mb-14">
              {featured.map((c, i) => (
                <FeaturedCard key={c.title} c={c} index={i} />
              ))}
            </div>
          )}

          {/* ── CASES MÉDIOS ── */}
          {medium.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-14">
              {medium.map((c, i) => (
                <MediumCard key={c.title} c={c} index={i + featured.length} />
              ))}
            </div>
          )}

          {/* ── CASES PADRÃO ── */}
          {standard.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {standard.map((c, i) => (
                <StandardCard key={c.title} c={c} index={i + featured.length + medium.length} />
              ))}
            </div>
          )}

          {/* Mensagem quando filtro não encontra resultados */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg" style={{ color: '#999' }}>
                Nenhum projeto encontrado para este filtro.
              </p>
            </div>
          )}
        </div>
      </section>
    </PortfolioLayout>
  );
}
