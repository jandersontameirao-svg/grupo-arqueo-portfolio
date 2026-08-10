import { Link } from "wouter";
import { ASSETS } from "@/lib/assets";
import {
  User, Building2, Target, Globe, Lightbulb, Star,
  BarChart3, FolderOpen, MapPin, Mail, ArrowRight, Users,
  Play, X, Download
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useI18n } from "@/i18n";
import { generatePortfolioPDF } from "@/lib/generatePortfolioPDF";

const PDF_LABEL: Record<string, string> = {
  "pt-BR": "Baixar Portfólio (PDF)",
  en: "Download Portfolio (PDF)",
  es: "Descargar Portafolio (PDF)",
  zh: "下载作品集 (PDF)",
};
const PDF_LABEL_LOADING: Record<string, string> = {
  "pt-BR": "Gerando PDF...",
  en: "Generating PDF...",
  es: "Generando PDF...",
  zh: "正在生成 PDF...",
};

/**
 * HOME — Portfólio Digital Premium Grupo Arqueo
 * Design: Microsoft-style orbital navigation — clean, organized, premium
 * 9 nodes evenly distributed around center logo
 * Video institucional integrado no hero
 */

const VIDEO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/GRUPOARQUEOINSTITUCIONAL_c5cde311.mp4";

const sectionsDef = [
  { id: "ceo", num: "01", key: "ceo" as const, icon: User, path: "/ceo", color: "#861720" },
  { id: "quem-somos-ecossistema", num: "02", key: "quemSomos" as const, icon: Building2, path: "/quem-somos", color: "#2C7EB3" },
  { id: "missao-visao", num: "03", key: "missao" as const, icon: Target, path: "/missao-visao", color: "#EE7501" },
  { id: "solucoes", num: "04", key: "solucoes" as const, icon: Lightbulb, path: "/solucoes", color: "#861720" },
  { id: "diferenciais-conformidade", num: "05", key: "diferenciais" as const, icon: Star, path: "/diferenciais", color: "#EE7501" },
  { id: "numeros-territorio", num: "06", key: "numeros" as const, icon: BarChart3, path: "/numeros", color: "#2C7EB3" },
  { id: "cases", num: "07", key: "cases" as const, icon: FolderOpen, path: "/cases", color: "#861720" },
  { id: "parceiros", num: "08", key: "parceiros" as const, icon: Users, path: "/parceiros", color: "#EE7501" },
  { id: "contato", num: "09", key: "contato" as const, icon: Mail, path: "/contato", color: "#2C7EB3" },
];

