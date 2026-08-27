# Briefing — Página dedicada: Lipo de Papada em Oliveira/MG

## Contexto do projeto

Site institucional da Dra. Alexsandra Costa Morais Avelar, cirurgiã-dentista atuante em
Harmonização Orofacial, em Oliveira/MG. O site principal (`index.html`) já está publicado em
`https://www.draalexsandramorais.com.br/`. Esta tarefa é criar uma **página nova, dedicada
exclusivamente ao procedimento de lipoaspiração cervicofacial (lipo de papada)**, para reforçar
SEO local nesse termo específico — hoje o site só menciona o procedimento dentro da página única,
sem página própria, o que limita o posicionamento no Google para essa busca.

## Objetivo da página

Ranquear organicamente e servir como página de destino de campanhas pagas (Google Ads já está
rodando, apontando temporariamente para a home) para as buscas:

- "lipo de papada Oliveira"
- "lipoaspiração cervicofacial Oliveira"
- "lipo de papada Oliveira MG"
- "lipoaspiração cervicofacial Oliveira MG"

## URL e arquivo

Criar `lipo-de-papada-oliveira.html` na raiz do site (mesmo diretório do `index.html`), para ficar
acessível em `https://www.draalexsandramorais.com.br/lipo-de-papada-oliveira.html` (ou configurar
rota sem extensão, se o servidor permitir — o time ainda não configurou isso, então manter `.html`
por segurança).

Reaproveitar `style.css` e `script.js` já existentes no projeto — não duplicar CSS. Reaproveitar
também os scripts de rastreamento (ver seção Tracking).

## Identidade visual e tom

- Fontes já usadas no projeto: Poppins e Playfair Display (Google Fonts, já importadas no
  `index.html`).
- Tom: acolhedor, informativo, nunca promissor de resultado. Ver seção Compliance.
- Reaproveitar classes existentes do `style.css` sempre que possível (`.hero`, `.hero-button`,
  `.section-title`, `.highlight`, `.faq-item`, `.contact-container` etc.) em vez de criar CSS novo,
  para manter consistência visual com o restante do site.

## Estrutura de conteúdo da página

### 1. Hero
- H1 (literal, para SEO): **"Lipo de Papada em Oliveira/MG"**
- Subtítulo: menciona o nome técnico "lipoaspiração cervicofacial" na primeira frase, para cobrir
  os dois termos de busca logo no topo.
- CTA principal → WhatsApp: `https://wa.me/553799938516?text=[LP-Lipo] Olá! Gostaria de agendar uma avaliação sobre lipo de papada`
  (usar prefixo de rastreio `[LP-Lipo]`, diferente dos já usados no site — `[Site]` — e no Google
  Ads — `[Google Ads]` —, para saber que o lead veio especificamente desta landing page)

### 2. O que é o procedimento
Texto explicando lipoaspiração cervicofacial em linguagem simples: remoção de gordura localizada
na região do queixo/pescoço. Mencionar que pode incluir plicatura de platisma como procedimento
complementar quando indicado (ver nota regulatória abaixo — **não detalhar tecnicamente a técnica
cirúrgica em si**, manter em nível informativo/institucional).

### 3. Por que a avaliação vem antes de qualquer indicação
Seção reaproveitando o argumento já validado no roteiro de marketing: papada pode ter causas
diferentes (gordura localizada, flacidez, estrutura óssea), cada uma pede conduta diferente. Reforça
que nem todo caso é indicado para o procedimento — isso qualifica o lead e é compliance-safe.

### 4. Perguntas frequentes (reaproveitar/expandir FAQ)
Mínimo 4 perguntas, reaproveitando o padrão do `index.html` (`.faq-item` / `.faq-question` /
`.faq-answer`), adaptadas para o procedimento específico:
- Dói?
- Quanto tempo de recuperação?
- É para todo mundo?
- Precisa de internação / que tipo de anestesia é usada? (resposta: **anestesia local, sem
  sedação** — isso é fato confirmado, não omitir nem exagerar)

### 5. Sobre a profissional
Bloco curto reaproveitando o texto já usado na seção `#about` do `index.html`, adaptado:
"Cirurgiã-Dentista com formação avançada em Harmonização Orofacial. CRO-MG 65961."
**Não usar a palavra "especialista"** (ver Compliance).

