export const dividaAtivaProcedimentosContent: Record<string, string> = {
  "Prescrição de Dívida": `
A prescrição é a perda do direito de ajuizar a execução fiscal após o prazo legal de cinco anos contado da constituição definitiva do crédito tributário, ocorrida com o lançamento ou com a decisão administrativa definitiva.

~~~
DB:TRIBUTÁRIO > Dívida Ativa > Procedimentos > Prescrição de Dívida
~~~

## Parcial (Individual)

Permite prescrever débitos do grupo 5 (Dívida Ativa) de um contribuinte, filtrando por CGM, Matrícula ou Inscrição. Preencha apenas uma origem por operação.

- **CGM / Matrícula / Inscrição:** informe o código ou pesquise pelo link; o sistema lista os débitos de Dívida Ativa dessa origem.
- **Prescrever Débitos Notificados:** filtre os débitos que não foram notificados.
- **Faixa de Valores:** informe os limites mínimo e máximo e clique em **Filtrar com os dados selecionados**.
- **Observações:** texto que será registrado no histórico da prescrição.
- **Exercícios:** selecione um ou mais exercícios e clique em **Filtrar com os dados selecionados** para listar os débitos correspondentes.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_5bda559a448c4a48.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_5bda559a448c4a48.png)

## Lista de Débito

Prescreve débitos do grupo 5 incluídos em uma lista gerada no módulo Notificações. Registros de outros grupos não são prescritos e aparecem no relatório de inconsistências.

- **Lista:** código da lista ou pesquisa pelo link.
- **Prescrever Débitos Notificados:** define se também serão prescritos débitos com notificação.
- **Observações:** histórico da prescrição, usado no relatório.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_75e0f6529784cfe6.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_75e0f6529784cfe6.png)
`,
  "Cancela CDA": `
~~~
DB:TRIBUTÁRIO > Dívida Ativa > Procedimentos > Cancela CDA
~~~

## CDA Parcial

Permite cancelar parte de uma CDA. Informe a **Certidão** ou pesquise pelo link e clique em **Processar**. Na tela seguinte, selecione o débito a retirar da CDA, informe observações se necessário e clique em **Processar**.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_9a9e42dffcdf5754.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_9a9e42dffcdf5754.png)

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_d37eeafe6890dc.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_d37eeafe6890dc.png)

## CDA Geral

Cancela integralmente as CDAs em um intervalo ou as incluídas em uma lista.

- **Certidão:** informe os códigos inicial e final para cancelar o intervalo.
- **Código da Lista:** opcionalmente, informe lista com débitos dos grupos 18 e 15, como Certidão do Foro e Inicial do Foro.
- **Observação:** texto sobre o cancelamento.

> CDAs informadas por intervalo não podem estar vinculadas a uma Inicial do Foro. Ao cancelar por lista, o sistema pode anular a Inicial se ela tiver apenas uma CDA ou alterá-la se houver outras CDAs vinculadas. O processamento por lista pode demorar; ao terminar, o usuário recebe uma notificação.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/cancelacdalista.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/cancelacdalista.png)
`,
  "Gera CDA a partir da lista": `
Gera CDAs a partir de uma lista de débitos do módulo Notificações, com opção de agrupar débitos por exercício.

~~~
DB:TRIBUTÁRIO > Dívida Ativa > Procedimentos > Gera CDA a partir da lista
~~~

- **Lista:** código da lista ou pesquisa pelo link.
- **Opção de Lista:** define se serão considerados débitos notificados ou não.
- **Tipo:** gera CDAs somente por CGM ou por CGM, Matrícula e Inscrição.
- **Gerar CDA uma para cada ano:** agrupa os débitos por exercício e gera uma CDA por ano.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_be15e14f9279dd7988.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_be15e14f9279dd7988.png)
`,
  "Inscrição em Dívida": `
A importação para Dívida Ativa transfere débitos vencidos e não pagos após o prazo de pagamento.

~~~
DB:TRIBUTÁRIO > Dívida Ativa > Procedimentos > Inscrição em Dívida
~~~

## Parcial (Individual)

Selecione um CGM, uma Matrícula ou uma Inscrição. O sistema lista os débitos daquela origem que podem ser importados.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_84c5c2ea6051372f.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_84c5c2ea6051372f.png)

Selecione o **Tipo de Débito de Origem** e o **Tipo de Débito de Destino**. A origem contém os débitos em aberto habilitados para importação; o destino lista tipos do grupo 5 (Dívida Ativa). Marque os registros que deseja importar.

Opcionalmente, informe Processo do Sistema, Processo, Titular do Processo e Data do Processo. Com Processo do Sistema Sim, selecione um processo cadastrado; com Não, os dados podem ser informados livremente.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_1cdc7efa131a52f4.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_1cdc7efa131a52f4.png)

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_1cdc7efa131a52f442.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_1cdc7efa131a52f442.png)

Após selecionar os registros e o tipo de destino, clique em **Pesquisa** para associar receitas e procedências. Em seguida, clique em **Gerar Dados**. A importação individual mantém os registros individualizados como na origem, sem opção de unificar por receita.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_2f4f085652cacc44.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_2f4f085652cacc44.png)

## Geral

Importa débitos de IPTU, ISSQN Fixo, Vistoria, Alvará, Auto de Infração e Diversos. Gere backup antes do processo e, sempre que possível, teste em outra base. ISSQN Variável é importado separadamente, inscrição por inscrição.

> A importação geral não pode ser revertida em lote; erros devem ser tratados caso a caso por matrícula, inscrição ou CGM.

O sistema avisa antes de abrir a tela de opções. **Tipo de Origem** lista tipos com débitos em aberto habilitados para importação; **Tipo de Destino** lista tipos do grupo 5.

### Débitos a serem importados

- **Totalmente vencidas:** importa o débito somente quando todas as parcelas estiverem vencidas; caso contrário, não importa nenhuma.
- **Somente vencidas:** importa apenas parcelas vencidas.
- **Todas as parcelas:** importa todas as parcelas, sem verificar vencimento.
- **Parcelas vencidas até:** data limite usada pelas duas primeiras opções; não interfere em Todas as parcelas.
- **Unifica Débitos (Numpre, Receita):** quando marcada, combina os registros de cada receita em um novo registro. Sem unificação, mantém os registros individuais.

Opcionalmente, informe dados de Processo do Sistema, Processo, Titular do Processo e Data do Processo.

Depois de clicar em **Pesquisa**, associe cada receita à procedência de destino.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_e202fd71e23ac7c7.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_e202fd71e23ac7c7.png)

Se unificar os débitos, selecione como definir o vencimento do novo registro:

- **Menor vencimento das parcelas abertas:** usa a data mais antiga entre as parcelas em aberto.
- **Maior vencimento das parcelas abertas:** usa a data mais recente entre as parcelas em aberto.
- **Escolher data para vencimento:** aplica uma data informada pelo usuário.

A unificação reduz a quantidade de registros, mas elimina o detalhamento dos vencimentos de origem; a data escolhida também afeta juros e valores.

Após selecionar as procedências, clique em **Gerar Dados** e aguarde o processamento.

### ISSQN Variável

Importa débitos de ISSQN Variável com valores lançados; débitos sem valor não podem ser exportados. A procedência usada é definida em ISSQN > Cadastros > Configuração de Cálculo ISSQN, no campo Código da procedência.

Informe CGM ou Inscrição, apenas um por operação, e pesquise.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_c08611c76ab4957f.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_c08611c76ab4957f.png)
`,
  "Cancelamento de Importação de Dívida": `
~~~
DB:TRIBUTÁRIO > Dívida Ativa > Procedimentos > Cancelamento de Importação de Dívida
~~~

## Cancela Importação de Dívida Parcial

Cancela importações por contribuinte. Informe CGM, Matrícula ou Inscrição, apenas um por operação. O sistema lista somente débitos em aberto, não pagos e não cancelados. O cancelamento gera automaticamente a característica peculiar 108.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_a81a3d55f1510384.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_a81a3d55f1510384.png)

Marque os registros que deseja cancelar e clique em **Cancelar**.

## Cancela Importação ISSQN Variável

Informe a Inscrição e pesquise. O sistema lista apenas Numpres em aberto, não pagos e não cancelados. Selecione o Código de Arrecadação (Numpre) e clique em **Processar**.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_b3d6a613e6ca6a09.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_b3d6a613e6ca6a09.png)
`,
  "Manutenção de CDA": `
~~~
DB:TRIBUTÁRIO > Dívida Ativa > Procedimentos > Manutenção de CDA
~~~

## Alteração de CDA

Permite alterar Livro e Folha de CDA sem Inicial vinculada. Clique em **Pesquisar CDA**, selecione a CDA; o sistema preenche Certidão e Data de Emissão. Escolha o Livro existente e a Folha será preenchida automaticamente. Clique em **Alterar CDA**.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_a36ce93e079dbc05.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_a36ce93e079dbc05.png)
`,
  "Processamento do Livro": `
~~~
DB:TRIBUTÁRIO > Dívida Ativa > Procedimentos > Processamento do Livro
~~~

## Livro da Dívida

O processamento atribui o número do Livro e a Folha aos registros inscritos, dados necessários para identificar o débito na CDA.

- **Complementar:** cria um livro novo ou acrescenta registros a um livro existente.
- **Exercício da Dívida:** exercício a processar; processe cada exercício que possua dívida ativa.
- **Período de Inscrição:** filtro opcional pelo período de inscrição.
- **Última Página:** informada para livro novo; em livro complementar, é obtida do livro selecionado e não pode ser alterada.
- **Número do Livro:** sugerido como último livro + 1; pode ser ajustado. Livro complementar exige selecionar livro existente.
- **Procedências:** selecione procedências específicas ou deixe vazio para considerar todas as que atendam aos filtros.

Use **Mostrar Livros** para consultar livros existentes. Preencha os campos, clique em **Processar** e aguarde a conclusão.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_4de58845ee3b9e61.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_4de58845ee3b9e61.png)

## Livro de CDA

Gera livros por intervalo de CDAs ou intervalo de datas de criação. Em Tipo, selecione CDA de Dívida, CDA de Parcelamento ou Ambos.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_8b1a9f4472166393.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_8b1a9f4472166393.png)
`,
  "Anulação de Prescrição de Dívida": `
~~~
DB:TRIBUTÁRIO > Dívida Ativa > Procedimentos > Anulação de Prescrição de Dívida
~~~

## Prescrição por Lista de Débitos

Selecione a lista usada na prescrição, informe a observação e clique em **Processar** para desfazer a prescrição dos débitos daquela lista.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_c848f2355cabd7fd.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_c848f2355cabd7fd.png)

## Prescrição Parcial de Dívida

Informe CGM, Matrícula ou Inscrição e clique em **Pesquisar**. Selecione os débitos cuja prescrição deseja anular, informe a observação e clique em **Processar**. É possível filtrar por exercício antes de selecionar os débitos.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_41bd6c9ea2e29930.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_41bd6c9ea2e29930.png)
`,
  Parâmetros: `
~~~
DB:TRIBUTÁRIO > Dívida Ativa > Procedimentos > Parâmetros
~~~

Esta rotina mostra as permissões da CGF disponíveis ao usuário, incluindo **Permitir Gerar CDA**, **Permitir Cancelar Débito**, **Permitir Justificar Débitos**, **Permitir Efetuar Parcelamentos**, **Permitir Anular Parcelamentos**, **Permitir Suspender Débitos**, **Permitir Lançar Valores de ISSQN Variável** e **Permitir Simular Anulação**.
`,
  "Manutenção de Parâmetros": `
Permite configurar parâmetros da Dívida Ativa, incluindo participantes da CDA, forma de emissão, documentos e integração contábil.

~~~
DB:TRIBUTÁRIO > Dívida Ativa > Procedimentos > Manutenção de Parâmetros
~~~

## Cuidados operacionais

### Tabela débitos

A tabela débitos guarda valores corrigidos, juros e multas em uma data de referência para agilizar relatórios e rotinas. O CPD deve garantir sua geração na virada do ano, criando uma fotografia consistente dos dados. Se faltar índice, o sistema avisa que a tabela não está disponível e bloqueia filtros e botões do relatório.

### Backup

Antes da importação de Dívida Ativa, faça backup para permitir conferências e recuperação em caso de problema.

### Contabilização

Confirme com a Contabilidade se correção, juros e multas devem ser enviados juntos ou separados, e se débitos parcelados ou ajuizados serão contabilizados como dívida ativa normal ou em grupo separado. A Dívida Ativa pode estar normal, parcelada, ajuizada ou ajuizada e parcelada.

### Etapas anuais recomendadas

1. Gere e imprima a lista dos débitos a importar para conferência.
2. Importe os débitos do exercício para Dívida Ativa.
3. Processe o Livro da Dívida.
4. Emita os relatórios.

## Inclusão e configuração

- **Documento:** documento do tipo 1, cadastrado em Documentos e Parágrafos.
- **Histórico do cálculo dos juros:** histórico usado para identificar o tipo de juros.
- **Tipo Inicial / Tipo Certidão:** tipos de débito da Inicial e da Certidão do Foro.
- **Modelo de Petição Inicial:** modelo padrão ou modelo com margens e espaçamentos reduzidos.
- **Envolvidos na CDA (Imóvel):** Todos, Somente Proprietários ou Somente Promitentes.
- **Envolvidos na CDA (Empresa):** vincular ou não vincular sócios.
- **Ordem do Endereço na CDA:** endereço da origem (Matrícula/Inscrição) ou do CGM.
- **Imprimir somente os principais:** limita a CDA aos envolvidos principais.
- **Imprimir Histórico / Observações na CDA:** inclui na certidão informações de observações da manutenção de Dívida Ativa.
- **Imprimir Livro / Folha na CDA:** imprime os dados do livro e folha.
- **Utiliza Expressão antes do Nome p/ falecidos:** aplica expressão na CDA, Inicial ou ambas, quando o CGM possui data de falecimento.
- **Expressão antes do nome para falecidos:** texto, como Sucessão ou Espólio.
- **Forma de Geração para CDA:** Normal segue os débitos selecionados; Individualizar por Origem / Ano / Procedência gera uma CDA para cada combinação.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_4aaa5aacffd36d7f.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_4aaa5aacffd36d7f.png)
`,
  "Recibo de Receita": `
Emite recibo de uma receita para pagamento avulso no DBPortal. O recibo gera um Numpre vinculado a CGM, Matrícula ou Inscrição; só aparece na CGF após o pagamento.

~~~
DB:TRIBUTÁRIO > Dívida Ativa > Procedimentos > Recibo de Receita
~~~

- **CGM / Matrícula / Inscrição:** informe somente uma origem por recibo.
- **Processo:** processo do módulo Protocolo, quando aplicável.
- **Receita:** receita do recibo.
- **Taxa:** informe o valor ou selecione uma taxa predefinida pelo botão **Taxa**.
- **Histórico:** descrição a imprimir no recibo.
- **Data de Vencimento:** vencimento do recibo.

Clique em **Gravar** para adicionar os dados.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_5bda559a448c4a4878.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_5bda559a448c4a4878.png)
`,
  "Cobrança Extrajudicial": `
~~~
DB:TRIBUTÁRIO > Dívida Ativa > Procedimentos > Cobrança Extrajudicial
~~~

## Emissão de Recibos para CDA

Emite recibos para um intervalo de CDAs. Selecione o cartório responsável pela cobrança extrajudicial. Após emitir, as CDAs passam automaticamente para a situação **Enviada para o cartório**, iniciando o processo de cobrança.

## Movimentação de CDA

Permite atualizar a situação de CDAs em cobrança extrajudicial para **Protestada** ou **Resgatada**. As situações **Enviada para o cartório** e **Paga** são registradas automaticamente na emissão e no pagamento dos recibos.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Captura%20de%20tela%20de%202021-08-09%2011-32-47.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Captura%20de%20tela%20de%202021-08-09%2011-32-47.png)
`,
};