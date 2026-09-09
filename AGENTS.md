# Contexto e padrão de trabalho para agentes

Estas regras são obrigatórias para qualquer agente, independentemente do modelo utilizado, antes de iniciar qualquer alteração neste projeto.

## 1. Toda tarefa deve possuir uma Issue

Nenhuma alteração deve ser implementada sem uma Issue correspondente no GitHub.

Cada Issue deve ser classificada em exatamente uma destas categorias:

- **Correção** — correção de bugs, erros, regressões ou comportamentos incorretos.
- **Melhoria** — evolução ou aprimoramento de funcionalidades, interface, performance, arquitetura, documentação ou processos existentes.
- **Nova função** — criação de uma nova funcionalidade ou capacidade que ainda não existe no sistema.

A Issue deve deixar claro, sempre que aplicável:

- objetivo da tarefa;
- problema ou necessidade;
- escopo;
- critérios de aceite;
- riscos ou restrições relevantes.

## 2. Implementações devem ser feitas através de Pull Requests

Alterações destinadas ao projeto não devem ser aplicadas diretamente na branch principal, salvo bootstrap técnico inevitável do próprio repositório.

Utilize Pull Requests para:

- implementação;
- revisão;
- validação;
- integração;
- gerenciamento das entregas;
- gerenciamento dos deploys relacionados às alterações.

Sempre que possível, cada Pull Request deve possuir escopo bem definido e estar relacionado a uma Issue específica.

## 3. Todo Pull Request deve mencionar sua Issue

A descrição do Pull Request deve citar explicitamente a Issue relacionada.

Exemplo:

`Relacionado à #123`

Quando apropriado, utilize uma referência que permita o fechamento automático da Issue após o merge, como:

`Closes #123`

## 4. Estrutura obrigatória da descrição do Pull Request

Todo Pull Request deve apresentar, no mínimo, as informações abaixo.

### Issue relacionada

Indicar claramente a Issue que originou a alteração.

### O que mudou

Explicar de forma objetiva:

- arquivos ou áreas principais modificadas;
- comportamento anterior;
- novo comportamento;
- decisões técnicas relevantes.

### Como foi validado

Registrar as validações realmente executadas, por exemplo:

- testes automatizados;
- testes manuais;
- lint;
- build;
- validações visuais;
- testes de integração;
- testes de regressão;
- outros procedimentos pertinentes.

Em mudanças de interface, registrar também quais estados de carregamento, feedback, progresso, transições, entrada/saída, motion gaps e reduced motion foram verificados.

Nunca declarar uma validação como concluída se ela não tiver sido efetivamente executada.

### Riscos e limitações

Documentar:

- possíveis efeitos colaterais;
- limitações conhecidas;
- cenários ainda não cobertos;
- dependências;
- impactos de compatibilidade;
- riscos de deploy ou regressão.

Caso não existam riscos conhecidos relevantes, registrar isso explicitamente.

### Próximos passos

Informar:

- melhorias futuras;
- pendências;
- tarefas deliberadamente deixadas fora do escopo;
- novas Issues que precisam ser abertas, quando necessário.

## 5. Fluxo esperado para qualquer alteração

Antes de implementar:

1. Ler este arquivo `AGENTS.md`.
2. Identificar a necessidade.
3. Verificar se existe uma Issue correspondente.
4. Se não existir, criar a Issue antes de começar a implementação.
5. Classificar a Issue como **Correção**, **Melhoria** ou **Nova função**.
6. Definir escopo e critérios de aceite.
7. Criar uma branch associada ao trabalho.
8. Implementar somente o escopo da Issue.
9. Validar a alteração.
10. Criar Pull Request relacionado à Issue.
11. Preencher todas as informações obrigatórias do PR.
12. Revisar e integrar através do fluxo de Pull Request.
13. Realizar ou acompanhar o deploy conforme o processo do projeto.

## 6. Regra para agentes

Qualquer agente que trabalhe neste repositório deve considerar este processo uma regra operacional do projeto.

