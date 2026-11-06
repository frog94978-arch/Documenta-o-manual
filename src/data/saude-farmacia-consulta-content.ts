export const saudeFarmaciaConsultaContent: Record<string, string> = {
  "Consulta Geral da Saúde": `Essa consulta, realizada de modo individual - por paciente, permite uma visão global da utilização dos serviços de saúde pelo indivíduo dentro do município. É possível visualizar todos os registros relacionados ao paciente, independente da Unidade de Saúde do município e do módulo que tenha realizado o registro (desde que a mesma também utilize o e-Cidade).

\`\`\`
DB:SAÚDE > Agendamento > Consultas > Consulta Geral da Saúde
\`\`\`

A pesquisa pode ser realizada pelo número do cartão SUS, pelo CGS (Cadastro Geral de Saúde) ou nome do paciente.

[![](https://e-cidade.wiki.br/saude/farmacia/files/im3.png)](https://e-cidade.wiki.br/saude/farmacia/files/im3.png)

Os registros que serão visualizados são: Informações pessoais, documentos, cartão SUS, agendamentos, atendimentos, farmácia, laboratório e TFD.

[![](https://e-cidade.wiki.br/saude/farmacia/files/im1.png)](https://e-cidade.wiki.br/saude/farmacia/files/im1.png)

Além disso, é possível selecionar quais dessas informações que se deseja imprimir, optando pela impressão sintética ou analítica do relatório.

[![](https://e-cidade.wiki.br/saude/farmacia/files/im2.png)](https://e-cidade.wiki.br/saude/farmacia/files/im2.png)`,
  Paciente: `Permite consultar por paciente as suas retiradas de medicamento da farmácia por um determinado período. Nesta consulta pode ser tirado dois relatórios (Sintético e Analítico) de suas retiradas, assim fornecendo dados para o controle das retiradas.
Outra funcionalidade é que o usuário pode clicar no registro da consulta na tela, assim abre outra tela com os medicamentos retirados e um botão para emitir o recibo de retirada para o paciente.

\`\`\`
DB: Farmácia > Consultas > Paciente
\`\`\`

*Campos*
**Consulta:** Neste campo é selecionado o tipo de pesquisa, a única disponível nesta versão é a de (Retirada).
**Período:** Colocar a data inicial e final do período que se quer pesquisar, caso o usuário não selecione nenhuma data o sistema busca todos os registros de retirada para o CGS selecionado.
**CGS:** Colocar o código do CGS (Paciente) ou clicar no link para pesquisar o nome do paciente.

[![](https://e-cidade.wiki.br/saude/farmacia/files/110.png)](https://e-cidade.wiki.br/saude/farmacia/files/110.png)

### Sintético

[![](https://e-cidade.wiki.br/saude/farmacia/files/220.png)](https://e-cidade.wiki.br/saude/farmacia/files/220.png)

### Analitico

[![](https://e-cidade.wiki.br/saude/farmacia/files/330.png)](https://e-cidade.wiki.br/saude/farmacia/files/330.png)

### Tela de consulta dos medicamentos

[![](https://e-cidade.wiki.br/saude/farmacia/files/440.png)](https://e-cidade.wiki.br/saude/farmacia/files/440.png)`,
};
