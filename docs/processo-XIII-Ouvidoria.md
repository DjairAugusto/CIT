### 3.3.13 Processo 13 – OUVIDORIA

O processo de Ouvidoria é uma ferramenta para que os moradores registrem sugestões, reclamações ou solicitações, permitindo que a administração responda de maneira organizada e eficiente.

**Descrição do Processo:**

**1. Abertura de Tickets (Moradores):**

* O morador pode abrir tickets para registrar reclamações, sugestões ou solicitações, descrevendo o problema e anexando imagens, se necessário. O ticket é encaminhado para a administração para análise.

**2. Resposta e Resolução (Administração):**

* A administração avalia o ticket, responde com uma solução ou solicitação de mais informações. Caso resolvido, o ticket é fechado pelo morador. Se não, o ticket pode ser reaberto para mais esclarecimentos.

**Oportunidades de Melhoria:**

**Desafios Anteriores:**

* A comunicação entre moradores e administração era frequentemente informal, resultando em questões não resolvidas ou mal interpretadas.

**Melhorias Implementadas:**

* Sistema Organizado de Tickets: Agora todas as solicitações são centralizadas e registradas, facilitando o acompanhamento e a resolução.
* Feedback do Morador: O morador pode validar se o problema foi resolvido, garantindo um processo mais transparente.

![Modelo BPMN do Processo de Ouvidoria](images/processo-XIII-ouvidoria.png "Modelo BPMN do Processo 2.")

#### Detalhamento das atividades

**Atividade 1: Abertura de Chamados na Ouvidoria (Moradores)**

| **Campo**       | **Tipo**         | **Restrições**                | **Valor default** |
| ---             | ---              | ---                           | ---               |
| Tipo de Chamado  | Seleção única    |Opções: Sugestão, Reclamação, Outros |            |
| Descrição do Chamado |Área de texto   | Detalhes do chamado a ser aberto |            |
|Anexo (Opcional)  | Arquivo    | Anexar documentos relevantes |             |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Abrir Chamado]        | Abertura do chamado na ouvidoria          | Default        |
| [Cancelar]            | Cancelamento da abertura       | Cancel         |


**Atividade 2: Resposta aos Chamados na Ouvidoria (Administração)**

| **Campo**       | **Tipo**         | **Restrições**        | **Valor default** |
| ---             | ---              | ---                   | ---               |
|Resposta do Administrador     | Área de texto  |Resposta ao chamado do morador |          |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Enviar Resposta]          |Envio da resposta ao morador         |Default      |

**Atividade 3: Validação do Ticket**

| **Campo**       | **Tipo**         | **Restrições**        | **Valor default** |
| ---             | ---              | ---                   | ---               |
|Validar Ticket (Foi resolvido?)    | Seleção Única (sim/não)    |  |            |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [sim]               | Fechar Ticket e postar no histórico           | default           |
| [não]               | Reabrir chamado              | default           |


