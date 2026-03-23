import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { Quote } from "lucide-react";

export default function CeoMessage() {
  return (
    <PortfolioLayout
      chapterNum="01"
      chapterTitle="Mensagem do CEO"
      nextPath="/quem-somos"
      nextLabel="Quem Somos"
    >
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left column — Photo area */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4"
            >
              <div className="relative">
                <div className="aspect-[3/4] w-full" style={{ backgroundColor: '#E6E6E6' }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#EE7501' }}>
                        <span className="text-3xl font-bold text-white">JT</span>
                      </div>
                      <p className="text-sm font-semibold" style={{ color: '#2A2A2A' }}>Janderson Tameirão</p>
                      <p className="text-xs font-light mt-1" style={{ color: '#888' }}>CEO & Fundador</p>
                    </div>
                  </div>
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-full h-full -z-10" style={{ border: '2px solid #EE7501', opacity: 0.2 }} />
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#EE7501' }} />
                  <span className="text-xs font-medium" style={{ color: '#2A2A2A' }}>Arqueólogo e Gestor</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#EE7501' }} />
                  <span className="text-xs font-medium" style={{ color: '#2A2A2A' }}>Mestre em Arqueologia</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#EE7501' }} />
                  <span className="text-xs font-medium" style={{ color: '#2A2A2A' }}>+10 anos de experiência</span>
                </div>
              </div>
            </motion.div>

            {/* Right column — Message */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <Quote className="w-10 h-10 mb-6" style={{ color: '#EE7501', opacity: 0.3 }} />

              <div className="space-y-6 text-base lg:text-lg font-light leading-relaxed" style={{ color: '#444' }}>
                <p>
                  <span className="text-xl lg:text-2xl font-semibold leading-snug block mb-4" style={{ color: '#2A2A2A' }}>
                    "Acreditamos que o patrimônio cultural é um ativo estratégico para o desenvolvimento sustentável do Brasil."
                  </span>
                </p>

                <p>
                  Ao longo de uma década, o Grupo Arqueo consolidou-se como referência nacional em consultoria
                  especializada para o licenciamento sociocultural. Nascemos com a convicção de que é possível
                  conciliar desenvolvimento econômico com a preservação do patrimônio cultural e arqueológico,
                  oferecendo soluções técnicas robustas e inovadoras aos nossos clientes.
                </p>

                <p>
                  Nossa trajetória foi construída sobre pilares sólidos: competência técnica, integridade
                  profissional, inovação tecnológica e compromisso com a excelência. Cada projeto que
                  realizamos carrega a responsabilidade de proteger a memória e a identidade cultural
                  das comunidades onde atuamos.
                </p>

                <p>
                  Hoje, com mais de 250 projetos gerenciados em 16 estados brasileiros, temos orgulho
                  de liderar um ecossistema integrado de empresas que abrange desde a pesquisa
                  arqueológica de campo até a gestão de dados geoespaciais, educação patrimonial
                  e arqueologia subaquática.
                </p>

                <p>
                  Olhamos para o futuro com a mesma energia e determinação que nos trouxeram até aqui.
                  Continuaremos investindo em tecnologia, formação de equipe e ampliação de nossa
                  presença territorial, sempre com o compromisso de entregar valor real aos nossos
                  clientes e à sociedade brasileira.
                </p>

                <div className="pt-8 mt-8" style={{ borderTop: '1px solid #E6E6E6' }}>
                  <p className="text-sm font-semibold" style={{ color: '#2A2A2A' }}>Janderson Tameirão</p>
                  <p className="text-xs font-light mt-1" style={{ color: '#888' }}>
                    CEO & Fundador — Grupo Arqueo
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
