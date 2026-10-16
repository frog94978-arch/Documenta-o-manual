export const itbiCadastroContent: Record<string, string> = {
  "Tipo de Transação": `
Este cadastro reúne as formas de transmissão de imóveis, com ou sem incidência de imposto. Inclua os itens definidos no Código Tributário Municipal para incidência e não incidência, como compra e venda, cessão de direitos contratuais, compra e venda com usufruto e compra e venda da nua-propriedade.

~~~
DB:TRIBUTÁRIO > ITBI > Cadastros > Tipo de Transação
~~~

## Inclusão: aba Dados da Transação

- **Código:** gerado automaticamente.
- **Descrição:** identificação da transação ao selecioná-la no cadastro de ITBI.
- **Desconto (%):** percentual de desconto previsto na legislação; informe zero se não houver previsão.
- **Observação:** informação complementar opcional.

Após preencher os campos, clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_ac677fcacef3a626.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_ac677fcacef3a626.png)

### Aba Formas de Pagamento

**Transação:** código gerado na aba anterior. **Formas de pagamento:** selecione a forma de pagamento dispensada nesta transação. Clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_aa6288175ec8879d.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_aa6288175ec8879d.png)

## Alteração

Selecione a transação na lista, altere os campos desejados e clique em **Alterar**.

## Exclusão

Selecione a transação e clique em **Excluir**. Só é permitido excluir registros ainda não vinculados a nenhuma ITBI.
`,
  "Tipo de Situação": `
Cadastro dos tipos de situação dos imóveis em relação à quadra onde estão localizados. Exemplos: **Interno**, quando o imóvel fica no meio da quadra; **Encravado**, quando não faz testada com logradouro; e **Esquina**, quando está em uma esquina.

~~~
DB:TRIBUTÁRIO > ITBI > Cadastros > Tipo de Situação
~~~

## Inclusão

**Código:** gerado automaticamente. **Descrição:** nome da situação.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_3779357d42f0e923.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_3779357d42f0e923.png)

## Alteração

Selecione o registro e altere somente a descrição.

## Exclusão

Selecione o registro e clique em **Excluir**. Só é permitido excluir registros ainda não vinculados a nenhuma ITBI.
`,
  "Forma de Pagamento": `
~~~
DB:TRIBUTÁRIO > ITBI > Cadastros > Forma de Pagamento
~~~

## Inclusão

- **Tipo de Forma de Pagamento:** À vista, Parcelado ou Financiado.
- **Descrição:** identificação da forma de pagamento ao selecioná-la no cadastro de uma transação.
- **Tipo:** escolha se a forma pode ser usada em Todas, ITBI Urbano ou ITBI Rural.
- **Alíquota:** percentual aplicado ao valor da transação. Informe zero se não houver incidência de imposto.

É possível cadastrar mais de uma forma de pagamento à vista com alíquotas diferentes para o mesmo tipo (Rural ou Urbano).

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_320f0d6fe2f198c1.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_320f0d6fe2f198c1.png)

## Alteração

Selecione a forma de pagamento, altere os campos e clique em **Alterar**.

## Exclusão

Selecione o registro e clique em **Excluir**. Só é permitido excluir registros ainda não vinculados a nenhuma ITBI.
`,
  "Taxas do ITBI": `
Esta rotina cria grupos de taxas cobradas junto com a guia de ITBI. O cadastro das taxas é realizado em **Lançamento de Taxas**, descrito no manual do módulo Arrecadação.

~~~
DB:TRIBUTÁRIO > ITBI > Cadastros > Taxas do ITBI
~~~

## Inclusão: aba Tipos

- **Código:** sequência gerada pelo sistema.
- **Descrição:** identificação do grupo de taxas.
- **Tipo de ITBI:** selecione se o grupo será usado em ITBI Urbano, Rural e/ou Urbano Pleno.

Clique em **Salvar**. O sistema habilitará a aba Taxas para selecionar as taxas do grupo.

**Urbano Pleno** aplica-se às transações em que o município, como senhorio direto de imóvel em enfiteuse, concede ao foreiro o domínio pleno. Para esse tipo de transação, o Transmitente será sempre o próprio Município.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_890365eba5f65d4a.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_890365eba5f65d4a.png)

### Aba Taxas

Selecione pelo link as taxas que farão parte do grupo. Taxas fixas cobram o valor definido no cadastro de Taxas do módulo Arrecadação.

Para uma taxa percentual, selecione a base de cálculo: Valor do Terreno, Valor da Benfeitoria ou Ambos. O percentual informado na Quantidade de Inflator da Taxa incide sobre a base escolhida.

Para uma taxa Fixo Sobre Faixa, informe a base de cálculo e o intervalo de valores. O sistema compara o maior entre Valor Declarado e Valor Venal com o intervalo e aplica o percentual configurado.

Exemplo: terreno avaliado em R$ 25.000,00 e benfeitorias em R$ 15.000,00. Com taxa de 2,5% sobre o terreno e faixa que inclui o valor avaliado, a taxa será R$ 625,00 (R$ 25.000,00 × 2,5%), além do ITBI.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_496a80b870b58252.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_496a80b870b58252.png)

## Alteração

Permite alterar o grupo de taxas que pode incidir na liberação do ITBI.
`,
};