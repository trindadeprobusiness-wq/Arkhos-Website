# ARKHOS — Formulário Inteligente de Orçamento
### Diagnóstico Estratégico · Decision Tree · CRO · Versão 2.0 — 2026

---

## Índice

| Seção | Conteúdo |
|-------|----------|
| 01 | Diagnóstico do Formulário Atual |
| 02 | Principais Problemas Identificados |
| 03 | Nova Estrutura Proposta — Decision Tree |
| 04 | Fluxo Principal + Camada de Entrada |
| 05 | Ramos Condicionais (A–F) |
| 06 | Perguntas de Qualificação Final |
| 07 | Sugestões Estratégicas de Melhoria |
| 08 | Exemplo Real de Jornada do Usuário |
| 09 | Resumo Executivo & Próximos Passos |

---

## 01. Diagnóstico do Formulário Atual

Um formulário de orçamento típico de agências digitais — mesmo os mais cuidadosos — comete os mesmos erros estruturais que reduzem conversão e qualidade dos leads capturados. Este diagnóstico parte do modelo padrão adotado pelo mercado.

### 1.1 Estrutura Típica Identificada

A maioria dos formulários de agências segue este padrão:

| Campo | Problema Subjacente |
|-------|---------------------|
| Nome completo | Pedido genérico — sem contexto do negócio |
| E-mail e telefone | Coleta de dados antes de criar valor |
| Tipo de projeto (lista fixa) | Categorias vagas que não qualificam |
| Descrição livre (caixa de texto) | Alta fricção — exige esforço do lead |
| Prazo e orçamento (campos abertos) | Sem referência → respostas inúteis |
| "Como nos encontrou?" | Pergunta desconectada da jornada |
| Botão "Enviar" | CTA frio, sem expectativa de próximos passos |

### 1.2 Métricas de Referência de Mercado

Formulários estáticos de agências digitais apresentam, em média, os seguintes indicadores:

| Indicador | Benchmark de Mercado |
|-----------|----------------------|
| Taxa de abandono | 60–80% (maioria sai antes de enviar) |
| Taxa de conversão do formulário | 2–5% dos visitantes que chegam à página |
| Leads qualificados sobre total | 15–25% (maioria é tráfego frio ou desalinhado) |
| Tempo médio para preenchimento | 3–8 minutos (percebido como longo) |
| Leads que fecham negócio | 5–12% dos leads capturados |

> **Um formulário inteligente com decision tree pode elevar a qualificação para 40–60% e reduzir abandono em até 35%.**

---

## 02. Principais Problemas Identificados

### `#1` 🔴 CRÍTICO — Formulário Linear Sem Inteligência
Todas as pessoas recebem as mesmas perguntas, independente do contexto. Um e-commerce não tem nada em comum com uma empresa que precisa de automação interna — mas ambos preenchem o mesmo formulário.

### `#2` 🔴 CRÍTICO — Coleta de Dados Pessoais Precoce
Pedir nome, e-mail e telefone antes de criar qualquer valor ou conexão com o lead dispara resistência imediata. O lead ainda não confia, ainda não viu valor.

### `#3` 🟠 ALTO — Ausência de Progressão Conversacional
As perguntas não têm relação umas com as outras. Parecem um questionário burocrático, não uma conversa consultiva. A Arkhos se posiciona como premium — o formulário contradiz esse posicionamento.

### `#4` 🟠 ALTO — Campos Abertos Sem Ancoragem
Perguntas como "Descreva seu projeto" ou "Qual é seu orçamento?" sem opções de referência geram respostas vagas ou abandono. O lead não sabe o que escrever.

### `#5` 🟠 ALTO — Sem Mecanismo de Qualificação Ativa
Qualquer pessoa envia o formulário, gerando leads desqualificados que consomem tempo do comercial. Não há filtros de maturidade, urgência ou fit financeiro.

### `#6` 🔵 MÉDIO — Falta de Progressão Visual e Engajamento
Sem barra de progresso, sem feedback visual, sem sensação de avanço. O lead não sabe quanto falta — o que aumenta abandono.