### 6. Localização e contato
Reaproveitar o bloco de contato do `index.html` (endereço, WhatsApp, mapa incorporado). Mesmo
endereço: Av. Waldemar Fernal, 80, 4º andar, Oliveira-MG.

### 7. CTA final
Repetir botão de WhatsApp com o mesmo link rastreado da seção Hero.

## Regras de compliance (obrigatórias, não negociáveis)

O registro de especialidade em Harmonização Orofacial da Dra. Alexsandra está **em análise no
CRO-MG** (solicitado, ainda não concluído). Por isso, em toda a página:

- **Nunca usar a palavra "especialista"** referindo-se à profissional. Usar alternativas como
  "atuante em Harmonização Orofacial", "com formação avançada em Harmonização Orofacial",
  "profissional capacitada".
- **Nunca usar "Harmonização Facial" como nome da especialidade** — o termo tecnicamente correto
  reconhecido pelo CFO é **"Harmonização Orofacial"**. É aceitável citar "harmonização facial"
  apenas como sinônimo popular/coloquial em textos de SEO, nunca como nome oficial da formação.
- **CRO correto: CRO-MG 65961** (não usar outro número — houve um erro de digitação corrigido
  anteriormente no projeto, atenção redobrada para não reintroduzi-lo).
- **Nenhuma promessa ou garantia de resultado.** Frases como "resultado definitivo", "elimina de
  vez", "garanta seu contorno perfeito" são proibidas.
- **Nenhuma imagem de antes/depois nesta página** (a galeria de antes/depois do site principal está
  atualmente comentada/desativada no `index.html` até haver autorização de uso de imagem
  específica para publicidade — manter essa mesma cautela aqui, não incluir nada do tipo).
- **Nenhuma menção a equipamento cirúrgico específico ou imagem durante o procedimento.**
- Sempre que mencionar a profissional pelo nome completo, incluir "CRO-MG 65961" próximo.
- O procedimento é feito **apenas com anestesia local, sem sedação** — isso pode e deve ser citado
  como fato tranquilizador na FAQ, mas sem transformar isso em promessa de ausência de desconforto.

## Tracking (reaproveitar do index.html)

Incluir no `<head>` os mesmos scripts já usados no `index.html`:

1. **Google Analytics 4** — GA4 measurement ID: `G-QD70VLMWGX`
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QD70VLMWGX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-QD70VLMWGX');
</script>
```

2. **Meta Pixel** — Pixel ID: `1679340406732759`
```html
<script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1679340406732759');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=1679340406732759&ev=PageView&noscript=1"/></noscript>
```

## SEO técnico

- `<title>`: "Lipo de Papada em Oliveira/MG | Dra. Alexsandra Morais"
- `<meta name="description">`: mencionar "lipo de papada" e "lipoaspiração cervicofacial" e
  "Oliveira" na mesma frase, até ~155 caracteres.
- Open Graph tags (title, description, image, url) seguindo o mesmo padrão do `index.html`.
- Adicionar dados estruturados **schema.org** tipo `MedicalProcedure` ou `MedicalBusiness`
  (o `index.html` atual não tem schema nenhum — se o Claude Code for adicionar, pode aplicar em
  ambas as páginas).
- H1 único na página, contendo literalmente "Lipo de Papada" e, no primeiro parágrafo,
  "lipoaspiração cervicofacial" — os dois termos, popular e técnico, devem aparecer no topo.

## Após criar a página — pendências de infraestrutura (fora do escopo do código, mas relevante)

1. Adicionar a nova URL ao `sitemap.xml` da raiz do site.
2. Solicitar indexação manual da nova URL no Google Search Console.
3. Atualizar o Google Ads para apontar o sitelink/destino da campanha para esta nova página em vez
   da home, quando estiver publicada.
4. Considerar link de menu no `index.html` apontando para esta página (atualmente o menu não tem
   esse link).

## Dados de contato e identidade (referência rápida)

- Nome: Dra. Alexsandra Costa Morais Avelar
- CRO: CRO-MG 65961
- Endereço: Av. Waldemar Fernal, 80, 4º andar, Oliveira-MG, CEP 35.540-000
- WhatsApp: (37) 99993-8516 → `https://wa.me/553799938516`
- E-mail: dra.alexsandramorais@gmail.com
- Instagram: https://www.instagram.com/dra.alexsandramorais/
- Facebook: https://www.facebook.com/dra.alexsandramorais
- Horário: Segunda a Sexta 9h-18h | Sábado 9h-13h
