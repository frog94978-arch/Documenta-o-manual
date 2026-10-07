export const comprasRelatorioContent: Record<string, string> = {
  "Licitação - Relatório Licitações": `
\`\`\`
DB:PATRIMONIAL > Licitações > Relatórios > Licitação
\`\`\`

Esse relatório permite a conferência de dados da licitação valor adjudicado e empresa vencedora.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image14.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image14.png)

Ele permite buscas pelos filtros:

- **Modalidade:** filtrar licitações pela modalidade;
- **Numeração:** filtrar pela numeração da licitação;
- **Licitação:** filtrar pelo código sequencial da licitação;
- **Período de:** filtrar licitações dentro de um período determinado;
- **Listar itens:** informar se sim ou não permite que liste todos os itens da licitação;
- **Listar movimentos:** informar se sim ou não permite que liste as movimentações da licitação. Ex: julgada, em andamento, etc;
- **Listar cotações:** informar se sim ou não permite que liste as cotações da licitação;
- **Sequencial:** permite buscar licitações pela situação. Ex: em andamento, julgada, revogada,etc.;
- **Opção de seleção:** filtrar pelos selecionados ou menos os selecionados.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image56.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image56.png)
`,
  "Relatório Resumido da Licitação - Relatório Licitações": `
Este relatório traz informações resumidas da licitação como participantes, vencedores, valores vencedores, origem do recursos julgado, além das informações alimentadas na inclusão da licitação como edital, data da abertura e objeto.

\`\`\`
DB:PATRIMONIAL > Licitações > Relatórios > Relatório Resumido da Licitação
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image79.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image79.png)

Permite buscar pelos filtros:

- **Modalidade:** filtrar licitações pela modalidade;
- **Numeração:** filtrar pela numeração da licitação;
- **Licitação:** filtrar pelo código sequencial da licitação;
- **Período de:** filtrar licitações dentro de um período determinado;
- **Sequencial:** permite buscar licitações pela situação. Ex: em andamento, julgada, revogada,etc.;
- **Opção de seleção:** filtrar pelos selecionados ou menos os selecionados.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image90.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image90.png)
`,
  "Mapa das Propostas - Relatório Licitações": `
Esse relatório traz as informações de propostas apresentadas na licitação.

\`\`\`
DB:PATRIMONIAL > Licitações > Relatórios > Mapa das Propostas
\`\`\`

Ele apresenta 2 modelos.

- **Modelo 1:** traz um relatório sintético.
[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image112.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image112.png)

- **Modelo 2:** traz um relatório mais analítico.
[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image105.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image105.png)

Permite filtrar por:

- **Licitação:** filtrar pelo código sequencial da licitação;
- **Modelo:** modelo 1 ou 2 como demonstrado acima;
- **Imprimir valor unitário:** se sim ou não trazer o valor unitário dos itens;
- **Imprimir valor total:** se sim ou não trazer o valor total dos itens;
- **Imprimir justificativa de desclassificação:** se sim ou não trazer justificativa descrita na tela de desclassificação;
- **Imprimir justificativa de troca de fornecedor:** se sim ou não trazer justificativa descrita na tela de troca de fornecedor;
- **Imprimir justificativa de lote/itens anulados:** se sim ou não trazer justificativa descrita no cancelamento de itens.
`,
  "Gera Lista de Itens em TXT - Relatório Licitações": `
\`\`\`
DB:PATRIMONIAL > Licitações > Relatórios > Gera Lista de Itens em TXT
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image23.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image23.png)

Permite a impressão em csv(ou xls) de relatório com a listagem dos itens e valores licitados.

Os filtros de busca são:

- **Licitação:** filtrar pelo código sequencial da licitação;
- **Separador de colunas:** Escolher qual símbolo delimitar a separação das colunas;
- **Delimitador de campos:** se aspas duplas ou simples;
- **Layout:** Escolher entre layout 1 ( traz o sequencial dos itens) ou layout 2(não traz sequencial dos itens).
`,
  "Homologação de Processo - Relatório Licitações": `
Este relatório traz as informações de homologação do processo como itens, vencedores,portaria e data de homologação. Buscando pelo número da licitação clicando no ícone.

\`\`\`
DB:PATRIMONIAL > Licitações > Relatórios > Homologação de Processo
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image34.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image34.png)

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image110.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image110.png)
`,
  "Adjudicação de Processo - Relatório Licitações": `
Este relatório traz as informações de adjudicação do processo licitatório como ganhador, valor licitado, separando os itens de acordo com os fornecedores vencedores.

\`\`\`
DB:PATRIMONIAL > Licitações > Relatórios > Adjudicação de Processo
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image73.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image73.png)

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image33.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image33.png)
`,
  "Edital (Download) - Relatório Licitações": `


\`\`\`
DB:PATRIMONIAL > Licitações > Relatórios > Edital (Download)
\`\`\`

Esse relatório permite a emissão do edital da licitação caso esteja previamente cadastrado o modelo na rotina:

\`\`\`
DB:CONFIGURAÇÃO > Configuração > Procedimentos > Manutenção de Documentos/Template > Inclusão
\`\`\`

E posteriormente configurado na rotina:

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Configuração dos Editais
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image74.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image74.png)

Permite filtrar por:

- **Licitação:** busca pelo ícone pelo sequencial, numeração ou ano;
- **Numeração:** busca direta pela numeração;
- **Modalidade:** busca pela modalidade como pregão, convite, etc;
- **Período de:** busca de editais dentro de determinado período preenchido.
`,
  "Situações da Licitação - Relatório Licitações": `


\`\`\`
DB:PATRIMONIAL > Licitações > Relatórios > Situações da Licitação
\`\`\`

Permite verificar situações de licitações.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image13.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image13.png)

Podendo filtrar por:

- **Licitação:** buscar por numeração de licitação específica;
- **Período de:** licitações dentro de período determinado;
- **Situações da licitação:** buscar licitações que estão em determinada situação no sistema. Ex.: julgada, em andamento, etc;
- **Opções de seleção:** buscar somente pelos selecionados ou menos os selecionados.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image63.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image63.png)
`,
  "Licitações Liberadas na Web - Relatório Licitações": `


\`\`\`
DB:PATRIMONIAL > Licitações > Relatórios > Licitações Liberadas na Web
\`\`\`

Esse relatório demonstra as licitações com editais liberados no portal da prefeitura.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image109.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image109.png)
`,
  "Emite Autorização de empenho - Relatório Licitações": `


\`\`\`
DB:PATRIMONIAL > Licitações > Relatórios > Emite Autorização de Empenho
\`\`\`

Permite a emissão de autorizações de empenho geradas por processos de compras.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image104.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image104.png)

Pode-se filtrar por:

- **Autorizações de:** buscar por intervalo de autorizações;
- **Período:** buscar dentro de determinado período;
- **Informações adicionais:** selecionar entre as opções mostrar autorização de processo de compras ou mostrar somente autorização.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image28.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image28.png)
`,
  "Fornecedores Empatados e Cotações ME/EPP - Relatório Licitações": `


\`\`\`
DB: PATRIMONIAL > Licitações > Relatórios > Fornecedores Empatados e Cotações ME/EPP
\`\`\`

Permite verificar fornecedores com lances empatados e as cotações de ME/EPP, buscando pelo número da licitação.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image21.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image21.png)

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image40.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image40.png)
`,
  "Conferências": `
\`\`\`
DB:PATRIMONIAL > Contratos > Relatórios > Conferências > Acordos a Vencer
\`\`\`

Permite filtrar por acordo, por departamento por grupo de acordo ou contratado os acordos a vencer dentro de um período. Pode ser ordenado por data de vigência ou contratado.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image11.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image11.png)

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image58.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image58.png)

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image35.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image35.png)
`,
  "Reimpressão Acordo": `
\`\`\`
DB:PATRIMONIAL > Contratos > Relatórios > Reimpressão Acordo
\`\`\`

Permite emitir o acordo desde que haja documento cadastrado. As informações são de acordo com o template do documento cadastrado.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image26.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image26.png)
`,
  "Extrato de Contrato": `
\`\`\`
DB:PATRIMONIAL > Contratos > Relatórios > Extrato de Contrato
\`\`\`

Permite gerar relatório de informações buscando por acordo específico. As informações do relatório são de acordo com modelo cadastrado.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image20.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image20.png)
`,
  "Contratos sem Programação de Competência": `
\`\`\`
DB:PATRIMONIAL > Contratos > Relatórios > Contratos sem Programação de Competência
\`\`\`

Permite buscar pelos contratos vigentes, todos os contratos ou por determinado período, os acordos do departamento que estão sem competência programada, selecionando o filtro e clicando em imprimir.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image34.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image34.png)

O relatório traz o número dos contratos, a vigência e o valor cadastrado.
`,
  "Movimentações": `
# Movimentações de Acordos

\`\`\`
DB:PATRIMONIAL > Contratos > Relatórios > Movimentações > Acordos
\`\`\`

Permite que se busque acordos em um departamento, com os filtros:

- **Acordo:** Busca diretamente pelo número do acordo desejado;
- **Comissão:** Busca acordos vinculados a comissão selecionada;
- **Categoria:** Busca acordos com a categoria selecionada;
- **Classificação:** Busca acordos com a classificação selecionada;
- **Data de início e fim:** busca dentro do departamento selecionado, todos os acordos criados dentro desse período descrito;
- **Situação:** Busca acordos com a situação selecionada;
- **Origem:** Busca acordos com a origem selecionada;
- **Tipo de acordo:** Busca acordos com o tipo selecionado.

Também permite configurar se sim ou não: Listar itens, listar movimentação e listar empenho. E ordenar por data de criação, contratado, número do contrato ou vigência.

Além dos filtros da primeira aba, temos a aba vínculo de acordos, grupo de acordo e contratado, que se selecionados pelo ícone e lançados clicando em lançar, também filtram os acordos com as informações solicitadas.

O relatório traz listada as informações de Código, Acordo, Tipo do Acordo, Processo, Data da Assinatura, Vigência, Situação Atual, Classificação, Contratado, Grupo de Acordo, Período de Vigência, Número, Categoria, Departamento, Origem, Resumo do Objeto, Comissão, Membros.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image59.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image59.png)

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image30.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image30.png)

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image31.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image31.png)

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image54.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image54.png)
`,
  "Movimentações - Página 2": `
# Movimentações Financeira

\`\`\`
DB:PATRIMONIAL > Contratos > Relatórios > Movimentações > Movimentação Financeira
\`\`\`

Permite que se busque acordos em todas as instituições, com os filtros:

- **Departamento responsável:** Busca pelo departamento selecionado os acordos existentes;
- **Empenho:** Busca acordos vinculados aos empenhos dentro do intervalo selecionados;
- **Categoria:** Busca acordos na categoria selecionada;
- **Código do acordo:** Busca por acordo já determinados;
- **Vigência do contrato:** Busca acordos dentro do período de vigência descrito;
- **Origem:** Busca acordos pela origem selecionada.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image62.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image62.png)

O relatório traz listada as informações:

- Movimentação contrato - número do contrato, valor, executado, vigência, empenhado, a empenhar.
- Movimentação do empenho vinculado ao acordo - empenho, emissão, empenhado, anulado, liquidado, pago.
- Saldo a pagar desses empenhos vinculados - liquidado, não liquidado e saldo geral.
`,
  "Abastecimento - Relatório Veículos": `
# Abastecimento

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Movimentações > Abastecimento
\`\`\`

Este relatório traz a lista dos abastecimentos que cada veículo fez, com as datas, consumos, quilometragens, e demais informações.

A figura 35 traz a tela de filtros para a emissão deste relatório.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image19.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image19.png)

Período: Este campo possibilita ao usuário emitir um relatório de abastecimento limitado a um determinado período de tempo, clicando para tanto nos calendários disponiblizados pelos campos “D”. Este campo é opcional, se o usuário não preenche-lo, o relatório trará toda a história de abastecimento do veículo indicado pelo usuário.

Código do veículo: Este link, uma vez clicado trará todos os veículos cadastrados no sistema, através dele será indicado o veículo do qual será emitido o relatório. Uma vez que este campo estiver preenchido, o usuário deverá clicar no botão “lançar”, o que fará com que o veículo seja lançado para dentro da caixa localizada logo abaixo, após feito isto, se o usuário não desejar especificar maiores detalhes,
poderá clicar no botão “processar”.

Dos filtros a seguir, apenas um deve ser escolhido se o usuário desejar especificar sua pesquisa.

Tipo: Este link traz todos os tipos de veículos cadastrados, possibilitando especificar o relatório a ser processado.

Marca: Este link traz todas as marcas cadastradas no sistema, possibilitando especificar o relatório a ser processado.

Modelo: Este link traz todos os modelos cadastrados no sistema, possibilitando especificar o relatório a ser processado.

Combustível: Este link traz todos os combustíveis cadastrados no sistema, possibilitando especificar o relatório a ser processado.

Feito isto logo a seguir se assim o desejar já será possível processar o relatório clicando no botão “Processar”.

Quebra por página: Este campo permite ao usuário escolher como se dará a quebra de página, se esta será por modelo, marca, tipo ou combustível

O relatório é processado clicando-se no botão “processar”. Como pode ser observado na figura 36.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image72.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image72.png)
`,
  "Manutenção - Relatório Veículos": `
# Manutenção

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Movimentações > Manutenção
\`\`\`
`,
  "Ficha de Controle de Manutenção - Relatório Veículos": `
# Ficha de Controle de Manutenção

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Movimentações > Ficha de Controle de Manutenção
\`\`\`
`,
  "Controle de Hodômetro - Relatório Veículos": `
# Controle de Hodômetro

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Movimentações >  Controle de Hodômetro
\`\`\`
`,
  "Ordem de Serviço - Relatório Veículos": `
# Ordem de Serviço

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Documentos > Ordem de Serviço
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image79.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image79.png)
`,
  "Veículos - Relatório Cadastrais": `
# Veículos

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Veículos
\`\`\`

Este relatório traz a lista dos veículos cadastrados no sistema.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image82.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image82.png)
`,
  "Motoristas - Relatório Cadastrais Veículos": `
# Motoristas

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Motoristas
\`\`\`

Este relatório traz a lista de motoristas cadastrados no sistema.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image117.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image117.png)
`,
  "Oficinas - Relatório Cadastrais Veículos": `
# Oficinas

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Oficinas
\`\`\`

Este relatório traz a lista das oficinas cadastradas no sistema.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image107.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image107.png)
`,
  "Postos - Relatório Cadastrais Veículos": `
# Postos

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Postos
\`\`\`

Este relatório traz a lista dos postos cadastrados no sistema.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image116.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image116.png)
`,
  "Modelos - Relatório Cadastrais Veículos": `
# Modelos

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Modelos
\`\`\`

Este relatório traz a lista dos modelos cadastrados no sistema.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image30.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image30.png)
`,
  "Marcas - Relatório Cadastrais Veículos": `
# Marcas

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Marcas
\`\`\`

Este relatório traz a lista das marcas cadastradas no sistema.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image45.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image45.png)
`,
  "Categorias - Relatório Cadastrais Veículos": `
# Categorias

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Categorias
\`\`\`

Este relatório traz a relação das categorias cadastradas no sistema.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image44.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image44.png)
`,
  "Categoria CNH - Relatório Cadastrais Veículos": `
# Categoria CNH

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Categoria CNH
\`\`\`

Este relatório traz a relação das categorias de CNH cadastradas no sistema.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image24.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image24.png)
`,
  "Combustíveis - Relatório Cadastrais Veículos": `
# Combustíveis

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Combustíveis
\`\`\`

Este relatório traz a relação dos combustíveis cadastrados.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image81.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image81.png)
`,
  "Tipo de capacidade - Relatório Cadastrais Veículos": `
# Tipo de capacidade

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Tipo de capacidade
\`\`\`

Este relatório traz a lista dos tipos de capacidade cadastrados no sistema.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image98.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image98.png)
`,
  "Tipos de serviços - Relatório Cadastrais Veículos": `
# Tipos de serviços

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Tipos de serviços
\`\`\`

Este relatório traz a relação dos serviços de manutenção cadastrados no sistema aos quais os veículos da frota Municipal são submetidos.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image85.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image85.png)
`,
  "Tipos - Relatório Cadastrais Veículos": `
# Tipos

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Tipos
\`\`\`

Este relatório traz a relação dos tipos de veículos cadastrados no sistema.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image65.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image65.png)
`,
  "Procedências - Relatório Cadastrais Veículos": `
# Procedências

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Procedências
\`\`\`

Este relatório traz a lista das procedências dos veículos.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image64.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image64.png)
`,
  "Cores - Relatório Cadastrais Veículos": `
# Cores

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Cores
\`\`\`

Este relatório traz a lista das cores dos carros cadastrados no sistema.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image49.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image49.png)
`,
  "Potências - Relatório Cadastrais Veículos": `
# Potências

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Potências
\`\`\`

Este relatório traz a relação das potências cadastradas no sistema.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image58.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image58.png)
`,
  "Situação de condutores - Relatório Cadastrais Veículos": `
# Situação de condutores

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Situação de condutores
\`\`\`

Este relatório traz a lista das possibilidades de situação dos motorista em que os motoristas podem ser classificados.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image48.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image48.png)
`,
  "Central de veículos - Relatório Cadastrais Veículos": `
# Central de veículos

\`\`\`
DB:PATRIMONIAL > Veículos > Relatórios > Cadastrais > Central de veículos
\`\`\`

Este relatório informa ao usuário quais as centrais de veículos que a instituição dispõe, nele também é informado o código de cada veículo, bem como a placa, tipo de veículo, modelo, marca, ano de fabricação, renavam e também informa se o carro sofreu baixa ou não. Além disso, informa os motoristas com seus códigos, carteiras de habilitação, validade da carteira, e ainda se o motorista encontra-se ativo ou não.

A figura 37 traz os seguintes filtros: central, quebra por página.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image61.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image61.png)

Central: Este campo permite ao usuário escolher ou conhecer as centrais de veículos que deseja verificar. Esta consulta poderá ser feita estando o usuário logado em qualquer departamento.

Quebra por página: Este campo permitirá ao usuário no momento de imprimir o relatório, escolher se o relatório apresentará as informações de forma contínua ou se fará a quebra de página das informações por central.

O relatório poderá ser gerado clicando-se no botão Processar. Como podemos observar na figura 38 e 39.

Saída por Quebra por Página: Sim

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image69.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image69.png)

Saída por Quebra por Página: Não

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image118.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image118.png)
`,
  "Registro de preço": `
## Emite Estimativa

Através desta rotina é possível realizar a emissão da estimativa de quantidade de produtos solicitados pelo setor e/ou departamentos. Informando o número da solicitação estimativa ou um intervalo.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Registro de Preço > Emite Estimativa
\`\`\`

---

## Emite Abertura

Através desta rotina é possível realizar a emissão da abertura de registro de preço, informando o número da solicitação de abertura de registro de preço e clicando em gerar relatório.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Registro de Preço > Emite Abertura
\`\`\`

---

## Emite Compilação

Através desta rotina é possível realizar a emissão da compilação de registro de preço, com as respectivas quantidades compiladas de todas as estimativas lançadas no registro de preço. O relatório exibirá a quantidade mínima e quantidade máxima a ser adquirida de cada produto e/ou material.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Registro de Preço > Emite Compilação
\`\`\`

---

## Posição do Registro de Preço

Através desta rotina é possível a emissão do documento posição de registro de preço, este possui um compilado de informações a respeito do registro. Informações como: número da solicitação, código do item, descrição do item, a quantidade mínima e quantidade máxima a ser adquirida de cada produto e/ou material, valor unitário de cada item, quantidade total solicitada, quantidade empenhada e quantidade que falta empenhar.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Registro de Preço > Posição do Registro de Preço
\`\`\`

### Filtros:

- **Criação do Registro**: data ou período referente a inclusão do registro de preço.
- **Validade do Registro**: validade do registro de preço.
- **Compilação**: número da compilação do registro de preço.
- **Quebra por departamento**: permite quebrar o relatório por departamento organizando as informações respectivamente dessa forma.
- **Código do Material**: selecionar um ou mais materiais se desejar saber informações específicas de determinado item.

---

## Gerar Lista de Estimativas (CSV)

Esta rotina permite a geração de um arquivo CSV com um resumo das estimativas lançadas na abertura de registro de preço.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Registro de Preço > Gerar Lista de Estimativas (CSV)
\`\`\`

Neste caso, basta o usuário clicar em , selecionar uma abertura de registro de preço e logo após clicar em "Gerar Arquivo".

Após o e-cidade irá disponibilizar arquivo para download, basta clicar sobre o link para efetivar.

---

## Emissão de Atas

Através deste relatório é possível realizar a emissão de um relatório e visualizar as atas que estavam vigentes em um determinado período, e também as atas que estão abertas para iniciar o processo de solicitações de compras.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Registro de Preço > Emissão de Atas
\`\`\`

Os possíveis filtros que podem ser utilizados são listados na imagem abaixo:
`,
  "Gera Lista de Itens em TXT": `
## Gera Lista de Itens em TXT

Esta rotina permite a geração de um arquivo CSV com itens de determinada Solicitação de Compras.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Gera Lista de Itens em TXT
\`\`\`

Na tela de filtro é possível informar o número da solicitação de compras ou então clicar sobre ***"Número da Solicitação"*** e selecionar entre as listas ou aplicar filtros complementares à busca.

É possível determinar o separador de colunas, bem como definir o delimitador de campos entre ***"Aspas Duplas"*** e ***"Aspas Simples"***.

### Informações retornadas no arquivo:

- **CÓDIGO DO MATERIAL NA SOLICITAÇÃO**
- **POSIÇÃO DO MATERIAL NA SOLICITAÇÃO**
- **CÓDIGO DO MATERIAL**
- **DESCRIÇÃO**
- **QUANTIDADE**
- **UNIDADE**
- **VALOR UNITÁRIO (R$)**
- **VALOR TOTAL (R$)**
`,
  "Documentos": `
## Reemissão de Solicitação de Compras

Este relatório reemite as solicitações de compras incluídas no e-cidade.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Documentos > Reemissão de solicitação de compras
\`\`\`

---

## Emite Autorização de Empenho

Neste relatório é possível reemitir autorizações de empenho.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Documentos > Emite Autorização de Empenho
\`\`\`

### Filtros:

3 tipos de filtros poderão ser aplicados:

- **Autorizações**: o usuário poderá informar o número de uma única autorização ou um intervalo de autorizações;
- **Período**: seleciona um intervalo de tempo, mensurado por data, retornando todas as autorizações realizadas no período informado;
- **Informações adicionais:**
  - Mostrar autorização de processo de compras;
  - Mostrar somente autorização;

---

## Emite Ordem de Compra

Rotina que permite reemitir uma ou mais ordens de compra.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Documentos > Emite Ordem de Compra
\`\`\`

Nesta tela o usuário poderá informar o número da ordem de compra ou um intervalo se assim desejar, caso queira aplicar filtros adicionais como número do empenho, seq. empenho, nome/razão social ou até por data de emissão basta clicar em "Ordem de compra".

---

## Reemissão de Certificado

Realiza a reemissão do Certificado de Registro Cadastral (CRC) dos fornecedores da administração pública.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Documentos > Reemissão do Certificado
\`\`\`

Nesta tela o usuário poderá informar o código do certificado. Caso desconheça o código poderá clicar em Cod. Certificado para proceder com a pesquisa através de filtros adicionais como "Fornecedor" entre outros por intermedio do "Indique o Conteúdo".

O usuário poderá emitir certificados de fornecedores por um período determinado por data, assim como poderá filtrar se deseja ver impresso no certificado o Objeto Social e Grupos de Fornecimento, para isto basta deixar ambos como "SIM".

### Informações do Relatório:

Este relatório contém as seguintes informações:

- Identificação do fornecedor
- Objeto social da empresa
- Descrição dos documentos por ele apresentados, suas respectivas datas de validade e o tipo de material/serviço que o fornecedor oferece a administração.

---

## Reemissão de Orçamento de Processo de Compras

Permite reemitir o orçamento de processo de compras.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Documentos > Reemissão de orçamento de PC
\`\`\`

Na tela o usuário poderá selecionar entre o Código do Orçamento ou o número do Processo de Compras. Caso desconheça o código do orçamento ou o número do processo de compras, poderá pesquisar clicando sobre os links que caracterizam como azul sublinhado.

Após selecionar e clicar em Gerar relatório o e-cidade irá exibir opções para que possa efetivar a impressão do orçamento em branco, ou seja, sem os dados de fornecedor, bem como imprimir orçamentos específicos dos fornecedores listados.

---

## Reemissão do Orçamento da Solicitação

Permite reemitir o orçamento de uma solicitação de compras.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Documentos > Reemissão do orçamento da solicitação
\`\`\`

Na tela o usuário poderá selecionar entre o Código do Orçamento ou o número da Solicitação de Compras.

Caso desconheça o código do orçamento ou o número da solicitação de compras, poderá pesquisar clicando sobre os links que caracterizam como azul sublinhado.

Após selecionar e clicar em Gerar relatório o sistema irá exibir opções para que possa efetivar a impressão do orçamento em branco, ou seja, sem os dados de fornecedor, bem como imprimir orçamentos específicos dos fornecedores listados.

Para efetivar a impressão basta selecionar as caixas de seleção que desejar e clicar em Gerar Relatório.

---

## Reemissão de Processo de Compras

Através desta rotina é possível realizar a reemissão de processo de compras.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Documentos > Reemissão de Processo de Compras
\`\`\`

Na tela o usuário poderá aplicar filtros visando emitir um único processo de compras ou um intervalo de Processo de Compras, bem como poderá aplicar filtro com intervalo de datas, neste caso, o e-cidade irá emitir Processos de Compras entre as datas selecionadas.

Caso desconheça o código de processo de compras, o usuário poderá acessar filtros adicionais clicando em ***"Processos de Compra de"***.

---

## Emissão Aut. do Processo de Compras

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Documentos > Emissão Aut. do Processo de Compras
\`\`\`

Através dessa rotina o e-cidade permite realizar a emissão de uma Autorização do Processo de Compras através de um template.

Nessa tela o usuário poderá digitar o número do processo de compras ou então clicar sobre ***"Processos de Compra de"*** e aplicar filtros adicionais como: Processo de Compras, Número da Solicitação, Data Inicial e Data Final, entre outros acessíveis por intermedio do campo "Indiquei o Conteúdo".

---

## Emite Nota de Bloqueio

Através desta rotina é possível realizar a reemissão da nota de bloqueio realizada para uma solicitação de compras. Na tela é possível selecionar entre um intervalo de Solicitações de Compras ou apenas uma aplicando a mesma em ambos os campos, filtros adicionais podem ser acessados clicando em ***"Solicitações de:"***.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Documentos > Emite Nota de Bloqueio
\`\`\`

A efetivação do bloqueio se dá através da rotina:

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Manutenção de reserva de saldo > Solicitação
\`\`\`
`,
  "CGMs corretos - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > CGMs corretos
\`\`\`

Emite um relatório dos CGMs cujos duplos foram processados e estão corretos e os que foram identificados e não "juntados". Campos do cadastro.

- **Ordem:** Permite ordenar por Nome ou Numcgm.
- **Somente os Processados:** Todos, Somente processados ou Não processados.
- **Mostrar Log's:** Marcar para emitir os logs do sistema.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image114.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image114.png)

Modelo do relatório de CGM Correto.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image94.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image94.png)
`,
  "Relatório de Processos/CGM - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Relatório de Processos/CGM
\`\`\`

Nesta rotina é possível gerar um relatório resumido ou completo dos processos/CGM. No resumido emite um relatório sintético por CGM dos processos; já no completo emite um relatório analítico com todos os campos. Abaixo a descrição dos filtros possíveis para emissão.

- **CGM:** Preencher o código do CGM ou clicar no link para aplicar filtros adicionais.
- **Período:** Preencher com datas inicial e final do período de inclusão dos registros.
- **Tipo:** Permite selecionar o tipo, sendo possível selecionar Resumido ou Completo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image113.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image113.png)

Modelo do relatório de Processo/CGM.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image115.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image115.png)
`,
  "Variáveis - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Variáveis
\`\`\`

Ao clicar em *"Processar"* o e-cidade emite um relatório cadastral das variáveis do módulo Protocolo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image104.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image104.png)

Abaixo o modelo do relatório de Cadastro de Variáveis.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image95.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image95.png)
`,
  "Documentos - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Documentos
\`\`\`

Ao clicar em *"Processar"* o e-cidade emite um relatório cadastral dos documentos do módulo Protocolo, onde é possível ordenar por ordem alfabética e numérica.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image24.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image24.png)

Abaixo o modelo do relatório de Cadastro dos Documentos.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image5.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image5.png)
`,
  "Tipos de Processo - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Tipos de Processo
\`\`\`

Através deste relatório é possível identificar os tipos de processos cadastrados no e-cidade, permitindo ordenar por descrição/código, com/sem andamento ou por tipo de processo/departamento.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image78.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image78.png)

Abaixo o modelo do relatório de Tipos de Processo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image34.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image34.png)
`,
  "Documentos / Tipo de Processo - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Documentos / Tipo de Processo
\`\`\`

Relatório cadastral dos documentos por tipos de processo.

- **Tipo de processo:** Preencher o código do tipo de processo ou clicar no link para aplicar filtros adicionais.

Para excluir um tipo de processo incluído, basta efetuar dois cliques sobre o item.

- **Opção de Seleção:** Permite selecionar as opções *Somente Selecionados* ou *Menos Selecionados* os tipos de processo.
- **Ordem:** É possível ordenar de duas formas:
  - Código do tipo de processo
  - Nome do processo

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image107.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image107.png)

Abaixo o modelo do relatório de Documentos / Tipos de Processo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image72.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image72.png)
`,
  "Duplos no CGM - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Duplos no CGM
\`\`\`

Esse menu emite um relatório que compara os CGMs. O relatório faz uma comparação dos filtros identificados em todo o CGM que possuem os mesmos dados informados nos campos de filtros.

- **Filtro de Duplos:** Nome/Razão Social, Endereço, Número, Complemento, Bairro, Município e CNPJ/CPF.
- **Seleção:** Permite selecionar os zerados/brancos ou não.

Para emissão do relatório basta clicar em "Gerar relatório".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image100.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image100.png)
`,
  "Reimpressão da Capa do Processo - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Reimpressão da Capa do Processo
\`\`\`

Emite as capas dos processos de um determinado intervalo, emitindo todos os processos em sequência, independentemente dos departamentos em que estão em trâmite atualmente.

- **Processo Inicial:** Preencher com o número do processo/ano que considera o inicial.
- **Processo Final:** Preencher com o número do processo/ano que considera o final.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image43.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image43.png)

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image111.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image111.png)
`,
  "Reimpressão do Termo de Transferência - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Reimpressão do Termo de Transferência
\`\`\`

Esse relatório emite um termo de recebimento na transferência de processo entre os departamentos.

- **Transferência:** Preencher o código da Transferência ou clicar sobre uma das transferências listadas pelo departamento do usuário.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image102.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image102.png)

Modelo da guia de transferência.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image89.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image89.png)
`,
  "Processos - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Processos
\`\`\`

Emite um relatório geral dos andamentos e históricos dos processos. O relatório utiliza todos os filtros das guias abaixo.

***[ABA] Processo***

- **Data da emissão:** Preencher as datas iniciais e finais do período.
- **Tipo:** Somente os em andamento, somente os arquivados ou todos.
- **Ordem:** Processo, Tipo de Processo, Data/Hora, Usuário, Requerente, Departamento Inicial ou Departamento Atual.
- **Mostrar:** Requerente (emite o relatório da forma atual) ou Titular (retorna o titular de cada processo em vez do requerente).
- **Observação:** Permite selecionar Sim ou Não para a emissão do relatório com a descrição informada no campo observações.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image23.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image23.png)

***[ABA] CGM***

- **CGM:** Preencher o código do CGM ou clicar no link para pesquisar e lançar.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image82.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image82.png)

***[ABA] Departamento Inicial***

- **Departamento:** Preencher o código do Departamento ou clicar no link para pesquisar.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image79.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image79.png)

***[ABA] Tipo de Processo***

- **Tipo de Processo:** Preencher o código do Tipo de Processo ou clicar no link para pesquisar.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image80.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image80.png)

***[ABA] Departamento Atual***

- **Departamento:** Preencher o código do Departamento ou clicar no link para pesquisar.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image14.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image14.png)

Modelo do relatório de processo sem a descrição do campo observação.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image75.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image75.png)

Relatório de processo com a descrição do campo observação.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image51.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image51.png)
`,
  "Consistência de CPF/CNPJ - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Consistência de CPF/CNPJ
\`\`\`

Este relatório emite uma lista dos CGMs que estão com o campo CPF/CNPJ em branco, zerado e/ou com cadastro inválido.

- Descrição dos campos do cadastro.
- **Considerar em Branco:** Permite selecionar os em branco ou não.
- **Considerar Zerados:** Permite selecionar os zerados ou não.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image68.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image68.png)
`,
  "Etiquetas - Relatório Protocolo": `
## Manual

\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Etiquetas > Manual
\`\`\`

Descrição dos campos para emissão de etiquetas de forma manual.

- **Processo Inicial:** Preencher o código do processo inicial.
- **Processo Final:** Preencher o código do processo final.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image76.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image76.png)

Modelo do relatório de etiqueta manual.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image15.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image15.png)

## Processos do Sistema

\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Etiquetas > Processos do Sistema
\`\`\`

Descrição dos campos para gerar etiquetas com base em processos existentes no e-cidade. Ao clicar sobre os links é possível pesquisar através de filtros adicionais.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image4.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image4.png)

Modelo de relatório de etiquetas de processos no e-cidade.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image18.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image18.png)
`,
  "Processos por departamento - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Processos por departamento
\`\`\`

Esta rotina permite emitir o relatório referente a quantos processos existem em cada departamento/instituição no e-cidade. Na imagem abaixo está a descrição dos campos.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image55.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image55.png)

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image2.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image2.png)
`,
  "CGMs Incluídos/Alterados - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > CGMs Incluídos/Alterado
\`\`\`

Gera um relatório dos CGMs que foram incluídos ou alterados no e-cidade, mostrando os dados do registro atual e do anterior com os campos: Tipo da Operação, Data, Usuário, CGM, CPF/CNPJ, Nome, Endereço, Número, Complemento, Município, UF e CEP. O relatório identifica as alterações do Cadastro Geral do Município.

- **Código do Usuário:** Preencher com o código do usuário.
- **Períodos:** Preencher as datas iniciais e finais do período.
- **Tipos:** Todos, Inclusão ou Alteração.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image47.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image47.png)

Modelo do relatório de CGM Incluídos/Alterados.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image52.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image52.png)
`,
  "Tipo dos Processo com Receitas - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Tipo dos Processo com Receitas
\`\`\`

Esta rotina emite o relatório cadastral do tipo de processo/receita.

- Tipo de processo > Ordem
- Descrição
- Código

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image10.png)

Modelo do relatório cadastral de tipo dos processos com receita.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image32.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image32.png)
`,
  "Relatório de Andamento Padrão - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Relatório de Andamento Padrão
\`\`\`

Este relatório gera uma lista de todos os tipos de processo que possuem andamento padrão no e-cidade, com os dias de permanência em cada departamento para despacho. Para emissão do relatório o usuário deverá clicar no botão *"Visualizar"*.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image22.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image22.png)

Modelo do relatório de Andamento Padrão.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image48.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image48.png)
`,
  "Relatório Processos/Departamentos - Relatório Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Relatórios > Relatório Processos/Departamentos
\`\`\`

Este relatório gera os processos por departamentos, sendo possível aplicar filtros para emissão do mesmo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image63.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image63.png)

Abaixo os possíveis filtros e suas respectivas descrições:

**Seleção:**

- Processos iniciados no departamento
- Processos que estão no departamento (último andamento)
- Processos sem trâmite inicial
- Processos movimentados no departamento

**Ordem:**

- PROCESSO
- CGM

**Opções:**

- Com os Departamentos selecionados
- Sem os Departamentos selecionados

**Período:** Preencher as datas iniciais e finais do período.

**Departamento:** Preencher o código ou clicar no link; o e-cidade permite adicionar múltiplos departamentos.

Modelo do relatório dos Processos/Departamento.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image73.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image73.png)
`,
  "Reimpressão do Termo de Guarda - Relatório Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Reimpressão do Termo de Guarda
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image6.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image6.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image75.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image75.png)
`,
  "Reimpressão da Devolução Termo de Guarda - Relatório Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Reimpressão da Devolução Termo de Guarda
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image60.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image60.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image24.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image24.png)
`,
  "Legais - Relatório Patrimônio - Página 1": `
# Modelo XI - Arrolamento das Existências

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Legais > Modelo XI - Arrolamento das Existências
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image63.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image63.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image45.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image45.png)
`,
  "Legais - Relatório Patrimônio - Página 2": `
# Modelo XII - Dem. da Movimentação

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Legais > Modelo XII - Dem. da Movimentação
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image56.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image56.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image28.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image28.png)
`,
  "Legais - Relatório Patrimônio - Página 3": `
# Modelo XVII - Termo de Baixa Definitiva

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Legais > Modelo XVII - Termo de Baixa Definitiva
\`\`\`

Agora é possível prestar contas de bens baixados, de um determinado departamento, através deste novo relatório que atende a Deliberação 200. Para emitir o relatório basta informar o mês e ano desejado e, por fim, as considerações a serem impressas.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image84.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image84.png)
`,
  "Inventário - Relatório Patrimônio - Página 1": `
# Manutenção de Inventário

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Inventário > Manutenção de Inventário
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image27.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image27.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image10.png)
`,
  "Inventário - Relatório Patrimônio - Página 2": `
# Inventários

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Inventário > Inventários
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image9.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image9.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image20.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image20.png)
`,
  "Conferência - Relatório Patrimônio - Página 1": `
# Bens por departamento

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Conferência > Bens por departamento
\`\`\`

Este relatório exibe todos os bens cadastrados por departamento.

A tela possui vários filtros de seleção para impressão deste relatório:

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image98.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image98.png)

Observe os filtros deste relatório na figura 16.

Figura 16

- **Departamento:** código do departamento cujos bens patrimoniais serão listados. Se o departamento escolhido possuir divisões, um novo campo será aberto abaixo para escolher uma divisão específica ou todas as divisões.
- **Classificação:** código estrutural da classificação dos bens. Clique no link para escolher o código estrutural do bem para o relatório.
- **Características adicionais do bem:** representa o campo observações do cadastro de um bem individual ou global. Se definido como “SIM”, as observações serão apresentadas; se definido como “NÃO”, serão omitidas.
- **Imprimir valor de aquisição:** valor do bem contido em seu cadastro individual ou global. Se definido como “SIM”, os valores de cada bem serão apresentados; se definido como “NÃO”, serão omitidos.
- **Listar:** permite escolher Todos, Baixados ou Não baixados. “Todos” apresenta todos os bens do departamento, baixados ou não; “Baixados” apresenta somente os bens que sofreram baixa; “Não baixados” apresenta apenas os bens ativos.

Caso desconheça as informações de departamento e classificação, o usuário poderá pesquisá-las clicando nos links [departamento] e [classificação], respectivamente.

O relatório será processado clicando no botão “Processar”.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image96.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image96.png)
`,
  "Conferência - Relatório Patrimônio - Página 2": `
# Bens por Departamento (novo)

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Conferência > Bens por Departamento (novo)
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image92.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image92.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image86.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image86.png)
`,
  "Conferência - Relatório Patrimônio - Página 3": `
# Depreciações Processadas

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Conferência > Depreciações Processadas
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image78.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image78.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image52.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image52.png)
`,
  "Conferência - Relatório Patrimônio - Página 4": `
# Bens sem Depreciação

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Conferência > Bens sem Depreciação
\`\`\`
`,
  "Conferência - Relatório Patrimônio - Página 5": `
# Depreciações

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Conferência > Depreciações
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image88.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image88.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image64.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image64.png)
`,
  "Conferência - Relatório Patrimônio - Página 6": `
# Levantamento Patrimonial

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Conferência > Levantamento Patrimonial
\`\`\`

Nesta rotina é possível emitir o relatório do Levantamento Patrimonial realizado através da rotina Patrimônio > Procedimentos > Levantamento Patrimonial. Para emitir o relatório deverá ser selecionado o Departamento. Serão listados apenas os Departamentos que tiveram importação de Arquivo de Levantamento Patrimonial realizada. É possível também selecionar a situação para emissão do relatório. As situações disponíveis são: Todos, Não Encontrado no txt, Não cadastrado, Inconsistente, Consistente e Bem Baixado.

Tela para emissão do relatório:

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image97.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image97.png)

Tela para escolha do departamento:

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image7.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image7.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image103.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image103.png)
`,
  "Ficha de bens - Relatório Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Ficha de bens > Bens
