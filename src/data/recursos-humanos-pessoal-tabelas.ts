export interface PessoalTabelaPage {
  title: string;
  content: string;
}

export const pessoalTabelaPages: PessoalTabelaPage[] = [
  {
    title: "Tabelas / Cargos",
    content: `# Tabelas / Cargos

Esta Rotina destina-se ao cadastro dos cargos, criados por lei, para os servidores municipais, independentemente do regime a que estes estejam vinculados. O cargo é geralmente ligado ao vínculo de origem do servidor quando da contratação, diferente da função, cuja aplicação destina-se ao controle dos casos de servidores que exercem temporariamente uma “função” com atribuições diferentes ao cargo de origem. Pode-se exemplificar com um caso de um servidor com cargo de Professor que exerce temporariamente a função de Diretor de Escola.

Segue orientação para o preenchimento dos campos conforme ilustrado na figura 03.

**Cargo:** Campo onde deve ser inserido o código que será utilizado para identificação do cargo, podendo ser uma sequência numérica à escolha do usuário.

**Descrição:** Colocar a descrição do cargo, conforme definido na norma legal que o criou.

**Grupo:** Informar a área de atuação do cargo. Caso não tenha a informação desejada, informe como 0 – Nenhum. Esta informação é utilizada para geração de dados para Cálculo Atuarial.

**Vagas:** Lançar o número de vagas criadas para o cargo correspondente, conforme definido na norma legal que o criou.

**CBO:** Lançar o código da Classificação Brasileira de Ocupações para o cargo, conforme tabela do Ministério do Trabalho. [Link para acesso](https://empregabrasil.mte.gov.br/76/cbo/).

**Classificação:** Campo de opção livre, podendo ser destinado pelo usuário para qualquer fim desejado, como uma codificação interna.

**Ativo:** Serve para ativar ou inativar o cargo.

**Lei:** Norma legal que cria ou regulamenta o cargo.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_cb4c42146dfce77c.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_cb4c42146dfce77c.png)
`,
  },
  {
    title: "Tabelas / Exceções Para Empenhos",
    content: `# Tabelas / Exceções Para Empenhos

## Aba Regras
[[ ↑ ]](https://e-cidade.wiki.br/folha/pessoal/#md-page-menu)

Esta rotina tem como objetivo gerar o empenho para uma rubrica específica na mesma dotação, independentemente da lotação a que o servidor que recebe esta rubrica esteja vinculado. Esta configuração está acima da configuração informada no cadastro de lotações, ou seja, se uma rubrica estiver configurada neste cadastro, o sistema não levará em conta a lotação a que o servidor estiver vinculado para verificar em que dotação e elemento deve efetuar o empenho.
Todos os dados abaixo serão facilmente identificados através do relatório ***Financeiro > Orçamento > Relatórios > Demonstrativos do Orçamento > Saldo de Verbas da Despesa***.

**Sequencial:** Gerado automaticamente pelo sistema.

**Exercício:** Destina-se ao exercício contábil.

**Rubrica:** Código da rubrica que terá um tratamento diferenciado nos empenhos.

**Órgão:** Identificador do Órgão, para fins de encontrar a dotação.

**Unidade:** Identificador da Unidade.

**Projeto/Atividade:** Identificador do Projeto/Atividade.

**Recurso:** Identificador do Recurso.

**Característica Peculiar:** Identificador de receita e despesa (obrigatório para o Estado do Rio Grande do Sul).

**Descobramento:** Desdobramento que o usuário quer que o sistema empenhe nas rubricas marcadas na *Aba Rubricas*.

**Tipo de Folha:** Caso necessário que esse "desvio" seja executado somente em um tipo de cálculo específico, escolher nesse campo.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_f51a6efb4ea1c4ef.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_f51a6efb4ea1c4ef.png)

## Aba Rubricas
[[ ↑ ]](https://e-cidade.wiki.br/folha/pessoal/#md-page-menu)

Local onde são marcadas todas as rubricas que sofrerão o *"desvio"* na hora de gerar os empenhos automáticos.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_f51a6efb4ea1san.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_f51a6efb4ea1san.png)
`,
  },
  {
    title: "Tabelas / Lotações",
    content: `# Tabelas / Lotações

Esta rotina tem como objetivo principal o agrupamento dos servidores de uma determinada instituição e a sua vinculação a um órgão do orçamento. A sua descrição e estrutura são de livre escolha da área de pessoal, de uma maneira que atenda às suas necessidades organizacionais e permita que os valores pagos ou retidos dos servidores ligados a ela sejam creditados ou debitados corretamente no orçamento. Este vínculo permite a emissão de requisições de empenho com os valores já agrupados em seus recursos e elementos corretos, facilitando o controle e diminuindo a probabilidade de erros no momento do empenho.

Também possibilita a emissão de diversos relatórios agrupados por órgãos (só possível quando as lotações estão vinculadas aos órgãos do orçamento) e lotações, facilitando a conferência dos dados pelo pessoal responsável.

## Aba Lotações
[[ ↑ ]](https://e-cidade.wiki.br/folha/pessoal/#md-page-menu)

**Código da Lotação:** Gerado automaticamente pelo sistema.

**Máscara:** Mostra a máscara para o estrutural da lotação definida em *Pessoal > Procedimentos > Manutenção de Parâmetros > Campo Código Estrutural da Lotação*.

**Estrutural da Lotação:** Campo onde deve ser lançado o código estrutural da lotação.

**Descrição:** Campo destinado à descrição da lotação.

**Código do Calendário:** Lançar o código do calendário desejado diretamente ou pesquisando pelo link *“Código do calendário”* (cadastrados previamente em Cadastros > Calendários).

**Numcgm:** Campo onde deve ser lançado o código do CGM a que a lotação está vinculada (campo não obrigatório).

**Característica Peculiar:** São identificadores de receitas e despesas instituídos para controle do Tribunal de Contas do RS.

**CNPJ (Jurídica):** Esse campo se refere ao número do CNPJ do CGM escolhido acima.

**Analítica:** Opção “Não”: inclui uma lotação onde não serão vinculados servidores. É uma lotação sintética e não terá nenhuma ligação com o orçamento. Tem uma finalidade estrutural, como em um organograma.

Opção *“Sim”*: Esta opção abre na tela os campos *“Órgão”* e *“Unidade”*, onde será definido a que órgão e unidade do orçamento esta lotação será vinculada. Só devem ser vinculados servidores à lotação cadastrada com esta opção.

**Ativo:** Serve para ativar ou inativar uma lotação. As lotações inativas não serão visualizadas na emissão de relatórios ou nos demais cadastros no momento da pesquisa para inserção da mesma, como no caso do cadastro de servidores, por exemplo. A digitação direta do código de uma lotação inativa continuará disponibilizada, podendo, por escolha do usuário, vincular um servidor a uma lotação inativa.

**Órgão:** Ao clicar no link “Órgão”, o sistema irá abrir uma janela com os órgãos e unidades orçamentárias. Para escolher, basta clicar em cima da opção desejada.

**Unidade:** O campo unidade já é preenchido quando é escolhida a opção no link Órgão, mas pode ser alterado ao acionar o link Unidade.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_7321ec74e97af525.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_7321ec74e97af525.png)

## Aba Elementos
[[ ↑ ]](https://e-cidade.wiki.br/folha/pessoal/#md-page-menu)

**Código:** Gerado automaticamente pelo sistema.

**Código da Lotação:** Mostra o código da lotação gerado pelo sistema.

**Recurso:** Abre uma janela listando os recursos cadastrados no orçamento.

**Projetos/Atividades:** Abre uma janela listando os projetos/atividades ligados ao recurso selecionado. Deve ser incluído apenas um projeto atividade para cada exercício.

**Vínculo:** Serve para indicar se a lotação criada é destinada para servidores ativos, inativos ou pensionistas.

***Obs:*** O cadastro incorreto de um servidor em uma lotação cujo vínculo indicado no cadastro de servidores difere do vínculo selecionado para a lotação acarretará problemas para a conferência em relatórios onde são selecionados filtros do orçamento, já que os valores de um relatório financeiro que não utiliza este filtro necessariamente apresentará valores diferentes nestes casos.

**Elementos Secundários:** Esta opção é utilizada quando o usuário necessita empenhar uma rubrica em um elemento de um *recurso/projeto/atividade* específico, diferente da configuração original da lotação ou do elemento configurado para o código. Podemos exemplificar com o caso do salário família, que é pago em uma única rubrica para todos os servidores como recurso livre, mas que para os servidores FUNDEB deve ser empenhado neste recurso.

Em elementos secundários, serão informados o recurso e o projeto atividade de onde será selecionado o *“elemento novo”*. Posteriormente será selecionado, no campo *“Elemento principal”*, o elemento que está indicado para o código da rubrica de salário família em *Cadastro/Tabelas/Códigos*. No campo *“Elemento novo”* será selecionado o elemento onde a rubrica deverá ser empenhada para o *Projeto/Atividade* escolhido para esta lotação. Pode-se ainda importar os elementos secundários definidos em uma outra lotação na opção *“importar elementos”*.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_66628495e5afc15a.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_66628495e5afc15a.png)
`,
  },
  {
    title: "Tabelas > Locais de Trabalho",
    content: `# Tabelas > Locais de Trabalho

Este cadastro tem objetivo organizacional, criando referência dos locais de trabalho dos servidores municipais, o que traz como benefício uma visão mais objetiva do quadro funcional. Podem ser utilizados como filtros de relatórios, facilitam a distribuição de itens (como cartões ponto, contracheques, vale-transporte, entre outros) e tornam ágil a comunicação entre os órgãos da prefeitura e seus servidores. Segue orientação para preenchimento dos dados conforme ilustrado na figura 07:

Antes de incluir, é necessário definir a máscara do local conforme explicado abaixo.

**Cód. Local:** Gerado automaticamente pelo sistema.

**Máscara:** Mostra a máscara para o estrutural do local de trabalho definido em *"Pessoal > Procedimentos > Manutenção de Parâmetros: Campo Código Estrutural do Local de Trabalho"*.

**Estrutural:** Deve ser lançado o código estrutural do local de trabalho.

**Descrição:** Campo destinado à descrição do local de trabalho.

**Critério Rateio:** Informação para que os locais sejam enquadrados para geração dos custos. Este campo não é obrigatório e só será utilizado quando a prefeitura for fazer apuração dos custos.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_c0002cb99391abc7.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_c0002cb99391abc7.png)
`,
  },
  {
    title: "Tabelas > Funções",
    content: `# Tabelas > Funções

Destina-se ao cadastro de funções ocupadas temporariamente por um servidor que tomou posse em outro cargo, por exemplo, uma servidora que detém o cargo de professora e exerce temporariamente as funções do cargo de Diretora de Escola.

**Código da função:** Inserido automaticamente pelo sistema.

**Descrição da função:** Descrição de livre escolha do usuário.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_cba71df9b1ac28ad.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_cba71df9b1ac28ad.png)
`,
  },
  {
    title: "Tabelas > Vínculos",
    content: `# Tabelas > Vínculos

Destina-se à inclusão de vínculos, que funcionam como uma subdivisão do regime*. Pode-se criar vínculos para o regime estatutário, por exemplo, como estatutários ativos, inativos, pensionistas etc. A função dos vínculos é alcançar melhor excelência na organização de servidores, além de ser mais uma opção de filtro para relatórios e processamentos do sistema.

Os regimes citados são trabalhistas e não devem ser confundidos com regime previdenciário. Estão divididos da seguinte maneira no sistema:

> **Estatutário:** Engloba os servidores regidos pelo regime jurídico único.
>
> **Celetista:** Engloba os servidores regidos pela CLT.
>
> **Extra-Quadro:** Engloba servidores regidos pelo RJU, mas que não possuem vínculo permanente com empregador, especificamente os servidores em cargo em comissão e os contratos emergenciais.

***Campos:***

**Código do Vínculo:** Código gerado automaticamente pelo sistema.

**Descrição:** Descrição do novo vínculo, de livre escolha do usuário. Ex.: CLT em extinção.

**Utilização:** Neste campo o usuário fará a opção pelo tipo de utilização ao qual o vínculo criado será ligado. Podendo ser vinculados à folha de pagamento, educação ou ambos.

**Regime:** Neste campo o usuário fará a opção pelo regime ao qual o vínculo criado será ligado.

**Situação:** Este campo destina-se a selecionar o “tipo de vínculo” (situação funcional do servidor junto à prefeitura, divididos entre ativos, inativos e pensionistas).

**Natureza:** Destina-se a classificar o vínculo de acordo com o tipo de contratação (Efetivo, Comissionado, Temporário ou Outros).

**Vínculo Manad:** Classificação do vínculo para geração dos dados para o Manad.

> **Manual Normativo de Arquivos Digitais**, onde constam todas as informações para gerar o arquivo digital a ser apresentado à fiscalização da Secretaria da Receita Previdenciária quando a empresa for intimada por Auditor Fiscal da Previdência Social.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_16b7ec6e77b829e8.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_16b7ec6e77b829e8.png)
`,
  },
  {
    title: "Tabelas > Tipos de Contrato",
    content: `# Tabelas > Tipos de Contrato

Destina-se à vinculação das categorias definidas na SEFIP aos regimes da prefeitura. Ex.: categoria 12 – Agente Público.

**Código:** Sequência numérica de controle interno do sistema, controlada pelo usuário na hora do cadastramento.

**Código do Regime do Func.:** Campo para seleção do regime em que será vinculado o tipo de contrato (categoria SEFIP).

**Tipo de contrato:** Código da categoria conforme manual da SEFIP.

**Descrição do Tipo:** Descrição da categoria conforme manual da SEFIP.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_3141acecbe70c2cf.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_3141acecbe70c2cf.png)
`,
  },
  {
    title: "Tabelas > Vale Transporte",
    content: `# Tabelas > Vale Transporte

Destina-se à inclusão dos vales-transporte utilizados em um itinerário específico, que serão vinculados aos servidores para controle de valor e percentual a serem descontados dos beneficiários e controle para previsão de unidades a serem adquiridas pela instituição.

**Ano / Mês:** Ano e mês da inclusão do vale-transporte.

**Código:** De livre escolha do usuário, será utilizado como referência nos cadastros.

**Descrição:** Descrição do vale, por exemplo, Trensurb, integração etc.

**Valor:** Valor unitário do vale-transporte.

**Percentual:** Percentual a ser descontado do servidor.

**Empresa:** Lançar o código da empresa ou clicar no link para pesquisar a empresa que cumpre o itinerário, já previamente cadastrada em [Cadastro/Tabelas/Empresas de Vale Transporte](https://e-cidade.wiki.br/folha/pessoal/#!tabelas_empresas_vt.md).

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_6de77fe415199b84.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_6de77fe415199b84.png)
`,
  },
  {
    title: "Tabelas > Padrões",
    content: `# Tabelas > Padrões

Este cadastro é destinado ao cadastro dos padrões, ou seja, à tabela de valores dos salários dos servidores, criados em lei e que serão vinculados a um servidor. O cadastro de padrões pode ter um valor fixo ou uma fórmula.

**Código do Regime:** Escolha do regime ao qual o padrão será vinculado. Deve ser incluído um padrão para cada regime, mesmo quando estes forem idênticos, pois o sistema não permitirá, no cadastro de servidores, a inclusão de um padrão não definido para o regime ao qual o servidor está vinculado.

**Código de Identificação Padrão:** Este campo aceita código alfanumérico de identificação e de livre escolha do usuário.

**Descrição do Padrão:** Onde deverá ser descrita a nomenclatura do padrão conforme definido na norma que o criou.

**Tipo:** Campo destinado para identificar se o padrão é definido para mensalistas (opção mês) ou horistas (opção horas).

**Horas Semanais:** Campo destinado ao preenchimento (opcional) do número de horas semanais a serem cumpridas pelos servidores vinculados a este padrão.

**Horas Mensais:** Campo destinado ao preenchimento (opcional) do número de horas mensais a serem cumpridas pelos servidores vinculados a este padrão.

> ***Obs:*** Existe no cadastro de servidores um campo destinado ao preenchimento do nº de horas mensais para aquele servidor. No momento do cálculo, o sistema dividirá o valor do padrão pelo nº de horas mensais definidas no cadastro do padrão e multiplicará pelo nº de horas mensais do cadastro do servidor. Portanto, se as quantidades diferirem, os valores também diferirão, para um valor maior ou menor de acordo com a definição de horas no cadastro do servidor.
>
> ***Ex:*** número de horas mensais do cadastro do padrão = 200 horas  
> valor do padrão = R$ 1000,00  
> número de horas mensais do cadastro do servidor = 100 horas
>
> ***Cálculo:*** (v/p=vu*s) -> “v”1000,00 / “p”200 = “vu”50 * “s”100 = 500,00 “vs”
>
> Portanto, o salário calculado do servidor será igual a R$ 500,00 “vs”.
>
> Siglas:  
> p -> nº de horas no cadastro de padrões  
> s -> nº de horas mensais no cadastro do servidor  
> v -> valor do padrão no cadastro de padrões  
> vu -> valor da divisão do valor do padrão dividido pelo nº de horas do padrão  
> vs -> valor do cálculo no salário

**Fórmula:** Este campo é destinado à configuração de uma fórmula a ser aplicada para o cálculo do valor do padrão. Este campo aceita apenas diversos (link diversos). Como exemplo, poderíamos citar padrões que têm como base de cálculo o valor do salário mínimo acrescido de um percentual de 50%; a fórmula seria D???*0.5, onde “D???” seria o diverso criado com o valor do salário mínimo. Este procedimento é vantajoso na medida em que, atualizando um diverso, o sistema fará a alteração de todos os padrões que o possuam em sua fórmula.

**Valor do Padrão:** Campo destinado ao valor do padrão definido na norma que o criou.

**Valor Mínimo:** Também permite apenas a inserção de Diversos e, como o nome já diz, destina-se a controlar um valor mínimo para o padrão. Este procedimento permite ao sistema realizar um controle para que os servidores vinculados a este padrão não recebam um valor menor que o definido no diverso lançado.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_9e3eea4fd29d3238.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_9e3eea4fd29d3238.png)
`,
  },
  {
    title: "Tabelas > Progressões",
    content: `# Tabelas > Progressões

Este cadastro é destinado ao cadastro das progressões.

A progressão é um valor calculado através de um índice aplicado sobre o valor base de um padrão quando este atinge um tempo transcorrido, normalmente definido em lei, que o sistema calcula utilizando como base o número de meses. Esta opção não foi projetada para controlar progressões com avaliações diferentes das de um tempo pré-estabelecido, como por exemplo, progressão por melhora de nível acadêmico, progressão por idade etc.

Para o cálculo, o sistema irá verificar se o padrão ao qual o servidor possui progressão vinculada e data de progressão em *"Pessoal > Cadastro > Cadastro de Servidores > Aba Movimentações"* preenchida.

**Código do Regime:** Campo destinado à informação do regime para filtrar a pesquisa do sistema nos padrões cadastrados.

**Código do Padrão do Servidor:** Campo destinado à escolha do padrão ao qual a progressão será vinculada. Poderá ser lançado o código no campo destinado ou feita uma pesquisa pelo link; só serão validados padrões vinculados ao regime escolhido.

**Descrição da Progressão:** Campo destinado à descrição da progressão. O sistema sugere o mesmo nome do padrão, mas este pode ser alterado pelo usuário.

**Quantidade de Meses para Progressão:** Neste campo deve ser informado o nº de meses em que o sistema aplicará a progressão para o padrão vinculado. O sistema efetuará a contagem dos meses a partir da data da progressão informada no cadastro de servidores ou, se esta estiver em branco, pela data de admissão.

**Percentual da Faixa de Progressão:** Percentual a ser aplicado para cada “nº de meses” definido no cadastro da progressão.

**Valor:** Neste campo, deve ser informado o valor da progressão com a alíquota aplicada sobre o padrão de origem.

> **Obs:** Optando-se por percentual, não deveremos informar valor.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_a83fba4558f32d43.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_a83fba4558f32d43.png)
`,
  },
  {
    title: "Tabelas > Códigos/Rubricas",
    content: `# Tabelas > Códigos/Rubricas

Este cadastro destina-se à manutenção dos códigos, também conhecidos como *“rubricas”* ou *“variáveis”*, utilizados para o cálculo dos valores a serem pagos ou descontados dos servidores. Neste cadastro é definido o comportamento de cada código, com definições sobre se será um provento ou um desconto, fixo ou variável, se entrará nas médias para férias e 13º salário, suas fórmulas, entre outras definições.

## Aba Rubricas
[[ ↑ ]](https://e-cidade.wiki.br/folha/pessoal/#md-page-menu)

***Rubrica:*** Campo destinado à inclusão do código da rubrica, que deve conter necessariamente 04 dígitos, sendo que os códigos entre 0001 e 1999 são reservados para pagamento de Salário.

> As rubricas entre 2000 e 3999 são reservadas para Férias, entre 4000 e 5999 para 13º salário e 6000 e 7999 para pagamento de Aviso Prévio em Rescisão. As rubricas entre 2000 e 7999 não devem ser inseridas diretamente na inclusão, pois são geradas automaticamente pelo sistema quando vinculadas a uma rubrica de salário, conforme será explicado abaixo. As rubricas iniciadas em “R” maiúsculo são rubricas automáticas do sistema, já criadas previamente e podem sofrer a manutenção de alguns dados.

**Descrição:** Campo destinado à descrição da rubrica, como aparecerá no comprovante de pagamento entregue aos servidores e demais relatórios.

**Qtda ou Valor para Inicializar:** Este campo não pode ficar em branco, no entanto, aceita quantidade “0”.

> As quantidades diferentes de “0” justificam-se somente em casos de rubricas que possuem fórmula e são configuradas com os tipos de média 3, 4 ou 7, onde o sistema irá verificar se a ocorrência do código em determinados meses de um período aquisitivo de férias ou para o 13º salário deve ou não ser levada em conta para inserção nos respectivos pontos de pagamento. Nesses casos, é necessário que o código ocorra em pelo menos metade da “quantidade a inicializar” para que seja levado em conta para pagamento de férias e/ou 13º. Do mesmo modo, quando, em determinados movimentos do período de avaliação, forem incluídas progressivamente uma vez e meia a quantidade lançada no cadastro de códigos, o sistema irá dobrar a quantidade nos pontos de 13º salário e férias. Segue exemplo:
>
> Campo preenchido com a quantidade 30 no cadastro de códigos para as rubricas dos tipos 3, 4 e 7 para os pontos de 13º salário e férias:
>
> \`\`\`
> quantidade inclusa entre 01 e 14 -> o sistema irá desconsiderar o código para avaliação no movimento.
> quantidade inclusa entre 15 e 44 -> será lançada a quantidade 30 nos pontos respectivos.
> quantidade inclusa entre 45 e 74 -> será lançada a quantidade 30 nos pontos respectivos e assim progressivamente.
> \`\`\`

**Tipo Rubrica:** Campo onde se define se a rubrica é um Provento, Desconto ou Base.

**Tipo de Inicialização:** Existem neste campo duas opções.

\`\`\`
- Fixa: São os códigos que compõem o cálculo de salário de um servidor, sem final previsto de ocorrências e que se repetem em todas as movimentações em sua quantidade ou valor. Estes códigos são mantidos quando é feita a Inicialização do Ponto (vide tópico que trata esta rotina), desde que cadastrados no ponto fixo.

- Variável: São os que não se incluem nesta característica, como o caso dos códigos de hora-extra, cuja ocorrência depende da movimentação de um servidor. São excluídos dos pontos de salário quando é feita a inicialização dos pontos.
\`\`\`

**Obs:** As rubricas que utilizarem “data limite” devem ser incluídas obrigatoriamente como variáveis, para que o sistema execute a exclusão da mesma do ponto fixo quando o período de ocorrência for encerrado.

**Ativo:** Serve para ativar ou inativar um código. Existirá, na emissão de relatórios que têm relação com este item e na manutenção dos pontos, um filtro que definirá se os códigos inativos serão ou não visualizados para seleção.

**Valor padrão:** Serve para definir qual o valor que será utilizado como padrão para uma rubrica. Por exemplo: se tenho que pagar uma rubrica de abono de estudante no valor de R$ 200,00, coloco o valor como padrão; na inclusão da rubrica no ponto fixo, o valor será incluído automaticamente.

**Quantidade Padrão:** Serve para definir qual a quantidade que será utilizada como padrão para uma rubrica. Por exemplo: se preciso incluir a rubrica de salário, posso definir que salário pressupõe 30 dias; portanto, coloco a quantidade de 30 dias e, na inclusão da rubrica no ponto fixo, o valor será incluído automaticamente.

**Tipo de Bloqueio:** Para bloquear o lançamento da rubrica ou mostrar um aviso na tela se a utilização dela ultrapassar o valor ou quantidade limite. O preenchimento desta opção liberará os campos Valor limite e Quantidade limite.

*Observação:* Campo onde é informada a mensagem que o sistema exibe na inclusão do código no ponto, como por exemplo, “lançar a quantidade em dias”.

**Média p/ Férias:** Onde é escolhido como este código deve ser avaliado para pagamento e férias. São gerados códigos relacionados com uma numeração acrescida de 2000 no número inicial do código original. Por exemplo, se o código incluso tiver a numeração “0001”, serão acrescidos 2000 ao número inicial, ou seja, 2000 + 0001 = 2001; portanto, o código para férias será “2001”.

**Média p/ 13º salário:** Onde é escolhido como este código deve ser avaliado para pagamento no 13º salário. São gerados códigos relacionados a este com uma numeração acrescida de 4000 ao número inicial do código original. Por exemplo, se o código incluso tiver a numeração “0001”, serão acrescidos 4000 ao número inicial, ou seja, 4000 + 0001 = 4001; portanto, o código para o 13º salário será “4001”.

**TIPOS DE MÉDIAS:** As médias são utilizadas para calcular as rubricas anualmente fazendo a proporção.

Quando colocamos na média 0 (zero), o sistema entende que a rubrica não entra para o cálculo de férias e 13º salário.

> **Média 1 -** O sistema verifica se a rubrica possui valor na data de concessão e utiliza este integralmente. Verifica o Ponto fixo.  
> **Obs:** Se a opção proporcionaliza estiver como sim, o sistema verifica a data de admissão do servidor para calcular as rubricas de 13º e férias pelo nº de meses que o servidor tiver direito.  
> **Média 2 -** A rubrica não precisa ter valor no momento da concessão das férias; o sistema verifica se houve incidência em algum mês do período aquisitivo e traz o valor da incidência mais recente.  
> **Média 3 -** Se o servidor possuir a rubrica avaliada no ponto fixo do mês, o sistema procederá exatamente como no tipo de média 4; se não tiver no ponto fixo do mês, esta rubrica será desconsiderada.  
> **Média 4 -** Neste tipo de média, o sistema avalia o campo “Qtda ou Valor para Inicializar” e paga 1/12 se o servidor tiver no mês avaliado metade ou mais da quantidade informada no campo acima.  
> **Obs:**  
> **1.** Considera a quantidade para validar se tem direito a avos. Quantidade: 30 => 15 ou mais.  
> **2.** Para as rubricas que são em horas é preciso colocar na quantidade 999. O sistema irá fazer a avaliação referente ao número de horas mensais informadas no cadastro do servidor, verificando se no mês em questão o servidor tem a metade ou mais do que o número de horas; leva em conta o mês na média, caso contrário, não levará em conta o mês na média.  
> **3.** No mês de férias o sistema considera para a soma o valor que está no ponto fixo.  
> **Média 5 -** O sistema só considera esta rubrica se ela estiver no ponto fixo do mês de concessão e faz a média exatamente igual ao tipo de média 6; se no mês de concessão o servidor não tiver a rubrica no ponto fixo, o sistema desconsidera esta rubrica na média.  
> **Média 6 -** O sistema soma as quantidades e divide por 12.  
> **Média 7 -** O sistema verifica se a rubrica tem incidência no mês de concessão; se estiver, usa o valor/quantidade integral. Se não estiver, o sistema faz a média exatamente como no tipo de média 4.  
> **Média 8 -** Soma os valores no período aquisitivo e divide por 12.  
> **Média 9 -** O sistema verifica as incidências no período, soma os valores, divide por 12 e multiplica pelo nº de meses que houve incidência.  
> **Obs:** Se a rubrica tiver fórmula, o sistema verifica as quantidades. Soma as quantidades, divide por 12 e multiplica pelo nº de meses de incidência.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_6741a6c6132658c1.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_6741a6c6132658c1.png)

**Tipo:** Indica a classificação do código para gerar os empenhos, slips e planilhas para a Contabilidade.

**Usa Data Limite:** Se a opção for “sim”, o sistema irá tornar obrigatório o lançamento de uma data limite para o código quando da inserção dele no ponto fixo. Observação: a rubrica que utiliza data limite deve ser definida como variável e deve ser lançada tanto no ponto fixo, porque se comportará como um código fixo, como no ponto de salário para o cálculo efetivo até a data final estabelecida no ponto, quando o sistema não mais fará o repasse para o ponto de salário.

**Código Rescisão:** Se a opção for “sim”, o sistema criará um código com soma de 6000 ao número inicial do código original. Estes códigos são destinados para o pagamento dos valores de aviso prévio das causas de rescisão que sejam configuradas com esta opção.

**Calcula Prestações:** Se a opção neste campo for “sim”, o sistema irá diminuir a quantidade de parcelas, para um código que possua data limite, a cada movimento transcorrido durante a ocorrência do mesmo. No caso da opção “não”, o sistema irá respeitar a data limite, mas manterá a quantidade informada inicialmente no ponto fixo do servidor em todos os movimentos em que o código tiver ocorrência.

**Proporção para inativos:** Se a opção for sim, o sistema irá levar em conta o percentual informado na aba Movimentações do servidor inativo ou pensionista no cadastro de servidores para proporcionalização dos valores ou quantidade dos códigos existentes.

**Proporcionaliza no Afastamento:** Se a opção for “sim”, o sistema irá proporcionar as quantidades ou valores nos casos de afastamento. Se a opção for não, o sistema irá manter integrais as quantidades ou valores informados no ponto independentemente do número de dias em que o servidor estiver afastado dentro da competência. Este campo também define se os valores gerados para este código são (no caso da opção “sim”) agrupados nos valores na rubrica de afastamento, definidos nos parâmetros do sistema, como no caso de licença maternidade.

**Proporcionaliza nas Médias:** Define se as quantidades/valores devem ou não ser proporcionalizados nos pontos de 13º salário, férias e rescisão. Também define se as rubricas de desconto existentes no ponto fixo do servidor devem ser mantidas com seu código original nos pontos de salário/complementar quando o servidor possuir férias integrais dentro de um movimento, sendo que, se a opção for “Não”, o sistema manterá as rubricas e se for “Sim”, a rubrica será excluída do ponto.

**Auto. Complementar:** Campo criado para selecionar se a rubrica em uso será lançada automaticamente nas folhas complementares se estas existirem no mês em uso.

## Fórmulas
[[ ↑ ]](https://e-cidade.wiki.br/folha/pessoal/#md-page-menu)

**Fórmula:** Campo destinado à criação de fórmulas de cálculo de um código, onde podem ser utilizadas funções do sistema, bases e diversos, aplicadas operações matemáticas básicas. Esta fórmula atinge o cálculo de todos os servidores ou, quando for o caso, os que não estiverem enquadrados nas condições das fórmulas 2 e 3.

**Condição da Fórmula 2:** Campo onde é criada a condição/seleção de um grupo de servidores que possuem uma característica comum para a aplicação da fórmula 2.

**Fórmula 2:** Destina-se à criação da fórmula a ser aplicada para os servidores enquadrados na *“condição da fórmula 2”*.

**Condição da Fórmula 3:** Campo onde é criada a condição/seleção de um grupo de servidores que possuem uma característica comum para a aplicação da fórmula 3.

**Fórmula 3:** Destina-se à criação da fórmula a ser aplicada para os servidores enquadrados na *“condição da fórmula 3”*.

**Fórmula Quantidade:** Destina-se à criação de uma fórmula de uma quantidade a ser lançada para o código na hora do cálculo, que pode ser ou não diferente do definido no campo “Qtda ou Valor para Inicializar”. Como exemplo, pode-se citar uma rubrica cuja quantidade seja por hora, definida com a quantidade 220, e a quantidade a ser lançada no momento do cálculo seja a da carga horária subtraídas as horas falta.

**Opção Importar:** Existe no rodapé da página a tecla importar. Esta opção serve para importar as características de um código já existente, sendo necessário apenas o preenchimento do campo destinado ao código da rubrica e a alteração conforme necessidade de outros campos.

**Obs:** Quando houverem rubricas vinculadas 2000 (férias), 4000 (13º salário) e 6000 (rescisão/aviso prévio), estas deverão ser revisadas com ênfase na marcação das bases de incidência e na fórmula quando esta possuir bases.

[![](https://e-cidade.wiki.br/folha/pessoal/files/rubricas1.png)](https://e-cidade.wiki.br/folha/pessoal/files/rubricas1.png)

## Aba Bases
[[ ↑ ]](https://e-cidade.wiki.br/folha/pessoal/#md-page-menu)

Destina-se à seleção das bases cuja rubrica criada terá incidência, seja para o cálculo de outras rubricas ou na geração de arquivos como a RAIS, DIRF etc. Esta rubrica terá influência no cálculo de toda rubrica que tiver a base selecionada lançada no campo fórmula; portanto, deve-se ter atenção quando se trata destes casos, visto que uma incidência incorreta pode causar uma recursividade.

Um exemplo prático disto pode ser simulado quando, por exemplo, lançamos na fórmula de um adicional qualquer, que aqui será chamado de “X”, o valor calculado de insalubridade e, na fórmula da insalubridade, incluímos uma base onde existe a incidência do adicional X.

Cada vez que o sistema tentar calcular uma das rubricas não conseguirá concluir o cálculo, pois, como o cálculo de uma depende do cálculo da outra, o sistema abortará o procedimento porque nunca terá o valor finalizado dos dois códigos.

O quadro à esquerda da tela mostra as bases não selecionadas e o da direita as selecionadas. Para mover as bases de um quadro ao outro, pode-se marcar a rubrica e acionar > (move do quadro da esquerda para a direita) ou < (move do quadro da direita para a esquerda), ou clicar com o mouse duas vezes sobre a base escolhida. Utilizando as opções >> ou <<, todas as bases serão movidas de uma só vez.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_b0a840f113f0034a.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_b0a840f113f0034a.png)

## Aba Dados eSocial
[[ ↑ ]](https://e-cidade.wiki.br/folha/pessoal/#md-page-menu)

Os dados constantes nessa aba se destinam à configuração das rubricas e como as mesmas serão processadas no eSocial.

[![](https://e-cidade.wiki.br/folha/pessoal/files/rubricas1_esocial.png)](https://e-cidade.wiki.br/folha/pessoal/files/rubricas1_esocial.png)
`,
  },
  {
    title: "Tabela > Bases",
    content: `# Tabela > Bases

Este cadastro destina-se à manutenção das bases. Bases são variáveis do sistema, sempre iniciadas com o caractere “B” mais três caracteres numéricos, cujo resultado final é composto pela soma dos valores calculados das rubricas nela assinaladas.

Bases com numeração entre B800 e B999 são de uso interno do sistema.

Como um exemplo típico de uma base, podemos utilizar os valores incidentes para a hora extra, onde na soma dos valores das rubricas de proventos marcadas seriam aplicadas a alíquota de acordo com a fórmula. Neste caso, a fórmula seria a base dividida pelo nº de horas mensais multiplicada pelo percentual da hora extra.

## Aba Bases
[[ ↑ ]](https://e-cidade.wiki.br/folha/pessoal/#md-page-menu)

**Base:** Código sequencial iniciado com a letra 'B'. Antes de incluir, deve-se pesquisar o próximo código disponível para informar esse campo.

**Descrição da Base:** Campo destinado à nomenclatura a ser utilizada para a base.

**Cálculo pela Quantidade (s/n):** Define se, para efeito de cálculo, o sistema utilizará as quantidades (opção “s”) ou os valores (“n”) das rubricas marcadas na base.

**Pesquisa Valores do Mês Anterior:** Define se os valores/quantidades pesquisados se referem ao mês atual do movimento ou aos do movimento imediatamente anterior.

**Calcular pelo Ponto Fixo:** Define se os valores que devem ser levados em conta no cálculo da base são relativos ao cálculo dos pontos Fixos (opção “sim”) ou demais pontos (opção “não”).

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_9fc72a89e8d67c34.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_9fc72a89e8d67c34.png)

## Aba Rubricas
[[ ↑ ]](https://e-cidade.wiki.br/folha/pessoal/#md-page-menu)

Na inclusão, esta aba é habilitada após acionado o botão “Incluir”. Na alteração, esta tela já é habilitada; basta clicar com o mouse sobre as rubricas da esquerda (lista de todas as rubricas) e movê-las para a direita (as que serão selecionadas para a base). Destina-se à seleção de rubricas que irão compor o valor calculado da base sempre que o cálculo possuir as rubricas grifadas. Os itens marcados serão destacados em amarelo conforme a figura 17 abaixo.

**Obs:** Para que seja efetivamente concluído o processo da aba, é necessário acionar o botão processar no final da página.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_98230cfaa5d7213a.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_98230cfaa5d7213a.png)
`,
  },
  {
    title: "Tabelas > Diversos",
    content: `# Tabelas > Diversos

Diversos são variáveis do sistema onde são lançados valores fixos para utilização em fórmulas de códigos, fórmulas de pensões alimentícias, condições especiais, limitadores de valores, parâmetros para cálculo no sistema, entre outros. Diversos como D000 e a partir de D901 são utilizados pelo cálculo com funções específicas, mas a sua manutenção é de responsabilidade do usuário final.

Um exemplo típico da utilização de um diverso é o lançamento do valor do salário mínimo para utilização do mesmo na forma de cálculo da insalubridade dos servidores celetistas, independentemente de qual padrão o mesmo pertença.

Também é utilizado para outras funções, como a determinação da idade máxima de salário-família, as faixas para pagamento do mesmo, valor de abatimento por dependente para o cálculo do IRRF, entre outras finalidades.

**Ano / Mês:** Indica o ano/mês da inclusão.

**Código:** Destina-se à inclusão do código do diverso, deve ser iniciado com a letra “D”, como no exemplo da figura 18.

**Descrição:** Destina-se à inserção da nomenclatura que será utilizada para o diverso.

**Valor:** Destina-se ao lançamento do valor definido para o diverso.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_5373ecde9aaf1e36.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_5373ecde9aaf1e36.png)
`,
  },
  {
    title: "Tabelas > Empresas de Vale Transporte",
    content: `# Tabelas > Empresas de Vale Transporte

Este cadastro destina-se à manutenção das empresas cujos servidores vinculados à Entidade utilizam o vale-transporte. Será utilizado posteriormente no [cadastro dos vales transporte](https://e-cidade.wiki.br/folha/pessoal/#!tabelas_vale_transporte.md).

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_a0c18617b93f50cc.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_a0c18617b93f50cc.png)
`,
  },
  {
    title: "Tabelas > Empresas de Vale Transporte",
    content: `# Tabelas > Empresas de Vale Transporte

Este cadastro destina-se à manutenção das empresas cujos servidores vinculados à Entidade utilizam o vale-transporte. Será utilizado posteriormente no [cadastro dos vales transporte](https://e-cidade.wiki.br/folha/pessoal/#!tabelas_vale_transporte.md).

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_a0c18617b93f50cc.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_a0c18617b93f50cc.png)
`,
  },
  {
    title: "Tabelas > Previdência e IRRF",
    content: `# Tabelas > Previdência e IRRF

Esta rotina trata da manutenção das tabelas de IRRF e Previdência, oficial ou privada, vinculadas no cadastro dos servidores.

Quanto à tabela de IRRF, o sistema mantém a tabela atual e a tabela do mês anterior. No cálculo, será sempre utilizada a tabela do mês atual, sendo que a tabela do mês anterior é mantida apenas a título de consulta.

Nos casos da previdência, é permitida simultaneamente a manutenção de até 4 tabelas para atender às possíveis disparidades características de acordo com o regime trabalhista do servidor, por exemplo. Abaixo, na figura, podemos visualizar a primeira tela onde pode ser selecionada a tabela a qual será feita a manutenção.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_2797c112f24617eb.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_2797c112f24617eb.png)

## IRRF
[[ ↑ ]](https://e-cidade.wiki.br/folha/pessoal/#md-page-menu)

Abaixo serão repassados os campos da tela de cadastro, que se diferenciam para as manutenções de IRRF e das Previdências. As diferenças se concentram nas finalidades de alguns destes campos de acordo com o tipo de manutenção, como por exemplo o acréscimo do campo “Deduzir”. A tela da figura 23 trata do cadastro de IRRF.

**Valor Inicial da Faixa:** Campo onde é lançado o valor inicial de uma faixa que será vinculada a uma alíquota de acordo com a tabela do IRRF.

**Valor Final da Faixa:** Campo onde é lançado o valor final da faixa.

**Percentual:** Campo onde é lançada a alíquota a ser aplicada para a faixa, de acordo com a tabela do IRRF.

**Deduzir:** Onde deve ser lançado o valor da dedução do cálculo de IRRF de acordo com a tabela de IRRF disponível no site da Receita Federal.

Na tela de IRRF, ainda poderão ser visualizadas as faixas lançadas como demonstrado na figura abaixo.

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_abcc16b19bb3870.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_abcc16b19bb3870.png)

## Previdência
[[ ↑ ]](https://e-cidade.wiki.br/folha/pessoal/#md-page-menu)

Abaixo segue a descrição dos campos da tela de manutenção da previdência.

**Tabela:** Este campo é para o preenchimento do nome da tabela (previdência ou imposto de renda). Obs.: Ao alterar o nome da previdência, o sistema alterará automaticamente o nome das rubricas vinculadas à tabela alterada. Ex.: teste s/ salário, teste s/ 13º e teste s/ férias, onde teste corresponde ao nome da tabela.

**Tipo:** Serve para definir o tipo de previdência, se ela é oficial ou privada. Além de identificar a tabela, serve para geração correta dos dados da DIRF, comprovante de rendimentos e demais relatórios.

**Valor Inicial da Faixa:** Campo onde é lançado o valor inicial de uma faixa que será vinculada a uma alíquota de acordo com a tabela da Previdência cadastrada.

**Valor Final da Faixa:** Campo onde é lançado o valor final da faixa.

**Percentual:** Campo onde é lançada a alíquota a ser aplicada para a faixa, de acordo com a tabela da Previdência cadastrada.

**Deduzir:** Campo desabilitado.

**Rubrica Salário Maternidade:** Campo onde é lançada a rubrica de licença maternidade referente à previdência, onde devem ser agrupados os valores calculados para a servidora que se encontra em benefício.

**Rubrica Licença Saúde:** Campo onde deve ser lançada a rubrica de licença saúde. O sistema agrupa os valores nesta rubrica caso a entidade faça diretamente o pagamento dos servidores em benefício, normalmente vinculados a uma previdência municipal.

**Rubrica Acidente de Trabalho:** Campo onde deve ser lançada a rubrica de Acidente de Trabalho. Do mesmo modo da rubrica de licença saúde, o sistema agrupa os valores nesta rubrica caso a entidade faça diretamente o pagamento dos servidores em benefício, normalmente vinculados a uma previdência municipal.

**Base Previdência Férias:** Informar a base onde estão marcadas todas as rubricas que devem ser agrupadas na rubrica especial de férias cadastrada em Procedimentos/Manutenção de Parâmetros/Rubricas Especiais. Todas as rubricas não marcadas nesta base serão repassadas para o cálculo de salário/complementar com o código original gerado dentro do cálculo das férias.

**Base Previdência Férias (Total):** Informar a base onde estão marcadas todas as rubricas incidentes para o cálculo da previdência.

**Percentual Previdência Patronal:** Lançar a alíquota referente à tributação patronal definida pela previdência somando-se a alíquota RAT.

**Teto para Inativos:** Valor referente ao teto dos inativos vinculados a uma previdência, cuja diferença entre o valor cadastrado neste campo e o valor da base de previdência do cálculo do inativo será aplicada às alíquotas conforme a faixa.

**Código do Desdobramento:** Para vínculo com elemento de despesa dos empenhos patronais, para clientes que utilizam o empenho automático da folha.

**Código Regime Previdência:** Para vincular qual o regime da previdência (RPPS ou RGPS).

[![](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_8b0cba5cbba9c48c.png)](https://e-cidade.wiki.br/folha/pessoal/files/Manual_%20Pessoal30_10_2013_html_8b0cba5cbba9c48c.png)
`,
  },
  {
    title: "Tabelas > Fundamentação Legal",
    content: `# Tabelas > Fundamentação Legal

Esse cadastro destina-se ao registro das leis que regem o pagamento de determinadas rubricas, criação de cargos e funções etc.

**Documento:** Tipo de documento que regulamentou a fundamentação (Decreto, Decreto Lei, Emenda Constitucional, Instrução Normativa, Lei, Medida Provisória, Nota, Ordem de Serviço, Portaria, Resolução).

**Número:** Número do documento que regulamentou.

**Data Início:** Data de início da validade da regulamentação.

**Data Fim:** Data final da validade da regulamentação.

**Descrição:** Descrição completa da regulamentação.

[![](https://e-cidade.wiki.br/folha/pessoal/files/FundamentacaoLegal.png)](https://e-cidade.wiki.br/folha/pessoal/files/FundamentacaoLegal.png)
`,
  },
  {
    title: "Tabelas > Faixas de Valores",
    content: `# Tabelas > Faixas de Valores

Rendimentos Recebidos Acumuladamente (RRA)

Agora é possível realizar cálculo do IRRF para pagamento de Rendimentos Recebidos Acumuladamente (RRA). Para isso, é necessário registrar, através desta rotina, os valores das faixas da tabela do ano corrente.

[![](https://e-cidade.wiki.br/folha/pessoal/files/faixas_valores_rra.png)](https://e-cidade.wiki.br/folha/pessoal/files/faixas_valores_rra.png)
`,
  },
  {
    title: "Tabelas > Rubricas Por Função / Cargo",
    content: `# Tabelas > Rubricas Por Função / Cargo

Essa rotina tem por objetivo a inclusão de rubricas caso as mesmas sejam atreladas a um cargo ou função, ou seja, sempre que incluir um cargo ou função que estiver cadastrado nessa rotina, serão incluídas automaticamente todas as rubricas vinculadas.
No caso de exclusão ou alteração de cargos e/ou funções, as rubricas serão excluídas dos pontos fixo e salário.

Para o cadastramento, clicar no link **"Função"** ou **"Cargo"** e logo após em **"Adicionar"**.
Note que o cargo ou função escolhido está aparecendo na grade abaixo.

[![](https://e-cidade.wiki.br/folha/pessoal/files/rubricas_cargo_funcao.png)](https://e-cidade.wiki.br/folha/pessoal/files/rubricas_cargo_funcao.png)

Na grade onde consta a descrição do cargo ou função, clicar no botão **"Adicionar"** ao lado.
O sistema mostrará uma nova tela (abaixo) onde serão escolhidas as rubricas, quantidade ou valor que serão incluídos no ponto quando do cadastramento do cargo e/ou função.

[![](https://e-cidade.wiki.br/folha/pessoal/files/rubricas_cargo_funcao1.png)](https://e-cidade.wiki.br/folha/pessoal/files/rubricas_cargo_funcao1.png)
`,
  },
];
