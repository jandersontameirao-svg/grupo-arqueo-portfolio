import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";

/**
 * QUEM SOMOS — Página 02
 * Design: Hero section similar to Home with image background + gradient overlay
 * Editorial layout with premium spacing
 */

export default function QuemSomos() {
  return (
    <PortfolioLayout
      chapterNum="02"
      chapterTitle="Quem Somos"
      prevPath="/ceo"
      prevLabel="Mensagem do CEO"
      nextPath="/missao-visao"
      nextLabel="Missão, Visão e Valores"
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
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Identidade</span>
            </div>
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
              Referência nacional em{' '}
              <span style={{ color: '#EE7501' }}>consultoria arqueológica</span>
            </h1>
            <p className="text-base lg:text-lg font-light leading-relaxed" style={{ color: '#555', maxWidth: '600px' }}>
              O Grupo Arqueo é uma empresa de consultoria especializada em pesquisa e gestão do patrimônio sociocultural, com foco em licenciamento ambiental. Fundado em 2016, nascemos com a visão de oferecer soluções completas, integradas e tecnologicamente avançadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px my-16 lg:my-24" style={{ backgroundColor: '#E6E6E6' }} />

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: '#2A2A2A' }}>
                  Nossa <span style={{ color: '#EE7501' }}>Estrutura</span>
                </h2>
                <p className="text-base font-light leading-relaxed" style={{ color: '#555' }}>
                  Com sede em Brasília e escritórios em Natal e São Paulo, o Grupo Arqueo atua em todo o território nacional, atendendo aos maiores empreendimentos de infraestrutura, energia e recursos naturais do país.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#2A2A2A' }}>Nossa Equipe</h3>
                <p className="text-base font-light leading-relaxed" style={{ color: '#555' }}>
                  Multidisciplinar, composta por arqueólogos, historiadores, geógrafos, biólogos, educadores e especialistas em tecnologia, todos comprometidos com a excelência técnica e a inovação contínua.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F3EFEA' }}>
                  <span className="text-3xl font-bold" style={{ color: '#EE7501' }}>2016</span>
                  <p className="text-xs font-medium mt-2" style={{ color: '#888' }}>Ano de fundação</p>
                </div>
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F3EFEA' }}>
                  <span className="text-3xl font-bold" style={{ color: '#2C7EB3' }}>3</span>
                  <p className="text-xs font-medium mt-2" style={{ color: '#888' }}>Escritórios no Brasil</p>
                </div>
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F3EFEA' }}>
                  <span className="text-3xl font-bold" style={{ color: '#861720' }}>16</span>
                  <p className="text-xs font-medium mt-2" style={{ color: '#888' }}>Estados com atuação</p>
                </div>
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F3EFEA' }}>
                  <span className="text-3xl font-bold" style={{ color: '#EE7501' }}>250+</span>
                  <p className="text-xs font-medium mt-2" style={{ color: '#888' }}>Projetos gerenciados</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#F3EFEA' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Trajetória</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold" style={{ color: '#2A2A2A' }}>
              Uma década de <span style={{ color: '#EE7501' }}>crescimento</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: "2016", title: "Fundação", desc: "Criação do Grupo Arqueo em Brasília, com foco em consultoria arqueológica para licenciamento." },
              { year: "2018", title: "Expansão", desc: "Abertura do escritório em Natal/RN e início da atuação em projetos de energia eólica no Nordeste." },
              { year: "2020", title: "Ecossistema", desc: "Lançamento das submarcas ArqueoGIS, ArqueoOcean e ArqueoEduc, ampliando o portfólio de serviços." },
              { year: "2023", title: "Consolidação", desc: "Escritório em São Paulo, mais de 250 projetos gerenciados e presença em 16 estados." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6"
                style={{ backgroundColor: '#FFFFFF', borderTop: '3px solid #EE7501' }}
              >
                <span className="text-3xl font-bold" style={{ color: '#EE7501' }}>{item.year}</span>
                <h3 className="text-sm font-semibold mt-3 mb-2" style={{ color: '#2A2A2A' }}>{item.title}</h3>
                <p className="text-xs font-light leading-relaxed" style={{ color: '#888' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Escritórios</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold" style={{ color: '#2A2A2A' }}>
              Presença <span style={{ color: '#EE7501' }}>estratégica</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { city: "Brasília/DF", role: "Sede Administrativa", address: "SHS Qd. 06, Conj. A, Sala 501 — Complexo Brasil 21" },
              { city: "Natal/RN", role: "Escritório Regional Nordeste", address: "Rua Raimundo Chaves, 2182, Sala 501 — Ponta Negra" },
              { city: "São Paulo/SP", role: "Escritório Regional Sudeste", address: "Av. Brig. Faria Lima, 1461, 4º andar, Conj. 41" },
            ].map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6"
                style={{ backgroundColor: '#FFFFFF', borderLeft: '3px solid #EE7501' }}
              >
                <h3 className="text-lg font-bold mb-1" style={{ color: '#2A2A2A' }}>{office.city}</h3>
                <p className="text-xs font-medium mb-3" style={{ color: '#EE7501' }}>{office.role}</p>
                <p className="text-xs font-light leading-relaxed" style={{ color: '#888' }}>{office.address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
