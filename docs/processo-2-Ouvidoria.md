### 3.3.2 Processo 2 – Ouvidoria

![Modelo BPMN do Processo de Ouvidoria](images/processo-ouvidoria.png "Modelo BPMN do Processo 2.")

#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 2. 
Devem estar relacionadas com o modelo de processo apresentado anteriormente._

_Os tipos de dados a serem utilizados são:_

_* **Área de texto** - campo texto de múltiplas linhas_

_* **Caixa de texto** - campo texto de uma linha_

_* **Número** - campo numérico_

_* **Data** - campo do tipo data (dd-mm-aaaa)_

_* **Hora** - campo do tipo hora (hh:mm:ss)_

_* **Data e Hora** - campo do tipo data e hora (dd-mm-aaaa, hh:mm:ss)_

_* **Imagem** - campo contendo uma imagem_

_* **Seleção única** - campo com várias opções de valores que são mutuamente exclusivas (tradicional radio button ou combobox)_

_* **Seleção múltipla** - campo com várias opções que podem ser selecionadas mutuamente (tradicional checkbox ou listbox)_

_* **Arquivo** - campo de upload de documento_

_* **Link** - campo que armazena uma URL_

_* **Tabela** - campo formado por uma matriz de valores_


**Escolher Tipo**

| **Campo**       | **Tipo**         | **Restrições**                | **Valor default** |
| ---             | ---              | ---                           | ---               |
| Tipo do Ticket  | Seleção Única    | Sugestão, Reclamação ou Outro | Outro             |


**Inserir Sugestão e Motivo**

| **Campo**       | **Tipo**         | **Restrições**        | **Valor default** |
| ---             | ---              | ---                   | ---               |
| Sugestão        | Caixa de Texto   | Mínimo de 10 palavras | NULO              |
| Motivo          | Área de Texto    | Mínimo de 10 palavras | NULO              |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Enviar               | Analisar Ticket                | default           |

**Inserir Reclamação**

| **Campo**       | **Tipo**         | **Restrições**        | **Valor default** |
| Reclamação      | Área de Texto    | Mínimo de 10 Palavras | NULO              |
| Anexo           | Imagens          | Nenhuma               | NULO              |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Enviar               | Analisar Ticket                | default           |

**Inserir Tipo e Informações**

| **Campo**       | **Tipo**         | **Restrições**        | **Valor default** |
| Tipo            | Caixa de Texto   | Mais de 4 letras      | NULO              |
| Reclamação      | Área de Texto    | Mínimo de 10 Palavras | NULO              |
| Anexo           | Imagens          | Nenhuma               | NULO              |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Enviar               | Analisar Ticket                | default           |

**Responder o Ticket**


| **Campo**       | **Tipo**         | **Restrições**        | **Valor default** |
| Resposta        | Área de Texto    | Mínimo de 10 Palavras | NULO              |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Enviar               | Validar Resposta               | default           |