\`\`\`

Este relatório exibe todos os dados relativos a um determinado bem patrimonial.

Nele observa-se o departamento onde o bem se encontra lotado, sua classificação, a data de sua aquisição, o número de sua placa identificadora e sua situação atual.

Para emiti-lo, o usuário deve informar o código do bem e se deseja ver impresso o campo observação do cadastro do bem patrimonial:

- **Código do bem**
- **Características adicionais do bem**

Caso desconheça o código do bem, poderá pesquisá-lo clicando no link [código do bem].

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image85.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image85.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image13.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image13.png)
`,
  "Ficha de bens - Página 2 - Relatório Patrimônio": `
# Histórico dos Bens

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Ficha de bens > Histórico dos bens
\`\`\`

Este relatório apresenta o histórico de um bem patrimonial cadastrado, trazendo informações sobre a data de inclusão, seu departamento de origem, seu departamento destino, a descrição da situação do bem, entre outras.

Para emiti-lo, o usuário deve informar o código do bem e se deseja imprimir o campo observação do cadastro do bem patrimonial:

- **Código do bem**
- **Características adicionais do bem**

Caso desconheça o código do bem, poderá pesquisá-lo clicando no link [código do bem].

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image80.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image80.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image54.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image54.png)
`,
  "Remite ficha de transferência - Relatório Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Reemite ficha de transferência
