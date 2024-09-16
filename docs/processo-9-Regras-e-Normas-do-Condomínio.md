### 3.3.9 Processo 9 – REGRAS E NORMAS

O processo de Regras e Normas é voltado para a gestão e visualização das regras que regem o condomínio, oferecendo clareza tanto para a administração quanto para os moradores sobre os direitos e deveres dentro do espaço comum.

**Descrição do Processo:**

**1. Gerenciamento de Regras e Normas (Administração):**
A administração tem permissão para acessar, adicionar, editar e remover regras e normas do condomínio. Essas regras abrangem desde questões de convivência até o uso de áreas comuns e penalidades por infrações.

**2. Visualização de Regras e Normas (Moradores):**
Os moradores podem visualizar todas as regras e normas do condomínio, garantindo que tenham acesso rápido a informações sobre o que é permitido ou proibido nas áreas comuns e dentro de suas unidades.

**Oportunidades de Melhoria:**

**Desafios Anteriores:**

* As regras muitas vezes eram entregues em formato físico ou ficavam desatualizadas, o que causava confusão entre os moradores.

**Melhorias Implementadas:**

* Atualização Automática: O sistema permite que as regras sejam rapidamente atualizadas, garantindo que todos os moradores tenham acesso à versão mais recente.
* Facilidade de Acesso: As regras podem ser visualizadas a qualquer momento, evitando problemas de comunicação.

![Modelo BPMN do Processo de Regras e Normas](images/processo-9-regras-e-normas-administrador.png "Modelo BPMN do Processo 9.")
![Modelo BPMN do Processo de Regras e Normas](images/processo-9-regras-e-normas-morador.png "Modelo BPMN do Processo 9.")
#### Detalhamento das atividades

**Atividade 1: Gerenciamento de Regras e Normas (Administradores)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|Nome da Regra | Caixa de texto | Texto simples, obrigatório  |                   |
| Descrição da Regra |  Área de texto |Descrição detalhada |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
|[Adicionar Regra] | Adiciona nova regra  | Default |
| [Editar Regra]  |  Edita informações da regra    | Default   |
| [Excluir Regra]  | Remove regra selecionada   | Cancel  |


**Atividade 2: Visualização de Regras e Normas (Moradores)**

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Visualizar Regras e Normas] | Mostra regras e normas do condomínio  | Default |

