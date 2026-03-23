import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const empresas = [
  {
    id: "arqueoproject",
    name: "Arqueoproject",
    logo: ASSETS.logoArqueoproject,
    tagline: "Pesquisa Arqueológica e Consultoria",
    color: "#EE7501",
    url: "https://www.arqueoproject.com.br",
    desc: "Empresa-mãe do grupo, especializada em pesquisa arqueológica preventiva e consultoria para licenciamento sociocultural. Atua em todo o ciclo de gestão arqueológica, desde o diagnóstico até o resgate e monitoramento.",
    services: ["Diagnóstico Arqueológico", "Prospecção e Resgate", "Monitoramento Arqueológico", "Laudos e Relatórios Técnicos", "Gestão de Acervo"],
  },
  {
    id: "arqueogis",
    name: "ArqueoGIS",
    logo: ASSETS.logoArqueogis,
    tagline: "Tecnologia e Dados Geoespaciais",
    color: "#2C7EB3",
    url: "https://www.arqueogis.com.br",
    desc: "Plataforma de tecnologia e gestão de dados geoespaciais aplicados à arqueologia. Desenvolve soluções de geoprocessamento, sensoriamento remoto e sistemas de informação geográfica para projetos arqueológicos.",
    services: ["Geoprocessamento", "Sensoriamento Remoto", "SIG Arqueológico", "Modelagem 3D", "Banco de Dados Espaciais"],
  },
  {
    id: "arqueocean",
    name: "ArqueoOcean",
    logo: ASSETS.logoArqueocean,
    tagline: "Arqueologia Subaquática",
    color: "#1A5276",
    url: "https://www.arqueocean.com.br",
    desc: "Divisão especializada em arqueologia subaquática e costeira. Atua em projetos offshore, portuários e de infraestrutura costeira, com equipe certificada em mergulho científico e técnico.",
    services: ["Arqueologia Subaquática", "Prospecção Costeira", "Levantamento Offshore", "Mergulho Científico", "Patrimônio Naval"],
  },
  {
    id: "arqueoeduc",
    name: "ArqueoEduc",
    logo: ASSETS.logoArqueoeduc,
    tagline: "Educação Patrimonial e Comunicação",
    color: "#861720",
    url: "https://www.arqueoeduc.com.br",
    desc: "Braço educacional e de comunicação social do grupo. Desenvolve programas de educação patrimonial, comunicação social e engajamento comunitário como parte dos processos de licenciamento.",
    services: ["Educação Patrimonial", "Comunicação Social", "Engajamento Comunitário", "Produção de Conteúdo", "Programas Educativos"],
  },
];

export default function Ecossistema() {
  const [activeEmpresa, setActiveEmpresa] = useState(empresas[0]);

  return (
    <PortfolioLayout
      chapterNum="04"
      chapterTitle="Ecossistema do Grupo"
      prevPath="/missao-visao"
      prevLabel="Missão, Visão e Valores"
      nextPath="/solucoes"
      nextLabel="Soluções"
    >
      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Ecossistema</span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
              Quatro empresas, uma <span style={{ color: '#EE7501' }}>visão integrada</span>
            </h2>
            <p className="text-sm lg:text-base font-light leading-relaxed" style={{ color: '#555' }}>
              O Grupo Arqueo opera através de um ecossistema de empresas especializadas,
              cada uma com competência técnica própria, mas todas integradas sob uma mesma
              visão estratégica de excelência e inovação.
            </p>
          </motion.div>

          {/* Hub visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Selector */}
            <div className="lg:col-span-4 space-y-3">
              {empresas.map((empresa, i) => (
                <motion.div
                  key={empresa.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  onClick={() => setActiveEmpresa(empresa)}
                  className="flex items-center gap-4 p-4 cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor: activeEmpresa.id === empresa.id ? '#2A2A2A' : '#FFFFFF',
                    borderLeft: `3px solid ${empresa.color}`,
                  }}
                >
                  <img src={empresa.logo} alt={empresa.name} className="h-8 w-auto" style={{
                    filter: activeEmpresa.id === empresa.id ? 'brightness(0) invert(1)' : 'none'
                  }} />
                  <div>
                    <h3 className="text-sm font-semibold" style={{
                      color: activeEmpresa.id === empresa.id ? '#FFFFFF' : '#2A2A2A'
                    }}>{empresa.name}</h3>
                    <p className="text-[11px] font-light" style={{
                      color: activeEmpresa.id === empresa.id ? 'rgba(255,255,255,0.6)' : '#888'
                    }}>{empresa.tagline}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Detail */}
            <div className="lg:col-span-8">
              <motion.div
                key={activeEmpresa.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-8 lg:p-12"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <img src={activeEmpresa.logo} alt={activeEmpresa.name} className="h-10 w-auto mb-3" />
                    <p className="text-xs font-medium" style={{ color: activeEmpresa.color }}>{activeEmpresa.tagline}</p>
                  </div>
                  <a
                    href={activeEmpresa.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[#EE7501]"
                    style={{ color: '#888' }}
                  >
                    Visitar site <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="w-full h-0.5 mb-6" style={{ backgroundColor: activeEmpresa.color, opacity: 0.2 }} />

                <p className="text-sm lg:text-base font-light leading-relaxed mb-8" style={{ color: '#555' }}>
                  {activeEmpresa.desc}
                </p>

                <h4 className="text-xs font-semibold tracking-wider uppercase mb-4" style={{ color: '#2A2A2A' }}>
                  Competências
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeEmpresa.services.map((service, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium"
                      style={{ backgroundColor: `${activeEmpresa.color}10`, color: activeEmpresa.color, border: `1px solid ${activeEmpresa.color}20` }}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration strip */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: '#2A2A2A' }}>
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 flex-wrap justify-center">
              {empresas.map((e) => (
                <img key={e.id} src={e.logo} alt={e.name} className="h-6 lg:h-8 w-auto brightness-0 invert opacity-60" />
              ))}
            </div>
            <p className="text-xs font-light text-center lg:text-right" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Empresas integradas sob uma visão estratégica única
            </p>
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
