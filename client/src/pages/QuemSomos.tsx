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

      {/* ═══════════════════ NOSSO TIME SECTION ═══════════════════ */}
      <section className="py-20 lg:py-28 relative" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#861720' }}>Equipe</span>
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to left, #861720, #EE7501)' }} />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight" style={{ color: '#2A2A2A' }}>
              Nosso <span style={{ color: '#861720' }}>Time</span> <span style={{ color: '#EE7501' }}>Multidisciplinar</span>
            </h2>
            <p className="mt-6 text-base lg:text-lg font-light leading-relaxed max-w-3xl mx-auto" style={{ color: '#666' }}>
              Composta por arqueólogos, historiadores, geógrafos, biólogos, educadores e especialistas em tecnologia, todos comprometidos com a excelência técnica e a inovação contínua.
            </p>
          </motion.div>

          {/* Team Card with circular layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto rounded-3xl overflow-hidden"
            style={{
              maxWidth: '1000px',
              height: '550px',
              background: 'linear-gradient(135deg, #861720 0%, #6B1219 30%, #EE7501 100%)',
              boxShadow: '0 25px 80px rgba(134, 23, 32, 0.3)',
            }}
          >
            {/* Outer decorative circle */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              <circle cx="50%" cy="50%" r="240" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
              <circle cx="50%" cy="50%" r="180" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <circle cx="50%" cy="50%" r="120" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              {/* Small decorative dots */}
              <circle cx="15%" cy="20%" r="8" fill="rgba(255,255,255,0.08)" />
              <circle cx="85%" cy="25%" r="6" fill="rgba(255,255,255,0.06)" />
              <circle cx="10%" cy="75%" r="10" fill="rgba(255,255,255,0.05)" />
              <circle cx="90%" cy="70%" r="7" fill="rgba(255,255,255,0.07)" />
              <circle cx="20%" cy="50%" r="5" fill="rgba(255,255,255,0.1)" />
              <circle cx="80%" cy="50%" r="5" fill="rgba(255,255,255,0.1)" />
              {/* Small ring decorations */}
              <circle cx="25%" cy="30%" r="12" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
              <circle cx="75%" cy="80%" r="10" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
              <circle cx="12%" cy="60%" r="8" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
              <circle cx="88%" cy="40%" r="9" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
            </svg>

            {/* Center member - Large */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute z-20"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '180px',
                height: '180px',
              }}
            >
              <div
                className="w-full h-full rounded-full overflow-hidden shadow-2xl"
                style={{
                  border: '6px solid rgba(255,255,255,0.9)',
                  boxShadow: '0 0 0 8px rgba(255,255,255,0.15), 0 20px 60px rgba(0,0,0,0.3)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
                  alt="Liderança"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-white font-semibold text-center text-sm">Liderança</p>
            </motion.div>

            {/* Surrounding members */}
            {[
              { top: '8%', left: '35%', size: 90, name: 'Arqueologia', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face' },
              { top: '12%', left: '60%', size: 80, name: 'Tecnologia', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
              { top: '25%', left: '78%', size: 75, name: 'Gestão', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face' },
              { top: '55%', left: '80%', size: 90, name: 'Pesquisa', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
              { top: '72%', left: '60%', size: 70, name: 'Dados', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
              { top: '70%', left: '30%', size: 85, name: 'Educação', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face' },
              { top: '30%', left: '12%', size: 100, name: 'Campo', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                whileHover={{ scale: 1.12 }}
                className="absolute z-10 flex flex-col items-center cursor-pointer"
                style={{
                  top: member.top,
                  left: member.left,
                }}
              >
                <div
                  className="rounded-full overflow-hidden shadow-xl"
                  style={{
                    width: `${member.size}px`,
                    height: `${member.size}px`,
                    border: '4px solid rgba(255,255,255,0.85)',
                    boxShadow: '0 0 0 4px rgba(255,255,255,0.1), 0 8px 30px rgba(0,0,0,0.25)',
                  }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-white font-medium text-center text-xs whitespace-nowrap" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{member.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Offices section removed */}
    </PortfolioLayout>
  );
}
