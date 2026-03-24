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
    { nome: "2W Energia" },
    { nome: "ACBMM" },
    { nome: "AES Brasil" },
    { nome: "Alamo Energia" },
    { nome: "AMBIA" },
    { nome: "Ambientare" },
    { nome: "Atlas Renewable Energy" },
    { nome: "Aurora" },
    { nome: "Axia Energia" },
    { nome: "BIenergia" },
    { nome: "CanadianSolar" },
    { nome: "CEI" },
    { nome: "Comerc Energia" },
    { nome: "CONCREMAT" },
    { nome: "Copasa" },
    { nome: "CYMI" },
    { nome: "Dossel" },
    { nome: "Dyonisio" },
    { nome: "EDF Energy" },
    { nome: "EDP Renewables" },
    { nome: "Eldorado Brasil" },
    { nome: "Elera Renováveis" },
    { nome: "ENGEPLAN" },
    { nome: "Faro Energy" },
    { nome: "Ferreira Rocha", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_WonW1i_image_c925c2ec.png" },
    { nome: "GDR" },
    { nome: "Grande Sertão" },
    { nome: "Greenyellow" },
    { nome: "Grupo Dimensão" },
    { nome: "Grupo Elecnor" },
    { nome: "Guaporé Sul", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_W3bqIt_image_ebaa0df5.png" },
    { nome: "Helexia" },
    { nome: "IACO" },
    { nome: "IB Vogt" },
    { nome: "INPASA" },
    { nome: "Itahum Export" },
    { nome: "JMM" },
    { nome: "K Infra" },
    { nome: "Kroma Energia" },
    { nome: "Lightsource BP" },
    { nome: "Luanova" },
    { nome: "Mateus" },
    { nome: "Mercury Renew" },
    { nome: "Neoenergia" },
    { nome: "NewFortress Energy", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_FupiYu_image_b0157d0f.png" },
    { nome: "Pan American Energy" },
    { nome: "PEC Energia" },
    { nome: "PowerChina" },
    { nome: "Powertis" },
    { nome: "Quantum", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_ZcfdfV_image_9efa3af4.png" },
    { nome: "Raízen" },
    { nome: "RenovaMundo" },
    { nome: "Rumo" },
    { nome: "Safira" },
    { nome: "SER Renováveis" },
    { nome: "Shell" },
    { nome: "Solatio" },
    { nome: "Sowitec" },
    { nome: "SPIC Brasil" },
    { nome: "Statkraft" },
    { nome: "State Grid" },
    { nome: "Sunco Capital" },
    { nome: "Taesa" },
    { nome: "Triunfo Concetra" },
    { nome: "UP" },
    { nome: "Vestas" },
    { nome: "Voltalia" },
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
