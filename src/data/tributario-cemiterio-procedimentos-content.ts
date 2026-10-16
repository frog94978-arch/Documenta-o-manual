export const cemiterioProcedimentosContent: Record<string, string> = {
  Isenção: `
Rotina para incluir isenções de taxas de sepultamento conforme a legislação municipal.

~~~
DB:TRIBUTÁRIO > Cemitério > Procedimentos > Isenção
~~~

## Inclusão

- **Sequencial:** código gerado automaticamente.
- **Processo:** número do processo de protocolo ou pesquisa pelo link.
- **Sepultamento:** código do sepultamento ou pesquisa pelo link.
- **Isenção:** tipo de isenção.
- **Data de Lançamento:** data em que a isenção foi registrada.
- **Data de Início / Data Final:** período de vigência.
- **Percentual:** percentual de isenção.
- **Observações:** informações opcionais sobre a isenção.

Após preencher os campos, clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_39fa05e2109490fa.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_39fa05e2109490fa.png)

## Alteração

Selecione a isenção na lista, altere os dados necessários e clique em **Alterar**.

## Exclusão

Selecione a isenção e clique em **Excluir**.
`,
  "Proprietário de Ossário": `
Registra a aquisição de ossário ou jazigo, o processo de compra, o CGM do proprietário e a data de aquisição. Para jazigos, é habilitada uma aba adicional para informar dados como o número de gavetas.

~~~
DB:TRIBUTÁRIO > Cemitério > Procedimentos > Proprietário de Ossário
~~~

## Inclusão: aba Proprietário

- **Código Ossário / Jazigo:** preenchido automaticamente.
- **Processo:** número do processo ou pesquisa pelo link; opcional.
- **Requerente:** preenchido conforme o processo.
- **Proprietário:** preenchido com o requerente do protocolo; pode ser alterado se o proprietário for outra pessoa.
- **Nº Ossário / Jazigo:** selecione o registro. Lote, Quadra e Cemitério são preenchidos automaticamente.
- **Aquisição:** data da aquisição, inicialmente preenchida com a data da operação.

Clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_2b7e68a61998b9a8.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_2b7e68a61998b9a8.png)

### Aba Taxas

O número do Ossário/Jazigo e o Proprietário vêm da aba anterior. Informe **Data do Sepultamento**, **Taxa de Serviço**, **Valor Corrigido**, **Data de Vencimento** e **Observações**. Clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_970cf6a58e3f8a0c.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_970cf6a58e3f8a0c.png)

## Alteração

Selecione o proprietário de Ossário/Jazigo na lista, altere os dados e clique em **Alterar**.

## Exclusão

Selecione o registro e clique em **Excluir**.
`,
  Sepultamentos: `
Rotina para registrar o óbito e o sepultamento, incluindo cemitério, dados da certidão de óbito, localização e demais informações.

~~~
DB:TRIBUTÁRIO > Cemitério > Procedimentos > Sepultamentos
~~~

## Inclusão: aba Dados do Falecido

- **Cemitério:** código do cemitério ou pesquisa pelo link.
- **Sepultado:** nome do falecido.
- **Pai / Mãe:** preenchidos com os dados do CGM, quando disponíveis.
- **Cônjuge:** nome do cônjuge; opcional.
- **Falecimento:** data do falecimento.
- **Etnia:** etnia da pessoa.
- **Observação:** informações adicionais do sepultamento.

Clique em **Processar**.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_8f63e87d2568fe18.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_8f63e87d2568fe18.png)

### Aba Certidão de Óbito

- **Médico:** médico que assinou o atestado, pelo código ou pesquisa no link.
- **Causa:** causa da morte.
- **Local / Cartório:** local e cartório de registro.
- **Hospital / Funerária:** códigos ou pesquisa pelos links.
- **Livro / Folha / Registro:** dados de registro da certidão.
- **Declarante:** CGM do declarante ou pesquisa pelo link.
- **Vencimento:** data de vencimento.

Clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_1d4d0b0093c00b20.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_1d4d0b0093c00b20.png)

### Aba Localização

Selecione a localização: Sepultura, Ossário Geral, Ossário Particular ou Jazigo. Preencha os campos exibidos conforme a opção escolhida e clique em **Incluir**.

## Alteração

Selecione o sepultamento e faça as alterações necessárias.
`,
  "Itens de Serviço": `
Lança no financeiro as taxas cobradas dos contribuintes pelos serviços do cemitério; funciona como uma rotina de Diversos específica para o módulo.

~~~
DB:TRIBUTÁRIO > Cemitério > Procedimentos > Itens de Serviço
~~~

## Inclusão

- **Código:** preenchido automaticamente.
- **Sepultamento:** preenchido com o código do CGM do sepultado.
- **Declarante:** preenchido com o código do CGM do declarante.
- **Data Sepultamento:** preenchida com a data do sepultamento.
- **Taxa de Serviço:** selecione a taxa.
- **Valor Taxa:** valor definido no cadastro de taxas.
- **Valor Corrigido:** informe o valor corrigido.
- **Vencimento:** vencimento da taxa.
- **Observações:** informações adicionais.

Clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_953e0c0b399e0953.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_953e0c0b399e0953.png)

## Exclusão

Selecione o item de serviço e clique em **Excluir**.
`,
  "Transações / Retiradas": `
Registra a movimentação dos sepultamentos. O sepultamento pode ser transferido da sepultura para um ossário ou jazigo; se a sepultura não for renovada, os restos mortais podem ser encaminhados ao Ossário Geral. Também é possível registrar a retirada quando o corpo será sepultado em outra cidade.

~~~
DB:TRIBUTÁRIO > Cemitério > Procedimentos > Transações / Retiradas
~~~

Selecione o sepultado e clique em **Processar**. Na aba **Transações/Retirada**, escolha a localização de destino ou indique a retirada. Os campos disponíveis variam conforme a localização selecionada. Preencha os dados e clique em **Incluir**.
`,
  "Renovações de Sepulturas": `
A sepultura tem prazo de validade definido pela Prefeitura. Quando esse prazo vence, pode ser emitido edital para avisar os contribuintes responsáveis (declarantes) e solicitar a renovação. Se o declarante não comparecer no prazo determinado, os restos mortais serão encaminhados ao Ossário Geral do cemitério.

~~~
DB:TRIBUTÁRIO > Cemitério > Procedimentos > Renovações de Sepulturas
~~~

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_2d01b5bdf8d12ec846.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_2d01b5bdf8d12ec846.png)
`,
};