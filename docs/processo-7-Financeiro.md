### 3.3.7 Processo 7 – FINANCEIRO

![Exemplo de um Modelo BPMN do PROCESSO 1](images/processo-7-financeiro.png "Modelo BPMN do Processo 1.")

#### Detalhamento das atividades

**Nome da atividade 1**

**Atividade 1 - Acessar o sistema**

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| [Fazer login] | Processo de Login  | default   |default
| [Usar Token]       |          Processo de Token               |   default                |
| [Emitir boletos]           | Processo de Emitir boletos            | default       |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel  ) |
| ***Exemplo:***       |                                |                   |
| entrar               | Fim do Processo 1              | default           |
| cadastrar            | Início do proceso de cadastro  |                   |


**Nome da atividade 2**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| [Nome do campo] | [tipo de dados]  |                |                   |
|                 |                  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
|                      |                                |                   |