\`\`\`

Este relatório reemite a ficha de transferência entre bens patrimoniais. Cumpre observar que esta ficha será gerada quando da confirmação de uma transferência interna entre departamentos.

Na tela, o usuário deve informar:

- **Transferência:** código atribuído pelo sistema a uma transferência de bens patrimoniais.

Caso desconheça o número da transferência, pode pesquisá-lo clicando no link [transferência].

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image102.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image102.png)
`,
  "Baixa de bens - Relatório Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Baixa de bens
\`\`\`

Este relatório apresenta o histórico de baixas de bens patrimoniais efetivadas pela administração pública.

Na tela o usuário deverá informar:

- **Data da baixa:** período no qual deseja pesquisar as baixas.

O relatório apresentará a data da baixa, o código do material, a descrição do bem, o código e a descrição da classificação, a definição do bem, a descrição do motivo da baixa e o departamento que a promoveu.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image22.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image22.png)
`,
  "Apólices - Relatório Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Apólices
\`\`\`

Este relatório apresenta dados relativos a apólices de seguros vinculadas a um ou mais bens patrimoniais da administração pública.

Para emiti-lo, o usuário deve informar:

- **Código da apólice**

Caso desconheça o código, poderá pesquisar clicando no link [código da apólice].

O relatório apresentará o código do bem, o número da placa identificadora, sua descrição, seu número de classificação e o departamento no qual o bem está lotado.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image89.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image89.png)
`,
  "Termo de responsabilidade - Relatório Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Termo de responsabilidade
