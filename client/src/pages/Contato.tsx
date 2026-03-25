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
    city: "Brasília/DF",
    role: "Sede Administrativa",
    address: "QS 1 BLOCO D - Águas Claras, Brasília - DF, 71950-550\nConnect Towers - Salas 26 20 e 26 21",
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
      {/* Imagem Institucional — TOPO DA PÁGINA */}
      <section className="py-0 bg-white">
        <div className="w-full flex justify-center">
          <motion.img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/imagem(5)_13e48ffd.png"
            alt="Grupo Arqueo - Hub de soluções integradas"
            className="h-auto w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden">        {/* Background image + gradient overlay */}
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
            <p className="text-lg lg:text-xl font-light leading-relaxed" style={{ color: '#444', maxWidth: '600px', letterSpacing: '0.3px' }}>
              Conectamos expertise em arqueologia, patrimônio cultural e licenciamento ambiental com soluções inovadoras para seus projetos.
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
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-12" style={{ color: '#666', letterSpacing: '0.5px' }}>Contatos Especializados</h3>
              
              {/* Janderson */}
              <div className="mb-12 pb-12" style={{ borderBottom: '1px solid #E6E6E6' }}>
                <p className="text-sm font-bold mb-6" style={{ color: '#1A1A1A', letterSpacing: '0.3px' }}>Janderson</p>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded" style={{ backgroundColor: '#EE7501' }}>
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#888', letterSpacing: '0.4px' }}>E-mail</p>
                      <a href="mailto:janderson@grupoarqueo.com.br" className="text-sm lg:text-base font-semibold transition-colors hover:text-[#EE7501] break-all" style={{ color: '#1A1A1A', letterSpacing: '0.2px' }}>
                        janderson@grupoarqueo.com.br
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded" style={{ backgroundColor: '#EE7501' }}>
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 pt-0.5">
                      <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#888', letterSpacing: '0.4px' }}>Telefone</p>
                      <a href="tel:+5561911211508" className="text-sm lg:text-base font-semibold transition-colors hover:text-[#EE7501]" style={{ color: '#1A1A1A', letterSpacing: '0.2px' }}>+55 61 91121-1508</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fernanda */}
              <div>
                <p className="text-sm font-bold mb-6" style={{ color: '#1A1A1A', letterSpacing: '0.3px' }}>Fernanda</p>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded" style={{ backgroundColor: '#EE7501' }}>
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#888', letterSpacing: '0.4px' }}>E-mail</p>
                      <a href="mailto:Fernanda@arqueoproject.com.br" className="text-sm lg:text-base font-semibold transition-colors hover:text-[#EE7501] break-all" style={{ color: '#1A1A1A', letterSpacing: '0.2px' }}>
                        Fernanda@arqueoproject.com.br
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded" style={{ backgroundColor: '#EE7501' }}>
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 pt-0.5">
                      <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#888', letterSpacing: '0.4px' }}>Telefone</p>
                      <a href="tel:+5561983186264" className="text-sm lg:text-base font-semibold transition-colors hover:text-[#EE7501]" style={{ color: '#1A1A1A', letterSpacing: '0.2px' }}>+55 61 98318-6264</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12" style={{ borderTop: '1px solid #E6E6E6' }}>
                <p className="text-sm font-bold tracking-wider uppercase mb-8" style={{ color: '#666', letterSpacing: '0.5px' }}>Redes Sociais</p>
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
              <h3 className="text-xl font-bold mb-8" style={{ color: '#1A1A1A', letterSpacing: '0.3px' }}>Nossa Sede</h3>
              {offices.map((office, i) => (
                <div
                  key={i}
                  className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
                  style={{ backgroundColor: '#FFFFFF', borderLeft: '3px solid #EE7501', border: '1px solid #E6E6E6' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4" style={{ color: '#EE7501' }} />
                    <h4 className="text-lg font-bold" style={{ color: '#1A1A1A', letterSpacing: '0.2px' }}>{office.city}</h4>
                  </div>
                  <p className="text-sm font-semibold mb-3" style={{ color: '#EE7501', letterSpacing: '0.3px' }}>{office.role}</p>
                  <p className="text-sm font-light leading-relaxed mb-4" style={{ color: '#555', whiteSpace: 'pre-line', letterSpacing: '0.2px' }}>{office.address}</p>
                  <a href="#" className="text-sm font-semibold transition-colors duration-300 inline-flex items-center gap-1 group-hover:text-[#EE7501]" style={{ color: '#888' }}>
                    Ver no mapa →
                  </a>
                </div>
              ))}

              <div className="p-8 mt-6" style={{ backgroundColor: '#2A2A2A' }}>
                <h4 className="text-base font-bold text-white mb-4" style={{ letterSpacing: '0.3px' }}>Horário de Atendimento</h4>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.75)', letterSpacing: '0.2px' }}>
                  Segunda a Sexta: 08h00 - 18h00
                </p>
                <p className="text-sm font-light mt-2" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2px' }}>
                  Sábados, Domingos e Feriados: Fechado
                </p>
              </div>
            </motion.div>
          </div>
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
