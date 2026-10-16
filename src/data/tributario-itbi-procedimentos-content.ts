export const itbiProcedimentosContent: Record<string, string> = {
  "Manutenção de ITBI": `
~~~
DB:TRIBUTÁRIO > ITBI > Procedimentos > Manutenção de ITBI
~~~

## Inclusão

Acesse o menu Urbano ou Rural conforme a localização do imóvel objeto da transação.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_bbdcfe4a2a757025.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_bbdcfe4a2a757025.png)

### ITBI Urbano

O imóvel deve estar cadastrado no cadastro imobiliário e a ITBI ficará vinculada à matrícula.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_b2a95d35e9eb2929.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_b2a95d35e9eb2929.png)

Informe a matrícula ou pesquise pelo link **Selecionar o imóvel**:

- **Logradouro:** lista imóveis com testada no logradouro.
- **Nome/Razão Social:** lista imóveis de propriedade do contribuinte.
- **Setor/Quadra/Lote:** informa simultaneamente a localização e lista matrículas ligadas ao lote; também é possível informar apenas um campo para pesquisar imóveis que tenham essa informação.
- **Referência anterior:** pesquisa pela matrícula anterior usada em outro sistema.
- **Matrícula RI:** matrícula do Registro de Imóveis, quando cadastrada no lote.
- **Setor/Quadra/Lote RI:** localização conforme o Registro de Imóveis cadastrado.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_41437d76619cab4b.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_41437d76619cab4b.png)

Selecione a matrícula e clique em **Incluir**. Se houver débitos, o sistema os apresenta para consulta; clique em **OK** para continuar ou **Cancela** para voltar.

#### Aba Dados do Imóvel

**Código da ITBI** é gerado ao incluir. **E-mail de contato** é opcional. **Tipo** é opcional e lista grupos de taxas cadastrados para ITBI Urbano ou Urbano Pleno; se selecionado, as taxas serão somadas à guia.

Em **Processo do Sistema**, indique se o processo está cadastrado. Com Sim, selecione o protocolo pelo link; com Não, informe os dados livremente. Processo, Titular do Processo e Data do Processo são opcionais; os dois últimos só aparecem quando Processo do Sistema for Não. **Cartório** é opcional e lista Cartórios de Notas, de Registro de Imóveis e de Registro de Títulos e Documentos.

##### Dados do Imóvel - Terreno

**Localização** traz os dados do cadastro imobiliário, mas permite ajuste para refletir os dados registrados no Cartório de Registro de Imóveis. **Situação** é obrigatória.

Em **Medidas**, informe Área do Terreno (ponto como separador decimal), Área transmitida (preenchida inicialmente com a área total), frente, lados e fundos. Os dados do Registro de Imóveis incluem comarca, matrícula RI, quadra e lote. **Referência anterior** vem do cadastro imobiliário.

**Tipo de transação** é obrigatório e determina as formas de pagamento. **Valor do terreno**, **Valor da benfeitoria** e **Observações** são opcionais.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_6ec2a3e827480e13.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_6ec2a3e827480e13.png)

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_7844f7eec3e91ce4.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_7844f7eec3e91ce4.png)

#### Aba Transmitentes

Uma ITBI pode ter vários transmitentes, mas somente um principal. Os proprietários da matrícula aparecem inicialmente; remova-os ou adicione outros se necessário. Para incluir um transmitente cadastrado, informe ou pesquise o Numcgm e selecione Principal e Sexo. Sem CGM, preencha nome, CPF/CNPJ, endereço, número, complemento, bairro, caixa postal, UF, CEP e e-mail. Em ITBI Urbano Pleno, o transmitente é sempre o Município ou o CGM definido nos parâmetros.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_aaa1edbfe9f7d0c.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_aaa1edbfe9f7d0c.png)

#### Aba Adquirente

Uma ITBI pode ter vários adquirentes, mas somente um principal. Informe ou pesquise o Numcgm e selecione Principal e Sexo. Para adquirentes sem CGM, informe nome, CPF/CNPJ, endereço, número, complemento, bairro, caixa postal, UF, CEP e e-mail.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_11bc36b06e3e3945.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_11bc36b06e3e3945.png)

#### Aba Benfeitorias

Informe **Espécie de construção**, **Tipo de construção** e **Padrão Construtivo**, selecionados entre as características cadastradas para ITBI. Preencha **Área edificada**, **Área transmitida** (inicialmente igual à área total), **Ano da construção** e **Observações**.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_484994f3d6d39d39.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_484994f3d6d39d39.png)

### ITBI Rural

Cadastre os dados do imóvel rural. Se o parâmetro Matrículas Imóveis Rurais for Sim, selecione uma matrícula cadastrada no Cadastro Rural.

#### Aba ITBI

O Código da ITBI é gerado automaticamente; E-mail de contato é opcional. **Localização** apresenta dados do imóvel, que podem ser ajustados para corresponder ao Registro de Imóveis. Informe **Cod. Localidade** (opcional), descrição breve da localização, distância da cidade e logradouro para o qual o imóvel faz frente.

Em **Característica do imóvel** e **Característica de utilização do imóvel**, use os links para selecionar características e informe o percentual que cada uma representa na área.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_6fa5fbeebe218757.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_6fa5fbeebe218757.png)

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_7c637591061903fb.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_7c637591061903fb.png)

#### Medidas

Informe a área em hectares (ponto para casas decimais), área transmitida, frente, fundos e profundidade. Selecione Registro de Imóveis e informe matrícula RI, quadra e lote. Informe o Tipo de transação e o valor declarado da transação.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_46c2e06b291ce5ce.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_46c2e06b291ce5ce.png)

As abas **Transmitentes** e **Adquirentes** permitem vários participantes, com apenas um principal em cada aba. Use CGM quando cadastrado; caso contrário, preencha os dados pessoais e de endereço.

#### Aba Construções

Informe área edificada, área transmitida, ano, observações, espécie, tipo e padrão construtivo da benfeitoria.

## Alteração de ITBI

Permite alterar ITBIs ainda não liberadas. Selecione o registro na lista; para ITBI Urbana, não é possível trocar a matrícula. É possível visualizar a guia sem liberar ou enviá-la para liberação.

## Alteração de ITBI Liberada

Conforme os parâmetros, permite alterar datas de solicitação, liberação e vencimento e dados cadastrais. Não permite alterar valores monetários nem a matrícula.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_95a9021d2cae6d5d.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_95a9021d2cae6d5d.png)

## Cancela

Selecione uma guia liberada e informe a data e as observações do cancelamento.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_246a0e5affceadb1.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_246a0e5affceadb1.png)
`,
  "Liberação de ITBI": `
~~~
DB:TRIBUTÁRIO > ITBI > Procedimentos > Liberação de ITBI > Libera ITBI
~~~

A rotina permite ao avaliador da Prefeitura atribuir o valor ao imóvel transmitido. Selecione a ITBI na lista e informe os dados de avaliação.

- **Vencimento:** data de vencimento do débito correspondente ao imposto. É sugerida uma data 30 dias após o cadastro da ITBI e pode ser alterada.
- **Observações:** informações sobre a ITBI liberada.
- **Valor do terreno:** valor atribuído pelo avaliador à parte do terreno transmitida.
- **Valor da construção:** valor atribuído à construção transmitida.
- **Valor Imposto:** calculado automaticamente pelas alíquotas das formas de pagamento vinculadas ao tipo de transação, considerando descontos.
- **Valor das Taxas:** total das taxas do grupo de ITBI, quando houver.
- **Valor Total:** total do imposto que será impresso na guia de pagamento.

Se a inclusão tiver selecionado um grupo de taxas, os valores são listados abaixo da avaliação e somados ao total da guia. Com o parâmetro **Compara Valores Avaliação** ativo, o sistema apresenta o valor venal da matrícula urbana e não permite alterar o valor avaliado.

O imposto não é lançado como débito pendente; só aparece na CGF como pagamento efetuado depois que o pagamento for registrado. Sem pagamento, não fica débito em aberto nem há impacto na certidão de débitos.

Preencha os valores e clique em **Libera Guia**. Para imprimir a guia preenchida e o boleto, acesse **Emite Guia**.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_51d034dae28d7c99.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_51d034dae28d7c99.png)

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_4769b95972ecb557.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_4769b95972ecb557.png)

## Cancela Liberação

Permite cancelar a liberação e emitir uma nova, desde que ainda não tenham sido emitidos recibos para a guia.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_73e3069501e41063.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_73e3069501e41063.png)
`,
  "Guia Retificativa": `
Rotina para incluir uma guia retificativa a partir de uma guia de ITBI já liberada.

~~~
DB:TRIBUTÁRIO > ITBI > Procedimentos > Guia Retificativa
~~~

Selecione a guia liberada na lista. O sistema carrega os dados para edição. Todos os dados podem ser alterados, exceto o número da matrícula em guias urbanas. Ao clicar em **Incluir**, será gerado um novo número de guia. O formulário identificará a retificação no campo Observações, com a mensagem “Guia Retificativa à Guia” seguida do número da guia original.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_51d034dae28d7c99.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_51d034dae28d7c99.png)
`,
  Parâmetros: `
~~~
DB:TRIBUTÁRIO > ITBI > Procedimentos > Parâmetros
~~~

- **Ano:** exercício da sessão.
- **Vencimento:** vencimento padrão das guias.
- **Imprime situação de débitos na Guia:** Sim imprime “Imóvel Em Dia Nesta Data” ou “Imóvel com Débitos Pendentes Nesta Data”; Não verifica a situação na inclusão, mas não imprime a mensagem.
- **Alterar na Guia Liberada:** Somente Datas; Somente Dados Cadastrais; ou Ambos. Dados cadastrais não incluem valores monetários.
- **CGM Obrigatório Transmitente/Adquirente:** Sim exige CGM cadastrado; Não também permite informar dados sem cadastro.
- **Solicita Notificação:** Sim exige lançamento de Notificação para liberar a guia.
- **Carrega Valor Venal:** para ITBI Urbana, carrega como valores declarados os valores venais do último cálculo de IPTU; os campos continuam editáveis.
- **Matrículas Imóveis Rurais:** Sim oferece seleção de matrícula do cadastro rural na ITBI Rural; Não dispensa esse vínculo.
- **Tarifa Bancária:** valor impresso na guia.
- **Compara Valores Avaliação:** Sim compara valor declarado com valor venal urbano e usa o maior, sem permitir informar outro valor. Não carrega o valor venal, mas permite informar um terceiro valor.
- **Padrão Construtivo:** grupo de características usado nas benfeitorias de ITBI Urbana e Rural.

### Filtros

- **Hist. Calc.:** histórico de cálculo da ITBI, código 707.
- **Código da Receita:** receita usada na emissão.
- **CGM:** CGM padrão vinculado a ITBIs sem adquirente com CGM válido; os pagamentos dessas guias serão lançados nesse CGM.

### Urbana

Configure os grupos de características usados para **Espécie de Benfeitoria** (por exemplo, alvenaria, madeira ou mista) e **Tipo de Benfeitorias** (casa, apartamento, galpão, depósito ou pavilhão).

### Rural

Configure **Espécie de Benfeitoria** e **Tipo de Benfeitorias**, que podem usar os mesmos grupos da área urbana. Configure também **Utilização das Terras** (por exemplo, Agricultura ou Pecuária) e **Distribuição da Terra** (por exemplo, Arenoso, Rochoso ou Alagável).

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_28477c94bc99ed68.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_28477c94bc99ed68.png)
`,
};