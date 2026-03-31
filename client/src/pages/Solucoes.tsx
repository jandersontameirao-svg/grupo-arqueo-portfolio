'use client';

import PortfolioLayout from "@/components/PortfolioLayout";
import { ASSETS } from "@/lib/assets";
import { motion } from "framer-motion";
import { Search, FileText, Pickaxe, Monitor, GraduationCap, Anchor, Database, ClipboardCheck, Shield, Users, Lightbulb, Zap } from "lucide-react";

/**
 * SOLUÇÕES — Página 05 (Reestruturada com 3 blocos temáticos)
 * 
 * BLOCO 1: Consultoria e Assessoria (Estratégia)
 * BLOCO 2: Serviços Arqueológicos (Execução)
 * BLOCO 3: Soluções Complementares (Inovação)
 * 
 * Design: Cards com borda lateral colorida, ícone, título com fundo colorido, categoria e descrição
 * Grid responsivo 3 colunas
 * Cores do Grupo Arqueo: Azul, Bordo, Laranja, Amarelo
 */

// BLOCO 1: Consultoria e Assessoria
const consultoriaServices = [
  {
    name: "Gestão de Licenciamento",
    description: "Planejamento e condução técnica do licenciamento com foco em segurança processual, previsibilidade e tomada de decisão.",
    icon: ClipboardCheck,
    color: "#2C7EB3", // Azul
    category: "Consultoria e Assessoria"
  },
  {
    name: "Consultoria Técnica Arqueológica",
    description: "Suporte especializado para orientar empreendimentos, equipes e instituições em demandas arqueológicas de diferentes níveis de complexidade.",
    icon: Lightbulb,
    color: "#2C7EB3",
    category: "Consultoria e Assessoria"
  },
  {
    name: "Assessoria e Gestão Processual",
    description: "Acompanhamento técnico-administrativo de processos, documentos, prazos e interlocuções institucionais ao longo do licenciamento.",
    icon: Shield,
    color: "#2C7EB3",
    category: "Consultoria e Assessoria"
  },
  {
    name: "Conformidade Regulatória",
    description: "Análise e adequação de projetos às exigências legais e normativas aplicáveis ao patrimônio cultural.",
    icon: Monitor,
    color: "#2C7EB3",
    category: "Consultoria e Assessoria"
  },
  {
    name: "Diligência Processual e Suporte ao Contencioso",
    description: "Apoio técnico em diligências, manifestações, respostas e situações sensíveis que exigem fundamentação especializada.",
    icon: FileText,
    color: "#2C7EB3",
    category: "Consultoria e Assessoria"
  },
];

// BLOCO 2: Serviços Arqueológicos
const arqueologicosServices = [
  {
    name: "Diagnóstico Arqueológico e Pesquisa Documental",
    description: "Levantamento técnico inicial com base em dados históricos, documentais e evidências territoriais para orientar a tomada de decisão.",
    icon: Search,
    color: "#861720", // Bordo
    category: "Serviços Arqueológicos"
  },
  {
    name: "FCA",
    description: "Elaboração de ficha técnica inicial voltada ao enquadramento do empreendimento e ao suporte preliminar do licenciamento.",
    icon: FileText,
    color: "#861720",
    category: "Serviços Arqueológicos"
  },
  {
    name: "Avaliação de Potencial de Impacto",
    description: "Estudo técnico para identificação de potencial arqueológico e análise preliminar de risco em áreas de interesse.",
    icon: Monitor,
    color: "#861720",
    category: "Serviços Arqueológicos"
  },
  {
    name: "Avaliação de Impacto ao Patrimônio Arqueológico",
    description: "Análise dos efeitos do empreendimento sobre o patrimônio arqueológico, com base em critérios técnicos e normativos.",
    icon: Pickaxe,
    color: "#861720",
    category: "Serviços Arqueológicos"
  },
  {
    name: "Monitoramento e Acompanhamento Arqueológico",
    description: "Supervisão técnica de atividades em campo para prevenção, registro e controle de ocorrências arqueológicas.",
    icon: Monitor,
    color: "#861720",
    category: "Serviços Arqueológicos"
  },
  {
    name: "Prospecção e Resgate Arqueológico",
    description: "Execução de pesquisas de campo voltadas à identificação, registro, mitigação e salvaguarda de vestígios arqueológicos.",
    icon: Pickaxe,
    color: "#861720",
    category: "Serviços Arqueológicos"
  },
  {
    name: "Programa de Gestão do Patrimônio Arqueológico",
    description: "Estruturação e execução de programas integrados para acompanhamento, proteção e gestão do patrimônio arqueológico.",
    icon: Shield,
    color: "#861720",
    category: "Serviços Arqueológicos"
  },
  {
    name: "Curadoria e Guarda Definitiva de Material Arqueológico",
    description: "Organização, tratamento técnico, catalogação e destinação adequada de acervos e materiais arqueológicos.",
    icon: Database,
    color: "#861720",
    category: "Serviços Arqueológicos"
  },
  {
    name: "Arqueologia Subaquática e Litorânea",
    description: "Estudos e intervenções em ambientes aquáticos e costeiros, com metodologia específica para contextos submersos e marginais.",
    icon: Anchor,
    color: "#861720",
    category: "Serviços Arqueológicos"
  },
];

