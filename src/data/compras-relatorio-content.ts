export const comprasRelatorioContent: Record<string, string> = {
  "Registro de preço": `
## Emite Estimativa

Através desta rotina é possível realizar a emissão da estimativa de quantidade de produtos solicitados pelo setor e/ou departamentos. Informando o número da solicitação estimativa ou um intervalo.

**DB:PATRIMONIAL > Compras > Relatórios > Registro de Preço > Emite Estimativa**

---

## Emite Abertura

Através desta rotina é possível realizar a emissão da abertura de registro de preço, informando o número da solicitação de abertura de registro de preço e clicando em gerar relatório.

**DB:PATRIMONIAL > Compras > Relatórios > Registro de Preço > Emite Abertura**

---

## Emite Compilação

Através desta rotina é possível realizar a emissão da compilação de registro de preço, com as respectivas quantidades compiladas de todas as estimativas lançadas no registro de preço. O relatório exibirá a quantidade mínima e quantidade máxima a ser adquirida de cada produto e/ou material.

**DB:PATRIMONIAL > Compras > Relatórios > Registro de Preço > Emite Compilação**

---

## Posição do Registro de Preço

Através desta rotina é possível a emissão do documento posição de registro de preço, este possui um compilado de informações a respeito do registro. Informações como: número da solicitação, código do item, descrição do item, a quantidade mínima e quantidade máxima a ser adquirida de cada produto e/ou material, valor unitário de cada item, quantidade total solicitada, quantidade empenhada e quantidade que falta empenhar.

**DB:PATRIMONIAL > Compras > Relatórios > Registro de Preço > Posição do Registro de Preço**

### Filtros:
- **Criação do Registro**: data ou período referente a inclusão do registro de preço.
- **Validade do Registro**: validade do registro de preço.
- **Compilação**: número da compilação do registro de preço.
- **Quebra por departamento**: permite quebrar o relatório por departamento organizando as informações respectivamente dessa forma.
- **Código do Material**: selecionar um ou mais materiais se desejar saber informações específicas de determinado item.

---

## Gerar Lista de Estimativas (CSV)

Esta rotina permite a geração de um arquivo CSV com um resumo das estimativas lançadas na abertura de registro de preço.

**DB:PATRIMONIAL > Compras > Relatórios > Registro de Preço > Gerar Lista de Estimativas (CSV)**

Neste caso, basta o usuário clicar em , selecionar uma abertura de registro de preço e logo após clicar em "Gerar Arquivo".

Após o e-cidade irá disponibilizar arquivo para download, basta clicar sobre o link para efetivar.

---

## Emissão de Atas

Através deste relatório é possível realizar a emissão de um relatório e visualizar as atas que estavam vigentes em um determinado período, e também as atas que estão abertas para iniciar o processo de solicitações de compras.

**DB:PATRIMONIAL > Compras > Relatórios > Registro de Preço > Emissão de Atas**

Os possíveis filtros que podem ser utilizados são listados na imagem abaixo:
`,
  "Documentos": `
## Reemissão de solicitação de compras

**DB:PATRIMONIAL > Compras > Relatórios > Documentos > Reemissão de solicitação de compras**

Este relatório reemite as solicitações de compras incluídas no e-cidade.

---

## Emite Autorização de Empenho

Neste relatório é possível reemitir autorizações de empenho.

**DB:PATRIMONIAL > Compras > Relatórios > Documentos > Emite Autorização de Empenho**

### Filtros:

3 tipos de filtros poderão ser aplicados:

- **Autorizações**: o usuário poderá informar o número de uma única autorização ou um intervalo de autorizações;
- **Período**: seleciona um intervalo de tempo, mensurado por data, retornando todas as autorizações realizadas no período informado;
- **Informações adicionais**:
  - Mostrar autorização de processo de compras;
  - Mostrar somente autorização;

---

## Emite Ordem de Compra

Rotina que permite reemitir uma ou mais ordens de compra.

**DB:PATRIMONIAL > Compras > Relatórios > Documentos > Emite Ordem de Compra**

Nesta tela o usuário poderá informar o número da ordem de compra ou um intervalo se assim desejar, caso queira aplicar filtros adicionais como número do empenho, seq. empenho, nome/razão social ou até por data de emissão basta clicar em "Ordem de compra".

---

## Reemissão de Certificado

Realiza a reemissão do Certificado de Registro Cadastral (CRC) dos fornecedores da administração pública.

**DB:PATRIMONIAL > Compras > Relatórios > Documentos > Reemissão do Certificado**

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

**DB:PATRIMONIAL > Compras > Relatórios > Documentos > Reemissão de orçamento de PC**

Na tela o usuário poderá selecionar entre o Código do Orçamento ou o número do Processo de Compras. Caso desconheça o código do orçamento ou o número do processo de compras, poderá pesquisar clicando sobre os links que caracterizam como azul sublinhado.

Após selecionar e clicar em Gerar relatório o e-cidade irá exibir opções para que possa efetivar a impressão do orçamento em branco, ou seja, sem os dados de fornecedor, bem como imprimir orçamentos específicos dos fornecedores listados.

---

## Reemissão do Orçamento da Solicitação

Permite reemitir o orçamento de uma solicitação de compras.

**DB:PATRIMONIAL > Compras > Relatórios > Documentos > Reemissão do orçamento da solicitação**

Na tela o usuário poderá selecionar entre o Código do Orçamento ou o número da Solicitação de Compras.

Caso desconheça o código do orçamento ou o número da solicitação de compras, poderá pesquisar clicando sobre os links que caracterizam como azul sublinhado.

Após selecionar e clicar em Gerar relatório o sistema irá exibir opções para que possa efetivar a impressão do orçamento em branco, ou seja, sem os dados de fornecedor, bem como imprimir orçamentos específicos dos fornecedores listados.

Para efetivar a impressão basta selecionar as caixas de seleção que desejar e clicar em Gerar Relatório.
`,
};
