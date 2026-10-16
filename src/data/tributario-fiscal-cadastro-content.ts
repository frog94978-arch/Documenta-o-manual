export const fiscalCadastroContent: Record<string, string> = {
  Fiscais: `
O cadastro de fiscais mantém os servidores que utilizam o módulo, sejam ou não do quadro de fiscais. Vistorias, notificações, autos de infração e levantamentos fiscais registram os fiscais envolvidos.

~~~
DB:TRIBUTÁRIO > Fiscal > Cadastros > Fiscais
~~~

## Inclusão

Informe o código do usuário e clique em **Incluir**. Se não souber o código, pesquise pelo nome no link do campo.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal1.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal1.png)

Esta rotina não possui alteração. Atualize nome, departamento e demais dados no cadastro de usuário ou no CGM, conforme aplicável.

## Exclusão

Selecione o usuário na lista e clique em **Excluir**. Não é permitido excluir fiscais vinculados a procedimentos, como notificações, autos de infração ou levantamentos fiscais.
`,
  "Tipo de Processo Fiscal": `
Cadastro dos tipos de processo utilizados pelo departamento.

~~~
DB:TRIBUTÁRIO > Fiscal > Cadastros > Tipo de Processo
~~~

## Inclusão

- **Sequencial:** preenchido automaticamente.
- **Descrição:** tipo de processo.
- **Válido:** quantidade de dias de validade do tipo.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal2.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal2.png)

## Alteração

Selecione o cadastro; todos os campos podem ser alterados.

## Exclusão

Selecione o registro e clique em **Excluir**.
`,
  "Gráficas": `
Cadastro das gráficas, sediadas ou não no município, para controlar a liberação de Autorizações para Impressão de Documentos Fiscais (AIDOF) e evitar emissão em gráficas não cadastradas no CGM.

~~~
DB:TRIBUTÁRIO > Fiscal > Cadastros > Gráficas
~~~

## Inclusão

Selecione o CGM pelo link **Código Gráfica**, informe o usuário e a data do cadastro.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal3.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal3.png)

Esta rotina não possui alteração. Para mudar nome, endereço ou outros dados, atualize o CGM.

## Exclusão

Selecione a gráfica e clique em **Excluir**.
`,
  Procedências: `
Cadastro dos fundamentos legais usados em autos de infração e notificações, incluindo o texto dos artigos da lei, o procedimento de fiscalização e, quando aplicável, os valores das penalidades.

~~~
DB:TRIBUTÁRIO > Fiscal > Cadastros > Procedências
~~~

## Inclusão: aba Procedência

- **Código:** gerado automaticamente.
- **Quantidade de dias para o vencimento:** prazo para vencimento da procedência.
- **Descrição da procedência:** identificação usada ao selecionar a procedência para um auto ou notificação. Exemplo: Art. 91, inciso I, Lei Municipal 3282/2007.
- **Departamento:** preenchido conforme o departamento do usuário.
- **Descrição:** transcrição do trecho legal correspondente à procedência.
- **Tipo de andamento:** andamento utilizado na infração.
- **Tipo de Fiscalização:** área fiscal responsável, como fiscalização tributária, de posturas ou sanitária.
- **Tipo de Procedimento:** Notificação ou Auto de Infração.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal4.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal4.png)

## Aba Receitas

- **Código:** código da procedência, preenchido automaticamente.
- **Código da Receita:** receita em que será lançado o débito de auto de infração com valor monetário.
- **Valor Fixo:** define se a penalidade será fixa, conforme a legislação, ou variável, informada ao incluir o auto.
- **Valor padrão para a receita:** valor da multa quando Valor Fixo for Sim.
- **Descrição da Receita:** nome da receita em que será lançado o débito.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal5.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal5.png)
`,
  "Tipo de Andamento": `
Cadastro dos andamentos das infrações, como Incluída, Andamento, Excluída ou Recurso.

~~~
DB:TRIBUTÁRIO > Fiscal > Cadastros > Tipo de Andamento
~~~

## Inclusão

- **Tipo de Andamento:** código gerado automaticamente.
- **Descrição do Tipo:** descrição do andamento.
- **Observação do Tipo:** observação opcional.
- **Permite Cálculo:** selecione Sim ou Não.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal6.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal6.png)
`,
  "Tipo de Fiscalização": `
Cadastro das áreas de atuação da fiscalização que utilizarão o sistema para controlar notificações e autos de infração.

~~~
DB:TRIBUTÁRIO > Fiscal > Cadastros > Tipo de Fiscalização
~~~

## Inclusão

- **Código do Tipo:** gerado automaticamente.
- **Descrição do Tipo:** nome da área ou procedimento, como Fiscalização Tributária, de Posturas ou Sanitária.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal7.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal7.png)
`,
  "Tipo de Vistoria": `
Identifica a modalidade da vistoria, como vistoria de localização ou sanitária, e configura vencimento, receita e departamento.

~~~
DB:TRIBUTÁRIO > Fiscal > Cadastros > Tipo de Vistoria
~~~

## Inclusão: aba Tipo

- **Código:** gerado automaticamente.
- **Quantidade de dias para o vencimento:** intervalo entre a inclusão e o vencimento da vistoria.
- **Dia/Mês para o vencimento:** dia e mês usados no vencimento de inclusões gerais de vistorias.
- **Descrição:** nome do tipo de vistoria, por exemplo, Vistoria anual de localização.
- **Observação:** observação sobre o tipo.
- **Departamento:** departamento responsável.
- **Código do Tipo de Andamento:** andamento correspondente à inclusão da vistoria.

Para definir o vencimento, use apenas uma opção: quantidade de dias ou dia e mês. Não preencha as duas no mesmo cadastro.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal8.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal8.png)
`,
};