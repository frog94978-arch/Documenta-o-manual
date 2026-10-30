export const educacaoSecretariaCadastroContent: Record<string, string> = {
  "Termo Resultado Final": `Nesta rotina podem ser cadastrados os termos de resultado final utilizados pelo município, diferenciando resultados de alunos da Educação Infantil, Educação Especial, Ensino Fundamental e outros níveis de ensino.

[![Cadastro do termo de resultado final](https://e-cidade.wiki.br/educacao/secretaria/files/tela_cadastro_do_termo_de_resultado_final.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_cadastro_do_termo_de_resultado_final.png)

**Campos**
- **Ensino:** selecione na pesquisa o tipo de ensino ao qual o termo será vinculado.
- **Descrição:** descrição do termo de resultado final.
- **Abreviatura:** abreviatura do termo.
- **Referência:** indique se o termo representa progressão para outra etapa (por exemplo, aprovado, progredido, avançado ou desenvolveu) ou retenção (por exemplo, reprovado, retido ou não desenvolveu).
- **Ano:** ano-calendário em que o termo será utilizado. Para anos seguintes, o sistema criará o termo automaticamente. Se ele não for mais utilizado, altere o ano cadastrado. É permitido um termo de cada referência para cada ensino e ano.

Preencha os campos e clique em **Incluir**.

## Alteração

O sistema exibirá os termos cadastrados. Pesquise pela descrição e selecione o curso vinculado ao termo no ano vigente para alterar sua descrição.

**Atenção:** alterar um termo já utilizado em turmas encerradas também atualiza o resultado final dos alunos vinculados.

[![Alteração do termo de resultado final](https://e-cidade.wiki.br/educacao/secretaria/files/tela_de_altera%C3%A7%C3%A3o_de_termo_de_resultado_final.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_de_altera%C3%A7%C3%A3o_de_termo_de_resultado_final.png)

## Exclusão

O termo somente poderá ser excluído se não tiver sido utilizado por turmas encerradas vinculadas ao nível de ensino.`,
  "Tipo Ausência": `## Inclusão

Cadastre os tipos de ausência que serão usados no controle de ausências e substituições do módulo Escola.

[![Cadastro de tipo de ausência](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_tipo_de_ausencia.png)](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_tipo_de_ausencia.png)

**Campos**
- **Descrição:** descrição do tipo de ausência, como Atestado Médico, Licença Médica ou Licença-Prêmio.
- **Tipo:** selecione Nenhum, Licença, Falta Abonada ou Falta Não Justificada.

Exemplo: Atestado Médico — tipo Falta Abonada. Após preencher os campos, clique em **Incluir**.

## Alteração

É possível alterar os campos do tipo de ausência. Alterar um tipo já utilizado também atualiza os vínculos existentes de servidores e professores.

## Exclusão

O tipo de ausência somente poderá ser excluído se não estiver vinculado a nenhum servidor ou professor.`,
  Escolas: `## Aba Geral

Nesta aba são cadastrados os dados gerais da escola ou de um departamento interno da Educação.

[![Cadastro dos dados da escola na Secretaria](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_dados_da_escola_secretaria.png)](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_dados_da_escola_secretaria.png)

**Campos**
- **Tipo:** indique se o departamento corresponde a uma unidade escolar ou a um departamento interno da Educação.
- **Código da Escola:** preenchido automaticamente com o código do departamento correspondente.
- **Situação de Fracionamento:** selecione Atividade, Paralisada ou Extinta.
- **Nome da Escola** e **Nome Abrev.:** informe o nome completo e, se houver, a abreviatura.
- **Código INEP:** código INEP da escola; campo obrigatório.
- **Ano Início:** ano de início das atividades.
- **CNPJ:** campo opcional.
- **Credenciamento:** selecione credenciada, em tramitação ou não credenciada.
- **Estado, Cidade, Distrito, Bairro, Endereço, Número, Complemento e CEP:** localização e endereço da escola.
- **Zona:** selecione urbana ou rural.
- **Órgão de Ensino:** selecione o órgão de ensino.
- **Dependência Administrativa:** selecione Federal, Estadual, Municipal ou Privada. Para escola privada, o sistema habilita categoria, convênio com o poder público, número do CNAS, CEBAS, CNPJ e mantenedora.
- **Localização Diferenciada:** indique assentamento, remanescente de quilombos, terra indígena ou não se aplica.
- **Educação Indígena:** informe se a escola oferece Educação Indígena. Se Sim, selecione a língua ministrada; se for indígena, informe as línguas na pesquisa do link **Língua Indígena**.
- **Logotipo:** arquivo JPG para exibição nos relatórios.

## Aba Cursos e Bases

Exibe os cursos e as respectivas bases curriculares oferecidos pela escola.

[![Cursos e bases da escola](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_dados_da_escola_aba_bases_e_cursos.png)](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_dados_da_escola_aba_bases_e_cursos.png)`,
  "Modalidades de Ensino": `Cadastre as modalidades de ensino que as escolas do município estão autorizadas a oferecer, como Educação Básica (Ensino Regular), Educação Especial e Educação de Jovens e Adultos.

[![Cadastro de modalidade de ensino](https://e-cidade.wiki.br/educacao/secretaria/files/tela_cadastro_modalidade_de_ensino.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_cadastro_modalidade_de_ensino.png)

**Campos**
- **Código:** gerado automaticamente.
- **Descrição:** nome da modalidade de ensino.
- **Abreviatura:** abreviatura da modalidade.`,
  "Níveis de Ensinos": `## Inclusão

Cadastre os níveis de ensino oferecidos pelas escolas.

[![Cadastro de níveis de ensino](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_niveis_de_ensino.png)](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_niveis_de_ensino.png)

**Campos**
- **Código:** gerado automaticamente.
- **Modalidade de Ensino:** selecione a modalidade oferecida pelas escolas.
- **Descrição:** nome do nível, como Educação Infantil — Pré-Escola, Ensino Fundamental de 9 anos ou Ensino Fundamental de 8 anos.
- **Abreviatura:** abreviatura do nível.

## Aba Disciplinas

Marque as disciplinas que farão parte da base curricular do nível de ensino e clique em **Salvar**.

[![Disciplinas do nível de ensino](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_modalidade_de_ensino_aba_disciplina.png)](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_modalidade_de_ensino_aba_disciplina.png)

## Alteração

Selecione o nível de ensino para alterar os campos cadastrados.

## Exclusão

O nível de ensino somente poderá ser excluído se não estiver vinculado a nenhum curso.`,
  Etapas: `Cadastre as etapas correspondentes a cada nível de ensino conforme o código do censo.

## Aba Etapas

[![Cadastro de etapas](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_de_etapas_aba_etapas.png)](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_de_etapas_aba_etapas.png)

**Campos**
- **Código:** gerado automaticamente.
- **Nível de Ensino:** selecione o nível ao qual a etapa pertence.
- **Modalidade de Ensino:** preenchida conforme o nível selecionado.
- **Código Censo:** selecione na pesquisa o ensino e a etapa da tabela do censo.
- **Nome da Etapa:** descrição da etapa.
- **Abreviatura:** abreviatura da etapa.

## Aba Regime de Matrícula

Informe o regime de matrícula da etapa.

[![Regime de matrícula da etapa](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_etapas_aba_regime_de_matricula.png)](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_etapas_aba_regime_de_matricula.png)

- **Código:** gerado automaticamente.
- **Etapa:** preenchida conforme o cadastro da etapa.
- **Regime de Matrícula:** selecione o regime oferecido pelas escolas.

## Vínculo Etapa Censo

Vincule a etapa cadastrada à etapa correspondente no censo. Clique no link **Etapa Censo**; a pesquisa listará as etapas conforme o ensino e o ano letivo. Selecione a etapa e clique em **Salvar**.

[![Vínculo da etapa ao censo](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_de_etapas_aba_vinculo_etapa_censo.png)](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_de_etapas_aba_vinculo_etapa_censo.png)

[![Pesquisa de etapa do censo](https://e-cidade.wiki.br/educacao/secretaria/files/tela_pesquisa_etapa_censo.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_pesquisa_etapa_censo.png)`,
  Cursos: `## Cadastro de Cursos

Cadastre os cursos oferecidos pelas escolas do município.

[![Cadastro de cursos](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_de_cursos.png)](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_de_cursos.png)

**Campos**
- **Nome do curso:** descrição do curso oferecido no município.
- **Nível de Ensino:** clique na lupa, pesquise os níveis cadastrados e selecione o nível.
- **Curso Profissionalizante:** exibido para níveis de Ensino Profissional ou Ensino Médio. Para curso profissionalizante, pesquise e selecione o curso correspondente.
- **Incluir no histórico:** indica se o curso e suas etapas, disciplinas e avaliações serão disponibilizados na manutenção do histórico.
- **Aprovação Parcial:** marque somente quando houver aprovação parcial entre etapas ou disciplinas.
- **Ativo:** marque ao incluir o curso; desmarque quando ele deixar de ser oferecido.

[![Pesquisa de níveis de ensino](https://e-cidade.wiki.br/educacao/secretaria/files/cadastro_do_curso_pesquisa_do_n%C3%ADveis_de_ensino.png)](https://e-cidade.wiki.br/educacao/secretaria/files/cadastro_do_curso_pesquisa_do_n%C3%ADveis_de_ensino.png)

[![Pesquisa de cursos profissionalizantes](https://e-cidade.wiki.br/educacao/secretaria/files/tela_de_pesquisa_dos_cursos_profissionalizantes.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_de_pesquisa_dos_cursos_profissionalizantes.png)

Salve para exibir os cursos cadastrados na grade. Para editar, clique no ícone de lápis; somente descrição e **Incluir no histórico** poderão ser alterados. Para excluir, clique na lixeira; a exclusão somente será permitida se o curso não estiver vinculado a uma escola ou base curricular.

## Equivalência entre Cursos

Permite configurar a equivalência entre cursos, por exemplo, Educação de Jovens e Adultos e Ensino Fundamental de 9 anos. Selecione o curso, clique no link **Curso Equivalente**, escolha o curso correspondente na pesquisa, clique em **Adicionar** e depois em **Salvar**.

[![Equivalência entre cursos](https://e-cidade.wiki.br/educacao/secretaria/files/tela_equivalencia_entre_cursos.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_equivalencia_entre_cursos.png)`,
  "Modelos de Relatórios": `## Inclusão

Cadastre modelos de relatórios adotados pela escola, incluindo tipo, cabeçalho e rodapé. O cabeçalho aceita até 200 caracteres e o rodapé até 500.

[![Modelo de relatório](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_modelo_de_relatorio.png)](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_modelo_de_relatorio.png)

**Campos**
- **Código:** gerado automaticamente.
- **Tipo de Relatório:** selecione Histórico Escolar, Certificado de Conclusão, Ata de Resultados Finais, Quadro de Resultados Finais, Alunos Votantes ou Responsáveis Votantes.
- **Nome do Modelo:** nome do modelo.
- **Orientação:** para Histórico Escolar ou Certificado de Conclusão, selecione Retrato ou Paisagem.
- **Brasão:** para Histórico Escolar ou Certificado de Conclusão, selecione República ou Município.
- **Turma**, **Exibir Porcentagem da Frequência**, **Exibe Observação Diário**, **Exibir Mantenedora**, **Exibir Distrito**, **Exibir Coluna Período**, **Exibir Etapa na Observação**, **Exibir informações da certidão de nascimento** e **Exibir informações do RG:** opções disponíveis para Histórico Escolar ou Certificado de Conclusão, conforme as configurações de cada relatório.
- **Texto do Cabeçalho** e **Texto do Rodapé:** textos a exibir nas respectivas áreas do relatório.
- **Observações Gerais a Todos os Alunos:** texto comum a todos os alunos no relatório.
- **Tamanho das Fontes:** para Histórico Escolar ou Certificado de Conclusão em orientação Retrato, selecione tamanho 6 ou 8.

Preencha os campos e clique em **Incluir**.

## Alteração

É possível alterar os campos do modelo selecionado. As mudanças serão aplicadas ao relatório correspondente.`,
  "Componentes Curriculares": `## Base

Configure as etapas inicial e final de cada curso que será vinculado à base curricular.

[![Composição curricular da base](https://e-cidade.wiki.br/educacao/secretaria/files/tela_composicao_curricular_base_inicial.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_composicao_curricular_base_inicial.png)

**Campos**
- **Cursos:** selecione um curso cadastrado.
- **Tipo:** configure as etapas iniciais e finais.

Essa configuração gera totalizadores por tipo de etapa (Inicial e Final) no relatório Mapa Estatístico.

[![Mapa estatístico da base](https://e-cidade.wiki.br/educacao/secretaria/files/Relat%C3%B3rio_mapa_estatistico_base.png)](https://e-cidade.wiki.br/educacao/secretaria/files/Relat%C3%B3rio_mapa_estatistico_base.png)

## Área de Conhecimento

Cadastre as áreas de conhecimento que agrupam as disciplinas da BNCC, como Ciências Humanas e suas Tecnologias, Ciências da Natureza e suas Tecnologias, Linguagens e Códigos e suas Tecnologias e Matemática e suas Tecnologias.

[![Cadastro de área de conhecimento](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_area_do_conhecimento.png)](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_cadastro_area_do_conhecimento.png)

- **Código:** gerado automaticamente.
- **Descrição:** nome da área de conhecimento.
- **Ativo:** indica se a área está em uso.

Preencha os campos e clique em **Incluir**.

## Disciplina

Cadastre as disciplinas ministradas nos cursos conforme as tabelas disponibilizadas pelo censo.

[![Cadastro de disciplina](https://e-cidade.wiki.br/educacao/secretaria/files/tela_cadastro_composicao_curricular_disciplina.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_cadastro_composicao_curricular_disciplina.png)

- **Código:** gerado automaticamente.
- **Código Censo:** selecione a disciplina na pesquisa da tabela do censo. É possível vincular mais de um código, como no caso de uma disciplina globalizada.
- **Descrição:** nome da disciplina conforme a matriz curricular municipal.
- **Descrição Completa:** descrição ampliada quando o nome exceder o limite do campo Descrição.
- **Sigla:** abreviatura da disciplina.
- **Cor:** cor aplicada ao vínculo do professor com a disciplina na consulta Quadro Geral de Horários.

[![Pesquisa de código do censo](https://e-cidade.wiki.br/educacao/secretaria/files/tela_pesquisa_c%C3%B3digo_censo.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_pesquisa_c%C3%B3digo_censo.png)

Clique em **Incluir** para adicionar a disciplina à grade.

[![Disciplinas cadastradas](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_disciplina_registros_incluidos.png)](https://e-cidade.wiki.br/educacao/secretaria/files/Tela_disciplina_registros_incluidos.png)

## Unidades Curriculares

Cadastre outras unidades curriculares obrigatórias vinculadas ao itinerário informativo, para níveis de Ensino Médio ou Ensino Profissionalizante.

[![Composição curricular de unidades curriculares](https://e-cidade.wiki.br/educacao/secretaria/files/tela_composicao_curricular_unidades_curriculares.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_composicao_curricular_unidades_curriculares.png)

As unidades da tabela do censo são listadas por padrão e não podem ser alteradas ou excluídas. Se uma unidade não estiver cadastrada, informe sua descrição e clique em **Salvar**. Unidades incluídas manualmente poderão ser editadas ou excluídas.`,
  "Cadastro de Regras de Arredondamento": `## Inclusão

Cadastre as regras de arredondamento utilizadas pelas escolas. É possível definir regras diferentes independentemente da fórmula de avaliação.

### Aba Regra

[![Regra de arredondamento](https://e-cidade.wiki.br/educacao/secretaria/files/tela_regra_de_arredondamento.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_regra_de_arredondamento.png)

- **Código Regra de Arredondamento:** gerado automaticamente.
- **Descrição:** nome que facilite identificar a regra.
- **Ativo:** indica se a regra está disponível para seleção.
- **Observação:** informação adicional sobre a regra.

### Aba Faixa

Configure as faixas e o que o sistema deve fazer quando a nota do aluno se enquadrar em cada uma.

[![Faixas de arredondamento](https://e-cidade.wiki.br/educacao/secretaria/files/tela_aba_faixa.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_aba_faixa.png)

## Alteração

É possível alterar os campos da regra e suas faixas. Alterações em regras utilizadas por turmas encerradas não atualizam os resultados já encerrados; serão aplicadas quando o encerramento da turma ou do aluno for cancelado.

## Exclusão

Uma regra somente poderá ser excluída se não estiver vinculada a nenhuma configuração de nota. Caso esteja em uso, poderá ser inativada.`,
  "Calendário Base": `## Geral

O calendário base define as datas de início e fim dos períodos de avaliação, letivos e não letivos para uma etapa e apresenta o número de dias e semanas letivas.

[![Aba Geral do calendário base](https://e-cidade.wiki.br/educacao/secretaria/files/tela_cadastro_calendario_base_aba_geral.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_cadastro_calendario_base_aba_geral.png)

**Campos**
- **Nome do Calendário:** nome do calendário, incluindo o ano.
- **Duração:** clique no link **Duração** e selecione o período de duração na pesquisa.
- **Ano:** ano e período de vigência.
- **Data Inicial** e **Data Final:** início e fim do ano letivo.
- **Data Resultado Final:** prazo limite para divulgação dos resultados finais.
- **Dias Letivos e Semanas Letivas:** calculados após a definição dos períodos de avaliação.
- **Observação:** registro opcional de ocorrências do ano letivo.

Preencha os campos e clique em **Incluir**. Em seguida, cadastre os períodos de avaliação.

## Períodos de Avaliação

As datas dos períodos devem ser compatíveis e não podem se sobrepor ao apurar frequência e carga horária, nem ultrapassar os limites de validade do calendário.

[![Períodos de avaliação do calendário base](https://e-cidade.wiki.br/educacao/secretaria/files/tela_cadastro_periodos_de_avaliacao_calendario.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_cadastro_periodos_de_avaliacao_calendario.png)

- **Período de Avaliação:** selecione um período cadastrado na pesquisa.
- **Data Inicial** e **Data Final:** início e fim do período.
- **Dias Letivos e Semanas Letivas:** calculados após informar as datas.
- **Total de Dias** e **Total de Semanas:** totais dos períodos cadastrados, preenchidos automaticamente.

## Feriados e Eventos

O sistema cadastra os principais feriados nacionais entre as datas do calendário como não letivos. Nesta aba, podem ser incluídos, alterados ou excluídos feriados e eventos e indicado se cada um será letivo. Os dias letivos são recalculados após as alterações; eventos letivos ficam separados dos não letivos.

[![Feriados e eventos do calendário base](https://e-cidade.wiki.br/educacao/secretaria/files/tela_cadastro_calendario_base_aba_feriado_e_eventos.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_cadastro_calendario_base_aba_feriado_e_eventos.png)

- **Tipo de Evento:** selecione o tipo na pesquisa.
- **Descrição:** nome do feriado ou evento.
- **Data do Feriado:** data do evento.
- **Dia da semana:** preenchido automaticamente.
- **Dia letivo:** indique se haverá aula; o campo é utilizado no cálculo dos dias letivos.

## Alteração

É possível alterar os campos de todas as abas do calendário selecionado.

## Exclusão

O calendário somente poderá ser excluído se não estiver vinculado a nenhuma turma.`,
  "Tipo de Hora de Trabalho": `Cadastre os tipos de hora de trabalho utilizados em Recursos Humanos, na aba **Função Exercida**. Informe a **Descrição** (geralmente o turno, como Manhã, Tarde, Noite, Regime Especial de Trabalho ou Convocação), a **Abreviatura**, a **Efetividade** e marque **Ativo** como Sim.

No campo **Efetividade**, selecione **Professor**, **Funcionário** ou **Ambos**; a opção define quais servidores serão exibidos no relatório de efetividade. Salve para listar os tipos de hora cadastrados.

[![Tipo de hora de trabalho](https://e-cidade.wiki.br/educacao/secretaria/files/tela_tipo_de_hora_de_trabalho.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_tipo_de_hora_de_trabalho.png)`,
  "Procedimentos de Avaliação": `## Aba Geral

Configure a fórmula de avaliação (bimestral, trimestral, semestral etc.), associando avaliações periódicas e resultados.

**Forma de Avaliação:** selecione Nota, Nível/Conceito ou Parecer na pesquisa. Esta forma gera o resultado final do procedimento. Avaliações periódicas podem ter formas diferentes, mas somente serão calculadas as que corresponderem à forma selecionada no procedimento.

[![Aba Geral do procedimento de avaliação](https://e-cidade.wiki.br/educacao/secretaria/files/tela_aba_geral_procedimento_de_avaliacao_sec.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_aba_geral_procedimento_de_avaliacao_sec.png)

**Campos**
- **Forma de Avaliação:** selecione a forma que corresponde ao resultado final.
- **Descrição:** nome do procedimento.
- **Frequência mínima para aprovação:** percentual mínimo para aprovação.
- **Cálculo da Frequência:** **Por Disciplina** calcula cada disciplina individualmente; **Por Carga Horária Total** soma a carga horária e as faltas de todas as disciplinas antes de calcular o percentual.

### Exemplo: procedimento bimestral “Parecer e Nota”

Se a forma do procedimento for Nota (0 a 100), avaliações periódicas de Parecer não serão utilizadas no cálculo do resultado final. Se as avaliações 3 e 4 forem Nota e o resultado usar Média Aritmética, o cálculo será (avaliação 3 + avaliação 4) / 2.

## Aba Avaliações

As avaliações são organizadas em avaliações periódicas (por exemplo, 1º bimestre) e resultados (por exemplo, média final). É necessário incluir uma avaliação periódica antes de adicionar resultados.

### Adicionar Avaliações Periódicas

Clique em **Adicionar** e informe:
- **Período de Avaliação:** selecione um período cadastrado.
- **Forma de Avaliação:** selecione uma forma cadastrada.
- **Aparece no Boletim:** indica se a avaliação será impressa no boletim; o padrão é Sim.
- **Aproveitamento desta avaliação:** permite condicionar esta avaliação a outra avaliação ou resultado. Na primeira avaliação, o campo fica desabilitado.

Use o aproveitamento, por exemplo, para exigir uma recuperação terapêutica apenas de alunos sem aproveitamento na avaliação anterior.

[![Avaliações do procedimento](https://e-cidade.wiki.br/educacao/secretaria/files/tela_avaliacoes_procedimento.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_avaliacoes_procedimento.png)

### Adicionar Resultados

Na aba Geral do resultado, configure como será obtido o resultado final e as regras de aprovação, recuperação e reprovação.

[![Resultado do procedimento de avaliação](https://e-cidade.wiki.br/educacao/secretaria/files/tela_resultado_procedimento_de_avaliacao.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_resultado_procedimento_de_avaliacao.png)

- **Resultado:** selecione o tipo de resultado cumulativo.
- **Forma de Avaliação:** selecione uma forma do mesmo tipo da forma de avaliação do procedimento.
- **Mínimo para Aprovação:** para Nota e Conceito, o mínimo da forma selecionada é exibido; clique em **Definir** para alterá-lo.

### Parâmetros do Resultado

- **Forma de obtenção:** Nota — Atribuído, Média Aritmética, Média Ponderada, Soma, Maior Nota ou Última Nota; Nível/Conceito — Atribuído, Maior Nível ou Último Nível; Parecer — Atribuído.
- **Gera Resultado Final:** indica se o resultado será usado no cálculo final. Sim habilita a configuração da frequência.
- **Aparece no Boletim:** indica se será impresso no boletim.
- **Reprova por frequência:** indica se o resultado reprova por frequência; habilitado após configurar os períodos usados no cálculo.

Uma forma de obtenção diferente de Atribuído habilita a aba Elementos.

[![Parâmetros do resultado](https://e-cidade.wiki.br/educacao/secretaria/files/parametros_do_resultadosec.png)](https://e-cidade.wiki.br/educacao/secretaria/files/parametros_do_resultadosec.png)

### Aba Elementos

Selecione as avaliações periódicas que compõem o cálculo do resultado. Informe um **Mínimo** diferente do mínimo geral, se necessário. O aluno poderá ser reprovado se não alcançar o mínimo deste elemento, mesmo que alcance o resultado calculado. Para Média Ponderada, informe também o peso do elemento.

[![Elementos do procedimento de avaliação](https://e-cidade.wiki.br/educacao/secretaria/files/aba_elementos_procedimento_de_avaliacao.png)](https://e-cidade.wiki.br/educacao/secretaria/files/aba_elementos_procedimento_de_avaliacao.png)

### Aba Frequência

Selecione e inclua os períodos de avaliação que compõem o cálculo do percentual de frequência do resultado. Se avaliações e resultados forem cadastrados fora de ordem, use as setas para organizá-los e clique em **Ordenar**.

[![Frequência do procedimento de avaliação](https://e-cidade.wiki.br/educacao/secretaria/files/aba_frequencia_procedimento_avaliacao.png)](https://e-cidade.wiki.br/educacao/secretaria/files/aba_frequencia_procedimento_avaliacao.png)`,
  BNCC: `## Etapas

Cadastre as equivalências das etapas da BNCC. Selecione o **Nível de Ensino da BNCC** e a **Etapa** desejada. O sistema exibirá os níveis de ensino e suas etapas previamente cadastradas. Mantenha **Ctrl** pressionado e clique nas etapas que correspondem à etapa selecionada. Após selecionar as equivalências, clique em **Salvar**.

[![Equivalências de etapas da BNCC](https://e-cidade.wiki.br/educacao/secretaria/files/tela_BNCC_etapas.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_BNCC_etapas.png)

Essas equivalências são utilizadas para exibir as etapas no lançamento de habilidades da BNCC.

## Disciplinas/Componentes Curriculares

Cadastre as equivalências entre disciplinas locais e disciplinas da BNCC. Selecione a **Disciplina da BNCC**. Para escolher mais de uma equivalência, mantenha **Ctrl** pressionado e clique nas disciplinas correspondentes.

[![Equivalências de disciplinas e componentes curriculares da BNCC](https://e-cidade.wiki.br/educacao/secretaria/files/tela_BNCC_disciplina_e_componentes.png)](https://e-cidade.wiki.br/educacao/secretaria/files/tela_BNCC_disciplina_e_componentes.png)`,
};
