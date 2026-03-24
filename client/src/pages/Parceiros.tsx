import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";

/**
 * NOSSOS PARCEIROS — Página 11
 * Grid de logos de clientes e parceiros do Grupo Arqueo
 * Design: Fundo cinza, logos em círculos brancos, layout responsivo
 */

export default function Parceiros() {
  const parceiros = [
    { nome: "BIenergia", initials: "BI" },
    { nome: "CanadianSolar", initials: "CS" },
    { nome: "ACBMM", initials: "AC" },
    { nome: "CEI", initials: "CE" },
    { nome: "K Infra", initials: "KI" },
    { nome: "Lightsource", initials: "LS" },
    { nome: "CYMI", initials: "CY" },
    { nome: "Dyonísio", initials: "DY" },
    { nome: "Dimensão", initials: "DM" },
    { nome: "EDF Energy", initials: "ED" },
    { nome: "Etera", initials: "ET" },
    { nome: "Engeplan", initials: "EN" },
    { nome: "Faro", initials: "FA" },
    { nome: "GDR", initials: "GD" },
    { nome: "Triunfo", initials: "TR" },
    { nome: "Elecnor", initials: "EL" },
    { nome: "Ibvogt", initials: "IB" },
    { nome: "JMM", initials: "JM" },
    { nome: "Itanium Export", initials: "IT" },
    { nome: "Kroma", initials: "KR" },
    { nome: "Luanova", initials: "LU" },
    { nome: "Mateus", initials: "MA" },
    { nome: "Mercury Renew", initials: "MR" },
    { nome: "Eldorado", initials: "EL" },
    { nome: "Vestas", initials: "VE" },
    { nome: "Neoenergia", initials: "NE" },
    { nome: "PEC Energia", initials: "PE" },
    { nome: "Powertis", initials: "PO" },
    { nome: "Renovável", initials: "RE" },
    { nome: "Rumo", initials: "RU" },
    { nome: "SER Energia", initials: "SE" },
    { nome: "Shell", initials: "SH" },
    { nome: "Solatio", initials: "SO" },
    { nome: "IACO", initials: "IA" },
    { nome: "Raízen", initials: "RA" },
    { nome: "State Gem", initials: "SG" },
    { nome: "SPIC Brasil", initials: "SP" },
    { nome: "UP", initials: "UP" },
    { nome: "Voltalia", initials: "VO" },
    { nome: "Taesa", initials: "TA" },
    { nome: "Sunco Capital", initials: "SU" },
    { nome: "Elecnor Brasil", initials: "EB" },
    { nome: "Inpasa", initials: "IN" },
    { nome: "Greenyellow", initials: "GY" },
    { nome: "Pan American Energy", initials: "PA" },
    { nome: "China Eletric", initials: "CH" },
    { nome: "Comerc", initials: "CO" },
    { nome: "Helexia", initials: "HE" },
    { nome: "2W Energia", initials: "2W" },
    { nome: "Ambia", initials: "AM" },
    { nome: "Aurora", initials: "AU" },
    { nome: "Atlas", initials: "AT" },
    { nome: "AES Brasil", initials: "AE" },
    { nome: "Starkraft", initials: "ST" },
    { nome: "Grande Sertão", initials: "GS" },
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

      {/* Partners Grid */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#EFEFEF' }}>
        <div className="container">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 lg:gap-8">
            {parceiros.map((parceiro, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 12) * 0.05 }}
                className="flex items-center justify-center"
              >
                <div
                  className="w-full aspect-square rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                  }}
                >
                  <div className="text-center px-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                      style={{
                        backgroundColor: i % 3 === 0 ? '#861720' : i % 3 === 1 ? '#EE7501' : '#2C7EB3',
                        color: '#FFFFFF',
                      }}
                    >
                      <span className="text-[10px] font-bold">{parceiro.initials}</span>
                    </div>
                    <p className="text-[10px] font-medium leading-tight" style={{ color: '#2A2A2A' }}>
                      {parceiro.nome}
                    </p>
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
