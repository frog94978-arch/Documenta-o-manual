export const educacaoEscolaCadastroContent: Record<string, string> = {
  Tabelas: `# Tabelas: Dias Letivos

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Tabelas > Dias Letivos
\`\`\`

Neste menu deverão ser informados os dias da semana que serão considerados letivos pela escola.

**Observação:** Como nem todos os sábados são letivos, eles não devem ser marcados nesta tabela. O lançamento dos sábados letivos deverá ser realizado no cadastro do calendário.

[![Tabela de dias letivos](https://e-cidade.wiki.br/educacao/escola/files/tabela_dia_letivo.png)](https://e-cidade.wiki.br/educacao/escola/files/tabela_dia_letivo.png)`,
  "Dados da Escola": `# Inclusão

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Dados da Escola
\`\`\`

## Aba Geral

Nesta aba serão informados os dados gerais da escola.

**Campos:**
- **Código da Escola:** preenchido automaticamente com o código do departamento correspondente à escola.
- **Situação de Fracionamento:** selecione se a escola está em atividade, paralisada ou extinta.
- **Nome da Escola:** nome da escola que está sendo cadastrada.
- **Nome Abrev.:** nome abreviado da escola, se houver.
- **Código INEP:** código INEP da escola; campo obrigatório.
- **Ano Início:** ano em que a escola iniciou suas atividades.
- **CNPJ:** campo não obrigatório.
- **Credenciamento:** selecione se a escola está credenciada, em tramitação ou não credenciada.
- **Estado, Cidade, Distrito, Bairro, Endereço, Número, Complemento e CEP:** informações de localização e endereço da escola.
- **Zona:** selecione se a escola está localizada em zona urbana ou rural.
- **Órgão de Ensino:** órgão de ensino da escola.
- **Dependência Administrativa:** esfera de ensino à qual a escola é subordinada: federal, estadual, municipal ou privada.
- **Localização Diferenciada:** indique se a escola está em área de assentamento, remanescente de quilombos, terra indígena ou se não se aplica.
- **Educação Indígena:** indique se a escola oferece Educação Indígena. Se selecionar Sim, informe se a língua ministrada é portuguesa ou indígena. Ao selecionar a língua indígena, o sistema habilitará os campos para informar as línguas ministradas; clique no link Língua Indígena para pesquisá-las.
- **Logotipo:** permite carregar o logotipo da escola para exibição em relatórios. O arquivo deverá estar no formato JPG.

[![Cadastro da escola](https://e-cidade.wiki.br/educacao/escola/files/cadastro_escola.jpg)](https://e-cidade.wiki.br/educacao/escola/files/cadastro_escola.jpg)

## Aba Contatos

Nesta aba serão informadas as formas de contato com a escola, como e-mail, home page e telefones.

- Para informar o **e-mail** e a **home page**, digite os endereços nos campos e clique em **Alterar**.
- Para informar os **telefones**, clique no link **Tipo de Telefone**, pesquise e selecione o tipo, digite o DDD, o número e o ramal, se houver.

[![Contatos da escola](https://e-cidade.wiki.br/educacao/escola/files/Contatos_escola.jpg)](https://e-cidade.wiki.br/educacao/escola/files/Contatos_escola.jpg)

## Aba Infraestrutura

Nesta aba serão informados os dados de infraestrutura exigidos pelo censo: dependências, local de funcionamento, equipamentos, abastecimento de água e energia elétrica, esgoto sanitário, destinação do lixo, material didático específico, água filtrada, oferta de merenda e atividade complementar, compartilhamento do prédio (incluindo o código INEP da outra escola), quantidade de salas existentes e utilizadas como salas de aula e informações sobre computadores e acesso à internet, inclusive se a conexão é banda larga.

[![Aba infraestrutura](https://e-cidade.wiki.br/educacao/escola/files/aba_infraestrutura.jpg)](https://e-cidade.wiki.br/educacao/escola/files/aba_infraestrutura.jpg)

## Aba Diretores

Nesta aba serão cadastrados os diretores da escola. Clique no link **Diretor** e pesquise entre os Recursos Humanos vinculados à escola. Após selecionar o recurso, selecione o turno, pesquise o ato legal da nomeação, informe o e-mail do diretor e a data de início do exercício. A data final somente deverá ser informada quando a situação do exercício estiver fechada.

[![Aba diretores](https://e-cidade.wiki.br/educacao/escola/files/aba_diretores.jpg)](https://e-cidade.wiki.br/educacao/escola/files/aba_diretores.jpg)

## Aba Horários da Escola — Horários de Funcionamento

Cadastre os horários de funcionamento da escola. Selecione o turno (manhã, tarde ou noite) e informe a hora de início e a hora de fim. Repita o processo para cada turno. Em turno integral, o horário de término da manhã deve ser igual ao horário de início da tarde.

[![Horário de funcionamento](https://e-cidade.wiki.br/educacao/escola/files/horario_de_funcionamento.png)](https://e-cidade.wiki.br/educacao/escola/files/horario_de_funcionamento.png)

## Aba Horários da Escola — Horários de Aula

Selecione o turno e marque os períodos que serão cadastrados. Para frequência por dia letivo (Educação Infantil e anos iniciais), marque somente o primeiro período e informe **H. Início** e **H. Fim**. Para os anos finais, cuja frequência é calculada por hora-aula, marque os períodos utilizados pela escola e informe o horário de cada um; assim será possível vincular disciplinas e docentes a cada horário da turma. Em turno integral, selecione o turno correspondente, marque o primeiro e o segundo período e informe os horários de cada um, representando os períodos da manhã e da tarde.

[![Horários de aula](https://e-cidade.wiki.br/educacao/escola/files/aba_horarios_.jpg)](https://e-cidade.wiki.br/educacao/escola/files/aba_horarios_.jpg)

## Aba Gestor

Informe o gestor responsável pelas informações do censo escolar. Clique no link **Gestor**, pesquise entre os Recursos Humanos da escola, selecione o gestor e clique em **Salvar**.

[![Aba gestor](https://e-cidade.wiki.br/educacao/escola/files/aba_gestor.jpg)](https://e-cidade.wiki.br/educacao/escola/files/aba_gestor.jpg)`,
  "Dependências da Escola": `# Cadastro

Cadastre as dependências da escola, como salas de aula, secretaria, biblioteca e diretoria, incluindo sua capacidade, em **DB: EDUCAÇÃO > Escola > Cadastros > Dependências da Escola**.

Clique no link **Tipo de Dependência**, pesquise e selecione o tipo de sala, informe a descrição (nome), a capacidade e se a dependência é própria da escola. Para salas de aula, informe também a metragem; o sistema calculará e sugerirá automaticamente a capacidade.

[![Dependências da escola](https://e-cidade.wiki.br/educacao/escola/files/dependencia_escola.jpg)](https://e-cidade.wiki.br/educacao/escola/files/dependencia_escola.jpg)

Conforme o Parecer 1.400/2002, recomenda-se 1,20 m² por aluno em cada sala. Os limites recomendados por turma são:

- **1º ano:** até 25 alunos;
- **2º ao 4º ano:** até 30 alunos;
- **5º ao 9º ano:** até 35 alunos.

Antes de cadastrar as dependências, configure o parâmetro **Medida em m² por aluno em sala de aula** em **DB: EDUCAÇÃO > Escola > Procedimentos > Parâmetros > Parâmetros Globais**.

[![Parâmetro de medida em m²](https://e-cidade.wiki.br/educacao/escola/files/Campo_Medida_em_m2.png)](https://e-cidade.wiki.br/educacao/escola/files/Campo_Medida_em_m2.png)`,
  "Atos / Justificativas": `# Inclusão de Atos Legais

Atos legais regulamentam o funcionamento da escola, seus cursos e bases curriculares.

## Aba Ato Legal

[![Atos legais](https://e-cidade.wiki.br/educacao/escola/files/atos_legais.png)](https://e-cidade.wiki.br/educacao/escola/files/atos_legais.png)

**Campos**
- **Número:** número do ato legal.
- **Finalidade:** finalidade para a qual foi emitido.
- **Tipo:** tipo de ato expedido, como decreto, portaria ou parecer.
- **Competência:** esfera responsável pela instituição: municipal, estadual ou federal.
- **Ano:** ano de emissão.
- **Órgão Emitente:** órgão que emitiu o ato.
- **Vigência:** data em que o ato entrou em vigor.
- **Aprovação:** data em que foi aprovado.
- **Publicação:** data de publicação.

## Aba Anexar Documento

Permite anexar o documento do ato legal nos formatos DOC, ODT, PNG, JPEG, PDF ou GIF. Posteriormente, ele poderá ser consultado em **Consultas > Legislação**.

[![Anexar arquivo do ato legal](https://e-cidade.wiki.br/educacao/escola/files/anexar_arquivo_ato_legal.png)](https://e-cidade.wiki.br/educacao/escola/files/anexar_arquivo_ato_legal.png)

## Alteração e exclusão de atos legais

É possível alterar os campos do ato selecionado. A exclusão somente será permitida se o ato não estiver vinculado a nenhum curso ou base curricular.

# Inclusão de Justificativas Legais

Justificativas legais descrevem situações de dispensa ou amparo e seu respectivo embasamento legal, como atestado médico, atestado de óbito ou dispensa da prática de Educação Física.

[![Justificativa legal](https://e-cidade.wiki.br/educacao/escola/files/Justificativa.png)](https://e-cidade.wiki.br/educacao/escola/files/Justificativa.png)

**Campos**
- **Descrição:** texto que justifica a dispensa.
- **Ativo:** indica se a justificativa está ativa.

## Alteração e exclusão de justificativas

É possível alterar os campos da justificativa selecionada. A exclusão somente será permitida se ela não estiver vinculada a nenhuma ação de abono ou amparo de um aluno.`,
  "Cursos na Escola": `# Vincular curso

Vincule os cursos que a escola está autorizada a oferecer. Acesse **DB: EDUCAÇÃO > Escola > Cadastros > Cursos na Escola > Vincular Curso**. O sistema abrirá uma pesquisa dos cursos cadastrados; selecione o curso desejado.

[![Pesquisa de curso](https://e-cidade.wiki.br/educacao/escola/files/pesquisa_de_curso.png)](https://e-cidade.wiki.br/educacao/escola/files/pesquisa_de_curso.png)

## Aba Curso

Após selecionar o curso, serão exibidas suas informações:
- **Código** e **Nome do curso:** carregados automaticamente.
- **Nível de Ensino:** nível ao qual o curso pertence.
- **Incluir no Histórico:** indica se o curso gerará histórico para o aluno após o encerramento das avaliações.

[![Selecionar curso](https://e-cidade.wiki.br/educacao/escola/files/selecionar_curso.jpg)](https://e-cidade.wiki.br/educacao/escola/files/selecionar_curso.jpg)

## Aba Vincular Curso

- **Curso:** preenchido automaticamente conforme a seleção na aba Curso.
- **Escola:** preenchida automaticamente com o nome da escola.
- **Ativo:** selecione Sim se o curso estiver em atividade na escola; caso contrário, selecione Não.
- **Permite mais de uma turma por sala:** indique se uma sala poderá ser ocupada por mais de uma turma no mesmo turno.

## Aba Turno

Clique no link **Turno**, pesquise os turnos disponíveis, selecione os turnos em que o curso será oferecido e clique em **Incluir**.

[![Aba turno](https://e-cidade.wiki.br/educacao/escola/files/aba_turno.jpg)](https://e-cidade.wiki.br/educacao/escola/files/aba_turno.jpg)

## Aba Legislação

Clique no link **Ato Legal** e selecione o ato que regulamenta o curso. Se o ato abranger somente algumas etapas, desmarque as etapas não regulamentadas.

**Observação:** se a escola possuir somente um ato legal, o sistema o selecionará automaticamente sem abrir a pesquisa.`,
  Calendários: `# Inclusão e alteração

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Calendários > Inclusão
DB: EDUCAÇÃO > Escola > Cadastros > Calendários > Alteração
\`\`\`

## Passo 1: Aba Geral

Define as datas de início e fim dos períodos de avaliação e do ano letivo para uma etapa da vida escolar dos alunos. Apresenta o número de dias e semanas letivas. A escola pode manter vários calendários em andamento simultaneamente.

[![Calendário letivo — aba geral](https://e-cidade.wiki.br/educacao/escola/files/calendario_letivo_aba_geral.png)](https://e-cidade.wiki.br/educacao/escola/files/calendario_letivo_aba_geral.png)

- **Descrição:** nome do calendário, incluindo o ano.
- **Duração:** período total do calendário. Clique no link **Duração** e selecione um período na pesquisa.
- **Ano:** ano e período de vigência.
- **Data Inicial:** primeiro dia válido do ano letivo, quando as aulas começam.
- **Data Final:** último dia de aula do ano letivo.
- **Data Resultado Final:** data limite para divulgação do resultado das avaliações finais.
- **Dias Letivos e Semanas Letivas:** calculados pelo sistema após a definição dos períodos de avaliação.
- **Calendário Anterior:** calendário que precede o atual. Quando houver calendário anterior, o preenchimento é obrigatório. Selecione-o na pesquisa. Os dados dos alunos (aprovações, reprovações, notas e históricos, entre outros) somente serão transportados se o calendário anterior estiver vinculado ao novo calendário.

## Passo 2: Aba Períodos de Avaliação

Informe os períodos em que os alunos serão avaliados. As datas não devem se sobrepor quando apurarem frequência e carga horária, nem ultrapassar os limites de validade do calendário.

[![Períodos de avaliação](https://e-cidade.wiki.br/educacao/escola/files/calendario_letivo_calendario_alteracao.png)](https://e-cidade.wiki.br/educacao/escola/files/calendario_letivo_calendario_alteracao.png)

- **Período de Avaliação:** clique no link e selecione um período cadastrado.
- **Data Inicial e Data Final:** início e fim do período de avaliação.
- **Dias Letivos e Semanas Letivas:** após informar as datas, clique na tela para o sistema calcular os valores.
- **Total de Dias e Total de Semanas:** totais dos períodos cadastrados, preenchidos automaticamente.

## Passo 3: Aba Feriados e Eventos

Informe os dias que não devem ser considerados letivos, como feriados e recessos. Ao incluir o calendário, o sistema cadastra os principais feriados nacionais entre as datas inicial e final como não letivos. Nesta aba, eles podem ser adicionados, alterados ou excluídos, e cada evento pode ser indicado como letivo ou não letivo. O sistema recalcula os dias letivos após cada alteração. Eventos letivos ficam separados dos não letivos.

[![Feriados e eventos](https://e-cidade.wiki.br/educacao/escola/files/calendario_letivo_feriados_eventos.png)](https://e-cidade.wiki.br/educacao/escola/files/calendario_letivo_feriados_eventos.png)

- **Tipo de Evento:** selecione o tipo na pesquisa.
- **Descrição:** nome do feriado ou evento.
- **Data do Evento/até:** para evento de um dia, como sábado letivo, informe somente a primeira data e deixe a segunda em branco. Para períodos, como recesso, informe as datas inicial e final.
- **Dia da semana:** preenchido automaticamente conforme a data.
- **Dia letivo:** indique se haverá aula na data; o campo é utilizado no cálculo dos dias letivos.

## Exclusão

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Calendários > Exclusão
\`\`\``,
  "Bases Curriculares": `# Cadastro de bases curriculares

Esta rotina cadastra as bases curriculares que definem a divisão dos ensinos, a ordenação e a sequência de disciplinas de um curso, conforme a LDB e o regimento municipal de educação.

O sistema exibe as bases existentes. Para editar, clique no ícone de lápis. Para incluir uma base, clique em **+ Nova Base**.

[![Cadastro de base curricular](https://e-cidade.wiki.br/educacao/escola/files/tela_cadastro_de_base_curricular_esc.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_cadastro_de_base_curricular_esc.png)

## Aba Geral

Informe os dados principais da base:

[![Aba geral da base curricular](https://e-cidade.wiki.br/educacao/escola/files/tela_base_curricular_esc.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_base_curricular_esc.png)

- **Nome da Base:** nome da base curricular, geralmente relacionado ao ensino, como Anos Iniciais, Anos Finais, Séries Iniciais, Séries Finais, Totalidades Iniciais ou Totalidades Finais.
- **Turno:** Diurno (manhã e tarde) ou Noturno (noite).
- **Curso:** clique na lupa, pesquise e selecione o curso.
- **Regime de Matrícula:** regime utilizado para matrícula e/ou classificação dos alunos, como Ano de Escolaridade ou Faixa Etária.
- **Etapa Inicial/Etapa Final:** após informar o regime, selecione nas pesquisas as etapas que iniciam e finalizam a base.
- **Frequência:** indique se será calculada por dias letivos ou por período.
- **Controle de frequência:** indique se a apuração será individual por disciplina ou globalizada. No controle globalizado, as faltas são totalizadas para todas as disciplinas; no individual, são registradas separadamente por disciplina.

[![Pesquisa de curso](https://e-cidade.wiki.br/educacao/escola/files/tela_pesquisa_do_curso_base_curricular.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_pesquisa_do_curso_base_curricular.png)

## Aba Disciplina

Cadastre as disciplinas que compõem a base curricular.

[![Aba disciplina](https://e-cidade.wiki.br/educacao/escola/files/tela_aba_disciplina_base_curricular_esc.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_aba_disciplina_base_curricular_esc.png)

- **Disciplina:** clique na lupa e selecione uma disciplina do nível de ensino. A pesquisa permite filtrar por código, descrição e abreviatura.
- **Área de Conhecimento:** exibida conforme o cadastro da disciplina.
- **Tipo Base:** Base Nacional Comum Curricular, Educação Infantil ou Base Diversificada. Use Educação Infantil para etapas dessa modalidade, Base Diversificada para disciplinas que não fazem parte da BNCC e Base Nacional Comum Curricular para as demais disciplinas relacionadas à BNCC.
- **Matrícula:** Obrigatória exige o lançamento das avaliações da disciplina; Opcional não exige esse lançamento.
- **Hora Aula:** quantidade de aulas ministradas pelo professor na turma.
- **Disciplina Global:** disponível para frequência globalizada; ao marcar, o campo Falta no diário de classe da turma será habilitado somente nesta disciplina.
- **Possui Caráter Reprobatório:** marque se a disciplina pode reprovar o aluno.
- **Lançar na Documentação:** disponível para matrícula opcional. Desmarque para não incluir a disciplina em documentos como boletim e histórico escolar, por exemplo, para oficinas que não integram a grade curricular. Para matrícula obrigatória, a opção já vem marcada.

Após preencher os campos, clique em **Salvar**. O sistema perguntará se deseja replicar a disciplina para outras etapas. Se confirmar, selecione as etapas e clique em **Replicar**.

[![Replicar disciplina para etapas](https://e-cidade.wiki.br/educacao/escola/files/tela_base_curricular_replicar_etapa.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_base_curricular_replicar_etapa.png)

## Aba Base Continuação

Selecione a base curricular de continuação entre as bases cadastradas na escola e clique em **Salvar**. Ao associar uma base de continuação, os alunos que concluírem esta base serão matriculados automaticamente na base seguinte.

[![Base de continuação](https://e-cidade.wiki.br/educacao/escola/files/tela_base_de_continuacao.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_base_de_continuacao.png)

## Aba Legislação

Informe o ato legal que regulamenta as etapas da base. Clique no campo **Ato Legal**, selecione o ato vinculado ao curso e clique em **Salvar**.

[![Legislação da base curricular](https://e-cidade.wiki.br/educacao/escola/files/tela_aba_legisla%C3%A7%C3%A3o_base_curricular_.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_aba_legisla%C3%A7%C3%A3o_base_curricular_.png)`,
  "Procedimentos de Avaliação": `# Inclusão

## Aba Geral

No procedimento de avaliação, configure a fórmula de avaliação (bimestral, trimestral, semestral etc.), associando avaliações periódicas e resultados.

**Forma de Avaliação:** selecione a forma que gerará o resultado final do procedimento. Cada avaliação periódica pode ter uma forma diferente, mas somente serão calculadas as avaliações com a mesma forma indicada para o procedimento.

[![Inclusão do procedimento de avaliação](https://e-cidade.wiki.br/educacao/escola/files/procedimento_de_avalia%C3%A7%C3%A3o_inclusao.jpg)](https://e-cidade.wiki.br/educacao/escola/files/procedimento_de_avalia%C3%A7%C3%A3o_inclusao.jpg)

**Campos**
- **Forma de Avaliação:** selecione na pesquisa a forma que corresponde à avaliação final do aluno.
- **Descrição:** nome do procedimento.
- **Frequência mínima para aprovação:** percentual mínimo de frequência para aprovação.
- **Cálculo da Frequência:** escolha **Por Disciplina**, que calcula cada disciplina individualmente, ou **Por Carga Horária Total**, que soma a carga horária e as faltas de todas as disciplinas antes de calcular o percentual.

**Exemplo — procedimento bimestral “Parecer e Nota”:** se a forma do procedimento for Nota (0 a 100), avaliações periódicas de Parecer serão descartadas do cálculo do resultado final. Se as avaliações 3 e 4 forem Nota, o resultado por média aritmética será (avaliação 3 + avaliação 4) / 2.

## Aba Avaliações

As avaliações são organizadas em dois grupos: avaliações periódicas (por exemplo, 1º bimestre e 2º bimestre) e resultados (por exemplo, média final). Não é permitido incluir um resultado sem antes cadastrar uma avaliação periódica.

### Adicionar avaliações periódicas

Após clicar em **Adicionar**, informe:
- **Período de Avaliação:** selecione um período cadastrado na pesquisa.
- **Forma de Avaliação:** selecione uma forma cadastrada.
- **Aparece no Boletim:** indica se a avaliação será exibida no boletim; o padrão é Sim.
- **Aproveitamento desta avaliação:** permite condicionar a avaliação a outra avaliação periódica ou resultado. Na primeira avaliação, o campo fica desabilitado porque ainda não existe avaliação anterior.

Use esse vínculo, por exemplo, quando uma recuperação terapêutica só deve ser aplicada a alunos sem aproveitamento em uma avaliação anterior.

[![Avaliações periódicas](https://e-cidade.wiki.br/educacao/escola/files/avalia%C3%A7%C3%B5es_peri%C3%B3dicas_.jpg)](https://e-cidade.wiki.br/educacao/escola/files/avalia%C3%A7%C3%B5es_peri%C3%B3dicas_.jpg)

### Adicionar resultados — Aba Geral

Configure como o sistema obterá o resultado final, as médias de aprovação, a recuperação terapêutica e a reprovação.

[![Resultado](https://e-cidade.wiki.br/educacao/escola/files/resultado.png)](https://e-cidade.wiki.br/educacao/escola/files/resultado.png)

- **Resultado:** selecione o tipo de resultado cumulativo na pesquisa.
- **Forma de Avaliação:** selecione uma forma do mesmo tipo da forma de avaliação do procedimento.
- **Mínimo para Aprovação:** para Nota e Conceito, o campo recebe o mínimo configurado na forma de avaliação; clique em **Definir** para alterá-lo.

### Parâmetros do Resultado

Após incluir o resultado, configure:
- **Forma de obtenção:** Nota — Atribuído, Média Aritmética, Média Ponderada, Soma, Maior Nota ou Última Nota; Nível/Conceito — Atribuído, Maior Nível ou Último Nível; Parecer — Atribuído.
- **Gera Resultado Final:** indique se o resultado será usado no cálculo final. Ao selecionar Sim, a aba Frequência será habilitada.
- **Aparece no Boletim:** indique se o resultado será impresso no boletim.
- **Reprova por frequência:** indica se o resultado reprovará por frequência; habilitado após informar os períodos que compõem seu cálculo.

Uma forma de obtenção diferente de Atribuído habilita a aba Elementos para selecionar as avaliações que compõem o cálculo.

[![Parâmetros do resultado](https://e-cidade.wiki.br/educacao/escola/files/parametro_.png)](https://e-cidade.wiki.br/educacao/escola/files/parametro_.png)

### Aba Elementos

Selecione as avaliações periódicas que comporão o resultado. O sistema pesquisa avaliações com o mesmo tipo de forma de avaliação do procedimento.

- **Mínimo:** valor mínimo para aprovação neste elemento, diferente do mínimo geral, se necessário. O aluno poderá ser reprovado se não atingir este valor, mesmo alcançando o mínimo do cálculo.
- Para forma de obtenção **Média Ponderada**, informe também o **Peso** do elemento.

[![Elementos do resultado](https://e-cidade.wiki.br/educacao/escola/files/elementos_.png)](https://e-cidade.wiki.br/educacao/escola/files/elementos_.png)

### Aba Frequência

Selecione os períodos de avaliação que comporão o cálculo do percentual de frequência e clique em **Incluir**.

[![Frequência do resultado](https://e-cidade.wiki.br/educacao/escola/files/frequencia_.png)](https://e-cidade.wiki.br/educacao/escola/files/frequencia_.png)

Se as avaliações ou resultados forem cadastrados fora de ordem, use o campo de ordenação à direita: marque o período, mova-o com as setas e clique em **Ordenar**.`,
  "Recursos Humanos": `# Inclusão

Cadastre nesta rotina os profissionais lotados na unidade escolar. Informe se é **Servidor da Prefeitura**. Se selecionar Sim, o sistema habilitará o link **Matrícula**, que abre uma pesquisa de matrículas ativas por matrícula, número do CGM ou nome; o regime será carregado conforme o cadastro do servidor. Se selecionar Não, serão habilitados os links **CGM** e **Regime**, para vincular um profissional que não está na folha da prefeitura e informar seu regime.

[![Inclusão de Recursos Humanos](https://e-cidade.wiki.br/educacao/escola/files/inclusao_recursos_humanos.png)](https://e-cidade.wiki.br/educacao/escola/files/inclusao_recursos_humanos.png)

## Aba Dados Pessoais

Após selecionar o servidor ou CGM, confira os dados. Campos em laranja são somente para visualização; preencha os demais campos e clique em **Incluir** para habilitar as outras abas. Informe os dados de identidade somente se o número do documento estiver cadastrado no RH.

Entre os campos informados estão **Código INEP**, escolaridade, tipo de ensino médio (habilitado para escolaridade de ensino médio ou superior), cor/raça, nacionalidade, país, UF e município de nascimento, passaporte, dados da identidade, NIS, UF e município de endereço, zona e país de residência e localização diferenciada. Para professores e gestores, o país de residência é necessário para o arquivo do censo escolar. A localização diferenciada segue as categorias do censo: assentamento, terra indígena, comunidade remanescente de quilombos ou nenhuma dessas áreas.

[![Dados pessoais](https://e-cidade.wiki.br/educacao/escola/files/Dados_pessoais_rh.jpg)](https://e-cidade.wiki.br/educacao/escola/files/Dados_pessoais_rh.jpg)

## Aba Dados de Contato

Cadastre telefones do profissional: pesquise o tipo de telefone, informe o número e o ramal, se houver, e clique em **Incluir**.

[![Dados de contato](https://e-cidade.wiki.br/educacao/escola/files/dados_de_contato.jpg)](https://e-cidade.wiki.br/educacao/escola/files/dados_de_contato.jpg)

## Aba Formação

Informe cursos de formação superior, pós-graduação e cursos específicos. Selecione o curso e a instituição de ensino superior nas respectivas pesquisas, indique se a formação está concluída ou em andamento, se há complementação pedagógica e se é licenciatura. Informe o ano de início quando estiver em andamento e o ano de conclusão quando concluída. Use **Outros Dados** para informar pós-graduação e cursos específicos.

[![Aba Formação](https://e-cidade.wiki.br/educacao/escola/files/aba_forma%C3%A7%C3%A3o.jpg)](https://e-cidade.wiki.br/educacao/escola/files/aba_forma%C3%A7%C3%A3o.jpg)

## Aba Necessidades Especiais/Vacinas

Informe eventual necessidade especial do professor para envio ao Educacenso. No registro de vacinas, selecione a vacina, informe a dose e a data de aplicação e clique em **Adicionar Vacina**.

[![Necessidades especiais](https://e-cidade.wiki.br/educacao/escola/files/aba_necessidades.jpg)](https://e-cidade.wiki.br/educacao/escola/files/aba_necessidades.jpg)

## Aba Consulta Horários do Professor

Exibe os horários do professor na escola, as turmas e disciplinas em que atua. Ao passar o cursor sobre um horário, são exibidas informações como escola, matrícula, disciplina, turma, etapa, turno, período e hora. É possível filtrar por uma escola ou por todas.

## Aba Escolas

Exibe as escolas às quais o profissional está vinculado. Após a inclusão, altere a data de ingresso automática para a data correta. Em caso de remoção ou aposentadoria, informe a data de saída. O vínculo incluído por engano pode ser excluído.

## Aba Função Exercida

Selecione a função/atividade, o turno e o tipo de hora. Marque os dias da semana em que o profissional está disponível e informe os horários de início e fim para cada dia. Repita o processo para outros turnos.

## Aba Relação de Trabalho

Informe a carga horária semanal do profissional:
- **Regime de trabalho:** selecione a carga horária cadastrada pela Secretaria de Educação.
- **Função Exercida:** selecione uma função cadastrada na aba correspondente.
- **Tipo de Hora:** selecione o tipo de hora da função.
- Para função de regente de classe, informe **Nível de Ensino**, **Área de Trabalho** e **Disciplina**. Repita o processo para cada nível, área ou disciplina em que o professor esteja habilitado.

## Aba Horários da Regência

Informe os períodos em que o profissional está disponível na escola. Selecione o dia da semana, o turno e o período e inclua-o na grade. Para remover um horário, clique nele e confirme a exclusão. O horário de regência deve estar dentro do horário de funcionamento da escola e da jornada informada na aba Função Exercida.

## Aba Horários

Vincule professores às disciplinas e horários das turmas. Selecione a disciplina e indique se ela possui regente. Quando Sim, selecione o regente; quando Não, o sistema exibirá **Disciplina sem Regente**. Lance os períodos na grade para cada dia da semana. As cores da grade indicam os períodos em que o regente está disponível. Ao final, selecione o professor conselheiro, se aplicável, e clique em **Salvar**.

## Aba Alunos

Exibe os alunos matriculados na turma. Ao selecionar um aluno, é possível consultar os dados e movimentações da matrícula, alterar a data e indicar avaliação por parecer para alunos com necessidades educacionais especiais.

## Aba Função Exercida e Relação de Trabalho

Mantenha os vínculos, funções, turnos, carga horária e habilitações do profissional atualizados para que os horários e as regências possam ser vinculados corretamente às turmas.`,
  Turmas: `# Inclusão

Acesse **DB: EDUCAÇÃO > Escola > Cadastros > Turmas > Inclusão** para criar turmas. Informe os campos obrigatórios. O procedimento de avaliação deve conter os mesmos períodos de avaliação do calendário escolhido. Ao selecionar uma sala, as vagas serão preenchidas com sua capacidade, mas poderão ser alteradas; alunos matriculados e vagas restantes serão atualizados conforme as matrículas.

[![Cadastro de turma](https://e-cidade.wiki.br/educacao/escola/files/cadastro_turma.jpg)](https://e-cidade.wiki.br/educacao/escola/files/cadastro_turma.jpg)

**Campos**
- **Código:** gerado após a inclusão.
- **Código INEP:** identificação da turma no sistema do INEP.
- **Tipo:** Normal (uma etapa), EJA ou Multietapa (mais de uma etapa). O tipo orienta o diário, o lançamento de notas e a geração dos resultados conforme o procedimento de avaliação.
- **Nome da Turma:** nome utilizado pela escola e registrado no censo, com no mínimo quatro caracteres.
- **Escola:** preenchida automaticamente.
- **Calendário:** selecione o calendário de vigência da turma.
- **Base Curricular:** selecione a base que contém a etapa da turma.
- **Nome do Curso** e **Regime de Matrícula:** preenchidos conforme a base curricular.
- **Etapa:** marque a etapa oferecida; em turma multietapa, marque todas as etapas que a compõem.
- **Etapa Censo:** preenchida conforme a etapa. Para várias etapas, informe a etapa do censo correspondente à turma multietapa.
- **Proc. de Avaliação:** selecione um procedimento com os mesmos períodos de avaliação do calendário.
- **Aprovação Automática:** utilizada normalmente na Educação Infantil e no 1º ano do ensino fundamental de nove anos.
- **Turno:** selecione um turno cadastrado.
- **Dependência/Capacidade:** selecione a sala; a capacidade será exibida automaticamente.
- **Frequência:** carregada conforme a base curricular.
- **Tipo de Atendimento:** mantenha Não se Aplica, exceto para atendimento em classe hospitalar, unidade de internação ou unidade prisional.
- **Vagas/Alunos Matriculados/Vagas restantes:** capacidade e matrículas; os dados de alunos e vagas restantes são atualizados automaticamente.
- **Observações:** campo opcional, exibido nos relatórios.
- **Turno Adicional:** informe quando a turma realizar uma disciplina em turno inverso; será aberta outra grade para esse turno.
- **Programa Mais Educação:** para Educação Infantil e ensino fundamental, marque Sim somente se todos os alunos participarem de atividades financiadas pelo programa.

## Aba Disciplinas

As disciplinas (regências) da base curricular são incluídas automaticamente. Use **Atualizar pela Base** para atualizar a turma conforme mudanças na base. Também é possível incluir disciplinas opcionais que não pertencem à base curricular.

## Aba Horários

Selecione a disciplina, indique se possui regente e, se Sim, selecione o profissional. Lance na grade os períodos em que o professor atuará na turma em cada dia da semana e clique em **Salvar**.

## Aba Alunos

Exibe os alunos matriculados. Ao selecionar um aluno, é possível consultar os dados e movimentações da matrícula, alterar a data e configurar avaliação por parecer para alunos com necessidades educacionais especiais. O botão **Classificar Turma** organiza e numera os alunos em ordem alfabética; após novas matrículas, a turma pode ser reclassificada.

## Aba Pareceres

Selecione os pareceres cadastrados na escola que se aplicam à turma e clique em **Salvar**.

## Aba Outros Profissionais

Para turmas de Educação Infantil ou com alunos com necessidades especiais, vincule Auxiliar/Assistente Educacional ou Tradutor/Intérprete de Libras: selecione a atividade, pesquise o profissional e clique em **Salvar**.

## Aba Atividades Complementares

Disponível conforme as regras do censo para turmas do ensino fundamental em que todos os alunos frequentam a escola em turno integral e participam de atividades complementares. Informe os dias e horários, selecione a atividade, o turno inverso e o profissional/monitor e clique em **Salvar**.

## Alteração e exclusão

Na alteração, a aba Turma permite alterar nome, frequência, turno, sala, vagas, aprovação automática, observações e turno adicional; nas abas Disciplinas e Horários, os campos descritos podem ser alterados. A exclusão somente será permitida se não houver alunos matriculados.

## Agenda de Sábado Letivo

Selecione calendário, data, turma, disciplina, regente e períodos. Clique em **Lançar** para registrar a agenda da turma para o sábado letivo.

## Manutenção nos Horários da Regência

Selecione a turma e o calendário para consultar os vínculos dos professores. É possível corrigir datas e situação do vínculo. **Atenção:** excluir um professor nesta rotina também apaga os lançamentos de frequência dos alunos e os conteúdos lançados na turma.`,
  "Turmas (Atividade Complementar AEE)": `# Inclusão

Antes do cadastro, confirme em **DB: EDUCAÇÃO > Escola > Cadastros > Dados da Escola**, aba Infraestrutura, se a escola oferece Atividades Complementares ou Atendimento Educacional Especializado (AEE). Depois, acesse **DB: EDUCAÇÃO > Escola > Cadastros > Turmas (Atividade Complementar/AEE) > Inclusão**.

[![Infraestrutura da escola](https://e-cidade.wiki.br/educacao/escola/files/turmasatividadecomplementaraee_infraestrutura_escola.png)](https://e-cidade.wiki.br/educacao/escola/files/turmasatividadecomplementaraee_infraestrutura_escola.png)

## Aba Turma

Esta rotina cadastra turmas de atividade complementar. Preencha os campos e clique em **Incluir** para habilitar as demais abas.

- **Código INEP:** identificação da turma no sistema do INEP.
- **Nome da Turma:** nome registrado no censo.
- **Escola:** preenchida automaticamente.
- **Tipo de Atendimento:** Atividade Complementar ou Atendimento Educacional Especializado.
- **Quantidade de vezes da Atividade:** quantidade de dias por semana em que o atendimento é oferecido.
- **Calendário** e **Turno:** selecione nas respectivas pesquisas.
- **Dependência/Capacidade:** selecione uma sala. A capacidade será exibida automaticamente; o campo não é obrigatório quando a escola não possui sala específica.
- **Vagas/Alunos Matriculados/Vagas restantes:** calculados pelo sistema; as vagas podem ser ajustadas à realidade da escola.
- **Observações:** campo opcional, exibido nos relatórios.
- **Programa Mais Educação:** indique se a turma participa do programa.

[![Aba Turma](https://e-cidade.wiki.br/educacao/escola/files/turmasatividadecomplementaraee_abaturma.png)](https://e-cidade.wiki.br/educacao/escola/files/turmasatividadecomplementaraee_abaturma.png)

## Aba Atividade Complementar

Pesquise e selecione a atividade disponibilizada pelo Censo Escolar e clique em **Incluir**. Repita o processo se a turma oferecer mais de uma atividade.

[![Atividade complementar](https://e-cidade.wiki.br/educacao/escola/files/turmasatividadecomplementaraee_inclusao.png)](https://e-cidade.wiki.br/educacao/escola/files/turmasatividadecomplementaraee_inclusao.png)

## Aba Alunos

Pesquise pelo código do aluno, selecione-o e clique em **Incluir**. As vagas restantes diminuem automaticamente. Ao alterar **Trazer alunos de todas as escolas** para Sim, a pesquisa também listará alunos matriculados na rede municipal e alunos de fora da rede cadastrados no sistema.

[![Alunos da atividade complementar](https://e-cidade.wiki.br/educacao/escola/files/turmasatividadecomplementaraee_aba_alunos.png)](https://e-cidade.wiki.br/educacao/escola/files/turmasatividadecomplementaraee_aba_alunos.png)

## Aba Horário Professor

Informe os dias da semana e horários da atividade complementar e selecione a função e o profissional/monitor responsável. Antes de cadastrar os horários da turma, informe a disponibilidade do professor na escola em **Cadastros > Recursos Humanos**.

[![Horários das turmas](https://e-cidade.wiki.br/educacao/escola/files/turmasatividadecomplementaraee_horarios_turmas.png)](https://e-cidade.wiki.br/educacao/escola/files/turmasatividadecomplementaraee_horarios_turmas.png)

## Turmas de Atendimento Educacional Especializado (AEE)

Na aba Turma, selecione **Atendimento Educacional Especializado — AEE** e marque os tipos de atendimento oferecidos. Para turmas AEE, não há aba Atividade Complementar. Na aba Alunos, a pesquisa exibirá alunos cujo cadastro contenha as necessidades especiais correspondentes.

[![Turma de AEE](https://e-cidade.wiki.br/educacao/escola/files/turmasatividadecomplementaraee_turma_AEE.png)](https://e-cidade.wiki.br/educacao/escola/files/turmasatividadecomplementaraee_turma_AEE.png)

## Alteração e exclusão

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Turmas (Atividade Complementar/AEE) > Alteração
DB: EDUCAÇÃO > Escola > Cadastros > Turmas (Atividade Complementar/AEE) > Exclusão
\`\`\``,
  "Remanejar Cadastro Turmas": `# Turmas — Atividade Complementar/AEE

Esta rotina recadastra automaticamente turmas do calendário anterior no próximo calendário letivo. Selecione o **Calendário de origem** e o **Calendário de destino** e clique em **Procurar**.

[![Remanejar cadastro de turmas](https://e-cidade.wiki.br/educacao/escola/files/remanejar_cadastro_de_turmas.png)](https://e-cidade.wiki.br/educacao/escola/files/remanejar_cadastro_de_turmas.png)

O sistema listará as turmas do calendário de origem. Selecione as que deseja remanejar, passe-as para o campo **Turmas Remanejadas** pela seta e clique em **Incluir**. Após confirmar, será exibida a relação de turmas remanejadas, com opções para alterar ou excluir cada uma.

Ao alterar, uma janela exibirá os dados da turma para edição. Ao excluir, a turma remanejada será removida. O botão **Nova Turma** abre a rotina de inclusão para cadastrar turmas que não existiam no calendário anterior.

[![Nova turma ao remanejar cadastro](https://e-cidade.wiki.br/educacao/escola/files/turma_nova_remanejar_cadastro.png)](https://e-cidade.wiki.br/educacao/escola/files/turma_nova_remanejar_cadastro.png)`,
  Alunos: `# Inclusão

Acesse **DB: EDUCAÇÃO > Escola > Cadastros > Alunos > Inclusão** para cadastrar alunos novos que ingressam na rede municipal. Não cadastre novamente alunos vindos de rematrícula ou que já estavam matriculados em outra escola da rede.

**Nota importante:** antes de incluir um aluno, clique em **Pesquisar** e verifique se ele já existe no sistema. Pesquise pelo nome usando o caractere % como coringa: **%SANTOS** localiza nomes que terminam em Santos; **%LIMA%** localiza nomes que contêm Lima; **RENATO%** localiza nomes que começam com Renato. Se não houver cadastro, feche a pesquisa e clique em **Novo Registro**.

## Aba Dados Pessoais

Informe os dados principais do aluno. Após incluir esta aba, as demais serão habilitadas.

[![Cadastro de aluno](https://e-cidade.wiki.br/educacao/escola/files/cadastro_aluno.png)](https://e-cidade.wiki.br/educacao/escola/files/cadastro_aluno.png)

### Dados Pessoais

- **Código:** número sequencial único, gerado pelo sistema.
- **Código INEP:** identificação do aluno no INEP.
- **Nº NIS:** Número de Identificação Social, se houver.
- **Nome:** nome completo, sem abreviações, conforme documento.
- **Nascimento** e **Sexo:** consulte o registro de nascimento.
- **Estado Civil:** solteiro, casado, viúvo ou divorciado.
- **Tipo Sanguíneo:** informe conforme informação fornecida pelo responsável.
- **Filiação:** informe conforme a certidão. Se constar pai, mãe ou ambos, preencha os dados correspondentes; se a filiação for não declarada/ignorada, informe o responsável legal conforme os documentos de guarda.
- **Raça:** informe conforme a certidão; caso não conste, selecione Não Declarada.
- **Filiação 1** e **Filiação 2:** nomes completos, preferencialmente mãe e pai.
- **Responsável Legal:** pessoa responsável pela vida escolar do aluno e pelas autorizações; pode ser alguém diferente dos pais.
- **Foto:** selecione o arquivo digitalizado ou fotografado. Use **Excluir Foto** para removê-la.

### Dados de Contato

Selecione o contato de emergência. Se o cadastro do cidadão possuir celular, e-mail e endereço, o sistema preencherá essas informações automaticamente. Informe ou confira e-mail, celular e telefone do contato.

### Endereço Residencial/Contato

Informe se o endereço pode ser liberado para edição e preencha endereço, número, complemento, UF, município, bairro, zona, CEP, telefone, celular, fax, caixa postal e e-mail, conforme disponíveis. Logradouros e bairros podem ser pesquisados; o município e o CEP podem ser preenchidos conforme os cadastros existentes.

### Informações e documentos

Informe nacionalidade, país e dados de nascimento compatíveis com a nacionalidade. Para estrangeiros, o país não pode ser Brasil e os campos de UF e município de nascimento não devem ser informados. Conforme os documentos do aluno, preencha certidão, identidade, CNH, CPF, passaporte, Cartão SUS, Registro Nacional de Migração, visto, observações e contatos. Os campos de passaporte, migração e visto são habilitados conforme a nacionalidade.

## Quadro Procedência do Aluno

Informe o **Local de Procedência**, isto é, a escola ou local em que o aluno concluiu a última série, e a **Data de Procedência**, data de ingresso nesse local. Por exemplo, para ingresso no 1º ano ou na Educação Infantil, a procedência poderá ser Do Lar. Se o aluno concluir o ano em outra escola, atualize a procedência para essa escola. As datas de cadastramento e última alteração são preenchidas pelo sistema.

## Aba Documentos

Registre os documentos do aluno, como certidão, identidade, CNH, CPF e passaporte. Na certidão, informe matrícula do novo modelo nacional, tipo, termo, folha, livro, cartório, data de emissão, UF e município do cartório. Na identidade e CNH, informe os dados disponíveis do documento. Em Outros, informe CPF, passaporte (quando habilitado), Cartão SUS, registros migratórios, visto, observações e contatos.

[![Aba documentos](https://e-cidade.wiki.br/educacao/escola/files/aba_documentos.png)](https://e-cidade.wiki.br/educacao/escola/files/aba_documentos.png)

## Aba Cursos

Para matrícula direta, pesquise e selecione uma turma com vaga, informe a data da matrícula e clique em **Incluir**. Se o aluno ainda não tiver turma definida, selecione **Curso do Aluno** e informe curso, base curricular, calendário, série e turno; sua situação ficará como Candidato.

[![Matrícula do aluno em turma](https://e-cidade.wiki.br/educacao/escola/files/Aba_curso_Matricula.png)](https://e-cidade.wiki.br/educacao/escola/files/Aba_curso_Matricula.png)

## Aba Documentos Pendentes

Registre documentos obrigatórios que ficaram pendentes de entrega no momento da matrícula. Pesquise e selecione o tipo de documento.

[![Documentos pendentes](https://e-cidade.wiki.br/educacao/escola/files/aba_documentos_pendente.png)](https://e-cidade.wiki.br/educacao/escola/files/aba_documentos_pendente.png)

## Aba Necessidades Especiais

Quando aplicável, selecione uma ou mais necessidades especiais na pesquisa do Educacenso, informe o apoio pedagógico e o tipo de diagnóstico. As datas e a última alteração são preenchidas automaticamente. Se houver mais de uma necessidade, indique a mais severa. O botão **Recursos para Avaliação** permite registrar recursos necessários para avaliações.

[![Necessidades especiais](https://e-cidade.wiki.br/educacao/escola/files/necessidades_especiais_aluno.png)](https://e-cidade.wiki.br/educacao/escola/files/necessidades_especiais_aluno.png)

## Aba Matrícula INEP

É preenchida automaticamente após a importação dos arquivos **Situação do Aluno** do Educacenso, pela rotina **Procedimentos > Censo Escolar > Importação > Código INEP / Matrícula INEP Aluno**. A importação atualiza o código INEP, a matrícula gerada pelo Educacenso e o ano do vínculo.

## Aba Transporte Escolar

Se **Utiliza Transporte Escolar** estiver marcado como Sim na aba Geral, informe nesta aba o tipo de transporte utilizado. O preenchimento é obrigatório para informar o censo escolar por migração de arquivos.

[![Transporte escolar](https://e-cidade.wiki.br/educacao/escola/files/aba_transporte_aluno.png)](https://e-cidade.wiki.br/educacao/escola/files/aba_transporte_aluno.png)

## Alteração

Em **DB: EDUCAÇÃO > Escola > Cadastros > Alunos > Alteração**, é possível alterar os campos brancos de todas as abas do cadastro.`,
  "Confirmação de Rematrícula": `# Inclusão

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Confirmação de Rematrícula > Inclusão
\`\`\`

Esta funcionalidade permite que a escola informe quais responsáveis confirmaram a rematrícula dos alunos para o próximo ano letivo. Com esses dados, é possível levantar a estimativa de vagas disponíveis para cada etapa de ensino.

[![Inclusão da confirmação de rematrícula](https://e-cidade.wiki.br/educacao/escola/files/rematricula_inclus%C3%A3o.png)](https://e-cidade.wiki.br/educacao/escola/files/rematricula_inclus%C3%A3o.png)`,
};

