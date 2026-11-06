export const saudeFarmaciaProcedimentosContent: Record<string, string> = {
  "Entrega de Medicamento": `Nesta rotina é realizada a entrega de medicamentos aos pacientes; envolvendo a movimentação de saldo dos medicamentos diretamente no Módulo Materiais.

\`\`\`
DB: Farmácia > Procedimentos > Entrega de Medicamentos
\`\`\`

**Cartão SUS:** Preencher com o número do Cartão SUS do paciente;
**CGS:** Inserir o código CGS do Paciente ou clicar no link para pesquisar o nome do paciente;
**Receita:** Inserir o código da receita do paciente ou clicar no link para realizar a pesquisa caso tenha sido preescrita utilizando o sistema e-Cidade. Possibilidade de tornar o campo obrigatório para preenchimento;
**Tipo de Receita:** Selecionar o tipo de receita referente a entrega do medicamento para os pacientes;
**Validade:** Informação preenchida automaticamente e data validada, se a receita for preescita pelo médico utilizando o sistema e-Cidade. Nesse caso, a dispensação só é possível se a receita estiver dentro da data de validade determinada pelo médico. Caso a receita não tenha sido gerada pelo sistema, campo fica bloqueado.
**Número da notificação:** Colocar o número da notificação informado na receita azul (só é necessário colocar o número da notificação se for selecionado tipo da receita azul).
**Profissional:** Colocar o código do profissional responsável pela prescrição da receita ou clicar no link do Profissional para pesquisar pelo nome.
**Medicamento:** Colocar o código do medicamento ou clicar no link Medicamento e pesquisar pelo nome. Depois de selecionado o sistema mostrará o saldo do medicamento.
**Quantidade dispensada:** Lançar a quantidade do item que se quer retirar, neste caso, somente a quantidade disponível no campo saldo.
**Ver lote:** Este campo só é visualizado quando o medicamento está vinculado a um material que controla a validade do item. Caso o usuário não olhe o lote, o usuário pode escolher qual lote quer ser retirado.
**Saldo:** Neste campo o usuário pode visualizar o saldo do medicamento em estoque.
**Posologia:** Colocar a posologia prescrita pelo médico na receita.

[![](https://e-cidade.wiki.br/saude/farmacia/files/550.png)](https://e-cidade.wiki.br/saude/farmacia/files/550.png)

[![](https://e-cidade.wiki.br/saude/farmacia/files/660.png)](https://e-cidade.wiki.br/saude/farmacia/files/660.png)`,
  "Devolução de Medicamentos": `Este procedimento realiza a devolução dos medicamentos, caso o paciente não use todos os que retirou e deseja devolvê-los.

\`\`\`
DB: Farmácia > Procedimentos > Devolução de Medicamentos
\`\`\`

**CGS:** Indique o CGS do paciente que deseja devolver o medicamento, ou clique no link para pesquisar pelo nome.
**Medicamentos:** Indique o medicamento a ser devolvido pelo paciente, ou clique no link para pesquisar pelo nome. Caso tenha apenas um medicamento retirado, ao clicar no link ele aparecerá automaticamente.
**Quantidade:** Indique a quantidade a ser devolvida.
**Motivo:** Indique o motivo pelo qual o paciente está devolvendo o medicamento.

[![](https://e-cidade.wiki.br/saude/farmacia/files/770.png)](https://e-cidade.wiki.br/saude/farmacia/files/770.png)`,
  "Medicamento Continuado": `Este procedimento realiza o cadastro dos medicamentos controlados por paciente, permitindo ao administrador controlar os ciclos de entrega por medicamento, cada um é controlado separadamente na hora da entrega do medicamento.
Esta rotina faz toda validação na entrega do medicamento, pois verifica o saldo dos medicamentos dentro de uma frequência de retiradas do paciente e não diretamente no saldo do medicamento.

\`\`\`
DB: Farmácia > Procedimentos > Medicamentos Continuados
\`\`\`

**Campos CGS:** Colocar o código do CGS (Paciente) ou clicar no link para pesquisar o nome.
**Medicamento:** Colocar o código do medicamento ou clicar no link para pesquisar o nome.
**Quantidade:** Neste campo deve ser preenchido com a quantidade de medicamento que o paciente retira dentro de uma frequência.
**Frequência:** Neste campo deve ser preenchido o período de retirada do medicamento, neste caso, deve ser em dias.
**Margem:** Neste campo deve ser preenchido os dias de tolerância de cada medicamento.
**Programa:** Colocar o programa em que o medicamento controlado pertence.
**Observação:** Colocar as observações que serão impressas na Carteirinha do paciente.

*Validade*
**Início:** Data de início do controle de retirada do medicamento.
**Fim:** Data de fim do controle de retirada do medicamento.

[![](https://e-cidade.wiki.br/saude/farmacia/files/880.png)](https://e-cidade.wiki.br/saude/farmacia/files/880.png)

**Imprimir Carteirinha:**Este botão permite emitir uma carteirinha por CGS (Paciente), cada carteirinha vale por exercício, tendo que ser renovada por ano.

### Modelo de carteirinha

[![](https://e-cidade.wiki.br/saude/farmacia/files/990.png)](https://e-cidade.wiki.br/saude/farmacia/files/990.png)`,
  "Geração Livro dos Controlados": `Este procedimento é usado para gerar o livro dos medicamentos controlados.

\`\`\`
DB: Farmácia > Procedimentos > Geração Livro dos Controlados
\`\`\`

**Código:** Este campo é gerado automaticamente.
**Período:** Indique o período para gerar o livro.
**Livro:** Selecione o tipo de livro a ser gerado.
**Filtro:** Filtrar por remédio ou por data.

[![](https://e-cidade.wiki.br/saude/farmacia/files/1110.png)](https://e-cidade.wiki.br/saude/farmacia/files/1110.png)`,
};
