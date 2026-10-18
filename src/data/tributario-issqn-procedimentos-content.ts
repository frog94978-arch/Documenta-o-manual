export const issqnProcedimentosContent: Record<string, string> = {
  "Paralisação de Inscrição": `
Permite paralisar uma inscrição. Durante a vigência da paralisação, não são gerados cálculos de Alvará, Vistorias, ISSQN Fixo ou Variável.

~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Paralisação de Inscrição
~~~

## Inclusão

- **Inscrição:** inscrição a paralisar.
- **Motivo Paralisação:** motivo cadastrado para a paralisação.
- **Data Início / Data Final:** período da paralisação.
- **Observação:** informações sobre o lançamento.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_e3ceb9e42a14ce6c.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_e3ceb9e42a14ce6c.png)

É possível consultar a situação da inscrição pelo link Ocorrências na Consulta Cadastro Municipal do módulo ISSQN.

## Alteração e exclusão

Selecione a paralisação na lista. A tela apresenta os dados para alteração ou exclusão.
`,
  "Cálculo Individual ISSQN": `
Permite calcular taxas de Alvará e/ou ISSQN Fixo e Variável para uma nova inscrição, desde que a empresa não esteja cadastrada como MEI.

~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Cálculo Individual ISSQN
~~~

Informe a inscrição. A tela depende do parâmetro Fiscal **Calcula Vistorias para Anos Anteriores**. Com Sim, informe o ano inicial e final; no ano de início cadastral, Alvará e ISSQN são proporcionais à data inicial das atividades e, nos anos seguintes, calcula-se somente ISSQN. Com Não, o cálculo é somente para o exercício atual.

### Cálculo de Alvará

- **Tipo de Cálculo:** Somente Alvará, Somente ISSQN ou Todos.
- **Número de Parcelas:** quantidade de parcelas, limitada pelos parâmetros do módulo. A primeira vence conforme a tabela de vencimentos e as demais a cada 30 dias.
- **Ano Cálculo:** exercício a calcular.

### Atividades

Marque as atividades cadastradas para a inscrição que participarão do cálculo.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_2baacce0645b2a3f.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_2baacce0645b2a3f.png)

Para calcular exercícios anteriores, configure vencimentos, valores de referência/inflatores, vínculo entre tipos de cálculo e os vencimentos de cada exercício.
`,
  "Controle de Alteração Cadastral": `
~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Controle de Alteração Cadastral
~~~

Rotina para registrar e consultar alterações cadastrais de inscrições.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_20c9169ada9a6b35.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_20c9169ada9a6b35.png)
`,
  "Cálculo Geral ISSQN": `
Executa o cálculo geral de ISS. Para ISSQN Fixo, permite definir data e percentual de desconto da cota única; para ISSQN Variável, informa-se o exercício.

~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Cálculo Geral ISSQN
~~~

- **Tipo:** Fixo ou Variável.
- **Vencimento Única:** até três datas para pagamento da cota única.
- **Percentual:** desconto da cota única.
- **Exercício:** ano do cálculo.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_d3b58bf43afb91eb.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_d3b58bf43afb91eb.png)
`,
  "Configuração do Cálculo": `
~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Configuração do Cálculo
~~~

### Porte/Classe

Vincula a Classe e o Porte aos tipos de débito usados para taxas de Alvará de Localização, Alvará Sanitário, Vistoria de Localização e Vistoria Sanitária.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_a592113f4b26e474.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_a592113f4b26e474.png)
`,
  "ISSQN Estimado / Fixado": `
Permite cadastrar valores mensais estimados ou fixados de ISS Variável. O valor, a data e o inflator de cada parcela são usados na correção dos exercícios seguintes.

~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > ISSQN Estimado / Fixado
~~~

## Inclusão: aba Dados

- **Código:** gerado automaticamente.
- **Inscrição:** inscrição vinculada ao regime.
- **Tipo de Cálculo:** tipo de cálculo usado.
- **Processo / Notificação:** opcionais.
- **Tipo de Regime:** Estimado usa valor de empresa semelhante; Fixado é definido pelo fiscal com base em informações da empresa.
- **Hora / Data:** preenchidas pelo sistema.
- **Observação:** opcional.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_b2490df13ab8ceba45.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_b2490df13ab8ceba45.png)

### Aba Valores

Informe Parcela (1 a 12), Mês, Ano, Data Vencimento, Valor estimado e Inflator.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_b2490df13ab8ceba.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_b2490df13ab8ceba.png)

## Alteração

Permite alterar parcelas. Ao recalcular, apenas parcelas em aberto são atualizadas.

## Exclusão

Permite excluir parcelas não pagas ou o regime inteiro se nenhuma parcela tiver sido paga.
`,
  "ISSQN Complementar": `
Permite lançar ISSQN para competências cujo recolhimento já foi realizado, por exemplo, quando uma nota fiscal de uma competência paga ficou sem registro. O complementar pode ser calculado mesmo após o pagamento da parcela do ISSQN Variável.

~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > ISSQN Complementar
~~~

## Inclusão

Informe Inscrição ou CGM e pesquise.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4d9d1d07216e5a9a47.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4d9d1d07216e5a9a47.png)

### Dados da Inscrição

Inscrição Municipal, CGM e Nome/Razão Social são preenchidos conforme a origem pesquisada.

### Dados para o cálculo

Selecione Ano, Mês e alíquota do ISSQN Complementar. Se a alíquota não estiver listada, informe-a no campo correspondente.

### Notas Fiscais

Informe Número da Nota e Valor da Nota e clique em **Lançar**. Podem ser incluídas várias notas.

### Valores

Valor Bruto é calculado pela soma das notas; Valor corresponde ao imposto. Informe o Histórico do recibo e clique em **Incluir**. Se já houver ISSQN Variável em aberto para a competência, escolha Substituir, Incluir ou Voltar.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_7949cdb1b217a537.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_7949cdb1b217a537.png)

## Alteração e exclusão

É possível alterar os valores e recalcular. Só é possível excluir se nenhuma parcela tiver sido paga.
`,
  "Cancela ISSQN Variável": `
Gera cancelamento de parcelas em aberto do ISSQN Variável e permite excluir o cancelamento para devolver os débitos à CGF.

~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Cancela ISSQN Variável
~~~

## Inclusão

Informe ou pesquise a **Inscrição**, marque os lançamentos a cancelar e preencha **Observações**.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_6a9931d1bc5d7875.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_6a9931d1bc5d7875.png)

## Exclusão

Permite excluir o cancelamento; os débitos retornam à CGF.
`,
  "Baixa Inscrição de Alvará": `
Permite baixar uma ou todas as atividades de uma inscrição. Se apenas algumas atividades forem baixadas, a inscrição continua ativa, mas essas atividades não são consideradas nos cálculos. Quando todas forem baixadas, a inscrição fica inativa, sem alteração cadastral, impressão de Alvará ou participação em cálculos.

~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Baixa Inscrição de Alvará
~~~

Informe a Inscrição, Processo do Protocolo (opcional), Tipo de Baixa (Normal ou de Ofício), Data da Baixa e Observações (obrigatórias). Selecione as atividades em funcionamento que serão baixadas e clique em **Baixar**.

Se o parâmetro Numeração Certidão de Baixa não estiver configurado, o sistema solicita a configuração e não efetua a baixa.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_9c0eca71ec75650b.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_9c0eca71ec75650b.png)
`,
  "Excluir Baixa Inscrição de Alvará": `
Rotina para reativar uma inscrição baixada.

~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Excluir Baixa Inscrição de Alvará
~~~

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_dde3bcc2645debbe.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_dde3bcc2645debbe.png)
`,
  "Atualiza Classe / Atividade": `
Rotina para vincular Classes e Atividades compatíveis com o tipo de pessoa (Física ou Jurídica).

~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Atualiza Classe / Atividade
~~~

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4e87864eb6541f01.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4e87864eb6541f01.png)

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4e87864eb6541f012.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4e87864eb6541f012.png)
`,
  "Libera DAI": `
Libera uma Declaração Anual de ISS (DAI) para que o contribuinte possa alterar os dados pelo DBPref após fechar a declaração.

~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Libera DAI
~~~

Informe ou pesquise a **Inscrição** e a **Data** da liberação.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4e87864eb6541f01477.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4e87864eb6541f01477.png)
`,
  "Processamento Lista DBPref": `
Processa a vinculação de inscrições a escritórios contábeis solicitada pelo escritório no DBPref. O processamento grava no sistema o vínculo informado pela internet.

~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Processamento Lista DBPref
~~~

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4e87864eb654185pf7.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4e87864eb654185pf7.png)
`,
  "Empresas Optantes do Simples": `
Permite cadastrar e baixar inscrições optantes pelo Simples Nacional.

~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Empresas Optantes do Simples
~~~

### Inclusão da Empresa

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_5eecb3a5200f821e.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_5eecb3a5200f821e.png)

### Baixa do Simples

Permite baixar a empresa; empresas baixadas deixam de receber arquivos de baixa do Simples.

#### Inclusão da Baixa

- **Código da Baixa:** gerado automaticamente.
- **Código do Simples:** código da inscrição optante ou pesquisa pelo link.
- **Data da Baixa:** data em que a baixa foi realizada.
- **Motivo da Baixa:** De Ofício ou por Solicitação.
- **Observações:** opcionais.

Clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_52a7023e222e09e9.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_52a7023e222e09e9.png)

#### Alteração da Baixa

Selecione o registro para alterar Data, Motivo da Baixa ou Observações.

### Baixa Geral

Informe Data, Motivo e Observações, selecione as inscrições e clique em **Processar**.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_c967f70a2feaa426.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_c967f70a2feaa426.png)
`,
  "Processamento Arquivo Simples(DAF607)": `
~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Processamento Arquivo Simples
~~~

## Importação de Arquivo de Retorno

Importa o arquivo do Simples Nacional disponibilizado pela Receita Federal. Não renomeie o arquivo; ele deve seguir o padrão 02-xxxx-aaaammdd (código TOM do município e data). O sistema valida o nome para evitar importação duplicada.

Clique em **Arquivo**, selecione o arquivo e importe.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_1fc2a9ff0896df8a8.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_1fc2a9ff0896df8a8.png)

## Processamento do Arquivo de Retorno (Novo)

Selecione o arquivo e informe a data limite de vencimento dos débitos a considerar. Clique em **Processar**. Selecione o CNAE para listar registros aptos e não aptos. Registros podem ter seu status alterado manualmente; para alterar de Apto para Não Apto, informe obrigatoriamente o motivo. Clique em **Processar as Alterações** para gravar e em **Gerar** para baixar o arquivo dos não aptos e o relatório de inconsistências.

O sistema verifica problemas como CNPJ ou inscrição não encontrados, CGM sem CNPJ, falta de cálculo e parcelas pagas, canceladas ou importadas para dívida. Avisos podem ser ignorados quando tratados pelo sistema; erros exigem correção.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_1fc2a9ff0896df8a.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_1fc2a9ff0896df8a.png)

## Reemissão de Inconsistência do Simples

Selecione o arquivo e o tipo de inconsistência e clique em **Emitir** para reimprimir o relatório.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_8e095aaed6b18d36.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_8e095aaed6b18d36.png)

## Alterar Arquivo

Use a rotina de Processamento de Arquivo (Novo) para corrigir inconsistências.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_8782a724f49ad7da.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_8782a724f49ad7da.png)
`,
  "Notas Avulsas": `
Rotina para cadastrar Nota Avulsa para empresas que recolhem impostos sobre serviços prestados no município. Depois de emitida, a Nota Avulsa não pode ser alterada.

~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Notas Avulsas
~~~

## Inclusão de Notas Avulsas

### Aba Nota

Selecione o CGM da empresa prestadora e informe a observação da nota.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_845bd171a1415021.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_845bd171a1415021.png)

### Aba Tomador

Selecione o tomador do serviço.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_1144d9a26872f751.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_1144d9a26872f751.png)

### Aba Serviço

Informe quantidade, discriminação, valor unitário, deduções, base de cálculo, alíquota e valor do ISS. O valor total é quantidade vezes valor unitário. Se o imposto ficar abaixo do mínimo dos parâmetros, **Emitir Recibo** ficará desabilitado; se atingir o mínimo, emita e pague o recibo antes de emitir a nota.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_7949cdb1b217a537.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_7949cdb1b217a537.png)

## Cancelamento de Nota Fiscal

Permite cancelar uma Nota Fiscal e registrar o motivo.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_11d193488763f648.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_11d193488763f648.png)

## Reemissão do Recibo

Permite reemitir o recibo da Nota Avulsa.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_91e7fff3ee2e96d8.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_91e7fff3ee2e96d8.png)

## Configuração da Via de Nota

Permite incluir, alterar e excluir modelos das vias da Nota Avulsa.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_9a3de6cdf057b915.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_9a3de6cdf057b915.png)

## Emissão/Reemissão Nota Avulsa

Permite emitir ou reemitir a Nota Avulsa.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4769abcff648e45b.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4769abcff648e45b.png)
`,
  "Movimentação de Alvará": `
## Liberação de Alvará

Libera o Alvará para uma inscrição mobiliária.

~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Movimentação de Alvará > Liberação de Alvará
~~~

Selecione uma inscrição sem Alvará ativo, informe Tipo de Alvará, validade, processo e observação. A data da movimentação é preenchida automaticamente. Clique em **Liberar Alvará**.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Alvara_online_processo_eletronico_manual_usuario_Interno_html_e693effcc3c4a84f.png)](https://e-cidade.wiki.br/tributario/issqn/files/Alvara_online_processo_eletronico_manual_usuario_Interno_html_e693effcc3c4a84f.png)

## Renovação de Alvará

Rotina para renovar o Alvará da inscrição.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_f25b0b9024032d7a.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_f25b0b9024032d7a.png)

## Transformação

### Geral

Filtre por tipo de Alvará e validade. Selecione os registros e o novo tipo para transformar vários Alvarás.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_7e563d8b44360df8.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_7e563d8b44360df8.png)

### Individual

Transforme um Alvará por vez, por exemplo, de permanente para provisório.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_fcfd3aa2cff9a330.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_fcfd3aa2cff9a330.png)

## Baixa de Alvará

Permite baixar Alvarás.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_69a3aafbe00f490.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_69a3aafbe00f490.png)

## Cancelar Última Movimentação de Alvará

Permite cancelar a última movimentação do Alvará.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_886716674be90c0f.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_886716674be90c0f.png)
`,
  MEI: `
~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > MEI
~~~

## Importação de Dados

Importe os arquivos de cadastro de MEIs obtidos no site da Receita Federal.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_5a5e3fa8d601bd5.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_5a5e3fa8d601bd5.png)

## Processamento

Os arquivos da Receita são mensais; arquivos do mesmo mês pertencem à mesma competência. Antes de processar, preencha Data Implantação do MEI nos Parâmetros do ISSQN. Selecione a competência e clique em **Pesquisar**.

Os registros inconsistentes aparecem em vermelho. Use o botão + para abrir o registro e MI para consultar dados da empresa, responsável e atividades. Para corrigir, clique no indicador de inconsistência, ajuste os dados e selecione **Processar as Alterações**. Registros consistentes ficam brancos. Para processar somente um registro, marque P e clique em **Processar**; alterações não processadas são perdidas ao sair.

Eventos tratados: 101 inclusão de primeiro estabelecimento; 203 exclusão de título; 209 mudança de endereço entre municípios; 211 mudança dentro do município; 220 alteração do nome empresarial; 221 alteração do nome fantasia; 232 alteração do contabilista/escritório; 244 alteração de atividades; 247 alteração do capital social; 517 ou 570 baixa; 912 indeferimento sem ação cadastral.

Após processar, o sistema confirma “Arquivos Processados com Sucesso!”.

### Competência sem Movimento

Cadastre competências sem arquivo para manter a sequência mensal.

#### Inclusão

Informe **Mês**, **Ano** e **Motivo**; clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_acb6e354af0c132e.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_acb6e354af0c132e.png)

#### Cancelamento

Selecione a competência sem movimento e clique em **Cancelar**.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_210a349464c98a8d.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_210a349464c98a8d.png)
`,
  Parâmetros: `
~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Parâmetros
~~~

## Geral

### Parâmetros do Cálculo

Configure Receita, Tipo de Débito, Alíquota Padrão, Código do Vencimento, Histórico de Cálculo, limite de parcelas do Alvará e variável usada no cálculo (Área ou Quantidade de Funcionários).

### Parâmetro do Alvará

- **Integração com Sanitário:** Nenhum, Integração por Porte ou por Classe.
- **Permissão para alterar alvará com CNPJ:** sem controle de permissão ou restrito a usuários autorizados.
- **Alvará Permanente / Alvará Provisório:** tipos usados na inclusão automática.
- **Permite baixa do alvará com dívida:** Sim permite baixar inscrições com débitos.

### Parâmetros de Impressão de Alvará

Configure impressão de código de atividade, observações das atividades, datas, observações ISSQN e modelo do Alvará (A4, A5, pré-impresso, fontes reduzidas, CNAE ou frente/verso). Também é possível selecionar Documento Template OpenOffice.

### Nota Fiscal Avulsa

Configure se pessoa jurídica pode emitir Nota Avulsa, número de vias, valor mínimo, número da última nota e prazo de validade do recibo.

### Certidão de Baixa

Configure a numeração e o bloqueio por débito (Nunca bloqueia, Avisa sem bloquear ou Avisa e bloqueia), além dos templates para Baixa Normal e Baixa Oficial.

### Outros Dados

Informe a Data da Implantação do MEI para habilitar importação e processamento. Também é possível selecionar Template BIC Veículos, do mesmo tipo usado para Alvará.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_daeb2405c8e1ef12.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_daeb2405c8e1ef12.png)

## Permite Impressão Alvará

Libera a permissão de menu necessária para emitir Alvará pela Consulta Cadastro Municipal.

## Processo Eletrônico

Permite cadastrar os tipos de Processos de Ouvidoria usados no Processo Eletrônico e/ou Alvará Online e definir o tipo de Alvará gerado para inscrições incluídas pelo Alvará Online.
`,
  "Simples Nacional": `
Permite importar arquivos de optantes do Simples Nacional da Receita Federal, validar as empresas aptas e gerar o arquivo de empresas não aptas para envio à Receita.

~~~
DB:TRIBUTÁRIO > ISSQN > Procedimentos > Simples Nacional
~~~

## Importar Arquivo

Selecione o arquivo de optantes da Receita e clique em **Importar**. Não renomeie: use o padrão 02-xxxx-aaaammdd, com código TOM do município e data. O sistema valida o nome para evitar reimportação duplicada.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_8989b487a6150fd7.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_8989b487a6150fd7.png)

## Processar Arquivo

Selecione o arquivo e informe a Data Limite de Vencimento dos débitos para validação automática; clique em **Processar**. Revise os registros por CNAE e ajuste manualmente o status Apto/Não Apto. Para alterar para Não Apto, informe obrigatoriamente a observação. Clique em **Gerar** para baixar o arquivo de não aptos e o relatório de inconsistências.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_8989b487a6150fd77.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_8989b487a6150fd77.png)

## Reprocessar Arquivo

Selecione o arquivo já gerado, informe nova Data Limite de Vencimento e reprocese.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_48c0bdb510671c43.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_48c0bdb510671c43.png)
`,
};