\`\`\`

Este relatório apresenta todos os bens lotados em determinado departamento e destina-se à assinatura do responsável por eles.

Para emiti-lo, o usuário deve informar:

- **Código do departamento**

Caso desconheça o código, poderá pesquisá-lo clicando no link.

O usuário pode incluir ainda as seguintes informações:

- **Divisões:** possibilita imprimir os bens de uma determinada divisão do departamento selecionado ou os bens de todas as divisões quando o checkbox estiver marcado em Todas.
- **Filtro de bens:**
  - **Geral:** traz os bens do departamento selecionado ou da divisão indicada.
  - **Intervalo:** traz os bens do departamento ou divisão indicados, restringindo a impressão ao intervalo inicial e final do código do bem.
  - **Selecionados:** traz somente os bens selecionados pelo usuário no campo Bens, pertencentes ao departamento ou divisão indicados.
- **Características adicionais do bem:** exibe as características de cada bem quando o filtro estiver configurado como “SIM”.
- **Posição do parágrafo:** posiciona o texto configurado pelo usuário na parte superior da página, antes da descrição dos bens, ou na parte inferior, após a descrição dos bens patrimoniais.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image83.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image83.png)

O texto é configurado no módulo Configuração. Se o termo de responsabilidade já for utilizado, basta alterar ou acrescentar o texto existente em **Configurações > Procedimentos > Manutenção do doc/parágrafo > Alteração**.

Caso o termo nunca tenha sido utilizado, verifique seu código em **Configurações > Cadastro > Tipos de documentos**. Uma vez conhecido o código, acesse **Configurações > Procedimentos > Manutenção de documentos/parágrafos > Inclusão**. Na aba Documentos, informe o nome do termo e seu código e clique em “Incluir”. Na aba Parágrafo, o campo “Parágrafo Novo” abre uma caixa de texto para digitação do texto do termo.

O formato do termo de responsabilidade pode ser visto abaixo:

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image36.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image36.png)
`,
  "Emissão Termo de Guarda - Relatório Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Emissão Termo de Guarda
