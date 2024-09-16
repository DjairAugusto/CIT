### 3.3.5 Processo 8 - Contatos

O processo de Contatos tem como objetivo organizar e disponibilizar os contatos úteis e importantes para a comunicação entre os moradores e a administração do condomínio. Ele é dividido entre o acesso e edição pela administração e a visualização pelos moradores.

**Descrição do Processo:**

**1. Gerenciamento de Contatos (Administração):**

* A administração tem acesso à lista de contatos do condomínio, podendo adicionar, editar ou remover informações. Esses contatos incluem o telefone da portaria, interfone, zelador, síndico e outros funcionários do condomínio. O administrador garante que todas as informações estejam atualizadas e acessíveis.

**2. Visualização de Contatos (Moradores):**

* O morador pode acessar a lista de contatos para visualizar as informações fornecidas pela administração. Isso inclui contatos para emergências, serviços do condomínio e informações sobre como se comunicar com os responsáveis.

**Oportunidades de Melhoria:**

**Desafios Anteriores:**

* Muitos condomínios não possuem um local centralizado para os contatos de serviço, o que pode causar atrasos na comunicação em situações de emergência ou necessidade de atendimento.

**Melhorias Implementadas:**

* Centralização das Informações: Os contatos agora estão organizados em um único lugar, facilitando o acesso rápido para moradores e administração.
* Facilidade de Edição: A administração pode atualizar facilmente as informações, mantendo os dados sempre atualizados e acessíveis.
  
![Modelo BPMN do Processo de Contatos](images/processo-8-contatos.png "Modelo BPMN do Processo 8.")

#### Detalhamento das atividades


**Escolher Ação**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Ação | seleção única  | Editar ou Visualizar    | Visualizar           |

**Selecionar Contato(s)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Selecão | Seleção única  | Contatos cadastrados    |   Não visível         |

**Marcar como visível/Não visível**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Marcar | Seleção única  | Contatos Selecionados    |           |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Vísivel  | Fim do processo 1  | Seleção única   |

**Visualizar Contatos**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Visualizar | Seleção única  | Contatos Cadastrados    |           |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Contatos  | Fim do processo 2 | NULO  |



**Escolher Ação**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Ação | seleção única  |     Selecionar ou Sair           |      Sair             |
|                 |                  |                |                   |

**Copiar contato**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Copiar | Seleção única  | Contato Selecionado    |           |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Copiar | Fim do Processo  | Seleção unica   |
|                      |                                |                   |

**Sair**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Sair | Seleção única  | Abrir seção de contatos    |           |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Sair  | Fim do processo  | Seleção unica  |





