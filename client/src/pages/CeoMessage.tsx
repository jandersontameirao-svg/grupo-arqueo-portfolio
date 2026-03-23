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
              {/* Quote icon removed */}

              {/* Main message */}
              <div className="space-y-6 lg:space-y-8">
                {/* Opening statement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight" style={{ color: '#861720' }}>
                    O patrimônio cultural é um{" "}
                    <span style={{ color: '#EE7501' }}>ativo estratégico</span>{" "}
                    para o desenvolvimento sustentável do Brasil.
                  </h2>
                </motion.div>

                {/* Decorative accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-[3px] w-20 origin-left rounded-full"
                  style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }}
                />

                {/* Body paragraphs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="space-y-5 text-base lg:text-lg leading-[1.8] font-light"
                  style={{ color: '#444' }}
                >
                  <p>
                    O projeto nasce a partir de um <strong style={{ color: '#861720', fontWeight: 600 }}>propósito claro</strong>: elevar o padrão da arqueologia preventiva no Brasil e entregar mais <strong style={{ color: '#861720', fontWeight: 600 }}>previsibilidade ao licenciamento ambiental</strong>. Desde o início assumimos um papel <strong style={{ color: '#EE7501', fontWeight: 600 }}>disruptivo</strong> ao combinar <strong style={{ color: '#861720', fontWeight: 600 }}>rigor técnico</strong>, visão de gestão e <strong style={{ color: '#861720', fontWeight: 600 }}>inovação aplicada</strong>, transformando exigências e complexidade em método, rastreabilidade e entregas consistentes.
                  </p>

                  <p>
                    Ao longo dessa trajetória, a tecnologia deixou de ser um apoio pontual e passou a integrar nossa forma de operar. Investimos em <strong style={{ color: '#861720', fontWeight: 600 }}>padronização de processos</strong>, organização inteligente de dados, controles de qualidade e melhoria contínua, fortalecendo a capacidade de execução em projetos complexos e com alta demanda de conformidade.
                  </p>

                  <p>
                    Com quase <strong style={{ color: '#EE7501', fontWeight: 700 }}>10 anos de história</strong>, inauguramos um novo ciclo e o <strong style={{ color: '#2A2A2A', fontWeight: 600 }}>Grupo Arqueo</strong> se projeta como nunca, para a era das <strong style={{ color: '#861720', fontWeight: 600 }}>IAs e da sustentabilidade</strong>, formalizando padrões, consolidando governança e incorporando <strong style={{ color: '#EE7501', fontWeight: 600 }}>inteligência artificial</strong> para padronizar fluxos, qualificar decisões e acelerar entregas com segurança, transparência e foco em resultados.
                  </p>

                  <p className="pt-4 italic border-l-4" style={{ borderColor: '#861720', paddingLeft: '1.5rem', color: '#555' }}>
                    “É assim que avançamos: rigor técnico, inovação aplicada e compromisso com resultados, hoje e nos próximos anos.”
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px my-4 lg:my-6" style={{ backgroundColor: '#E6E6E6' }} />

      {/* Values section — Premium Modern Design */}
      <section className="py-6 lg:py-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-3" style={{ backgroundColor: '#EE7501' }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-3" style={{ backgroundColor: '#2C7EB3' }} />
        </div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 lg:mb-10"
          >
            <p className="text-xs lg:text-sm font-semibold tracking-widest mb-4" style={{ color: '#EE7501' }}>NOSSOS PILARES</p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight" style={{ color: '#2A2A2A' }}>
              Os fundamentos que guiam nossa atuação
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: '🔬', title: 'Competência Técnica', desc: 'Excelência em pesquisa e consultoria especializada', color: '#EE7501' },
              { icon: '🤝', title: 'Integridade', desc: 'Transparência e ética em todas as relações', color: '#861720' },
              { icon: '💡', title: 'Inovação', desc: 'Tecnologia e metodologias avançadas', color: '#2C7EB3' },
              { icon: '⭐', title: 'Excelência', desc: 'Compromisso com a qualidade máxima', color: '#2A2A2A' },
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 lg:p-10 rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl overflow-hidden"
                style={{
                  borderColor: `${pillar.color}30`,
                  backgroundColor: '#FFFFFF',
                  background: `linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(${parseInt(pillar.color.slice(1,3), 16)},${parseInt(pillar.color.slice(3,5), 16)},${parseInt(pillar.color.slice(5,7), 16)},0.02) 100%)`
                }}
              >
                {/* Accent line on top */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${pillar.color}, transparent)` }} />

                {/* Icon container with background */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl transition-all"
                  style={{ backgroundColor: `${pillar.color}12` }}
                >
                  <p className="text-3xl lg:text-4xl">{pillar.icon}</p>
                </motion.div>

                {/* Content */}
                <h3 className="text-lg lg:text-xl font-bold mb-3 transition-colors" style={{ color: pillar.color }}>
                  {pillar.title}
                </h3>
                <p className="text-sm lg:text-base font-light leading-relaxed" style={{ color: '#666' }}>
                  {pillar.desc}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-5 transition-opacity" style={{ backgroundColor: pillar.color, borderRadius: '100% 0 0 0' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