// BLOCO 3: Soluções Complementares
const complementaresServices = [
  {
    name: "Avaliação de Impacto a Bens Culturais Tombados",
    description: "Estudos técnicos voltados à análise de interferências sobre bens protegidos e suas áreas de influência.",
    icon: Monitor,
    color: "#EE7501", // Laranja
    category: "Soluções Complementares"
  },
  {
    name: "Educação Patrimonial Integrada",
    description: "Programas educativos conectados ao território, ao licenciamento e à valorização social do patrimônio cultural.",
    icon: GraduationCap,
    color: "#EE7501",
    category: "Soluções Complementares"
  },
  {
    name: "Comunicação Social e Pesquisas Culturais",
    description: "Ações de diálogo, escuta e produção de conhecimento voltadas ao contexto sociocultural dos territórios de atuação.",
    icon: Users,
    color: "#EE7501",
    category: "Soluções Complementares"
  },
  {
    name: "Geotecnologias Aplicadas",
    description: "Aplicação de geoprocessamento, SIG, sensoriamento remoto, geomapeamento e modelagem para suporte técnico e analítico.",
    icon: Database,
    color: "#EE7501",
    category: "Soluções Complementares"
  },
  {
    name: "Tecnologia para Gestão Arqueológica",
    description: "Soluções digitais para organização de dados, rastreabilidade, padronização de processos e gestão de informações técnicas.",
    icon: Zap,
    color: "#EE7501",
    category: "Soluções Complementares"
  },
  {
    name: "Capacitação e Treinamentos Técnicos",
    description: "Cursos, formações e treinamentos voltados ao desenvolvimento técnico de equipes, instituições e profissionais do setor.",
    icon: GraduationCap,
    color: "#EE7501",
    category: "Soluções Complementares"
  },
];

// Componente para renderizar um bloco de serviços
function ServiceBlock({ title, subtitle, services }: { title: string; subtitle: string; services: typeof consultoriaServices }) {
  return (
    <section className="py-20 lg:py-28 border-t first:border-t-0">
      <div className="container">
        {/* Título e subtítulo do bloco */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: '#2A2A2A' }}>
            {title}
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed max-w-3xl" style={{ color: '#666' }}>
            {subtitle}
          </p>
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, idx) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.08,
                  ease: 'easeOut'
                }}
                className="group"
              >
                {/* Card com borda lateral */}
                <div
                  className="h-full flex flex-col p-6 lg:p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderLeft: `4px solid ${service.color}`,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-lg mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${service.color}15`,
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: service.color }}
                    />
                  </div>

                  {/* Title com fundo colorido */}
                  <h3
                    className="text-lg lg:text-xl font-bold mb-2 leading-tight px-4 py-2 rounded-full inline-block text-white"
                    style={{ backgroundColor: service.color }}
                  >
                    {service.name}
                  </h3>

                  {/* Category */}
                  <p
                    className="text-xs font-medium mb-4"
                    style={{ color: service.color }}
                  >
                    {service.category}
                  </p>

                  {/* Description */}
                  <p
                    className="text-sm lg:text-base leading-relaxed flex-grow"
                    style={{ color: '#666' }}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Solucoes() {
  return (
    <PortfolioLayout
      chapterNum="05"
      chapterTitle="Soluções"
      prevPath="/ecossistema"
      prevLabel="Ecossistema do Grupo"
      nextPath="/diferenciais"
      nextLabel="Diferenciais"
    >
      {/* Hero Section — Limpo e forte */}
      <section className="relative min-h-[350px] lg:min-h-[420px] flex items-center overflow-hidden">
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
          <div className="flex items-start gap-8 lg:gap-12">
            {/* Logo 10 anos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block flex-shrink-0"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/Semtítulo-3_aa567132.webp"
                alt="10 anos Grupo Arqueo"
                className="w-80 h-auto"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6" style={{ color: '#2A2A2A' }}>
                Soluções integradas para{' '}
                <span style={{ color: '#EE7501' }}>patrimônio e arqueologia</span>
              </h1>

              <p className="text-lg lg:text-xl leading-relaxed" style={{ color: '#666' }}>
                Um portfólio abrangente de serviços técnicos especializados, cobrindo todo o ciclo de pesquisa, gestão e preservação do patrimônio arqueológico e sociocultural.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOCO 1: Consultoria e Assessoria */}
      <ServiceBlock
        title="Consultoria e Assessoria"
        subtitle="Soluções estratégicas para orientar processos, reduzir riscos e dar suporte técnico qualificado ao licenciamento e à tomada de decisão."
        services={consultoriaServices}
      />

      {/* BLOCO 2: Serviços Arqueológicos */}
      <ServiceBlock
        title="Serviços Arqueológicos"
        subtitle="Execução técnica estruturada para atender as diferentes etapas da arqueologia preventiva, da análise inicial à gestão do patrimônio arqueológico."
        services={arqueologicosServices}
      />

      {/* BLOCO 3: Soluções Complementares */}
      <ServiceBlock
        title="Soluções Complementares"
        subtitle="Serviços integrados que ampliam a capacidade técnica do Grupo Arqueo e agregam inteligência, tecnologia e valor territorial às entregas."
        services={complementaresServices}
      />

      {/* CTA Section */}
      <section className="py-16 lg:py-20 border-t">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#2A2A2A' }}>
              Soluções customizadas
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#666' }}>
              Além de nossos serviços principais, desenvolvemos soluções integradas e personalizadas conforme as necessidades específicas de cada projeto. Converse com nossos especialistas para conhecer as possibilidades.
            </p>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
