### 3.3.4 Processo 4 – ÁREA COMUM

O processo de Área Comum é fundamental para a gestão das áreas compartilhadas em um condomínio, e envolve duas perspectivas distintas: a do morador e a do administrador. Abaixo estão detalhados os fluxos de trabalho para cada tipo de usuário.

**Descrição do Processo:**

**1. Processo para Moradores**

**1.1 Acesso à Área Comum:**

* Visualização: O morador acessa as áreas comuns disponíveis, visualizando detalhes como horários e descrições.
  
**1.2 Reserva de Área Comum:**

* Escolher Área Comum: O morador seleciona uma área comum para reserva.
* Reservar: O morador faz a reserva para a área comum desejada.
* Verificação de Taxa: Se a reserva envolver uma taxa, o sistema verifica se há custos associados.
* Pagamento: Caso haja taxa, o morador deve pagar em até 2 dias. Se o pagamento não for feito, a reserva será cancelada automaticamente.
* Confirmação de Reserva: Após o pagamento, a reserva é confirmada.
  
**1.3 Cancelamento de Reserva:**

* Cancelar Reserva: O morador pode cancelar reservas anteriores, se necessário.
  
**2. Processo para Administradores**

**2.1 Gerenciamento de Áreas Comuns:**

* Adicionar Área Comum: O administrador pode adicionar novas áreas comuns ao sistema, definindo suas características e horários.
* Excluir Área Comum: O administrador pode remover áreas comuns que não são mais necessárias.
* Escolher Área Comum para Visualização: O administrador visualiza as áreas comuns para acompanhamento e gerenciamento.
  
**2.2 Edição de Áreas Comuns:**

* Editar Horário e Descrição: O administrador pode atualizar os horários e as descrições das áreas comuns para manter as informações precisas e atualizadas.
  
**2.3 Gerenciamento de Reservas:**

* Cancelar/Alterar Reservas de Moradores: O administrador pode cancelar ou alterar reservas feitas pelos moradores, conforme necessário.
* Observação: Embora o administrador tenha acesso a todas as funcionalidades, incluindo as reservas como morador, os processos foram separados para manter a clareza e especialização das funções. O administrador pode realizar reservas como qualquer outro morador, mas o foco principal do seu papel está na gestão e manutenção das áreas comuns.

**Oportunidades de Melhoria na Gestão de Áreas Comuns**

**Desafios Anteriores:**

* Falta de Automação: A gestão de áreas comuns muitas vezes era manual e desorganizada.
* Restrições e Confusão: Plataformas antigas não ofereciam controle granular sobre reservas e permissões.
  
**Melhorias Implementadas:**

* Fluxos de Trabalho Claros: Separação de processos para moradores e administradores melhora a clareza.
* Automação de Reservas: Integração de pagamento e confirmação automatizados para reservas com taxa.
* Controle e Flexibilidade: Adição, exclusão e edição de áreas comuns agora são gerenciadas eficientemente pelo administrador, enquanto moradores mantêm um processo simples e direto para reservas.

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
