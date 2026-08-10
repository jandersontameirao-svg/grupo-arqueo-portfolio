import jsPDF from 'jspdf';

// ============================================================
// Grupo Arqueo — Portfólio Institucional PDF Generator
// Design: "Estratos Editoriais" — Neo-Editorial Minimalista
// Paleta: Bordô #861720, Laranja #EE7501, Azul #2C7EB3, Fundo #F9F8F6
// ============================================================

const COLORS = {
  bordo: [134, 23, 32] as [number, number, number],
  laranja: [238, 117, 1] as [number, number, number],
  azul: [44, 126, 179] as [number, number, number],
  fundo: [249, 248, 246] as [number, number, number],
  branco: [255, 255, 255] as [number, number, number],
  charcoal: [42, 42, 42] as [number, number, number],
  cinzaClaro: [136, 136, 136] as [number, number, number],
  cinzaLinha: [220, 220, 220] as [number, number, number],
};

const PAGE_W = 297; // A4 landscape width
const PAGE_H = 210; // A4 landscape height
const MARGIN = 20;
const CONTENT_W = PAGE_W - MARGIN * 2;

async function loadImageAsBase64(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) { reject('No context'); return; }
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => reject(`Failed to load: ${url}`);
    img.src = url;
  });
}

// Carrega imagem recortada em "cover" para o aspecto alvo (evita distorção)
async function loadImageCover(url: string, targetW: number, targetH: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const targetRatio = targetW / targetH;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      let sw = img.naturalWidth, sh = img.naturalHeight, sx = 0, sy = 0;
      if (imgRatio > targetRatio) {
        sw = img.naturalHeight * targetRatio;
        sx = (img.naturalWidth - sw) / 2;
      } else {
        sh = img.naturalWidth / targetRatio;
        sy = (img.naturalHeight - sh) / 2;
      }
      const scale = 3; // qualidade
      const canvas = document.createElement('canvas');
      canvas.width = targetW * scale;
      canvas.height = targetH * scale;
      const ctx = canvas.getContext('2d');
      if (!ctx) { reject('No context'); return; }
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/jpeg', 0.9));
    };
    img.onerror = () => reject(`Failed to load: ${url}`);
    img.src = url;
  });
}

// Tenta carregar; retorna null em caso de falha (não quebra o PDF)
async function tryCover(url: string, w: number, h: number): Promise<string | null> {
  try { return await loadImageCover(url, w, h); } catch (e) { console.warn('img cover fail', url, e); return null; }
}

function drawTopBar(doc: jsPDF) {
  doc.setFillColor(...COLORS.bordo);
  doc.rect(0, 0, PAGE_W, 4, 'F');
  doc.setFillColor(...COLORS.laranja);
  doc.rect(0, 4, PAGE_W, 1.5, 'F');
}

function drawFooter(doc: jsPDF, pageNum: number) {
  doc.setFillColor(...COLORS.bordo);
  doc.rect(0, PAGE_H - 8, PAGE_W, 8, 'F');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(...COLORS.branco);
  doc.text('Grupo Arqueo — Portfólio Institucional', MARGIN, PAGE_H - 3);
  doc.text(`${pageNum}`, PAGE_W - MARGIN, PAGE_H - 3, { align: 'right' });
}

function drawSectionTitle(doc: jsPDF, title: string, y: number, subtitle?: string): number {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...COLORS.bordo);
  doc.text(title, MARGIN, y);

  // Underline accent
  const titleWidth = doc.getTextWidth(title);
  doc.setFillColor(...COLORS.laranja);
  doc.rect(MARGIN, y + 2, titleWidth, 1.5, 'F');

  let currentY = y + 10;

  if (subtitle) {
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.cinzaClaro);
    doc.text(subtitle, MARGIN, currentY);
    currentY += 8;
  }

  return currentY;
}

function drawParagraph(doc: jsPDF, text: string, x: number, y: number, maxWidth: number, fontSize = 10): number {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(fontSize);
  doc.setTextColor(...COLORS.charcoal);
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y);
  return y + lines.length * (fontSize * 0.45) + 4;
}

function drawBulletPoint(doc: jsPDF, text: string, x: number, y: number, maxWidth: number, fontSize = 9): number {
  doc.setFillColor(...COLORS.laranja);
  doc.circle(x + 2, y - 1.5, 1.2, 'F');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(fontSize);
  doc.setTextColor(...COLORS.charcoal);
  const lines = doc.splitTextToSize(text, maxWidth - 8);
  doc.text(lines, x + 6, y);
  return y + lines.length * (fontSize * 0.45) + 3;
}

