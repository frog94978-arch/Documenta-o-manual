export const comprasCadastroContent: Record<string, string> = {
  "Grupos de Material/Serviço": `
Os grupos compreendem a agregação de elementos de despesa que apresentam as mesmas características quanto ao objeto de gasto.

Assim, formados os grupos, a cada um deles teremos ligados um ou mais elementos de despesas, que servem para identificar os objetos de gasto, tais como vencimentos e vantagens fixas, juros, diárias, material de consumo, serviços de terceiros, obras e instalações, etc.

Como exemplo, pode-se citar um grupo chamado Gêneros Alimentícios que estará ligado aos elementos de despesa material de consumo e material de distribuição gratuita.

## Inclusão
**DB:PATRIMONIAL > Compras > Cadastros > Grupos de Material/Serviço > Inclusão**

- **Código do grupo**: código sequencial que será criado automaticamente pelo e-cidade no momento da inclusão.
- **Descrição do grupo**: neste campo usuário deve informar o nome do grupo que está sendo incluído.
- **Natureza do Grupo**: Por padrão terá o valor "Produto", porém, podendo escolher entre outras duas opções: Serviço e Medicamento.
- **Ativo**: para o grupo ser utilizado no e-cidade, este campo deverá estar como “SIM”.
- **Elementos**: são os elementos de despesas que ficarão vinculados ao grupo que está sendo incluso, devendo o usuário selecioná-los através da caixa de seleção.

**NOTA**: todo elemento deve estar vinculado a uma dotação, para que este seja listado entre as opções a serem escolhidas.

## Alteração
**DB:PATRIMONIAL > Compras > Cadastros > Grupos de Material/Serviço > Alteração**

Através desta rotina é possível realizar a alteração dos grupos de materiais e serviços cadastrados no e-cidade.

## Exclusão
**DB:PATRIMONIAL > Compras > Cadastros > Grupos de Material/Serviço > Exclusão**

Através desta rotina é possível realizar a exclusão dos grupos de materiais e serviços cadastrados no e-cidade.

**NOTA**: É vedada a exclusão do grupo caso algum subgrupo de material/serviço esteja vinculado ao mesmo; Para a utilização de um Grupo de Material/Serviços na inclusão Material/Serviço é obrigatório o seu vínculo com ao menos um Subgrupo de Material/Serviço conforme o próximo tópico.
`,
  "Subgrupos de Materiais/Serviços": `
O subgrupo identifica o material ou serviço que pertence à família do grupo. No e-cidade, o subgrupo liga o material/serviço a um grupo.

## Inclusão
**DB:PATRIMONIAL > Compras > Cadastros > Subgrupos de Materiais/Serviços > Inclusão**

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

## Alteração
**DB:PATRIMONIAL > Compras > Cadastros > Subgrupos de Materiais/Serviços > Alteração**

Permite realizar a alteração dos subgrupos de materiais/serviços cadastrados no e-cidade;

## Exclusão
**DB:PATRIMONIAL > Compras > Cadastros > Subgrupos de Materiais/Serviços > Exclusão**

Permite realizar a exclusão dos subgrupos de materiais e serviços cadastrados no e-cidade;

**NOTA**: É vedada sua exclusão caso algum Material/Serviço que o contenha tenha sido cadastrado.
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
**DB:PATRIMONIAL > Compras > Cadastros > Materiais/Serviços > Inclusão**

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

## Alteração
**DB:PATRIMONIAL > Compras > Cadastros > Materiais/Serviços > Alteração**

Através desta rotina é possível realizar a alteração de informações de Materiais/Serviços.

**Ponto importante**: caso não identifique um desdobramento para selecionar, o usuário deverá alterar o "Grupos de Material/Serviço" vinculado e habilitar o elemento de despesa origem.

**NOTA**: Não será possível realizar alteração de informações como Código do Grupo/Subgrupo e desvincular desdobramentos que já estejam em Autorização de Empenho, assim como a opção "Serviço" não poderá ser alterada.

## Exclusão
**DB:PATRIMONIAL > Compras > Cadastros > Materiais/Serviços > Exclusão**

Através desta rotina é possível realizar a exclusão de Materiais/Serviços.

**NOTA**: É vetada a exclusão do item caso o mesmo tenha sido utilizado em uma Solicitação de Compras ou Autorização de Empenho Manual.
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

### Certificados

Lista de certificados já emitidos para o fornecedor.
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
**Patrimonial > Compras > Consulta > Consulta Empenho**

Na consulta de empenho é possível verificar toda a sua movimentação, como por exemplo os itens, a ordem de compra, pagamento, lançamentos contábeis, notas, etc. Através dos botões de consulta do quadro “Detalhamento”.
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
  "Libera Fornecedor": `
Esta rotina é possível efetivar a liberação do fornecedor com débito, a mesma é separada em 3 abas, sendo elas:
1. **Dados Gerais**
2. **Solicitações**
3. **Processo de Compras**

## Inclusão
**DB:PATRIMONIAL > Compras > Procedimentos > Libera Fornecedor > Inclusão**

### 1. Dados Gerais
- **Fornecedor**: campo para informar o número do CGM do fornecedor.
- **Dados Liberação**:
    - **Período**: campo que permite informar o período de vigência da liberação do fornecedor.
    - **Libera Solicitação**: ao marcar esta caixa, o e-cidade disponibilizará o fornecedor para qualquer solicitação de compras.
    - **Libera Processo de Compras**: disponibiliza o fornecedor para qualquer processo de compras.
    - **Liberação Autorização de Empenho**: disponibiliza o fornecedor para qualquer autorização de empenho.
- **Observação**: campo livre para informar o motivo da liberação ou outras informações.

### 2. Solicitações
Esta aba somente será habilitada caso a caixa de seleção: **"Libera Solicitação"** esteja marcada.
Nesta aba é possível informar a Solicitação de Compras específica que se deseja liberar para o fornecedor.
- **NOTA**: Apenas solicitações de compras lançadas estarão liberadas para receber o fornecedor.

### 3. Processo de Compras
Esta aba somente será habilitada caso a caixa de seleção: **“Libera Processo de Compras”** esteja marcada.
Nesta aba é possível informar o Processo de Compras específico para a liberação.
- **NOTA**: Apenas processos de compras lançados estarão liberados para receber o fornecedor.

## Alteração
**DB:PATRIMONIAL > Compras > Procedimentos > Libera Fornecedor > Alteração**
Permite alterar qualquer informação incluída na liberação, podendo acrescentar ou retirar registros.

## Notificação
**DB:PATRIMONIAL > Compras > Procedimentos > Libera Fornecedor > Notificação**
Permite emitir notificação ao fornecedor que possui débitos.

## Cancelamento
**DB:PATRIMONIAL > Compras > Procedimentos > Libera Fornecedor > Cancelamento**
Permite efetivar o cancelamento da liberação do fornecedor, mantendo os registros no e-cidade (não exclui).
`,
};
