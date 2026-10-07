export const comprasCadastroContent: Record<string, string> = {
  "Documento - Cadastro Protocolo": `
### Inclusão

Nesta rotina são cadastrados os documentos que serão solicitados como conferência durante a inclusão de um processo interno ou até mesmo para um processo eletrônico, neste caso será necessário especificar o tipo de dado em "Sistemas Externos", porém, indiferente de ser interno ou externo, será necessário o vinculo com o tipo do processo.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Documento > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image27.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image27.png)

- **Código:** O campo é gerado automaticamente.
- **Descrição:** Preencher o nome do documento.
- **Sistemas Externos**
- **Tipo de Dado:** o usuário poderá selecionar entre: TEXTO LIVRE, NÚMERICO, VALOR, ENDEREÇO E ARQUIVO.

### Alteração

Nesta rotina é possível realizar alteração do campo Descrição ou o Tipo de Dado quando aplicável sistemas externos no caso o Protocolo Eletrônico.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Documento > Alteração
\`\`\`

### Exclusão

Esta rotina permite a exclusão de um documento, caso o mesmo não esteja vinculado a nenhum processo.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Documento > Exclusão
\`\`\`
`,
  "Documento / Tipo de Processo - Cadastro Protocolo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Documento / Tipo de Processo
\`\`\`

Nesta rotina é possível cadastrar documentos referentes a um tipo de processo, podendo ele ser interno ou externo (Protocolo Eletrônico). Estes vínculos são a relação dos documentos solicitados para abertura de um processo na instituição ou através do Portal de Atendimento.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image58.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image58.png)

- **Tipo de Processo:** Preencher o código do tipo de processo ou clicar no link "Tipo de Processo" para abrir/acessar a função de pesquisa. O cadastro de Tipo de Processos é realizado através da rotina abaixo:

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Tipos de Processos > Inclusão
\`\`\`

- **Documento:** Preencher o código do documento ou clicar no link "Documento" para abrir/acessar a função de pesquisa. Se este tipo de processo solicitar mais de um documento, basta repetir a ação de inclusão para os documentos referentes ao tipo. O cadastro de Documentos é realizado através da rotina abaixo:

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Documento > Inclusão
\`\`\`

- **Obrigatório (Sistema Externo):** Define se este documento que está sendo vinculado ao tipo de processo será obrigatório ao ser solicitado durante a inclusão do atendimento no portal do protocolo eletrônico.
`,
  "Variável - Cadastro Protocolo": `
### Inclusão

Nesta rotina são cadastrados os campos das tabelas do sistema como variáveis para o tipo de processo. Ao escolher um tipo de processo na inclusão de um processo, o sistema busca os campos cadastrados nesta rotina na tela principal do processo.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Variável > Inclusão
\`\`\`

- **Código do tipo:** Preencher o código do tipo de processo ou clicar no link para pesquisar.
- **Código:** Preencher o código dos campos ou clicar no link para pesquisar. São os campos das tabelas do sistema que podem ser inseridos no processo.
- **Obrigatório:** Define se a variável que está sendo incluída será obrigatória no momento da inclusão do processo ou não.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image74.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image74.png)

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image21.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image21.png)

### Alteração

Esta rotina permite alteração dos dados definidos na rotina de inclusão de variável.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Variável > Alteração
\`\`\`

### Exclusão

Esta rotina permite a exclusão de uma variável adicional definida para um tipo de processo, desde que não tenha sido utilizada e vinculada a nenhum processo já incluso.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Variável > Exclusão
\`\`\`
`,
  "Tipo de Documento - Cadastro Protocolo": `
### Inclusão

Rotina que permite incluir um Tipo de Documento para que durante a inclusão de um novo processo o usuário possa determinar qual o tipo de documento se refere.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Tipo de Documento
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image137.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image137.png)

O e-cidade possui 5 tipos definidos como padrões, que são eles:

- 1-Processo
- 2-Memorando
- 3-Oficio
- 4-Decreto
- 5-Ouvidoria

A seleção do tipo de documento durante a inclusão de um novo processo somente será possível caso o parametro global tipo de controle esteja definido como: **Órgão**.

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Parâmetros > Parâmetros Globais
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image136.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image136.png)
`,
  "Cadastro de Estados - Cadastro Protocolo": `
### Inclusão

Rotina que permite incluir um Estado para ser utilizado no cadastro de localidade.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Cadastro de Estados > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image119.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image119.png)

Esta inclusão também está disponivel através da rotina:

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Estados > Inclusão
\`\`\`

### Alteração

Rotina que permite alteração um Estado cadastrado pela rotina de inclusão.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Cadastro de Estados > Alteração
\`\`\`

Esta alteração também está disponivel através da rotina:

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Estados > Alteração
\`\`\`

### Exclusão

Rotina que permite a exclusão de um Estado cadastrado por uma das rotinas de inclusão mencionadas anteriores.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Estados > Exclusão
\`\`\`
`,
  "Cadastro de Municípios - Cadastro Protocolo": `
### Inclusão

Rotina que permite incluir um Município para ser utilizado no cadastro de logradouro.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Cadastro de Municípios > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image120.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image120.png)

### Alteração

Rotina que permite alteração de um Município cadastrado pela rotina de inclusão.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Cadastro de Municípios > Alteração
\`\`\`
`,
  "Logradouro - Cadastro Protocolo": `
### Inclusão

Rotina que permite incluir um logradouro para utilizar no cadastro de CGM.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Logradouro > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image122.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image122.png)

### Alteração

Rotina que permite a alteração de logradouro, conclui-se a ação clicando-se no botão "alterar".

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Logradouro > Inclusão
\`\`\`

### Exclusão

Rotina que permite a exclusão de logradouro, conclui-se a ação clicando-se no botão "excluir".

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Logradouro > Exclusão
\`\`\`
`,
  "Localidade - Cadastro Protocolo": `
### Inclusão

Rotina que permite incluir um logradouro para utilizar no cadastro de CGM.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Logradouro > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image122.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image122.png)

### Alteração

Rotina que permite a alteração de uma localidade, conclui-se a ação clicando-se no botão "Alterar".

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Localidade > Alteração
\`\`\`

### Exclusão

Rotina que permite a exclusão de uma localidade, conclui-se a ação clicando-se no botão "Excluir".

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Localidade > Exclusão
\`\`\`
`,
  "CEP - Cadastro Protocolo": `
### Inclusão

Rotina que permite a inclusão de um CEP (código de endereçamento postal) para um novo logradouro que porventura não conste no cadastro de logradouro.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > CEP > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image123.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image123.png)

### Alteração

Rotina que permite a alteração do CEP cadastrado pela rotina de inclusão.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > CEP > Alteração
\`\`\`

### Exclusão

Rotina que permite a exclusão do CEP cadastrado pela rotina de inclusão.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > CEP > Exclusão
\`\`\`
`,
  "Tipo de Processo - Cadastro Protocolo": `
Nesta rotina são incluídos os tipos de processos para o controle dos processos de protocolo, assim como permite parametrizações especificas referente ao Protocolo Eletrônico(Se aplicável). Não é possível realizar a inclusão de um processo no e-cidade sem um tipo de processo e o mesmo deve estar vinculado a um andamento padrão. É através do tipo de processo que é possível realizar vinculos com documentos e com as taxas do protocolo.

### Inclusão

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Tipo de Processo > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image124.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image124.png)

- **Tipo de processo:** Numeração gerada automaticamente.
- **Descrição:** Preencher o nome do Tipo de Processo, como por exemplo: Abertura de Rua, Abaixo Assinado...
- **Tipo de Documento:** Permite selecionar entre tipos de documento como: Processo, Memorando, Oficio, Decreto, Ouvidoria. Quer saber mais como incluir um novo tipo de documento? [clique aqui](https://e-cidade.wiki.br/patrimonial/protocolo/#!cadastros_tipo_de_documento.md)
- **Data Limite:** Preencher a data de validade para esse Tipo de Processo, se definida, o e-cidade deixa de exibir esse tipo após a data.

Conclui-se a inclusão do Tipo de Processo clicando em "Incluir".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image125.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image125.png)

Se aplicavel, além das informações de preenchimentos anteriores, a rotina de inclusão de Tipo de Processo retornará o campo abaixo na aba Tipo de Processo e outras novas abas como: Departamentos, Formas de Reclamação, Andamento Padrão, Arquivo Json Formulario e Link Saiba mais...

- **Identificado:** Sim/Não. Esta parametrização está destinado ao Protocolo Eletronico. Caso seja definido "Sim", este tipo de processo caracteriza que há obrigatoriamente uma identificação/login/acesso para utilização da inclusão do atendimento online. Se não, poderá ser efetivado a inclusão do atendimento como "ANÔNIMO".

**[ABA Departamentos]**

Nesta aba é possível definir qual o departamento responsável que irá efetivar a primeira ação referente a este tipo de processo. Basta selecionar o departamento e clicar em "Atualizar".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image126.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image126.png)

**[ABA Forma de Reclamação]**

Nesta aba será disponibilizada as formas de comunicação entre a Instituição e o Cidadão, no caso de cadastro de tipos de processo com o objetivo de acesso à informação, deve ser marcada a opção Processo Eletrônico.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image127.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image127.png)

Novas formas de reclamação podem ser inclusas através da rotina abaixo:

\`\`\`
DB:PATRIMONIAL > Ouvidoria > Cadastros > Forma Reclamação
\`\`\`

**[ABA Andamento Padrão]**

Está aba é uma extensão da rotina abaixo:

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Andamento Padrão
\`\`\`

A mesma foi incorporada na rotina de inclusão do Tipo de Processo, afim de centralizar e facilitar essa parametrização, esta configuração é pre-requisito para a utilização de um Tipo de Processo. Sua finalidade é estabelecer uma ordem padrão do andamento do processo, ou seja, por quais departamentos este tipo de processo é sugestivo tramitar e quantos dias permanecerão no máximo em cada um.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image128.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image128.png)

**[ABA Arquivo Json Formulario]**

Nesta aba é possível realizar a escolha do arquivo JSON, podendo ser selecionado por meio de rota ou arquivo JSON.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image129.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image129.png)

Selecionando o tipo: Rota, o e-cidade exibirá um campo para indicar qual a rotina do arquivo JSON.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image130.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image130.png)

Selecionando o tipo: Json, o e-cidade permitirá selecionar o arquivo com extensão JSON afim de que seja realizado o upload.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image131.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image131.png)

Mais informações referente aos arquivos de configuração JSON e como parametriza-los, podem ser encontradas no link abaixo:

[WIKI - Protocolo Eletronico](https://e-cidade.wiki.br/patrimonial/patrimonio/#!procedimentos_alterar_placa.md)

**[ABA Link Saiba mais...]**

A finalidade dessa aba é configurar opções de "Ajuda" dentro do Portal de Atendimento/Protocolo Eletrônico visando facilitar usuários a como utilizar o portal.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image133.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image133.png)

Essa configuração é refletida no Portal de Atendimento/Protocolo Eletrônico, conforme imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image134.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image134.png)

**[ABA Mensagem]**

Esta aba permite definir uma mensagem que será emitida no processo eletrônico após a inclusão de um atendimento. Caso não tenha sido definido nenhuma mensagem, será exibido uma mensagem padrão.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image185.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image185.png)

Abaixo a emissão de um alerta parametrizado na aba Mensagem no Tipo de Processo "Primeiro Acesso".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image186.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image186.png)

Exemplo mensagem padrão, se não difinido a mensagem para o Tipo do Processo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image187.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image187.png)

### Alteração

Rotina que permite alterar no cadastro a descrição do tipo de processo, data limite e Tipo de Documento caso não exista um processo cadastrado para o tipo escolhido, quando aplicável será possível realizar manutenção de demais configurações referente ao protocolo eletrônico.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Tipo de Processo > Alteração
\`\`\`

### Exclusão

Rotina que permite a exclusão do tipo, desde que o mesmo não esteja vinculado a nenhum processo, documento ou taxa.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Tipo de Processo > Exclusão
\`\`\`
`,
  "Tipo de Processo / Receita - Cadastro Protocolo": `
### Inclusão

Nesta rotina é possível realizar o cadastro de todas as receitas vinculadas a um tipo de processo, com o valor da taxa a ser cobrada na criação de um novo processo.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Tipo de Processo / Receita > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image54.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image54.png)

- **Tipo de Processo:** Preencher o código do tipo de processo ou clicar no link para abrir a função de pesquisa.
- **Receita:** Preencher o código da receita ou clicar no link para abrir a função de pesquisa.
- **Valor da Taxa:** Preencher o valor da taxa cobrada por tipo de processo.

### Alteração

Rotina que permite alteração dos campos Receita e Valor da Taxa.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Tipo de Processo / Receita > Alteração
\`\`\`

### Exclusão

Rotina que permite a exclusão, quando não estiver vinculado a nenhum processo.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Tipo de Processo / Receita > Exclusão
\`\`\`
`,
  "Geral do Município - CGM - Cadastro Protocolo": `
Neste item será cadastrado o CGM (Cadastro Geral do Município), que tem como finalidade principal gerar um cadastro único de pessoas físicas e jurídicas do município, possibilitando a total integração das informações em todos os módulos do e-cidade.

### Inclusão

Rotina que permite incluir um novo CGM, a primeira tela deve-se informar o CPF ou CNPJ.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Geral do Município - CGM (novo) > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image77.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image77.png)

Após confirmar, o e-cidade abrirá a página de cadastro com os campos personalizados conforme a seleção anterior (CPF / CNPJ).

Campos em comuns entre PESSOA FISICA(CPF) e JURÍDICA(CNPJ).

- **Numcgm:** n° do CGM é gerado automaticamente pelo sistema.
- **Data do cadastramento:** data do sistema adicionada automaticamente.
- **Última Alteração:** data da última alteração no cadastro do CGM setada automaticamente.
- **Nome/Razão Social:** nome completo da pessoa física ou jurídica.
- **Nome Completo:** nome completo da pessoa física ou jurídica.
- **Inscrição Estadual:** número liberado pela Sefaz do estado no cadastro do ICMS.
- **Tipo Empresa:** pessoa Física, Jurídica, Privada, Personificada...
- **Telefone:** Telefone residencial
- **Celular:** Telefone Celular
- **Fax:** Fax (Não se utiliza)
- **Email:** e-mail para contato
- **Endereço Primário:** Lançar um endereço primário com logradouro e bairro previamente cadastrado.
- **Caixa Postal:** Serviço para recebimento de correspondências pelos correios para endereço primário.
- **Endereço Secundário:** Lançar um endereço secundário com logradouro e bairro previamente cadastrado.
- **Observações:** Campo disponível para inserir observações adicionais sobre o CGM.

Campos especificos para PESSOA FISICA(CPF).

- **CPF:** número do cadastro de pessoa física.
- **Identidade:** número do Registro Geral (RG).
- **Órgão Emissor:** órgão público por ter sido responsável por emitir o documento.
- **Data Expedição:** data em que o documento foi encaminhado ou entregue.
- **Pai:** nome completo do pai.
- **Mãe:** nome completo da mãe.
- **Naturalidade:** município origem de nascimento.
- **Nascimento:** data de nascimento.
- **Falecimento:** data de falecimento.
- **Estado civil:** solteiro, casado, viúvo, divorciado, separado consensual, separado judicial ou união estável.
- **Sexo:** masculino/feminino.
- **Nacionalidade:** Brasileira ou Estrangeira.
- **Escolaridade:** Sem definição, Analfabeto, fundamental incompleto...
- **Profissão:** Preencher o nome da profissão.
- **CBO:** Classificação Brasileira de Ocupações.
- **Pis/Pasep/CI:** Preencher com o Pis/Pasep/CI do empregado.
- **Trabalha:** Sim/Não
- **Renda:** Valor da renda do empregado.
- **Local de Trabalho:** Endereço de local de trabalho.
- **Telefone comercial:** Telefone comercial para contato.
- **Celular comercial:** Celular comercial para contato.
- **Email comercial:** E-mail comercial para contato.

Na imagem abaixo exemplifica os campos referente a um cadastro de PESSOA FISICA.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image135.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image135.png)

Campos especificos para PESSOA JURÍDICA(CNPJ).

- **CGM do Município:** Sim/Não, se sim, indica que o CGM que está sendo cadastrado pertence ao munícipio, se não, o mesmo não pertence. A mesma irá definir como poderá ser vinculado o endereço primário e secundário.
- **Nome Fantasia:** Designação popular do Nome/Razão Social. Ou seja, o nome de marca, nome comercial ou nome de fachada, enfim como é conhecida pelas pessoas e divulgada em publicidades.
- **Contato:** Contato.
- **Nire:** Número de Identificação do Registro de Empresas. Número que comprova que a empresa existe oficialmente. São 11 dígitos formados pela Unidade de Federação (UF), mais o tipo de empresa e um dígito verificador.

Na imagem abaixo exemplifica os campos referente a um cadastro de PESSOA JURÍDICA.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image83.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image83.png)

Após inclusão, na aba "Documentos" o e-cidade permite anexar documentos ao CGM cadastrado.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image57.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image57.png)

Na última aba "Fotos" o e-cidade permite atribuir uma imagem ao CGM cadastrado.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image20.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image20.png)

### Alteração

Rotina que permite alterar os campos do cadastro realizado na inclusão do CGM.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Geral do Município - CGM (novo) > Alteração
\`\`\`

Ao realizar a busca por um CGM onde o CNPJ/CPF é vazio consequentemente o e-cidade não irá conseguir identificar se trata de uma Pessoa Física ou Jurídica, sendo assim será emitido um alerta para que seja definido o Tipo de Pessoa, conforme a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image173.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image173.png)

Se Física listará os campos para atualização referente a uma Pessoa Física, da mesma forma se for definido tipo de pessoa Jurídica.

Se o CGC/CPF estiver zerado, o e-cidade irá considerar a quantidade de caracter, Física(11) e Jurídica(14).

### Exclusão

Rotina que permite a exclusão de um CGM quando não possuir nenhuma matrícula, inscrição, dívida ou processo referente a este CGM.

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Geral do Município - CGM (novo) > Exclusão
\`\`\`
`,
  "Geral Financeira - Consulta Protocolo": `
Esta rotina permite consulta financeira dos débitos dos contribuintes.

\`\`\`
DB:PATRIMONIAL > Protocolo > Consultas > Geral Financeira
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image90.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image90.png)
`,
  "Processo - Consulta Protocolo": `
Neste menu a consulta do processo poderá ser feita pelo número do processo/ano, sendo o processo do exercicio, basta o usuário digitar o número do mesmo ou então pelo titular. Ao clicar sobre o link *"Processo"* ou *"Titular"* o e-cidade retornará opções de filtros adicionais.

\`\`\`
DB:PATRIMONIAL > Protocolo > Consultas > Processo
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image98.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image98.png)

O filtro por órgão na rotina de consulta processo assim como na exibição, somente é aplicável em instituições que utilizam o parâmetro Global tipo de controle por órgão, esta opção de filtro e exibição não será listada caso tenha sido definido uma configuração diferente desta, as imagens abaixo exemplificam uma instituição que utiliza esta forma de controle.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image13.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image13.png)

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image96.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image96.png)

- **Dados do Processos:** exibe informações gerais do processo, como n° do controle, n° do processo, data/hora, tipo de processo, licitação o n°/ano(caso possua algum vinculo), departamento, titular do processo, requerente, atendente, instituição origem, localização, tipo de processo e órgão(se aplicável). À direita ainda possui o campo observações com informações adicionais a respeito do processo.

**NOTA:** *A exibição da numeração do processo poderá variar de acordo com a parametrização também, na imagem exemplo se trata do tipo de controle por órgão, o número do processo é PRO0400002000/2021. Diferente dessa configuração, o e-cidade irá exibir a numeração padrão NUM./ANO podendo ser controlado por Campo Sequencial Geral ou Sequencial do Ano.*

DadosDescriçãoPROTipo Documento: Processo (3 Digitos)04Órgão 4-SEC MUNIC DE GESTÃO, PLANEJ. E CAPTAÇÃO DE RECURSO (2 digitos)00002Numeração do Processo (5 digitos)000Numeração referente ao volume caso se aplique (3 digitos)/2021Exercicio do processo (4 digitos)

Se estiver no departamento atual do processo que está sendo consultado, o e-cidade poderá exibir o botão "Andamento do processo" no canto superior direito, logo acima do campo "Observações" este nada mais é que um atalho para a rotina abaixo:

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Andamento do processo
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image184.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image184.png)

Sua principal função é agilizar a realização de alguma ação no processo, seja efetivar um recebimento, despacho ou até mesmo uma transferência durante a consulta do processo.

- **Movimentações:** O e-cidade retornará todas as movimentações do processo com informações como despachos e seus anexos, data/hora, departamentos(transferências/recebimentos) entre outras, desde sua inclusão até sua posição atual.
- **Apensados:** Mostrará os processos que estão apensos ao processo que esta sendo consultado.
- **Documentos:** Exibirá os documentos anexados ao processo.
- **Imprimir:** permite imprimir somente as movimentações ou somente os apensados ou ainda marcando os dois filtros. As informações em Dados do Processo estão sendo exibidos sem estar configurado o parâmetro global tipo de controle por órgão.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image64.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image64.png)

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image138.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image138.png)

O processo sendo do tipo ELETRONICO, o e-cidade irá habilitar um botão adicional com descrição "Visualizar Documentos" conforme imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image171.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image171.png)

Ao clicar no botão "Visualizar Documentos" será possível visualizar os documentos anexados de uma forma simples, organizada e inteligente. O gerenciador eletrônico de documentos(GED) permite visualizar os documentos de forma digital, sendo possível folhar o processo, além de possuir recursos como ampliar, girar, download do arquivo selecionado ou download de todos os arquivos de forma simultanea.

- **Volumes:** Lista volumes vinculados ao processo. O Volume constitui-se em nova pasta aberta, em continuidade a um determinado processo. Ocorre quando o processo tiver atingido a média alta de quantidade de folhas, ou antes, se a gramatura ou o formato dos documentos estiverem dificultando o manuseio físico.
`,
  "CGM - Consulta Protocolo": `
Nesta rotina é possível realizar a consulta por informações de um determinado CGM(Cadastro Geral Municipal).

Na tela de pesquisa será solicitado o número do CGM, caso o usuário desconheça, poderá clicar no link "Numcgm" e pesquisar por filtros adicionais.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image49.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image49.png)

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image99.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image99.png)

- **Dados Cadastrais:** retorna informações gerais como nome/razão social, CPF, Data de Nascimento, Nome Pai, Nome Mãe, entre outras conforme a imagem acima.

***Detalhamento do Cadastro***

- **Endereço Principal:** consta informações a respeito do endereço cadastrado como principal.
- **Endereço Secundário:** consta informações a respeito do endereço cadastrado como secundário.
- **Documentos:** constam os documentos vinculados ao cadastro do CGM na aba "Documentos" na inclusão de CGM. Estes documentos adicionais são tratados em forma de texto, portanto para visualizar o usuário terá que clicar em "Ver".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image25.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image25.png)

- **Emprego:** informações como Profissão, CBO, PIS/PASEP/CI, Renda e Local de Trabalho.
- **Outras Informações:** informações como o login do usuário que incluiu o CGM, a data da última alteração e a data do cadastro do CGM.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image139.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image139.png)

Existindo uma ou mais alterações, o usuário poderá clicar em "Alterações" para visualizar outras existentes.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image140.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image140.png)

Ao clicar sobre a linha, o e-cidade irá exibir a posição e os respectivos dados referente à posição.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image153.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image153.png)

Para visualizar o CGM na posição original atual, basta clicar no botão "Original".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image154.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image154.png)

- **Usuário do processo eletrônico:** exibirá informações referentes às credenciais do eauth. Portanto, caso o CGM possua um usuário no processo eletrônico, este será exibido nesta opção.
`,
  "CGM Duplo Processado - Consulta Protocolo": `
Rotina que permite consulta aos CGM's processados.

\`\`\`
DB:PATRIMONIAL > Protocolo > Consultas > CGM Duplo Processado
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image12.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image12.png)

- **CGM correto:** informar o número do CGM atualmente utilizado, para filtros adicionais basta clicar em "CGM correto".
- **CGM errado:** informar o número do CGM anterior ao processamento, para filtros adicionais basta clicar em "CGM errado".
- **Data do processamento:** permite filtrar por uma data repetindo entre os campos ou um intervalo entre.
- **Código do Usuário:** permite informar um ou mais usuários através do código do mesmo, e-cidade retornará uma lista de todos processamentos realizados por este. Para filtros adicionais basta clicar em "Código do Usuário".

Ao informar um CGM correto ou errado, por exemplo, o e-cidade retornará dados contendo, razão social, data/hora em que foi processado, usuário que efetuou o processamento, seguido do CGM(s) errado(s). O mesmo acontece ao informar somente a data do processamento.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image87.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image87.png)

Já ao informar o código do usuário, o e-cidade retorna listagem de todos os CGM's processados pelo usuário.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image56.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image56.png)
`,
  "CGM Duplos": `
## Inclusão

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > CGM Duplos > Inclusão
\`\`\`

Nesse procedimento deve ser informado o Nome / Razão Social dos CGMs, para que o e-cidade processe e mostre todos os registros com o mesmo nome, marque um como principal e os demais como secundários. Após gravar, em um horário agendado no servidor, o e-cidade irá processar e gerar um único CGM com o código do principal marcado.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image8.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image8.png)

## Exclusão

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > CGM Duplos > Exclusão
\`\`\`

Permite a exclusão, quando não estiver vinculado a nenhum cadastro do e-cidade. A primeira tela a ser aberta será uma função de pesquisa para seleção, após irá exibir as informações do CGM a ser excluído, lançando informações na aba CGM Correto e na aba CGM Errado, será exibido a relação dos CGMs marcados como errado, permitindo alteração ou exclusão.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image11.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image11.png)

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image108.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image108.png)
`,
  "Processos": `
## Inclusão

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Processos > Inclusão
\`\`\`

Através desta é possível realizar inclusão de processos referente a aquisição de materiais, contratação de serviços, rotinas, resolução de problemas, informações da instituição entre outros, também possui a finalidade de se obter um controle geral dos processos internos de forma institucional ou multi-institucional. A exibição da tela inicial se dará de acordo com a parametrização do módulo Protocolo no e-cidade.

*Caso o parâmetro global tipo de controle esteja definido por: **Órgão**, a primeira tela a ser exibida será Tipo de Documento.*

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Parâmetros > Parâmetros Globais
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image141.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image141.png)

Em seguida irá disponibilizar a seleção do Tipo de Processo. A principal diferença é que caso o parâmetro global tipo de controle esteja definido por: **Campo Sequencial Geral** ou **Sequencial do Ano**, a primeira tela será a seleção do tipo de processo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image110.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image110.png)

Em seguida, a tela para seleção do titular do processo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image17.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image17.png)

**NOTA:** *O titular do processo deve possuir um CGM cadastrado no e-cidade. O cadastro pode ser realizado através da rotina:*

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Geral do Município - CGM (novo)
\`\`\`

[Mais informações clique aqui](https://e-cidade.wiki.br/patrimonial/protocolo/#!cadastros_geral_do_municipio.md)

Após, o e-cidade listará as informações selecionadas como prévia em Dados Processo conforme a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image142.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image142.png)

- **Usuário:** usuário que encontra-se logado no e-cidade.
- **Departamento:** departamento atual configurado na sessão ao acessar a rotina.
- **Órgão:** órgão ao qual encontra-se o departamento atual.

Caso o seu perfil possua mais de um departamento configurado e identifique a necessidade de alterar para inclusão do processo, clique na engrenagem no canto superior direito e efetive alteração.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image143.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image143.png)

- **Número de Controle:** Número de controle atribuido automáticamente ao processo de forma sequencial.
- **Data do Processo:** Data referente a inclusão do processo, sendo a informação obtida na sessão em que o usuário se encontra.
- **Hora da inclusão do processo:** Hora da inclusão do processo conforme horário local(servidor).

**Tipo de Documento:** Se aplicável o tipo de controle por órgão listará o tipo de documento selecionado na primeira tela. [Mais informações clique aqui.](https://e-cidade.wiki.br/patrimonial/protocolo/#!cadastros_tipo_de_documento.md)

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Tipo de Documento
\`\`\`

**Tipo:** Tipo de processo selecionado. [Mais informações clique aqui.](https://e-cidade.wiki.br/patrimonial/protocolo/#!cadastros_tipo_de_processo.md)

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Tipos de Processos
\`\`\`

- **Titular:** Titular do processo com vinculo CGM.
- **Requerente:** Indivíduo que fez o requerimento, ou seja, solicitou a inclusão do processo.

**Assunto:** Assunto no que se refere a abertura do processo.

**Campos Complementares:** Se aplicável listará as variáveis configuradas de forma adicional ao tipo de procesos. [Mais informações clique aqui.](https://e-cidade.wiki.br/patrimonial/protocolo/#!cadastros_variavel.md)

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Variável
\`\`\`

**Documentos:** listará os documentos definidos ao tipo de processo como necessário para inclusão do processo. [Mais informações clique aqui.](https://e-cidade.wiki.br/patrimonial/protocolo/#!cadastros_tipo_de_documento.md)

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Documento
\`\`\`

Se o CGM não estiver atualizado e os parâmetros abaixo estiverem definidos como "Sim", o e-cidade irá alertar e abrir a tela de alteração de CGM.

- **Obriga alterar CGM durante a inclusão de processo**
- **Valida CPF/CNPJ na inclusão de Processo**

Estes parâmetros encontram-se na rotina:

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Parâmetros > Parâmetros da Instituição
\`\`\`

Para conclusão e inclusão do processo, o usuário deverá clicar em *"Incluir"*, o e-cidade irá emitir a Capa do Processo na tela.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image30.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image30.png)

Ainda nessa tela é possível anexar documentos ao processo clicando em *"Em Anexar Documentos"*, porém, somente após a inclusão do processo. Caso o usuário tenha anexado um documento incorreto, poderá excluí-lo , para isso basta marcar o(os) anexo(s)clicando e clicar em *"Excluir Selecionados"*.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image7.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image7.png)

A aba *"Processos Apensados"* somente ficará habilitada na rotina de alteração de processo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image91.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image91.png)

## Alteração

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Processos > Alteração
\`\`\`

Permite alteração de um processo e seus campos antes de ser realizado o trâmite inicial que nada mais é que a primeira movimentação do processo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image66.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image66.png)

Note na imagem abaixo que o e-cidade habilita a aba *"Processos Apensados"*, onde lista processos já apensados ao que está sendo alterado ou caso deseje poderá apensar um novo processo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image28.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image28.png)

Para apensar basta clicar em *"Processo à Apensar"*, selecionar o que deseja e clicar em incluir.

## Anexar Documentos

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Processos > Anexar Documentos
\`\`\`

Está rotina permite a manutenção de documentos no processo, sendo possível realizar a inclusão de um novo ou então alterar/excluir um já adicionado anteriormente, desde que o usuário esteja no departamento atual.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image117.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image117.png)
`,
  "Volumes": `
## Inclusão

Permite a inclusão de um volume vinculando ao processo principal.

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Volumes > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image146.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image146.png)

- **Usuário:** usuário que encontra-se logado no e-cidade.
- **Departamento:** departamento atual configurado na sessão ao acessar a rotina.
- **Órgão:** órgão ao qual encontra-se o departamento atual.
- **Processo Principal:** permite selecionar o processo principal ao qual ficará vinculado o volume que está sendo incluso, para isso basta o usuário clicar no link *"Processo Principal"* aplicando os possíveis filtros disponíveis para localizar o processo.

Após o e-cidade irá questionar qual o titular deseja vincular ao volume que está sendo incluso. Lembrando que o titular precisa possuir um cadastro geral do município (CGM) para mais informações de como realizar a inclusão de um CGM [clique aqui](https://e-cidade.wiki.br/patrimonial/protocolo/#!cadastros_geral_do_municipio.md)

Após a seleção do titular do volume, o e-cidade irá listar os demais campos baseado nas informações do processo principal, sendo possível ajustar o requerente que ficará como sugestão o titular, adicionar um assunto referente ao volume, bem como se aplicável informar campos complementares e marcar os documentos apresentados.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image147.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image147.png)

O Volume incluso terá um formato exemplo PRO.08.00001.001/2021 este ficará disponível para visualização ao consultar o processo principal que como exemplo é o PRO.08.00001.000/2021, para mais informações a respeito do volume basta efetuar dois cliques sobre o que deseja.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image148.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image148.png)

## Alteração

Permite realizar a alteração de informações como Titular, Requerente, Assunto, Campos Complementares e Documentos.

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Volumes > Alteração
\`\`\`

## Anexar Documentos

Permite anexar um documento a um volume.

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Volumes > Anexar Documentos
\`\`\`
`,
  "Trâmite Inicial": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Trâmite Inicial
\`\`\`

Neste procedimento é feito a primeira transferência do processo no e-cidade. Após esta ação, o processo ficará disponível para recebimento no departamento definido como destino.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image19.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image19.png)

- **Usuário:** Usuário logado na sessão do e-cidade.
- **Departamento:** Departamento atual em que o usuário se encontra, ou seja, o departamento origem do trâmite.
- **Órgão:** Órgão atual equivalente ao departamento atual.
- **Transferência:** Código da transferência, este será gerado automaticamente após a inclusão.
- **Data:** Data atual do servidor local no momento que está sendo efetivado o trâmite inicial.
- **Departamento:** Departamento ao qual terá como destino o processo.
- **Recebimento:** Usuários pertencentes passíveis de recebimento no departamento destino. Somente o usuário selecionado poderá receber o processo; caso deixe a opção como *"Selecione o Usuário"*, todos os usuários daquele departamento que possuam permissão poderão efetivar o recebimento.
- **Tramitar Volumes com Processo Principal:** Permite tramitar os volumes vinculados ao processo principal juntamente com o mesmo. Visível e aplicável se o parâmetro global Tipo de Controle estiver definido por órgão.
- **Processos Existentes:** Processos existentes pendentes de trâmite inicial no departamento em que o usuário encontra-se no momento em que acessa a rotina de Trâmite Inicial.

**NOTA:** *Se marcar processos de diferentes departamentos da configuração padrão realizada no momento da inclusão do tipo do processo ou através da rotina de andamento padrão, o e-cidade irá verificar um parâmetro "Tramite/transferencia" na rotina abaixo:*

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Parâmetros > Parâmetros da Instituição
\`\`\`

- **Permite escolher departamentos diferentes do padrão.**
- **Não permite escolher departamentos diferentes.**

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image145.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image145.png)

- **Permite escolher departamento diferente, mas avisa o usuário.**

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image144.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image144.png)

Ao efetivar, será emitido um termo de recebimento do processo para impressão e retorna para a página de trâmite inicial.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image85.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image85.png)
`,
  "Despachos": `
## Inclusão

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Despachos > Inclusão
\`\`\`

Nesse procedimento é possível realizar a inclusão de pareceres dos processos. O usuário poderá incluir um despacho caso esteja no mesmo departamento e já tenha efetuado o recebimento do processo.

Assim que acessar a rotina será listado os processos que encontram-se com situação recebido no departamento.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image149.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image149.png)

Basta clicar sobre o que deseja ou então aplicar filtros disponíveis para localizá-lo; após selecionar o processo, a informação como número/titular será exibida nos campos. Para concluir a ação clique em "Processar".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image150.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image150.png)

**[ABA] Despacho Atual**

Ao processar, os dados referentes ao processo serão definidos nos seus respectivos campos com a finalidade do usuário revisar as informações como assunto, origem, entre outras listadas conforme a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image151.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image151.png)

- **Despacho Público:** Permite selecionar a opção SIM ou NÃO. Se sim, este ficará público onde poderá ser consultado pela internet ou internamente na consulta de processos, apenas pelos usuários do e-cidade.
- **Despacho Interno:** Campo para o usuário descrever seu despacho/parecer.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image103.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image103.png)

Após a inclusão do parecer, o sistema habilita o botão "Imprimir Despacho"; ao clicá-lo emite um documento.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image71.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image71.png)

**[ABA] Despacho Anterior**

Exibe os despachos do processo efetuados anteriormente pelo departamento atual.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image53.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image53.png)

**[ABA] Anexar Documentos**

Também através dessa rotina o usuário poderá anexar documentos juntamente com o seu despacho, porém, a aba somente ficará habilitada após efetivar a inclusão do despacho na aba "Despacho Atual".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image70.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image70.png)

Despachos inclusos ficarão disponíveis para visualização e impressão através da rotina abaixo:

\`\`\`
DB:PATRIMONIAL > Protocolo > Consultas > Processo
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image152.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image152.png)

## Alterar

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Despachos > Alteração
\`\`\`

Esta rotina permite alterar o último despacho realizado pelo usuário no departamento em questão.
`,
  "Transferências": `
## Inclusão

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Transferências > Inclusão
\`\`\`

Nesse procedimento é possível realizar a transferência do processo no e-cidade.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image97.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image97.png)

- **Usuário:** Usuário logado na sessão do e-cidade.
- **Departamento:** Departamento atual em que o usuário se encontra, ou seja, o departamento origem da transferência.
- **Órgão:** Órgão atual equivalente ao departamento atual.
- **Transferência:** Código da transferência, este será gerado automaticamente após a inclusão.
- **Data:** Data atual do servidor local no momento que está sendo efetivada a transferência do processo.
- **Departamento:** Departamento ao qual terá como destino o processo.
- **Recebimento:** Usuários pertencentes passíveis de recebimento no departamento destino. Somente o usuário selecionado poderá receber o processo; caso deixe a opção como *"Selecione o Usuário"*, todos os usuários daquele departamento que possuam permissão poderão efetivar o recebimento.
- **Tramitar Volumes com Processo Principal:** Permite tramitar os volumes vinculados ao processo principal juntamente com o mesmo. Visível e aplicável se o parâmetro global Tipo de Controle estiver definido por órgão.
- **Processos No Departamento:** Exibe de forma total a quantidade de processos que se encontram com situação recebidos no departamento.
- **Processos Existentes:** Processos existentes pendentes de transferência no departamento em que o usuário se encontra.

Se aplicável o parâmetro, ao selecionar o processo automaticamente será sugerido o departamento padrão para transferência conforme a ordem definida em "Andamento do Processo" para o "Tipo Processo".

**NOTA:** *Se marcar processos de departamentos diferentes da configuração padrão realizada no momento da inclusão do tipo do processo ou através da rotina de andamento padrão, o e-cidade irá verificar um parâmetro "Tramite/transferencia" na rotina abaixo:*

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Parâmetros > Parâmetros da Instituição
\`\`\`

- **Permite escolher departamentos diferentes do padrão.**
- **Não permite escolher departamentos diferentes.**

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image145.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image145.png)

- **Permite escolher departamento diferente, mas avisa o usuário.**

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image144.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image144.png)

Ao efetivar a transferência do processo, o e-cidade irá emitir um termo de transferência para impressão.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image36.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image36.png)

## Cancelamento Parcial

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Transferências > Cancelamento Parcial
\`\`\`

Permite a exclusão da transferência dos processos vinculados à mesma, podendo ser realizado de forma parcial ou total o cancelamento. Para isso basta marcar o(s) processo(s) a ser(em) cancelado(s) e clicar no botão "Cancelar os Processos".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image86.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image86.png)

**NOTA:** *Os processos somente poderão ser cancelados antes de serem recebidos pelo departamento de destino.*
`,
  "Recebimento": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Recebimento
\`\`\`

Nesse procedimento é possível realizar o recebimento de processos em transferências disponíveis no departamento, podendo uma única transferência possuir um ou mais processos.

Ao acessar a rotina, o e-cidade irá listar todos os processos que encontram-se no departamento e estão com situação "Pendente de Recebimento" ou processos transferidos diretamente ao usuário em que se encontra logado.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image101.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image101.png)

Digite o código de transferência ou clique sobre um dos registros listados. É possível localizar o código de transferência no documento emitido no momento que foi efetivada a transferência do processo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image155.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image155.png)

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image156.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image156.png)

Ao clicar sobre a transferência o e-cidade irá abrir uma tela com os processos da transferência e um resumo de seus dados como N° do Controle, Processo (N°/Ano), Requerente, Tipo, Data e Observação. Neste momento, em segundo plano, o código do campo transferência é preenchido com o mesmo selecionado; ao usuário basta clicar em "Receber".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image67.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image67.png)

Também há opção do usuário clicar no botão "Inf" de informações; ao efetivar, o e-cidade irá abrir uma janela com informações adicionais a respeito do processo e uma opção de impressão.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image44.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image44.png)
`,
  "Arquivamento": `
## Inclusão

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Arquivamento > Inclusão
\`\`\`

No arquivamento individual, assim que o usuário acessar a rotina serão listados os processos que são passíveis de arquivamento; poderá ser feita a busca pelo número de controle ou pelo processo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image157.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image157.png)

Assim que selecionar o processo, o e-cidade irá exibir os seguintes dados e campos:

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image158.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image158.png)

- **Processo:** Processo (numeração/ano) selecionado e que será arquivado.
- **Requerente:** Requerente definido durante a inclusão do processo.
- **Usuário:** Usuário logado na sessão do e-cidade.
- **Departamento:** Departamento atual em que o usuário se encontra.
- **Código do Arquivamento:** Código do arquivamento, este será gerado automaticamente após a inclusão.
- **Data do Arquivamento:** Data em que está sendo arquivado o processo.
- **Arquivar Volumes:** Se marcada esta opção, os volumes serão arquivados juntamente com o processo principal. *(Aplicável somente ao parâmetro global tipo de controle por órgão.)*
- **Histórico do Arquivamento:** Permite digitar uma descrição/histórico referente ao arquivamento que está sendo realizado.
- **Volumes:** Ao selecionar o processo principal que possua volumes vinculados, os mesmos serão listados nesta opção. *(Aplicável somente ao parâmetro global tipo de controle por órgão.)*

Caso note que tenha selecionado o processo incorreto, poderá efetivar novamente a busca e seleção clicando no botão "Pesquisar" ou também poderá efetivar uma pesquisa rápida por processos arquivados no departamento em questão, para isso basta clicar em "Pesquisar Arquivamento".

Assim que finalizar o preenchimento das informações necessárias para o arquivamento, basta efetivar a ação clicando em "Incluir".

## Alteração

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Arquivamento > Alteração
\`\`\`

Permite alterar os campos Data do Arquivamento e Histórico do Arquivamento. A alteração somente estará disponível para processos arquivados pelo próprio usuário da sessão.

## Lote

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Arquivamento > Lote
\`\`\`

Rotina que permite o arquivamento de múltiplos processos, ou seja, em lote. Para isso, é necessário que seja aplicado inicialmente um intervalo de inclusão dos processos a serem arquivados e clicar em "Processar".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image93.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image93.png)

Após, o e-cidade exibirá uma tela onde retornará os processos que foram criados dentro do intervalo selecionado. Descreva o histórico do arquivamento, confirme a data de arquivamento, marque os processos que terão a baixa realizada e clique em "Arquivar Processos".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image6.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image6.png)

**NOTA:** *O arquivamento gera o término do processo no e-cidade. A rotina de arquivamento em lote somente lista os processos que se encontram no departamento em que o usuário está logado ou em transferência (sem recebimento). O arquivamento individual lista qualquer processo que tenha sido recebido pelo departamento ou usuário logado (com recebimento).*
`,
  "Desarquivamento": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Desarquivamento
\`\`\`

Nesse procedimento é possível realizar o desarquivamento dos processos arquivados no departamento. Assim que acessar a rotina serão listados os processos, podendo clicar sobre o que deseja ou então pesquisar pelo número de controle do mesmo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image159.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image159.png)

Ao clicar sobre a linha do processo ou selecionando através do filtro número de controle, o e-cidade irá exibir um alerta de confirmação se deseja efetivar o desarquivamento, podendo ser concluído clicando em "Ok" ou então realizar o cancelamento da ação clicando em "Cancelar".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image105.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image105.png)

Confirmado, o e-cidade informará que o processo foi desarquivado com sucesso, retornando ao último departamento no qual tramitou.
`,
  "Andamento Padrão": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Andamento Padrão
\`\`\`

Nesse procedimento é possível efetuar o vínculo de um determinado tipo de processo a um departamento, sendo possível parametrizar quantidade de dias em que o processo poderá permanecer no mesmo, bem como a ordem de tramitação para o tipo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image37.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image37.png)

- **Código do Tipo:** Digite o código do tipo ou então clique sobre "Código do tipo" para aplicar filtros adicionais como a busca pela descrição.
- **Código do Departamento:** Digite o código do departamento ou então clique sobre "Código do departamento" para aplicar filtros adicionais como a busca por instituição, órgão, descrição do departamento.
- **Quantidade de Dias:** Preencha quantos dias por padrão que o processo normalmente permanece no departamento informado.
- **Ordem:** Preencher a ordem de cada departamento.

**NOTA:** *Somente será possível realizar a inclusão de um processo para um determinado tipo caso o mesmo possua no mínimo um andamento padrão. Deverá ser informado para quais departamentos o tipo de processo deverá ser transferido, como um "caminho" padrão que aquele determinado tipo de processo deverá seguir. Se aplicável o parâmetro, essa função estará incorporada dentro da rotina de inclusão de tipo de processo, facilitando ao usuário essa configuração, uma vez que é pré-requisito para tramitação de um novo tipo de processo ou um que não possua definido o andamento padrão.*

\`\`\`
DB:PATRIMONIAL > Protocolo > Cadastros > Tipos de Processos > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image160.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image160.png)
`,
  "Recibo de Receita": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Recibo de Receita
\`\`\`

Esse procedimento consiste na emissão de recibo de receita tributária e não tributária. Caso seja emitido um recibo avulso e o mesmo não for pago, o contribuinte não ficará devendo, mas se houver pagamento, o e-cidade credita um débito.

Podemos visualizar isso através da consulta de pagamentos efetuados, na rotina:

\`\`\`
DB:PATRIMONIAL > Protocolo > Consultas > Geral Financeira
\`\`\`

Quando for fazer uma arrecadação de um valor negativo, normalmente para casos de deduções, devemos utilizar a rotina de planilha, acessando:

\`\`\`
DB:FINANCEIRO > Caixa > Procedimentos > Planilha de Lançamento > Inclusão
\`\`\`

Ao lançar um recibo vinculado ao processo de protocolo, o e-cidade lança o valor ao CGM do titular do processo, ficando vinculado ao processo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image59.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image59.png)

- **Receita:** Preencher o código da receita ou, caso desconheça, poderá clicar em "Receita" e aplicar filtros adicionais.
- **Taxa:** Preencher o valor da taxa ou clicar em "Taxas" para pesquisar as taxas referentes à receita escolhida.
- **C.Peculiar/C.Aplicação:** Característica peculiar com aplicação.
- **Histórico:** Preencher uma descrição referente ao recibo.
- **Data Vencimento:** Preencher a data de vencimento do recibo de pagamento.

Ao preencher as informações necessárias, o usuário poderá clicar em "Confirmar"; será emitido um alerta se confirma a emissão do recibo, podendo cancelar ou efetivar. Ao efetivar, o e-cidade emitirá o documento.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image161.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image161.png)
`,
  "Cancela Recibo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Cancela Recibo
\`\`\`

Ao acessar a rotina serão listados os recibos emitidos; basta selecionar o recibo que deseja e clicar no botão "Excluir". Caso tenha selecionado o recibo incorreto, utilize o botão "Pesquisar recibo" para efetivar uma nova busca.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image118.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image118.png)
`,
  "Trâmite Interno": `
## Despacho

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Trâmite Interno > Despacho
\`\`\`

Esta rotina permite gerar um registro de despacho interno no departamento, quando for necessário o parecer de mais de uma pessoa do departamento.

Assim que acessar a rotina será listado os processos que encontram-se com situação recebido no departamento.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image149.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image149.png)

Basta clicar sobre o que deseja ou então aplicar filtros disponíveis para localizá-lo. Após selecionar o processo, a informação como número/titular será exibida nos campos; para concluir a ação clique em "Processar".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image150.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image150.png)

**[ABA] Despacho Atual**

Ao processar, os dados referentes ao processo serão definidos nos seus respectivos campos com a finalidade do usuário revisar as informações como assunto, origem, entre outras listadas conforme a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image151.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image151.png)

- **Despacho Público:** Permite selecionar a opção "SIM" ou "NÃO". Se sim, este ficará público onde poderá ser consultado pela internet ou internamente na consulta de processos, apenas pelos usuários do e-cidade.
- **Despacho Interno:** Campo para o usuário descrever seu despacho/parecer.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image103.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image103.png)

Após a inclusão do parecer, o e-cidade habilita o botão "Imprimir Despacho"; ao clicá-lo emite um documento.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image162.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image162.png)

**[ABA] Despacho Anterior**

Exibe os despachos do processo efetuados anteriormente pelo departamento atual.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image53.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image53.png)

**[ABA] Anexar Documentos**

Também através dessa rotina o usuário poderá anexar documentos juntamente com o seu despacho, porém, a aba somente ficará habilitada após efetivar a inclusão do despacho na aba "Despacho Atual".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image70.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image70.png)

Despachos inclusos ficarão disponíveis para visualização e impressão através da rotina abaixo:

\`\`\`
DB:PATRIMONIAL > Protocolo > Consultas > Processo
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image152.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image152.png)

**NOTA:** *Após efetivar o lançamento de um despacho, o mesmo não poderá ser excluído; se for o caso o usuário deve efetivar o lançamento novamente do despacho retificando o anterior.*

## Transferência

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Trâmite Interno > Transferência
\`\`\`

Na transferência de processos entre os usuários do mesmo departamento, digite o parecer para transferência do processo no campo "Despacho Interno", selecione o usuário no campo "Usuário Destino" (este receberá o processo internamente), marque "Sim" ou "Não" no campo "Despacho Público", marque o ou os processos a serem transferidos e clique em "Transferir".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image38.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image38.png)

## Cancela Transferência

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Trâmite Interno > Cancela Transferência
\`\`\`

Ao selecionar o código da transferência interna a ser cancelada, o e-cidade irá exibir os dados da transferência na parte inferior da tela "Processos da Transferência". Para efetivar o cancelamento da transferência, marque o ou os processos e clique no botão "Cancelar os Processos".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image26.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image26.png)

## Recebimento

\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Trâmite Interno > Recebimento
\`\`\`

Marque o(s) processo(s) referente(s) ao usuário e clique no botão "Receber". No registro da transferência, na última coluna "Info", o usuário pode clicar no botão "Ver" para visualizar mais informações do processo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image81.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image81.png)
`,
  "Apensar Processo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Apensar Processo
\`\`\`

Através desta rotina é possível realizar a inclusão de apensamentos de processos. Para isso basta digitar o número de controle do processo no campo principal ou clicar em "Principal" e aplicar filtros adicionais. O mesmo se repete para o campo "Apensar", onde poderá efetivar a busca digitando o número de controle ou clicando em "Apensar" para aplicar filtros adicionais.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image112.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image112.png)

Após selecionar o Principal, ou seja, o que receberá o apensamento de outro processo, assim como o processo a ser apensado, basta clicar em "Apensar".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image88.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image88.png)

As informações serão listadas em "Processos Apensados", podendo ser realizada a exclusão da vinculação, ou seja, desvincular o processo apensado do principal.

Processos apensados ficarão visíveis durante a consulta do processo principal.

\`\`\`
DB:PATRIMONIAL > Protocolo > Consultas > Processo
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image166.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image166.png)
`,
  "Andamento do processo": `
\`\`\`
DB:PATRIMONIAL > Protocolo > Procedimentos > Andamento do processo
\`\`\`

Esta nova rotina traz um conceito centralizado sobre processos no departamento e seus respectivos status, podendo aplicar diversos filtros, bem como ações gerais como recebimento, despachos, anexos e transferências. Conta com diversos recursos voltados ao Protocolo Eletrônico para facilitar e agilizar ações. A rotina retorna processos que já tiveram seu trâmite inicial ou que estão no departamento.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image46.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image46.png)

## Filtros

A imagem abaixo exibe os principais filtros para busca de processos:

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image167.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image167.png)

- **Processo:** Numeração do Processo/Ano.
- **Requerente:** Requerente do processo, ou seja, quem solicitou a abertura do processo.
- **Descrição:** Assunto/Observações referentes ao processo.
- **Data:** Data da última movimentação.

## Filtrar Responsável

A imagem abaixo exibe os filtros aplicáveis ao responsável:

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image168.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image168.png)

- **Meu:** Meus processos pelos quais sou responsável.
- **Outros:** Processos onde o responsável é diferente do meu.
- **Departamento:** Processos que se encontram no departamento.

## Filtrar Tipo Processo

A imagem abaixo exibe os filtros para busca por tipo de processo:

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image170.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image170.png)

- **Eletrônico:** Processos incluídos por intermédio do Protocolo Eletrônico.
- **Manual:** Processos incluídos por intermédio do e-cidade.

## Filtrar status

A imagem abaixo exibe os filtros para busca por status:

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image169.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image169.png)

- **A receber:** Filtra processos que estão com status de pendente de recebimento.
- **Recebidos:** Filtra processos que já foram efetivamente recebidos.
- **Despachados:** Filtra processos que já tiveram despacho efetivado.
- **Externos:** Filtra processos externos, oriundos do Protocolo Eletrônico.
- **Mensagens não lidas:** Filtra processos com mensagens originadas através de um atendimento aberto de forma online pelo processo eletrônico que ainda não foram lidas.

### Uso dos filtros

Ao marcar somente o check **"À receber"**, o e-cidade retornará somente processos que estão com este status.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image50.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image50.png)

Ao marcar somente o check **"Recebidos"**, o e-cidade retornará somente processos que estão com este status.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image116.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image116.png)

Ao marcar somente o check **"Despachados"**, o e-cidade retornará somente processos que estão com este status.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image29.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image29.png)

Ao marcar o check **"Externos"**, o e-cidade retornará somente processos cuja origem foi externa. Os status também podem ser combinados entre si.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image174.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image174.png)

Ao marcar somente o check **"Mensagens não lidas"**, o e-cidade retornará somente processos com mensagens enviadas pelo cidadão que ainda não foram lidas. Por serem caixas de seleção, os filtros podem ser combinados entre si.

## Exibição das informações

- **Transferência:** Código da transferência referente ao último andamento. A ausência de transferência caracteriza um processo externo que ainda não teve aprovação e tramitação no e-cidade, ou seja, ainda é apenas uma solicitação de atendimento externo.
- **Processo Número:** Poderá ser o número do processo no e-cidade ou, caso ainda não tenha sido aprovado, o número de atendimento criado no Protocolo Eletrônico.
- **Requerente:** Indivíduo que fez o requerimento, ou seja, solicitou a inclusão do processo.
- **Descrição:** Descrição referente ao tipo do processo.
- **Data:** Data de criação do processo.
- **Observação:** Observação definida no momento da inclusão do processo.
- **Status:** Status atual do processo.

A última coluna está relacionada às ações possíveis no processo.

## Apenas Receber

Para apenas receber um processo no departamento basta clicar sobre o ícone de "check".

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image40.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image40.png)

**NOTA:** O e-cidade não emitirá nenhum alerta solicitando a confirmação. Portanto, atente-se ao executar essa ação e confirme se é o processo correto a ser recebido.

Essa ação também é possível acessando as ações e clicando sobre o ícone através do botão "Apenas Receber".

## Mensagens

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image175.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image175.png)

Permite visualizar as mensagens pendentes de leitura, assim como o histórico das mensagens trocadas com o cidadão. O número ao lado do ícone se refere à quantidade de mensagens pendentes de leitura; no exemplo acima, zero.

Essa ação também é possível acessando as ações e clicando sobre o ícone através do botão "Mensagens".

Ao clicar sobre o ícone e não houver nenhuma mensagem pendente de leitura ou histórico de troca de mensagens, o e-cidade irá emitir o alerta abaixo:

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image177.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image177.png)

À direita, há um botão para atualização do chat e outro que permite a inclusão de mensagens. Ao clicar sobre este, o e-cidade irá permitir digitar a mensagem para o cidadão e, se desejar, anexar um arquivo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image179.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image179.png)

Para concluir o envio basta clicar em **"Enviar Mensagem"**; a mensagem será exibida.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image178.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image178.png)

## Ações

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image176.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image176.png)

Através desta opção é possível realizar um despacho, anexar documentos ou transferir sem um recebimento, além de outros procedimentos e da visualização de dados do processo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image180.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image180.png)

### Despacho Interno

Permite efetivar o despacho interno com o parecer do usuário. Caso não tenha o que registrar, basta não preencher este campo.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image60.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image60.png)

O e-cidade também retorna uma prévia de despachos efetivados anteriormente. Na última coluna "Ações" há um ícone que permite visualizar digitalmente o documento "Despacho Interno", facilitando a conferência do parecer realizado.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image42.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image42.png)

### Anexo de Documentos

Opção que permite ao usuário anexar documentos ao processo, assim como excluir ou fazer download de um documento existente.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image39.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image39.png)

### Transferência de Processos

Permite a transferência do processo ao departamento na instituição ou entre instituições, bem como definir um usuário que realizará o recebimento.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image33.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image33.png)

**NOTA:** Caso seja definido um usuário para recebimento, somente este poderá efetivar o recebimento e tramitação do processo. Definindo como *"Selecione o Usuário"*, o processo será listado para recebimento a todos que possuem acesso à rotina do andamento do processo no departamento.

### Dados do Processo

Permite visualizar informações referentes ao processo, como número, tipo, data do processo, titular, requerente, instituição de origem, departamento inicial e observação.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image181.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image181.png)

Para visualizar mais informações sobre o processo, como movimentação entre outras informações, clique sobre *"Processo"*.

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image182.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image182.png)

### Botões de Ação

[![](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image183.png)](https://e-cidade.wiki.br/patrimonial/protocolo/files/images_protocolo_tecnico/image183.png)

- **Apenas Receber:** Este botão somente ficará visível caso o processo esteja com o status *"A Receber"*, ou seja, pendente de recebimento. Permite efetivar o recebimento de forma rápida.
- **Salvar:** Permite salvar informações e efetivar ações, seja realizar um despacho, anexar um documento ou uma transferência. Estas três ações podem ser efetivadas de uma única vez, se assim desejar, otimizando o tempo de quem está realizando a ação.
- **Visualizar Documentos:** Permite visualizar documentos anexados de forma digital, folheando o processo como se fosse fisicamente.
- **Mensagens:** Permite visualizar mensagens trocadas com o cidadão.
- **Voltar:** Retorna para a tela anterior onde estão listados os processos do departamento.
`,
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
  "Dados dos Veiculos": `
# Marcas

### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Marcas > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)
[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)
Ao usuário será necessário informar a “Descrição da Marca” e clicar em , ainda possui a opção de clicar em e efetivar uma busca entre as marcas já cadastradas no e-cidade.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image97.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image97.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Marcas > Alteração
\`\`\`

Permite a alteração do campo “Descrição da Marca” atribuído a Marca. Ao acessar a rotina serão listadas as que encontram-se cadastradas no e-cidade, podendo ser efetivado a busca pelo código, descrição ou apenas clicando sobre a linha da marca.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image29.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image29.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image109.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image109.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image51.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image51.png)
Para alterar a marca selecionada, basta clicar em .

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Marcas > Exclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)
Permite a exclusão das marcas que estão cadastradas no e-cidade. Ao acessar a rotina será listado as mesmas, podendo ser efetivada abusca pelo código, descrição ou simplesmente clicando sobre a linha da marca, conclui-se a ação clicando no botão .
`,
  "Dados dos Veiculos - Página 2": `
# Tipos

### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Tipos > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image23.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image23.png)
Permite a inclusão de tipos (finalidade do automóvel por sua natureza). Exemplos: ônibus, camionete, passageiro/automóvel, micro-ônibus, ambulância e etc...) dos veículos que fazem parte da frota Municipal. Ao usuário basta informar a “Descrição do Tipo” e clicar sobre o botão.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image18.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image18.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Tipos > Alteração
\`\`\`

Permite a alteração do campo “Descrição do Tipo” atribuído ao Tipo. Ao acessar a rotina serão listados os que encontram-se cadastrados no e-cidade, podendo ser efetivado a busca pelo código, descrição ou apenas clicando sobre a linha do Tipo.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image74.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image74.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image78.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image78.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image51.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image51.png)
Para alterar o tipo selecionado, basta clicar em .

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Tipos > Exclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)
Permite a exclusão dos tipos que estão cadastrados no e-cidade. Ao acessar a rotina, será listado os que encontram-se cadastrados no e-cidade, podendo ser efetivada a busca pelo código do tipo, descrição ou simplesmente clicando sobre a linha do tipo, conclui-se a ação clicando no botão .
`,
  "Dados dos Veiculos - Página 3": `
# Combustíveis

### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Combustíveis > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)
[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)
Ao usuário será necessário informar a “Descrição do Combustível” e clicar em , ainda possui a opção de clicar em e efetivar uma busca entre os combustíveis já cadastrados no e-cidade.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image110.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image110.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Combustíveis > Alteração
\`\`\`

Permite a alteração do campo “Descrição do Combustível” atribuído ao Combustível. Ao acessar a rotina serão listados os que encontram-se cadastrados no e-cidade, podendo ser efetivada a busca pelo código, descrição ou apenas clicando sobre a linha do combustível.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image67.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image67.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image54.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image54.png)

#### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Combustíveis > Exclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)
Permite a exclusão de Combustíveis que estão cadastrados no e-cidade. Ao acessar a rotina, será listado os mesmos, podendo ser efetivada a busca pelo código do tipo, descrição ou simplesmente clicando sobre a linha do combustível, conclui-se a ação clicando em .
`,
  "Dados dos Veiculos - Página 4": `
# Modelos

### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Modelos > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)
[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)
Ao usuário será necessário informar a "Descrição do Modelo" e clicar em , ainda possui a opção de clicar em e efetivar uma busca entre as marcas já cadastradas no e-cidade.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image12.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image12.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Modelos > Alteração
\`\`\`

Permite a alteração do campo “Descrição do Modelo” atribuído ao Modelo. Ao acessar a rotina serão listados os que encontram-se cadastrados no e-cidade, podendo ser efetivado a busca pelo código, descrição ou apenas clicando sobre a linha do Modelo.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image25.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image25.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image53.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image53.png)

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Modelos > Exclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)
Permite a exclusão dos modelos que estão cadastrados no e-cidade. Ao acessar a rotina, será listado os mesmos, podendo ser efetivada a busca pelo código do tipo, descrição ou simplesmente clicando sobre a linha do modelo, conclui-se a ação clicando em .
`,
  "Dados dos Veiculos - Página 5": `
# Tipos de capacidade

### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Tipo de Capacidade > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)
[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)
Ao usuário será necessário informar a “Descrição Tipo de Capacidade” e clicar em , ainda possui a opção de clicar em e efetivar uma busca entre os tipos de capacidade já cadastrados no e-cidade.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image100.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image100.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Tipo de Capacidade > Alteração
\`\`\`

Permite a alteração do campo “Descrição Tipo de Capacidade” atribuído ao Tipo de Capacidade. Ao acessar a rotina serão listados os que encontram-se cadastrados no e-cidade, podendo ser efetivado a busca pelo código, descrição ou apenas clicando sobre a linha do tipo de capacidade.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image5.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image5.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image96.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image96.png)

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Tipo de Capacidade > Exclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)
Permite a exclusão dos Tipos de Capacidade que estão cadastrados no e-cidade. Ao acessar a rotina, será listado os mesmos, podendo ser
`,
  "Dados dos Veiculos - Página 6": `
# Cores

### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veiculos > Cores > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)
[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)
Ao usuário será necessário informar a “Descrição da Cor” e clicar em , ainda possui a opção de clicar em e efetivar uma busca entre as cores já cadastradas no e-cidade.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image73.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image73.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veiculos > Cores > Alteração
\`\`\`

Permite a alteração do campo “Descrição da Cor” atribuído a Cor. Ao acessar a rotina serão listados as que encontram-se cadastradas no e-cidade, podendo ser efetivado a busca pelo código, descrição ou apenas clicando sobre a linha da cor.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image83.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image83.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image93.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image93.png)

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veiculos > Cores > Exclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)
Permite a exclusão de Cores que estão cadastrados no e-cidade. Ao acessar a rotina, será listado as mesmas, podendo ser efetivada a busca pelo código do tipo, descrição ou simplesmente clicando sobre a linha da cor, conclui-se a ação clicando em .
`,
  "Dados dos Veiculos - Página 7": `
# Utilização dos veículos

### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Utilização de veículos > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)
[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)
Ao usuário será necessário informar a “Descrição” e clicar em , ainda possui a opção de clicar em e efetivar uma busca entre as utilizações de veículos já cadastradas no e-cidade.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image119.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image119.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Utilização de veículos > Alteração
\`\`\`

Permite a alteração do campo “Descrição” atribuído a utilização de veículos. Ao acessar a rotina serão listados as que encontram-se cadastradas no e-cidade, podendo ser efetivado a busca pelo código, descrição ou apenas clicando sobre a linha da descrição da utilização de veículos.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image103.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image103.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image47.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image47.png)

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Utilização de veículos > Exclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)
Permite a exclusão de utilização de veículos que estão cadastrados no e-cidade. Ao acessar a rotina, será listado os mesmos, podendo ser efetivada a busca pelo código do tipo, descrição ou simplesmente clicando sobre a linha da descrição da utilização, conclui-se a ação clicando em .
`,
  "Dados dos Veiculos - Página 8": `
# Potência

### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Potências > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)
[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)
Ao usuário será necessário informar a “Descrição Potência”, “Descrição Completa da Potência” e clicar em , ainda possui a opção de clicar em e efetivar uma busca entre as potências já cadastradas no e-cidade.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image37.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image37.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Potências > Alteração
\`\`\`

Permite a alteração dos campos “Descrição Potência”, “Descrição Completa da Potência” atribuído a potência. Ao acessar a rotina serão listados as que encontram-se cadastradas no e-cidade, podendo ser efetivado a busca pelo código, descrição ou apenas clicando sobre a linha da potência.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image91.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image91.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image87.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image87.png)

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Potências > Exclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)
Permite a exclusão de Potências que estão cadastradas no e-cidade. Ao acessar a rotina, será listado as mesmas, podendo ser efetivada a busca pelo código do tipo, descrição ou simplesmente clicando sobre a linha da potência, conclui-se a ação clicando em .
`,
  "Dados dos Veiculos - Página 9": `
# Categorias

### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Categorias > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)
[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)
Ao usuário será necessário informar a “Descrição Categoria” e clicar em , ainda possui a opção de clicar em e efetivar uma busca entre as categorias já cadastradas no e-cidade.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image94.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image94.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Categorias > Alteração
\`\`\`

Permite a alteração do campo “Descrição Categoria” atribuído a categoria. Ao acessar a rotina serão listados as que encontram-se cadastradas no e-cidade, podendo ser efetivado a busca pelo código, descrição ou apenas clicando sobre a linha da categoria.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Categorias > Exclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)
Permite a exclusão de categorias que estão cadastradas no e-cidade. Ao acessar a rotina, será listado as mesmas, podendo ser efetivada a busca pelo código do tipo, descrição ou simplesmente clicando sobre a linha da categoria, conclui-se a ação clicando em .
`,
  "Dados dos Veiculos - Página 10": `
# Procedências

### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Procedências > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)
[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)
Ao usuário será necessário informar a “Descrição Procedência” e clicar em , ainda possui a opção de clicar em e efetivar uma busca entre as procedências já cadastradas no e-cidade.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image33.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image33.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Procedências > Alteração
\`\`\`

Permite a alteração do campo “Descrição da Procedência” atribuído a procedência. Ao acessar a rotina serão listados as que encontram-se cadastradas no e-cidade, podendo ser efetivado a busca pelo código, descrição ou apenas clicando sobre a linha da procedência.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image80.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image80.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image40.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image40.png)

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Procedências > Exclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)
Permite a exclusão de Procedências que estão cadastradas no e-cidade. Ao acessar a rotina, será listado as mesmas, podendo ser efetivada a busca pelo código do tipo, descrição ou simplesmente clicando sobre a linha da procedência, conclui-se a ação clicando em .
`,
  "Manutenção de Medidas": `
### Cancela Manutenção

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Manutenção de Medidas > Cancela Manutenção
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image76.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image76.png)

Sistema disponibiliza o cancelamento da manutenção de medida realizado.Informamos o código da manutenção ou clicamos na âncora para pesquisarmos. Ainda o campo motivo deve ser preenchido com a justificativa.clicar em Salvar.
`,
  "Manutenção de Parâmetros": `
Tipo padrão: Este link abre a tela de pesquisa “tipos de veículos” , a qual o usuário pode definir o tipo de veículo que aparecerá por padrão nas telas onde esta informação for solicitada.

Categoria CNH exigida: Este link abre a tela de pesquisa das categorias de CNH e permite ao usuário escolher a categoria padrão apresentada nas telas onde esta informação for solicitada.

Integrado com patrimônio: Este campo permite ao usuário escolher se haverá relação entre os veículos e os bens patrimoniais que eles representam.

Integrado com módulo pessoal: Este campo permite ao sistema controlar o cadastro de motoristas através da lista dos funcionários ativos ou do cadastro geral do Município.

Qualquer alteração necessária nestes parâmetros deve ser confirmada no botão “alterar”.
`,
  "Baixa de Veículos": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Baixa de Veículos > Inclusão
\`\`\`

Inclusão: Ao clicar no sub-menu “incluir”, se abrirá uma tela contendo todos os carros da central em que o usuário estiver logado, permitindo o mesmo. escolher o carro a ser dado baixa.

Uma vez feito isto, se abrirá uma tela conforme a figura 40:

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image62.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image62.png)

Veículo: Este campo é preenchido no momento em que o usuário escolhe o carro a ser dado baixa.

Data da baixa: clicando-se no campo “D”, a data da baixa poderá ser escolhida através do calendário, ou simplesmente digitando a data neste campo.

Hora da baixa: Neste campo é digitado a hora da baixa do veículo.

Tipo da baixa: Este link traz os dados cadastrados no sub-menu tipo de cadastro na guia cadastros.

Motivo: Neste campo será descrito o motivo pelo qual o veículo está dando baixa.

O processo encerra-se clicando-se no botão “incluir”.

A alteração não é contemplada neste menu.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Baixa de Veículos > Exclusão
\`\`\`

A exclusão poderá ser feita clicando-se no sub-menu excluir, esta tela tem os mesmos campos da tela de inclusão. Este processo encerra-se clicando-se no botão “excluir”.
`,
  "Manutenção de Veículos": `
A figura 41 apresenta esta tela com suas duas abas:

Manutenção e itens.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image111.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image111.png)

### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Manutenção de Veículos > Inclusão
\`\`\`

Código Manutenção: Este campo é preenchido automáticamente pelo sistema.

Veículos: Este link abre uma tela de pesquisa onde estão todos os veículos cadastrados no sistema.

Data: Neste campo é informado a data em que foi feita a manutenção.

Valor da mão de obra: Neste campo é informado o valor do serviço de manutenção executado no veículo.

Serviço executado: Neste campo é informado o serviço executado.

Nº da nota fiscal: Neste campo é informado o número da nota do serviço executado.

Medida: Neste campo é informado a medida do hodômetro no momento da execução da manutenção.

Tipos de serviços: Este link permite ao usuário informar o serviço de manutenção ao qual o veículo foi submetido.

Oficina: Este link permite ao usuário informar a oficina responsável pela execução do serviço de manutenção solicitado.

Retirada: Este link permite ao usuário vincular a retirada ao serviço de manutenção realizado.

O processo segue clicando no botão “ incluir “.

A figura 42 traz a aba Itens.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image7.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image7.png)

Manutenção: Este campo é preenchido automáticamente pelo sistema.

Descrição da peça: Neste campo é informado o nome das peças que foram necessárias para a manutenção realizada.

Quantidade: Neste campo é informado a quantidade dos tipos de peças solicitadas para a manutenção do veículo.

Valor unitário: Neste campo será informado o valor unitário de cada peça informada.

Material: Este link permitirá ao usuário vincular a peça solicitada ao cadastro de materiais.

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Manutenção de Veículos > Alteração
\`\`\`

A alteração poderá ser executada ao clicar no sub-menu alteração.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Manutenção de Veículos > Exclusão
\`\`\`

A exclusão poderá ser executada ao clicar no sub-menu exclusão.

O processo encerra-se ao clicar no botão “Incluir”.
`,
  "Retirada de Veículos": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Retirada de Veículos > Inclusão
\`\`\`

Ao clicar no sub-menu “Incluir”, uma tela de pesquisa com os veículos cadastrados na central onde se está logado se abrirá, permitindo a escolha do veículo para proceder a retirada.

Código Retirada: Este campo é preenchido automaticamente pelo sistema.

Veículo: Este link é preenchido com o veículo informado na primeira tela logo após se ter clicado no sub-menu “incluir”.

Motorista: Este campo traz a lista de todos os motoristas cadastrados no sistema.

Data retirada: Neste campo será informado a data em que se está fazendo a retirada do veículo.

Hora da retirada: Neste campo será informado a hora da retirada do veículo.

Última devolução: Neste campo será informado a última medida do hodômetro no momento da devolução do veículo.

Medida de saída: Neste campo será informado a medida do hodômetro no momento da saída do veículo.

Destino: Neste campo será informado o destino ao qual o veículo se deslocará nesta retirada.

Ver figura 43:

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image95.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image95.png)

O procedimento encerra-se clicando no botão incluir.

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Retirada de Veículos > Alteração
\`\`\`

A alteração da retirada de veículos poderá ser feita clicando-se no sub-menu alteração.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Retirada de Veículos > Exclusão
\`\`\`

A exclusão da retirada de veículos poderá ser feita clicando-se no sub-menu exclusão.
`,
  "Devolução de Veículos": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Devolução de Veículos > Inclusão
\`\`\`

Ao clicar no sub-menu “Incluir”, uma tela de pesquisa com os veículos cadastrados na central onde se está logado se abrirá, permitindo a escolha do veículo para proceder a devolução.

Código devolução: Este campo é preenchido automáticamente pelo sistema.

Código retirada: Este link trará todos os veículos que ainda nãoforam devolvidos, permitindo ao usuário então, escolher a qual veículo proceder devolução. Uma vez escolhido o veículo, os campos: veículo, data retirada, hora retirada, medida de saída, motorista, serão preenchidos automaticamente. Restando apenas o preenchimento dos seguintes campos:

Data da devolução: Neste campo será informado a data da devolução do veículo.

Hora da devolução: Neste campo é informado a hora da devolução do veículo.

Medida da devolução: Neste campo é informado a medida do hodômetro no momento da devolução do veículo.

Ver figura 44.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image112.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image112.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Devolução de Veículos > Alteração
\`\`\`

A alteração será possível através do sub-menu alteração.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Devolução de Veículos > Exclusão
\`\`\`

A exclusão será possível através do sub-menu exclusão.
`,
  "Abastecimento": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Abastecimento > Inclusão
\`\`\`

Código abastecimento: Este código é preenchido automaticamente pelo sistema.

Veículo: Este link trará todos os carros cadastrados na central onde se estiver logado, permitindo ao usuário escolher qual o carro a ser abastecido.

Combustível: Este link trará todos os combustíveis cadastrados no sistema, permitindo então ao usuário informar qual o combustível o veículo recebeu.

Data do abastecimento: Neste campo informa-se a data em que o veículo foi abastecido.

Litros: Neste campo é informado a quantidade de litros abastecido no veículo.

Medida de consumo: Neste campo é informado a medida do hodômetro no momento do abastecimento.

Retirada: Este link trará uma tabela contendo todas as retiradas de veículos desta central de veículos.

Posto: Este link traz os postos cadastrados no sistema.

Ver figura 45.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image86.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image86.png)

O processo encerra-se clicando no botão incluir.

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Abastecimento > Alteração
\`\`\`

A alteração será possível clicando no sub-menu alteração.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Abastecimento > Exclusão
\`\`\`

A exclusão será possível clicando no sub-menu exclusão.
`,
  "Baixa de itens obrigatórios": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Baixa de itens obrigatórios > Inclusão
\`\`\`

Cód sequêncial: Este campo é preenchido automaticamente pelo sistema.

Tipo de baixa: Este link trará todas as alternativas de baixa cadastradas no sistema, permitindo ao usuário especificar o tipo de baixa dos itens obrigatórios.

Item: Este link traz todos os itens obrigatórios cadastrados no sistema, desde que estes itens estejam vinculados a algum carro da central em que se está logado.

Data: Neste campo a data virá automaticamente preenchida com a data do dia, permitindo também a alteração da mesma caso seja necessária, clicando no calendário “D”.

Hora: Neste campo deverá ser informado a hora em que o a baixa do item ocorreu ( este campo é útil principalmente nos casos em que o tipo de baixa ocorre em função de roubos, furtos e etc...).

Motivo: Neste campo é informado a ocorrência da baixa, as situações ou observações que levaram a baixa do item.

Ver figura 46.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image34.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image34.png)

O processo encerra-se clicando no botão incluir.

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Baixa de itens obrigatórios > Alteração
\`\`\`

A alteração será possível através do sub-menu alteração, onde os mesmos campos da tela de inclusão serão disponibilizados para o usuário alterar conforme necessário.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Procedimentos > Baixa de itens obrigatórios > Exclusão
\`\`\`

A exclusão será possível clicando no sub-menu exclusão.
`,
  "Processar Tabela ANP": `
Conteudo não encontrado.
`,
  "Autorização de Circulação": `
Conteudo não encontrado
`,
  "Veiculos": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Veículos > Inclusão
\`\`\`

Rotina que permite a inclusão de veículos, está é dividida em 3 abas, sendo elas:

1. Dados do veículo
2. Itens obrigatório
3. Utilização
4. Central de Veículos

## 1. Dados do veículo

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image120.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image120.png)

- **Código do veículo**: Este código é gerado automaticamente pelo e-cidade.
- **Placa**: Neste campo é informado a placa do veículo.
- **Responsável**: Neste campo informa-se o nome do motorista responsável pelo veículo que está sendo incluso. Serão listados os que encontram-se cadastrados na rotina: **DB:PATRIMONIAL > Veículos > Cadastros > Motoristas**
- **Tipo**: Neste campo será informado o tipo do veículo, especificando-o por sua utilidade. Serão listados os que encontram-se cadastrados na rotina: **DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Tipos**
- **Marca**: Neste campo será informado a marca do veículo (fabricante). Serão listados os que encontram-se cadastrados na rotina: **DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Marcas**
- **Modelo**: Neste campo será informado o modelo do veículo. Clicando sobre o botão de busca serão listados os que encontram-se cadastrados na rotina: **DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Modelos**
- **Cor**: Neste campo será informado a cor do veículo. Serão listados as que encontram-se cadastradas na rotina: **DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veiculos > Cores**
- **Procedência**: Neste campo serão listados as procedências que encontram-se cadastradas na rotina: **DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Procedências**
- **Categoria**: Neste campo serão listadas as categorias que encontram-se cadastradas na rotina: **DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Categorias**
- **N° do chassi**: Neste campo será informado o número do chassi do veículo cadastrado (esta informação se encontra no certificado de registro do veículo).
- **Renavam**: Neste campo será informado o número do renavam do veículo cadastrado (esta informação se encontra no certificado de registro do veículo).
- **Placa em números**: Neste campo será informado as letras e os números da placa do veículo em dígitos.
- **Número do certificado**: Neste campo será informado o número do certificado de registro e licenciamento do veículo (esta informação se encontra no certificado de registro do veículo).
- **Quantidade potência**: Neste campo será informado a potência do motor do veículo cadastrado (esta informação se encontra no certificado de registro do veículo).
- **Tipos de abastecimento**: Serão listados os tipos de controle para consumo de abastecimento do veículo cadastrados na rotina abaixo, por padrão normalmente hodômetro ou horímetro. **DB:PATRIMONIAL > Veículos > Cadastros > Tipo de Abastecimento de Veículo**
- **Medida inicial**: Neste campo será informado a medida do hodômetro ou horímetro (conforme determinação de cada localidade) inicial com a qual o veículo ingressa na frota da instituição.
- **Quantidade capacidade**: Neste campo será informado o limite da capacidade do veículo, conforme o propósito do veículo, ou seja, se for um veículo de carga medida em toneladas, se informará a opção carga/tonelada e mais a quantidade de toneladas suportada por este veículo. Os tipos de capacidades são incluídos através da rotina: **DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Tipo de Capacidade**
- **Data de aquisição**: Neste campo será informado a data em que foi adquirido o veículo.
- **Combustível**: Neste campo será informado o combustível do veículo. Clicando sobre o botão de busca serão listados os que encontram-se cadastrados na rotina: **DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veiculos > Combustíveis**
- **Categoria CNH exigida**: Neste campo deverá ser informado, a categoria da carteira nacional de habilitação, que o motorista responsável pelo veículo deve ter para guiar este veículo. As Categorias CNH são cadastradas através da rotina: **DB:PATRIMONIAL > Veículos > Cadastros > Dados dos motoristas > Categoria CNH**
- **Ano de fabricação**: Neste campo será informado tão somente o ano de fabricação do veículo.
- **Ano de modelo**: Neste campo será informado tão somente o ano do modelo do veículo.
- **Município**: Neste campo será informado o município onde o veículo passará a ser utilizado, consequentemente de onde tem seu emplacamento vigente.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image39.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image39.png)
[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image52.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image52.png)

O processo de inclusão nesta aba encerra-se ao clicar no botão . Caso o usuário deseja realizar uma consulta rápida entre os que já estão cadastrados basta clicar em .

## 2. Itens obrigatório

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image71.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image71.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image20.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image20.png)
Nesta tela serão informados os itens obrigatórios que cada veículo terá. Para selecionar entre os cadastrados basta clicar em , serão listados os que encontram-se devidamente cadastrados através da rotina:

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Itens obrigatórios
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image68.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image68.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image38.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image38.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image21.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image21.png)
Após selecionar o item, basta clicar em para finalizar a inclusão.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image99.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image99.png)
Uma vez feito isto, o item será listado logo abaixo em “Itens”, para conferência dos que já encontram-se referenciados no veículo. Para exclusão de um item obrigatório basta clicar em na última coluna descrita como “Opções”.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image31.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image31.png)

## 3. Utilização

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image105.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image105.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image106.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image106.png)
Nesta tela é possível realizar a inclusão de utilização a respeito do veículo. Para selecionar entre os cadastrados basta clicar em , serão listados os que encontram-se devidamente cadastrados através da rotina:

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos Veículos > Utilização de veículos
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image22.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image22.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image4.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image4.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image21.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image21.png)
Após selecionar o item, basta clicar em para finalizar a inclusão.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image99.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image99.png)
[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image84.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image84.png)
Uma vez feito isto, a utilização será listada logo abaixo em “Utilização”, para conferência dos que já encontram-se referenciados no veículo. Para exclusão de um item obrigatório basta clicar em na última coluna descrita como “Opções” ou em para efetivar alteração da Utilização já cadastrada.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image75.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image75.png)

Selecionado a Utilização CONVÊNIO será listado o campo “Convênio” para que seja informado qual conforme mostra a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image89.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image89.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image113.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image113.png)
Para selecionar entre os disponíveis basta clicar em .

Selecionado a Utilização PRÓPRIO será listado o campo “Cod. Bem” para que seja informado qual conforme mostra a imagem abaixo:

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image101.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image101.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image27.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image27.png)
Para selecionar entre os disponíveis basta clicar em .

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image13.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image13.png)
Tanto para “CONVÊNIO” como para “PRÓPRIO” não é obrigatório informar os campos adicionais, porém, poderá ser informado somente uma única utilização. Para concluir a ação de inclusão clique sobre .

## 4. Central de Veículos

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image102.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image102.png)

Nesta tela será possível informar a central de veículos a que pertence o veículo.

Como pré-requisito requer que a “Central de Veículos” esteja devidamente cadastrada na rotina abaixo:

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Centrais de Veículos
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image50.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image50.png)
Para selecionar uma central de veículos basta clicar em , serão listadas as que encontram-se cadastradas no e-cidade. Para concluir basta selecionar qual deseja.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image46.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image46.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image59.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image59.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image43.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image43.png)
Conclui-se a ação clicar no botão .

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image99.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image99.png)
Uma vez feito isto, a central de veículo será listada logo abaixo em “Itens”, para conferência dos que já encontram-se referenciados ao veículo. Para exclusão de uma central de veículo basta clicar em na última coluna descrita como “Opções”.

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Veículos > Alteração
\`\`\`

Permite a alteração de qualquer informação atribuída ao veículo, se tratando de dados do veículo, itens obrigatórios, utilização e central de veículos.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Veículos > Exclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)
Permite a exclusão de veículos que estão cadastrados no e-cidade. Ao acessar a rotina, será listado os mesmos, podendo ser efetivada a busca por diversas informações, aplicando filtros como modelo, marca, tipo... conclui-se a ação clicando em .
`,
  "Dados dos motoristas": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos motoristas > Categoria CNH > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image1.png)
