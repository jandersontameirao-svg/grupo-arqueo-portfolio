import { Link } from "wouter";
import { ASSETS } from "@/lib/assets";
import {
  User, Building2, Target, Globe, Lightbulb, Star,
  BarChart3, FolderOpen, MapPin, Mail, Download, ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

/**
 * HOME — Portfólio Digital Premium Grupo Arqueo
 * Design: Modern orbital navigation with premium aesthetic
 * NO framer-motion in hero to avoid stacking/opacity issues
 */

const sections = [
  { id: "ceo", num: "01", label: "Mensagem do CEO", icon: User, path: "/ceo", color: "#861720" },
  { id: "quem-somos", num: "02", label: "Quem Somos", icon: Building2, path: "/quem-somos", color: "#2C7EB3" },
  { id: "missao-visao", num: "03", label: "Missão e Valores", icon: Target, path: "/missao-visao", color: "#EE7501" },
  { id: "ecossistema", num: "04", label: "Ecossistema", icon: Globe, path: "/ecossistema", color: "#2C7EB3" },
  { id: "solucoes", num: "05", label: "Soluções", icon: Lightbulb, path: "/solucoes", color: "#861720" },
  { id: "diferenciais", num: "06", label: "Diferenciais", icon: Star, path: "/diferenciais", color: "#EE7501" },
  { id: "numeros", num: "07", label: "Números", icon: BarChart3, path: "/numeros", color: "#2C7EB3" },
  { id: "cases", num: "08", label: "Cases", icon: FolderOpen, path: "/cases", color: "#861720" },
  { id: "territorio", num: "09", label: "Presença Territorial", icon: MapPin, path: "/territorio", color: "#EE7501" },
  { id: "contato", num: "10", label: "Contato", icon: Mail, path: "/contato", color: "#2C7EB3" },
];

export default function Home() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.12) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const orbR = 42;
  const cx = 50;
  const cy = 50;

  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative h-screen overflow-hidden">
        {/* Background image + gradient overlay */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <img src={ASSETS.heroArqueologia} alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(249,248,246,1) 0%, rgba(249,248,246,1) 25%, rgba(249,248,246,0.98) 40%, rgba(249,248,246,0.95) 50%, rgba(249,248,246,0.90) 60%, rgba(249,248,246,0.80) 75%, rgba(249,248,246,0.55) 100%)'
            }}
          />
        </div>

        {/* ─── DESKTOP LAYOUT ─── */}
        <div
          className="hidden lg:flex h-full max-w-[1440px] mx-auto px-8 xl:px-16"
          style={{ position: 'relative', zIndex: 10 }}
        >
          {/* LEFT — Text block */}
          <div
            className="w-[44%] flex flex-col justify-center pr-8"
          >
            <img
              src={ASSETS.logo10anos}
              alt="Grupo Arqueo — 10 Anos"
              className="mb-4"
              style={{ height: '80px', width: 'auto', display: 'block' }}
            />

            <p className="text-[10px] xl:text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-[#861720]">
              Patrimônio Cultural e Arqueológico
            </p>

            <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-[1.12] mb-4 text-[#2A2A2A]">
              Consultoria estratégica{" "}
              <span className="text-[#EE7501]">em pesquisa</span>{" "}
              e gestão do patrimônio{" "}
              <span className="text-[#861720]">sociocultural</span>
            </h1>

            <p className="text-sm font-light leading-relaxed mb-6 text-[#555] max-w-md">
              Há 10 anos, o Grupo Arqueo une competência técnica, inovação tecnológica
              e gestão estratégica para oferecer soluções completas em licenciamento
              sociocultural no Brasil.
            </p>

            {/* Hover info / Download button */}
            <div className="h-14 flex items-center">
              {hovered !== null ? (
                <div className="flex items-center gap-4">
                  <span
                    className="text-5xl font-black tracking-tight"
                    style={{ color: sections[hovered].color }}
                  >
                    {sections[hovered].num}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-[#2A2A2A]">
                      {sections[hovered].label}
                    </span>
                    <span className="text-xs text-[#888] flex items-center gap-1 mt-0.5">
                      Clique para explorar <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => window.print()}
                  className="group flex items-center gap-3 px-7 py-3 rounded-xl cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #EE7501 0%, #FF9A3C 100%)',
                    color: '#FFFFFF',
                    boxShadow: '0 4px 20px rgba(238,117,1,0.3), 0 1px 3px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-bold tracking-wide">Baixar Portfólio em PDF</span>
                </button>
              )}
            </div>
          </div>

          {/* RIGHT — Orbital Navigation */}
          <div className="w-[56%] flex items-center justify-center">
            <div
              className="relative"
              style={{
                width: 'min(480px, 44vw)',
                height: 'min(480px, 44vw)',
              }}
            >
              {/* Soft radial glow behind orbital for contrast */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: '-15%',
                  background: 'radial-gradient(circle, rgba(249,248,246,1) 0%, rgba(249,248,246,0.95) 30%, rgba(249,248,246,0.7) 50%, rgba(249,248,246,0.3) 70%, transparent 85%)',
                }}
              />

              {/* Rotating decorative outer ring */}
              <svg
                className="absolute pointer-events-none"
                style={{ inset: '-3%', width: '106%', height: '106%', transform: `rotate(${rotation}deg)` }}
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="49" fill="none" stroke="url(#outerGrad)" strokeWidth="0.3" strokeDasharray="3 6" />
                <defs>
                  <linearGradient id="outerGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#EE7501" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#2C7EB3" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#861720" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Main orbit rings */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                <circle cx={cx} cy={cy} r={orbR + 1} fill="none" stroke="rgba(238,117,1,0.15)" strokeWidth="0.5" />
                <circle cx={cx} cy={cy} r={orbR * 0.55} fill="none" stroke="rgba(42,42,42,0.08)" strokeWidth="0.3" strokeDasharray="1.5 3" />
                <circle cx={cx} cy={cy} r={orbR * 0.3} fill="none" stroke="rgba(238,117,1,0.08)" strokeWidth="0.2" />

                {/* Connection lines */}
                {sections.map((s, i) => {
                  const angle = (i * 36 - 90) * (Math.PI / 180);
                  const x = cx + orbR * Math.cos(angle);
                  const y = cy + orbR * Math.sin(angle);
                  const isH = hovered === i;
                  return (
                    <line
                      key={s.id}
                      x1={cx} y1={cy} x2={x} y2={y}
                      stroke={isH ? s.color : 'rgba(42,42,42,0.15)'}
                      strokeWidth={isH ? 0.5 : 0.2}
                      strokeDasharray={isH ? "none" : "0.8 1.5"}
                      style={{ transition: 'all 0.4s ease' }}
                    />
                  );
                })}
              </svg>

              {/* Center logo */}
              <div
                className="absolute rounded-full flex items-center justify-center"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '22%',
                  height: '22%',
                  background: '#FFFFFF',
                  border: '3px solid rgba(238,117,1,0.25)',
                  boxShadow: '0 8px 40px rgba(42,42,42,0.1), 0 2px 8px rgba(238,117,1,0.08)',
                  zIndex: 5,
                }}
              >
                <img src={ASSETS.logoGrupoArqueoColorido} alt="Grupo Arqueo" style={{ height: '55%', width: 'auto' }} />
              </div>

              {/* Orbital nodes */}
              {sections.map((s, i) => {
                const Icon = s.icon;
                const angle = (i * 36 - 90) * (Math.PI / 180);
                const x = cx + orbR * Math.cos(angle);
                const y = cy + orbR * Math.sin(angle);
                const isH = hovered === i;

                return (
                  <div
                    key={s.id}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: `translate(-50%, -50%) scale(${isH ? 1.15 : 1}) translateY(${isH ? -3 : 0}px)`,
                      transition: 'transform 0.3s ease',
                      zIndex: isH ? 30 : 20,
                    }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <Link href={s.path}>
                      <div className="flex flex-col items-center cursor-pointer">
                        {/* Node circle */}
                        <div
                          className="relative flex items-center justify-center rounded-full"
                          style={{
                            width: '56px',
                            height: '56px',
                            background: isH ? '#FFFFFF' : s.color,
                            border: `3px solid ${s.color}`,
                            boxShadow: isH
                              ? `0 8px 30px ${s.color}60, 0 4px 12px rgba(0,0,0,0.2)`
                              : `0 6px 20px ${s.color}50, 0 3px 10px rgba(0,0,0,0.15), 0 0 0 4px rgba(255,255,255,0.8)`,
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {/* Number badge */}
                          <span
                            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black"
                            style={{
                              background: isH ? '#2A2A2A' : s.color,
                              color: '#FFFFFF',
                              boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
                            }}
                          >
                            {s.num}
                          </span>

                          <Icon
                            className="w-5 h-5"
                            style={{
                              color: isH ? s.color : '#FFFFFF',
                              transition: 'color 0.3s ease',
                            }}
                            strokeWidth={1.8}
                          />
                        </div>

                        {/* Label */}
                        <span
                          className="mt-2 text-[10px] xl:text-[11px] font-semibold leading-tight text-center whitespace-nowrap"
                          style={{
                            color: isH ? s.color : '#444',
                            maxWidth: '90px',
                            textShadow: '0 1px 4px rgba(249,248,246,1), 0 0px 8px rgba(249,248,246,0.9)',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {s.label}
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}

              {/* Floating micro-dots */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                const angle = deg * (Math.PI / 180);
                const r = orbR * 0.6;
                const dotX = cx + r * Math.cos(angle);
                const dotY = cy + r * Math.sin(angle);
                const colors = ['#EE7501', '#2C7EB3', '#861720', '#EE7501', '#2C7EB3', '#861720'];
                return (
                  <div
                    key={`dot-${i}`}
                    className="absolute pointer-events-none rounded-full animate-pulse"
                    style={{
                      left: `${dotX}%`,
                      top: `${dotY}%`,
                      width: '4px',
                      height: '4px',
                      backgroundColor: colors[i],
                      opacity: 0.3,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* ─── MOBILE LAYOUT ─── */}
        <div className="lg:hidden relative min-h-screen flex flex-col justify-center py-16 px-4" style={{ zIndex: 10 }}>
          <img
            src={ASSETS.logo10anos}
            alt="Grupo Arqueo — 10 Anos"
            className="mb-6"
            style={{ maxHeight: '100px', width: 'auto', display: 'block' }}
          />

          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3 text-[#861720]">
            Patrimônio Cultural e Arqueológico
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold leading-[1.08] mb-5 text-[#2A2A2A]">
            Consultoria estratégica{" "}
            <span className="text-[#EE7501]">em pesquisa</span>{" "}
            e gestão do patrimônio{" "}
            <span className="text-[#861720]">sociocultural</span>
          </h1>

          <p className="text-sm font-light leading-relaxed mb-8 text-[#555]">
            Há 10 anos, o Grupo Arqueo une competência técnica, inovação tecnológica
            e gestão estratégica para oferecer soluções completas em licenciamento
            sociocultural no Brasil.
          </p>

          {/* Download button mobile */}
          <button
            onClick={() => window.print()}
            className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl mb-8 cursor-pointer w-full sm:w-auto"
            style={{
              background: 'linear-gradient(135deg, #EE7501 0%, #FF9A3C 100%)',
              color: '#FFFFFF',
              boxShadow: '0 4px 20px rgba(238,117,1,0.3)',
            }}
          >
            <Download className="w-4 h-4" />
            <span className="text-sm font-bold tracking-wide">Baixar Portfólio em PDF</span>
          </button>

          {/* Mobile logo center */}
          <div className="flex justify-center mb-8">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: '#FFFFFF',
                border: '2px solid rgba(238,117,1,0.15)',
                boxShadow: '0 8px 32px rgba(42,42,42,0.08)',
              }}
            >
              <img src={ASSETS.logoGrupoArqueoColorido} alt="Grupo Arqueo" className="h-9 w-auto" />
            </div>
          </div>

          {/* Mobile cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.id} href={s.path}>
                  <div
                    className="group p-4 text-center rounded-xl cursor-pointer"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      boxShadow: '0 2px 12px rgba(42,42,42,0.06)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <span
                      className="block text-lg font-black mb-2"
                      style={{ color: `${s.color}25` }}
                    >
                      {s.num}
                    </span>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                      style={{
                        background: `${s.color}10`,
                        color: s.color,
                      }}
                    >
                      <Icon className="w-4 h-4" strokeWidth={1.8} />
                    </div>
                    <span className="block text-[11px] font-semibold leading-tight text-[#2A2A2A]">
                      {s.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