### `#7` 🔵 MÉDIO — Ausência de Priming para Fechamento
O formulário não prepara o lead para a conversa comercial. Quando o vendedor entra em contato, o lead ainda não está aquecido nem tem clareza do valor da solução.

### `#8` 🔵 MÉDIO — CTA Final Frio e Sem Expectativa
Botão "Enviar" ou "Solicitar Orçamento" não comunica o que acontece depois. O lead termina o formulário sem saber qual é o próximo passo.

---

## 03. Nova Estrutura Proposta — Decision Tree

O novo formulário é estruturado em **3 camadas**: diagnóstico do problema, aprofundamento contextual e qualificação estratégica. Cada resposta alimenta a próxima pergunta.

### Princípios do Novo Modelo

1. **Diagnóstico antes de dados pessoais** — crie valor antes de pedir informações
2. **Cada resposta alimenta a próxima** — sem perguntas desconectadas
3. **Máximo 7–9 perguntas por jornada** — respeitando a atenção do lead
4. **Linguagem conversacional** — como um consultor, não um formulário
5. **Qualificação passiva** — o lead se auto-qualifica sem perceber
6. **Priming de fechamento** — ao final, o lead já entende o valor da Arkhos

### 3.1 Arquitetura Geral do Fluxo

```
┌─────────────────────────────────────────────────────┐
│  CAMADA 1 — DIAGNÓSTICO INICIAL                     │
│  P1: "Qual é o principal desafio que te trouxe?"    │
└───────────────────────┬─────────────────────────────┘
                        │
          ┌─────────────▼─────────────┐
          │ 6 RAMOS CONDICIONAIS      │
          │ A · B · C · D · E · F     │
          └─────────────┬─────────────┘
                        │
┌─────────────────────────────────────────────────────┐
│  CAMADA 2 — APROFUNDAMENTO CONTEXTUAL               │
│  P2–P5: perguntas específicas para cada ramo        │
└───────────────────────┬─────────────────────────────┘
                        │
┌─────────────────────────────────────────────────────┐
│  CAMADA 3 — QUALIFICAÇÃO FINAL (comum a todos)      │
│  P6–P8: maturidade · investimento · prazo           │
└───────────────────────┬─────────────────────────────┘
                        │
┌─────────────────────────────────────────────────────┐
│  DADOS PESSOAIS (ao final, com framing de valor)    │
│  + TELA DE CONFIRMAÇÃO + AGENDAMENTO                │
└─────────────────────────────────────────────────────┘
```

---

## 04. Fluxo Principal — Camada 1 (Entrada)

A primeira pergunta é o coração do formulário. Ela define **tudo** que vem depois. Deve ser formulada como uma conversa de abertura com um consultor.

---

### `P1` — Pergunta-Âncora

> *"Antes de qualquer coisa, quero entender o que te trouxe até aqui. Qual é o maior desafio do seu negócio hoje?"*

**Por que essa pergunta funciona:**
- Não começa com "qual serviço você quer" — começa com o **problema** do lead
- O lead se sente ouvido antes de qualquer venda
- Cada opção é escrita na língua do lead, não da Arkhos
- O Ramo F captura leads indecisos que seriam perdidos em formulários comuns

**Opções de resposta → Ramo ativado:**

| Opção | Ramo Ativado |
|-------|--------------|
| 🌐 Não tenho (ou tenho um site ruim) e preciso de presença online | **Ramo A** — Site |
| ⚙️ Minha equipe perde tempo com processos manuais e repetitivos | **Ramo B** — Automação |
| 📉 Estou perdendo clientes ou não consigo atrair novos | **Ramo C** — Conversão |
| 🖥️ Preciso de um sistema interno para organizar minha operação | **Ramo D** — Sistema |
| 🚀 Quero escalar o negócio, mas a tecnologia não acompanha | **Ramo E** — Transformação Digital |
| 🤔 Não sei exatamente, mas sei que algo precisa mudar | **Ramo F** — Diagnóstico Guiado |