[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image11.png)
Ao usuário será necessário informar a “Descrição Categoria CNH” e clicar em , ainda possui a opção de clicar em e efetivar uma busca entre as categorias CNH já cadastradas no e-cidade.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image28.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image28.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos motoristas > Categoria CNH > Alteração
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image9.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image9.png)
[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image32.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image32.png)
Permite a alteração do campo “Descrição Categoria CNH” atribuído a Categoria CNH. Ao acessar a rotina serão listados as que encontram-secadastradas no e-cidade, podendo ser efetivado a busca pelo código, descrição ou apenas clicando sobre a linha da descrição da categoriaCNH, conclui-se a ação clicando em , para alternar entre a categoria selecionada, basta clicar em .

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Dados dos motoristas > Categoria CNH > Exclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image10.png)
Permite a exclusão de categorias de CNH que estão cadastrados no e-cidade. Ao acessar a rotina, será listado as mesmas, podendo ser efetivada a busca pelo código da categoria, descrição ou simplesmente clicando sobre a linha da categoria de CNH, conclui-se a ação clicando em .
`,
  "Motoristas": `
## Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Motoristas > Inclusão
\`\`\`

Rotina que permite a inclusão de motoristas, está é dividida em 2 abas, sendo elas:

1. Dados do motorista
2. Central de Abastecimento

1.Dados do motorista

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image3.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image3.png)

- Código do motorista: Este código é gerado automaticamente pelo e-cidade.
- [![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image36.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image36.png)
Motorista: Após clicar sobre poderá ser apresentando uma tela de pesquisa onde é apresentada uma busca por Cadastro Geral do Município (CGM) ou funcionários ativos, essa opção pode ser parametrizada alterando “Integração com módulo Pessoal” na rotina:

DB:PATRIMONIAL > Veículos > Procedimentos > Manutenção de Parâmetros
- Nº habilitação: Neste campo será informado o número da carteira de habilitação (CNH) do motorista escolhido no campo anterior.
- [![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image63.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image63.png)
Categoria CNH: Após clicar sobre serão listadas as categorias que encontram-se devidamente cadastradas através da rotina:

DB:PATRIMONIAL > Veículos > Cadastros > Dados dos motoristas > Categoria CNH
- [![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image90.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image90.png)
Validade: Este campo traz a opção de o usuário escolher se prefere digitar a data de validade da CNH do motorista que está sendo incluso ou clicar sobre e selecionar no calendário.
- Primeira habilitação: Este campo traz a opção de o usuário escolher se prefere digitar a data da primeira CNH do motorista cadastrado, ou clicando na janela a direita do campo em cima da letra ” D “ se abrirá o calendário onde o usuário poderá clicar sobre a data de validade e esta se transpõe ao campo 'validade'.
- Situação do condutor: Este link uma clicado, abre uma tela onde será possível informar em que situação se encontra o motorista cadastrado(Ativo ou Inativo).

O botão pesquisar traz a lista dos motoristas cadastrados, um recurso interessante afim de confirmar se o motorista à ser cadastrado não encontra-se na base se fazendo necessário somente a atualização.

Ao final, clica-se no botão “Incluir”, você será direcionado para aba “Central de abastecimento”.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image55.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image55.png)

Central: Este link de pesquisa retorna todas as centrais cadastradas na rotina abaixo:

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Centrais de Veículos
\`\`\`

Com esta informação, fica especificado a qual central este motorista encontra-se.

Data inicial: determina a data inicial ao qual o motorista passou a fazer parte desta central.

Data final: determina a data limite/final que este motorista faz parte desta central.

É válido dizer que o campo Data final é opcional, pois se o motorista que está sendo cadastrado para esta central não tem previsão de deixar os serviço da mesma, não será necessário que o campo “Data final” seja preenchido.

Cada central a que o motorista for ligado após clicar no botão incluir, passará a ser exibida nesta mesma tela, logo abaixo na caixa “Centrais”.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image17.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image17.png)

Para alteração de informação como data inicial/final basta clicar em “A”.

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Motoristas > Alteração
\`\`\`

Permite a manutenção de dados de um determinado motorista, alteração destes dados será possível clicando no sub-menu “Alterar”, ao fazê-lo o Cadastro geral do Município será aberto e o item apontado poderá ser alterado, tanto na aba Dados do Motorista, quanto na aba Central de abastecimento. Na aba “ Central de abastecimento” a alteração para ser realizada deverá ser indicada entre as centrais ali disponíveis na caixa “centrais”, clicando-se no “A” de “alterar” a direita do nome da central, assim uma vez feito isto, a alteração será consumada quando os dados forem confirmados clicando-se no botão “alterar”.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Motoristas > Exclusão
\`\`\`

A exclusão dos dados deste menu “motoristas”, é feita no sub menu exclusão.
`,
  "Oficinas": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Oficinas > Inclusão
