import { motion, useInView } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const mainNumbers = [
  { value: 250, suffix: "+", label: "Projetos e processos gerenciados", detail: "Em todo o território nacional" },
  { value: 16, suffix: "", label: "Estados com atuação comprovada", detail: "Presença em todas as regiões" },
  { value: 10, suffix: "", label: "Anos de experiência no mercado", detail: "Desde 2016" },
  { value: 4, suffix: "", label: "Empresas no ecossistema", detail: "Integradas e especializadas" },
  { value: 3, suffix: "", label: "Escritórios estratégicos", detail: "Brasília, Natal e São Paulo" },
  { value: 100, suffix: "+", label: "Profissionais envolvidos", detail: "Equipe multidisciplinar" },
];

const sectorNumbers = [
  { label: "Energia Eólica", value: "80+", detail: "projetos" },
  { label: "Energia Solar", value: "45+", detail: "projetos" },
  { label: "Linhas de Transmissão", value: "35+", detail: "projetos" },
  { label: "Rodovias", value: "30+", detail: "projetos" },
  { label: "Mineração", value: "25+", detail: "projetos" },
  { label: "Construção Civil", value: "20+", detail: "projetos" },
];

export default function Numeros() {
  return (
    <PortfolioLayout
      chapterNum="07"
      chapterTitle="Números"
      prevPath="/diferenciais"
      prevLabel="Diferenciais"
      nextPath="/cases"
      nextLabel="Cases"
    >
      {/* Main numbers */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: '#861720' }}>Impacto</span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
              Nossos <span style={{ color: '#EE7501' }}>números</span> falam por nós
            </h2>
            <p className="text-sm lg:text-base font-light leading-relaxed" style={{ color: '#555' }}>
              Uma década de resultados consistentes, construídos com competência técnica,
              inovação e compromisso com a excelência.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainNumbers.map((num, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 text-center"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <span className="text-4xl lg:text-5xl font-bold block mb-2" style={{ color: '#EE7501' }}>
                  <AnimatedCounter target={num.value} suffix={num.suffix} />
                </span>
                <p className="text-sm font-semibold mb-1" style={{ color: '#2A2A2A' }}>{num.label}</p>
                <p className="text-xs font-light" style={{ color: '#888' }}>{num.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector breakdown */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#2A2A2A' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#EE7501' }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>Por Setor</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Distribuição por <span style={{ color: '#EE7501' }}>segmento</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sectorNumbers.map((sec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-5 text-center"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <span className="text-2xl font-bold block mb-1" style={{ color: '#EE7501' }}>{sec.value}</span>
                <p className="text-xs font-medium text-white mb-0.5">{sec.label}</p>
                <p className="text-[10px] font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>{sec.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact statement */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#861720' }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg lg:text-2xl font-bold text-white max-w-3xl mx-auto leading-tight">
              Cada número representa um compromisso cumprido com nossos clientes e com o patrimônio cultural brasileiro.
            </p>
            <div className="w-12 h-0.5 mx-auto mt-8" style={{ backgroundColor: '#EE7501' }} />
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
