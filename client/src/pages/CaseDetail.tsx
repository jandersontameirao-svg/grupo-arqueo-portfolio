import { useParams, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronLeft, MapPin, Calendar, Building2 } from 'lucide-react';
import PortfolioLayout from '@/components/PortfolioLayout';
import { useI18n } from '@/i18n';

interface CaseData {
  title: string;
  sector: string;
  location: string;
  year: string;
  client: string;
  thesis: string;
  shortSummary: string;
  fullSummary: string;
  result: string;
  competencies: string[];
  imageUrl?: string;
}

/* Mapeamento de nomes de setores para chaves de tradução */
const sectorTranslationMap: Record<string, string> = {
  'Ferrovia': 'ferrovia',
  'Linha de Transmissão': 'linhaTransmissao',
  'PCH / Hidrelétrica': 'pchHidreletrica',
  'Eólica Offshore': 'eolicaOffshore',
  'Subestação': 'subestacao',
  'Urbanização / Loteamento': 'urbanizacaoLoteamento',
};

/* Mapeamento de títulos de cases para chaves de tradução */
const caseTranslationMap: Record<string, string> = {
  'Ferrovia Rumo': 'ferroviaRumo',
  'LT 500kV Terminal Rio-Lagos (Neoenergia)': 'lt500kv',
  'PCH Canoas': 'pchCanoas',
  'Parque Eólico Caucaia': 'eolicaOffshore',
  'LT 230kV Abdon Batista': 'lt230kv',
  'Loteamento Maria Isabel (Maranhao)': 'loteamentoMariaIsabel',
  'SE Candiota 2': 'seCandiota',
  'Loteamento Residencial Bela Vista (Sao Paulo)': 'loteamentoBelaVista',
  'PCH Cabuí': 'pchCabui',
  'Loteamento Fase 01 e 02 - Fazenda Paranoazinho (Distrito Federal)': 'loteamentoParanoazinho',
};

function getSectorLabel(sectorName: string, t: any): string {
  const key = sectorTranslationMap[sectorName as keyof typeof sectorTranslationMap];
  return key ? t.cases.sectors[key] : sectorName;
}

function getCaseTranslationKey(caseTitle: string): string {
  return caseTranslationMap[caseTitle as keyof typeof caseTranslationMap] || '';
}

