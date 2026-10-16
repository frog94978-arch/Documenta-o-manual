export const diversosCadastroContent: Record<string, string> = {
  "Procedência": `
O cadastro de procedências identifica a origem e o motivo dos débitos lançados em Diversos. Funciona como uma categorização por grupo ou natureza do registro, facilitando consultas e relatórios.

~~~
DB:TRIBUTÁRIO > Diversos > Cadastros > Procedência
~~~

A procedência define a receita em que o débito será lançado, o histórico de cálculo e o grupo de débito usado na Consulta Geral Financeira. Também define a receita para a qual o débito será transferido ao parcelar.

## Inclusão

### Aba Procedência dos Diversos

- **Procedência:** código gerado automaticamente ao incluir.
- **Descrição abreviada:** descrição sucinta, com até 20 caracteres.
- **Descrição Completa:** descrição completa, com até 40 caracteres.
- **Receita:** receita orçamentária em que o débito será lançado e em que a arrecadação será contabilizada quando pago. Pesquise pelo nome no link, se necessário.
- **Histórico de Cálculo:** histórico correspondente ao tipo de débito e identificação da parcela na Consulta Geral Financeira, como Diversos ou Loteamentos.
- **Tipo de Débito:** grupo em que os débitos desta procedência serão apresentados na Consulta Geral Financeira, como Diversos.
- **Data Limite:** após essa data, a procedência deixa de ser oferecida para lançamento de débitos.
- **Tipo Cobrança:** Sim disponibiliza a procedência na rotina de inscrição em Cobrança Administrativa.

Após preencher os campos, clique em **Incluir**. O sistema habilitará a aba para configurar a receita de parcelamento do Diversos.

[![](https://e-cidade.wiki.br/tributario/diversos/files/Captura%20de%20tela%20de%202021-07-16%2015-47-33.png)](https://e-cidade.wiki.br/tributario/diversos/files/Captura%20de%20tela%20de%202021-07-16%2015-47-33.png)

### Aba Receita para Parcelamento de Diverso

**Receita de Parcelamento:** receita orçamentária para a qual será transferido o débito ao parcelar um Diverso desta procedência. Pesquise pelo nome no link, se necessário, e clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/diversos/files/Manual_Diversos_html_e75255a82a851a2f.png)](https://e-cidade.wiki.br/tributario/diversos/files/Manual_Diversos_html_e75255a82a851a2f.png)

## Alteração

Selecione a procedência na lista e altere os campos desejados.

> Alterar Receita, Histórico de Cálculo, Tipo de Débito ou Receita de Parcelamento não modifica os registros de Diversos já incluídos. Por exemplo, os débitos existentes permanecem vinculados à receita definida quando foram lançados.

## Exclusão

Selecione a procedência e exclua o registro.

> Não é permitido excluir uma procedência que tenha Diversos vinculados, mesmo que os débitos tenham sido pagos, parcelados, cancelados ou prescritos.
`,
};