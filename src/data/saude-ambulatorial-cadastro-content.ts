export const saudeAmbulatorialCadastroContent: Record<string, string> = {
  "Setor Ambulatorial": `Este cadastro serve para identificar os setores de atendimentos no qual os pacientes irão percorrer dentro das Unidades de Saúde.

Esse dado aparece sempre que o paciente for encaminhado para outro setor durante o atendimento, através dos menus: **DB:SAÚDE > Ambulatorial > Procedimentos > Recepção; DB:SAÚDE >Ambulatorial > Procedimentos > Triagem e DB:SAÚDE > Ambulatorial > Procedimentos > Atendimento.**

### Inclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Setor Ambulatorial > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image166.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image166.png)

- **Setor:** registrar um nome para o setor;
- **Local:** vincular o setor a uma das opções de locais existentes, de acordo com a rotina que será utilizada;

**NOTA:** a opção externo do local é utilizada na rotina de Agendamento Unificado do módulo Agendamento.

### Alteração

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Setor Ambulatorial > Alteração
\`\`\`

Essa rotina permite visualizar os setores de atendimento já cadastrados no sistema, bem como alterar a descrição, desde que não tenha sido registrado atendimento.

A pesquisa pode ser realizada pelo campo Código ou pelo campo Setor.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image799.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image799.png)

### Exclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Setor Ambulatorial > Exclusão
\`\`\`

Possibilita a exclusão do tipo de atendimento, desde que já não esteja vinculado a um atendimento.`,
  "Motivo de ausência": `O cadastro dos motivos de ausência serve para indicar as situações nas quais os profissionais de saúde bloqueiam a agenda de atendimento.

Esse dado é utilizado no menu: **DB:SAÚDE > Ambulatorial > Cadastros > Profissional de Saúde** e reflete nos menus: **DB:SAÚDE > Agendamento > Procedimentos > Agendamento de Consultas/ Agendamento de Consulta Simplificado/ Agendamento Unificado.**

### Inclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Motivo de Ausência > Inclusão
\`\`\`

Registrar o motivo pelos quais os profissionais de saúde bloqueiam sua agenda profissional. O código é gerado automaticamente pelo sistema. Exemplos: curso, folga, feriado, férias.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image677.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image677.png)

### Alteração

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Motivo de Ausência > Alteração
\`\`\`

Essa rotina permite visualizar os motivos de ausência dos profissionais já cadastrados no sistema, bem como alterar a descrição.

A pesquisa pode ser realizada pelo código ou pela descrição definida.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image555.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image555.png)

### Exclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Motivo de Ausência > Exclusão
\`\`\`

Possibilita a exclusão do motivo, desde que já não esteja vinculado a uma agenda profissional.`,
  "Motivo Atendimento": `Esse cadastro serve para identificar o motivo do paciente requerer o atendimento. Esse dado é incluído no momento da recepção do paciente na Unidade de Saúde através do menu:
**DB:SAÚDE > Ambulatorial > Procedimentos > Recepção.**

### Inclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Motivo Atendimento > Inclusão
\`\`\`

Registrar os tipos de atendimentos realizados nas Unidades. O código é gerado automaticamente pelo sistema. Exemplos: Pré-natal, Puericultura, Puerperal, Retirada de Pontos.
O checkbox motivo padrão é utilizado para agilizar, na recepção do paciente, deixando a opção marcada setada no campo.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image5555.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image5555.png)

### Alteração

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Motivo Atendimento > Alteração
\`\`\`

Essa rotina permite visualizar os motivos de atendimentos já cadastrados no sistema, bem como alterar o nome do motivo.

A pesquisa pode ser realizada pelo código ou pela descrição definida.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image744.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image744.png)

### Exclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Motivo Atendimento > Exclusão
\`\`\`

Possibilita a exclusão do motivo, desde que já não esteja vinculado a um registro de atendimento.`,
  "Tipo Atendimento": `Esse cadastro serve para identificar a natureza do atendimento do paciente. Esse dado é incluído no momento da Recepção do paciente na Unidade de Saúde através do menu:
**DB:SAÚDE > Ambulatorial > Procedimentos > Recepção.**

### Inclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Tipo Atendimento > Inclusão
\`\`\`

Registrar os tipos de atendimentos realizados nas Unidades. O código é gerado automaticamente pelo sistema.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/atendimentotipo.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/atendimentotipo.png)

**Lembrete:** O sistema já tem cadastrado os tipos de atendimentos que são obrigatórios quando o envio dos dados é pelo E-SUS.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image644.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image644.png)

### Alteração

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Tipo Atendimento > Alteração
\`\`\`

Essa rotina permite visualizar os tipos de atendimentos já cadastrados no sistema, bem como alterar o nome do atendimento.

A pesquisa pode ser realizada pelo código ou pela descrição definida.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image277.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image277.png)

### Exclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Tipo Atendimento > Exclusão
\`\`\`

Possibilita a exclusão do tipo de atendimento, desde que já não esteja vinculado a um atendimento.`,
  "Fator de Risco": `Esse cadastro identifica os problemas/condições de saúde que referem algum fator de risco para o desenvolvimento de doenças crônicas não transmissíveis (DCNT) nos pacientes. Exemplos de fatores de risco mencionados pelos órgãos de saúde: tabagismo, obesidade, diabetes, entre outros.

Esse dado é incluído (não obrigatório) no momento do Atendimento do paciente na Unidade de Saúde através do menu: **DB:SAÚDE > Ambulatorial > Procedimentos > Atendimento > Fatores de Risco.**

### Inclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Fator de Risco > Inclusão
\`\`\`

Registrar o fator de risco no qual os pacientes podem apresentar em relação ao desenvolvimento de doenças crônicas. O código é gerado automaticamente pelo sistema.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image711.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image711.png)

### Alteração

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Fator de Risco > Alteração
\`\`\`

Essa rotina permite visualizar os fatores de risco já cadastrados no sistema, bem como alterar a descrição do fator.

A pesquisa pode ser realizada pelo código ou pela descrição definida.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image488.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image488.png)

### Exclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Fator de Risco > Exclusão
\`\`\`

Possibilita a exclusão do fator, desde que já não esteja vinculado a um registro de atendimento.`,
  "Profissional de Saúde": `Todos os profissionais que geram produção devem ser cadastrados como profissionais de saúde, bem como vinculados a(s) unidade(s) as quais atuam. As informações detalhadas de cada profissional devem estar sempre atualizadas, conforme o CNES (Cadastro Nacional de Estabelecimentos de Saúde). No site do CNES é possível fazer uma consulta dos dados básicos dos profissionais cadastrados no município.

Para os profissionais que possuem agendas de atendimentos, deve-se definir as informações relacionadas na aba Horários. Já os bloqueios das agendas são registrados na aba Ausências.

Cada aba da tela de cadastro (dados pessoais, outros dados, vínculo, horários, ausências e procedimentos) são independentes, isto é, ao incluir/alterar/excluir um dado é necessário confirmar a ação na mesma tela.

### Inclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Profissional de Saúde > Inclusão
\`\`\`

Registrar os profissionais de saúde que geram produção, criar a agenda de atendimentos, informar bloqueio da agenda.

*Aba Dados Pessoais*

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image533.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image533.png)

O cadastro dos profissionais só é possível quando esse profissional já possui um CGM (Cadastro Geral do Município) cadastrado. Logo, os dados obrigatórios para essa inscrição advém do cadastro no CGM (nome e endereço).

O código do profissional é gerado automaticamente pelo sistema.

*Aba Outros Dados*

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image566.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image566.png)

O preenchimento do campo CNS, apesar de não estar como obrigatório sistema, é primordial para a correta contabilização da produção dos serviços executados pelo profissional. Caso não seja informado, o profissional não terá sua produção medida.
Já os demais campos são de preenchimento facultativo, para uso do usuário que deseja ter maior detalhamento das informações do profissional.

*Aba Vínculo*

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image388.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image388.png)

Após o cadastro inicial, os profissionais devem ser vinculados às unidades de saúde nas quais atuam. Os campos obrigatórios desta aba são: Unidade, Especialidade e Carga Horária Semanal.

**Código:** o código do profissional é gerado automaticamente pelo sistema;
**Unidade:** unidade de saúde no qual o profissional irá prestar atendimento. Deve-se incluir todos os locais de trabalho do profissional que gere registro no sistema;
**Registro:** número do registro profissional no órgão de classe (se houver);
**Órgão Emissor:** órgão de classe, se registro profissional declarado;
**Especialidade:** CBO (Classificação Brasileira de Ocupação) de acordo com a atuação do profissional;
**Ativ. Principal:** (ver ser quando o profissional tiver mais de um CBO essa informação não é a primeira a ser exibida no atendimento);
**CBOs:** as informações refletem na finalização do atendimento em: DB: SAÚDE > Ambulatorial > Atendimento > aba Procedimentos > botão “Finalizar Atendimento”. As opções de finalização do atendimento são alteradas de acordo com o CBO escolhido nesse campo, indo ao encontro das informações existentes nas fichas de ESF.
A validação do Dentista é por esse campo, se não tiver marcado a ficha de odonto não será gerada;
**Vinculação/ Tipo Vínculo/ Subtipo:** detalham o tipo de contratação do profissional pelo município (campos copiados do CNES);
**Carga Horária Semanal:** Ambulatorial, Hospitalar e Outros: tempo de atuação semanal do profissional em atividades ambulatoriais, atividades hospitalares ou outras áreas (que não ambulatorial ou hospitalar). Quando o profissional não atender um ou mais quesitos, deve-se preencher o(s) campo(s) com zero (0).

**Atendimento**

- **Situação:** informar se o profissional está exercendo atividade na Unidade (ativo) ou não (desativado). Quando o profissional não exercer mais atividades na Unidade apenas Inativar seu cadastro.

**Lembrete:** Se a opção estiver como “desativado” o profissional não conseguirá registrar seus atendimentos (módulo ESF - Todas as fichas e módulo Ambulatorial: Triagem e Atendimento).

- **SUS:** informar se o profissional presta atendimento pelo SUS (sim/não).

**Lembrete:** Se a opção estiver como “não”, os registros desse profissional (CBO) não serão contabilizados no arquivo gerado do BPA (Boletim de Produção Ambulatorial), bem como nos relatórios.

**Lembrete:** Só é possível excluir o vínculo quando não há registro de atendimento para esse profissional. Quando o profissional não exercer mais atividades na Unidade inativar seu cadastro no campo “Situação” com a opção Desativado.

*Aba Horários*

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image311.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image311.png)

Cadastrar a agenda dos profissionais que utilizam para atendimentos. Caso o profissional atenda por demanda espontânea não é necessário preencher essa aba.

**Profissional:** informação carregada automaticamente, de acordo com o profissional selecionado;
**Vínculo:** CBO do profissional para o qual será aberta agenda de atendimento;
**Unidade:** informação carregada automaticamente, quando o vínculo é selecionado;
**Tipo Grade:** forma de exibição dos horários na grade da agenda.

- **Intervalo:** horários com intervalo de tempo. Calculado automaticamente pelo sistema conforme o horário definido para início e fim dos atendimentos, dividido pelo número de fichas (fichas + reservas) determinados para aquele dia. Exemplo: para que as divisões dos horários na agenda fiquem de 20/20 min em atendimentos das 08:00 às 12:00 deve-se ter ao todos 12 fichas distribuídas em “fichas” e “reservas”;
- **Período:** todos os horários disponíveis na agenda são identificados com o horário definido para o início. Esse tipo de agenda é utilizada para atendimentos realizados por ordem de chegada. Exemplo: em atendimentos das 08:00 às 12:00, todos as fichas da agenda são exibidas com horário das 08:00;

**Tipo Ficha:** tipo de atendimento que será exibido na agenda do profissional, serve para identificar os atendimentos e organizar as agendas. Exemplos: consulta, reconsulta, pré-natal, puericultura. Opções são cadastradas no menu: DB:SAÚDE > Agendamento > Cadastros > Tipo de Ficha > Inclusão;
**Dia da Semana:** dias da semana no qual o profissional atenderá essa agenda;
**Periodicidade:** período no qual a agenda será criada - semanal, quinzenal ou mensal. Se mensal, informar qual a semana do mês;
**Data de Validade:** data de início de validade da agenda e data de conclusão da agenda (se houver). Se a agenda for permanente não incluir a data fim.

**Lembrete:** Para cancelar toda a agenda, quando o profissional não for mais atender, inclua a data de validade final. O bloqueio parcial da agenda, por um período, por exemplo, deve ser incluído na aba Ausências.

**Horário:** horário inicial e final de atendimento do profissional. O sistema distribui o horários levando em consideração todo o horário de atendimento, por isso no horário final registrar o horário no qual “termina o expediente” do profissional;
**Fichas:** número de atendimentos (consultas) regulares disponíveis para o agendamento;
**Reservas:** números de fichas reservas (se houver) disponíveis para agendamento. Quando não houver disponibilidade preencher o campo com zero (0).

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image733.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image733.png)

**Mostrar Todas as Agendas:** quando marcada, exibe todas as agendas do profissional, inclusive as desativadas. Se não selecionado, exibe somente as agendas ativas do profissional;
**Opções da Grade:** modificações da informações geradas na grade;

- **Alterar A:** a alteração da agenda (grade de horário) só é possível nos campos: tipo de grade, tipo de ficha e a data de validade (fim) da agenda; todos os demais campos ficam bloqueados. Se a agenda já está encerrada (inativa) não é possível alterar nenhuma informação.
- **Excluir E:** a exclusão da agenda só é permitida quando não há agendamentos registrados.

*Aba Ausências*
*Aba Procedimentos*

### Alteração

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Profissional de Saúde > Alteração
\`\`\`

Registrar os profissionais de saúde que geram produção, criar a agenda de atendimentos, informar bloqueio da agenda.

A pesquisa é realizada pelo codigo do profissional ou pelo nome.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image477.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image477.png)

### Exclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Profissional de Saúde > Exclusão
\`\`\`

Registrar os profissionais de saúde que geram produção, criar a agenda de atendimentos, informar bloqueio da agenda.`,
  "Distritos Sanitários": `Os distritos sanitários compreendem divisões territoriais dentro do município como forma de organização sanitária; sendo mais utilizado em municípios populosos. Caso o município não tenha essa divisão, é possível registrar como “sem distrito”.

### Inclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Distritos Sanitários > Inclusão
\`\`\`

Registrar o nome dos distritos existentes no município.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image622.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image622.png)

### Alteração

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Distritos Sanitários > Alteração
\`\`\`

Essa rotina permite visualizar os tipos de distritos já cadastrados no sistema, bem como alterar o nome da ficha.

A pesquisa pode ser realizada pelo código do distrito ou pela descrição definida.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image122.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image122.png)

### Exclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Distritos Sanitários > Exclusão
\`\`\`

Possibilita a exclusão dos distritos, desde que já não esteja vinculado a uma UPS (Unidade Prestadora de Serviço).`,
  "UPS": `Os campos existentes no cadastro das UPSs (Unidade Prestadora de Serviços) são muito semelhantes aos dados registrados para os estabelecimentos de saúde no CNES (Cadastro Nacional dos Estabelecimentos de Saúde). Os municípios conhecem as informações que deverão ser incluídas, entretanto, ainda assim, os dados podem ser consultados no site do CNES.

### Inclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > UPS > Inclusão UPS
\`\`\`

Incluir a Unidade Prestadora dos Serviços de Saúde. Exemplos de unidades: UBS, ESF, Farmácia, Secretaria Municipal de Saúde.

Os campos obrigatórios do cadastro são: Unidade, Estabelecimento e Distrito.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i24.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i24.png)

Na aba caracterização o campo turno de atendimento permite que possa ser criada uma agenda para o profissional. Quando dado não informado ao tentar registrar uma agenda para um profissional exibe como mensagem: “Campo turno não informado”.

Ver campo: Central de Agendamento sim/não

### Alteração

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > UPS > Alteração UPS
\`\`\`

Essa rotina permite visualizar as UPS já cadastrados no sistema, bem como atualizar algum campo do registro.

A pesquisa pode ser realizada pelo código ou pela descrição da UPS.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image42.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image42.png)

### Exclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > UPS > Exclusão UPS
\`\`\`

Possibilita a exclusão das UPS, desde que já não esteja a algum outro cadastro (profissional).`,
  "Família": `O cadastro das famílias é utilizado para identificar uma família pertencente à Unidade de Saúde.

Esse dado (não obrigatório) é incluído no Cadastro Geral de Saúde - CGS do paciente através do menu: **DB:SAÚDE > Ambulatorial > Cadastros > Manutenção do CGS >** aba **Outros Dados**; e exibido na recepção do paciente em: **DB:SAÚDE > Ambulatorial > Procedimentos > Recepção**.

**Lembrete:** Nas Unidades que possuem ESF (Equipes de Saúde da Família), esse dado é o mesmo informado no campo “Nº Prontuário Familiar” do Cadastro Domiciliar, entretanto não há vinculação entre as informações.

### Inclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Família > Inclusão
\`\`\`

Registrar as famílias pertencentes às Unidades de Saúde. Normalmente, o campo Família é definido por números sequenciais. O código é gerado automaticamente pelo sistema.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/familiaa.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/familiaa.png)

### Alteração

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Família > Alteração
\`\`\`

Essa rotina permite visualizar as famílias já cadastradas no sistema, bem como alterar a descrição.

A pesquisa pode ser realizada pelo código ou pela descrição definida.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i41.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i41.png)

### Exclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Família > Exclusão
\`\`\`

Possibilita a exclusão da família, desde que já não esteja vinculada ao cadastro de um paciente (CGS - Cadastro Geral de Saúde).`,
  "Micro Área": `As microáreas correspondem ao espaço geográfico delimitado onde residem até 750 pessoas e que representam à área de atuação de um Agente Comunitário de Saúde (ACS), sendo, portanto, utilizado apenas nas Unidades de Saúde que possuem ESF (Equipes de Saúde da Família).

Esse dado (não obrigatório) é incluído no Cadastro Geral de Saúde - CGS do paciente através do menu: **DB:SAÚDE > Ambulatorial > Cadastros > Manutenção do CGS >** aba **Outros Dados**; e exibido na recepção do paciente em: **DB:SAÚDE > Ambulatorial > Procedimentos > Recepção**.

### Inclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Microárea > Inclusão
\`\`\`

Registrar as microáreas pertencentes às Unidades de Saúde. O código é gerado automaticamente pelo sistema.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/microa.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/microa.png)

### Alteração

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Microárea > Alteração
\`\`\`

Essa rotina permite visualizar as microáreas já cadastradas no sistema, bem como alterar a descrição.

A pesquisa pode ser realizada pelo código ou pela descrição definida.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i21.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i21.png)

### Exclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Microárea > Exclusão
\`\`\`

Possibilita a exclusão da microárea, desde que já não esteja vinculada a uma família.`,
  "Família / Micro Área": `Este cadastro tem a finalidade de vincular a família cadastrada e a microárea pertencente a ESF (Equipe de Saúde da Família) da Unidade de Saúde.

Esse dado (não obrigatório) é incluído no Cadastro Geral de Saúde - CGS do paciente através do menu: **DB:SAÚDE > Ambulatorial > Cadastros > Manutenção do CGS >** aba **Outros Dados;** e exibido na recepção do paciente em: **DB:SAÚDE > Ambulatorial > Procedimentos > Recepção.**

### Inclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Família/ Microárea
\`\`\`

Vincular as famílias com as microáreas cadastradas. O código é gerado automaticamente pelo sistema.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/MF.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/MF.png)

### Alteração

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Família/ Microárea
\`\`\`

Essa rotina permite visualizar o vínculo existente entre as famílias e as microáreas cadastradas no sistema, bem como alterar a combinação.

A pesquisa pode ser realizada pelo código ou pela descrição definida.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i65.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i65.png)

### Exclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Família/ Microárea
\`\`\`

Possibilita a exclusão dos registros.`,
  "Tabelas Nacionais": `As tabelas nacionais representam as tabelas de procedimentos, medicamentos, órteses, próteses e materiais especiais (OPM) do SUS, sendo fundamentais para o faturamento dos serviços de saúde. São dados importados do SIGTAP (Sistema de Gerenciamento da Tabela de Procedimentos, OPM e Medicamentos do SUS) para o sistema, através do menu: **DB: SAÚDE > Ambulatorial > Procedimentos > Atualização Tabelas > SIA/SUS** (os detalhes serão informados no menu específico).

Os menus relacionados a tabelas nacionais possuem como funcionalidade consultar as informações sobre compatibilidades, relacionamentos, estrutura (formas de organização, grupo e subgrupo) bem como, CID, complexidade, financiamento, serviço de classificação e habilitação para os serviços de saúde executados por meio do SUS.

Na maioria dos menus, entretanto, é permitido alterar e/ou excluir dados, porém, tais ações não são aconselháveis, visto que as tabelas possuem as informações e possibilidades adequadas para o faturamento correto dos serviços e as modificações podem resultar no não pagamento do serviço prestado (glosa). Pelos motivos explanados acima, os menus não serão detalhados.`,
  "Ações Programaticas": `As ações programáticas são maneiras de organizar o cuidado em saúde. Tanto o governo federal, quanto o estadual empregam na sua estrutura os programas como forma de conduzir os serviços de saúde.

Esse cadastro serve para identificar o programa (ação) no qual o atendimento do paciente vai se enquadrar, permitindo monitorar, pelo quantitativo de atendimentos, qual ação necessita maior empenho da equipe de saúde. Esse dado é incluído no momento da Recepção do paciente na Unidade de Saúde através do menu:
**DB:SAÚDE > Ambulatorial > Procedimentos > Recepção.**

### Inclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Ação Programática > Inclusão
\`\`\`

Registrar os tipos de ações atendidas nas Unidades. O código é gerado automaticamente pelo sistema.
O checkbox motivo padrão é utilizado para agilizar, na recepção do paciente, deixando a opção marcada setada no campo.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image588.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image588.png)

### Alteração

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Ação Programática > Alteração
\`\`\`

Essa rotina permite visualizar as ações já cadastradas no sistema, bem como alterar o nome do motivo.

A pesquisa pode ser realizada pelo código ou pela descrição definida.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/image511.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/image511.png)

### Exclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Ação Programática > Exclusão
\`\`\`

Possibilita a exclusão da ação, desde que já não esteja vinculado a um registro de atendimento.`,
  "Conteúdo de Medicamento": `Esse cadastro permite especificar a quantidade de conteúdo de uma unidade do medicamento que entrou no estoque para ser administrado. Deve ser cadastrado o conteúdo de todos os medicamentos que terão sua administração fracionada. Caso o medicamento não precise ser fracionado para ser administrado, não é necessário o cadastro de seu conteúdo.

Esse dado será utilizado no menu: **DB:SAÚDE > Ambulatorial > Procedimentos >Triagem**, quando o profissional de saúde administrar um medicamento ao paciente. Tal registro do dado pelo usuário será apenas para inclusão correta da informação no prontuário do paciente, pois não há vinculação, de fato, com o estoque do produto na Unidade.

### Inclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Conteúdo de Medicamento > Inclusão
\`\`\`

Registrar o conteúdo das embalagens de medicamentos que serão fracionados para sua administração. Ao selecionar o produto, será exibida a unidade cadastrada para o material.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i23.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i23.png)

### Alteração

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Conteúdo de Medicamento > Alteração
\`\`\`

Essa rotina permite visualizar os medicamentos que tiveram seus conteúdos especificados no sistema, bem como alterar a quantidade de cada embalagem.

A pesquisa pode ser realizada pelo código ou pela descrição definida.

[![](https://e-cidade.wiki.br/saude/ambulatorial/files/i81.png)](https://e-cidade.wiki.br/saude/ambulatorial/files/i81.png)

### Exclusão

\`\`\`
DB:SAÚDE > Ambulatorial > Cadastros > Conteúdo de Medicamento > Exclusão
\`\`\`

Possibilita a exclusão dos medicamentos e conteúdos.`,
};
