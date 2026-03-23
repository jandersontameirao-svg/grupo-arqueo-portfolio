import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram } from "lucide-react";

const offices = [
  {
    city: "Brasilia/DF",
    role: "Sede Administrativa",
    address: "SHS Qd. 06, Conj. A, Sala 501 - Complexo Brasil 21",
  },
  {
    city: "Natal/RN",
    role: "Regional Nordeste",
    address: "Rua Raimundo Chaves, 2182, Sala 501 - Ponta Negra",
  },
  {
    city: "Sao Paulo/SP",
    role: "Regional Sudeste",
    address: "Av. Brig. Faria Lima, 1461, 4o andar, Conj. 41",
  },
];

export default function Contato() {
  return (
    <PortfolioLayout
      chapterNum="10"
      chapterTitle="Contato"
      prevPath="/territorio"
      prevLabel="Presenca Territorial"
    >
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Contato</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
                Fale com o <span style={{ color: '#EE7501' }}>Grupo Arqueo</span>
              </h2>
              <p className="text-sm lg:text-base font-light leading-relaxed mb-10" style={{ color: '#555' }}>
                Estamos prontos para atender as demandas do seu empreendimento com solucoes
                tecnicas especializadas em patrimonio sociocultural e licenciamento ambiental.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: '#F3EFEA' }}>
                    <Mail className="w-5 h-5" style={{ color: '#EE7501' }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wider uppercase mb-1" style={{ color: '#888' }}>E-mail</p>
                    <a href="mailto:contato@grupoarqueo.com.br" className="text-sm font-semibold transition-colors hover:text-[#EE7501]" style={{ color: '#2A2A2A' }}>
                      contato@grupoarqueo.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: '#F3EFEA' }}>
                    <Phone className="w-5 h-5" style={{ color: '#EE7501' }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wider uppercase mb-1" style={{ color: '#888' }}>Telefone</p>
                    <p className="text-sm font-semibold" style={{ color: '#2A2A2A' }}>(61) 3142-1040</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: '#F3EFEA' }}>
                    <Globe className="w-5 h-5" style={{ color: '#EE7501' }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wider uppercase mb-1" style={{ color: '#888' }}>Website</p>
                    <a href="https://grupoarqueo.com.br" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold transition-colors hover:text-[#EE7501]" style={{ color: '#2A2A2A' }}>
                      www.grupoarqueo.com.br
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8" style={{ borderTop: '1px solid #E6E6E6' }}>
                <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: '#888' }}>Redes Sociais</p>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/company/grupoarqueo" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-[#EE7501] hover:text-white"
                    style={{ border: '1px solid #E6E6E6', color: '#2A2A2A' }}>
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/grupoarqueo" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-[#EE7501] hover:text-white"
                    style={{ border: '1px solid #E6E6E6', color: '#2A2A2A' }}>
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-bold mb-6" style={{ color: '#2A2A2A' }}>Nossos Escritorios</h3>
              {offices.map((office, i) => (
                <div
                  key={i}
                  className="p-6 transition-all duration-300 hover:translate-x-2"
                  style={{ backgroundColor: '#FFFFFF', borderLeft: '3px solid #EE7501' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4" style={{ color: '#EE7501' }} />
                    <h4 className="text-base font-bold" style={{ color: '#2A2A2A' }}>{office.city}</h4>
                  </div>
                  <p className="text-xs font-medium mb-2" style={{ color: '#EE7501' }}>{office.role}</p>
                  <p className="text-xs font-light leading-relaxed" style={{ color: '#888' }}>{office.address}</p>
                </div>
              ))}

              <div className="p-8 mt-6" style={{ backgroundColor: '#2A2A2A' }}>
                <h4 className="text-sm font-bold text-white mb-3">Horario de Atendimento</h4>
                <p className="text-xs font-light" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Segunda a Sexta: 08h00 - 18h00
                </p>
                <p className="text-xs font-light mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Sabados, Domingos e Feriados: Fechado
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20" style={{ backgroundColor: '#861720' }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl lg:text-3xl font-bold text-white max-w-3xl mx-auto leading-tight">
              Pronto para iniciar seu projeto com quem entende de patrimonio cultural?
            </h3>
            <a
              href="mailto:contato@grupoarqueo.com.br"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#EE7501' }}
            >
              <Mail className="w-4 h-4" />
              Enviar E-mail
            </a>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
