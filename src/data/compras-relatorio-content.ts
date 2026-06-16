export const comprasRelatorioContent: Record<string, string> = {
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
