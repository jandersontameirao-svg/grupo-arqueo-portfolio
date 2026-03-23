import { motion } from "framer-motion";
import { Link } from "wouter";
import { ASSETS } from "@/lib/assets";
import {
  User, Building2, Target, Globe, Lightbulb, Star,
  BarChart3, FolderOpen, MapPin, Mail
} from "lucide-react";
import { useState } from "react";

/**
 * HOME — Portfólio Digital Premium Grupo Arqueo
 * Layout: Texto à esquerda + Menu orbital à direita, tudo no hero
 */

const sections = [
  { id: "ceo", num: "01", label: "Mensagem\ndo CEO", icon: User, path: "/ceo", color: "#861720" },
  { id: "quem-somos", num: "02", label: "Quem\nSomos", icon: Building2, path: "/quem-somos", color: "#2C7EB3" },
  { id: "missao-visao", num: "03", label: "Missão, Visão\ne Valores", icon: Target, path: "/missao-visao", color: "#EE7501" },
  { id: "ecossistema", num: "04", label: "Ecossistema\ndo Grupo", icon: Globe, path: "/ecossistema", color: "#2C7EB3" },
  { id: "solucoes", num: "05", label: "Soluções", icon: Lightbulb, path: "/solucoes", color: "#861720" },
  { id: "diferenciais", num: "06", label: "Diferenciais", icon: Star, path: "/diferenciais", color: "#EE7501" },
  { id: "numeros", num: "07", label: "Números", icon: BarChart3, path: "/numeros", color: "#2C7EB3" },
  { id: "cases", num: "08", label: "Cases", icon: FolderOpen, path: "/cases", color: "#861720" },
  { id: "territorio", num: "09", label: "Presença\nTerritorial", icon: MapPin, path: "/territorio", color: "#EE7501" },
  { id: "contato", num: "10", label: "Contato", icon: Mail, path: "/contato", color: "#2C7EB3" },
];

