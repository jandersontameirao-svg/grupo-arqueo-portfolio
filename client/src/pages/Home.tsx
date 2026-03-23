import { motion } from "framer-motion";
import { Link } from "wouter";
import { ASSETS } from "@/lib/assets";
import {
  User, Building2, Target, Globe, Lightbulb, Star,
  BarChart3, FolderOpen, MapPin, Mail, ArrowRight, ChevronDown
} from "lucide-react";

/**
 * HOME — Portfólio Digital Premium Grupo Arqueo
 * Design: "Estratos Editoriais" — Neo-Editorial Minimalista
 * Paleta: Laranja #EE7501, Vinho #861720, Azul #2C7EB3, Grafite #2A2A2A, Bege #F3EFEA
 * Tipografia: Montserrat (bold títulos, light corpo)
 */

const portfolioSections = [
  { id: "ceo", num: "01", label: "Mensagem do CEO", desc: "Visão de liderança e propósito", icon: User, path: "/ceo" },
  { id: "quem-somos", num: "02", label: "Quem Somos", desc: "Trajetória, identidade e posicionamento", icon: Building2, path: "/quem-somos" },
  { id: "missao-visao", num: "03", label: "Missão, Visão e Valores", desc: "Os pilares que sustentam nossa atuação", icon: Target, path: "/missao-visao" },
  { id: "ecossistema", num: "04", label: "Ecossistema do Grupo", desc: "Empresas e plataformas integradas", icon: Globe, path: "/ecossistema" },
  { id: "solucoes", num: "05", label: "Soluções", desc: "Competências técnicas e serviços", icon: Lightbulb, path: "/solucoes" },
  { id: "diferenciais", num: "06", label: "Diferenciais", desc: "O que nos torna referência no setor", icon: Star, path: "/diferenciais" },
  { id: "numeros", num: "07", label: "Números", desc: "Impacto, alcance e resultados", icon: BarChart3, path: "/numeros" },
  { id: "cases", num: "08", label: "Cases", desc: "Projetos que demonstram nossa capacidade", icon: FolderOpen, path: "/cases" },
  { id: "territorio", num: "09", label: "Presença Territorial", desc: "Atuação em todo o Brasil", icon: MapPin, path: "/territorio" },
  { id: "contato", num: "10", label: "Contato", desc: "Fale com o Grupo Arqueo", icon: Mail, path: "/contato" },
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



      {/* ─── ÍNDICE VISUAL (PORTFOLIO INDEX) ─── */}
      <section id="indice" className="py-20 lg:py-32" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="container">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 lg:mb-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>
                Índice
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight" style={{ color: '#2A2A2A' }}>
              Navegue pelo{" "}
              <span style={{ color: '#EE7501' }}>portfólio</span>
            </h2>
            <p className="text-base font-light mt-4 max-w-xl" style={{ color: '#666' }}>
              Cada capítulo apresenta uma dimensão do Grupo Arqueo. Clique para explorar.
            </p>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5"
          >
            {portfolioSections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  variants={fadeUp}
                  custom={i}
                >
                  <Link href={section.path}>
                    <div
                      className="group relative p-6 lg:p-7 transition-all duration-500 cursor-pointer border border-transparent hover:border-[#EE7501]/20 h-full"
                      style={{ backgroundColor: '#FFFFFF' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#2A2A2A';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {/* Chapter number */}
                      <span
                        className="block text-5xl font-bold mb-4 transition-colors duration-500 group-hover:text-white/10"
                        style={{ color: 'rgba(238,117,1,0.1)' }}
                      >
                        {section.num}
                      </span>

                      {/* Icon */}
                      <Icon
                        className="w-5 h-5 mb-3 transition-colors duration-500 group-hover:text-[#EE7501]"
                        style={{ color: '#2C7EB3' }}
                      />

                      {/* Title */}
                      <h3
                        className="text-sm font-semibold mb-2 transition-colors duration-500 group-hover:text-white"
                        style={{ color: '#2A2A2A' }}
                      >
                        {section.label}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-xs font-light leading-relaxed transition-colors duration-500 group-hover:text-white/60"
                        style={{ color: '#888' }}
                      >
                        {section.desc}
                      </p>

                      {/* Arrow */}
                      <ArrowRight
                        className="w-4 h-4 mt-4 transition-all duration-500 opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0"
                        style={{ color: '#EE7501' }}
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT STRIP ─── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F3EFEA' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>
                  Sobre
                </span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
                Uma década de excelência em{" "}
                <span style={{ color: '#EE7501' }}>gestão do patrimônio</span>
              </h2>
              <p className="text-sm lg:text-base font-light leading-relaxed mb-4" style={{ color: '#555' }}>
                O Grupo Arqueo é referência nacional em consultoria especializada para o licenciamento
                sociocultural. Com equipe multidisciplinar e tecnologia proprietária, atuamos de forma
                estratégica e adaptativa em todo o ciclo de pesquisa e gestão arqueológica.
              </p>
              <p className="text-sm lg:text-base font-light leading-relaxed" style={{ color: '#555' }}>
                Nosso diferencial está na união entre competência técnica e inovação tecnológica,
                promovendo confiabilidade processual e agilidade no cumprimento de prazos junto
                aos órgãos competentes.
              </p>
            </motion.div>

            {/* Right — Key facts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                { label: "Energias Renováveis", detail: "Eólica, Solar, LTs e Offshore" },
                { label: "Infraestrutura", detail: "Rodovias, Ferrovias e Construção Civil" },
                { label: "Recursos Naturais", detail: "Mineração e Agronegócio" },
                { label: "Educação Patrimonial", detail: "Programas integrados e comunicação social" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 transition-all duration-300 hover:translate-x-2"
                  style={{ backgroundColor: '#FFFFFF', borderLeft: '3px solid #EE7501' }}
                >
                  <div>
                    <h4 className="text-sm font-semibold" style={{ color: '#2A2A2A' }}>{item.label}</h4>
                    <p className="text-xs font-light mt-1" style={{ color: '#888' }}>{item.detail}</p>
                  </div>
                </div>
              ))}
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
