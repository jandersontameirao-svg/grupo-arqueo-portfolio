import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { Heart, Eye, Compass, Shield, Users, Sparkles, Scale, Handshake } from "lucide-react";

export default function MissaoVisao() {
  return (
    <PortfolioLayout
      chapterNum="03"
      chapterTitle="Missão, Visão e Valores"
      prevPath="/quem-somos"
      prevLabel="Quem Somos"
      nextPath="/ecossistema"
      nextLabel="Ecossistema do Grupo"
    >
      {/* Missão, Visão */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Missão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-12"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ backgroundColor: '#EE7501' }}>
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold mb-4" style={{ color: '#2A2A2A' }}>Missão</h2>
              <div className="w-8 h-0.5 mb-6" style={{ backgroundColor: '#EE7501' }} />
              <p className="text-sm lg:text-base font-light leading-relaxed" style={{ color: '#555' }}>
                Oferecer soluções completas e inovadoras em consultoria para o licenciamento sociocultural,
                unindo competência técnica, tecnologia de ponta e gestão estratégica para viabilizar
                empreendimentos de forma sustentável, preservando o patrimônio cultural e arqueológico
                do Brasil.
              </p>
            </motion.div>

            {/* Visão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-8 lg:p-12"
              style={{ backgroundColor: '#2A2A2A' }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ backgroundColor: '#EE7501' }}>
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold mb-4 text-white">Visão</h2>
              <div className="w-8 h-0.5 mb-6" style={{ backgroundColor: '#EE7501' }} />
              <p className="text-sm lg:text-base font-light leading-relaxed text-white/70">
                Ser reconhecido como o principal grupo de consultoria em patrimônio sociocultural
                do Brasil, referência em inovação tecnológica, excelência operacional e compromisso
                com a preservação da memória cultural brasileira.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#F3EFEA' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Valores</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold" style={{ color: '#2A2A2A' }}>
              Os pilares que <span style={{ color: '#EE7501' }}>sustentam</span> nossa atuação
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Integridade", desc: "Atuamos com transparência, ética e responsabilidade em todas as relações profissionais e institucionais." },
              { icon: Handshake, title: "Honestidade", desc: "Compromisso com a verdade técnica e a clareza na comunicação com clientes, parceiros e órgãos reguladores." },
              { icon: Heart, title: "Trabalho", desc: "Dedicação e disciplina como motores de excelência. Cada projeto recebe o empenho necessário para resultados superiores." },
              { icon: Users, title: "Equipe", desc: "Valorizamos o trabalho colaborativo e a diversidade de competências como diferencial estratégico." },
              { icon: Sparkles, title: "Diversidade", desc: "Respeitamos e celebramos a pluralidade cultural, étnica e profissional como fonte de inovação e riqueza." },
              { icon: Scale, title: "Responsabilidade", desc: "Compromisso com o impacto positivo de nossas ações sobre o patrimônio cultural e as comunidades envolvidas." },
            ].map((valor, i) => {
              const Icon = valor.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-6 lg:p-8 group transition-all duration-500 hover:-translate-y-1"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <Icon className="w-6 h-6 mb-4 transition-colors duration-300 group-hover:text-[#EE7501]" style={{ color: '#2C7EB3' }} />
                  <h3 className="text-sm font-bold mb-2" style={{ color: '#2A2A2A' }}>{valor.title}</h3>
                  <p className="text-xs font-light leading-relaxed" style={{ color: '#888' }}>{valor.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#861720' }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl lg:text-3xl font-bold text-white max-w-3xl mx-auto leading-tight">
              "Nosso compromisso vai além da conformidade legal — buscamos gerar valor real para o patrimônio cultural brasileiro."
            </h3>
            <div className="w-12 h-0.5 mx-auto mt-8" style={{ backgroundColor: '#EE7501' }} />
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