Ao receber uma nova solicitação de alteração, o agente deve primeiro verificar se existe uma Issue correspondente. Se não existir, deve criá-la antes de iniciar a implementação.

O agente também deve evitar incluir alterações não relacionadas à Issue atual no mesmo Pull Request.

## 7. Design Motion Principles e padrão obrigatório de experiência de interface

Toda implementação ou revisão relevante de UI/UX deve utilizar como referência oficial a skill **Design Motion Principles**:

`https://github.com/kylezantos/design-motion-principles`

Arquivo principal da skill:

`skills/design-motion-principles/SKILL.md`

A skill opera em dois modos:

- **Create** — construir ou melhorar componentes com motion proposital;
- **Audit** — revisar motion existente, identificar motion gaps, anti-patterns e oportunidades de melhoria.

Antes de trabalhos de interface, o agente deve identificar qual modo se aplica e consultar o workflow correspondente da skill.

### 7.1 Contexto e ponderação de perspectivas

Motion não deve ser aplicado por regra fixa. A skill exige ponderar o contexto do produto usando três perspectivas:

- **Emil Kowalski** — restrição, velocidade, frequência e propósito;
- **Jakub Krehel** — acabamento sutil e qualidade de produção;
- **Jhey Tompkins** — expressão, experimentação e delight quando apropriado.

Para o contexto institucional/marketing deste projeto, a referência inicial é:

- **Primário: Jakub Krehel** — acabamento profissional e sutileza;
- **Secundário: Jhey Tompkins** — expressão seletiva em momentos de destaque;
- **Seletivo: Emil Kowalski** — navegação, formulários e interações frequentes onde velocidade e restrição importam mais.

Se o tipo de produto mudar, essa ponderação deve ser reavaliada.

### 7.2 Frequency Gate: decidir se deve animar antes de animar

Antes de adicionar ou aprovar qualquer animação, avaliar a frequência de uso:

- **Rara** — motion expressivo pode ser apropriado;
- **Ocasional** — motion sutil e rápido;
- **Frequente** — mínimo motion ou transição instantânea;
- **Iniciada por teclado** — não animar.

A melhor animação em interfaces de produção tende a passar despercebida. Motion deve melhorar compreensão, continuidade ou feedback; não deve existir apenas para parecer sofisticado.

### 7.3 Timing e easing

A duração deve ser dependente do contexto, não uma regra universal:

- interfaces orientadas a produtividade: preferir motion rápido, normalmente abaixo de 300 ms;
- acabamento de produção: aproximadamente 200–500 ms quando a suavidade justificar;
- momentos criativos ou de showcase: duração pode variar quando o efeito realmente serve à experiência.

Evitar easing genérico ou inconsistente. Componentes equivalentes devem compartilhar um vocabulário coerente de timing e easing.

### 7.4 Performance de motion

Preferir animações baseadas em propriedades amigáveis à composição:

- `transform`;
- `opacity`;
- `filter`, quando apropriado e medido.

Evitar animar `width`, `height`, `top`, `left` ou outras propriedades que provoquem layout desnecessário quando houver alternativa baseada em transform/composição.

Para animações numerosas ou complexas, revisar também a referência de performance da skill.

### 7.5 Acessibilidade é obrigatória

Toda motion relevante deve respeitar `prefers-reduced-motion`, sem exceção.

Quando reduced motion estiver ativo:

- reduzir ou remover deslocamentos, escalas e efeitos não essenciais;
- manter feedback de estado por meios não animados;
- preservar compreensão da mudança;
- evitar animações contínuas ou vestibularmente agressivas.

Nunca depender exclusivamente de animação ou cor para comunicar informação essencial.

### 7.6 Lazy loading

Utilizar lazy loading quando fizer sentido para reduzir trabalho inicial e acelerar a percepção de resposta, especialmente para:

- imagens e mídia fora da viewport;
- módulos ou áreas secundárias;
- listas extensas;
- conteúdos abaixo da dobra;
- dependências pesadas não necessárias para a primeira interação.

Lazy loading não deve atrasar conteúdo crítico nem gerar mudanças de layout evitáveis.

