export const saudeAmbulatorialProcedimentosContent: Record<string, string> = {
  "Recepção": `\`\`\`
DB:SAÚDE > Ambulatorial > Procedimentos > Recepção
\`\`\`

A recepção, é o primeiro contato do paciente com a Unidade. Pode ser realizada pesquisando pela Agenda vinculada a aquele atendimento (se atendimento agendado previamente) ou pelo CGS do paciente. Em ambos casos, ao selecionar a informação, o sistema exibirá os dados cadastrados daquele paciente.

**Obs:** O campo UPS já estará preenchido conforme o departamento selecionado pelo usuário.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i3.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i3.png)

Se vincular o paciente pela agenda, o profissional e a especialidade já são exibidos nos respectivos campos para o profissional do atendimento. Caso o vínculo do paciente seja pelo CGS, os campos aparecerão em branco disponíveis para preenchimento.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i37.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i37.png)

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i33.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i33.png)

**Tipo de atendimento:** identifica a natureza do atendimento do paciente, com uma das opções existentes. O sistema já tem cadastrado os tipos de atendimentos que são obrigatórios quando o envio dos dados é pelo E-SUS. Para os outros casos, é possível incluir novas opções (DB:SAÚDE > Ambulatorial > Cadastros > Motivo Atendimento > Inclusão);
**Motivo:** identifica o motivo do paciente requerer o atendimento com uma das opções cadastradas e definidas pelo cliente em DB:SAÚDE > Ambulatorial > Cadastros > Motivo Atendimento > Inclusão. O sistema já traz setada a opção marcada como “motivo padrão” no cadastro;
**Ação Programática:** identifica o programa (ação) no qual o atendimento do paciente se enquadra com uma das opções cadastradas e definidas pelo cliente em DB:SAÚDE > Ambulatorial > Cadastros > Ação Programática > Inclusão. O sistema já traz setada a opção marcada como “motivo padrão” no cadastro;
**Setor:** identifica o setor no qual o paciente está em atendimento. Na tela da recepção, o sistema vai exibir o nome do setor que estiver sido cadastrado com o local “Recepção” em DB:SAÚDE > Ambulatorial > Cadastros > Setor Ambulatorial > Inclusão;
**Local de Atendimento:** identifica o local no qual está sendo executado o atendimento do paciente, com uma das opções existentes. As alternativas não são passíveis de alteração, já que são obrigatórias quando o envio dos dados é pelo E-SUS.

**Lembrete:** O preenchimento dos campos Profissional e Especialidade refletem no profissional que fará o atendimento pelo menu Atendimento (DB:SAÚDE > Ambulatorial > Procedimentos > Atendimento).

Quando a informação preenchida, o profissional lá na tela de atendimento, ao pesquisar o paciente, deve selecionar, no campo Agenda, a opção “Pacientes” para que o paciente seja listado.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i54.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i54.png)

Menu: **DB:SAÚDE > Ambulatorial > Procedimentos > Atendimento >** aba **Procedimentos** > botão “Consultar Pacientes”

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i18.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i18.png)

Já quando esse campo não for preenchido, os pacientes disponíveis para o atendimento ficarão visíveis ao profissional quando for selecionado a opção “Urgência” no campo Agenda.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i49.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i49.png)

Menu: **DB:SAÚDE > Ambulatorial > Procedimentos > Atendimento >** aba **Procedimentos** > botão “Consultar Pacientes”

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i72.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i72.png)

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i76.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i76.png)

**Confirmar:** salva os dados inseridos (obrigatório para realizar qualquer outra ação);
**Pesquisar:** permite que pesquise o paciente
**Nova FAA:**
**Finalizar Atendimento:** termina o atendimento. É usado quando o paciente não terá continuidade no atendimento, nem por outro profissional (vai embora);
**Encaminhar:** encaminha o paciente para outro setor.

O campo descritivo **Observação** tem a função de informar o profissional do setor selecionado alguma notificação.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i22.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i22.png)`,
  "Triagem": `\`\`\`
DB:SAÚDE > Ambulatorial > Procedimentos > Triagem
\`\`\`

A triagem é o processo, utilizado na atenção básica, de separação, escolha e seleção, no qual o Enfermeiro ou o Técnico de Enfermagem ouve a queixa do paciente e o direciona para atendimento de outro profissional. Vale ressaltar que nem todas as unidades básicas adotam em seus protocolos essa rotina. Quando não, o paciente é encaminhado da recepção direto para o atendimento.

*Aba Triagem*

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i30.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i30.png)

A triagem pode ser iniciada pesquisando os pacientes que estão aguardando atendimento pela listagem exibida ao abrir o menu ou pesquisando pelo botão “Atendimento” ao final da tela.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i26.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i26.png)

**Atendimentos:** pesquisa os pacientes que estão na lista aguardando atendimento (encaminhados da recepção);
**Salvar:** salva os dados inseridos (obrigatório para realizar qualquer outra ação);
**Encaminhar:** encaminha o paciente para o próximo setor. O setor é definido pelo cliente e cadastrado em

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i22.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i22.png)

### Finalizar Atendimento

**Administração de Medicamentos:** registro dos medicamentos que foram administrados no paciente durante a triagem.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i1.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i1.png)

**Prescrição:**
**Emitir FAA:**

*Aba Procedimentos Faturáveis*

*Aba Folha de rosto*

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i7.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i7.png)`,
  "Atendimento": `\`\`\`
DB:SAÚDE > Ambulatorial > Procedimentos > Atendimento
\`\`\`

Após a triagem o paciente é encaminhado para o atendimento (e já ficará aparente o paciente encaminhado no menu Atendimento), e lá o médico/enfermeiro poderá preencher com os procedimentos e informações realizadas.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i75.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i75.png)

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i28.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i28.png)

O profissional deverá clicar sobre o nome do paciente a ser atendido e preencher o atendimento.
Os campos **Procedimento** e **CIAP 2** são obrigatórios.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i32.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i32.png)

Após a inclusão de todas as informações necessárias será necessário o profissional clicar no botão “**Incluir**”, para que as informações sejam cadastradas e salvas no sistema.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i13.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i13.png)

***Botão:** ATESTADO*

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i9.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i9.png)

O profissional deve informar o documento a ser impresso no atestado, se haverá ou não a impressão do CID e os dias de afastamento do paciente.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i10.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i10.png)

***Tipo de Atestado:** PADRÃO*

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i60.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i60.png)

O Atestado Médico em Branco é para os casos nos quais o atestado médico padrão não atende a necessidade de preenchimento do profissional.

***Botão:** ENCAMINHAR*

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i43.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i43.png)

O profissional também pode encaminhar o paciente para algum outro atendimento após o dele (triagem, consulta com enfermeira), basta clicar em “**Encaminhar**” e selecionar o profissional desejado.

Ao clicar no botão “**Prosseguir**” é possível acessar as outras abas disponíveis na rotina de Atendimento.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i11.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i11.png)

\`\`\`
DB:SAÚDE > Ambulatorial > Procedimentos > Atendimento > aba DIAGNÓSTICO
\`\`\`

Nesse momento é possível incluir no prontuário o diagnóstico do paciente, após clicar em “**Gravar**”.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i61.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i61.png)

\`\`\`
DB:SAÚDE > Ambulatorial > Procedimentos > Atendimento > aba RECEITA
\`\`\`

A aba de Receita é para que o médico preescreva medicamentos e possa imprimir uma receita digitalizada. As informações incluídas nessa aba também ficam salvas no prontuário do paciente e no registro do atendimento.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i63.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i63.png)

**Dados Obrigatórios:**
Tipo de receita e validade; Medicamento; Posologia; Quantidade e Uso.

No campo Medicamento, o sistema trará os medicamentos pela tabela Anvisa e não somente pelos produtos cadastrados na farmácia, permitindo lançar os medicamentos sem estoque no município.

Após o lançamento, clicar em “**Emitir Receita**”

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i40.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i40.png)

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i80.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i80.png)

\`\`\`
DB:SAÚDE > Ambulatorial > Procedimentos > Atendimento > aba ENCAMINHAMENTOS
\`\`\`

A aba de Encaminhamentos possibilita que o médico ao encaminhar o paciente para um exame ou consulta fora da Unidade possa registrar e imprimir o documento.

Para consultas, será necessário selecionar a Especialidade + o Procedimento. Já para Exames, selecionar apenas o Procedimento.

Após registros das informações, clicar em "**Confirmar**".

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i78.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i78.png)

Para emitir o encaminhamento, clicar em "**Imprimir**".

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i29.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i29.png)

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i2.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i2.png)

\`\`\`
DB:SAÚDE > Ambulatorial > Procedimentos > Atendimento > aba REQUISIÇÃO DE EXAMES
\`\`\`

A aba Requisição de Exames permite que o médico registre a solicitação de exames e imprima esse documento.
Após adicionar um ou mais exames, clicar em “**Salvar**” e, se desejar, em “**Imprimir**”.

O campo **observação** trará o diagnóstico que foi preenchido na aba diagnóstico.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i44.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i44.png)

*Tipo de Relatório*

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i34.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i34.png)

Para a finalização do atendimento é necessário retornar à tela inicial na aba Procedimentos, clicar em “**Finalizar Atendimento**” e selecionar o motivo da alta do paciente.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i20.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i20.png)

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i14.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i14.png)`,
};
