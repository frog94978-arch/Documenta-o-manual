export const diversosProcedimentosContent: Record<string, string> = {
  Diversos: `
Esta rotina inclui débitos para um contribuinte usando a procedência como origem e vínculo com a receita correspondente.

~~~
DB:TRIBUTÁRIO > Diversos > Procedimentos > Diversos
~~~

Os débitos podem ser vinculados a uma das seguintes origens:

- **CGM:** informe o CGM ou pesquise pelo link Nome/Razão Social.
- **Matrícula do Imóvel:** informe a matrícula ou pesquise pelo proprietário, setor, quadra, lote e outros dados.
- **Inscrição Municipal:** informe a inscrição ou pesquise pela empresa ou profissional autônomo.

Depois de escolher uma origem, clique em **Pesquisar**. A inclusão pode ser individual ou em lote por arquivo CSV. Para importação em lote, inclua no arquivo um cabeçalho com o nome da origem: inscr para Inscrição ou matric para Matrícula. O sistema informa inconsistências encontradas.

[![](https://e-cidade.wiki.br/tributario/diversos/files/Manual_Diversos_html_8a2a94f3ffccd8e8.png)](https://e-cidade.wiki.br/tributario/diversos/files/Manual_Diversos_html_8a2a94f3ffccd8e8.png)

## Inclusão

- **Data da Inscrição:** data de cadastro do débito; por padrão, hoje, mas pode ser alterada.
- **Ano de Origem:** exercício do débito; por padrão, o exercício atual.
- **Procedência:** origem à qual o débito será vinculado; selecione pelo código ou link.
- **Primeiro vencimento:** vencimento inicial; por padrão, hoje, mas pode ser alterado.
- **Valor Histórico:** valor do débito na data de sua constituição.
- **Código do Inflator:** inflator da receita vinculada à procedência, exibido após clicar em **Calcular**.
- **Data da Operação:** data de constituição do débito; por padrão, hoje, mas pode ser alterada.
- **Valor corrigido:** preenchido pelo cálculo até a data atual. Esse valor aparece como valor histórico na CGF. Para manter o valor histórico informado sem correção, digite-o diretamente sem clicar em **Calcular**.
- **Número de parcelas:** por padrão, uma parcela.
- **Próximo Vencimento:** habilitado com mais de uma parcela; vencimento da segunda parcela.
- **Dia dos próximos vencimentos:** habilitado com mais de uma parcela; define o dia das parcelas seguintes. O mês será o subsequente ao vencimento da segunda parcela.
- **Observações:** comentário opcional sobre o débito.

> Se informar mais de uma parcela, o valor será lançado integralmente em cada parcela. Exemplo: R$ 1.000,00 e quatro parcelas geram quatro parcelas de R$ 1.000,00. Para parcelar o valor total, lance o débito com uma parcela e depois use a rotina de parcelamento da CGF, que gera o Termo de Parcelamento.

[![](https://e-cidade.wiki.br/tributario/diversos/files/Manual_Diversos_html_cd7357dfbf4245b1.png)](https://e-cidade.wiki.br/tributario/diversos/files/Manual_Diversos_html_cd7357dfbf4245b1.png)

## Alteração

Selecione o registro na lista. É possível pesquisar também por Matrícula e Inscrição e alterar os dados.

## Exclusão

Selecione o débito e clique em **Excluir**. Não é permitido alterar ou excluir registros que tenham sido pagos, parcelados ou cancelados.
`,
  "Receitas de Diversos": `
Permite corrigir a receita associada a um débito ou grupo de débitos lançados em Diversos.

~~~
DB:TRIBUTÁRIO > Diversos > Procedimentos > Receitas de Diversos
~~~

Escolha a chave de pesquisa:

- **Código do Diversos:** informe o código ou selecione o registro na lista; altera somente esse débito.
- **Numcgm:** informe ou pesquise pelo nome; altera os registros do CGM.
- **Matrícula do Imóvel:** informe ou pesquise pelos dados do imóvel; altera os registros vinculados à matrícula.
- **Inscrição Municipal:** informe ou pesquise pela empresa ou profissional autônomo; altera os registros vinculados à inscrição.
- **Procedência:** informe ou selecione na lista; altera os registros vinculados à procedência.

No exemplo, a alteração é feita para um débito associado a CGM.

[![](https://e-cidade.wiki.br/tributario/diversos/files/Manual_Diversos_html_33abc30380ded631.png)](https://e-cidade.wiki.br/tributario/diversos/files/Manual_Diversos_html_33abc30380ded631.png)

**Receita:** selecione a nova receita ou pesquise pelo nome.

**Tipo de processamento:** escolha os débitos vencidos, não vencidos ou todos os débitos da origem.

[![](https://e-cidade.wiki.br/tributario/diversos/files/Manual_Diversos_html_ba7017e3c7cc3ea3.png)](https://e-cidade.wiki.br/tributario/diversos/files/Manual_Diversos_html_ba7017e3c7cc3ea3.png)
`,
  "Importação de débitos para diversos": `
Esta rotina importa para Diversos débitos de IPTU, Água do Exercício ou Alvará Inicial. São mantidos os vencimentos e o número de parcelas do débito de origem.

~~~
DB:TRIBUTÁRIO > Diversos > Procedimentos > Importação de débitos para diversos
~~~

## Importação de IPTU

Informe a **Matrícula do Imóvel** e clique em **Visualizar Débitos**. O sistema lista Numpre, Tipo de Débito, Receita e Valor. Selecione a procedência para cada receita que será importada e clique em **Importar débito**. A receita selecionada é removida do débito de IPTU e lançada em Diversos.

[![](https://e-cidade.wiki.br/tributario/diversos/files/iptuproced.png)](https://e-cidade.wiki.br/tributario/diversos/files/iptuproced.png)

[![](https://e-cidade.wiki.br/tributario/diversos/files/impotdedebitos.png)](https://e-cidade.wiki.br/tributario/diversos/files/impotdedebitos.png)

## Água

Disponível quando a instituição utiliza o módulo Água. Informe a **Matrícula do Imóvel** e clique em **Visualizar Débitos**; os demais campos seguem o fluxo de importação de IPTU.

[![](https://e-cidade.wiki.br/tributario/diversos/files/impotagua.png)](https://e-cidade.wiki.br/tributario/diversos/files/impotagua.png)

## Alvará

Importa débitos de Alvará Inicial. Informe a **Inscrição Municipal** e clique em **Visualizar Débitos**; os demais campos seguem o fluxo de importação de IPTU.

> Só podem ser importados débitos sem pagamentos.

[![](https://e-cidade.wiki.br/tributario/diversos/files/importalvaradiversos.png)](https://e-cidade.wiki.br/tributario/diversos/files/importalvaradiversos.png)

### Cancelamento da importação

#### IPTU

Informe a Matrícula que teve débitos importados e clique em **Visualizar Débitos**. Confira Numpre, Tipo de Débito, Receita e Valor; clique em **Cancelar Importação** para remover o débito de Diversos e devolver o valor ao IPTU.

[![](https://e-cidade.wiki.br/tributario/diversos/files/div1.png)](https://e-cidade.wiki.br/tributario/diversos/files/div1.png)

[![](https://e-cidade.wiki.br/tributario/diversos/files/div2.png)](https://e-cidade.wiki.br/tributario/diversos/files/div2.png)

#### Água

Pesquise por Nome/Razão Social, Matrícula ou Numpre e clique em **Visualizar Débitos**. Os demais campos seguem o fluxo de cancelamento de importação de IPTU.

[![](https://e-cidade.wiki.br/tributario/diversos/files/cancelagua.png)](https://e-cidade.wiki.br/tributario/diversos/files/cancelagua.png)

#### Alvará

Informe a Inscrição Municipal que teve débitos de Alvará Inicial importados e clique em **Visualizar Débitos** para cancelar a importação.

[![](https://e-cidade.wiki.br/tributario/diversos/files/div3.png)](https://e-cidade.wiki.br/tributario/diversos/files/div3.png)
`,
};