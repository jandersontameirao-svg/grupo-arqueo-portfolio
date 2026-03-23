import { motion } from "framer-motion";
import { Link } from "wouter";
import { ASSETS } from "@/lib/assets";
import {
  User, Building2, Target, Globe, Lightbulb, Star,
  BarChart3, FolderOpen, MapPin, Mail, ArrowRight, ChevronDown
} from "lucide-react";
import { useState } from "react";

/**
 * HOME — Portfólio Digital Premium Grupo Arqueo
 * Design: "Estratos Editoriais" — Neo-Editorial Minimalista
 * Paleta: Laranja #EE7501, Vinho #861720, Azul #2C7EB3, Grafite #2A2A2A, Bege #F3EFEA
 * Tipografia: Montserrat (bold títulos, light corpo)
 */

const portfolioSections = [
  { id: "ceo", num: "01", label: "Mensagem do CEO", desc: "Visão de liderança e propósito", icon: User, path: "/ceo", color: "#861720" },
  { id: "quem-somos", num: "02", label: "Quem Somos", desc: "Trajetória, identidade e posicionamento", icon: Building2, path: "/quem-somos", color: "#2C7EB3" },
  { id: "missao-visao", num: "03", label: "Missão, Visão e Valores", desc: "Os pilares que sustentam nossa atuação", icon: Target, path: "/missao-visao", color: "#EE7501" },
  { id: "ecossistema", num: "04", label: "Ecossistema do Grupo", desc: "Empresas e plataformas integradas", icon: Globe, path: "/ecossistema", color: "#2C7EB3" },
  { id: "solucoes", num: "05", label: "Soluções", desc: "Competências técnicas e serviços", icon: Lightbulb, path: "/solucoes", color: "#861720" },
  { id: "diferenciais", num: "06", label: "Diferenciais", desc: "O que nos torna referência no setor", icon: Star, path: "/diferenciais", color: "#EE7501" },
  { id: "numeros", num: "07", label: "Números", desc: "Impacto, alcance e resultados", icon: BarChart3, path: "/numeros", color: "#2C7EB3" },
  { id: "cases", num: "08", label: "Cases", desc: "Projetos que demonstram nossa capacidade", icon: FolderOpen, path: "/cases", color: "#861720" },
  { id: "territorio", num: "09", label: "Presença Territorial", desc: "Atuação em todo o Brasil", icon: MapPin, path: "/territorio", color: "#EE7501" },
  { id: "contato", num: "10", label: "Contato", desc: "Fale com o Grupo Arqueo", icon: Mail, path: "/contato", color: "#2C7EB3" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 }
  })
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

