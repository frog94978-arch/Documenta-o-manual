export const comprasCadastroContent: Record<string, string> = {
  "Grupos de Material/Serviço": `
# Grupos de Material/Serviço

Este cadastro é utilizado para agrupar materiais e serviços de mesma natureza.

## Inclusão

Para incluir um novo grupo, siga os passos:
1.  Acesse o menu...
2.  Clique em "Novo".
3.  Preencha os campos...
4.  Clique em "Salvar".

## Alteração

Para alterar um grupo existente:
1.  Busque pelo grupo desejado.
2.  Clique em "Editar".
3.  Modifique os campos necessários.
4.  Clique em "Salvar".

## Exclusão

Para excluir um grupo:
1.  Busque pelo grupo.
2.  Clique em "Excluir".
3.  Confirme a exclusão.
`,
  "Subgrupos de Materiais/Serviços": `
# Subgrupos de Materiais/Serviços

Este cadastro detalha os grupos de materiais e serviços.

## Inclusão

Para incluir um novo subgrupo:
1.  Acesse o menu...
2.  Clique em "Novo".
3.  Preencha os campos...
4.  Clique em "Salvar".

## Alteração

Para alterar um subgrupo existente:
1.  Busque pelo subgrupo desejado.
2.  Clique em "Editar".
3.  Modifique os campos necessários.
4.  Clique em "Salvar".

## Exclusão

Para excluir um subgrupo:
1.  Busque pelo subgrupo.
2.  Clique em "Excluir".
3.  Confirme a exclusão.
`,
  "Materiais/Serviços": `
# Materiais/Serviços

Cadastro detalhado de cada material ou serviço.

## Inclusão

Para incluir um novo material/serviço:
1.  Acesse o menu...
2.  Clique em "Novo".
3.  Preencha os campos...
4.  Clique em "Salvar".

## Alteração

Para alterar um material/serviço existente:
1.  Busque pelo item desejado.
2.  Clique em "Editar".
3.  Modifique os campos necessários.
4.  Clique em "Salvar".

## Exclusão

Para excluir um material/serviço:
1.  Busque pelo item.
2.  Clique em "Excluir".
3.  Confirme a exclusão.
`,
  "Cadastro de Unidades": `
# Cadastro de Unidades

Cadastro das unidades de medida dos materiais.

## Inclusão

Para incluir uma nova unidade:
1.  Acesse o menu...
2.  Clique em "Novo".
3.  Preencha os campos...
4.  Clique em "Salvar".

## Alteração

Para alterar uma unidade existente:
1.  Busque pela unidade desejada.
2.  Clique em "Editar".
3.  Modifique os campos necessários.
4.  Clique em "Salvar".

## Exclusão

Para excluir uma unidade:
1.  Busque pela unidade.
2.  Clique em "Excluir".
3.  Confirme a exclusão.
`,
  "Cadastro de Tipos de Certificados": `
# Cadastro de Tipos de Certificados

Cadastro dos tipos de certificados exigidos dos fornecedores.

## Inclusão

Para incluir um novo tipo de certificado:
1.  Acesse o menu...
2.  Clique em "Novo".
3.  Preencha os campos...
4.  Clique em "Salvar".

## Alteração

Para alterar um tipo de certificado existente:
1.  Busque pelo tipo desejado.
2.  Clique em "Editar".
3.  Modifique os campos necessários.
4.  Clique em "Salvar".

## Exclusão

Para excluir um tipo de certificado:
1.  Busque pelo tipo.
2.  Clique em "Excluir".
3.  Confirme a exclusão.
`,
  "Cadastro de Documentos": `
# Cadastro de Documentos

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
# Documentos por Tipo de Certificado

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
# Fornecedores

Cadastro de fornecedores de materiais e serviços.

## Inclusão

Para incluir um novo fornecedor:
1.  Acesse o menu...
2.  Clique em "Novo".
3.  Preencha os dados do fornecedor.
4.  Clique em "Salvar".

## Alteração

Para alterar um fornecedor existente:
1.  Busque pelo fornecedor desejado.
2.  Clique em "Editar".
3.  Modifique os campos necessários.
4.  Clique em "Salvar".

## Exclusão

Para excluir um fornecedor:
1.  Busque pelo fornecedor.
2.  Clique em "Excluir".
3.  Confirme a exclusão.
`,
  "Solicitações": `
# Solicitações

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
# Ordens de Compra

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
# Consulta Fornecedor

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
};
