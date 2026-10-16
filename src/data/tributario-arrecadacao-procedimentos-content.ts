export const arrecadacaoProcedimentosContent: Record<string, string> = {
  "Arrecadação de Receita": `
Procedimento para receber e autenticar débitos no sistema. Utiliza autenticadoras vinculadas ao IP da máquina que executa a autenticação.

~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Arrecadação de Receita
~~~

- **Conta:** conta que receberá a arrecadação.
- **Autenticar:** leia o código de barras ou informe o código de arrecadação do recibo/carnê e clique em **Calcular**. Clique em **Autenticar** para concluir; o sistema pergunta se deseja autenticar novamente.
- **À Pagar:** valor do recibo/carnê, preenchido após a leitura ou digitação do código.
- **Recebido:** valor recebido; o sistema calcula o troco.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_496a4322ec808233.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_496a4322ec808233.png)

> Autenticadoras térmicas imprimem recibo com dados do documento autenticado, como guia ITBI, Numpre/Parcela, Receita e Valor.
`,
  "Excessões de Agrupamento de Débitos": `
Permite cadastrar os Numpres e seus tipos de débito que não devem ser agrupados na emissão de recibos, quando o Tipo de Débito estiver configurado com agrupamento parcial.

~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Excessões de Agrupamento de Débitos
~~~

## Inclusão

Informe **Numpre** e **Tipo de débito** correspondente.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_4c3f579728b0d0ba.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_4c3f579728b0d0ba.png)
`,
  "Configuração de Regras de Emissão": `
Configura os modelos de boletos, tipos de débito atendidos e máquinas autorizadas para emissão.

~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Configuração de Regras de Emissão
~~~

## Inclusão: aba Modelo Padrão da Instituição

- **Modelo Padrão da Instituição / Instituição:** preenchidos automaticamente.
- **Convênio:** convênio associado à regra.
- **Tipo de Modelo:** modelo e formato de impressão (PDF ou TXT).
- **Código do Modelo:** documento usado na emissão.
- **Data Inicial / Data Final:** vigência da regra; por padrão, 01/01/1900 a 31/12/2099.
- **Parcela Inicial / Parcela Final:** intervalo de parcelas atendido.

Clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/emissaoregra.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/emissaoregra.png)

### Aba Modelo Padrão da Instituição por Tipo de Débito

Selecione o tipo de débito atendido. Deixe em branco para aplicar a regra a todos.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_1dfd13dbdee5f80a.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_1dfd13dbdee5f80a.png)

### Aba Exceções na Impressão de Carnê

Permite definir um modelo diferente do padrão para uma máquina específica. Informe **Modelo Padrão** e o **IP** da máquina.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_d5f868406bcc0fc3.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_d5f868406bcc0fc3.png)

### Aba PIX

Configure se o modelo aceita boletos PIX e selecione a **Banco/API** disponível.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202022-12-16%2015-35-51.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202022-12-16%2015-35-51.png)

## Alteração e exclusão

Selecione a regra, altere os campos e clique em **Alterar**; para removê-la, selecione-a e clique em **Excluir**.
`,
  "Prorroga Vencimento": `
Permite alterar vencimentos de débitos de uma matrícula, inscrição ou CGM, por motivos alheios ao atraso do contribuinte, evitando juros ou multa.

~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Prorroga Vencimento
~~~

## Inclusão

Usuário, data e hora são obtidos da sessão. Informe o **Numpre** e a **Parcela** a prorrogar. **Início processo** indica o início da prorrogação; **Fim processo**, até quando o débito será prorrogado. Use **Observações** para registrar os procedimentos realizados.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_8e367dec9c114808.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_8e367dec9c114808.png)
`,
  "Cancelamento de Débitos": `
~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Cancelamento de Débitos
~~~

### Anula Cancelamento

Processa os grupos de cancelamentos registrados na CGF que ainda não foram processados. Selecione um grupo; confira os dados do lançamento e os débitos vinculados. Informe observações do processamento, escolha o Tipo de Cancelamento (Normal ou Renúncia) e clique em **Processar**.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_f41609f8473c1232.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_f41609f8473c1232.png)

### Processa Cancelamento

Permite retirar um débito ou um grupo ainda não processado da lista de cancelamentos, conforme o departamento em que o cancelamento foi lançado. Selecione o grupo e os débitos a excluir; use “M” para marcar todos e clique em **Processar**.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_b5f11d126d15b4ba.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_b5f11d126d15b4ba.png)

### Anula Processamento

Reverte o processamento de um débito ou grupo, retornando sua situação de cancelado para pendente. Pesquise por Nome/Razão Social, Matrícula, Inscrição Municipal, Código ou Data do Cancelamento e Descrição Resumida. Selecione os débitos a reativar; use “M” para marcar todos e clique em **Processar**.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_c4084ff7823449f5.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_c4084ff7823449f5.png)
`,
  "Débito em Conta": `
Permite cadastrar pedidos de débito em conta para CGM, Matrícula ou Inscrição.

~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Débito em Conta
~~~

## Inclusão: CGM

Informe o CGM ou pesquise pelo link e clique em **Incluir**.

### Aba Pedido

- **Código Sequencial:** preenchido automaticamente.
- **Código do Banco:** banco que receberá o pagamento.
- **Agência / Conta:** dados da conta bancária de recebimento.
- **Status:** Pendente, Ativo ou Inativo.
- **Id Empresa:** identificação da empresa; opcional.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_b09be20da84b8a6.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_b09be20da84b8a6.png)

### Aba Débitos

Marque os débitos vinculados ao CGM e clique em **Processar**.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_47394edf5eeaed83.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_47394edf5eeaed83.png)

### Matrícula e Inscrição

Informe a Matrícula ou Inscrição, ou pesquise pelo link. Clique em **Incluir** para abrir o mesmo formulário do pedido por CGM.

## Alteração

Escolha CGM, Inscrição ou Matrícula, selecione o registro na lista e altere os campos desejados.
`,
  "Recibo de Receita": `
Emite recibos de receitas tributárias ou não tributárias. Um recibo avulso não pago não cria débito; quando pago, é registrado nos pagamentos efetuados. Para arrecadações de valor negativo, use a planilha de lançamento do módulo Caixa.

~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Recibo de Receita
~~~

Recibos de protocolo ficam vinculados ao CGM do titular do processo e ao processo. O botão **Taxas** consulta Taxas Específicas cadastradas; clique na taxa para conferir o valor corrigido pelo inflator.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_a74f77938f396ec0.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_a74f77938f396ec0.png)
`,
  "Manutenção de Suspensões": `
~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Manutenção de Suspensões
~~~

## Alteração

Permite alterar somente a observação do cadastro da suspensão.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/alterasus.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/alterasus.png)

## Finaliza

Define o destino do débito suspenso: **Cancelar** cancela o débito; **Reativa** devolve o débito à CGF. Enquanto não houver definição, ele aparece no link Débitos Suspensos.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/finalizzasus.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/finalizzasus.png)
`,
  "Processar Arquivos Retorno Banco": `
~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Processar Arquivos Retorno Banco
~~~

## Processa Arquivo TXT

Processa o arquivo de retorno do banco, com pagamentos, agendamentos ou mensagens de erro que podem impedir pagamentos. Erros bancários podem cancelar pagamentos e devolver os débitos à manutenção de pagamento.

Informe **Banco**, **Agência** e **Arquivo de Retorno** e clique em **Processar**.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_e09287bcb2a753f9.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_e09287bcb2a753f9.png)

## Verifica Dados Importados

Consulta arquivos importados cuja classificação ainda não foi processada. Filtre por Banco, Agência e Data ou pesquise sem filtros. A lista mostra código de retorno, nome do arquivo, banco, agência, data, conta, descrição da conta e valor total. Selecione um arquivo para ver seus registros.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_30ae43bec153eb4.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_30ae43bec153eb4.png)

## Verifica Valores Pagos

Use os mesmos filtros para consultar os registros de baixa. A tela mostra Banco, Agência, Numpre, Parcela, Número de arrecadação, Total Pago, Class, Cedente e Convênio. Os botões **Acertar Banco**, **Somente os Erros**, **Números Corretos**, **Todos Números**, **Imprimir** e **Imprimir Analítico** ajudam a conferir e corrigir inconsistências. Ao selecionar um registro, é possível ver Numpre, Numpar, Nosso Número e Valor. **Atualizar** o Número Banco só funciona para convênio Cobrança.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_f515eed845a2d74a.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_f515eed845a2d74a.png)

### Tratamento de inconsistências

- **Numpre já pago:** gere recibo avulso e substitua o Numpre inconsistente pelo Numpre do recibo.
- **Recibo parcialmente pago:** gere recibo CGF para débitos em aberto e recibo avulso para o valor já pago; atualize Numpre e valor no arquivo e registre a movimentação manual quando indicado.
- **Numpre cancelado:** gere recibo avulso e atualize o Numpre; alternativamente, anule o processamento do cancelamento.
- **Numpres importados para Dívida:** ajuste Numpre/parcela conforme o débito importado; reemita recibos quando necessário.
- **Arquivo do Simples com pagamento duplicado:** gere recibo avulso e vincule a inconsistência ao Numpre do recibo.
- **Numbanco duplicado:** consulte o Numbanco para identificar o Numpre correto, gere novo recibo e corrija Numpre e Numbanco antes da classificação.

## Processa Classificação do Arquivo

Pesquise os arquivos, selecione um e confirme **Classificação de Receita**. A consistência da baixa é feita para receitas ligadas ao orçamento.

## Verifica Classificações Executadas

Pesquise e selecione um arquivo para conferir as receitas classificadas e seus valores. Use **Imprimir** para gerar o relatório.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_499ad9ffee1ddbaa.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_499ad9ffee1ddbaa.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/arquivo6.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/arquivo6.png)

## Relatório das Arrecadações Bancárias

Informe **Data Inicial**, **Data Final** e se deseja **Totalizar por Banco**.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_bd2eb19964472b2d.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_bd2eb19964472b2d.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/arquivo7.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/arquivo7.png)

## Inclusão de Movimentação Manual

Informe Banco e Agência e clique em **Pesquisar**. Na tela seguinte, selecione Data do Lançamento, Autentica e se a inclusão será vinculada a um arquivo existente. Se Arquivo for Sim, selecione o Nome Arquivo.

No registro de baixa, informe Convênio, Cedente, Número Banco, Numpre, Numpar, datas do arquivo, pagamento e crédito, Classifica e valores pagos, juros, multa, acréscimos e desconto. Opcionalmente informe dados do processo e observações. Ao classificar a movimentação, o sistema quita o débito indicado pelo Numpre.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_30344313e3a950c5.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_30344313e3a950c5.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_885f493d64193709.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_885f493d64193709.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_4b19bbaab73b3a2d.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_4b19bbaab73b3a2d.png)
`,
  "Manutenção de Numpres Bloqueados": `
Permite bloquear ou desbloquear Numpres. Um Numpre bloqueado não pode ser quitado pela Arrecadação de Receita nem pela Baixa de Banco; o retorno bancário pode gerar inconsistência.

~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Manutenção de Numpres Bloqueados
~~~

## Inclusão

Informe o Numpre. O sistema apresenta Numpre, Numpar, Tipo, Receita, Data de Operação e Data de Vencimento. Confira os dados e clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_1951851cb92003cf.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_1951851cb92003cf.png)

## Exclusão

Selecione o Numpre bloqueado e escolha se deseja desbloquear uma parcela ou todas; clique em **Excluir**. Depois, o débito poderá ser quitado normalmente.
`,
  "Declaração Quitação": `
~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Declaração Quitação
~~~

## Individual

Pesquise pela origem: Matrícula, Inscrição, CGM Geral ou somente CGM. O sistema lista os exercícios com todos os débitos quitados; marque um ou mais exercícios para emitir a declaração.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_8a5ac86e14a048bf.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_8a5ac86e14a048bf.png)

## Geral

Emite declarações anuais em TXT ou PDF. Informe **Exercício**, **Origem** (Matrícula, Inscrição, CGM Geral ou somente CGM) e **Tipo de emissão**.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_c7acfbb646214365.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_c7acfbb646214365.png)

## Anular

Selecione o Tipo Origem e a origem para listar as declarações emitidas. Marque uma ou mais declarações para anular e informe uma observação com o motivo.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_e5a056b48dbc160f.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_e5a056b48dbc160f.png)
`,
  "Gerar arquivo de remessa de registro": `
Gera o arquivo TXT para envio ao Banco do Brasil dos boletos emitidos com a carteira 17 - Cobrança Registrada.

~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Gerar arquivo de remessa de registro
~~~

## Remessa ao Banco

Informe a **Data para processamento** e clique em **Processar**. O arquivo inclui os boletos emitidos para o convênio desde a última geração. Para reemitir um arquivo da mesma data, selecione-o antes de processar; para criar outro com boletos ainda não incluídos em arquivo, processe sem selecionar um arquivo anterior.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_659ea6620ac19be.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_659ea6620ac19be.png)
`,
  Parâmetros: `
Configura os parâmetros do módulo Arrecadação por instituição e exercício.

~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Parâmetros
~~~

## Tributário: Financeiro

- **Exercício:** instituição e exercício do parâmetro; preenchido automaticamente.
- **Operação / Slip:** opcionais.
- **Receita Juro / Receita Multa:** receitas padrão usadas ao cadastrar receitas.
- **Banco / Agência:** padrões para novos cadastros bancários.
- **Receita Cálculo:** Sim ou Não.
- **Tipo de Recibo Protocolo / Tipo de Recibo de Retenção:** modelos de recibo.
- **Valor Tolerância Diferença Pagamento:** diferença máxima aceita para quitar totalmente pagamento a menor. Por exemplo, tolerância R$ 5,00 quita integralmente diferenças nessa faixa; acima disso, pode haver baixa parcial.
- **Ativa Pagamento Parcial:** Sim aplica a tolerância configurada; Não quita integralmente independentemente do valor pago.
- **Forma de Processamento do Arquivo TXT:** Classificação por Arquivo, por data de pagamento ou por data de crédito.

## Tributário

- **Imprime o endereço:** define se o endereço será impresso.
- **Única/primeira:** Sim ou Não.
- **Libera Variável:** permite emitir CND de débitos de ISS Variável sem valor, mesmo vencidos.
- **Dias Justif.:** dias padrão para justificar um débito.
- **Separar jur e mul no parcelamento:** separa juros e multa nas parcelas quando Sim.
- **Numcgm / Cargo:** responsável e cargo que assinam a Declaração de Quitação.
- **Grupo de Taxa:** usado quando a emissão de recibo na certidão está habilitada.
- **Permite Reemissão de Recibo:** define se o usuário pode reemitir recibo válido ou se sempre será gerado outro.
- **Recibo na certidão:** Sim permite emitir recibo na certidão usando o Grupo de Taxa.
- **Tipo de Codificação:** Não codifica, Sequencial Geral, Sequencial por Instituição, Sequencial por Certidão Geral, Sequencial por Certidão de Instituição, código por processo/protocolo e exercício ou sequencial por tipo de certidão.
- **Regra para emissão de CND:** verificar valores dos imóveis por matrícula, débitos por lote ou débitos por IDBQL.
- **Receita:** receita de crédito padrão. O sistema prioriza receita do cadastro de Receitas; se não houver, usa a do Tipo de Débito; sem ambas, usa a dos parâmetros.

### Cancelamentos

**Filtro por departamento:** Sim lista apenas cancelamentos do departamento da sessão; Não lista todos.

### Certidões de Regularidade Fiscal E-Cidade e DBPref

Para cada tipo (Regular, Positiva e Negativa), configure **Dias Venc. Certidão por CGM/Matrícula/Inscrição** e **Documento Template**. **Dias para Reemissão das Certidões** define quantos dias antes do vencimento é possível reemitir.

### Forma Emissão Certidão de Débito

Configure mensagens para CGF, carnê e pagamento de carnê. A mensagem da impressora térmica é padrão para as térmicas da instituição; não é impressa em impressora matricial.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_366d27cf884a595.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_366d27cf884a595.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_b4415d091205c0ed.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_b4415d091205c0ed.png)

## Permite a emissão CND

Para emitir Certidão de Débitos, o usuário precisa da permissão de menu Arrecadação > Procedimentos > Parâmetros > Permite Emissão CND, liberada em Configuração > Procedimentos > Libera Permissão de Menu.

## Numpre Pagamento Parcial

Informe **Numpre Início pagamento Parcial** para definir a partir de qual Numpre será aplicada a regra de pagamento parcial quando ela estiver ativada.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_add9259f324f0e87.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_add9259f324f0e87.png)

## Cobrança Registrada

Configure os dados de integração com o webservice de registro de boletos e selecione o banco conveniado.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-06%2016-22-26.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-06%2016-22-26.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-06%2016-22-38.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-06%2016-22-38.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-06%2016-22-45.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-06%2016-22-45.png)
`,
  "Parcela Única": `
~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Parcela Única
~~~

## Inclusão Única Individual

Gera parcela única para débitos do exercício vinculados a CGM, Matrícula ou Inscrição, desde que ainda não tenham sido importados para Dívida Ativa ou parcelados. Selecione a origem, pesquise e escolha o Tipo de Débito, Ano de Origem e Numpres desejados.

Informe **Data de Vencimento**, **Data de Lançamento** (preenchida com a data atual, mas editável), **Percentual de Desconto** e **Observações**.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_da3323c16ddd0f8b.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_da3323c16ddd0f8b.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_2484ae1bcd3b5c7e.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_2484ae1bcd3b5c7e.png)

## Inclusão Geral de Única

Selecione a origem (CGM, Matrícula ou Inscrição), Tipo de Débito e Ano de Origem. São listados débitos do exercício ainda não importados para Dívida Ativa nem parcelados. Se o parâmetro de taxa separada estiver ativo, informe o vencimento por cálculo. Preencha Data de Vencimento, Data de Lançamento, Percentual de Desconto e Observações.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_6138a814a2b8daa5.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_6138a814a2b8daa5.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_9b7dbe1128d92107.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_9b7dbe1128d92107.png)

## Prorrogação da Parcela Única

Pesquise pelo **Código da Geração**. Confira Tipo de Geração e informe Data de Vencimento, Data de Lançamento, Percentual de Desconto e Observações. A pesquisa pode ser filtrada por origem, tipo de geração, tipo de débito, Numpre e data da geração; selecione uma geração para concluir.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_8d81c348733ed5f3.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_8d81c348733ed5f3.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_252b2f7b3a1f176e.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_252b2f7b3a1f176e.png)
`,
  "Reativa Parcelamento": `
Permite reativar um parcelamento anulado indevidamente.

~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Reativa Parcelamento
~~~

Informe o código do **Parcelamento** para reativá-lo.

> Só é possível reativar se todos os débitos de origem estiverem na mesma situação (em aberto) que tinham quando o parcelamento foi incluído. Se for parcelamento de Inicial do Foro e a Inicial tiver sido anulada, o termo não será reativado.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-09%2012-15-08.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-09%2012-15-08.png)
`,
  Créditos: `
~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Créditos
~~~

## Crédito Manual

Permite lançar um crédito manual sem registrar o pagamento que o originou.

- **Vínculo:** CGM, Matrícula ou Inscrição; a seleção define o campo de origem.
- **Nome/Razão Social / Matrícula / Inscrição:** origem à qual o crédito será vinculado.
- **Regra de Compensação:** regra aplicável ao crédito.
- **Data de Expiração:** calculada conforme a validade configurada na regra.
- **Valor / Observação:** valor e informações sobre o crédito.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-06%2014-38-48.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-06%2014-38-48.png)

Após incluir, consulte o crédito na CGF pelo link **Créditos** do CGM informado.

## Transferências

Transfere créditos entre CGMs. A transferência exige regra de compensação do tipo Transferência.

Selecione o CGM de origem e clique em **Listar Créditos**; marque o crédito a transferir. Informe o CGM de destino e os dados do processo. Com Processo do Sistema Sim, selecione o protocolo cadastrado; com Não, os dados do processo são livres e opcionais. Observações também são opcionais.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-06%2014-42-18.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-06%2014-42-18.png)
`,
  "Desconto manual (novo)": `
Permite lançar desconto manual em débitos. O sistema registra um abatimento do tipo Desconto, exibido na CGF em Compensações Utilizadas.

~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Desconto Manual (Novo)
~~~

## Incluir

Informe o Numpre e clique em **Pesquisar**. Selecione parcelas e receitas e informe o percentual ou valor do desconto; ao informar o valor, o sistema recalcula o percentual. Clique em **Incluir Desconto** para confirmar.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/novo1.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/novo1.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/novo2.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/novo2.png)

O desconto aparece em Compensações Utilizadas na CGF, com histórico de Desconto; o link MI exibe os detalhes.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/novo3.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/novo3.png)

## Cancelar

Informe o Numpre, pesquise e selecione o desconto para cancelar. Clique em **Cancelar desconto**. O registro cancelado aparece em Compensações Utilizadas com o histórico correspondente.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/novo4.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/novo4.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/novo5.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/novo5.png)
`,
  "Manutenção de Abatimentos": `
~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Manutenção de Abatimentos
~~~

## Compensação

Utiliza créditos de pagamentos duplicados ou a maior, ou créditos lançados manualmente, para compensar débitos em aberto ou registrar devoluções.

### Identificação e utilização do crédito

Pesquise pelo código do crédito ou CGM. Ao pesquisar por CGM, são listados os créditos e saldos disponíveis. Utilize um crédito por operação. Selecione-o e escolha **Compensação** ou **Devolução**.

### Compensação

Selecione a regra de compensação quando o crédito for menor que a soma dos débitos:

- **Valor Proporcional:** distribui o crédito proporcionalmente entre os débitos selecionados.
- **Data de Vencimento:** aplica primeiro ao débito vencido há mais tempo e segue a ordem de vencimento.

Clique em **Adicionar débito**, marque os débitos desejados e informe o valor do crédito a utilizar, que deve ser menor ou igual ao saldo disponível.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-09%2013-09-02.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-09%2013-09-02.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-09%2013-09-25.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-09%2013-09-25.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-09%2013-12-42.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-09%2013-12-42.png)

### Devolução

Registra a devolução do crédito, tornando-o indisponível para uso. Informe o valor (por padrão, o saldo disponível) e as observações.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-09%2013-12-54.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-09%2013-12-54.png)
`,
  "Alteração de Vencimentos para os débitos": `
Permite alterar em lote os vencimentos dos débitos.

~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Alteração de Vencimentos para os débitos
~~~

Informe o **Período** de vencimentos a pesquisar, por exemplo, 01/01/2021 a 31/01/2021. Clique em **Verifica Registros**; os débitos serão agrupados por Tipo de Débito. Marque os tipos que deseja alterar e informe **Novo Vencimento**, por exemplo, 01/02/2021. Todos os débitos selecionados dentro do período receberão a nova data.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-13%2011-20-45.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-13%2011-20-45.png)
`,
  "Cobrança Registrada": `
~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Cobrança Registrada
~~~

## Geração de Remessa

Selecione o convênio e clique em **Processar** para gerar o arquivo TXT para envio ao banco. Gere os arquivos separadamente para cada convênio da instituição. Serão incluídos boletos cuja regra de emissão utilize o convênio selecionado e que foram gerados desde a última remessa.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-09%2015-38-14.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-09%2015-38-14.png)

## Remessas Geradas

Pesquise remessas por data de emissão e/ou convênio. **Regerar** emite novamente o arquivo usando dados cadastrais atualizados do contribuinte e do convênio; valores e vencimentos do recibo não são atualizados. Para baixar exatamente o arquivo original, use **Baixar**.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-09%2015-41-38.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202021-07-09%2015-41-38.png)
`,
  "Alteração de Parcelamento": `
Permite converter parcelamento do foro em parcelamento de dívida, anulando as Iniciais e CDAs vinculadas.

~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Alteração de Parcelamento
~~~

Informe o **Parcelamento**. Com **Filtrar Dívidas** como Não, a conversão mantém todos os débitos. Com Sim, selecione os critérios para retirar débitos do termo:

- **Tipo Débito Destino:** tipo atribuído à dívida retirada.
- **Receitas:** uma ou mais receitas, separadas por vírgula.
- **Dívidas:** filtro específico da DBSeller, por exemplo, para remover exercícios em reparcelamentos.
- **Exercício:** exercício(s) a remover.

> Os filtros não são combinados: cada filtro remove os registros correspondentes independentemente dos demais.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Altera%C3%A7%C3%A3o%20de%20Parcelamento_html_af7df361856511e2.jpg)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Altera%C3%A7%C3%A3o%20de%20Parcelamento_html_af7df361856511e2.jpg)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Altera%C3%A7%C3%A3o%20de%20Parcelamento_html_ef5a5d4e02130478.jpg)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Altera%C3%A7%C3%A3o%20de%20Parcelamento_html_ef5a5d4e02130478.jpg)
`,
  "Lançamento de Taxas": `
Após cadastrar uma taxa, use esta rotina para gerar o boleto ou débito.

~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Lançamento de Taxas
~~~

## Dados para lançamento

Selecione uma única origem: **Nome/Razão Social** (CGM), **Matrícula do Imóvel** ou **Inscrição Municipal**. Escolha uma taxa disponível para o departamento da sessão.

- **Quantidade:** multiplica o valor unitário.
- **Valor Unitário R$:** calculado para taxa fixa; editável para taxa variável.
- **Valor Total R$:** valor unitário multiplicado pela quantidade; será impresso no boleto.
- **Data de Vencimento:** sugerida conforme os dias configurados na taxa; pode ser alterada.
- **Histórico:** observação obrigatória.

Taxas com campos adicionais exibem esses campos ao final do formulário. Clique em **Processar** e confirme para gerar o PDF da guia.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_b0cb0ca2deb31ec6.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_b0cb0ca2deb31ec6.png)
`,
  "Controle de parcelamentos vencidos": `
Permite agendar verificações de parcelamentos em atraso e antecipar vencimentos futuros conforme filtros e ação configurados. Para restaurar vencimentos, use Retorna Vencimentos Originais.

~~~
DB:TRIBUTÁRIO > Arrecadação > Procedimentos > Controle de parcelamentos vencidos
~~~

## Agendamento

- **Dia do processamento:** dia da semana em que será executado.
- **Horário de processamento:** horário de execução.
- **Quantidade de dias - recibos emitidos:** desconsidera parcelamentos com recibos recentes ainda válidos e não pagos. Exemplo: execução em 22/10/2021 com cinco dias ignora recibos emitidos a partir de 17/10/2021.
- **Quantidade de dias - margem de tolerância:** exclui parcelas cuja data de vencimento somada à tolerância seja posterior à data de processamento.
- **Quantidade de parcelas vencidas:** quantidade mínima de parcelas vencidas para incluir o parcelamento.
- **Ação:** escolha como antecipar os vencimentos futuros.

### Ações de processamento

- **Antecipa vencimento maior data vencida:** todas as parcelas futuras passam para a data da parcela vencida mais recente.
- **Antecipa vencimento menor data vencida:** todas as parcelas futuras passam para a data da parcela vencida mais antiga.
- **Antecipa vencimento para data do termo:** todas as parcelas passam para a data em que o parcelamento foi efetuado.

**Regra de Parcelamento:** selecione as regras abrangidas pelo agendamento. Clique em **Salvar** para criar o agendamento; o resumo aparece abaixo e pode ser excluído.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202022-02-14%2015-56-5885.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202022-02-14%2015-56-5885.png)

### Retorna Vencimentos Originais

Informe o **Número do Parcelamento** e clique em **Buscar**. O sistema carrega as parcelas e os dados do processamento; clique em **Processar** para restaurar os vencimentos originais.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202022-03-03%2014-50-35.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Captura%20de%20tela%20de%202022-03-03%2014-50-35.png)
`,
};