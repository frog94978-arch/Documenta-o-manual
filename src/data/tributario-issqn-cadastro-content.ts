export const issqnCadastroContent: Record<string, string> = {
  "Tipos de Alvará": `
Rotina para cadastrar os tipos de Alvará que podem ser liberados para as Inscrições.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Tipos de Alvará
~~~

## Inclusão: aba Cadastro de Tipo de Alvará

- **Sequencial:** preenchido automaticamente.
- **Descrição:** identificação do tipo de Alvará.
- **Documento Template:** documento específico associado ao tipo.
- **Grupo de Alvará:** grupo usado para o tipo de Alvará.
- **Tipo de Validade:** define a validade. Se for Fixo, informe também a Quantidade de validade em dias.
- **Permite transformação:** define se o Alvará pode ser transformado, por exemplo, de provisório para permanente.
- **Permite impressão:** define se o documento de Alvará poderá ser impresso.
- **Gera taxa:** define se este tipo de Alvará cobrará uma taxa.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_c10f4a93e7cb9212.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_c10f4a93e7cb9212.png)

### Aba Departamentos

Selecione os departamentos autorizados a liberar esse tipo de Alvará.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_556c5c3341820f70.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_556c5c3341820f70.png)
`,
  "Manutenção de Grupos de Serviço": `
Esta rotina permite manter os Grupos de Serviços da Lei 116. Ao acessá-la, o sistema lista os grupos cadastrados.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Manutenção de Grupos de Serviço
~~~

Selecione um grupo para configurar:

- **Grupo de Serviço:** código e descrição do grupo selecionado.
- **Exercício:** exercício da configuração. Por padrão, é o atual; também podem ser selecionados exercícios anteriores, mas não futuros.
- **Tipo de Tributação:** Variável ou Fixo.
- **Valor do Índice:** alíquota, quando o tipo for Variável.
- **Locais de Pagamento:** Local da Prestação, Sede do Prestador ou Sede do Tomador.
- **Descrição dos Anexos:** Anexo III, IV ou V, correspondentes às alíquotas do Simples Nacional.
- **Data Limite:** data de encerramento do uso do anexo neste item de serviço.

[![](https://e-cidade.wiki.br/tributario/issqn/files/ManualISS1.png)](https://e-cidade.wiki.br/tributario/issqn/files/ManualISS1.png)

[![](https://e-cidade.wiki.br/tributario/issqn/files/ManualISS2.png)](https://e-cidade.wiki.br/tributario/issqn/files/ManualISS2.png)
`,
  "Motivos de Paralisação": `
Cadastro dos motivos para paralisar uma inscrição. Enquanto estiver paralisada, não serão gerados cálculos de Alvará, ISSQN Fixo ou Variável e Vistorias.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Motivos de Paralisação
~~~

## Inclusão

Informe a descrição do motivo, que será usada na rotina de inclusão de paralisações.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_9c6256225bbba2bd.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_9c6256225bbba2bd.png)

## Alteração

Permite alterar a descrição do motivo cadastrado.

## Exclusão

Permite excluir o motivo desde que ele não esteja vinculado a nenhuma paralisação de inscrição.
`,
  Alvará: `
Neste menu são cadastrados estabelecimentos comerciais, industriais, prestadores de serviços, profissionais liberais e autônomos. Pelo CGM, o sistema identifica se a inscrição é de pessoa física ou jurídica. A inscrição gera um Alvará e, conforme as atividades vinculadas, pode gerar cálculos para a empresa.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Alvará
~~~

## Inclusão

Informe o CGM para o qual será cadastrada a inscrição ou pesquise pelo link.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_ac02427b623bfc12.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_ac02427b623bfc12.png)

### Aba Inscrição

**Inscrição Municipal:** gerada automaticamente. **Número do CGM, Endereço, CEP, Município e CPF/CNPJ:** preenchidos com os dados do CGM.

#### Endereço no Município

Endereço do comércio, indústria ou local de atendimento do profissional liberal ou autônomo.

- **Matrícula:** imóvel do estabelecimento; opcional. Se preenchida, completa os demais dados de endereço com base na matrícula.
- **Construção:** preenchida após selecionar a matrícula. Não é possível vincular uma inscrição a uma matrícula sem construção ativa.
- **Cod. Logradouro:** código do logradouro ou pesquisa pelo link; inicialmente traz os dados do CGM.
- **Número / Complemento:** número e complemento do local (casa, sala, apartamento ou prédio).
- **Cod. Bairro:** código do bairro ou pesquisa pelo link; inicialmente traz os dados do CGM.
- **Caixa Postal / CEP:** caixa postal e CEP do endereço da inscrição.
- **Controle Local da Atividade:** indica se o endereço é Localizado ou Não Localizado.

#### Outros Dados

- **CGM do Escritório:** escritório contábil vinculado, pesquisável pelo link.
- **Cod. Porte:** porte da empresa ou profissional.
- **Capital Social:** preenchido pela soma dos capitais informados para os sócios.
- **Zona / Setor Fiscal:** localização da inscrição no município.
- **Empregados:** quantidade de empregados; para autônomo ou profissional liberal, informe 1.
- **Multiplicador:** quantidade de vezes que serão calculados Alvará ou Vistorias, por exemplo, número de mesas de sinuca.
- **Área / Área de Publicidade:** área ocupada pela empresa e área de publicidade utilizada.
- **Processo:** processo de protocolo relacionado à abertura da empresa.
- **Referência Anterior:** referência da inscrição antiga, por exemplo, em migração de dados.
- **Data da Junta Comercial / Reg. Junta / Prot. Junta:** dados da constituição e registro comercial; Data da Junta Comercial e Reg. Junta ficam disponíveis para pessoa jurídica.
- **Data de cadastramento:** data usada no cálculo de taxas de Alvará e Vistorias; inicia preenchida com a data atual e pode ser alterada.
- **Alvará Sanitário:** código do Alvará Sanitário ou pesquisa pelo link. Com integração entre ISSQN e Sanitário habilitada nos parâmetros, o código é gerado automaticamente.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_472e4e1de2c5e273.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_472e4e1de2c5e273.png)

### Aba Observações

**Texto:** informações gerais sobre a empresa. **Observação:** texto sobre a inscrição, impresso no Alvará.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_c80af46cd0f950a8.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_c80af46cd0f950a8.png)

### Aba Atividades

Cadastre as atividades desenvolvidas pela empresa ou profissional liberal.

- **Inscrição:** preenchida automaticamente.
- **Código da Atividade:** informe o código ou pesquise pelo link.
- **Atividade Principal:** indique se a atividade é principal.
- **Quantidade:** número de vezes para cálculo de ISSQN Fixo/Variável, como a quantidade de profissionais habilitados em sociedade civil.
- **Permanente ou Provisório:** tipo de validade da atividade.
- **Data Inicial / Data Final:** período de validade; Data Final é informada para atividade provisória.
- **Hora Inicial / Hora Final:** horário de funcionamento; campos opcionais.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_23a29052aad994d0.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_23a29052aad994d0.png)

### Aba Sócios

Cadastre os sócios e, para o tipo 1 - Sócio, a participação de cada um no capital social. Podem ser incluídos todos os sócios da empresa.

- **CGM Inscrição:** gerado a partir do CGM informado para criar a inscrição.
- **Número do CGM:** CGM do sócio; não pode ser igual ao CGM da inscrição.
- **Tipo de Sócio:** Sócio, Responsável MEI ou Responsável.
- **Sócio:** habilita Valor do Capital e pode vincular o CGM aos débitos conforme a configuração db21_regracgmiss.
- **Responsável MEI:** não possui Valor do Capital, não vincula débitos e identifica inscrição MEI.
- **Responsável:** não possui Valor do Capital e não vincula débitos; pode representar empresas com muitos acionistas.
- **Valor do Capital:** participação do sócio, somada ao Capital Social da aba Inscrição.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_dea6c42f338f9e57.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_dea6c42f338f9e57.png)

### Aba Cálculo

Permite calcular a inscrição. Em **Tipo de Cálculo**, selecione Somente Alvará, Somente ISSQN ou Todos; em **Número de Parcelas**, selecione a quantidade permitida pelos parâmetros do módulo. A primeira parcela vence conforme o cadastro de vencimentos e as seguintes, em intervalos de 30 dias. Selecione também o **Ano Cálculo** e as atividades a calcular.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_5e54d4bcde494036.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_5e54d4bcde494036.png)

### Aba Documentos

Inscrição e Alvará são preenchidos conforme o cadastro. Marque os documentos apresentados pelo contribuinte.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_7a967c60b0500e1b.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_7a967c60b0500e1b.png)

### Aba Liberação

Inscrição, Alvará e Data da Movimentação são preenchidos pelo sistema. Informe **Tipo de Alvará** (por exemplo, Permanente ou Provisório), **Validade do Alvará**, **Processo** do protocolo e **Observação**.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_a8a2e3ff33c86eb9.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_a8a2e3ff33c86eb9.png)

### Aba Informações Complementares

Preenchimento opcional para dados cadastrais e uso na NFS-e. Permite informar:

- **Tipo de Classificação da Empresa:** Normal, Cartório, Condomínio, Construção Civil, Especial, Instituição Financeira ou Órgão Público.
- **Tipo de Emissão:** NFS-e (nota por serviço), DMS (declaração mensal) ou Substituto Tributário.
- **Regime Tributário:** regime de tributação do contribuinte.
- **Exigibilidade:** exigibilidade do ISSQN aplicável.
- **Incentivo Fiscal:** indica se o contribuinte possui incentivo fiscal.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_3bbac37d557f1def.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_3bbac37d557f1def.png)

## Alteração

Pesquise pelo link Inscrição Municipal usando código, Nome/Razão Social, CPF, CNPJ, Inscrição Anterior ou Setor Fiscal. Altere os campos permitidos.

- **Aba Inscrição:** permite alterar dados cadastrais e valores de cálculo.
- **Aba Atividades:** permite incluir atividades; use a operação A para alterar ou E para excluir uma atividade.
- **Aba Sócios:** permite incluir sócios; use A para alterar ou E para excluir.

## Exclusão

Informe ou pesquise a inscrição. Só é possível excluir quando ela não estiver vinculada a atividades ou cálculos.

## Alteração CGM

Permite transferir a inscrição e seus débitos para outro CGM.

- **Inscrição:** código da inscrição ou pesquisa pelo link.
- **CGM (Atual):** preenchido automaticamente.
- **CGM (Novo):** novo CGM vinculado à inscrição.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_c0056f490e705b61.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_c0056f490e705b61.png)
`,
  "Configuração de Cálculo ISSQN": `
Rotina para configurar o cálculo do ISSQN.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Configuração de Cálculo ISSQN
~~~

- **Ano:** exercício vigente.
- **Inflator:** inflator utilizado para correção.
- **Valor base:** valor base para o cálculo de Alvará.
- **Data base:** data-base do cálculo de Alvará.
- **Código da procedência:** procedência em que será lançada a dívida.
- **Forma de cálculo:** forma de cálculo a ser aplicada.
- **Dia Padrão para vencimento:** dia do mês de vencimento do débito.
- **Percentual correção Padrão:** percentual usado no cálculo de Alvará.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_964424ae947edd30.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_964424ae947edd30.png)
`,
  "Configuração da Planilha": `
Rotina para configurar os dados utilizados na geração de débitos de ISSQN Variável e Fixo pelo sistema NFS-e.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Configuração da Planilha
~~~

### ISSQN Nota Avulsa

Configure **Receita**, **Histórico de Débito**, **Ano** da sessão, **Tipo de Débito** (vinculado ao grupo 3) e **Vencimento**. O vencimento pode ser o último dia do mês ou um número de dias; nesta opção, informe também o Dia Vencimento.

### ISSQN Retido

Configure **Valor Mínimo**, **Receita**, **Histórico Débito**, **Tipo de Débito** e **Vencimento** padrão para a guia de DMS Tomador.

### ISSQN Variável

Configure **Ano Competência**, **Vencimento**, **Receita**, **Tipo de Débito**, **Histórico Débito** e **Dia do Vencimento** para o encerramento do serviço prestado na NFS-e.

### ISSQN Retido Empresa Pública

Configure **Exercício**, **Receita** para a DMS de serviços tomados por órgão público e **Tipo de Empresa**. CGMs do tipo selecionado serão considerados órgãos públicos.

[![](https://e-cidade.wiki.br/tributario/issqn/files/ManualISS3.png)](https://e-cidade.wiki.br/tributario/issqn/files/ManualISS3.png)
`,
  Porte: `
Cadastro do porte, usado na inscrição para classificar empresas por tamanho e autônomos ou profissionais liberais pelo nível profissional.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Porte
~~~

Exemplos: Pessoa Jurídica pode ser Pequeno, Médio ou Grande; Pessoa Física pode ser Autônomo com ou sem Curso Superior, Ambulante ou Profissional Liberal.

## Inclusão

- **Código:** gerado automaticamente.
- **Descrição:** nome do porte; obrigatório.
- **Pessoa:** Jurídica para empresas com inscrição vinculada a CGM de pessoa jurídica; Física para autônomos e profissionais liberais.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_ca5e4d0716397ff8.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_ca5e4d0716397ff8.png)

## Alteração

Permite alterar Descrição e Pessoa. Se o porte estiver vinculado a inscrição jurídica, não é possível alterá-lo para Pessoa Física.

## Exclusão

Permite excluir quando o porte não estiver vinculado a inscrição ou configuração de cálculo.
`,
  Classe: `
Cadastro dos grupos gerais de atividades comerciais, como Indústria, Comércio, Serviços e Autônomos. A classe define se a atividade calcula ISS e pode configurar integração com o cadastro Sanitário.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Classe
~~~

## Inclusão

- **Código:** gerado automaticamente.
- **Descrição:** nome da classe; obrigatório.
- **Pessoa:** Jurídica para empresas com inscrição vinculada a CGM jurídico; Física para autônomos e profissionais liberais.
- **Calcula ISS:** define se a classe calcula ISS.
- **Integração Sanitário:** define a integração com o cadastro Sanitário.
- **Gera Alvará de Localização Automático:** define se inscrições com atividades da classe geram esse Alvará automaticamente.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_bc639910f037d4d0.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_bc639910f037d4d0.png)

## Alteração

Permite alterar a descrição e a integração com Sanitário.

## Exclusão

Permite excluir quando não houver porte ou atividade vinculados à classe.
`,
  Atividade: `
Cadastro das atividades das empresas e profissionais, usado para identificar a natureza do estabelecimento e definir valores ou alíquotas de taxas de localização, Sanitário, ISS Fixo e ISS Variável.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Atividade
~~~

## Inclusão

- **Código:** código obrigatório da atividade.
- **Pessoa:** Física ou Jurídica.
- **CBO / CNAE:** CBO é habilitado para Pessoa Física; CNAE, para Pessoa Jurídica.
- **Descrição:** nome da atividade.
- **Classe:** selecione uma classe compatível com o tipo de Pessoa.
- **Código do Serviço:** habilitado para classe de Serviço que calcula ISS; selecione o grupo de serviço da Lei 116.
- **Observações:** descrição detalhada, que pode ser configurada para impressão no Alvará.
- **Data Limite:** validade para uso da atividade em inscrições.
- **Hora Inicial / Hora Final:** horário de funcionamento; opcionais.
- **Deduz Valor da nota / Retenção P/Prestação fora do Município:** usados pelo programa NFE e disponíveis para classes de Serviço que calculam ISS.
- **Lista de Documentos:** documentos cadastrados na configuração de documentos.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_ef00a456bcd4e74c.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_ef00a456bcd4e74c.png)

## Alteração

Permite alterar descrição e data limite. Classe só pode ser alterada se a atividade não estiver vinculada a inscrição. Alterar uma atividade afeta todas as inscrições vinculadas a ela.

## Exclusão

Permite excluir quando a atividade não estiver vinculada a nenhuma inscrição.
`,
  Cálculo: `
Configura os tipos de tributos lançados para as inscrições e a forma de cálculo, por exemplo, quando atividades diferentes possuem valores de taxa diferentes.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Cálculo
~~~

## Inclusão

- **Código:** gerado automaticamente.
- **Descrição:** nome do cálculo; obrigatório.
- **Unidade:** unidade de referência que usa inflatores; em Reais, informe 1.
- **Data Operação:** data de geração do cálculo.
- **Código do Vencimento Padrão:** vencimento padrão para tipos de cálculo.
- **Cálculo Variável / Se Variável ou não:** define se o cálculo processa ISS Variável.
- **Configuração do Variável Fixado:** define se o ISS Variável será calculado zerado ou com valor fixado na rotina Variável Fixado.
- **Forma de Cálculo:** forma de cálculo usada pelo sistema.
- **Processa Provisórios:** restringe o cálculo a inscrições com atividades provisórias.
- **Calcular para Empresa de outro Município:** define se serão calculadas empresas de outro município.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_592a7042511e9462.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_592a7042511e9462.png)

## Alteração

Permite alterar os campos disponíveis (em branco). Ao recalcular inscrições, os valores anteriores podem mudar.

## Exclusão

Permite excluir quando o cálculo não estiver vinculado a nenhum Tipo de Cálculo.
`,
  "Tipo de Cálculo": `
Vincula o valor a recolher pelo estabelecimento à atividade exercida e configura ISS Fixo, ISS Variável, Alvará, Vistoria ou taxas, incluindo faixas de quantidade, receitas e valores.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Tipo de Cálculo
~~~

## Inclusão: aba Tipo de Cálculo

- **Código:** gerado automaticamente.
- **Descrição:** nome do tipo; obrigatório.
- **Abreviatura da Descrição:** nome abreviado para impressão.
- **Cálculo a ser utilizado:** código do cálculo.
- **Se Integral ou não:** define cobrança integral ou proporcional.
- **Tipo de Proporcionalidade:** Diária calcula dias restantes até 31/12; Quinzenal considera início na primeira quinzena como mês cheio e desconsidera início na segunda; Mensal considera meses até dezembro; Semestral cobra integral no primeiro semestre e 50% no segundo.
- **Tipo de Cálculo:** tipo de débito fixo do sistema: ISS, Sanitário, Vistoria Localização, Alvará, Taxa ou Vistoria Sanitária.
- **Receita do Exercício / Quant. Inicial do Exercício / Quant. Final do Exercício / Valor do Exercício:** parâmetros da faixa do exercício corrente.
- **Receita do Exercício Post. / Quant. Inicial do Exercício Post. / Quant. Final do Exercício Post. / Valor do Exercício Post.:** parâmetros da faixa para exercícios posteriores.
- **Utiliza Quantidade da Tabela Atividade:** define se utiliza a quantidade cadastrada na atividade.
- **Utiliza Quantidade do Cadastro:** define se utiliza a quantidade da inscrição.
- **Tipo de Geração:** define se gera somente no exercício inicial ou também nos próximos.
- **Percentual para Provisório:** percentual usado em Alvará provisório.
- **Usa essa Alíquota na lista de retenções:** define se a alíquota é usada em retenções.
- **Excedente por atividade:** valor para atividades excedentes.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_407e21c4458184a5.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_407e21c4458184a5.png)

### Aba Vencimentos

Informe **Exercício**, **Código do Vencimento** e, para Tipo de Cálculo ISSQN Variável, o **Vencimento do Simples**.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_342969aaf8631f78.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_342969aaf8631f78.png)

## Alteração

Permite alterar o Tipo de Cálculo; um recálculo pode alterar os valores.

## Exclusão

Permite excluir quando o tipo não estiver vinculado a nenhum cálculo.
`,
  "Forma de Cálculo": `
Cadastro definido durante a implantação do sistema. Não permite cadastrar novas formas de cálculo.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Forma de Cálculo
~~~

As formas disponíveis são **Principal**, **Maior valor** e **Soma dos valores**.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_c6f053ee4c9043e8.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_c6f053ee4c9043e8.png)
`,
  Vencimentos: `
Cadastro das datas de vencimento dos débitos gerados pelo sistema.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Vencimentos
~~~

## Inclusão: aba Vencimentos

- **Código:** gerado automaticamente.
- **Descrição:** nome do vencimento; obrigatório.
- **Banco:** banco usado na linha digitável quando este vencimento utiliza convênio diferente dos padrões.
- **Tipo de Débito:** tipo ao qual o vencimento será vinculado.
- **Histórico de Débito:** histórico de cálculo associado.
- **Valor Fixado:** valor utilizado no cálculo do cadastro.
- **Forma de Cálculo da Parcela:** Não calcula parcelas vencidas transfere seus valores às futuras; Calcula todas as parcelas vencidas usa as datas cadastradas; Calcula somente as escolhidas usa as parcelas selecionadas na aba Datas.
- **Dias para o Vencimento:** dias contados a partir da data do cálculo. Zero grava o vencimento em 31/12 do exercício.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_5981d6883a3ac823.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_5981d6883a3ac823.png)

### Aba Datas

- **Código / Parcela:** gerados automaticamente.
- **Data de Vencimento:** vencimento da parcela; obrigatório.
- **Descrição:** nome da parcela conforme o histórico.
- **Percentual:** percentual do cálculo da parcela.
- **Histórico de Cálculo:** histórico financeiro associado à parcela.

**Incluir** adiciona o registro; **Soma Exercício** acrescenta um ano aos registros lançados.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_c4c6390043c5c458.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_c4c6390043c5c458.png)

## Alteração

Permite alterar campos que não mudam os valores do cálculo.

## Exclusão

Permite excluir quando o vencimento não estiver vinculado a nenhum cálculo.
`,
  "Atividade / Tipo de Cálculo": `
Vincula as atividades aos tipos de cálculo aplicáveis. A atividade de uma inscrição determina quais valores de Alvará, ISS e Vistorias serão calculados.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Atividade / Tipo de Cálculo
~~~

Por exemplo, uma atividade pode estar vinculada a Alvará, Vistoria e ISS Variável. Ao cadastrar uma inscrição com essa atividade, o sistema gera os valores correspondentes conforme os tipos de cálculo vinculados.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_5c7b906efd5538d6.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_5c7b906efd5538d6.png)

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_6280b0d02ebcaf95.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_6280b0d02ebcaf95.png)
`,
  "Tipo de Cálculo / Atividade": `
Vincula atividades aos tipos de cálculo, realizando a associação inversa da rotina Atividade / Tipo de Cálculo: primeiro selecione o Tipo de Cálculo e depois vincule as atividades.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Tipo de Cálculo / Atividade
~~~

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_697a014a671b7e53.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_697a014a671b7e53.png)

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_35c8bc0bf47daedf.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_35c8bc0bf47daedf.png)
`,
  "Escritórios Contábeis": `
Cadastro dos CGMs que são escritórios contábeis. Permite vincular empresas a escritórios e facilitar a emissão de carnês de ISS e Vistorias, além do acesso pelo DBPref a certidões, carnês, recibos e solicitações de AIDOF.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Escritórios Contábeis
~~~

### Aba Escritório Contábil

**Escritório:** CGM do escritório ou pesquisa pelo link. **Data Limite:** data limite de uso do escritório.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_2de937708daf1f62.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_2de937708daf1f62.png)

### Aba Responsável

Permite vincular um ou mais CGMs de contadores responsáveis pelo escritório.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4f23e5a1d37bef8b.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4f23e5a1d37bef8b.png)

## Alteração

Permite alterar somente a Data Limite.

## Exclusão

Permite excluir quando o escritório não estiver vinculado a nenhuma inscrição.
`,
  "Tipo de Nota": `
Cadastro dos tipos de Nota Fiscal previstos na legislação, usados na liberação de AIDOF no módulo Fiscal.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Tipo de Nota
~~~

Exemplos: Modelo 1, Modelo 2 - Venda ao Consumidor, Cupom Fiscal ou Série A - Nota Fiscal de Serviço.

## Inclusão

- **Código:** gerado automaticamente.
- **Descrição:** nome do tipo de nota; obrigatório.
- **Tipo:** sigla do tipo de nota.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_b99ebc979e5b4a46.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_b99ebc979e5b4a46.png)

## Alteração

Permite alterar Descrição e Tipo.

## Exclusão

Permite excluir quando não houver AIDOF vinculada.
`,
  "Tipo de Geração": `
Cadastro dos tipos de geração, usado no cadastro de Tipo de Cálculo.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Tipo de Geração
~~~

## Inclusão

**Código:** preenchido automaticamente. **Descrição:** identificação do tipo de geração.

- **Gera somente no exercício inicial:** gera o cálculo apenas no primeiro exercício.
- **Gera para os próximos exercícios:** gera no exercício inicial e nos posteriores; é a opção mais comum.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_45ae22d04a3616a8.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_45ae22d04a3616a8.png)
`,
  "Manutenção de Pontuação": `
Rotina para manter as pontuações usadas no cálculo de Alvará e Vistoria por pontuação.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Manutenção de Pontuação
~~~

### Classe

Informe o **Código da Classe** e a **Pontuação** usada no cálculo de Alvará e Vistoria.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_fdb7e487516cc317.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_fdb7e487516cc317.png)

### Zona

Informe o código da Zona Fiscal e a pontuação correspondente.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_e1b13cd09f5451ff.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_e1b13cd09f5451ff.png)

### Empregados

**Sequencial:** preenchido automaticamente. Informe **Quantidade Inicial**, **Quantidade Final** e **Pontuação** da faixa de empregados.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_759823f9a45709ba.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_759823f9a45709ba.png)

### Área

**Sequencial:** preenchido automaticamente. Informe **Quantidade Inicial**, **Quantidade Final** da faixa de área e a **Pontuação** correspondente.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_e8cbe8fd3f6b0f3e.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_e8cbe8fd3f6b0f3e.png)
`,
  "Forma de Localização Alvará": `
Permite cadastrar formas de localização do endereço da inscrição. A informação fica disponível na inclusão e alteração de Alvará, no conjunto de campos Endereço da Inscrição.

~~~
DB:TRIBUTÁRIO > ISSQN > Cadastros > Forma de Localização Alvará
~~~

Informe a **Descrição** apresentada para a forma de localização e, se houver, a **Data de Validade**.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_1a288ff785aa8dfb.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_1a288ff785aa8dfb.png)
`,
};