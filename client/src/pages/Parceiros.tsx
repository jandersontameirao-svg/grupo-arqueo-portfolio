import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";

/**
 * PARCEIROS — Página 11
 * Design Philosophy: Apresentação institucional de autoridade e relevância de mercado.
 * Não é uma listagem — é uma declaração de confiança e posicionamento.
 * Paleta: Bordô #861720, Laranja #EE7501, Dourado #D4A843, Carvão #1A1A1A
 */

const LOGO_10_ANOS = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logo-10-anos-arqueo_ce93a3c4.webp";

/* ── Parceiros estratégicos de maior relevância (destaque) ── */
const PARCEIROS_DESTAQUE = [
  "Shell", "Raízen", "Neoenergia", "AES Brasil", "Axia Energia", "EDP Renewables",
  "Statkraft", "State Grid", "PowerChina", "Rumo", "Taesa",
  "Elera Renováveis", "Voltalia", "Grupo Elecnor"
];

export default function Parceiros() {
  const todosParceiros: { nome: string; logo?: string }[] = [
    { nome: "2W Energia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/2w_cb61a07d.png" },
    { nome: "CBMM", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/cbmm_a25acffd.png" },
    { nome: "AES Brasil", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/aesbrasil_51744356.jfif" },
    { nome: "Axia Energia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/axiar_fd340f21.jpg" },
    { nome: "AMBIA", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/ambiaconsultoria_f2c403a4.png" },
    { nome: "Ambientare", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/ambientare_2e7c39cf.png" },
    { nome: "Atlas Renewable Energy", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/atlas_0477ebd0.png" },
    { nome: "Aurora", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/aurora_97ef1d14.png" },
    { nome: "BIenergia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/bienergia_253d3f02.jfif" },
    { nome: "CanadianSolar", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/canadiansolar_9c0d975b.png" },
    { nome: "CEI", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/ceienergia_0c15854e.jfif" },
    { nome: "Comercio Energia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/comercenergia_50d1edb2.webp" },
    { nome: "CONCREMAT", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/concremat_e8fcafe7.webp" },
    { nome: "Copasa", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/copasa_1edbf6b0.webp" },
    { nome: "CYMI", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/cymi_new_2a87fa53.png" },
    { nome: "Dossel", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/dosselsoluções_a57fd4b0.png" },
    { nome: "Dyonisio", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/dyonisioempreendimentos_77a30bcf.png" },
    { nome: "EDF Energy", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/edfpowersolutions_a17d35a8.png" },
    { nome: "EDP Renewables", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/edprenewables_7725946d.webp" },
    { nome: "Eldorado Brasil", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/eldoradobrasil_11c9a07f.jpg" },
    { nome: "Elera Renováveis", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/elera_ac841e1d.png" },
    { nome: "ENGEPLAN", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/engplan_cbbec40d.png" },
    { nome: "Faro Energy", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/faroenergy_d4f40eb7.png" },
    { nome: "Ferreira Rocha", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_Uqv7X8_image_9a98c068.png" },
    { nome: "GDR", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/gdr_1cb3ea1d.webp" },
    { nome: "Grande Sertão", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/grandesertao_70985c9c.png" },
    { nome: "Greenyellow", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/greenyellow_3c7b3c56.png" },
    { nome: "Grupo Dimensão", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/grupodimensao_5de919d4.png" },
    { nome: "Grupo Elecnor", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/elecnorbrasil_8f021be4.webp" },
    { nome: "Guaporé Sul", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/aumente_a_qualidade_202603261108_ff3df951.webp" },
    { nome: "Helexia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/helexia_69ec6a4d.webp" },
    { nome: "IACO", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/iaco_7bdebe90.webp" },
    { nome: "IB Vogt", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/ibvogt_1f640dc4.webp" },
    { nome: "INPASA", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/inpasa_1bff64d8.png" },
    { nome: "Itahum Export", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/itahum_94a06562.jpg" },
    { nome: "JMM", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/jmm_76630a3d.webp" },
    { nome: "K Infra", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/kinfra_23bddc90.png" },
    { nome: "Kroma Energia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/kromaenergia_714f933f.webp" },
    { nome: "Lightsource BP", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/lightsource_072ee796.png" },
    { nome: "Luanova", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/luanova_3f0f715a.png" },
    { nome: "Mateus", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/grupomateus_1ef42ce9.png" },
    { nome: "Mercury Renew", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/mercury_5de9b261.webp" },
    { nome: "Neoenergia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/neoenergia_4d969722.png" },
    { nome: "NewFortress Energy", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_Ih6O6n_image_95ca574f.png" },
    { nome: "Pan American Energy", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/panamaerican_0cfcf0a8.png" },
    { nome: "PEC Energia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pecenergia_95c302cb.png" },
    { nome: "PowerChina", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/powerchina_3936fec8.png" },
    { nome: "Powertis", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Powertis_8d11d934.jpg" },
    { nome: "Quantum", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_qsC4nV_image_b9a8f3fb.png" },
    { nome: "Raízen", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/raizen_2c68236f.webp" },
    { nome: "RenovaMundo", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/renovamundy_7782dcf7.webp" },
    { nome: "Rumo", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/rumo_18e1f6d2.png" },
    { nome: "Safira", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/gruposafira_8e30a1ad.jfif" },
    { nome: "SER Renováveis", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/ser_c5921255.png" },
    { nome: "Shell", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/shell_94b9f13d.png" },
    { nome: "Solatio", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/solatio_65fa4957.webp" },
    { nome: "Sowitec", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/sowitec_3629a597.jfif" },
    { nome: "SPIC Brasil", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/spicbrasil_4a623c85.png" },
    { nome: "Statkraft", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/statkraft_04986c25.jfif" },
    { nome: "State Grid", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/stataegrid_4fcb6898.png" },
    { nome: "Sunco Capital", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/suncocapital_b12326ba.png" },
    { nome: "Taesa", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/taesa_76d36b81.png" },
    { nome: "Triunfo Concebra", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/triunfoconcebra_a9f2b6ee.webp" },
    { nome: "UP", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/up_c74bed34.png" },
    { nome: "Vestas", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/vestas_bd14e7a7.png" },
    { nome: "Voltalia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/voltalia_bde2495a.webp" },
  ].sort((a, b) => a.nome.localeCompare(b.nome));

  const parceirosDestaque = todosParceiros.filter(p => PARCEIROS_DESTAQUE.includes(p.nome));
  const parceirosGrid = todosParceiros.filter(p => !PARCEIROS_DESTAQUE.includes(p.nome));

  return (
    <PortfolioLayout
      chapterNum="11"
      chapterTitle="Relações Estratégicas"
      prevPath="/numeros-territorio"
      prevLabel="Números & Território"
      nextPath="/contato"
      nextLabel="Contato"
    >
      {/* ═══════════════════════════════════════════════════════════════════
          SEÇÃO 1 — HERO INSTITUCIONAL
          Título estratégico, métricas de impacto, logo 10 anos
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(168deg, #1A1A1A 0%, #2A2420 48%, #1A1A1A 100%)' }}>
        {/* Textura sutil de noise */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '128px 128px' }} />
        {/* Accent line top */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, #861720, #EE7501, #D4A843, #EE7501, #861720)' }} />
        {/* Glow sutil */}
        <div style={{ position: 'absolute', top: '-120px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(212,168,67,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '56px', paddingBottom: '52px' }}>
          {/* Logo 10 Anos */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '28px' }}
          >
            <img
              src={LOGO_10_ANOS}
              alt="Grupo Arqueo - 10 Anos"
              style={{ height: '80px', width: 'auto', display: 'inline-block', filter: 'drop-shadow(0 4px 20px rgba(212,168,67,0.25))' }}
            />
          </motion.div>

          {/* Título institucional estratégico */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ textAlign: 'center' }}
          >
            <h1 style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.1, color: '#FFFFFF', letterSpacing: '-0.03em', margin: '0 0 8px' }}>
              Relações que Constroem
              <br />
              <span style={{ color: '#D4A843' }}>o Futuro do Brasil</span>
            </h1>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', fontWeight: 300, maxWidth: '560px', margin: '12px auto 0' }}>
              Ao longo de uma década, o Grupo Arqueo consolidou parcerias com empresas líderes
              nos setores de energia, infraestrutura e meio ambiente — construindo uma rede de
              confiança que impulsiona grandes projetos em todo o território nacional.
            </p>
          </motion.div>

          {/* Métricas de impacto — grande presença */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '48px', marginTop: '40px' }}
          >
            {[
              { valor: `${todosParceiros.length}+`, label: 'Parceiros Ativos', cor: '#EE7501' },
              { valor: '10', label: 'Anos de Mercado', cor: '#D4A843' },
              { valor: '26', label: 'Estados Atendidos', cor: '#FFFFFF' },
            ].map((m, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '48px', fontWeight: 800, color: m.cor, display: 'block', lineHeight: 1, letterSpacing: '-0.03em' }}>
                  {m.valor}
                </span>
                <span style={{ fontSize: '10px', fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.35)', marginTop: '6px', display: 'block' }}>
                  {m.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SEÇÃO 2 — PARCEIROS ESTRATÉGICOS EM DESTAQUE
          Logos maiores, mais espaçados, com label de nome
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', background: 'linear-gradient(180deg, #F7F6F3 0%, #FFFFFF 100%)', padding: '40px 0 32px' }}>
        {/* Separador dourado */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80px', height: '3px', background: 'linear-gradient(to right, #D4A843, #EE7501)', borderRadius: '2px' }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          {/* Label da seção */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '32px' }}
          >
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: '#D4A843' }}>
              Parcerias de Referência
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1A1A1A', margin: '8px 0 0', letterSpacing: '-0.02em' }}>
              Grandes Empresas que Confiam no Grupo Arqueo
            </h2>
          </motion.div>

          {/* Grid de destaque — logos maiores */}
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, justifyContent: 'center', gap: '20px' }}>
            {parceirosDestaque.map((p, i) => (
              <motion.div
                key={p.nome}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group"
                style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '8px' }}
              >
                <div
                  className="transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    width: '160px',
                    height: '120px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    border: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04), 0 0 0 1px rgba(212,168,67,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                  }}
                >
                  <img
                    src={p.logo}
                    alt={p.nome}
                    className="transition-transform duration-300 group-hover:scale-105"
                    style={{ maxWidth: '110px', maxHeight: '70px', objectFit: 'contain' }}
                  />
                </div>
                <span style={{ fontSize: '10px', fontWeight: 500, color: '#999', letterSpacing: '0.02em' }}>
                  {p.nome}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SEÇÃO 3 — GRID COMPLETO DE PARCEIROS
          Cards refinados, sombra elegante, respiro interno, ritmo visual
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', padding: '32px 0 44px', background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAF8 30%, #F5F4F1 100%)' }}>
        {/* Textura sutil */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.015, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '28px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '4px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#D4A843' }} />
              <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#D4A843' }}>
                Rede Completa
              </span>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#D4A843' }} />
            </div>
            <p style={{ fontSize: '13px', color: '#999', fontWeight: 300, margin: 0 }}>
              Todas as empresas e instituições que integram nossa rede de parcerias
            </p>
          </motion.div>

          {/* Grid flex-wrap refinado */}
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, justifyContent: 'center', gap: '14px' }}>
            {parceirosGrid.map((parceiro, i) => (
              <motion.div
                key={parceiro.nome}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.25, delay: (i % 15) * 0.015 }}
                className="group"
                style={{ position: 'relative' }}
              >
                <div
                  className="transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md"
                  style={{
                    width: '130px',
                    height: '130px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '18px',
                    border: '1px solid rgba(0,0,0,0.04)',
                    boxShadow: '0 1px 6px rgba(0,0,0,0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '18px',
                    cursor: 'default',
                  }}
                >
                  {parceiro.logo ? (
                    <img
                      src={parceiro.logo}
                      alt={parceiro.nome}
                      className="transition-transform duration-300 group-hover:scale-108"
                      style={{ maxWidth: '85px', maxHeight: '85px', objectFit: 'contain' }}
                    />
                  ) : (
                    <span style={{ fontSize: '10px', fontWeight: 600, color: '#CCC', textAlign: 'center' }}>
                      {parceiro.nome}
                    </span>
                  )}
                </div>

                {/* Tooltip elegante */}
                <div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{
                    position: 'absolute',
                    bottom: '-24px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    whiteSpace: 'nowrap' as const,
                    pointerEvents: 'none' as const,
                    zIndex: 20,
                  }}
                >
                  <span style={{ fontSize: '9px', fontWeight: 500, padding: '3px 10px', borderRadius: '6px', backgroundColor: '#1A1A1A', color: '#FFF', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                    {parceiro.nome}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SEÇÃO 4 — CLOSING STATEMENT
          Declaração institucional de encerramento
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(180deg, #F5F4F1 0%, #F9F8F6 100%)', padding: '36px 0 40px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(to right, #D4A843, #EE7501)', borderRadius: '2px', margin: '0 auto 16px' }} />
            <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#666', fontWeight: 300, margin: '0 0 8px' }}>
              Cada parceria representa um compromisso mútuo com a excelência.
              O Grupo Arqueo tem orgulho de construir relações duradouras com empresas
              que lideram a transformação energética e o desenvolvimento sustentável do Brasil.
            </p>
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#D4A843' }}>
              Autoridade construída com resultados
            </span>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