### 7.7 Skeleton screens e estados de carregamento

Para carregamentos estruturais ou perceptíveis, preferir skeleton screens que preservem aproximadamente a forma do conteúdo final.

Evitar:

- telas vazias durante espera;
- spinners genéricos quando a estrutura do conteúdo já é conhecida;
- saltos grandes de layout ao finalizar carregamento;
- placeholders sem relação visual com o conteúdo final.

Skeletons devem ser discretos, não competir com o conteúdo e respeitar `prefers-reduced-motion`.

### 7.8 Entrada, saída e motion gaps

Elementos que surgem, desaparecem, expandem, recolhem ou trocam de contexto devem ser avaliados para determinar se uma transição ajuda a preservar continuidade.

Em revisões de interface, procurar explicitamente por **motion gaps**, como:

- modais que aparecem/desaparecem instantaneamente;
- conteúdo de abas que troca sem continuidade;
- estados loading/content que dão snap;
- campos condicionais que surgem abruptamente;
- listas, toasts, alerts ou drawers sem entrada/saída adequada;
- mudanças dimensionais bruscas sem transição útil.

Encontrar um motion gap não significa animar automaticamente. Primeiro aplicar o Frequency Gate e decidir se a animação realmente melhora a experiência.

### 7.9 Estados de progresso

Toda ação assíncrona iniciada pelo usuário deve deixar claro que está em andamento.

Exemplos:

- botões de salvar/enviar com estado de loading;
- uploads com progresso quando disponível;
- ações de processamento com estado ocupado;
- prevenção de clique duplicado durante operações não idempotentes;
- indicação clara quando uma ação estiver aguardando resposta.

O estado de progresso deve preservar contexto e, sempre que possível, evitar substituir completamente o componente.

### 7.10 Feedback visual de ações

Toda ação relevante do usuário deve produzir feedback perceptível e coerente, considerando conforme o componente:

- hover;
- focus visível;
- pressed/active;
- seleção;
- sucesso;
- erro;
- aviso;
- disabled;
- loading;
- conclusão;
- atualização otimista e eventual rollback.

Interações frequentes não devem receber animações chamativas só porque existe um estado visual.

### 7.11 Transições entre telas e componentes

Telas, cards, modais, drawers, menus, listas e superfícies equivalentes devem seguir um vocabulário consistente de motion.

Manter consistência de:

- direção de entrada/saída;
- duração;
- easing;
- escala ou deslocamento;
- comportamento de backdrop;
- ordem de montagem/desmontagem;
- manutenção de foco e contexto.

A saída deve geralmente ser mais sutil que a entrada.

## 8. Revisão obrigatória como designer de produto sênior

Antes de considerar qualquer interface pronta para entrega, executar uma revisão final de produto e de motion.

Essa revisão deve funcionar como um **Audit** da skill e cobrir pelo menos:

1. contexto do produto e padrões existentes;
2. hierarquia visual e primeira impressão;
3. motion gaps em renderizações condicionais e mudanças de estado;
4. animações desnecessárias ou excessivas;
5. frequência das interações;
6. loading, skeletons e empty states;
7. progresso e feedback das ações;
8. entrada/saída de modais, cards, listas, drawers, toasts e navegação;
9. consistência de timing/easing;
10. performance de animação;
11. foco, teclado e acessibilidade;
12. `prefers-reduced-motion`;
13. responsividade;
14. sensação geral de acabamento e qualidade.

Corrigir tudo que pareça:

- brusco;
- travado;
- genérico;
- inconsistente;
- excessivamente animado;
- decorativo sem propósito;
- sem feedback;
- visualmente pobre durante carregamento;
- improvisado;
- amador.

A revisão deve procurar tanto **motion ausente** quanto **motion em excesso**.

Não considerar uma interface finalizada apenas porque funciona tecnicamente. A entrega deve demonstrar coerência visual, previsibilidade, feedback claro, performance e acabamento profissional.

Em caso de dúvida entre adicionar mais animação e simplificar, priorizar clareza, rapidez percebida e continuidade. Motion deve servir à interface, não chamar atenção para si mesma.

