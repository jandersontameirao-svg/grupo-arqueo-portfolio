import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { MapPin } from "lucide-react";
import MapaBrasilSVG from "@/components/MapaBrasilSVG";
import { useState } from "react";

/**
 * PRESENÇA TERRITORIAL — Página 09
 * Design: Hero section similar to Home with image background + gradient overlay
 */

const estados = [
  { uf: "RN", nome: "Rio Grande do Norte", regiao: "Nordeste", projetos: "40+" },
  { uf: "PB", nome: "Paraíba", regiao: "Nordeste", projetos: "35+" },
  { uf: "PE", nome: "Pernambuco", regiao: "Nordeste", projetos: "25+" },
  { uf: "CE", nome: "Ceará", regiao: "Nordeste", projetos: "20+" },
  { uf: "BA", nome: "Bahia", regiao: "Nordeste", projetos: "20+" },
  { uf: "PI", nome: "Piauí", regiao: "Nordeste", projetos: "15+" },
  { uf: "MA", nome: "Maranhão", regiao: "Nordeste", projetos: "10+" },
  { uf: "SE", nome: "Sergipe", regiao: "Nordeste", projetos: "8+" },
  { uf: "AL", nome: "Alagoas", regiao: "Nordeste", projetos: "5+" },
  { uf: "MG", nome: "Minas Gerais", regiao: "Sudeste", projetos: "15+" },
  { uf: "SP", nome: "São Paulo", regiao: "Sudeste", projetos: "10+" },
  { uf: "RJ", nome: "Rio de Janeiro", regiao: "Sudeste", projetos: "8+" },
  { uf: "GO", nome: "Goiás", regiao: "Centro-Oeste", projetos: "10+" },
  { uf: "DF", nome: "Distrito Federal", regiao: "Centro-Oeste", projetos: "5+" },
  { uf: "TO", nome: "Tocantins", regiao: "Norte", projetos: "5+" },
  { uf: "PA", nome: "Pará", regiao: "Norte", projetos: "3+" },
];

const regioes = [
  { nome: "Nordeste", count: 9, color: "#EE7501" },
  { nome: "Sudeste", count: 3, color: "#2C7EB3" },
  { nome: "Centro-Oeste", count: 2, color: "#861720" },
  { nome: "Norte", count: 2, color: "#5B8C3E" },
];

interface Estado {
  sigla: string;
  nome: string;
  ativo: boolean;
  projetos: number;
  regiao: string;
}

export default function Territorio() {
  const [selectedEstado, setSelectedEstado] = useState<Estado | null>(null);
  return (
    <PortfolioLayout
      chapterNum="09"
      chapterTitle="Presença Territorial"
      prevPath="/cases"
      prevLabel="Cases"
      nextPath="/contato"
      nextLabel="Contato"
    >
      {/* Hero Section — Similar to Home */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden">
        {/* Background image + gradient overlay */}
        <div className="absolute inset-0 -z-10">
          <img src={ASSETS.heroArqueologia} alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(249,248,246,1) 0%, rgba(249,248,246,0.98) 20%, rgba(249,248,246,0.95) 40%, rgba(249,248,246,0.85) 60%, rgba(249,248,246,0.70) 80%, rgba(249,248,246,0.50) 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Território</span>
            </div>
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
              Atuação em <span style={{ color: '#EE7501' }}>16 estados</span> brasileiros
            </h1>
            <p className="text-base lg:text-lg font-light leading-relaxed" style={{ color: '#555', maxWidth: '600px' }}>
              Com escritórios em Brasília, Natal e São Paulo, o Grupo Arqueo possui presença estratégica para atender projetos em todas as regiões do Brasil, com destaque para o Nordeste, onde concentra a maior parte de sua atuação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px my-16 lg:my-24" style={{ backgroundColor: '#E6E6E6' }} />

      {/* Mapa Visual */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Left: Text */}
            <div className="lg:col-span-1 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
                  <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Mapa</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
                  Presença em <span style={{ color: '#EE7501' }}>24 estados</span>
                </h2>
                <p className="text-sm font-light leading-relaxed mb-6" style={{ color: '#555' }}>
                  Estados ativos em <span style={{ color: '#861720', fontWeight: 600 }}>vermelho</span> representam a cobertura estratégica do Grupo Arqueo em todas as regiões do Brasil.
                </p>
                {selectedEstado && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: '#FFF5E6', borderLeft: '3px solid #EE7501' }}
                  >
                    <p className="text-xs font-medium" style={{ color: '#EE7501' }}>Selecionado</p>
                    <p className="text-lg font-bold" style={{ color: '#2A2A2A' }}>{selectedEstado.nome}</p>
                    <p className="text-sm" style={{ color: '#666' }}>{selectedEstado.projetos} projetos</p>
                  </motion.div>
                )}
              </motion.div>
            </div>
            {/* Right: Map */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-lg overflow-hidden shadow-lg"
                style={{ backgroundColor: '#FFFFFF', minHeight: '500px' }}
              >
                <MapaBrasilSVG
                  onEstadoSelect={setSelectedEstado}
                  selectedEstado={selectedEstado}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px my-16 lg:my-24" style={{ backgroundColor: '#E6E6E6' }} />

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container">
          {/* Regions summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {regioes.map((reg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5"
                style={{ backgroundColor: '#FFFFFF', borderTop: `3px solid ${reg.color}` }}
              >
                <span className="text-2xl font-bold" style={{ color: reg.color }}>{reg.count}</span>
                <p className="text-xs font-medium mt-1" style={{ color: '#2A2A2A' }}>estados</p>
                <p className="text-xs font-light" style={{ color: '#888' }}>{reg.nome}</p>
              </motion.div>
            ))}
          </div>

          {/* States grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {estados.map((estado, i) => (
              <motion.div
                key={estado.uf}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group p-4 text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <span className="text-lg font-bold block transition-colors duration-300 group-hover:text-[#EE7501]" style={{ color: '#2A2A2A' }}>
                  {estado.uf}
                </span>
                <p className="text-[10px] font-light mt-0.5" style={{ color: '#888' }}>{estado.projetos}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#2A2A2A' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>Escritórios</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Bases <span style={{ color: '#EE7501' }}>estratégicas</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { city: "Brasília/DF", role: "Sede Administrativa", address: "SHS Qd. 06, Conj. A, Sala 501 — Complexo Brasil 21", icon: "🏛️" },
              { city: "Natal/RN", role: "Regional Nordeste", address: "Rua Raimundo Chaves, 2182, Sala 501 — Ponta Negra", icon: "🌊" },
              { city: "São Paulo/SP", role: "Regional Sudeste", address: "Av. Brig. Faria Lima, 1461, 4º andar, Conj. 41", icon: "🏙️" },
            ].map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-4 h-4" style={{ color: '#EE7501' }} />
                  <h3 className="text-base font-bold text-white">{office.city}</h3>
                </div>
                <p className="text-xs font-medium mb-2" style={{ color: '#EE7501' }}>{office.role}</p>
                <p className="text-xs font-light" style={{ color: 'rgba(255,255,255,0.5)' }}>{office.address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
