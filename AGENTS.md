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
