export const cadastroProcedimentosContent: Record<string, string> = {
  "Manutenção de Imóveis": `
Rotina para organizar os dados cadastrados e formar o cadastro imobiliário do município.

~~~
DB:TRIBUTÁRIO > Cadastro > Procedimentos > Manutenção de Imóveis
~~~

## Inclusão: aba Lote

O lote é o cadastro físico do imóvel (terreno ou gleba), onde são registradas área, testadas, características e localização.

- **Cód. do Lote:** gerado automaticamente.
- **Cód Setor:** setor da cidade onde o lote está localizado; selecione ou pesquise pelo nome.
- **Quadra:** quadra disponível para o setor selecionado.
- **Lote:** identificação do terreno, com até quatro caracteres numéricos e/ou alfabéticos.
- **Área em m2:** área oficial registrada na escritura.
- **Bairro / Cód. Loteamento:** bairro e loteamento do imóvel, selecionáveis pelo link.
- **Área Medida:** área apurada no levantamento cadastral; quando informada, é usada no cálculo do IPTU em lugar da Área em m2.
- **Total Construído no Lote:** preenchido automaticamente.
- **Zona Fiscal:** zona de valorização do imóvel.
- **Características:** selecione, por grupo, as características do lote cadastradas para o tipo Lote e clique em **Enviar**.

### Testadas do Lote

Todo lote precisa ter ao menos uma testada para logradouro. Para cada frente, informe **Testada MI** (medida da escritura), **Testada Medida** (medida do levantamento) e se é **Principal**. Só pode haver uma principal, que exige Testada MI. Se o parâmetro Utiliza número na testada estiver ativo, também podem ser informados número e complemento.

### Testadas Internas

Registre confrontações que não sejam com logradouro. Informe **Cód. do Lote** confrontante (somente lotes da mesma quadra) ou **Outro** tipo de testada interna, **Orientação**, **Testada MI** e **Testada Medida**. Use **Novo** para adicionar outras e **Excluir** para remover; ao terminar, clique em **Enviar**.

### Localização

Informe Setor, Quadra e Lote de Localização, conforme a escritura. Opcionalmente, informe o Logradouro de referência da esquina, Distância linear até o lote e Ponto de Orientação.

Após preencher os dados do lote, clique em **Incluir** para habilitar a aba Matrícula. Para vincular uma nova matrícula a lote existente, deixe os campos vazios, pesquise, selecione o lote e prossiga para a aba Matrícula. É comum usar esse fluxo para apartamentos do mesmo prédio.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros122.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros122.png)

## Aba Matrícula

A matrícula é o cadastro virtual que vincula lote, proprietários e construções. Um lote pode ter várias matrículas, como apartamentos de um prédio.

### Dados da matrícula

- **Matrícula do Imóvel:** código gerado ao incluir.
- **Numcgm:** CGM do proprietário principal na escritura; pesquise pelo link.
- **Tipo de Proprietário:** selecione um tipo cadastrado.
- **Fração por Proprietário:** percentual do proprietário principal; a soma dos proprietários deve ser 100%.
- **Fração Ideal:** participação da matrícula na área do lote. Normalmente é calculada proporcionalmente à área construída da matrícula em relação ao total construído. Informe manualmente apenas para ajustar a participação; deixe em branco quando a matrícula for a única do lote.
- **Ref. Anterior:** código usado por sistema cadastral anterior.
- **Registro Cartográfico:** referência de localização do imóvel.
- **Cód. Condomínio:** condomínio ao qual a matrícula pertence.
- **Observações:** informações sobre a matrícula.

Exemplo: lote de 300 m² com 150 m² construídos, sendo 100 m² na matrícula 1 e 50 m² na matrícula 2, resulta em frações calculadas de 66,67% e 33,33%. Também é possível informar frações manuais, como 50% para cada matrícula.

### Dados do Registro de Imóveis

Informe Registro de Imóveis, Matrícula do Registro de Imóveis, Quadra e Lote conforme os dados do cartório.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/manutencao_152.png)](https://e-cidade.wiki.br/tributario/cadastro/files/manutencao_152.png)

## Aba Construções

Cadastre cada construção existente na matrícula.

- **Cód. Construção:** código interno; em branco, o sistema gera automaticamente.
- **Data de Inclusão / Ano da Construção:** datas da inclusão e da edificação.
- **Área da construção em m2:** área total, incluindo proporcionalmente áreas comuns de apartamentos.
- **Área Privada:** área de uso privativo da matrícula.
- **Pavimento:** andar onde a construção está localizada.
- **Logradouro / Número / Complemento:** endereço da construção; logradouro é selecionado entre os vinculados à quadra.
- **Características:** selecione as características da construção e clique em **Enviar**.
- **Origem da Construção:** código de construção ampliada, se aplicável.
- **Construção Principal:** marque se é a principal; só pode haver uma por matrícula.
- **Observação:** informações adicionais.

### Demolição da construção

Informe **Data Demolição** para manter a construção no histórico como demolida e excluí-la do cálculo do valor venal. Se necessário, indique se o Processo está no sistema e informe o processo/protocolo.

É possível importar construções de outra matrícula pelo link correspondente ou carregar obras do módulo Projetos pelo botão **Alvarás Liberados**, que lista obras da matrícula com área disponível. Revise a área e clique em **Incluir**.

Nos dados complementares, o botão **Habite-se** permite vincular um ou mais Habite-se à construção, informando matrícula/construção, processo e origem do Habite-se (cadastrado no sistema ou não), número e datas. O mesmo fluxo se aplica a demolições parciais.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros124.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros124.png)

## Aba Escrituradas

Registre as construções da matrícula conforme a escritura; os campos são semelhantes aos da aba Construções.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros125.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros125.png)

## Aba Imobiliária

Informe o CGM da imobiliária responsável pela matrícula ou pesquise pelo nome.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros126.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros126.png)

## Aba Promitente

Cadastre um ou mais possuidores sem propriedade registrada: informe Numcgm, Tipo do Promitente (conforme apresentação ou não de contrato de compra e venda) e se é o responsável principal. Só pode haver um principal.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros127.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros127.png)

## Aba Outros Proprietários

Informe CGM, Tipo de Proprietário e, opcionalmente, Fração por proprietário e Área do lote por proprietário. A fração informada reduz a participação do proprietário principal.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/manutencao_153.png)](https://e-cidade.wiki.br/tributario/cadastro/files/manutencao_153.png)

## Aba Endereço de Entrega

Informe o endereço alternativo solicitado para envio do carnê de IPTU, diferente dos endereços cadastrados no CGM e no imóvel; clique em **Atualizar**.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros129.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros129.png)

## Aba Isenção

Permite incluir isenção total ou parcial de IPTU e taxas, por percentual ou área. Informe matrícula, Tipo Isenção, período, percentual (zero para isentar somente taxas), Área Isenta, processo e histórico. O período é considerado por exercício: qualquer período dentro do ano isenta o exercício inteiro. Na tabela Taxas do IPTU, informe o percentual de isenção por taxa.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros130.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros130.png)

## Alteração

Informe a matrícula e clique em **Entrar**. Abra a aba desejada e clique em **Alterar**. Para alterar construção, selecione-a na lista de construções cadastradas.

## Baixa

Baixar mantém o cadastro da matrícula, mas impede alteração e novos cálculos de IPTU e taxas. Informe matrícula, processo, data e observações; usuário, data e hora do operador são automáticos.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros131.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros131.png)

## Exclusão de Baixa

Selecione uma matrícula baixada na lista e clique em **Excluir** para reativá-la.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros132.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros132.png)
`,
  "Cálculo IPTU": `
~~~
DB:TRIBUTÁRIO > Cadastro > Procedimentos > Cálculo IPTU
~~~

## Cálculo Geral

Processa o IPTU das matrículas do cadastro imobiliário.

- **Gerar Financeiro:** Sim calcula e lança os débitos na CGF; Não calcula para conferência e permite consultar os valores no Cadastro Técnico Municipal, link Cálculo.
- **Ano para cálculo:** exercício do cálculo.

Clique em **Calcular**. A rotina pode demorar conforme complexidade, quantidade de matrículas e capacidade do servidor. É possível recalcular o mesmo exercício: parcelas pagas ou canceladas não são recalculadas, somente as pendentes.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros113.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros113.png)

## Cálculo Parcial

Calcula uma matrícula específica. A tela depende do parâmetro Permite Escolher Vencimento Durante o Cálculo.

Com o parâmetro 1, informe **Dia para vencimento**, **Parcelas**, **Mês inicial** e **Percentual de desconto** para cota única. Exemplo: dia 10, três parcelas e início no mês 4 gera vencimentos em 10/04, 10/05 e 10/06. O desconto cria também uma cota única com vencimento da primeira parcela.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros114.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros114.png)

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros115.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros115.png)

## Exclusão de Cálculo Parcial

Informe ou pesquise a matrícula, selecione o ano e clique em **Excluir Cálculo**. Só é permitido excluir cálculos sem pagamentos efetuados ou débitos cancelados.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros116.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros116.png)
`,
  "Digitação para o calculo": `
Permite informar manualmente o valor venal do terreno e das construções, a alíquota e as taxas para calcular o IPTU de uma matrícula, em situações em que o cálculo automático não deve ser utilizado.

~~~
DB:TRIBUTÁRIO > Cadastro > Procedimentos > Digitação para o calculo
~~~

Informe ou pesquise a **Matrícula do Imóvel** e selecione a forma de inclusão:

## Digitação manual

Todos os valores serão informados pelo usuário.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros117.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros117.png)

## Importa cálculos anteriores

Informe **Exercício de origem** e **Percentual** de correção e clique em **Processar**. Os valores venais e taxas serão trazidos como base e poderão ser alterados.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros118.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros118.png)

### Aba Cálculo

Confira ou informe **Valor Venal Territorial**, **Alíquota**, **Percentual de Correção**, **Ano de Origem** e **Valor de Origem**, conforme o modo selecionado; clique em **Alterar** para gravar.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros119.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros119.png)

### Aba Construções

Disponível quando a matrícula possui construções. Informe o código da construção e seu valor venal; repita para cada construção. Valores importados podem ser alterados ou excluídos.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros120.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros120.png)

### Aba Taxas

Informe cada taxa lançada com o IPTU e seu valor. Valores importados podem ser alterados ou excluídos. Após a digitação, execute o cálculo parcial de IPTU.

> Os dados desta rotina só são usados no cálculo do exercício em que foram incluídos; informe-os novamente nos exercícios posteriores.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros121.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros121.png)
`,
  Averbação: `
A averbação substitui o responsável pelo pagamento dos tributos do imóvel, seja pela troca do proprietário ou pela inserção/substituição de um possuidor (promitente).

~~~
DB:TRIBUTÁRIO > Cadastro > Procedimentos > Averbação
~~~

As averbações podem ter origem em escritura, matrícula do Registro de Imóveis, contrato de promessa de compra e venda, guia de ITBI, sentença judicial ou formal de partilha. A regra do tipo define se será trocado o proprietário ou mantido o proprietário com inclusão do promitente.

Exemplo: escritura de venda pode trocar João por Pedro como proprietário; contrato de promessa de compra e venda pode manter João como proprietário e incluir Pedro como possuidor.

A rotina tem duas etapas: informar imóvel, tipo e adquirentes; depois processar a averbação para efetivar a troca ou inclusão.

Informe ou pesquise a matrícula por setor, quadra, lote, logradouro ou proprietário. Se houver débitos, o sistema apresenta um alerta.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros108.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros108.png)

## Inclusão: aba Averbação

- **Código da averbação:** gerado automaticamente.
- **Matrícula / Setor / Quadra / Lote:** preenchidos conforme o imóvel.
- **Observação:** informações sobre a averbação.
- **Tipo:** determina a ação sobre proprietário e possuidor.
- **Data do tipo:** data do documento apresentado, como escritura ou contrato.
- **Protocolo:** processo da solicitação.
- **Situação:** indica se a averbação foi processada.

Os campos seguintes dependem do tipo selecionado. Para Escritura, informe Livro, Folha, Número e Tabelionato. Para Registro de Imóveis, informe Matrícula e Protocolo do RI. Para Contrato, não há campos adicionais.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros109.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros109.png)

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros110.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros110.png)

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros111.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros111.png)

### Aba CGM

Adicione o CGM do adquirente ou pesquise pelo nome; indique se é Principal. Só pode haver um adquirente principal.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros112.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros112.png)

## Alteração e exclusão

Só é possível alterar ou excluir averbações ainda não processadas. O Tipo não pode ser alterado.

## Processar

Selecione uma averbação pendente, confira os dados e clique em **Processar** para trocar o proprietário ou inserir o possuidor.
`,
  Isenção: `
Permite conceder isenção total ou parcial de IPTU e taxas para uma matrícula.

~~~
DB:TRIBUTÁRIO > Cadastro > Procedimentos > Isenção
~~~

Pesquise a matrícula por setor, quadra, lote, proprietário ou logradouro e clique em **Entrar**.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros133.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros133.png)

Informe Tipo Isenção, período, percentual, Área Isenta (se parcial), processo e histórico. As datas são consideradas pelo ano: uma isenção entre março e novembro vale para todo aquele exercício. Percentual zero isenta apenas taxas. A Área do Lote e a Diferença são apresentadas pelo sistema. Na tabela Taxas do IPTU, informe o percentual de isenção de cada taxa.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros134.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros134.png)

Isenções existentes aparecem na mesma tela. Selecione uma para alterar ou excluir.
`,
  "Levantamento Cadastral": `
Rotina para gerar arquivos de levantamento cadastral.

~~~
DB:TRIBUTÁRIO > Cadastro > Procedimentos > Levantamento Cadastral
~~~

## Gera Arquivo TXT

Selecione um dos layouts disponíveis (Versão 2 ou Lista de Pontos) e clique em **Gerar Arquivo**. O sistema gera os dados do cadastro imobiliário da Prefeitura.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros135.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros135.png)
`,
  "Imobiliária / Matricula": `
Vincula matrículas a imobiliárias para direcionar carnês de IPTU à imobiliária e permitir que ela consulte débitos e emita boletos no DBPref.

~~~
DB:TRIBUTÁRIO > Cadastro > Procedimentos > Imobiliária / Matrícula
~~~

Selecione uma imobiliária cadastrada previamente.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros136.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros136.png)

O CGM da imobiliária é preenchido automaticamente. Informe a **Matrícula** ou pesquise por setor, quadra, lote, proprietário ou logradouro e clique em **Incluir**. Repita para adicionar outras matrículas.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros137.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros137.png)
`,
  "Setor Fiscal / Face de Quadra": `
Permite alterar o setor fiscal de uma ou mais faces de quadra de um logradouro. O setor fiscal representa a divisão de valores da planta genérica do município.

~~~
DB:TRIBUTÁRIO > Cadastro > Procedimentos > Setor Fiscal / Face de Quadra
~~~

Informe o código do logradouro ou pesquise pelo link e clique em **Enviar**.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros138.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros138.png)

O sistema lista as faces do logradouro, o setor fiscal atual, Zona e Bairro. Altere cada face individualmente ou aplique uma alteração geral.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros139.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros139.png)
`,
  "Logradouro / Características": `
Permite alterar características das faces de quadra de um logradouro, por exemplo, atualizar “sem pavimento” para “com pavimento”.

~~~
DB:TRIBUTÁRIO > Cadastro > Procedimentos > Logradouro / Características
~~~

Informe o **Logradouro** e o **Grupo** de características e clique em **Pesquisar**.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros140.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros140.png)

Marque as faces que deseja atualizar e clique em **Selecionar**.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros141.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros141.png)

Selecione a nova característica principal para todas as faces ou escolha uma característica individualmente para cada face.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros142.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros142.png)
`,
  "Excessões na geração dos carnes": `
Registra CGMs, setores e quadras que devem ser excluídos da emissão geral de carnês de IPTU.

~~~
DB:TRIBUTÁRIO > Cadastro > Procedimentos > Excessões na geração dos carnes
~~~

## Inclusão

### Aba Principal

**Sequencial:** gerado automaticamente. **Data de Lançamento** e **Cód. Usuário:** preenchidos pelo sistema.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros143.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros143.png)

### Aba CGM

Informe ou pesquise o Numcgm cuja matrícula deverá ser incluída na emissão geral de carnês.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros144.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros144.png)

### Aba Setor/Quadra

Informe **Cód. Setor** e **Quadra**. Ambos são obrigatórios. Para várias quadras do mesmo setor, crie um registro para cada quadra.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros145.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros145.png)

Os CGMs, setores e quadras cadastrados ficam excluídos da emissão geral. Para incluí-los novamente, remova o registro da exceção. A alteração pode remover um CGM ou uma combinação setor/quadra; também é possível excluir o registro de exceção inteiro.
`,
  "Endereço de Entrega": `
Registra um endereço alternativo para envio do carnê de IPTU de uma matrícula, diferente dos endereços do CGM e do imóvel.

~~~
DB:TRIBUTÁRIO > Cadastro > Procedimentos > Endereço de Entrega
~~~

Preencha os dados do endereço solicitado pelo contribuinte e clique em **Atualizar**.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros146.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros146.png)
`,
  "Emissão Geral de IPTU/TCRS": `
Processa a emissão geral de carnês de IPTU, em arquivo para gráfica ou boletos PDF para impressão local.

~~~
DB:TRIBUTÁRIO > Cadastro > Procedimentos > Emissão Geral de IPTU
~~~

## Configuração de Geração

- **Quantidade de Registros a processar:** opcional, limita uma amostra de matrículas para teste; deixe vazio para emitir todas.
- **Processar apenas registros com movimentação nos últimos anos especificados:** restringe aos imóveis com pagamentos no número de exercícios informado.
- **Tipo:** TXT gera dados e layout para gráfica; PDF gera boletos PDF; IGC702 gera arquivo texto no padrão da gráfica do Banco do Brasil.
- **Imprimir capa:** disponível para PDF.
- **Gera opção de Vencimento:** disponível para TXT; inclui opções de pagamento das parcelas junto com as cotas únicas.
- **Ordem da Emissão:** cidade/logradouro, bairro/logradouro, alfabética/nome, zona de entrega ou referência anterior.
- **Solicitar Local para Gravar:** pergunta onde salvar os arquivos na máquina; caso contrário, ficam no servidor.

## Configuração de Dados

- **Tipo de Imóvel:** Predial, Territorial ou Todos.
- **Valor Mínimo de / Valor Máximo:** intervalo do IPTU mais taxas; matrículas fora do intervalo são excluídas.
- **Valor de Intervalo para Parcelado:** define quando emitir em parcela única conforme faixa do valor da parcela; pode desconsiderar o intervalo, incluir somente os valores da faixa ou excluir os valores da faixa.
- **Filtro Principal:** Normal; somente sem parcelas em atraso; ou somente registros sem pagamentos no exercício.
- **Vínculo com imobiliária / loteamentos:** emitir somente vinculados, somente não vinculados ou todos.

## Outros Filtros

- **Terceiro Dígito do Código de Barras das Únicas / Parcelado:** para convênio Arrecadação, 6 impede alteração do valor nos terminais bancários; 7 permite informar/alterar o valor.
- **Imprimir capa / Mensagem débitos anos anteriores:** opções de impressão.
- **Considera movimento nos anos:** quantidade de exercícios anteriores verificados para identificar pagamento.
- **Parcela Obrigatória em Aberto:** restringe a emissão a matrículas cuja parcela especificada ainda esteja aberta.
- **Gerar apenas para as matrículas:** seleção para testes.
- **Gerar com Cidade em Branco e sem Caixa Postal:** inclui endereços incompletos.
- **Expressão “Isento” Quando Taxa/Imposto Zerado:** imprime “ISENTO” quando houver isenção.
- **Somente com endereço válido ou Caixa Postal:** limita às matrículas com endereço de entrega.
- **Processar Massa Falida:** inclui imóveis cadastrados como massa falida.
- **Ano:** exercício da emissão.
- **Únicas:** selecione as cotas únicas que deseja incluir.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros147.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros147.png)
`,
  "Parcela Única": `
Permite gerar cota única do IPTU em lote para matrículas calculadas ou individualmente para uma matrícula.

## Inclusão Geral de Parcela Única

Informe **Data Vencimento**, **Data Lançamento** (informativa, padrão hoje), **Percentual Desconto** e **Ano** do cálculo do IPTU. Clique em **Calcular Parcela Única**. É possível gerar várias opções com vencimentos e descontos diferentes.

Exemplo: vencimento 10/07/2008 com 20% de desconto e 10/08/2008 com 10% de desconto.

## Inclusão Parcial de Parcela Única

Informe ou pesquise a **Matrícula do Imóvel**, Data Vencimento, Data Lançamento, Percentual Desconto, Histórico e Ano do cálculo.
`,
  Parâmetros: `
~~~
DB:TRIBUTÁRIO > Cadastro > Procedimentos > Parâmetros
~~~

## Parâmetros Gerais

- **Exercício:** exercício atual, preenchido automaticamente.
- **Código do Logradouro Automático:** gera o próximo código automaticamente ou exige digitação manual.
- **Utilizar informações de localização:** habilita o controle de localização e dados da escritura.
- **Segunda Via:** formato da segunda via de carnê na CGF; parâmetro em descontinuação.
- **Dados da certidão de isenção:** define o envolvido usado na emissão.
- **Permite digitar para setor / quadra / lote:** define se esses campos aceitam letras ou somente números.
- **Texto Promitente:** expressão impressa antes do nome do promitente nos documentos.
- **Ordem no endereço de entrega:** formato do endereço usado na emissão geral de carnês.

## Parâmetros do Cálculo

Configure Data Operação, Valor referência, Receitas Territorial e Predial, Tabela de Vencimento, Percentual de Correção, vencimentos, se o sistema pergunta os vencimentos, opções para escolher dia/parcelas/desconto, uso de Setor Fiscal e número na testada, exclusão de construção após cálculo, dados diversos no cálculo, pontuação por construção, Código do Inflator, Histórico de Isenção e Código Função.

**Permite escolher vencimentos durante o cálculo:** 0 permite cálculo do ano; 1 permite escolher dia, parcela e desconto da cota única; 2 permite escolher parcelas inicial/final e desconto da cota única.

## Parâmetros de Impressão

**Documento Template:** modelo opcional para Certidão de Existência de Prédio.

## Certidão de Isenção

**Utiliza Documento Padrão:** Sim usa o modelo de Documentos/Parágrafos da Configuração; Não habilita Documento Template para selecionar um modelo OpenOffice.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros148.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros148.png)
`,
  "Certidão de Existência de Prédio": `
Rotina para gerar Certidão Narrativa de Construção.

~~~
DB:TRIBUTÁRIO > Cadastro > Procedimentos > Certidão de Existência de Prédio
~~~

Informe ou pesquise a matrícula. O sistema lista as construções ativas; selecione a construção e clique em **Pesquisar**.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros152.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros152.png)

Na tela de emissão, Matrícula e Construção são somente leitura. Indique se o Processo do Sistema é Sim ou Não. Com Sim, selecione o processo de protocolo cadastrado; com Não, informe processo, titular, data e observações manualmente. Clique em **Processar** para gerar o documento.

### Variáveis do documento

O modelo pode usar dados do cabeçalho, como número da certidão, proprietários/promitentes e endereços, matrícula e localização, construção e características, Habite-se, áreas, valores venais, exercício do cálculo e usuário/data/hora da emissão.
`,
  "Geração de Arquivos": `
Rotina PIT - Sefaz para configurar características e grupos e gerar arquivos de IPTU/ITBI exigidos pela Secretaria Estadual da Fazenda do Rio Grande do Sul.

~~~
DB:TRIBUTÁRIO > Cadastro > Procedimentos > Geração de Arquivos
~~~

## Configuração de Características

Associe grupos e características cadastrados no E-Cidade aos itens correspondentes solicitados pela Sefaz para os arquivos PIT de IPTU/ITBI. Essa configuração é obrigatória para gerar os arquivos.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros149.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros149.png)

## Configuração dos Grupos de Características

Informe os grupos que correspondem aos campos dos arquivos PIT. Em **Tipo de Utilização IPTU**, selecione grupos de características do tipo Lote e Construção que representem o uso, como Residencial ou Comercial.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros150.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros150.png)

## Gerar Arquivos

Permite gerar os arquivos de IPTU/ITBI dos cinco anos mais recentes, para os dois semestres. Selecione um ou mais dos seis arquivos solicitados. Registros sem dados obrigatórios não serão incluídos; se nenhum registro cumprir os campos obrigatórios do layout, o arquivo não será gerado.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros151.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros151.png)
`,
};