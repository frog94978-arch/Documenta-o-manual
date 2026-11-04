export const saudeAgendamentoCadastroContent: Record<string, string> = {
  "Tipo de Ficha": `O Tipo de Ficha é empregado para a identificação dos atendimentos e organização das agendas.

### Inclusão

\`\`\`
DB: SAÚDE > Agendamento > Cadastros > Tipo de Ficha > Inclusão
\`\`\`

Possibilidade de registrar o nome do tipo de ficha (atendimento) que será exibido na agenda do profissional. Exemplos: consulta, reconsulta, pré-natal e puericultura. O código é gerado automaticamente pelo sistema.

[![](https://e-cidade.wiki.br/saude/agendamento/files/fichatipo.png)](https://e-cidade.wiki.br/saude/agendamento/files/fichatipo.png)

### Alteração

\`\`\`
DB: SAÚDE > Agendamento > Cadastros > Tipo de Ficha > Alteração
\`\`\`

Essa rotina permite visualizar os tipos de fichas já cadastradas no sistema e alterar o nome da ficha. A pesquisa pode ser realizada pelo código gerado pelo sistema na inclusão ou pela descrição definida.

[![](https://e-cidade.wiki.br/saude/agendamento/files/image58.png)](https://e-cidade.wiki.br/saude/agendamento/files/image58.png)

### Exclusão

\`\`\`
DB: SAÚDE > Agendamento > Cadastros > Tipo de Ficha > Exclusão
\`\`\`

Possibilita excluir tipos de ficha, desde que não haja consultas agendadas na grade de horário vinculada ao tipo que se deseja excluir.`,
};
