import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";

/**
 * NOSSOS PARCEIROS — Página 11
 * Grid de logos de clientes e parceiros do Grupo Arqueo
 * Design: Fundo branco, logos em círculos com sombra sutil, layout responsivo
 * Ordem: Alfabética
 */

export default function Parceiros() {
  const parceiros: { nome: string; logo?: string }[] = [
    { nome: "2W Energia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/2w-energia_6e8f2a7c.png" },
    { nome: "ACBMM", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/acbmm_8b7f4e9d.png" },
    { nome: "AES Brasil", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/AES_Brasil_7e4432e2.png" },
    { nome: "Alamo Energia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/ALAMO_Energia_4dc511a3.png" },
    { nome: "AMBIA", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/AMBIA_cacd8962.png" },
    { nome: "Ambientare", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Ambientare_d26a9966.png" },
    { nome: "Atlas Renewable Energy", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Atlas_Renewable_22351c1b.png" },
    { nome: "Aurora", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/aurora_f2c3a1b5.png" },
    { nome: "Axia Energia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/axia-energia_7d9e4c2f.png" },
    { nome: "BIenergia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/bienergía_e1a5f8c7.png" },
    { nome: "CanadianSolar", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/canadian-solar_b2d6e9a4.png" },
    { nome: "CEI", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/cei_f3c8a1d9.png" },
    { nome: "Comercio Energia", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/comercio-energia_a4b7c2e5.png" },
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
  ];

  // Generate initials from name
  const getInitials = (name: string) => {
    const words = name.split(" ");
    if (words.length === 1) return name.substring(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  // Assign a consistent color based on index
  const getColor = (i: number) => {
    const colors = ["#861720", "#EE7501", "#2C7EB3", "#D4A843"];
    return colors[i % colors.length];
  };

  return (
    <PortfolioLayout
      chapterNum="11"
      chapterTitle="Nossos Parceiros"
      prevPath="/numeros-territorio"
      prevLabel="Números & Território"
      nextPath="/contato"
      nextLabel="Contato"
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
              Nossos <span style={{ color: '#EE7501' }}>Parceiros</span>
            </h1>
            <p className="text-lg font-light" style={{ color: '#666', maxWidth: '700px', margin: '0 auto' }}>
              Empresas e instituições que confiam no Grupo Arqueo para transformar seus projetos em realidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid - White circles with logos like reference image */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="flex flex-wrap justify-center gap-5 lg:gap-6">
            {parceiros.map((parceiro, i) => (
              <motion.div
                key={parceiro.nome}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 14) * 0.03 }}
                className="flex items-center justify-center"
              >
                <div
                  className="rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                  style={{
                    width: '110px',
                    height: '110px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E8E8E8',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  }}
                >
                  <div className="text-center px-2">
                    {parceiro.logo ? (
                      <>
                        <div className="w-12 h-12 flex items-center justify-center mx-auto mb-1.5">
                          <img
                            src={parceiro.logo}
                            alt={parceiro.nome}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <p className="text-[8px] font-semibold leading-tight" style={{ color: '#2A2A2A' }}>
                          {parceiro.nome}
                        </p>
                      </>
                    ) : (
                      <>
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-1.5"
                          style={{
                            backgroundColor: getColor(i),
                            color: '#FFFFFF',
                          }}
                        >
                          <span className="text-[9px] font-bold tracking-wide">{getInitials(parceiro.nome)}</span>
                        </div>
                        <p className="text-[8px] font-semibold leading-tight" style={{ color: '#2A2A2A' }}>
                          {parceiro.nome}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
