export const saudeAgendamentoProcedimentosContent: Record<string, string> = {
  "Agendamento de Consultas": `\`\`\`
DB:SAÚDE > Agendamento > Procedimentos > Agendamento de Consultas
\`\`\`

Os agendamentos podem ser realizados pesquisando na agenda primeiro a **Especialidade** e depois o **Profissional** ou direto o Profissional de saúde. Em ambos casos, o sistema exibirá para seleção os profissionais vinculados a Unidade e/ou a Especialidade.

Obs: O campo Unidade já estará preenchido com o departamento no qual o usuário está logado.

[![](https://e-cidade.wiki.br/saude/agendamento/files/agcon1.png)](https://e-cidade.wiki.br/saude/agendamento/files/agcon1.png)

Selecionando o profissional o sistema exibe o calendário com os dias nos quais há disponibilidade para atendimento.

[![](https://e-cidade.wiki.br/saude/agendamento/files/agcon2.png)](https://e-cidade.wiki.br/saude/agendamento/files/agcon2.png)

No calendário, as indicações de Ausente, Liberado, Marcado e Lotado são visualizadas nas datas e referem-se à disponibilidade ou não de horários para agendamentos.

[![](https://e-cidade.wiki.br/saude/agendamento/files/agcon3.png)](https://e-cidade.wiki.br/saude/agendamento/files/agcon3.png)

**Ausente:** indica que o profissional bloqueou a agenda naquela data;
**Liberado:** indica que todos os horários disponíveis da agenda estão livres para marcação;
**Marcado:** indica que, pelo menos, um dos horários daquela data já foi agendado;
**Lotado:** indica que todos os horários estão marcados naquela data e não há disponibilidade para novos agendamentos.

Clicando em uma data no calendário, será exibida a grade de horário do dia que foi definida no módulo Ambulatorial. Esta grade de horário listará os horários, por Intervalo ou Período, que estarão disponíveis para o agendamento.

[![](https://e-cidade.wiki.br/saude/agendamento/files/agcon4.png)](https://e-cidade.wiki.br/saude/agendamento/files/agcon4.png)

Se o tipo de grade definido para a agenda for INTERVALO, em cada linha, serão exibidos o horário inicial e final previstos para o atendimento.

[![](https://e-cidade.wiki.br/saude/agendamento/files/agcon5.png)](https://e-cidade.wiki.br/saude/agendamento/files/agcon5.png)

Se o tipo de grade definido para a agenda for PERÍODO, em cada linha, serão exibidos apenas horário inicial para os atendimentos; e todas as fichas terão o mesmo horário. O horário exibido corresponde ao horário inicial definido na agenda para atendimento do profissional. Esse tipo de agenda é utilizada para atendimentos realizados por ordem de chegada.

[![](https://e-cidade.wiki.br/saude/agendamento/files/agcon6.png)](https://e-cidade.wiki.br/saude/agendamento/files/agcon6.png)

Cada linha da grade de horário exibe o número da ficha correspondente, o horário inicial e final ou somente o horário inicial agendado, a indicação de horário reserva da agenda, o tipo de grade escolhido, o CGS e Nome do paciente, além das opções L = Lançar, A = Anular, C = Comprovante e F = Emissão de FAA que corresponderão às seguintes funcionalidades no sistema:

[![](https://e-cidade.wiki.br/saude/agendamento/files/agcon7.png)](https://e-cidade.wiki.br/saude/agendamento/files/agcon7.png)

- **L = Lançar:** inclui o paciente na agenda;
A pesquisa é realizada pelo cadastro do paciente (CGS).

[![](https://e-cidade.wiki.br/saude/agendamento/files/agcon8.png)](https://e-cidade.wiki.br/saude/agendamento/files/agcon8.png)

- **A = Anular:** anula o agendamento;
Na tela de Anulação do agendamento, o sistema já traz o número do agendamento da consulta, bem como a data no qual o agendamento está sendo anulado. Dentre as opções possíveis de anulação estão:
CANCELADO: quando é o paciente quem solicita;
FALTOU: quando o paciente não comparece a consulta; ou
OUTROS: quando o motivo não contempla uma das situações anteriores. Para esta opção é possível ainda informar o Motivo específico.

[![](https://e-cidade.wiki.br/saude/agendamento/files/cap1.png)](https://e-cidade.wiki.br/saude/agendamento/files/cap1.png)

**Lembrete:** Quando anulado um agendamento, o sistema libera o horário para que outro paciente possa ser marcado. Porém, ao consultar o relatório de agendamentos ou o histórico do paciente essa informação estará presente.

- **C = Comprovante:** emite o comprovante de agendamento;
Na impressão do comprovante existe a opção do formato PDF ou TXT.

[![](https://e-cidade.wiki.br/saude/agendamento/files/cap2.png)](https://e-cidade.wiki.br/saude/agendamento/files/cap2.png)

- **F = Emissão de FAA:** emite a FAA (Ficha de Atendimento Ambulatorial) do paciente;
A impressão da FAA, com as informações do atendimento do paciente, deve ser realizada na mesma data do atendimento, já que não é possível acessar, pela agenda, datas anteriores.

[![](https://e-cidade.wiki.br/saude/agendamento/files/cap3.png)](https://e-cidade.wiki.br/saude/agendamento/files/cap3.png)`,
  Transferência: `As transferências dos agendamentos podem ser parciais ou totais, além da possibilidade de ser para o mesmo profissional ou para outro. Entretanto, para que sejam possíveis alguns critérios são exigidos:

- a especialidade do profissional (CBO) deve ser o mesma; e
- a grade de horários do dia de ambas as agendas (a de origem e a de destino) devem ser iguais, quer dizer, o tipo de grade (intervalo ou período), o tipo de ficha e os horários disponíveis devem ser os mesmos.

\`\`\`
DB:SAÚDE > Agendamento > Procedimentos > Transferência
\`\`\`

A transferência pode ser iniciada pesquisando pelos dados do agendamento que se quer alterar. Selecionando o **Profissional de Saúde**, a **Especialidade** e a agenda, o sistema exibe o calendário com os dias nos quais há disponibilidade para transferência.

[![](https://e-cidade.wiki.br/saude/agendamento/files/unif16.png)](https://e-cidade.wiki.br/saude/agendamento/files/unif16.png)

Selecionando a data, será exibida a agenda do dia com as marcações que poderão ser transferidas.

[![](https://e-cidade.wiki.br/saude/agendamento/files/image15.png)](https://e-cidade.wiki.br/saude/agendamento/files/image15.png)

O mesmo processo deve ser realizado na agenda para onde serão transferidos os agendamentos.

[![](https://e-cidade.wiki.br/saude/agendamento/files/unif18.png)](https://e-cidade.wiki.br/saude/agendamento/files/unif18.png)

A seleção é realizada marcando o checkbox dos agendamentos que serão transferidos, na agenda de origem, e selecionando a agenda de destino.

[![](https://e-cidade.wiki.br/saude/agendamento/files/unif19.png)](https://e-cidade.wiki.br/saude/agendamento/files/unif19.png)

Os agendamentos serão transferidos na mesma ordem no qual estão registrados na agenda de origem, sendo possível alterar no botão de ordenação. Os dados são salvos quando confirmados.

[![](https://e-cidade.wiki.br/saude/agendamento/files/unif20.png)](https://e-cidade.wiki.br/saude/agendamento/files/unif20.png)`,
  "Gerar FAs": `\`\`\`
DB:SAÚDE > Agendamento > Procedimentos > Gerar FAs
\`\`\`

Selecionando o Profissional de Saúde, a Especialidade e a agenda, o sistema exibe o calendário com os dias nos quais há agenda disponível.

[![](https://e-cidade.wiki.br/saude/agendamento/files/image47.png)](https://e-cidade.wiki.br/saude/agendamento/files/image47.png)

Selecionando a data, será exibida a agenda do dia com os agendamentos que poderão ser emitidas as FAAs.

[![](https://e-cidade.wiki.br/saude/agendamento/files/unif17.png)](https://e-cidade.wiki.br/saude/agendamento/files/unif17.png)

A seleção acontece quando o checkbox com os agendamentos são marcados e a emissão realizada quando geradas as FAAs.

[![](https://e-cidade.wiki.br/saude/agendamento/files/image66.png)](https://e-cidade.wiki.br/saude/agendamento/files/image66.png)

**Lembrete:** A FAA deve ser emitida, por esse menu, na mesma data ou em datas posteriores ao atendimento, já que não é possível acessar as datas anteriores.

Documento FAA

[![](https://e-cidade.wiki.br/saude/agendamento/files/cap3.png)](https://e-cidade.wiki.br/saude/agendamento/files/cap3.png)`,
  "Agendamento de Consulta Simplificado": `\`\`\`
DB:SAÚDE > Agendamento > Procedimentos > Agendamento de Consulta Simplificado
\`\`\`

Os agendamentos podem ser realizados pesquisando na agenda primeiro a Especialidade e depois o Profissional ou direto o Profissional de saúde. Em ambos casos, o sistema exibirá para seleção os profissionais vinculados a Unidade e/ou a Especialidade.

Obs.: O campo Unidade já estará preenchido com o departamento no qual o usuário está logado.

[![](https://e-cidade.wiki.br/saude/agendamento/files/simp1.png)](https://e-cidade.wiki.br/saude/agendamento/files/simp1.png)

Selecionando o profissional o sistema exibe o calendário com os dias nos quais há disponibilidade para atendimento.

[![](https://e-cidade.wiki.br/saude/agendamento/files/simp2.png)](https://e-cidade.wiki.br/saude/agendamento/files/simp2.png)

Clicando em uma data no calendário, o sistema exibe a grade de horário vinculada a agenda, bem como o número de fichas disponíveis para o agendamento nesse dia.
A inclusão do paciente é feita pela indicação ou pesquisa do CGS.

[![](https://e-cidade.wiki.br/saude/agendamento/files/simp3.png)](https://e-cidade.wiki.br/saude/agendamento/files/simp3.png)

**Lembrete:** Esse tipo de agendamento é possível somente quando a grade da agenda é do tipo **Período**.

Com a confirmação do agendamento, os botões FAA, Prontuário, Comprovante, Consultas e Anula são habilitados.

[![](https://e-cidade.wiki.br/saude/agendamento/files/simp4.png)](https://e-cidade.wiki.br/saude/agendamento/files/simp4.png)

**- FAA:** emite a FAA (Ficha de Atendimento Ambulatorial) do paciente;

A impressão da FAA, com as informações do atendimento do paciente, deve ser realizada na mesma data do atendimento, já que não é possível acessar, pela agenda, datas anteriores.

**- Prontuário:** emite o prontuário eletrônico do paciente;

[![](https://e-cidade.wiki.br/saude/agendamento/files/simp5.png)](https://e-cidade.wiki.br/saude/agendamento/files/simp5.png)

**- Comprovante:** emite o comprovante de agendamento;

Na impressão do comprovante existe a opção do formato PDF ou TXT.

[![](https://e-cidade.wiki.br/saude/agendamento/files/image14.png)](https://e-cidade.wiki.br/saude/agendamento/files/image14.png)

**- Consultas:** exibe a agenda de consultas, com os horários disponíveis e agendados para aquela data;

[![](https://e-cidade.wiki.br/saude/agendamento/files/simp7.png)](https://e-cidade.wiki.br/saude/agendamento/files/simp7.png)

**- Anula:** anula o agendamento;
Na tela de Anulação do agendamento, o sistema já traz o número do agendamento da consulta, bem como a data no qual o agendamento está sendo anulado. Dentre as opções possíveis de anulação estão:

CANCELADO: quando é o paciente quem solicita;
FALTOU: quando o paciente não comparece a consulta; ou
OUTROS: quando o motivo não contempla uma das situações anteriores. Para esta opção é possível ainda informar o Motivo específico.

[![](https://e-cidade.wiki.br/saude/agendamento/files/cap1.png)](https://e-cidade.wiki.br/saude/agendamento/files/cap1.png)

**Lembrete:** Quando anulado um agendamento, o sistema libera o horário para que outro paciente possa ser marcado.`,
  "Anular Agendamentos": `\`\`\`
DB:SAÚDE > Agendamento > Procedimentos > Anular Agendamentos > Anular
\`\`\`

A anulação do agendamento pode ser realizada pesquisando pelo Profissional de Saúde e a Especialidade. Ao selecionar a agenda é exibido o calendário com as datas conforme a disponibilidade da agenda desse profissional (indicações em cor para ausência, liberada, marcada e lotada).

[![](https://e-cidade.wiki.br/saude/agendamento/files/image62.png)](https://e-cidade.wiki.br/saude/agendamento/files/image62.png)

Marcando o checkbox dos agendamentos que se deseja anular, o sistema exibe, nas informações da anulação, a data atual, não sendo possível alterá-la. Dentre as opções possíveis de anulação estão:

CANCELADO: quando é o paciente quem solicita;
FALTOU: quando o paciente não comparece a consulta; ou
OUTROS: quando o motivo não contempla uma das situações anteriores. Para esta opção é possível ainda informar o Motivo específico.

[![](https://e-cidade.wiki.br/saude/agendamento/files/image49.png)](https://e-cidade.wiki.br/saude/agendamento/files/image49.png)

**Lembrete:** Quando anulado um agendamento, o sistema libera o horário para que outro paciente possa ser marcado. Porém, ao consultar o relatório de agendamentos ou o histórico do paciente essa informação estará presente.

### Desanular

\`\`\`
DB:SAÚDE > Agendamento > Procedimentos > Anular Agendamentos > Desanular
\`\`\`

A desanulação de um agendamento pode ser realizada pesquisando pelo Profissional de Saúde e a Especialidade. Ao selecionar a agenda, é exibido o calendário com as datas que tiveram agendamentos anulados em destaque (cor verde) e que o processo poderá ser revertido.

[![](https://e-cidade.wiki.br/saude/agendamento/files/image71.png)](https://e-cidade.wiki.br/saude/agendamento/files/image71.png)

Selecionando a data, será exibida a agenda do dia com os agendamentos que foram anulados.

[![](https://e-cidade.wiki.br/saude/agendamento/files/image50.png)](https://e-cidade.wiki.br/saude/agendamento/files/image50.png)

A seleção acontece quando o checkbox com os agendamentos são marcados e o motivo informado. Assim como para anular, ao desanular o sistema exibe, a data atual, não sendo possível alterá-la.

[![](https://e-cidade.wiki.br/saude/agendamento/files/image21.png)](https://e-cidade.wiki.br/saude/agendamento/files/image21.png)`,
  "Agendamento Unificado": `\`\`\`
DB:SAÚDE > Agendamento > Procedimentos > Agendamento Unificado
\`\`\`

Os agendamentos podem ser realizados pesquisando na agenda primeiro a Especialidade e depois o Profissional ou direto o Profissional de saúde. Em ambos casos, o sistema exibirá para seleção os profissionais vinculados a Unidade e/ou a Especialidade.

Obs.: O campo Unidade já estará preenchido com o departamento no qual o usuário está logado.

[![](https://e-cidade.wiki.br/saude/agendamento/files/agcon1.png)](https://e-cidade.wiki.br/saude/agendamento/files/agcon1.png)

Selecionando o profissional o sistema exibe o calendário com os dias nos quais há disponibilidade para atendimento.

[![](https://e-cidade.wiki.br/saude/agendamento/files/unificado.png)](https://e-cidade.wiki.br/saude/agendamento/files/unificado.png)

No calendário, as indicações de Ausente, Liberado, Marcado e Lotado são visualizadas nas datas e referem-se a disponibilidade ou não de horários para agendamentos.

[![](https://e-cidade.wiki.br/saude/agendamento/files/agcon3.png)](https://e-cidade.wiki.br/saude/agendamento/files/agcon3.png)

**Ausente:** indica que o profissional bloqueou a agenda naquela data;
**Liberado:** indica que todos os horários disponíveis da agenda estão livres para marcação;
**Marcado:** indica que, pelo menos, um dos horários daquela data já foi agendado;
**Lotado:** indica que todos os horários estão marcados naquela data e não há disponibilidade para novos agendamentos.

Clicando em uma data no calendário, será exibida a grade de horário do dia que foi definida no módulo Ambulatorial. Esta grade de horário listará os horários, por Intervalo ou Período, que estarão disponíveis para o agendamento.

[![](https://e-cidade.wiki.br/saude/agendamento/files/unif5.png)](https://e-cidade.wiki.br/saude/agendamento/files/unif5.png)

Se o tipo de grade definido para a agenda for INTERVALO, em cada linha, serão exibidos horários diferentes para agendamento conforme quantidade de fichas definidas para o dia e o tempo determinado para atendimento do profissional.

[![](https://e-cidade.wiki.br/saude/agendamento/files/inif6.png)](https://e-cidade.wiki.br/saude/agendamento/files/inif6.png)

Se o tipo de grade definido para a agenda for PÉRÍODO serão exibidos todas as fichas com o mesmo horário. Esse horário corresponde ao horário inicial definido na agenda para atendimento do profissional. Esse tipo de agenda é utilizada para atendimentos realizados por ordem de chegada.

[![](https://e-cidade.wiki.br/saude/agendamento/files/unif7.png)](https://e-cidade.wiki.br/saude/agendamento/files/unif7.png)

Cada linha da grade de horário exibe o número da ficha correspondente, o tipo de ficha definido, o horário inicial agendado, o CGS e o Nome do paciente.

[![](https://e-cidade.wiki.br/saude/agendamento/files/unif8.png)](https://e-cidade.wiki.br/saude/agendamento/files/unif8.png)

A direita da tela, estão exibidos as opções que trazem funcionalidade para a agenda:

[![](https://e-cidade.wiki.br/saude/agendamento/files/unif9.png)](https://e-cidade.wiki.br/saude/agendamento/files/unif9.png)

**- Agendar:** inclui o paciente na agenda;
**- Anular**: anula o agendamento;
**- Presença:** confirma a presença do paciente no atendimento;
**- Observação:** permite incluir alguma observação nos agendamentos;
**- Transferência:** permite a transferência dos agendamentos;
**- Relatório:** permite imprimir todos os agendamentos do profissional da saúde para a data que está selecionada no calendário;
**- Ausência:** bloqueia a agenda do profissional de saúde;
**- Comprovante:** emite o comprovante de agendamento;
**- Consulta Geral:** permite uma visão global da utilização dos serviços de saúde pelo indivíduo dentro do município;
**- FAA:** emite a FAA (Ficha de Atendimento Ambulatorial) do paciente.`,
};