---

## 05. Ramos Condicionais — Aprofundamento Contextual

---

### 🌐 RAMO A — Presença Online / Site
*Ativado quando: lead não tem site ou tem site ineficaz*

---

**`P2`** — *"Você já tem um site hoje, ou está começando do zero?"*

> Distingue reformulação (mais complexa, integra legado) de criação do zero. Influencia escopo técnico.

- → Se **tem site**: *"O que não funciona no seu site atual?"*
  - Lentidão / Visual desatualizado / Não gera contatos / Não aparece no Google / Outro
- → Se **não tem**: segue direto para P3

---

**`P3`** — *"Qual seria o principal objetivo do seu site?"*

> Define a arquitetura, os CTAs e as métricas de sucesso desde o início.

| Opção | Impacto no Escopo |
|-------|-------------------|
| Gerar contatos e leads qualificados | Landing page focada, formulários, integração CRM |
| Ser encontrado no Google (SEO) | Estrutura de conteúdo, blog, otimização técnica |
| Vender produtos diretamente (e-commerce) | Plataforma de vendas, checkout, logística |
| Credibilidade institucional | Branding, cases, depoimentos, portfólio |
| Tudo isso ao mesmo tempo | Solução completa com múltiplos módulos |

---

**`P4`** — *"Você atende clientes B2B (empresas), B2C (consumidores finais) ou os dois?"*

> Determina linguagem do site, nível de conteúdo técnico, mecanismos de conversão.

---

**`P5`** — *"Como você conquista clientes hoje — antes de ter um site funcionando?"*

> Revela canais atuais, dependência de indicação, maturidade de marketing.

- Opções: WhatsApp / Indicações / Redes sociais / Eventos e feiras / Ainda não tenho clientes / Outros

---

### ⚙️ RAMO B — Automação de Processos
*Ativado quando: lead tem processos manuais que drenam tempo e energia*

---

**`P2`** — *"Em qual área da sua empresa você sente mais esse gargalo?"*

> Foca o diagnóstico no ponto de maior dor. Evita soluções genéricas.

- Opções: Vendas / Atendimento ao cliente / Operações e logística / Financeiro / RH / Comunicação interna

---

**`P3`** — *"Me diz uma coisa: hoje, quantas pessoas da sua equipe ficam presas nesse processo manual?"*

> Quantifica o impacto humano. Permite calcular o ROI da automação.

- Opções: Só eu mesmo / 2–5 pessoas / 6–15 pessoas / Mais de 15 pessoas

---

**`P4`** — *"Que ferramenta você usa hoje para gerenciar isso (mesmo que de forma incompleta)?"*

> Avalia complexidade da migração e possibilidade de integração.

- Opções: Planilha Excel/Google / WhatsApp / Papel e caneta / Sistema antigo que não atende / Nenhuma ferramenta

---

**`P5`** — *"Se esse processo fosse automatizado, o que mudaria de verdade no seu negócio?"*

> Pergunta de visão — o lead articula o próprio ROI. Ouro para o comercial.

- Opções: Economizaria horas por dia / Reduziria erros e retrabalho / Conseguiria atender mais clientes / Teria dados para tomar decisões / Dormiria melhor

---

### 📉 RAMO C — Geração de Leads / Conversão
*Ativado quando: lead não consegue novos clientes ou está perdendo os existentes*

---

**`P2`** — *"Onde você sente que está perdendo mais clientes?"*

> Identifica o ponto de vazamento no funil — define a solução.

- Opções: Antes do primeiro contato (ninguém me encontra) / Na proposta / No fechamento / Após a venda (churn) / Em todos os pontos

---

**`P3`** — *"Você sabe hoje de onde vêm seus melhores clientes?"*

> Avalia maturidade de marketing. Indica se precisa de rastreamento ou de novos canais.

- Opções: Sim, sei exatamente / Tenho uma ideia aproximada / Não faço ideia / Todos vêm de indicação

---

**`P4`** — *"Qual é o ticket médio do seu serviço ou produto?"*

