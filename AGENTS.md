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

Em mudanças de interface, registrar também quais estados de carregamento, feedback, progresso, transições, entrada/saída e reduced motion foram verificados.

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

## 7. Motion Principles e padrão obrigatório de experiência de interface

Toda implementação de UI/UX deve tratar movimento, carregamento e feedback como parte funcional da experiência, e não como acabamento opcional.

A referência preferencial do projeto é **Motion Principles**, indicada em:

`https://github.com/kylezantos/design-principles`

Antes de implementar ou revisar mudanças relevantes de interface, consulte essa referência quando ela estiver acessível. Se a fonte externa estiver indisponível, não alegue que ela foi lida: utilize os princípios obrigatórios abaixo como baseline do projeto e registre a limitação no Pull Request quando isso for relevante.

### Lazy loading

Utilizar lazy loading quando fizer sentido para reduzir trabalho inicial e acelerar a percepção de resposta, especialmente para:

- imagens e mídia fora da viewport;
- módulos ou áreas secundárias;
- listas extensas;
- conteúdos abaixo da dobra;
- dependências pesadas que não sejam necessárias para a primeira interação.

Lazy loading não deve atrasar conteúdo crítico nem gerar mudanças de layout evitáveis.

### Skeleton screens e estados de carregamento

Para carregamentos estruturais ou perceptíveis, preferir skeleton screens que preservem a forma aproximada do conteúdo final.

Evitar:

- telas vazias durante espera;
- spinners genéricos quando a estrutura do conteúdo já é conhecida;
- saltos grandes de layout na conclusão do carregamento;
- placeholders sem relação visual com o conteúdo final.

Skeletons devem ter movimento discreto, não competir com o conteúdo e respeitar `prefers-reduced-motion`.

### Animações de entrada e saída

Elementos que surgem, desaparecem, expandem, recolhem ou mudam de contexto devem utilizar transições suaves e intencionais quando isso melhorar compreensão espacial e continuidade.

As animações devem:

- comunicar causa e efeito;
- preservar contexto entre estados;
- evitar mudanças instantâneas e bruscas quando uma transição ajudaria o usuário;
- ter duração e easing consistentes;
- evitar excesso de movimento decorativo ou atrasos desnecessários.

### Estados de progresso

Toda ação assíncrona iniciada pelo usuário deve deixar claro que está em andamento.

Exemplos:

- botões de salvar/enviar com estado de loading;
- uploads com progresso quando disponível;
- ações de processamento com estado ocupado;
- prevenção de clique duplicado durante operações não idempotentes;
- indicação clara quando uma ação estiver aguardando resposta.

O estado de progresso deve preservar o contexto da ação e, sempre que possível, evitar substituir completamente o conteúdo do componente.

### Feedback visual de ações

Toda ação relevante do usuário deve produzir feedback perceptível e coerente.

Considere, conforme o componente:

- hover;
- focus visível;
- pressed/active;
- seleção;
- sucesso;
- erro;
- aviso;
- disabled;
- loading;
- conclusão de uma operação;
- alterações de estado otimistas com tratamento de falha.

Nunca depender exclusivamente de cor ou animação para comunicar informação essencial.

### Transições entre telas e componentes

Telas, cards, modais, drawers, menus, listas e demais superfícies devem seguir um vocabulário de movimento consistente.

Para componentes equivalentes, mantenha consistência de:

- direção de entrada/saída;
- duração;
- easing;
- escala ou deslocamento;
- comportamento do backdrop;
- ordem visual de montagem e desmontagem;
- manutenção do foco e contexto do usuário.

Evite combinar padrões de movimento diferentes sem motivo de produto claro.

### Acessibilidade e reduced motion

Toda motion relevante deve respeitar `prefers-reduced-motion`.

Quando reduced motion estiver ativo:

- reduzir ou remover deslocamentos e escalas não essenciais;
- manter feedback de estado por meios não animados;
- preservar legibilidade e compreensão das mudanças;
- evitar animações contínuas ou efeitos que possam causar desconforto.

O foco de teclado, leitura por tecnologias assistivas e ordem de interação devem permanecer corretos durante e após transições.

## 8. Revisão obrigatória como designer de produto sênior

Antes de considerar qualquer interface pronta para entrega, realizar uma revisão final de produto cobrindo pelo menos:

- primeira impressão;
- hierarquia visual;
- continuidade entre estados;
- loading e empty states;
- erros e recuperação;
- feedback das ações;
- fluidez de modais, cards, listas e navegação;
- consistência das transições;
- responsividade;
- acessibilidade;
- reduced motion;
- sensação geral de qualidade.

Durante essa revisão, corrigir tudo que pareça:

- brusco;
- travado;
- genérico;
- inconsistente;
- excessivamente animado;
- sem feedback;
- visualmente pobre durante carregamento;
- improvisado;
- amador.

Não considerar uma interface finalizada apenas porque ela funciona tecnicamente. A entrega deve também demonstrar coerência visual, previsibilidade, feedback claro e acabamento compatível com um produto profissional.

Em caso de dúvida entre adicionar mais animação e simplificar, priorizar clareza, rapidez percebida e continuidade. Motion deve melhorar a compreensão da interface, não chamar atenção para si mesma.
