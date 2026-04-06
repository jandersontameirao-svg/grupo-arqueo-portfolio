import { useParams, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronLeft, MapPin, Calendar, Building2 } from 'lucide-react';
import PortfolioLayout from '@/components/PortfolioLayout';

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

const casesData: CaseData[] = [
  {
    title: 'Ferrovia Rumo',
    sector: 'Ferrovia',
    location: 'Mato Grosso',
    year: '2023',
    client: 'Rumo Logística',
    thesis: 'Reorganização institucional com o IPHAN-MT e excelência operacional em prospecção arqueológica com rastreabilidade de dados via SIGEPA.',
    shortSummary: 'Reestabelecimento de confiança institucional com IPHAN-MT através de comunicação assertiva. Execução de mais de 8.000 poços-teste com rastreabilidade completa via SIGEPA, demonstrando escala operacional e metodologia diferenciada.',
    fullSummary: 'Entrada no processo e estabelecimento de uma rotina de comunicação institucional mais assertiva com o IPHAN-MT, a fim de retomar confiança e previsibilidade técnica ao processo. Desenvoltura de excelência na prospecção arqueológica, com realização de mais de 8.000 poços-teste em XX dias. Prova material do bom uso do SIGEPA como recurso técnico e tecnológico diferencial na coleta, sistematização e rastreabilidade dos dados de campo, conferindo transparência, metodologia e confiabilidade às informações da pesquisa.',
    result: 'Restabelecimento de confiança institucional, escala operacional comprovada e rastreabilidade total de dados via plataforma proprietária.',
    competencies: ['Articulação Institucional', 'Escala Operacional', 'SIGEPA', 'Rastreabilidade de Dados'],
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_cgFwww_image_febed7d7.png',
  },
  {
    title: 'LT 500kV Terminal Rio-Lagos (Neoenergia)',
    sector: 'Linha de Transmissão',
    location: 'RJ / SP',
    year: '2023',
    client: 'Neoenergia',
    thesis: 'Reestruturação da interlocução com a CGLic e avaliação contenciosa qualificada sobre TAC.',
    shortSummary: 'Reestabelecimento de confiança com CGLic através de comunicação institucional assertiva. Avaliação técnica contenciosa que possibilitou análise qualificada sobre aplicabilidade de TAC, demonstrando segurança técnica e previsibilidade regulatória.',
    fullSummary: 'Entrada no processo e estabelecimento de uma rotina de comunicação institucional mais assertiva com a CGLic, a fim de retomar confiança e previsibilidade técnica ao processo. Avaliação técnica contenciosa quanto à possibilidade de não aplicação de TAC por parte do IPHAN.',
    result: 'Reestabelecimento de confiança institucional e análise contenciosa qualificada sobre TAC.',
    competencies: ['Articulação Institucional', 'Contencioso Técnico', 'CGLic', 'Previsibilidade Técnica'],
  },
  {
    title: 'PCH Canoas (Santa Catarina)',
    sector: 'PCH / Hidrelétrica',
    location: 'Santa Catarina',
    year: '2022',
    client: 'Confidencial',
    thesis: 'Precisão conceitual e segurança técnica na leitura de estruturas históricas classificadas como sítio arqueológico.',
    shortSummary: 'Análise técnica assertiva na classificação de estruturas históricas, especialmente muros, demonstrando precisão conceitual e segurança metodológica em contextos de sensibilidade arqueológica.',
    fullSummary: 'Trabalho conceitual e técnico assertivo quanto à escolha de estruturas históricas, especialmente muros, que foram classificados como sítio arqueológico.',
    result: 'Classificação arqueológica precisa e segura de estruturas históricas.',
    competencies: ['Precisão Conceitual', 'Segurança Técnica', 'Estruturas Históricas', 'Classificação Arqueológica'],
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_KcoCzi_image_15477b6a.png',
  },
  {
    title: 'Complexo Eólico Offshore Caucaia (Ceará)',
    sector: 'Eólica Offshore',
    location: 'Ceará',
    year: '2023',
    client: 'Confidencial',
    thesis: 'Rearticulação com a CGLic e construção metodológica arrojada para pesquisa arqueológica em ambiente aquático.',
    shortSummary: 'Reestabelecimento de confiança com CGLic e desenvolvimento de metodologia inovadora para pesquisa arqueológica em ambiente aquático, alinhada às fases do licenciamento ambiental.',
    fullSummary: 'Entrada no processo e estabelecimento de uma rotina de comunicação institucional mais assertiva com a CGLic, a fim de retomar confiança e previsibilidade técnica ao processo. Análise metodológica arrojada quanto ao desenvolvimento da pesquisa arqueológica em ambiente aquático compatível com a fase do processo do licenciamento ambiental.',
    result: 'Metodologia inovadora para pesquisa em ambiente aquático com previsibilidade técnica.',
    competencies: ['Articulação Institucional', 'Inovação Metodológica', 'Ambiente Aquático', 'Licenciamento Ambiental'],
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
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_iUyd1e_image_62cba2e4.png',
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
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/pasted_file_dJQqSS_image_f4da60f3.png',
  },
  {
    title: 'LT 800kV Xingu - Terminal Rio',
    sector: 'Linha de Transmissão',
    location: 'PA / RJ',
    year: '2023',
    client: 'Confidencial',
    thesis: 'Inteligência de triagem e escopo com ganho concreto de prazo para LP e LI.',
    shortSummary: 'Análise metodológica arrojada na triagem e escopo com descrição completa de estruturas primárias, possibilitando classificação arqueológica Nível I e antecipação de prazos para LP e LI.',
    fullSummary: 'Análise metodológica arrojada quanto à otimização do processo de licenciamento ambiental do empreendimento na fase de triagem e escopo, com a devida descrição e apresentação de todas as estruturas primárias do empreendimento, o que possibilitou a classificação arqueológica como Nível I das linhas de elétrodos. O case também deve destacar a antecipação do prazo para obtenção da LP e da LI.',
    result: 'Ganho concreto de prazo em LP e LI através de classificação arqueológica Nível I.',
    competencies: ['Triagem e Escopo', 'Otimização do Licenciamento', 'Ganho de Prazo', 'Classificação Nível I'],
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
  },
  {
    title: 'PCH Cabuí',
    sector: 'PCH / Hidrelétrica',
    location: 'Minas Gerais',
    year: '2023',
    client: 'Confidencial',
    thesis: 'Articulação com a CGLic, metodologia em área histórica e avaliação contenciosa qualificada.',
    shortSummary: 'Reestabelecimento de confiança com CGLic, desenvolvimento de metodologia inovadora para pesquisa em área histórica e avaliação contenciosa qualificada sobre TAC.',
    fullSummary: 'Entrada no processo e estabelecimento de uma rotina de comunicação institucional mais assertiva com a CGLic, a fim de retomar confiança e previsibilidade técnica ao processo. Análise metodológica arrojada quanto ao desenvolvimento da pesquisa arqueológica em área histórica compatível com a fase do processo do licenciamento ambiental. Avaliação técnica contenciosa quanto à possibilidade de não aplicação de TAC por parte do IPHAN.',
    result: 'Metodologia inovadora em área histórica com avaliação contenciosa qualificada.',
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
  },
];