export default function Home() {
  const { t, locale } = useI18n();
  const [hovered, setHovered] = useState<number | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);

  const handleDownloadPDF = async () => {
    if (pdfLoading) return;
    setPdfLoading(true);
    try {
      await generatePortfolioPDF();
    } catch (e) {
      console.error("Erro ao gerar PDF:", e);
    } finally {
      setPdfLoading(false);
    }
  };
  const [rotation, setRotation] = useState(0);
  const [videoExpanded, setVideoExpanded] = useState(false);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);

  // Build sections with translated labels
  const sections = sectionsDef.map(s => ({ ...s, label: t.home.sections[s.key] }));


  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  /* ── Orbital geometry ── */
  const nodeCount = sections.length;       // 9
  const angleStep = 360 / nodeCount;       // 40° per node
  const orbR = 42;                         // orbit radius (% of container)
  const cx = 50;
  const cy = 50;

  /* ── Compute label position offset based on angle ── */
  const getLabelPosition = (angleDeg: number) => {
    // Normalize angle to 0-360
    const a = ((angleDeg % 360) + 360) % 360;
    // Top area (315-45): label below
    if (a >= 315 || a < 45) return { anchor: 'center' as const, offsetY: 6 };
    // Right area (45-135): label to the left
    if (a >= 45 && a < 135) return { anchor: 'right' as const, offsetY: 0 };
    // Bottom area (135-225): label above
    if (a >= 135 && a < 225) return { anchor: 'center' as const, offsetY: -2 };
    // Left area (225-315): label to the right
    return { anchor: 'left' as const, offsetY: 0 };
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      {/* ═══════════════════ HERO SECTION (tudo integrado) ═══════════════════ */}
      <section className="relative overflow-hidden bg-[#F9F8F6]">
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
          className="hidden lg:block relative"
          style={{ zIndex: 10 }}
        >
          {/* Top row: Text + Orbital side by side */}
          <div className="flex mx-auto" style={{ minHeight: 'calc(100vh - 60px)', maxWidth: 'var(--container-max)', padding: '0 var(--container-padding)' }}>
            {/* LEFT — Text block (compactado) */}
            <div className="w-[40%] flex flex-col justify-center pr-6 py-6">
              <img
                src={ASSETS.logo10anos}
                alt="Grupo Arqueo — 10 Anos"
                className="mb-5"
                style={{ height: 'clamp(70px, 7vw, 100px)', width: 'auto', display: 'block', objectFit: 'contain', maxWidth: 'clamp(240px, 25vw, 360px)' }}
              />

              <p className="font-semibold tracking-[0.3em] uppercase mb-4 text-[#861720]" style={{ fontSize: 'clamp(9px, 0.7vw, 12px)' }}>
                {t.home.badge}
              </p>

              <h1 className="font-bold leading-[1.15] mb-4 text-[#2A2A2A]" style={{ fontSize: 'var(--text-hero)' }}>
                {t.home.title}{" "}
                <span className="text-[#EE7501]">{t.home.titleHighlight1}</span>{" "}
                {t.home.titleMiddle}{" "}
                <span className="text-[#861720]">{t.home.titleHighlight2}</span>
              </h1>

              <p className="font-light leading-relaxed mb-5 text-[#555]" style={{ fontSize: 'var(--text-body)', maxWidth: 'clamp(280px, 28vw, 420px)' }}>
                {t.home.description}
              </p>

              {/* Botão download portfólio PDF estático */}
              <button
                onClick={handleDownloadPDF}
                disabled={pdfLoading}
                className="inline-flex items-center gap-2 px-5 py-3 mb-2 rounded-lg font-bold uppercase tracking-wider text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-wait"
                style={{ backgroundColor: '#EE7501', fontSize: 'var(--text-caption)', letterSpacing: '0.06em' }}
              >
                <Download className={`w-4 h-4 ${pdfLoading ? 'animate-bounce' : ''}`} />
                {pdfLoading ? (PDF_LABEL_LOADING[locale] || PDF_LABEL_LOADING["pt-BR"]) : (PDF_LABEL[locale] || PDF_LABEL["pt-BR"])}
              </button>

              {/* Hover info */}
              <div className="h-10 flex items-center">
                {hovered !== null ? (
                  <div className="flex items-center gap-4">
                    <span
                      className="font-black tracking-tight"
                      style={{ fontSize: 'clamp(1.2rem, 2vw, 1.875rem)', color: sections[hovered].color }}
                    >
                      {sections[hovered].num}
                    </span>
                    <div className="flex flex-col">
                       <span className="font-bold text-[#2A2A2A]" style={{ fontSize: 'var(--text-body)' }}>
                        {sections[hovered].label}
                      </span>
                       <span className="text-[#888] flex items-center gap-1 mt-0.5" style={{ fontSize: 'var(--text-caption)' }}>
                        {t.home.clickToExplore} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Video institucional — thumbnail estática com play que expande fullscreen */}
              <div
                className="relative rounded-lg overflow-hidden shadow-xl mt-4 cursor-pointer group"
                style={{ aspectRatio: '16/9', maxWidth: 'clamp(280px, 28vw, 420px)' }}
                onClick={() => setVideoExpanded(true)}
              >
                <video
                  src={VIDEO_URL + '#t=0.5'}
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-[#861720] ml-1" fill="#861720" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Orbital Navigation */}
            <div className="w-[60%] flex items-center justify-center">
              <div
                className="relative"
                style={{
                  width: 'clamp(340px, 40vw, 560px)',
                  height: 'clamp(340px, 40vw, 560px)',
                }}
              >
                {/* Soft radial glow */}
                <div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    inset: '-12%',
                    background: 'radial-gradient(circle, rgba(249,248,246,1) 0%, rgba(249,248,246,0.97) 25%, rgba(249,248,246,0.85) 45%, rgba(249,248,246,0.5) 65%, transparent 80%)',
                  }}
                />

                {/* Rotating decorative outer ring */}
                <svg
                  className="absolute pointer-events-none"
                  style={{ inset: '-2%', width: '104%', height: '104%', transform: `rotate(${rotation}deg)` }}
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="49" fill="none" stroke="url(#outerGrad)" strokeWidth="0.25" strokeDasharray="2 5" />
                  <defs>
                    <linearGradient id="outerGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#EE7501" stopOpacity="0.35" />
                      <stop offset="50%" stopColor="#2C7EB3" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#861720" stopOpacity="0.35" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Main orbit ring */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                  <circle cx={cx} cy={cy} r={orbR + 0.5} fill="none" stroke="rgba(238,117,1,0.18)" strokeWidth="0.4" />
                  <circle cx={cx} cy={cy} r={orbR * 0.5} fill="none" stroke="rgba(42,42,42,0.06)" strokeWidth="0.25" strokeDasharray="1.2 2.5" />

                  {/* Connection lines from center to each node */}
                  {sections.map((s, i) => {
                    const angle = (i * angleStep - 90) * (Math.PI / 180);
                    const x = cx + orbR * Math.cos(angle);
                    const y = cy + orbR * Math.sin(angle);
                    const isH = hovered === i;
                    return (
                      <line
                        key={s.id}
                        x1={cx} y1={cy} x2={x} y2={y}
                        stroke={isH ? s.color : 'rgba(42,42,42,0.1)'}
                        strokeWidth={isH ? 0.4 : 0.15}
                        strokeDasharray={isH ? "none" : "0.6 1.2"}
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
                    width: '18%',
                    height: '18%',
                    background: '#FFFFFF',
                    border: '3px solid rgba(238,117,1,0.2)',
                    boxShadow: '0 8px 40px rgba(42,42,42,0.08), 0 2px 8px rgba(238,117,1,0.06)',
                    zIndex: 5,
                  }}
                >
                  <img src={ASSETS.logoGrupoArqueoColorido} alt="Grupo Arqueo" style={{ height: '55%', width: 'auto' }} />
                </div>

                {/* ── Orbital Nodes ── */}
                {sections.map((s, i) => {
                  const Icon = s.icon;
                  const angleDeg = i * angleStep - 90;
                  const angleRad = angleDeg * (Math.PI / 180);
                  const x = cx + orbR * Math.cos(angleRad);
                  const y = cy + orbR * Math.sin(angleRad);
                  const isH = hovered === i;
                  const labelPos = getLabelPosition(angleDeg + 90);

                  // Compute label alignment styles
                  const labelStyle: React.CSSProperties = {
                    color: isH ? s.color : '#444',
                    maxWidth: '120px',
                    textShadow: '0 1px 6px rgba(249,248,246,1), 0 0 10px rgba(249,248,246,1), 0 0 16px rgba(249,248,246,0.9)',
                    transition: 'color 0.3s ease',
                    lineHeight: '1.25',
                    fontSize: 'clamp(9px, 0.85vw, 11px)',
                    fontWeight: 600,
                  };

                  // Position label based on node angle to avoid overlaps
                  let labelClass = "absolute whitespace-normal text-center";
                  let labelPositionStyle: React.CSSProperties = {};

                  if (labelPos.anchor === 'center') {
                    // Top or bottom: center label below/above node
                    labelClass = "absolute left-1/2 -translate-x-1/2 text-center";
                    if (angleDeg + 90 < 180) {
                      // Top half: label below
                      labelPositionStyle = { top: '100%', marginTop: '8px' };
                    } else {
                      // Bottom half: label above
                      labelPositionStyle = { bottom: '100%', marginBottom: '8px' };
                    }
                  } else if (labelPos.anchor === 'right') {
                    // Right side: label to the right
                    labelClass = "absolute text-left";
                    labelPositionStyle = { left: '100%', marginLeft: '12px', top: '50%', transform: 'translateY(-50%)' };
                  } else {
                    // Left side: label to the left
                    labelClass = "absolute text-right";
                    labelPositionStyle = { right: '100%', marginRight: '12px', top: '50%', transform: 'translateY(-50%)' };
                  }

                  return (
                    <div
                      key={s.id}
                      className="absolute"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: `translate(-50%, -50%) scale(${isH ? 1.12 : 1})`,
                        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        zIndex: isH ? 30 : 20,
                      }}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <Link href={s.path}>
                        <div className="relative cursor-pointer">
                          {/* Node circle */}
                          <div
                            className="relative flex items-center justify-center rounded-full"
                            style={{
                              width: 'clamp(44px, 4.5vw, 64px)',
                              height: 'clamp(44px, 4.5vw, 64px)',
                              background: isH ? '#FFFFFF' : s.color,
                              border: `2.5px solid ${s.color}`,
                              boxShadow: isH
                                ? `0 8px 28px ${s.color}50, 0 4px 10px rgba(0,0,0,0.15)`
                                : `0 4px 16px ${s.color}40, 0 2px 6px rgba(0,0,0,0.1), 0 0 0 3px rgba(255,255,255,0.85)`,
                              transition: 'all 0.3s ease',
                            }}
                          >
                            {/* Number badge */}
                            <span
                              className="absolute -top-1 -right-1 w-[20px] h-[20px] rounded-full flex items-center justify-center text-[8px] font-black"
                              style={{
                                background: isH ? '#2A2A2A' : s.color,
                                color: '#FFFFFF',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                                border: '1.5px solid #FFFFFF',
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

                          {/* Label — positioned dynamically based on angle */}
                          <span
                            className={labelClass}
                            style={{ ...labelStyle, ...labelPositionStyle }}
                          >
                            {s.label}
                          </span>
                        </div>
                      </Link>
                    </div>
                  );
                })}

                {/* Floating micro-dots for visual depth */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                  const angle = deg * (Math.PI / 180);
                  const r = orbR * 0.58;
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
                        width: '3px',
                        height: '3px',
                        backgroundColor: colors[i],
                        opacity: 0.25,
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>


        </div>

        {/* ─── MOBILE LAYOUT ─── */}
        <div className="lg:hidden relative flex flex-col justify-start pt-6 pb-8 px-4" style={{ zIndex: 10 }}>
          <img
            src={ASSETS.logo10anos}
            alt="Grupo Arqueo — 10 Anos"
            className="mb-3"
            style={{ height: 'clamp(50px, 8vw, 70px)', width: 'auto', display: 'block', objectFit: 'contain' }}
          />

          <p className="font-semibold tracking-[0.3em] uppercase mb-2 text-[#861720]" style={{ fontSize: 'clamp(8px, 1.2vw, 11px)' }}>
            {t.home.badge}
          </p>

          <h1 className="font-bold leading-[1.1] mb-2 text-[#2A2A2A]" style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.75rem)' }}>
            {t.home.title}{" "}
            <span className="text-[#EE7501]">{t.home.titleHighlight1}</span>{" "}
            {t.home.titleMiddle}{" "}
            <span className="text-[#861720]">{t.home.titleHighlight2}</span>
          </h1>

          <p className="font-light leading-relaxed mb-4 text-[#555]" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)' }}>
            {t.home.description}
          </p>

          {/* Mobile logo center */}
          <div className="flex justify-center mb-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{
                background: '#FFFFFF',
                border: '2px solid rgba(238,117,1,0.15)',
                boxShadow: '0 8px 32px rgba(42,42,42,0.08)',
              }}
            >
              <img src={ASSETS.logoGrupoArqueoColorido} alt="Grupo Arqueo" className="h-6 w-auto" />
            </div>
          </div>

          {/* Mobile cards grid */}
          <div className="grid grid-cols-3 gap-1.5 mb-6">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.id} href={s.path}>
                  <div
                    className="group p-2 text-center rounded-xl cursor-pointer"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      boxShadow: '0 2px 12px rgba(42,42,42,0.06)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-1"
                      style={{
                        background: s.color,
                        color: '#FFFFFF',
                      }}
                    >
                      <Icon className="w-4 h-4" strokeWidth={1.8} />
                    </div>
                    <span className="block text-[8px] font-semibold leading-tight text-[#2A2A2A]">
                      {s.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Video — thumbnail estática com play que expande fullscreen */}
          <div
            className="relative rounded-lg overflow-hidden shadow-lg mx-auto cursor-pointer group"
            style={{ aspectRatio: '16/9', width: '75%' }}
            onClick={() => setVideoExpanded(true)}
          >
            <video
              src={VIDEO_URL + '#t=0.5'}
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              style={{ display: 'block' }}
            />
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <Play className="w-5 h-5 text-[#861720] ml-0.5" fill="#861720" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ VIDEO FULLSCREEN MODAL ═══════════════════ */}
      {videoExpanded && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setVideoExpanded(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 z-[10000] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
            onClick={(e) => { e.stopPropagation(); setVideoExpanded(false); }}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Video container */}
          <div
            className="relative w-[92vw] max-w-[1200px]"
            style={{ aspectRatio: '16/9' }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={expandedVideoRef}
              src={VIDEO_URL}
              controls
              autoPlay
              playsInline
              className="w-full h-full rounded-lg object-contain"
              style={{ display: 'block' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