\`\`\`

**Código da oficina:** Este campo é preenchido automaticamente pelo sistema.

**Oficina:** Este link traz o cadastro geral do município, uma vez clicado sobre o nome desejado, o campo é preenchido e o processo pode ser encerrado clicando-se no botão “incluir”.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image60.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image60.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Oficinas > Alteração
\`\`\`

A alteração destes dados poderá ser feito clicando-se no sub-menu alteração .

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Oficinas > Exclusão
\`\`\`

A exclusão destes dados poderá ser feito clicando-se no sub-menu exclusão .
`,
  "Tipo de Serviço": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Tipo de Serviço > Inclusão
\`\`\`

Este menu é destinado a registrar os tipos de serviços relacionados a manutenção dos veículos da frota Municipal, todo o serviço poderá ser registrado de forma genérica ( elétrica, geometria, mecânica, eletrônica, e etc...).

Código de tipo de serviço: Este campo é preenchido automaticamente pelo sistema.

Descrição do tipo de serviço: Neste campo deverá ser informado o tipo de serviço ao qual os veículos poderão ser submetidos.

O botão pesquisar uma vez clicado, traz a tela contendo todos os tipos de serviços já cadastrados.

Uma vez todos os campos preenchidos, o processo encerra-se clicando-se no botão “incluir”.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image114.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image114.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Tipo de Serviço > Alteração
\`\`\`

A alteração do tipo de serviço poderá ser feita clicando-se no sub-menu alteração.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Tipo de Serviço > Exclusão
\`\`\`

A exclusão do tipo de serviço poderá ser feita clicando-se no sub-menu exclusão.
`,
  "Postos": `
## Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Postos > Inclusão
\`\`\`

Código do posto: Este campo é preenchido automaticamente pelo sistema.

Tipo: Este campo deve ser preenchido clicando-se na seta ao lado do campo, este campo dá conta se o posto a ser cadastrado é interno ou externo. Se o tipo escolhido for “interno” ao clicar no link “depart:” a lista trazida por este link será a lista de departamentos adastrados no módulo configurações, se o tipo escolhido for “externo” ao clicar no link “depart:” a lista trazida por este será o Cadastro Geral do Município. Ver figura 25:

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image56.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image56.png)

O processo de inclusão termina ao clicar no botão “incluir”.

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Postos > Alteração
\`\`\`

A alteração poderá ser efetuada ao se clicar no sub-menu alteração.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Postos > Exclusão
\`\`\`

A exclusão poderá ser efetuada ao se clicar no sub-menu exclusão.
`,
  "Tipo de baixa veiculo": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Tipo de baixa veículo > Inclusão