const casesData: CaseData[] = [
  {
    title: 'Ferrovia Rumo',
    sector: 'Ferrovia',
    location: 'Mato Grosso',
    year: '2023',
    client: 'Rumo Logística',
    thesis: 'Reorganização institucional com o IPHAN-MT e excelência operacional em prospecção arqueológica com rastreabilidade de dados via SIGEPA.',
    shortSummary: 'Dados de arqueologia e patrimônio imaterial desorganizados geravam insegurança institucional no IPHAN-MT. Refizemos a pesquisa com mais de 8.000 poços-teste em 60 dias, com acompanhamento diário via SIGEPA, sistema próprio do Grupo Arqueo.',
    fullSummary: 'Os dados de arqueologia e patrimônio imaterial apresentados ao IPHAN-MT estavam desorganizados, gerando insegurança institucional, risco ao patrimônio e ao licenciamento ambiental do empreendimento. Assumimos o processo e refizemos a pesquisa arqueológica com base em parecer técnico específico do órgão: mais de 8.000 poços-teste em 60 dias, com acompanhamento diário do cliente via SIGEPA, sistema de gestão de dados arqueológicos desenvolvido pelo próprio Grupo Arqueo.',
    result: 'Confiança institucional restabelecida e Licença de Instalação obtida dentro do cronograma estratégico da Rumo.',
    competencies: ['Articulação Institucional', 'Escala Operacional', 'SIGEPA', 'Rastreabilidade de Dados'],
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/ferrovia-rumo-hq-KUxJitH4ENtze9YyqztwhP.webp',
  },
  {
    title: 'LT 500kV Terminal Rio-Lagos (Neoenergia)',
    sector: 'Linha de Transmissão',
    location: 'RJ / SP',
    year: '2023',
    client: 'Neoenergia',
    thesis: 'Reestruturação da interlocução com a CGLic e avaliação contenciosa qualificada sobre TAC.',
    shortSummary: 'Processo herdado com gestão confusa de áreas liberadas e bloqueadas, que resultou na instalação de duas torres antes da conclusão dos estudos. Comprovamos, com levantamento repetido por duas equipes técnicas, a ausência de dano ao patrimônio arqueológico.',
    fullSummary: 'Herdamos um processo com gestão confusa de áreas liberadas e bloqueadas, o que resultou na instalação de duas torres antes da conclusão dos estudos arqueológicos. Assumimos o processo, organizamos e corrigimos os dados existentes e comprovamos, com levantamento de campo repetido por duas equipes técnicas, que o imprevisto não causou dano ao patrimônio arqueológico.',
    result: 'O IPHAN reconheceu a não aplicabilidade de Termo de Ajustamento de Conduta (TAC) para as duas torres, em um empreendimento de cerca de 1.100 torres distribuídas por três estados.',
    competencies: ['Articulação Institucional', 'Contencioso Técnico', 'CGLic', 'Previsibilidade Técnica'],
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_UfDa0V_image_562de634.png',
  },
  {
    title: 'PCH Canoas (Santa Catarina)',
    sector: 'PCH / Hidrelétrica',
    location: 'Santa Catarina',
    year: '2022',
    client: 'Confidencial',
    thesis: 'Precisão conceitual e segurança técnica na leitura de estruturas históricas classificadas como sítio arqueológico.',
    shortSummary: 'Na Coxilha Rica (SC), com tombamento aberto desde 2012, muros de taipa e trilhas históricas geram dúvida quanto ao enquadramento como sítio arqueológico. Aplicamos critérios técnicos objetivos cruzados com precedentes do IPHAN-SC.',
    fullSummary: 'Na região da Coxilha Rica (SC), com tombamento aberto desde 2012 para o conjunto dos Caminhos de Tropas, muros de taipa e trilhas históricas tendem a gerar dúvida sobre seu enquadramento como sítio arqueológico. Aplicamos critérios técnicos objetivos — função, conservação, contexto, cronologia — cruzados com precedentes do próprio IPHAN-SC em processos similares na região.',
    result: '4 sítios arqueológicos corretamente identificados e 5 estruturas dispensadas de medidas mitigatórias, garantindo previsibilidade para a fase de Licença de Instalação.',
    competencies: ['Precisão Conceitual', 'Segurança Técnica', 'Estruturas Históricas', 'Classificação Arqueológica'],
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_KcoCzi_image_15477b6a.png',
  },
  {
    title: 'Parque Eólico Caucaia',
    sector: 'Eólica Offshore',
    location: 'Caucaia, Ceará',
    year: '2020',
    client: 'BI Energia',
    thesis: 'Desenvolvimento de metodologia inovadora para arqueologia submarítima no primeiro projeto eólico offshore do Brasil com audiência pública pelo IBAMA.',
    shortSummary: 'Desenvolvimento de metodologia inovadora para pesquisa arqueológica submarítima no primeiro projeto eólico offshore do Brasil submetido a audiência pública pelo IBAMA. Complexo de 48 aerogeradores com capacidade de 576 MW, demandando estudos de impacto em patrimônio cultural submerso na costa cearense.',
    fullSummary: 'Participação em processo de licenciamento ambiental inovador para o primeiro projeto eólico offshore brasileiro. Desenvolvimento de metodologia qualificada para pesquisa arqueológica em ambiente submarino, alinhada aos requisitos do IBAMA e às fases do licenciamento ambiental. Complexo de 48 aerogeradores offshore com capacidade de 576 MW, exigindo estudos especializados de impacto em patrimônio cultural submerso na costa cearense.',
    result: 'Metodologia inovadora para arqueologia submarítima em projeto eólico offshore de grande escala.',
    competencies: ['Arqueologia Submarítima', 'Licenciamento IBAMA', 'EIA/RIMA', 'Patrimônio Submerso'],
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_kvIUHj_image_1e7d480e.png',
  },
  {
    title: 'LT 230kV Abdon Batista (Santa Catarina)',
    sector: 'Linha de Transmissão',
    location: 'Santa Catarina',
    year: '2022',
    client: 'Confidencial',
    thesis: 'Gestão in situ de sítios arqueológicos em empreendimento linear e educação patrimonial personalizada.',
    shortSummary: 'Gestão in situ de 09 sítios arqueológicos em LT com 90 km de extensão. Educação Patrimonial personalizada com elaboração de Álbum Arqueológico conectado à coleção doméstica de bens arqueológicos.',
    fullSummary: 'Gestão in situ de 09 sítios arqueológicos na ADA de uma LT com 90 km de extensão. Educação Patrimonial personalizada com a elaboração do Álbum Arqueológico, junto à coleção doméstica de bens arqueológicos da Professora Vera Lúcia.',
    result: 'Gestão qualificada de múltiplos sítios e educação patrimonial com engajamento comunitário.',
    competencies: ['Gestão In Situ', 'Educação Patrimonial', 'Empreendimento Linear', 'Patrimônio Local'],
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_LLDXY1_image_14391220.png',
  },
  {
    title: 'Loteamento Maria Isabel (Maranhão)',
    sector: 'Urbanização / Loteamento',
    location: 'Maranhão',
    year: '2021',
    client: 'Confidencial',
    thesis: 'Educação patrimonial conectada à experiência real de campo.',
    shortSummary: 'Educação Patrimonial personalizada com participação de estudantes em visita guiada durante atividade de salvamento arqueológico, conectando aprendizado teórico à prática de campo.',
    fullSummary: 'Educação Patrimonial personalizada com a participação dos estudantes em uma visita guiada em plena atividade de salvamento arqueológico.',
    result: 'Educação patrimonial vivencial com engajamento social e comunitário.',
    competencies: ['Educação Patrimonial', 'Engajamento Social', 'Visita Guiada', 'Salvamento Arqueológico'],
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/loteamento-maria-isabel-ma-CrAUBRQKG2z7BbAMz3SwRe.webp',
  },
  {
    title: 'Ampliação da SE Candiota 2 (Rio Grande do Sul)',
    sector: 'Subestação',
    location: 'Rio Grande do Sul',
    year: '2022',
    client: 'Confidencial',
    thesis: 'Otimização metodológica do licenciamento com aproveitamento técnico de estudos pretéritos.',
    shortSummary: 'Análise metodológica arrojada que possibilitou avanço direto para fase de gestão, suprimindo necessidade de estudos preventivos através de aproveitamento técnico de estudos pretéritos.',
    fullSummary: 'Análise metodológica arrojada quanto à otimização do processo de licenciamento ambiental do empreendimento, em que foi possível avançar diretamente para a fase de gestão, suprimindo a necessidade de realização dos estudos preventivos, com base no aproveitamento de estudos técnicos pretéritos.',
    result: 'Otimização processual com ganho de eficiência e redução de fases desnecessárias.',
    competencies: ['Otimização do Licenciamento', 'Inovação Metodológica', 'Estudos Pretéritos', 'Eficiência Processual'],
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_rifsIP_image_8c7db124.png',
  },
  {
    title: 'Loteamento Residencial Bela Vista (São Paulo)',
    sector: 'Urbanização / Loteamento',
    location: 'São Paulo',
    year: '2022',
    client: 'Confidencial',
    thesis: 'Recomposição da confiança institucional com o IPHAN-SP e avaliação contenciosa sobre TAC.',
    shortSummary: 'Reestabelecimento de confiança com IPHAN-SP através de comunicação institucional assertiva. Avaliação técnica contenciosa que possibilitou análise qualificada sobre aplicabilidade de TAC.',
    fullSummary: 'Entrada no processo e estabelecimento de uma rotina de comunicação institucional mais assertiva com o IPHAN-SP, a fim de retomar confiança e previsibilidade técnica ao processo. Avaliação técnica contenciosa quanto à possibilidade de não aplicação de TAC por parte do IPHAN.',
    result: 'Recomposição de confiança institucional e análise contenciosa qualificada.',
    competencies: ['Articulação Institucional', 'Contencioso Técnico', 'IPHAN-SP', 'Previsibilidade Técnica'],
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/loteamento-bela-vista-sp-mUTBuadXC9WcvBCbvPCcYC.webp',
  },
  {
    title: 'PCH Cabuí',
    sector: 'PCH / Hidrelétrica',
    location: 'Minas Gerais',
    year: '2023',
    client: 'Confidencial',
    thesis: 'Articulação com a CGLic, metodologia em área histórica e avaliação contenciosa qualificada.',
    shortSummary: 'Processo parado no IPHAN há mais de uma década. Contestamos o escopo das exigências, reduzido a uma única escavação. Nenhum vestígio arqueológico foi identificado e a etapa de resgate foi dispensada.',
    fullSummary: 'O processo da PCH Cabuí tramitava no IPHAN há mais de uma década. Os estudos originais haviam sido realizados por outra consultoria. Assumimos o processo em setembro de 2021 nessa fase: com o licenciamento parado e exigências pendentes cuja real necessidade era questionável. Contestamos o escopo das obrigações junto ao IPHAN, o qual acolheu parcialmente os argumentos: reduziu as exigências a uma única atividade de campo (a escavação no perímetro da antiga sede da Fazenda Cabuí) e dispensou as demais condicionantes. Com o escopo redefinido, elaboramos e submetemos o projeto de pesquisa complementar. Os trabalhos de campo foram realizados e nenhum vestígio arqueológico foi identificado. A etapa de resgate, prevista em projeto, não precisou ser executada.',
    result: 'O relatório foi aprovado pelo IPHAN em janeiro de 2022, com manifestação pela emissão da Licença de Operação. Um processo com mais de dez anos de tramitação encerrou-se em menos de quatro meses.',
    competencies: ['Articulação Institucional', 'Área Histórica', 'Inovação Metodológica', 'Contencioso Técnico'],
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_GSER2w_image_d3cd477d.png',
  },
  {
    title: 'Loteamento Fase 01 e 02 - Fazenda Paranoazinho (Distrito Federal)',
    sector: 'Urbanização / Loteamento',
    location: 'Distrito Federal',
    year: '2023',
    client: 'Confidencial',
    thesis: 'Racionalidade técnica e contencioso qualificado para afastar a necessidade da fase de gestão.',
    shortSummary: 'Reestabelecimento de confiança com IPHAN-DF. Avaliação contenciosa que demonstrou desnecessidade de fase de gestão através de racionalidade técnica e análise de suficiência de estudos pretéritos.',
    fullSummary: 'Entrada no processo e estabelecimento de uma rotina de comunicação institucional mais assertiva com o IPHAN-DF, a fim de retomar confiança e previsibilidade técnica ao processo. Avaliação técnica contenciosa quanto à não necessidade de execução da fase de Gestão, especialmente monitoramento arqueológico, uma vez que os estudos apresentados anteriormente se apresentavam suficientes e pela ausência de excepcionalidade estética e arquitetônica das edificações previstas na ADA para o contexto histórico do Distrito Federal.',
    result: 'Racionalidade técnica que afastou necessidade de fase de gestão.',
    competencies: ['Articulação Institucional', 'Contencioso Técnico', 'Fase de Gestão', 'Racionalidade Metodológica'],
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/loteamento-paranoazinho-df-6Sw2mMtWUr9FRRfXpa8vLg.webp',
  },
];

