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