\`\`\`

Neste cadastro será informado as possíveis formas de baixa que os veículos da frota Municipal poderão ocorrer (roubo, furto, sinistro, doação, alienação...).

Cód sequencial: Este campo será preenchido automaticamente pelo sistema.

Descrição: Neste campo serão informados os tipos de baixas que os veículos poderão sofrer. Ver figura 27:

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image77.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image77.png)

O processo se encerra ao clicar no botão “incluir”.

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Tipo de baixa veículo > Alteração
\`\`\`

A alteração será possível clicando-se no sub-menu alteração.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Tipo de baixa veículo > Exclusão
\`\`\`

A exclusão será possível clicando-se no sub-menu exclusão.

O botão pesquisar, uma vez clicado trará a lista de motivos de baixas cadastrados no sistema.
`,
  "Itens obrigatorios": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Itens obrigatórios > Inclusão
\`\`\`

Semelhante ao cadastro de “tipo de baixa de veículos”, este cadastro atenderá o controle de baixa dos itens obrigatórios relacionados aos veículos da frota Municipal, especificando o tipo de baixa (roubo, extravio,dano, e etc...) pelo qual o item sofreu a baixa.

A inclusão dos motivos de baixa:

Código sequêncial: Este campo será preenchido automaticamente pelo sistema.

Descrição: Neste campo será informado a descrição do motivo de baixa dos veículos. Ver figura 29:

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image108.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image108.png)

O botão de pesquisar trará a tela contendo todos os tipos de baixa de itens já cadastrados no sistema.

O processo encerra-se clicando no botão “incluir”.

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Itens obrigatórios > Alteração
\`\`\`

Será possível alterar os tipos de baixa dos itens clicando-se no sub-menu alteração.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Itens obrigatórios > Exclusão
\`\`\`

Será possível alterar os tipos de baixa dos itens clicando-se no sub-menu alteração.
`,
  "Tipo de baixa de itens": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Tipo de baixa de itens > Inclusão
\`\`\`

Semelhante ao cadastro de “tipo de baixa de veículos”, este cadastro atenderá o controle de baixa dos itens obrigatórios relacionados aos veículos da frota Municipal, especificando o tipo de baixa (roubo, extravio,dano, e etc...) pelo qual o item sofreu a baixa.

A inclusão dos motivos de baixa:

Código sequêncial: Este campo será preenchido automaticamente pelo sistema.

Descrição: Neste campo será informado a descrição do motivo de baixa dos veículos. Ver figura 29:

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image108.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image108.png)

O botão de pesquisar trará a tela contendo todos os tipos de baixa de itens já cadastrados no sistema.

O processo encerra-se clicando no botão “incluir”.

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Tipo de baixa de itens > Alteração
\`\`\`

Será possível alterar os tipos de baixa dos itens clicando-se no sub-menu alteração.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Tipo de baixa de itens > Exclusão
\`\`\`

Será possível alterar os tipos de baixa dos itens clicando-se no sub-menu alteração.
`,
  "Convênios de uso veicular": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Convênios de uso veicular > Inclusão
\`\`\`

Neste cadastro será informado o nome das pessoas jurídicas ou físicas com quem a Prefeitura mantem contrato de convênio para uso veicular.

Código sequêncial: Este campo será automaticamente preenchido pelo sistema.

Descrição: Neste campo será informado o nome da instituição ou pessoa física com quem está se firmando contrato de uso veicular.

CGM: Este link é destinado a fazer a ligação do nome colocado no campo “Descrição” com a sua inscrição no CGM (Cadastro Geral do Município).

Observações: Este campo de uso não obrigatório, serve para adicionar alguma observação em relação a alguma das partes envolvidas no convênio cadastrado.

O botão pesquisar, uma vez clicado, apresentará todos os nomes já cadastrados com quem a Prefeitura mantem contrato de convênio de uso veicular. Ver figura 30:

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image16.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image16.png)

O processo encerra-se clicando no botão “incluir”.

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Convênios de uso veicular > Alteração
\`\`\`

Será possível alterar os convênios de uso veiculares clicando-se no sub-menu alterar.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Convênios de uso veicular > Exclusão
\`\`\`

Será possível excluir os convênios de uso veiculares clicando-se no sub-menu exclusão.
`,
  "Centrais de Veículos": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Centrais de Veículos > Inclusão
\`\`\`

O cadastro Centrais de veículos traz quatro abas:

Dados da Central;

Departamentos;

Motoristas;

Veículos.

A figura 31 traz a aba Dados do Central

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image104.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image104.png)

Código sequêncial: Este campo é preenchido automaticamente pelo sistema.

Depto: Este link uma vez clicado abrirá uma tela de pesquisa onde se terá a relação dos departamentos cadastrados no módulo configurações.

O botão “pesquisar” traz somente os departamentos cadastrados como centrais.

O processo segue clicando no botão incluir.

A figura 32 traz a aba Departamentos

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image88.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image88.png)

Nesta tela, o campo “Central” já vem preenchido com os dados da primeira aba, restando apenas marcar os departamentos que ficarão ligados a esta central.

O processo segue clicando no botão “atualizar”.

A figura 33 traz a aba Motoristas

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image26.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image26.png)

Motoristas: Este campo traz a lista de todos os motoristas cadastrados no sistema. Os campos de datas “inicial” e “final”, tanto podem serem preenchidos manualmente como podem ser preenchidos pelo calendário, clicando nos ícones “D”.

O campo data final é um campo opcional, se ele for preenchido, o motorista relacionado terá uma data limite para fazer parte daquela central de veículos, caso este campo não seja preenchido o motorista relacionado terá sua permanência por tempo indefinido naquela central. Todos os motoristas que forem incluídos serão lançados na caixa logo abaixo chamada Motoristas.

O processo segue clicando no botão “incluir”.

A figura 34 traz a aba Veículos.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image6.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image6.png)

Código do veículo: Neste link, tem-se a relação dos carros cadastrados na Frota Municipal, uma vez escolhido o veículo aparecerá descrito neste campo com seu respectivo código, restando apenas confirmar o veículo clicando no botão incluir.

Todos os veículos cadastrados nesta central, aparecerão relacionados dentro da caixa Veículos, sendo nesta também permitido a Exclusão do veículo, clicando na letra “E” dentro da coluna “opções”.

### Alteração

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Centrais de Veículos > Alteração
\`\`\`

A alteração serão permitidas através do sub-menu alteração.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Veículos > Cadastros > Centrais de Veículos > Exclusão
\`\`\`

A exclusão serão permitidas através do sub-menu exclusão.
`,
  "Veículos": `
\`\`\`
DB:PATRIMONIAL > Veículos > Consultas > Veículos
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image66.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image66.png)

Ao abrir a tela de consulta surgirá os links “código do veículo”, “placa”, “cód. Central” que, qualquer um deles ao ser escolhido e informado o código, a seguir clicando no botão “processar”, abrirá uma tela contendo informações sobre o veículo apontado, restando apenas consultar os seguintes botões:

Retiradas: Este botão uma vez clicado trará a lista de todas as retiradas deste veículo escolhido.

Abastecimentos: Este botão trará todos os registros dos abastecimentos do veículo escolhido.

Manutenções: Este botão trará a lista de todas as manutenções que foram realizadas no veículo escolhido.

Manutenção de Medidas: este botão trará a lista de todas as manutenções de medidas realizadas no veículo escolhido.

Impressão: Este botão trará um relatório completo do veículo escolhido, contendo nele todas as dos botões anteriores.

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image57.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image57.png)

Abastecimentos

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image115.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image115.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image2.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image2.png)

[![](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image14.png)](https://e-cidade.wiki.br/patrimonial/veiculos/files/veiculos_tecnico/image14.png)
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
  "Solicitações - Consulta Compras": `
Esta rotina possibilita a consulta e acompanhamento das principais fases do processo de aquisição de materiais/serviços realizados pela administração pública.

\`\`\`
DB:PATRIMONIAL > Compras > Consultas > Solicitações
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image137.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image137.png)

Conforme a imagem acima, o usuário poderá digitar o número da solicitação de compras no campo indicado ou, caso não saiba, clicar sobre *"Número da solicitação"* e aplicar filtros adicionais, como intervalo de data de solicitação.

Filtros complementares podem ser utilizados inserindo conteúdo entre o caractere % para busca que contenha determinada expressão ou informação exata no campo “Indique o Conteúdo”. Em seguida, clique sobre o link de uma das colunas disponíveis, como resumo, departamento ou nome do usuário.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image237.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image237.png)

Junto com essa forma de filtro, ainda é possível alterar a quantidade padrão de listagem (15), bem como mostrar resultados diferentes, retornando registros únicos entre a coluna selecionada.

Após selecionar a Solicitação de Compras e clicar em "Enviar" (ou "Pesquisar", caso tenha acessado o link), será exibida a seguinte tela:

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image70.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image70.png)

***Dados da Solicitação:***

- **Solicitação de Compras:** N° sequencial gerado automaticamente pelo sistema e atribuído à solicitação de compras no momento da inclusão.
- **Processo Administrativo (P.A):** processo administrativo informado no momento da inclusão da solicitação de compras.
- **Departamento:** departamento utilizado durante a inclusão da solicitação de compras.
- **Usuário Solicitante:** usuário que realizou a inclusão da solicitação de compras, determinado no canto superior direito da tela do e-cidade.
- **Data da Solicitação:** data de inclusão da solicitação de compras, exibida na parte inferior direita da tela no momento da inclusão.
- **Instituição:** instituição em que o usuário estava no momento da inclusão da solicitação de compras.
- **Tipo Solicitação:** definido na primeira tela da inclusão, podendo ser Normal, Pacto ou Registro de Preço.
- **Resumo:** resumo definido no momento da inclusão da solicitação de compras.
- **Situação:** indica se a solicitação está "Liberado" ou "Não Liberado".
- **Anulada:** indica se a solicitação está anulada (SIM ou NÃO).
- **Fornecedor Sugerido:** se aplicável, exibe o fornecedor informado na última aba durante a inclusão da solicitação de compras.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image329.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image329.png)

***Itens/Dotações:***

Retorna os dados dos materiais/serviços requisitados, bem como a dotação a ser utilizada para esta aquisição.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image42.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image42.png)

***Orçamento de Solicitações:***

Se existente, retorna os dados relativos aos orçamentos de solicitações de compras.

***Processo de Compras:***

Se existente, retorna os dados relativos ao processo de compras.

***Orçamento de Processo de Compras:***

Se existente, retorna os dados relativos ao orçamento do processo de compras.

***Licitação:***

Caso esta solicitação de compras esteja vinculada a uma licitação, ela será listada através desse botão.

***Autorização de Empenho:***

Se houver, retorna o código de autorização e empenho gerados pelo módulo Compras. O usuário poderá obter informações relativas à autorização de empenho e ao empenho clicando nos links destes códigos.

[![](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image43.png)](https://e-cidade.wiki.br/patrimonial/compras/files/compras_tecnico/image43.png)

***Pendências:***

Caso tenha sido lançada alguma pendência durante o trâmite da solicitação de compras, ela será listada através desse botão.
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
  "Bens - Consulta Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Consultas > Bens
\`\`\`

Através dessa rotina de consulta é possível obter todos os dados relativos a um determinado bem patrimonial.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image58.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image58.png)

Os filtros possíveis de serem utilizados:

- **Placa:** número da placa identificadora do bem.
- **Código do bem:** código do bem atribuído pelo sistema.
- **Departamento:** código do departamento no qual se encontra o bem.
- **Características adicionais do bem:** representa o campo observações contido no cadastro de bens patrimoniais.

Caso desconheça o código do bem ou departamento, poderá optar por pesquisá-los, clicando nos links [código do bem] ou [departamento].

Poderá ainda acrescentar na consulta as características adicionais do bem. Para isso, deve utilizar o filtro **Características adicionais do bem**, configurando-o como "SIM".

Feito isso, é possível gerar o relatório de bens clicando no botão gerar relatório ou consultá-lo através do botão pesquisa.

A pesquisa gerada trará o código e a descrição do bem, o estrutural de sua classificação, o código e o nome do departamento no qual o bem está lotado, o código e o nome do fornecedor, a data de aquisição, o valor do bem e o número de sua placa identificadora.

Caso o bem esteja segurado, o relatório trará os dados da seguradora e da apólice de seguro. Por fim, pode-se observar nesta consulta os históricos relativos ao bem e sua placa identificadora.

No botão [gerar relatório], o sistema irá gerar um relatório com as mesmas informações acima descritas.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image68.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image68.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image57.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image57.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image8.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image8.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image29.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image29.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image16.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image16.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image31.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image31.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image73.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image73.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image90.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image90.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image12.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image12.png)
`,
  "Historico dos Bens - Consulta Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Consultas > Histórico dos bens
\`\`\`

Nesta consulta é possível obter informações sobre o histórico do bem, enquanto este estiver sob o domínio da administração pública.

Para consultar um bem, o usuário deve informar:

- **Código do bem:** código do bem atribuído pelo sistema.
- **Características adicionais do bem:** representa o campo observações contido no cadastro de bens patrimoniais.

Caso desconheça o código, pode optar por pesquisá-lo clicando no link [código do bem].

Poderá ainda acrescentar na consulta as características adicionais do bem. Para isso, o filtro características adicionais do bem deverá estar marcado como "SIM".

Feito isso, é possível gerar o relatório do histórico do bem clicando no botão gerar relatório ou consultá-lo através do botão [pesquisa].

Na pesquisa, o sistema abrirá uma tela contendo os dados atuais do bem: o código do bem, o departamento onde se encontra lotado, o número estrutural de sua classificação e a data de sua aquisição.

Abaixo, trará o histórico propriamente dito, que conterá informações relativas à data da inclusão do bem no sistema, seu departamento de origem, seu departamento destino, seu histórico e situação do bem, transferências e baixa, se houver.

No botão gerar relatório, o sistema gerará um relatório com as mesmas informações acima descritas.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image71.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image71.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image74.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image74.png)
`,
  "Consulta Empenho - Consulta Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Consultas > Consulta Empenho
\`\`\`

Permite a consulta de empenhos da instituição. Exibe os filtros com ícones:

- **Número do empenho:** Permite buscar por número do empenho, sequencial do empenho, nome/razão social e CNPJ/CPF.
- **Sequencial do empenho:** Permite buscar por número do empenho, sequencial do empenho, nome/razão social e CNPJ/CPF.
- **Reduzido:** Permite buscar pelo reduzido ou pelo estrutural da despesa.
- **Código do material:** Permite buscar por código do material, descrição do material e se ativo/inativo.
- **Numcgm:** Permite buscar pelo número do CGM do contratado, nome/razão social e CNPJ/CPF.
- **Data de emissão:** Permite preencher período.
- **Ordem:** Permite buscar pelo número da ordem de compra, código do elemento e valor da ordem.
- **Processo administrativo:** Permite preencher o campo com número do processo.

Após selecionar o empenho, terá informações de resumo da movimentação, itens do empenho, lançamentos contábeis, notas de liquidação, pagamento, ordens de compra, solicitações de compra, processo de compras, agenda de pagamentos, contratos e imprimir a consulta. Também traz as informações cadastradas na emissão do empenho:

![Imagem da documentação](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image43.png)
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
  "Cadastro de Unidades - Material": `
A unidade nada mais é do que a caracterização da forma como o material deverá ser entregue para a administração pública. Por exemplo, a unidade de um determinado material poderá ser pacote, lata, kilo, fardo, etc.

### Inclusão

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Cadastro de Unidades > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image181.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image181.png)

- **Código da unidade:** número sequencial atribuído automaticamente pelo e-cidade à unidade que está sendo cadastrada;
- **Descrição da unidade:** nome da unidade que está sendo cadastrada;
- **Abreviatura da descrição:** abreviatura do nome da unidade que está sendo cadastrada;
- **Se usa a quantidade da unidade:** estando a quantidade da unidade selecionada como **SIM**, será possível indicar na Solicitação de Compras, além da unidade, a quantidade desta unidade a ser adquirida.

**Exemplo:** podemos citar a unidade Caixa, cuja abreviatura é **cx**. Nesta situação é possível indicar a quantidade desta unidade a ser adquirida, que no exemplo seria 50 cx.

- **Aceita casas decimais:** estando selecionada como **SIM**, o sistema permitirá a utilização de casas decimais para esta unidade em algumas rotinas, como na entrada da ordem de compra. Dependendo do parâmetro, será permitida a digitação de valores com ou sem casas decimais;
- **Código do Tribunal:** campo livre para referenciar o código específico do tribunal.

