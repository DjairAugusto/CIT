### 3.3.3 Processo 3 – Entregas e Encomendas

_Apresente aqui o nome e as oportunidades de melhoria para o processo 3. 
Em seguida, apresente o modelo do processo 3, descrito no padrão BPMN._

![Exemplo de um Modelo BPMN do PROCESSO 3](images/processo-XII-entregas-e-encomendas.png "Modelo BPMN do Processo 3.")


#### Detalhamento das atividades

**Cadastrar Encomendas**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Data e Hora de recebimento     | Data e Hora   | Data e hora superior ou anterior da atual |  Data e hora atual              |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Cadastrar              | Enviar notificação             | default           |
