### 3.3.11 Processo 11 – Cadastro de Apartamento

![Modelo BPMN do PROCESSO 11](images/processo-cadastro-de-moradores.png "Modelo BPMN do Processo 11.")

#### Detalhamento das atividades

**Inserir Token do apartamento**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Token           | Link             |     Formato de Link     |    NULO           |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Entrar com Token] | Início do processo de cadastro  | (default  ) |


**Escolher quantidade de moradores**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Número de Moradores | Número  |     mínimo 1 morador           |       1            |


**Inserir dados de cada morador**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Nome             | Área de Texto  |                |    mínimo de 2 caracteres               |
|      Celular  com DDD     |      Área de Texto            |        mínimo de 10 caracteres        |                   |
|      E-mail        |         Área de Texto         |         formato de e-mail       |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Possui Automóveis?] | Início do processo de cadastro de automóveis  | (default  ) |


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



**Definir Login e Senha para perfil principal**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| login           | Caixa de Texto   | formato de e-mail |                |
| senha           | Caixa de Texto   | mínimo de 8 caracteres |           |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Deseja perfil secundário?] | Definir Login e Senha para perfil secundário  | (default  ) |

**Definir Login e Senha para perfil secundário**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| login           | Caixa de Texto   | formato de e-mail |                |
| senha           | Caixa de Texto   | mínimo de 8 caracteres |           |
