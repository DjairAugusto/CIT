### 3.3.2 Processo 2 – CADASTRO DE APARTAMENTO

O Cadastro de Apartamento é uma etapa essencial para a correta configuração dos moradores no sistema de gestão do condomínio. Esse processo assegura que cada unidade residencial seja devidamente registrada, permitindo uma vinculação clara entre os apartamentos e seus respectivos moradores.

**Descrição do Processo:**

**1. Preenchimento do Formulário de Apartamento:** 
* O responsável pelo condomínio, como o síndico ou administrador, inicia o processo preenchendo um formulário detalhado para cada apartamento. Este formulário coleta dados essenciais como o número do apartamento, o bloco, e o número de vagas de garagem associadas.

**2. Vinculação de Moradores ao Apartamento:** 
* Durante o cadastro, o responsável também adiciona os dados dos moradores da unidade. Isso assegura que, ao se cadastrarem no sistema, os moradores sejam diretamente vinculados ao apartamento correspondente, facilitando o controle e o acesso às funcionalidades do sistema.

**3. Definição de Permissões para o Apartamento:** 
* O sistema permite que o responsável defina permissões específicas para os moradores do apartamento, como acesso à área comum, solicitação de serviços, e consulta ao mural de avisos. Isso garante que cada morador tenha acesso às funcionalidades adequadas à sua unidade.

**4. Geração de Token para Moradores:** 
* Após o cadastro do apartamento, o sistema gera um token único para cada morador. Esse token permite que os moradores realizem seu próprio cadastro no sistema, vinculando-se automaticamente ao apartamento correto.

**Oportunidades de Melhoria no Cadastro de Apartamento**

**Desafios Anteriores:**

* Muitos condomínios não contavam com um processo claro para cadastrar apartamentos e moradores, resultando em informações desorganizadas e desvinculadas entre unidades e moradores.
* A ausência de um sistema que definisse permissões específicas para cada morador dificultava a gestão das funcionalidades do condomínio.
  
**Melhorias Implementadas:**

* Processo Estruturado: O novo processo de cadastro estabelece um fluxo claro para o registro de cada unidade, garantindo que os dados dos apartamentos e moradores estejam corretos e bem organizados.
* Vinculação de Moradores: A inclusão dos dados dos moradores no cadastro do apartamento permite uma gestão mais eficiente e segura, com acesso direto ao apartamento correspondente.
* Controle de Permissões: O sistema permite que o responsável configure as permissões específicas de cada morador, aumentando a personalização e a segurança no acesso às funcionalidades do condomínio.
* Geração Automática de Tokens: A geração de tokens únicos para os moradores facilita o processo de cadastro e garante que cada morador seja vinculado ao apartamento correto, simplificando o gerenciamento.

![Exemplo de um Modelo BPMN do PROCESSO 1](images/process.png "Modelo BPMN do Processo 1.")

#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 1. 
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
| ***Exemplo:***  |                  |                |                   |
| login           | Caixa de Texto   | formato de e-mail |                |
| senha           | Caixa de Texto   | mínimo de 8 caracteres |           |

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
