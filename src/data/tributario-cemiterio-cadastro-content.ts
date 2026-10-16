export const cemiterioCadastroContent: Record<string, string> = {
  "Tipos de Isenção": `
Cadastro dos tipos de isenção aplicáveis a sepultamentos.

~~~
DB:TRIBUTÁRIO > Cemitério > Cadastros > Tipos de Isenção
~~~

## Inclusão

- **Sequencial:** código gerado automaticamente.
- **Descrição:** identificação do tipo de isenção.
- **Tipo de Isenção:** selecione Isenção ou Imunidade.
- **Data Limite:** prazo final da isenção gerada.
- **Observações:** texto adicional sobre o cadastro.

Após preencher os campos, clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_23c90eeaa1eb023e.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_23c90eeaa1eb023e.png)

## Alteração

Selecione o tipo de isenção na lista, faça as alterações e clique em **Alterar**.

## Exclusão

Selecione o tipo na lista e clique em **Excluir**. Não é permitido excluir um tipo de isenção vinculado a um sepultamento.
`,
  Legista: `
Cadastro dos médicos legistas que assinam o Atestado de Óbito.

~~~
DB:TRIBUTÁRIO > Cemitério > Cadastros > Legista
~~~

## Inclusão

- **Código:** gerado automaticamente.
- **Numcgm:** informe o CGM do legista ou pesquise pelo link.
- **Crm/Cro:** informe o número do Conselho Regional.

Clique em **Incluir** para confirmar o cadastro.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3ed32b7956aac6a0.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3ed32b7956aac6a0.png)

## Alteração

Selecione o legista na lista, altere os dados e clique em **Alterar**.

## Exclusão

Selecione o legista na lista e clique em **Excluir**.
`,
  Cemitério: `
Cadastro dos cemitérios onde ficam as sepulturas, ossários e jazigos. É utilizado no cadastro de sepultamentos, quadras/lotes e sepulturas, e nas transações e retiradas.

~~~
DB:TRIBUTÁRIO > Cemitério > Cadastros > Cemitério
~~~

Há dois tipos de cemitério:

- **Urbano:** localizado na cidade; pode pertencer ou não à Prefeitura.
- **Rural:** localizado fora do perímetro urbano, como um cemitério de campanha.

## Inclusão

Selecione o tipo de cemitério; o formulário será montado conforme a opção. Para cemitério **Urbano**, informe o código do CGM da Prefeitura. Para cemitério **Rural**, informe obrigatoriamente Nome do Cemitério, Endereço e Cidade; Bairro, CEP e Telefone são opcionais.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_1f460321c7efffa.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_1f460321c7efffa.png)

Cadastro de cemitério urbano.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_1f460321c7efffa2.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_1f460321c7efffa2.png)

Cadastro de cemitério rural.

## Alteração

Somente cemitérios rurais podem ser alterados nesta rotina. Para cemitérios urbanos, altere os dados diretamente no CGM.

## Exclusão

Selecione o tipo (Urbano ou Rural), escolha o registro e clique em **Excluir**. Cemitérios vinculados a sepultamentos não podem ser excluídos.
`,
  Funerárias: `
Cadastro das funerárias do município, utilizado no cadastro de sepultamentos.

~~~
DB:TRIBUTÁRIO > Cemitério > Cadastros > Funerárias
~~~

## Inclusão

Informe o CGM da funerária no formulário e confirme o cadastro.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_9de356c77254ef7c.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_9de356c77254ef7c.png)

Não há alteração nesta rotina. Para alterar os dados da funerária, faça a alteração no CGM.

## Exclusão

Selecione a funerária na lista e confirme a exclusão. Não é permitido excluir registros vinculados a sepultamentos.
`,
  Hospitais: `
Cadastro de hospitais utilizados no cadastro de sepultamentos.

~~~
DB:TRIBUTÁRIO > Cemitério > Cadastros > Hospitais
~~~

## Inclusão

Informe o CGM no formulário e confirme o cadastro para torná-lo um hospital.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3dc17726ebf1f3c3.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3dc17726ebf1f3c3.png)

Não há alteração nesta rotina. Para alterar os dados, faça a alteração no CGM.

## Exclusão

Selecione o hospital na lista e confirme a exclusão. Não é permitido excluir registros vinculados a sepultamentos.
`,
  "Quadras/Lote": `
Gerencia quadras e lotes do cemitério. Cada quadra pode possuir vários lotes, onde ficam sepulturas, ossários e jazigos.

~~~
DB:TRIBUTÁRIO > Cemitério > Cadastros > Quadras/Lote
~~~

Sepulturas são os locais iniciais de sepultamento e podem ser renovadas pelo período e número de vezes determinados pela Prefeitura. **Campa** é a laje que cobre o sepulcro. **Ossário** é o local coletivo onde ficam os restos mortais. **Jazigo** é uma construção em terreno adquirido pelo contribuinte, normalmente com gavetas.

## Inclusão

### Aba Quadra

Informe o Cemitério, a quadra e o tipo (Campa, Jazigo, Ossário ou Sepultura) e clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_26df6b3c33729fc6.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_26df6b3c33729fc6.png)

### Aba Lotes

Informe o número do lote e sua situação, que por padrão é Disponível.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_26df6b3c33729fc66.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_26df6b3c33729fc66.png)

## Alteração

Permite alterar quadras e lotes, adicionar lotes à quadra ou alterar a própria quadra.

## Exclusão

Exclui a quadra do cemitério. A exclusão não será realizada se houver cadastro utilizando o código da quadra.
`,
  Campas: `
Cadastro dos tipos de campa de uma sepultura: Grande, Pequena ou Média.

~~~
DB:TRIBUTÁRIO > Cemitério > Cadastros > Campas
~~~

## Inclusão

Informe a descrição da campa e confirme a inclusão.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_1f460321c7efffa4.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_1f460321c7efffa4.png)

## Alteração

Selecione a campa na lista e altere sua descrição.

## Exclusão

Selecione a campa e confirme a exclusão. Não é possível excluir uma campa utilizada por uma sepultura.
`,
  Sepulturas: `
Sepulturas são os locais onde o sepultamento é inicialmente realizado. Podem ser renovadas pelo período e número de vezes determinados pela Prefeitura.

~~~
DB:TRIBUTÁRIO > Cemitério > Cadastros > Sepulturas
~~~

## Inclusão

Informe a Campa e o Lote. O sistema preencherá automaticamente a Quadra e o Cemitério.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_5c7a99693b396f34.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_5c7a99693b396f34.png)

## Alteração

Selecione a sepultura e altere a campa ou o lote do cemitério.

## Exclusão

Selecione a sepultura e confirme a exclusão. Só é possível excluir sepulturas sem sepultamentos vinculados.
`,
  "Ossário/jazigo": `
O Ossário/Jazigo é uma construção em um lote do cemitério para guardar restos mortais. O jazigo possui gavetas.

~~~
DB:TRIBUTÁRIO > Cemitério > Cadastros > Ossário/jazigo
~~~

## Inclusão

Informe o lote do cemitério; o sistema preencherá a Quadra e o Cemitério. Preencha também comprimento, largura e tipo (Ossário ou Jazigo).

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_a07b9a0685cec4b.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_a07b9a0685cec4b.png)

## Alteração

Selecione o Ossário/Jazigo e altere os dados necessários.

## Exclusão

Selecione o registro e confirme a exclusão. Só é possível excluir quando não houver sepultamentos nem proprietários vinculados.
`,
  "Taxa de Serviço": `
Cadastro das taxas cobradas por serviços do cemitério, como compra de ossário, transferências, retiradas e renovações de sepulturas.

~~~
DB:TRIBUTÁRIO > Cemitério > Cadastros > Taxa de Serviço
~~~

## Inclusão: aba Dados Taxa

- **Código:** gerado automaticamente.
- **Descrição:** identificação da taxa de serviço.
- **Data Limite:** limite de uso da taxa.
- **Receita:** receita cadastrada na Tesouraria.
- **Procedência:** procedência cadastrada no módulo Caixa.
- **Histórico:** histórico da taxa de serviço.
- **Tipo:** selecione o tipo pelo código ou link.

Após preencher os dados, clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_2d01b5bdf8d12ec8.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_2d01b5bdf8d12ec8.png)

### Aba Valores Taxa

Informe **Data Inicial**, **Data Final** de vigência e **Valor**. Clique em **Incluir** para registrar o período e valor. É possível cadastrar diversos períodos e valores.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_a790bbd379a56643.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_a790bbd379a56643.png)

## Alteração

Selecione a taxa, faça as alterações e clique em **Alterar**.

## Exclusão

Selecione a taxa na lista e clique em **Excluir**. Taxas vinculadas a um serviço não podem ser excluídas.
`,
  "Causas Mortis": `
Cadastro das causas de falecimento.

~~~
DB:TRIBUTÁRIO > Cemitério > Cadastros > Causas Mortis
~~~

## Inclusão

**Código:** preenchido automaticamente. **Descrição:** identificação da causa mortis.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_63084f2a2b1bbd6a.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_63084f2a2b1bbd6a.png)

## Alteração

Selecione a causa mortis, altere a descrição e clique em **Alterar**.

## Exclusão

Selecione a causa mortis e clique em **Excluir**.
`,
  "Geral do Município - CGM": `
O Cadastro Geral do Município (CGM) mantém um cadastro único de pessoas físicas e jurídicas e integra suas informações aos módulos do sistema.

~~~
DB:TRIBUTÁRIO > Cemitério > Cadastros > Geral do Município - CGM
~~~

## Inclusão

Informe o CPF/CNPJ e indique se a pessoa pertence ao município. Se o CGM já existir, o sistema exibirá um aviso para consultar o cadastro existente.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_9b3bfbc5804cfad2.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_9b3bfbc5804cfad2.png)

Após confirmar, será aberta a tela de cadastro.

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_4d1b7cabea6bd3c5.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_4d1b7cabea6bd3c5.png)

### Campos do CGM

- **CPF / CNPJ:** preenchido com o documento informado anteriormente; um parâmetro controla se o cadastro pode ser feito com CPF/CNPJ zerado.
- **Identidade:** número do documento, opcional.
- **CGM (Município):** indica se a pessoa é do município.
- **Numcgm:** gerado automaticamente.
- **Nome / Razão Social:** nome completo da pessoa física ou jurídica.
- **Nome do Pai / Nome da Mãe:** nomes dos pais.
- **Data de Nascimento, Estado Civil e Sexo:** dados pessoais.
- **Profissão:** profissão, não vinculada ao CNAE.
- **Nacionalidade:** Brasileira ou Estrangeira.
- **CNH, Categoria, Emissão, Primeira e Validade:** dados da carteira de habilitação.
- **Endereço Principal:** endereço primário, obrigatório.
- **Endereço Secundário:** endereço adicional, opcional.
- **Data de Cadastramento / Data de Alteração:** preenchidas automaticamente.

## Alteração

Pesquise por nome, CPF ou CNPJ e selecione o cadastro. É possível alterar os campos e clicar em **Alterar**. Não é permitido alterar uma pessoa física para pessoa jurídica.
`,
};