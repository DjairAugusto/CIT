### 3.3.2 Processo 2 – CADASTRO DE APARTAMENTO

O Cadastro de Apartamento é um processo essencial para garantir que cada unidade residencial no condomínio esteja devidamente configurada no sistema. Este processo permite que os moradores associem suas unidades e personalizem suas informações, garantindo acesso adequado às funcionalidades da plataforma.

**Descrição do Processo:**

**1. Recebimento do Token:**

* Após o cadastro do condomínio e a geração dos tokens, o síndico envia um token único para cada apartamento. Este token é fundamental para vincular o apartamento ao sistema e iniciar o processo de cadastro.

**2. Acesso à Plataforma:**

* O morador utiliza o token recebido para acessar a plataforma de gestão do condomínio. O token preenche automaticamente o campo referente ao apartamento, vinculando a unidade ao cadastro.

**3. Preenchimento do Formulário de Cadastro:**

* Após o acesso, o morador preenche um formulário detalhado com as seguintes informações:

* Informações do Apartamento: Inclui dados como número do apartamento e outros detalhes relevantes.
* Informações dos Moradores: O formulário permite que o morador adicione informações dos residentes, como nome e, opcionalmente, contato.
* Informações sobre Automóveis: Caso o apartamento possua veículos, o morador preenche um formulário adicional com dados como quantidade de carros, tipo, modelo, cor e placa.
  
**4. Definição de Login e Senha:**

* O morador define login e senha para acessar a plataforma. São criados dois perfis de acesso:

* **Perfil Principal:** Tem acesso completo às funcionalidades da plataforma, incluindo áreas financeiras e administrativas.
* **Perfil Secundário:** Tem acesso restrito, não podendo visualizar informações financeiras, mas podendo realizar ações como marcar reservas em áreas comuns.
Este processo de cadastro garante que cada apartamento esteja corretamente registrado no sistema e que todos os moradores tenham acesso às funcionalidades apropriadas de acordo com seus perfis.

**Oportunidades de Melhoria no Cadastro de Apartamento**

**Desafios Anteriores:**

* A falta de um processo centralizado para o cadastro de apartamentos e moradores causava confusão e erros na associação de unidades e informações pessoais.
* A gestão manual e a falta de automação dificultavam o gerenciamento das informações dos moradores e veículos.

**Melhorias Implementadas:**

* Processo Estruturado: O novo processo estabelece um fluxo claro e automatizado para o cadastro de apartamentos, melhorando a precisão e eficiência.
* Uso de Tokens: Tokens gerados e enviados pelo síndico garantem que o apartamento seja associado corretamente ao sistema.
* Formulário Detalhado: Coleta informações completas dos moradores e veículos, facilitando o gerenciamento e a organização.
* Perfis de Acesso: A definição de diferentes perfis de acesso garante que cada morador tenha a visualização e controle apropriados sobre suas informações e funcionalidades.

![Modelo BPMN do Processo 2](images/processo-2-cadastro-de-apartamento.png "Modelo BPMN do Processo 2.")

#### Detalhamento das atividades

**Atividade 1: Acessar sistema via Token**

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
|[Inserir Token] | Processo de Validação de Token  | default |
|                      |                                |                   |

**Atividade 2: Preencher Formulário de Cadastro de Apartamento**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Número do apartamento | Caixa de Texto  |  Auto-preenchido pelo Token | Preenchido automaticamente  |
|   Quantidade de Moradores |   Número  | Não pode estar vazio   |                   |
| Nome dos moradores |  Caixa de Texto   |                |                   |
|  Contato dos moradores (opcional)  |  Caixa de Texto   |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
|                      |                                |                   |

**Atividade 3: Preencher Formulário de Cadastro de Automóveis (opcional)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| [Nome do campo] | [tipo de dados]  |                |                   |
|                 |                  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
|                      |                                |                   |

**Atividade 4: Definição de Perfis e Permissões**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| [Nome do campo] | [tipo de dados]  |                |                   |
|                 |                  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
|                      |                                |                   |
