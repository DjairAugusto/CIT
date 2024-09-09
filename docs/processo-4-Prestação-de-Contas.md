### 3.3.4 Processo 4 – Prestação de contas

_Apresente aqui o nome e as oportunidades de melhoria para o processo 4. 
Em seguida, apresente o modelo do processo 4, descrito no padrão BPMN._

![Exemplo de um Modelo BPMN do PROCESSO 4](images/Processos de prestação de conta.png "Modelo BPMN do Processo 4.")


#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 4. 
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

**Nome da atividade 1**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| [Nome do campo] | [tipo de dados]  |                |                   |
| Nome            | Caixa de Texto   | formato de e-mail |                |
| Preço           | Numero           | mínimo de 8 caracteres |           |
| Responsavel     | Caixa de Texto   | mínimo de 3 caracteres |           |
| Tipo            | eleção única     | Pelo menos uma opção selecionada |  Serviço     |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Anexar Provas        | Coletar provas                 | default           |


**Nome da atividade 2**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Provas          | Arquivos         | Aquivo de imagem ou PDF|                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Visualizar relatorio |  Gera relatorio                | default           |
| Salver relatorio     |  Finalizar processo            | default           |
