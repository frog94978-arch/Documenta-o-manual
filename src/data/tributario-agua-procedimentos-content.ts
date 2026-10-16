export const aguaProcedimentosContent: Record<string, string> = {
  "Planilha de Leituras": `
Esta rotina inclui as matrículas que farão parte das planilhas de leitura.

~~~
DB:TRIBUTÁRIO > Água > Procedimentos > Planilha de Leituras
~~~

## Inclusão

As informações são semelhantes às do cadastro de imóveis e terrenos. É necessário conhecer previamente os itens **Zona**, **Rota** e **Página**, com base nos dados coletados.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua38.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua38.png)

## Alteração

Disponível para alterar os itens cadastrados, considerando seu uso no cadastro.

## Exclusão

A exclusão pode ser feita conforme o uso do item no cadastro.
`,
  Hidrômetros: `
~~~
DB:TRIBUTÁRIO > Água > Procedimentos > Hidrômetros
~~~

### Troca de Hidrômetros

A rotina substitui equipamentos para reparo ou atualização dos hidrômetros de uma localidade. Equipamentos recém-chegados devem ser cadastrados antes da troca. Hidrômetros que resultaram de uma substituição não podem ser excluídos, mas podem ser reutilizados em uma nova instalação. A exclusão pode ser feita para hidrômetros recém-instalados ou sem histórico de leituras.

#### Inclusão da troca

- **Código do hidrômetro:** código do equipamento cadastrado; preenche automaticamente Marca e Diâmetro.
- **Característica:** característica do imóvel onde será feita a troca.
- **Data da troca:** data em que a substituição foi realizada.
- **Observações:** campo opcional para detalhes da troca.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua39.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua39.png)

## Alteração e exclusão

Disponíveis conforme o uso do registro no cadastro e seu histórico.

### Transferência

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua40.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua40.png)
`,
  Isenções: `
Permite isentar um imóvel ou uma pessoa do pagamento de tributos ou taxas.

~~~
DB:TRIBUTÁRIO > Água > Procedimentos > Isenções
~~~

## Inclusão

- **Tipo de isenção:** selecione o tipo cadastrado; use o link para consultar os tipos existentes.
- **Matrícula:** matrícula a isentar; use o link para pesquisar.
- **Observações:** campo opcional para informações sobre a isenção.
- **Início / Fim:** período de vigência da isenção.
- **Processo:** número do processo de protocolo.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua41.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua41.png)

### Aba Receitas

- **Código da isenção:** gerado automaticamente e não editável.
- **Consumo:** selecione os débitos a isentar; por padrão, são listadas as receitas de água, esgoto e excesso.
- **Percentual:** percentual de isenção para cada receita. É possível isentar várias receitas com percentuais diferentes ou inferiores a 100%.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua42.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua42.png)

## Alteração e exclusão

Disponíveis conforme o uso do registro no cadastro.
`,
  "Cálculo das Taxas": `
Rotina usada para criar e efetivar os valores de consumo e excesso de uma matrícula ou de um conjunto de matrículas.

~~~
DB:TRIBUTÁRIO > Água > Procedimentos > Cálculo das Taxas
~~~

### Aba aguacalc

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua43.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua43.png)

### Aba aguacalcval

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua44.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua44.png)

## Cálculo Parcial

Calcula as taxas individualmente, por exemplo, quando uma matrícula é criada, alterada ou isenta.

- **Matrícula:** imóvel a calcular; o nome é exibido ao informar ou pesquisar a matrícula.
- **Parcela inicial / Parcela final:** intervalo de parcelas do cálculo.
- **Cálculo:** efetiva o cálculo.
- **Demonstrativo:** mostra os valores calculados sem efetivar o cálculo.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua45.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua45.png)

## Cálculo Geral

Calcula as taxas para todas as matrículas cadastradas. Informe dados como ano e parcela inicial e final e clique em **Calcular**.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua46.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua46.png)
`,
  "Leitura de Hidrômetros": `
Rotina para incluir no sistema as planilhas utilizadas pelos leituristas durante a verificação mensal.

~~~
DB:TRIBUTÁRIO > Água > Procedimentos > Leitura de Hidrômetros
~~~

## Inclusão

- **Ano/Mês:** período em que as leituras foram feitas.
- **Data:** data de digitação.
- **Logradouro:** endereço do imóvel.
- **Leiturista:** pessoa que verificou a leitura; selecionada entre os leituristas cadastrados.
- **Matrícula:** matrícula lida. Ao informá-la, o sistema apresenta logradouro, número, economias e demais dados da matrícula.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua47.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua47.png)

Os dados do hidrômetro e da leitura anterior são preenchidos com base na matrícula. Em **Dados da leitura**, informe a situação do equipamento (por exemplo, normal ou parado) e a leitura; o sistema calcula Consumo e Excesso automaticamente.

Além de **Incluir** e **Pesquisar**, a opção **Leituras anteriores** mostra leituras digitadas no mesmo período e permite alterar a data para ampliar a pesquisa.

## Alteração e exclusão

Disponíveis conforme o uso do registro no cadastro.
`,
  Parâmetros: `
~~~
DB:TRIBUTÁRIO > Água > Procedimentos > Parâmetros
~~~

### Vencimentos

Permite configurar as datas de vencimento das parcelas do exercício atual e dos anteriores. Selecione uma parcela para alterar:

- **Exercício:** exercício da parcela.
- **Parcela:** parcela do exercício.
- **Vencimento:** data de vencimento.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua50.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua50.png)

### Tipos de Consumo

Permite incluir tipos de consumo do módulo Água. Informe **Código**, **Receita**, **Descrição** e **Histórico**. Defina os tipos com cuidado, pois podem ser cobrados no exercício e nos exercícios seguintes.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua51.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua51.png)

### Consumos

Configura as faixas de consumo associadas às características das matrículas.

- **Código:** gerado automaticamente.
- **Ano:** exercício vigente.
- **Área inicial / Área final:** limites da faixa de área.
- **Característica:** característica do cadastro de imóveis e terrenos.
- **Consumo padrão:** consumo em m³ liberado.
- **Descrição:** nome da configuração.
- **Ativo:** ativa ou desativa a configuração.

#### Aba Consumo

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua52.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua52.png)

#### Aba Valores

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua53.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua53.png)

### Permite que usuário altere Consumo

Define se o usuário pode alterar o consumo durante a manutenção da digitação de leituras.

### Permite que usuário altere Excesso

Define se o usuário pode alterar o excesso durante a manutenção da digitação de leituras.

Alteração e exclusão dos itens podem ser realizadas considerando seu uso no cadastro.
`,
  "Emissão de Carnês de Tarifa": `
~~~
DB:TRIBUTÁRIO > Água > Procedimentos > Emissão de Carnês de Tarifa
~~~

## Emissão Parcial

A rotina gera e imprime os documentos mensais de cobrança da instituição, seja para uma matrícula ou para todas.

Filtros para geração do arquivo:

- **Matrícula:** matrícula para emissão. Em branco, gera o arquivo para todas.
- **Nome:** preenchido automaticamente com o nome do promitente/proprietário.
- **Ano:** exercício.
- **Mês:** mês de referência.
- **Tipo de emissão:** TXT, formato geralmente enviado à empresa de impressão, ou PDF, para impressão pela instituição, inclusive em formulários pré-impressos.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua54.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua54.png)

## Emissão Geral

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua55.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua55.png)
`,
  Desconto: `
~~~
DB:TRIBUTÁRIO > Água > Procedimentos > Desconto
~~~

### Lança desconto

Informe a matrícula e consulte o tipo de débito ao qual o desconto será lançado. Na tela seguinte, selecione o Tipo de Origem e a Receita. É possível marcar mais de uma receita/parcela; a de menor valor define o valor máximo do desconto.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua56.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua56.png)
`,
};