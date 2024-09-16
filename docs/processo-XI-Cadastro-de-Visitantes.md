### 3.3.12 Processo 12 – Cadastro de Visitantes

O processo de Cadastro de Visitantes permite que os moradores registrem seus convidados e que a administração tenha controle sobre as visitas recebidas.

**Descrição do Processo:**

**1. Cadastro de Visitantes (Moradores):**

* O morador pode registrar a visita de convidados preenchendo um formulário com o número de visitantes, nomes, CPF, e detalhes do veículo (se houver), como tipo, modelo, cor e placa. O morador também define a data e o horário da visita.

**2. Visualização de Visitantes (Administração):**
* A administração pode acessar a lista de visitantes cadastrados para cada apartamento, garantindo um controle de quem está autorizado a entrar no condomínio e em quais horários.

**Oportunidades de Melhoria:**

**Desafios Anteriores:**

* O controle de visitantes era muitas vezes feito manualmente, resultando em falhas de segurança e entradas não autorizadas.

**Melhorias Implementadas:**

* Registro Digital: O cadastro de visitantes digitaliza o processo, melhorando a segurança e evitando fraudes.
* Acesso em Tempo Real: A administração tem acesso imediato aos registros de visitantes, facilitando o controle de entrada.

![Exemplo de um Modelo BPMN do PROCESSO 1](images/processo-XI-cadastro-de-visitantes.png "Modelo BPMN do Processo 1.")

#### Detalhamento das atividades

**Inserir quantidade de visitantes**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Número de visitantes | Número  |     mínimo 1 morador           |       1            |



**Inserir nome dos visitantes**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Nome             | Área de Texto  |                |    mínimo de 2 caracteres               |

**Escolher  quantidade de automóveis**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Número de Automóveis | Número  |     mínimo 1 morador           |       1            |

**Preencher dados de cada automóvel**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Tipo             | Área de Texto  |       mínimo de 2 caracteres         |    Moto, Carro               |
|  Modelo     |      Área de Texto            |        mínimo de 1 caracter        |                   |
|   Placa       |         Área de Texto         |         mínimo de 7 caracteres       |                   |
|   Cor      |         Área de Texto         |         mínimo de 2 caracteres       |                   |

**Definir dia e horário para visita**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| dia   e horário aproximado        | Dados e Hora   | formato data e hora |                |

