import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { MapPin, Users, Zap, Award } from "lucide-react";

/**
 * QUEM SOMOS — Página 02 (REDESIGN MODERNO)
 * Design: Premium modern layout with interactive effects, gradient overlays, and sophisticated animations
 * Color Palette: Vinho (#861720), Laranja (#EE7501), Azul (#2C7EB3), Grafite (#2A2A2A)
 * Best Practices: Smooth animations, hover effects, generous spacing, clear hierarchy
 */

export default function QuemSomos() {
  const stats = [
    { value: "2016", label: "Ano de fundação", color: "#EE7501", icon: Award },
    { value: "3", label: "Escritórios", color: "#861720", icon: MapPin },
    { value: "16", label: "Estados", color: "#2C7EB3", icon: Zap },
    { value: "250+", label: "Projetos", color: "#EE7501", icon: Users },
  ];

  const timeline = [
    { year: "2016", title: "Fundação", desc: "Criação do Grupo Arqueo em Brasília, com foco em consultoria arqueológica para licenciamento ambiental." },
    { year: "2018", title: "Expansão", desc: "Abertura do escritório em Natal/RN e início da atuação em projetos de energia eólica no Nordeste." },
    { year: "2020", title: "Ecossistema", desc: "Lançamento das submarcas ArqueoGIS, ArqueoOcean e ArqueoEduc, ampliando o portfólio de serviços." },
    { year: "2023", title: "Consolidação", desc: "Escritório em São Paulo, mais de 250 projetos gerenciados e presença em 16 estados." },
  ];

  const offices = [
    { city: "Brasília/DF", role: "Sede Administrativa", address: "SHS Qd. 06, Conj. A, Sala 501 — Complexo Brasil 21", color: "#861720" },
    { city: "Natal/RN", role: "Escritório Regional Nordeste", address: "Rua Raimundo Chaves, 2182, Sala 501 — Ponta Negra", color: "#2C7EB3" },
    { city: "São Paulo/SP", role: "Escritório Regional Sudeste", address: "Av. Brig. Faria Lima, 1461, 4º andar, Conj. 41", color: "#EE7501" },
  ];

  return (
    <PortfolioLayout
      chapterNum="02"
      chapterTitle="Quem Somos"
      prevPath="/ceo"
      prevLabel="Mensagem do CEO"
      nextPath="/missao-visao"
      nextLabel="Missão, Visão e Valores"
    >
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background with decorative blobs */}
        <div className="absolute inset-0 -z-10">
          <img src={ASSETS.heroArqueologia} alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(249,248,246,0.98) 0%, rgba(249,248,246,0.95) 25%, rgba(249,248,246,0.90) 50%, rgba(249,248,246,0.80) 75%, rgba(249,248,246,0.60) 100%)'
            }}
          />
          {/* Decorative gradient blobs */}
          <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-3" style={{ backgroundColor: '#EE7501' }} />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-3" style={{ backgroundColor: '#861720' }} />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#861720' }}>Identidade & Presença</span>
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8"
              style={{ color: '#2A2A2A' }}
            >
              Referência nacional em{' '}
              <span style={{ background: 'linear-gradient(135deg, #EE7501 0%, #861720 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                consultoria arqueológica
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg lg:text-xl font-light leading-relaxed mb-8"
              style={{ color: '#555', maxWidth: '700px' }}
            >
              O Grupo Arqueo é uma empresa de consultoria especializada em pesquisa e gestão do patrimônio sociocultural, com foco em licenciamento ambiental. Fundado em 2016, nascemos com a visão de oferecer soluções completas, integradas e tecnologicamente avançadas.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #861720 0%, #EE7501 100%)',
                  boxShadow: '0 10px 30px rgba(134, 23, 32, 0.2)'
                }}
              >
                Conheça Nossa Estrutura
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ STATS SECTION ═══════════════════ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(230, 230, 230, 0.6)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 20px 40px ${stat.color}20`;
                    e.currentTarget.style.borderColor = stat.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(230, 230, 230, 0.6)';
                  }}
                >
                  {/* Icon container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-6 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: stat.color }} />
                  </motion.div>

                  {/* Value */}
                  <span
                    className="text-4xl lg:text-5xl font-bold block mb-3 transition-colors duration-300"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </span>

                  {/* Label */}
                  <p className="text-sm font-medium" style={{ color: '#888' }}>
                    {stat.label}
                  </p>

                  {/* Decorative accent */}
                  <div
                    className="absolute bottom-0 left-0 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ width: '40%', backgroundColor: stat.color }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ STRUCTURE & TEAM SECTION ═══════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#861720' }}>Estrutura</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight" style={{ color: '#2A2A2A' }}>
              Nossa <span style={{ color: '#EE7501' }}>Estrutura</span> e <span style={{ color: '#861720' }}>Equipe</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Estrutura */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 lg:p-12 rounded-2xl"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(230, 230, 230, 0.6)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: '#EE7501' }} />
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6" style={{ color: '#2A2A2A' }}>
                  Presença em <span style={{ color: '#EE7501' }}>todo Brasil</span>
                </h3>
                <p className="text-base lg:text-lg font-light leading-relaxed mb-8" style={{ color: '#555' }}>
                  Com sede em Brasília e escritórios em Natal e São Paulo, o Grupo Arqueo atua em todo o território nacional, atendendo aos maiores empreendimentos de infraestrutura, energia e recursos naturais do país.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#861720' }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#861720' }} />
                  3 escritórios estratégicos
                </div>
              </div>
            </motion.div>

            {/* Equipe */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative p-8 lg:p-12 rounded-2xl"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(230, 230, 230, 0.6)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: '#2C7EB3' }} />
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6" style={{ color: '#2A2A2A' }}>
                  Equipe <span style={{ color: '#2C7EB3' }}>Multidisciplinar</span>
                </h3>
                <p className="text-base lg:text-lg font-light leading-relaxed mb-8" style={{ color: '#555' }}>
                  Composta por arqueólogos, historiadores, geógrafos, biólogos, educadores e especialistas em tecnologia, todos comprometidos com a excelência técnica e a inovação contínua.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#2C7EB3' }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2C7EB3' }} />
                  Expertise em múltiplas disciplinas
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TIMELINE SECTION ═══════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-3"
            style={{
              background: 'linear-gradient(135deg, #861720 0%, #EE7501 100%)'
            }}
          />
        </div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#861720' }}>Trajetória</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight" style={{ color: '#2A2A2A' }}>
              Uma década de <span style={{ color: '#EE7501' }}>crescimento</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-2xl transition-all duration-300"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid transparent',
                  background: 'linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(135deg, #861720, #EE7501) border-box',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                }}
              >
                {/* Year badge */}
                <div
                  className="inline-block px-4 py-2 rounded-lg mb-6 font-bold text-white"
                  style={{
                    background: i % 2 === 0
                      ? 'linear-gradient(135deg, #861720, #EE7501)'
                      : 'linear-gradient(135deg, #2C7EB3, #EE7501)',
                    fontSize: '18px'
                  }}
                >
                  {item.year}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4" style={{ color: '#2A2A2A' }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-light leading-relaxed" style={{ color: '#666' }}>
                  {item.desc}
                </p>

                {/* Decorative line on hover */}
                <div
                  className="absolute bottom-0 left-0 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    width: '0%',
                    background: i % 2 === 0
                      ? 'linear-gradient(to right, #861720, #EE7501)'
                      : 'linear-gradient(to right, #2C7EB3, #EE7501)',
                    animation: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.width = '100%';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ OFFICES SECTION ═══════════════════ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#861720' }}>Presença</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight" style={{ color: '#2A2A2A' }}>
              Escritórios <span style={{ color: '#EE7501' }}>Estratégicos</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative p-8 lg:p-10 rounded-2xl transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: `2px solid ${office.color}20`,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                }}
              >
                {/* Decorative top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: `linear-gradient(to right, ${office.color}, transparent)` }}
                />

                {/* Icon circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  className="mb-6 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: `${office.color}15` }}
                >
                  <MapPin className="w-8 h-8" style={{ color: office.color }} />
                </motion.div>

                {/* City name */}
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#2A2A2A' }}>
                  {office.city}
                </h3>

                {/* Role */}
                <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: office.color }}>
                  {office.role}
                </p>

                {/* Address */}
                <p className="text-sm font-light leading-relaxed" style={{ color: '#666' }}>
                  {office.address}
                </p>

                {/* Hover background effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10"
                  style={{ backgroundColor: office.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