export default function CaseDetail() {
  const { t } = useI18n();
  const params = useParams();
  const [, navigate] = useLocation();
  const caseId = params.id;

  // Encontrar o case pelo ID (usando title como ID temporário)
  const caseItem = casesData.find(
    (c) =>
      c.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '') ===
      caseId?.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')
  );

  if (!caseItem) {
  return (
    <PortfolioLayout chapterNum="08" chapterTitle={t.cases.badge.replace('07 \u2014 ', '')} prevPath="/cases" prevLabel={t.home.sections.cases} nextPath="/cases" nextLabel={t.home.sections.cases}>
      <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-bold mb-4" style={{ fontSize: 'var(--text-subtitle)' }}>Case não encontrado</h1>
            <button
              onClick={() => navigate('/cases')}
              className="px-6 py-2 rounded-lg text-white font-semibold"
              style={{ backgroundColor: '#861720' }}
            >
              {t.cases.backToList}
            </button>
          </div>
        </div>
      </PortfolioLayout>
    );
  }

  return (
    <PortfolioLayout chapterNum="08" chapterTitle={t.cases.badge.replace('07 \u2014 ', '')} prevPath="/cases" prevLabel={t.home.sections.cases} nextPath="/cases" nextLabel={t.home.sections.cases}>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Botão voltar */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
            <button
              onClick={() => navigate('/cases')}
              className="flex items-center gap-2 font-semibold transition-colors hover:opacity-70"
              style={{ fontSize: 'var(--text-small)', color: '#861720' }}
            >
              <ChevronLeft className="w-4 h-4" />
              {t.cases.backToList}
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto" style={{ padding: 'var(--space-section) var(--container-padding)' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge setor */}
            <div className="mb-6">
              <span
                className="inline-block px-4 py-2 rounded-full font-semibold text-white"
                style={{ fontSize: 'var(--text-caption)', backgroundColor: '#861720' }}
              >
                {getSectorLabel(caseItem.sector, t)}
              </span>
            </div>

            {/* Título */}
            <h1
              className="font-bold mb-6 leading-tight"
              style={{ fontSize: 'var(--text-hero)', color: '#1A1A1A' }}
            >
              {caseItem.title}
            </h1>

            {/* Metadados */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: '#EE7501' }} />
                <span className="text-gray-700">{caseItem.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" style={{ color: '#0B7BA8' }} />
                <span className="text-gray-700">{caseItem.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" style={{ color: '#861720' }} />
                <span className="text-gray-700">{caseItem.client}</span>
              </div>
            </div>

            {/* Imagem do case */}
            {caseItem.imageUrl && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={caseItem.imageUrl}
                  alt={caseItem.title}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '500px' }}
                />
              </motion.div>
            )}

            {/* Tese do case */}
            <div className="mb-8">
              <h2 className="font-semibold mb-3" style={{ color: '#861720', fontSize: 'var(--text-small)' }}>
                {t.cases.thesis}
              </h2>
              <p className="leading-relaxed text-gray-700" style={{ fontSize: 'var(--text-subtitle)' }}>
                {(() => {
                  const caseKey = getCaseTranslationKey(caseItem.title);
                  // @ts-ignore
                  return caseKey && (t.cases.caseDetails as any)?.[caseKey as any]?.thesis ? t.cases.caseDetails[caseKey].thesis : caseItem.thesis;
                })()}
              </p>
            </div>

            {/* Resumo expandido */}
            <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#F9F9F9' }}>
              <h2 className="font-semibold mb-3" style={{ color: '#861720', fontSize: 'var(--text-small)' }}>
                {t.cases.projectDetails}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {(() => {
                  const caseKey = getCaseTranslationKey(caseItem.title);
                  // @ts-ignore
                  return caseKey && (t.cases.caseDetails as any)?.[caseKey as any]?.fullSummary ? t.cases.caseDetails[caseKey].fullSummary : caseItem.fullSummary;
                })()}
              </p>
            </div>

            {/* Resultado */}
            <div className="mb-8 p-6 rounded-lg border-l-4" style={{ borderColor: '#EE7501', backgroundColor: '#FFF5EE' }}>
              <h2 className="font-semibold mb-3" style={{ color: '#EE7501', fontSize: 'var(--text-small)' }}>
                {t.cases.results}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {(() => {
                  const caseKey = getCaseTranslationKey(caseItem.title);
                  // @ts-ignore
                  return caseKey && (t.cases.caseDetails as any)?.[caseKey as any]?.result ? t.cases.caseDetails[caseKey].result : caseItem.result;
                })()}
              </p>
            </div>

            {/* Competências demonstradas */}
            <div>
              <h2 className="font-semibold mb-4" style={{ color: '#861720', fontSize: 'var(--text-small)' }}>
                {t.cases.competencies}
              </h2>
              <div className="flex flex-wrap gap-3">
                {caseItem.competencies.map((comp) => (
                  <span
                    key={comp}
                    className="px-4 py-2 rounded-full font-medium text-white"
                    style={{ fontSize: 'var(--text-small)', backgroundColor: '#EE7501' }}
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Proposta */}
        <section className="border-t border-gray-200" style={{ padding: 'var(--space-section) var(--container-padding)' }}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-bold mb-4" style={{ color: '#1A1A1A', fontSize: 'var(--text-subtitle)' }}>
              {t.contato.title}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.contato.description}
            </p>
            <button
              className="px-8 py-3 rounded-lg text-white font-semibold transition-all hover:shadow-lg"
              style={{ backgroundColor: '#861720' }}
            >
              {t.contato.badge}
            </button>
          </div>
        </section>
      </div>
    </PortfolioLayout>
  );
}
