export const juridicoProcedimentosContent: Record<string, string> = {
  "Situação do Processo do Foro": `
Rotina para registrar uma situação do Processo do Foro.

~~~
DB:TRIBUTÁRIO > Jurídico > Procedimentos > Situação do Processo do Foro
~~~

## Inclusão

### Pesquisa do Processo do Foro

Use os seguintes filtros para localizar o processo:

- **Sequencial:** código gerado automaticamente para o processo.
- **Código Processo do Foro:** código informado ao incluir o processo do foro.
- **Inicial:** número da Inicial vinculada, se houver.
- **Numcgm:** CGM da pessoa responsável pelo processo.
- **Período:** período de inclusão do processo.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_c7c4fba1c148353d78.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_c7c4fba1c148353d78.png)

### Dados da situação

- **Código do Sequencial:** gerado automaticamente ao incluir a situação.
- **Processo:** sequencial do Processo do Foro ou pesquise pelo link.
- **Situação:** código da situação do processo ou pesquise pelo link.
- **Data / Hora / Contribuinte:** preenchidos pelo sistema e não editáveis.
- **Observação:** informação sobre o processo; obrigatória.

Preencha os dados e clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_899be6c5d7c557a2.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_899be6c5d7c557a2.png)

## Alteração

Selecione uma situação na lista de processos com situação cadastrada, altere os campos desejados e clique em **Alterar**.

## Exclusão

Selecione a situação na lista e clique em **Excluir**.
`,
  "Situação da Inicial": `
Permite registrar manualmente situações da Inicial do Foro que não sejam geradas automaticamente por outros procedimentos do sistema.

~~~
DB:TRIBUTÁRIO > Jurídico > Procedimentos > Situação da Inicial
~~~

## Inclusão

Informe o código da Inicial ou pesquise pelo link. Também é possível filtrar as Iniciais pelo Processo do Foro.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_b990f425b6e86eb0.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_b990f425b6e86eb0.png)

### Incluir Movimentações da Inicial

O sistema apresenta a última movimentação da Inicial selecionada. Informe o código da **Situação** ou pesquise pelo link e preencha **Observação**.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_3c9ba01c3689dfbe.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_3c9ba01c3689dfbe.png)

## Alteração

Pesquise pela Inicial ou Processo do Foro. Só é possível alterar a última situação lançada; situações geradas automaticamente pelo sistema não podem ser alteradas.

## Exclusão

Pesquise pela Inicial ou Processo do Foro e selecione a última situação. Situações geradas automaticamente pelo sistema não podem ser excluídas.
`,
  Inicial: `
Rotina para cadastrar uma Inicial do Foro, vinculada a uma ou mais Certidões de Dívida Ativa (CDAs), e encaminhá-la ao foro para execução contra o contribuinte. A Inicial deve ser vinculada a um advogado e a uma localização do foro.

~~~
DB:TRIBUTÁRIO > Jurídico > Procedimentos > Inicial
~~~

## Inclusão

Gera uma Inicial para cada CDA selecionada. Pesquise por **Matrícula**, **Inscrição**, **CGM** ou intervalo de **Certidão Inicial / Final**. O sistema lista as CDAs encontradas marcadas por padrão; desmarque as que não deseja incluir. Informe **Advogado** e **Localização** do foro e conclua a inclusão. O sistema emite um comprovante da Inicial para envio ao foro.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_be8ae70fc55fb180.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_be8ae70fc55fb180.png)

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_4eb5c0bd03e2036a.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_4eb5c0bd03e2036a.png)

## Inclusão (Intervalo)

Informe **Certidão Inicial / Final**, **Advogado** e **Localização**. Em **Agrupar**, escolha:

- **Matrícula/Inscrição:** uma Inicial por matrícula ou inscrição, agrupando as CDAs.
- **CGM:** agrupa as CDAs do mesmo CGM em uma Inicial.
- **Nenhum:** uma Inicial para cada CDA.

Agrupar por Matrícula/Inscrição permite tratar separadamente débitos de imóveis distintos do mesmo contribuinte.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_3acd77d93dd4ccb8.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_3acd77d93dd4ccb8.png)

## Inclusão por Lista

Permite gerar Iniciais a partir de uma lista de débitos do módulo Notificações. A lista deve conter apenas tipos de débito do grupo 15. Informe **Código da Lista** e pesquise; o sistema apresenta os registros e a situação das CDAs. Serão incluídas somente CDAs ainda sem Inicial.

Em **Agrupar por**, escolha Matrícula/Inscrição, CGM ou Nenhum. Informe também **Advogado** e **Local Foro**; clique em **Processar Inclusão por Lista**.

[![](https://e-cidade.wiki.br/tributario/juridico/files/inicial_lista_1.png)](https://e-cidade.wiki.br/tributario/juridico/files/inicial_lista_1.png)

[![](https://e-cidade.wiki.br/tributario/juridico/files/inicial_lista_2.png)](https://e-cidade.wiki.br/tributario/juridico/files/inicial_lista_2.png)

## Alteração

Permite alterar Advogados, Localização do Foro e CDAs emitidas. Para alterar advogados ou localização, selecione pelo link e clique em **Alterar**. Para remover CDAs, desmarque-as; para adicionar, clique em **Nova Certidão**, informe ou selecione a CDA e clique em **Alterar**.

## Exclusão

Só é permitida quando a Inicial não estiver vinculada a um Processo do Foro nem parcelada. Para Inicial parcelada, use o procedimento de anulação.

## Anulação

Pesquise uma Inicial ou um intervalo. O sistema mostra as Iniciais e CDAs vinculadas; informe observações opcionais e confirme a anulação. A CDA retorna à CGF e o sistema registra automaticamente a situação Inicial Anulada. Se a Inicial estiver vinculada a parcelamento, anule primeiro o parcelamento.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_d4dde977ce1475af.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_d4dde977ce1475af.png)

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_7aa82f52506d90ec.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_7aa82f52506d90ec.png)
`,
  "Processo do Foro": `
Rotina para registrar no sistema o número do processo distribuído no foro. Isso informa que a petição foi recebida e libera o débito para pagamento ou parcelamento. Também é possível cadastrar um processo Judicial sem vinculá-lo a uma Inicial.

~~~
DB:TRIBUTÁRIO > Jurídico > Procedimentos > Processo do Foro
~~~

## Inclusão: aba Processo do Foro

- **Código Sequencial:** preenchido automaticamente.
- **Código do Processo do Foro:** número atribuído pelo foro, por exemplo, 005/3.06.0007822-7.
- **Vara:** vara de distribuição; informe o código ou pesquise pelo link.
- **Data:** data de inclusão do processo.
- **Nome:** responsável pelo processo. Se preenchido, não é necessário vinculá-lo a uma Inicial.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_419484294fcd4fee.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_419484294fcd4fee.png)

### Aba Iniciais

Informe o **Número Inicial** ou pesquise pelo link. É possível vincular várias Iniciais ao mesmo Processo do Foro.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_f4265fd88084c395.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_f4265fd88084c395.png)

## Alteração

Selecione o processo na lista, altere os dados e clique em **Alterar**.

## Anulação

Selecione o processo, informe observações da anulação se necessário e clique em **Anular**. Não é permitido anular processo de Inicial que esteja parcelada.
`,
  "Gera Petição": `
Esta rotina lista Iniciais parceladas e quitadas para gerar petições destinadas ao foro.

~~~
DB:TRIBUTÁRIO > Jurídico > Procedimentos > Gera Petição
~~~

## Parcelamento (Novo)

Marque a Inicial e clique em **Emitir**. O sistema registra e gera a petição de parcelamento; depois ela sai da lista e pode ser reemitida em Relatórios > Emite Petição > Parcelamento.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_1de139619228ae85.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_1de139619228ae85.png)

## Inicial Quitada (Novo)

Marque a Inicial quitada e clique em **Emitir**. O sistema registra e gera a petição de quitação; depois ela sai da lista e pode ser reemitida em Relatórios > Emite Petição > Quitado.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_3cff02be014b1090.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_3cff02be014b1090.png)
`,
  "Arquivo de Remessa": `
Rotina para gerar arquivos de envio de execuções ao Tribunal de Justiça e processar os arquivos de retorno quando houver cobrança compartilhada.

~~~
DB:TRIBUTÁRIO > Jurídico > Procedimentos > Arquivo de Remessa
~~~

## Gerar Arquivo

Informe o **Código da Lista** gerada no módulo Notificações, usada para criar as CDAs e Iniciais. Clique em **Processar** para gerar o TXT para envio ao TJ.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_752191f514b81dc.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_752191f514b81dc.png)

## Processa Retorno

Selecione o **Arquivo de Remessa** enviado ao TJ e o **Arquivo de Retorno** recebido. Clique em **Processar** para registrar os dados dos Processos do Foro nas Iniciais correspondentes.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_b78457ee56238f2f.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_b78457ee56238f2f.png)
`,
  "Manutenção de Parametros": `
~~~
DB:TRIBUTÁRIO > Jurídico > Procedimentos > Manutenção de Parâmetros
~~~

- **Ano:** exercício vigente.
- **Instituição:** preenchida conforme a instituição do usuário.
- **Envolvidos na Inicial (Imóvel):** Todos, Somente Promitente ou Somente Proprietário.
- **Envolvidos na Inicial (Empresa):** não vincular sócios ou vincular sócios.
- **Somente Principais (Imóvel):** define se a Inicial vincula somente o proprietário principal.
- **Valor Mínimo para Execução:** valor mínimo da Inicial.
- **Partilha:** Sim habilita cobrança registrada compartilhada; Não mantém o comportamento atual.

Com Partilha Sim, informe **URL WebService**, **Login**, **Senha** e **Código Órgão** para conexão.

### Modelos de Documentos

Para **Petição de Inicial Quitada** e **Petição de Parcelamento**, selecione Padrão do Sistema ou Modelo do OpenOffice. No segundo caso, selecione também o **Documento Template** correspondente.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_29733ca89c1d61d9.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_29733ca89c1d61d9.png)
`,
};