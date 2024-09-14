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

**Atividade 1: Acessar sistema**

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| [Fazer login] | Processo de Login  | default   |default
| [Usar Token]       |          Processo de Token               |                   |
| [Cadastre seu condomínio]           | Cadastro do Condomínio              | default       |


**Atividade 2: Preencher Formulário de Cadastro**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| nome do condomínio | 	Caixa de Texto  |                |                   |
|  número de blocos  |   Número   |  valor inteiro positivo   |                   |
|  andares  |    Número   |                |  valor inteiro positivo   |
|  apartamentos por andar  |   Número   | valor inteiro positivo  |                   |

**Definição de Outros Empregados**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Quantidade de funcionários | Seleção Única  |     lista de números           |     |    
| Cargo dos empregados | Seleção Única		  | lista de cargos possíveis |                   |

**Campos de Marcadores para Definições de Permissões:**
| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Editar Área Comum | [tipo de dados]  |                |                   |
|  Editar Entregas |                  |                |                   |
|  Editar Ouvidoria |                  |                |                   |
|  Editar Entregas e Encomendas |                  |                |                   |
|  Editar Prestação de Contas |                  |                |                   |
|  Editar Financeiro |                  |                |                   |
|  Editar Mural de Avisos |                  |                |                   |
|  Editar Achados e Perdidos |                  |                |                   |
|  Editar Contatos |                  |                |                   |
|  Editar Regras e Normas do Condomínio |                  |                |                  
|  Editar Assembleias |                  |                |                   |
|  Editar Achados e Perdidos |                  |                |                   |
|Visualizar lista de Moradores Completa|                 |                |                   |
|Visualizar lista de Veículos e Nomes|                 |                |                   |
|  Visualizar lista de Visitantes |                  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Próximo | Início da Geração de Tokens  | default |




