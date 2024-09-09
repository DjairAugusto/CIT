### 3.3.5 Processo 8 - Contatos

![Modelo BPMN do Processo de Contatos](images/processo-contatos.png "Modelo BPMN do Processo 8.")

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
| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Vísivel  | Fim do processo 1  | Seleção única   |

**Visualizar Contatos**
| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Contatos  | Fim do processo 2 | NULO  |



**Escolher Ação**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Ação | seleção única  |     Selecionar ou Sair           |      Sair             |
|                 |                  |                |                   |

**Copiar contato**

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Copiar | Fim do Processo  | Seleção unica   |
|                      |                                |                   |

**Sair**
| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Sair  | Fim do processo  | Seleção unica  |