\`\`\`

O termo de guarda é a forma pela qual o administrador responsável por determinado departamento delega um ou mais bens sob sua responsabilidade a um de seus subordinados.

Este relatório emite o termo de guarda no qual estão listados os bens que ficarão sob a responsabilidade de determinado servidor público.

Para emiti-lo, o usuário deve informar:

- **Código da guarda:** código gerado pelo sistema para um termo de guarda.

Caso desconheça o código, poderá pesquisá-lo no link [código guarda].
`,
  "Bens por Classificação - Relatório Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Bens por Classificação
\`\`\`

Este relatório apresenta os bens patrimoniais distribuídos por ordem de classificação. Podem ser listados todos os bens que se encontram em um intervalo de classificação estrutural, por exemplo, bens que iniciam com a classificação 01.00.00.0000 até a classificação 02.00.00.0000.

Para emitir o relatório, o usuário deve informar os campos indicados na imagem:

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image82.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image82.png)

- **Intervalos de classificação:** caso desconheça, poderá pesquisá-los através do link [classificação].

Também é possível emitir o relatório com quebra de página por classificação:

- **Listar:** permite selecionar Todos, Baixados ou Não baixados. “Todos” apresenta todos os bens do intervalo, baixados ou não; “Baixados” apresenta apenas os bens que já sofreram baixa; “Não baixados” apresenta apenas os bens ativos.
- **Quebrar página por classificação:** a caixa de seleção deve estar em “SIM”.

O relatório será emitido ao clicar no botão “Emitir relatório”.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image39.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image39.png)
`,
  "Geral de bens - Relatório Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Geral de bens