### Alteração

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Cadastro de Unidades > Alteração
\`\`\`

Permite alterar informações incluídas para uma unidade de medida no e-cidade.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Cadastro de Unidades > Exclusão
\`\`\`

Permite excluir uma unidade inclusa no e-cidade.

**Nota:** a exclusão somente será possível se a unidade cadastrada ainda não tiver sido utilizada em uma solicitação de compras.
`,
  "Material - Consulta Material": `
\`\`\`
DB:PATRIMONIAL > Material > Consultas > Material
\`\`\`

Rotina que permite ao usuário consultar o estoque de um material específico, entre outras informações.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image134.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image134.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image223.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image223.png)

Como filtro, há o código do material, que pode ser informado no campo indicado. Caso o usuário o desconheça, poderá utilizar filtros complementares para identificar o material desejado.

Após selecionar o material, é exibida uma tela separada em **Dados do Material** e **Movimentações**.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image163.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image163.png)

### Dados do Material

Exibe informações como código do material, descrição, quantidade total em estoque, valor total em estoque, quantidade total reservada e preço médio.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image262.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image262.png)

### Movimentações

- **Estoque:** retorna os registros de depósitos em que existe o material consultado, a quantidade e o valor em estoque para cada depósito.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image303.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image303.png)

- **Lançamentos:** mostra todas as movimentações do material no estoque.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image125.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image125.png)

Os tipos de movimentação mais comuns são implantação, entrada de ordem de compra, transferência, entrada manual, saída manual e devolução de material.

Para facilitar a consulta das movimentações em determinado depósito, o sistema permite selecioná-lo na caixa **Departamento** e filtrar por tipo de lançamento na caixa **Lançamento**.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image53.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image53.png)

- **Requisições:** mostra todas as requisições de saída do material do estoque. O recurso no início da coluna **Código da Requisição** permite visualizar os materiais e dados contidos na requisição de saída.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image284.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image284.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image61.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image61.png)

- **Atendimentos:** exibe atendimentos realizados para determinadas requisições.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image152.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image152.png)

- **Devoluções:** mostra todas as devoluções efetuadas para determinado atendimento do material consultado.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image2.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image2.png)

- **Ponto de Pedido:** mostra as quantidades definidas para o material em relação ao estoque mínimo, máximo e ponto de pedido;
- **Lotes:** exibe os lotes em que o material está contido;
- **Nota Fiscal:** mostra as informações de nota fiscal relacionadas ao material;
- **Imprimir:** permite emitir relatório com as informações consultadas: Estoque, Lançamentos, Requisições, Atendimentos, Devoluções, Ponto de Pedido, Lotes e Nota Fiscal.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image206.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image206.png)
`,
  "Ordens de Compra - Consulta Material": `
\`\`\`
DB:PATRIMONIAL > Material > Consultas > Ordens de Compra
\`\`\`

Rotina que permite consultar uma ordem de compra e suas respectivas informações.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image68.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image68.png)

- **Código:** número sequencial gerado para a ordem de compra. Caso o usuário o desconheça, poderá aplicar filtros como data de emissão, nome/razão social e departamento.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image296.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image296.png)

- **Numcgm:** número sequencial atribuído ao CGM do fornecedor. É possível aplicar filtros adicionais; nesse caso, o e-cidade retorna todas as ordens de compra vinculadas ao fornecedor.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image17.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image17.png)

- **Empenho:** código do empenho. Caso o usuário o desconheça, poderá aplicar filtros adicionais.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image260.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image260.png)

- **Seq. Empenho:** número sequencial do empenho criado pelo e-cidade.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image242.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image242.png)

Após aplicar os filtros, acesse as informações da ordem de compra selecionada.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image187.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image187.png)

As informações são apresentadas de três formas:

- **Dados da Ordem de Compra:** exibe código da ordem, fornecedor, data de emissão, data de anulação quando houver, departamento, tipo de compra, total, valores lançado, a lançar e anulado, além de observações;
- **Itens:** retorna os itens da ordem com número e sequencial do empenho, código e descrição do material, sequencial do item, descrição da solicitação, quantidade, valor unitário, valor total e quantidade anulada;
- **Movimentações no Estoque:** retorna movimentações de entrada da ordem de compra, incluindo código e material, quantidade, quantidade de entrada, valor, almoxarifado e tipo de movimentação.
`,
  "Consulta Empenho - Consulta Material": `
\`\`\`
DB:PATRIMONIAL > Material > Consultas > Consulta Empenho
\`\`\`

Permite consultar os empenhos da instituição. A rotina disponibiliza os seguintes filtros:

- **Número do empenho:** busca por número ou sequencial do empenho, nome/razão social e CNPJ/CPF;
- **Sequencial do empenho:** busca por número ou sequencial do empenho, nome/razão social e CNPJ/CPF;
- **Reduzido:** busca pelo reduzido ou estrutural da despesa;
- **Código do material:** busca por código ou descrição do material e por situação ativo/inativo;
- **Numcgm:** busca pelo número do CGM do contratado, nome/razão social e CNPJ/CPF;
- **Data de emissão:** permite informar um período;
- **Ordem:** busca pelo número da ordem de compra, código do elemento e valor da ordem;
- **Processo administrativo:** permite informar o número do processo.

Após selecionar o empenho, é possível consultar resumo da movimentação, itens do empenho, lançamentos contábeis, notas de liquidação, pagamentos, ordens de compra, solicitações de compra, processo de compras, agenda de pagamentos, contratos e imprimir a consulta. A rotina também mostra as informações cadastradas na emissão do empenho.

[![](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image43.png)](https://e-cidade.wiki.br/patrimonial/contratos/files/images_contratos_tecnico/image43.png)
`,
  "Controle de Validade - Consulta Material": `
\`\`\`
DB:PATRIMONIAL > Material > Consultas > Controle de Validade
\`\`\`

Rotina que permite consultar a validade de um ou mais materiais por determinado período. É possível filtrar por situação: Todos, Vencidos, À Vencer e No Prazo; e ordenar o resultado da busca por Código ou Alfabética.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image196.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image196.png)
`,
  "Implantação de estoque - Procedimentos Material": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Implantação de estoque > Inclusão
\`\`\`

### Alteração

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Implantação de estoque > Alteração
\`\`\`

### Cancelar

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Implantação de estoque > Cancelar
\`\`\`
`,
  "Movimentação - Relatório Material": `
\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Movimentação > Distribuição
\`\`\`

Através deste relatório é possível gerar o relatório de Distribuição, informando o Período Inicial e o Período Final desejados para emissão. Também é possível filtrar por Grupo/SubGrupo e visualizar o relatório agrupado por Grupo/Subgrupo.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image146.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image146.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image189.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image189.png)
`,
  "Cadastrais - Relatório Material": `
### Cadastro de Materiais

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Cadastrais > Cadastro de Materiais
\`\`\`

Este relatório lista todos os materiais existentes no cadastro do módulo Material.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image285.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image285.png)

- **Ordem:** define a ordem de apresentação dos materiais no relatório: Numérica ou Alfabética;
- **Tipo de Ordem:** define a ordem numérica sequencial dos materiais: Ascendente ou Descendente;
- **Listar:** permite filtrar os gêneros Materiais, Todos ou Serviços.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image178.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image178.png)

Escolhidos os filtros, gere o relatório pelo botão correspondente.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image287.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image287.png)
`,
  "Cadastrais - Página 2 - Relatório Material": `
### Cadastro de Unidades

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Cadastrais > Cadastro de Unidades
\`\`\`

Este relatório exibe as unidades cadastradas no módulo Material.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image77.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image77.png)

- **Ordem:** define a ordem de apresentação das unidades no relatório: Numérica, Alfabética ou Abreviatura;
- **Tipo de Ordem:** define a forma de ordenação dos dados: Ascendente ou Descendente.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image147.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image147.png)

Após selecionar os filtros, gere o relatório pelo botão correspondente.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image261.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image261.png)
`,
  "Cadastrais - Página 3 - Relatório Material": `
### Materiais Interligados

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Cadastrais > Materiais Interligados
\`\`\`

Este relatório exibe a ligação dos materiais existentes no cadastro do módulo Material com os materiais do módulo Compras.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image30.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image30.png)

- **Ordem:** define a ordem de apresentação dos materiais no relatório: Numérica ou Alfabética;
- **Tipo de Ordem:** define a ordem numérica sequencial dos materiais: Ascendente ou Descendente;
- **Listar Materiais:** define quais materiais cadastrados no módulo Material serão apresentados: Materiais, Todos ou Serviços;
- **Listar:** permite filtrar os gêneros Materiais, Todos ou Serviços.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image294.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image294.png)

Após escolher os filtros, gere o relatório pelo botão correspondente.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image259.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image259.png)
`,
  "Cadastrais - Página 4 - Relatório Material": `
### Tipo de Lançamentos

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Cadastrais > Tipo de Lançamentos
\`\`\`

Este relatório mostra os tipos de movimentações dos materiais nos depósitos. Essas movimentações são fixas no e-cidade e não podem ser modificadas.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image149.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image149.png)

- **Ordem:** define a ordem de apresentação dos lançamentos no relatório: Numérica ou Alfabética;
- **Tipo de Ordem:** define a ordem numérica sequencial dos lançamentos: Ascendente ou Descendente.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image274.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image274.png)

Após escolher os filtros, gere o relatório pelo botão correspondente.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image157.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image157.png)
`,
  "Documentos - Relatório Material": `
### Requisição de saída de materiais

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Documentos > Requisição de saída de materiais
\`\`\`

Através deste relatório é possível reemitir todas as requisições de saída de materiais dos depósitos cadastrados no e-cidade.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image43.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image43.png)

- **Tipos de Atendimento:** Atendidas, Parcialmente Atendidas, Não Atendidas ou Todas;
- **Requisições:** permite selecionar um intervalo de requisições a serem emitidas. Para reemitir apenas uma, informe o mesmo número nos dois campos;
- **Período:** permite filtrar o intervalo de datas em que as requisições de saída de materiais foram incluídas.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image96.jpg)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image96.jpg)
`,
  "Documentos - Página 2 - Relatório Material": `
### Termo de Transferência

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Documentos > Termo de Transferência
\`\`\`

Este relatório permite reemitir os termos de transferência de materiais entre depósitos. Para isso, informe um intervalo numérico das transferências que deseja reemitir.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image251.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image251.png)

- **Transferências de:** permite selecionar um intervalo de termos de transferência a serem emitidos. Para emitir somente um, informe o mesmo número nos dois campos;
- **Tipos de Período:** Data de Transferência ou Data do Recebimento;
- **Período:** permite filtrar um intervalo de datas em que foram incluídas as requisições de saída de materiais;
- **Código Almoxarifado:** permite selecionar um ou mais almoxarifados. Caso o usuário não conheça o código, poderá aplicar filtros complementares.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image90.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image90.png)
`,
  "Conferência - Relatório Material": `
# Conferência > Estoque por Item(Novo)

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Conferência > Estoque por Item (Novo)
\`\`\`
`,
  "Conferência - Página 2 - Relatório Material": `
# Saída de Material por departamento

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Conferência > Saída de Material por departamento
\`\`\`

Este relatório retorna informações relativas à saída de materiais do depósito. Nele é possível aplicar diversos filtros separados em 4 abas, que são elas:

1. Departamentos
2. Materiais
3. Usuários
4. Órgãos/Tipos de Saídas

(1)Departamentos

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image140.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image140.png)

- Opções: serve como parâmetro de informações.
- Com os departamentos selecionados: retorna todas as informações indicadas no filtro de departamentos.
- Sem os departamento selecionados: o usuário poderá optar por emitir os dados “excluindo” os departamentos selecionados (menos os selecionados);
- Departamentos: seleciona entre os departamentos no qual deseja realizar a conferência de saída de materiais.
- Grupo/Subgrupo: permite ao usuário selecionar entre os grupos/subgrupos disponíveis.
- Período: permite ao usuário selecionar entre um intervalo de tempo mensurado por data.
- Quebra por departamento: Se “SIM”, o e-cidade não irá considerar a parametrização do filtro Ordem, emitindo o relatório por departamento, quebrando a página para cada um dos departamentos selecionados;
- Ordem: seleciona a ordem de apresentação do relatório que poderá ser:
  - Alfabética
  - Código do material
  - Departamento
  - Data
- Tipo:
  - Analítico: retornará todas as movimentações de cada um dos materiais contidos nos depósitos selecionados.
  - Sintético - Por Data: retorna a quantidade e o valor total dos materiais, separando por departamento, grupo, subgrupo e datas.
  - Sintético - Somente Totais: retorna a quantidade e o valor total dos materiais em estoque, não considerando datas.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image62.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image62.png)

(2)Materiais

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image27.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image27.png)

- Opções: serve como parâmetro de informações.
- Com os departamentos selecionados: retorna todas as informações indicadas no filtro de departamentos.
- Sem os departamento selecionados: o usuário poderá optar por emitir os dados “excluindo” os departamentos selecionados (menos os selecionados);
- [![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image115.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image115.png)
- [![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image248.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image248.png)
Material: caixa de seleção que permite a escolha dos materiais a serem filtrados. Caso o usuário desconheça o código do material, poderá clicar em e aplicar filtros adicionais, após a seleção basta clicar em para que ocorra a inclusão do item. Esta opção permite ao usuário selecionar quantos materiais desejar.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image59.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image59.png)

(3)Usuários

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image91.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image91.png)

- Opções: serve como parâmetro de informações.
- Com os departamentos selecionados: retorna todas as informações indicadas no filtro de departamentos.
- Sem os departamento selecionados: o usuário poderá optar por emitir os dados “excluindo” os departamentos selecionados (menos os selecionados);
- [![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image214.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image214.png)
Usuário: caixa de seleção destinada a escolher usuários que o usuário deseja filtrar. Caso desconheça o código do usuário, poderá clicar em e aplicar filtros complementares a fim de localizá-lo.

(4)Órgãos / Tipos de Saída

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image47.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image47.png)

À esquerda (Órgãos - Departamentos de Destino)

O usuário poderá filtrar por órgãos que estejam vinculados ao departamento de destino, ou seja, o que foi destinado para a saída de material.

À direita (Tipos de Saída).

O usuário poderá filtrar entre os tipos de saídas disponíveis:

- Saída Manual
- Atendimento de Requisição
- Anulação da Entrada da Ordem de Compra
- Transferência de Saída

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image139.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image139.png)

Caso as abas não possuam nenhuma informação, o e-cidade irá gerar um relatório com todas as saídas de materiais, em todos os departamentos cadastrados. Vale ressaltar que o relatório somente será gerado através do botão na aba “Departamentos”.
`,
  "Conferência - Página 3 - Relatório Material": `
# Movimentação de Estoque

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Conferência > Movimentação de Estoque
\`\`\`
`,
  "Conferência - Página 4 - Relatório Material": `
# Notas

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Conferência > Notas
\`\`\`

Esta rotina permite a emissão de um relatório de notas fiscais lançadas no e-cidade, a mesma é dividida em 3 abas: Fornecedores, Elemento Item e Usuário.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image158.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image158.png)

- Opções: serve como parâmetro de informações.
- Com os departamentos selecionados: retorna todas as informações indicadas no filtro de departamentos.
- Sem os departamento selecionados: o usuário poderá optar por emitir os dados “excluindo” os departamentos selecionados (menos os selecionados);
- Fornecedores: neste filtro é possível selecionar o(s) fornecedor(es) para consulta;
- Período: permite a emissão do relatório de notas por determinado intervalo de datas.
- Período de recebimento: permite a emissão do relatório de notas por determinado intervalo de datas que caracterizam o recebimento do material.
- Opção de impressão: filtro referente às notas, o usuário poderá filtrar entre.
  - Todas
  - Liquidadas
  - Não liquidadas

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image103.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image103.png)

Por fim, o usuário poderá utilizar os filtros por Elemento item(2) e Usuário(3), seguindo a mesma lógica dos filtros dos relatórios anteriores.
`,
  "Conferência - Página 5 - Relatório Material": `
# Entrada das ordens de compra

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Conferência > Entrada das ordens de compra
\`\`\`

Rotina que permite consultar as ordens de compras existentes para um determinado material ou as emitidas a favor de um ou mais fornecedores.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image35.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image35.png)

- Código do material: código do material (módulo material);
- Opções: serve como parâmetro de informações.
- Com os fornecedores selecionados: retorna todas as informações indicadas no filtro de fornecedores.
- Sem os fornecedores selecionados: o usuário poderá optar por emitir os dados “excluindo” os fornecedores selecionados (menos os selecionados);
- Agrupar por: permite agrupar de quatro maneiras diferentes:
  - Por Nota
  - Por Ordem de Compra
- Ordenar: permite ordenar de quatro maneiras diferentes:
  - Fornecedor
  - Ordem de Compra
  - Nota
  - Data
- Fornecedores: neste filtro serão selecionados os fornecedores paraconsulta;
- Período: emite o relatório de ordens de compra por período determinado entre os campos.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image101.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image101.png)

O próximo exemplo deste relatório traz a indicação de um fornecedor. Nele o usuário irá visualizar todas as ordens de compras que estejam vinculadas ao fornecedor indicado.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image188.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image188.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image44.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image44.png)
`,
  "Conferência - Página 6 - Relatório Material": `
# Arquivos PIT

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Conferência > Arquivos PIT
\`\`\`
`,
  "Conferência - Página 7 - Relatório Material": `
# Anulações de Entrada de Ordem de Compra

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Conferência > Anulações de Entrada de Ordem de Compra
\`\`\`
`,
  "Conferência - Página 8 - Relatório Material": `
# Devolução de Material ao Almoxarifado

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Conferência > Devolução de Material ao Almoxarifado
\`\`\`
`,
  "Conferência - Página 9 - Relatório Material": `
# Entrada de Materiais por Departamentos

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Conferência > Entrada de Materiais por Departamentos
\`\`\`
`,
  "Conferência - Página 10 - Relatório Material": `
# Estoque de Ponto de Pedido

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Conferência > Estoque de Ponto de Pedido
\`\`\`

Este relatório exibe o ponto de pedido do estoque atual de todos os materiais de um determinado almoxarifado.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image93.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image93.png)

O mesmo retorna os seguintes filtros:

- Departamento
- Ordem
  - Alfabética
  - Numérica
- Tipo
  - Todos
  - Ponto de pedido

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image201.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image201.png)

Após escolher o(s) depósito(s), basta ao usuário clicar no botão para gerar o relatório.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image5.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image5.png)
`,
  "Conferência - Página 11 - Relatório Material": `
# Transferências em Aberto

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Conferência > Transferências em Aberto
\`\`\`
`,
  "Conferência - Página 12 - Relatório Material": `
# Fechamento do Estoque

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Conferência > Fechamento do Estoque
\`\`\`
`,
  "Conferência - Página 13 - Relatório Material": `
# Controle de Estoque (Novo)

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Conferência > Controle de Estoque (Novo)
\`\`\`
`,
  "Conferência - Página 14 - Relatório Material": `
# Ficha financeira

\`\`\`
DB:PATRIMONIAL > Material > Relatórios > Conferência > Ficha financeira
\`\`\`
`,
  "Manutenção de Parâmetros - Procedimentos Material": `
### Consulta

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Manutenção de Parâmetros > Consulta
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image110.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image110.png)

Permite definir a visualização de itens entre instituições e se devem ser exibidos apenas materiais com estoque.

### Globais

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Manutenção de Parâmetros > Globais
\`\`\`

Parâmetros configurados antes ou durante a implantação definem a forma de movimentação dos materiais no estoque.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image16.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image16.png)

Inclui o tipo de controle de estoque, regras para requisição sem estoque, visualização de saldo, geração automática de nota de liquidação, data de implantação, prazo a vencer, estrutura dos grupos e parâmetros de solicitação de transferência.

### Por Instituição

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Manutenção de Parâmetros > Por Instituição
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image81.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image81.png)

Permite definir o controle de PIT como ativado ou desativado.
`,
  "Entrada de Ordem de Compra - Procedimentos Material": `
Procedimento para efetivar a entrada das ordens de compra recebidas nos departamentos da instituição.

### Inclusão

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Entrada de Ordem de Compra > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image12.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image12.png)

O departamento/almoxarifado da sessão deve ser o mesmo indicado na ordem de compra. Após localizar a ordem, informe os dados de recebimento e selecione os materiais de entrada.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image15.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image15.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image215.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image215.png)

É possível vincular ou cadastrar material de almoxarifado, controlar lote e validade, fracionar quantidades e acertar quantidade ou valor antes de confirmar a entrada.

### Anulação de Entrada

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Entrada de Ordem de Compra > Anulação de Entrada
\`\`\`

Permite anular uma entrada de ordem de compra. A anulação é sempre total para os materiais incluídos.

### Alteração de Notas Fiscais

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Entrada de Ordem de Compra > Alteração de Notas Fiscais
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image38.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image38.png)

Permite alterar dados como data da nota, data de recebimento, tipo de entrada e número da nota.
`,
  "Requisição de Saída de Materiais - Procedimentos Material": `
Procedimento para solicitar materiais ao depósito ao qual o departamento está vinculado. A requisição manual só reduz o estoque após atendimento do almoxarifado.

### Inclusão

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Requisição de Saída de Materiais > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image32.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image32.png)

A rotina possui as abas **Requisição** e **Itens**. Informe departamento, almoxarifado, observação, material e quantidade solicitada.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image217.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image217.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Requisição de Saída de Materiais > Alteração
\`\`\`

Permite alterar observações e itens enquanto a requisição não tiver atendimento ou anulação.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Requisição de Saída de Materiais > Exclusão
\`\`\`

Permite excluir uma requisição manual ainda não atendida ou anulada.

### Requisição Automática

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Requisição de Saída de Materiais > Requisição Automática
\`\`\`

O responsável pelo depósito registra a requisição e o atendimento no momento da retirada do material.
`,
  "Atendimento de Requisição - Procedimentos Material": `
\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Atendimento de Requisição
\`\`\`

Procedimento realizado pelo responsável do almoxarifado para efetivar a entrega total ou parcial de uma requisição de saída, conforme a disponibilidade do estoque.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image175.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image175.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image64.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image64.png)

Selecione a requisição, marque os itens e informe a quantidade a entregar quando o atendimento for parcial.
`,
  "Entrada manual - Procedimentos Material": `
Rotina excepcional para ajustes de estoque, correções de implantação ou recebimento de doações.

### Inclusão

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Entrada manual > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image40.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image40.png)

Informe departamento, material, quantidades, valor unitário, lote, validade, fabricante, observação e dados da nota fiscal antes de confirmar a entrada.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image127.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image127.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Entrada manual > Alteração
\`\`\`

Permite alterar nota fiscal, data da nota e observações do lançamento.

### Cancelar

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Entrada manual > Cancelar
\`\`\`

Valide as informações, informe a observação de cancelamento e confirme.
`,
  "Saída manual - Procedimentos Material": `
Permite ajustar o estoque após implantação, em situações excepcionais como correções, sinistro, roubo ou furto.

### Inclusão

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Saída manual > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image185.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image185.png)

Selecione o material, informe a justificativa no campo de observação e a quantidade a retirar do saldo.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image154.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image154.png)

### Alterar e Cancelar

As rotinas de alteração e cancelamento estão indisponíveis/descontinuadas.
`,
  "Transferência entre depósitos - Procedimentos Material": `
Permite transferir material armazenado em um depósito para o estoque de outro.

### Inclusão

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Transferência entre depósitos > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image222.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image222.png)

A rotina possui as abas **Departamento destino** e **Itens**. Selecione o destino, informe material, quantidade, observação e confirme.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image283.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image283.png)

### Alteração, Confirmar e Cancelar

Permite alterar transferências pendentes, confirmá-las no depósito de destino ou cancelá-las no depósito de origem.

### Solicitação e Atendimento da Transferência

Permite solicitar materiais a outro almoxarifado e efetivar atendimento total ou parcial da solicitação.
`,
  "Devolução de Materiais - Procedimentos Material": `
Rotina de extrema importância, utilizada nas saídas por requisições automáticas ou manuais. Normalmente é usada para corrigir uma requisição realizada equivocadamente ou quando os materiais não forem utilizados pelo requisitante.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image78.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image78.png)

Ao acessar a rotina, o e-cidade listará as requisições realizadas ao almoxarifado. Pesquise pelo código do atendimento ou da requisição e, se necessário, filtre por data, hora, código e nome do usuário ou departamento de destino.

Caso identifique que não está no almoxarifado/depósito correto, altere-o.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image99.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image99.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image54.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image54.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image4.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image4.png)

Caso tenha selecionado o lançamento de requisição incorreto, use a opção correspondente para retornar e localizar o lançamento correto.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image75.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image75.png)

Na tela é possível verificar código do atendimento, data e hora da requisição, código e nome do usuário, além do departamento de destino.

Adicione uma observação referente à devolução e informe, na última coluna **Quantidade**, a quantidade que deseja devolver ao depósito/almoxarifado. A devolução pode ser total ou parcial.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image166.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image166.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image57.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image57.png)

Por fim, confirme a devolução.

A efetivação da devolução pode ser conferida na rotina:

\`\`\`
DB:PATRIMONIAL > Material > Consultas > Material Almox
\`\`\`

No exemplo, o estoque **ALMOXARIFADO CENTRAL** possuía 90 BATERIAS DF. Após uma devolução parcial de 5 quantidades do ATENDIMENTO DE REQUISIÇÃO (10), o estoque atual foi atualizado para 95.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image50.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image50.png)

O campo **Quantidade total em estoque**, disponível em **Dados do material**, é o somatório das quantidades do material em todos os estoques. No exemplo, o material está em somente um depósito: **ALMOXARIFADO CENTRAL**.
`,
  "Configuração de texto da ordem de compra - Procedimentos Material": `
### Cabeçalho 1

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Configuração do texto da ordem de compra > Cabeçalho 1
\`\`\`

Permite configurar o texto exibido na parte superior do PDF da ordem de compra.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image123.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image123.png)

Informação adicionada ao campo "Texto" será exibida na Ordem de Compra da seguinte forma:

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image256.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image256.png)

### Cabeçalho 2

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Configuração do texto da ordem de compra > Cabeçalho 2
\`\`\`

Possui a mesma finalidade do Cabeçalho 1, mas exibe o texto em outro local da ordem de compra.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image63.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image63.png)

Informação adicionada ao campo "Texto" será exibida na Ordem de Compra da seguinte forma:

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image227.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image227.png)

**Nota:** o documento "Ordem de Compra" é emitido no módulo Compras, através da rotina:

\`\`\`
DB:PATRIMONIAL > Compras > Relatórios > Documentos > Emite Ordem de Compra
\`\`\`
`,
  "PIT - Procedimentos Material": `
### Gerar Arquivo > Processar Arquivo

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > PIT > Gerar Arquivo > Processar Arquivo
\`\`\`

### Gerar Arquivo > Cancelar Arquivo

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > PIT > Gerar Arquivo > Cancelar Arquivo
\`\`\`

### Reemitir Arquivo

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > PIT > Reemitir Arquivo
\`\`\`
`,
  "Fechamento do Estoque - Procedimentos Material": `
Conteúdo da rotina disponível na wiki para Fechamento do Estoque.
`,
  "Planilha de Distribuição - Procedimentos Material": `
Nesta rotina é possível informar quantidades de materiais a serem dispensados para diversos departamentos ao mesmo tempo, por meio de uma planilha de distribuição.

### Inclusão

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Planilha de Distribuição > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image304.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image304.png)

Após informar descrição, materiais e departamentos, salve a planilha e gere o arquivo CSV para preenchimento.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image305.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image305.png)

### Alteração e Importar

\`\`\`
DB:PATRIMONIAL > Material > Procedimentos > Planilha de Distribuição > Alteração
DB:PATRIMONIAL > Material > Procedimentos > Planilha de Distribuição > Importar
\`\`\`
`,
  "Cadastro de Material - Material": `
Através desta rotina é possível incluir, alterar ou excluir um material do estoque.

O cadastro de material do estoque estará associado ao cadastro de materiais do módulo Compras, por meio do código do material.

Cumpre observar que um material cadastrado no módulo Compras poderá ter vários registros associados no módulo Material. Isto ocorre porque todo o material cadastrado no Compras possui uma descrição genérica, sofrendo no cadastro de material o detalhamento necessário de acordo com as especificações que lhe são peculiares.

Como exemplo, podemos citar uma bota que no módulo Compras está cadastrada simplesmente como bota. Já no módulo Material poderá ter várias especificações como tamanho, cor, marca, etc.

Assim, a referida bota terá vários materiais no módulo Material a ela associados, tais como: bota tamanho 40, bota tamanho 42, etc.

### Inclusão

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Cadastro de Material > Inclusão
\`\`\`

A tela exibirá três abas:

1. **Material Almox:** relativa ao cadastro do material propriamente dito.
2. **Material Compras:** relação do material com o material já cadastrado no Compras.
3. **Material Estoque:** relativa à quantidade de material existente no estoque.

#### Material Almox

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image231.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image231.png)

- **Código do material:** o e-cidade fornecerá automaticamente um código sequencial para o material que está sendo incluso;
- **Descrição do material:** nome a ser atribuído ao item no módulo Material, com suas características complementares;
- **Unidade de entrada:** definida no cadastro de unidades. O usuário deverá selecionar a unidade de entrada padrão a ser utilizada;
- **Unidade de saída:** definida no cadastro de unidades. O usuário deverá selecionar a unidade padrão de saída;
- **Grupo:** por intermédio deste e das configurações prévias no cadastro de grupo, o e-cidade efetuará os lançamentos necessários, como baixa de estoque e registros contábeis;
- **Quantidade de entrada:** permite definir a quantidade padrão contida naquela unidade;
- **Código anterior do item:** uso opcional para guardar código de cadastro anterior;
- **Ativo:** indica se o material está habilitado para uso;
- **Controlar Validade:** define se o material terá controle de validade, normalmente usado para medicamentos e alimentos;
- **Sim/Obrigatório:** torna obrigatório o controle de lote/validade;
- **Sim/Opcional:** disponibiliza o controle de lote/validade sem torná-lo obrigatório;
- **Não:** o material não possuirá controle de lote/validade.

Requisitos:

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Cadastro de Unidades
DB:PATRIMONIAL > Material > Cadastros > Grupo/Subgrupo
\`\`\`

**Exemplo:** na inclusão do material Caneta Azul, usando a unidade Caixa (Cx), é possível informar quantas canetas (un) compõem a caixa.

#### Material Compras

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image111.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image111.png)

- **Código do material:** exibe o código e a descrição do material que está sendo incluso no e-cidade;
- **Código do material no Compras:** código do material correspondente no módulo Compras. Caso o usuário o desconheça, poderá realizar uma pesquisa mais avançada por filtros.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image136.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image136.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image131.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image131.png)

Após selecionar o material no módulo Compras que terá relação com o item do almoxarifado, inclua o vínculo. Para selecionar múltiplos materiais, o e-cidade disponibiliza uma tela de filtro por descrição.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image94.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image94.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image184.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image184.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image87.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image87.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image273.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image273.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image258.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image258.png)

Selecione quais materiais de Compras serão vinculados ao material do almoxarifado. Caso um vínculo tenha sido criado incorretamente, ele poderá ser excluído na coluna **Opções**. Os materiais de Compras vinculados serão listados em **Material Compras**.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image29.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image29.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image264.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image264.png)

#### Material Estoque

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image20.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image20.png)

Nesta aba é realizado o controle do estoque mínimo e podem ser incluídas informações complementares, como a localização do material no depósito.

- **Código do material:** exibe o código e a descrição do material que está sendo incluso;
- **Estoque mínimo:** estoque mínimo desejado para o material;
- **Estoque máximo:** estoque máximo desejado para o material;
- **Ponto de pedido:** ponto em que o responsável pelo depósito/almoxarifado deve solicitar aquisição ao setor de Compras;
- **Localização:** permite indicar a localização do material no estoque.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image124.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image124.png)

**Atenção:** o botão fica desabilitado caso o usuário não esteja em um departamento definido como depósito no e-cidade. Essa configuração é individual por almoxarifado/depósito.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image247.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image247.png)

Para alterar o departamento/almoxarifado, utilize o ícone no canto superior direito da tela durante o acesso à rotina.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image117.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image117.png)

As configurações realizadas para o material naquele depósito/almoxarifado serão listadas em **Material Estoque** e será possível incluir novo registro.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image37.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image37.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image210.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image210.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image31.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image31.png)

É possível excluir uma parametrização pela coluna **Opções** ou alterar sua configuração.

### Alteração

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Cadastro de Material > Alteração
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image193.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image193.png)

Informe o código ou a descrição do material que deseja alterar. O caractere % pode ser usado entre informações para realizar pesquisa do tipo contém.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image162.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image162.png)

Após localizar e selecionar o material, o usuário poderá alterar as informações necessárias.

**Importante:** as alterações somente são permitidas se o material não possuir histórico de movimentação de estoque. Se já houver movimentação, o e-cidade exibirá uma mensagem de alerta e impedirá a alteração.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Cadastro de Material > Exclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image58.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image58.png)

Permite excluir um material cadastrado no e-cidade. Pesquise pelo código ou descrição, localize o item e confirme a exclusão.
`,
  "Cadastro de Fabricantes - Material": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Cadastro de Fabricantes > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image245.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image245.png)

