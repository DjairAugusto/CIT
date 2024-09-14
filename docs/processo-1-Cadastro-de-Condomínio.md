### 3.3.1 Processo 1 – CADASTRO DO CONDOMÍNIO

O Cadastro do Condomínio é o processo inicial essencial para quem deseja começar a utilizar nosso programa de gestão de condomínios. Este processo estabelece a base para o funcionamento do sistema e é crucial para garantir que todos os dados necessários sejam coletados e configurados corretamente.

**Descrição do Processo:**
**1. Preenchimento do Formulário do Condomínio:**

* O usuário inicia o processo preenchendo um formulário detalhado sobre o condomínio. Este formulário coleta informações essenciais como o tamanho do condomínio, o número de apartamentos, e especificações adicionais.
  
**2. Definição de Usuários Administrativos:**

* Durante o cadastro, o sistema também solicita informações sobre outros usuários administrativos, como o zelador. Essas informações são importantes para definir os cargos e as permissões adequadas na plataforma.

**3. Geração de Tokens:**

* Após o formulário ser preenchido, o sistema gera tokens únicos para os moradores e funcionários do condomínio.

* **Tokens para Moradores:** Cada apartamento recebe um token específico, permitindo que os moradores se cadastrem no site e se vinculem diretamente ao seu apartamento.

* **Tokens para Funcionários:** Os tokens para funcionários são gerados com base nas informações fornecidas pelo síndico. Estes tokens definem cargos e permissões, permitindo que cada funcionário acesse o sistema com suas credenciais apropriadas.

**4. Configuração de Permissões:**

* O síndico, posteriormente, pode definir e ajustar as permissões e cargos dos funcionários, garantindo que cada um tenha acesso às funcionalidades necessárias para suas funções.

Este processo de cadastro é fundamental para configurar o condomínio no sistema e garantir que todas as informações estejam corretamente alinhadas para a gestão eficiente e segura do ambiente condominial.

**Oportunidades de Melhoria no Cadastro do Condomínio**

**Desafios Anteriores:**

* Muitos condomínios não utilizavam plataformas digitais adequadas ou usavam plataformas genéricas que não definem permissões específicas, resultando em confusão e gestão ineficiente.
* A gestão manual e a falta de automação causavam erros e atrasos.
  
**Melhorias Implementadas:**

* Processo Estruturado: O novo processo de cadastro estabelece um fluxo inicial claro e automatizado para configuração do condomínio.
* Formulário Detalhado: Coleta informações completas e específicas, facilitando a definição precisa de dados do condomínio e de administradores.
* Geração Automática de Tokens: Tokens são gerados automaticamente para moradores e funcionários, garantindo acesso adequado e segurança.
* Controle de Permissões: Permissões são definidas de forma integrada pelo síndico, evitando confusões e melhorando a gestão.

![Modelo BPMN do PROCESSO 13](images/processo-cadastro-do-condominio.png "Modelo BPMN do Processo 13.")

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
