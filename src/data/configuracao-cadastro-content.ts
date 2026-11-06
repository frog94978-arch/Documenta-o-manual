export const configuracaoCadastroContent: Record<string, string> = {
  "Itens de Menu": `Esta rotina destina-se ao cadastro dos itens de menu do sistema. Um programa (uma página web) é identificado adicionando-se um item de menu e ligando este item de menu a um outro item de menu, formando assim uma árvore de acesso.

Sempre que desejarmos criar uma árvore de menus, como por exemplo: Configuração->Cadastro->Item de Menu, devemos para cada item a ser acessado criar um item de menu e depois na rotina de organizar itens de menu, ligar um ao outro para formarmos um menu de acesso.

Diferente dos outros programas, nesta opção o usuário poderá incluir um item, alterar ou excluir.

Segue orientação para o preenchimento dos campos conforme ilustrado na figura 01.

***Campos:***

**Descrição:** Campo onde deverá ser inserido a descrição do item, esta descrição será listada na opção do menu.

**Ajuda:** Colocar neste campo a mensagem de ajuda que aparecerá na barra de status (linha inferior) do DBPortal.

**Função:** Colocar o nome da página web que será chamada quando o item de menu for clicado.

**Descrição Técnica:** Colocar a descrição técnica do programa, sua finalidade e principais características.

**Ambiente:** Selecionar qual o ambiente que será gerado o menu. Esta opção destina a opção de estarmos criando dois ambientes de programação, podendo dividir os menus em duas estruturas. Opção utilizada na construção do sistema e em desuso.

**Módulo:** Selecionando esta opção, este item de menu será demonstrado como um módulo e não como um item de menu e neste caso, na tela de inclusão de itens este não aparecerá. Caso seja cadastrado como módulo, este será automaticamente cadastrado um grupo de itens e deverá ser adicionado na opção de organizar menus os itens, cadastro, relatório, consulta e procedimento.

**Nome:** Colocar o nome do módulo que será apresentado na tela de seleção dos módulos e outras rotinas que mostra.

**Descrição:** Colocar a descrição do módulo que será apresentado na tela de seleção dos módulos e outras rotinas que mostra.

**Imagem:** Colocar a imagem que será exibida na tela dos módulos.

**Tem Exercício:** Selecionar se neste módulo terá controle por exercício.

**Liberado p/ Cliente:** Controla se este item de menu esta liberado para os clientes ou não.

**Código:** Colocar o código do procedimento ao qual este item de menu será integrado. Este código identifica um procedimento, um conjunto de ações executadas no sistema para atender a um processo de trabalho.

**Selecione um programa:** Colocar todos os programas (páginas webs) que estarão ligadas ao item de menu. Este campo é obrigatório quando um programa é incluído no campo Função.`,
  "Acesso ao Sistema": `Esta rotina destina-se ao cadastro das regras de acesso ao sistema, pessoas ou computadores autorizados. Este procedimento é uma parte do conjunto de opções de segurança que estão disponíveis no DBPortal.

Nesta opção o usuário administrador poderá cadastrar um acesso para um computador ou pessoa por um determinado período de tempo e hora ou tampouco por tempo indeterminado.

A figura 002 mostra a tela principal, como segue:

[![Acesso ao Sistema](https://e-cidade.wiki.br/configuracoes/files/acessoaosistema.png)](https://e-cidade.wiki.br/configuracoes/files/acessoaosistema.png)

***Campos:***

**Código da Regra:** Campo identifica o código da regra cadastrada.

**Data Início:** Data de início da validade da regra cadastrada.

**Hora Início:** Hora de início da validade da regra cadastrada.

**Data Final:** Data Final da validade da regra cadastrada.

**Hora Final:** Hora Final da validade da regra cadastrada.

**Código do Usuário:** Código do usuário que esta cadastrando a regra e nome do usuário.

**Data Cadastro:** Data do cadastro da regra.

**Observação:** Este campo destina-se ao registro das observações que ficarão registradas a cerca desta regra.

Após preencher os campos acima e clicar no botão “Incluir”, o sistema libera as abas “Usuário”, “IP/Máscara” e “Cancela”.

Na aba de Usuário, o sistema solicita o código do usuário (login) que será verificado neste cadastro de acesso, isto é, quando o usuário acessar o sistema, esta regra será executada para ele.

Na aba de IP/Máscara, o sistema solicita o preenchimento da mascará que será verifica no momento do acesso ao sistema. Se colocado um asterisco “*” junto a máscara, o sistema entenderá qualquer código será aceito e não fará a restrição do acesso.

Na aba Cancela, o usuário administrador poderá cancelar a regra de acesso cadastrada, colocando a descrição do porque que esta cancelando e incluindo o registro. Nos botões de alterar e excluir, poderá o mesmo cancelar o cancelamento da regra ou alterar a descrição nela informada.

No caso do preenchimento da aba de “Usuário” e “IP/Máscara” serem feitas simultaneamente, o sistema fará a consistência das duas chaves adicionadas a esta regra quando do acesso ao sistema.

Uma regra somente é executada quando do acesso ao sistema. Caso seja cadastrada uma regra com o usuário ou computador já acessado ao sistema, esta será validada somente no próximo acesso, portanto deverá o administrador solicitar o encerramento da seção em questão.`,
  Departamentos: `Um departamento identifica um setor dentro do órgão público, sendo utilizado na maioria dos módulos. Um exemplo claro da utilidade deste cadastro é no módulo de protocolo, quando do trâmite dos processos, onde cada departamento tem como objetivo o agrupamento dos processos dentro do setor. As escolas, postos de saúde e unidades de almoxarifado são todos ligados ao cadastro dos departamentos.

***Departamento:*** Campo identifica o código do departamento.
***Departamento:*** Campo identifica o código do departamento.
***Descrição do Departamento:*** Nome do Departamento.
***Nome do Responsável:*** Nome do responsável pelo departamento.
***Email do Responsável:*** Email do responsável pelo departamento.
***Instituição:*** Instituição ao qual o departamento estará ligado.
***Órgão:*** Código do órgão cadastro no orçamento da instituição selecionada.
***Unidade:*** Código da unidade orçamentária.
***Data Limite:*** Data limite de validade do Departamento. Este campo será mostrado até a data especificada.
***Contato Email:*** Email do contato no departamento.
***Contato Telefone:*** Telefone do contato no departamento.
***Contato Ramal:*** Ramal do contato no departamento.
***Contato Fax:*** Fax do contato no departamento.

Imagem:

[![Inclusão de Departamento](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_6c380111.png)](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_6c380111.png)

Após clicado no botão incluir o sistema libera a aba “Endereço”, onde deverá ser cadastrado os dados referente a localização do departamento, sendo:

***Código do Logradouro:*** Código do logradouro.
***Número:*** Número.
***Complemento:*** Complemento.
***Bairro:*** Código do bairro.

***Dica:*** Estes dados serão utilizados sempre que o sistema necessitar o endereço do departamento, como por exemplo a entrega de mercadorias e outros.`,
  "Estrutura de Contas": `Esta rotina destina-se ao cadastro das estruturas de códigos. Uma estrutura de código é utilizada para criar uma árvore de identificação, como por exemplo: Plano de Contas > Estrutura de Contas do Patrimônio > outros.

A tela se divide em duas abas, sendo a primeira o estrutural e a descrição e a segunda a descrição de cada nível da estrutura incluída.

***Código:*** Código do campo estrutural.
***Estrutural:*** Descrição do Estrutural. Esta descrição deverá ser preenchida, informando os níveis que serão criados para a estrutura, sendo que estes deverão ser separados por ponto (.). A cada ponto encontrado no campo estrutura o sistema gera um código e uma identificação para o mesmo, na aba de “Descrição dos Níveis”.
***Descrição:*** Descrição da estrutura.

[![Estutura de niveis](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_62f5fb57.png)](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_62f5fb57.png)

***Na exclusão:***

Uma tela de seleção deverá aparecer para primeiramente o usuário selecionar o departamento que deverá proceder com a exclusão, esta lista é padrão na maioria das exclusões do sistema.

Os campos serão os mesmos da tela de inclusão, substituindo somente o botão incluir que passa para excluir.

Nesta rotina, ao excluir uma estrutura na aba “Estrutura”, o sistema exclui também todos os dados da aba “Descrição dos Níveis”.`,
  "Tipos de Documentos": `Esta rotina destina-se ao controle dos tipos de documentos que serão impressos e estes códigos são de utilização exclusiva do e-cidade.

Estes códigos de documentos são utilizados na rotina de manutenção dos documentos, nos procedimentos.

## Inclusão

***Código do tipo de documento:*** Código do tipo de documento.
***Descrição do tipo de documento:*** Descrição do tipo de documento.

Após o preenchimento dos mesmos, o botão Incluir deverá ser pressionado e o sistema efetuará a Inclusão.

## Alteração

Ao selecionar este item de menu, o sistema mostrará uma tela de seleção onde o usuário deverá clicar em uma das linhas e proceder com a alteração.

Após a seleção o sistema mostrará os campos como descrito na inclusão e mostrará o botão de alterar. Um vez pressionado, procederá com a Alteração.

## Exclusão

Ao selecionar este item de menu, o sistema mostrará uma tela de seleção onde o usuário deverá clicar em uma das linhas e proceder com a exclusão.

Após a seleção o sistema mostrará os campos como descrito na inclusão e mostrará o botão de Excluir. Um vez pressionado, procederá com a exclusão.`,
  Bancos: `Esta rotina destina-se ao cadastro de bancos (Instituições Financeira) para utilização nos diversos módulos, principalmente Tesouraria e Contabilidade. Sua utilização é exclusiva do e-cidade.

## Inclusão

***Código do banco FEBRABAN:*** Código do banco atribuído pela FEBRABAN.
***Descrição:*** Descrição do banco.

Após o preenchimento dos mesmos, o botão Incluir deverá ser pressionado e o sistema efetuará a inclusão.

## Alteração

Ao selecionar este item de menu, o sistema mostrará uma tela de seleção onde o usuário deverá clicar em uma das linhas e proceder com a alteração.

Após a seleção o sistema mostrará os campos como descrito na inclusão e mostrará o botão de alterar. Um vez pressionado, procederá com a Alteração.

## Exclusão

Ao selecionar este item de menu, o sistema mostrará uma tela de seleção onde o usuário deverá clicar em uma das linhas e proceder com a exclusão.

Após a seleção o sistema mostrará os campos como descrito na inclusão e mostrará o botão de Excluir. Um vez pressionado, procederá com a exclusão.`,
  "Tipos de Instituições": `Esta rotina destina-se ao cadastro dos tipos de Instituição, identificando os mais diversos tipos, como por exemplo: Prefeitura, Câmara, RPPs e outros. Sua utilização é exclusiva do e-cidade.

## Inclusão

***Código do tipo:*** Código do tipo de instituição.
***Nome do tipo:*** Descrição do tipo.

Tipo atribuído pelo Tribunal de Contas: Código do tipo atribuído pelo tribunal de contas.

Após o preenchimento dos mesmos, o botão Incluir deverá ser pressionado e o sistema efetuará a inclusão.

## Alteração

Ao selecionar este item de menu, o sistema mostrará uma tela de seleção onde o usuário deverá clicar em uma das linhas e proceder com a alteração.

Após a seleção o sistema mostrará os campos como descrito na inclusão e mostrará o botão de alterar. Um vez pressionado, procederá com a Alteração.

## Exclusão

Ao selecionar este item de menu, o sistema mostrará uma tela de seleção onde o usuário deverá clicar em uma das linhas e proceder com a exclusão.

Após a seleção o sistema mostrará os campos como descrito na inclusão e mostrará o botão de Excluir. Um vez pressionado, procederá com a exclusão.`,
  Instituições: `Esta rotina destina-se ao cadastro das Instituições controladas pelo e-cidade.

## Inclusão

Nesta rotina será feito o cadastro da instituição, devemos acessar a aba Dados da Instituição e preencher os campos com as informações da instituição.

## Aba Dados da Instituição

DADOS DA INSTITUIÇÃO

***Código da instituição:*** Este campo será gerado automaticamente, após a conclusão do cadastro da instituição.
***Nome:*** Deve preencher o nome da instituição completo. Esta informação será mostrada na barra superior do sistema quando o usuário estiver logado nesta instituição.
***Nome abreviado da instituição:*** Nome da instituição para ser impresso nos relatórios.
***Endereço da instituição:*** Endereço da Instituição. Esta informação será mostrada na barra superior do sistema quando o usuário estiver logado nesta instituição. Será impresso também em todos os relatórios do sistema emitidos nesta instituição.
***Número:*** Número do endereço da instituição. Esta informação será impresso em todos os relatórios do sistema emitidos nesta instituição.
***Complemento do endereço:*** Complemento do endereço da Instituição.
***Bairro:*** Bairro da Instituição.
***Unidade federativa da instituição:*** Estado da Instituição. Esta informação será impresso em todos os relatórios do sistema emitidos nesta instituição.
***Municipio da instituição:*** Municipio da Instituição. Esta informação será impresso em todos os relatórios do sistema emitidos nesta instituição.
***Cep:*** O cep da localidade da Instituição.
***Telefone:*** Telefone da Instituição. Esta informação será impresso em todos os relatórios do sistema emitidos nesta instituição.
***Fax:*** Número de telefone da Instituição.
***Email:*** Email de contato da Instituição.
***Cgc:*** Deve cadastrar o CNPJ da instituição. Esta informação será impresso em todos os relatórios do sistema emitidos nesta instituição.
***Número do cgm:*** Deve informar o numero do CGM da instutição. Ou seja, toda instituição deve ter cadastro no CGM.
***Url:*** Endereço do site da Instituição. Esta informação será impresso em todos os relatórios do sistema emitidos nesta instituição.
***Prefeito:*** Deve informar o nome do prefeito ou do responsável pela instituição, caso não tratar do cadastramento de uma Prefeitura. Pode ser o Presidente da Câmara de Vereadores, por exemplo.
***Vice prefeito:*** Deve informar o nome do vice-prefeito ou do responsável pela instituição, conforme item acima.
***Prefeitura:*** Neste campo deverá informar se a instuição é uma Prefeitura ou não. Terá as opções SIM/NÃO.
***Ativo:*** Deverá selecionar se a instuição esta Ativo ou Inativo ou Offline.
***Código do cliente:*** Código interno de identificação
***Data da criação da Instituição:*** Informar a data em que esta sendo cadastrada a instuição.
***Data limite que instituição é válida:*** Caso deseje encerrar a utilização da instuição, deve preencher este campo.
***Código do município no Estado:*** Deve informar o código do município no cadastro do IBGE.

## DADOS DA INSTITUIÇÃO FINANCEIRO

***Data da Contabilidade:*** Data da implantação da Contabilidade na instituição.
***Orgão/Unidade da Instituição:*** Deve ser indicado um órgão e uma unidade orçamentária que pertença a instituição para que a caracterize em rotinas e processos do sistema.
***Instituição SIAPC/PAD:*** Este campo tem a finalidade de individualizar ou consolidar a geração de arquivos para o sistema do TCE. Para consolidar a geração basta indicar o código da instituição principal em todas as outras. Para individualizar basta indicar o código próprio de cada instituição.
***Tipo de Instituição:*** Representa a classificação padrão instituída pelo TCE para a instituição. Esta classificação é utilizada tanto para a geração de arquivos para o Tribunal como para identificar as instituições em outros processos e rotinas do sistema.

## DADOS DA INSTITUIÇÃO TRIBUTÁRIO

***Débitos proprietário:*** Neste campo deverá selecionar a opção de vincular débitos ao proprietário.

***Débitos Sócios:*** Deve selecionar a opção de vincular os débitos de uma inscrição ou matrícula vinculadas a uma empresa que possui sócios ou não.

***Nome da Instituição no débito em conta:*** Deverá informar o nome da instituição que será utilizado na rotina de débito em conta.

***Regra CGM iss base:*** Deve selecionar a opção de o débito da inscrição ou matrícula aos sócios ou Não vincular sócios.

***Regra Cgm Iptu:*** Deverá selecionar a opção de vinculação dos débitos da matrícula:

0-considerar proprietários e promitentes: Nesse caso, os débitos sempre serão lançados em nome do proprietário principal, dos proprietários secundários, do promitente principal e dos promitentes secundários. Essa é a regra a ser utilizada em prefeituras que querem que todos os envolvidos sejam considerados devedores.

1-considerar somente proprietários: Nesse caso, os débitos serão lançados somente em nome do proprietário principal, dos proprietários secundários. Mesmo se existirem promitentes lançados, os débitos não serão registrados em nome deles.

2-considerar somente promitentes: Nesta opção, caso haja promitentes lançados, esses serão considerados devedores, senão, os proprietários serão considerados devedores. Essa regra normalmente é utilizada por prefeituras que, querem considerar os promitentes como reais devedores, e os proprietários apenas como informação cadastral para os casos de terem promitentes envolvidos.

Essas regras descritas acima influenciam diretamente na emissão das certidões de débitos, CDA e inicial onde por exemplo, no caso de uma matrícula que tenha débitos, utilizando a regra 0, em um caso de averbação por contrato, os proprietários da escritura também são considerados devedores, e não conseguem uma certidão negativa. Caso seja emitida uma certidão de débitos, uma CDA ou uma inicial, sairão em nome do possuidor.

***Usa sistema de água:*** Deverá informar se a instituição utiliza o sistema de água.

***Identidade:***

***Diário:***

***Segmento código de barras Febraban:*** Deve preencher a seguimento de código de barras pertence a instuição. Por exemplo, se a instuição é Prefeitura, deve selecionar o seguimento Prefeitura.

Após completar o preenchimento de todos os campos, deverá ser pressionado o botão incluir e o sistema efetuará a inclusão.

[![Instituição](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_5676a1b7.png)](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_5676a1b7.png)

## Aba Imagens

Nesta rotina poderemos inserir a Imagem Logo, Imagem Figura e Imagem Marca d'agua da Instituição.

***Cadastro Logo:*** Neste campo teremos como anexar uma Imagem para ser utilizada como o logo da Instituição. Para isso devemos clicar em Enviar Arquivo e selecionar a figura desejada. No campo abaixo irá mostrar a imagem selecionada para confirmação.
***Cadastro Figura:*** Neste campo teremos como anexar uma Imagem pra ser utilizada como Figura da Instituição, ou seja será utilizada em alguns relatórios do sistema. Para inclusão ou alteração da mesma, devemos clicar em Enviar Arquivo e selecionar a figura desejada. Como no campo anterior, poderá visualizar a imagem incluída no campo ao lado do botão Anexar Arquivo.
***Cadastro Marca D'Agua:*** Neste campo poderá cadastrar uma Imagem para serutilizada como Marca D'Agua da Instituição. Deverá clicar em Enviar Arquivo e selecionar a figura desejada.

Essa imagem aparecerá em todos os documentos que possuem marca d'agua. Exemplo: ALVARÁ.

***Atenção:*** Caso alguma destas imagens não esteja cadastrada, irá aparecer abaixo do campo a seguinte mensagem “Imagem não definida”.

Devemos levar em consideração, que somente serão aceitas as imagens do tipo, “JPG, PNG e GIF”, e com tamanho máximo de 100 KB.

[![Insituição Figuras](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_41b22c9c.png)](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_41b22c9c.png)

## Alteração

Ao acessar este item, o botão Procurar deverá ser clicado e em seguida o sistema mostrará uma tela de seleção das instituições. Se for preenchido o nome da instituição, o sistema procurará os dados combinando o que foi digitado no nome da instituição.

Após a seleção o sistema mostrará os campos como descrito na inclusão e habilitará o botão de alterar. Um vez pressionado, procederá com a Alteração.

## Exclusão

Ao acessar este item, o botão Procurar deverá ser clicado e em seguida o sistema mostrará uma tela de seleção das instituições. Se for preenchido o nome da instituição, o sistema procurará os dados combinando o que foi digitado no nome da instituição.

Após a seleção o sistema mostrará os campos como descrito na inclusão e habilitará o botão de excluir. Um vez pressionado, procederá com a Exclusão.`,
  Formatação: `Esta rotina destina-se ao cadastro dos tipos de formatação controladas pelo e-cidade.

[![formatação](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_30a8dd48.png)](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_30a8dd48.png)

## Inclusão

***Código da formatação:*** Código da formatação.
***Descrição:*** Descrição da formatação.
***Máscara do campo:*** Máscara da formatação.
***Tipo do campo:*** String, Inteiro, Decimal, Data, Hora, CEP, CGC / CPF, Executa eval, String livre.
***Espaço ocupado:*** Tamanho do campo
***Casas de decimais:*** Número de Casas Decimais
***Separador:*** Tipo de Separador
***Alinhamento:*** Tipo de Alinhamento

Após o preenchimento dos campos, o botão Incluir deverá ser pressionado e o sistema efetuará a inclusão.

## Alteração

Ao selecionar este item de menu, o sistema mostrará uma tela de seleção onde o usuário deverá clicar em uma das linhas e proceder com a alteração.

Após a seleção o sistema mostrará os campos como descrito na inclusão e mostrará o botão de alterar. Um vez pressionado, procederá com a Alteração.

## Exclusão

Ao selecionar este item de menu, o sistema mostrará uma tela de seleção onde o usuário deverá clicar em uma das linhas e proceder com a exclusão.

Após a seleção o sistema mostrará os campos como descrito na inclusão e mostrará o botão de Excluir. Um vez pressionado, procederá com a exclusão.`,
  "Cadastro de Usuários Internos": `Considera-se usuário interno, o usuário que terá acesso ao DBPortal e portanto receberá permissões de acesso e outros.

## Inclusão

A tela dos usuários internos exibe quatro abas, sendo “Usuários”, “Departamento”, “Liberar Perfis” e “Permissão de Empenho”.

Na aba “Usuários”, os campos abaixo deverão ser preenchidos.

***Código Usuário:*** Código do Usuário.
***Numcgm:*** Código do CGM – Cadastro Geral do Município. Clicando sobre a descrição (link), o sistema trás a uma tela com a lista de todos os nomes cadastrados no sistema.
***Login do usuário:*** Login do usuário. O sistema sugere neste caso o login do Sugere-se cadastrar os logins dos usuários com o primeiro nome, separado com ponto (.) e o sobrenome para possibilitar um número maior de logins e a identificação mais adequada.
***Senha:*** Senha do Usuário.
***Verifica senha:*** Confirmação da Senha do Usuário.
***Usuário Ativo:*** Situação do Usuário.
***Administrador:*** Usuário Administrador
***Email:*** Email do usuário
***Instituição:*** Instituição que o Usuário terá acesso. A instituição que o usuário esta acessando será selecionada automaticamente.

Uma peculiaridade deste cadastro é a seleção das instituições e neste caso, uma ou mais instituições deverão ser cadastradas para um usuário. Estas instituições serão mostradas na tela de seleção das instituição ao acessar o sistema.

O usuário administrador será o usuário que terá acesso a maioria dos itens de menus, sem necessidade de liberar permissão para o mesmo. Este usuário poderá acessar o sistema mesmo que o mesmo esteja com inativo para os usuários.

Após o preenchimento destes campos e clicar no botão Incluir, o sistema libera as demais abas.

Na aba “Departamento”, poderá ser selecionado um ou mais departamentos para o usuário.

Na aba “Permissões de Empenho” o sistema possibilita a atualização das permissões dos empenhos.

Na aba “Liberar Perfis” poderá também ser liberados um ou mais perfis para o usuário em questão.

Estas abas tem por objetivo a facilidade de manutenção, uma vez que não necessita de permissão, nem tão pouco o acesso as várias rotinas.

Os campos destas abas estão descritos no help de cada um dos itens de menu.

A figura 006 mostra a tela principal dos usuário internos e as abas.

[![Usuário Interno](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_26ec5caa.png)](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_26ec5caa.png)`,
  "Cadastro de Usuários Externos": `Considera-se usuário externo, o usuário que terá acesso ao DBPref (Sistema Acesso Contribuinte) e portanto não receberá permissões de acesso e outros.

## Inclusão

A tela dos usuários externos exibe os seguintes campos.

***Código do Usuário:*** Campo código do usuário
***Login:*** Nome do usuário selecionado do Cadastro Geral
***Login do Usuário:*** Login do usuário gerado automaticamente pelo sistema
***Senha:*** Senha do Usuário Externo
***Verifica senha:*** Confirmação da Senha do Usuário Externo
***Usuário Ativo:*** Situação do usuário
***Email:*** Email de contado do usuário
***Criar senha aleatória:*** Esta opção selecionada processará uma senha aleatória e enviará para o email do usuário automaticamente

Após o preenchimento destes campos e clicar no botão Incluir, o sistema processa a inclusão e se marcado o campo Criar senha aleatória gera a mesma e envia ao usuário cadastrado.

Para os usuários externos não é necessário a seleção de instituição, pois o sistema de acesso dos contribuintes faz a seleção da instituição automaticamente.

A figura 007 mostra a tela principal dos usuário externos.

[![Usuarios Externos](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_mdc77120.png)](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_mdc77120.png)

## Alteração

Ao acessar a tela de alteração, uma lista de usuários externos será exibida e ao selecionar um dos usuários do sistema mostrará os dados como descrito na opção de inclusão.`,
  "Cadastro de Usuários Perfil": `Um Perfil é um identificador, um grupo onde pode-se colocar várias permissões e depois adicionar à vários usuários internos para facilitar o controle das permissões. Esta opção possibilita o controle de ativação e desativação dos itens de menu.

Um Perfil é basicamente um usuário, mas não possibilita o acesso ao sistema e outros exclusivos de usuário interno.

## Inclusão

A tela de Perfis exibe os seguintes campos.

***Código do Perfil:*** Código do Perfil
***Nome do Perfil:*** Nome do Perfil, normalmente identificado com o nome da instituição, seguido da descrição resumida que possa identifica-lo.
***Login:*** Login de identificação do perfil
***Instituição:*** Nome da Instituição, poderá ser selecionado mais de uma instituição.

Após o preenchimento destes campos e clicar no botão Incluir, o sistema processa a inclusão do perfil.

As permissões de menus que este perfil receberá deverá ser incluída, utilizando-se a rotina de menu em procedimentos.

A figura 008 mostra a tela principal dos Perfis.

[![Perfil](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_5bbbd410.png)](https://e-cidade.wiki.br/configuracoes/files/Manual_Configuracao_html_5bbbd410.png)

## Alteração

Ao acessar a tela de alteração, uma lista de Perfis será exibida e ao selecionar um dos Perfis, o sistema mostrará os dados como descrito na opção de inclusão, substituindo o botão Inclusão por Alteração.`,
  "Cadastro dos Bancos": `O cadastro dos bancos para configuração no sistema.

## Aba Dados

***Código do Banco FEBRABAN:*** Código do Banco na Federeção Brasileira dos Bancos
***Descrição:*** Descrição do Banco
***DV do Banco:*** Dígito Verificador do Banco
***Nome Abreviado do Banco:*** Nome abreviado do Banco
***Arquivo do logo:*** Logo do banco para boletos

[![](https://e-cidade.wiki.br/configuracoes/files/figura_bancos.png)](https://e-cidade.wiki.br/configuracoes/files/figura_bancos.png)

## Aba Contas Contábeis

***Vínculo:*** Vínculo da Conta Contábil
***Conta PCASP:*** Conta do Plano de Contas

[![](https://e-cidade.wiki.br/configuracoes/files/figura_bancos2.png)](https://e-cidade.wiki.br/configuracoes/files/figura_bancos2.png)`,
};
