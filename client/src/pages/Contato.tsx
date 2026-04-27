import { motion, AnimatePresence } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram, MessageCircle, X, Send, FileText, Calendar, Clock, Building2, ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * CONTATO — Página 10 (Final)
 * Design: Institucional premium, orientado à conversão
 * Hero com chamada estratégica + bloco de ação
 * Contatos organizados por tipo + lado direito robusto
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
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
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
            className="max-w-3xl"
          >
            {/* Logo + Arqueo */}
            <div className="flex items-center gap-6 lg:gap-8 mb-8">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Semtítulo-3_73dbd431.webp"
                alt="10 Anos Arqueo"
                className="h-24 lg:h-32 xl:h-40 w-auto flex-shrink-0"
              />
              <div className="font-bold" style={{ color: '#EE7501', fontSize: 'var(--text-hero)' }}>Arqueo</div>
            </div>

            {/* Chamada institucional */}
            <h1 className="font-bold leading-tight mb-6" style={{ color: '#1A1A1A', letterSpacing: '-0.02em', fontSize: 'var(--text-section-title)' }}>
              Vamos estruturar o seu projeto?
            </h1>

            {/* Subtítulo estratégico */}
            <p className="text-lg lg:text-xl font-normal leading-relaxed mb-12" style={{ color: '#555', maxWidth: '650px', lineHeight: '1.75' }}>
              Conectamos expertise em arqueologia, patrimônio cultural e licenciamento ambiental com soluções inovadoras. Fale com nossos especialistas e descubra como podemos viabilizar seu empreendimento.
            </p>

            {/* Bloco de ação */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=janderson@grupoarqueo.com.br&su=Solicita%C3%A7%C3%A3o%20de%20Proposta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white rounded transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: '#EE7501', letterSpacing: '0.1em' }}
              >
                <FileText className="w-5 h-5" />
                Solicitar Proposta
              </a>
              <a
                href="https://wa.me/5561911211508?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20Grupo%20Arqueo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white rounded transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: '#25D366', letterSpacing: '0.1em' }}
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=janderson@grupoarqueo.com.br&su=Agendamento%20de%20Reuni%C3%A3o"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider rounded transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: 'transparent', color: '#1A1A1A', border: '2px solid #1A1A1A', letterSpacing: '0.1em' }}
              >
                <Calendar className="w-5 h-5" />
                Agendar Reunião
              </a>
            </div>
          </motion.div>
        </div>
      </section>



      {/* ═══════════════════ CONTACT CONTENT ═══════════════════ */}
      <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* ─── COLUNA ESQUERDA: CONTATOS ─── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-0"
            >
              {/* Atendimento Comercial */}
              <div
                className="p-10 lg:p-12 rounded-2xl"
                style={{ backgroundColor: '#FAFAF8', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
              >
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-1 h-6 rounded-full" style={{ backgroundColor: '#EE7501' }} />
                  <h3 className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#999' }}>Atendimento Comercial</h3>
                </div>

                {/* Janderson */}
                <div className="mb-10 pb-10" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <p className="text-lg font-bold mb-1" style={{ color: '#1A1A1A' }}>Janderson Rubens Tameirão</p>
                  <p className="text-xs font-medium uppercase tracking-wider mb-6" style={{ color: '#999' }}>Diretor</p>
                  <div className="space-y-5">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=jandersonrt@arqueoproject.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-4 items-center group transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl transition-colors duration-200" style={{ backgroundColor: '#EE7501' }}>
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#AAA' }}>E-mail Principal</p>
                        <p className="text-sm font-semibold group-hover:text-[#EE7501] transition-colors" style={{ color: '#1A1A1A' }}>jandersonrt@arqueoproject.com.br</p>
                      </div>
                    </a>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=janderson@grupoarqueo.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-4 items-center group transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl transition-colors duration-200" style={{ backgroundColor: '#EE7501' }}>
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#AAA' }}>E-mail Alternativo</p>
                        <p className="text-sm font-semibold group-hover:text-[#EE7501] transition-colors" style={{ color: '#1A1A1A' }}>janderson@grupoarqueo.com.br</p>
                      </div>
                    </a>
                    <a
                      href="tel:+5561982739955"
                      className="flex gap-4 items-center group transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl transition-colors duration-200" style={{ backgroundColor: '#EE7501' }}>
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#AAA' }}>Telefone</p>
                        <p className="text-sm font-semibold group-hover:text-[#EE7501] transition-colors" style={{ color: '#1A1A1A' }}>+55 (61) 98273-9955</p>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/5561982739955"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                      style={{ backgroundColor: '#25D366', color: 'white', letterSpacing: '0.08em' }}
                    >
                      <Send className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Fernanda */}
                <div className="mb-10 pb-10" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <p className="text-lg font-bold mb-1" style={{ color: '#1A1A1A' }}>Fernanda Tameirão</p>
                  <p className="text-xs font-medium uppercase tracking-wider mb-6" style={{ color: '#999' }}>Diretora Administrativa</p>
                  <div className="space-y-5">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=fernanda@arqueoproject.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-4 items-center group transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl transition-colors duration-200" style={{ backgroundColor: '#EE7501' }}>
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#AAA' }}>E-mail</p>
                        <p className="text-sm font-semibold group-hover:text-[#EE7501] transition-colors" style={{ color: '#1A1A1A' }}>fernanda@arqueoproject.com.br</p>
                      </div>
                    </a>
                    <a
                      href="tel:+5561983186264"
                      className="flex gap-4 items-center group transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl transition-colors duration-200" style={{ backgroundColor: '#EE7501' }}>
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#AAA' }}>Telefone</p>
                        <p className="text-sm font-semibold group-hover:text-[#EE7501] transition-colors" style={{ color: '#1A1A1A' }}>+55 (61) 98318-6264</p>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/5561983186264"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                      style={{ backgroundColor: '#25D366', color: 'white', letterSpacing: '0.08em' }}
                    >
                      <Send className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Samanta */}
                <div>
                  <p className="text-lg font-bold mb-1" style={{ color: '#1A1A1A' }}>Samanta Mondini</p>
                  <p className="text-xs font-medium uppercase tracking-wider mb-6" style={{ color: '#999' }}>Coordenadora de Novos Negócios</p>
                  <div className="space-y-5">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=relacionamento@grupoarqueo.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-4 items-center group transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl transition-colors duration-200" style={{ backgroundColor: '#EE7501' }}>
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#AAA' }}>E-mail</p>
                        <p className="text-sm font-semibold group-hover:text-[#EE7501] transition-colors" style={{ color: '#1A1A1A' }}>relacionamento@grupoarqueo.com.br</p>
                      </div>
                    </a>
                    <a
                      href="tel:+5561983579088"
                      className="flex gap-4 items-center group transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl transition-colors duration-200" style={{ backgroundColor: '#EE7501' }}>
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#AAA' }}>Telefone</p>
                        <p className="text-sm font-semibold group-hover:text-[#EE7501] transition-colors" style={{ color: '#1A1A1A' }}>+55 (61) 98357-9088</p>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/5561983579088"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                      style={{ backgroundColor: '#25D366', color: 'white', letterSpacing: '0.08em' }}
                    >
                      <Send className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div
                className="p-10 lg:p-12 rounded-2xl"
                style={{ backgroundColor: '#FAFAF8', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-6 rounded-full" style={{ backgroundColor: '#EE7501' }} />
                  <h3 className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#999' }}>Redes Sociais</h3>
                </div>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/grupoarqueo" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center transition-all duration-300 rounded-xl hover:shadow-md hover:-translate-y-0.5"
                    style={{ backgroundColor: '#EE7501', color: 'white' }}>
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/grupoarqueo" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center transition-all duration-300 rounded-xl hover:shadow-md hover:-translate-y-0.5"
                    style={{ backgroundColor: '#EE7501', color: 'white' }}>
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ─── COLUNA DIREITA: SEDE + HORÁRIO + INSTITUCIONAL ─── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-0"
            >
              {/* Sede */}
              <div
                className="p-10 lg:p-12 rounded-2xl"
                style={{ backgroundColor: '#FAFAF8', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
              >
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-1 h-6 rounded-full" style={{ backgroundColor: '#EE7501' }} />
                  <h3 className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#999' }}>Nossa Sede</h3>
                </div>

                {offices.map((office, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl" style={{ backgroundColor: '#EE7501' }}>
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold" style={{ color: '#1A1A1A' }}>{office.city}</h4>
                        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EE7501' }}>{office.role}</p>
                      </div>
                    </div>
                    <div className="ml-14">
                      <p className="text-sm font-normal leading-relaxed mb-5" style={{ color: '#555', whiteSpace: 'pre-line', lineHeight: '1.8' }}>{office.address}</p>
                      <a
                        href="https://maps.google.com/?q=QS+1+BLOCO+D+Aguas+Claras+Brasilia+DF+Connect+Towers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                        style={{ color: '#EE7501' }}
                      >
                        Ver no Google Maps
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Horário de Atendimento */}
              <div
                className="p-10 lg:p-12 rounded-2xl"
                style={{ backgroundColor: '#1A1A1A' }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl" style={{ backgroundColor: 'rgba(238,117,1,0.15)' }}>
                    <Clock className="w-5 h-5" style={{ color: '#EE7501' }} />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">Horário de Atendimento</h3>
                </div>
                <div className="ml-14 space-y-4">
                  <div className="flex justify-between items-center pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Segunda a Sexta</p>
                    <p className="text-sm font-bold text-white">08h00 — 18h00</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>Sábados, Domingos e Feriados</p>
                    <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.45)' }}>Fechado</p>
                  </div>
                </div>
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
