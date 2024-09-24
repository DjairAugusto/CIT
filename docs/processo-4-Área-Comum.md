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

![Exemplo de um Modelo BPMN do PROCESSO 1](images/processo-4-área-comum-morador.png "Modelo BPMN do Processo 1.")
![Exemplo de um Modelo BPMN do PROCESSO 1](images/processo-4-área-comum-administrador.png "Modelo BPMN do Processo 1.")

#### Detalhamento das atividades

#### Detalhamento das atividades

**Atividade 1: Acessar sistema**

| Comandos         |  Destino                   | Tipo |
| ---                  | ---                            | ---               |
| [Fazer login] | Processo de Login   |default|
| [Usar Token]       |          Processo de Token               |   default                |
| [Cadastre seu condomínio]           | Cadastro do Condomínio              | default       |

**Atividade 1.1: Fazer Login (Obrigatória)**

| Campo       | Tipo         | Restrições | Valor default |
| ---             | ---              | ---            | ---               |
| login |     Caixa de Texto  |  formato de e-mail |                   |
| senha  |   Caixa de Texto   | mínimo de 8 caracteres      |                   |

| Comandos         |  Destino                   | Tipo |
| ---                  | ---                            | ---               |
| [Fazer login] | Página principal da plataforma  |default |
| [Cancelar]       |  Acesso ao sistema   |   cancel                |

**Atividade 2: Acesso à Área Comum (Moradores)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Áreas Comuns | Seleção única  | Baseada nas áreas cadastradas |                   |
| Horário de Funcionamento | Data e Hora|Horário disponível para uso|                   |
| Descrição |Área de texto  | Informações da área selecionada	  |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Selecionar Área]| Início do processo de reserva  | Default |
| [Cancelar]    |   Fim do processo     |  Cancel     |


**Atividade 3: Reserva de Área Comum (Moradores)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Selecionar Área Comum |Seleção única  | Baseada nas áreas disponíveis |                   |
|  Data da Reserva |  Data  | Data disponível no calendário |                   |
| Horário da Reserva |Hora  |Baseado na disponibilidade |                   |
| Verificação de Taxa | Caixa de texto  | Exibe taxa associada, se aplicável |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Confirmar Reserva] | Verificação de pagamento  | Default |
|  [Cancelar]  |  Fim do processo   |    Cancel  |

**Atividade 4: Pagamento de Taxa de Reserva (Moradores)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Valor da Taxa | Número  |  Exibe o valor da taxa |                   |
|  Data de Vencimento  |  Data | Máximo de 2 dias ou antes do evento  |                   |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Confirmar Pagamento] | Confirmação de reserva  | Default |
|  [Cancelar Reserva]  |  Cancela a reserva   |  Cancel    |


**Atividade 5: Cancelamento de Reserva (Moradores)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Área Comum Reservada  |  Seleção única  | Baseada em reservas existentes   |                   |
| Data da Reserva  |  Data | Exibe a data da reserva   |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Cancelar Reserva] | Confirma cancelamento da reserva  | Default |
|  [Voltar] | Retorna ao menu de reservas |     Cancel |


**Atividade 6: Gerenciamento de Áreas Comuns (Administradores)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Nome da Área Comum| Caixa de texto  | Texto simples, obrigatório |                   |
|  Horário de Funcionamento | Data e Hora | Definido pelo administrador  |                   |
| Descrição |Área de texto  |  Informações detalhadas da área  |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Adicionar Área] | Criação de nova área  | Default |
| [Excluir Área] | Remover área comum | Cancel |


**Atividade 7: Edição de Áreas Comuns (Administradores)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Selecionar Área Comum | [tipo de dados]  |                |                   |
|Atualizar Horário  |                  |                |                   |
| Atualizar Descrição | [tipo de dados]  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Salvar Alterações] | Confirma atualização  | Default |
| [Cancelar] | Fim do processo  |Cancel |


**Atividade 8: Gerenciamento de Reservas (Administradores)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Selecionar Reserva | Seleção única  |Baseada em reservas ativas|                   |
| Alterar Reserva |  Seleção múltipla |   Permite alterar datas e horários  |                   |
|Cancelar Reserva |Caixa de texto | Confirmação do cancelamento  |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Confirmar Cancelamento] | Fim do processo  | Default |
| [Voltar] | Retorna ao menu de gerenciamento  | Cancel |