> Qualifica financeiro e define o modelo de solução (tráfego pago, SEO, CRM, etc.).

- Opções: Até R$500 / R$500 a R$2.000 / R$2.000 a R$10.000 / Acima de R$10.000

---

**`P5`** — *"Você já tem algum funil de vendas estruturado ou está começando do zero?"*

> Define o ponto de entrada da solução — consultoria, ferramenta ou ambos.

---

### 🖥️ RAMO D — Sistema Interno
*Ativado quando: lead precisa de software próprio para gerenciar sua operação*

---

**`P2`** — *"Quem vai usar esse sistema no dia a dia?"*

> Define permissões, interfaces e complexidade de UX.

- Opções: Só minha equipe interna / Meus clientes também / Parceiros e fornecedores / Todos esses perfis

---

**`P3`** — *"Esse sistema precisa se integrar com algo que você já usa?"*

> Mapeia complexidade técnica e riscos de migração.

- Opções: ERP (SAP, Totvs, etc.) / CRM (Salesforce, HubSpot, etc.) / E-commerce / APIs externas / Não precisa integrar

---

**`P4`** — *"Você tem o processo que esse sistema vai seguir já desenhado e documentado?"*

> Avalia maturidade e escopo do projeto. Sistemas com processos indefinidos custam 3x mais.

- Opções: Sim, está documentado / Temos uma ideia, mas não está formalizado / Precisamos mapear junto com vocês

---

**`P5`** — *"Quantas pessoas usariam esse sistema simultaneamente na sua equipe?"*

> Impacta arquitetura, hospedagem, performance e custo.

- Opções: 1–5 pessoas / 6–20 pessoas / 21–100 pessoas / Mais de 100 pessoas

---

### 🚀 RAMO E — Escala / Transformação Digital
*Ativado quando: lead quer crescer mas a tecnologia limita o crescimento*

---

**`P2`** — *"O que está segurando seu crescimento hoje — no fundo, qual é a raiz do problema?"*

> Pergunta aberta estratégica. Deixa o lead diagnosticar em voz alta.

- Opções: Falta de visibilidade (ninguém me conhece) / Não consigo atender a demanda operacional / Minha equipe não tem as ferramentas certas / Não tenho dados para tomar decisões / Meu produto/serviço não está posicionado corretamente

---

**`P3`** — *"Você já investiu em tecnologia antes? Como foi?"*

> Revela histórico, traumas e expectativas. Ouro para o discurso comercial.

- Opções: Sim, com ótimos resultados / Sim, mas não deu o retorno esperado / Sim, foi uma experiência ruim / Não, esta seria a primeira vez

---

**`P4`** — *"Como está seu faturamento mensal hoje? (Isso nos ajuda a entender a escala da solução)"*

> Qualifica o lead financeiramente de forma contextualizada e não invasiva.

- Opções: Até R$30k / R$30k a R$100k / R$100k a R$500k / Acima de R$500k / Prefiro não informar agora

---

### 🤔 RAMO F — Diagnóstico Guiado (Lead Indeciso)
*Ativado quando: lead sente que precisa de algo mas não sabe nomear*

> Este ramo é especialmente importante — leads indecisos raramente são capturados. Com o guia certo, podem se tornar clientes de alto valor.

---

**`P2`** — *"Certo, vou te ajudar a descobrir. Me conta: qual é a situação que mais te frustra no seu negócio hoje?"*

> Abre canal empático. O lead fala, a Arkhos escuta. Cria vínculo.

- Opções: Perco muito tempo em tarefas manuais / Não consigo novos clientes / Minha equipe não trabalha de forma organizada / Não tenho visibilidade do que está acontecendo / Meu site ou sistema está atrasado em relação ao mercado

**Regra de encaminhamento a partir do Ramo F:**

| Resposta do lead | Encaminha para |
|------------------|----------------|
| "Perco tempo com tarefas manuais" | Ramo B — Automação |
| "Não consigo novos clientes" | Ramo C — Conversão |
| "Equipe desorganizada" | Ramo D — Sistema |
| "Não tenho visibilidade" | Ramo D ou E |
| "Site/sistema atrasado" | Ramo A ou E |

