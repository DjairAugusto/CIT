### 3.3.4 Processo 4 – Prestação de contas

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


**Inserir Informações da Conta**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Nome            | Caixa de Texto   | formato de e-mail |                |
| Preço           | Numero           | mínimo de 8 caracteres |           |
| Responsavel     | Caixa de Texto   | mínimo de 3 caracteres |           |
| Tipo            | eleção única     | Pelo menos uma opção selecionada |  Serviço     |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Anexar Provas        | Coletar provas                 | default           |


**Visualizar Provas**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Provas          | Arquivos         | Aquivo de imagem ou PDF|                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Visualizar relatorio |  Gera relatorio                | default           |
| Salver relatorio     |  Finalizar processo            | default           |
