export const dividaAtivaCadastroContent: Record<string, string> = {
  "Dívida Ativa": `
Esta rotina permite incluir manualmente dívidas cujos débitos não foram lançados pelos procedimentos automatizados do sistema, como cálculo de IPTU, ISSQN, Taxas ou Diversos.

~~~
DB:TRIBUTÁRIO > Dívida Ativa > Cadastros > Dívida Ativa
~~~

Antes da inclusão, identifique a origem do débito para selecionar a procedência adequada, além do exercício de competência e da data de vencimento.

## Inclusão

A inclusão manual é feita registro a registro, para um CGM, uma Matrícula ou uma Inscrição.

### Cadastro da Dívida

- **Código da Dívida:** gerado automaticamente.
- **Número do CGM:** traz o CGM informado na aba anterior.
- **Data de Inscrição:** data de inscrição em Dívida Ativa; por padrão, usa a data do sistema.
- **Exercício:** exercício da dívida; por padrão, usa o exercício atual.
- **Processo do Sistema:** indique se o processo foi cadastrado no sistema. Com Sim, selecione o processo cadastrado; com Não, informe os dados manualmente.
- **Processo:** selecione o processo de protocolo pelo link quando Processo do Sistema for Sim. Quando for Não, é possível digitar qualquer informação. Campo opcional.
- **Titular do Processo / Data do Processo:** campos opcionais, exibidos quando Processo do Sistema for Não.

### Cálculo do Valor Total

- **Data de Operação:** data de inclusão do débito, usada no cálculo da correção monetária.
- **Data de Vencimento:** vencimento do débito incluído.
- **Procedência:** origem do débito vinculada a uma receita.
- **Tipo de Débito:** selecione um tipo do grupo de débito 5 (Dívida Ativa).
- **Valor Histórico:** informe o valor histórico e clique em **Calcular** para calcular a correção e preencher o valor.
- **Valor:** valor calculado; pode ser alterado pelo usuário.
- **Parcela:** número da parcela. Se houver mais de uma, inclua cada parcela separadamente.
- **Livro / Folha:** dados do livro e da folha da dívida, usados na alteração.
- **Observações:** informações complementares do débito.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_7291d2ec4ca30a87.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_7291d2ec4ca30a87.png)

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_7291d2ec4ca30a8778.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_7291d2ec4ca30a8778.png)

## Alteração

Permite alterar os campos, exceto o CGM da dívida. Também permite alterar dívidas importadas pelas rotinas de importação de Dívida Ativa e ISSQN Variável.

## Exclusão

Só é possível excluir uma dívida que não esteja vinculada a uma CDA ou parcelamento.
`,
  "Config. Tipo de Débito": `
Configura o tipo de débito que será usado quando um débito de determinado grupo de origem for parcelado na CGF.

~~~
DB:TRIBUTÁRIO > Dívida Ativa > Cadastros > Config. Tipo de Débito
~~~

## Inclusão

- **Código:** preenchido automaticamente.
- **Grupo de Débito da Origem:** grupo de débito de origem para o qual será configurado o tipo após o parcelamento.
- **Tipo de Débito do Parcelamento:** tipo de débito que será atribuído ao parcelamento do grupo selecionado.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_a7fe9ef55471e6e7.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_a7fe9ef55471e6e7.png)
`,
  Procedências: `
O cadastro de procedências identifica a origem do débito e vincula a dívida às receitas contábeis. Quando o débito é pago, o valor é direcionado à receita configurada. A procedência também determina a receita para parcelamento e se a dívida é Tributária, Não Tributária ou Certidão TCE.

~~~
DB:TRIBUTÁRIO > Dívida Ativa > Cadastros > Procedências
~~~

Em geral, a contabilidade mantém receitas distintas para débitos do exercício, dívida ativa e juros. Cada procedência se vincula a uma receita, mas várias procedências podem compartilhar uma receita. Exemplos de procedência: IPTU, Taxa de Lixo, Restituição, ISSQN, Serviços Agrícolas, Cemitério, Loteamento Popular e ITBI.

## Inclusão

- **Código:** gerado automaticamente.
- **Descrição Abreviada:** nome abreviado para relatórios gerenciais.
- **Descrição Completa:** nome completo da procedência.
- **Receita de Dívida:** receita para a qual o débito será enviado na inscrição em dívida.
- **Histórico de Cálculo:** histórico de cálculo ou pesquisa pelo link.
- **Tipo de Procedência:** Tributária, Não Tributária ou Certidão TCE.
- **Receita de Parcelamento:** receita para a qual o débito será enviado ao parcelar.
- **Tipo de Débito Padrão:** tipo padrão; a lista contém tipos ligados ao cadastro 5.
- **Agrupar em:** procedência à qual esta será agrupada na emissão de CDA. Opcional; as procedências agrupadas não aparecem discriminadas na CDA, apenas na CGF.

Exemplo de agrupamento: IPTU e Taxa de Coleta de Lixo IPTU.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_fab07468832c2d9.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_fab07468832c2d9.png)

## Alteração

Permite alterar Descrição Abreviada, Descrição Completa, Receita, Histórico de Cálculo, Tipo de Procedência, Receita de Parcelamento, Tipo de Débito Padrão e Agrupar em.

## Exclusão

Só é possível excluir uma procedência que não esteja vinculada a nenhuma dívida do sistema.
`,
  "Documento / Procedência - CDA": `
Vincula documentos de fundamentação legal e metodologia de cálculo à procedência usada na emissão de uma CDA. O documento padrão de fundamentação legal é 1015 para dívida Tributária e 1018 para Não Tributária.

~~~
DB:TRIBUTÁRIO > Dívida Ativa > Cadastros > Documento / Procedência - CDA
~~~

## Inclusão

- **Procedência:** informe o código ou pesquise pelo link.
- **Código:** código do documento de Fundamentação Legal.
- **Cód. Met. Cálculo:** código do documento de Metodologia de Cálculo.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_ec7f537683bbe7a5.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_ec7f537683bbe7a5.png)

## Alteração

Permite alterar os documentos vinculados à procedência.

## Exclusão

O vínculo pode ser excluído sem restrições.
`,
  "Cadastro de Cartórios": `
Permite cadastrar cartórios para uso exclusivo no processo de cobrança extrajudicial do módulo Dívida Ativa. Esses cartórios não são exibidos nas rotinas do módulo Jurídico.

~~~
DB:TRIBUTÁRIO > Dívida Ativa > Cadastros > Cadastro de Cartórios
~~~

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Captura%20de%20tela%20de%202021-07-29%2013-05-57.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Captura%20de%20tela%20de%202021-07-29%2013-05-57.png)
`,
};