export default function Home() {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F8F6' }}>

      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex items-center pb-16 lg:pb-24 pt-12 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={ASSETS.heroArqueologia}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(249,248,246,0.3) 0%, rgba(249,248,246,0.6) 40%, rgba(249,248,246,0.95) 80%, rgba(249,248,246,1) 100%)'
          }} />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            {/* Logo 10 anos — grande, acima do texto */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="mb-10"
            >
              <img
                src={ASSETS.logo10anos}
                alt="Grupo Arqueo — 10 Anos"
                className="h-28 sm:h-36 lg:h-48 w-auto"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-xs font-medium tracking-[0.3em] uppercase mb-5"
              style={{ color: '#861720' }}
            >
              Patrimônio Cultural e Arqueológico
            </motion.p>

            {/* Main headline */}
            <motion.h1
              variants={fadeUp}
              custom={2}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-8"
              style={{ color: '#2A2A2A' }}
            >
              Consultoria estratégica{" "}
              <span style={{ color: '#EE7501' }}>em pesquisa</span>{" "}
              e gestão do patrimônio{" "}
              <span style={{ color: '#861720' }}>sociocultural</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-base lg:text-lg font-light leading-relaxed max-w-2xl mb-10"
              style={{ color: '#555' }}
            >
              Há 10 anos, o Grupo Arqueo une competência técnica, inovação tecnológica
              e gestão estratégica para oferecer soluções completas em licenciamento
              sociocultural no Brasil.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} custom={4} className="flex items-center gap-6">
              <a
                href="#indice"
                className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#EE7501' }}
              >
                Explorar Portfólio
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs font-light tracking-wider" style={{ color: '#888' }}>
                10 capítulos
              </span>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 right-4 lg:right-8 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: '#888', writingMode: 'vertical-lr' }}>
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-4 h-4" style={{ color: '#888' }} />
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ─── ORBITAL NAVIGATION INDEX ─── */}
      <section id="indice" className="py-20 lg:py-32 overflow-hidden" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="container">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>
                Índice
              </span>
              <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight" style={{ color: '#2A2A2A' }}>
              Navegue pelo{" "}
              <span style={{ color: '#EE7501' }}>portfólio</span>
            </h2>
            <p className="text-base font-light mt-4 max-w-xl mx-auto" style={{ color: '#666' }}>
              Cada capítulo apresenta uma dimensão do Grupo Arqueo. Clique para explorar.
            </p>
          </motion.div>

          {/* Orbital Navigation — Desktop */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto"
              style={{ width: '900px', height: '900px' }}
            >
              {/* Outer orbit ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{ border: '1px solid rgba(238,117,1,0.12)' }}
              />
              {/* Middle orbit ring */}
              <div
                className="absolute rounded-full"
                style={{
                  top: '100px', left: '100px', right: '100px', bottom: '100px',
                  border: '1px dashed rgba(42,42,42,0.08)'
                }}
              />
              {/* Inner orbit ring */}
              <div
                className="absolute rounded-full"
                style={{
                  top: '250px', left: '250px', right: '250px', bottom: '250px',
                  border: '1px solid rgba(238,117,1,0.08)'
                }}
              />

              {/* Center — Logo Grupo Arqueo */}
              <motion.div
                className="absolute flex flex-col items-center justify-center"
                style={{
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '200px', height: '200px',
                }}
                animate={{
                  boxShadow: hoveredSection !== null
                    ? '0 0 60px rgba(238,117,1,0.15)'
                    : '0 0 40px rgba(42,42,42,0.06)'
                }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="w-full h-full rounded-full flex flex-col items-center justify-center"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '2px solid rgba(238,117,1,0.2)',
                    boxShadow: '0 8px 40px rgba(42,42,42,0.08)'
                  }}
                >
                  <img
                    src={ASSETS.logoGrupoArqueo}
                    alt="Grupo Arqueo"
                    className="h-20 w-auto"
                  />
                </div>
              </motion.div>

              {/* Connection lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 900 900">
                {portfolioSections.map((section, i) => {
                  const angle = (i * 36 - 90) * (Math.PI / 180);
                  const radius = 370;
                  const x = 450 + radius * Math.cos(angle);
                  const y = 450 + radius * Math.sin(angle);
                  const isHovered = hoveredSection === i;
                  return (
                    <line
                      key={section.id}
                      x1="450" y1="450"
                      x2={x} y2={y}
                      stroke={isHovered ? section.color : 'rgba(42,42,42,0.06)'}
                      strokeWidth={isHovered ? 2 : 1}
                      strokeDasharray={isHovered ? "none" : "4 6"}
                      style={{ transition: 'all 0.4s ease' }}
                    />
                  );
                })}
              </svg>

              {/* Orbital items */}
              {portfolioSections.map((section, i) => {
                const Icon = section.icon;
                const angle = (i * 36 - 90) * (Math.PI / 180);
                const radius = 370;
                const x = 450 + radius * Math.cos(angle);
                const y = 450 + radius * Math.sin(angle);
                const isHovered = hoveredSection === i;

                return (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="absolute"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onMouseEnter={() => setHoveredSection(i)}
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    <Link href={section.path}>
                      <div className="flex flex-col items-center cursor-pointer group">
                        {/* Node circle */}
                        <motion.div
                          className="relative flex items-center justify-center rounded-full transition-all duration-400"
                          style={{
                            width: isHovered ? '80px' : '64px',
                            height: isHovered ? '80px' : '64px',
                            backgroundColor: isHovered ? section.color : '#FFFFFF',
                            border: `2px solid ${isHovered ? section.color : 'rgba(42,42,42,0.1)'}`,
                            boxShadow: isHovered
                              ? `0 8px 30px ${section.color}30`
                              : '0 2px 12px rgba(42,42,42,0.06)',
                          }}
                          animate={{
                            scale: isHovered ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Chapter number badge */}
                          <span
                            className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
                            style={{
                              backgroundColor: isHovered ? '#2A2A2A' : section.color,
                              color: '#FFFFFF',
                            }}
                          >
                            {section.num}
                          </span>
                          <Icon
                            className="w-5 h-5 transition-colors duration-300"
                            style={{ color: isHovered ? '#FFFFFF' : section.color }}
                          />
                        </motion.div>

                        {/* Label */}
                        <div
                          className="mt-2 text-center transition-all duration-300"
                          style={{ maxWidth: '120px' }}
                        >
                          <span
                            className="block text-[11px] font-semibold leading-tight transition-colors duration-300"
                            style={{ color: isHovered ? section.color : '#2A2A2A' }}
                          >
                            {section.label}
                          </span>
                          {isHovered && (
                            <motion.span
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="block text-[9px] font-light mt-1"
                              style={{ color: '#888' }}
                            >
                              {section.desc}
                            </motion.span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}

              {/* Decorative triangles */}
              {[0, 72, 144, 216, 288].map((deg, i) => {
                const angle = (deg - 90) * (Math.PI / 180);
                const r = 280;
                const x = 450 + r * Math.cos(angle);
                const y = 450 + r * Math.sin(angle);
                return (
                  <motion.div
                    key={`tri-${i}`}
                    className="absolute pointer-events-none"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: `translate(-50%, -50%) rotate(${deg}deg)`,
                    }}
                    animate={{ rotate: [deg, deg + 360] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <div
                      className="w-0 h-0"
                      style={{
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderBottom: '10px solid rgba(238,117,1,0.12)',
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Mobile/Tablet — List navigation */}
          <div className="lg:hidden">
            {/* Center logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <div
                className="w-32 h-32 rounded-full flex flex-col items-center justify-center"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid rgba(238,117,1,0.2)',
                  boxShadow: '0 8px 40px rgba(42,42,42,0.08)'
                }}
              >
                <img
                  src={ASSETS.logoGrupoArqueo}
                  alt="Grupo Arqueo"
                  className="h-14 w-auto"
                />
              </div>
            </motion.div>

            {/* Mobile cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {portfolioSections.map((section, i) => {
                const Icon = section.icon;
                return (
                  <motion.div key={section.id} variants={fadeUp} custom={i}>
                    <Link href={section.path}>
                      <div
                        className="group relative p-4 text-center transition-all duration-300 cursor-pointer rounded-lg hover:shadow-lg"
                        style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(42,42,42,0.06)' }}
                      >
                        <span
                          className="block text-2xl font-bold mb-2"
                          style={{ color: `${section.color}15` }}
                        >
                          {section.num}
                        </span>
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 transition-colors duration-300 group-hover:text-white"
                          style={{
                            backgroundColor: `${section.color}10`,
                            color: section.color,
                          }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span
                          className="block text-[11px] font-semibold leading-tight"
                          style={{ color: '#2A2A2A' }}
                        >
                          {section.label}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>


      {/* ─── COMPLIANCE STRIP ─── */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#861720' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="max-w-xl">
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Compliance e Integridade
              </span>
              <h3 className="text-xl lg:text-2xl font-bold mt-3 text-white">
                Comprometidos com ética, transparência e governança corporativa
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Código de Conduta", "Política Anticorrupção", "Gestão de Risco"].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-xs font-medium"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-16 lg:py-20" style={{ backgroundColor: '#2A2A2A' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo & tagline */}
            <div>
              <img
                src={ASSETS.logo10anos}
                alt="Grupo Arqueo — 10 Anos"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-xs font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Patrimônio Cultural e Arqueológico.
                Consultoria estratégica em pesquisa e gestão.
              </p>
            </div>

            {/* Offices */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#EE7501' }}>
                Escritórios
              </h4>
              <div className="space-y-3">
                {[
                  { city: "Brasília/DF", address: "SHS Qd. 06, Conj. A, Sala 501 — Complexo Brasil 21" },
                  { city: "Natal/RN", address: "Rua Raimundo Chaves, 2182, Sala 501" },
                  { city: "São Paulo/SP", address: "Av. Brig. Faria Lima, 1461, 4º andar, Conj. 41" },
                ].map((office, i) => (
                  <div key={i}>
                    <p className="text-xs font-medium text-white">{office.city}</p>
                    <p className="text-[11px] font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>{office.address}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#EE7501' }}>
                Ecossistema
              </h4>
              <div className="space-y-2">
                {[
                  { name: "Arqueoproject", url: "www.arqueoproject.com.br" },
                  { name: "ArqueoGIS", url: "www.arqueogis.com.br" },
                  { name: "ArqueoOcean", url: "www.arqueocean.com.br" },
                  { name: "ArqueoEduc", url: "www.arqueoeduc.com.br" },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={`https://${link.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs font-light transition-colors duration-300 hover:text-[#EE7501]"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-[11px] font-light" style={{ color: 'rgba(255,255,255,0.3)' }}>
                &copy; 2016–2026 Grupo Arqueo. Todos os direitos reservados.
              </p>
              <p className="text-[11px] font-light" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Portfólio Digital — Patrimônio Cultural e Arqueológico
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
