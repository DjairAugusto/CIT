### 3.3.14 Processo 14 – PRESTAÇÃO DE CONTAS

O processo de Prestação de Contas organiza as informações financeiras do condomínio, permitindo que a administração publique relatórios detalhados e os moradores acompanhem como os recursos estão sendo utilizados.

**Descrição do Processo:**

**1. Preenchimento e Geração do Relatório (Administração):**

* A administração preenche um formulário detalhando como o dinheiro do condomínio foi gasto, com base em manutenções, melhorias e outras despesas. O sistema gera o relatório, que é publicado para os moradores.

**2. Consulta de Prestação de Contas (Moradores):**

* Os moradores podem acessar os relatórios de prestação de contas para acompanhar as despesas e investimentos feitos pela administração do condomínio. O sistema permite pesquisar por data ou tipo de gasto.

**Oportunidades de Melhoria:**

**Desafios Anteriores:**

*A prestação de contas era feita manualmente e nem sempre estava acessível aos moradores, gerando dúvidas e desconfiança sobre o uso dos recursos.

**Melhorias Implementadas:**

* Transparência Financeira: Agora todos os moradores têm acesso fácil às prestações de contas, promovendo transparência.
* Organização e Pesquisa: O sistema organiza os relatórios por data e tipo de despesa, facilitando a consulta.

![Exemplo de um Modelo BPMN do PROCESSO 4](images/processo-XIV-prestação-de-contas-administração.png "Modelo BPMN do Processo 4.")
![Exemplo de um Modelo BPMN do PROCESSO 4](images/processo-XIV-prestação-de-contas-morador.png "Modelo BPMN do Processo 4.")


#### Detalhamento das atividades


**Atividade 1: Preencher Formulário (Administrador)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|Descrição das Despesas         | Arquivo| obrigatório |                |
|Data          |Data         | obrigatório |           |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| [Salvar Prestação de Contas]     | Salvar prestação de contas               |Default    |
|[Cancelar]   | Cancelar o preenchimento            |Cancel  |

**Atividade 2: Acessar Prestação de Contas (Moradores)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|Lista de Prestações de Contas      | Tabela     | Lista de prestações de contas disponíveis|                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Visualizar Prestação] | Abre arquivo selecionado        | Default     |
|[Cancelar]     |  Finalizar processo            | default           |