\`\`\`

Este relatório tem por objetivo emitir a relação de todos os bens patrimoniais cadastrados na instituição.

Para sua emissão, o usuário informa os campos indicados na tela:

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image50.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image50.png)

- **Departamento:** lista os departamentos em ordem alfabética, permitindo emitir o relatório para todos ou para um departamento específico.
- **Ordem:** define como o relatório será ordenado: Departamento, Placa, Código do bem, Classificação ou Data de aquisição.
  - **Departamento:** lista os departamentos em ordem alfabética.
  - **Placa:** lista os bens em ordem numérica crescente das placas.
  - **Código do bem:** lista os bens em ordem crescente do código.
  - **Classificação:** lista os bens em ordem crescente da classificação estrutural.
  - **Data de aquisição:** lista os bens em ordem crescente da data de aquisição.
- **Imprimir fornecedor/observações:** imprime o fornecedor de cada bem e as observações do cadastro quando estiver marcado como “SIM”.
- **Imprimir classificação:** imprime a classificação estrutural dos bens quando estiver marcado como “SIM”.
- **Quebrar página:** se definido como “SIM”, inicia uma nova página conforme a ordem escolhida, por exemplo, no início das informações de cada departamento.
- **Aquisição em:** permite informar as datas inicial e final para filtrar um período de aquisição.

O relatório será emitido clicando no botão “Emitir relatório”.
`,
  "Financeiro Patrimonial - Relatório Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Financeiro Patrimonial
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image2.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image2.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image101.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image101.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image40.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image40.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image53.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image53.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image59.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image59.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image65.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image65.png)

Figura 21

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image11.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image11.png)

Figura 22

Este relatório apresenta a totalização dos valores dos bens patrimoniais pertencentes à administração pública, agrupando os bens nas classificações disponíveis:

- **Classificação:** totalização pela classificação dos bens patrimoniais.
- **Plano de Contas:** totalização pela classificação do plano de contas.
- **Plano de contas/classificação:** totalização por ambas as classificações e seus relacionamentos.

O usuário também pode determinar uma data específica para emissão através do filtro **Data da emissão**.
`,
  "Cadastrais - Relatório Patrimônio": `
