import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";

/**
 * NOSSOS PARCEIROS — Página 11
 * Design: Premium institucional com logo 10 anos, grid compacto e elegante
 * Paleta: Cores do Grupo Arqueo — vermelho, laranja, dourado
 */

const LOGO_10_ANOS = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logo-10-anos-arqueo_ce93a3c4.webp";

export default function Parceiros() {
  const parceiros: { nome: string; logo?: string }[] = [
    { nome: "2W Energia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/2w-energia_dedbe3fb.png" },
    { nome: "ACBMM", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/acbmm_574207a0.png" },
    { nome: "AES Brasil", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/AES_Brasil_7e4432e2.png" },
    { nome: "Alamo Energia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/ALAMO_Energia_4dc511a3.png" },
    { nome: "AMBIA", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/AMBIA_cacd8962.png" },
    { nome: "Ambientare", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Ambientare_d26a9966.png" },
    { nome: "Atlas Renewable Energy", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Atlas_Renewable_22351c1b.png" },
    { nome: "Aurora", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/aurora_97ef1d14.png" },
    { nome: "Axia Energia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/axia-energia_c2e6f2d8.png" },
    { nome: "BIenergia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/bienergía_e1def102.png" },
    { nome: "CanadianSolar", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/canadian-solar_ac7f5ae4.png" },
    { nome: "CEI", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/cei_077b05f0.png" },
    { nome: "Comercio Energia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/comercio-energia_6f32c0c0.png" },
    { nome: "CONCREMAT", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/concremat-ambiental_b6ca4371.png" },
    { nome: "Copasa", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/copasa_3f8e0043.png" },
    { nome: "CYMI", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/cymi_b9b4b589.png" },
    { nome: "Dossel", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/dossei_4f00f75a.png" },
    { nome: "Dyonisio", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/dyonisio_bc942e28.png" },
    { nome: "EDF Energy", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/edf-energy_735dfd99.png" },
    { nome: "EDP Renewables", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/edp-renewables_a1dd2169.png" },
    { nome: "Eldorado Brasil", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/eldorado-brasil_e3adde84.png" },
    { nome: "Elera Renováveis", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/elera-renovaveis_786a281f.png" },
    { nome: "ENGEPLAN", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/engeplan_3d165ffa.png" },
    { nome: "Faro Energy", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/faro-energy_cd1da011.png" },
    { nome: "Ferreira Rocha", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_WonW1i_image_c925c2ec.png" },
    { nome: "GDR", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/gdr-construcoes_ead3ab65.png" },
    { nome: "Grande Sertão", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/grande-sertao_24f8f02d.png" },
    { nome: "Greenyellow", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/greenyellow_14d09218.png" },
    { nome: "Grupo Dimensão", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/grupo-dimensao_daf0de2c.png" },
    { nome: "Grupo Elecnor", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/elecnor_0c2a1f79.png" },
    { nome: "Guaporé Sul", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_W3bqIt_image_ebaa0df5.png" },
    { nome: "Helexia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/helexia_9ede3a33.png" },
    { nome: "IACO", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/iaco_3baa9c94.png" },
    { nome: "IB Vogt", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/ib-vogt_d6e3eb1a.png" },
    { nome: "INPASA", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/inpasa_fc60252f.png" },
    { nome: "Itahum Export", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/itahum-export_eca77c70.png" },
    { nome: "JMM", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/jmm_0953c0dd.png" },
    { nome: "K Infra", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/k-infra_e595f411.png" },
    { nome: "Kroma Energia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/kroma-energia_57fee07c.png" },
    { nome: "Lightsource BP", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/lightsource-bp_aa10a507.png" },
    { nome: "Luanova", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/luanova_d17d969a.png" },
    { nome: "Mateus", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/grupo-mateus_9b162df6.png" },
    { nome: "Mercury Renew", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/mercury-renew_70a5fec2.png" },
    { nome: "Neoenergia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/neoenergia_93a62733.png" },
    { nome: "NewFortress Energy", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_FupiYu_image_b0157d0f.png" },
    { nome: "Pan American Energy", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pan-american-energy_0e76ef6b.png" },
    { nome: "PEC Energia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pec-energia_fcee020a.png" },
    { nome: "PowerChina", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/powerchina_e551eb2f.png" },
    { nome: "Powertis", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/powertis_f4ae3490.png" },
    { nome: "Quantum", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_ZcfdfV_image_9efa3af4.png" },
    { nome: "Raízen", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/roigen_cde607b4.png" },
    { nome: "RenovaMundo", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/renovamundo_101990dd.png" },
    { nome: "Rumo", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/rumo_1c07f827.png" },
    { nome: "Safira", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/grupo-safira_c371f450.png" },
    { nome: "SER Renováveis", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/ser-renovaveis_d3c3a626.png" },
    { nome: "Shell", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/shell_c68bce63.png" },
    { nome: "Solatio", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/solatio_82fe0a30.png" },
    { nome: "Sowitec", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/sowitec_b819b6ce.png" },
    { nome: "SPIC Brasil", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/spic-brasil_99765e2b.png" },
    { nome: "Statkraft", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/statkraft_abb03745.png" },
    { nome: "State Grid", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/state-grid_2f9eabc6.png" },
    { nome: "Sunco Capital", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/sunco-capital_eb92beab.png" },
    { nome: "Taesa", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/taesa_1244712f.png" },
    { nome: "Triunfo Concetra", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/triunfo-concebra_a19238b2.png" },
    { nome: "UP", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/up-urbanizadora_d47e149e.png" },
    { nome: "Vestas", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/vestas_8a73412c.png" },
    { nome: "Voltalia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/voltalia_2a3ecfe2.png" },
  ].sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <PortfolioLayout
      chapterNum="11"
      chapterTitle="Nossos Parceiros"
      prevPath="/numeros-territorio"
      prevLabel="Números & Território"
      nextPath="/contato"
      nextLabel="Contato"
    >
      {/* ═══════════════════ HERO — Logo 10 Anos + Título + Contadores ═══════════════════ */}
      <section style={{ backgroundColor: '#F9F8F6', position: 'relative', overflow: 'hidden' }}>
        {/* Top accent line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, #861720, #EE7501, #D4A843)' }} />

        <div className="container" style={{ paddingTop: '48px', paddingBottom: '36px' }}>
          {/* Logo 10 Anos centralizada */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img
              src={LOGO_10_ANOS}
              alt="Grupo Arqueo - 10 Anos"
              style={{ height: '90px', width: 'auto', display: 'inline-block', filter: 'drop-shadow(0 4px 16px rgba(212,168,67,0.15))' }}
            />
          </div>

          {/* Tag */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#D4A843', borderRadius: '2px' }} />
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#D4A843' }}>
              Uma Década de Parcerias
            </span>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#D4A843', borderRadius: '2px' }} />
          </div>

          {/* Título */}
          <h1 style={{ fontSize: '34px', fontWeight: 700, lineHeight: 1.1, color: '#1A1A1A', letterSpacing: '-0.02em', margin: '0 0 10px', textAlign: 'center' }}>
            Nossos <span style={{ color: '#EE7501' }}>Parceiros</span>
          </h1>

          {/* Subtítulo */}
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#888', fontWeight: 300, maxWidth: '520px', margin: '0 auto 24px', textAlign: 'center' }}>
            Empresas e instituições que confiam no Grupo Arqueo para transformar projetos em resultados concretos ao longo de{' '}
            <strong style={{ color: '#D4A843', fontWeight: 600 }}>10 anos de excelência</strong>.
          </p>

          {/* Contadores */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px' }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '30px', fontWeight: 700, color: '#861720', display: 'block', lineHeight: 1 }}>{parceiros.length}+</span>
              <span style={{ fontSize: '9px', fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: '#AAA' }}>Parceiros</span>
            </div>
            <div style={{ width: '1px', height: '24px', backgroundColor: '#E0E0E0' }} />
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '30px', fontWeight: 700, color: '#EE7501', display: 'block', lineHeight: 1 }}>10</span>
              <span style={{ fontSize: '9px', fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: '#AAA' }}>Anos</span>
            </div>
            <div style={{ width: '1px', height: '24px', backgroundColor: '#E0E0E0' }} />
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '30px', fontWeight: 700, color: '#D4A843', display: 'block', lineHeight: 1 }}>26</span>
              <span style={{ fontSize: '9px', fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: '#AAA' }}>Estados</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PARTNERS GRID — Flex wrap compacto ═══════════════════ */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '28px 0 36px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, justifyContent: 'center', gap: '12px' }}>
            {parceiros.map((parceiro, i) => (
              <motion.div
                key={parceiro.nome}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-10px' }}
                transition={{ duration: 0.2, delay: (i % 20) * 0.01 }}
                className="group"
                style={{ position: 'relative' }}
              >
                <div
                  className="transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    width: '140px',
                    height: '140px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1.5px solid rgba(212,168,67,0.2)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(212,168,67,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    position: 'relative' as const,
                    overflow: 'hidden',
                  }}
                >
                  {/* Moldura decorativa nos cantos */}
                  <div style={{ position: 'absolute', top: '4px', left: '4px', width: '14px', height: '14px', borderTop: '2px solid rgba(212,168,67,0.35)', borderLeft: '2px solid rgba(212,168,67,0.35)', borderRadius: '4px 0 0 0' }} />
                  <div style={{ position: 'absolute', top: '4px', right: '4px', width: '14px', height: '14px', borderTop: '2px solid rgba(212,168,67,0.35)', borderRight: '2px solid rgba(212,168,67,0.35)', borderRadius: '0 4px 0 0' }} />
                  <div style={{ position: 'absolute', bottom: '4px', left: '4px', width: '14px', height: '14px', borderBottom: '2px solid rgba(212,168,67,0.35)', borderLeft: '2px solid rgba(212,168,67,0.35)', borderRadius: '0 0 0 4px' }} />
                  <div style={{ position: 'absolute', bottom: '4px', right: '4px', width: '14px', height: '14px', borderBottom: '2px solid rgba(212,168,67,0.35)', borderRight: '2px solid rgba(212,168,67,0.35)', borderRadius: '0 0 4px 0' }} />

                  {parceiro.logo ? (
                    <img
                      src={parceiro.logo}
                      alt={parceiro.nome}
                      className="transition-transform duration-300 group-hover:scale-110"
                      style={{ width: '90px', height: '90px', objectFit: 'contain' }}
                    />
                  ) : (
                    <span style={{ fontSize: '9px', fontWeight: 700, color: '#BBB', textAlign: 'center', padding: '0 4px' }}>
                      {parceiro.nome}
                    </span>
                  )}
                </div>

                {/* Tooltip */}
                <div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{
                    position: 'absolute',
                    bottom: '-22px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    whiteSpace: 'nowrap' as const,
                    pointerEvents: 'none' as const,
                    zIndex: 20,
                  }}
                >
                  <span style={{ fontSize: '9px', fontWeight: 500, padding: '2px 8px', borderRadius: '4px', backgroundColor: '#333', color: '#FFF' }}>
                    {parceiro.nome}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ BOTTOM CTA ═══════════════════ */}
      <section style={{ backgroundColor: '#F9F8F6', padding: '24px 0 28px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', lineHeight: 1.8, color: '#888', fontWeight: 300, marginBottom: '10px' }}>
            O Grupo Arqueo tem orgulho de construir relações duradouras com empresas líderes em seus segmentos,
            contribuindo para o desenvolvimento sustentável do Brasil.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <div style={{ width: '20px', height: '2px', backgroundColor: '#D4A843', borderRadius: '2px' }} />
            <span style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#D4A843' }}>
              Construindo o futuro juntos
            </span>
            <div style={{ width: '20px', height: '2px', backgroundColor: '#D4A843', borderRadius: '2px' }} />
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
