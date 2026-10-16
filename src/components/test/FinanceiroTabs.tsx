import { useEffect, useState } from "react";
import { getSubmoduleById } from "@/data/submodules";
import {
  Calculator,
  TrendingDown,
  FileText,
  LayoutDashboard,
  ClipboardList,
  Banknote,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/test/ui/button";
import MarkdownContent from "@/components/test/MarkdownContent";

const contabilidadeCadastroContent: Record<string, string> = {
  "Históricos de Lançamentos": `
Rotina para cadastro de Históricos Padrões utilizados nos eventos contábeis:

\`\`\`\nDB:FINANCEIRO > Contabilidade > Cadastros > Históricos de Lançamentos > Inclusão\n\`\`\`

[![](https://e-cidade.wiki.br/financeiro/contabilidade/files/cadastrosHistorico.png)](https://e-cidade.wiki.br/financeiro/contabilidade/files/cadastrosHistorico.png)

**Histórico:** Preencher com o próximo número sequencial disponível no sistema.

**Descrição:** Preencher com a descrição do histórico desejado, exemplo: “Lançamento contábil referente”.

**Complemento:** SIM
`,
  "Tipos de Compras": `
Rotina para cadastro de Tipos de Compra utilizados ao gerar empenhos:

\`\`\`\nDB:FINANCEIRO > Contabilidade > Cadastros > Tipos de Compras > Inclusão\n\`\`\`

[![](https://e-cidade.wiki.br/financeiro/contabilidade/files/cadastrosTiposdecompra.png)](https://e-cidade.wiki.br/financeiro/contabilidade/files/cadastrosTiposdecompra.png)

**Tipo de Compra:** Preencher com o próximo número sequencial disponível no sistema.

**Descrição do Tipo de Compra:** Preencher com a descrição do tipo de compra, preferencialmente uma descrição prevista no Tribunal de Contas.

**Descrição do Tribunal:** Selecionar o tipo de compra na lista.

**Campo Ativo:** no momento de um cadastro novo, deixar como ativo “Sim”. Se for necessário desativar algum tipo de compra já cadastrado, colocar esse campo como “Não”.

Abaixo estão alguns Tipos de Compra:

[![](https://e-cidade.wiki.br/financeiro/contabilidade/files/tipodecompratce.png)](https://e-cidade.wiki.br/financeiro/contabilidade/files/tipodecompratce.png)
`,
  "Plano de Contas (PCASP)": `
Contabilidade > Cadastros > Plano de Contas (PCASP) > Inclusão

[![](https://e-cidade.wiki.br/financeiro/contabilidade/files/image6.png)](https://e-cidade.wiki.br/financeiro/contabilidade/files/image6.png)

### a) Primeira aba: Conta

No campo **Estrutural Contabilidade**, indique o estrutural a ser cadastrado.

- **Título:** nomenclatura da conta correspondente, conforme a planilha do PCASP Estendido.
- **Título Reduzido:** preenchido automaticamente com o mesmo nome do título, limitado a menos caracteres.
- **Natureza de saldo:** pela regra do PCASP, contas 1, 3, 5 e 7 são devedoras; contas 2, 4, 6 e 8 são credoras, com exceção das contas redutoras.
- **Transfere Saldo:** “Sim” para contas que transportam saldo de um exercício para o outro; “Não” para as que não transportam.
- **Tipo de conta:** “Sintética” para contas-mãe e níveis consolidadores nos balancetes; “Analítica” para conta com reduzido.
- **Sistema:** Não se aplica, Orçamentária, Patrimonial ou Controle.

Se o sistema for Patrimonial, serão exibidas duas informações adicionais:

- **Indicador Superávit:** Financeiro, Patrimonial ou Não se aplica.
- **Detalhamento do sistema:**

[![](https://e-cidade.wiki.br/financeiro/contabilidade/files/image4.png)](https://e-cidade.wiki.br/financeiro/contabilidade/files/image4.png)

### Aba Reduzidos

Ao cadastrar uma conta **Analítica**, o sistema libera esta aba, com os seguintes campos:

- **Recurso:** selecionar o código do recurso orçamentário ao qual a conta pertence.
- **Instituição:** selecionar a instituição à qual a conta pertencerá. Cada conta contábil pode ter um código reduzido por instituição.

### Dados da Conta Bancária

Sempre que for cadastrada uma conta contábil de banco, na aba Reduzidos devem ser informados Banco, Agência, DV da Agência, Conta Bancária, DV da conta e Identificador (CNPJ), usando os dados bancários da conta.

[![](https://e-cidade.wiki.br/financeiro/contabilidade/files/image5.png)](https://e-cidade.wiki.br/financeiro/contabilidade/files/image5.png)
`,
  "Plano de Contas Orçamentário": `
\`\`\`\nCONTABILIDADE > CADASTRO > PLANO DE CONTAS ORÇAMENTÁRIO > INCLUSÃO\n\`\`\`

[![](https://e-cidade.wiki.br/financeiro/contabilidade/files/image1.png)](https://e-cidade.wiki.br/financeiro/contabilidade/files/image1.png)

Esta tela apresenta três abas: **Conta**, **Reduzidos** e **Grupos**.

Na aba **Conta**, preencha o estrutural correspondente à receita ou à despesa, sua Descrição, o vínculo do PCASP (a conta em que serão contabilizados os lançamentos no Balancete de Verificação), o Tipo de conta (Sintético, conta-mãe, ou Analítico, com reduzido) e a Natureza de Saldo (Credor ou Devedor). Em seguida, salve.

Se a conta for analítica, será aberta a aba **Reduzidos**, onde devem ser informados a instituição correspondente e o recurso da conta.

Na aba **Grupos**, para contas de receita deve ser incluído o grupo 16 – Outras Receitas. Para despesas, inclua grupos somente se a instituição possuir integração patrimonial, almoxarifado e patrimônio; caso contrário, não é necessário incluir grupo.

Após o cadastro, a conta ficará disponível para consulta e poderá ser localizada pelo estrutural ou reduzido em **CONTABILIDADE > CADASTRO > PLANO DE CONTAS ORÇAMENTÁRIO > ALTERAÇÃO**.
`,
};

const orcamentoCadastroContent: Record<string, string> = {
  "Parâmetros Macroeconômicos": `
~~~
FINANCEIRO > Orçamento > Cadastros > Parâmetros Macroeconômicos > Inclusão
~~~

![Cadastro de parâmetros macroeconômicos](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento23.png)

Nesta opção devem ser incluídos os parâmetros macroeconômicos utilizados no processamento do cálculo dos valores de receita e despesa, com a descrição de cada um. Exemplos: índice da inflação, PIB e crescimento vegetativo da folha.

- **Descrição:** descrição do parâmetro.
- **Cenário Econômico:** informar o tipo de cenário: Inflação, PIB ou Outros.
`,
  "Cenário Macroeconômico": `
~~~
FINANCEIRO > Orçamento > Cadastros > Cenário Macroeconômico > Inclusão
~~~

![Cadastro de cenário macroeconômico](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento57.png)

Após cadastrar o indicador econômico, cadastre o cenário macroeconômico, informando o tipo de aplicação para o cálculo de projeções da receita e das despesas orçamentárias.

- **Indicador Macroeconômico:** escolher o indicador cadastrado em Parâmetros Macroeconômicos.
- **Ano do Orçamento:** preenchido automaticamente pelo sistema.
- **Ano Final:** escolher o ano final desejado para o cenário, normalmente o terceiro ano seguinte ao ano do orçamento.
- **Descrição:** utilizar a descrição do parâmetro ou complementá-la.
- **Tipo do Valor:** Percentual ou Quantidade; normalmente utiliza-se Percentual.
- **Valor:** para Percentual, informar o número usando ponto como separador decimal. Quantidade é utilizada quando o indicador é PIB e serve para alimentar o Anexo 1 das Metas e Riscos Fiscais.
- **Fonte da Informação:** informar a fonte, por exemplo, IBGE ou FGV.

**Observação:** no processamento das estimativas de receitas e despesas, o sistema busca os cadastros desses indicadores e calcula os valores pela média arrecadada (receitas) ou despesa liquidada (despesas), somando o percentual informado.
`,
  "Tipos de Recursos": `
~~~
FINANCEIRO > Orçamento > Cadastros > Tipos de Recursos > Inclusão
~~~

![Cadastro de tipos de recursos](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento40.png)

Utilizado para cadastrar os recursos da peça orçamentária, que serão vinculados às receitas, despesas e contas bancárias.

- **Especificação:** clicar em “Novo” para cadastrar um recurso ou escolher um já existente quando o objetivo for incluir um complemento de fonte.
- **Complemento:** escolher entre os complementos de fontes apresentados.

![Lista de complementos de fontes](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento30.png)

- **Código:** gerado automaticamente em sequência pelo sistema.
- **Código Tribunal:** informar o código do recurso correspondente à especificação.
- **Código do SICONFI:** informar o código da Matriz de Saldos Contábeis, com 8 dígitos.
- **Descrição:** descrição resumida do recurso.
- **Tipo do recurso:** Livre ou Vinculado.
- **Data limite:** informar somente se houver uma data limite; caso contrário, deixar em branco.
- **Finalidade:** descrever a finalidade do recurso.
`,
  "Orgãos": `
~~~
FINANCEIRO > Orçamento > Cadastros > Órgãos > Inclusão
~~~

![Cadastro de órgãos](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento5.png)

Utilizado para cadastrar os órgãos da instituição.

- **Exercício:** preenchido automaticamente pelo sistema.
- **Órgão:** cadastrar o número desejado para o órgão.
- **Código Tribunal:** repetir o número do órgão.
- **Descrição Órgão:** informar o nome do órgão.
- **Código da Instituição:** escolher a instituição à qual o órgão será vinculado.
- **Finalidade:** descrever o objetivo do órgão criado.
`,
  "Unidades": `
~~~
FINANCEIRO > Orçamento > Cadastros > Unidades > Inclusão
~~~

![Cadastro de unidades orçamentárias](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento13.png)

Cadastro das unidades orçamentárias, vinculadas ao respectivo órgão.

- **Exercício:** preenchido automaticamente pelo sistema.
- **Órgão:** escolher o órgão ao qual a unidade ficará vinculada.
- **Unidade:** escolher o número da unidade.
- **Instituição:** escolher a instituição.
- **Código do Tribunal:** repetir o número da unidade.
- **Descrição da Unidade:** informar o nome da unidade.
- **CNPJ Ministério:** informar o número do CNPJ.
- **Identificador do Tribunal:** escolher o identificador do Tribunal, utilizado pelo TCERS.
`,
  "Função": `
~~~
FINANCEIRO > Orçamento > Cadastros > Função > Inclusão
~~~

![Cadastro de função](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento6.png)

As funções são previamente cadastradas em nível nacional. Se for necessário cadastrar uma nova, informe:

- **Função:** número da função.
- **Descrição:** descrição da função.
- **Código do Tribunal:** repetir o número da função.
- **Finalidade:** descrever a finalidade da função.
`,
  "Subfunção": `
~~~
FINANCEIRO > Orçamento > Cadastros > Subfunção > Inclusão
~~~

![Cadastro de subfunção](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento32.png)

Assim como as funções, as subfunções já vêm previamente cadastradas. Caso seja necessário incluir uma nova, informe:

- **Subfunção:** número da subfunção.
- **Descrição:** descrição da subfunção.
- **Código do Tribunal:** repetir o número da subfunção.
- **Finalidade:** descrever a finalidade da subfunção.
`,
  "Programas": `
~~~
FINANCEIRO > Orçamento > Cadastros > Programas > Inclusão
~~~

Utilizado para manutenção dos programas. Cada município pode criar seus programas conforme seu planejamento, por decreto do chefe do Poder Executivo, válido para todas as instituições da administração direta e indireta.

![Cadastro de programa](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento36.png)

**Dados gerais do Programa:**

- **Código do Tribunal:** preencher com o mesmo número do programa.
- **Denominação:** descrição do programa.
- **Tipo do Programa:** selecionar Temático ou de Gestão.
- **Horizonte temporal:** informar as datas de início e encerramento e o valor global estimado.

**Detalhes do Programa:**

As informações a seguir são textuais e podem ser utilizadas conforme necessário:

![Detalhes do programa](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento38.png)

- **Problema:** detalhar o problema do programa.
- **Finalidade:** detalhar a finalidade do programa.
- **Público Alvo:** detalhar o público-alvo.
- **Justificativa:** detalhar a justificativa.
- **Objetivo Setor Associado:** detalhar o objetivo.
- **Estratégia de Implementação do Programa:** detalhar as estratégias.

As abas seguintes permitem vínculos opcionais; essas informações não são obrigatórias pelo sistema.

**Aba Objetivos:**

![Aba Objetivos do programa](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento56.png)

Os objetivos são criados em **FINANCEIRO > Orçamento > Cadastros > Programas > Detalhes > Objetivos / Metas / Iniciativas**.

**Aba Indicadores:**

![Aba Indicadores do programa](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento15.png)

Os indicadores são criados em **FINANCEIRO > Orçamento > Cadastros > Cadastro de Indicadores PPA > Alteração**.

**Aba Órgãos:**

![Aba Órgãos do programa](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento43.png)

Nesta aba aparecem os órgãos cadastrados em **FINANCEIRO > Orçamento > Cadastros > Órgãos > Alteração**.

**Aba Unidade:**

![Aba Unidade do programa](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento53.png)

Nesta aba aparecem as unidades cadastradas em **FINANCEIRO > Orçamento > Cadastros > Unidades > Alteração**.
`,
  "Atividades/Projetos": `
~~~
FINANCEIRO > Orçamento > Cadastros > Atividades/Projetos > Inclusão
~~~

![Cadastro de atividades e projetos](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento2.png)

Menu utilizado para incluir Atividades, Projetos e Operações Especiais.

**Aba Dados da Ação:**

- **Exercício:** preenchido automaticamente pelo sistema.
- **Classificação:** escolher Projeto, Atividade ou Operação Especial.
- **Código:** para Projeto, escolher início com numeração ímpar; para Atividade, numeração par; para Operação Especial, início com zero.
- **Título:** descrição do Projeto, Atividade ou Operação Especial.
- **Finalidade:** descrever a finalidade.
- **Produto:** escolher o produto cadastrado em **FINANCEIRO > Orçamento > Cadastros > Cadastro de Produtos PPA > Alteração**.
- **Unidade Responsável:** informar a unidade responsável cadastrada em **FINANCEIRO > Orçamento > Cadastros > Cadastro de Unidades Responsáveis > Alteração**.
- **Unidade de Medida:** informar a unidade de medida pertinente.
- **Unidade de Medida Valor:** informar o valor da unidade de medida quando se referir a Programa Temático, de natureza finalística.
- **Especificação do Produto:** especificar o produto utilizado.
- **Tipo de Ação:** escolher se a ação é orçamentária ou não orçamentária.
- **Forma de Implementação:** escolher a forma de implementação.
- **Detalhamento da Implementação:** detalhar a implementação.
- **Origem da Ação:** detalhar a origem.
- **Base Legal:** detalhar a base legal.

**Aba Programação Física:**

![Programação física](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento58.png)

- **Ano de Referência:** informar o ano de referência.
- **Valor de Referência:** informar o valor de referência.

**Aba Iniciativas:**

![Iniciativas da ação](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento7.png)

Clicando no link Código da Iniciativa, escolha a iniciativa que deve ser vinculada à ação.
`,
  "Cadastro de Indicadores PPA": `
~~~
FINANCEIRO > Orçamento > Cadastros > Cadastro de Indicadores PPA > Inclusão
~~~

![Cadastro de indicadores PPA](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento14.png)

Utilizado para cadastrar os indicadores que serão utilizados no PPA. Indicadores são instrumentos que permitem identificar e medir aspectos relacionados a um conceito, fenômeno, problema ou resultado de uma intervenção, apoiando a observação e avaliação de políticas públicas.

**Aba Dados do Indicador:**

- **Periodicidade:** escolher a periodicidade cadastrada em **FINANCEIRO > Orçamento > Cadastros > Período de Indicadores > Alteração**.
- **Denominação:** informar uma denominação.
- **Unidade de Medida:** informar a unidade de medida pertinente.
- **Unidade de Medida Valor:** informar o valor da unidade de medida.
- **Índice ao Final do Programa:** informar o índice final.
- **Índice ao Final do Programa Valor:** informar o valor final do índice.
- **Fonte:** informar a fonte das informações.
- **Base Geográfica:** informar a base geográfica.
- **Fórmula de Cálculo:** descrever a fórmula de cálculo.

**Aba Índice Esperado:**

![Aba Índice Esperado](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento46.png)

- **Exercício:** cadastrar o exercício.
- **Valor:** cadastrar o valor.
`,
  "Cadastro de Produtos PPA": `
~~~
FINANCEIRO > Orçamento > Cadastros > Cadastro de Produtos PPA > Inclusão
~~~

![Cadastro de produtos PPA](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento25.png)

Utilizado para cadastrar a descrição dos produtos que medem o alcance das metas físicas. São medidas ex-post facto que expressam a entrega de produtos ou serviços ao público-alvo do programa, como quilômetros de estrada entregues, armazéns construídos ou crianças vacinadas em relação às metas estabelecidas.

- **Produto:** cadastrado automaticamente pelo sistema.
- **Descrição:** informar a descrição do produto.
`,
  "PPA/LDO": `
~~~
FINANCEIRO > Orçamento > Cadastros > PPA/LDO > Período de Referência LDO > Inclusão
~~~

![Cadastro de período de referência LDO](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento42.png)

Antes de iniciar os trabalhos no PPA, crie um período de referência. O período deve iniciar no exercício para o qual está sendo preparada a LOA e terminar no terceiro exercício seguinte (por exemplo: para a LOA de 2021, incluir o período 2021/2024). Essa lei será utilizada no processamento das estimativas de receitas e despesas.

- **Código Sequencial:** preenchido automaticamente pelo sistema.
- **Ano inicial:** exercício para o qual está sendo preparada a LOA.
- **Ano Final:** terceiro exercício após o ano da LOA.
- **Descrição:** descrição da lei.
- **Número da Lei:** informar o número da lei. Se ainda não estiver disponível, pode ser informado “XXXX” e alterado posteriormente.
`,
  "Período de Indicadores": `
~~~
FINANCEIRO > Orçamento > Cadastros > Período de Indicadores > Inclusão
~~~

![Cadastro de período de indicadores](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento29.png)

Nesta tela pode ser cadastrado o período dos indicadores utilizados no PPA, que poderá ser mensal, bimestral, trimestral ou outro, conforme o planejamento da instituição.
`,
  "Cadastro de Unidades Responsáveis": `
~~~
FINANCEIRO > Orçamento > Cadastros > Cadastro de Unidades Responsáveis > Inclusão
~~~

![Cadastro de unidades responsáveis](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento49.png)

Utilizado para cadastrar as unidades responsáveis pela aplicação das metas e ações desejadas.
`,
  "Subtítulo/Localizador de Gasto": `
~~~
FINANCEIRO > Orçamento > Cadastros > Subtítulo/Localizador de Gasto > Inclusão
~~~

![Cadastro de subtítulo e localizador de gasto](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento45.png)

Menu utilizado para manutenção do localizador de gastos. Esse dado é utilizado no cadastro de uma dotação:

![Localizador de gasto no cadastro da dotação](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento19.png)
`,
};

const contabilidadeConsultaContent: Record<string, string> = {
  "Lançamentos Contábeis (novo)": `
Rotina de consultas de lançamentos contábeis em geral.

\`\`\`\nDB:FINANCEIRO > Contabilidade > Consultas > Lançamentos Contábeis (novo)\n\`\`\`

[![](https://e-cidade.wiki.br/financeiro/contabilidade/files/consultalancamentos.png)](https://e-cidade.wiki.br/financeiro/contabilidade/files/consultalancamentos.png)

A consulta pode ser realizada informando o código do lançamento, apenas o documento (evento contábil), a data ou uma combinação de filtros. Também é possível filtrar por valores.

Após informar os filtros, a consulta é demonstrada da seguinte maneira:

[![](https://e-cidade.wiki.br/financeiro/contabilidade/files/consultalancamento2.png)](https://e-cidade.wiki.br/financeiro/contabilidade/files/consultalancamento2.png)
`,
};

const orcamentoConsultaContent: Record<string, string> = {
  "Saldo da Despesa": `
Para consultar o saldo de uma despesa no orçamento, acesse o menu:

\`\`\`\nFINANCEIRO > Orçamento > Consultas > Saldo da Despesa\n\`\`\`

Ao acessar o menu, é possível consultar a despesa de duas formas: informando diretamente o reduzido da dotação ou buscando os dados cadastrados no módulo Orçamento pelos campos abaixo:

- **Código Órgão:** buscar e selecionar um órgão cadastrado no orçamento.
- **Código Unidade:** buscar e selecionar uma unidade cadastrada no orçamento.
- **Código da Função:** buscar e selecionar uma função cadastrada no orçamento.
- **Sub Função:** buscar e selecionar uma subfunção cadastrada no orçamento.
- **Programas Orçamento:** buscar e selecionar um programa cadastrado no orçamento.
- **Projetos / Atividades:** buscar e selecionar um projeto ou atividade cadastrado no orçamento.
- **Elemento:** buscar e selecionar um elemento cadastrado no orçamento.
- **Fonte de Recursos:** buscar e selecionar uma fonte de recursos cadastrada no orçamento.

[![](https://e-cidade.wiki.br/financeiro/orcamento/files/ConsultaDotacao.gif)](https://e-cidade.wiki.br/financeiro/orcamento/files/ConsultaDotacao.gif)

Após pesquisar, o sistema demonstra os dados da dotação escolhida para visualização:

[![](https://e-cidade.wiki.br/financeiro/orcamento/files/ConsultaDotacao2.gif)](https://e-cidade.wiki.br/financeiro/orcamento/files/ConsultaDotacao2.gif)

São apresentados os dados da dotação, seus saldos e a lista detalhada de reservas vinculadas, caso existam.
`,
  "Saldo da Receita": `
Para consultar o saldo de uma receita no orçamento, acesse o menu:

\`\`\`\nFINANCEIRO > Orçamento > Consultas > Saldo da Receita\n\`\`\`

Ao acessar o menu, o sistema apresentará uma lista das receitas cadastradas no orçamento.

[![](https://e-cidade.wiki.br/financeiro/orcamento/files/ConsultaReceita.gif)](https://e-cidade.wiki.br/financeiro/orcamento/files/ConsultaReceita.gif)

Após escolher a receita que deseja consultar, o sistema apresenta os dados da receita e seus saldos:

[![](https://e-cidade.wiki.br/financeiro/orcamento/files/ConsultaReceita2.gif)](https://e-cidade.wiki.br/financeiro/orcamento/files/ConsultaReceita2.gif)
`,
};

const orcamentoAnexosPages: string[] = [
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Demonstrativo Receita/Despesa Anexo (1)
~~~

Este anexo possui duas versões: uma contempla apenas os valores do orçamento do ano; a outra pode ser emitida conforme os valores empenhados, liquidados ou pagos no ano.

![Parâmetros de emissão do Demonstrativo Receita/Despesa Anexo 1](https://e-cidade.wiki.br/financeiro/orcamento/files/Anexos12.gif)

**Relatório impresso (orçamento):**

![Demonstrativo Receita/Despesa Anexo 1 impresso](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosAnexos12.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Relatório das Fontes da Receita-Anexo 3
~~~

Para imprimir este anexo, basta selecionar a instituição:

![Parâmetros de emissão do Relatório das Fontes da Receita - Anexo 3](https://e-cidade.wiki.br/financeiro/orcamento/files/Anexos3.gif)

**Relatório impresso:**

![Relatório das Fontes da Receita - Anexo 3 impresso](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosAnexos8.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Relatório dos Elementos da Despesa-An. 4
~~~

Para imprimir este relatório, clique no botão “Processar”:

![Parâmetros de emissão do Relatório dos Elementos da Despesa - Anexo 4](https://e-cidade.wiki.br/financeiro/orcamento/files/Anexos1.gif)

**Relatório impresso:**

![Relatório dos Elementos da Despesa - Anexo 4 impresso](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosAnexos7.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Resumo da Receita Anexo (2)
~~~

Este anexo possui duas versões: uma contempla apenas os valores do orçamento do ano; a outra pode ser emitida conforme o balanço.

![Parâmetros de emissão do Resumo da Receita - Anexo 2](https://e-cidade.wiki.br/financeiro/orcamento/files/Anexos11.gif)

**Relatório impresso escolhendo a opção Balanço:**

![Resumo da Receita - Anexo 2 impresso pelo balanço](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosAnexos4.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Resumo da Despesa Anexo (2)
~~~

Este anexo possui filtros por nível de Órgão, Unidade ou Elemento. Também permite emitir os valores do orçamento ou da despesa empenhada, liquidada ou paga.

![Parâmetros de emissão do Resumo da Despesa - Anexo 2](https://e-cidade.wiki.br/financeiro/orcamento/files/Anexos6.gif)

**Relatório impresso:**

![Resumo da Despesa - Anexo 2 impresso, parte 1](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosAnexos6.png)

![Resumo da Despesa - Anexo 2 impresso, parte 2](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosAnexos14.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Demonst. da Despesa Órgão/Unidade
~~~

Este anexo possui filtros por nível de Órgão ou Unidade. Também permite emitir os valores do orçamento ou da despesa empenhada, liquidada ou paga.

![Parâmetros de emissão do Demonstrativo da Despesa Órgão/Unidade](https://e-cidade.wiki.br/financeiro/orcamento/files/Anexos8.gif)

**Relatório impresso:**

![Demonstrativo da Despesa Órgão/Unidade impresso, parte 1](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosAnexos10.png)

![Demonstrativo da Despesa Órgão/Unidade impresso, parte 2](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosAnexos13.png)

![Demonstrativo da Despesa Órgão/Unidade impresso, parte 3](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosAnexos1.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Programa Trabalho Órgão/Unidade Anexo (6)
~~~

Este anexo permite filtrar por Órgão, Unidade, Função, Subfunção, Programa, Projeto/Atividade, Elemento ou Recurso, além de agrupar por Órgão ou Unidade. Também permite imprimir os valores do orçamento ou do balanço.

![Parâmetros de emissão do Programa de Trabalho Órgão/Unidade - Anexo 6](https://e-cidade.wiki.br/financeiro/orcamento/files/Anexos9.gif)

**Relatório impresso:**

![Programa de Trabalho Órgão/Unidade - Anexo 6 impresso](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosAnexos11.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Demonstr. Despesa Fun/Subf/Prog Anexo (8)
~~~

Este anexo permite filtrar por Órgão, Unidade, Função, Subfunção, Programa, Projeto/Atividade, Elemento ou Recurso, além de agrupar por Órgão ou Unidade. Também permite imprimir os valores do orçamento ou do balanço.

![Parâmetros de emissão do Demonstrativo da Despesa Função/Subfunção/Programa - Anexo 8](https://e-cidade.wiki.br/financeiro/orcamento/files/Anexos10.gif)

**Relatório impresso:**

![Demonstrativo da Despesa Função/Subfunção/Programa - Anexo 8 impresso](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosAnexos9.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Demonstr. Despesa Órgão/Função Anexo (9)
~~~

Este anexo permite filtrar por nível de Órgão ou Unidade, com seleção. Também é possível imprimir os valores do orçamento ou do balanço.

![Parâmetros de emissão do Demonstrativo da Despesa Órgão/Função - Anexo 9](https://e-cidade.wiki.br/financeiro/orcamento/files/Anexos4.gif)

**Relatório impresso:**

![Demonstrativo da Despesa Órgão/Função - Anexo 9 impresso](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosAnexos2.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Demonstr. Despesa Unidad/Orgão Anexo (9)
~~~

Este anexo permite filtrar por nível de Órgão, Unidade ou Função, com seleção. Também é possível imprimir os valores do orçamento ou do balanço.

![Parâmetros de emissão do Demonstrativo da Despesa Unidade/Órgão - Anexo 9](https://e-cidade.wiki.br/financeiro/orcamento/files/Anexos4.gif)

**Relatório impresso:**

![Demonstrativo da Despesa Unidade/Órgão - Anexo 9 impresso](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosAnexos5.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Programa de Trabalho do Governo Anexo (7)
~~~

Este anexo permite filtrar por Órgão, Unidade, Função, Subfunção ou Programa, com seleção, e agrupar por Órgão ou Unidade. Também é possível imprimir os valores do orçamento ou do balanço.

![Parâmetros de emissão do Programa de Trabalho do Governo - Anexo 7](https://e-cidade.wiki.br/financeiro/orcamento/files/Anexos2.gif)

**Relatório impresso:**

![Programa de Trabalho do Governo - Anexo 7 impresso](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosAnexos15.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Demonstr. Despesa Proj/Ativ/Elemento
~~~

Este anexo permite filtrar por Órgão, Unidade ou Projeto/Atividade, com seleção, e agrupar por Órgão ou Unidade. Também é possível imprimir os valores do orçamento ou do balanço.

![Parâmetros de emissão do Demonstrativo da Despesa Projeto/Atividade/Elemento](https://e-cidade.wiki.br/financeiro/orcamento/files/Anexos5.gif)

**Relatório impresso:**

![Demonstrativo da Despesa Projeto/Atividade/Elemento impresso](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosAnexos3.png)
`,
  `
# Outros anexos - LOA

~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Outros Anexos > Dotações por Órgão do Governo
~~~

![Parâmetros de emissão de Dotações por Órgão do Governo](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos5.png)

![Relatório Dotações por Órgão do Governo](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos10.png)

~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Outros Anexos > Prg. de Trabalho Realização de Obras Srv
~~~

![Parâmetros de emissão do Programa de Trabalho - Realização de Obras e Serviços](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos1.png)

![Relatório Programa de Trabalho - Realização de Obras e Serviços](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos11.png)

~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Outros Anexos > Sumário Rec p/ Fontes e Desp p/ Funções
~~~

![Parâmetros de emissão do Sumário de Receita por Fontes e Despesa por Funções](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos6.png)

![Relatório Sumário de Receita por Fontes e Despesa por Funções](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos2.png)

~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Outros Anexos > Receita Corrente Líquida
~~~

![Parâmetros de emissão da Receita Corrente Líquida](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos7.png)

![Relatório Receita Corrente Líquida](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos12.png)

~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Outros Anexos > Demonstrativo Dívida Pública
~~~

![Edição do Demonstrativo da Dívida Pública](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos17.png)

Este relatório depende da edição manual das linhas.

![Relatório Demonstrativo da Dívida Pública](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos3.png)

~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Outros Anexos > Receita e Respectivas Legislações
~~~

![Parâmetros de emissão de Receita e Respectivas Legislações](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos9.png)

![Relatório Receita e Respectivas Legislações](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos13.png)

A coluna Legislação busca a informação no cadastro da receita da Contabilidade, no campo Finalidade:

![Campo Finalidade no cadastro da receita](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos16.png)

~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Outros Anexos > Orçamento da Seguridade Social
~~~

![Parâmetros de emissão do Orçamento da Seguridade Social](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos4.png)

![Relatório Orçamento da Seguridade Social](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos15.png)

~~~
FINANCEIRO > Orçamento > Relatórios > Anexos > Outros Anexos > Orçamento Fiscal
~~~

![Parâmetros de emissão do Orçamento Fiscal](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos14.png)

![Relatório Orçamento Fiscal](https://e-cidade.wiki.br/financeiro/orcamento/files/RelatoriosOutrosAnexos8.png)
`,
];

const orcamentoPpaPages: string[] = [
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Relatórios do PPA > Anexo de Objetivos, Diretrizes e Metas
~~~

Este relatório demonstra os programas e os dados informados nos programas do PPA (**FINANCEIRO > Orçamento > Cadastros > Programas > Alteração**):

![Anexo de Objetivos, Diretrizes e Metas](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento31.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Relatórios do PPA > Resumo Geral da Previsão das Receitas
~~~

Este relatório demonstra, em nível sintético, os valores das estimativas de receitas lançadas para os anos do PPA:

![Resumo Geral da Previsão das Receitas](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento52.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Relatórios do PPA > Demonstrativo das Projeções da Receita
~~~

Este relatório demonstra, por receita, todos os valores projetados para os anos do PPA, conforme o processamento ou edição das estimativas. Pode ser usado para conferência durante o preenchimento dos valores de receita:

![Demonstrativo das Projeções da Receita](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento48.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Relatórios do PPA > Demonstrativo das Projeções da Despesa
~~~

Este relatório demonstra, por despesa, todos os valores projetados para os anos do PPA, conforme o processamento ou edição das estimativas. Permite filtros de exibição como Órgão, Unidade, Função, Subfunção e até o nível de Recurso, e pode ser usado para conferência durante o preenchimento dos valores:

![Demonstrativo das Projeções da Despesa](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento54.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Relatórios do PPA > Demonstrativo das Ações Validadas
~~~

Mostra os valores dos anos do PPA por Atividades/Projetos (ações):

![Demonstrativo das Ações Validadas](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento10.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Relatórios do PPA > PPA Por Elemento
~~~

Este relatório é um dos mais usados para conferência das despesas. Mostra a funcional programática da dotação até o nível de elemento, para conferência dos valores:

![PPA por Elemento](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento22.png)
`,
  `
~~~
FINANCEIRO > Orçamento > Relatórios > Relatórios do PPA > Integração Orçamento
~~~

Relatório que demonstra se a Lei do PPA já foi exportada e em quais instituições foi realizada a exportação:

![Integração do PPA com o Orçamento](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento11.png)
`,
];

const orcamentoProcedimentosContent: Record<string, string> = {
  "Metas da Despesa": `
Para cadastrar uma nova despesa no orçamento, acesse o menu:

~~~
FINANCEIRO > Orçamento > Procedimentos > Metas da Despesa > Inclusão
~~~

![Cadastro de meta da despesa](https://e-cidade.wiki.br/financeiro/orcamento/files/ProcedimentosDespesa.png)

É possível cadastrar a despesa de duas formas. Se souber o estrutural da despesa, informe-o no campo **Estrutural Despesa**; o sistema preencherá automaticamente os campos seguintes. No exemplo da imagem, o estrutural é \`02.12.04.122.0010.2002.33190110000000.0001\`.

Caso não saiba o estrutural, use as âncoras para buscar os dados cadastrados no módulo Orçamento:

- **Código Órgão:** buscar e selecionar um órgão cadastrado no orçamento.
- **Código Unidade:** buscar e selecionar uma unidade cadastrada no orçamento.
- **Código da Função:** buscar e selecionar uma função cadastrada no orçamento.
- **Sub Função:** buscar e selecionar uma subfunção cadastrada no orçamento.
- **Programas Orçamento:** buscar e selecionar um programa cadastrado no orçamento.
- **Projetos / Atividades:** buscar e selecionar um projeto ou atividade cadastrado no orçamento.
- **Elemento:** buscar e selecionar um elemento cadastrado no orçamento.
- **Fonte de Recursos:** buscar e selecionar uma fonte de recursos cadastrada no orçamento.
- **Complemento:** preenchido automaticamente após a seleção do recurso.
- **Localizador dos Gastos:** buscar e selecionar o localizador de gastos.
- **C. Peculiar / C. Aplicação:** buscar e selecionar a característica peculiar.
- **Esfera Orçamentária:** selecionar a esfera à qual a dotação pertence.
- **Previsão:** informar 0,00, pois a previsão orçamentária é feita pela LOA e não durante o exercício. No exemplo, trata-se de uma despesa já criada a partir da LOA.
`,
  "Previsão da Receita": `
Para cadastrar uma nova receita no orçamento, acesse o menu:

~~~
FINANCEIRO > Orçamento > Procedimentos > Previsão da Receita > Inclusão
~~~

![Inclusão da previsão da receita](https://e-cidade.wiki.br/financeiro/orcamento/files/ProcedimentosReceita.png)

- Na âncora **Código Fonte**, o sistema apresenta as receitas cadastradas na Contabilidade para seleção.
- Selecione a fonte de recursos da receita pela âncora **Fonte de Recursos**.
- **Complemento:** preenchido automaticamente a partir do cadastro de Recursos.
- **Valor previsto:** informar 0,00, pois a previsão orçamentária é feita pela LOA e não durante o exercício. No exemplo, trata-se de receita já criada a partir da LOA.
- **Característica peculiar:** selecionar a característica. Para receitas principais, geralmente se utiliza “NÃO SE APLICA - OOO”; para deduções, não se deve usar essa opção.
- **Unidade Orçamentária:** selecionar o órgão e a unidade da receita.
- **Esfera Orçamentária:** selecionar a esfera à qual a receita pertence.
`,
  "Suplementações/Reduções - Página 1": `
O processo para abertura de Créditos Especiais começa com a elaboração e o envio de um Projeto de Lei ao Poder Legislativo. Após a aprovação, a suplementação pode ser aberta por Decreto.

Para iniciar, acesse o menu:

~~~
ORÇAMENTO > PROCEDIMENTOS > SUPLEMENTAÇÕES/REDUÇÕES > PROJETO DE LEI > INCLUSÃO
~~~

![Inclusão do Projeto de Lei de suplementação](https://e-cidade.wiki.br/financeiro/orcamento/files/Suplementacoes3.png)

Informe o número, a data e o texto do Projeto de Lei. Para o texto, sugere-se indicar o conteúdo que deverá constar no segundo artigo do Projeto de Lei.

Ao clicar em “Incluir”, o sistema abre a manutenção de suplementações. O fluxo inicial permanece o mesmo, mas, além de selecionar uma dotação existente pelo link “Reduzido da Dotação”, também é possível escolher uma projeção de despesa previamente criada no PPA pelo link “Projeção Despesa”.

![Manutenção da suplementação iniciada pelo Projeto de Lei](https://e-cidade.wiki.br/financeiro/orcamento/files/Suplementacoes1.png)

Na inclusão de Decretos, o campo **Usa Limite da LOA** controla o consumo do limite autorizado:

- **Nenhum:** aparece como padrão, mas o sistema exige a escolha de “Sim” ou “Não” antes de incluir o Decreto.
- **Sim:** o valor do Decreto consome o percentual do limite autorizado na LOA. Se o limite for ultrapassado, o sistema bloqueia a inclusão e as novas suplementações devem seguir via Projeto de Lei aprovado pelo Legislativo.
- **Não:** o Decreto não utiliza o limite da LOA; deve ser usado quando a LOA autorizar remanejamentos no orçamento.

**Importante:** nesta versão, a validação do limite da LOA para Créditos Suplementares ocorre somente quando se escolhe “Sim”. É necessário evitar Decretos que deveriam consumir o limite marcados incorretamente como “Não”, pois isso pode gerar apontamentos de auditoria.

Após a inclusão do Decreto, o sistema encaminha à manutenção de suplementação para informar as dotações suplementadas, reduzidas e as receitas, no caso de excesso de arrecadação. Para Créditos Suplementares que excedam o limite autorizado pela LOA, a abertura via Decreto será bloqueada e deverá ser encaminhado Projeto de Lei ao Legislativo.

**Remanejamentos autorizados pela LOA:** siga a mesma sequência de procedimentos para abertura de suplementações, mas, na inclusão do Decreto, selecione “Não” no campo “Usa Limite da LOA”. Esses valores não serão computados no limite de Créditos Suplementares e serão apresentados separadamente nos relatórios.
`,
  "Suplementações/Reduções - Página 2": `
# Manutenção de Suplementação

Após incluir o Decreto no sistema, acesse a rotina de manutenção de suplementação:

~~~
ORÇAMENTO > PROCEDIMENTOS > SUPLEMENTAÇÕES/REDUÇÕES > MANUTENÇÃO DE SUPLEMENTAÇÃO
~~~

![Manutenção de suplementação](https://e-cidade.wiki.br/financeiro/orcamento/files/Suplementacoes1.png)

Informe os dados das dotações a serem suplementadas ou reduzidas e, quando houver excesso de arrecadação, os dados da receita.

É possível informar diretamente o reduzido da dotação ou buscá-lo pela âncora “Reduzido”; o sistema preencherá os dados da dotação. Em seguida, informe o valor a suplementar. A aba **Reduções** funciona da mesma forma.

Se for necessário lançar mais de um tipo de suplementação, feche a tela e selecione o novo tipo no campo **Nova suplementação**.
`,
  "Suplementações/Reduções - Página 3": `
# Processa Suplementação

## Processamento e Contabilização

Este procedimento executa a suplementação. São apresentados os projetos na situação “Abertos”; selecione uma linha para avançar à tela que mostra os valores a registrar. O processamento acrescenta valores às dotações aumentadas, reduz as dotações usadas como cobertura ou registra contabilmente a receita prevista para arrecadação a maior.

O menu executa a contabilização do Crédito Adicional e atualiza os saldos das dotações envolvidas. Também inclui no Orçamento a projeção de Despesa cadastrada no PPA durante a abertura de Créditos Especiais.

~~~
ORÇAMENTO > PROCEDIMENTOS > SUPLEMENTAÇÕES/REDUÇÕES > PROCESSA SUPLEMENTAÇÃO
~~~

![Tela de processamento da suplementação](https://e-cidade.wiki.br/financeiro/orcamento/files/Suplementacoes6.png)

Informe uma **Data Execução**, escolha se o projeto ficará fechado ou aberto após o processamento e marque as linhas com os valores que serão processados.
`,
  "Suplementações/Reduções - Página 4": `
# Desprocessa Suplementação

~~~
ORÇAMENTO > PROCEDIMENTOS > SUPLEMENTAÇÕES/REDUÇÕES > DESPROCESSA SUPLEMENTAÇÃO
~~~

Esta rotina desfaz a contabilização do Crédito Adicional e seus efeitos no orçamento. O desprocessamento só é permitido enquanto os valores adicionados às dotações suplementadas não tiverem sido utilizados.

O sistema não permite desprocessar uma suplementação cujo valor já tenha sido utilizado na execução da despesa por empenho ou reserva de saldo. Essa validação evita que as dotações fiquem com saldo negativo.

![Tela de desprocessamento da suplementação](https://e-cidade.wiki.br/financeiro/orcamento/files/Suplementacoes4.png)
`,
  "Associação dos Parâmetros Macroeconômico": `
~~~
FINANCEIRO > Orçamento > Procedimentos > Associação dos Parâmetros Macroeconômico > Receita
~~~

Após escolher a receita, o sistema permite selecionar o nível a parametrizar e o tipo de cálculo: **Média Histórica**, calculada com base na média dos últimos quatro anos e aplicação dos índices, ou **Reestimativa Atual**, que usa o exercício corrente e aplica os índices.

O cálculo pode ser configurado de nível sintético a analítico. É possível associar um ou mais índices cadastrados e informar o percentual correspondente. Após selecionar os índices, clique em **Salvar Modificações**.

![Associação de parâmetros macroeconômicos às receitas](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento50.png)

Para despesas, a associação segue o mesmo processo e utiliza os parâmetros macroeconômicos cadastrados:

~~~
FINANCEIRO > Orçamento > Procedimentos > Associação dos Parâmetros Macroeconômico > Despesas
~~~

![Associação de parâmetros macroeconômicos às despesas](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento41.png)
`,
  "PPA": `
## Estimativa/Reestimativa de Receita

~~~
FINANCEIRO > Orçamento > Procedimentos > PPA > Estimativa/Reestimativa > Receita
~~~

Este menu processa o cálculo da receita:

![Processamento da estimativa de receita do PPA](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento8.png)

Ao clicar em “Processar”, o sistema apresenta uma mensagem:

![Mensagem de processamento da estimativa](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento21.png)

Após confirmar em “OK”, o sistema apresenta duas opções:

![Opções para continuar o processamento](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento20.png)

- **OK:** permite escolher um período de referência e uma perspectiva processados anteriormente. Os valores editados são copiados para exercícios em comum; para o último exercício, o cálculo é processado conforme as associações atuais dos parâmetros macroeconômicos.
- **Cancelar:** executa diretamente o cálculo com as configurações atuais dos parâmetros macroeconômicos e suas associações, usando a média ou o valor estimado conforme configurado.

![Seleção de período e perspectiva](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento28.png)

![Execução do cálculo da receita](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento3.png)

![Resultado do processamento da receita](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento47.png)

O processamento das despesas segue o mesmo princípio, no menu **FINANCEIRO > Orçamento > Procedimentos > PPA > Estimativa/Reestimativa > Despesas**.

Após o processamento, receitas e despesas ficam disponíveis para edição.

### Receitas

Para receitas com desdobramento, podem ser editados os estruturais sintéticos. O sistema distribui os valores proporcionalmente conforme os percentuais cadastrados em **FINANCEIRO > Orçamento > Cadastros > Desdobramento da Receita > Alteração**.

![Edição de receita com desdobramento](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento17.png)

No exemplo de IRRF, os valores são editados na conta-mãe \`411130311010000\` e distribuídos conforme os percentuais do desdobramento:

![Percentuais de desdobramento da receita](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento39.png)

![Resultado do desdobramento da receita](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento1.png)

Para receitas sem desdobramento cadastrado, edite diretamente o estrutural analítico:

![Edição direta de receita sem desdobramento](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento44.png)

### Despesas

As despesas são editadas diretamente nos elementos das dotações:

![Edição de despesas do PPA](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento51.png)

Se uma dotação não puder ser editada, ela pode ter sido incluída em **FINANCEIRO > Orçamento > Procedimentos > PPA > Ações PPA > Inclusão de Ação**; nesse caso, altere-a por essa rotina.

Para reprocessar receitas ou despesas, use os botões **Reprocessar Receita** ou **Reprocessar Despesa** na rotina de Estimativa/Reestimativa. Informe a Lei do PPA para continuar:

![Seleção da Lei do PPA para reprocessamento](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento8.png)

Em seguida, a tela apresenta as etapas **Base de Cálculo** e **Estimativas**:

![Etapas de reprocessamento das estimativas](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento55.png)

- **Base de Cálculo:** processa a base para as estimativas.
- **Estimativas:** processa as estimativas dos exercícios do PPA.

## Ações PPA

~~~
FINANCEIRO > Orçamento > Procedimentos > PPA > Ações PPA > Inclusão de Ação
~~~

Permite incluir uma ação (Projeto/Atividade) que não constava no orçamento anterior. Escolha a Lei do PPA e a perspectiva, informe as classificações da funcional programática, como Órgão, Unidade e Função, e clique em “Incluir”. O sistema liberará a aba Detalhamento da Ação para incluir elementos de despesa e exercícios.

![Inclusão de ação PPA](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento16.png)

Na aba **Detalhamento da Ação**, informe os detalhes dos elementos e exercícios que compõem a ação:

![Detalhamento da ação PPA](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento35.png)

Na **Alteração de Ações**, selecione a Lei e a perspectiva. É possível percorrer as ações pelos botões Próximo, Anterior, Último e Início, pesquisar pelo número do Projeto/Atividade, alterar valores ou excluir um elemento.

## Receitas do PPA

~~~
FINANCEIRO > Orçamento > Procedimentos > PPA > Receitas do PPA > Inclusão de Receitas
~~~

Permite incluir uma receita que não constava no orçamento anterior. Escolha a Lei e a perspectiva, localize a receita (previamente cadastrada no Plano de Contas Orçamentário), selecione a característica peculiar e informe os valores por exercício.

![Inclusão de receitas do PPA](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento18.png)

Em **Alterações de Receitas**, é possível alterar os valores e a característica peculiar da receita nos exercícios em que ela está prevista.

## Perspectivas

~~~
FINANCEIRO > Orçamento > Procedimentos > PPA > Perspectivas > Nova Versão
~~~

Para criar uma perspectiva baseada em outra já cadastrada, selecione a perspectiva-base e clique em “Abrir Nova Perspectiva”. A nova versão poderá ser trabalhada normalmente.

![Criação de nova perspectiva do PPA](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento12.png)

Ao criar uma nova versão, a perspectiva de origem recebe uma data de término e a nova passa a vigorar. Para remover uma perspectiva encerrada das rotinas de estimativa, desative-a em:

~~~
FINANCEIRO > Orçamento > Procedimentos > PPA > Perspectivas > Ativar/Desativar Perspectiva
~~~

Confira o status no campo Ativo e clique em **Ativar/Desativar**. Confirme em “OK” para que a perspectiva deixe de aparecer no processamento das estimativas.

![Ativação ou desativação de perspectiva](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento34.png)

~~~
FINANCEIRO > Orçamento > Procedimentos > PPA > Perspectivas > Homologar Perspectiva PPA
~~~

Após conferir as receitas e despesas, homologue a perspectiva para permitir sua exportação. Depois de homologada, não é mais possível fazer manutenção; para alterações, crie uma nova perspectiva. A homologação é realizada na Prefeitura e abrange os valores de todas as instituições.

## Integração Orçamento

~~~
FINANCEIRO > Orçamento > Procedimentos > PPA > Integração Orçamento > Exportação
~~~

Para exportar a perspectiva homologada para o exercício da LOA, selecione a Lei e a perspectiva e clique em **Processar**. O sistema exportará os valores de receita e despesa previstos para o exercício seguinte e para a instituição conectada. A exportação deve ser feita separadamente em cada instituição.

![Exportação da perspectiva do PPA](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento4.png)

Para conferir a exportação, acesse **FINANCEIRO > Orçamento > Relatórios > Relatórios do PPA > Integração Orçamento**.

![Conferência da integração com o orçamento](https://e-cidade.wiki.br/financeiro/orcamento/files/orcamento11.png)

O submenu **Cancela Exportação** desfaz a exportação realizada e exclui as informações exportadas.
`,
};

const empenhoConsultaContent: Record<string, string> = {
  "Consulta Empenho": `
\`\`\`\nEMPENHO > CONSULTA > CONSULTA EMPENHO\n\`\`\`

Na consulta de empenho é possível verificar toda a sua movimentação, como itens, ordem de compra, pagamento, lançamentos contábeis, notas, entre outros, através dos botões de consulta do quadro “Detalhamento”:

[![](https://e-cidade.wiki.br/financeiro/empenho/files/ConsultaEmpenho1.png)](https://e-cidade.wiki.br/financeiro/empenho/files/ConsultaEmpenho1.png)
`,
  "Autorização de Empenho": `
\`\`\`\nEMPENHO > CONSULTA > CONSULTA AUTORIZAÇÃO\n\`\`\`

Na consulta de empenho é possível verificar as informações relacionadas, como o código da autorização gerada, o NUMCGM, a dotação usada e o número do empenho, entre outros.

[![Consulta de autorização de empenho](https://e-cidade.wiki.br/financeiro/empenho/image-1.png)](https://e-cidade.wiki.br/financeiro/empenho/image-1.png)

Através dos botões de consulta do quadro “Consulta Acordos” é possível visualizar tudo relacionado aos dados do acordo, bem como licitações, documentos, entre outros.

[![Consulta de acordos da autorização de empenho](https://e-cidade.wiki.br/financeiro/empenho/image-2.png)](https://e-cidade.wiki.br/financeiro/empenho/image-2.png)
`,
};

const empenhoRelatoriosContent: Record<string, string> = {
  Documentos: `
# Emissão da Nota de Empenho

~~~
MÓDULO > EMPENHO > RELATÓRIOS > DOCUMENTOS > EMITE EMPENHOS.
~~~

Este documento reemite qualquer nota de empenho realizada ao longo do ano.
`,
};

const empenhoRelatoriosMovimentacaoPages: string[] = [
  `
# Relatório de Movimentação de empenhos

~~~
MÓDULO > EMPENHO > RELATÓRIOS > RELATÓRIOS DE MOVIMENTAÇÃO > EMPENHO.
~~~

Este relatório traz toda a movimentação dos empenhos no período desejado, com várias possibilidades de filtro, como credor, evento, tipo de compra, material/serviço, característica peculiar, além de toda a funcional programática da dotação.

[![](https://e-cidade.wiki.br/financeiro/empenho/files/RelatoriosEmpenho1.png)](https://e-cidade.wiki.br/financeiro/empenho/files/RelatoriosEmpenho1.png)
`,
  `
# Relatório de Restos a pagar

~~~
EMPENHO > RELATÓRIOS > RELATÓRIOS DE MOVIMENTAÇÃO > EXECUÇÃO DE RESTOS A PAGAR.
~~~

Este relatório traz toda a movimentação dos restos a pagar no período desejado, com várias possibilidades de filtro, como exercício e tipo de restos, entre outros.

[![](https://e-cidade.wiki.br/financeiro/empenho/files/RelatoriosEmpenho2.png)](https://e-cidade.wiki.br/financeiro/empenho/files/RelatoriosEmpenho2.png)
`,
];

const empenhoCadastroContent: Record<string, string> = {
  "Retenções": `
# Cadastro de Retenções

\`\`\`\nMÓDULO EMPENHO > CADASTRO > CADASTRO DE RETENÇÃO > INCLUSÃO\n\`\`\`

No exemplo, será realizado o cadastro de uma retenção de PIS/COFINS.

- **Tipo de Cálculo:** pode-se escolher INSS (física ou jurídica), IRRF (física ou jurídica), ISSQN ou Outros. A opção Outros utiliza a alíquota definida neste cadastro; as demais utilizam as alíquotas cadastradas nas tabelas do módulo Folha, em Recursos Humanos.
- **Grupo:** Fornecedor, normalmente utilizado pela Tesouraria; ou Folha de Pagamento, utilizado somente pela Folha e não exibido na agenda de pagamentos.
- **Receita:** escolher a receita para lançamento da retenção na lista cadastrada na Tesouraria, em Manutenção de Receitas.
- **Descrição:** informar o nome da retenção.
- **Alíquota:** informar somente o valor numérico da porcentagem.
- **CGM:** cadastrar o CGM para o qual será feito o slip de pagamento da retenção.
- **Ente recebedor:** informar qual instituição receberá a retenção. Para a própria prefeitura, deixar como “Não aplicável”.

[![Cadastro de retenção](https://e-cidade.wiki.br/financeiro/empenho/image.png)](https://e-cidade.wiki.br/financeiro/empenho/image.png)
`,
};

const empenhoProcedimentosContent: Record<string, string> = {
  "Autorização de Empenho": `
~~~
MÓDULO EMPENHO > PROCEDIMENTOS > AUTORIZAÇÃO DE EMPENHO > INCLUSÃO
~~~

Na Autorização de Empenho é possível realizar o empenho e sua liquidação ou somente o empenho.

## Autorização de Empenho no módulo Compras e Licitação

Quando a autorização é feita pelo módulo Compras ou Licitação, ela fica vinculada ao material. A liquidação será realizada em **MÓDULO EMPENHO > PROCEDIMENTOS > MANUTENÇÃO DE EMPENHO > LIQUIDAR EMPENHO**.

A autorização é o processo anterior ao empenho, no qual são informados o CGM do fornecedor em **Nome/Razão Social**, os itens, quantidades, valores, desdobramentos, complementação da descrição dos itens e dotação.

Normalmente, a autorização é gerada pelo Departamento de Compras. Por exemplo, para iniciar a aquisição de um computador, o setor deve:

- Verificar o valor aproximado por conhecimento de mercado ou orçamento prévio sem compromisso. Esse valor servirá de base para reservar o saldo da dotação. Exemplo fictício: R$ 1.000,00.
- Definir a dotação e verificar se há saldo disponível. Exemplo: reduzido 2, estrutural 06.01.02.062.0001.1001.3449052000000.000, descrição EQUIPAMENTOS E MATERIAL PERMANENTE.
- Definir o desdobramento. Exemplo: reduzido 568, estrutural 3449052350000, descrição EQUIPAMENTOS DE PROCESSAMENTO DE DADOS.

### Aba Autorização

- **Nome/Razão Social:** digitar o CGM do fornecedor ou usar a âncora para pesquisar por Nome, CPF ou CNPJ. Após pesquisar, selecionar a linha do fornecedor.
- **Tipo de Compra:** escolher pelo código ou descrição. As opções incluem Não aplicável, Concurso, Convite, Tomada de Preço, Concorrência, Dispensa de Licitação, Licitação Inexigível, Suprimentos de Fundos e Pregão, entre outras. A escolha afeta o Tipo de Licitação e pode exigir Número/Ano da Licitação; se não houver licitação, selecionar “Não aplicável”.
- **Tipo de Licitação:** listado conforme o tipo de compra selecionado.
- **Tipo de Empenho:** Ordinário, Global ou Estimativo.
- **Histórico:** escolher entre os históricos cadastrados.
- **Evento:** Normal, Adiantamento, Diárias ou Passagens.
- **Destino:** informar o destino do objeto adquirido.
- **Característica Peculiar:** digitar o número ou selecionar pela âncora.
- **Resumo:** informar resumo ou observação necessária.

![Aba Autorização de Empenho](https://e-cidade.wiki.br/financeiro/empenho/files/ProcedimentosEmpenho6.png)

Após preencher os dados, clique em “Incluir” para liberar a aba Itens.

### Aba Itens

O item pode ser escolhido digitando seu código, pesquisando pela âncora, buscando pelo elemento ou pesquisando pela descrição do material, entre itens ativos ou inativos. Após selecionar o item, informe quantidade e valor unitário; o sistema calcula o valor total. Se necessário, complemente a descrição e clique em “Incluir”. Confira os itens na lista **Itens Lançados**.

### Aba Dotação

Para escolher a dotação, digite o código reduzido ou pesquise na tela. Use “Próximo” ou “Último” para navegar e selecione a linha desejada. O sistema apresenta os dados e o saldo da dotação. Para finalizar, clique em “Incluir”.

![Seleção da dotação da autorização](https://e-cidade.wiki.br/financeiro/empenho/files/ProcedimentosEmpenho4.png)

Para emitir o empenho, use “Lançar Empenho” ou conclua depois pelo menu de manutenção.

**Importante:** somente aparecem dotações às quais o usuário tem permissão do órgão, compatíveis com o desdobramento do item e vinculadas ao órgão/unidade do departamento da sessão.

Exemplo: desdobramento do item **3339030**390000 MATERIAL PARA MANUTENÇÃO DE VEÍCULOS; dotação **3339030**000000 MATERIAL DE CONSUMO.

Para conferir reduzidos, saldo e órgão da dotação, acesse **Financeiro > Orçamento > Relatórios > Demonstrativos do Orçamento > Saldo de verbas da despesa** e selecione o nível Recurso.
`,
};

const empenhoManutencaoPages: string[] = [
  `
# Emissão do Empenho

~~~
MÓDULO EMPENHO > PROCEDIMENTOS > MANUTENÇÃO DE EMPENHO > EMISSÃO DE EMPENHO
~~~

Esta rotina emite a nota de empenho com base na autorização cadastrada. Pesquise a autorização desejada e selecione sua linha. Em seguida, escolha “Empenhar e imprimir” ou “Empenhar e não imprimir” e selecione “Não Liquidar” ou “Liquidar”.

Para imprimir os dados bancários do credor no campo “Dados do Credor” da Nota de Empenho, configure **Emite Dados Bancários no Empenho** como “Sim” em **Módulo Empenho > Procedimentos > Manutenção de Parâmetros**.

![Emissão do empenho](https://e-cidade.wiki.br/financeiro/empenho/files/ProcedimentosEmpenho3.png)

## Documento Nota de Empenho

O documento deve conter:

- **Ente emissor:** nome, endereço completo e CNPJ.
- **Dotação orçamentária:** Secretaria e Unidade, Atividade e descrição, Elemento de Despesa e descrição, Desdobramento e descrição e código de identificação da despesa.
- **Fornecedor/Credor:** nome, endereço completo e CNPJ/CPF.
- **Origem do empenho:** dados que originaram a compra, código da licitação ou tomada de preço, código da Solicitação de Compra e tipo de empenho (Estimativo, Global ou Ordinário).
- **Descrição resumida:** breve histórico da aquisição e seu destino no órgão público.
- **Descrição completa:** itens numerados, quantidade, valor unitário e valor total por item.
- **Valores:** valor da dotação na geração do empenho, valor total empenhado e saldo atualizado da dotação.
- **Responsáveis:** nomes e cargos do responsável pela Contabilidade, Prefeito e, normalmente, Secretário da Fazenda.

Também podem constar os dados do pagamento, quando realizado em parcela única; pagamentos parciais são feitos por Ordem de Pagamento. Pode haver autenticação mecânica quando o pagamento ocorre no caixa.
`,
  `
# Anulação de Empenho

~~~
EMPENHO > PROCEDIMENTOS > MANUTENÇÃO DO EMPENHO > ANULAÇÃO DE EMPENHO
~~~

O documento de estorno deve apresentar os valores da movimentação financeira, a assinatura de quem autorizou e uma breve justificativa.

**Rotina:**

![Rotina de anulação de empenho](https://e-cidade.wiki.br/financeiro/empenho/files/ProcedimentosAnulacao.png)

Ao selecionar o empenho, os dados são exibidos. Informe o motivo do estorno, marque a linha do item a estornar e informe o valor. Na maioria dos casos, não é necessário informar a quantidade; pode-se usar 0 para habilitar o campo de valor.

**Observações:**

- Se o empenho tiver **Ordem de Compra** do módulo Compras, a anulação não será permitida e o sistema informará: “Todos os itens estão em ordem de compra ou anulados. Não poderá ser feita a anulação do empenho.”
- Se o empenho possuir liquidações, o sistema não permitirá a anulação e informará: “Não há saldo disponível para anular.”
`,
  `
# Liquidar Empenho

~~~
EMPENHO > PROCEDIMENTOS > MANUTENÇÃO DO EMPENHO > LIQUIDAR EMPENHO
~~~

Rotina para liquidar empenhos após a entrada da nota no módulo Material. São apresentados empenhos com saldo disponível para liquidação, isto é, valores empenhados que ainda não foram liquidados ou pagos.

Ao liquidar, o sistema gera automaticamente a **Ordem de Pagamento** e a inclui na agenda do dia. O número da ordem será usado para efetuar o pagamento pela rotina de manutenção de pagamento.

Na rotina, selecione a nota disponível e clique em “Confirmar”:

![Liquidação de empenho após entrada da nota](https://e-cidade.wiki.br/financeiro/empenho/files/ProcedimentosLiquidarEmpenho.gif)
`,
  `
# Liquidação sem Ordem de Compra

~~~
EMPENHO > PROCEDIMENTOS > MANUTENÇÃO DO EMPENHO > LIQUIDAÇÃO SEM ORDEM DE COMPRA
~~~

Rotina para liquidar empenhos logo após o empenhamento, sem vínculo com o almoxarifado. Só permite liquidar valores empenhados ainda não liquidados nem pagos. A liquidação gera automaticamente a **Ordem de Pagamento** e a inclui na agenda do dia; o número da ordem será usado na manutenção de pagamento.

Os itens empenhados são apresentados com os campos **Quantidade entregue** e **Valor entregue** liberados para edição conforme a Nota Fiscal. Itens cadastrados como serviços no módulo Compras são empenhados com quantidade 1.

![Liquidação de empenho sem Ordem de Compra](https://e-cidade.wiki.br/financeiro/empenho/files/ProcedimentosLiquidarSemOrdem.gif)
`,
  `
# Estornar Liquidação

~~~
EMPENHO > PROCEDIMENTOS > MANUTENÇÃO DO EMPENHO > ESTORNAR LIQUIDAÇÃO
~~~

São disponibilizados empenhos com saldo liquidado a pagar. Pesquise pelo número ou sequencial do empenho. Na tela de anulação, confira os dados e o valor disponível para estorno, marque a nota e clique em “Confirmar”.

![Estorno de liquidação de empenho](https://e-cidade.wiki.br/financeiro/empenho/files/ProcedimentosEstornoLiquidacao.gif)
`,
  `
# NOTA DE LIQUIDAÇÃO - DESCONTO

~~~
EMPENHO > PROCEDIMENTOS > MANUTENÇÃO DO EMPENHO > NOTA DE LIQUIDAÇÃO–DESCONTO
~~~

Este menu permite registrar um desconto concedido pelo fornecedor à instituição. **Atenção: este processo é irreversível.** Ao registrar o desconto, o sistema anula automaticamente o valor correspondente da liquidação e do empenho. Portanto, se o valor anulado precisar ser utilizado novamente, não use esta rotina para anular a liquidação e o empenho: o desconto também será estornado do empenho.

Na rotina, dê um duplo clique na ordem de pagamento que receberá o desconto. Na nova janela, informe o valor no campo **Desconto**. Feche a janela e clique em **Confirmar**. O sistema gera, então, lançamentos concomitantes de estorno do empenho e da liquidação.

[![](https://e-cidade.wiki.br/financeiro/empenho/files/ProcedimentosNotadeDesconto.gif)](https://e-cidade.wiki.br/financeiro/empenho/files/ProcedimentosNotadeDesconto.gif)
`,
];

interface FinanceiroTabsProps {
  selectedSubmodule: string | null;
  setSelectedSubmodule: (submodule: string | null) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedFinalSection: string | null;
  setSelectedFinalSection: (section: string | null) => void;
}

const FinanceiroTabs = ({
  selectedSubmodule,
  setSelectedSubmodule,
  selectedCategory,
  setSelectedCategory,
  selectedFinalSection,
  setSelectedFinalSection,
}: FinanceiroTabsProps) => {
  const [orcamentoAnexosPage, setOrcamentoAnexosPage] = useState(1);
  const [orcamentoPpaPage, setOrcamentoPpaPage] = useState(1);
  const [orcamentoSuplementacoesPage, setOrcamentoSuplementacoesPage] = useState(1);
  const [empenhoManutencaoPage, setEmpenhoManutencaoPage] = useState(1);
  const [empenhoRelatoriosMovimentacaoPage, setEmpenhoRelatoriosMovimentacaoPage] = useState(1);

  useEffect(() => {
    if (
      selectedSubmodule !== "Orçamento" ||
      selectedCategory !== "relatorio" ||
      selectedFinalSection !== "Anexos"
    ) {
      setOrcamentoAnexosPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (
      selectedSubmodule !== "Empenho" ||
      selectedCategory !== "procedimentos" ||
      selectedFinalSection !== "Manutenção de Empenho"
    ) {
      setEmpenhoManutencaoPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (
      selectedSubmodule !== "Empenho" ||
      selectedCategory !== "relatorio" ||
      selectedFinalSection !== "Relatórios de Movimentação"
    ) {
      setEmpenhoRelatoriosMovimentacaoPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (
      selectedSubmodule !== "Orçamento" ||
      selectedCategory !== "procedimentos" ||
      selectedFinalSection !== "Suplementações/Reduções"
    ) {
      setOrcamentoSuplementacoesPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (
      selectedSubmodule !== "Orçamento" ||
      selectedCategory !== "relatorio" ||
      selectedFinalSection !== "Relatórios do PPA"
    ) {
      setOrcamentoPpaPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  const submodules = [
    { name: "Contabilidade", icon: <Calculator size={20} /> },
    { name: "Custos", icon: <TrendingDown size={20} /> },
    { name: "Empenho", icon: <FileText size={20} /> },
    { name: "Planejamento", icon: <LayoutDashboard size={20} /> },
    { name: "Orçamento", icon: <ClipboardList size={20} /> },
    { name: "Tesouraria", icon: <Banknote size={20} /> },
  ];

  const categories = [
    { value: "cadastro", label: "Cadastro" },
    { value: "consulta", label: "Consulta" },
    { value: "relatorio", label: "Relatório" },
    { value: "procedimentos", label: "Procedimentos" },
  ];

  const handleSubmoduleClick = (submodule: string) => {
    setSelectedSubmodule(submodule);
    setSelectedCategory(null);
    setSelectedFinalSection(null);
  };

  const handleBackClick = () => {
    if (selectedFinalSection) {
      setSelectedFinalSection(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedSubmodule(null);
    }
  };

  const renderFinalContent = (
    submoduleId: string,
    categoryId: string,
    onSelectFinalSection: (section: string) => void
  ) => {
    const submoduleData = getSubmoduleById(submoduleId.toLowerCase());
    if (!submoduleData) return <p>Submódulo não encontrado.</p>;

    const categoryOptions =
      submoduleData.options[categoryId as keyof typeof submoduleData.options];
    if (!categoryOptions || categoryOptions.length === 0)
      return <p>Nenhum item encontrado para esta categoria.</p>;

    return (
      <nav className="flex flex-col items-center gap-2 p-4 bg-muted mb-8 rounded-lg">
        {categoryOptions.map((item) => (
          <button
            key={item}
            className="w-full text-lg font-bold py-2 px-4 rounded-md text-center bg-card hover:bg-muted-foreground/10 transition-colors"
            onClick={() => onSelectFinalSection(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    );
  };

  if (selectedSubmodule) {
    if (selectedCategory) {
      if (selectedFinalSection) {
        const selectedContent =
          selectedSubmodule === "Contabilidade" && selectedCategory === "cadastro"
            ? contabilidadeCadastroContent[selectedFinalSection]
            : selectedSubmodule === "Empenho" && selectedCategory === "cadastro"
              ? empenhoCadastroContent[selectedFinalSection]
            : selectedSubmodule === "Orçamento" && selectedCategory === "cadastro"
              ? orcamentoCadastroContent[selectedFinalSection]
            : selectedSubmodule === "Contabilidade" && selectedCategory === "consulta"
              ? contabilidadeConsultaContent[selectedFinalSection]
              : selectedSubmodule === "Orçamento" && selectedCategory === "consulta"
                ? orcamentoConsultaContent[selectedFinalSection]
                : selectedSubmodule === "Orçamento" && selectedCategory === "procedimentos" && selectedFinalSection === "Metas da Despesa"
                  ? orcamentoProcedimentosContent[selectedFinalSection]
                  : selectedSubmodule === "Orçamento" && selectedCategory === "procedimentos" && selectedFinalSection === "Previsão da Receita"
                    ? orcamentoProcedimentosContent[selectedFinalSection]
                    : selectedSubmodule === "Orçamento" && selectedCategory === "procedimentos" && selectedFinalSection === "Suplementações/Reduções"
                      ? orcamentoProcedimentosContent[`Suplementações/Reduções - Página ${orcamentoSuplementacoesPage}`]
                      : selectedSubmodule === "Orçamento" && selectedCategory === "procedimentos" && selectedFinalSection === "Associação dos Parâmetros Macroeconômico"
                        ? orcamentoProcedimentosContent[selectedFinalSection]
                        : selectedSubmodule === "Orçamento" && selectedCategory === "procedimentos" && selectedFinalSection === "PPA"
                          ? orcamentoProcedimentosContent[selectedFinalSection]
                : selectedSubmodule === "Orçamento" && selectedCategory === "relatorio" && selectedFinalSection === "Anexos"
                  ? orcamentoAnexosPages[orcamentoAnexosPage - 1]
                  : selectedSubmodule === "Orçamento" && selectedCategory === "relatorio" && selectedFinalSection === "Relatórios do PPA"
                    ? orcamentoPpaPages[orcamentoPpaPage - 1]
                : selectedSubmodule === "Empenho" && selectedCategory === "consulta"
                  ? empenhoConsultaContent[selectedFinalSection]
                  : selectedSubmodule === "Empenho" && selectedCategory === "relatorio" && selectedFinalSection === "Documentos"
                    ? empenhoRelatoriosContent[selectedFinalSection]
                    : selectedSubmodule === "Empenho" && selectedCategory === "relatorio" && selectedFinalSection === "Relatórios de Movimentação"
                      ? empenhoRelatoriosMovimentacaoPages[empenhoRelatoriosMovimentacaoPage - 1]
                  : selectedSubmodule === "Empenho" && selectedCategory === "procedimentos" && selectedFinalSection === "Autorização de Empenho"
                    ? empenhoProcedimentosContent[selectedFinalSection]
                    : selectedSubmodule === "Empenho" && selectedCategory === "procedimentos" && selectedFinalSection === "Manutenção de Empenho"
                      ? empenhoManutencaoPages[empenhoManutencaoPage - 1]
              : undefined;

        return (
          <div>
            <Button
              onClick={handleBackClick}
              variant="outline"
              size="sm"
              className="mb-4 bg-card"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para{" "}
              {selectedCategory.charAt(0).toUpperCase() +
                selectedCategory.slice(1)}
            </Button>
            <h2 className="text-2xl font-bold mb-6">{selectedFinalSection}</h2>
            <hr className="mb-8 border-t border-border" />
            {selectedContent ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={selectedContent} />
              </article>
            ) : (
              <p>Conteúdo detalhado para: {selectedFinalSection}</p>
            )}
            {selectedSubmodule === "Orçamento" &&
            selectedCategory === "relatorio" &&
            selectedFinalSection === "Anexos" ? (
              <nav
                aria-label="Páginas dos anexos do orçamento"
                className="mt-8 flex flex-wrap items-center justify-center gap-2"
              >
                {(() => {
                  const totalPages = orcamentoAnexosPages.length;
                  const currentPage = orcamentoAnexosPage;
                  const pageItems: Array<number | "ellipsis-start" | "ellipsis-end"> =
                    totalPages <= 10
                      ? Array.from({ length: totalPages }, (_, index) => index + 1)
                      : currentPage <= 4
                        ? [1, 2, 3, 4, "ellipsis-start", totalPages - 2, totalPages - 1, totalPages]
                        : currentPage >= totalPages - 3
                          ? [1, 2, 3, "ellipsis-end", totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
                          : [1, 2, 3, "ellipsis-start", currentPage - 1, currentPage, currentPage + 1, "ellipsis-end", totalPages - 2, totalPages - 1, totalPages];

                  const compactButtonClass =
                    "shrink-0 dark:border-border dark:bg-background dark:text-foreground dark:hover:bg-muted dark:hover:text-foreground";

                  return (
                    <>
                      {totalPages > 10 ? (
                        <Button
                          size="sm"
                          variant="outline"
                          className={`h-9 px-3 ${compactButtonClass}`}
                          disabled={currentPage === 1}
                          aria-label="Página anterior"
                          onClick={() => setOrcamentoAnexosPage(currentPage - 1)}
                        >
                          « Anterior
                        </Button>
                      ) : null}
                      {pageItems.map((item, index) =>
                        typeof item === "number" ? (
                          <Button
                            key={`page-${item}`}
                            size="sm"
                            className={`h-9 min-w-9 px-3 ${compactButtonClass}`}
                            variant={currentPage === item ? "default" : "outline"}
                            aria-current={currentPage === item ? "page" : undefined}
                            aria-label={`Página ${item}`}
                            onClick={() => setOrcamentoAnexosPage(item)}
                          >
                            {item}
                          </Button>
                        ) : (
                          <span
                            key={`${item}-${index}`}
                            aria-hidden="true"
                            className="px-1 text-muted-foreground"
                          >
                            ...
                          </span>
                        ),
                      )}
                      {totalPages > 10 ? (
                        <Button
                          size="sm"
                          variant="outline"
                          className={`h-9 px-3 ${compactButtonClass}`}
                          disabled={currentPage === totalPages}
                          aria-label="Próxima página"
                          onClick={() => setOrcamentoAnexosPage(currentPage + 1)}
                        >
                          Próximo »
                        </Button>
                      ) : null}
                    </>
                  );
                })()}
              </nav>
            ) : null}
            {selectedSubmodule === "Orçamento" &&
            selectedCategory === "relatorio" &&
            selectedFinalSection === "Relatórios do PPA" ? (
              <nav
                aria-label="Páginas dos Relatórios do PPA"
                className="mt-8 flex flex-wrap items-center justify-center gap-2"
              >
                {orcamentoPpaPages.map((_, index) => {
                  const page = index + 1;
                  return (
                    <Button
                      key={page}
                      size="sm"
                      className="min-w-9 px-2 dark:border-border dark:bg-background dark:text-foreground dark:hover:bg-muted dark:hover:text-foreground"
                      variant={orcamentoPpaPage === page ? "default" : "outline"}
                      aria-current={orcamentoPpaPage === page ? "page" : undefined}
                      aria-label={`Página ${page}`}
                      onClick={() => setOrcamentoPpaPage(page)}
                    >
                      {page}
                    </Button>
                  );
                })}
              </nav>
            ) : null}
            {selectedSubmodule === "Orçamento" &&
            selectedCategory === "procedimentos" &&
            selectedFinalSection === "Suplementações/Reduções" ? (
              <nav
                aria-label="Páginas de Suplementações e Reduções"
                className="mt-8 flex flex-wrap items-center justify-center gap-2"
              >
                {[1, 2, 3, 4].map((page) => (
                  <Button
                    key={page}
                    size="sm"
                    className="min-w-9 px-2 dark:border-border dark:bg-background dark:text-foreground dark:hover:bg-muted dark:hover:text-foreground"
                    variant={orcamentoSuplementacoesPage === page ? "default" : "outline"}
                    aria-current={orcamentoSuplementacoesPage === page ? "page" : undefined}
                    aria-label={`Página ${page}`}
                    onClick={() => setOrcamentoSuplementacoesPage(page)}
                  >
                    {page}
                  </Button>
                ))}
              </nav>
            ) : null}
            {selectedSubmodule === "Empenho" &&
            selectedCategory === "procedimentos" &&
            selectedFinalSection === "Manutenção de Empenho" ? (
              <nav
                aria-label="Páginas da Manutenção de Empenho"
                className="mt-8 flex flex-wrap items-center justify-center gap-2"
              >
                {empenhoManutencaoPages.map((_, index) => {
                  const page = index + 1;
                  return (
                    <Button
                      key={page}
                      size="sm"
                      className="min-w-9 px-2 dark:border-border dark:bg-background dark:text-foreground dark:hover:bg-muted dark:hover:text-foreground"
                      variant={empenhoManutencaoPage === page ? "default" : "outline"}
                      aria-current={empenhoManutencaoPage === page ? "page" : undefined}
                      aria-label={`Página ${page}`}
                      onClick={() => setEmpenhoManutencaoPage(page)}
                    >
                      {page}
                    </Button>
                  );
                })}
              </nav>
            ) : null}
            {selectedSubmodule === "Empenho" &&
            selectedCategory === "relatorio" &&
            selectedFinalSection === "Relatórios de Movimentação" ? (
              <nav
                aria-label="Páginas dos Relatórios de Movimentação de Empenho"
                className="mt-8 flex flex-wrap items-center justify-center gap-2"
              >
                {empenhoRelatoriosMovimentacaoPages.map((_, index) => {
                  const page = index + 1;
                  return (
                    <Button
                      key={page}
                      size="sm"
                      className="min-w-9 px-2 dark:border-border dark:bg-background dark:text-foreground dark:hover:bg-muted dark:hover:text-foreground"
                      variant={empenhoRelatoriosMovimentacaoPage === page ? "default" : "outline"}
                      aria-current={empenhoRelatoriosMovimentacaoPage === page ? "page" : undefined}
                      aria-label={`Página ${page}`}
                      onClick={() => setEmpenhoRelatoriosMovimentacaoPage(page)}
                    >
                      {page}
                    </Button>
                  );
                })}
              </nav>
            ) : null}
          </div>
        );
      }
      return (
        <div>
          <Button
            onClick={handleBackClick}
            variant="outline"
            size="sm"
            className="mb-4 bg-card"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para {selectedSubmodule}
          </Button>
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}
          </h2>
          <hr className="mb-8 border-t border-border" />
          {renderFinalContent(
            selectedSubmodule,
            selectedCategory,
            setSelectedFinalSection
          )}
        </div>
      );
    }

    return (
      <div>
        <Button
          onClick={handleBackClick}
          variant="outline"
          size="sm"
          className="mb-4 dark:bg-black dark:text-white dark:hover:bg-black/90 dark:hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Módulos
        </Button>
        <h2 className="text-2xl font-bold mb-6">
          {selectedSubmodule.charAt(0).toUpperCase() +
            selectedSubmodule.slice(1)}
        </h2>
        <hr className="mb-8 border-t border-border" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {categories.map((category) => (
            <button
              key={category.value}
              className="text-left transition-all hover:scale-[1.02] focus:outline-none"
              onClick={() => setSelectedCategory(category.value)}
            >
              <div className="rounded-lg text-card-foreground h-full border border-border transition-all duration-300 cursor-pointer bg-card hover:bg-muted shadow-sm hover:shadow-lg">
                <div className="p-6 flex items-center justify-center min-h-[100px]">
                  <h3 className="text-lg font-bold text-center">
                    {category.label}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {submodules.map((submodule) => (
        <button
          key={submodule.name}
          className="text-left transition-all hover:scale-[1.02] focus:outline-none"
          onClick={() => handleSubmoduleClick(submodule.name)}
        >
          <div className="rounded-lg text-card-foreground h-full border border-border transition-all duration-300 cursor-pointer bg-card hover:bg-muted shadow-sm hover:shadow-lg">
            <div className="p-6 flex flex-col items-center justify-center min-h-[120px] gap-3">
              <div className="text-primary">{submodule.icon}</div>
              <h3 className="text-lg font-bold text-center">{submodule.name}</h3>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default FinanceiroTabs;
