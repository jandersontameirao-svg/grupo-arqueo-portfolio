import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";

/**
 * NOSSOS PARCEIROS — Página 11
 * Grid de logos de clientes e parceiros do Grupo Arqueo
 * Design: Fundo branco, logos reais em círculos brancos, todas do mesmo tamanho, ordem alfabética
 */

const B = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx";

export default function Parceiros() {
  const parceiros = [
    { nome: "2W Energia", logo: `${B}/2W_Energia_e40f4ccf.png` },
    { nome: "ACBMM", logo: `${B}/ACBMM_82f8e8f9.png` },
    { nome: "AES Brasil", logo: `${B}/AES_Brasil_de5f698a.png` },
    { nome: "Alamo Energia", logo: `${B}/Alamo_Energia_a2566d3d.png` },
    { nome: "AMBIA", logo: `${B}/AMBIA_b11b96e0.png` },
    { nome: "Ambientare", logo: `${B}/Ambientare_8f892ed9.png` },
    { nome: "Atlas Renewable Energy", logo: `${B}/Atlas_Renewable_Energy_ef829d68.png` },
    { nome: "Aurora", logo: `${B}/Aurora_7fcebb22.png` },
    { nome: "Axia Energia", logo: `${B}/Axia_Energia_2a6ffddb.png` },
    { nome: "BIenergia", logo: `${B}/BIenergia_e6da103b.png` },
    { nome: "CanadianSolar", logo: `${B}/CanadianSolar_fe7d4f21.png` },
    { nome: "CEI", logo: `${B}/CEI_e22be604.png` },
    { nome: "Comerc Energia", logo: `${B}/Comerc_Energia_51cbd0d8.png` },
    { nome: "CONCREMAT", logo: `${B}/CONCREMAT_f4146657.png` },
    { nome: "Copasa", logo: `${B}/Copasa_ee3783cd.png` },
    { nome: "CYMI", logo: `${B}/CYMI_7e70513e.png` },
    { nome: "Dossel", logo: `${B}/Dossel_fba8495f.png` },
    { nome: "Dyonisio", logo: `${B}/Dyonisio_078c9e40.png` },
    { nome: "EDF Energy", logo: `${B}/EDF_Energy_9ad78a53.png` },
    { nome: "EDP Renewables", logo: `${B}/EDP_Renewables_d4b7c827.png` },
    { nome: "Eldorado Brasil", logo: `${B}/Eldorado_Brasil_6a58d589.png` },
    { nome: "Elera Renováveis", logo: `${B}/Elera_Renovaveis_f3091962.png` },
    { nome: "ENGEPLAN", logo: `${B}/ENGEPLAN_391c8ec0.png` },
    { nome: "Faro Energy", logo: `${B}/Faro_Energy_0e62a636.png` },
    { nome: "GDR", logo: `${B}/GDR_29a92f1e.png` },
    { nome: "Grande Sertão", logo: `${B}/Grande_Sertao_8bdc3e1f.png` },
    { nome: "Greenyellow", logo: `${B}/Greenyellow_d5ebe434.png` },
    { nome: "Grupo Dimensão", logo: `${B}/Grupo_Dimensao_2d9629af.png` },
    { nome: "Grupo Elecnor", logo: `${B}/Grupo_Elecnor_4cfaa42c.png` },
    { nome: "Helexia", logo: `${B}/Helexia_bacd0518.png` },
    { nome: "IACO", logo: `${B}/IACO_17727f35.png` },
    { nome: "IB Vogt", logo: `${B}/IB_Vogt_8fb6998e.png` },
    { nome: "INPASA", logo: `${B}/INPASA_604574e4.png` },
    { nome: "Itahum Export", logo: `${B}/Itahum_Export_2026bb90.png` },
    { nome: "JMM", logo: `${B}/JMM_97e69f9d.png` },
    { nome: "K Infra", logo: `${B}/K_Infra_385378b8.png` },
    { nome: "Kroma Energia", logo: `${B}/Kroma_Energia_cf53dd04.png` },
    { nome: "Lightsource BP", logo: `${B}/Lightsource_BP_39edfb96.png` },
    { nome: "Luanova", logo: `${B}/Luanova_e60d96b4.png` },
    { nome: "Mateus", logo: `${B}/Mateus_87333530.png` },
    { nome: "Mercury Renew", logo: `${B}/Mercury_Renew_2793559d.png` },
    { nome: "Neoenergia", logo: `${B}/Neoenergia_317ca88f.png` },
    { nome: "Pan American Energy", logo: `${B}/Pan_American_Energy_cee2b8f2.png` },
    { nome: "PEC Energia", logo: `${B}/PEC_Energia_704c4bfc.png` },
    { nome: "PowerChina", logo: `${B}/PowerChina_fb6f79fc.png` },
    { nome: "Powertis", logo: `${B}/Powertis_c20a04e5.png` },
    { nome: "Raízen", logo: `${B}/Raizen_fba1805c.png` },
    { nome: "RenovaMundo", logo: `${B}/RenovaMundo_e4ab7220.png` },
    { nome: "Rumo", logo: `${B}/Rumo_febf002c.png` },
    { nome: "Safira", logo: `${B}/Safira_08c6f247.png` },
    { nome: "SER Renováveis", logo: `${B}/SER_Renovaveis_76ffea86.png` },
    { nome: "Shell", logo: `${B}/Shell_363d422a.png` },
    { nome: "Solatio", logo: `${B}/Solatio_1a8322f4.png` },
    { nome: "Sowitec", logo: `${B}/Sowitec_25f1cfae.png` },
    { nome: "SPIC Brasil", logo: `${B}/SPIC_Brasil_14d38266.png` },
    { nome: "State Grid", logo: `${B}/State_Grid_fbbee28c.png` },
    { nome: "Statkraft", logo: `${B}/Statkraft_f026d61e.png` },
    { nome: "Sunco Capital", logo: `${B}/Sunco_Capital_95cb6ab3.png` },
    { nome: "Taesa", logo: `${B}/Taesa_64e5dc22.png` },
    { nome: "Triunfo Concetra", logo: `${B}/Triunfo_Concetra_9b7d9632.png` },
    { nome: "UP", logo: `${B}/UP_d690fe6c.png` },
    { nome: "Vestas", logo: `${B}/Vestas_797d9024.png` },
    { nome: "Voltalia", logo: `${B}/Voltalia_29b3a44c.png` },
  ];

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
      <section className="relative py-16 lg:py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
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

      {/* Partners Grid */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1300px' }}>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
            {parceiros.map((parceiro, i) => (
              <motion.div
                key={parceiro.nome}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (i % 14) * 0.03 }}
                className="flex items-center justify-center"
              >
                <div
                  className="rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                  style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E8E8E8',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                  }}
                >
                  <img
                    src={parceiro.logo}
                    alt={parceiro.nome}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
