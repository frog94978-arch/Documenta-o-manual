export const arrecadacaoCadastroContent: Record<string, string> = {
  "Regras p/ o Parcelamento": `
Neste menu são cadastradas as regras de parcelamento. Para parcelar débitos ou emitir recibos, é necessário que exista uma regra vigente, com ou sem desconto.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Regras p/ o Parcelamento
~~~

## Inclusão

### Aba Parcelamento

- **Código:** preenchido automaticamente.
- **Descrição:** nome da regra de parcelamento e/ou desconto.
- **Data de Lançamento:** data do cadastro, preenchida automaticamente.
- **Data Inicial / Data Final:** período de validade da regra.
- **Só dá desconto se todas marcadas:** com Sim, o desconto só é aplicado quando todas as parcelas do débito estiverem selecionadas na Consulta Geral Financeira.
- **Permite digitar valor das parcelas:** permite informar valores diferentes por parcela; a diferença é ajustada na última.
- **Vencimento padrão:** dia sugerido para o vencimento das parcelas, exceto a entrada; pode ser alterado no parcelamento.
- **Dia do vencimento próximo mês:** limite usado para determinar o mês de vencimento da segunda parcela.
- **Permite alterar valor de cada parcela:** abre a edição dos valores após selecionar a quantidade de parcelas; a diferença é atualizada na última parcela.
- **Permite alterar vencimento de cada parcela:** abre a edição dos vencimentos; o saldo é ajustado na última parcela, cujo valor não pode ser alterado.
- **Controla vencimento até o fim do ano:** limita as parcelas para que não ultrapassem o fim do ano, respeitando o valor mínimo. Exemplo: parcelamento feito em maio pode habilitar até oito parcelas; em novembro, até duas.

Quando a regra permite alterar valores ou vencimentos, o Termo apresenta um quadro com os dados informados.

### Reparcelamento

- **Permite Até:** data final para reparcelar com esta regra.
- **Quantas Vezes:** quantidade de reparcelamentos permitida.
- **Permite Anular:** escolha entre Sempre, Nunca ou Somente sem Pagamentos/Cancelamentos.

### Tipo de Anulação

- **Voltar Valores Proporcional:** retorna o valor pago, abatendo proporcionalmente os tipos de débitos parcelados. Considera a soma dos valores históricos pagos, sem juros, multa ou correção monetária. Calcula o percentual pago sobre o total parcelado e aplica o percentual restante ao valor histórico de cada débito de origem.
- **Voltar Valor de menor vencimento:** soma as parcelas pagas com juros, multa e financiamento, atualiza os débitos até a data da anulação e abate o valor do débito de menor para o de maior vencimento.
- **Voltar valor sem juro e multa:** retorna o valor pago sem correção monetária, juros, juros de financiamento ou multa, abatendo os débitos por exercício mais antigo. O saldo é distribuído considerando o valor histórico e os acréscimos de cada parcela.

Exemplo: se restarem R$ 3,44 para abater de uma parcela cujo total da dívida é R$ 28,86, o percentual de abatimento é 3,44 × 100 / 28,86 = 11,91%. Aplicado ao valor histórico de R$ 24,55, o abatimento é R$ 2,92 e o novo valor histórico fica R$ 21,63. Parcelas sem valor a abater mantêm o valor histórico.

### Forma

- **Normal:** soma valor corrigido, multa e juros, subtrai o desconto e divide o total igualmente pela quantidade de parcelas.
- **Juros e multa (última):** divide o valor corrigido em parcelas iguais, reservando a última para multa e juros. Exemplo: em dez parcelas, nove de R$ 100,00 e a última de R$ 250,00.
- **Loteamento:** aplica os descontos somente a débitos de imóveis cujo proprietário seja loteador.

### Aplicação da Regra

**Antes do Lançamento do Débito:** aplica o desconto durante o parcelamento. **Após o Lançamento do Débito:** aplica o desconto na emissão de recibo/carnê e no pagamento ou baixa do débito.

**Documento:** selecione o documento do Termo de Parcelamento. Sem documento selecionado, o termo não é emitido.

### Unificação

**Regra:** **Permite Agrupar Origens** permite parcelar débitos de várias origens no mesmo parcelamento; **Permite Apenas Individual por Origem** impede essa combinação. **Bloqueio** define se o parcelamento será bloqueado quando a regra for individual por origem.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/InclusRegra.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/InclusRegra.png)

### Aba Tipo de Parcelamento

Configure as formas de pagamento, faixas de parcelas e descontos. Informe Tipo de Parcelamento, Descrição, Data Inicial e Final, máximo e mínimo de parcelas, valores mínimo e máximo por parcela, data do valor mínimo, valores mínimo e máximo do débito, Inflator, descontos sobre valor corrigido/multa/juros, percentual mínimo de entrada e Tipo de Pessoa (Todos, Pessoa Física ou Pessoa Jurídica). O mínimo de uma parcela e máximo de uma parcela representa pagamento à vista e pode ser usado na emissão de boletos pela CGF.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/tipodeparcll.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/tipodeparcll.png)

### Aba Tipo de Débito

Informe os tipos de débito que receberão os benefícios da regra. Se nenhum tipo for selecionado, a regra será considerada para todos. Preencha também os vencimentos inicial e final que serão considerados.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/debitottipo.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/debitottipo.png)

### Aba Tipo de Receita

Permite selecionar o estrutural contábil das receitas dos débitos abrangidos. O preenchimento é opcional, mas, se uma regra tiver estrutural informado, todas as demais regras também devem ter essa informação.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/receitattipo.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/receitattipo.png)

## Alteração

Permite alterar os campos, inclusive o modelo de documento. Na aba Tipo de Parcelamento, permite alterar a quantidade de parcelas e os descontos.

## Exclusão

Permite excluir uma regra desde que ela não tenha sido usada em um parcelamento.

## Ordem

Permite ordenar as regras apresentadas na inclusão de parcelamento, facilitando a seleção da regra vigente.
`,
  "Regras de Compensação de Crédito": `
Nesta rotina são configuradas as regras para compensação de créditos gerados no sistema.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Regras de Compensação de Crédito
~~~

## Inclusão

- **Código:** preenchido automaticamente.
- **Código Tipo de Regra:** forma pela qual o crédito será gerado e vinculada à regra, como pagamento em duplicidade, pagamento a maior ou incentivos fiscais.
- **Descrição:** identificação da regra.
- **Percentual Máximo de Uso (%):** percentual máximo do débito que pode ser abatido pelo crédito. Exemplo: um crédito de R$ 100,00 limitado a 50% de um débito de R$ 50,00 abate R$ 25,00, deixando R$ 75,00 de crédito e R$ 25,00 de débito.
- **Tempo Validade Crédito (dias):** período de validade do crédito para compensação.
- **Compensação Automática:** define se o crédito poderá compensar automaticamente um débito.
- **Permite Transferência:** define se o crédito poderá ser transferido para outro CGM.

### Origem do Débito

**Tipo de Débito de Origem:** tipo de débito que originou o crédito e determina a regra vinculada.

### Destino de Crédito

**Tipo de Débito de Destino:** tipo de débito no qual o crédito poderá ser compensado. O campo é opcional; sem seleção, são considerados todos os tipos.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_2a730db5ffbb91b9.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_2a730db5ffbb91b9.png)

## Alteração

Selecione uma regra na lista. É possível alterar todos os campos, exceto Código.

## Exclusão

Permite excluir regras cadastradas que ainda não estejam vinculadas a nenhum crédito.
`,
  "Configuração de receitas p/ parcelamento": `
Esta rotina define como as receitas se comportam durante o parcelamento. Quando a quantidade de parcelas estiver no intervalo cadastrado, o sistema desconsidera a regra existente no cadastro de Procedências.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Configuração de receitas p/ parcelamento
~~~

## Inclusão

### Aba Dados Gerais

- **Receita Origem:** receita do débito que será parcelado.
- **Receita Destino:** receita que será atribuída à receita de origem após o parcelamento.
- **Parcela Inicial / Parcela Final:** limites mínimo e máximo de parcelas para aplicação da regra.

Após preencher os campos, clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_7453db3a3f0b7c17.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_7453db3a3f0b7c17.png)

### Aba Tipo de Débito

**Tipo de Débito:** opcionalmente, indique os tipos aos quais a regra se aplica. É o tipo que o débito assumirá ao ser parcelado; por exemplo, Dívida Ativa (5) torna-se Parcelamento de Dívida (6).

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_56cde4d58f5dec9b.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_56cde4d58f5dec9b.png)

## Alteração

Selecione o registro na lista, faça as alterações e clique em **Alterar**.

## Exclusão

Selecione o registro na lista e clique em **Excluir**.
`,
  Favorecido: `
Esta rotina permite cadastrar favorecidos que receberão valores repassados em operações de Cobrança com Registro.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Favorecido
~~~

### Manutenção: aba Dados do Favorecido

**Nome/Razão Social:** CGM da entidade que receberá o repasse.

**Conta Interna Contábil:** conta contábil da entidade favorecida no Plano de Contas.

### Dados da Conta Bancária

- **Banco:** banco da conta; a lista contém bancos cadastrados em Configurações.
- **Número da Agência / DV Agência:** agência e dígito da conta do favorecido.
- **Número da Conta / DV Conta:** conta bancária e dígito.
- **Identificador (CNPJ):** CNPJ da entidade favorecida.
- **Código da Operação:** código da operação bancária, quando aplicável.
- **Tipo da Conta:** Conta Corrente ou Conta Poupança.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_fafbcd49dd543535.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_fafbcd49dd543535.png)

### Aba Tarifas Vinculadas

Permite incluir uma tarifa vinculada ao favorecido.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/tarf.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/tarf.png)
`,
  "Taxas / Custas": `
Rotina para cadastrar taxas ou custas processuais.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Taxas/Custas
~~~

### Aba Cadastro de Taxas/Custas

- **Sequencial:** gerado pelo sistema ao incluir.
- **Descrição:** nome exibido na consulta do processo ou da Inicial do foro.
- **Grupo de Tarifas:** Custas processuais normais, Custas Processuais adicionais ou Custas Administrativas. Os dois primeiros grupos atendem Iniciais com processo do foro; o terceiro, Iniciais sem processo, quando o município cobra honorários de débitos sem processo.
- **Receita:** receita usada para cobrar a taxa no boleto.
- **Tipo de Cobrança:** valor fixado ou percentual do débito.
- **Aplica Juros e Multa:** define se a taxa será atualizada com juros e multa conforme a configuração do débito.
- **Honorário:** marque se a taxa é do tipo Honorário.
- **Valor:** valor da taxa, se a cobrança for fixada.
- **Percentual:** percentual do débito, se a cobrança for percentual.
- **Valor Mínimo / Valor Máximo:** limites opcionais da taxa percentual.

**Aplica taxa a:** Débito com cobrança Judicial (Inicial com Processo do Foro) e/ou Débito com cobrança administrativa (boleto de Inicial sem Processo do Foro). É possível selecionar ambos.

Após preencher os campos, clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/TC.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/TC.png)

### Aba Cadastro de Favorecidos

**Taxa:** código e descrição da taxa cadastrada na aba anterior. **Favorecido:** selecione um favorecido cadastrado na rotina Favorecido.
`,
  "Histórico Manual de Arrecadação": `
Quando um débito é criado, algumas rotinas geram seu histórico automaticamente. Esta rotina permite alterá-lo manualmente.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Histórico Manual de Arrecadação
~~~

## Inclusão

- **Sequência:** somente leitura; não pode ser alterada.
- **Numpre:** Numpre do débito.
- **Parcela:** parcela do débito.
- **Histórico de Cálculo:** histórico que pode ser alterado manualmente.
- **Código do Usuário:** identifica o usuário que lançou o débito; ao alterar o registro, passa a identificar quem fez a alteração.
- **Texto para Observação:** observação referente ao débito.
- **Data Limite:** validade do histórico.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_2dc0d949278b9bba.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_2dc0d949278b9bba.png)

## Alteração

Selecione um histórico na lista. Altere os campos desejados, exceto Sequência, e clique em **Alterar**.

## Exclusão

Selecione um histórico na lista e clique em **Excluir**.
`,
  "Grupo de Taxa": `
O Grupo de Taxa é utilizado na emissão automática de recibo avulso para taxas relacionadas à emissão de certidão de débito na CGF. Para isso, o parâmetro Recibo da Certidão do módulo Arrecadação deve estar como Sim e o grupo deve estar configurado. Também é possível vincular o grupo a um tipo de débito para adicionar a taxa ao recibo.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Grupo de Taxa
~~~

## Inclusão

### Aba Grupo de Taxas

**Código do Grupo:** preenchido automaticamente. **Descrição do Grupo:** descrição do grupo.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_14c04722cf6d8419.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_14c04722cf6d8419.png)

### Aba Taxas do Grupo

O Código do Grupo é preenchido com o grupo criado na aba anterior. Informe o **Código da Subreceita** da taxa ou pesquise pelo link. Clique em **Incluir**; é possível adicionar mais de uma taxa.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_6c0651308c084344.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_6c0651308c084344.png)

## Alteração

Selecione um grupo. Na aba Grupo de Taxas, altere a descrição; na aba Taxas do Grupo, inclua taxas ou use o link “E” e **Excluir** para remover registros.

## Exclusão

Selecione o grupo na lista e clique em **Excluir**. Grupos já utilizados em outra rotina não podem ser excluídos.
`,
  "Taxas Específicas": `
Rotina para cadastrar taxas específicas usadas em recibos avulsos e taxas de expediente vinculadas a tipos de débito.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Taxas Específicas
~~~

## Inclusão: aba Taxas

- **Código das Sub Receitas:** gerado automaticamente.
- **Descrição da subreceita:** nome da taxa.
- **Código da Receita:** receita da taxa cadastrada na Tesouraria.
- **Tipo para Recibo de Processo:** tipo de débito do recibo de protocolo; a lista contém tipos do grupo 14.
- **Código do Banco:** banco de baixa. Na importação do arquivo de baixa, o sistema desconta o valor fixo e gera um recibo avulso para a receita configurada.
- **Inflator para correção dos valores:** inflator usado para atualizar o valor.
- **Valor Fixo / Valor Variável:** valor fixo ou variável da taxa; se houver Valor Fixo, informe zero em Valor Variável.
- **Quantidade Mínima:** quantidade mínima cobrada.
- **Percentual de Desconto (%):** desconto sobre o valor da taxa.
- **Data de Criação:** data corrente, preenchida pelo sistema.
- **Data Validade:** data final de uso da taxa.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_51d8d40020b3b6f2.jpg)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_51d8d40020b3b6f2.jpg)

Após a inclusão, a aba Departamentos permite selecionar os departamentos que podem usar a taxa. Sem departamentos selecionados, ela fica disponível para todos.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_b3d1c1f9c8069ad6.jpg)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_b3d1c1f9c8069ad6.jpg)
`,
  "Grupo de Débito": `
Cadastro executado normalmente durante a implantação. Permite ajustar parâmetros dos grandes grupos de débitos do sistema e definir se um tipo pode ser importado para Dívida Ativa. Se não puder, não será listado na rotina de importação.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Grupo de Débito
~~~

## Inclusão de Grupo de Débito

- **Tipo de Débito:** código do grupo; sem preenchimento, o sistema usa a próxima sequência disponível.
- **Descrição do Tipo de Débito:** descrição do grupo.
- **Tipo de débito é parcelamento ou não:** define se o débito representa um parcelamento. Tipos configurados como parcelamento não podem ser reparcelados junto a outro Numpre; débitos não parcelados podem ser agrupados.
- **Se permite parcelar esse tipo de débito:** controla a habilitação do botão de parcelamento na CGF.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_2c282e51957c3dfb.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_2c282e51957c3dfb.png)

## Alteração

Selecione o grupo na lista, faça as alterações e clique em **Alterar**. O campo **Se parcela débito somente no ano atual** controla a importação para Dívida Ativa: Não impede a importação; Sim deixa o débito disponível.
`,
  "Tipos de Débitos": `
O cadastro de tipos de débitos controla os dados financeiros e o comportamento dos débitos na Consulta Geral Financeira (CGF).

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Tipos de Débitos
~~~

## Inclusão: aba Detalhes

- **Tipo de débito:** preenchido automaticamente.
- **Marcado:** define se o débito aparece marcado na emissão de relatório da CGF.
- **Código do Banco / Código da Agência:** padrões gravados quando um recibo é gerado.
- **Emite Recibo:** Sim permite gerar recibo e usar os demais botões da CGF.
- **Agrupa pelo Numpre / Agrupa pelo Numpar:** define se a CGF agrupa por código de arrecadação ou parcela.
- **Receita da Taxa Bancária / Taxa Bancária:** receita e valor da tarifa cobrada por documento emitido/autenticado no banco; a Tesouraria desconsidera a taxa na autenticação feita na prefeitura.
- **Imprime Valor:** define se os carnês são emitidos em valor ou quantidade de inflator, considerando os exercícios configurados.
- **Valor Mínimo:** valor mínimo opcional para lançamento.
- **Emitir carnê banco vencidos no sistema / no DBPref:** define se carnês podem ser emitidos após o vencimento ou se, vencidos, somente será possível gerar recibo.
- **Emite Recibo DBPref:** Emissão liberada permite visualizar e emitir; Mostra débito e não emite recibo permite visualizar sem emitir; Não mostra débito e não emite recibo oculta o débito.
- **Tipo de Agrupamento:** Nenhum emite somente os débitos marcados; Parcial agrupa no recibo os débitos do mesmo mês; Total agrupa todos.
- **Forma de Emissão de 2ª Via de Carnês:** Com Valores Atualizados inclui acréscimos e atualiza o vencimento de parcela vencida; Com Valores Originais mantém valor e vencimento originais; Ambos permite escolher no momento da emissão.
- **Grupo de Débito:** grupo ao qual o tipo pertence.
- **Receita de Crédito:** receita que recebe diferenças de pagamentos a maior.
- **Descrição:** nome do tipo de débito.
- **Terceiro dígito dos códigos de barras:** configure separadamente Carnê Única, Carnê Normal, Recibo Única e Recibo Normal. Use 6 para convênio Arrecadação e 7 para Cobrança.
- **Bloqueio Vencimento Guia Online:** Nenhum libera emissão; Exercício restringe ao exercício; Dia limita ao dia do mês; Data limita a uma data; Hora define um intervalo. Os campos Dia do Mês, Data e Intervalo complementam a opção escolhida.
- **Bloqueia dia não útil:** Sim bloqueia a emissão em fins de semana e feriados.
- **Exercícios Carnês:** quantidade de exercícios impressos em Reais; nos posteriores, imprime quantidade de inflator.
- **Taxa Específica:** taxa que será impressa no boleto, se configurada.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-05-18%2014-09-44.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-05-18%2014-09-44.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_9d7ed3ed43438f0f.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_9d7ed3ed43438f0f.png)

Quando uma taxa específica é emitida, o boleto lista a taxa ao final das receitas. No exemplo documentado, ela é vinculada ao Histórico 11505 - TAXA DE EXPEDIENTE e o pagamento ao Histórico 11605 - PGTO TAXA EXPEDIENTE.

### Aba Mensagens

Configure as mensagens das guias para caixa e contribuinte na Quota Única, Parcelas e Parcela Vencida, além da Mensagem Recibo.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202022-12-16%2015-50-39.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202022-12-16%2015-50-39.png)

### Aba TEF

Configure **Aceita TEF**, máximo de parcelas, valor mínimo da parcela e operações permitidas: Débito, Crédito à vista ou Crédito parcelado.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202022-12-16%2015-50-12.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202022-12-16%2015-50-12.png)

### Aba PIX

Configure se o tipo aceita PIX na CGF e no DBPref, o período de validade, banco/API e quantidade de emissões por chave antes de alternar para outra.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202022-12-16%2015-38-31.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202022-12-16%2015-38-31.png)
`,
  Históricos: `
Cadastro de históricos de cálculo, vinculados a um tipo: 1 = juro, 2 = multa, 3 = valor e 4 = desconto. Quando um histórico for usado para gerar débitos e emitir recibos na CGF, cadastre também outro histórico com código 100 unidades maior, usado como histórico do pagamento. Exemplo: para o código 150 - TAXAS DIVERSAS, crie o 250 - PGTO TAXAS DIVERSAS. Esses históricos normalmente são definidos na implantação ou conversão.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Históricos
~~~

## Inclusão de Históricos

**Descrição:** nome do histórico de cálculo. **Tipo de Histórico:** Juros, Multa ou Desconto.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Historicooo.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Historicooo.png)

## Alteração de Históricos

Selecione o histórico, altere os dados e clique em **Alterar**.

## Exclusão de Históricos

Selecione o histórico e clique em **Excluir**.
`,
  Vencimentos: `
Cadastro das datas de vencimento dos débitos gerados pelo sistema.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Vencimentos
~~~

## Inclusão: aba Vencimentos

- **Código:** gerado automaticamente.
- **Descrição:** nome para identificar o vencimento.
- **Código do Banco:** banco usado na linha digitável quando este vencimento utiliza convênio diferente dos padrões de carnê e recibo.
- **Tipo de Débito:** tipo vinculado aos débitos gerados pelo cálculo.
- **Histórico de Débito:** histórico vinculado aos débitos gerados.
- **Valor Fixado:** valor mínimo das parcelas geradas com este vencimento.
- **Forma de Cálculo da Parcela:** Não calcula parcelas vencidas transfere valores às parcelas futuras; Calcula todas parcelas vencidas usa as datas cadastradas; Calcula somente as escolhidas usa as datas selecionadas na aba Datas.
- **Dias para o Vencimento:** dias contados desde o cálculo. Zero grava 31/12 do exercício corrente.

Clique em **Incluir** para salvar. **Duplica Vencimento** copia os dados e datas de um cadastro existente.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_e042df4c9d95b132.jpg)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_e042df4c9d95b132.jpg)

## Aba Datas

- **Código:** código do vencimento cadastrado.
- **Parcela:** sequência da parcela.
- **Data de Vencimento:** vencimento da parcela.
- **Descrição:** nome da parcela conforme o histórico de cálculo.
- **Percentual:** percentual aplicado ao valor total calculado.
- **Histórico de Cálculo:** histórico associado à parcela e usado na geração financeira.
- **Calcula Parcela Vencida:** define se a parcela vencida será calculada.

**Incluir** adiciona um registro; **Soma Exercício** acrescenta um ano aos registros lançados.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_8e00ce2c17481eba.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_8e00ce2c17481eba.png)

## Alteração

Permite alterar os campos que não modificam os valores do cálculo.

## Exclusão

Permite excluir o vencimento quando ele não estiver vinculado a nenhum cálculo.
`,
  "Manutenção de Receitas": `
Vincula receitas orçamentárias e extraorçamentárias do Plano de Contas à Tesouraria. A receita cadastrada recebe um código usado para arrecadações por recibos avulsos e planilhas de arrecadação.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Manutenção de Receita
~~~

## Inclusão de Receita: aba Cadastro de Receitas

- **Receita:** sequência preenchida pelo sistema.
- **Tipo de Receita:** Principal, Juros, Multa, Desconto ou Juros e Multa.
- **Grupo de Receita:** Orçamentária ou Extra-Orçamentária.
- **Descrição Receita Tesouraria:** descrição trazida pelo estrutural da receita; pode ser ajustada.
- **Complemento:** complemento da fonte de recursos.
- **Código de juros e multa:** regra de atualização monetária, juros e multa.
- **Receita Juros / Receita Multa:** receitas correspondentes, sugeridas pelos parâmetros do módulo Arrecadação.
- **Receita de Crédito:** receita para diferenças de pagamento a maior ou em duplicidade.
- **Data Limite:** preenchida quando a receita não deve ser usada em novos lançamentos.
- **Tipo para Recibo Protocolo:** tipo de débito do recibo de receita.
- **Receita Externa:** receita de outro sistema, usada na classificação de baixa bancária quando a área financeira utiliza outro software.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/manutreceitaaa.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/manutreceitaaa.png)

### Aba Regras de Juros

Apresenta o código de juros e multa selecionado anteriormente e permite incluir outros códigos para períodos diferentes.

### Aba Departamentos

Permite selecionar os departamentos que usarão a receita. Sem seleção, ela ficará disponível para todos.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/depreceitaa.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/depreceitaa.png)

## Alteração de Receita

Altera uma receita cadastrada na Tesouraria.

## Exclusão de Receita

Exclui a receita desde que ela não tenha sido usada em cadastros ou emissões de boletos.
`,
  "Juros e Multas": `
Cadastro das regras de atualização monetária, juros de mora e financiamento e multas dos débitos.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Juros e Multas
~~~

## Inclusão: aba Detalhes

### Correção

- **Inflator Correção:** inflator usado na correção monetária das receitas vinculadas.
- **Correção de Vencimento:** Sim corrige pela data de vencimento; Não corrige pela data de opção.

### Juro

- **Juros por mês (%):** percentual mensal de mora; também pode definir um limite máximo.
- **Fração Diária:** Sim divide o percentual mensal por 30 e aplica a fração por dia após o vencimento.
- **Considera Sáb/Dom:** Sim evita incidência nos dias não úteis considerados pelo calendário e inicia a atualização no próximo dia útil.
- **Juro Financiamento (%):** percentual aplicado a cada 30 dias desde a operação do parcelamento.
- **Acumulativo:** define se os juros de financiamento incidem também sobre juros anteriores.

### Desconto

- **Data:** data limite para conceder o desconto extra.
- **Parcela Única (%):** desconto da parcela única (Bom Pagador).
- **Outras Parcelas (%):** desconto das demais parcelas.
- **Desconto Integral:** define se a parcela única cobra juros e multa de parcelas vencidas.
- **Após o Vencimento:** define se o desconto também é aplicado a parcelas vencidas, considerando as opções de desconto integral e a data configurada.

Os exemplos da documentação demonstram como essas opções alteram juros, multa e desconto sobre a parcela única e as demais parcelas.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_c1d35245385da705.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_c1d35245385da705.png)

### Aba Multas

Para **Multa Diária**, informe código de juros e multa, fração da multa, limite percentual e data inicial. Para **Multa Mensal**, informe código, quantidade de dias e percentual.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_d089c9efa42dc7d0.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_d089c9efa42dc7d0.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_2ec864ab17e89290.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_2ec864ab17e89290.png)

## Alteração

A alteração de um tipo de juros e multa afeta todas as receitas vinculadas ao código.
`,
  Convênios: `
Os bancos utilizam convênios de **Arrecadação** e **Cobrança**. Cobrança inclui as modalidades BDL, BSJ, SICOB, SIGCB e Cobrança Registrada. As regras são definidas e controladas pela Febraban.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Convênios
~~~

## Inclusão: Arrecadação

O convênio de Arrecadação tem retorno rápido de crédito e flexibilidade de layout. Costuma ter tarifas menores e repassa o dinheiro diretamente à prefeitura, mas exige uma conta em cada banco recebedor, o que limita a quantidade de bancos conveniados.

**Linha digitável e código de barras:**

Recebe após vencimento:

~~~
817100000162 306409772002 810200000000 082712370004
81710000016306409772008102000000008271237000
~~~

Não recebe após vencimento:

~~~
816800000001 217609772009 810030000006 082712040003
81680000000217609772008100300000008271204000
~~~

No exemplo, o código de barras contém identificador do produto/segmento, valor, convênio, vencimento, campo reservado e código de arrecadação com parcela.

Para cadastrar, informe **Tipo de Convênio** 3 - Arrecadação, **Nome**, **Instituição** e **Agência** cadastrada. Não é permitido cadastrar mais de um convênio Arrecadação por instituição.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_3bcc4343191acb49.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_3bcc4343191acb49.png)

## Ficha de Compensação

Permite ao contribuinte pagar em qualquer banco. Um banco centralizador, conveniado com a prefeitura, recebe os valores e as informações repassados pelos demais bancos.

### BSJ

Modalidade usada somente pelo Banrisul.

~~~
04192.30032 20613.912730 00000.041111 2 38580000062860
04192385800000628602300320613912730000004111
~~~

O código inclui identificação do banco/moeda/dígito, fator de vencimento, valor, indicador de emissão pelo cliente ou pelo banco, Nosso Número (cedente + convênio), zeros, código do banco e duplo dígito.

### BDL

Modalidade usada pelos outros bancos.

~~~
00192.04478 60000.000004 69060.000218 6 36410000017937
00196364100000179372044760000000006906000021
~~~

O código inclui identificação do banco/moeda/dígito, fator de vencimento, valor, convênio, Nosso Número, constante, código do banco e duplo dígito.

### Principais diferenças entre Arrecadação e Ficha

Arrecadação exige convênio e conta em todos os bancos recebedores, não permite mais de um convênio/conta por banco e permite layout de segunda via próprio. Ficha não exige conta em todos os bancos, permite vários convênios/contas no mesmo banco e pode ter configurações por tipo de débito.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_a59a7274468f48b8.jpg)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_a59a7274468f48b8.jpg)

Para BDL e BSJ, informe Tipo de Convênio (Cobrança: 1 - BDL ou 2 - BSJ), Nome, Instituição, Agência, Carteira, Variação, Convênio, Beneficiário e Espécie (R$). A Operação pode ser informada quando aplicável. Carteira é um serviço contratado ao banco para emissão de boletos; carteira e variação são informadas pelo banco. Beneficiário é a entidade que recebe os valores.

### SIGCB

Modalidade da Caixa Econômica Federal.

~~~
10492.55399 02002.211544 01776.010587 4 48920000016412
10494489200000164122553902002211540177601058
~~~

O código apresenta banco/moeda/dígito verificador, fator de vencimento, valor, cedente e dígito, Nosso Número e dígito verificador. Informe Tipo de Convênio 6 - Cobrança SIGCB, Nome, Instituição, Agência, Carteira (com/sem registro e impressão pela CEF/cedente), Variação, Convênio, Cedente e Espécie. Operação é opcional.

### SICOB

Modalidade da Caixa Econômica Federal.

~~~
10499.00101 67513.051481 70000.005275 1 55460000010253
10491554600000102539001067513051487000000527
~~~

O código apresenta banco/moeda/dígito verificador, fator de vencimento, valor, Nosso Número e dígito verificador. Informe Tipo de Convênio 5 - Compensação SICOB 11 posições, Nome, Instituição, Agência, Carteira (Sem Registros (11) ou Rápida (12)), Variação, Convênio, Cedente e Espécie. Operação é opcional. O Cedente pode seguir o formato Agência (4) + Operação (3) + Conta (8) + Dígito.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_aa3219cb7355963c.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_aa3219cb7355963c.png)

### Cobrança Registrada

Modalidade usada por diversos bancos, com exemplo do Banco do Brasil.

~~~
00190.00009 01146.159007 09345.024179 1 55030000059822
00191550300000598220000001146159000934502417
~~~

O Nosso Número tem 17 posições: os primeiros sete dígitos são o código fixo do convênio fornecido pelo banco; os dez seguintes são uma sequência atribuída pelo cliente.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_861e3df884a58a10.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_861e3df884a58a10.png)

Informe Tipo de Convênio 7 - Cobrança Registrada, Nome, Instituição, Agência, Carteira, Variação, Convênio, Cedente e Espécie. Operação é opcional; Grupo de Taxa pode ser informado quando aplicável.

## Configuração de Convênio Arrecadação

Informe **Instituição**, **Convênio** (código do município na Febraban), **Segmento** da instituição (por exemplo, 1 - Prefeitura) e **Formato do vencimento** usado no código de barras do carnê.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_83d8f86ef6591400.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_83d8f86ef6591400.png)
`,
  Autenticadoras: `
Cadastro de impressoras autenticadoras de recibos, cheques e terminais TEF para imprimir movimentações de pagamentos e arrecadações.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Autenticadoras
~~~

## Inclusão

Conecte a autenticadora ao computador e preencha os campos:

- **Identificação 1, 2 e 3:** iniciais impressas na autenticação; opcionais.
- **IP Terminal:** preenchido com o IP do computador usado no cadastro.
- **Local do Terminal:** nome para identificar o terminal.
- **Código da Conta:** conta padrão, que poderá ser trocada no momento da autenticação.
- **String para Autenticação 1 e 2:** textos de autenticação, conforme o equipamento.
- **Tipo de Autenticação:** Autentica e Imprime; Autentica e não imprime; ou Não autentica e não imprime (terminal apenas para pagamentos de empenho).
- **Tesoureiro:** nome do tesoureiro.
- **Tipo de impressora:** Chronos, Bematech ou Schalter.
- **Tipo Impressora Cheque:** Chronos, Bematech ou Elgin/Imprecheq.
- **IP Impressora Cheque:** preenchido inicialmente com o IP do terminal; pode ser alterado.
- **Porta Impressora Cheque:** porta da impressora; normalmente 4444.
- **Imprime Assinatura nos Cheques:** Sim permite imprimir a assinatura.
- **Zera Troco Arrecadação de Receita:** zera ou não o troco ao autenticar.
- **TEF:** indica se o terminal utiliza pagamentos por TEF.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_1024b43d9181828f.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_1024b43d9181828f.png)

## Alteração

Selecione uma autenticadora. É possível pesquisar por Código do Terminal e Local do Terminal; altere os campos e clique em **Alterar**.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_59d40f8aaac80068.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_59d40f8aaac80068.png)

## Exclusão

Selecione a autenticadora e clique em **Excluir**.
`,
  "Manutenção de Calendário": `
Nesta rotina são cadastrados feriados, sábados e domingos do exercício. As datas podem influenciar a correção monetária, os juros e as multas dos débitos, conforme a configuração das receitas.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Manutenção de Calendário
~~~

Informe o **Exercício** e clique em **Incluir Sábados e Domingos** para marcar esses dias no calendário. Informe em **Data** os feriados em que não deve haver atualização dos débitos, quando a receita estiver configurada dessa forma.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_64c3627bf30b77fb.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_64c3627bf30b77fb.png)

Clique em **Emite Calendário** para conferir as datas cadastradas para o exercício.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_6c49494341034e8d.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_6c49494341034e8d.png)
`,
  "Lançamento de Taxas": `
Esta rotina cadastra taxas do município para lançamento pelo E-Cidade e/ou Portal GRM e define se o não pagamento gera débito passível de cobrança posterior ou apenas deixa de executar o serviço solicitado.

~~~
DB:TRIBUTÁRIO > Arrecadação > Cadastros > Lançamento de Taxas
~~~

## Inclusão

Cadastre os tipos de taxas utilizados pelo município. As telas variam conforme **Gera Débitos** esteja como Sim ou Não.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_b8605633ef98af79.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_b8605633ef98af79.png)

Tela com Gera Débitos configurado como Sim.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_e1b545ce93d427ee.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_e1b545ce93d427ee.png)

Tela com Gera Débitos configurado como Não.

### Descrição dos campos

- **Descrição:** nome da taxa exibido na rotina de inclusão.
- **Quantidade de Inflator da Taxa:** valor em quantidade de inflator; pode ser inteiro ou ter mais de duas casas decimais.
- **Inflator:** inflator usado para determinar o valor.
- **Dias para Vencimento:** prazo, contado da inclusão, para vencimento do débito/boleto.
- **Tipo de Taxa:** Fixo calcula a quantidade de inflator; Variável permite informar valor unitário na geração; Percentual usa a quantidade de inflator como percentual e pode ser utilizada em Taxas do ITBI; Fixo por Faixa de Valor configura a taxa por faixa.
- **Receita da Taxa de Expediente / Quantidade de Inflator da Taxa de Expediente:** dados opcionais da taxa de expediente.
- **Data Limite:** encerra o uso da taxa para novos lançamentos.
- **Departamentos:** restringe o uso aos departamentos selecionados. Sem seleção, todos podem usar a taxa; clique em **Salvar** ao final.
- **Gerar Débito:** Sim lança um débito na Consulta Financeira da origem (Numcgm, Matrícula ou Inscrição), habilita Procedência e pode impedir a emissão de CND enquanto não pago. A Procedência define receita e tipo de débito e é cadastrada em Diversos > Cadastros > Procedência > Inclusão. Com Não, a taxa não fica disponível no Portal GRM; o boleto pago aparece na Consulta Financeira, mas o não pagamento não gera débito e o campo Receita é habilitado para o recibo avulso.
- **Emissão na Web:** Sim permite emissão pelo Portal GRM; Não restringe ao E-Cidade.
- **Recurso Administrativo:** Sim identifica taxa usada para recorrer de Multa/Auto de Infração e habilita o Tipo de Fiscalização.
- **Campos Dinâmicos:** permite configurar campos adicionais a partir das tabelas do E-Cidade, indicar se são obrigatórios, definir tipo (Texto, Hidden, Data, Verdadeiro/Falso, Número, Combo) e valor padrão. Exemplo de campo: y50_codauto da tabela fiscal.auto.

Para valor padrão de data, **now** representa a data atual, **now#10** a data atual mais dez dias e **now|10** a data atual menos dez dias.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_745ebf8addaeea16.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_745ebf8addaeea16.png)

Configure os campos dinâmicos e clique em **Salvar**; use **Fechar** quando terminar. Depois de preencher os campos da taxa, clique em **Salvar**.

## Alteração

Acesse a rotina para fazer a manutenção necessária nos dados cadastrados.
`,
};