function drawHighlightBox(doc: jsPDF, title: string, value: string, x: number, y: number, w: number, h: number) {
  doc.setFillColor(...COLORS.fundo);
  doc.roundedRect(x, y, w, h, 3, 3, 'F');
  doc.setFillColor(...COLORS.laranja);
  doc.rect(x, y, 3, h, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...COLORS.bordo);
  doc.text(value, x + 10, y + h / 2 - 2);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.cinzaClaro);
  doc.text(title, x + 10, y + h / 2 + 5);
}

export async function generatePortfolioPDF() {
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

  // Pre-load logo
  let logoBase64: string | null = null;
  try {
    logoBase64 = await loadImageAsBase64('https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logo-10anos_474f247c.webp');
  } catch (e) {
    console.warn('Could not load logo', e);
  }

  let logoGrupoBase64: string | null = null;
  try {
    logoGrupoBase64 = await loadImageAsBase64('https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/logo-grupo-arqueo-colorido_4849b24c.png');
  } catch (e) {
    console.warn('Could not load grupo logo', e);
  }

  const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028979380/DVKCzaTYsaV36sGCkFNuAx/';
  // Imagens (recortadas em cover) carregadas em paralelo
  const [heroCover, ecoCover, numbersCover, casesCover] = await Promise.all([
    tryCover(CDN + 'hero-arqueologia-premium-Ks45A3dKUW9xwyHBL4TLX3.webp', 125, 175),
    tryCover(CDN + 'ecossistema-visual-3sRRNuHp9GJTUsfajvNYaF.webp', 257, 40),
    tryCover(CDN + 'numbers-background-m6DiJd3MzdPudxVKexexJb.webp', 257, 45),
    tryCover(CDN + 'hero-arqueologia-premium-Ks45A3dKUW9xwyHBL4TLX3.webp', 257, 38),
  ]);
  const tryPng = (u: string) => loadImageAsBase64(u).catch(() => null);
  const [logoAP, logoGIS, logoOcean, logoEduc] = await Promise.all([
    tryPng(CDN + 'logo-arqueoproject_33a2b072.png'),
    tryPng(CDN + 'logo-arqueogis_ec9e6836.png'),
    tryPng(CDN + 'logo-arqueocean_83b3af7e.png'),
    tryPng(CDN + 'logo-arqueoeduc_c6c4dcad.png'),
  ]);
  const empLogoMap: Record<string, string | null> = {
    'Arqueoproject': logoAP, 'ArqueoGIS': logoGIS, 'ArqueoOcean': logoOcean, 'ArqueoEduc': logoEduc,
  };

  // ============================================================
  // PAGE 1 — CAPA (Réplica da Home do site)
  // ============================================================
  doc.setFillColor(...COLORS.fundo);
  doc.rect(0, 0, PAGE_W, PAGE_H, 'F');

  // Subtle radial gradient effect (light circle on right side)
  doc.setFillColor(245, 240, 235);
  doc.circle(200, 105, 85, 'F');
  doc.setFillColor(...COLORS.fundo);
  doc.circle(200, 105, 82, 'F');

  // ---- RIGHT SIDE — Painel com foto real (cover) ----
  const panelX = 152, panelY = 15, panelW = 125, panelH = 180;
  if (heroCover) {
    doc.addImage(heroCover, 'JPEG', panelX, panelY, panelW, panelH);
    // Faixa inferior translúcida (bordô) com selo 10 anos
    doc.setFillColor(...COLORS.bordo);
    doc.rect(panelX, panelY + panelH - 26, panelW, 26, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.branco);
    doc.text('10 ANOS DE EXCELÊNCIA', panelX + panelW / 2, panelY + panelH - 15, { align: 'center' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(255, 210, 180);
    doc.text('Patrimônio Cultural e Arqueológico', panelX + panelW / 2, panelY + panelH - 8, { align: 'center' });
    // Moldura
    doc.setDrawColor(...COLORS.laranja);
    doc.setLineWidth(1);
    doc.rect(panelX, panelY, panelW, panelH);
  }

  // ---- LEFT SIDE ----
  // Logo 10 anos (top left)
  if (logoBase64) {
    doc.addImage(logoBase64, 'PNG', 18, 12, 52, 40);
  }

  // Label
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(...COLORS.laranja);
  doc.text('PATRIMÔNIO CULTURAL E ARQUEOLÓGICO', 20, 60);

  // Main title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(...COLORS.charcoal);
  doc.text('Consultoria', 20, 75);
  doc.text('estratégica ', 20, 86);
  doc.setTextColor(...COLORS.laranja);
  doc.text('em', 20 + doc.getTextWidth('estratégica '), 86);
  doc.setTextColor(...COLORS.laranja);
  doc.text('pesquisa', 20, 97);
  doc.setTextColor(...COLORS.charcoal);
  doc.text(' e gestão do', 20 + doc.getTextWidth('pesquisa'), 97);
  doc.text('patrimônio', 20, 108);
  doc.setTextColor(...COLORS.laranja);
  doc.text('sociocultural', 20, 119);

  // Description text
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.cinzaClaro);
  const descLines = doc.splitTextToSize('Há 10 anos, o Grupo Arqueo une competência técnica, inovação tecnológica e gestão estratégica para oferecer soluções completas em licenciamento sociocultural no Brasil.', 110);
  doc.text(descLines, 20, 132);

  // Sumário do portfólio (lado esquerdo, abaixo da descrição)
  const sumItems = [
    '01  Mensagem do CEO', '02  Quem Somos & Ecossistema', '03  Missão e Valores',
    '04  Soluções', '05  Diferenciais & Conformidade', '06  Números & Território',
    '07  Cases', '08  Nossos Parceiros', '09  Contato',
  ];
  let sumY = 150;
  const sumColW = 66;
  sumItems.forEach((s, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const sxi = 20 + col * sumColW;
    const syi = sumY + row * 8;
    doc.setFillColor(...COLORS.laranja);
    doc.circle(sxi + 1, syi - 1.3, 0.9, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...COLORS.charcoal);
    doc.text(s, sxi + 5, syi);
  });

  // Bottom bar
  doc.setFillColor(...COLORS.bordo);
  doc.rect(0, PAGE_H - 10, PAGE_W, 10, 'F');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(...COLORS.branco);
  doc.text('www.grupoarqueo.com.br', PAGE_W / 2, PAGE_H - 3.5, { align: 'center' });

  // ============================================================
  // PAGE 2 — MENSAGEM DO CEO
  // ============================================================
  doc.addPage();
  doc.setFillColor(...COLORS.fundo);
  doc.rect(0, 0, PAGE_W, PAGE_H, 'F');
  drawTopBar(doc);
  drawFooter(doc, 2);

  let y = drawSectionTitle(doc, 'Mensagem do CEO', 20, 'Janderson Rubens Tameirão — CEO & Fundador');

  // Quote
  doc.setFillColor(...COLORS.laranja);
  doc.rect(MARGIN, y, 2, 18, 'F');
  doc.setFont('helvetica', 'bolditalic');
  doc.setFontSize(12);
  doc.setTextColor(...COLORS.bordo);
  const quoteLines = doc.splitTextToSize('"O patrimônio cultural é um ativo estratégico para o desenvolvimento sustentável do Brasil."', CONTENT_W - 10);
  doc.text(quoteLines, MARGIN + 8, y + 6);
  y += 28;

  y = drawParagraph(doc,
    'O projeto nasce a partir de um propósito claro: elevar o padrão da arqueologia preventiva no Brasil e entregar mais previsibilidade ao licenciamento ambiental. Desde o início assumimos um papel disruptivo ao combinar rigor técnico, visão de gestão e inovação aplicada, transformando exigências e complexidade em método, rastreabilidade e entregas consistentes.',
    MARGIN, y, CONTENT_W);

  y = drawParagraph(doc,
    'Ao longo dessa trajetória, a tecnologia deixou de ser um apoio pontual e passou a integrar nossa forma de operar. Investimos em padronização de processos, organização inteligente de dados, controles de qualidade e melhoria contínua, fortalecendo a capacidade de execução em projetos complexos e com alta demanda de conformidade.',
    MARGIN, y, CONTENT_W);

  y = drawParagraph(doc,
    'Com quase 10 anos de história, inauguramos um novo ciclo e o Grupo Arqueo se projeta como nunca, para a era das IAs e da sustentabilidade, formalizando padrões, consolidando governança e incorporando inteligência artificial para padronizar fluxos, qualificar decisões e acelerar entregas com segurança, transparência e foco em resultados.',
    MARGIN, y, CONTENT_W);

  // Closing quote
  y += 4;
  doc.setFillColor(...COLORS.laranja);
  doc.rect(MARGIN, y, 2, 12, 'F');
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.bordo);
  const closingLines = doc.splitTextToSize('"É assim que avançamos: rigor técnico, inovação aplicada e compromisso com resultados, hoje e nos próximos anos."', CONTENT_W - 10);
  doc.text(closingLines, MARGIN + 8, y + 5);

  // ============================================================
  // PAGE 3 — QUEM SOMOS + TIMELINE
  // ============================================================
  doc.addPage();
  doc.setFillColor(...COLORS.fundo);
  doc.rect(0, 0, PAGE_W, PAGE_H, 'F');
  drawTopBar(doc);
  drawFooter(doc, 3);

  y = drawSectionTitle(doc, 'Quem Somos', 20, 'Hub de soluções integradas para Arqueologia e Patrimônio Cultural');

  y = drawParagraph(doc,
    'O Grupo Arqueo é um hub de soluções integradas para Arqueologia e Patrimônio Cultural. Desde 2016, construímos um ecossistema de empresas especializadas que atuam de forma coordenada para oferecer soluções completas em consultoria, pesquisa, educação e tecnologia aplicada ao patrimônio sociocultural brasileiro.',
    MARGIN, y, CONTENT_W);

  y += 6;

  // Timeline
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...COLORS.bordo);
  doc.text('Nossa Trajetória', MARGIN, y);
  y += 8;

  // Timeline line
  const timelineY = y + 10;
  doc.setDrawColor(...COLORS.laranja);
  doc.setLineWidth(0.8);
  doc.line(MARGIN + 10, timelineY, PAGE_W - MARGIN - 10, timelineY);

  const milestones = [
    { year: '2016', name: 'Fundação', desc: 'Criação da Arqueoproject em Brasília' },
    { year: '2018', name: 'Inovação', desc: 'Desenvolvimento da ferramenta Sigepa' },
    { year: '2020', name: 'ArqueoEduc', desc: 'Plataforma de educação corporativa' },
    { year: '2021', name: 'ArqueoOcean', desc: 'Pesquisas subaquáticas e litorâneas' },
    { year: '2022', name: 'ArqueoRede', desc: 'Blog de Notícias e rede colaborativa' },
    { year: '2022', name: 'ArqueoGIS', desc: 'Projetos de menor complexidade' },
    { year: '2026', name: 'Consolidação', desc: 'Novas unidades de negócios' },
  ];

  const spacing = (PAGE_W - MARGIN * 2 - 20) / (milestones.length - 1);
  milestones.forEach((m, i) => {
    const mx = MARGIN + 10 + i * spacing;

    // Circle
    doc.setFillColor(...COLORS.branco);
    doc.setDrawColor(...COLORS.laranja);
    doc.setLineWidth(0.5);
    doc.circle(mx, timelineY, 5, 'FD');

    // Year badge
    doc.setFillColor(...COLORS.laranja);
    doc.circle(mx, timelineY + 10, 4, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6);
    doc.setTextColor(...COLORS.branco);
    doc.text(m.year, mx, timelineY + 11.5, { align: 'center' });

    // Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...COLORS.charcoal);
    doc.text(m.name, mx, timelineY + 20, { align: 'center' });

    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6);
    doc.setTextColor(...COLORS.cinzaClaro);
    const descLines = doc.splitTextToSize(m.desc, spacing - 4);
    doc.text(descLines, mx, timelineY + 25, { align: 'center' });
  });

  // ============================================================
  // PAGE 4 — ECOSSISTEMA DE EMPRESAS
  // ============================================================
  doc.addPage();
  doc.setFillColor(...COLORS.fundo);
  doc.rect(0, 0, PAGE_W, PAGE_H, 'F');
  drawTopBar(doc);
  drawFooter(doc, 4);

  y = drawSectionTitle(doc, 'Ecossistema de Empresas', 20, '6 unidades especializadas atuando de forma integrada');

  if (ecoCover) {
    doc.addImage(ecoCover, 'JPEG', MARGIN, y, CONTENT_W, 24);
    doc.setDrawColor(...COLORS.laranja);
    doc.setLineWidth(0.5);
    doc.rect(MARGIN, y, CONTENT_W, 24);
    y += 30;
  }

  const empresas = [
    { name: 'Arqueoproject', sub: 'Pesquisa & Consultoria', desc: 'Empresa-mãe do grupo, especializada em pesquisa arqueológica preventiva e consultoria para licenciamento sociocultural.', color: COLORS.bordo },
    { name: 'ArqueoGIS', sub: 'Tecnologia & Dados', desc: 'Plataforma de tecnologia e gestão de dados geoespaciais aplicados à arqueologia e geoprocessamento.', color: COLORS.azul },
    { name: 'ArqueoOcean', sub: 'Operações Subaquáticas', desc: 'Divisão especializada em arqueologia subaquática e costeira, com equipe certificada em mergulho científico.', color: COLORS.azul },
    { name: 'ArqueoEduc', sub: 'Educação & Comunicação', desc: 'Braço educacional e de comunicação social. Desenvolve programas de educação patrimonial e engajamento comunitário.', color: COLORS.bordo },
    { name: 'ArqueoRede', sub: 'Rede Colaborativa', desc: 'Plataforma de rede colaborativa que integra profissionais e instituições do setor arqueológico.', color: COLORS.laranja },
    { name: 'SIGEPA Plus', sub: 'Gestão Integrada', desc: 'Sistema de gestão integrada para projetos arqueológicos. Centraliza informações e otimiza processos.', color: COLORS.laranja },
  ];

  const colW = (CONTENT_W - 10) / 3;
  const rowH = 52;

  empresas.forEach((emp, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const ex = MARGIN + col * (colW + 5);
    const ey = y + row * (rowH + 6);

    // Card background
    doc.setFillColor(...COLORS.branco);
    doc.roundedRect(ex, ey, colW, rowH, 2, 2, 'F');

    // Left accent
    doc.setFillColor(...emp.color);
    doc.rect(ex, ey, 2.5, rowH, 'F');

    // Logo da empresa (canto superior direito), quando disponível
    const empLogo = empLogoMap[emp.name];
    if (empLogo) {
      doc.addImage(empLogo, 'PNG', ex + colW - 26, ey + 5, 20, 12);
    }

    // Company name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...emp.color);
    doc.text(emp.name, ex + 8, ey + 10);

    // Subtitle
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7);
    doc.setTextColor(...COLORS.cinzaClaro);
    doc.text(emp.sub, ex + 8, ey + 16);

    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(...COLORS.charcoal);
    const descLines = doc.splitTextToSize(emp.desc, colW - 14);
    doc.text(descLines, ex + 8, ey + 23);
  });

  // ============================================================
  // PAGE 5 — MISSÃO, VISÃO E VALORES
  // ============================================================
  doc.addPage();
  doc.setFillColor(...COLORS.fundo);
  doc.rect(0, 0, PAGE_W, PAGE_H, 'F');
  drawTopBar(doc);
  drawFooter(doc, 5);

  y = drawSectionTitle(doc, 'Missão, Visão e Valores', 20);

  // Missão
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...COLORS.bordo);
  doc.text('Missão', MARGIN, y);
  y += 6;
  y = drawParagraph(doc,
    'Oferecer soluções integradas em pesquisa, consultoria e gestão do patrimônio sociocultural, com rigor técnico, inovação tecnológica e compromisso com a conformidade, contribuindo para o desenvolvimento sustentável e a preservação da memória cultural do Brasil.',
    MARGIN, y, CONTENT_W);
  y += 4;

  // Visão
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...COLORS.bordo);
  doc.text('Visão', MARGIN, y);
  y += 6;
  y = drawParagraph(doc,
    'Ser referência nacional em gestão estratégica do patrimônio sociocultural, reconhecida pela excelência operacional, pela inovação contínua e pela capacidade de transformar desafios regulatórios em oportunidades de valor para clientes, comunidades e para o país.',
    MARGIN, y, CONTENT_W);
  y += 4;

  // Valores
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...COLORS.bordo);
  doc.text('Pilares Estratégicos', MARGIN, y);
  y += 8;

  const valores = [
    'Rigor Técnico e Científico — Compromisso com metodologia e qualidade',
    'Inovação Contínua — Tecnologia como motor de transformação',
    'Conformidade e Transparência — Ética e rastreabilidade em cada processo',
    'Integração e Colaboração — Ecossistema que potencializa resultados',
    'Sustentabilidade — Equilíbrio entre desenvolvimento e preservação',
    'Excelência Operacional — Processos padronizados e melhoria contínua',
  ];

  valores.forEach(v => {
    y = drawBulletPoint(doc, v, MARGIN, y, CONTENT_W);
  });

  // ============================================================
  // PAGE 6 — SOLUÇÕES
  // ============================================================
  doc.addPage();
  doc.setFillColor(...COLORS.fundo);
  doc.rect(0, 0, PAGE_W, PAGE_H, 'F');
  drawTopBar(doc);
  drawFooter(doc, 6);

  y = drawSectionTitle(doc, 'Soluções Integradas', 20, 'Atuação completa no ciclo de gestão do patrimônio sociocultural');

  const solucoes = [
    {
      title: 'Consultoria & Estratégia',
      items: ['Articulação institucional com IPHAN e órgãos reguladores', 'Estratégia processual para licenciamento ambiental', 'Gestão de riscos e conformidade regulatória', 'Planejamento e cronogramas integrados'],
    },
    {
      title: 'Pesquisa & Campo',
      items: ['Diagnóstico e prospecção arqueológica', 'Resgate e monitoramento de sítios', 'Arqueologia subaquática e costeira', 'Levantamentos geofísicos e topográficos'],
    },
    {
      title: 'Educação & Comunicação',
      items: ['Educação patrimonial e engajamento comunitário', 'Comunicação social para licenciamento', 'Treinamentos e capacitações corporativas', 'Produção de conteúdo e divulgação científica'],
    },
    {
      title: 'Tecnologia & Dados',
      items: ['SIGEPA Plus — Sistema de gestão integrada', 'Geoprocessamento e sensoriamento remoto', 'Inteligência territorial e análise de dados', 'Automação de processos e relatórios'],
    },
  ];

  const solColW = (CONTENT_W - 15) / 2;
  solucoes.forEach((sol, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const sx = MARGIN + col * (solColW + 15);
    let sy = y + row * 62;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...COLORS.laranja);
    doc.text(sol.title, sx, sy);
    sy += 6;

    sol.items.forEach(item => {
      sy = drawBulletPoint(doc, item, sx, sy, solColW, 8);
    });
  });

  // ============================================================
  // PAGE 7 — DIFERENCIAIS
  // ============================================================
  doc.addPage();
  doc.setFillColor(...COLORS.fundo);
  doc.rect(0, 0, PAGE_W, PAGE_H, 'F');
  drawTopBar(doc);
  drawFooter(doc, 7);

  y = drawSectionTitle(doc, 'Diferenciais Competitivos', 20, 'O que nos torna únicos no mercado');

  const diferenciais = [
    { title: 'Ecossistema Integrado', desc: 'Seis empresas especializadas operando de forma coordenada, cobrindo todo o ciclo de gestão do patrimônio sociocultural.' },
    { title: 'Tecnologia Proprietária', desc: 'SIGEPA Plus e ferramentas próprias de geoprocessamento, garantindo rastreabilidade e controle de qualidade em cada etapa.' },
    { title: 'Estratégia Processual', desc: 'Articulação institucional com IPHAN e órgãos reguladores, transformando complexidade burocrática em previsibilidade para o cliente.' },
    { title: 'Inteligência Territorial', desc: 'Análise geoespacial avançada e sensoriamento remoto para tomada de decisão baseada em dados concretos.' },
    { title: 'Ambientes Complexos', desc: 'Capacidade comprovada de operar em projetos de alta complexidade técnica e regulatória, incluindo ambientes subaquáticos.' },
    { title: 'Capilaridade Nacional', desc: 'Presença em 23 estados + DF, com rede de profissionais e parceiros estratégicos em todas as regiões do Brasil.' },
  ];

  const difColW = (CONTENT_W - 10) / 3;
  const difRowH = 50;

  diferenciais.forEach((dif, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const dx = MARGIN + col * (difColW + 5);
    const dy = y + row * (difRowH + 6);

    // Number
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(...COLORS.laranja);
    doc.text(`0${i + 1}`, dx, dy + 8);

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.bordo);
    doc.text(dif.title, dx + 16, dy + 6);

    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...COLORS.charcoal);
    const descLines = doc.splitTextToSize(dif.desc, difColW - 4);
    doc.text(descLines, dx + 16, dy + 13);
  });

  // ============================================================
  // PAGE 8 — NÚMEROS E TERRITÓRIO
  // ============================================================
  doc.addPage();
  doc.setFillColor(...COLORS.fundo);
  doc.rect(0, 0, PAGE_W, PAGE_H, 'F');
  drawTopBar(doc);
  drawFooter(doc, 8);

  y = drawSectionTitle(doc, 'Números e Território', 20, 'Uma década de resultados consistentes');

  // Faixa de imagem
  if (numbersCover) {
    doc.addImage(numbersCover, 'JPEG', MARGIN, y, CONTENT_W, 30);
    doc.setDrawColor(...COLORS.laranja);
    doc.setLineWidth(0.5);
    doc.rect(MARGIN, y, CONTENT_W, 30);
    y += 38;
  }

  const numeros = [
    { value: '10+', label: 'Anos de Atuação' },
    { value: '397+', label: 'Projetos Realizados' },
    { value: '23+DF', label: 'Estados Atendidos' },
    { value: '50+', label: 'Profissionais' },
    { value: '57+', label: 'Parcerias Estratégicas' },
    { value: '6', label: 'Empresas no Ecossistema' },
  ];

  const numColW = (CONTENT_W - 25) / 3;
  const numRowH = 30;

  numeros.forEach((num, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const nx = MARGIN + col * (numColW + 12.5);
    const ny = y + row * (numRowH + 8);
    drawHighlightBox(doc, num.label, num.value, nx, ny, numColW, numRowH);
  });

  y += 80;

  // Setores
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.bordo);
  doc.text('Setores de Atuação', MARGIN, y);
  y += 7;

  const setores = ['Energia (Eólica, Solar, Hidrelétrica)', 'Transmissão e Subestações', 'Ferrovias e Rodovias', 'Mineração', 'Urbanização e Loteamentos', 'Portos e Infraestrutura Costeira', 'Óleo e Gás'];
  const setColW = CONTENT_W / 3;
  setores.forEach((s, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const sx = MARGIN + col * setColW;
    const sy = y + row * 7;
    drawBulletPoint(doc, s, sx, sy, setColW - 5, 8);
  });

  // ============================================================
  // PAGE 9 — CASES DE DESTAQUE (Parte 1)
  // ============================================================
  doc.addPage();
  doc.setFillColor(...COLORS.fundo);
  doc.rect(0, 0, PAGE_W, PAGE_H, 'F');
  drawTopBar(doc);
  drawFooter(doc, 9);

  y = drawSectionTitle(doc, 'Cases de Destaque', 20, 'Projetos que demonstram nossa capacidade técnica e operacional');

  if (casesCover) {
    doc.addImage(casesCover, 'JPEG', MARGIN, y, CONTENT_W, 22);
    doc.setDrawColor(...COLORS.laranja);
    doc.setLineWidth(0.5);
    doc.rect(MARGIN, y, CONTENT_W, 22);
    y += 28;
  }

  const cases1 = [
    {
      title: 'Ferrovia Rumo — Mato Grosso',
      desc: 'Reorganização institucional com IPHAN-MT e excelência operacional em prospecção arqueológica. Realização de mais de 8.000 poços-teste com rastreabilidade completa via SIGEPA.',
      services: 'Articulação Institucional | Escala Operacional | SIGEPA | Rastreabilidade',
    },
    {
      title: 'PCH Canoas — Goiás',
      desc: 'Gestão arqueológica completa para Pequena Central Hidrelétrica, incluindo diagnóstico, prospecção e monitoramento em área de impacto direto e indireto.',
      services: 'Diagnóstico Arqueológico | Prospecção | Monitoramento | Licenciamento',
    },
    {
      title: 'LT 230kV Abdon Batista — Santa Catarina',
      desc: 'Consultoria arqueológica para linha de transmissão de alta tensão, com gestão integrada de equipes multidisciplinares e articulação com IPHAN-SC.',
      services: 'Consultoria | Gestão Multidisciplinar | IPHAN | Alta Tensão',
    },
    {
      title: 'Ampliação SE Candiota 2 — Rio Grande do Sul',
      desc: 'Acompanhamento arqueológico para ampliação de subestação de energia, garantindo conformidade regulatória e preservação do patrimônio local.',
      services: 'Acompanhamento | Conformidade | Subestação | Patrimônio',
    },
  ];

  const caseColW = (CONTENT_W - 10) / 2;
  const caseRowH = 58;

  cases1.forEach((c, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const cx = MARGIN + col * (caseColW + 10);
    const cy = y + row * (caseRowH + 6);

    // Card
    doc.setFillColor(...COLORS.branco);
    doc.roundedRect(cx, cy, caseColW, caseRowH, 2, 2, 'F');
    doc.setFillColor(...COLORS.bordo);
    doc.rect(cx, cy, caseColW, 2, 'F');

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.bordo);
    doc.text(c.title, cx + 5, cy + 10);

    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(...COLORS.charcoal);
    const descLines = doc.splitTextToSize(c.desc, caseColW - 10);
    doc.text(descLines, cx + 5, cy + 17);

    // Services
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(6);
    doc.setTextColor(...COLORS.laranja);
    const svcLines = doc.splitTextToSize(c.services, caseColW - 10);
    doc.text(svcLines, cx + 5, cy + caseRowH - 6);
  });

  // ============================================================
  // PAGE 10 — CASES DE DESTAQUE (Parte 2)
  // ============================================================
  doc.addPage();
  doc.setFillColor(...COLORS.fundo);
  doc.rect(0, 0, PAGE_W, PAGE_H, 'F');
  drawTopBar(doc);
  drawFooter(doc, 10);

  y = drawSectionTitle(doc, 'Cases de Destaque', 20, 'Continuação — Diversidade de setores e complexidades');

  const cases2 = [
    {
      title: 'PCH Cabuí — Goiás',
      desc: 'Gestão completa do patrimônio arqueológico para Pequena Central Hidrelétrica, com diagnóstico, prospecção e educação patrimonial integrada.',
      services: 'Diagnóstico | Prospecção | Educação Patrimonial | PCH',
    },
    {
      title: 'LT 500kV Terminal Rio-Lagos — Neoenergia',
      desc: 'Consultoria arqueológica para linha de transmissão de 500kV, um dos maiores projetos de transmissão do país, com gestão integrada multirregional.',
      services: 'Alta Tensão | Multirregional | Neoenergia | 500kV',
    },
    {
      title: 'Complexo Eólico Offshore Caucaia — Ceará',
      desc: 'Projeto pioneiro de arqueologia para complexo eólico offshore, envolvendo pesquisas subaquáticas e costeiras com a ArqueoOcean.',
      services: 'Offshore | Subaquático | ArqueoOcean | Energia Eólica',
    },
    {
      title: 'Loteamentos — Maria Isabel, Bela Vista, Paranoazinho',
      desc: 'Gestão arqueológica para projetos de urbanização e loteamentos em diferentes estados, garantindo conformidade e agilidade no licenciamento.',
      services: 'Urbanização | Licenciamento | Multirregional | Loteamentos',
    },
  ];

  cases2.forEach((c, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const cx = MARGIN + col * (caseColW + 10);
    const cy = y + row * (caseRowH + 6);

    doc.setFillColor(...COLORS.branco);
    doc.roundedRect(cx, cy, caseColW, caseRowH, 2, 2, 'F');
    doc.setFillColor(...COLORS.bordo);
    doc.rect(cx, cy, caseColW, 2, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.bordo);
    doc.text(c.title, cx + 5, cy + 10);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(...COLORS.charcoal);
    const descLines = doc.splitTextToSize(c.desc, caseColW - 10);
    doc.text(descLines, cx + 5, cy + 17);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(6);
    doc.setTextColor(...COLORS.laranja);
    const svcLines = doc.splitTextToSize(c.services, caseColW - 10);
    doc.text(svcLines, cx + 5, cy + caseRowH - 6);
  });

  // ============================================================
  // PAGE 11 — PARCEIROS E CLIENTES
  // ============================================================
  doc.addPage();
  doc.setFillColor(...COLORS.fundo);
  doc.rect(0, 0, PAGE_W, PAGE_H, 'F');
  drawTopBar(doc);
  drawFooter(doc, 11);

  y = drawSectionTitle(doc, 'Parceiros e Clientes', 20, 'Empresas que confiam no Grupo Arqueo');

  const parceiros = [
    'Rumo', 'Neoenergia', 'Shell', 'Raízen', 'TAESA', 'Voltalia',
    'Statkraft', 'State Grid', 'PowerChina', 'Vestas', 'Solatio', 'SPIC Brasil',
    'PEC Energia', 'Sowitec', 'Triunfo Concebra', 'Mercury', 'Lua Nova', 'SER',
    'Sunco Capital', 'UP', 'Renova Mundy', 'Pan American',
  ];

  const parcColW = CONTENT_W / 4;
  parceiros.forEach((p, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const px = MARGIN + col * parcColW;
    const py = y + row * 10;

    doc.setFillColor(...COLORS.laranja);
    doc.circle(px + 2, py - 1.5, 1, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.charcoal);
    doc.text(p, px + 6, py);
  });

  // ============================================================
  // PAGE 12 — CONTATO E ENCERRAMENTO
  // ============================================================
  doc.addPage();
  doc.setFillColor(...COLORS.fundo);
  doc.rect(0, 0, PAGE_W, PAGE_H, 'F');
  drawTopBar(doc);

  // Logo centered
  if (logoBase64) {
    doc.addImage(logoBase64, 'PNG', PAGE_W / 2 - 25, 15, 50, 40);
  }

  y = 65;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...COLORS.bordo);
  doc.text('Vamos Conversar', PAGE_W / 2, y, { align: 'center' });
  y += 5;
  doc.setFillColor(...COLORS.laranja);
  doc.rect(PAGE_W / 2 - 20, y, 40, 1, 'F');
  y += 10;

  // Contacts
  const contacts = [
    { name: 'Janderson Rubens Tameirão', role: 'CEO & Fundador', email: 'janderson@grupoarqueo.com.br' },
    { name: 'Fernanda Tameirão', role: 'Diretora Administrativa', email: 'fernanda@grupoarqueo.com.br' },
  ];

  const contactColW = CONTENT_W / contacts.length;
  contacts.forEach((c, i) => {
    const cx = MARGIN + i * contactColW;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.charcoal);
    doc.text(c.name, cx + contactColW / 2, y, { align: 'center' });

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(...COLORS.laranja);
    doc.text(c.role, cx + contactColW / 2, y + 6, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...COLORS.azul);
    doc.text(c.email, cx + contactColW / 2, y + 12, { align: 'center' });
  });

  y += 28;

  // Sedes
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.bordo);
  doc.text('Nossas Sedes', PAGE_W / 2, y, { align: 'center' });
  y += 8;

  const sedes = [
    'Brasília — DF (Sede Principal)',
    'Goiânia — GO',
    'São Paulo — SP',
  ];

  sedes.forEach((s, i) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.charcoal);
    doc.text(s, PAGE_W / 2, y + i * 7, { align: 'center' });
  });

  y += 30;

  // Website
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.azul);
  doc.text('www.grupoarqueo.com.br', PAGE_W / 2, y, { align: 'center' });

  y += 12;

  // Closing quote
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.bordo);
  const finalQuote = doc.splitTextToSize('"Transformando patrimônio em legado — há 10 anos construindo o futuro da arqueologia no Brasil."', CONTENT_W - 40);
  doc.text(finalQuote, PAGE_W / 2, y, { align: 'center' });

  // Bottom bar
  doc.setFillColor(...COLORS.bordo);
  doc.rect(0, PAGE_H - 12, PAGE_W, 12, 'F');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.branco);
  doc.text('© 2026 Grupo Arqueo — Todos os direitos reservados', PAGE_W / 2, PAGE_H - 4, { align: 'center' });

  // Save
  doc.save('Grupo_Arqueo_Portfolio_Institucional.pdf');
}
