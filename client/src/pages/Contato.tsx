import { motion, AnimatePresence } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram, MessageCircle, X } from "lucide-react";
import { useState } from "react";

/**
 * CONTATO — Página 10 (Final)
 * Design: Hero section similar to Home with image background + gradient overlay
 * Botões flutuantes: WhatsApp, E-mail, Telefone, LinkedIn
 */

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

const floatingButtons = [
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/5561999999999",
    bg: "#25D366",
    hoverBg: "#1EBE57",
  },
  {
    label: "E-mail",
    icon: Mail,
    href: "mailto:contato@grupoarqueo.com.br",
    bg: "#EE7501",
    hoverBg: "#D46800",
  },
  {
    label: "Telefone",
    icon: Phone,
    href: "tel:+556131421040",
    bg: "#2C7EB3",
    hoverBg: "#246D9E",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/grupoarqueo",
    bg: "#0A66C2",
    hoverBg: "#0855A1",
  },
];

export default function Contato() {
  const [fabOpen, setFabOpen] = useState(false);

  return (
    <PortfolioLayout
      chapterNum="10"
      chapterTitle="Contato"
      prevPath="/parceiros"
      prevLabel="Nossos Parceiros"
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
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Semtítulo-3_73dbd431.webp"
                alt="10 Anos"
                className="h-12 lg:h-16 w-auto flex-shrink-0"
              />
              <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Contato</span>
            </div>
            <h1 className="leading-tight mb-6" style={{ color: '#2A2A2A' }}>
              <div className="text-base lg:text-lg font-normal mb-2" style={{ color: '#666' }}>Fale com o</div>
              <div className="text-4xl lg:text-6xl xl:text-7xl font-bold" style={{ color: '#EE7501' }}>Arqueo</div>
            </h1>
            <p className="text-base lg:text-lg font-light leading-relaxed" style={{ color: '#555', maxWidth: '600px' }}>
              Estamos prontos para atender as demandas do seu empreendimento com soluções técnicas especializadas em patrimônio sociocultural e licenciamento ambiental.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px my-20 lg:my-28" style={{ backgroundColor: '#E6E6E6' }} />

      {/* Contact Content */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 lg:p-16 rounded-lg"
              style={{ backgroundColor: '#FAFAF8', border: '1px solid #E6E6E6' }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-12" style={{ color: '#888' }}>Informações de Contato</h3>
              
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded" style={{ backgroundColor: '#EE7501' }}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: '#AAA' }}>E-mail</p>
                    <a href="mailto:contato@grupoarqueo.com.br" className="text-lg font-semibold transition-colors hover:text-[#EE7501] break-all" style={{ color: '#2A2A2A' }}>
                      contato@grupoarqueo.com.br
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded" style={{ backgroundColor: '#EE7501' }}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: '#AAA' }}>Telefone</p>
                    <p className="text-lg font-semibold" style={{ color: '#2A2A2A' }}>(61) 3142-1040</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded" style={{ backgroundColor: '#EE7501' }}>
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: '#AAA' }}>Website</p>
                    <a href="https://grupoarqueo.com.br" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold transition-colors hover:text-[#EE7501] break-all" style={{ color: '#2A2A2A' }}>
                      www.grupoarqueo.com.br
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12" style={{ borderTop: '1px solid #E6E6E6' }}>
                <p className="text-xs font-medium tracking-wider uppercase mb-8" style={{ color: '#888' }}>Redes Sociais</p>
                <div className="flex gap-5">
                  <a href="https://www.linkedin.com/company/grupoarqueo" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center transition-all duration-300 rounded hover:shadow-md hover:scale-105"
                    style={{ backgroundColor: '#EE7501', color: 'white' }}>
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/grupoarqueo" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center transition-all duration-300 rounded hover:shadow-md hover:scale-105"
                    style={{ backgroundColor: '#EE7501', color: 'white' }}>
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-lg font-bold mb-8" style={{ color: '#2A2A2A' }}>Nossos Escritorios</h3>
              {offices.map((office, i) => (
                <div
                  key={i}
                  className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
                  style={{ backgroundColor: '#FFFFFF', borderLeft: '3px solid #EE7501', border: '1px solid #E6E6E6' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4" style={{ color: '#EE7501' }} />
                    <h4 className="text-base font-bold" style={{ color: '#2A2A2A' }}>{office.city}</h4>
                  </div>
                  <p className="text-xs font-medium mb-2" style={{ color: '#EE7501' }}>{office.role}</p>
                  <p className="text-xs font-light leading-relaxed mb-4" style={{ color: '#888' }}>{office.address}</p>
                  <a href="#" className="text-xs font-medium transition-colors duration-300 inline-flex items-center gap-1 group-hover:text-[#EE7501]" style={{ color: '#AAA' }}>
                    Ver no mapa →
                  </a>
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

      {/* CTA Section */}
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

      {/* ═══════════════════ BOTÕES FLUTUANTES ═══════════════════ */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
        {/* Botões expandidos */}
        <AnimatePresence>
          {fabOpen && floatingButtons.map((btn, i) => (
            <motion.a
              key={btn.label}
              href={btn.href}
              target={btn.href.startsWith("http") ? "_blank" : undefined}
              rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.6 }}
              transition={{ duration: 0.25, delay: i * 0.06 }}
              className="flex items-center gap-3 group"
            >
              {/* Label */}
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2, delay: i * 0.06 + 0.1 }}
                className="px-3 py-1.5 text-xs font-semibold tracking-wide text-white rounded-md shadow-lg whitespace-nowrap"
                style={{ backgroundColor: 'rgba(42,42,42,0.9)', backdropFilter: 'blur(8px)' }}
              >
                {btn.label}
              </motion.span>
              {/* Ícone circular */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
                style={{ backgroundColor: btn.bg }}
              >
                <btn.icon className="w-5 h-5 text-white" />
              </div>
            </motion.a>
          ))}
        </AnimatePresence>

        {/* Botão FAB principal */}
        <motion.button
          onClick={() => setFabOpen(!fabOpen)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:shadow-2xl"
          style={{ backgroundColor: fabOpen ? '#2A2A2A' : '#EE7501' }}
          whileTap={{ scale: 0.92 }}
          aria-label="Abrir canais de contato"
        >
          <motion.div
            animate={{ rotate: fabOpen ? 90 : 0 }}
            transition={{ duration: 0.25 }}
          >
            {fabOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MessageCircle className="w-6 h-6 text-white" />
            )}
          </motion.div>
        </motion.button>
      </div>
    </PortfolioLayout>
  );
}