# Tipos de Baixa

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Cadastrais > Tipos de baixa
\`\`\`

Neste relatório é possível verificar a classificação utilizada pela administração em relação aos tipos de exclusão de bens patrimoniais.

O relatório pode ser emitido nas seguintes ordens:

- Alfabética
- Numérica

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image32.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image32.png)
`,
  "Cadastrais - Página 2 - Relatório Patrimônio": `
# Seguradoras

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Cadastrais > Seguradoras
\`\`\`

Este relatório permite a emissão da relação de todas as seguradoras cadastradas no sistema pela administração.

Observe o relatório de Seguradoras na figura 15.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image72.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image72.png)

Figura 15

A emissão pode ser por ordem:

- Alfabética
- Numérica
`,
  "Cadastrais - Página 3 - Relatório Patrimônio": `
# Classificação dos Bens

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Cadastrais > Classificação dos bens
\`\`\`

Este relatório emite a relação de classificação dos bens cadastrados pela administração.

As opções de impressão são por ordem:

- **Descrição:** a lista será apresentada por ordem alfabética.
- **Código:** o relatório trará o código criado pelo sistema para cada uma das classificações em ordem crescente.
- **Estrutural:** apresenta a classificação crescente da estrutura de classificação de bens patrimoniais adotada pela administração.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image51.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image51.png)
`,
  "Cadastrais - Página 4 - Relatório Patrimônio": `
# Divisões por Departamento

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Cadastrais > Divisões por Departamento
\`\`\`

Para emissão deste relatório, o usuário deve observar os seguintes filtros:

- **Opções**
- **Listar Departamentos**
- **Listar Divisões**
- **Departamentos**

Para emitir o relatório, informe o departamento cujas divisões deseja mostrar. Caso não indique nenhum departamento, o relatório trará todas as divisões de todos os departamentos cadastrados na instituição. Para isso, os filtros “Listar Departamentos” e “Listar Divisões” devem estar configurados em “TODOS”.

A indicação dos departamentos é feita na caixa “Departamentos”. Para pesquisar, clique no link [departamento].

O filtro Opções “Com os departamentos selecionados” mostrará somente os departamentos selecionados na caixa Departamentos. A opção “Sem os departamentos selecionados” trará todos os departamentos, com exceção daqueles selecionados.

Os filtros Listar Departamentos e Listar Divisões possuem as opções “Todos”, “Ativos” e “Inativos”. O usuário poderá fazer todas as combinações possíveis entre estes filtros, por exemplo:

- Listar os departamentos ativos que possuem divisões inativas.
- Listar os departamentos inativos que possuem divisões inativas.
- Listar todos os departamentos e todas as divisões.

Observe a figura 22.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image15.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image15.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image17.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image17.png)
`,
  "Cadastrais": `
## Grupos de Materiais/Serviços

Lista todos os grupos cadastrados no e-cidade. Vale lembrar que os grupos compreendem a agregação de elementos de despesa que apresentam as mesmas características quanto ao objeto de gasto.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Cadastrais > Grupos de Materiais/Serviços
\`\`\`

O usuário poderá ordenar o resultado da busca de duas formas: ***Alfabética*** ou ***Numérica*** (Código do cadastro do grupo).

Ao clicar em processar, o e-cidade irá gerar o relatório com as seguintes informações: código e descrição do grupo de materiais/serviços conforme a imagem abaixo:

---

## Subgrupos de Materiais/Serviços

Lista todos os subgrupos cadastrados no sistema. Vale ressaltar que os subgrupos identificam os materiais ou serviços que pertencem a família do grupo.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Cadastrais > Subgrupos de Materiais/Serviços
\`\`\`

O usuário poderá filtrar os resultados da busca de duas formas:

- Ordem:**Alfabética**
- **Numérica(Código do cadastro do subgrupo).**

- Grupo:**Geral:** retorna a relação entre subgrupo, grupo e tipo.
- **Grupo:** retorna a relação entre subgrupo e grupo.
- **Tipo:** retorna a relação entre subgrupo e tipo.

Ao clicar em processar o e-cidade irá gerar o relatório com as seguintes informações: código e descrição do grupo de materiais/serviços conforme a imagem abaixo:

---

## Tipos de Compra

Listas os Tipos de Compras passíveis de serem utilizadas pela administração pública, as quais encontram-se definidas em Lei.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Cadastrais > Tipos de Compra
\`\`\`

- Ordenação dos dados poderá ser realizada de duas formas:**Alfabética**
- **Numérica (Código do cadastro do tipo de compra).**

Ao clicar em processar o e-cidade irá gerar o relatório com as seguintes informações: código e descrição do tipo de compra.

---

## Materiais/Serviços

Lista todos os materiais ou serviços cadastrados no e-cidade.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Cadastrais > Materiais/serviços
\`\`\`

O usuário poderá ordenar o resultado da busca de duas formas:

- Ordem:**Alfabética**
- **Numérica(Código do cadastro do subgrupo).**

- Grupo:**Geral:** retorna o resultado conforme a relação entre material/serviço, subgrupo e desdobramentos de elementos de despesas.
- **Subgrupo:** retorna o resultado conforme a relação entre material/serviço, subgrupo e desdobramentos de elementos de despesas.
- **Elemento:** retorna a relação entre material/serviço e um determinado elemento de despesa e seus respectivos desdobramentos. Ao selecionar esta opção o e-cidade irá habilitar o filtro elemento, onde o usuário deverá indicar qual desdobramento pretende gerar o relatório.

Ao clicar em ***"Elemento"*** o e-cidade irá retornar uma tela de pesquisa com outros filtros que podem ser aplicados;

- Ao concluir basta clicar em "Processar", o resultado conforme os filtros serão os seguintes:**Filtro Geral:** código material, descrição do material, código subgrupo, descrição subgrupo, elemento, descrição do elemento, nome do usuário que cadastrou o item e o complemento da descrição do material, se houver.
- **Filtro subgrupo:** código material, descrição do material, código do elemento e descrição do elemento.
- **Filtro elemento:** código do material, descrição do material, código do subgrupo e descrição do subgrupo.
`,
  "Gerenciais": `
## Solicitações Liberadas

Este relatório permite verificar solicitações que tiveram a efetivação de uma liberação para prosseguimento do processo de compras assim como aplicar filtros a fim de verificar quais ainda não foram liberadas, seja por período ou departamento.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Gerenciais > Solicitações Liberadas
\`\`\`

### Filtros:
- **Data:** permite selecionar uma única data ou intervalo.
- **Departamento:** departamento que realizou a inclusão da solicitação de compras.
- **Situação:**
  - *Liberadas*
  - *Não Liberadas*
  - *Todas*

---

## Motivos de Trocas

Relatório que retorna troca de fornecedores, se houver, quando do julgamento de um determinado processo de compras.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Gerenciais > Motivos de troca
\`\`\`

Na tela é possível visualizar os seguintes filtros:
- **Código de Orçamento**
- **Número da Solicitação**
- **Processo de Compras**

***NOTA:** caso desconheça um dos códigos a ser aplicado como filtro, poderá ser clicado em "Código do Orçamento", "Número da Solicitação" ou "Processo de Compras" e adicionar filtros adicionais.*

---

## Valores a Suplementar

Este relatório permite verificar se há necessidade de suplementação de algum valor em determinada Solicitação de Compras.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Gerenciais > Valores a suplementar
\`\`\`

### Filtros possíveis:

- **Número da Solicitação:** poderá ser digitado ou então realizando uma busca mais refinada clicando no ícone de pesquisa.
- **Mostrar:**
  - *Somente valores dos itens*
  - *Valores orçados por solicitação*
  - *Valores orçado*

Após informar os filtros aplicáveis para gerar o relatório basta clicar em "Enviar dados".

---

## Reemite Notificação Bloqueio Fornecedor

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Gerenciais > Reemite Notificação Bloqueio Fornecedor
\`\`\`

Se o fornecedor possui um bloqueio de fornecimento de material/serviço, através desta rotina poderá ser possível reemitir a notificação de bloqueio, sendo possível filtrar pelo código Cadastro Geral do Município, para aplicar filtros adicionais basta clicar em "CGM" ou então definir uma data ou intervalo.
`,
  "Conferência": `
## Processo de Compras Autorizadas

Este relatório permite fazer um levantamento dos processos de compras autorizados no e-cidade.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Conferência > Processo de Compras Autorizadas
\`\`\`

Neste relatório é possível aplicar os seguintes filtros:

- **Processo de compras:** permite selecionar um processo de compras ou um intervalo, assim como poderá clicar em "Processos de Compra de" e aplicar filtros adicionais como Número da Solicitação, Data Inicial e Final assim como outros através do campo "Indique o Conteúdo".
- **Data:** permite selecionar uma data de inclusão ou intervalo.
- **Situação:**
  - Todos
  - Em análise
  - Autorizado
  - Não autorizado

---

## Posição Ordem de Compra

Este relatório retorna informações como quantidade, ordem de compra, estoque, saldo entre outras de forma geral a respeito de uma ou um intervalo de ordem de compra.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Conferência > Posição Ordem de Compra
\`\`\`

### Possíveis filtros que podem ser utilizados:
- **Ordem de Compra:** seleciona a ordem de compra.
- **Seq. Empenho:** sequencial do empenho que originou a ordem de compra.
- **Data Emissão:** data de emissão da ordem de compra ou um intervalo entre datas.
- **Fornecedor:** fornecedor da ordem de compra

***NOTA:** Para filtros adicionais, poderá ser clicado nos links Ordem de Compra, Seq. Empenho, Fornecedor, Departamento Origem, Departamento de Destino*

O relatório emitido resultará em informações como quantidade, ordem de compra, estoque e saldo.

---

## Solicitação de Compras

Este relatório permite a verificação de diversas informações relativas à solicitação de compras.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Conferência > Solicitação de compras
\`\`\`

Esta rotina é composta de 4 (quatro) abas:

### (1) Departamentos

- **Solicitações de:** através desse filtro é possível informar o número da Solicitação de Compras ou um intervalo de solicitações ao qual deseja-se obter informações;
- **Período:** é possível selecionar um intervalo de tempo mensurado por data, o resultado da busca será todas as solicitações de compras realizadas no período informado;
- **Departamento:** filtro que permite selecionar o(s) departamento(s) no qual a solicitação foi inclusa no e-cidade assim como é possível retornar todas as solicitações feitas no departamento indicado;
- **Opção de Seleção:** serve como parâmetro de informações, ou seja, é possível optar por:
  - *Somente Selecionados:* retornar todas as informações indicadas no filtro departamentos da solicitação;
  - *Menos os Selecionados:* inibe o resultado dos departamentos selecionados;
- **Ordem de Seleção:** seleciona a ordem de apresentação do relatório que poderá ser:
  - *Solicitações;*
  - *Data da emissão;*
  - *Departamento;*
  - *Tipo de compra;*
- **Totalização por:**
  - *Departamento*
  - *Tipo de compra*
  - *Material*
  - *Dotação*
- **Situação da Solicitação:**
  - *Todas*
  - *Aut. empenho*
  - *Não. Aut. empenho*
- **Mostra Itens:** filtro que permite mostrar ou não os itens contidos em um ou mais solicitações selecionadas.

### (2) Tipos de Compra

Nesta aba é possível selecionar as solicitações pelo Tipo de Compra indicada no momento da inclusão da solicitação de compras, para aplicar filtros adicionais basta clicar em ***"Tipo de Compra"***, sendo possível filtrar pela descrição, código do tipo de compras e do tribunal, bem como se ativo sim/não através do campo "Indique o Conteúdo".

**Exemplos:** Licitação Inexigível, Convite e Tomada de Preço

### (3) Materiais

Nesta aba é possível selecionar um ou mais itens que possam estar contidos em um ou mais Solicitações de Compras. para aplicar filtros adicionais basta clicar em ***"Código do Material"***, sendo possível filtrar pela descrição do material, seleção por Ativos, Inativos ou Todos, entre outros filtros por intermedio do campo "Indique o Conteúdo".

### (4) Dotações

Ao clicar sobre ***"Dotação orcamentaria"*** o e-cidade retornará todas as solicitações que estão em uma ou mais dotações selecionadas através filtro.

---

## Solicitações em Processo

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Conferência > Solicitações em processo
\`\`\`

Este relatório permite ao usuário verificar a situação geral de uma Solicitação de Compras.

Esta rotina é composta de 2 (duas) abas:

### (1) Data/Departamentos

- **Data da solicitação:** sistema permite selecionar uma data individual ou então um intervalo de datas.
- **Departamentos da solicitação:** o usuário poderá indicar um ou mais departamentos nos quais deseja obter as informações a respeito de Solicitação de Compras que estão em processo. Caso desconheça o código, basta clicar em ***"Departamento"*** e aplicar filtros adicionais como Órgão, Unidade, Descrição entre outros que podem ser aplicados por meio do campo "Indique o Conteúdo".

***NOTA:** Caso não indique nenhum departamento o relatório trará todas as solicitações de compras realizadas pela administração.*

- **Opção de seleção:** o usuário poderá optar entre duas opções:
  - **Somente Selecionados:** imprimir no relatório somente os departamentos que se encontram selecionados.
  - **Menos os Selecionados:** o usuário poderá optar por todos os departamentos, com exceção daqueles que se encontram selecionados.
- **Ordem de seleção:** indica a ordem pela qual as informações serão organizadas na emissão do relatório. O usuário pode escolher entre as seguintes opções: data de emissão da solicitação de compras, número da solicitação, usuário ou departamento.
- **Listar itens:** pode o usuário escolher se quer, ou não, ver impressos os itens das solicitações de compras.

Para emissão do documento, basta clicar no botão **"Relatório"**, caso queira aplicar filtros adicionais como Usuários, navegue para próxima aba.

### (2) Usuários

- **Código do usuário:** indicado ao e-cidade o código do usuário, no relatório se verá impresso somente as solicitações de compras realizadas por este usuário selecionado.
- **Opção de seleção:**
  - **Somente Selecionados:** somente os usuários que se encontram selecionados.
  - **Menos os Selecionados:** Exceção daqueles que se encontram selecionados.

---

## Certificado de Fornecedores

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Conferência > Certificado de Fornecedores
\`\`\`

Este relatório possui os seguintes filtros:

- **Ordem:**
  - Alfabética (nome do fornecedor);
  - Numérica (código certificado);
  - Data (data decrescente de inclusão do certificado);

- **Código do Subgrupo:** permite escolher o subgrupo o qual os fornecedores estão vinculados no cadastro de fornecedores. Caso desconheça o código do subgrupo, poderá pesquisá-lo, clicando em **"Código do Subgrupo"**.

Este relatório traz as seguintes informações: Código Sequencial, CGM, Nome, CNPJ e Telefones do Fornecedor. Informa, ainda, o CRC que é o Código do Registro Cadastral e a data que o certificado foi emitido.

---

## Mapa das Propostas do Orçamento

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Conferência > Mapa das propostas do orçamento
\`\`\`

Este relatório tem a funcionalidade de imprimir todas as propostas dos fornecedores de um determinado processo de compras.

O mesmo poderá ser emitido de duas formas:
- **1. Por Item**
- **2. Por Lote**

### 1. Por Item

**Orçamento Processo de Compras**

- **Processo de Compras:** número do processo de compras que se quer emitir o relatório de orçamento. Caso os desconheça o número, basta clicar em ***Orçamento***
- **Solicitação de Compras:** número da solicitação de compras, na qual se quer emitir o relatório de orçamento de solicitação. Caso desconheça o número, basta clicar em ***Orçamento***

### Visualizações

- **Modelo:** O usuário pode escolher qual modelo de mapa deseja emitir.
  - Modelo 1
  - Modelo 2

- **Imprimir justificativa de troca de fornecedores:** para que a justificativa seja impressa no relatório a caixa de seleção deverá estar selecionada em "SIM".

O relatório trará o fornecedor, seguido de números sequenciais que representam cada um dos itens cotados e seus respectivos valores.

Cumpre ressaltar que a menor cotação do item sempre virá em negrito, a fim de facilitar a verificação do fornecedor que cotou o menor preço.

O relatório traz ainda o número de cada item seguido da descrição e a menor cotação do mesmo. Por fim, o relatório apresentará as trocas de fornecedores que porventura possa ter ocorrido durante o processo de aquisição de materiais/serviços pela administração pública.

### 2. Por Lote

Caso um orçamento de processo de compras seja por lote é possível emitir o Mapa de Propostas do Orçamento através desta nova rotina.

Após selecionar o orçamento e clicar em "Processar" serão apresentados os itens do orçamento e agora também seus respectivos lotes.

***NOTA:** Não será possível através desta rotina emitir o relatório caso o orçamento do processo de compras seja por item.*
`,
};