export const educacaoEscolaTabelasPages = [
  {
    title: "Dias Letivos",
    content: educacaoEscolaCadastroContent.Tabelas,
  },
  {
    title: "Escolas de Procedência",
    content: `# Escolas de Procedência

O cadastro de escolas de procedência de alunos é utilizado em transferências fora da rede municipal, históricos escolares e cadastro do aluno.

## Inclusão

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Tabelas > Escolas de Procedência > Inclusão
\`\`\`

[![Figura alteração escola de procedência](https://e-cidade.wiki.br/educacao/escola/files/Figura_altera%C3%A7%C3%A3o_escola_de_proced%C3%AAncia.png)](https://e-cidade.wiki.br/educacao/escola/files/Figura_altera%C3%A7%C3%A3o_escola_de_proced%C3%AAncia.png)

Para cadastrar uma escola de procedência, é obrigatório preencher **Nome**, **País**, **Mantenedora**, **Estado** e **Cidade**. Os demais dados são opcionais.

- **Nome:** nome da escola.
- **Abreviatura:** abreviatura do nome, se houver.
- **País:** país onde a escola está localizada.
- **Mantenedora:** selecione Municipal, Estadual, Federal ou Particular.
- **E-mail:** e-mail da escola, se houver.
- **CEP:** CEP da escola.
- **Rua, Número, Complemento e Bairro:** endereço da escola.
- **Estado e Cidade:** estado e cidade onde a escola está localizada; campos obrigatórios.
- **Distrito:** distrito da escola, se aplicável.

Após preencher os campos obrigatórios, clique em **Incluir**.

## Alteração

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Tabelas > Escolas de Procedência > Alteração
\`\`\`

[![Escola de procedência](https://e-cidade.wiki.br/educacao/escola/files/figura_escola_procedencia.png)](https://e-cidade.wiki.br/educacao/escola/files/figura_escola_procedencia.png)

Selecione a escola de procedência desejada. Todos os dados informados no cadastro poderão ser alterados.

## Exclusão

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Tabelas > Escolas de Procedência > Exclusão
\`\`\`

A exclusão somente será permitida quando a escola não possuir vínculo com históricos escolares ou transferências para fora da rede.`,
  },
  {
    title: "Formas de Avaliação",
    content: `# Cadastro Formas de Avaliação

Cadastre as formas de avaliação utilizadas pela escola para avaliar os alunos.

## Inclusão

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Tabelas > Formas de Avaliação > Inclusão
\`\`\`

[![Forma de avaliação](https://e-cidade.wiki.br/educacao/escola/files/forma_avaliacao.png)](https://e-cidade.wiki.br/educacao/escola/files/forma_avaliacao.png)

**Campos**
- **Código:** código sequencial gerado automaticamente pelo e-cidade.
- **Descrição:** nome do tipo de avaliação.
- **Tipo de Resultado:** selecione Nota, Nível ou Parecer.

### Nota

Ao selecionar Nota, o sistema exibirá os campos **Menor nota**, **Maior nota**, **Variação** e **Mínimo para Aprovação**. Preencha-os e clique em **Incluir**.

[![Inclusão de forma de avaliação por nota](https://e-cidade.wiki.br/educacao/escola/files/forma_avaliacao_inclusao_nota.png)](https://e-cidade.wiki.br/educacao/escola/files/forma_avaliacao_inclusao_nota.png)

- **Menor nota:** menor nota que o aluno poderá receber.
- **Maior nota:** maior nota que o aluno poderá receber no período.
- **Variação:** intervalo entre as notas permitidas, considerando as casas decimais. Por exemplo, 0,01 permite variação de centésimo; 0,05, de cinco centésimos.
- **Mínimo para Aprovação:** menor nota necessária para aprovação no período, definida pela Secretaria de Educação. Nota inferior ao mínimo reprova o aluno no período.

### Nível de Alfabetização

Ao selecionar este tipo de resultado, o campo **Mínimo para Aprovação** será exibido sem opções. Clique em **Incluir** para habilitar o cadastro e a configuração dos níveis de alfabetização.

[![Inclusão de forma de avaliação](https://e-cidade.wiki.br/educacao/escola/files/forma_avaliacao_inclusao.png)](https://e-cidade.wiki.br/educacao/escola/files/forma_avaliacao_inclusao.png)

[![Níveis de alfabetização](https://e-cidade.wiki.br/educacao/escola/files/forma_avaliacao_nivel2.png)](https://e-cidade.wiki.br/educacao/escola/files/forma_avaliacao_nivel2.png)

- **Sigla:** abreviatura do nível, como PS1, PS2, S, SA, A ou ALF.
- **Descrição do Nível:** nome por extenso, como Pré-Silábico 1, Pré-Silábico 2, Silábico, Silábico Alfabético, Alfabético ou Alfabetizado. Para ordenar os níveis, selecione-os e use as setas junto à opção **Ordenar Níveis**.

### Parecer

Informe a descrição e selecione Parecer como tipo de resultado. O sistema exibirá a opção para indicar se o parecer do aluno será armazenado.

[![Forma de avaliação por parecer](https://e-cidade.wiki.br/educacao/escola/files/forma_avaliacao_parecer.png)](https://e-cidade.wiki.br/educacao/escola/files/forma_avaliacao_parecer.png)

## Alteração

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Tabelas > Formas de Avaliação > Alteração
\`\`\`

Selecione a forma de avaliação para alterar seus campos. O **Tipo de Resultado** não pode ser alterado.

## Exclusão

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Tabelas > Formas de Avaliação > Exclusão
\`\`\`

A exclusão somente será permitida se a forma não estiver vinculada a nenhum procedimento de avaliação.`,
  },
  {
    title: "Pareceres",
    content: `# Cadastro Pareceres

O cadastro de pareceres é utilizado para avaliar os alunos em sala de aula ou registrar observações sobre eles.

## Inclusão

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Tabelas > Pareceres > Inclusão
\`\`\`

Digite o parecer no campo **Descrição**, informe a(s) disciplina(s) a que será vinculado e clique em **Incluir**.

[![Cadastro de parecer](https://e-cidade.wiki.br/educacao/escola/files/Figura_cadastro__parecer.png)](https://e-cidade.wiki.br/educacao/escola/files/Figura_cadastro__parecer.png)

O sistema abrirá a aba **Parecer por Turma**, na qual devem ser selecionadas as turmas em que o parecer ficará disponível.

[![Parecer por turma](https://e-cidade.wiki.br/educacao/escola/files/Figura_pareceres__turma.png)](https://e-cidade.wiki.br/educacao/escola/files/Figura_pareceres__turma.png)

Para ordenar pareceres, clique em **Ordenar Pareceres** na aba Parecer. Na pesquisa, selecione o parecer, mova-o com as setas, marque sua posição e clique em **Confirmar**.

[![Ordenar pareceres](https://e-cidade.wiki.br/educacao/escola/files/figura_ordenar_pareceres.png)](https://e-cidade.wiki.br/educacao/escola/files/figura_ordenar_pareceres.png)

## Alteração

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Tabelas > Pareceres > Alteração
\`\`\`

Pesquise e selecione o parecer. Após o sistema carregar seus dados, faça as alterações e clique em **Alterar**.

[![Pesquisa de parecer](https://e-cidade.wiki.br/educacao/escola/files/figura_pesquisa_parecer.png)](https://e-cidade.wiki.br/educacao/escola/files/figura_pesquisa_parecer.png)

[![Alteração de parecer](https://e-cidade.wiki.br/educacao/escola/files/figura_alteracao_parecer.png)](https://e-cidade.wiki.br/educacao/escola/files/figura_alteracao_parecer.png)

## Exclusão

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Tabelas > Pareceres > Exclusão
\`\`\`

Pesquise e selecione o parecer e clique em **Excluir**. Pareceres vinculados a uma turma não podem ser excluídos; o sistema informará que a exclusão foi cancelada.`,
  },
  {
    title: "Pareceres (Legendas)",
    content: `# Cadastro Pareceres Legenda

\`\`\`
DB: EDUCAÇÃO > Escola > Cadastros > Tabelas > Pareceres (Legendas)
\`\`\`

Cadastre legendas que complementam os pareceres. Por exemplo, quando um parecer trata do conteúdo ministrado em determinado período, a legenda pode indicar a evolução do aluno nesse conteúdo.

**Exemplos:** Bom, ótimo, regular, sim, não e às vezes.

[![Parecer legenda](https://e-cidade.wiki.br/educacao/escola/files/parecer_legenda.png)](https://e-cidade.wiki.br/educacao/escola/files/parecer_legenda.png)`,
  },
  {
    title: "Critérios de Avaliação",
    content: `# Critérios de Avaliação

Cadastre os itens que o professor poderá utilizar para avaliar os alunos em cada disciplina.

## Inclusão

Acesse **DB: EDUCAÇÃO > Escola > Cadastros > Tabelas > Critérios de Avaliação > Inclusão**.

[![Critérios de avaliação](https://e-cidade.wiki.br/educacao/escola/files/tela_crit%C3%A9rios_de_avalia%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_crit%C3%A9rios_de_avalia%C3%A7%C3%A3o.png)

Preencha os campos:
- **Descrição:** descrição do item que compõe a disciplina.
- **Abreviatura:** abreviatura da descrição.
- **Disciplina:** selecione uma disciplina da matriz curricular à qual o item será associado.
- **Períodos de Avaliação:** selecione os períodos cadastrados para o calendário letivo, como bimestral, semestral ou trimestral.

Após preencher os campos, clique em **Incluir**. Quando o sistema confirmar o cadastro, use o quadro **+ Escola** para listar os calendários da unidade escolar. Vincule o critério por turma ou por calendário e clique em **Vincular**.

[![Vincular critério de avaliação à turma](https://e-cidade.wiki.br/educacao/escola/files/Tela_vincular_turma__crit%C3%A9rio_avalia%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/escola/files/Tela_vincular_turma__crit%C3%A9rio_avalia%C3%A7%C3%A3o.png)

Para emitir o relatório configurado, acesse **DB: EDUCAÇÃO > Escola > Relatórios > Turmas > Ficha de Avaliação Qualitativa**.`,
  },
];
