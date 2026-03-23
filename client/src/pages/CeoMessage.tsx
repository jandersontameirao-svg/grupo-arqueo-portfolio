import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { Quote, ArrowRight } from "lucide-react";

const CEO_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/ceo-janderson-tameirao_b4bbdc61.webp";

export default function CeoMessage() {
  return (
    <PortfolioLayout
      chapterNum="01"
      chapterTitle="Mensagem do CEO"
      nextPath="/quem-somos"
      nextLabel="Quem Somos"
    >
      {/* Hero Section com foto e overlay */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#EE7501' }} />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-5" style={{ backgroundColor: '#2C7EB3' }} />
        </div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* LEFT — Photo with modern frame */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative frame elements */}
              <div className="relative">
                {/* Top-left accent line */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2" style={{ borderColor: '#EE7501' }} />
                
                {/* Main image container */}
                <div className="relative overflow-hidden rounded-lg shadow-2xl" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={CEO_PHOTO}
                    alt="Janderson Tameirão — CEO & Fundador"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Bottom-right accent line */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2" style={{ borderColor: '#2C7EB3' }} />

                {/* Info badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-8 -right-8 lg:-bottom-12 lg:-right-12 rounded-lg shadow-xl p-4 lg:p-6 max-w-xs"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <p className="text-sm lg:text-base font-semibold" style={{ color: '#2A2A2A' }}>
                    Janderson Tameirão
                  </p>
                  <p className="text-xs lg:text-sm font-light mt-1" style={{ color: '#888' }}>
                    CEO & Fundador
                  </p>
                  <p className="text-xs font-light mt-2" style={{ color: '#EE7501' }}>
                    Arqueólogo, Gestor e Visionário
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT — Message with modern typography */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pt-12"
            >
              {/* Quote icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Quote className="w-12 h-12 lg:w-16 lg:h-16" style={{ color: '#EE7501', opacity: 0.2 }} />
              </motion.div>

              {/* Main message */}
              <div className="space-y-6 lg:space-y-8">
                {/* Opening statement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <p className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight" style={{ color: '#2A2A2A' }}>
                    O patrimônio cultural é um ativo estratégico para o desenvolvimento sustentável do Brasil.
                  </p>
                </motion.div>

                {/* Body paragraphs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="space-y-4 text-base lg:text-lg leading-relaxed font-light"
                  style={{ color: '#555' }}
                >
                  <p>
                    Ao longo de uma década, o Grupo Arqueo consolidou-se como referência nacional em consultoria especializada para o licenciamento sociocultural. Nascemos com a convicção de que é possível conciliar desenvolvimento econômico com a preservação do patrimônio cultural e arqueológico.
                  </p>

                  <p>
                    Nossa trajetória foi construída sobre pilares sólidos: competência técnica, integridade profissional, inovação tecnológica e compromisso com a excelência. Cada projeto que realizamos carrega a responsabilidade de proteger a memória e a identidade cultural das comunidades onde atuamos.
                  </p>

                  <p>
                    Hoje, com mais de 250 projetos gerenciados em 16 estados brasileiros, lideramos um ecossistema integrado que abrange desde a pesquisa arqueológica de campo até a gestão de dados geoespaciais, educação patrimonial e arqueologia subaquática.
                  </p>
                </motion.div>

                {/* Stats row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="grid grid-cols-3 gap-4 pt-6 border-t"
                  style={{ borderColor: '#E6E6E6' }}
                >
                  <div>
                    <p className="text-2xl lg:text-3xl font-bold" style={{ color: '#EE7501' }}>250+</p>
                    <p className="text-xs lg:text-sm font-light mt-1" style={{ color: '#888' }}>Projetos</p>
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl font-bold" style={{ color: '#2C7EB3' }}>16</p>
                    <p className="text-xs lg:text-sm font-light mt-1" style={{ color: '#888' }}>Estados</p>
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl font-bold" style={{ color: '#861720' }}>10+</p>
                    <p className="text-xs lg:text-sm font-light mt-1" style={{ color: '#888' }}>Anos</p>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="pt-4"
                >
                  <a
                    href="/quem-somos"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:gap-3 hover:shadow-lg"
                    style={{ backgroundColor: '#EE7501' }}
                  >
                    Conheça Nossa História
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px my-16 lg:my-24" style={{ backgroundColor: '#E6E6E6' }} />

      {/* Values section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-16"
          >
            <p className="text-xs lg:text-sm font-semibold tracking-widest mb-3" style={{ color: '#EE7501' }}>NOSSOS PILARES</p>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold" style={{ color: '#2A2A2A' }}>
              Os fundamentos que guiam nossa atuação
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: '🔬', title: 'Competência Técnica', desc: 'Excelência em pesquisa e consultoria especializada' },
              { icon: '🤝', title: 'Integridade', desc: 'Transparência e ética em todas as relações' },
              { icon: '💡', title: 'Inovação', desc: 'Tecnologia e metodologias avançadas' },
              { icon: '⭐', title: 'Excelência', desc: 'Compromisso com a qualidade máxima' },
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 lg:p-8 rounded-lg border transition-all hover:shadow-lg"
                style={{ borderColor: '#E6E6E6', backgroundColor: '#FAFAF8' }}
              >
                <p className="text-3xl lg:text-4xl mb-4">{pillar.icon}</p>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#2A2A2A' }}>
                  {pillar.title}
                </h3>
                <p className="text-sm font-light" style={{ color: '#888' }}>
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
