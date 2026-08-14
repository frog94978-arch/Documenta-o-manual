export const comprasCadastroContent: Record<string, string> = {
  "Grupos de Material/Serviço": `
Os grupos compreendem a agregação de elementos de despesa que apresentam as mesmas características quanto ao objeto de gasto.

Assim, formados os grupos, a cada um deles teremos ligados um ou mais elementos de despesas, que servem para identificar os objetos de gasto, tais como vencimentos e vantagens fixas, juros, diárias, material de consumo, serviços de terceiros, obras e instalações, etc.

Como exemplo, pode-se citar um grupo chamado Gêneros Alimentícios que estará ligado aos elementos de despesa material de consumo e material de distribuição gratuita.

## Inclusão

\`\`\`
DB:PATRIMONIAL > Compras > Cadastros > Grupos de Material/Serviço > Inclusão
\`\`\`

- **Código do grupo**: código sequencial que será criado automaticamente pelo e-cidade no momento da inclusão.
- **Descrição do grupo**: neste campo usuário deve informar o nome do grupo que está sendo incluído.
- **Natureza do Grupo**: Por padrão terá o valor "Produto", porém, podendo escolher entre outras duas opções: Serviço e Medicamento.
- **Ativo**: para o grupo ser utilizado no e-cidade, este campo deverá estar como "SIM".
- **Elementos**: são os elementos de despesas que ficarão vinculados ao grupo que está sendo incluso, devendo o usuário selecioná-los através da caixa de seleção.

***NOTA:*** todo elemento deve estar vinculado a uma dotação, para que este seja listado entre as opções a serem escolhidas.

---

## Alteração

\`\`\`
DB:PATRIMONIAL > Compras > Cadastros > Grupos de Material/Serviço > Alteração
\`\`\`

Através desta rotina é possível realizar a alteração dos grupos de materiais e serviços cadastrados no e-cidade.

---

## Exclusão

\`\`\`
DB:PATRIMONIAL > Compras > Cadastros > Grupos de Material/Serviço > Exclusão
\`\`\`

Através desta rotina é possível realizar a exclusão dos grupos de materiais e serviços cadastrados no e-cidade.

***NOTA:*** É vedada a exclusão do grupo caso algum subgrupo de material/serviço esteja vinculado ao mesmo; Para a utilização de um Grupo de Material/Serviços na inclusão Material/Serviço é obrigatório o seu vínculo com ao menos um Subgrupo de Material/Serviço conforme o próximo tópico.
`,
  "Subgrupos de Materiais/Serviços": `
O subgrupo identifica o material ou serviço que pertence à família do grupo. No e-cidade, o subgrupo liga o material/serviço a um grupo.

## Inclusão

\`\`\`
DB:PATRIMONIAL > Compras > Cadastros > Subgrupos de Materiais/Serviços > Inclusão
\`\`\`

- **Código do subgrupo**: código sequencial que será criado automaticamente pelo e-cidade no momento a inclusão;
- **Descrição do subgrupo**: neste campo o usuário deverá informar o nome do subgrupo que está sendo cadastrado;
- **Código do grupo**: é o código do grupo no qual o subgrupo ficará vinculado;
- **Ativo**: para o subgrupo que está sendo incluso possa ser utilizado no e-cidade, este campo deve estar selecionado como “SIM”.
- **Utilizado**: durante a inclusão do subgrupo é possível definir em qual cadastro o mesmo irá ser utilizado, sendo possível selecionar uma das três opções abaixo:
    - Ambos
    - Cadastro de Materiais
    - Cadastro de Fornecedores

### Exemplo de Caso:
Cadastro de um grupo denominado **SERVIÇOS**, o qual estará vinculado aos seguintes elementos de despesas:
- Serviços de Consultoria
- Outros Serviços de Terceiros Pessoa Física
- Outros Serviços de Terceiros Pessoa Jurídica

Neste grupo exemplo poderíamos vincular um **SUBGRUPO** denominado **Serviço no Setor de Construção Civil**.

---

## Alteração

\`\`\`
DB:PATRIMONIAL > Compras > Cadastros > Subgrupos de Materiais/Serviços > Alteração
\`\`\`

Permite realizar a alteração dos subgrupos de materiais/serviços cadastrados no e-cidade;

---

## Exclusão

\`\`\`
DB:PATRIMONIAL > Compras > Cadastros > Subgrupos de Materiais/Serviços > Exclusão
\`\`\`

Permite realizar a exclusão dos subgrupos de materiais e serviços cadastrados no e-cidade;

***NOTA:*** É vedada sua exclusão caso algum Material/Serviço que o contenha tenha sido cadastrado.
`,
  "Materiais/Serviços": `
Os materiais e serviços são uma divisão do subgrupo, conforme a espécie do material ou serviço. Para se entender a relação entre grupo, subgrupo e material/serviço, deve-se ter em foco que cada grupo estará ligado a um elemento de despesa e, que, todo e qualquer material ou serviço deve necessariamente estar vinculado a um desdobramento, oriundo do elemento de despesa a ele vinculado.

Ao subgrupo cabe fazer a ligação entre o grupo e o material/serviço.

### Exemplo de caso:
Digamos que temos o medicamento AAS que está ligado a um grupo chamado Medicamentos, cujos elementos de despesa são:
- Material de Consumo
- Material de Distribuição Gratuita.

Logo, o referido medicamento estará vinculado aos desdobramentos relativos a cada um destes elementos.

Nesse exemplo, o administrador orçamentário definiu que os desdobramentos dos elementos Material de Consumo e Material de Distribuição Gratuita, para este item (AAS), seriam:
- Material Farmacológico
- Material odontológico
- Material Destinado a Assistência Social.

## Inclusão

\`\`\`
DB:PATRIMONIAL > Compras > Cadastros > Materiais/Serviços > Inclusão
\`\`\`

A tela de inclusão possui 3 (três) filtros para pesquisa, sendo eles:
- **Código do Material**: número atribuído ao Material/Serviço pelo e-cidade;
- **Descrição do Material**: nome atribuído ao Material/Serviço;
- **Seleção por**: Todos, Ativos ou Inativos.

Muito embora seja uma tela de inclusão, esta tem por objetivo facilitar a inclusão de um novo Material/Serviço, cujas características possam ser semelhantes a de um Material/Serviço já existente. O objetivo é facilitar a inclusão de um Material/Serviço similar, no qual se quer acrescentar ou remover um ou mais desdobramentos.

Caso o material ou serviço que se deseja cadastrar não exista no e-cidade, o usuário deverá preencher os seguintes campos:

- **Código do material**: número sequencial atribuído pelo e-cidade.
- **Descrição do material**: nome do Material/Serviço.
- **Complemento material**: campo destinado a complementar a descrição principal.
- **Liberado para autorização de empenho**: define se o Material/Serviço pode ser liberado para empenho (Sim/Não).
- **Material inativo**: para o Material/Serviço ser considerado ativo, este campo deverá estar como “NÃO”.
- **Serviço**: define se o item será considerado como um serviço. Após a inclusão, esta informação não poderá ser alterada.
- **Veículo**: define se o item será destinado para algum veículo cadastrado. Se “SIM”, a seleção do veículo será obrigatória na Solicitação de Compras.
- **Fraciona**: se “SIM”, permite o fracionamento do item em rotinas como Liquidação da Ordem de Compra e Inclusão por Empenho.
- **Validade Mínima**: se “SIM”, o e-cidade exigirá a informação de validade mínima para o item.
- **Liberar Resumo**: define se o Complemento Material será liberado para alteração no campo Resumo do Item durante a Solicitação de Compras.
- **Código do grupo**: define a qual Grupo de Material/Serviço o item ficará vinculado.
- **Código do Subgrupo**: define qual Subgrupo, dentre os vinculados ao Grupo selecionado, o material será cadastrado.
- **Lista de desdobramento**: permite escolher os desdobramentos utilizados pelo item, oriundos do(s) elemento(s) de despesa do Grupo.

---

## Alteração

\`\`\`
DB:PATRIMONIAL > Compras > Cadastros > Materiais/Serviços > Alteração
\`\`\`

Através desta rotina é possível realizar a alteração de informações de Materiais/Serviços.

***Ponto importante:*** caso não identifique um desdobramento para selecionar, o usuário deverá alterar o "Grupos de Material/Serviço" vinculado e habilitar o elemento de despesa origem.

***NOTA:*** Não será possível realizar alteração de informações como Código do Grupo/Subgrupo e desvincular desdobramentos que já estejam em Autorização de Empenho, assim como a opção "Serviço" não poderá ser alterada.

---

## Exclusão

\`\`\`
DB:PATRIMONIAL > Compras > Cadastros > Materiais/Serviços > Exclusão
\`\`\`

Através desta rotina é possível realizar a exclusão de Materiais/Serviços.

***NOTA:*** É vetada a exclusão do item caso o mesmo tenha sido utilizado em uma Solicitação de Compras ou Autorização de Empenho Manual.
`,
  "Cadastro de Unidades": `
A unidade nada mais é do que a caracterização da forma como o material deverá ser entregue para a administração pública. Assim que o usuário efetivar a inclusão de uma Solicitação de Compras ou efetivar a inclusão de uma Autorização de Empenho, deverá indicar a forma que será entrega determinado material, podendo optar por exemplo ser em unidade, pacote, lata, quilo, fardo, etc..

## Inclusão
**DB:PATRIMONIAL > Compras > Cadastros > Cadastro de Unidades > Inclusão**

- **Código da unidade**: número sequencial atribuído pelo e-cidade a unidade que se está sendo cadastrada;
- **Descrição da unidade**: nome da unidade que se está sendo cadastrada;
- **Abreviatura da descrição**: abreviatura do nome da unidade que se está sendo cadastrada; O e-cidade irá sugerir as 6 primeiras letras da informação inclusa em "Descrição da unidade".
- **Se usa a quantidade da unidade**: estando a quantidade da unidade selecionada como “SIM”, será possível indicar na Solicitação de Compras, além da unidade, a quantidade desta unidade a ser adquirida.
    - *Exemplo de caso*: unidade Caixa, cuja abreviatura é “CX”. Nesta situação é possível indicar a quantidade desta unidade a ser adquirida, no nosso exemplo, 50 CX;
- **Aceita casas decimais**: estando selecionada como “SIM”, o e-cidade irá permitir a utilização de casas decimais durante a inclusão da Solicitação de Compras para esta unidade que está sendo cadastrada.
- **Código do Tribunal**: código do tribunal (não obrigatório).

## Alteração
**DB:PATRIMONIAL > Compras > Cadastros > Cadastro de Unidades > Alteração**

Através desta rotina é possível realizar a alteração de uma unidade que esteja cadastrada no e-cidade.

## Exclusão
**DB:PATRIMONIAL > Compras > Cadastros > Cadastro de Unidades > Exclusão**

Através desta rotina é possível realizar a exclusão de Unidades incluso no e-cidade.

**NOTA**: somente será possível se a unidade cadastrada não foi ainda utilizada em uma Solicitação de Compras ou Autorização de Empenho.
`,
  "Cadastro de Tipos de Certificado": `
Nesta rotina é definida quais certificações irá se exigir de um determinado fornecedor para que ele possa estar habilitado a fornecer materiais/serviços a administração pública.

## Inclusão
**DB:PATRIMONIAL > Compras > Cadastros > Cadastro de Tipos de Certificados > Inclusão**

Este cadastro é composto por duas abas:
- (1) Tipos de Certificado
- (2) Departamentos

### (1) Tipos de Certificado
- **Código tipo de certificado**: número sequencial atribuído pelo e-cidade ao tipo de certificado que se está cadastrando;
- **Código do Tipo de Documento**: tipo de documento que caracteriza o tipo de certificado.
    - **NOTA**: Para manutenção desses dados é necessário acessar a rotina: **DB:CONFIGURAÇÃO > Configuração > Cadastros > Cadastro de Tipos de Documentos**
- **Descrição certificado**: nome do tipo de certificado que se está cadastrando;
- **Imprimir subgrupos**: neste campo é possível definir se o tipo de certificado que se está sendo cadastrado, conterá os subgrupos de fornecimento dos fornecedores. Para isso, a caixa de seleção deverá estar como “SIM”;
    - **NOTA**: Os subgrupos de fornecimento são definidos no cadastro do mesmo na rotina: **DB:PATRIMONIAL > Compras > Cadastros > Fornecedores**
- **Parágrafo do certificado**: permite que se acrescente um texto no tipo de certificado que se está sendo cadastrado, o conteúdo ficará na parte superior do documento a ser gerado;
- **Parágrafo 2 do certificado**: permite que se acrescente um texto no tipo de certificado que se está cadastrando, cujo conteúdo ficará localizado na parte inferior do documento a ser gerado.

### (2) Departamentos
- **Tipo de Certificado**: Código do certificado ao qual está sendo alterado.
- **Departamento**: departamento que pode realizar a alteração do vínculo de documento por tipo de certificado.
    - **NOTA**: Configuração com função de camada de segurança que limita quais departamentos poderão alterar o vínculo de documentos por tipo de certificado. Se não for definido nenhum departamento, todos poderão localizar o tipo de processo e alterar os documentos. Se definir departamentos, somente os que estiverem lançados poderão visualizar o tipo de processo para alteração através da rotina: **DB:PATRIMONIAL > Compras > Cadastros > Documentos por Tipo de Certificado**
    - Inclusão de novos departamentos pode ser realizada através da rotina: **DB:CONFIGURAÇÃO > Configuração > Cadastros > Cadastro de Departamentos > Inclusão**

## Alteração
**DB:PATRIMONIAL > Compras > Cadastros > Cadastro de Tipos de Certificados > Alteração**

Rotina permite alteração de um Tipo de Certificado cadastrado no e-cidade.

## Exclusão
**DB:PATRIMONIAL > Compras > Cadastros > Cadastro de Tipos de Certificados > Exclusão**

Rotina permite a exclusão de um Tipo de Certificado cadastrado no e-cidade.

**NOTA**: Não será possível realizar a exclusão, caso este tipo de certificado já tenha sido emitido a algum fornecedor.
`,
  "Cadastro de Documentos": `
Cadastro dos tipos de documentos.

## Inclusão

Para incluir um novo tipo de documento:
1.  Acesse o menu...
2.  Clique em "Novo".
3.  Preencha os campos...
4.  Clique em "Salvar".

## Alteração

Para alterar um tipo de documento existente:
1.  Busque pelo tipo desejado.
2.  Clique em "Editar".
3.  Modifique os campos necessários.
4.  Clique em "Salvar".

## Exclusão

Para excluir um tipo de documento:
1.  Busque pelo tipo.
2.  Clique em "Excluir".
3.  Confirme a exclusão.
`,
  "Documentos por Tipo de Certificado": `
Vincula os documentos necessários para cada tipo de certificado.

## Inclusão

Para vincular um documento a um certificado:
1.  Acesse o menu...
2.  Selecione o tipo de certificado.
3.  Clique em "Adicionar Documento".
4.  Selecione o documento.
5.  Clique em "Salvar".

## Alteração

Não se aplica. Para alterar, remova o vínculo e adicione novamente.

## Exclusão

Para desvincular um documento:
1.  Acesse o menu...
2.  Selecione o tipo de certificado.
3.  Encontre o documento a ser removido.
4.  Clique em "Remover".
5.  Confirme a remoção.
`,
  "Fornecedores": `
É o cadastro dos fornecedores de materiais e/ou serviços da administração pública. Este cadastro contém, além de informações básicas, os dados bancários, o histórico de movimentações registradas pelo usuário, o subgrupo de fornecimento (tipo de produto ou serviço que o fornecedor oferece) e os dados dos representantes legais da empresa cadastrada.

Este cadastro é composto de 6 (seis) abas, a saber:
1. **Fornecedor**
2. **Contas banco**
3. **Movimento**
4. **Subgrupo**
5. **Representantes legais**
6. **Identificação do Fornecedor**

## Inclusão
**DB:PATRIMONIAL > Compras > Cadastros > Fornecedores > Inclusão**

### (1) Fornecedor
- **Fornecedor**: a identificação do fornecedor será feita através do número do CGM. Também é possível pesquisar pela razão social.
    - Se fornecedor não estiver cadastrado como CGM, efetive através da rotina: **DB:PATRIMONIAL > Protocolo > Cadastros > Geral do Município - CGM(novo) > Inclusão**
- **Data lançamento**: data da sessão em que o usuário está efetuando o cadastro do fornecedor.
- **Objeto Social**: utilizado normalmente para indicar o objeto social da empresa.
- **Bloqueado**: determina se o fornecedor pode ou não fornecer materiais/serviços à administração pública. Se "NÃO", o fornecedor está apto.
- **Contribuinte do CPRB**: Contribuição Previdenciária sobre a Receita Bruta (CPRB). Se “SIM”, indica que o fornecedor realiza a contribuição social de natureza tributária.

### (2) Contas Bancos
- **Fornecedor**: código do fornecedor que está sendo incluído.
- **Banco**: código do Banco da conta do fornecedor.
    - O cadastro de banco se dá em: **DB:CONFIGURAÇÃO > Configuração > Cadastros > Cadastro de Bancos > Inclusão**
- **Agência / DV da agência**: agência e dígito verificador da conta.
- **Conta / DV da conta**: número da conta e dígito verificador.
- **Código da Operação**: código da operação da conta.
- **Tipo da Conta**: selecionar entre Conta corrente ou Conta poupança.
- **CNPJ/CPF**: documento do fornecedor.
- **Identificação do cliente**: identificação do fornecedor no banco.
- **Conta padrão**: informar se esta é a conta padrão do fornecedor.
- **Conferido**: check de conferência dos dados bancários.
- **NOTA**: pode-se cadastrar diversas contas bancárias, mas apenas uma única conta padrão.

### (3) Movimento
Nesta aba é possível realizar registros de histórico dos fornecimentos realizados pelo fornecedor. Trata-se de um campo de observação para registros históricos ou outros movimentos desejados.

### (4) Subgrupo
Nesta aba o usuário poderá marcar os tipos de produtos/serviços oferecidos pelo fornecedor através das caixas de seleção.

### (5) Representantes Legais
Permite a inclusão dos representantes legais (exige CGM cadastrado).
- **Sequencial do representante legal**: número sequencial atribuído pelo sistema.
- **CGM do fornecedor**: CGM trazido automaticamente da aba fornecedor.
- **CGM do representante**: selecionar o CGM do representante legal.
- **Data inicial / Data final**: período da representação legal.
- **Observação**: detalhes relevantes sobre o representante.

### (6) Inscrição Genérica (Identificação do Fornecedor)
Cadastramento de Inscrição Genérica – EX (Credor Estrangeiro).
**DB:PATRIMONIAL > Compras > Cadastros > Fornecedores > Cadastro de Identificação Genérica > Inclusão**

## Alteração
**DB:PATRIMONIAL > Compras > Cadastros > Fornecedores > Alteração**

Através desta rotina é possível realizar alteração de dados de um determinado fornecedor cadastrado no e-cidade.

## Exclusão
**DB:PATRIMONIAL > Compras > Cadastros > Fornecedores > Exclusão**

Através desta rotina é possível realizar a exclusão de um fornecedor.

**NOTA**: Não é possível realizar a exclusão de um fornecedor caso o mesmo já se tenha emitido algum Certificado de Registro Cadastral.
`,
  "Solicitações": `
Esta rotina possibilita a consulta e acompanhamento das principais fases do processo de aquisição de materiais/serviços realizados pela administração pública.

**DB:PATRIMONIAL > Compras > Consultas > Solicitações**

![Tela de Consulta Solicitação](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image137.png)

Conforme a imagem acima o usuário poderá digitar o número da solicitação de compras no campo indicado, ou caso não saiba, poderá clicar sobre "Número da solicitação" e aplicar filtros adicionais como intervalo de data de solicitação.

Filtros complementar pode ser utilizado, inserindo conteúdo entre o caracter % para busca que contenha determinada expressão ou informação exata no campo "Indique o Conteúdo", logo após clicando sobre o link de alguma das colunas disponivel, exemplo: resumo, departamento, nome do usuário entre outras colunas.

![Filtros Complementares](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image138.png)

Junto com essa forma de filtro, ainda é possível alterar a quantidade padrão de listagem (15) bem como mostrar resultados diferentes que retorna registros únicos entre a coluna selecionada.

Após a seleção da Solicitação de Compras e o usuário clicar em "Enviar" ou "Pesquisar" caso tenha acessado o link, será listado a seguinte tela:

![Consulta Solicitação - Dados](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image139.png)

## Dados da Solicitação:

- **Solicitação de Compras**: N° sequencial gerado automaticamente pelo sistema e atribuído a solicitação de compras no momento da inclusão.

- **Processo Administrativo (P.A)**: Processo administrativo informado no momento da inclusão da solicitação de compras.

- **Departamento**: departamento utilizado durante a inclusão de solicitação de compras.

- **Usuário Solicitante**: Usuário que realizou a inclusão de Solicitação de Compras, este é determinado no canto superior direito da tela do e-cidade.

- **Data da Solicitação**: data de inclusão da solicitação de compras, esta informação fica na parte inferior direita da tela no momento da inclusão.

- **Instituição**: instituição que o usuário estava no momento da inclusão da solicitação de compras.

- **Tipo Solicitação**: esta informação é definida logo na primeira tela da inclusão da Solicitação de Compras, podendo escolher entre: Normal, Pacto ou Registro de Preço.

- **Resumo**: resumo definido no momento da inclusão da solicitação de compras.

- **Situação**: se a solicitação de compras está "Liberado" ou "Não Liberado".

- **Anulada**: se a solicitação de compras está anulada SIM ou NÃO.

- **Fornecedor Sugerido**: se aplicável será exibido o "Fornecedor Sugerido" informado na última aba durante a inclusão da Solicitação de Compras.

## Itens/Dotações:

Retorna os dados dos materiais/serviços que estão sendo requisitados, bem como a dotação a ser utilizada para esta aquisição.

## Orçamento de Solicitações:

Se existente retorna os dados relativos aos orçamentos de solicitações de compras.

## Processo de Compras:

Se existente retorna os dados relativos ao processo de compras.

## Orçamento de Processo de Compras:

Se existente retorna os dados relativos ao orçamento do processo de compras.

## Licitação:

Caso esta solicitação de compras esteja vinculada em uma licitação, esta será listada através desse botão.

## Autorização de Empenho:

Se houver, retorna o código de autorização e empenho gerados pelo módulo Compras. O usuário poderá obter informações relativas sobre a autorização de empenho e empenho, clicando nos links destes códigos.

## Pendências:

Caso tenha sido lançada alguma pendência durante o trâmite da solicitação de compras, será listada através desse botão.
`,
  "Ordens de Compra": `
Rotina de consulta que permite verificar as ordens de compras geradas no e-cidade e seus respectivos dados.

**DB:PATRIMONIAL > Compras > Consultas > Ordens de Compra**

## Filtros de Consulta

Para realizar esta consulta devemos informar o código de algum dos 4 filtros abaixo:

![Filtros de Ordens de Compra](../../assets/images/Ordemdecompra1.jpg.png)

- **Código**: Número da ordem de compra que se deseja consultar.

- **Numcgm**: Número do CGM do fornecedor para o qual a ordem de compra foi gerada.

- **Empenho**: Número do empenho do exercício.

- **Número**: Número sequencial do empenho utilizado para inclusão da ordem de compra.

## Dados da Ordem de Compra

Retorna informações como:

- **Fornecedor**: Identificação do fornecedor para o qual a ordem de compra foi gerada.

- **Data de Emissão**: Data em que a ordem de compra foi emitida.

- **Departamento**: Departamento destinado à entrada da ordem de compra.

- **Data de Anulação**: Data em que a ordem de compra foi anulada (se houver).

- **Tipo de Compra**: Classificação do tipo de compra realizada.

- **Total da Ordem**: Valor total da ordem de compra.

- **Valor Lançado**: Valor já lançado/recebido.

- **A Lançar**: Valor que ainda precisa ser lançado/recebido.

- **Valor Anulado**: Valor da ordem que foi anulado.

- **Observações**: Anotações adicionais relacionadas à ordem de compra.

## Itens

Retorna informações como:

- **Número do Empenho**: Identificação do empenho associado ao item.

- **Código do Empenho**: Código do empenho do exercício.

- **Código do Material**: Identificação do material ou serviço.

- **Descrição do Material**: Descrição completa do material ou serviço.

- **Valor Unitário**: Valor por unidade do material ou serviço.

- **Total**: Valor total do item.

## Movimentações no Estoque

Retorna registros pertinentes à movimentação dos itens da ordem de compra, bem como sua movimentação de entrada e outros tipos de movimentações como anulação.
`,
  "Consulta Fornecedor": `
Esta rotina exibe dados do fornecedor cadastrado previamente no cadastro de fornecedores do módulo compras.

**DB:PATRIMONIAL > Compras > Consultas > Consulta Fornecedor**

## Filtro de Pesquisa

**Fornecedor**: O usuário deverá informar o código do fornecedor. Caso desconheça o código poderá optar pela pesquisa, clicando no link "Fornecedor". O e-cidade abrirá uma listagem de pesquisa com campos adicionais como:

- **Fornecedor**: Código do fornecedor
- **Nome/Razão Social**: Nome ou razão social do fornecedor
- **CNPJ/CPF**: Documento do fornecedor
- **Data Lançamento**: Data de cadastro do fornecedor

Estes campos podem ser utilizados como filtros a fim de refinar a busca e consequentemente o resultado.

## Dados Fornecedor

Na parte superior da tela o sistema irá exibir informações como:

- **Nome/Razão Social**: Nome ou razão social do fornecedor
- **CNPJ/CPF**: Número do CNPJ ou CPF do fornecedor
- **Data Lançamento**: Data em que o fornecedor foi cadastrado
- **Bloqueado**: Indicativo se o fornecedor está bloqueado ou não
- **Objeto Social**: Descrição do objeto social do fornecedor

## Detalhamento

### Consulta Contas

Retorna informações referente aos dados bancários do fornecedor.

### Consulta Movimentos

Lista de movimentos lançados na aba Movimento no cadastro de fornecedor.

### Grupo de Fornecimento

Retorna os grupos de fornecimento vinculado no momento do cadastro do fornecedor (aba Subgrupo).
`,
  "Cotações de Preços": `
Nesta rotina é possível realizar a emissão da relação dos orçamentos de solicitações realizados por determinado período, por razão social ou ainda por material.

**DB:PATRIMONIAL > Compras > Consultas > Cotações de Preços**
`,
  "Consulta Item": `
Esta rotina exibe dados do fornecedor cadastrado previamente no cadastro de fornecedores do módulo compras.

**DB:PATRIMONIAL > Compras > Consultas > Consulta Fornecedor**

## Filtro de Pesquisa

**Fornecedor**: O usuário deverá informar o código do fornecedor. Caso desconheça o código poderá optar pela pesquisa, clicando no link "Fornecedor", o e-cidade abrirá uma listagem de pesquisa com campos adicionais como Fornecedor, Nome/Razão Social, CNPJ/CPF e Data Lançamento que poderão ser utilizados como filtros a fim de refinar a busca o e consequentemente o resultado.

## Dados Fornecedor

Na parte superior da tela o sistema irá exibir informações como Nome/Razão Social, CNPJ/CPF, Data Lançamento, Bloqueado, Objeto Social conforme a imagem abaixo:

## Detalhamento

### Consulta Contas
Retorna informações referente aos dados bancários do fornecedor.

### Consulta Movimentos
Lista de movimentos lançados na aba Movimento no cadastro de fornecedor.

### Grupo de Fornecimento
Retorna os grupos de fornecimento vinculado no momento do cadastro do fornecedor (aba Subgrupo).

### Certificados
Lista de certificados já emitidos para o fornecedor.
`,
  "Saldo da Despesa": `
Para consultar o saldo de uma Despesa no orçamento, acesse the menu:

**Patrimonial > Compras > Consultas > Saldo da Despesa**

Ao acessar o menu é possível consultar a despesa de duas formas:

1. Pode-se colocar diretamente o reduzido da dotação;
2. Caso não tenha esse dado, é possível clicar nos combobox e buscar os dados cadastrados no módulo orçamento:

- **Código Órgão**: Buscar na lista os órgãos cadastrados no orçamento e selecionar;
- **Código Unidade**: Buscar na lista as Unidades cadastradas no orçamento e selecionar;
- **Código da Função**: Buscar na lista as Funções cadastradas no orçamento e selecionar;
- **Sub Função**: Buscar na lista as Subfunções cadastradas no orçamento e selecionar;
- **Programas Orçamento**: Buscar na lista os Programas cadastrados no orçamento e selecionar;
- **Projetos / Atividades**: Buscar na lista os projetos/atividades cadastrados no orçamento e selecionar;
- **Elemento**: Buscar na lista os elementos cadastrados no orçamento e selecionar;
- **Fonte de Recursos**: Buscar na lista as Fontes de Recusrso cadastradas no orçamento e selecionar;

Após pesquisar, o sistema demonstra os dados da dotação escolhida para visualização:

Apresentação dos dados da dotação, saldos e também a lista detalhada de reservas vinculadas a ela, caso tenha.
`,
  "Consulta Empenho": `
\`\`\`
DB:PATRIMONIAL > Contratos > Consultas > Consulta Empenho
\`\`\`

Permite a consulta de empenhos da instituição. Exibe os filtros com ícones:

- **Número do empenho**: Permite buscar por número do empenho, sequencial do empenho, nome/razão social e cnpj/cpf;
- **Sequencial do empenho**: Permite buscar por número do empenho, sequencial do empenho, nome/razão social e cnpj/cpf;
- **Reduzido**: Permite buscar pelo reduzido ou pelo estrutural da despesa;
- **Código do material**: Permite buscar por código do material, descrição do material e se ativo/inativo;
- **Numcgm**: Permite buscar pelo número do cgm do contratado, nome/razão social e cnpj/cpf;
- **Data de emissão**: Permite preencher período;
- **Ordem**: Permite buscar pelo número da ordem de compra, código do elemento e valor da ordem;
- **Processo administrativo**: Permite preencher o campo com número do processo.

Após selecionar o empenho, terá informações de resumo da movimentação, itens do empenho, lançamentos contábeis, notas de liquidação, pagamento, ordens de compra, solicitações de compra, processo de compras, agenda de pagamentos, contratos e imprimir a consulta. Também traz as informações cadastradas na emissão do empenho:

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image43.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image43.png)
`,
  "CGM": `
**Patrimonial > Compras > Consulta > CGM**

Nesta rotina é possível realizar a consulta por informações de um determinado CGM (Cadastro Geral Municipal).

Na tela de pesquisa será solicitado o número do CGM, caso o usuário desconheça, poderá clicar no link "Numcgm" e pesquisar por filtros adicionais.

## Dados Cadastrais
Retorna informações gerais como nome/razão social, CPF, Data de Nascimento, Nome Pai, Nome Mãe, entre outras.

## Detalhamento do Cadastro

### Endereço Principal
Consta informações a respeito do endereço cadastrado como principal.

### Endereço Secundário
Consta informações a respeito do endereço cadastrado como secundário.

### Documentos
Constam os documentos vinculados ao cadastro do CGM na aba "Documentos" na inclusão de CGM. Estes documentos adicionais são tratados em forma de texto, portanto para visualizar o usuário terá que clicar em "Ver".

### Emprego
Informações como Profissão, CBO, PIS/PASEP/CI, Renda e Local de Trabalho.

### Outras Informações
Informações como o login do usuário que incluiu o CGM, a data da última alteração e data do cadastro do CGM.

### Alterações
Existindo uma ou mais alterações, o usuário poderá clicar em "Alterações" para visualizar outras existentes. Ao clicar sobre a linha, o e-cidade irá exibir a posição e os respectivos dados referente a posição. Para visualizar o CGM na posição original atual, basta clicar no botão "Original".

### Usuário do processo eletrônico
Exibirá informações referente as credenciais do eauth. Portanto caso o CGM possua um usuário no processo eletrônico este será exibido nesta opção.
`,
  "Abertura Registro de Preço": `
Esta rotina permite realizar consulta dos registros de preços lançados no e-cidade, ou seja, é possível consultar a numeração das estimativas, quais departamentos lançaram estimativas, se já foi compilado, se foi realizado o processamento da compilação e originado o processo de compras, bem como verificar os itens lançados, cedências entre outras informações.

**DB:PATRIMONIAL > Compras > Consultas > Abertura Registro de preço**

Os possíveis filtros que podem ser utilizados são:

- **Abertura do Registro**: número da abertura
- **Estimativa do Registro**: número da estimativa
- **Compilação do Registro**: número da compilação
- **Data**: período definido no momento da inclusão da abertura do registro de preço.
- **Departamento**: departamento responsável pela inclusão da abertura do registro.

Ao informar algum filtro específico como abertura, estimativa, compilação o sistema abrirá a tela abaixo:

## Dados da Abertura Registro Preço

Na parte superior da tela, teremos informações gerais como o número da abertura do registro de preço, vigência definida na abertura, departamento responsável pela inclusão, data de inclusão, data da anulação (se aplicável), forma de controle bem como o resumo definido no momento da abertura.

## Estimativas

Ao selecionar essa opção será listado todas as estimativas lançadas para o registro de preço. Clicando duas vezes sobre a estimativa, o e-cidade exibirá mais informações a respeito da mesma e informações de quantitativos lançados.

Na parte da tela inferior o e-cidade possui um botão **"Imprimir"** se desejar, poderá efetivar a emissão dos dados em um relatório clicando sobre este botão.

## Compilação

Através desse botão o sistema retorna informações referentes a data de emissão da compilação, data da vigência, departamento que efetivou, se a mesma foi processada, se sim, qual o número do processo de compras e data em que foi cancelada, se for o caso.

Clicando duas vezes sobre a compilação, o e-cidade exibirá mais informações a respeito da mesma e informações com fornecedor e valor unitário homologado, quantidade máxima entre outras.

## Itens

Nesta opção o e-cidade listará os materiais que compõem a Abertura do Registro de Preço, seu respectivo resumo e unidade.
`,
  "Consulta Processo de Compras": `
Esta rotina permite consultar diversas informações relacionadas ao Processo de Compras, podendo ser filtrado por data de emissão, pela solicitação de compras que originou o processo de compras e diretamente pelo número do processo de compras.

**DB:PATRIMONIAL > Compras > Consultas > Consulta Processo de Compras**

Ao enviar dados, o e-cidade carregará a tela com as seguintes informações:

## Dados do Processo de Compras
Exibirá informações como o número, departamento de inclusão, código e nome do usuário responsável, data de inclusão, situação e o resumo do processo de compras.

## Itens
Exibirá os itens que compõem o Processo de Compras.

## Licitações
Caso o processo de compras esteja vinculado a uma licitação, a mesma será exibida nesta opção.

## Autorização de Empenho
Caso o processo de compras tenha originado uma ou mais Autorização de Empenho, o e-cidade exibirá nesta opção.

## Empenhos
Caso o processo de compras tenha originado um ou mais Empenho, o e-cidade exibirá nesta opção.

## Acordo
Caso o processo de compras tenha originado um contrato conforme está origem, o mesmo será listado nesta opção.

## Registro de Preço
Caso o processo de compras tenha sido gerado a partir de um processamento de compilação de registro de preço, o mesmo será exibido aqui.
`,
  "Licitação - Consulta Licitações": `
\`\`\`
DB:PATRIMONIAL > Licitações > Consultas > Licitação
\`\`\`

Permite consultar informações de licitações incluídas no sistema.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image80.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image80.png)

Para pesquisa estão disponíveis os filtros:

- **Modalidade de compra:** buscar licitações por modalidade de compra, mas na consulta tem que selecionar por licitação individual;
- **Licitação:** buscar pelo ícone licitação desejada;
- **Processo de compras:** buscar diretamente pelo número do processo de compras vinculado a licitação;
- **Número da solicitação:** buscar diretamente pelo número da solicitação de compras originária da licitação.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image18.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image18.png)

Após processar a consulta, o sistema abre a tela acima com as informações principais como Cód. sequencial, número do processo administrativo, edital, exercício, modalidade, numeração, data da criação, hora da criação, data da abertura da licitação, hora da abertura, data da última situação registrada, data da publicação, cód. do usuário que inseriu no sistema, situação atual, local da licitação, objeto da licitação e tipo(se gera despesa ou não).

A primeira aba itens/licitações, traz os itens listados em ordem sequencial, com respectivos ganhadores e valores licitados em caso de licitação julgada, e caso em andamento, com valor da média registrada.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image76.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image76.png)

A aba processo de compras, traz as informações do código do processo de compras vinculado, data de criação do mesmo, usuário que criou, descrição do documento e resumo informado no processo de compras.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image77.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image77.png)

A aba solicitações de compras, traz as informações de numeração da solicitação originária da licitações, número de processo administrativo(se informado na criação da solicitação), usuário criador da solicitação e o departamento em que a mesma foi criada.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image19.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image19.png)

A aba situações da licitação, traz a listagem de movimentos feitos na licitação, como em andamento, julgada, cancelamento de julgamento, bem como o usuário que executou, data, hora e observações descritas na movimentação.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image85.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image85.png)

A aba editais, traz o anexo incluído na rotina abaixo permitindo o download do mesmo,

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Edital Web > Anexa Arquivo Edital
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image49.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image49.png)

A aba atas, traz o anexo incluído na rotina abaixo permitindo o download do mesmo.

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Ata > Upload
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image48.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image48.png)

A aba minutas,, traz o anexo incluído na rotina abaixo permitindo o download do mesmo.

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Ata > Upload
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image32.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image32.png)

A aba acordos, traz a informação de acordo vinculado, desde que na criação do acordo o mesmo seja de origem licitação e vinculado a esta licitação.
`,
  "Edital(Download) - Consulta Licitações": `
\`\`\`
DB: PATRIMONIAL > Licitações > Consultas >Edital(Download)
\`\`\`

Permite a consulta de fornecedores que fizeram o download no DBPref.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image67.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image67.png)

Ao realizar a consulta o sistema informa os dados cadastrados na licitação e no campo baixa de editais, traz o registro de quem fez o download na web.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image94.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image94.png)
`,
  "CGM - Consulta Licitações": `
\`\`\`
DB:PATRIMONIAL > Licitações > Consultas > CGM
\`\`\`

Permite a busca de cgm cadastrado.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image75.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image75.png)

Após selecionar o cgm interessado, a tela traz as informações de acordo com o tipo de cgm, se pessoa física ou jurídica.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image4.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image4.png)

Se pessoa física o sistema traz as informações de número do cgm, cpf, nome da mãe, nome do pai, data de nascimento, estado civil, sexo, nacionalidade, observação.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image17.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image17.png)

Se pessoa jurídica o sistema traz as informações de número do cgm, nome/razão social, cnpj, inscrição estadual, nome fantasia, contato e observação.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image35.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image35.png)

Independente do tipo a consulta tem 4 abas iguais, sendo somente diferente a aba emprego no cadastro de pessoa física. Na aba endereço principal traz o endereço principal cadastrado.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image2.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image2.png)

A aba endereço secundário, aparece o endereço que foi cadastrado como secundário na inclusão do cgm.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image106.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image106.png)

A aba documentos, traz o documento cadastrado na inclusão de cgm, na aba documentos. Permite visualizar o cadastrado.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image31.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image31.png)

A aba emprego, só existe na consulta de pessoa física e traz as informações de ocupação cadastradas na inclusão de cgm.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image71.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image71.png)

A aba outras informações traz informações de login de cadastro, data do cadastro e última alteração.
`,
  "Acordo": `
\`\`\`
DB:PATRIMONIAL > Contratos > Consultas > Acordos
\`\`\`

Permite buscar pelo número do acordo, origem, contratado e departamento os acordos cadastrados. Cada ícone desses, permite um maior filtro de buscas assim que selecionado:

- **Acordo**: permite a busca pelo acordo (número de acordo gerado pelo sistema), o número do acordo(numeração indicada pelo cliente no cadastro) e pelo grupo de acordo;
- **Origem**: permite selecionar na relação já disponibilizada;
- **Contratado**: permite buscar pelo número do cgm, cpf, cnpj e nome/razão social;
- **Departamento**: permite buscar por órgão, unidade, departamento e descrição do departamento.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image52.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image52.png)

A consulta traz informações de itens do acordo, empenhamentos, posições do acordo, rescisões, paralisações, anulações, documentos cadastrados e comissões. Além das informações iniciais cadastradas na inclusão, conforme tela abaixo:

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image22.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image22.png)
`,
  "Acordo - Procedimentos": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Acordo > Inclusão
\`\`\`

Permite a inclusão de acordos sendo necessários o preenchimento de:

- **Origem:** essas podem ser manual, empenho, licitação e processo de compras, sendo:
- **Manual:** inclusão de todos os dados pelo cliente, sem vínculo com outras rotinas;
- **Empenho:** se selecionada essa origem, deverá ser preenchido o campo empenho e após a inclusão, selecionado o botão ao final da tela para vincular o empenho:

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image4.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image4.png)

Nesse caso, os itens aparecerão automaticamente quando formos a aba itens, devendo somente ser incluídos;

- **Licitação:** buscando-se pelo número do cgm do contratado selecionando a origem licitação, o sistema já traz automaticamente as licitações que o mesmo teve itens ganhos e selecionada a desejada, após a inclusão na aba itens traz somente os itens em que ele venceu, já com os valores e informações necessárias, precisando somente incluir:

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image44.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image44.png)

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image23.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image23.png)

- **Processo de compras:** buscando-se pelo número do cgm do contratado selecionando a origem processo de compras, o sistema traz todas as informações de processo de compras com orçamento julgado, vinculado ao credor selecionado:

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image55.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image55.png)

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image40.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image40.png)

- **Origem:** Pode ser execução continuada ou escopo;
- **Acordo grupo:** Pode-se buscar pelo ícone, trata-se de grupo de acordo incluído nos cadastros;
- **Número:** é gerado automaticamente de acordo com o cadastrado na aba número do grupo de acordo e sequencial de acordos incluídos;
- **Contratado:** Se tratar-se de contrato de origem licitação ou processo de compras, realiza a busca dos registros cadastrados. Nos demais casos, é preenchido para registro;
- **Departamento responsável:** Departamento responsável pelo acordo incluído;
- **Comissão:** Comissão incluída nos cadastros, responsável por fiscalizar o acordo;
- **Nmero do processo:** número do processo administrativo;
- **Quantidade de renovação:** quantidade de dias ou meses que o acordo poderá ser renovado;
- **Contrato emergencial:** Se trata-se ou não de contrato emergencial;
- **Data da assinatura:** data em que foi assinado o contrato;
- **Período por mês comercial:** se deve ser considerado mês comercial ou não;
- **Categoria:** permite selecionar a categoria dentre as incluídas no cadastro;
- **Tipo de instrumento:** permite identificar o tipo de instrumento do acordo incluído;
- **Depende de ordem de início:** Se selecionado sim, para os demais andamentos do acordo, deverá ser incluída data de início na rotina de inclusão de eventos;
- **Vigência:** Deve ser indicado o tempo de contrato;
- **Objeto do contrato:** Descrever do que se trata o acordo que está sendo incluído;
- **Resumo do objeto:** Descrição objetiva do acordo.

Preenchidas as informações acima, selecionar o botão incluir e um sequencial de contrato é gerado automaticamente. Após a tela é redirecionada para aba itens, se tratar-se de acordo dos tipos empenho, processo de compras ou licitações, os itens já virão pré determinados para serem selecionados e incluídos. Em caso de acordo de origem manual, será necessário selecionar o ícone de material, buscar o material informado, preencher quantidade, unidade, valor unitário, desdobramento,
previsão de execução (deve se clicar em adicionar após o preenchimento) e resumo do objeto. Após tudo preenchido, clicar em incluir.

Após temos a aba garantias, que permite selecionar pelo ícone acordo garantia, a garantia referente ao acordo incluído, que foi cadastrada previamente.

Existe também a aba penalidades, que permite selecionar pelo ícone penalidades, a relativa a esse acordo que já está previamente cadastrada no sistema.

Por último, a aba documentos, que permite o download de arquivo para anexar ao acordo e o mesmo fica disponível na consulta.

### Alteração

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Acordo > Alteração
\`\`\`

Permite se alterar as informações cadastradas no acordo quando ainda não homologado, exceto grupo de acordo, contratado, departamento responsável, comissão e vigência na aba acordo, as demais abas permitem alterações. Após homologado, só permite se alterar os campos número, tipo de instrumento e depende de ordem de início na aba acordo, além das informações das abas itens, garantias, penalidades e documentos.

Basta alterar os descritos e selecionar o botão alterar.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Acordo > Exclusão
\`\`\`

Permite excluir contratos ainda não homologados. Basta acessar a rotina, selecionar o acordo desejado e clicar no botão excluir e confirmar.
`,
  "Acordo - Procedimentos - Página 2": `
# Execução do Acordo

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Acordo > Execução
\`\`\`

Permite selecionar o acordo e incluir, selecionando o botão manutenção ao lado de cada item o valor, a vigência, número de nota fiscal e número de processo de cada execução.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image7.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image7.png)

Após preenchido, clicar em salvar. Ficam salvos todas as execuções incluídas e é calculado o percentual automático do que já foi executado.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image46.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image46.png)
`,
  "Acordo - Procedimentos - Página 3": `
# Autorização de Empenho

### Gerar Autorizações

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Acordo > Gerar Autorizações
\`\`\`

Permite gerar autorização de empenho dos contratos homologados incluídos. Basta acessar a rotina, buscar o acordo desejado no ícone acordo. Após selecioná-lo clicar em pesquisar, o mesmo vai aparecer no quadro abaixo, clicar sobre ele duas vezes. Automaticamente se abrem os itens deste no quadro abaixo, permitindo incluir dotações, selecionar quantidade e se serviço valores a autorizar.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image15.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image15.png)

Após a inclusão de dotações e preenchimento de quantidades e valores a empenhar, selecionar visualizar autorizações. Na tela que se abrirá, preencher os campos destino, tipo( que se refere ao tipo de compra), tipo de licitação, número da licitação, tipo de empenho, característica peculiar, prazo de entrega, condições de pagamento e observações.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image6.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image6.png)

Após preenchido, selecionar incluir autorizações. Se abre então a tela com a prévia das autorizações a serem geradas. após conferidos os dados, selecionar gerar autorizações e automaticamente vai gerar o número e permite a impressão dos dados.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image16.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image16.png)

### Cancelar autorização

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Acordo > Cancelar Autorização
\`\`\`

Permite cancelar autorização gerada no módulo, vinculada a acordo. Basta buscar pelo acordo, clicar em pesquisar, selecionar a autorização desejada e clicar em anular.
`,
  "Acordo - Procedimentos - Página 4": `
# Anexar Documentos

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Acordo > Anexar Documentos
\`\`\`

Permite anexar documentos a acordo. Basta selecionar o acordo, buscar o documento a ser anexado, preencher a descrição e clicar em salvar.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image27.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image27.png)
`,
  "Acordo - Procedimentos - Página 5": `
# Vincular contratos com empenhos

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Acordo > VincularContrato com Empenhos
\`\`\`

Permite vincular contratos com empenhos quando não foram realizados na inclusão do contrato nem na emissão do empenho. Basta acessar a rotina, buscar pelo contrato, buscar o empenho desejado, e clicar em adicionar.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image8.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image8.png)
`,
  "Acordo - Procedimentos - Página 6": `
# Eventos

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Acordo > Eventos
\`\`\`

Permite incluir eventos ao acordo. Basta selecionar o acordo, o tipo de evento, preencher a data e clicar em incluir. Todos os eventos incluídos ficam disponíveis nessa tela para visualização.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image48.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image48.png)
`,
  "Homologação": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Homologação > Inclusão
\`\`\`

Permite incluir a homologação do contrato. Basta acessar a rotina, selecionar o acordo desejado, preencher o campo observação e incluir.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image38.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image38.png)

### Cancelamento

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Homologação > Cancelamento
\`\`\`

Permite cancelar homologação do contrato. Basta acessar a rotina, selecionar o acordo desejado, preencher o campo observação e clicar em cancelar.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image5.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image5.png)
`,
  "Recisão do Contrato": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Rescisão do Contrato > Inclusão
\`\`\`

Permite incluir rescisão de contrato. Basta acessar a rotina, selecionar o contrato, preencher a data e a observação e clicar em incluir.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image42.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image42.png)

### Cancelamento

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Rescisão do contrato > Cancelamento
\`\`\`

Permite cancelar a rescisão do contrato. Basta acessar a rotina, selecionar o acordo desejado, preencher o campo observação e clicar em cancelar.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image14.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image14.png)

### Cancelar cancelamento:

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Rescisão de contrato > Cancelar Cancelamento
\`\`\`

Permite cancelar o cancelamento da anulação do acordo. Basta acessar a rotina, selecionar o cancelamento e clicar em cancelar.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image32.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image32.png)
`,
  "Aditamentos": `
### Reequilíbrio financeiro

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Aditamentos > Reequilíbrio Financeiro
\`\`\`

Permite incluir aditamento de reequilíbrio financeiro, alterando os valores no acordo. Basta acessar a rotina, selecionar o acordo desejado, preencher os campos número do aditamento, observações e selecionar os itens a serem aditados com as quantidades e valores unitários. Depois, só clicar em salvar reequilíbrio.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image33.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image33.png)

### Quantidade/Valor

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Aditamentos > Quantidade/Valor
\`\`\`

Permite incluir aditamento de alteração de quantidade e/ou valor. Basta acessar a rotina, selecionar o acordo desejado, preencher os campos número do aditamento, observações e selecionar o tipo de operação e os itens a serem aditados preenchendo as quantidades e valores unitários. Depois, só clicar em salvar aditamento.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image53.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image53.png)

Nesta opção também é permitido adicionar itens, clicando em adicionar itens, buscando o item, preenche-se então os campos quantidade, valor unitário, desdobramento, unidade, resumo do item, preencher a vigência e adicionar. Após só clicar em salvar, não esquecendo de clicar em salvar aditamento após.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image60.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image60.png)

### Prazo

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Aditamentos > Prazo
\`\`\`

Permite incluir aditamento de prazo. Basta acessar a rotina, selecionar o acordo desejado, preencher os campos número do aditamento, vigência, justificativa e verificar o valor unitário dos itens. Depois, só clicar em salvar prazo.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image17.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image17.png)

### Renovação

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Aditamentos > Renovação
\`\`\`

Permite incluir aditamento de renovação, criando novas datas para vencimento do acordo. Basta acessar a rotina, selecionar o acordo desejado, preencher os campos número do aditamento, vigência, justificativa e verificar a quantidade e o valor unitário dos itens para caso precise de acerto. Depois, só clicar em salvar renovação.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image61.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image61.png)

### Supressão de quantidade/valor

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Aditamentos > Supressão de Quantidade/Valor
\`\`\`

Permite incluir aditamento de supressão de quantidade e/ou valor, quando a diminuição em um dos quesitos no contrato. Basta acessar a rotina, selecionar o acordo desejado, preencher os campos número do aditamento, justificativa, selecionar o tipo de operação e verificar a quantidade e o valor unitário dos itens para caso precise de acerto. Depois, só clicar em salvar supressão.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image56.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image56.png)
`,
  "Aditamentos - Página 2": `
# Alterar Dotações do Contrato

Permite inserir ou alterar dotações dos contratos e de suas posições.

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Aditamentos / Apostilamentos > Alteração de Dotação;
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image65.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image65.png)

- **Acordo:** Permite a seleção do contrato que irá sofrer a manutenção. Ao clicar no link em azul, o sistema irá exibir todos os acordos disponíveis para o departamento que o usuário está logado, permitindo aplicar filtros para facilitar a busca.
- **Pesquisar Posições:** Ao clicar neste campo, o sistema exibirá todas as posições do contrato selecionado, permitindo que você escolha qual delas deseja ajustar. As posições apresentadas são as mesmas disponíveis na rotina de gerar autorização de empenho.
- **Incluir evento automático:** Ao marcar essa opção, o sistema exibirá novos campos para preenchimento, conforme imagem a seguir, e irá incluir um evento automático no acordo. Marque este campo quando desejar enviar a alteração de dotação para o Licitacon-TCE/RS.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image66.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image66.png)

- *Número do termo:* Informe o número do termo que determina a alteração de dotação que está sendo realizada. Campo de preenchimento obrigatório.
- *Tipo de Alteração:* Informe o tipo de termo que resultou na alteração do contrato. Você pode escolher entre as opções de Aditamento e Apostilamento. Se selecionar "Aditamento" e salvar as alterações, o sistema incluirá automaticamente um evento com o tipo "Termo Aditivo". No entanto, se optar por "Apostilamento", o evento gerado automaticamente terá do tipo "Apostila".
- *Justificativa:* Este campo é opcional e serve para que você possa inserir uma justificativa para a alteração realizada no contrato.

Para ajustar as dotações do acordo, clique duas vezes na posição que deseja alterar, marque os itens que precisam ser modificados e clique no campo Dotações.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image67.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image67.png)

- Para remover a dotação existente, clique no X em vermelho.
- Se quiser inserir novas dotações, clique no link Dotação e selecione a dotação que deseja incluir. Após preencher o campo Valor, clique em Adicionar e, em seguida, Salvar.

Para finalizar os ajustes realizados, clique no campo Salvar Alterações.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image68.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image68.png)
`,
  "Regime de Competência": `
### Programação

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Regime de Competência > Programação
\`\`\`

Permite a programação no sistema das competências de pagamentos do acordo em parcelas. Basta acessar a rotina, buscar pelo acordo e pesquisar. A tela que se abrirá precisa ter preenchidos os dados de conta e número de parcelas. Precisa ser selecionado se é despesa antecipada ou não e o mês inicial. Após isso clicar em processar e
configurar os valores dentro das parcelas, ressaltando que pode-se criar posteriormente nesta tela nova parcela, acessando o botão de mesmo nome e preenchendo o valor e mês de competência.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image37.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image37.png)

Após basta salvar o regime criado.

### Implantação de Contratos em Execução

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Regime de Competência > Implantação de Contratos em Execução
\`\`\`

Através desta rotina é possível realizar a implantação dos contratos em execução que serão reconhecidos por regime de competência com o objetivo de que não sejam realizados lançamentos contábeis de valores já executados, sendo possível informar no sistema através da coluna “Valor Implantado” a parte já quitada, para que não seja incluída nas parcelas.
`,
  "Paralisação": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Paralisação > Inclusão
\`\`\`

Permite incluir paralisação no acordo. Basta selecionar o acordo desejado, preencher os campos de data de início e observação, e clicar em incluir.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image1.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image1.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Paralisação > Alteração
\`\`\`

Permite alterar as informações de data de início e observação de uma paralisação de acordo. Basta selecionar o acordo desejado, alterar as informações e clicar no botão alterar.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image2.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image2.png)

### Exclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Paralisação > Exclusão
\`\`\`

Permite excluir paralisação de acordo. Basta acessar a rotina, selecionar o acordo e clicar em excluir.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image18.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image18.png)
`,
  "Reativação": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Reativação > Inclusão
\`\`\`

Permite reativar acordo depois de período paralisado. Basta acessar a rotina, buscar o acordo desejado, preencher as informações de retorno e observação, e processar. Nessa tela ficam disponíveis as informações de outras reativações.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image3.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image3.png)

### Cancelamento

Permite cancelar reativação de acordo incluída. Basta acessar a rotina, buscar pelo acordo e clicar em cancelar reativação.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image49.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image49.png)
`,
  "Anulação do Contrato": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Anulação do Contrato > Inclusão
\`\`\`

Permite anular o acordo desejado. Basta acessar a rotina, buscar o acordo, preencher data e observação e clicar em incluir.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image51.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image51.png)

### Cancelamento

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Anulação do Contrato > Cancelamento
\`\`\`

Permite cancelar a anulação do contrato. Basta selecionar o cancelamento, preencher o campo observação e clicar em cancelar.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image36.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image36.png)

### Cancelar cancelamento

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Anulação do Contrato > Cancelar Cancelamento
\`\`\`

Permite cancelar o cancelamento da anulação do acordo. Basta acessar a rotina, selecionar o cancelamento e clicar em cancelar.
`,
  "Assinatura do Contrato": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Assinatura do Contrato > Inclusão
\`\`\`

Permite incluir data da assinatura do contrato. Basta acessar a rotina, selecionar o contrato, preencher a data e o campo observações e, clicar em incluir.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image25.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image25.png)

### Cancelamento

\`\`\`
DB:PATRIMONIAL > Contratos > Procedimentos > Assinatura do Contrato     > Cancelamento
\`\`\`

Permite cancelar a assinatura incluída. Basta acessar a rotina, selecionar a assinatura a ser cancelada, preencher o campo observação e clicar em incluir.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image21.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image21.png)
`,
  "Modalidades": `
### Inclusão

A rotina permite ao usuário incluir modalidades que poderão ser utilizadas no trâmite de licitação. O processo abrange seis abas no sistema, conforme demonstrado nas figuras - modalidades, numeração, modelos de editais , modelo atas, modelo minutas e faixa de valores.

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Modalidades > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image113.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image113.png)

Na aba modalidade será preenchido:

- **Modalidade de Compra:** código sequencial - criado pelo sistema;
- **Descrição do tipo:** nome da modalidade licitatória;
- **Tipo da Licitação:** nome abreviado da modalidade licitatória;
- **Código da compra:** tipo de compra na qual a modalidade ficará vinculada;
- **Instituição:** Instituição que utilizará a modalidade cadastrada;
- **Código do Tribunal:** codigo do tribunal referente a modalidade sendo inclusa;
- **Usa Registro de Preço:** se a modalidade irá utilizar registro de preço ou não.

***OBS:*** Caso não tenha cadastrado o tipo de compra de acordo com a modalidade, será necessário incluir através da rotina:

\`\`\`
DB: FINANCEIRO > Contabilidade > Cadastros > Tipos de Compras > Inclusão
\`\`\`

Posteriormente deverá ser selecionado INCLUIR para confirmar e salvar as informações inseridas.

Na aba numeração será inserida a informação sequencial do exercício.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image89.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image89.png)

Nesta tela deve-se informar:

- **Ano:** ano do exercício
- **Numeração:** número inicial da licitação na modalidade cadastrada. Nos casos de implantação do sistema após o início do exercício, deve-se cadastrar o número da última licitação realizada nesta modalidade.

Na aba modelo editais, será selecionado o arquivo modelo para emissão dos editais do processo licitatório.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image66.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image66.png)

**Modelo de editais:** escolha de um modelo de edital para cada modalidade de licitação. Para realizar a inclusão de um novo modelo de edital é preciso acessar o menu:

\`\`\`
DB:CONFIGURAÇÃO > Configuração > Procedimentos > Manutenção de Documentos/Template > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image15.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image15.png)

**Modelo de atas:** escolha de um modelo de ata para cada modalidade de licitação. Para realizar a inclusão de um novo modelo de ata é preciso acessar o menu:

\`\`\`
DB:CONFIGURAÇÃO > Configuração > Procedimentos > Manutenção de Documentos/Template > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image8.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image8.png)

**Modelo:** escolha de um modelo de minuta para cada modalidade de licitação. Para realizar a inclusão de um novo modelo de minuta é preciso acessar o menu:

\`\`\`
DB:CONFIGURAÇÃO > Configuração > Procedimentos > Manutenção de Documentos/Template > Inclusão
\`\`\`

Na última aba de preenchimento de informação, apresenta-se Faixa de Valores, onde será cadastrado valores relacionados à modalidade de licitação.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image84.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image84.png)

Nesta tela deve-se informar:

- **Valor mínimo:** refere-se ao valor mínimo para realizar a licitação
- **Valor máximo:** refere-se ao valor limite de acordo com cada licitação
- **Data inicial:** data da inicial da inclusão da modalidade
- **Data Final:** data final para validação destes valores

O sistema possibilita e disponibiliza rotinas para *ALTERAÇÃO* e *EXCLUSÃO* de modalidades no sistema, contudo as mesmas só poderão ser realizadas desde que não haja numeração de licitação incluída no sistema.

### Alteração

A rotina permite ao usuário alterar as modalidades que poderão ser utilizadas no trâmite de licitação.

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Modalidades > Alteração
\`\`\`

### Exclusão

A rotina permite ao usuário excluir as modalidades existente no módulo licitação.

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Modalidades > Exclusão
\`\`\`
`,
  "Cadastro de Locais": `
### Inclusão

Cadastro no qual serão incluídos os locais onde se realizarão os certames licitatórios.

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Cadastro de Locais > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image38.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image38.png)

Nesta tela deve-se informar:

- **Código sequencial:** código sequencial criado pelo sistema;
- **Código do Logradouro:** nome da rua onde serão realizados os certames licitatórios. Caso desconheça o código, poderá o usuário pesquisá-lo no link código do logradouro, sublinhado;
- **Número:** número do local;
- **Complemento:** dados adicionais do endereço;
- **Código do Bairro:** nome do bairro onde se localiza o local cadastrado. Caso desconheça o código, poderá o usuário pesquisá-lo no link código do bairro, sublinhado.
- **Observação:** observação relativa ao local dos certames licitatórios.

Preenchidos os campos, confirma-se a operação ao clicar no botão incluir.

### Alteração

O sistema possibilita e disponibiliza rotinas para *ALTERAÇÃO* e *EXCLUSÃO* de cadastros de locais no sistema, contudo as mesmas só poderão
ser realizadas desde que não haja numeração de licitação incluída no sistema.

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Cadastro de Locais > Alteração
\`\`\`

### Exclusão

O sistema possibilita e disponibiliza rotinas para *ALTERAÇÃO* e *EXCLUSÃO* de cadastros de locais no sistema, contudo as mesmas só poderão
ser realizadas desde que não haja numeração de licitação incluída no sistema.

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Cadastro de Locais > Exclusão
\`\`\`
`,
  "Cadastro de Comissão": `
### Inclusão

Neste procedimento de inclusão será realizado o cadastro da comissão de licitações no sistema.

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Cadastro de Comissão > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image111.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image111.png)

A rotina apresenta a aba participantes para que possa ser cadastrado através do vínculo com CGM - Cadastro Geral do Município, cada participante e o tipo de participação.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image55.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image55.png)

Nesta tela deve-se informar:

- **Membro:** Buscar participante pelo cgm;
- **Tipo:** escolher entre presidente, membro, pregoeiro, suplente, equipe de apoio, servidor designado, leiloeiro e secretário;
- **Cargo:** cargo do participante que está sendo cadastrado;
- **Tipo de cargo:** escolher entre agente político, comissionado, efetivo, outros, empregado público e empregado temporário;
- **Número do ato de designação:** número de publicação do ato de designação do participante para esta comissão;
- **Ano do ato de designação:** ano em que o participante foi designado para a comissão;
- **Data de designação:** data em que o participante teve publicada a designação.

### Alteração

Permite a alteração de dados das comissões cadastradas.

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Cadastro de Comissão > Alteração
\`\`\`

### Exclusão

Permite a exclusão das comissões cadastradas.

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Cadastro de Comissão > Exclusão
\`\`\`
`,
  "Cadastro": `
### Inclusão

Neste procedimento de inclusão será realizado o cadastro da comissão de fornecedores no sistema. O processo abrange seis abas no sistema, conforme demonstrado nas figuras : fornecedor, contas banco , movimento, subgrupo, representantes legais e identificação do fornecedor.

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Cadastro > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image11.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image11.png)

Na aba fornecedor será preenchido:

- **Fornecedor:** seleciona-se pelo cgm desejado;
- **Objeto social:** descrever o objeto social do fornecedor;
- **Bloqueado:** selecionar se sim ou não;
- **Contribuinte do CPRB:** selecionar se contribuinte do CPRB( ContribuiçãoPrevidenciária sobre Receita Bruta) ou não.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image12.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image12.png)

Na aba contas banco será preenchido:

- **Fornecedor:** busca pelo cgm;
- **Banco:** código do banco do fornecedor;
- **Agência:** código da agência do fornecedor sem o dígito;
- **DIV agência:** dígito da agência do fornecedor;
- **Conta:** Código da conta do fornecedor sem o dígito;
- **DIV conta:** dígito da conta do fornecedor;
- **Tipo da conta:** se conta corrente ou conta poupança;
- **CNPJ/CPF:** número do cpf ou cnpj do fornecedor;
- **Identificação do cliente:** número de identificação bancária do fornecedor;
- **Conta padrão:** selecionar sim ou não.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image102.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image102.png)

Na aba movimento será preenchido o campo histórico, com o histórico de lançamentos de movimentação.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image10.png)

Na aba subgrupo, deve ser selecionado a que subgrupos o fornecedor em questão está ligado.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image82.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image82.png)

Na aba representantes legais designa fornecedores que tem representante legal, deverá ser preenchido os campos:

- **CGM do representante:** selecionar cgm do representante legal;
- **Data inicial:** data inicial da representação legal;
- **Data final:** data final da representação legal;
- **Observações:** campo para acrescentar detalhe importante sobre o representante legal.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image101.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image101.png)

Na aba identificação do fornecedor, selecionar inscrição genérica. Essa inscrição é feita na rotina:

\`\`\`
DB:FINANCEIRO > Orçamento > Cadastros > Programas > Inclusão
\`\`\`

### Alteração

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Cadastro > Alteração
\`\`\`

### 3.4.3 Exclusão

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Cadastro > Exclusão
\`\`\`
`,
  "Tipo de Empresas": `
### Alteração

Neste procedimento só se permite alteração dos tipos já existentes que são: normal, ME e EPP.

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Tipos de Empresas > Alteração
\`\`\`

Pode-se alterar o percentual de vantagem em licitações.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image29.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image29.png)
`,
  "Movimentação de Registro de Preços": `
### Inclusão

A rotina permite a inclusão de tipo de movimentações de registro de preços.

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Movimentação de Registros de Preços > Inclusão
\`\`\`

Necessário preencher apenas o campo descrição.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image72.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image72.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Movimentação de Registros de Preços > Alteração
\`\`\`

### Exclusão

\`\`\`
DB:PATRIMONIAL > Licitações > Cadastros > Movimentação de Registros de Preços > Exclusão
\`\`\`
`,
  "Configuração dos Editais - Procedimentos Licitações": `
\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Configuração dos Editais
\`\`\`

Permite configurar modelo de configuração dos editais.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image9.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image9.png)

A numeração deve ser a inicial do ano.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image61.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image61.png)

O modelo a ser cadastrado buscará da rotina:

\`\`\`
DB:CONFIGURAÇÃO > Configuração > Procedimentos > Manutenção de Documentos/Template > Inclusão
\`\`\`

Este pode ser excluído a qualquer tempo e substituído caso necessário.
`,
  "Edital Web - Procedimentos Licitações": `
### Anexa Arquivo Edital

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Edital Web > Anexa Arquivo Edital
\`\`\`

Inclusão de edital no DBPref.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image25.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image25.png)

### Libera > Inclusão

\`\`\`
DB: PATRIMONIAL > Licitações > Procedimentos > Edital Web > Libera > Inclusão
\`\`\`

Procedimento que libera o edital para ser disponibilizado no DBPref.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image1.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image1.png)

Preencher os campos:

- **Licitação:** buscar a licitação desejada;
- **Data da publicação:** data em que foi publicado o edital;
- **Contato:** contato para informações sobre a licitação;
- **Email:** email para informações sobre a licitação;
- **Telefone:** telefone para informações sobre a licitação;
- **Observação:** observações pertinentes ao edital;
- **Libera edital:** escolher se permite baixar o edital somente com cadastro ou não.

### Libera > Alteração

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Edital Web > Libera > Alteração
\`\`\`

Permite alterar informações cadastradas na inclusão.

### Libera > Exclusão

\`\`\`
DB: PATRIMONIAL > Licitações > Procedimentos > Edital Web > Libera > exclusão
\`\`\`

Permite excluir edital liberado.
`,
  "Licitação - Procedimentos Licitações": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Licitação > Inclusão
\`\`\`

A rotina permite a inclusão de licitações no sistema para posterior lançamento de propostas e julgamento. Consiste no preenchimento de 4 abas, sendo a última lotes, só em caso de escolha de julgamento por lote.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image7.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image7.png)

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image60.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image60.png)

Na aba Licitação, preenche-se campos como modalidade, datas e horas, local da licitação, objeto, local e prazo de entrega, condições de pagamento, validade da proposta, tipo de julgamento, comissão, processo, uso de registro de preços e tipo (gera despesa ou não).

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image83.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image83.png)

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image37.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image37.png)

Na aba informações complementares, são preenchidos dados como tipo de objeto, tipo de licitação, característica do objeto, regime de execução, participação de consórcios, benefícios para ME/EPP e informações de credenciamento/adesão quando aplicável.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image108.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image108.png)

Na aba Itens, buscar pelo processo de compras gerado no módulo compras, selecionar os itens e incluir.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image96.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image96.png)

A aba Lotes só será disponibilizada em caso de seleção de tipo de julgamento por lote.

### Alteração

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Licitação > Alteração
\`\`\`

Permite alteração de dados da inclusão da licitação, exceto os itens, tipo de julgamento, se usa registro de preços e se gera despesa. Algumas informações não serão passíveis de alteração caso já haja um Processo de Compras vinculado.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Licitação > Exclusão
\`\`\`

Permite exclusão dos dados da licitação.
`,
  "Licitação - Página 2 - Procedimentos Licitações": `
### Anulação de itens

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos  > Licitação> Anulação de itens
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image65.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image65.png)

Permite a anulação de itens da licitação após julgada. Basta buscar a licitação, selecionar os itens desejados e clicar em confirmar.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image39.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image39.png)

Após, incluir o motivo da anulação e incluir.

### Cancelar anulação de itens

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Licitação > Cancelar anulação de itens
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image97.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image97.png)

Permite cancelar a anulação de itens da licitação. Basta selecionar a licitação, os itens anulados a serem cancelados e confirmar.
`,
  "Licitação - Página 3 - Procedimentos Licitações": `
### Deserta

#### Inclusão

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Licitação > Deserta > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image26.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image26.png)

Essa rotina permite a inclusão de informação de licitação deserta. Basta selecionar a licitação, descrever o motivo e salvar.

#### Cancelar

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Licitação > Deserta > Cancelar
\`\`\`

Permite cancelar a informação de licitação deserta.

#### Alterar

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Licitação > Deserta > Alterar
\`\`\`

Permite alterar descrição do motivo de licitação deserta.
`,
  "Licitação - Página 4 - Procedimentos Licitações": `
### Revoga Licitação

#### Revoga

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Licitação > Revoga Licitação > Revoga
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image50.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image50.png)

Permite revogar licitação, selecionando-a e descrevendo motivo no campo observação.

#### Cancelar Revogação

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Licitação > Revoga Licitação > Cancelar Revogação
\`\`\`

Permite cancelar revogação de licitação.
`,
  "Licitação - Página 5 - Procedimentos Licitações": `
### Fracassada

### Incluir

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Licitação > Fracassada > Incluir
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image98.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image98.png)

Permite salvar informações de licitação fracassada. Basta selecionar a licitação em questão, descrever o motivo e salvar.

### Alterar

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Licitação > Fracassada > Alterar
\`\`\`

Permite alterar o motivo de fracasso da licitação.

### Cancelar

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Licitação > Fracassada > Cancelar
\`\`\`

Permite cancelar informação de licitação fracassada.
`,
  "Licitação - Página 6 - Procedimentos Licitações": `
### Adjudicar

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Licitação > Adjudicar
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image27.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image27.png)

Permite informar a adjudicação da licitação. Basta selecionar a licitação desejada, informar a data da adjudicação e salvar.

Para exclusão de uma inclusão de adjudicação, basta clicar em "Excluir".
`,
  "Licitação - Página 7 - Procedimentos Licitações": `
### Homologar

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Licitação > Homologar
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image30.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image30.png)

Permite informar a homologação da licitação. Basta selecionar a licitação desejada, informar a data da homologação e salvar.

Para exclusão de uma inclusão de homologação basta clicar em "Excluir".
`,
  "Fornecedores da Licitação - Procedimentos Licitações": `
\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Fornecedores da Licitação
\`\`\`

Nesta rotina é feita a inclusão dos fornecedores que participarão da licitação.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image95.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image95.png)

Campos disponibilizados:

- **Numcgm:** buscar pelo cgm a empresa participante;
- **Tipo da empresa:** normal, ME ou EPP;
- **Tipo de condição:** informar tipo de condição do fornecedor;
- **Data de retirada do edital:** data da retirada do edital;
- **Hora de retirada do edital:** hora da retirada do edital;
- **Nome da pessoa que retirou o edital:** responsável pela retirada.

Nesta rotina também é feita a exclusão de fornecedores, clicando no "E" ao lado do fornecedor e selecionando excluir.
`,
  "Credenciamento de Fornecedores da Licitação - Procedimentos Licitações": `
\`\`\`
DB: PATRIMONIAL > Licitações > Procedimentos > Credenciamento de Fornecedores da Licitação
\`\`\`

Nessa rotina permite-se o credenciamento do fornecedor em casos de chamamento público por credenciamento.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image57.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image57.png)

Na aba fornecedores, buscar pelos fornecedores e salvar.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image93.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image93.png)

Na aba itens, selecionar o fornecedor e selecionar os itens em que o mesmo está credenciado.
`,
  "Reserva de Cotas - Procedimentos Licitações": `
\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Reserva de Cotas
\`\`\`

Nessa rotina se faz a reserva das cotas em porcentagem ou quantidade para ME e EPP.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image114.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image114.png)
`,
  "Lançar Propostas - Procedimentos Licitações": `
\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Lançar Propostas
\`\`\`

Nesta rotina são feitos os lançamentos das propostas por fornecedor.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image43.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image43.png)

Após selecionar a licitação desejada, abre-se a tela de cada fornecedor para preenchimento de validade do orçamento, prazo de entrega, validade mínima e valor unitário.

Os botões da tela permitem informar valores unitários, zerar valores lançados, desclassificar e reclassificar itens selecionados.

Após o preenchimento de todas as propostas apresentadas, clicar no botão final de julgar licitação.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image58.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image58.png)
`,
  "Habilitação de Fornecedores - Procedimentos Licitações": `
\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Habilitação de Fornecedores
\`\`\`

Buscando pela licitação desejada, permite dizer se os fornecedores estão habilitados para participar, inabilitados ou se não compareceram.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image24.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image24.png)
`,
  "Eventos - Procedimentos Licitações": `
\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Eventos
\`\`\`

Nesta rotina pode-se salvar eventos relacionados à licitação, assim como gerar documentos relativos ao evento incluído.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image44.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image44.png)

Campos comuns para preenchimento:

- **Licitação:** buscar a licitação desejada;
- **Fase:** fase em que o evento ocorreu;
- **Evento:** evento ocorrido dentre os disponibilizados;
- **Data do evento:** data de ocorrência;
- **Autor:** autor do evento;
- **Data do julgamento:** obrigatório para alguns tipos de evento de recurso/impugnação;
- **Resultado:** deferido, indeferido ou deferido parcialmente.
`,
  "Cancelamento de Julgamento - Procedimentos Licitações": `
\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Cancelamento de Julgamento
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image22.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image22.png)

Nesta rotina, permite-se cancelar o julgamento da licitação. Basta selecionar a licitação desejada e confirmar.
`,
  "Trocar Fornecedor - Procedimentos Licitações": `
\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Trocar Fornecedor
\`\`\`

Permite trocar fornecedor ganhador da licitação por motivo de desistência ou desclassificação.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image70.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image70.png)

Basta buscar a licitação desejada e selecionar, ao lado do item, o botão trocar.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image47.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image47.png)

No campo fornecedor para troca, o sistema lista os fornecedores que deram lances no item. É obrigatório preencher o campo motivo para troca e clicar em trocar fornecedor.
`,
  "Gerar Autorização - Procedimentos Licitações": `
### Gera Autorização

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Gera Autorização
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image88.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image88.png)

Nesta rotina permite-se gerar autorização de empenho dos processos licitados. Após selecionar a licitação desejada, abre-se esta primeira tela acima, com os campos de tipo de compra, tipo de licitação, número da licitação, processo administrativo e observações, já preenchidos automaticamente com as informações da licitação. Ficam a preencher os campos:

- **Destino:** onde se destina o licitado;
- **Tipo de empenho:** se ordinário, global ou estimativo;
- **Prazo de entrega:** prazo de entrega do que está sendo empenhado;
- **Condições de pagamento:** como será pago o que será empenhado;
- **Telefone:** telefone do credor para quem será o empenho;
- **Contato:** referência de contato do credor;
- **Outras condições:** informações relacionadas ao fornecimento que não estão listadas;
- **Característica peculiar:** selecionar a característica referente ao que será empenhado.

Após escolher os itens, abre-se nova tela para conferência de quantidades e valores, em que deve ser selecionado visualizar itens e após confirmar.
`,
  "Anula Autorização - Procedimentos Licitações": `
### Anula Autorização

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Anula Autorização
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image42.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image42.png)

Nesta rotina permite-se anular autorização de empenho gerada e não empenhada. Basta selecionar a autorização desejada, processar, selecionar os itens e clicar em anular autorização.
`,
  "Parâmetros - Procedimentos Licitações": `
\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Parâmetros
\`\`\`

Nesta rotina são configurados os parâmetros do módulo de licitação.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image87.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image87.png)

Campos configuráveis incluem:

- **Escolher processo de compras:** exibe processos disponíveis na inclusão da licitação;
- **Processo de protocolo no sistema:** permite vincular processo de protocolo;
- **Disp. licitação na web até o julgamento:** controla disponibilidade na web;
- **Dias de disponibilidade:** dias máximos de disponibilidade;
- **Limite Tamanho Arquivo:** limite máximo dos arquivos incluídos.
`,
  "Registro de Preço - Procedimentos Licitações": `
### Movimentações > Reequilíbrio

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Registro de Preço > Movimentações > Reequilíbrio
\`\`\`

Esta rotina permite acertos em licitações oriundas de registro de preços, com alterações de valor, justificativa ou tipo de objeto.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image86.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image86.png)

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image53.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image53.png)

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image41.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image41.png)

### Movimentações > Desistência > Incluir Desistência

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Registro de Preço > Movimentações > Desistência > Incluir Desistência
\`\`\`

Permite incluir desistência de fornecedores posteriormente à licitação.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image20.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image20.png)

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image64.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image64.png)

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image54.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image54.png)

### Movimentações > Desistência > Cancelar Desistência

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Registro de Preço > Movimentações > Desistência > Cancelar Desistência
\`\`\`

Permite cancelar a desistência por item.

### Movimentações > Bloqueio > Incluir Bloqueio

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Registro de Preço > Movimentações > Bloqueio > Incluir Bloqueio
\`\`\`

Permite incluir bloqueio de itens do registro de preços.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image115.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image115.png)

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image51.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image51.png)

### Movimentações > Bloqueio > Cancelar Bloqueio

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Registro de Preço > Movimentações > Bloqueio > Cancelar Bloqueio
\`\`\`

Permite cancelar o bloqueio de itens.
`,
  "Edital - Procedimentos Licitações": `
### Geração

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Edital > Geração
\`\`\`

Permite gerar edital de licitação incluída, com modelo previamente cadastrado na rotina:

\`\`\`
DB:CONFIGURAÇÃO > Configuração > Procedimentos > Manutenção de Documentos/Template > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image103.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image103.png)

### Upload

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Edital > Upload
\`\`\`

Permite salvar edital pronto no sistema. Basta selecionar o arquivo e incluir. Também permite exclusão do edital pelo botão E.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image100.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image100.png)
`,
  "Ata - Procedimentos Licitações": `
### Geração

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Ata > Geração
\`\`\`

Permite a emissão de ata de licitação julgada, com modelo previamente cadastrado na rotina:

\`\`\`
DB:CONFIGURAÇÃO > Configuração > Procedimentos > Manutenção de Documentos/Template > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image59.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image59.png)

### Upload

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Ata > Upload
\`\`\`

Permite salvar arquivo de ata pronto no sistema. Também permite excluir ata pelo botão E.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image68.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image68.png)

### Configuração de Ata

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Ata > Configuração de Ata
\`\`\`

Além da inclusão do modelo, deve-se fazer a configuração nesta rotina para que o mesmo gere na rotina de geração de atas.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image92.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image92.png)
`,
  "Minuta - Procedimentos Licitações": `
### Geração

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Minuta > Geração
\`\`\`

Permite a emissão de minuta de edital de licitação, com modelo previamente cadastrado na rotina:

\`\`\`
DB:CONFIGURAÇÃO > Configuração > Procedimentos > Manutenção de Documentos/Template > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image46.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image46.png)

### Upload

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Minuta > Upload
\`\`\`

Permite salvar arquivo de minuta pronto no sistema. Basta selecionar o arquivo e incluir. Também permite excluir a minuta pelo botão E.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image116.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image116.png)

### Configuração da minuta

\`\`\`
DB:PATRIMONIAL > Licitações > Procedimentos > Minuta > Configuração da minuta
\`\`\`

Além da inclusão do modelo, deve-se fazer a configuração nesta rotina para que o mesmo gere na rotina de geração de minuta.

[![](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image52.png)](https://e-cidade.wiki.br/patrimonial/licitacoes/files/images_licitacoes_tecnico/image52.png)
`,
  "Garantia": `
### Inclusão

Através desta rotina, são feitos os cadastros das garantias previstas nos contratos a serem registradas com o mesmos para consultas e providências posteriores.

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Garantias > Inclusão
\`\`\`

Acessando a rotina, o usuário deve preencher descrição, data de validade(lembrando de que se trata da data limite a qual o usuário poderá utilizar aquela garantia nos contratos incluídos), observação,texto padrão e selecionar os tipos de acordo que poderão utilizar-se da mesma (Acordo, convênio e contrato). Selecionar botão incluir e será gerado número de registro.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image24.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image24.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Garantias > Alteração
\`\`\`

Permite alterar todas as informações da inclusão. Preenchendo os campos a serem alterados e selecionando alterar.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Garantias > Exclusão
\`\`\`

Permite excluir todas as informações incluídas. Selecionar o botão excluir.
`,
  "Grupos de Acordos": `
### Inclusão

Através desta rotina são feito os cadastros de grupos de classificação dos acordos (ex. serviços, aquisição de materiais, etc).

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Grupos de Acordos > Inclusão
\`\`\`

- Selecionar ícone natureza do acordo e clicar sobre a natureza correspondente ao que deseja incluir.
- Selecionar o tipo de acordo e preencher os campos descrição, data inicial, data final e observações.
- Selecionar o botão incluir.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image10.png)

A tela será redirecionada para a aba documentos onde deve-se selecionar um template (modelo previamente incluído no sistema), selecionar o tipo de documento e incluir. Cabe ressaltar que esse documento será o modelo que será emitido ao final da inclusão de cada acordo vinculado a este grupo de acordo.

Avançar para a aba Numeração e incluir numeração inicial para o ano, exemplo, se precisa iniciar com o acordo número 1, incluir numeração 0.

### Alteração

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Grupos de Acordos > Alteração
\`\`\`

Permite a alteração de todas as informações preenchidas, lembrando que a numeração do grupo deve ser incluída para todos os anos em que o mesmo for utilizado.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image13.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image13.png)

### Exclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Grupos de Acordos > Exclusão
\`\`\`

Permite a exclusão do grupo desde que não tenha numeração cadastrada, nem acordo vinculado.
`,
  "Categoria de Acordo": `
### Inclusão

Através desta rotina é possível cadastrar categorias de acordo a serem vinculadas na inclusão do contrato.

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Categoria de Acordo > Inclusão
\`\`\`

Acessar a rotina, preencher a descrição e incluir.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image45.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image45.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Categoria de Acordo > Alteração
\`\`\`

Permite alterar a descrição da categoria. Basta selecionar a categoria, alterar o descrito e selecionar o botão alterar.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Categoria de Acordo > Exclusão
\`\`\`

Permite exclusão de categoria. Basta selecionar a categoria e o botão excluir.
`,
  "Cadastro de Comissões": `
### Inclusão

Através desta rotina é possível cadastrar, alterar e excluir a comissão responsável pelo contrato.

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Cadastro de Comissões > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image19.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image19.png)
Permite o cadastro de comissões. Basta preencher as informações de descrição, data inicial, data final e observações e clicar em incluir. O sistema direcionará automaticamente para a aba membros, para que sejam selecionados pelo ícone número cgm, escolher o tipo de membro, a data início e de término e clicar em incluir.

### Alteração

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Cadastro de Comissões > Alteração
\`\`\`

Permite alterar a descrição, data inicial e final, campo observações e membros da comissão. Basta buscar e selecionar a comissão, alterar o descrito e selecionar o botão alterar.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Cadastro de Comissões > Exclusão
\`\`\`

Permite exclusão de comissão. Basta buscar e selecionar a comissão, clicar no botão excluir.
`,
  "Tipos de Acordos": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Tipos de Acordos > Inclusão
\`\`\`

Permite inclusão de tipo de acordo no sistema. Basta acessar a rotina, preencher o campo descrição e selecionar o botão incluir. O sequencial gerado é automático.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image9.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image9.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Tipos de Acordos > Alteração
\`\`\`

Permite alterar a descrição do tipo de acordo. Basta buscar e selecionar o tipo, alterar o descrito e selecionar o botão alterar.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Tipos de Acordos > Exclusão
\`\`\`

Permite exclusão de tipo de acordo. Basta buscar e selecionar o tipo desejado, clicar no botão excluir.
`,
  "Natureza dos Acordos": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Natureza dos Acordos > Inclusão
\`\`\`

Permite cadastrar a natureza dos acordos incluídos e o tempo máximo que os mesmos podem ser renovados. Basta acessar a rotina, preencher a descrição e a quantidade máxima de renovação.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image57.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image57.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Natureza dos Acordos > Alteração
\`\`\`

Permite alterar a descrição da natureza dos acordos. Basta buscar e selecionar a natureza, alterar o descrito e selecionar o botão alterar.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Natureza dos Acordos > Exclusão
\`\`\`

Permite exclusão da natureza dos acordos. Basta buscar e selecionar a natureza desejada, clicar no botão excluir.
`,
  "Penalidades": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Penalidades > Inclusão
\`\`\`

Permite cadastrar as penalidades previstas para um acordo. Basta acessar a rotina, preencher os campos de descrição, validade, observação e texto padrão a ser usado para esta penalidade, e selecionar a que tipos de acordos estará disponível a mesma. Selecionar o botão incluir.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image12.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image12.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Penalidades > Alteração
\`\`\`

Permite alterar todos os campos preenchidos na penalidade. Basta buscar e selecionar a penalidade, alterar o descrito e selecionar o botão alterar.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Contratos > Cadastros > Penalidades > Exclusão
\`\`\`

Permite exclusão da penalidade. Basta buscar e selecionar a penalidade desejada, e clicar no botão excluir.
`,
  "Solicitação de Compras": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Solicitação de Compras > Inclusão
\`\`\`

A inclusão de solicitação de compras no e-cidade é composto por três abas, a saber:

- 1. Solicitação
- 1. Itens/dotações
- 1. Fornecedores sugeridos

**1.Solicitação**

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image130.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image130.png)

- **Número da Solicitação:** número atribuído sequencialmente a solicitação de compras que está sendo inclusa.
- **Data da solicitação:** data da solicitação é a data atual ou definida durante a sessão através do botão configuração.
- **Processo Administrativo:** campo onde é informado o Processo Administrativo aberto para a solicitação.
- **Departamento:** departamento do usuário ou o que está definido durante a sessão através do botão Configuração.
- **Tipo de Compra:** tipo de compra a ser realizada através da solicitação que está cadastrando.

***NOTA:** Esta opção somente será listada caso o parâmetro Selecionar tipo de solicitação esteja definido como "SIM" na rotina abaixo:*

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Parâmetros
\`\`\`

- **Resumo da Solicitação:** Resumo geral da solicitação, para facilitar posterior consulta devemos preencher neste campo informações e/ou justificativa desta solicitação, como por exemplo: compra de material de expediente para secretaria de administração ou aquisição de merenda escolar para o primeiro semestre de 2021.

Função Importar Solicitação

Ao clicar sobre o botão ***"Importar Solicitação"*** o e-cidade irá direcionar a uma tela podendo selecionar qual solicitação de compras inclusas na instituição diferente do tipo 5-Registro de Preço.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image278.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image278.png)

O usuário poderá efetivar a pesquisa da solicitação utilizando-se dos seguintes filtros abaixo ou simplesmente clicando sobre a linha que deseja:

- **Número da solicitação:** número da solicitação que deseja-se importar informações para inclusão de outra com nova numeração.
- **Data da solicitação:** retorna lista de todas as solicitações de compras da data indicada.

Ao selecionar e efetivar, o e-cidade emitirá um alerta sinalizando que serão importados os itens, as dotações e os fornecedores porventura sugeridos naquela solicitação para a nova solicitação que se está inclusa.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image240.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image240.png)

Caso a solicitação de compras seja de um exercício anterior o sistema irá emitir um alerta permitindo ao usuário selecionar uma nova dotação para os itens.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image275.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image275.png)

**2. Itens/dotações**

- Na aba itens/dotações podemos observar três divisões na tela, a saber:
- **Código da material:**
- **Dotação orçamentária:**
- **Itens Cadastrados**

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image62.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image62.png)

- **Código do Material:** poderá ser digitado ou para filtros adicionais clique em ***Codigo do material***.

[Mais informações de manutenção de material/serviços, clique aqui](https://e-cidade.wiki.br/patrimonial/compras/#!cadastro_material_servicos.md).

Na tela de pesquisa o usuário poderá escolher um dentre os seguintes filtros: ***"código do material"**, **"descrição do material"**, **"código do elemento"**, **"descrição do elemento"**, **"elemento"**, **"código do grupo/subgrupo"***, podendo utilizar combinação de filtros a fim de refinar a busca.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image202.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image202.png)

***NOTA:** Caso o material não esteja vinculado a nenhum desdobramento o mesmo não será listado nessa tela, sendo necessário acessar a rotina de alteração material/serviço e marcar ao menos um.*

Caso o material possua mais de um vínculo de desdobramento, o mesmo será listado mais de uma vez cada com seu respectivo elemento. Atente-se quanto a este ponto.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image95.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image95.png)

Escolhido o material/serviço que se deseja incluir, poderá adicionar informações complementares referente clicando no botão ***Outras informações***.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image177.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image177.png)

- **Prazo de Entrega:** descrição do prazo de entrega definida para este item.
- **Condições de pagamento:** descrição do das condições de pagamentos definida para este item.
- **Resumo do item:** este campo é um complemento para a descrição do material/serviço, caso o usuário queira detalhar melhor o material/serviço poderá utilizar este,, o mesmo poderá já estar preenchido, caso o campo "Complemento do Material" no cadastro do Material/Serviço esteja preenchido e o parâmetro "Liberar Resumo" esteja como "SIM".
- **Justificativa para compra:** descrição da justificativa de compra para o material/serviço.

***NOTA:** Os campos acima não possuem seu preenchimento obrigatório, à exceção da justificativa para compra, que pode ter caráter obrigatório. Esta obrigatoriedade é configurada através da rotina abaixo:*

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Parâmetros
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image48.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image48.png)

- **Qtde Solicitada:** Quantidade a ser solicitada para o item.
- **Quantidade restante:** Informará a quantidade restante para o Item, quando se tratar de uma solicitação do Tipo Registro de Preço. Nos demais tipos de solicitação o campo não terá nenhuma modificação relevante.
- **Vlr. unit.aprox:** informar o valor unitário aproximado do item. Este campo poderá não ser listado caso tenha sido definido a parametrização desta forma.
- **Item:** sequência do item dentro da solicitação, pois o mesmo código de item pode se repetir dentro da mesma solicitação, então este campo seq é usado para identificar cada um separadamente.
- **Unidade:** Lista com todas as unidades de medida que pode utilizar para o item a ser incluso.

[Mais informações de manutenção de unidades, clique aqui](https://e-cidade.wiki.br/patrimonial/compras/#!cadastro_unidades.md).

- **Sub. ele:** lista todos os desdobramentos vinculados ao material selecionado. Esta opção de extrema importância e deve ser selecionada de acordo com o elemento de despesa da dotação orçamentária que será vinculada.

Preenchidos os campos necessário, o usuário deverá confirmar clicando em ***Incluir***.

**Dotação Orçamentária**

- **Dotação orçamentária:** indica qual dotação orçamentária irá custear a aquisição de material ou serviço. Neste caso o usuário deverá clicar sobre [![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image247.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image247.png) a fim de selecionar a que deseja aplicando os filtros necessários.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image79.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image79.png)

***NOTA IMPORTANTE:** o e-cidade somente retornará dotações orçamentárias que possam ser utilizadas de acordo com o desdobramento selecionado para o item. No caso acima foi selecionado o desdobramento 339030140000 - MATERIAL EDUCATIVO E ESPORTIVO, consequentemente o e-cidade retornou somente dotações referente ao elemento 339030.*

Havendo "Valor Disponível" na dotação o usuário deve clicar no botão incluir, caso a parametrização permita poderá optar por efetivar a reserva de saldo ou não.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image94.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image94.png)

**ITENS CADASTRADOS**

Na parte inferior da tela o sistema irá listar os itens cadastrados na solicitação de compras bem como a dotação orçamentária utilizada, quantidade solicitada e valor unitário aproximado entre outras informações.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image268.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image268.png)

***NOTA:** Se após cadastrar um item esse permanecer em vermelho, o cadastro está incorreto e deverá ser verificado a alteração do mesmo se algum dos campos não encontra-se incompleto, com falta de preenchimento ou ainda sim quando parametrizado na instituição sem saldo disponível na dotação orçamentária.*

Estando todas as informações corretas, o item listará como cadastrado na coloração cinza conforme a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image243.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image243.png)

***IMPORTANTE:** é possível ao usuário incluir em um único material ou serviço várias dotações. Para isso, é só incluir o valor referente a cada dotação o e-cidade irá fracionar a quantidade proporcionalmente de acordo com o valor total, ao alterar o restante da fração, o e-cidade já irá exibir a quantidade/valor restante pendente de definição de dotação.*

Para alteração/exclusão de um material/serviço: deve-se acessar a aba itens/dotações e observar no final da tela a opção ***"ITENS CADASTRADOS"***. Nela na última coluna *"Opções"* que contém um "A" e um "E", junto com cada item conforme a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image108.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image108.png)

***NOTA:** Caso estas opções estejam desabilitada, será necessário revisar se o item encontra-se em Autorização de Empenho.*

Estando a solicitação de compra correta, o usuário poderá alternar para a aba ***"Solicitação"*** novamente e estará habilitado o botão ***"Gerar relatório".***

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image271.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image271.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image265.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image265.png)

**3.Fornecedores sugeridos**

Por fim a última aba, o usuário poderá indicar o fornecedor que irá atender a necessidade de aquisição de material/serviço pela administração pública.

***NOTA:** Não será possível gerar por exemplo uma Autorização de Empenho através da Solicitação de Compras, caso o usuário tenha deixado de informar um Fornecedor Sugerido ou então informado mais de um para a Solicitação de Compras.*

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image26.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image26.png)

O usuário poderá indicar o número do CGM do fornecedor ou então clicar sobre ***"Numero do cgm do fornecedor:"*** e efetivar a busca aplicando filtros complementares ao código. Ao informar o fornecedor sugerido as informações do mesmo serão emitidos juntamente com a solicitação de compras conforme a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image320.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image320.png)

***IMPORTANTE:***

*

A inclusão de um fornecedor não é obrigatória. No entanto, vale destacar aqueles casos de serviços em que a administração já conhece antecipadamente o fornecedor que irá receber o valor empenhado. Exemplo disso, são as contas de água onde se tem o fornecedor e o valor exato do serviço prestado.

Nestes casos, não é necessário realizar-se todo o procedimento de aquisição de material ou serviço. Basta apenas cadastrar a solicitação de compras, indicar o fornecedor e efetivar a autorização de empenho de imediato, dispensando-se a fase do processo de compras, orçamento do processo de compras.

*

*Este procedimento geralmente é realizado pelo setor/departamento de compras.*

### Alteração

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Solicitação de Compras > Alteração
\`\`\`

Esta rotina permite realizar alterações de informações da solicitação de compras, podendo ser feitas apenas no item solicitado. Com relação ao sub-elemento/desdobramento, este não poderá ser alterado. Nestes casos, deve-se excluir a dotação vinculada.

- Condições que limitam o retorno da solicitação de compras para alteração e que devem ser revisadas:
- Solicitação em um Processo de Compras.
- Solicitação em Autorização de Empenho.
- Solicitação de Compras Anulada.
- Departamento acessado diferente do definido para Solicitação de Compras.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Solicitação de Compras > Exclusão
\`\`\`

Rotina que permite ao usuário efetivar a exclusão de uma solicitação de compras.

***NOTA:** Somente poderão ser alteradas ou excluídas solicitações de compras, que não estiverem fazendo parte de um processo de compras no e-cidade, basicamente as mesmas condições que limitam a alteração, limitam a exclusão.*

### Alteração Dotações

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Solicitação de Compras > Alterar Dotações
\`\`\`

Rotina que permite a alteração de dotação orçamentária referente a uma solicitação de compras ou licitação.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image291.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image291.png)

Ao acessar a rotina será possível selecionar a licitação clicando sobre ***Licitação*** ou então pesquisando por uma Solicitação de Compras digitando o número de uma única ou um intervalo, caso o usuário não saiba o número poderá filtrar sua pesquisa clicando em ***Solicitação***, também é possível filtrar pela data de inclusão da Solicitação de Compras.

Após aplicar os filtros, o e-cidade listará a licitação, solicitação de compras em questão ou uma lista de solicitações de compras a serem selecionadas.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image169.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image169.png)

Após efetuar dois cliques sobre a solicitação de compras que o usuário deseja, o sistema irá abrir a tela com os itens e suas respectivas dotações/ano.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image324.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image324.png)

Para alterar a dotação de todos os itens, clique em ***"M"*** para marcar todos itens de uma dotação. Clique no botão ***“Alterar"*** da Dotação e selecione a nova dotação. Para alterar a dotação de um item, clique no botão ***"Alterar"***. Para confirmar as alterações, clique em ***"Alterar Dotações"***.

### Anulação

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Solicitação de Compras > Anulação
\`\`\`

Através desta rotina é possível anular uma solicitação de compras, ao invés da exclusão que exclui todos os registros referentes a mesma, a anulação mantém os registros e torna possível visualizá-los na consulta de solicitação de compras. Para efetuar a anulação basta selecionar a solicitação de compras e o motivo, se aplicável o processo administrativo.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image9.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image9.png)

\`\`\`
DB:PATRIMONIAL > Compras > Consultas > Solicitações
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image215.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image215.png)

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Documentos > Reemissão de solicitação de compra
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image68.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image68.png)
`,
  "Orçamento de solicitação": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Orçamento de solicitação > Inclusão
\`\`\`

Ao acessar a rotina, o e-cidade irá listar solicitações de compras, o usuário poderá clicar sobre alguma que desejar ou então filtrar pelo número da solicitação ou a data de inclusão.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image121.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image121.png)

Após selecionar a solicitação de compras e clicar em **"Enviar dados"** o e-cidade passará para a próxima tela separada em duas abas:

- **1. Orçamento**
- **2. Fornecedores**

**1.Orçamento**

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image302.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image302.png)

**Código do Orçamento:** código sequencial gerado automaticamente pelo e-cidade.

**Prazo Limite para Entrega do Orçamento:** prazo limite para entrega do orçamento por parte do fornecedor. Retornará a informação padrão definida nos parâmetros.

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Parâmetros
\`\`\`

**Hora Limite para Entrega do Orçamento:** hora limite para entrega do orçamento por parte do fornecedor.

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Parâmetros
\`\`\`

**Observação:** campo livre para inclusão de alguma observação que o usuário achar relevante.

**Prazo de Entrega do Produto:** prazo de entrega do produto em dias.

**Validade do Orçamento:** validade do orçamento em dias.

Logo abaixo serão exibido os itens que compõe a Solicitação de Compras por padrão todos selecionados, caso deseje poderá desmarcar os que não deseja ou então confirmar a ação clicando em **"Incluir"**.

**2. Fornecedores**

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image283.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image283.png)

- **Código do orçamento deste fornecedor:** para cada fornecedor incluso no orçamento, o e-cidade irá gerar um código sequencial para o mesmo.
- **Código do Orçamento:** código sequencial gerado para o orçamento de solicitação.
- **Numcgm:** poderá ser digitado o código do CGM ou pesquisar por nome, CPF, CNPJ clicando sobre [![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image20.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image20.png).

O usuário poderá gerar um orçamento de solicitação em branco clicando em **"Gerar em branco"**, neste caso não retornará a informação de nenhum fornecedor conforme imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image85.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image85.png)

Para cada fornecedor lançado o sistema exibirá na parte inferior da tela **"FORNECEDORES LANÇADOS"**;

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image294.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image294.png)

O usuário poderá excluir um fornecedor clicando **"E"** em Opções e depois confirmar clicando em **"Excluir"**.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image180.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image180.png)

Após lançar todos os fornecedores o usuário poderá clicar em **"Lançar valores"** e prosseguir com o Orçamento de Solicitação de Compras.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image231.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image231.png)

- **Código do Orçamento:** código sequencial do orçamento da solicitação de compras.
- **Código do orçamento deste fornecedor:** código sequencial do orçamento de solicitação específica para o fornecedor que está selecionado.
- **Validade do Orçamento:** validade do orçamento do fornecedor selecionado.
- **Prazo de Entrega:** prazo de entrega do produto em dias.
- **Dias de validade:** validade do orçamento deste fornecedor em dias
- **Dias de prazo:** prazo em dias da proposta deste fornecedor.

Na opção de lançar valores dos orçamentos o usuário poderá definir a observação/marca do item, validade mínima, qtde orçada, valor unitário e total.

Nas últimas colunas é possível efetivar o lançamento de Encargos Sociais, PC BDI e Taxa Estimada, nesse caso se aplica aos valores estimados uma vez que o tipo de objeto da licitação que ainda será inclusa será Obras e Serviços de Engenharia.

Após preencher as informações o usuário poderá clicar em **"Incluir"** onde automaticamente passará para o orçamento do próximo fornecedor.

Se optar poderá clicar em **Valores unitários**, isso fará com que a informação definida nos campos valores unitários e totais sejam respectivamente o valor lançado na Solicitação de Compras.

O botão **"Zerar valores"** irá lançar o valor zero como informação para todos os campos.

Após incluir as propostas para todos os fornecedores, o e-cidade irá habilitar o botão "Julgar Orçamento", onde o usuário poderá efetivar o julgamento por menor preço.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image176.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image176.png)

Se o usuário optar poderá clicar em **"Trocar"** onde será possível efetivar a troca de fornecedor para o 2° colocado por exemplo, sendo possível apresentar um motivo da troca.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image267.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image267.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Orçamento de solicitação > Alteração
\`\`\`

Rotina permite efetivar a alteração de um orçamento de solicitação, onde somente será possível efetivar a alteração das informações que desejar, caso este ainda não tenha gerado uma autorização de empenho ou empenho.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Orçamento de solicitação > Exclusão
\`\`\`

Rotina que permite realizar a exclusão de um orçamento de solicitação.

### Lançar valores

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Orçamento de solicitação > Lançar valores
\`\`\`

Rotina é um segmento em menu do recurso **"Lançar Valores"** disponível após a inclusão de itens e ao menos um fornecedor na rotina de inclusão de orçamento da solicitação.

### Julgar orçamento

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Orçamento de solicitação > Julgar orçamento
\`\`\`

Rotina é um segmento em menu do recurso "Julgar orçamento" disponível na rotina de inclusão de orçamento de solicitação após o lançamento dos valores de todos os fornecedores.
`,
  "Liberar solicitação": `
Esta rotina permite o controle e análise das solicitações de compras pelo departamento responsável pelo controle orçamentário da administração pública, este teria a responsabilidade de efetivar a liberação das solicitações de compras, de forma a dar continuidade no processo de aquisição de materiais, bens ou serviços.

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Liberar solicitação
\`\`\`

**NOTA:** Este procedimento é opcional, pendente de alinhamento interno e avaliação da necessidade de implantação deste recurso, a parametrização se dá através da rotina:

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Parâmetros
\`\`\`

Após acessar a rotina, o e-cidade listará solicitações de compras passíveis de serem liberadas, o usuário ainda poderá filtrar por número da solicitação ou data de inclusão da mesma, seja exata ou um período.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image107.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image107.png)

Após a seleção da mesma o usuário será direcionado para a seguinte tela:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image207.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image207.png)

Para liberação o usuário poderá marcar a caixa de seleção dos itens individualmente ou então clicar sobre **"M"** para que sejam marcados todos os itens.

Ainda nesta tela é possível obter informações sobre a dotação que cada um dos materiais/serviços listados encontram-se vinculados.

Após marcado os itens e realizado a conferência, o usuário poderá clicar em **"Liberar solicitação"**, na consulta da solicitação de compras a Situação será alterada de “Não Liberado” para “Liberado”.
`,
  "Processo de compras": `
O setor/departamento de compras é o responsável por efetivar aquisição e contratação de serviços. Para ele são encaminhadas as solicitações de compras oriundas dos diversos departamentos da administração.

A rotina consiste em selecionar uma ou mais solicitação de compras e os itens que se deseja adquirir. Ao confirmar a inclusão nesta etapa, o e-cidade cria um processo de compras.

Feito isso, o setor/departamento de compras poderá incluir um orçamento de processos de compras e julgar as propostas dos fornecedores para o fornecimento dos materiais ou serviços, bem como poderá realizar a inclusão de uma licitação.

Com relação ao julgamento dos orçamentos, cumpre dizer que o e-cidade automaticamente seleciona o fornecedor que oferecer menor preço para cada item. Também será permitido trocar o fornecedor, desde que o usuário digite uma justificativa para sua decisão.

Realizada uma solicitação de compras e posteriormente liberada pelo setor responsável pelo controle orçamentário (se aplicável), esta será encaminhada ao setor/departamento de compras que inicialmente procederá com a inclusão de um processo de compras.

### Inclusão

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Processo de compras > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image155.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image155.png)

Ao acessar a rotina de inclusão de processo de compras o e-cidade retornará os seguintes campos:

- **Solicitação:** lista todas as solicitações de compras que estejam corretas, não anuladas, tipos 1-Normal / 2-Pacto, que não estejam em processo de compras, do exercício atual e da instituição selecionada.
- **Processo de Compra:** número sequencial atribuído pelo e-cidade ao processo de compras que está sendo incluso.
- **Data da Solicitação:** data de criação da solicitação no e-cidade;
- **Departamento:** departamento que realizou a inclusão da solicitação de compras.
- **Situação:** à ser definida para o processo de compras, sendo possível selecionar entre:
- ***1- EM ANÁLISE -*** Será necessário uma efetivação de liberação do processo de compras para prosseguimento.
- ***2-AUTORIZADO -*** Realiza a inclusão do processo de compras já com esta situação definida por padrão.
- **Tipo de Processo:** o usuário poderá selecionar entre dois tipos de processos:
- **Item:** forma padrão de inclusão dos itens no processo de compras.
- **Lote:** permite a manutenção de lotes e inclusão de itens nos mesmos.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image321.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image321.png)

Após a inclusão dos itens e a criação do processo de compras, é possível na nova aba realizar a manutenção dos lotes e incluir os itens nos lotes criados. Conforme exemplo abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image256.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image256.png)

- **Resumo do Processo de Compras:** resumo oriundo da solicitação de compras, podendo ser alterado ou complementado se o usuário desejar.
- **Itens da Solicitação:** lista todos os itens da solicitação de compras.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image90.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image90.png)
Neste momento, o usuário deverá marcar o item ou itens contidos na solicitação de compras que deseja incluir no processo de compras, confirmando, logo após, no botão .

Incluída a solicitação em um processo de compras, o e-cidade permite ao usuário incluir outras solicitações a este processo iniciado, independentemente da origem destas solicitações, ou seja, poderá um processo de compras conter solicitações de diferentes departamentos ou setores.

Este procedimento visa dinamizar o processo de compras, evitando que se faça um processo de compras para cada departamento ou setor.

Como realizo a inclusão de diferentes solicitações em um processo de compras?

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image100.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image100.png)
Para se incluir várias solicitações em um único processo, deve o usuário após incluir a primeira solicitação ao processo de compra, selecionar uma segunda solicitação e, ao invés de incluí-la, proceder sua juntada, clicando no botão .

### Alteração

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Processo de compras > Alteração
\`\`\`

Através desta rotina é possível realizar a alteração de todos os processos de compras do departamento que não esteja vinculado a uma Autorização de Empenho ou Empenho, que a origem do processo de compras seja diferente de uma solicitação de compras tipo *1-Automática.*

Caso seja necessário realizar a alteração de um processo de compras cujo já esteja referenciado em uma Autorização de Empenho ou Empenho, todos os passos seguintes ao processo de compras precisam ser desfeitos, obedecendo ordem inversa de execução, ou seja, do último estágio para o primeiro.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image290.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image290.png)

O usuário poderá realizar filtros como:
- **Código do processo de compras:** número do processo de compras que o usuário deseja realizar a alteração.
- **Número da solicitação:** número da solicitação de compras vinculado ao processo de compras.
- **Data inicial:** data inicial com intuito de definir um período de tempo, está se refere a data de inclusão do processo de compras;
- **Data final:** data inicial com intuito de definir um período de tempo, está se refere a data de inclusão do processo de compras;

Ainda serão listados registros de processos de compras do departamento passíveis de serem alterados, limitando a quantidade de exibição por 15 registros por página, se desejar o usuário poderá clicar sobre o mesmo caso o localize-o.

As informações passíveis de serem alteradas são:
- **Resumo do processo de compras**
- **Lotes (Se aplicável ao tipo de processo)**

### Exclusão

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Processo de compras > Exclusão
\`\`\`

Através dessa rotina o usuário poderá efetivar a exclusão de um processo de compras.

**NOTA:** Somente poderão ser excluídos, processos de compras que ainda não foram autorizados a empenho, ou que não fazem parte de um processo licitatório.
`,
  "Orçamento de processo de compras": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Orçamento de processo de compras > Inclusão
\`\`\`

Ao acessar a rotina o e-cidade listará processos de compras que não estejam em um Acordo, Licitação, Autorização de Empenho, Empenho e que esteja com situação 2-AUTORIZADO, o usuário poderá clicar sobre algum que desejar ou então filtrar pelo número do processo de compras, solicitação de compras ou um intervalo de datas filtrando por inicial e final.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image30.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image30.png)

Após selecionar o processo de compras o e-cidade passará para a próxima tela. A rotina de inclusão de Orçamento de Processo de Compras é separado em três abas:

1. Orçamento
2. Itens
3. Fornecedores

***1.Orçamento***

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image4.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image4.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image282.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image282.png)
[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image61.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image61.png)
Nessa primeira tela o usuário poderá alterar o processo de compras selecionado anteriormente clicando em ou então confirmar clicando em .

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image61.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image61.png)
O usuário clicando em , passará para a próxima aba "Itens".

Ao retornar para a aba "Orçamento" o usuário poderá complementar ou ajustar os dados do orçamento.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image250.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image250.png)

- **Código do Orçamento:** código sequencial do orçamento do processo de compras.
- **Prazo Limite para Entrega do Orçamento:** Prazo Limite para Entrega do Orçamento.
- **Hora Limite para Entrega do Orçamento:** Hora Limite para Entrega do Orçamento.
- **Prazo de Entrega do Produto:** prazo de entrega do produto em dias.
- **Validade do Orçamento:** validade do orçamento que está sendo incluso.
- **Cotação Prévia:** poderá selecionar entre Sim/Não, indicando se o orçamento se caracteriza uma cotação prévia.
- **Observação:** Campo adicional para incluir informações livres, observações que o usuário considerar importante.

**NOTA:** Algumas informações já estarão preenchidas conforme o padrão definido em parâmetros.
DB:PATRIMONIAL > Compras > Procedimentos > Parâmetros

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image260.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image260.png)

***2.Itens***

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image24.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image24.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image11.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image11.png)
Nessa tela o usuário poderá desmarcar algum item se assim desejar,porém, por padrão irá retornar todos marcados, caso algum item seja removido do Orçamento do processo de compras deverá ser clicado em para aplicar as modificações.

***3. Fornecedores***

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image194.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image194.png)

- **Código do orçamento deste fornecedor:** para cada fornecedor incluso no orçamento, o e-cidade irá gerar um código sequencial para o mesmo.
- **Código do Orçamento:** código sequencial gerado para o orçamento de processo de compras.
- **Numcgm:** poderá ser digitado o código do CGM ou pesquisar por nome, CPF, CNPJ clicando sobre [![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image20.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image20.png).

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image286.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image286.png)
O usuário poderá gerar um orçamento de solicitação em branco clicando em , neste caso não retornará a informação de nenhum fornecedor conforme imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image45.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image45.png)

Para cada fornecedor lançado o sistema exibirá na parte inferior da tela "FORNECEDORES LANÇADOS";

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image204.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image204.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image269.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image269.png)
O usuário poderá excluir um fornecedor clicando "E" em Opções e depois confirmar clicando em

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image180.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image180.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image295.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image295.png)
Após lançar todos os fornecedores o e-cidade habilitar o botão , este emitirá o orçamento do processo de compras novamente, porém, com os dados dos fornecedores lançados.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image29.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image29.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image33.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image33.png)
O e-cidade também irá habilitar o botão e prosseguir com o Orçamento de Processo de Compras.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image277.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image277.png)

- **Código do Orçamento:** código sequencial do orçamento da solicitação de compras.
- **Código do orçamento deste fornecedor:** código sequencial do orçamento de solicitação específica para o fornecedor que está selecionado.
- **Validade do Orçamento:** validade do orçamento do fornecedor que está selecionado.
- **Prazo de Entrega:** prazo de entrega do produto em dias.
- **Dias de validade:** validade do orçamento deste fornecedor em dias.
- **Dias de prazo:** prazo em dias da proposta deste fornecedor.
- **Taxa estimada global:** Taxa estimada global.

Na opção de lançar valores dos orçamentos o usuário poderá definir a observação/marca do item, validade mínima, qtde orçada, valor unitário e total.

Nas últimas colunas é possível efetivar o lançamento de Encargos Sociais, PC BDI e Taxa Estimada, nesse caso se aplica aos valores estimados uma vez que o tipo de objeto da licitação que ainda será
inclusa será Obras e Serviços de Engenharia.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image111.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image111.png)
Após preencher as informações o usuário poderá clicar em onde automaticamente passará para o orçamento do próximo fornecedor.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image22.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image22.png)
Se usuário optar poderá clicar em , isso fará com que a informação definida nos campos valores unitários e totais sejam respectivamente o valor lançado na Solicitação de Compras vinculado ao processo de compras que está sendo efetivado o orçamento do processo decompras.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image118.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image118.png)
O botão irá lançar o valor zero como informação para todos os campos.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image25.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image25.png)
Após incluir as propostas para todos os fornecedores, o e-cidade irá habilitar o botão , onde o usuário poderá efetivar o julgamento por menor preço.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image276.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image276.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image228.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image228.png)
Se o usuário optar poderá clicar em onde será possível efetivar a troca de fornecedor para o 2° colocado por exemplo, sendo possível apresentar um motivo da troca.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image235.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image235.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image195.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image195.png)
[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image17.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image17.png)
O usuário também poderá optar por realizar a emissão do mapa de propostas clicando em , podendo selecionar entre dois modelos clicando em .

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image323.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image323.png)
`,
  "Autorização de Empenho": `
Etapa que antecede a emissão do empenho, a autorização de empenho é normalmente realizada pelo setor/departamento de compras.

A autorização de empenho pode ser caracterizada como a liberação pelo setor/departamento de compras, informando, neste ato, que todas as formalidades para a aquisição de materiais ou serviços foram cumpridas, cabendo ao setor/departamento de contabilidade efetivar o empenho.

### Inclusão

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Autorização de Empenho > Inclusão
\`\`\`

### Alteração

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Autorização de Empenho > Alteração
\`\`\`

### Gerar Autorização de Empenho

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Autorização de Empenho > Gerar Autorização de Empenho
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image178.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image178.png)

Através desta rotina será possível realizar a emissão de autorização de empenho através de duas origens:

- [![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image305.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image305.png)
**Processo de Compras:** número do processo de compras o qual deseja gerar autorização de empenho. Poderá optar em digitá-lo ou pesquisando clicando sobre
- **Solicitação:** utilizado quando há fornecedor sugerido na solicitação de compras. Neste caso, não houve inclusão de processo de compras;

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image203.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image203.png)
Assim que o usuário clicar sobre será direcionado para a tela abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image13.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image13.png)

- **Destino:** destino da aquisição ou serviço adquiridos;
- **Tipo de Compra:** tipo de compra realizada;
- **Tipo de Empenho:** se ordinário, estimativo ou global.
- **Tipo de Licitação:** modalidade de licitação, se for o caso;
- **Número da Licitação:** número da licitação, se for o caso;
- **Prazo de entrega:** determina o prazo de entrega;
- **Condição de pagamento:** forma e condição de pagamento, se for o caso;
- **Telefone:** telefone para contato.
- **Contato:** nome e setor da administração;
- **Outras condições:** relacionada à forma e condição de pagamento;
- **Característica Peculiar:** Característica Peculiar.
- **Processo Administrativo:** Processo Administrativo.
- **Observações:** observações que julgar necessárias, por padrão ele retorna o resumo definido na solicitação de compras.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image69.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image69.png)
Após preencher os campos o usuário poderá prosseguir clicando em , o sistema exibirá os itens, no caso abaixo a autorização de empenho está sendo gerada através de solicitação decompras.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image32.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image32.png)

A tela retorna informações como código do item, descrição, resumo do item, fornecedor informado seja no orçamento do processo de compras ou como fornecedor sugerido na solicitação de compras, quantidades, valor unitário, total, reserva (S/N) e informações(!).

O usuário poderá gerar a autorização de empenho para um ou mais itens, podendo selecionar entre os que serão listados, bem como ajustar o valor total à ser autorizado no caso de serviço ou quantitativo se tratando de materiais.

***Importante:*** No caso de serviços em que a administração já conhece antecipadamente o fornecedor que irá receber o valor empenhado. Exemplo disso, são as contas de água onde se tem o fornecedor e o valor exato do serviço prestado. Neste caso e outros com as mesmas características,
poderá ser realizada a inclusão de uma Solicitação de Compras com fornecedor sugerido e efetivar a autorização de empenho de imediato, dispensado o processo de compras, orçamento de processo de compras, licitação ou contrato.

Para saber mais informações a respeito de dotações utilizadas na Solicitação de Compras / Processo de Compras, como saldo, reservas e outros… o usuário poderá clicar em:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image254.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image254.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image162.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image162.png)
Marcado os materiais/serviços, o usuário poderá clicar em , nessa opção o sistema irá retornar uma prévia das informações conforme a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image200.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image200.png)

Note que o e-cidade já efetiva a divisão das autorizações, no caso acima, serão emitidas 3 autorizações, uma para cada dotação orçamentária.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image218.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image218.png)
O usuário poderá efetivar a manutenção dos dados preenchidos anteriormente, clicando em .

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image38.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image38.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image159.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image159.png)
O usuário procedendo e clicando em , já será incluída as autorizações de empenho bem como emitido o documento em formato PDF para impressão.

Se a Solicitação de Compras for do exercício anterior o usuário receberá a seguinte msg:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image245.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image245.png)

Clicando em ok, o e-cidade irá retornar os dados da solicitação de compras, tais como: número da solicitação, data de emissão, dotações e resumo, conforme a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image74.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image74.png)

Dando dois cliques sobre a linha da solicitação de compras, o e-cidade retornará na tela que permitirá a atualização da dotação orçamentária.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image270.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image270.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image105.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image105.png)
[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image105.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image105.png)
O usuário poderá alterar todas as dotações para uma única, clicando no primeiro ou então alterar individualmente clicando no em cada dotação orçamentária.

Ao realizar isso, o e-cidade retornará as dotações orçamentárias do exercício disponíveis conforme o órgão e desdobramento do item.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image287.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image287.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image127.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image127.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image2.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image2.png)
Para finalizar basta o usuário clicar em e efetivar a confirmação na tela seguinte:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image116.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image116.png)

### Anular autorização

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Autorização de Empenho > Anular autorização
\`\`\`

Rotina que permite efetivar anulação da autorização de empenho, se a solicitação de compras foi incluída com reserva de saldo, o e-cidade refará a reserva novamente, porém, definindo para a Solicitação de Compras.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image98.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image98.png)
`,
  "Ordem de Compra": `
Nesta fase ocorre o encerramento de todas as rotinas e atividades relacionadas a compras e contratação de serviços pela administração pública.

Após a emissão do empenho, o próximo procedimento é a inclusão da ordem de compra, que tem por finalidade autorizar o fornecedor a proceder a entrega do material ou execução do serviço requerido.

Sua importância consiste, basicamente, em orientar o fornecedor sobre quais materiais devem ser entregues ou qual serviço deverá ser prestado à administração pública.

Essa ordem de compra, além de trazer os dados do fornecedor, informa o local onde o material será entregue, o prazo de entrega e as condições de pagamento.

A ordem de compra traz ainda a relação de todos os itens a serem entregues, especificados de forma detalhada, trazendo, ainda, informações relativas ao empenho, quantidade, valor unitário e valor total.

Por fim, possibilita trazer informações adicionais ao fornecedor, tais como: telefone de contato, endereço, exigências quanto a forma de apresentação das notas fiscais, local de sua entrega, etc.

Para inclusão de um ordem de compra o usuário poderá optar por duas opções, que estão detalhadas logo abaixo:

### Inclusão por Empenho

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Ordem de Compra > Inclusão por Empenho
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image257.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image257.png)

O usuário poderá filtrar efetivando a busca por:

- **Numcgm:** digitando ou clicando em [![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image150.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image150.png) para efetivar uma busca mais avançada.
- **Número do Empenho:** digitando ou clicando em [![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image56.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image56.png)para efetivar uma busca mais avançada
- **Seq. Empenho:** digitando ou clicando em [![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image284.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image284.png)para efetivar uma busca mais avançada.

Processando a informação do empenho que irá originar a Ordem de Compra, o e-cidade exibirá a tela abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image129.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image129.png)

Os primeiros dados exibidos são as informações do fornecedor e que se encontram no cadastro do CGM, portanto para manutenção desses dados é necessário acessar a rotina:

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Geral do Município - CGM (novo)
\`\`\`

Demais campos, o usuário poderá especificar o prazo de entrega em dias, bem como o almoxarifado que será destinado à entrada da Ordem de Compra e um campo observação para informações complementares que achar interessante serem emitidas junto com o documento.

**IMPORTANTE:** A entrada da ordem de compra efetivada através da rotina abaixo somente poderá ser efetivada para o almoxarifado definido nesse momento.

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Entrada de Ordem de Compra > Inclusão
\`\`\`

### Inclusão Geral

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Ordem de Compra > Inclusão Geral
\`\`\`

Para gerar ordem de compra por inclusão geral, o usuário deve informar ao e-cidade o número do CGM do fornecedor ou um intervalo de tempo definido por data.

Se o usuário optar por informar o número do CGM, o e-cidade retornará todos os empenhos realizados em nome do fornecedor indicado, trazendo dados como: Seq. Empenho, Número do Empenho, Data de Liberação, Nome/Razão Social, Data Emissão e Depto. Origem.

Filtrando por período, nesse caso o e-cidade retornará todos os empenhos emitidos entre a data inicial e final definida, ambas os filtros resultarão resultados no seguinte formato:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image193.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image193.png)

O usuário deverá informar qual ou quais empenhos desejar onde será gerado uma ou mais ordem de compra.

**NOTA:** para cada empenho selecionado será gerado uma ordem de compra.

Na tela exemplificada anteriormente, o usuário poderá utilizar o filtro "Emitido por:

- **Empenho:** vários empenho indiferente do fornecedor.
- **Fornecedor:** ordem de compra de empenho relativo a um determinado fornecedor.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image117.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image117.png)

Na tela acima fica de responsabilidade do usuário informar o departamento destino, prazo para entrega em dias, observação bem como marcar os itens que irão compor as ordens de compra.

Após incluir o sistema emitirá as ordens de compra de acordo com a quantidade de empenhos selecionados.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image213.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image213.png)

### Anulação

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Ordem de Compra > Anulação
\`\`\`

Rotina que permite ao usuário efetivar a anulação de ordem de compra.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image313.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image313.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image167.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image167.png)
Na tela acima o usuário poderá preencher alguma observação referente a anulação da ordem de compra, também poderá solicitar a anulação do empenho, se desejar deverá deixar a opção como “Sim”' antes de clicar em .

**NOTA:** Importante reforçar que só poderá ser efetivado a anulação de uma ordem de compra que não tenha sido efetivada entrada no almoxarifado, caso ocorra esse cenário o usuário irá se deparar com a seguinte mensagem:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image322.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image322.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Ordem de Compra > Alteração
\`\`\`

Rotina que permite ao usuário efetivar a alteração de uma ordem de compra, podendo ser efetivado modificação de informações como: dias de prazo para entrega, almoxarifado e observação.
`,
  "Gera Certificado": `
Procedimento destinado a gerar o Certificado de Registro Cadastral (CRC), utilizado pela administração pública com documento obrigatório para certames licitatórios por exemplo.

### Inclusão

Para inclusão de um CRC é necessário alguns procedimentos que antecedem essa etapa, estes são listados logo abaixo:

Após acessar a rotina o e-cidade listará os fornecedores cadastrados no e-cidade, o usuário poderá filtrar pelo código do fornecedor, nome/razão social, CNPJ/CPF, Data Lançamento ou simplesmente clicando sobre um dos registros que serão listados:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image82.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image82.png)

Após selecionar o fornecedor o sistema exibirá a tela abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image39.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image39.png)

- **Fornecedor:** fornecedor selecionado na tela anterior e que será incluso o CRC.
- **Solicitante:** solicitante do CRC para o fornecedor.
- **Validade do Certificado:** validade do certificado.
- **Cod. Tipo Certificado:** código do tipo de certificado realizado na rotina abaixo:

DB:PATRIMONIAL > Compras > Cadastros > Cadastro de Tipos de Certificados
- **Imprimir Objeto Social:** se esta opção estiver definida como "Sim", o e-cidade emitirá o objeto social definido no cadastro de fornecedor.

DB:PATRIMONIAL > Compras > Cadastros > Fornecedores > Alteração

Após selecionar o Cod. Tipo Certificado o e-cidade retornará na parte inferior da tela os documentos vinculados a ele conforme a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image211.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image211.png)

Cabe ao usuário informar a validade dos documentos, data de emissão, situação se apresentado SIM/NÃO, bem como observação adicional se assim desejar.

Após a inclusão o usuário receberá o alerta abaixo, podendo optar por imprimir ou cancelar.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image102.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image102.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image289.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image289.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Gera Certificado > Alteração
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image153.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image153.png)
Rotina que permite a alteração das informações incluídas no CRC para o fornecedor. O usuário poderá informar o código do certificado ou então clicar em e efetivar filtros complementares.
`,
  "Configurações do texto da ordem de compra": `
### Cabeçalho 1

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Configuração do texto da ordem de compra > Cabeçalho 1
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image99.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image99.png)

### Cabeçalho 2

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Configuração do texto da ordem de compra > Cabeçalho 2
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image220.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image220.png)
`,
  "Manutenção de reserva de saldo": `
### Solicitação

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Manutenção de reserva de saldo > Solicitação
\`\`\`

Através desta rotina é possível realizar a manutenção de uma reserva de saldo realizada para uma solicitação de compras, seja incluindo, alteração ou até mesmo excluindo uma existente.

Ao acessar a rotina, será possível visualizar os seguintes filtros:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image249.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image249.png)

Ao aplicar os devidos filtros o e-cidade irá listar ou mais solicitações de compras dependendo de quais foram os critérios utilizados para realizar a pesquisa.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image317.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image317.png)

As informações listadas serão: n° da solicitação de compras, data de emissão, dotações que envolvem os itens da solicitação e o seu respectivo resumo.

Para acessar os itens da solicitação de compras, basta efetuar dois cliques sobre a linha desejada.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image255.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image255.png)

O campo Vlr. Reservar permite a manutenção, portanto através do mesmo o usuário poderá zerar, incluir (caso não haja um sequencial de reserva/valor reservado) ou até mesmo alterar o valor já reservado.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image134.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image134.png)
Após a manutenção dos itens desejados, basta o usuário clicar em a fim de salvar sua manutenção. O e-cidade irá questionar se deseja emitir o documento chamado “Nota de Bloqueio” caso o usuário opte por “Sim” poderá clicar em “Ok” e o mesmo será emitido.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image160.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image160.png)

### Autorização

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Manutenção de reserva de saldo > Autorização
\`\`\`

Através desta rotina é possível realizar a anulação de uma reserva de saldo realizada para uma Autorização de Empenho.

Ao acessar a rotina, será possível visualizar os seguintes filtros:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image274.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image274.png)

Ao aplicar os devidos filtros o e-cidade irá listar ou mais autorizações dependendo de quais foram os critérios utilizados para realizar a pesquisa.

As informações listadas serão: n° da autorização, data de emissão, dotações que envolvem os itens da autorização, seu respectivo resumo e valor.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image144.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image144.png)
Para selecionar todas as autorizações listadas, basta clicar na coluna descrita como

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image232.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image232.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image40.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image40.png)
Ao clicar sobre a dotação que no exemplo acima é o e-cidade listará informações a respeito da mesma conforme imagem abaixo, incluindo reservas encontradas para a mesma.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image83.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image83.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image185.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image185.png)
Para cancelar a reserva efetivada para a autorização de empenho basta selecionar as autorizações que deseja efetivar o cancelamento e clicar em .

O e-cidade emitirá um alerta questionando se confirma a anulação:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image72.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image72.png)
`,
  "Registro de Preço": `
# Registro de Preço Por Quantidade

**ABERTURA DE REGISTRO DE PREÇO**

### Inclusão de Abertura de Registro de Preço

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Quantidade > Abertura do Registro de Preço > Incluir Abertura
\`\`\`

Esta rotina destina-se à inclusão de um registro de preço no e-cidade com a finalidade de solicitação de materiais via futura licitação, a mesma é separada em duas abas, à saber:

1. Abertura
2. Itens

***(1)Abertura***

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image252.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image252.png)

- **Código de Abertura:** código sequencial gerado automaticamente pelo e-cidade.
- **Data Vigência:** data da vigência que os departamentos terão para lançar suas estimativas.

**NOTA IMPORTANTE:** Esta vigência não é a do Registro de Preço.

- **Resumo:** campo livre para inclusão de informações referente a abertura do registro de preço que está sendo inclusa no e-cidade.
- **Disponibilizar para Utilização:** caixa de seleção que parametriza a disponibilização do registro de preço aos departamentos para inclusão de estimativas.

**NOTA IMPORTANTE:** o registro de preço não ficará disponível aos departamentos para inclusão de estimativa se esta caixa não estiver selecionada, mesmo que dentro da vigência.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image18.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image18.png)
[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image184.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image184.png)
Após preencher as informações o usuário poderá realizar a inclusão da Abertura de Registro de Preço clicando em ou então em para realizar a impressão, lembrando que nesse primeiro momento não serão listados itens até o preenchimento da próxima aba.

***(2)Itens***

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image241.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image241.png)

- **Código do Material:** o usuário poderá informar o código do material ou então digitar parte da descrição para que o e-cidade liste materiais, caso deseje utilizar filtros complementares poderá clicar sobre [![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image264.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image264.png) e utilizar de outros como Elemento, Grupo, Subgrupo entre outros.
- **Unidade:** unidade de medida referente ao material a ser incluído na Abertura do Registro de Preço e futuramente à ser solicitado.
- **Mais Informações:** através deste botão o usuário poderá informar dados complementares referente ao item, tais como Prazo de entrega, Condições de pagamento, Resumo do Item e Justificativa para compra.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image234.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image234.png)
Após finalizar o preenchimento das informações o usuário poderá seguir com do item clicando em .

Os itens serão listados na parte inferior "Itens Cadastrados".

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image273.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image273.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image186.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image186.png)
[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image7.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image7.png)
O usuário poderá realizar a alteração da unidade de medida clicando no botão da última coluna "Ação" ou então realizar a exclusão clicando em .

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image142.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image142.png)
Caso deseje alterar informações incluídas em "Dados Complementares" em "Mais Informações" poderá clicar em na coluna descrita como "Out. Inf".

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image16.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image16.png)
Após realizar o cadastro de todos os itens que irão compor a Abertura do Registro de Preço o usuário poderá clicar em .

### Alteração de Abertura de Registro de Preço

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Quantidade > Abertura do Registro de Preço > Alterar Abertura
\`\`\`

Rotina que permite realizar a alteração da abertura do registro de preço bem como a exclusão de itens já lançados ou com a inclusão de novos além dos exibidos na listagem.

**NOTA:** Essa alteração somente poderá ser realizada se não houver estimativa inclusa. Caso tenha estimativa, deverá ser observado o parâmetro "Permite a Alteração da Abertura", se estiver como "SIM", o e-cidade permitirá alterações mesmo após lançamento de estimativas.

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Parâmetros
\`\`\`

### Anulação de Abertura de Registro de Preço

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Quantidade > Abertura do Registro de Preço > Anulação Abertura
\`\`\`

Rotina que permite realizar a anulação da Abertura do Registro de Preço, a mesma ficará disponível no e-cidade, porém, com situação anulada.

**NOTA:** Somente será possível efetivar a anulação da abertura de registro de preço caso ainda não tenha sido lançada nenhuma estimativa por nenhum departamento.

---

**ESTIMATIVA DE REGISTRO DE PREÇO**

### Inclusão de Estimativa

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Quantidade > Estimativas de Registro de Preço > Incluir Estimativa
\`\`\`

Esta rotina permite realizar a inclusão das quantidades estimadas a serem adquiridas pelo setor/departamento. Assim que o usuário acessar a rotina serão listadas Aberturas de Registro de Preço
que estão como disponíveis e dentro da vigência para lançamento de estimativa.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image165.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image165.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image120.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image120.png)
Após o usuário selecionar a Abertura de Registro de Preço, seja clicando sobre a mesma ou digitando o número da Solicitação e clicando em serão exibido duas abas:

1. Estimativa
2. Itens

***(1)Estimativa***

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image135.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image135.png)

- **Código da Estimativa:** código sequencial a ser gerado para a estimativa que está sendo inclusa.
- **Data:** data da sessão que está sendo incluída a estimativa.
- **Resumo:** campo aberto para inclusão de uma descrição complementar / resumo da estimativa que está sendo lançada para o setor/departamento.
- **Abertura de Preço:** campo que listará a Abertura de Registro de Preço selecionada na tela anterior, caso o usuário deseja alterar, basta clicar em [![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image73.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image73.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image14.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image14.png)
[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image110.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image110.png)
Para inclusão da estimativa, basta o usuário clicar em ou então em , lembrando que não será listado os quantitativos dos itens antes do seu respectivolançamento na próxima aba (Itens) apenas serão listados.

***(2)Itens***

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image299.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image299.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image35.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image35.png)
Nessa tela o e-cidade irá listar os itens lançados na Abertura do Registro de Preço e habilitado o campo Qtde (Quantidade) para que o usuário possa lançar o quantitativo estimado para o item, após é sóclicar em .

**NOTA:** Somente será possível realizar a inclusão de novos itens se o parâmetro "Permite Incluir Itens na Estimativa" estiver definido como "SIM".

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Parâmetros
\`\`\`

Nesse caso, o e-cidade irá exibir as seguintes opções na inclusão de estimativa:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image198.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image198.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image158.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image158.png)
Da mesma forma como o parâmetro permite realizar a inclusão de novos itens à Estimativa de Registro de Preço, permite a exclusão através do botão em “Ação”, mas somente de itens que tiverem a inclusão através da estimativa.

### Alteração de Estimativa

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Quantidade > Estimativas de Registro de Preço > Alterar Estimativa
\`\`\`

Esta rotina permite alteração de quantidade lançada como estimativa para o setor/departamento, portanto é imprescindível que o usuário esteja no departamento que realizou a inclusão bem como ainda não tenha sido incluída uma Compilação para o Registro de Preço, caso o contrário a mesma não será listada.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image15.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image15.png)
Após a manutenção das quantidades, o usuário poderá efetivar as alterações clicando em .

### Anulação de Estimativa

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Quantidade > Estimativas de Registro de Preço > Anulação Estimativa
\`\`\`

Rotina que permite realizar a anulação da Estimativa de Registro de Preço, a mesma ficará disponível no e-cidade, porém, com situação anulada.

**NOTA:** Somente será possível efetivar a anulação da estimativa de registro de preço caso ainda não tenha sido lançada a Compilação do Registro de Preço.

---

**COMPILAÇÃO DE REGISTRO DE PREÇO**

Nada mais é que a junção de todas as quantidades lançadas em estimativas dentro da Abertura de Registro de Preço.

### Inclusão da Compilação

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Quantidade > Compilação > Inclusão da Compilação
\`\`\`

Ao acessar a rotina, o usuário deverá selecionar a Abertura de Registro de Preço que deseja efetivar a Compilação das Estimativas lançada.

Ao selecionar, o e-cidade retornará a seguinte tela:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image201.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image201.png)

- **Código:** sequencial que será gerado automaticamente para a Compilação que está sendo inclusa.
- **Data Vigência:** vigência do registro de preço, esta se caracteriza uma vigência estimada uma vez que entende-se que a licitação ainda não foi lançada, portanto, após a homologação do processo licitatório está informação poderá ser dada manutenção e ajustada.
- **Resumo:** campo livre para inclusão de informação adicional referente a compilação dos quantitativos lançados nas estimativas da abertura do registro de preço.
- **Abertura de Preço:** usuário poderá alterar a Abertura de Registro de Preço clicando [![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image310.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image310.png) e selecionando outra.
- **Disponibilizar para Utilização:** disponibiliza para utilização a compilação.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image84.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image84.png)
[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image145.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image145.png)
Após o usuário clicar em , automaticamente o e-cidade irá selecionar a aba itens, onde será disponibilizado todos os itens que compõem a Compilação, suas informações como qtd. min, qtd. max, unidade de medida, descrição e outras informações disponíveis em

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image1.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image1.png)
Assim que o usuário confirmar as informações, poderá clicar em , caso tenha algum quantitativo a ser ajustado, o usuário poderá acessar a rotina de alteração de estimativa e efetivar o ajuste, consequentemente irá impactar na Qtd. Máx. da Compilação do Registro de Preço.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image71.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image71.png)
Na aba Compilação há um botão , este é um atalho para a rotina abaixo, portanto o usuário poderá emitir o documento Compilação Registro Preço clicando neste botão.

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Registro de Preço > Emite Compilação
\`\`\`

### Alteração da Compilação

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Quantidade > Compilação > Alteração da Compilação
\`\`\`

Nesta rotina é possível realizar alterações de informações como Data Vigência, Resumo, Habilitar / Desabilitar a Disponibilização para Utilização da Compilação.

**NOTA:** Somente é possível realizar alterações antes do processamento, caso a compilação esteja como Processado: Não, caso esteja como Sim, será necessário cancelar o Processamento.

### Anulação da Compilação

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Quantidade > Compilação > Anulação Compilação
\`\`\`

Rotina que permite realizar a anulação da Compilação Registro de Preço, a mesma ficará disponível no e-cidade, porém, com situação anulada.

**NOTA:** Somente será possível efetivar a anulação da compilação de registro de preço caso ainda não tenha sido efetivado o Processamento.

---

**PROCESSAMENTO DA COMPILAÇÃO**

### Processamento

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Processamento
\`\`\`

Através desta rotina é possível realizar a inclusão do processo de compras.

Ao acessar, o e-cidade listará as compilações inclusas e disponíveis para processamento, portanto, o usuário poderá selecionar entre as listadas ou então aplicar filtros como o próprio número da compilação ou então a data da mesma.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image326.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image326.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image157.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image157.png)
Ao selecionar a compilação, o e-cidade retornará informações a respeito da compilação bem como um botão descrito como , ao clicar sobre o mesmo listará os itens da seguinte disposição conforme a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image23.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image23.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image164.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image164.png)
Após o usuário confirmar as informações poderá clicar em , o e-cidade emitirá um alerta como este abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image64.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image64.png)

Assim que finalizar o processamento, emitirá um alerta com o Processo de Compras gerada.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image136.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image136.png)

### Cancelar Processamento

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Cancelar Processamento
\`\`\`

Ao acessar, o e-cidade listará as compilações que estão como situação Processada: Sim, neste caso bastará o usuário selecionar entre as listadas ou então aplicar filtros como o próprio número da compilação ou então a data da mesma.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image96.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image96.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image19.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image19.png)
Para confirmar o Cancelamento do Desprocessamento, o usuário terá que clicar em .
`,
  "Registro de Preço - Página 2": `
# Registro de Preço Por Valor

Através deste recurso é possível criar um Registro de Preço por Valor, onde são incluídos itens de serviço e os valores que serão gastos com os mesmos. Portanto é possível uma nova forma de julgamento na licitação, onde ganhará o fornecedor que provê o maior desconto.

**ABERTURA DE REGISTRO DE PREÇO**

### Inclusão de Abertura de Registro de Preço

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Valor > Abertura > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image170.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image170.png)

- **Código:** Código sequencial gerado pelo e-cidade e atribuído a Abertura de RP por Valor.
- **Data de Vigência:** Data de vigência da Abertura de RP por Valor este é o período que os departamentos terão para Manifestar o interesse em participar do Registro de Preço por Valor.
- **Disponibilizar para Utilização:** Se sim disponibiliza para utilização a abertura do registro de preço para que os departamentos possam manifestar interesse.
- **Resumo:** Campo aberto para informar um resumo referente a Abertura de Registro de Preço Por Valor.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image223.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image223.png)
Ao clicar em o e-cidade irá alternar para aba Itens ficando os campos disponíveis conforme a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image285.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image285.png)

- **Serviço:** Ao clicar em [![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image229.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image229.png),serão listados itens Ativos, que estão como Serviço: Sim para que o usuário possaselecionar e adicionar a Abertura de RP Por Valor.

Na tela de seleção do Serviço o usuário poderá aplicar filtros disponíveis conforme a imagem abaixo, com a finalidade de refinar a busca.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image27.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image27.png)

- **Valor:** o usuário informa o valor máximo para o item.
- **Mais Informações:** através deste botão o usuário poderá complementar o item com informações como Resumo, Justificativa, Informações de Pagamento ou até mesmo Prazo para o item que está sendo adicionado.

Para cada item/serviço adicionado, o e-cidade listará na parte inferior da tela como “Itens Adicionados” conforme a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image10.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image259.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image259.png)
[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image46.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image46.png)
O usuário poderá realizar Ação quanto ao item adicionado, como Alteração clicando em ou até mesmo Excluir o item clicando em , estes botões estão disponíveis na última coluna descrita como “Ação”.

### Alteração de Abertura de Registro de Preço

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Valor > Abertura > Alteração
\`\`\`

Rotina que permite alteração de informações como vigência, disponibilizar para utilização (Sim/Não), resumo da Abertura, em itens consigo incluir novos itens, modificar itens já inclusos bem como excluir se assim desejar.

**NOTA:** Somente será possível realizar alteração da abertura de RP por valor caso ainda nenhum departamento tenha manifestado interesse.

### Anulação de Abertura de Registro de Preço

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Valor > Abertura > Anulação
\`\`\`

Rotina que permite a anulação da abertura de registro de preço, a mesma ficará disponível no sistema para consulta, porém, não será possível alterar a mesma, bem como realizar a manifestação de interesse.

**NOTA:** Somente será possível realizar anulação da abertura de RP por valor caso ainda nenhum departamento tenha manifestado interesse. Atenção quando a realizar este procedimento, pois esta ação não poderá ser desfeita.

---

**MANIFESTAÇÃO DE INTERESSE**

### Inclusão de Manifestação de Interesse

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Valor > Manifestar Interesse > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image66.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image66.png)

- **Código:** numeração sequencial será gerada automaticamente pelo e-cidade atribuindo para a manifestação de interesse do departamento.
- **Abertura:** através deste link o usuário poderá alterar a abertura selecionada se assim desejar ou clicando sobre o botão [![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image37.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image37.png).
- **Itens:** retorna os itens e os seus respectivos valores lançados na abertura.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image128.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image128.png)
As caixas de seleção voltarão desmarcadas, portanto o usuário poderá selecionar entre os itens listados que deseja manifestar interesse, após marcar as que desejar basta clicar em .

### Alteração de Manifestação de Interesse

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Valor > Manifestar Interesse > Alteração
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image3.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image3.png)
Nesta rotina o usuário poderá de deixar de manifestar interesse para algum item, neste caso poderá apenas desmarcar o item que não deseja e clicar em

### Anulação de Manifestação de Interesse

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Valor > Manifestar Interesse > Anulação
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image280.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image280.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image156.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image156.png)
O usuário poderá efetivar a anulação da manifestação de interesse efetivada pelo seu departamento apresentando um motivo e clicando em .

**NOTA:** O usuário somente poderá efetivar uma anulação de manifestação de interesse se não houver uma Compilação para o Registro de Preço.

---

**COMPILAÇÃO DE REGISTRO DE PREÇO**

### Inclusão de Compilação de Registro de Preço

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Valor > Compilação > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image216.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image216.png)

- **Código da Abertura:** o usuário poderá alterar a abertura selecionada clicando sobre este link.
- **Data de vigência:** vigência estimada para execução do registro de preço a mesma poderá ser alterada após a homologação do processo licitatório através da rotina abaixo:

DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Vigência Registro de Preço
- **Resumo:** campo aberto para digitar informações referente a compilação do registro de preço por valor.
- **Itens:** listará itens e os seus respectivos valores que compõem o registro de preço.

### Anulação de Compilação de Registro de Preço

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Por Valor > Compilação > Anulação
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image307.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image307.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image156.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image156.png)
O usuário poderá efetivar a anulação da compilação apresentando um motivo e clicando em , a mesma ficará disponível no e-cidade, porém, não poderá ser efetivado o processamento da compilação.
`,
  "Registro de Preço - Página 3": `
# Processamento de Registro de Preço

### Processamento

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Processamento
\`\`\`

Através desta rotina é possível realizar a inclusão do processo de compras.

Ao acessar, o e-cidade listará as compilações inclusas e disponíveis para processamento, portanto, o usuário poderá selecionar entre as listadas ou então aplicar filtros como o próprio número da compilação ou então a data da mesma.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image326.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image326.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image157.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image157.png)
Ao selecionar a compilação, o e-cidade retornará informações a respeito da compilação bem como um botão descrito como , ao clicar sobre o mesmo listará os itens da seguinte disposição conforme a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image23.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image23.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image164.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image164.png)
Após o usuário confirmar as informações poderá clicar em , o e-cidade emitirá um alerta como este abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image64.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image64.png)

Assim que finalizar o processamento, emitirá um alerta com o Processo de Compras gerada.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image136.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image136.png)

### Cancelar Processamento

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Cancelar Processamento
\`\`\`

Ao acessar, o e-cidade listará as compilações que estão como situação Processada: Sim, neste caso bastará o usuário selecionar entre as listadas ou então aplicar filtros como o próprio número da compilação ou então a data da mesma.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image96.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image96.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image19.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image19.png)
Para confirmar o Cancelamento do Desprocessamento, o usuário terá que clicar em .
`,
  "Registro de Preço - Página 4": `
# Cedência de Quantitativo de Itens em Registro de Preço

Ao acessar a rotina o e-cidade listará as compilações ao qual o departamento da sessão está participando.

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Registros de Preço > Processamento
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image77.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image77.png)

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image91.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image91.png)
Caso o usuário deseja alterar o departamento, poderá clicar sobre o ícone e selecionar dentre os disponíveis.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image174.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image174.png)

Após o usuário terá que identificar a compilação dentre as listas e dar dois cliques sobre o que deseja, o e-cidade listará os demais departamentos participantes do registro de preço conforme a imagem abaixo.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image221.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image221.png)

Após identificar qual o departamento que irá efetivamente receber a cedência, dê dois cliques sobre o mesmo, o e-cidade abrirá a seguinte tela:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image281.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image281.png)

O usuário poderá visualizar o resumo do item passando o mouse sobre o mesmo conforme a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image314.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image314.png)

- Qtd. Disp: Quantidade disponível como saldo da estimativa para cedência.
- Cedido: Quantidade já cedida entre o departamento de origem e destino.
- Qrd. Ceder: Quantidade a ceder, campo aberto, onde o usuário poderá informar a quantidade que será cedido para o departamento destino.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image181.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image181.png)
Após informar os devidos quantitativos o usuário poderá clicar em .

Para conferência o usuário poderá utilizar a rotina abaixo:

\`\`\`
DB:PATRIMONIAL > Compras > Consultas > Abertura Registro de preço
\`\`\`

Ao visualizar dados da estimativa do departamento origem listará o quantitativo como “Cedida”:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image88.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image88.png)

Ao visualizar dados da estimativa do departamento destino listará o quantitativo como “Recebida”:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image141.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image141.png)

Ao clicar sobre o link seja na quantidade Cedida ou Recebida, o usuário poderá visualizar mais informações a respeito como exemplifica a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image80.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image80.png)
`,
  "Libera Fornecedor": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Libera Fornecedor > Inclusão
\`\`\`

Através desta rotina é possível efetivar a liberação do fornecedor com débito, a mesma é separada em 3 abas, sendo elas:

1. Dados Gerais
2. Solicitações
3. Processo de Compras

**1.Dados Gerais**

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image86.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image86.png)

- **Fornecedor:** campo para informar o número do CGM do fornecedor, caso usuário desconheça poderá pesquisar clicando sobre [![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image272.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image272.png)

**Dados Liberação:**

- **Período:** campo que permite informar o período de vigência da liberação do fornecedor para utilização em solicitações e autorizações.
- **Libera Solicitação:** ao marcar esta caixa de seleção, o e-cidade irá disponibilizar o fornecedor para qualquer solicitação de compras.
- **Libera Processo de Compras:** ao marcar esta caixa de seleção, o e-cidade irá disponibilizar o fornecedor para qualquer processo de compras.
- **Liberação Autorização de Empenho:** ao marcar esta caixa de seleção, o e-cidade irá disponibilizar o fornecedor para qualquer autorização de empenho.
- **Observação:** campo livre para informar o motivo da liberação ou outra informação que o usuário achar necessária.

**2. Solicitações**

Esta aba somente será habilitada caso a caixa de seleção: ***"Libera Solicitação"*** esteja marcada.

Nesta aba é possível informar a Solicitação de Compras que o usuário deseja efetivar a liberação para o fornecedor indicado na aba ***"Dados Gerais"***. Caso o usuário não saiba o código da Solicitação de Compras poderá clicar em ***"Solicitação"*** e aplicar filtros adicionais de pesquisa.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image318.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image318.png)

***NOTA:** Apenas a solicitação de compras lançadas estarão liberadas para receber o fornecedor.*

**3. Processo de Compras**

Nesta aba é possível informar o Processo de Compras que o usuário deseja efetivar a liberação para o fornecedor indicado na aba “Dados Gerais”. Caso o usuário não saiba o código do Processo de Compras poderá clicar em ***"Processo de Compras"*** e efetivar a pesquisa.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image112.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image112.png)

***NOTA:** Apenas os processos de compras lançados estarão liberados para receber o fornecedor. Esta aba somente será habilitada caso a caixa de seleção: *“Libera Processo de Compras”* esteja marcada.*

### Alteração

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Libera Fornecedor > Alteração
\`\`\`

Permite alterar qualquer informação incluída na liberação, ou seja, pode ser acrescentado registros ou retirá-los.

### Notificação

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Libera Fornecedor > Notificação
\`\`\`

Permite emitir notificação ao fornecedor que possui débitos.

### Cancelamento

\`\`\`
DB:PATRIMONIAL > Compras > Procedimentos > Libera Fornecedor > Cancelamento
\`\`\`

Permite efetivar o cancelamento da liberação do fornecedor, porém, não a exclui, mantendo os registros no e-cidade.
`,
};
