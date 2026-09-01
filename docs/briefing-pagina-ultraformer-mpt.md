# Briefing — Página dedicada + card: Ultraformer MPT em Oliveira/MG

## Contexto do projeto

Site institucional da Dra. Alexsandra Costa Morais Avelar (`index.html`, já publicado em
`https://www.draalexsandramorais.com.br/`). Já existe uma página dedicada de referência criada
anteriormente: `lipo-de-papada-oliveira.html` — **use-a como modelo de estrutura, estilo e
compliance para este novo trabalho**, mantendo consistência total de identidade visual.

Esta tarefa tem duas partes:
1. Adicionar um card do Ultraformer MPT na grade de procedimentos do `index.html`.
2. Criar uma página nova dedicada: `ultraformer-mpt-oliveira.html`.

## Por que esta página existe

Diferente da lipo de papada (onde não há concorrência regional), o Ultraformer MPT já tem
referência forte em Divinópolis (uma profissional com centenas de avaliações). A estratégia de
diferenciação **não é autoridade — é conveniência geográfica**: "equipamento original, sem
precisar viajar até Divinópolis". Isso deve ser o eixo central do texto da página.

## Parte 1 — Card na grade de procedimentos do `index.html`

Adicionar um novo card na seção `#procedures`, na `procedures-grid`, junto aos já existentes
(Lipoaspiração Cervicofacial, Preenchimento Facial, Lábios, Toxina Botulínica, Bioestimuladores,
Harmonização das Orelhas). Adicionar como **segundo card**, logo após "Lipoaspiração
Cervicofacial" (mantendo lipo como destaque nº 1, já que é o carro-chefe atual).

```html
<div class="procedure-card">
    <i class="fas fa-wave-square"></i>
    <h3>Ultraformer MPT</h3>
    <p>Ultrassom microfocado para lifting facial sem cirurgia, com equipamento original — sem
    precisar viajar para outra cidade.</p>
</div>
```

(Ícone sugerido: `fa-wave-square` para remeter a ondas de ultrassom. Se não estiver disponível no
pacote Font Awesome já carregado no projeto, usar `fa-magic` ou `fa-sparkles` como alternativa.)

## Parte 2 — Nova página: `ultraformer-mpt-oliveira.html`

Reaproveitar `style.css`, `script.js`, fontes (Poppins/Playfair Display) e os mesmos scripts de
tracking já usados no `index.html` e na página de lipo — não duplicar CSS, não criar identidade
visual nova.

### Tracking (idêntico ao já usado nas outras páginas)

```html
<!-- Google tag (gtag.js) - GA4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QD70VLMWGX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-QD70VLMWGX');
</script>
<!-- End Google tag -->

<!-- Meta Pixel Code -->
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

### Link de WhatsApp — prefixo de rastreio específico desta página

```
https://wa.me/553799938516?text=[LP-Ultraformer] Olá! Gostaria de agendar uma avaliação sobre Ultraformer MPT
```

Use este link em todos os CTAs da página (hero e final).

### Estrutura de conteúdo

**1. Hero**
- H1 (literal, para SEO): **"Ultraformer MPT em Oliveira/MG"**
- Subtítulo: mencionar "ultrassom microfocado" e "equipamento original" na primeira frase.
- Eixo central da mensagem: não é preciso viajar para outra cidade para fazer com equipamento
  original.
- CTA principal → link de WhatsApp acima.

**2. O que é o procedimento**
Explicar em linguagem simples: Ultraformer MPT é um aparelho de ultrassom microfocado (HIFU) que
estimula a produção natural de colágeno nas camadas profundas da pele, promovendo efeito de
firmeza e lifting facial sem cirurgia. **O resultado é progressivo, ao longo de semanas — nunca
afirmar efeito imediato.**

**3. Por que fazer aqui, e não em outra cidade**
Seção central da página, diferente do padrão usado na de lipo. Argumentos:
- Equipamento original Classys, com registro ANVISA (não é aparelho genérico).
- Sem necessidade de deslocamento até Divinópolis ou Belo Horizonte.
- Avaliação individual antes de qualquer indicação.

**4. Perguntas frequentes** (reaproveitar padrão `.faq-item` do `index.html`)
Mínimo 4 perguntas:
- Funciona mesmo sem cirurgia?
- Dói?
- Quantas sessões são necessárias / quanto tempo dura o resultado?
- É o mesmo equipamento usado nas grandes clínicas de referência?

**5. Sobre a profissional**
Reaproveitar o texto padrão já usado nas outras páginas: "Cirurgiã-Dentista com formação avançada
em Harmonização Orofacial. CRO-MG 65961." **Não usar "especialista".**

**6. Localização e contato**
Reaproveitar o bloco de contato do `index.html` (endereço, WhatsApp, mapa incorporado).

**7. CTA final**
Repetir botão de WhatsApp com o link rastreado.

## Regras de compliance (obrigatórias — idênticas às já aplicadas na página de lipo)

- **Nunca usar a palavra "especialista"** — registro de especialidade em HOF ainda em análise no
  CRO-MG. Usar "atuante em Harmonização Orofacial", "com formação avançada em Harmonização
  Orofacial".
- **CRO correto: CRO-MG 65961.**
- **Nenhuma promessa de resultado.** Frases como "elimina a flacidez", "resultado garantido" são
  proibidas.
- **Nunca afirmar resultado imediato** — o efeito do Ultraformer é progressivo, isso deve estar
  explícito na página, não é falha de compliance omitir, é erro factual afirmar o contrário.
- **Nenhuma imagem de antes/depois** sem autorização específica de uso publicitário.
- **Afirmações sobre "equipamento original"** devem ser factualmente sustentáveis — não usar como
  ataque direto a concorrentes nomeados, apenas como informação positiva sobre o próprio serviço.
- Sempre que citar o nome completo da profissional, incluir CRO-MG 65961 por perto.

## SEO técnico

- `<title>`: "Ultraformer MPT em Oliveira/MG | Dra. Alexsandra Morais"
- `<meta name="description">`: mencionar "Ultraformer MPT", "ultrassom microfocado" e "Oliveira"
  na mesma frase, até ~155 caracteres.
- Open Graph tags seguindo o mesmo padrão das outras páginas do site.
- Reaproveitar o mesmo padrão de dados estruturados (schema.org `BreadcrumbList`) já implementado
  na página de lipo, adaptando o segundo item da trilha para "Ultraformer MPT em Oliveira/MG" e a
  URL para `ultraformer-mpt-oliveira.html`.
- H1 único, contendo literalmente "Ultraformer MPT" e "Oliveira".

## Após criar a página — pendências fora do escopo do código

1. Adicionar a nova URL ao `sitemap.xml` da raiz do site.
2. Solicitar indexação manual da nova URL no Google Search Console.
3. Cadastrar "Ultraformer MPT" como serviço no Google Business Profile (ação separada, feita
   diretamente no painel do Google, não no código do site).
4. Ao configurar a campanha de Google Ads específica para Ultraformer, apontar o destino para esta
   nova página.

## Dados de contato e identidade (referência rápida)

- Nome: Dra. Alexsandra Costa Morais Avelar
- CRO: CRO-MG 65961
- Endereço: Av. Waldemar Fernal, 80, 4º andar, Oliveira-MG, CEP 35.540-000
- WhatsApp: (37) 99993-8516
- GA4: G-QD70VLMWGX
- Meta Pixel: 1679340406732759