## 9. Esteira obrigatória de qualidade antes da `main`

Nenhum código deve ser considerado pronto para merge na branch `main` sem passar pelos gates aplicáveis de qualidade. A regra é **fail-closed**: se um gate obrigatório falhar, estiver ausente ou não puder ser executado, o PR não deve ser tratado como pronto.

A esteira deve ser proporcional ao stack e ao risco. Não instalar ferramentas apenas para marcar checklist, mas também não adiar gates essenciais depois que a tecnologia correspondente já existe no projeto.

### 9.1 Gate mínimo para todo Pull Request

Todo PR para `main` deve, no mínimo:

- estar vinculado a uma Issue;
- ter descrição completa conforme a seção 4;
- declarar o que foi realmente validado;
- registrar riscos, limitações e próximos passos;
- passar pelos workflows obrigatórios do repositório;
- não conter mudanças fora do escopo da Issue sem justificativa;
- não introduzir segredos, credenciais ou dados sensíveis no repositório.

### 9.2 Observabilidade

Antes de produção, definir explicitamente a estratégia de observabilidade. Avaliar, conforme a arquitetura e maturidade:

- **Sentry** para captura e investigação de erros;
- **Datadog** ou **New Relic** quando houver necessidade real de APM/infra/monitoramento integrado;
- **OpenTelemetry** como padrão de instrumentação quando tracing/métricas distribuídas fizerem sentido.

Evitar múltiplas plataformas sobrepostas sem justificativa. A solução escolhida deve cobrir o necessário para o produto: erros, logs estruturados, métricas e, quando aplicável, tracing.

### 9.3 Qualidade, lint e arquitetura executável

Quando o stack suportar, avaliar e configurar antes do primeiro código relevante entrar na `main`:

- **arch-contract** ou mecanismo equivalente para validar fronteiras arquiteturais;
- **Biome** para lint/format em projetos JS/TS quando adequado;
- **Commitlint** para convenção de commits quando o fluxo do time depender dela;
- **Knip** para detectar código, arquivos e dependências não usados em projetos compatíveis;
- **Stryker** para mutation testing em áreas onde a qualidade dos testes justifique o custo.

Esses checks devem rodar em CI e falhar o PR quando forem definidos como obrigatórios.

### 9.4 Testes e cobertura

A estratégia de testes deve combinar camadas, sem exigir todas cegamente em toda mudança:

- **unitários** para regras e unidades isoláveis;
- **integração** para contratos entre módulos, serviços e persistência;
- **end-to-end** para jornadas críticas;
- **Codecov** ou cobertura equivalente quando cobertura for uma métrica útil de regressão;
- **Playwright** como padrão preferencial para E2E web quando aplicável;
- **Endtest** quando agregar valor real e não duplicar desnecessariamente a suíte E2E existente.

Mudanças críticas devem incluir ou atualizar testes relevantes. Redução material de cobertura, remoção de testes ou bypass de gates exige justificativa explícita no PR.

### 9.5 Segurança e operação

Toda arquitetura aplicável deve considerar:

- **rate limit** em endpoints públicos, autenticação, formulários sensíveis e superfícies sujeitas a abuso;
- revisão de segurança para autenticação, autorização, pagamentos, dados pessoais, upload de arquivos, integrações externas, secrets e mudanças de infraestrutura;
- dependências e permissões mínimas necessárias;
- tratamento seguro de erros sem exposição de dados sensíveis;
- separação clara de responsabilidades entre frontend e backend;
- nenhuma regra de negócio sensível ou segredo confiado exclusivamente ao frontend.

Quando o produto coletar dados pessoais, possuir usuários finais ou condições contratuais, **Termos de Uso** e **Política de Privacidade** devem ser revisados e aprovados pelo jurídico antes da publicação/produção. Agentes não devem declarar aprovação jurídica sem evidência explícita.

### 9.6 Performance budget

Quando existir interface, API ou serviço mensurável, definir budget de performance antes de a aplicação amadurecer sem limites claros.

O budget deve ser objetivo e testável, considerando conforme o contexto:

