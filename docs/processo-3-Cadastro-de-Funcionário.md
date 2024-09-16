### 3.3.3 Processo 3 – CADASTRO DE FUNCIONÁRIOS

O cadastro de funcionários é essencial para garantir que todos os colaboradores do condomínio estejam registrados corretamente e com permissões adequadas. Esse processo assegura que cada funcionário tenha acesso às funcionalidades necessárias de acordo com sua

**Descrição do Processo:**

**1. Inserção do Token de Funcionário:**

* O funcionário inicia o processo inserindo um token exclusivo fornecido pelo síndico. Esse token vincula o funcionário diretamente ao sistema e ao seu cargo, configurando automaticamente permissões básicas associadas às suas responsabilid

**2. Acesso à Plataforma:**
   
* Após a inserção do token, o funcionário é redirecionado à plataforma de gestão do condomínio, onde o sistema já identifica seu cargo e associa as permissões adequadas.

**3. Preenchimento do Formulário de Cadastro:**

* O funcionário preenche um formulário com suas informações pessoais, como nome, e-mail, telefone, e cargo.

**4. Definição de Login e Senha:**
   
* O funcionário define seu login e senha para acessar a plataforma. Esse acesso será utilizado para executar suas atividades e interagir com os moradores e outros funcionários.

**5. Configuração de Permissões:**
   
* Com base no cargo associado ao token, o sistema atribui automaticamente as permissões de acesso, que poderão ser revisadas e ajustadas pelo síndico conforme necessário.

**Oportunidades de Melhoria no Cadastro de Funcionário**

**Desafios Anteriores:**

* A falta de automação no processo de cadastro dificultava a gestão das responsabilidades e permissões dos funcionários, levando a confusões e erros.
* Os cadastros manuais demandavam muito tempo para revisão e ajuste das permissões.

**Melhorias Implementadas:**

* Uso de Tokens: Os tokens fornecidos pelo síndico automatizam o vínculo do funcionário ao sistema e facilitam a atribuição de permissões adequadas.
* Processo Automatizado: A nova estrutura do processo agiliza o cadastro e garante que os funcionários tenham acesso apenas às funcionalidades necessárias para suas atividades.
* Revisão Simples: O sistema permite que o síndico revise e ajuste as permissões facilmente, garantindo flexibilidade e controle eficiente sobre os acessos de cada funcionário.

![Modelo BPMN do PROCESSO 3](images/processo-3-cadastro-de-funcionários.png "Modelo BPMN do Processo 3.")

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