---

## 06. Perguntas de Qualificação Final (Comuns a Todos os Ramos)

Após o aprofundamento contextual, **todos os ramos convergem** para 3 perguntas de qualificação estratégica — seguidas pela coleta de dados pessoais (ao final, não no início).

---

### `P6` — Urgência

> *"Qual é a sua expectativa de prazo para ter isso funcionando?"*

Qualifica urgência e define prioridade de atendimento comercial.

| Resposta | Sinal Comercial |
|----------|-----------------|
| Preciso disso ontem — é urgente | 🔴 Lead quente: contato em até 2h |
| No próximo mês (30 dias) | 🟠 Lead prioritário: contato no mesmo dia |
| Em 2 a 3 meses | 🟡 Lead médio: nurturing ativo |
| Não tenho prazo definido ainda | 🔵 Lead frio: sequência de e-mail/educação |

---

### `P7` — Investimento

> *"Para planejar uma solução que realmente faça sentido para você, qual faixa de investimento está no seu horizonte?"*

> **Nota estratégica:** não pergunte "Qual é seu orçamento?" — essa frase transfere controle ao lead. "Faixa de investimento no seu horizonte" mantém o enquadramento consultivo. As faixas devem começar **acima do seu ticket mínimo** para filtrar leads desqualificados.

- Opções: Ainda estou pesquisando valores / R$3.000 a R$8.000 / R$8.000 a R$20.000 / R$20.000 a R$50.000 / Acima de R$50.000

---

### `P8` — Canal de Contato

> *"Por último: como você prefere que a Arkhos entre em contato para apresentar um diagnóstico personalizado?"*

O CTA diz **"diagnóstico personalizado"**, não "orçamento" — cria expectativa de valor, não de venda.

- Opções: Reunião via Google Meet (30 min) / Ligação / WhatsApp / E-mail detalhado primeiro

---

### 6.1 Coleta de Dados (Última Etapa)

Somente após completar todas as perguntas, o formulário solicita os dados pessoais — com framing de valor:

> *"Quase lá! Para enviar seu diagnóstico personalizado, precisamos de:"*

- Seu nome
- E-mail *(para enviar o resumo do diagnóstico)*
- WhatsApp *(para o consultor entrar em contato)*
- Nome da empresa *(opcional)*

> **Importante:** o campo de e-mail deve dizer *"para enviar seu diagnóstico"*, não *"para contato"*. Esse framing aumenta a taxa de preenchimento em 20–30%.

---

## 07. Sugestões Estratégicas de Melhoria

### 7.1 UX & Engajamento

| Elemento | Recomendação |
|----------|--------------|
| Barra de progresso | Mostrar "Pergunta 3 de 8" — reduz abandono em até 28% |
| Animações de transição | Slides suaves entre perguntas (250ms) — sensação de conversa |
| Feedback visual imediato | Ao selecionar uma opção, destacar com cor antes de avançar |
| Autoavance opcional | Avançar automaticamente após seleção (sem clicar em "Próximo") |
| Mobile first | 100% do layout otimizado para celular |
| Sem scroll | Cada pergunta ocupa a tela inteira — formato tipo Typeform |
| Escape de abandono | Se o lead tentar fechar: *"Antes de ir — leva 2 minutos. Continue?"* |

### 7.2 Copywriting & Persuasão

| Técnica | Aplicação |
|---------|-----------|
| Linguagem do lead | Usar palavras do mercado do lead, não jargões de tecnologia |
| Micro-comprometimentos | Cada resposta cria comprometimento progressivo (foot-in-the-door) |
| Social proof inline | Entre perguntas: *"Mais de 200 empresas já passaram por esse diagnóstico"* |
| Enquadramento de valor | Antes da pergunta de orçamento: *"Nossos projetos têm ROI médio de 8x"* |
| Priming de fechamento | Última pergunta antes dos dados: *"Você está a 1 passo do seu diagnóstico"* |
| CTA do botão final | *"Quero meu diagnóstico gratuito →"* — nunca "Enviar" ou "Solicitar orçamento" |