- **Código do Fabricante:** código sequencial atribuído ao fabricante que está sendo incluso;
- **Nome do Fabricante:** campo aberto para informar o nome do fabricante;
- **Código do CGM:** permite informar o CGM ou realizar pesquisa com filtros adicionais.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image82.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image82.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image161.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image161.png)

**Nota:** o fabricante deve estar previamente cadastrado como CGM (Cadastro Geral do Município).

### Alteração

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Cadastro de Fabricantes > Alteração
\`\`\`

Permite alterar informações de um fabricante cadastrado no e-cidade.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Cadastro de Fabricantes > Exclusão
\`\`\`

Permite excluir um fabricante cadastrado no e-cidade.
`,
  "Depósitos - Material": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Depósitos > Inclusão
\`\`\`

Permite incluir locais com características de depósitos/almoxarifados. A rotina possui duas abas: **Almoxarifados** e **Departamentos**.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image276.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image276.png)

#### Almoxarifados

- **Código Almoxarifado:** código sequencial gerado e atribuído ao depósito/almoxarifado;
- **Código departamento:** informe o departamento que deseja definir como depósito/almoxarifado. Caso desconheça o código, utilize a pesquisa com filtros adicionais.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image233.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image233.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image28.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image28.png)

Para consultar depósitos cadastrados, utilize os filtros de pesquisa disponíveis.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image76.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image76.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image72.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image72.png)

Após incluir o depósito/almoxarifado, a aba **Departamentos** será habilitada.

#### Departamentos

Nesta aba, informe quais departamentos ficarão vinculados ao depósito. Basta marcar a caixa de seleção ao lado de cada departamento.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image177.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image177.png)

Os departamentos vinculados podem solicitar e retirar materiais do depósito criado.

**Nota:** somente podem ser marcados departamentos da mesma instituição do depósito.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image250.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image250.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Depósitos > Alteração
\`\`\`

Permite alterar o departamento vinculado ao depósito e os departamentos que possuem acesso a ele.

### Exclusão

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Depósitos > Exclusão
\`\`\`

Permite excluir um depósito.

**Nota:** a exclusão só é possível quando o depósito ainda não possui histórico de movimentações, como entradas e saídas de materiais.
`,
  "Grupo/Subgrupo - Material": `
### Inclusão

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Grupo/Subgrupo > Inclusão
\`\`\`

Permite incluir um Grupo/Subgrupo para posterior vínculo a um material.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image6.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image6.png)

- **Máscara:** definida para a criação dos grupos. Sua estrutura pode ser alterada em DB:PATRIMONIAL > Material > Procedimentos > Manutenção de Parâmetros Globais;
- **Estrutural:** campo para criação numérica da disposição dos grupos conforme a estrutura desejada pelo almoxarifado;
- **Descrição:** descrição do grupo;
- **Tipo:** determina o nível criado. Grupos são sintéticos e subgrupos são analíticos; somente os subgrupos podem ser vinculados a um material;
- **Conta Contábil:** conta vinculada ao grupo ou subgrupo no plano de contas da instituição;
- **Conta Contábil VPD:** conta de variação patrimonial diminutiva previamente aberta pela Contabilidade;
- **Grupo/Subgrupo Ativo:** determina se o grupo ou subgrupo estará disponível para uso.

Exemplos de estrutura:

- 01.00 - Grupo (Material de Consumo)
- 01.01 - Subgrupo (Material de Copa e Cozinha)
- 01.02 - Subgrupo (Material de Escritório)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image237.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image237.png)

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image186.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image186.png)

Para consultar rapidamente os grupos/subgrupos existentes, utilize a opção de pesquisa. Após preencher as informações, conclua a inclusão.

### Alteração

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Grupo/Subgrupo > Alteração
\`\`\`

Permite alterar informações de um grupo. Algumas informações são exclusivas do administrador do e-cidade, como contas contábeis.
`,
  "Veiculos Tipo/Grupo/Subgrupo - Material": `
\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Vínculos Tipo/Grupo/SubGrupo > Grupo / SubGrupo
\`\`\`

Permite vincular grupos e subgrupos de estruturas entre um nível de origem e outro de destino. O nível de destino não pode ser maior que o nível de origem.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image235.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image235.png)

### Tipo / Grupo

\`\`\`
DB:PATRIMONIAL > Material > Cadastros > Vínculos Tipo/Grupo/SubGrupo
\`\`\`

Permite vincular um grupo a um tipo de grupo.

[![](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image249.png)](https://e-cidade.wiki.br/patrimonial/material/files/material_tecnico/image249.png)
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
  "Unidade Compradora - Consulta PNCP": `
Permite realizar a consulta de “Unidades Compradoras”.

***Item de menu:***

\`\`\`
PATRIMONIAL > PNCP > Consultas > Unidade Compradora
\`\`\`

![Consulta de Unidades Compradoras no PNCP](../../assets/images/pncp-unidades-consulta.svg)

**Nota:** Caso já tenha sido realizado o cadastro de unidade compradora através de algum outro portal que possui integração com o PNCP, a mesma será listada aqui, pois é realizada uma consulta de todas as unidades vinculadas à instituição (órgão) através do documento CGC. Também serão listadas unidades cadastradas no PNCP pelo e-cidade.
`,
  "Contratos de Contratação - Consulta PNCP": `
Permite consultar os contratos das contratações/licitações que tenham sido publicados pelo e-Cidade no PNCP.

***Item de menu:***

\`\`\`
PATRIMONIAL > PNCP > Consultas > Contratos de Contratação
\`\`\`

![Lista do Histórico de Contratações no PNCP](../../assets/images/pncp-historico-contratacoes-lista.svg)

![Contratos vinculados à contratação](../../assets/images/pncp-historico-contratos-vinculados.svg)

![Detalhes do contrato no PNCP](../../assets/images/pncp-historico-contrato-detalhe.svg)
`,
  "Contratação/Edital/Aviso - Procedimentos PNCP - Página 1": `
### Inclusão

***Item de menu:***

\`\`\`
PATRIMONIAL > PNCP > Procedimentos > Contratação/Edital/Aviso > Inclusão
\`\`\`

![Tela de Inclusão de Contratação/Edital/Aviso](../../assets/images/pncp-contratacao-inclusao.svg)

- **Unidade Compradora:** serão listadas unidades compradoras cadastradas como ativas no e-cidade.
- **Origem:** por padrão, os dados serão originados de licitações cadastradas no e-cidade.
- **Licitação:** âncora de busca que permite selecionar licitações da instituição com itens e situações “Em andamento” ou “Homologadas”, cuja data de abertura seja igual ou posterior a 01/04/2021; a mesma condição se aplica ao ano (2021).

O botão “Buscar Dados” disponibiliza nos respectivos campos os dados vinculados à licitação selecionada. O botão “Consultar” permite uma consulta rápida à licitação cadastrada no e-cidade.

- **Modalidade de Compra:** lista de modalidades aplicáveis disponibilizadas pelo PNCP.
- **Instrumento Convocatório:** lista de instrumentos convocatórios disponibilizados pelo PNCP.
- **Modo de Disputa:** lista de modos de disputa disponibilizados pelo PNCP.

**NOTA:** As opções e combinações do modo de disputa serão listadas conforme as regras de conformidade entre Instrumento Convocatório e Modo de Disputa estabelecidas pelo PNCP.

Número da Compra, Ano da Compra, Número do Processo, Objeto da Compra, SRP e Data/Hora Abertura Proposta serão definidos conforme as informações retornadas da licitação selecionada.

- **Data/Hora Encerramento Proposta:** informar a data e hora de encerramento do recebimento das propostas, pelo horário de Brasília.

**NOTA:** Os campos Data/Hora para Abertura e Encerramento Proposta somente serão exibidos e obrigatórios para o tipo de Instrumento Convocatório Edital ou Aviso de Contratação Direta. Para o tipo Ato que autoriza a Contratação Direta, esses campos não serão listados.

- **Amparo Legal:** serão listados os amparos legais aplicáveis.
- **Link sistema origem:** permite definir um link da compra no sistema de origem. Essa informação ficará vinculada e poderá ser acessada através da compra/edital/aviso publicado.
- **Informação Complementar:** se existir, altere para “Sim” e especifique.

![Tabela de itens da Contratação/Edital/Aviso](../../assets/images/pncp-contratacao-itens.svg)

## Itens / Resultado(s)

Serão listados os itens e suas respectivas informações conforme a licitação selecionada. Caso ela esteja com a situação “Homologada”, serão retornados os resultados julgados e homologados para cada item.

- **Material/Serviço:** definido conforme o cadastro do material: se Serviço = Sim, será “Serviço”; caso contrário, “Material”. Para leilão, o e-cidade define “Material” e não permite alteração.
- **Tipo de Benefício:** quando aplicável, definido conforme “Tipo de Benefício à Microempresa e Empresa de Pequeno Porte” (Informações Complementares). Para leilão, o e-cidade define “Não se aplica” e não permite alteração.
- **Incentivo Fiscal PPB:** indica se possui incentivo fiscal PPB (Produto Manufaturado Nacional). Para leilão, o e-cidade define “Não possui o incentivo” e não permite alteração.
- **Critério Julgamento:** quando aplicável, definido conforme “Critério de Julgamento” (Informações Complementares); caso contrário, disponibiliza as opções previstas no manual do PNCP.
- **Categoria Item:** Bens Imóveis e Bens Móveis ficam disponíveis para modalidade leilão; nos demais casos, a opção aplicável é “Não se aplica”.
- **Registro Imobiliário:** código de Registro Imobiliário. Obrigatório para contratação na modalidade leilão cuja categoria do item seja “Bens Imóveis”.
- **Orçamento Sigiloso:** identifica se o orçamento do item é “Sigiloso” ou “Não sigiloso”. Para leilão, o padrão é “Não sigiloso” e não pode ser alterado.
- **Indicador sub-contratação:** opção exibida e obrigatória quando a licitação possuir resultados homologados para envio.
- **Aplica Margem de Preferência Normal:** indica se a margem é aplicável ao item (Não/Sim).
- **Percentual Preferência Normal:** percentual da margem normal, maior ou igual a 0 e menor que 100. Exemplo: 10.0000.
- **Aplica Margem de Preferência Adicional:** indica se a margem adicional é aplicável ao item (Não/Sim).
- **Percentual Preferência Adicional:** percentual da margem adicional, maior ou igual a 0 e menor que 100. Exemplo: 10.0000.
- **Amparo Legal da Margem de Preferência:** código da fundamentação legal da aplicação da margem de preferência.
- **Aplica Margem Critério de Desempate:** indica a aplicação de critério de desempate conforme Art. 60 para o item (Não/Sim).
- **Amparo Legal do Critério:** código da fundamentação legal do critério de desempate conforme o Art. 60.

Com todos os dados preenchidos e corretos, o botão “Enviar Dados” compila as informações e efetiva a publicação da Contratação/Edital/Aviso no PNCP, disponibilizando um link de acesso. É obrigatório anexar um documento para efetivar a ação; para isso, clique em “Anexar Documento”.

**NOTA:** Extensões de arquivos suportadas pelo PNCP: pdf, txt, rtf, doc, docx, xls, xlsx, odt, sxw, zip, 7z, rar, dwg, dwt, dxf, dwf, dwfx, svg, sldprt, sldasm, dgn, ifc, skp, 3ds, dae, obj, rfa e rte. O tamanho máximo por arquivo é 30 MB.
`,
  "Contratação/Edital/Aviso - Procedimentos PNCP - Página 2": `
### Inserir Resultados

***Item de menu:***

\`\`\`
PATRIMONIAL > PNCP > Procedimentos > Contratação/Edital/Aviso > Inserir Resultado
\`\`\`

![Tela de Inserir Resultados no PNCP](../../assets/images/pncp-inserir-resultados.svg)

**Contratação/Edital/Aviso:** permite selecionar entre as licitações já publicadas e homologadas no e-cidade a fim de buscar as propostas julgadas a serem enviadas como resultados para a contratação/edital/aviso.

Após clicar no botão “Buscar Dados”, será possível visualizar dados da compra selecionada, como Modalidade de Compra, Instrumento Convocatório, Número/Ano da Compra e Objeto da Compra.

Em Itens serão listados os dados da licitação. Ao clicar no ícone de mais (+), é possível ver mais detalhes sobre os resultados a serem enviados.

A única opção a ser preenchida é “Indicador sub-contratação”, que será obrigatória para cada resultado a ser enviado. Após o preenchimento, clique em “Enviar Dados”.

**NOTA:** Esta rotina é obrigatória quando a licitação for publicada com o status “Em Andamento”, para que os resultados da licitação sejam publicados após a homologação.
`,
  "Contratação/Edital/Aviso - Procedimentos PNCP - Página 3": `
### Exclusão

***Item de menu:***

\`\`\`
PATRIMONIAL > PNCP > Procedimentos > Contratação/Edital/Aviso > Exclusão
\`\`\`

![Histórico de Contratações para exclusão no PNCP](../../assets/images/pncp-historico-contratacoes-excluir.svg)

Ao acessar a rotina será listado o histórico de contratações/editais/avisos publicados através do e-cidade. Clique no ícone que representa a exclusão para efetivar a ação, quando aplicável. Caso não seja possível concluir o procedimento, será exibido um alerta indicando o motivo.

Para atualizar o histórico de contratações, clique no botão “Atualizar”.
`,
  "Contratação/Edital/Aviso - Procedimentos PNCP - Página 4": `
### Retificar Licitação

***Item de menu:***

\`\`\`
PATRIMONIAL > PNCP > Procedimentos > Contratação/Edital/Aviso > Retificar
\`\`\`

O item de menu não é obrigatório; será utilizado apenas quando houver modificações no processo licitatório.

![Tela de Retificar Contratação/Edital/Aviso](../../assets/images/pncp-retificar-contratacao.svg)

Para retificar informações, utilize a âncora Contratação/Edital/Aviso para buscar a licitação que será retificada.

Na aba Contratações, edite as informações alteradas e insira os dados atualizados. O campo Justificativa é obrigatório.

- **Unidade Compradora:** serão listadas unidades compradoras cadastradas como ativas no e-cidade.
- **Origem:** por padrão, a origem dos dados serão licitações cadastradas no e-cidade.
- **Licitação:** âncora de busca para selecionar licitações da instituição com itens, situações “Em andamento” ou “Homologadas” e data de abertura igual ou posterior a 01/04/2021 (ano 2021).

O botão “Buscar Dados” disponibiliza as informações da licitação selecionada nos respectivos campos. O botão “Consultar” permite consulta rápida à licitação cadastrada no e-cidade.

- **Modalidade de Compra:** lista modalidades aplicáveis disponibilizadas pelo PNCP.
- **Instrumento Convocatório:** lista instrumentos convocatórios disponibilizados pelo PNCP.
- **Modo de Disputa:** lista modos de disputa disponibilizados pelo PNCP.

**NOTA:** As opções e combinações do modo de disputa seguem as regras de conformidade entre Instrumento Convocatório e Modo de Disputa estabelecidas pelo PNCP.

Número da Compra, Ano da Compra, Número do Processo, Objeto da Compra, SRP e Data/Hora Abertura Proposta são definidos conforme as informações retornadas da licitação selecionada.

- **Data/Hora Encerramento Proposta:** informar a data e hora de encerramento do recebimento das propostas, pelo horário de Brasília.

**NOTA:** Data/Hora para Abertura e Encerramento Proposta somente são exibidos e obrigatórios para Instrumento Convocatório Edital ou Aviso de Contratação Direta. Para Ato que autoriza a Contratação Direta, esses campos não são listados.

- **Amparo Legal:** lista os amparos legais aplicáveis.
- **Link sistema origem:** permite definir o link da compra no sistema de origem, que ficará vinculado à compra/edital/aviso publicado.
- **Informação Complementar:** se existir, altere para “Sim” e especifique.

![Aba Itens da retificação de Contratação/Edital/Aviso](../../assets/images/pncp-retificar-itens.svg)

## Itens

Serão listados os itens e suas respectivas informações conforme a licitação selecionada. Se estiver “Homologada”, serão retornados os resultados julgados e homologados para cada item.

- **Situação para os itens selecionados:** permite definir, nos itens marcados, uma das situações: Em andamento, Homologado, Anulado/Revogado/Cancelado, Deserto ou Fracassado.
- **Justificativa:** campo para justificar as retificações dos itens.
- **Material/Serviço:** definido conforme o cadastro do material. Para leilão, o e-cidade define “Material” e não permite alteração.
- **Tipo de Benefício:** quando aplicável, definido conforme “Tipo de Benefício à Microempresa e Empresa de Pequeno Porte” (Informações Complementares). Para leilão, fica “Não se aplica” e não pode ser alterado.
- **Incentivo Fiscal PPB:** indica incentivo fiscal PPB (Produto Manufaturado Nacional). Para leilão, fica “Não possui o incentivo” e não pode ser alterado.
- **Critério Julgamento:** quando aplicável, definido conforme “Critério de Julgamento” (Informações Complementares); caso contrário, lista opções do manual PNCP.
- **Categoria Item:** Bens Imóveis e Bens Móveis são disponíveis para leilão; nos demais casos, “Não se aplica”.
- **Registro Imobiliário:** código obrigatório para leilão com categoria “Bens Imóveis”.
- **Orçamento Sigiloso:** indica “Sigiloso” ou “Não sigiloso”. Para leilão, o padrão é “Não sigiloso” e não pode ser alterado.
- **Indicador sub-contratação:** exibido e obrigatório quando a licitação possuir resultados homologados para envio.
- **Aplica Margem de Preferência Normal:** indicador (Não/Sim) de aplicabilidade ao item.
- **Percentual Preferência Normal:** percentual maior ou igual a 0 e menor que 100. Exemplo: 10.0000.
- **Aplica Margem de Preferência Adicional:** indicador (Não/Sim) de aplicabilidade ao item.
- **Percentual Preferência Adicional:** percentual maior ou igual a 0 e menor que 100. Exemplo: 10.0000.
- **Amparo Legal da Margem de Preferência:** código da fundamentação legal correspondente.
- **Aplica Margem Critério de Desempate:** indicador (Não/Sim) conforme Art. 60.
- **Amparo Legal do Critério:** código da fundamentação legal do critério de desempate conforme Art. 60.

Com os dados preenchidos e corretos, clique em “Retificar Itens” para compilar e publicar as informações atualizadas da Contratação/Edital/Aviso no PNCP, que disponibilizará um link de acesso.
`,
  "Contratação/Edital/Aviso - Procedimentos PNCP - Página 5": `
### Publicação de Documentos

***Item de menu:***

\`\`\`
PATRIMONIAL > PNCP > Procedimentos > Contratação/Edital/Aviso > Publicação de Documentos
\`\`\`

Rotina que permite inserir documentos na contratação.

![Tela de Publicação de Documentos da Contratação/Edital/Aviso](../../assets/images/pncp-publicar-documentos.svg)

- **Contratação/Edital/Aviso:** permite buscar a licitação à qual serão anexados documentos no PNCP.
- **Título do Documento:** aceita no máximo 50 caracteres, conforme o manual do PNCP.
- **Tipo:** serão disponibilizados os tipos Aviso de Contratação Direta, Edital, Minuta de Contrato, Termo de Referência, Anteprojeto, Projeto Básico, Estudo Técnico Preliminar, Projeto Executivo, Mapa de Riscos, DFD, Minuta da ata de registro de preços e Ato que autoriza a contratação direta, como informação complementar a ser enviada junto com o documento ao PNCP.
`,
  "Contrato - Procedimentos PNCP - Página 1": `
### Inclusão

**Item de menu:**

~~~
PATRIMONIAL > PNCP > Procedimentos > Contrato > Inclusão
~~~

![Formulário de inclusão de Contrato no PNCP](../../assets/images/pncp-contrato-inclusao.svg)

- **Unidade Compradora:** serão listadas unidades compradoras cadastradas como ativas no e-cidade.
- **Contratação/Edital/Aviso:** âncora de busca que lista contratações/editais/avisos já publicados no PNCP cuja licitação esteja homologada no e-cidade, permitindo vincular as informações.
- **Contrato:** âncora de busca que permite selecionar contratos da instituição com itens vinculados, cuja data de assinatura e início de vigência sejam iguais ou posteriores a 01/04/2021; a mesma condição se aplica ao ano (2021).

Para consultar rapidamente a Contratação/Edital/Aviso selecionada e já publicada, clique em “PNCP”. O botão “Buscar Dados” disponibiliza nos respectivos campos as informações vinculadas ao contrato selecionado; “Consultar” permite uma consulta rápida ao contrato cadastrado no e-cidade.

- **Tipo de Contrato:** lista os tipos de contratos disponibilizados pelo PNCP.

Número do Contrato/Empenho, Ano do Contrato, Fornecedor, Objeto do Contrato, Processo, Valor Inicial, Data da Assinatura e período de vigência (de e até) serão preenchidos conforme as informações cadastradas no e-cidade para o contrato.

![Fornecedor Subcontratado selecionado como Sim](../../assets/images/pncp-fornecedor-subcontratado.svg)

- **Fornecedor Subcontratado:** se aplicável, defina como “Sim” e selecione o fornecedor subcontratado pelo cadastro de CGM. A opção fica disponível somente quando a modalidade vinculada à contratação for diferente de leilão.
- **Categoria do Processo:** lista as categorias de processo disponibilizadas pelo PNCP.
- **Receita:** indica se o contrato gera receita ou despesa.
- **Quantidade de Parcelas:** define a quantidade de parcelas; campo obrigatório que aceita apenas números inteiros.
- **Informação Complementar:** se aplicável, defina como “Sim” e adicione informações complementares sobre o contrato a ser publicado no PNCP.
- **CIPI:** se aplicável, defina como “Sim”. Os campos Identificador e URL tornam-se obrigatórios. O identificador aceita no máximo 14 dígitos, conforme o manual do PNCP. A opção fica disponível somente quando a modalidade vinculada à contratação for diferente de leilão.

Com os dados preenchidos e corretos, clique em “Enviar Dados” para publicar o contrato no PNCP; será disponibilizado um link de acesso.

![Alerta de publicação de contrato efetuada com sucesso no PNCP](../../assets/images/pncp-contrato-publicacao-sucesso.svg)

Após a publicação do contrato, o botão “Anexar Documento” ficará habilitado para anexar um documento nesta tela.

![Formulário para anexar documento ao contrato publicado](../../assets/images/pncp-contrato-anexar-documento.svg)

- **Título do Documento:** aceita no máximo 50 caracteres, conforme o manual do PNCP.
- **Tipo:** serão disponibilizados os tipos “Contrato”, “Nota de empenho” e “Outros” como informação complementar a ser enviada junto com o documento ao PNCP.

![Alerta de documento anexado com sucesso ao contrato](../../assets/images/pncp-contrato-documento-sucesso.svg)

Também é possível acessar a rotina de inclusão de documentos para anexar novos documentos complementares.
`,
  "Contrato - Procedimentos PNCP - Página 2": `
### Inclusão de Documentos

**Item de menu:**

~~~
PATRIMONIAL > PNCP > Procedimentos > Contrato > Inclusão de documento
~~~

Rotina que permite inserir documentos ao contrato.

![Tela de inclusão de documentos do contrato no PNCP](../../assets/images/pncp-contrato-inclusao-documentos.svg)

- **Contrato:** permite buscar o contrato que terá documentos anexados ao PNCP.
- **Título do Documento:** aceita no máximo 50 caracteres, conforme o manual do PNCP.
- **Tipo:** serão disponibilizados os tipos “Contrato”, “Nota de empenho”, “Relatório Final de Contrato” e “Outros” como informação complementar a ser enviada junto com o documento ao PNCP.
`,
  "Contrato - Procedimentos PNCP - Página 3": `
### Exclusão

**Item de menu:**

~~~
PATRIMONIAL > PNCP > Procedimentos > Contrato > Exclusão
~~~

![Lista de contratos publicados no PNCP com ações de exclusão](../../assets/images/pncp-contrato-exclusao-lista.svg)

Ao acessar a rotina, será listado o histórico de contratos já publicados através do e-cidade. Clique no ícone que representa a exclusão para efetivar a ação, quando aplicável. Caso não seja possível concluir o procedimento, será exibido um alerta indicando o motivo.

Para atualizar o histórico de contratos, clique no botão **“Atualizar”**.
`,
  "Ata de Registro de Preço - Procedimentos PNCP": `
### Inclusão

**Item de menu:**

~~~
PATRIMONIAL > PNCP > Procedimentos > Ata de Registro de Preço
~~~

![Tela de inclusão de Ata de Registro de Preço no PNCP](../../assets/images/pncp-ata-registro-preco-inclusao.svg)

- **Contratação/Edital/Aviso:** âncora de busca que lista contratações/editais/avisos publicados no PNCP pelo e-cidade para vincular as informações. Ao selecionar uma compra/edital/aviso, o e-cidade lista automaticamente as atas vinculadas e seus dados em “Atas”.
- **Contrato do sistema:** por padrão, “Não” permite preencher manualmente os campos seguintes. Ao selecionar “Sim”, é possível selecionar contratos da instituição com itens vinculados, cuja data de assinatura e início de vigência sejam iguais ou posteriores a 01/04/2021; a mesma condição se aplica ao ano (2021).

![Campo Contrato com as opções Buscar Dados e Consultar](../../assets/images/pncp-ata-contrato-busca.svg)

Após selecionar o contrato, clique em “Consultar” para obter mais informações ou em “Buscar Dados” para preencher automaticamente os campos.

- **Número Ata de Registro de Preço:** número da ata, com no máximo 50 caracteres.
- **Ano Ata:** ano da ata com quatro dígitos numéricos, igual ou superior a 2021, ano da publicação da NLLC 14.133.
- **Data da Assinatura:** data de assinatura da ata, igual ou posterior a 01/04/2021, data da publicação da NLLC 14.133.
- **Período Vigência de - até:** datas de início e fim da vigência da ata. O início da vigência deve ser igual ou posterior a 01/04/2021, data da publicação da NLLC 14.133.

Após preencher corretamente as informações, clique em “Enviar Dados” para publicar a Ata de Registro de Preço no PNCP. Para limpar os campos, clique em “Limpar”. O e-cidade exibirá um alerta após a publicação; o link indicado permite conferi-la.

![Alerta de publicação da Ata de Registro de Preço no PNCP](../../assets/images/pncp-ata-publicacao-sucesso.svg)

Em “Atas” são listadas as atas de registro de preço publicadas e vinculadas à compra/edital/aviso selecionada, com seus respectivos dados.

![Tabela de atas de registro de preço publicadas](../../assets/images/pncp-ata-registros-publicados.svg)

Entre as ações disponíveis está “Alteração”, que permite retificar e cancelar a ata. Para isso, selecione “Cancelar” como “Sim”, informe a data do cancelamento e a justificativa, e clique em “Retificar”.

![Janela de retificação e cancelamento da Ata de Registro de Preço](../../assets/images/pncp-ata-retificar-cancelamento.svg)

Após a ação, o e-cidade exibirá “Cancelado” como “Sim” e a respectiva “Data Cancelamento”.

![Ata de Registro de Preço marcada como cancelada na lista](../../assets/images/pncp-ata-cancelada-grade.svg)

Ao clicar em “Alterar” para uma ata cancelada, o e-cidade apenas exibirá os dados nos respectivos campos.

![Dados da Ata de Registro de Preço cancelada](../../assets/images/pncp-ata-cancelada-dados.svg)

Para excluir uma ata, clique no ícone de exclusão nas ações e confirme.

![Confirmação de exclusão da Ata de Registro de Preço](../../assets/images/pncp-ata-exclusao-confirmar.svg)
`,
  "Termo de Contrato - Procedimentos PNCP": `
### Inclusão

**Item de menu:**

~~~
PATRIMONIAL > PNCP > Procedimentos > Termo de Contrato
~~~

![Tela de inclusão de Termo de Contrato no PNCP](../../assets/images/pncp-termo-contrato-inclusao.svg)

- **Contrato:** âncora de busca que lista contratos publicados no PNCP pelo e-cidade para vincular as informações. Ao selecionar um contrato, o e-cidade lista automaticamente os termos aditivos vinculados e seus dados em “Termos”.
- **Tipo Termo de Contrato:** permite selecionar Termo de Rescisão, Termo Aditivo ou Termo de Apostilamento.
- **Nº Termo de Contrato:** número do termo de contrato com no máximo 50 caracteres.
- **Objeto do Termo de Contrato:** descrição do objeto do termo.
- **Data Assinatura Termo:** data de assinatura do termo, igual ou posterior a 01/04/2021, data da publicação da NLLC 14.133.
- **Qualificação Acréscimo/Supressão:** identifica se o termo aditivo terá acréscimo ou supressão.
- **Qualificação Vigência:** identifica se o termo aditivo altera a vigência e o número de parcelas.
- **Qualificação Fornecedor:** identifica se o termo aditivo altera o fornecedor.
- **Qualificação Reajuste:** identifica se o termo aditivo altera o valor unitário do item do contrato.
- **Qualificação Informativo:** identifica se o termo aditivo contém alguma observação. Se sim, será exibido o campo “Observação Informativo”, de preenchimento obrigatório.

Após preencher as informações, clique em “Enviar Dados”. O e-cidade exibirá o alerta abaixo.

![Alerta de termo incluído com sucesso](../../assets/images/pncp-termo-inclusao-sucesso.svg)

Logo abaixo em “Termos” será listado o termo incluído.

![Termo de contrato incluído na lista de Termos](../../assets/images/pncp-termo-incluso-lista.svg)

Nas ações disponíveis, é possível alterar os dados ou excluir o termo aditivo. Para anexar um documento, ou consultar/excluir um documento já incluído, clique no ícone “Documento”.

### Documento Termo Contrato

![Formulário e lista de documentos do Termo de Contrato](../../assets/images/pncp-documento-termo-contrato.svg)

Para incluir um documento, informe o “Título do Documento”, selecione o tipo (Termo de Rescisão, Termo Aditivo, Termo de Apostilamento ou Outros), anexe o arquivo e clique em “Salvar”. As ações disponíveis permitem baixar ou excluir o documento.
`,
  "Plano de Contratações - Procedimentos PNCP": `
### Inclusão

**Item de menu:**

~~~
PATRIMONIAL > PNCP > Procedimentos > Plano de Contratações
~~~

![Tela de inclusão do Plano de Contratações no PNCP](../../assets/images/pncp-plano-contratacoes-inclusao.svg)

- **Unidade Compradora:** serão listadas unidades compradoras cadastradas como ativas no e-cidade.
- **Ano PCA:** ano do Plano de Contratações Anual.
- **Unidade E-Cidade (unidade requisitante):** por padrão, será indicado como unidade requisitante o departamento da sessão. É possível alterar e selecionar outro departamento cadastrado no e-cidade.

![Unidade requisitante preenchida com o departamento da sessão](../../assets/images/pncp-pca-unidade-requisitante-sim.svg)

Na opção “Não”, será exibido um campo aberto para descrever o nome da unidade requisitante.

![Campo aberto para informar a unidade requisitante](../../assets/images/pncp-pca-unidade-requisitante-nao.svg)
- **Catálogo de materiais/serviços:** por padrão, “Outros”, correspondente ao catálogo de materiais do e-cidade.
- **Código do Material/Serviço:** a âncora de pesquisa disponibiliza filtros por Código, Descrição do Material, Grupo e Subgrupo para localizar materiais/serviços no e-cidade.
- **Categoria do Item do PCA:** opções Material, Serviço, Obras, Serviços de Engenharia, Soluções de TIC, Locação de Imóveis, Alienação/Concessão/Permissão e Obras e Serviços de Engenharia, conforme o manual do PNCP.
- **Unidade E-Cidade (unidade de fornecimento):**
  - **Sim (padrão):** serão listadas unidades cadastradas no e-cidade.
  - **Não:** será possível descrever a Unidade de Fornecimento em um campo aberto.
- **Quantidade:** quantidade de itens do plano, maior ou igual a zero, com precisão de quatro casas decimais. Exemplo: 100.0000.
- **Valor Unitário:** valor unitário do item, maior ou igual a zero, com precisão de quatro casas decimais. Exemplo: 100.0000.
- **Valor Total:** calculado automaticamente pelo e-cidade, multiplicando a Quantidade pelo Valor Unitário.
- **Valor Orçamento Exercício:** valor orçamentário estimado para o exercício, maior ou igual a zero, com precisão de quatro casas decimais. Exemplo: 100.0000.
- **Data Desejada:** data desejada para a contratação.

Após preencher os campos obrigatórios, clique em “Adicionar” para incluir o material/serviço na lista de itens.

**Nota:** o serviço requer o envio de pelo menos um item e aceita no máximo 1.000 itens.

![Item adicionado à lista do Plano de Contratações](../../assets/images/pncp-pca-itens-adicionados.svg)

Os campos a seguir são preenchidos automaticamente:

- **Número do Item:** número sequencial do material/serviço adicionado.
- **Material/Serviço:** indicador de serviço ou material, relacionado ao cadastro de material do e-cidade.
- **Grupo Material/Serviço:** grupo vinculado ao material/serviço adicionado, também relacionado ao cadastro do material.

Na última coluna de cada linha, em “Ações”, é possível excluir os itens adicionados.

Após adicionar todos os itens relacionados ao PCA, clique em “Salvar” para efetivar a publicação. Ao concluir a ação, o e-cidade exibirá o alerta abaixo.

![Alerta de publicação do Plano de Contratações concluída](../../assets/images/pncp-pca-publicacao-sucesso.svg)
`,
  "Orgão - Cadastro PNCP": `
### Incluir

***Item de menu:***

\`\`\`
PATRIMONIAL > PNCP > Cadastros > Órgão > Incluir
\`\`\`

Permite inserir um órgão/entidade que eventualmente não se encontre nos repositórios do PNCP. O portal possui uma base de dados com as informações dos Órgãos ou Entes da Federação. Caso o órgão ou ente não esteja incluído nessa base, o usuário pode utilizar este serviço para solicitar sua inclusão.

Desde 25/08/2023 este serviço está integrado com o sistema CNPJ, sendo necessário informar apenas o número de CNPJ do órgão.

- **CNPJ:** documento de 14 dígitos referente ao órgão/entidade.

![Tela de inclusão de Órgão no PNCP](../../assets/images/pncp-orgao-incluir.svg)

### Alterar

Permite atualizar os dados de um órgão/entidade no repositório do PNCP que eventualmente estejam desatualizados.
`,
  "Unidade Compradora - Cadastro PNCP": `
Permite a inclusão e manutenção de **Unidades Compradoras**. As unidades compradoras são divisões administrativas que realizam as contratações e celebram os contratos. Todo órgão/entidade deverá ter cadastrado ao menos uma unidade no PNCP.

**Item de menu:** **PATRIMONIAL > PNCP > Cadastros > Unidade Compradora**

- **Órgão/Entidade:** através do documento CGC vinculado à instituição, irá buscar e exibir o órgão/entidade vinculado a ele no PNCP.
- **Código da Unidade:** campo aberto para definição do código da unidade compradora do órgão/entidade, com no máximo 30 dígitos.
- **Nome da Unidade:** nome da unidade compradora do órgão/entidade, com no máximo 100 caracteres.
- **Município:** município da instituição (órgão/entidade).
- **Ativo:** recurso que permite definir uma unidade compradora como não ativa, uma vez que o PNCP não disponibiliza alteração/exclusão.

**Notas:** somente será possível utilizar esta rotina caso a integração com o PNCP esteja ativa; caso contrário, será emitido um alerta solicitando que seja verificada a configuração inicial. Em “Unidades” serão listadas unidades compradoras já cadastradas no PNCP. Caso deseje utilizar a mesma no e-cidade, efetive a alteração e salve-a como “Ativo” sim.
`,
  "Transferência de bens - Procedimentos Patrimônio": `
## Inclusão

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Transferência de bens > Interna > Inclusão
\`\`\`

Na aba “Gera transferência” têm-se:

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image18.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image18.png)

- **Transferência**
- **Código do Usuário**
- **Departamento de Origem**
- **Departamento Destino**
- **Data da Transferência**
- **Observação**

O código da transferência será criado automaticamente pelo sistema, que traz igualmente as informações relativas ao usuário que está realizando a transferência e ao departamento que está efetivando a transferência.

Cabe ao usuário informar o departamento destino do bem e a data de sua transferência. Caso desconheça o código do departamento destino, poderá optar pela pesquisa, clicando no link [departamento destino]. Por fim, poderá informar algum detalhe específico da transferência no campo observação.

Informado ao sistema o departamento destino e a data da transferência, deve o usuário clicar no botão [incluir] para prosseguir a inclusão.

Feito isso, a aba Itens da Transferência ficará habilitada com as seguintes informações:

- **Transferência**
- **Código do bem**
- **Código da situação**
- **Histórico**
- **Divisão destino**

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image87.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image87.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image35.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image35.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image34.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image34.png)

A transferência trará o código criado pelo sistema, devendo o usuário informar o código do bem e da situação do mesmo. Caso desconheça esses códigos, pode optar pela pesquisa clicando nos links [código do bem] e [código da situação]. No campo histórico, o usuário pode fazer observações relativas ao bem que está transferindo.

Encerra-se o processo de inclusão clicando no botão [incluir].

## Alteração

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Transferência de bens > Interna > Alteração
\`\`\`

Incluída a transferência, o usuário tem a opção de alterar o código da situação do bem e seu histórico. Para isso, deve clicar no link “A”, existente na tabela Itens Lançados, confirmando após no botão [alterar].

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image1.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image1.png)

Itens da transferência:

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image77.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image77.png)

## Excluir

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Transferência de bens > Interna > Excluir
\`\`\`

Caso deseje excluir o item, deve clicar no link “E”, existente na tabela Itens Lançados, confirmando após no botão [excluir].

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image21.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image21.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image3.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image3.png)
`,
  "Transferência de bens - Página 2 - Procedimentos Patrimônio": `
# Transferência de bens em Lote

### Inclusão

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Transferência de bens > Em Lote > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image55.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image55.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image26.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image26.png)

### Alteração

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Transferência de bens > Em Lote > Alteração
\`\`\`

### Cancelar Transferência

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Transferência de bens > Em Lote > Cancela Transferência
\`\`\`
`,
  "Termo de Guarda - Procedimentos Patrimônio": `
## Inclusão

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Termo de Guarda > Inclusão
\`\`\`

Neste procedimento verifica-se a presença de duas abas: Guarda e Itens. A aba Guarda é composta pelos campos abaixo:

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image70.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image70.png)

- **Código da guarda:** gerado automaticamente pelo sistema; cabe ao usuário informar o responsável pela guarda do bem ou bens patrimoniais.
- **Responsável:** caso desconheça o código do responsável poderá proceder à pesquisa clicando no link [responsável].
- **Tipo de guarda:** informar o código do tipo de guarda que se quer incluir. Caso desconheça o código, poderá pesquisar clicando no link [tipo de guarda].
- **Data da guarda**
- **Observação:** observações que julgar necessárias para a guarda que se está incluindo.

Encerra-se a primeira etapa da inclusão do termo de guarda clicando no botão [incluir].

A aba Itens é composta por:

- **Código da guarda:** após o preenchimento da aba Guarda, o código já pode ser observado nesta etapa.
- **Código do bem:** informar o código do bem ou bens que quer incluir neste termo. Caso desconheça o código, poderá pesquisá-lo clicando no link [código do bem].

A tela de pesquisa trará todos os bens do departamento no qual o usuário está logado, devendo proceder à escolha do bem que deseja incluir no termo de guarda.

- **Data inicial:** data inicial da guarda do bem.
- **Data final:** final do termo de guarda, não obrigatória quando não for possível determinar o prazo final da guarda.
- **Observação:** o conteúdo do texto deve versar especificamente sobre o bem que está sendo incluído.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image91.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image91.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image25.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image25.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image14.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image14.png)

## Alteração

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Termo de Guarda > Alteração
\`\`\`

Incluído o bem, este poderá ser alterado neste mesmo procedimento, bastando clicar no link A.

## Exclusão

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Termo de Guarda > Exclusão
\`\`\`

Incluído o bem, este poderá ser excluído neste mesmo procedimento, bastando clicar no link E. Feito isso, poderá proceder à inclusão de outros bens, seguindo o mesmo roteiro acima especificado.

Para emitir o Termo de Guarda, basta o usuário clicar no botão Imprimir.

É possível inserir e/ou alterar textos no termo de guarda. Se o termo já é utilizado pelo usuário, basta alterar ou acrescentar o texto existente acessando **Configurações > Procedimentos > Manutenção do doc/parágrafo > Alteração** (figura 30).

Caso o termo nunca tenha sido usado, verifique seu código em **Configurações > Cadastros > Tipos de documentos** (figura 31). Uma vez conhecido o código, acesse **Configurações > Procedimentos > Manutenção de documentos/parágrafos > Inclusão** (figura 32). Na aba Documentos, informe o nome e o código do termo de guarda e clique em “Incluir” (figura 33). Na aba Parágrafo, o campo “Parágrafo Novo” abre uma caixa de texto para digitação do novo texto do termo.
`,
  "Devolução do Termo de Guarda - Procedimentos Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Devolução do Termo de Guarda
