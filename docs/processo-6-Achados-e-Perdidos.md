### 3.3.6 Processo 6 – ACHADOS E PERDIDOS

O processo de Achados e Perdidos é uma funcionalidade essencial para garantir que itens extraviados sejam facilmente identificados, registrados e recuperados dentro do condomínio. O sistema permite que tanto moradores quanto a administração tenham um fluxo claro para o gerenciamento de itens perdidos, garantindo maior eficiência e transparência.

**Descrição do Processo:**

**1. Acesso ao Feed de Itens Perdidos (Moradores):**
   
O morador pode acessar o setor de Achados e Perdidos e visualizar um feed que contém postagens de todos os itens encontrados. Cada postagem exibe informações detalhadas, como uma foto do item e o local onde foi achado. O morador que identificar um item perdido pode ir até a administração para retirá-lo.

**2. Registro da Retirada do Item (Administração):**
   
Ao identificar e retirar o item na administração, a retirada será registrada no sistema com a data e a hora da entrega. Esse processo garante que haja controle sobre a devolução dos itens encontrados, promovendo segurança e transparência.

**3. Recebimento de Itens Encontrados (Administração):**
   
Quando um item é encontrado dentro do condomínio, a administração registra no sistema a foto do item, sua descrição e o local onde foi encontrado. Essas informações são publicadas no feed de Achados e Perdidos, que pode ser acessado pelos moradores, facilitando a localização e recuperação de itens perdidos.

**Oportunidades de Melhoria:**

**Desafios Anteriores:**
Condomínios muitas vezes dependiam de registros manuais e comunicados informais para gerenciar itens perdidos, o que levava a confusões e perda de controle sobre os objetos. Muitos itens ficavam sem identificação ou eram mal administrados pela equipe.

**Melhorias Implementadas:**

Registro Automatizado: O sistema de Achados e Perdidos agora centraliza e organiza todos os itens encontrados, proporcionando um controle mais eficiente.
Transparência no Processo: O registro da retirada, com data e hora, oferece mais segurança para os moradores, garantindo que cada etapa do processo seja registrada de forma transparente.
Facilidade para Moradores: A visualização de itens através do feed com fotos facilita a identificação de objetos, agilizando o processo de recuperação.

![Exemplo de um Modelo BPMN do PROCESSO 1](images/processo-6-achados-e-perdidos.png "Modelo BPMN do Processo 1.")

#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 5. 
Devem estar relacionadas com o modelo de processo apresentado anteriormente._


**Cadastrar item perdido**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
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