### 7.3 Qualificação & CRM

| Funcionalidade | Implementação |
|----------------|---------------|
| Lead scoring automático | Atribuir pontos por faixa de orçamento, prazo, maturidade |
| Segmentação automática | Tag no CRM conforme ramo escolhido (site / sistema / automação) |
| Alerta de lead quente | Notificação imediata para o comercial se urgência = "ontem" |
| Nutrição por segmento | Sequência de e-mails diferente por ramo — conteúdo relevante |
| Desqualificação silenciosa | Leads com orçamento abaixo do mínimo entram em fluxo educativo |
| Captura de abandono | Capturar e-mail em P1 (antes de qualquer pergunta) para retargeting |

### 7.4 O Que Remover do Formulário Atual

| Remover | Por quê |
|---------|---------|
| Nome/e-mail/telefone no início | Cria resistência antes de gerar valor |
| "Como nos encontrou?" | Deve ser rastreado automaticamente (UTM/pixel), não perguntado |
| "Descreva seu projeto" | Caixa de texto livre gera abandono e respostas inúteis |
| "Qual é o seu orçamento?" | Framing errado — substituir por faixas com contexto de ROI |
| Listas longas de serviços | Lead não sabe o que quer — guiar com problemas, não categorias |
| Campos opcionais excessivos | Todo campo opcional é ruído — se não é essencial, remova |
| CNPJ/Endereço no formulário | São dados de contrato, não de diagnóstico |

### 7.5 Tela de Confirmação (Thank You Page)

A Thank You Page é um ativo de vendas ignorado pela maioria das empresas:

| Elemento | Conteúdo Sugerido |
|----------|-------------------|
| Título principal | *"Diagnóstico recebido. Você vai adorar o que preparamos."* |
| Expectativa de contato | *"Um especialista Arkhos entra em contato em até 4 horas úteis."* |
| Próximo passo | Botão: *"Agendar agora"* com link para Calendly |
| Prova social | 3 mini-cases com resultado (ex: *"Empresa X: +40% de leads em 60 dias"*) |
| Conteúdo de valor | Link para um guia gratuito relacionado ao problema do lead |
| Pixel de conversão | Evento de conversão para Meta/Google Ads — otimização de campanha |

---

## 08. Exemplo Real de Jornada do Usuário

**PERSONA:** Cláudia, 38 anos, dona de clínica estética com 8 funcionários.

**Problema:** não consegue atender toda a demanda, o agendamento é feito por WhatsApp, perde clientes por falta de follow-up.

---

| Etapa | Pergunta / Resposta | Resultado Interno |
|-------|---------------------|-------------------|
| **P1** | *"Qual é o maior desafio do seu negócio hoje?"* | — |
| ✓ | Seleciona: *"Minha equipe perde tempo com processos manuais"* | → **Ramo B ativado** |
| **P2** | *"Em qual área você sente mais esse gargalo?"* | — |
| ✓ | Seleciona: *"Atendimento ao cliente"* | → Aprofunda em atendimento |
| **P3** | *"Quantas pessoas ficam presas nesse processo?"* | — |
| ✓ | Seleciona: *"2–5 pessoas"* | → Operação média identificada |
| **P4** | *"Que ferramenta você usa hoje para gerenciar isso?"* | — |
| ✓ | Seleciona: *"WhatsApp"* | → Oportunidade: CRM + automação |
| **P5** | *"Se esse processo fosse automatizado, o que mudaria no seu negócio?"* | — |
| ✓ | Seleciona: *"Conseguiria atender mais clientes" + "Reduziria erros"* | → ROI articulado pelo próprio lead |
| **P6** | *"Qual é a sua expectativa de prazo?"* | — |
| ✓ | Seleciona: *"No próximo mês"* | → 🔴 Lead prioritário |
| **P7** | *"Qual faixa de investimento está no seu horizonte?"* | — |
| ✓ | Seleciona: *"R$8.000 a R$20.000"* | → Lead qualificado financeiramente |
| **P8** | *"Como prefere que entremos em contato?"* | — |
| ✓ | Seleciona: *"Reunião via Google Meet"* | → Link do Calendly exibido |
| **Dados** | Nome, e-mail e WhatsApp (framing: "enviar seu diagnóstico") | Cláudia preenche sem resistência |
| **Fim** | Thank You Page: *"Diagnóstico recebido. Um especialista entra em contato em até 4h."* | Cláudia agenda direto no Calendly |