\`\`\`

Este procedimento é destinado a interromper a vigência do Termo de Guarda, cujo bem foi entregue antes do vencimento final do termo.

Em havendo mais de um Termo de Guarda, o sistema trará inicialmente uma tabela enumerando todas as guardas vigentes. Ao usuário caberá escolher o termo de guarda na tabela ou informar o código da guarda no campo indicado.

Feito isso, a próxima tela trará todas as informações da guarda realizada:

- **Código da guarda**
- **Data da devolução**
- **Código da situação**
- **Observação**

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image19.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image19.png)

Além das informações acima, a tela mostra uma listagem do bem ou bens contidos no termo de guarda selecionado. Conferidas as informações, o usuário deve marcar os bens que deixarão de ficar sob a guarda de determinado servidor no checkbox localizado ao lado do código da guarda.
`,
  "Confirmação de Transferência - Procedimentos Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Confirmação de Transferência
\`\`\`

Para que um bem seja transferido de forma efetiva para outro departamento, deverá sempre receber a confirmação de transferência.

A tela de confirmação traz:

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image49.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image49.png)

- **Data da confirmação:** informa a data em que se está confirmando a transferência dos bens patrimoniais.
- **Nome do usuário:** informa o usuário que está procedendo à confirmação de transferência.
- **Transferência:** representa o código da transferência a ser digitada pelo usuário. Caso desconheça o código, poderá pesquisar clicando no link [transferência].

Selecionada a transferência, basta o usuário clicar no botão [incluir] para confirmar a operação. Feito isso, o sistema dará ao usuário a possibilidade de imprimir um relatório de transferência, bastando clicar no botão [ok] na caixa de mensagem.
`,
  "Alterar Placa - Procedimentos Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Alterar Placa
