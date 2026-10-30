export interface EducacaoEscolaProcedimentoPage {
  title: string;
  content: string;
}

export const educacaoEscolaProcedimentosPages: Record<
  string,
  EducacaoEscolaProcedimentoPage[]
> = {
  "Diário de Classe": [
    {
      title: "Lançamento de frequência",
      content: `## Lançamento de frequência

\`\`\`
DB: EDUCAÇÃO > Escola > Procedimentos > Diário de Classe > Lançamento de Frequência
\`\`\`

Rotina destinada aos professores regentes de classe vinculados às turmas. Permite realizar a chamada on-line e registrar diariamente a frequência dos alunos.

Ao acessar a rotina, o sistema exibirá o nome do regente e as disciplinas que leciona. Se houver apenas uma disciplina, ela será carregada automaticamente. Informe a data do lançamento; o campo **Turma** listará as turmas em que o professor dará aula nesse dia. Clique em **Pesquisar**.

[![Lançamento de frequência no diário de classe](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_lancamento_frequencia.png)](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_lancamento_frequencia.png)

Será exibida a relação de alunos da turma na ordem do diário, com o código do aluno e a situação da matrícula. Para cada período de aula ministrado pelo professor haverá uma coluna com um checkbox por aluno. A opção vem marcada para indicar presença; desmarque o período correspondente para registrar a ausência.

Use **Dia Anterior** e **Próximo Dia** para navegar entre as datas e lançar ou corrigir frequências. Após concluir, clique em **Salvar** e depois em **Fechar** para sair do lançamento.

[![Frequência dos alunos](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_lancamento_frequencia_aluno.png)](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_lancamento_frequencia_aluno.png)`,
    },
    {
      title: "Registro de Aula",
      content: `## Registro de Aula

\`\`\`
DB: EDUCAÇÃO > Escola > Procedimentos > Diário de Classe > Registro de Aula
\`\`\`

Rotina destinada aos professores regentes de classe vinculados às turmas. Permite registrar diariamente os conteúdos desenvolvidos em sala de aula.

Ao acessar a rotina, o sistema exibirá o nome do regente. Selecione a turma, a etapa, a regência e a data; descreva o conteúdo desenvolvido e salve.

[![Registro de aula](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_registro_aula.png)](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_registro_aula.png)

Após salvar o conteúdo, serão habilitados os botões **Excluir Conteúdo** e **Lançar Habilidades**.

**Atenção:** **Excluir Conteúdo** remove todo o registro de aula daquele dia, incluindo a descrição do conteúdo e as habilidades selecionadas.

### Lançar Habilidades

De acordo com as equivalências de etapa e disciplina, o sistema apresenta as habilidades previstas nas normas da Base Nacional Comum Curricular (BNCC). Clique em **Lançar Habilidades**.

[![Lançar habilidade](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_lancar_habilidade.png)](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_lancar_habilidade.png)

Na tela de habilidades, digite o código no campo indicado e pressione **Ctrl + Enter** para pesquisar.

[![Pesquisa de habilidade](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_lupa.png)](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_lupa.png)

Também é possível expandir a lista de habilidades até localizar a desejada.

[![Expandir habilidades](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_expandir.png)](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_expandir.png)

Marque o checkbox da habilidade e clique em **Salvar**.

[![Selecionar habilidade](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_check.png)](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_check.png)

[![Registro de habilidades BNCC](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_registrar_habilidades_BNCC.png)](https://e-cidade.wiki.br/educacao/escola/files/diario_classe_registrar_habilidades_BNCC.png)`,
    },
    {
      title: "Lançamento Por Turma",
      content: `## Lançamento Por Turma

\`\`\`
DB: EDUCAÇÃO > Escola > Procedimentos > Diário de Classe > Lançamento Por Turma
\`\`\`

Esta rotina permite que os professores lancem avaliações e frequência dos alunos. Além do fluxo normal de avaliação e controle de frequência, é possível registrar situações excepcionais, como amparos legais, abonos de faltas, observações, pareceres padronizados e parecer descritivo para alunos com deficiência, por aluno e período de avaliação.

Para iniciar, selecione **+ Escola**, **+ Calendários**, **+ Cursos**, **+ Bases Curriculares**, **+ Etapa da Base** e a **+ Turma**. As disciplinas serão exibidas no quadro à direita. Para cada disciplina e período de avaliação (bimestral, trimestral ou semestral), informe os dias letivos ou aulas dadas, quando o campo estiver habilitado para controle de frequência. Em seguida, clique em **Lançar Avaliações**.

[![Lançamento por turma](https://e-cidade.wiki.br/educacao/escola/files/Tela_lan%C3%A7amento_por_turma.png)](https://e-cidade.wiki.br/educacao/escola/files/Tela_lan%C3%A7amento_por_turma.png)

Na janela de lançamento, informe os dados de cada aluno e disciplina. O acesso do professor é restrito às disciplinas e turmas em que leciona. O sistema calcula o resultado final e determina aprovação ou reprovação conforme o mínimo de aproveitamento e o percentual mínimo de frequência. Se a escola utilizar recuperação final, o campo correspondente será habilitado para alunos que não atingiram o mínimo na média final.

[![Lançamento de avaliações e frequência](https://e-cidade.wiki.br/educacao/escola/files/lan%C3%A7amento_de_avalia%C3%A7%C3%B5es_e_frequencia.png)](https://e-cidade.wiki.br/educacao/escola/files/lan%C3%A7amento_de_avalia%C3%A7%C3%B5es_e_frequencia.png)

### Painel do Diário de Classe

[![Painel do Diário de Classe](https://e-cidade.wiki.br/educacao/escola/files/Painel_Di%C3%A1rio_de_classe.png)](https://e-cidade.wiki.br/educacao/escola/files/Painel_Di%C3%A1rio_de_classe.png)

**Campos e quadros**
- **Exibir Troca de Turma:** define se os alunos na situação de troca de turma serão carregados.
- **Disciplina:** permite alternar entre disciplinas. Salve os lançamentos da disciplina atual antes de trocar.
- **Controle de Frequência/Avaliação:** exibe o controle configurado para a disciplina na turma.
- **Forma de Avaliação:** exibe a forma definida no procedimento para o período selecionado.

**Botões**
- **Legenda:** exibe as abreviações usadas nos lançamentos e suas descrições.

[![Legenda de lançamento](https://e-cidade.wiki.br/educacao/escola/files/tela_legenda_lan%C3%A7amento.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_legenda_lan%C3%A7amento.png)

- **Proporcionalidade:** habilitado quando a forma de obtenção da nota final é Soma.
- **Avaliação Alternativa:** habilitado quando a forma de obtenção é Soma e o procedimento define formas alternativas para alunos ingressantes após o primeiro período.
- **Origem da Nota:** informa se a avaliação veio de outra escola da rede ou de fora da rede, por transferência.

[![Origem da nota](https://e-cidade.wiki.br/educacao/escola/files/tela_origem_nota.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_origem_nota.png)

- **Abonar Faltas:** registra o abono, a justificativa e a quantidade de faltas abonadas.

[![Abonar faltas](https://e-cidade.wiki.br/educacao/escola/files/tela_abonar_faltas.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_abonar_faltas.png)

- **Parecer/Relatório (descritivo):** permite registrar um relatório descritivo complementar quando o procedimento não for do tipo Relatório Descritivo.

[![Lançamento de pareceres](https://e-cidade.wiki.br/educacao/escola/files/tela_lan%C3%A7amento_de_pareceres.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_lan%C3%A7amento_de_pareceres.png)

- **Observação:** registra uma observação por aluno e período e permite replicá-la para outras disciplinas.

[![Lançar observação](https://e-cidade.wiki.br/educacao/escola/files/tela_lan%C3%A7ar_observa%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_lan%C3%A7ar_observa%C3%A7%C3%A3o.png)

- **Amparo:** registra o amparo do aluno que não realizará avaliações no período, como em caso de licença médica.

[![Lançamento de amparo](https://e-cidade.wiki.br/educacao/escola/files/tela_Lan%C3%A7amento_de_Amparo.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_Lan%C3%A7amento_de_Amparo.png)

- **Conversão:** converte a nota importada de outra escola da rede quando o processo de avaliação da escola de origem for diferente.

[![Conversão de nota](https://e-cidade.wiki.br/educacao/escola/files/tela_convers%C3%A3o_de_nota.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_convers%C3%A3o_de_nota.png)

- **Alterar Resultado Final:** habilitado após a geração dos resultados quando houver aluno retido. Permite alterar para progressão por aprovação pelo Conselho, reclassificação por baixa frequência ou aprovação conforme o Regimento Escolar. Também permite escolher se a avaliação final não será informada, será informada e substituirá o resultado, ou será informada sem substituí-lo.

[![Alteração de resultado final](https://e-cidade.wiki.br/educacao/escola/files/tela_altera%C3%A7%C3%A3o_de_resultado.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_altera%C3%A7%C3%A3o_de_resultado.png)`,
    },
    {
      title: "Encerramento de Avaliações",
      content: `## Encerramento de Avaliações

### Progressão Parcial

Rotina para encerrar as avaliações de alunos em progressão parcial/dependência. Se forem identificadas pendências em uma ou mais turmas, elas não serão encerradas ou serão encerradas parcialmente, conforme o tipo de pendência. O sistema gera um relatório PDF com as pendências encontradas em cada turma.

### Calendário Letivo

Rotina para encerramento geral das avaliações de todas as turmas. Se forem identificadas pendências, as turmas não serão encerradas ou serão encerradas parcialmente, conforme o tipo de pendência, e será gerado um relatório PDF com as ocorrências.

Selecione **Encerrar** e clique em **+ Escola**. O sistema exibirá os calendários da escola; marque o calendário ou curso que deseja encerrar.

[![Encerramento de avaliações do calendário](https://e-cidade.wiki.br/educacao/escola/files/tela_encerramento_de_avalia%C3%A7%C3%B5es_calend%C3%A1rio.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_encerramento_de_avalia%C3%A7%C3%B5es_calend%C3%A1rio.png)

Clique em **Encerrar Avaliações**. O sistema verificará se todos os alunos têm aproveitamento informado. Se houver alunos sem aproveitamento, será exibido um relatório com o aluno e a situação por disciplina.

[![Relatório de encerramento de avaliações](https://e-cidade.wiki.br/educacao/escola/files/relat%C3%B3rio_encerramento_de_avalia%C3%A7%C3%B5es_calendario.png)](https://e-cidade.wiki.br/educacao/escola/files/relat%C3%B3rio_encerramento_de_avalia%C3%A7%C3%B5es_calendario.png)

Para cancelar, selecione **Cancelar**, escolha a escola e o calendário e clique em **Cancelar Encerramento Avaliações**. O cancelamento alcança turmas cujos alunos não possuam matrícula posterior.

[![Cancelamento de avaliações do calendário](https://e-cidade.wiki.br/educacao/escola/files/Relatorio_cancelamento_de_avalia%C3%A7%C3%B5es__calend%C3%A1rio.png)](https://e-cidade.wiki.br/educacao/escola/files/Relatorio_cancelamento_de_avalia%C3%A7%C3%B5es__calend%C3%A1rio.png)`,
    },
  ],
  Matrículas: [
    {
      title: "Rematricular Aluno",
      content: `## Rematricular Aluno

\`\`\`
DB: EDUCAÇÃO > Escola > Procedimentos > Matrículas > Rematricular Aluno
\`\`\`

Esta rotina permite realizar a rematrícula dos alunos para o próximo ano letivo. Clique no link **Turma** e selecione uma turma do calendário. O sistema listará os alunos em condição de matrícula (Candidato, Aprovado ou Reprovado). Selecione os alunos, passe-os para o quadro **Matricular na turma** usando a seta, informe a data da matrícula e clique em **Incluir**.

[![Rematricular aluno](https://e-cidade.wiki.br/educacao/escola/files/Tela_rematricular_aluno.png)](https://e-cidade.wiki.br/educacao/escola/files/Tela_rematricular_aluno.png)

**Campos e quadros**
- **Turma:** selecione a turma cadastrada no calendário.
- **Calendário, Curso, Etapa e Turno:** dados da turma selecionada.
- **Vagas, Alunos Matriculados e Vagas Disponíveis:** capacidade da turma, matrículas efetuadas e vagas restantes.
- **Alunos em condição de matrícula:** alunos aptos para a etapa da turma, incluindo aprovados e reprovados da etapa correspondente. Para turma multietapa, são listados os alunos das etapas que a compõem.
- **Matricular na turma:** selecione os alunos com as setas, informe a data da matrícula e clique em **Incluir**.

Para turma multietapa, confirme a etapa em que cada aluno cursará.

[![Etapa do aluno na rematrícula](https://e-cidade.wiki.br/educacao/escola/files/Tela_matricular_aluno_rematricula.png)](https://e-cidade.wiki.br/educacao/escola/files/Tela_matricular_aluno_rematricula.png)

### Aba Alunos

Exibe os alunos da turma. Ao selecionar um aluno, é possível consultar a matrícula, incluir observações, consultar a movimentação e alterar a data da matrícula. Para alunos com necessidades educacionais especiais, pode-se indicar avaliação por parecer. Se Sim, o diário de classe registrará o parecer mesmo que a turma normalmente seja avaliada por nota ou nível.

[![Alunos da turma rematriculados](https://e-cidade.wiki.br/educacao/escola/files/tela_aba_alunos__rematricular_.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_aba_alunos__rematricular_.png)

[![Aluno rematriculado na turma](https://e-cidade.wiki.br/educacao/escola/files/tela_aluno_rematriculado_turma.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_aluno_rematriculado_turma.png)

**Classificar Turma:** organiza e numera os alunos em ordem alfabética. Após novas matrículas, use novamente a classificação para reordenar a lista.`,
    },
    {
      title: "Alterar Situação da Matrícula",
      content: `## Alterar Situação da Matrícula

\`\`\`
DB: EDUCAÇÃO > Escola > Procedimentos > Matrículas > Alterar Situação da Matrícula
\`\`\`

Esta rotina altera a situação da matrícula do aluno. Clique no link **Turma**, selecione o calendário e a turma do aluno. Em seguida, clique no link **Aluno**, selecione um aluno com situação **Matriculado** e escolha a nova situação: **Evadido**, **Cancelado**, **Falecido**, **Matrícula indevida** ou **Matrícula trancada**. Informe a data da alteração e clique em **Alterar**.

O aluno continuará aparecendo no diário de classe da turma, mas o campo para lançamento de nota ficará desabilitado.

[![Alterar situação da matrícula](https://e-cidade.wiki.br/educacao/escola/files/tela_alterar_situa%C3%A7%C3%A3o_da_matricula.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_alterar_situa%C3%A7%C3%A3o_da_matricula.png)

### Aba Alunos

O sistema exibe a mesma aba Alunos disponível nas rotinas de rematrícula e cadastro da turma.`,
    },
    {
      title: "Excluir Matrícula",
      content: `## Excluir Matrícula

Pesquise o calendário da turma em que o aluno está matriculado e selecione a turma. Clique no link **Aluno** para exibir os alunos com situação **Matriculado**.

[![Pesquisa de aluno para excluir matrícula](https://e-cidade.wiki.br/educacao/escola/files/tela_pesquisa_aluno_excluir_matricula.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_pesquisa_aluno_excluir_matricula.png)

Selecione o aluno, informe o motivo da exclusão e uma observação e clique em **Excluir**. A matrícula será removida, o aluno deixará de aparecer no diário de classe e a classificação da turma será ajustada.

[![Excluir matrícula](https://e-cidade.wiki.br/educacao/escola/files/tela_excluir_matricula.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_excluir_matricula.png)`,
    },
    {
      title: "Trocar Aluno de Turma",
      content: `## Trocar Aluno de Turma

### Com Movimentação por Aluno

Clique no link **Matrícula**, pesquise e selecione o aluno. Depois, clique no link **Turma** de destino e selecione uma turma compatível com o ensino do aluno. Informe a data da troca e se o aproveitamento da turma de origem deverá ser importado para a turma de destino; clique em **Incluir**.

[![Troca de turma por aluno com movimentação](https://e-cidade.wiki.br/educacao/escola/files/Tela_troca_aluno_de_turma__por_aluno_com_movimentacao.png)](https://e-cidade.wiki.br/educacao/escola/files/Tela_troca_aluno_de_turma__por_aluno_com_movimentacao.png)

Para remanejar o aluno para turma de outro ensino, altere **Turmas compatíveis** para **Outros Ensinos** e escolha uma turma equivalente.

[![Turmas de outros ensinos](https://e-cidade.wiki.br/educacao/escola/files/tela_troca_de_turma_outros_ensinos.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_troca_de_turma_outros_ensinos.png)

**Observação:** o aluno poderá ser remanejado somente para turmas da mesma escola e de etapas equivalentes.

### Com Movimentação por Turma

Selecione a turma de origem. Marque os alunos que serão transferidos para outra turma, selecione a turma de destino e informe a data da alteração. Indique se o aproveitamento da turma de origem deverá ser importado e clique em **Trocar Alunos**.

[![Troca de turma com movimentação por turma](https://e-cidade.wiki.br/educacao/escola/files/Troca_de_turma_com_movimentacao_por_turma.png)](https://e-cidade.wiki.br/educacao/escola/files/Troca_de_turma_com_movimentacao_por_turma.png)

### Sem Movimentação

Esta opção troca o aluno de turma sem registrar que ele teve matrícula na turma de origem; a matrícula passa a constar como pertencente à turma de destino. Selecione o aluno pelo link **Matrícula** e a turma de destino pelo link **Turma**. O sistema mostrará as disciplinas existentes na turma de origem que não foram encontradas na turma de destino, para que, quando houver importação de aproveitamento, sejam indicadas as disciplinas de destino correspondentes.

[![Troca de turma sem movimentação](https://e-cidade.wiki.br/educacao/escola/files/troca_de_turma_sem_movimenta%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/escola/files/troca_de_turma_sem_movimenta%C3%A7%C3%A3o.png)`,
    },
    {
      title: "Alterar Turno Matrícula ED.Infantil",
      content: `## Alterar Turno Matrícula ED. Infantil

Rotina destinada às turmas da Educação Infantil. Permite alterar o turno da matrícula de alunos cuja turma seja de turno integral.

Selecione o link **Turma** e escolha uma turma de turno integral. Em seguida, clique no link **Aluno**, selecione o aluno, ajuste a data da modificação se necessário e clique em **Salvar**.

[![Alterar turno da matrícula na Educação Infantil](https://e-cidade.wiki.br/educacao/escola/files/tela_alterar_turno_matricula_Ed._Infantil.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_alterar_turno_matricula_Ed._Infantil.png)

Após a alteração, na turma de turno integral o aluno aparecerá matriculado em apenas um período: manhã ou tarde.`,
    },
  ],
};

