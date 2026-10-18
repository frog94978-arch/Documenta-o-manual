export const contribuicaoProcedimentosContent: Record<string, string> = {
  "Cancela Seleção de Lotes": `
Procedimento para desfazer a seleção dos lotes de uma Contribuição de Melhoria. Use-o como parte do processo inverso quando houver erro no valor calculado: exclua o cálculo, cancele a seleção das matrículas, desmarque os lotes e confirme novamente.

~~~
DB:TRIBUTÁRIO > Contribuição > Procedimentos > Cancela Seleção de Lotes
~~~

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_9d2782c084637381.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_9d2782c084637381.png)
`,
  "Seleciona Matrículas": `
Neste procedimento são confirmadas as matrículas da Contribuição de Melhoria para que o sistema registre os lançamentos correspondentes.

~~~
DB:TRIBUTÁRIO > Contribuição > Procedimentos > Seleciona Matrículas
~~~

Clique em **Seleciona Matrículas** para listar os registros da contribuição e, após conferi-los, clique em **Confirma Matrículas**.

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_9d2782c084637381.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_9d2782c084637381.png)
`,
  "Autoriza Cobrança": `
Autoriza a cobrança da Contribuição de Melhoria. Altere a opção para Sim e confirme para permitir a execução do cálculo.

~~~
DB:TRIBUTÁRIO > Contribuição > Procedimentos > Autoriza Cobrança
~~~

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_9be71f3430db567.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_9be71f3430db567.png)
`,
  "Cálculo Geral": `
Procedimento para calcular de forma geral uma Contribuição de Melhoria.

~~~
DB:TRIBUTÁRIO > Contribuição > Procedimentos > Cálculo Geral
~~~

- **Contribuição:** informe o código ou pesquise pelo link.
- **Parcelas:** quantidade de parcelas, conforme os parâmetros.
- **1º Vencimento:** data do primeiro vencimento, conforme os parâmetros.
- **Dia Vencimento:** dia do mês das parcelas seguintes.

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_161106625105d5b5.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_161106625105d5b5.png)
`,
  "Cálculo Parcial": `
Procedimento para calcular individualmente uma Contribuição de Melhoria.

~~~
DB:TRIBUTÁRIO > Contribuição > Procedimentos > Cálculo Parcial
~~~

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_8454d03786293c60.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_8454d03786293c60.png)
`,
  "Exclusão de Cálculo Geral": `
Procedimento para excluir de forma geral o cálculo de uma Contribuição de Melhoria.

~~~
DB:TRIBUTÁRIO > Contribuição > Procedimentos > Exclusão de Cálculo Geral
~~~

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_55658163ec38b09f.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_55658163ec38b09f.png)
`,
  "Exclusão de Cálculo Parcial": `
Procedimento para excluir individualmente o cálculo de uma Contribuição de Melhoria, permitindo remover o cálculo de apenas uma matrícula.

~~~
DB:TRIBUTÁRIO > Contribuição > Procedimentos > Exclusão de Cálculo Parcial
~~~

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_8454d03786293c60.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_8454d03786293c60.png)
`,
  "Gera Notificação de Contribuição": `
Procedimento para notificar débitos de uma Contribuição de Melhoria.

~~~
DB:TRIBUTÁRIO > Contribuição > Procedimentos > Gera Notificação de Contribuição
~~~

Informe os campos:

- **Contribuição:** código da contribuição ou pesquisa pelo link.
- **Tipo de Notificação:** preenchido conforme os parâmetros.
- **Seleção:** escolha débitos não notificados ou todos.
- **Matrícula:** matrículas a notificar; deixe sem seleção para incluir toda a contribuição.

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_418ba1a68ba4c2c6.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_418ba1a68ba4c2c6.png)
`,
  Parâmetros: `
Procedimento para configurar os parâmetros usados na geração de Contribuição de Melhoria.

~~~
DB:TRIBUTÁRIO > Contribuição > Procedimentos > Parâmetros
~~~

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_edc406653a9d262e.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_edc406653a9d262e.png)
`,
};