export default function CaseDetail() {
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
    <PortfolioLayout chapterNum="08" chapterTitle="Case Detail" prevPath="/cases" prevLabel="Cases" nextPath="/cases" nextLabel="Cases">
      <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Case não encontrado</h1>
            <button
              onClick={() => navigate('/cases')}
              className="px-6 py-2 rounded-lg text-white font-semibold"
              style={{ backgroundColor: '#861720' }}
            >
              Voltar para Cases
            </button>
          </div>
        </div>
      </PortfolioLayout>
    );
  }

  return (
    <PortfolioLayout chapterNum="08" chapterTitle="Case Detail" prevPath="/cases" prevLabel="Cases" nextPath="/cases" nextLabel="Cases">
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Botão voltar */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
            <button
              onClick={() => navigate('/cases')}
              className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-70"
              style={{ color: '#861720' }}
            >
              <ChevronLeft className="w-4 h-4" />
              Voltar para Cases
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge setor */}
            <div className="mb-6">
              <span
                className="inline-block px-4 py-2 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: '#861720' }}
              >
                {caseItem.sector}
              </span>
            </div>

            {/* Título */}
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: '#1A1A1A' }}
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
                className="mb-12 rounded-lg overflow-hidden shadow-lg"
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
            <div className="mb-12">
              <h2 className="text-sm font-semibold mb-3" style={{ color: '#861720' }}>
                Tese Central
              </h2>
              <p className="text-xl leading-relaxed text-gray-700">{caseItem.thesis}</p>
            </div>

            {/* Resumo expandido */}
            <div className="mb-12 p-6 rounded-lg" style={{ backgroundColor: '#F9F9F9' }}>
              <h2 className="text-sm font-semibold mb-3" style={{ color: '#861720' }}>
                Descrição Completa
              </h2>
              <p className="text-gray-700 leading-relaxed">{caseItem.fullSummary}</p>
            </div>

            {/* Resultado */}
            <div className="mb-12 p-6 rounded-lg border-l-4" style={{ borderColor: '#EE7501', backgroundColor: '#FFF5EE' }}>
              <h2 className="text-sm font-semibold mb-3" style={{ color: '#EE7501' }}>
                Resultado & Diferencial
              </h2>
              <p className="text-gray-700 leading-relaxed">{caseItem.result}</p>
            </div>

            {/* Competências demonstradas */}
            <div>
              <h2 className="text-sm font-semibold mb-4" style={{ color: '#861720' }}>
                Competências Demonstradas
              </h2>
              <div className="flex flex-wrap gap-3">
                {caseItem.competencies.map((comp) => (
                  <span
                    key={comp}
                    className="px-4 py-2 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: '#EE7501' }}
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Proposta */}
        <section className="py-12 md:py-16 px-4 md:px-8 border-t border-gray-200">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A' }}>
              Interessado em uma solução similar?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Conheça como o Grupo Arqueo pode aplicar essa expertise ao seu projeto.
            </p>
            <button
              className="px-8 py-3 rounded-lg text-white font-semibold transition-all hover:shadow-lg"
              style={{ backgroundColor: '#861720' }}
            >
              Solicitar Proposta
            </button>
          </div>
        </section>
      </div>
    </PortfolioLayout>
  );
}
