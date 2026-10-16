export const inflatoresCadastroContent: Record<string, string> = {
  Inflatores: `
~~~
DB:TRIBUTÁRIO > Inflatores > Cadastros > Inflatores
~~~

## Inclusão

- **Código do Inflator:** sigla do inflator, como IPCA, UFIR, IGPM ou REAL.
- **Descrição do Inflator:** nome do inflator, por exemplo, Índice Nacional de Preços ao Consumidor - IPCA.
- **Picture:** formato do valor, isto é, a quantidade de dígitos, por exemplo, 9999,9999.
- **Tipo de lançamento:** periodicidade de atualização: diária, mensal ou anual.
- **Tipo de inflator:** forma como o índice será aplicado na correção do débito.

### Tipos de inflator

**a) Divide pelo índice da data-base e multiplica pelo índice da data atual.** Converte o débito em quantidade de inflatores usando o índice da data de operação e depois converte novamente em valor usando o índice atual.

Exemplo: índice de R$ 1,50 em 01/01/2000 e de R$ 2,50 em 01/01/2007. Um débito de R$ 100,00 lançado em 01/01/2000 será atualizado para R$ 250,00 em 01/01/2007: 100,00 / 1,50 × 2,50.

**b) Aplica o índice mês a mês sobre o valor.** Atualiza o débito acumulando os índices mensais desde a data de operação.

Exemplo: índices de 0,50% em 01/01/2007, 0,45% em 01/02/2007 e 0,55% em 01/03/2007. Para o débito de R$ 100,00, o exemplo da documentação soma 1,50% e chega a R$ 101,50 em 01/03/2007.

**c) Aplica o índice do mês do vencimento sobre o valor.** Aplica somente o índice registrado na data de vencimento do débito.

Exemplo: para um débito de R$ 100,00 lançado em 01/01/2007, vencido em 01/02/2007 e atualizado em 01/03/2007, usa-se o índice de 0,45% do vencimento: 100,00 × 1,0045 = R$ 100,45.

**d) Sem correção (moeda corrente nacional).** Não atualiza o valor do débito.

[![](https://e-cidade.wiki.br/tributario/inflatores/files/Manual_Inflatores_html_7a92fdbb4f2760da.png)](https://e-cidade.wiki.br/tributario/inflatores/files/Manual_Inflatores_html_7a92fdbb4f2760da.png)

## Alteração

Selecione o inflator na lista, altere os campos necessários e clique em **Alterar**.

## Exclusão

Selecione o inflator na lista. Se estiver vinculado a um tipo de juros e multa, primeiro altere esse cadastro para usar outro inflator e, depois, exclua o inflator.
`,
};