\`\`\`

Esta rotina é destinada à alteração do número da placa de um bem patrimonial, cujos critérios de modificação da placa identificadora devem ficar a cargo da administração pública.

Para ter acesso ao bem, o usuário deverá proceder à pesquisa, informando ao sistema um destes filtros:

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image95.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image95.png)

- **Placa**
- **Código do bem**
- **Classificação**
- **Descrição do bem**
- **Descrição departamento**

Prestada esta informação, deve o usuário clicar no botão Pesquisar para que o sistema proceda à procura.

A tela de alteração contém:

- **Código do bem**
- **Descrição do bem**
- **Placa**
- **Observação referente à placa**

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image47.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image47.png)

O código e a descrição do bem não poderão ser alterados. O usuário deverá informar o novo número de placa no campo Placa e justificar a troca no campo Observação referente à placa.
`,
  "Alterar Situação - Procedimentos Patrimônio": `
## Individual

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Alterar Situação > Individual
\`\`\`

Para ter acesso ao bem o usuário deverá obrigatoriamente proceder à pesquisa, informando ao sistema um destes filtros:

- **Placa**
- **Código do bem**
- **Classificação**
- **Descrição do bem**
- **Descrição departamento**

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image79.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image79.png)

Prestada esta informação, o usuário deve clicar no botão Pesquisar para que o sistema proceda à procura. A tela de alteração irá trazer:

- **Código bem**
- **Data**
- **Departamento**
- **Divisão**
- **Código da situação**
- **Justificativa**

Ao usuário é permitido alterar a divisão na qual o bem está lotado, o código da situação do bem e registrar a justificativa da alteração.

## Global

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Alterar Situação > Global
\`\`\`

A tela de alteração trará uma tabela com todos os lotes cadastrados, devendo o usuário informar ao sistema o código do lote ou sua descrição.

Selecionado o lote, a nova tela conterá:

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image4.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image4.png)

- **Código do lote**
- **Descrição do lote**
- **Data**
- **Departamento**
- **Divisão**
- **Código de situação**
- **Justificativa**

Ao usuário é permitido alterar a divisão na qual o bem está vinculado, a situação do bem e registrar a justificativa das alterações realizadas. Todos os bens vinculados a esse lote sofrerão as alterações realizadas neste procedimento.
`,
  "Parâmetros - Procedimentos Patrimônio": `
## Parâmetros da Instituição

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Parâmetros > Parâmetros da Instituição
\`\`\`

## Parâmetros Globais

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Parâmetros > Parâmetros Globais
\`\`\`

Define a classificação estrutural a ser utilizada na codificação dos bens patrimoniais.

A tela de inclusão contém:

- **Código:** código da classificação estrutural cadastrada no sistema.

Caso haja mais de um estrutural cadastrado, o sistema abrirá uma tela onde o usuário deverá informar o código do estrutural ou sua descrição para que o sistema proceda à pesquisa. Selecionado o estrutural, conclui-se o processo clicando no botão [incluir].

Uma vez definido o estrutural, este não mais poderá ser modificado, devendo ser definido no momento da implantação do sistema, antes do cadastramento de bens patrimoniais.

## Parâmetros de Placa

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Parâmetros > Parâmetros de placa
\`\`\`

Este procedimento define o tipo de configuração de placa que será utilizada pela administração pública no controle de seus bens patrimoniais.

Na tela, deve o usuário informar:

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image30.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image30.png)

- **Tipo de configuração de placa**
- **Obrigar a informar placa**
- **Quantidade de dígitos da sequência da placa**
- **Sequencial da placa**

No tipo de configuração de placa, o usuário deve informar o código da configuração que irá utilizar. Caso desconheça o código, poderá pesquisar clicando no link [tipo de configuração de placa].

Se o tipo escolhido pelo administrador for o sequencial digitado, será possível configurar o parâmetro Obrigar a informar a placa. Se definido como “SIM”, ao cadastrar um bem patrimonial será obrigatório informar o número da placa identificadora. Se definido como “NÃO”, o número deixará de ser obrigatório.

Escolhida a configuração, deve preencher a quantidade de dígitos da sequência da placa e o sequencial inicial da placa. Por exemplo, em uma conversão de dados, se o último bem convertido possuía a numeração 555, deve-se informar 555 para que o próximo bem cadastrado receba o número 556.

Este parâmetro não será utilizado se o tipo de configuração de placa for o sequencial digitado. A configuração deverá ser definida previamente, no momento da implantação do sistema e antes do cadastro dos bens patrimoniais.
`,
  "Processamento da Depreciação - Procedimentos Patrimônio": `
## Automático

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Processamento da Depreciação > Automático
\`\`\`

## Manual

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Processamento da Depreciação > Manual
\`\`\`

## Desprocessamento

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Processamento da Depreciação > Desprocessamento
\`\`\`
`,
  "Baixa de Bens - Procedimentos Patrimônio": `
## Individual

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Baixa de Bens > Individual
\`\`\`

## Cancelamento da Baixa

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Baixa de Bens > Cancelamento da Baixa
\`\`\`

## Por Lote

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Baixa de Bens > Por Lote
\`\`\`
`,
  "Inventário - Procedimentos Patrimônio": `
## Inclusão de Abertura

Para inclusão de um inventário, a tela que se apresenta é a seguinte:

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Inventário > Abertura > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario10.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario10.png)

Com os seguintes campos:

- **Código do Inventário:** sequencial automático gerado pelo e-cidade.
- **Data de Abertura:** data do e-cidade.
- **Período Inicial:** informa data inicial do inventário.
- **Período Final:** informa data final do inventário.
- **Exercício:** ano de exercício do e-cidade.
- **Processo:** abre campo de pesquisa com processos vinculados ao protocolo.
- **Comissão:** informa comissão já cadastrada anteriormente em cadastro de comissões.
- **Observação:** campo de livre preenchimento, para mais informações.

## Anulação

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Inventário > Abertura > Anulação
\`\`\`

## Manutenção

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Inventário > Manutenção
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario8.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario8.png)

- **Inventário:** clicando na âncora abre a lista de inventários incluídos.
- **Itens Vinculados:** opção de executar a manutenção do inventário, com bens já vinculados ou filtrar novos bens para inclusão.
- **Departamento:** informa o departamento para a busca.
- **Divisão:** informa a divisão caso o departamento possua.
- **Convênio:** convênio cadastrado anteriormente.
- **Classificação:** seleciona intervalo de classificações de bens do patrimônio.
- **Código do Bem:** intervalo de códigos de bem, código criado automaticamente pelo sistema para cada bem incluído.
- **Placa:** intervalo de placas de identificação dos bens do patrimônio.
- **Intervalo de Valor:** intervalo de valor de aquisição dos bens.
- **Período de Aquisição Inicial:** data inicial da aquisição para a busca.
- **Período de Aquisição Final:** data final da aquisição para a busca.
- **Tipo:** selecionar o tipo a ser filtrado (Todos, Materiais, Imóveis, Semoventes).

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario7.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario7.png)

Ao clicar no bem, o mesmo já está sendo encaminhado para processamento. Porém, para realizar alterações nos campos situação, departamento, divisão e vida útil, é preciso selecioná-lo.

Os bens selecionados para o inventário informado ficarão em destaque na cor verde. Os bens não incluídos em um inventário ficarão na cor branca e os que pertencem a outro inventário na cor lilás, conforme legenda:

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario6.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario6.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario4.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario4.png)

## Desvincular Bem

Havendo a necessidade de desvincular algum bem já incluído no inventário, deverá ser acessada a rotina:

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Inventário > Desvincular Bem
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario2.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario2.png)

Selecione o bem a ser desvinculado e clique em Desvincular Itens.

***ATENÇÃO! Para realizar este procedimento, o inventário não pode ter sido processado!***

Para processar os dados informados, basta informar o código do inventário e a data inicial, além da comissão, que deverá ser previamente cadastrada em:

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Comissões > Inclusão
\`\`\`

Com os responsáveis pelo levantamento do inventário.

## Processar Inventário

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Inventário > Processar Inventário
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario13.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario13.png)

## Desprocessar Inventário

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Inventário > Desprocessar Inventário
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario15.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/inventario15.png)
`,
  "Tipos de baixa - Cadastro Patrimônio": `
## Inclusão

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Tipos de baixa > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image100.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image100.png)

- **Motivo da baixa:** código sequencial criado automaticamente a partir da inclusão do novo Tipo de Baixa.
- **Descrição do motivo da baixa:** descrição do tipo de baixa, por exemplo venda, doação, furto ou sinistro.
- **Obrigatório Anexar Documento:** se marcada, ao realizar a baixa será obrigatório anexar um documento que a justifique. Exemplo: para baixa por furto, poderá ser obrigatório anexar o Boletim de Ocorrência (BO).

## Alteração

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Tipos de baixa > Alteração
\`\`\`

Permite alterar a descrição do tipo de baixa e adicionar ou remover a obrigatoriedade de anexo no momento da baixa do bem.

## Exclusão

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Tipos de baixa > Exclusão
\`\`\`

Permite excluir o tipo de baixa, desde que ainda não tenha sido utilizado para baixar nenhum bem.
`,
  "Tipo de Aquisição - Cadastro Patrimônio": `
## Inclusão

Rotina que permite incluir um tipo de aquisição para melhor controle do cadastro de bens. São exemplos: compra, permuta, doação e inventário.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Tipo de Aquisição > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image104.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image104.png)

## Alteração

Rotina que permite alterar a descrição do tipo de aquisição.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Tipo de Aquisição > Alteração
\`\`\`

## Exclusão

Rotina que permite excluir um tipo de aquisição, desde que não esteja vinculado a nenhum bem.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Tipo de Aquisição > Exclusão
\`\`\`
`,
  "Modelo - Cadastro Patrimônio": `
## Inclusão

Rotina que permite incluir um modelo para utilização no cadastro de um bem.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Modelo > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image41.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image41.png)

## Alteração

Rotina que permite alterar a descrição de um modelo cadastrado.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Modelo > Alteração
\`\`\`

## Exclusão

Rotina que permite excluir um modelo, desde que não esteja vinculado a nenhum bem.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Modelo > Exclusão
\`\`\`
`,
  "Marca - Cadastro Patrimônio": `
## Inclusão

Rotina que permite incluir uma marca para utilização no cadastro de um bem.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Marca > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image44.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image44.png)

## Alteração

Rotina que permite alterar a descrição da marca.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Marca > Alteração
\`\`\`

## Exclusão

Rotina que permite excluir uma marca, desde que não esteja vinculada a nenhum bem.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Marca > Exclusão
\`\`\`
`,
  "Medidas - Cadastro Patrimônio": `
## Inclusão

Rotina que permite incluir medidas para utilização no cadastro de um bem.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Medidas > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image61.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image61.png)

## Alteração

Rotina que permite alterar a descrição das medidas.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Medidas > Alteração
\`\`\`

## Exclusão

Rotina que permite excluir uma medida, desde que não esteja vinculada a nenhum bem.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Medidas > Exclusão
\`\`\`
`,
  "Convênios - Cadastro Patrimônio": `
## Inclusão

Rotina que permite incluir um convênio para utilização durante a inclusão de um bem. Como pré-requisito, o convênio deve possuir um Cadastro Geral do Município (CGM). Caso não possua, efetive-o; para mais informações [clique aqui](https://e-cidade.wiki.br/patrimonial/protocolo/#!cadastros_geral_do_municipio.md).

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Convênios > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image62.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image62.png)

## Alteração

Rotina que permite alterar o Cadastro Geral do Município (CGM) vinculado a um convênio.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Convênios > Alteração
\`\`\`

## Exclusão

Rotina que permite excluir um convênio, desde que não esteja vinculado a nenhum bem.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Convênios > Exclusão
\`\`\`
`,
  "Comissões - Cadastro Patrimônio": `
## Inclusão

A inclusão de uma comissão consiste em informar as datas inicial e final, atribuir membros à comissão e definir seu tipo. A comissão poderá ser utilizada, por exemplo, na abertura de um inventário, onde é obrigatório designar uma comissão.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Comissões > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image43.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image43.png)

- **Sequencial:** sequencial atribuído automaticamente à comissão.
- **Descrição:** descrição da comissão.
- **Data Inicial:** início dos trabalhos da comissão.
- **Data Final:** data final de exercício da comissão.
- **Observação:** campo de texto livre para informações adicionais, como a finalidade da comissão.

A segunda aba (Membros) destina-se à inclusão dos membros da comissão.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image106.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image106.png)

- **Comissão:** sequencial atribuído automaticamente à comissão.
- **Número CGM:** o membro precisa possuir Cadastro Geral do Município (CGM). Caso não possua, efetive a inclusão; para mais informações [clique aqui](https://e-cidade.wiki.br/patrimonial/protocolo/#!cadastros_geral_do_municipio.md).
- **Tipo Membro:** Gestor, Secundário, Suplente ou Fiscal.
- **Data de Início:** data em que o membro foi designado à comissão.
- **Data de Término:** data de término da participação do membro.

Após a inclusão, o membro será listado em “Membros Cadastrados” junto com os demais.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image107.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image107.png)

## Alteração

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Comissões > Alteração
\`\`\`

Permite alterar descrição da comissão, datas inicial/final, observação e membros. Não é permitida a exclusão de membros; para indicar que um membro não participa mais, defina uma data de término.

## Exclusão

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Comissões > Exclusão
\`\`\`

Permite excluir uma comissão, desde que não esteja vinculada a nenhum inventário.
`,
  "Seguradoras - Cadastro Patrimônio": `
## Inclusão

Rotina que permite incluir uma seguradora. Como pré-requisito, é necessário que possua um Cadastro Geral do Município (CGM).

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Seguradoras > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image66.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image66.png)

- **Seguradora:** código sequencial automático atribuído à seguradora incluída.
- **Número do CGM:** número atribuído à seguradora no cadastro geral do município. Caso não saiba o número, clique em “Numcgm” e efetive a busca. Se a seguradora não possuir CGM, efetive-o; para mais informações [clique aqui](https://e-cidade.wiki.br/patrimonial/protocolo/#!cadastros_geral_do_municipio.md).
- **Contato na seguradora:** nome do representante legal ou preposto da seguradora.

## Alteração

Permite alterar a seguradora e suas informações, como CGM vinculado e contato.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Seguradoras > Alteração
\`\`\`

## Exclusão

Permite excluir uma seguradora, desde que não esteja vinculada a nenhuma apólice.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Seguradoras > Exclusão
\`\`\`
`,
  "Apólices - Cadastro Patrimônio": `
## Inclusão

No e-cidade, a tela de inclusão é composta de duas abas: “Cadastro de apólices” e “Itens da apólice”.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Apólices > Inclusão
\`\`\`

**[ABA Cadastro de apólices]**

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image42.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image42.png)

- **Código da apólice:** código sequencial atribuído automaticamente após a inclusão.
- **Código da seguradora:** caso desconheça o código, clique em “Código da seguradora” e aplique filtros adicionais, como busca por CGM. Se a seguradora não possuir cadastro, será necessário realizá-lo; para mais informações [clique aqui](https://e-cidade.wiki.br/patrimonial/protocolo/#!cadastros_geral_do_municipio.md).
- **Apólice:** número da apólice de seguro.
- **Vencimento da Apólice:** vencimento da apólice incluída.

Para efetivar a ação, clique em *“Incluir”*; para consultar apólices cadastradas, clique em *“Pesquisar”*.

**[ABA Itens da apólice]**

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image23.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image23.png)

- **Código apólice:** código atribuído após a inclusão na aba “Cadastro de apólices”.
- **Código do bem:** informe o código do bem segurado. Caso desconheça, clique em “Código do bem” e aplique filtros como placa, código ou descrição do bem.

Ao clicar em *“Incluir”*, o bem será listado em “Itens Lançados”.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio_tecnico/image108.png)](https://e-cidade.wiki.br/patrimonial/patrimonio_tecnico/image108.png)

Se o bem incluído não for o desejado, clique no “E” da coluna “Opções” e confirme em *“Excluir”*.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio_tecnico/image109.png)](https://e-cidade.wiki.br/patrimonial/patrimonio_tecnico/image109.png)

## Alteração

Rotina que permite alterar as apólices e as informações vinculadas a elas.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Apólices > Alteração
\`\`\`

## Exclusão

Rotina que permite excluir uma apólice cadastrada no e-cidade.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Apólices > Exclusão
\`\`\`
`,
  "Situação dos Bens - Cadastro Patrimônio": `
## Inclusão

Rotina que permite incluir uma situação que poderá ser atribuída durante o cadastro do bem.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Situação dos Bens > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image81.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image81.png)

- **Código da situação:** código sequencial automático atribuído à situação incluída.
- **Descrição da situação:** descrição da situação cadastrada.

## Alteração

Permite alterar a descrição de uma situação cadastrada no e-cidade.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Situação dos Bens > Alteração
\`\`\`

## Exclusão

Permite excluir uma situação, desde que não esteja vinculada a nenhum bem.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Situação dos Bens > Exclusão
\`\`\`
`,
  "Classificação dos Bens - Cadastro Patrimônio": `
## Inclusão

Rotina que permite incluir uma classificação para utilização durante o cadastro de um bem ou conjunto de bens.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Classificação dos Bens > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image69.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image69.png)

- **Código:** código sequencial automático atribuído ao concluir a inclusão.
- **Máscara:** estrutura numérica configurada para criar a classificação e identificar seus níveis.
- **Classificação:** classificação numérica a criar conforme a estrutura definida em Máscara, para organizar os bens patrimoniais.
- **Descrição:** nome/descrição da classificação.
- **Observações:** campo livre para detalhes referentes à classificação.
- **Conta Plano:** código da Conta do Plano de Contas (Contabilidade) onde os bens desta classificação farão seus lançamentos contábeis.
- **Conta Depreciação:** código da conta em que serão lançados os registros de depreciação dos bens desta classificação.
- **Nível:** Sintética ou Analítica.
  - **Sintética:** contas de nível maior referentes ao grupo e classe dos bens.
  - **Analítica:** contas de nível menor referentes ao identificador do bem; somente classificações desta opção estarão disponíveis para vinculação ao bem.
- **Bem Tipo:** MÓVEIS, IMÓVEIS ou SEMOVENTES.
- **Tipo de Depreciação:** tipo válido para a classificação, que ficará como padrão.
- **Vida Útil:** vida útil padrão dos bens da classificação, em anos.

Para concluir, clique em *“Incluir”*. Para consultar classificações cadastradas, clique em *“Pesquisar”*.

## Alteração

Rotina que permite alterar a classificação e suas informações.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Classificação dos Bens > Alteração
\`\`\`

## Exclusão

Rotina que permite excluir uma classificação, desde que não esteja sendo utilizada por nenhum bem.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Classificação dos Bens > Exclusão
\`\`\`
`,
  "Bens - Cadastro Patrimônio": `
# Bens

## Individual

### Inclusão

Nesta rotina é possível incluir os bens que a administração pública detém propriedade ou domínio, de forma direta ou indireta.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Bens > Individual > Inclusão
\`\`\`

Ao acessar a rotina, o e-cidade abrirá uma janela “Notas Pendentes” caso haja integração e a devida parametrização. Ela lista notas pendentes de cadastro originadas por uma entrada da Ordem de Compra no módulo Material cujo empenho vinculado possui natureza material permanente. Somente será possível efetivar a liquidação do empenho após cadastrar os bens vinculados às notas fiscais.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image110.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image110.png)

Há duas formas de cadastrar um bem:

- **(1) MANUAL:** feche a tela “Notas Pendentes” e prossiga com o cadastro.
- **(2) NOTAS PENDENTES:** efetue dois cliques sobre a linha do bem desejado.

Ao usar Notas Pendentes, Data de Aquisição, Descrição do Bem, Fornecedor e Valor de Aquisição já estarão preenchidos.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image111.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image111.png)

Ao efetuar dois cliques sobre uma Nota Pendente cuja quantidade seja superior a um, será exibida a tela de inclusão global de bens.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Bens > Global > Inclusão
\`\`\`

### Individual > Inclusão

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image115.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image115.png)

**[ABA Cadastro de bens]**

*Informações do Bem*

- **Foto:** clique no ícone para selecionar um arquivo do computador e visualizar uma prévia. Para remover a foto, clique em “Remover”.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image116.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image116.png)

- **Código do bem:** código sequencial atribuído automaticamente após a inclusão.
- **Placa:** habilitada para digitação quando a configuração for “SEQUENCIAL DIGITADO”; se estiver como “SEQUENCIAL AUTOMÁTICO”, ficará bloqueada e sugerirá a placa sequencial.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Parâmetros > Parâmetros de placa
\`\`\`

***NOTA:** Se a configuração for SEQUENCIAL DIGITADO e a placa estiver em uso por outro bem ou constar no histórico de placas, não será possível incluí-la. Se estiver ativa em outro bem, altere a placa e exclua o histórico para liberá-la. Se constar somente como histórico, exclua-o.*

**Alteração de Placa** [Clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!procedimentos_alterar_placa.md)

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Alterar Placa
\`\`\`

**Exclusão do Histórico de Placa** [Clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/link)

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Exclusão do Histórico de Placa
\`\`\`

- **Data da aquisição:** poderá estar bloqueada com a data da sessão se usar Notas Pendentes ou aberta para digitação se o cadastro for manual.
- **Descrição do bem:** descrição sintética do bem, limitada a 100 caracteres.
- **Classificação:** digite o código da classificação analítica ou clique no link “Classificação”. Para mais informações, [clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!cadastros_classificacao_dos_bens.md).
- **Fornecedor:** digite o código do CGM ou clique em “Fornecedor” para usar filtros, como CNPJ. O fornecedor deve possuir CGM; para mais informações, [clique aqui](https://e-cidade.wiki.br/patrimonial/protocolo/#!cadastros_geral_do_municipio.md).
- **Tipo de Aquisição:** forma de aquisição do bem, como compras, doação ou inventário. Para incluir um tipo, [clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!cadastros_tipo_de_aquisicao.md).
- **Departamento:** localização atual ou destino do bem. Caso não esteja cadastrado, efetue ou solicite a inclusão.

\`\`\`
DB:CONFIGURAÇÃO > Configuração > Cadastros > Cadastro de Departamentos > Inclusão
\`\`\`

- **Divisão:** após informar o departamento, escolha uma divisão disponível ou efetue sua inclusão.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Cadastro de Divisões > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image117.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image117.png)

- **Convênio:** convênio referente ao bem. Para incluir, [clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!cadastros_convenios.md).
- **Código da situação:** informe o estado do bem ou pesquise clicando no link “Código da situação”. Para incluir, [clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!cadastros_situacao_dos_bens.md).

*Dados Financeiros*

- **Valor de Aquisição:** pode estar preenchido se usar Notas Pendentes; no cadastro manual, informe o valor.
- **Valor de Residual:** valor do ativo que sofrerá depreciação ao final da vida útil.
- **Valor Depreciável:** custo de aquisição subtraído do valor residual.
- **Valor Atual:** valor do bem no momento do cadastro.
- **Tipo Depreciação:** digite o código ou clique no link “Tipo Depreciação” e selecione uma opção, como QUOTAS CONSTANTES, NÃO EXECUTA DEPRECIAÇÃO ou SOMA DOS DÍGITOS. Se a classificação tiver um tipo padrão, esta opção já retornará preenchida.
- **Vida Útil:** informe a vida útil do bem. Se a classificação tiver vida útil padrão, esta opção já retornará preenchida.

*Outros Dados*

- **Medida:** medida referente ao bem. Para incluir, [clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!cadastros_medidas.md).
- **Modelo:** modelo referente ao bem. Para incluir, [clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!cadastros_modelo.md).
- **Marca:** marca referente ao bem. Para incluir, [clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!cadastros_marca.md).

*Observações*

Descreva neste campo o bem que está sendo cadastrado.

Para concluir o cadastro, clique em “Incluir”. Para importar informações de um bem já cadastrado, clique em “Importação” e aplique os filtros disponíveis.

**[ABA Dados do Imóvel]**

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image118.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image118.png)

Esta aba configura dados de bens imóveis, tangíveis e não suscetíveis de movimentação, como terrenos e edificações.

- **Código do bem:** código sequencial atribuído após a inclusão na aba “Cadastro de bens”.
- **Código do lote:** lote em que se encontra o bem imóvel. Para pesquisar, clique em “Código Lote”.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image119.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image119.png)

- **Observações:** observações relativas ao bem imóvel.

**[ABA Dados do Material]**

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image120.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image120.png)

Esta aba configura dados de bens móveis tangíveis, suscetíveis de movimentação própria ou por força alheia.

- **Código do bem:** código sequencial atribuído após a inclusão na aba “Cadastro de bens”.
- **Nota fiscal:** número da nota fiscal do bem adquirido.
- **Empenho do Sistema:** indica se o empenho que originou a aquisição é do e-cidade (Sim/Não).
- **Seq. Empenho:** se Empenho do Sistema for Sim, será possível digitar o código sequencial ou pesquisar por Nome/Razão Social e CNPJ/CPF clicando em “Seq. Empenho”. Se não, somente será possível digitar o sequencial.
- **Número do empenho:** conforme o Seq. Empenho digitado, o e-cidade fará a busca e exibição conforme Número Empenho/Ano.
- **Ordem de compra:** número da ordem de compra.
- **Garantia:** prazo de garantia do bem.

### Alteração

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Bens > Individual > Alteração
\`\`\`

Permite alterar informações de um bem cadastrado individualmente. Valor de Aquisição, Valor de Residual, Tipo Depreciação e Vida Útil não poderão ser alterados caso o bem já tenha sofrido depreciação. Apesar de o campo Placa estar aberto, não será possível alterá-lo; se necessário, utilize Alteração de Placa.

***NOTA:** As alterações realizadas nesta rotina geram registros no histórico de movimentação, que pode ser consultado na Consulta do Bem.*

\`\`\`
DB:PATRIMONIAL > Patrimônio > Consultas > Bens
\`\`\`

Também é possível emitir relatório referente ao histórico do bem:

\`\`\`
DB:PATRIMONIAL > Patrimônio > Relatórios > Ficha de bens > Histórico dos bens
\`\`\`
`,
  "Bens - Cadastro Patrimônio - Página 2": `
# Global

### Inclusão

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Bens > Global > Inclusão
\`\`\`

Ao acessar a rotina, o e-cidade abrirá uma janela “Notas Pendentes” caso haja integração e a devida parametrização. Ela listará notas pendentes de cadastro, originadas a partir de uma entrada da Ordem de Compra no módulo Material cujo empenho vinculado possui natureza material permanente. Portanto, somente será possível efetivar a liquidação do empenho após o cadastro dos respectivos bens vinculados às notas fiscais.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image125.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image125.png)

Há duas formas de cadastrar um bem:

- **(1) MANUAL:** para cadastrar bens por lote de forma manual, feche a tela “Notas Pendentes” e prossiga com o cadastro.
- **(2) NOTAS PENDENTES:** efetue dois cliques sobre a linha do bem que deseja cadastrar.

Ao usar Notas Pendentes, informações como quantidade, data de aquisição, descrição do bem, fornecedor e valor de aquisição já estarão preenchidas.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image124.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image124.png)

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image46.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image46.png)

*Dados Lote*

- **Lote:** código sequencial atribuído automaticamente ao lote após a inclusão do bem.
- **Quantidade:** quantidade de bens a serem cadastrados de forma global.
- **Descrição:** descrição do lote definido para cadastro de múltiplos bens.

*Informações do Bem*

- **Foto:** clique no ícone para buscar um arquivo local, selecionar a imagem e visualizar uma prévia. Para removê-la, clique em “Remover”.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image116.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image116.png)

- **Código do bem:** código sequencial atribuído automaticamente após a inclusão.
- **Placa:** estará habilitada para digitação caso a configuração seja “SEQUENCIAL DIGITADO”; se estiver como “SEQUENCIAL AUTOMÁTICO”, sugerirá a próxima placa após a última inclusão. As placas serão atribuídas em sequência conforme a quantidade de bens.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Parâmetros > Parâmetros de placa
\`\`\`

***NOTA:** Se a configuração for SEQUENCIAL DIGITADO e a placa informada ou alguma das subsequentes estiver em uso por outro bem ou constar no histórico de placas, não será possível incluí-la. Se estiver ativa em outro bem, será necessário alterar a placa e excluir o histórico para liberá-la. Se constar somente como histórico, será necessário excluí-lo.*

**Alteração de Placa** [Clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!procedimentos_alterar_placa.md)

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Alterar Placa
\`\`\`

**Exclusão do Histórico de Placa** [Clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/link)

\`\`\`
DB:PATRIMONIAL > Patrimônio > Procedimentos > Exclusão do Histórico de Placa
\`\`\`

- **Data da aquisição:** poderá estar bloqueada com a data da sessão se usar Notas Pendentes ou aberta para digitação se o cadastro for manual.
- **Descrição do bem:** descrição sintética do bem, limitada a 100 caracteres.
- **Classificação:** digite o código da classificação analítica ou clique no link “Classificação”. Para mais informações sobre inclusão ou manutenção, [clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!cadastros_classificacao_dos_bens.md).
- **Fornecedor:** digite o código do CGM ou clique em “Fornecedor” para aplicar filtros, como busca por CNPJ. O fornecedor deve possuir Cadastro Geral do Município (CGM); para mais informações, [clique aqui](https://e-cidade.wiki.br/patrimonial/protocolo/#!cadastros_geral_do_municipio.md).
- **Descrição da Aquisição:** forma de aquisição do bem, como compras, doação ou inventário. Para incluir um tipo de aquisição, [clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!cadastros_tipo_de_aquisicao.md).
- **Departamento:** localização atual ou destino do bem. Caso não esteja cadastrado, efetue ou solicite a inclusão.

\`\`\`
DB:CONFIGURAÇÃO > Configuração > Cadastros > Cadastro de Departamentos > Inclusão
\`\`\`

- **Divisão:** após informar o departamento, escolha uma divisão disponível ou efetue sua inclusão.

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Cadastro de Divisões > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image117.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image117.png)

- **Convênio:** convênio referente ao bem. Para incluir, [clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!cadastros_convenios.md).
- **Código da situação:** informe o estado do bem ou pesquise clicando no link “Código da situação”. Para incluir, [clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!cadastros_situacao_dos_bens.md).

*Dados Financeiros*

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image126.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image126.png)

- **Valor de Aquisição:** poderá estar previamente preenchido se usar Notas Pendentes; no cadastro manual, informe o valor de aquisição.
- **Valor de Residual:** valor do ativo que sofrerá depreciação ao final da vida útil.
- **Valor Depreciável:** custo de aquisição subtraído do valor residual.
- **Valor Atual:** valor do bem no momento em que está sendo cadastrado.
- **Tipo Depreciação:** digite o código ou clique no link “Tipo Depreciação” e selecione uma opção, como QUOTAS CONSTANTES, NÃO EXECUTA DEPRECIAÇÃO ou SOMA DOS DÍGITOS. Se a classificação tiver um tipo padrão, esta opção já retornará preenchida.
- **Vida Útil:** informe a vida útil do bem. Se a classificação tiver vida útil padrão, esta opção já retornará preenchida.

*Outros Dados*

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image127.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image127.png)

- **Medida:** medida referente ao bem. Para incluir, [clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!cadastros_medidas.md).
- **Modelo:** modelo referente ao bem. Para incluir, [clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!cadastros_modelo.md).
- **Marca:** marca referente ao bem. Para incluir, [clique aqui](https://e-cidade.wiki.br/patrimonial/patrimonio/#!cadastros_marca.md).

*Dados do Imóvel*

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image128.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image128.png)

- **Código do lote:** indica o lote no qual se encontra o bem imóvel. Caso desconheça o código, clique em “Código Lote” para aplicar filtros adicionais.
- **Observações:** campo livre para informações adicionais referentes aos imóveis cadastrados.

*Dados do Material*

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image129.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image129.png)

- **Nota fiscal:** número da nota fiscal do bem adquirido.
- **Empenho do Sistema:** indica se o empenho que originou a aquisição é do e-cidade (Sim/Não).
- **Seq. Empenho:** se Empenho do Sistema for Sim, será possível digitar o código sequencial ou pesquisar por Nome/Razão Social e CNPJ/CPF clicando em “Seq. Empenho”. Se não, somente será possível digitar o sequencial.
- **Ordem de compra:** número da ordem de compra.
- **Garantia:** prazo de garantia do bem.

*Observações*

Descreva neste campo o bem que está sendo cadastrado.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image130.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image130.png)

Para concluir o cadastro, clique no botão “Incluir”. Para realizar uma pesquisa rápida de outros lotes cadastrados, clique em “Pesquisar”.

### Alteração

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Bens > Global > Alteração
\`\`\`

Rotina que permite alterar algumas informações referentes aos bens cadastrados de forma global.
`,
  "Bens - Cadastro Patrimônio - Página 3": `
# Unificar / Desmembrar Notas

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Bens > Individual > Unificar / Desmembrar Notas
\`\`\`

Esta rotina permite unificar duas ou mais notas fiscais em um único bem no patrimônio. Ao acessar a rotina, serão listados bens com notas pendentes.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image121.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image121.png)

Basta selecionar os registros de entrada das notas fiscais que deseja unificar e clicar em “Confirmar”.

Após, o e-cidade retornará informações referentes à Inclusão de Bens. A maioria dos campos equivale à inclusão individual de bens, exceto pelos campos em **Dados das Notas**:

![Dados das Notas](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image122.png)

- **Nota(s):** notas selecionadas na tela “Notas Pendentes” que serão unificadas.
- **Valor Total:** soma dos valores das notas fiscais selecionadas.
- **Quantidade:** quantidade de bens a incluir.
- **Valor Residual (%):** percentual do valor residual do bem após sua vida útil; o valor equivalente aparece ao lado.

Ao final, o usuário poderá localizar e selecionar outras notas clicando em “Pesquisar Notas” ou efetivar o lançamento à lista clicando em “Lançar”.

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image123.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image123.png)

Para remover um bem da lista, clique no botão “Remover” na coluna “Ações”. Para concluir o cadastro, clique em “Salvar”.
`,
  "Tipo de Guarda - Cadastro Patrimônio": `
## Inclusão

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Tipo de Guarda > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image37.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image37.png)

- **Descrição do tipo de guarda:** descrição/espécie de guarda que deseja incluir.

Para concluir a inclusão, clique em “Incluir”. Para consultar os tipos de guarda já cadastrados, clique em “Pesquisar”.

## Alteração

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Tipo de Guarda > Alteração
\`\`\`

Permite alterar a descrição definida para o Tipo de Guarda.

## Exclusão

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Tipo de Guarda > Exclusão
\`\`\`

Permite excluir o Tipo de Guarda desde que não esteja sendo utilizado em nenhum Termo de Guarda.
`,
  "Cadastro de Divisões - Cadastro Patrimônio": `
## Inclusão

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Cadastro de Divisões > Inclusão
\`\`\`

[![](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image5.png)](https://e-cidade.wiki.br/patrimonial/patrimonio/files/patrimonio_tecnico/image5.png)

- **Código da divisão:** código sequencial gerado automaticamente após a inclusão.
- **Descrição da divisão:** nome da divisão do departamento que está sendo incluída.
- **Departamento:** código do departamento ao qual a divisão pertence. Para filtros adicionais, clique em “Depart”.
- **Ativa:** por padrão é “Sim”; se definida como “Não”, a divisão não será listada ao selecionar o departamento durante a inclusão de um bem.
- **Responsável:** nome do responsável pela divisão, que deverá possuir Cadastro Geral do Município (CGM). Para mais informações, [clique aqui](https://e-cidade.wiki.br/patrimonial/protocolo/#!cadastros_geral_do_municipio.md).

Para concluir, clique em “Incluir”. Para pesquisar as divisões cadastradas no e-cidade, clique em “Pesquisar”.

## Alteração

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Cadastro de Divisões > Alteração
\`\`\`

Permite alterar a descrição da divisão e outras informações.

## Exclusão

\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Cadastro de Divisões > Exclusão
\`\`\`

Permite excluir a divisão desde que não esteja sendo utilizada em nenhum bem.
`,
  "Tipo de Depreciação - Cadastro Patrimônio": `
\`\`\`
DB:PATRIMONIAL > Patrimônio > Cadastros > Tipo de Depreciação
\`\`\`

O tipo de depreciação define o método aplicado ao bem patrimonial. As modalidades citadas na documentação de cadastro de bens são:

- **Quotas constantes**
- **Não executa depreciação**
- **Soma dos dígitos**

O tipo de depreciação pode ser associado à classificação dos bens e, durante o cadastro do bem, a opção padrão da classificação poderá ser preenchida automaticamente.
`,
};