export default function Home() {
  const [hovered, setHovered] = useState<number | null>(null);

  // Orbital positions: 10 items around a circle
  const orbitalRadius = 42; // percentage of container
  const centerX = 50;
  const centerY = 50;

  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      <section className="relative h-screen">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={ASSETS.heroArqueologia} alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(249,248,246,0.98) 0%, rgba(249,248,246,0.96) 35%, rgba(249,248,246,0.85) 50%, rgba(249,248,246,0.65) 65%, rgba(249,248,246,0.4) 80%, rgba(249,248,246,0.2) 100%)'
            }}
          />
        </div>

        {/* Content grid: left text + right orbital */}
        <div className="relative z-10 h-full hidden lg:grid lg:grid-cols-2 items-center max-w-[1400px] mx-auto px-8">
          
          {/* LEFT — Text */}
          <div>
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src={ASSETS.logo10anos}
              alt="Grupo Arqueo — 10 Anos"
              className="h-32 xl:h-40 w-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs font-medium tracking-[0.3em] uppercase mb-4 text-[#861720]"
            >
              Patrimônio Cultural e Arqueológico
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl xl:text-5xl font-bold leading-[1.08] mb-6 text-[#2A2A2A]"
            >
              Consultoria estratégica{" "}
              <span className="text-[#EE7501]">em pesquisa</span>{" "}
              e gestão do patrimônio{" "}
              <span className="text-[#861720]">sociocultural</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm xl:text-base font-light leading-relaxed mb-8 text-[#555] max-w-lg"
            >
              Há 10 anos, o Grupo Arqueo une competência técnica, inovação tecnológica
              e gestão estratégica para oferecer soluções completas em licenciamento
              sociocultural no Brasil.
            </motion.p>

            {/* Hovered section info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-14"
            >
              {hovered !== null ? (
                <motion.div
                  key={hovered}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-4xl font-bold" style={{ color: sections[hovered].color }}>
                    {sections[hovered].num}
                  </span>
                  <span className="text-sm font-semibold text-[#2A2A2A] whitespace-pre-line">
                    {sections[hovered].label}
                  </span>
                </motion.div>
              ) : (
                <span className="text-xs font-light tracking-wider text-[#999]">
                  Passe o mouse sobre os capítulos para explorar →
                </span>
              )}
            </motion.div>
          </div>

          {/* RIGHT — Orbital */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full aspect-square max-w-[560px] mx-auto"
          >
            {/* Radial background for contrast */}
            <div
              className="absolute inset-[-10%] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(249,248,246,0.95) 0%, rgba(249,248,246,0.7) 40%, transparent 60%)' }}
            />

            {/* Orbit rings */}
            <div className="absolute inset-0 rounded-full" style={{ border: '1.5px solid rgba(238,117,1,0.18)' }} />
            <div className="absolute inset-[15%] rounded-full" style={{ border: '1px dashed rgba(42,42,42,0.1)' }} />
            <div className="absolute inset-[35%] rounded-full" style={{ border: '1px solid rgba(238,117,1,0.1)' }} />

            {/* Center logo */}
            <div className="absolute inset-[38%] rounded-full bg-white flex items-center justify-center z-10"
              style={{ boxShadow: '0 8px 40px rgba(42,42,42,0.08)', border: '2px solid rgba(238,117,1,0.2)' }}
            >
              <img src={ASSETS.logoGrupoArqueoColorido} alt="Grupo Arqueo" className="h-12 xl:h-14 w-auto" />
            </div>

            {/* SVG lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              {sections.map((s, i) => {
                const angle = (i * 36 - 90) * (Math.PI / 180);
                const x = centerX + orbitalRadius * Math.cos(angle);
                const y = centerY + orbitalRadius * Math.sin(angle);
                const isH = hovered === i;
                return (
                  <line
                    key={s.id}
                    x1={centerX} y1={centerY} x2={x} y2={y}
                    stroke={isH ? s.color : 'rgba(42,42,42,0.06)'}
                    strokeWidth={isH ? 0.4 : 0.15}
                    strokeDasharray={isH ? "none" : "0.8 1.2"}
                    style={{ transition: 'all 0.4s ease' }}
                  />
                );
              })}
            </svg>

            {/* Orbital nodes */}
            {sections.map((s, i) => {
              const Icon = s.icon;
              const angle = (i * 36 - 90) * (Math.PI / 180);
              const x = centerX + orbitalRadius * Math.cos(angle);
              const y = centerY + orbitalRadius * Math.sin(angle);
              const isH = hovered === i;

              return (
                <div
                  key={s.id}
                  className="absolute z-20"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Link href={s.path}>
                    <div className="flex flex-col items-center cursor-pointer group">
                      <div
                        className="relative flex items-center justify-center rounded-full transition-all duration-300"
                        style={{
                          width: isH ? '52px' : '42px',
                          height: isH ? '52px' : '42px',
                          backgroundColor: isH ? s.color : '#FFFFFF',
                          border: `2px solid ${isH ? s.color : 'rgba(42,42,42,0.1)'}`,
                          boxShadow: isH ? `0 6px 24px ${s.color}40` : '0 3px 16px rgba(42,42,42,0.12)',
                        }}
                      >
                        <span
                          className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[7px] font-bold text-white"
                          style={{ backgroundColor: isH ? '#2A2A2A' : s.color }}
                        >
                          {s.num}
                        </span>
                        <Icon
                          className="w-4 h-4 transition-colors duration-300"
                          style={{ color: isH ? '#FFFFFF' : s.color }}
                        />
                      </div>
                      <span
                        className="mt-1 text-[9px] xl:text-[10px] font-semibold leading-tight text-center whitespace-pre-line transition-colors duration-300"
                        style={{ color: isH ? s.color : '#2A2A2A', maxWidth: '80px' }}
                      >
                        {s.label}
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}

            {/* Decorative triangles */}
            {[0, 72, 144, 216, 288].map((deg, i) => {
              const angle = (deg - 90) * (Math.PI / 180);
              const r = 30;
              const x = centerX + r * Math.cos(angle);
              const y = centerY + r * Math.sin(angle);
              return (
                <div
                  key={`tri-${i}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%) rotate(${deg}deg)`,
                  }}
                >
                  <div
                    className="w-0 h-0"
                    style={{
                      borderLeft: '4px solid transparent',
                      borderRight: '4px solid transparent',
                      borderBottom: '7px solid rgba(238,117,1,0.1)',
                    }}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ─── MOBILE LAYOUT ─── */}
        <div className="lg:hidden relative z-10 min-h-screen flex flex-col justify-center py-16 px-4">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            src={ASSETS.logo10anos}
            alt="Grupo Arqueo — 10 Anos"
            className="h-24 sm:h-28 w-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs font-medium tracking-[0.3em] uppercase mb-3 text-[#861720]"
          >
            Patrimônio Cultural e Arqueológico
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold leading-[1.08] mb-5 text-[#2A2A2A]"
          >
            Consultoria estratégica{" "}
            <span className="text-[#EE7501]">em pesquisa</span>{" "}
            e gestão do patrimônio{" "}
            <span className="text-[#861720]">sociocultural</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm font-light leading-relaxed mb-8 text-[#555]"
          >
            Há 10 anos, o Grupo Arqueo une competência técnica, inovação tecnológica
            e gestão estratégica para oferecer soluções completas em licenciamento
            sociocultural no Brasil.
          </motion.p>

          {/* Mobile logo center */}
          <div className="flex justify-center mb-8">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center bg-white"
              style={{ border: '2px solid rgba(238,117,1,0.2)', boxShadow: '0 8px 40px rgba(42,42,42,0.08)' }}
            >
              <img src={ASSETS.logoGrupoArqueoColorido} alt="Grupo Arqueo" className="h-10 w-auto" />
            </div>
          </div>

          {/* Mobile cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {sections.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link href={s.path}>
                    <div className="group p-4 text-center bg-white/85 rounded-lg border border-[#2A2A2A]/5 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <span className="block text-2xl font-bold mb-2" style={{ color: `${s.color}15` }}>
                        {s.num}
                      </span>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                        style={{ backgroundColor: `${s.color}10`, color: s.color }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="block text-[11px] font-semibold leading-tight text-[#2A2A2A] whitespace-pre-line">
                        {s.label}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