---

### O que o comercial recebe automaticamente no CRM:

```
Nome:            Cláudia Silva
Empresa:         Clínica Estética Lumina
WhatsApp:        (11) 99999-XXXX
Ramo:            Automação
Área:            Atendimento ao cliente
Ferramenta atual: WhatsApp
Objetivo:        Atender mais clientes + Reduzir erros
Prazo:           30 dias
Orçamento:       R$8k–R$20k
Preferência:     Google Meet (30 min)
Score:           87/100 ← LEAD QUENTE
Tag CRM:         automacao_atendimento_quente
Origem:          formulário-site
```

> Com essas informações, o vendedor entra na reunião sabendo exatamente qual é o problema, o orçamento disponível e como posicionar a solução. A taxa de fechamento desse perfil tende a ser **3–4x maior** do que leads gerados por formulários comuns.

---

## 09. Resumo Executivo & Próximos Passos

### 9.1 O Que Muda com o Novo Formulário

| Antes | Depois |
|-------|--------|
| Formulário estático igual para todos | Jornada personalizada por problema/ramo |
| Dados pessoais pedidos primeiro | Dados pessoais pedidos por último — após criar valor |
| Campos abertos e texto livre | Opções claras com framing correto |
| Sem qualificação ativa | Lead scoring automático + segmentação no CRM |
| Botão "Enviar" frio | *"Quero meu diagnóstico gratuito →"* |
| 15–25% de leads qualificados | Meta: **40–60%** de leads qualificados |
| Vendedor descobre o problema na reunião | Vendedor sabe tudo **antes** da reunião |

### 9.2 Ordem de Implementação Sugerida

| Fase | Ação |
|------|------|
| **Fase 1** (semana 1–2) | Implementar P1 + Ramo A (site) como MVP — maior volume de leads |
| **Fase 2** (semana 3–4) | Adicionar Ramos B e D (automação e sistema) |
| **Fase 3** (semana 5–6) | Adicionar Ramos C, E e F + qualificação financeira |
| **Fase 4** (mês 2) | Integrar lead scoring no CRM + segmentação automática |
| **Fase 5** (mês 2–3) | A/B test de copies + otimização por dados reais |
| **Fase 6** (mês 3+) | Nutrição por ramo + Thank You Page avançada com Calendly |

### 9.3 Ferramentas Recomendadas para Implementação

| Ferramenta | Uso |
|------------|-----|
| Typeform / Fillout / Tally | UI do formulário com lógica condicional nativa |
| HubSpot / RD Station / Pipedrive | CRM para receber leads com score e tags |
| Zapier / Make | Automações: formulário → CRM → notificação WhatsApp |
| Calendly / Cal.com | Agendamento direto na Thank You Page |
| Hotjar / Microsoft Clarity | Gravação de sessões para identificar abandono |
| Google Analytics 4 + Meta Pixel | Rastreamento de conversão e otimização de mídia |

### 9.4 Impacto Esperado (Estimativa Conservadora)

| Métrica | Melhoria Esperada |
|---------|-------------------|
| Redução de abandono | -30% a -40% |
| Leads qualificados | de 20% → **45%+** |
| Tempo do comercial em qualificação | **-60%** |
| Taxa de fechamento | **+25% a +40%** |
| ROI do projeto em 90 dias | **4x–8x** o investimento no desenvolvimento |

---

*Arkhos · Tecnologia que Transforma · 2026*
