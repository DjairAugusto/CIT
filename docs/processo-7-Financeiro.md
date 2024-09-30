### 3.3.7 Processo 7 – FINANCEIRO

O processo de Financeiro é voltado tanto para a administração quanto para os moradores, garantindo que todas as cobranças relacionadas ao condomínio sejam organizadas e acessíveis. O sistema permite a emissão de boletos, visualização de cobranças em aberto, e consulta de pagamentos realizados, oferecendo uma gestão financeira clara e precisa.

**Descrição do Processo:**
**1. Emissão de Boletos (Administração):**

* O síndico ou a administração pode emitir boletos relacionados às taxas do condomínio, como água, gás, manutenção, e outros serviços. Esses boletos são gerados de acordo com as regras do condomínio e postados no sistema para que os moradores possam acessá-los. Também são incluídas taxas de reservas de áreas comuns, quando aplicável.

**2. Acesso ao Setor Financeiro (Moradores):**
* Os moradores podem acessar o setor Financeiro e visualizar todos os boletos gerados para o seu apartamento. A interface permite que eles vejam tanto os boletos em aberto quanto o histórico de pagamentos já efetuados, organizando as informações de maneira clara.

**3. Visualização e Pagamento (Moradores):**
O morador pode visualizar os boletos pendentes e utilizar as opções do sistema para copiar o código de barras e efetuar o pagamento via seu banco de preferência. Boletos gerados para reservas de áreas comuns também estarão disponíveis nesta seção.

**Oportunidades de Melhoria:**
**Desafios Anteriores:**

* Em muitos condomínios, a gestão financeira era feita de forma manual, ou através de sistemas que não integravam corretamente a emissão e acompanhamento de boletos. Isso causava atrasos, falhas na entrega de boletos, e dificuldades no acompanhamento das cobranças.
  
**Melhorias Implementadas:**

* Automação Financeira: O processo de emissão de boletos agora é centralizado e automatizado, garantindo que todos os moradores recebam suas cobranças de forma precisa e no tempo correto.
* Transparência e Organização: Os moradores têm fácil acesso ao histórico financeiro, podendo visualizar o que já foi pago e o que está pendente, promovendo maior controle sobre suas finanças.
* Integração com Reservas de Áreas Comuns: O sistema também vincula automaticamente boletos gerados para reservas, facilitando o pagamento dessas taxas adicionais.
* Cópia do Código de Barras: A opção de copiar o código de barras diretamente do sistema simplifica o processo de pagamento, economizando tempo e evitando erros.


![Exemplo de um Modelo BPMN do PROCESSO 1](images/processo-7-financeiro.png "Modelo BPMN do Processo 1.")

#### Detalhamento das atividades

**Atividade 1: Acessar sistema**

| Comandos         |  Destino                   | Tipo |
| ---                  | ---                            | ---               |
| [Fazer login] | Processo de Login   |default|
| [Usar Token]       |          Processo de Token               |   default                |
| [Cadastre seu condomínio]           | Cadastro do Condomínio              | default       |

**Atividade 1.2: Fazer Login (Obrigatória)**

| Campo       | Tipo         | Restrições | Valor default |
| ---             | ---              | ---            | ---               |
| login |     Caixa de Texto  |  formato de e-mail |                   |
| senha  |   Caixa de Texto   | mínimo de 8 caracteres      |                   |

| Comandos         |  Destino                   | Tipo |
| ---                  | ---                            | ---               |
| [Fazer login] | Página principal da plataforma  |default |
| [Cancelar]       |  Acesso ao sistema   |   cancel                |


**Atividade 2: Emitir Boletos Para os Moradores (Administrador)**

| **Campo**         |  **Tipo**                   | **Restrições**          | **Valor**         |  
| ---                |  ---                          | ---               | ---               |
| Tipo de Boleto |  Seleção única  | Opções: Água, Gás, Manutenção, Outros |         |
| Descrição |    Caixa de texto |  Descrição detalhada do serviço |         |
|Valor|        Numérico       | Valor do boleto |         |
|Data de Vencimento|    Data |Data limite para pagamento |         |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Enviar boletos] | Geração do boleto no sistema |       default          |
|[Cancelar] |Cancelamento da emissão  |  cancel        | 

**Atividade 3: Abrir Setor Financeiro (Moradores)**

| **Campo**         |  **Tipo**                   | **Restrições**          | **Valor**         |  
| ---                |  ---                          | ---               | ---               |
| Lista de Boletos |Tabela|     Lista de boletos disponíveis para o morador   |         |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
|[Visualizar Boletos] | Detalhes dos boletos disponíveis  |              default          |

**Atividade 4: Visualizar Boletos em Aberto (Moradores)**

| **Campo**         |  **Tipo**                   | **Restrições**          | **Valor**         |  
| ---                |  ---                          | ---               | ---               |
| Lista de Boletos Pendentes     | Tabela      |  Lista de boletos em aberto    |         |
| Histórico de Pagamentos    |   Tabela   |  Histórico de pagamentos realizados   |         |
| Opções de Pagamento   | Botões e campos       |  Código de barras para pagamento  |         |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Efetuar Pagamento] | Confirmação do pagamento |    Cancel       |  
|[Cancelar] | Cancelamento do pagamento |   	Cancel  |