- peso inicial e lazy loading;
- Core Web Vitals para web quando aplicável;
- tempo de resposta de APIs críticas;
- uso de CPU/memória em operações relevantes;
- número de requests e dependências críticas;
- regressões perceptíveis de renderização/interação.

PRs que ultrapassem budgets definidos devem falhar ou documentar uma exceção aprovada e temporária.

### 9.7 Separação entre frontend e backend

Quando ambas as camadas existirem:

- frontend não deve acessar diretamente recursos internos que pertençam ao backend;
- contratos de API devem ser explícitos e versionáveis quando necessário;
- validação e autorização críticas devem ocorrer no servidor;
- tipos/contratos podem ser compartilhados sem criar acoplamento circular;
- limites de responsabilidade devem ser simples e compreensíveis.

### 9.8 Arquitetura sem overengineering

Toda implementação deve buscar a solução mais simples que satisfaça os requisitos e preserve evolução saudável.

Princípios obrigatórios:

- evitar **overengineering** e infraestrutura prematura;
- identificar e evitar **bottlenecks óbvios** de arquitetura, dados, rede ou processamento;
- componentizar desde o início em unidades coesas, não em microcomponentes artificiais;
- aplicar **DRY com critério**: duplicação pequena e local pode ser melhor que uma abstração prematura;
- abstrair quando houver padrão real, não apenas semelhança visual momentânea;
- antes de criar componente, hook, serviço, helper ou utilitário, procurar implementação existente;
- preferir reutilizar ou estender componentes existentes quando isso preservar clareza;
- impedir reconstrução de componentes equivalentes sem justificativa registrada;
- evitar dependências novas quando a plataforma ou o código existente resolvem o problema com clareza semelhante.

### 9.9 Matriz de ativação dos gates

Enquanto o repositório ainda não possuir aplicação, os gates genéricos de governança são obrigatórios.

Antes do **primeiro código** de cada categoria entrar na `main`, o PR que introduzir essa categoria deve também ativar os gates mínimos correspondentes:

| Categoria introduzida | Gates mínimos antes do merge |
| --- | --- |
| Frontend JS/TS | lint/format, testes unitários quando houver lógica, build, validação de UI, performance budget inicial, E2E para jornada crítica quando já existir jornada |
| Backend/API | lint/format, unitários, integração, revisão de segurança, rate limit quando exposto, logging/erros, contrato frontend/backend |
| Persistência/banco | integração, migração/rollback quando aplicável, validação de dados, revisão de performance das consultas críticas |
| Autenticação/autorização | testes negativos e positivos, revisão de segurança, rate limit/anti-abuso, observabilidade de falhas sem vazamento de dados |
| Produção/deploy | build reproduzível, health checks quando aplicável, observabilidade definida, rollback/deploy strategy, performance e segurança mínimas |
| Dados pessoais/usuários finais | segurança, minimização de dados, política de privacidade e termos submetidos à revisão jurídica antes da produção |

### 9.10 Proibição de bypass silencioso

Não desabilitar, comentar, pular ou transformar em `continue-on-error` um gate obrigatório apenas para fazer o PR passar.

Qualquer exceção temporária deve:

- estar ligada a uma Issue específica;
- explicar o motivo;
- registrar risco;
- ter prazo ou condição clara de remoção;
- ser visível no PR.

### 9.11 Regra de merge

Um PR só deve ser recomendado para merge quando:

1. todos os checks obrigatórios aplicáveis estiverem verdes;
2. a validação descrita no PR corresponder ao que foi realmente executado;
3. riscos e limitações estiverem registrados;
4. revisões necessárias de segurança, produto, arquitetura ou jurídico estiverem concluídas quando aplicáveis;
5. não houver pendência crítica escondida em “próximos passos”.

A proteção técnica da branch `main` deve exigir os checks quando a configuração do GitHub permitir. Se a ferramenta/agente atual não tiver permissão para criar rulesets ou branch protection, isso deve ser registrado como limitação administrativa e não deve ser confundido com garantia técnica já aplicada.