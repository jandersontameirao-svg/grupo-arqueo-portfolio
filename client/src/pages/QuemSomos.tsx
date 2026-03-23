import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { Building2, Globe, BookOpen, Lightbulb } from "lucide-react";

/**
 * QUEM SOMOS — Página 02 (REDESIGN MODERNO)
 * Design: Premium modern layout with interactive effects, gradient overlays, and sophisticated animations
 * Color Palette: Vinho (#861720), Laranja (#EE7501), Azul (#2C7EB3), Grafite (#2A2A2A)
 * Best Practices: Smooth animations, hover effects, generous spacing, clear hierarchy
 */

export default function QuemSomos() {
  const timeline = [
    {
      year: "2016",
      title: "Fundação",
      desc: "Criação do Grupo Arqueo em Brasília, com foco em consultoria arqueológica para licenciamento ambiental.",
      icon: Building2,
      badgeColor: "#861720",
      arcColor: "#861720",
    },
    {
      year: "2018",
      title: "Expansão",
      desc: "Abertura do escritório em Natal/RN e início da atuação em projetos de energia eólica no Nordeste.",
      icon: Globe,
      badgeColor: "#2C7EB3",
      arcColor: "#2C7EB3",
    },
    {
      year: "2020",
      title: "Ecossistema",
      desc: "Lançamento das submarcas ArqueoGIS, ArqueoOcean e ArqueoEduc, ampliando o portfólio de serviços.",
      icon: Lightbulb,
      badgeColor: "#EE7501",
      arcColor: "#EE7501",
    },
    {
      year: "2023",
      title: "Consolidação",
      desc: "Escritório em São Paulo, mais de 250 projetos gerenciados e presença em 16 estados.",
      icon: BookOpen,
      badgeColor: "#861720",
      arcColor: "#861720",
    },
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




      {/* ═══════════════════ TIMELINE SECTION — CIRCULAR DESIGN ═══════════════════ */}
      <section className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#F0EFED' }}>
        <div className="container">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #861720, #EE7501)' }} />
              <span className="text-xs font-semibold tracking-[0.4em] uppercase" style={{ color: '#861720' }}>Trajetória</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight" style={{ color: '#2A2A2A' }}>
              Uma década de <span style={{ color: '#EE7501' }}>crescimento</span>
            </h2>
          </motion.div>

          {/* Timeline circles row */}
          <div className="relative">
            {/* SVG connecting arcs between circles */}
            <svg
              className="absolute top-0 left-0 w-full hidden lg:block"
              style={{ height: '260px', zIndex: 1 }}
              viewBox="0 0 1200 260"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              {/* Arc from circle 1 to circle 2 */}
              <path
                d="M 210 200 Q 300 40 390 200"
                stroke="#861720"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
                opacity="0.35"
              />
              {/* Arc from circle 2 to circle 3 */}
              <path
                d="M 510 200 Q 600 40 690 200"
                stroke="#2C7EB3"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
                opacity="0.35"
              />
              {/* Arc from circle 3 to circle 4 */}
              <path
                d="M 810 200 Q 900 40 990 200"
                stroke="#EE7501"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
                opacity="0.35"
              />
            </svg>

            {/* Circles grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Semi-circle arc on top */}
                    <div className="relative mb-0">
                      <svg width="200" height="110" viewBox="0 0 200 110" fill="none">
                        {/* Semi-circle arc */}
                        <path
                          d="M 20 105 A 80 80 0 0 1 180 105"
                          stroke={item.arcColor}
                          strokeWidth="2.5"
                          fill="none"
                          opacity="0.3"
                        />
                        {/* Thicker partial arc for visual weight */}
                        <path
                          d="M 40 100 A 65 65 0 0 1 160 100"
                          stroke={item.arcColor}
                          strokeWidth="1.5"
                          fill="none"
                          opacity="0.15"
                        />
                      </svg>
                    </div>

                    {/* Main circle */}
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="relative -mt-14 cursor-pointer"
                    >
                      <div
                        className="w-44 h-44 lg:w-48 lg:h-48 rounded-full flex flex-col items-center justify-center relative"
                        style={{
                          backgroundColor: '#FFFFFF',
                          boxShadow: '0 8px 40px rgba(0, 0, 0, 0.08), 0 2px 12px rgba(0, 0, 0, 0.04)',
                          border: `1px solid rgba(230, 230, 230, 0.5)`,
                        }}
                      >
                        {/* Icon */}
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                          style={{ backgroundColor: `${item.arcColor}10` }}
                        >
                          <Icon className="w-7 h-7" style={{ color: item.arcColor, opacity: 0.7 }} />
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-bold mb-1" style={{ color: '#2A2A2A' }}>
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[11px] leading-snug px-5 font-light" style={{ color: '#888' }}>
                          {item.desc.length > 80 ? item.desc.substring(0, 80) + '...' : item.desc}
                        </p>
                      </div>
                    </motion.div>

                    {/* Connector line from circle to badge */}
                    <div className="w-px h-8 my-2" style={{ backgroundColor: `${item.badgeColor}30` }} />

                    {/* Year badge row with arrows */}
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg cursor-pointer"
                        style={{
                          backgroundColor: item.badgeColor,
                          boxShadow: `0 6px 20px ${item.badgeColor}40`,
                        }}
                      >
                        {item.year}
                      </motion.div>
                      {/* Arrow to next (hidden on last item) */}
                      {i < timeline.length - 1 && (
                        <span
                          className="text-xl font-light hidden lg:block absolute"
                          style={{
                            color: '#BFBFBF',
                            right: '-24px',
                            position: 'relative',
                          }}
                        >
                          ›
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Horizontal connecting line between year badges (desktop only) */}
            <div className="hidden lg:block absolute bottom-[38px] left-[12%] right-[12%] z-0">
              <div
                className="h-px w-full"
                style={{
                  background: 'linear-gradient(to right, #861720, #2C7EB3, #EE7501, #861720)',
                  opacity: 0.2,
                }}
              />
            </div>
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

    </PortfolioLayout>
  );
}
