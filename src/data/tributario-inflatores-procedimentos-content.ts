export const inflatoresProcedimentosContent: Record<string, string> = {
  "Atualização de Valores": `
Esta rotina simula a atualização de um valor usando a base dos inflatores cadastrados. A atualização é vinculada a uma receita, pois além da correção também calcula multa e juros conforme a data de operação e a data de vencimento.

~~~
DB:TRIBUTÁRIO > Inflatores > Procedimentos > Atualização de Valores
~~~

Para atualizar um valor, preencha:

- **Código:** gerado automaticamente ao gravar uma simulação; identifica o registro para pesquisas futuras.
- **Descrição:** identificação da simulação.
- **Número do CGM:** CGM do contribuinte relacionado. Obrigatório somente para gravar o registro; pode ser pesquisado pelo link.
- **Data base:** data até a qual o valor será atualizado.
- **Data valor:** data de operação em que o débito foi constituído.
- **Data Vencimento:** data de vencimento do débito.
- **Valor:** valor histórico do débito.
- **Observação:** informação adicional, opcional.
- **Receita:** receita que define o inflator, o percentual de multa e os juros mensais usados no cálculo.

Após preencher os dados, clique em **Calcular**. Use **Imprimir** para gerar o relatório do valor atualizado e **Gravar** para salvar a simulação. Para consultar uma atualização anterior, clique em **Pesquisar** e selecione o registro.

[![](https://e-cidade.wiki.br/tributario/inflatores/files/Manual_Inflatores_html_264fb0aa5006d977.png)](https://e-cidade.wiki.br/tributario/inflatores/files/Manual_Inflatores_html_264fb0aa5006d977.png)
`,
  "Cria Inflator para Exercício": `
~~~
DB:TRIBUTÁRIO > Inflatores > Procedimentos > Cria Inflator para Exercício
~~~

Selecione o registro desejado, informe o ano e clique em **Processar** para criar o inflator para o exercício.

[![](https://e-cidade.wiki.br/tributario/inflatores/files/Manual_Inflatores_html_965c832c5b4d3720.png)](https://e-cidade.wiki.br/tributario/inflatores/files/Manual_Inflatores_html_965c832c5b4d3720.png)
`,
  "Manutenção de Valores": `
~~~
DB:TRIBUTÁRIO > Inflatores > Procedimentos > Manutenção de Valores
~~~

Esta rotina permite informar ou alterar valores dos inflatores. Selecione o inflator na lista e escolha o exercício a ajustar. O sistema apresenta os registros correspondentes ao tipo: por exemplo, 12 meses para inflator mensal.

[![](https://e-cidade.wiki.br/tributario/inflatores/files/Manual_Inflatores_html_d7907951d881ccd.png)](https://e-cidade.wiki.br/tributario/inflatores/files/Manual_Inflatores_html_d7907951d881ccd.png)

[![](https://e-cidade.wiki.br/tributario/inflatores/files/Manual_Inflatores_html_7644bd783cc4d2a.png)](https://e-cidade.wiki.br/tributario/inflatores/files/Manual_Inflatores_html_7644bd783cc4d2a.png)

Selecione o registro pela opção **A**, informe o valor do inflator e clique em **Alterar**. Para preencher todos os registros de uma só vez, informe o valor e clique em **Lançar valor para todos os registros**.
`,
};