export const educacaoEscolaProcedimentosContent: Record<string, string> = {
  "Progressão de Aluno": `# Progressão de Aluno

Procedimento utilizado para avançar um aluno para a etapa/ano seguinte durante o ano letivo, no mesmo calendário, quando seu aproveitamento supera o exigido para a etapa em que está matriculado. A rotina inclui avanço, classificação, reclassificação e cancelamento de progressão.

## Avanço/Classificação

### Avanço

Normalmente utilizado pelos municípios para a 1ª série/ano do ensino fundamental e para a EJA. Clique no link **Aluno** e selecione o aluno. Depois, selecione a **Turma de Destino**, correspondente à próxima etapa, informe a data e indique se deseja importar o aproveitamento da turma de origem. Se Sim, avaliações e faltas serão transferidas; se Não, os dados não serão importados. Clique em **Incluir**.

[![Progressão de aluno por avanço](https://e-cidade.wiki.br/educacao/escola/files/tela_progress%C3%A3o_de_aluno_avan%C3%A7o.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_progress%C3%A3o_de_aluno_avan%C3%A7o.png)

### Classificação

Válida para as demais etapas/anos. Selecione o aluno pelo link **Aluno** e, pelo link **Turma de Destino**, escolha uma turma da etapa seguinte. Informe a data e se o aproveitamento (avaliações e faltas) deverá ser importado e clique em **Incluir**.

[![Progressão de aluno por classificação](https://e-cidade.wiki.br/educacao/escola/files/tela_progress%C3%A3o_de_aluno_classifica%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_progress%C3%A3o_de_aluno_classifica%C3%A7%C3%A3o.png)

## Reclassificação

Destinada a alunos da própria unidade escolar, matriculados no início do ano letivo, que possam ser reclassificados para uma etapa/ano mais avançado conforme idade e competências. Selecione o aluno e a turma de destino da próxima etapa. Informe a data e se haverá registro de avaliação. Se Sim, informe os componentes curriculares necessários e clique em **Processar** para matricular o aluno na turma de destino.

[![Reclassificação do aluno](https://e-cidade.wiki.br/educacao/escola/files/tela_de_progress%C3%A3o_de_aluno_reclassifica%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_de_progress%C3%A3o_de_aluno_reclassifica%C3%A7%C3%A3o.png)

## Cancelar Progressão

Selecione o aluno progredido e confirme o cancelamento. O sistema retornará o aluno à turma de origem e excluirá o registro da progressão.

[![Cancelamento da progressão](https://e-cidade.wiki.br/educacao/escola/files/tela_de_cancelamento_da_progress%C3%A3o.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_de_cancelamento_da_progress%C3%A3o.png)`,
  "Atestado de Vaga": `# Atestado de Vaga

## Escolas da Rede

Rotina utilizada para transferências entre escolas da rede municipal. Emita um atestado de vaga para o aluno que deseja ser transferido para sua escola.

[![Atestado de vaga da rede](https://e-cidade.wiki.br/educacao/escola/files/tela_atestado_de_vaga_rede.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_atestado_de_vaga_rede.png)

**Campos**
- **Aluno:** selecione um aluno de outra escola municipal com situação Matriculado ou Aprovado.
- **Base Curricular:** selecione uma base cadastrada.
- **Etapa:** informada conforme a base.
- **Turno:** selecione um turno em que a escola possua turmas.
- **Calendário:** selecione o calendário da matrícula.

Clique em **Incluir** para abrir a impressão do atestado em duas vias.

[![Relatório do atestado de vaga da rede](https://e-cidade.wiki.br/educacao/escola/files/relat%C3%B3rio_atestado_de_vaga_via_rede.png)](https://e-cidade.wiki.br/educacao/escola/files/relat%C3%B3rio_atestado_de_vaga_via_rede.png)

## Outras Escolas

Use esta opção para emitir atestado de vaga destinado a uma escola fora da rede.

[![Atestado de vaga para outras escolas](https://e-cidade.wiki.br/educacao/escola/files/tela_atestado_de_vaga__outras_escolas.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_atestado_de_vaga__outras_escolas.png)

Informe aluno, base curricular, etapa, turno e calendário conforme as orientações da opção Escolas da Rede. Clique em **Imprimir** para gerar o atestado em duas vias.

[![Relatório do atestado fora da rede](https://e-cidade.wiki.br/educacao/escola/files/relat%C3%B3rio_atestado_de_vaga_fora_da_rede.png)](https://e-cidade.wiki.br/educacao/escola/files/relat%C3%B3rio_atestado_de_vaga_fora_da_rede.png)`,
  Transferências: `# Transferências

## Transferências Entre Escolas da Rede

Rotina para transferir alunos entre escolas municipais por meio de um atestado de vaga emitido pela escola de destino. Em **Transferir Aluno**, pesquise e selecione o **Código do Atestado**. O sistema exibirá a situação do aluno e os dados da escola de destino. Informe uma observação, se necessário, e se o aluno participa do Programa Auxílio Brasil; clique em **Incluir**. A situação passará para **Transferido Rede**.

[![Transferir aluno entre escolas da rede](https://e-cidade.wiki.br/educacao/escola/files/Tela_transferir_aluno_entre_escolas_da_rede.png)](https://e-cidade.wiki.br/educacao/escola/files/Tela_transferir_aluno_entre_escolas_da_rede.png)

Após a inclusão, o sistema exibirá o guia de transferência com aproveitamento.

[![Guia de transferência da rede](https://e-cidade.wiki.br/educacao/escola/files/guia_de_transfer%C3%AAncia__transf_rede.png)](https://e-cidade.wiki.br/educacao/escola/files/guia_de_transfer%C3%AAncia__transf_rede.png)

### Cancelar Transferência (REDE)

O cancelamento só é permitido se o aluno ainda não tiver sido matriculado pela escola de destino e a turma de origem não estiver encerrada. Selecione o aluno transferido, confira os dados e confirme o cancelamento.

[![Cancelar transferência da rede](https://e-cidade.wiki.br/educacao/escola/files/tela_cancelar_transfer%C3%AAncia_rede.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_cancelar_transfer%C3%AAncia_rede.png)

## Transferências para Outras Escolas

Esta rotina transfere alunos da rede municipal para escolas estaduais, particulares ou outras escolas fora da rede. Selecione o aluno pelo link **Aluno** e depois a escola de destino pelo link **Escola Destino**. Se a escola não estiver cadastrada, clique em **Nova Escola** para incluir seus dados.

[![Transferência para fora da rede](https://e-cidade.wiki.br/educacao/escola/files/tela_transfer%C3%AAncia_fora.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_transfer%C3%AAncia_fora.png)

[![Cadastrar nova escola de destino](https://e-cidade.wiki.br/educacao/escola/files/tela_bot%C3%A3o_nova_escola.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_bot%C3%A3o_nova_escola.png)

Após incluir, a situação do aluno passará para **Transferido Fora**.

## Matricular Alunos Transferidos (REDE)

Esta rotina matricula alunos transferidos entre escolas municipais. Pesquise e selecione um aluno com situação **Transferido Rede**. Selecione a **Turma de Destino** entre as turmas compatíveis com a etapa indicada no atestado e confirme a transferência. Indique se deseja importar avaliações e faltas da escola de origem, ajuste a data se necessário e clique em **Incluir**. Se o aluno retornar a uma escola onde já teve matrícula, o sistema poderá permitir gerar uma nova matrícula.

[![Matricular aluno transferido da rede](https://e-cidade.wiki.br/educacao/escola/files/tela_matricular_aluno_transferido_rede.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_matricular_aluno_transferido_rede.png)

## Transferência de Alunos Encerrados

Permite transferir, entre períodos, alunos cujo ano letivo foi concluído, mas que ainda constam matriculados na escola de origem.

[![Transferir alunos encerrados](https://e-cidade.wiki.br/educacao/escola/files/tela_transferir_alunos_encerrados.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_transferir_alunos_encerrados.png)

Selecione o **Tipo** (Fora ou Rede), a **Escola** de destino, o **Curso** e a **Etapa**. Marque os alunos encerrados como Aprovado ou Reprovado, informe o emissor se necessário e clique em **Salvar** para gerar o guia de transferência.

[![Guia de transferência de alunos encerrados](https://e-cidade.wiki.br/educacao/escola/files/guia_de_tranferencia_encerrados.png)](https://e-cidade.wiki.br/educacao/escola/files/guia_de_tranferencia_encerrados.png)`,
  "Manutenção do Histórico Escolar": `# Manutenção do Histórico Escolar

O histórico escolar registra os dados cadastrais e as etapas concluídas pelo aluno, incluindo disciplinas, notas finais e escolas em que estudou. Para lançar um histórico retroativo, clique no link **Aluno** e pesquise por código, nome, etapa ou situação da matrícula; basta informar um dos filtros.

[![Pesquisa de aluno para manutenção do histórico](https://e-cidade.wiki.br/educacao/escola/files/Pesquisa_aluno_manuten%C3%A7%C3%A3o_do_hist%C3%B3rico.png)](https://e-cidade.wiki.br/educacao/escola/files/Pesquisa_aluno_manuten%C3%A7%C3%A3o_do_hist%C3%B3rico.png)

Na pesquisa, o caractere **%** funciona como coringa: **%SOUZA** localiza termos que terminam em Souza; **%SILVA%** localiza termos que contêm Silva; **JOAO%** localiza termos que começam com João.

## Inclusão de Curso

Após selecionar o aluno, clique em **Nenhum curso no histórico** e depois no link **Curso**. Selecione o curso concluído e clique em **Incluir**. O campo **Obs.** permite registrar uma observação específica, exibida somente no histórico escolar do aluno.

[![Inclusão de curso no histórico](https://e-cidade.wiki.br/educacao/escola/files/tela_inclus%C3%A3o_de_curso_manuten%C3%A7%C3%A3o_do_hist%C3%B3rico.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_inclus%C3%A3o_de_curso_manuten%C3%A7%C3%A3o_do_hist%C3%B3rico.png)

## Cadastro de Etapas

Após incluir o curso, informe se a etapa foi cursada em escola da rede municipal ou em outra escola. Selecione a escola correspondente e preencha:
- **Etapa:** etapa vinculada ao curso.
- **Ano:** ano de conclusão.
- **Período:** período de ingresso na escola (por exemplo, 1 para o primeiro bimestre/trimestre; se desconhecido, pode ser informado 1).
- **Turma:** turma cursada, campo opcional.
- **Escola:** selecione na pesquisa a escola da rede ou a escola de procedência.
- **Situação:** Concluído, Amparado, Transferido, Cancelado, Evadido, Falecido, Reclassificado ou Avanço.

Para as situações Concluído, Avanço e Reclassificado, informe resultado final, dias letivos, carga horária, mínimo para aprovação, percentual de frequência e termo final. Para Amparado, informe a justificativa e a carga horária. Para Evadido, Transferido, Cancelado ou Falecido, o sistema disponibiliza somente observações.

[![Inclusão de etapa amparada](https://e-cidade.wiki.br/educacao/escola/files/tela_amparado_inclus%C3%A3o_de_etapa.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_amparado_inclus%C3%A3o_de_etapa.png)

Quando a etapa for concluída, o sistema habilitará o lançamento de disciplinas.

[![Disciplinas do histórico escolar](https://e-cidade.wiki.br/educacao/escola/files/tela_inclus%C3%A3o_de_disciplina.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_inclus%C3%A3o_de_disciplina.png)

## Inclusão de Disciplinas

Clique em **Lançar disciplina** e selecione as disciplinas cursadas na etapa.

[![Selecionar disciplina do histórico](https://e-cidade.wiki.br/educacao/escola/files/tela_incluir_disciplina_manuten%C3%A7%C3%A3o_do_hist%C3%B3rico.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_incluir_disciplina_manuten%C3%A7%C3%A3o_do_hist%C3%B3rico.png)

- **Disciplinas:** escolha uma disciplina vinculada ao curso.
- **Tipo de Base:** Educação Infantil, Base Diversificada ou Base Nacional Comum Curricular, conforme o curso, a etapa e a disciplina.
- **Situação:** informe se o aluno concluiu os estudos na disciplina ou foi amparado.
- **Carga Horária:** carga horária da disciplina, campo opcional.
- **Resultado:** indique aprovação ou reprovação.
- **Aproveitamento:** informe a nota, o conceito, o parecer ou o relatório descritivo final.

Clique em **Salvar** para inserir a disciplina na grade. Os botões de ação permitem alterar ou excluir o registro. Depois de lançar as disciplinas, feche a tela de lançamento; na tela do histórico, confirme as alterações. Para incluir outra etapa, selecione a opção correspondente a escola da rede ou outra escola e preencha o próximo registro.

[![Remover disciplina do histórico](https://e-cidade.wiki.br/educacao/escola/files/tela_de_remo%C3%A7%C3%A3o_de_disciplina_manuten%C3%A7%C3%A3o_do_hist%C3%B3rico.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_de_remo%C3%A7%C3%A3o_de_disciplina_manuten%C3%A7%C3%A3o_do_hist%C3%B3rico.png)`,
  "Conclusão de Curso": `# Conclusão de Curso

Esta rotina permite concluir o curso dos estudantes. Informe o curso e a base curricular e clique em **Procurar**. O sistema exibirá os alunos encontrados; selecione os que serão concluídos, passe-os para o outro quadro usando as setas e clique em **Concluir**.

[![Conclusão de curso](https://e-cidade.wiki.br/educacao/escola/files/tela_conclus%C3%A3o_de_curso.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_conclus%C3%A3o_de_curso.png)

O sistema verificará no histórico se cada aluno cumpriu as etapas e disciplinas da base. Serão listados os alunos com pendências e os aptos a concluir o curso.

[![Confirmação de conclusão de curso](https://e-cidade.wiki.br/educacao/escola/files/tela_confirma%C3%A7%C3%A3o_de_conclus%C3%A3o_de_curso.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_confirma%C3%A7%C3%A3o_de_conclus%C3%A3o_de_curso.png)

## Cancelar Conclusão

Informe o curso, selecione com as setas os alunos cuja conclusão será cancelada e clique em **Confirmar**. O sistema exibirá a confirmação do cancelamento.

[![Cancelamento de conclusão de curso](https://e-cidade.wiki.br/educacao/escola/files/tela_cancelamento_de_curso.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_cancelamento_de_curso.png)`,
  Parâmetros: `# Parâmetros Globais

Nesta rotina ficam os parâmetros globais do sistema.

[![Parâmetros globais](https://e-cidade.wiki.br/educacao/escola/files/tela_par%C3%A2metros_globais.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_par%C3%A2metros_globais.png)

## Parâmetros

- **Calcular média parcial:** quando Sim e o procedimento usa média ponderada, calcula a média parcial dos períodos informados e apresenta a nota real do aluno.
- **Medida em m² por aluno em sala de aula:** parâmetro de área recomendado pelo Parecer 1.400/2002: 1,20 m² por aluno.
- **Dia/Mês Limite Movimentação:** data-base no formato DD/MM para considerar transferências, trocas de turma, matrículas e outros movimentos nos relatórios. Movimentos anteriores à data informada não serão registrados nos relatórios.
- **Data base para cálculo de idade:** data no formato DD/MM usada para calcular a idade dos alunos em relatórios.
- **Consistir Matr. Registro no Histórico:** quando Sim, o sistema compara o histórico com a etapa em que o aluno deve ser matriculado e pode solicitar o lançamento do histórico retroativo. Quando Não, permite a matrícula sem essa validação.
- **Reclassifica para etapa anterior:** quando Sim, permite reclassificar para etapa anterior ou posterior; quando Não, somente para etapa posterior.
- **Habilitar Avaliações Alternativas:** habilita, nos procedimentos de avaliação, a configuração de formas de avaliação alternativas para alunos matriculados após o início do período. O sistema considera as datas de matrícula para definir a avaliação aplicável.
- **Idade Mínima para Votação:** idade mínima para inclusão de alunos no relatório de alunos votantes.
- **Habilita Botão Ordenar Alfabeticamente:** quando Sim, habilita o botão correspondente na classificação da turma.
- **Forma de Lançamento do Parecer:** define o lançamento como Parecer Geral, com pesquisa de pareceres e legendas e campo descritivo, ou Parecer por Disciplina, exibido em grade por disciplina.
- **Deslocamento do Cursor:** define a ordem de navegação por Tab nos lançamentos: **Nota > Falta**, alternando nota e falta por aluno, ou **Nota > Nota**, passando pelas notas de todos os alunos e depois pelas faltas.

### Avaliações alternativas — exemplo

Considere um procedimento em que o 1º e o 2º trimestre valem de 0 a 30 e o 3º trimestre de 0 a 40. O parâmetro permite configurar avaliações alternativas conforme as datas de matrícula e os períodos cursados, por exemplo, para alunos transferidos e posteriormente reintegrados ou matriculados após o encerramento do primeiro trimestre.

## Configuração da Nota

### Inclusão

Configura a estrutura da nota, incluindo quantidade de casas decimais e regra de arredondamento.

[![Configuração da nota da escola](https://e-cidade.wiki.br/educacao/escola/files/tela_configura%C3%A7%C3%A3o_nota_escola.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_configura%C3%A7%C3%A3o_nota_escola.png)

- **Código da Estrutura da Nota:** selecione uma estrutura cadastrada na pesquisa.
- **Ativo:** indica se a configuração está ativa.
- **Arredondar a Média:** para resultado do tipo Nota, indique se a média final será arredondada. Se Sim, informe a regra.
- **Código da Regra de Arredondamento:** selecione uma regra cadastrada pela Secretaria de Educação. Se não for informada regra, será aplicada a regra padrão do sistema.
- **Observação:** informações adicionais sobre a configuração.

### Alteração

Os campos somente poderão ser alterados quando não houver turmas encerradas no ano letivo. Cancele o encerramento das turmas para que as alterações possam ser aplicadas após confirmação.

[![Alteração da configuração com turmas encerradas](https://e-cidade.wiki.br/educacao/escola/files/alterar_configura%C3%A7%C3%A3o_de_nota_turmas_encerradas.png)](https://e-cidade.wiki.br/educacao/escola/files/alterar_configura%C3%A7%C3%A3o_de_nota_turmas_encerradas.png)

## Parâmetros de Progressão Parcial/Dependência

Esta rotina configura a progressão parcial/dependência quando o parâmetro global **Controle da Progressão Parcial**, no módulo Secretaria de Educação, estiver definido como Escola. Se estiver definido como Secretaria, a configuração será replicada pela Secretaria e não poderá ser alterada neste módulo.

[![Parâmetros de progressão parcial e dependência](https://e-cidade.wiki.br/educacao/escola/files/tela_parametro_prog_parcial_depend%C3%AAncia.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_parametro_prog_parcial_depend%C3%AAncia.png)

- **Habilita Progressão Parcial:** Sim habilita os parâmetros; Não oculta os campos de configuração.
- **Quantidade de Disciplinas Dependentes:** número máximo de disciplinas em que o aluno pode reprovar e ainda ser aprovado por progressão parcial/dependência.
- **Forma de Controle:** **Por Etapa** limita as dependências em cada etapa; **Por Base Curricular** considera as disciplinas reprovadas em todas as etapas da base.
- **Controle da Frequência:** define o controle de frequência dos alunos em dependência e habilita o campo para informar faltas.
- **Disciplina Aprovada Elimina Dependência:** quando Sim, a aprovação em uma disciplina na etapa atual pode eliminar a dependência da mesma disciplina na etapa anterior; quando Não, a dependência é mantida.
- **Justificativa:** texto habilitado quando a aprovação na disciplina elimina a dependência; poderá ser apresentado em relatórios.
- **Etapas com Progressão Parcial:** etapas dos cursos em que será aplicada a progressão parcial/dependência.

**Observação:** a configuração é aplicada no encerramento das avaliações e não poderá ser alterada enquanto houver turmas encerradas; cancele o encerramento das turmas para alterar os parâmetros.`,
  "Censo Escolar": `## Exportação Matrícula Inicial

A rotina permite que a escola ou o município gere, por migração, o arquivo do Censo Escolar conforme o layout do Educacenso. Clique em **Gerar Arquivo**; o sistema preencherá por padrão a data do censo e as datas inicial e final do calendário letivo.

[![Exportação da matrícula inicial](https://e-cidade.wiki.br/educacao/escola/files/tela_exporta%C3%A7%C3%A3o_matricula_inicial.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_exporta%C3%A7%C3%A3o_matricula_inicial.png)

Antes de gerar o arquivo, complete os cadastros da escola, turmas, docentes e alunos. O sistema verifica os campos exigidos pelo censo e apresenta um relatório de inconsistências se houver dados faltantes.

[![Inconsistências da exportação](https://e-cidade.wiki.br/educacao/escola/files/tela_exportacao_matricula_inicial_inconsistencia.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_exportacao_matricula_inicial_inconsistencia.png)

O link **Inconsistências do Censo Escolar** disponibiliza um PDF com as ocorrências. Os registros são identificados pelos códigos:
- **Registro 00:** Escolas.
- **Registro 10:** Infraestrutura.
- **Registro 20:** Turmas.
- **Registro 30:** Servidores e alunos (nome, CPF etc.).
- **Registro 40:** Gestor.
- **Registro 50:** Vínculo do professor com turmas, AEE e atividade complementar.
- **Registro 60:** Dados dos alunos.

Corrija cada ocorrência na rotina correspondente. Por exemplo, inconsistências do Registro 10 devem ser corrigidas em **DB: EDUCAÇÃO > Escola > Cadastros > Dados da Escola > Aba Infraestrutura**.

[![Relatório de inconsistências do Censo Escolar](https://e-cidade.wiki.br/educacao/escola/files/relat%C3%B3rio_inconsist%C3%AAncia_censo_escolar.png)](https://e-cidade.wiki.br/educacao/escola/files/relat%C3%B3rio_inconsist%C3%AAncia_censo_escolar.png)

Após corrigir as inconsistências, use o link **Arquivo de Exportação do Censo Escolar** para baixar o arquivo TXT.

[![Arquivo de exportação do Censo Escolar](https://e-cidade.wiki.br/educacao/escola/files/tela_exporta%C3%A7%C3%A3o_matricula_inicial_arquivo_para_exportar.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_exporta%C3%A7%C3%A3o_matricula_inicial_arquivo_para_exportar.png)`,
  "Controle de ausências e substituições": `## Registro da ausência

Esta funcionalidade registra as ausências dos profissionais da escola e, no caso de professores, permite indicar o substituto.

[![Registro de ausência](https://e-cidade.wiki.br/educacao/escola/files/tela_aus%C3%AAncia.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_aus%C3%AAncia.png)

**Campos**
- **Profissional:** pesquise e selecione o profissional.
- **Tipo de Hora:** selecione o tipo de hora cadastrado na aba Função Exercida do profissional.
- **Tipo de Ausência:** selecione o tipo de ausência.
- **Data Inicial:** início da ausência.
- **Data Final:** fim da ausência, se conhecido; o campo pode ficar vazio para ausência sem data final definida.
- **Observação:** informação adicional pertinente.

**Atenção:** antes de registrar uma ausência ou substituição, cadastre os tipos de ausência em **Secretaria da Educação > Cadastros > Tipo de Ausência > Inclusão**.

## Aba Substituição

Destinada a profissionais regentes de classe, esta aba registra quem substituirá o professor durante a ausência. A substituição pode ser temporária ou permanente. Na permanente, o vínculo do professor substituído na turma é inativado e o substituto assume seu lugar; na temporária, o professor original permanece vinculado.

[![Substituição de profissional](https://e-cidade.wiki.br/educacao/escola/files/tela_substitui%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/escola/files/tela_substitui%C3%A7%C3%A3o.png)

**Campos**
- **Turma:** turma do professor ausente.
- **Disciplina:** disciplina ministrada pelo professor na turma selecionada.
- **Regente Substituto:** pesquise e selecione o professor substituto.
- **Tipo de Substituição:** temporária ou permanente.
- **Data Inicial:** início da substituição.
- **Data Final:** término; obrigatória para substituição temporária.`,
};
