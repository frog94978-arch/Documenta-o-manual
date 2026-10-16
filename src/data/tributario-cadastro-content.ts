export const tributarioCadastroContent: Record<string, string> = {
  "Cadastro de Condomínios": `
Cadastro dos condomínios do município, verticais ou horizontais, utilizados e vinculados às matrículas na rotina de manutenção de matrículas.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Cadastro de Condomínios
~~~

O cadastro permite inclusão, alteração e exclusão. A exclusão só é permitida quando o condomínio não possui vínculo com matrículas ou prédios.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros1.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros1.png)

> Não é permitido cadastrar mais de um condomínio para o mesmo CGM.
`,
  "Cadastro de Prédios": `
Rotina destinada exclusivamente ao cadastro dos prédios de um determinado condomínio.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Cadastro de Prédios
~~~

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros2.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros2.png)
`,
  "Cadastro de Localidades Rurais": `
## Inclusão

### Descrição dos campos

**Localidade:** descrição que identifica a localidade a cadastrar.

**Valor Mínimo ha:** valor mínimo por hectare na localidade, utilizado somente na geração dos arquivos do PIT de ITBI Rural.

**Valor Máximo ha:** valor máximo por hectare na localidade, utilizado somente na geração dos arquivos do PIT de ITBI Rural.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros3.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros3.png)

## Alteração

Lista as localidades cadastradas; selecione um registro para alterar seus dados.
`,
  Setor: `
O cadastro imobiliário pode ser dividido em setores para identificar a localização dos imóveis e os setores fiscais da planta genérica de valores.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Setor
~~~

## Setor

Divisão física da cidade. Na inclusão de lotes, informa-se o setor onde o imóvel está localizado.

### Inclusão

- **Setor:** código numérico do setor.
- **Descrição:** nome do setor.
- **Alíquota Predial / Alíquota Territorial:** alíquotas de IPTU predial e territorial, caso sejam definidas por setor.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros4.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros4.png)

## Setor Fiscal

Divisão da cidade para a planta genérica de valores. Em alguns municípios, Setor Fiscal e Zona Fiscal podem ter a mesma finalidade.

### Inclusão: aba Setor Fiscal

**Código do Setor Fiscal:** preenchido automaticamente. **Descrição do Setor Fiscal:** descrição do setor fiscal.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros5.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros5.png)

### Aba Valores

Informe **Ano** e **Valor m2 Terreno**, conforme o valor do metro quadrado definido pela planta genérica para esse ano.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros6.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros6.png)

## Setor de Localização

Divisão geográfica da cidade utilizada para identificar a localização do lote no cadastro de imóveis.

### Inclusão

**Código:** código numérico do setor. **Descrição:** descrição do setor.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros7.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros7.png)

## Alteração e exclusão

Para Setor, Setor Fiscal e Setor de Localização, selecione o registro pelo código ou descrição. É possível alterar a descrição. A exclusão só é possível quando o registro não está vinculado a nenhum procedimento.
`,
  "Zona Fiscal": `
O cadastro da Zona Fiscal tem finalidade semelhante ao Setor Fiscal. O município pode dividir a cidade por zona ou setor fiscal para valorizar os imóveis, conforme a planta genérica de valores e a legislação do IPTU.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Zona Fiscal
~~~

## Inclusão

**Código:** código numérico da Zona Fiscal. **Descrição:** identificação da zona.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros8.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros8.png)

## Alteração

Pesquise pelo código ou descrição e altere o registro selecionado.

## Exclusão

Só é permitida quando a Zona Fiscal não está vinculada a nenhum procedimento.
`,
  Bairro: `
Forma uma base de dados dos bairros urbanos e rurais do município, utilizada nos cadastros de imóveis, empresas e contribuintes.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Bairro
~~~

## Inclusão

- **Código do Bairro:** gerado automaticamente.
- **Bairro:** nome do bairro, com até 40 caracteres.
- **Código Anterior:** código usado no cadastro anterior, opcional.
- **Rural:** indica se o bairro está na zona urbana ou rural.

Após preencher os campos, clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros9.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros9.png)

## Alteração

Selecione o bairro na lista, altere os dados necessários e clique em **Alterar**.

## Exclusão

Selecione o bairro e clique em **Excluir**. Não é permitido excluir bairros vinculados a contribuintes (CGM), lotes, empresas, autônomos ou alvarás sanitários.
`,
  Loteamento: `
Forma uma base de loteamentos e condomínios que pode ser vinculada ao cadastro dos imóveis. O preenchimento dessa informação no imóvel é opcional.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Loteamento
~~~

## Inclusão

- **Cód. Loteamento:** gerado automaticamente.
- **Descrição:** nome do loteamento.
- **Área Construída:** área do condomínio destinada aos lotes.
- **Área Pública:** área pública de uso comum.
- **Área Total:** soma das áreas construída e pública.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros10.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros10.png)

## Alteração

Selecione o loteamento na lista e altere os dados necessários.

## Exclusão

Selecione o loteamento e clique em **Excluir**. Não é permitido excluir um loteamento vinculado ao cadastro de um lote.
`,
  "Registro de Imóveis": `
Forma uma base com as comarcas dos Cartórios de Registro de Imóveis do município.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Registro de Imóveis
~~~

## Inclusão

**Código:** gerado automaticamente. **Descrição:** nome da comarca.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros11.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros11.png)

## Alteração

Selecione o registro na lista e altere os dados necessários.

## Exclusão

Selecione o registro e clique em **Excluir**. Não é permitido excluir um Registro de Imóveis vinculado ao cadastro de um lote.
`,
  "Tipo de Testada Interna": `
Cadastro dos tipos de confrontação que um lote pode ter além de outro lote ou logradouro, como divisa com arroio, rio ou área rural.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Tipo de Testada Interna
~~~

## Inclusão

**Código:** preenchido automaticamente. **Descrição:** identificação da testada interna.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros12.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros12.png)

## Alteração e exclusão

Selecione o registro na lista para alterar ou excluir. Não é permitido excluir um tipo de testada interna vinculado ao cadastro de um lote.
`,
  Orientação: `
Cadastro dos tipos de orientação dos imóveis, como norte, sul, leste, oeste, noroeste e sudoeste.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Orientação
~~~

## Inclusão

**Código:** preenchido automaticamente. **Descrição:** nome da orientação.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros13.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros13.png)

## Alteração e exclusão

Selecione o registro na lista para alterar ou excluir. Não é permitido excluir uma orientação vinculada a um imóvel.
`,
  "Tipo de Isenção": `
Cadastro dos tipos de isenção utilizados nas isenções de IPTU e taxas dos imóveis.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Tipo de Isenção
~~~

## Inclusão

- **Código:** gerado automaticamente.
- **Descrição:** identificação do tipo, por exemplo, isenção para aposentados ou conforme uma lei.
- **Tipo de Isenção:** Isenção, Imunidade ou Não Incidente.
- **Isenta Taxas:** define se o tipo também permite isentar taxas cobradas com o IPTU.
- **Observação Certidão:** texto adicional impresso na Certidão de Isenção.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros14.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros14.png)

## Alteração

Selecione o registro na lista e altere os campos necessários.

## Exclusão

Selecione o registro e clique em **Excluir**. Não é permitido excluir um tipo de isenção vinculado a uma isenção de matrícula.
`,
  Imobiliária: `
Vincula um CGM do cadastro de contribuintes à função de imobiliária. Esse cadastro pode ser usado para organizar imóveis por imobiliária.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Imobiliária
~~~

## Inclusão

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros15.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros15.png)

Esta rotina não possui opção de alteração: os dados cadastrais da imobiliária são mantidos no CGM.

## Exclusão

Selecione a imobiliária e clique em **Excluir**. Não é permitido excluir uma imobiliária que possua imóveis vinculados.
`,
  "Grupo de Características": `
Cadastro dos grupos usados para detalhar características de terrenos, construções, faces de quadra, ITBI e obras/projetos.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Grupo de Características
~~~

## Inclusão

- **Código:** código do grupo.
- **Descrição:** identificação, por exemplo, Construção, Lote, Face, ITBI ou Obras/Projetos.
- **Tipo:** selecione onde o grupo será utilizado. O grupo aparecerá no cadastro correspondente, como Construção, Lote, Face, ITBI ou Obras/Projetos.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros16.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros16.png)

## Alteração

Selecione o grupo na lista e altere seus dados.

## Exclusão

Selecione o grupo e clique em **Excluir**. Não é permitido excluir grupo vinculado a um cadastro de características.
`,
  Característica: `
Forma uma base de características que descrevem imóveis, faces de quadra, lotes, construções, ITBI e obras/projetos.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Característica
~~~

## Inclusão

- **Cód. Característica:** gerado automaticamente.
- **Descrição:** nome da característica, como alvenaria, madeira, iluminação ou pavimentação.
- **Grupo:** selecione ou pesquise o grupo ao qual pertence a característica.
- **Pontos:** pontuação, quando a valorização imobiliária usa pontos de características.
- **Característica principal:** Sim define a característica como padrão na inclusão do imóvel.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros17.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros17.png)

## Alteração

Selecione a característica e altere os dados necessários.

## Exclusão

Selecione a característica e clique em **Excluir**. Não é permitido excluir uma característica vinculada a lote ou construção.
`,
  "Histórico de Cálculo do IPTU": `
Cadastro dos históricos de cálculo e dos respectivos históricos de isenção usados no cálculo do IPTU, por exemplo, IPTU, Taxa de Serviços Urbanos e suas isenções.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Histórico de Cálculo do IPTU
~~~

## Inclusão

**Código:** código numérico do cadastro. **Descrição:** nome do histórico, como IPTU, Taxa de Serviços Urbanos ou respectivas isenções.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros18.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros18.png)

## Alteração

Selecione o histórico na lista e altere os dados.

## Exclusão

Selecione o registro e clique em **Excluir**. Não é permitido excluir um histórico vinculado a um cálculo de IPTU. Após processar um cálculo com o histórico, ele não poderá ser excluído.
`,
  "Configuração de Histórico de Cálculo": `
Vincula o histórico de cálculo do tributo ao respectivo histórico de isenção.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Configuração de Histórico de Cálculo
~~~

## Inclusão

- **Código:** gerado automaticamente.
- **Histórico:** código do histórico relativo à isenção.
- **Histórico pai:** código do histórico relativo ao débito.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros19.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros19.png)

## Alteração

Selecione a vinculação na lista e altere os dados.

## Exclusão

Selecione a vinculação e clique em **Excluir**. Alterar a vinculação pode afetar demonstrativos de cálculo de anos anteriores. Excluí-la impede a apresentação dos valores de débito e isenção correspondentes nesses demonstrativos.
`,
  "Cadastro de Taxas": `
Configura as taxas por exercício que são geradas junto com o IPTU durante o cálculo.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Cadastro de Taxas
~~~

## Inclusão: aba Dados da Taxa

**Código da Taxa:** gerado automaticamente. **Descrição:** identificação da taxa, por exemplo, Taxa de Serviços Urbanos.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros20.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros20.png)

### Aba Configuração da Taxa

- **Receita:** receita orçamentária da taxa; pesquise pelo link se necessário.
- **Históricos:** histórico de cálculo correspondente; pesquise pelo link se necessário.
- **Código Função:** função de cálculo que gera o IPTU para o exercício.
- **Histórico para Isenção:** histórico da isenção correspondente.
- **Valor:** valor base usado no cálculo.
- **Alíquota:** percentual aplicado ao valor base.
- **Exercício:** ano do cálculo; preenchido automaticamente com o ano atual.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros21.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros21.png)

## Alteração

Selecione a taxa na lista e altere os campos. As alterações só terão efeito após novo cálculo do IPTU.

## Exclusão

Selecione o registro e clique em **Excluir**. Não é permitido excluir taxas vinculadas ao cálculo de IPTU de algum imóvel.
`,
  Logradouro: `
Base de ruas, avenidas e demais logradouros urbanos e rurais, utilizada nos cadastros de imóveis, empresas e contribuintes.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Logradouro
~~~

## Inclusão: aba Cadastro de Ruas

- **Cód Logradouro:** gerado automaticamente ao incluir.
- **Logradouro:** nome da rua ou via.
- **Tipo do Logradouro:** rua, avenida, travessa etc.
- **CEP:** CEP do logradouro, se o município possuir CEP por logradouro.
- **Lei / Data Lei:** número, ano e data da lei que criou o logradouro.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros22.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros22.png)

### Aba Bairro

Selecione o bairro pelo código ou pesquise pelo link. Clique em **Incluir**; se o logradouro passar por vários bairros, repita a operação para todos.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros23.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros23.png)

### Aba Interligação com CEPs

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros24.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros24.png)

## Alteração

Selecione o logradouro na lista e altere os dados necessários.

## Exclusão

Selecione o logradouro e clique em **Excluir**. Não é permitido excluir logradouro vinculado a imóvel, empresa ou contribuinte.
`,
  "Faces de Quadra": `
Face de quadra é o trecho de um lado da quadra voltado para um logradouro, entre esquinas ou entre uma esquina e o início ou fim do logradouro. O cadastro registra o logradouro, a quadra, as características de infraestrutura e os serviços públicos disponíveis.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Faces de Quadra
~~~

## Inclusão

- **Cód Face:** gerado automaticamente.
- **Setor:** setor onde está localizada a face; pesquise pelo nome no link, se necessário.
- **Quadra:** número da quadra.
- **Logradouro:** código do logradouro ou pesquisa pelo link.
- **Lado:** lado do logradouro, considerando o sentido do início para o fim.
- **Extensão:** distância em metros entre as esquinas ou entre a esquina e o início/fim do logradouro.
- **Profundidade Quadra:** distância entre a testada do lote e a testada do lote da face oposta.
- **Outros Dados:** observações sobre o cadastro.
- **Característica Face:** selecione as características e clique em **Enviar**.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros25.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros25.png)

### Aba Valor

Preencha os valores do metro quadrado do terreno e da construção somente quando a planta genérica do município usar valorização por face de quadra.

- **Exercício:** ano a que os valores se referem.
- **Valor m2 terreno:** valor do metro quadrado do terreno.
- **Valor m2 construção:** valor do metro quadrado da construção.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros26.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros26.png)
`,
  "Massa Falida": `
Cadastro de matrículas de imóveis pertencentes a uma massa falida e de seu responsável, o síndico.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Massa Falida
~~~

## Inclusão

- **Cód Lançamento:** gerado automaticamente.
- **Data Declaração:** data em que foi decretada a falência da empresa proprietária dos imóveis.
- **CGM Responsável:** CGM do responsável (síndico), pesquisável pelo link.
- **Observação:** texto livre sobre o cadastro.
- **Matrícula do Imóvel:** matrícula pertencente à massa falida; clique em **Adicionar** para cada uma. Para remover uma matrícula, selecione-a e use o botão, que passa a ser **Excluir**.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros27.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros27.png)

## Alteração

Selecione o cadastro na lista e faça as alterações necessárias.

## Exclusão

Selecione o cadastro e clique em **Excluir**.
`,
  "Tipo de Averbação": `
Cadastro dos tipos de averbação utilizados na rotina de inclusão de averbação.

~~~
DB:TRIBUTÁRIO > Cadastro > Cadastros > Tipo de Averbação
~~~

## Inclusão

- **Código:** gerado automaticamente após incluir.
- **Descrição:** nome do tipo de averbação, com até 20 caracteres.
- **Regra:** define a transferência do imóvel. Proprietário transfere para o proprietário; Promitente mantém a averbação em nome do promitente.
- **Data limite:** último dia em que o tipo poderá ser utilizado.
- **Grupo:** Escritura, Registro de Imóveis, Outros, Formal de Partilha, Decisão Judicial ou ITBI.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros28.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros28.png)

## Alteração

Selecione o registro na lista e altere os dados necessários.

## Exclusão

Selecione o registro na lista e clique em **Excluir**.
`,
};