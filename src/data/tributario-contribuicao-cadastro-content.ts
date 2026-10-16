export const contribuicaoCadastroContent: Record<string, string> = {
  Lista: `
Esta rotina relaciona as matrículas que serão beneficiadas por uma Contribuição de Melhoria.

~~~
DB:TRIBUTÁRIO > Contribuição > Cadastros > Lista
~~~

## Inclusão

- **Lista de Projeto:** código da lista, gerado automaticamente.
- **Logradouro:** selecione o logradouro ou pesquise pelo link.
- **Responsável:** CGM de quem distribuirá a lista de casa em casa para verificar o interesse dos contribuintes, normalmente durante o estudo de viabilidade da obra.
- **Profundidade:** profundidade considerada na cobrança, normalmente metade da largura da rua, dividida entre as matrículas dos dois lados.
- **Descrição do Trecho:** trecho da rua onde será executada a obra, por exemplo, entre as ruas X e Y.

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_f39990f1d19880a2.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_f39990f1d19880a2.png)

Depois de selecionar as quadras e clicar em **Confirmar Faces**, o sistema apresenta as matrículas do logradouro e o valor das testadas registrado no cadastro imobiliário, sejam testadas principais ou não. O usuário pode conferir e alterar as informações.

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_193b93b16ba5ad4.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_193b93b16ba5ad4.png)

O **Eixo** permite ajustar o valor considerado para lotes de esquina, que podem receber desconto se já tiverem calçamento de outra obra ou acréscimo conforme o critério do município. O campo **Testada proporcional** permite ratear entre todos os lotes beneficiados a parte da obra correspondente às esquinas.

Quando há mais de uma matrícula para um lote, o sistema fraciona a testada com o mesmo cálculo usado no IPTU. Por isso, ela pode aparecer com valor baixo. O usuário pode ajustar a informação; ao confirmar, o sistema gera o código da lista.

## Alteração

Marque **Pagamento Prefeitura** nas matrículas cujos responsáveis pagarão a obra à Prefeitura. Somente essas matrículas serão consideradas nos cálculos seguintes. Isso permite registrar o resultado da consulta feita aos contribuintes com a lista impressa.

Use **Atualiza Lotes** para aplicar a seleção a todos; para marcar todos, use a letra **M** no título da coluna.

**Lista Prefeitura** emite uma lista de conferência para a Prefeitura:

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_ea458933d4f283e0.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_ea458933d4f283e0.png)

**Lista Comunitária** emite uma lista de conferência comunitária:

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_f8465fa3b8bc8f47.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_f8465fa3b8bc8f47.png)

**Outras Matrículas** permite incluir na lista uma matrícula que não estava cadastrada corretamente quando a lista foi gerada:

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_c1de384ee2952b7e.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_c1de384ee2952b7e.png)

## Exclusão

Não é permitido excluir uma lista vinculada a um Edital.

## Importação

Permite importar os dados de outra lista para criar uma nova.

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_40b21b30cbfa8cbf.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_40b21b30cbfa8cbf.png)
`,
  "Manutenção de Edital": `
O Edital pode reunir várias listas. Nesta rotina são informados dados como o percentual de participação da Prefeitura, correspondente à parte do custo da obra que ela pagará.

~~~
DB:TRIBUTÁRIO > Contribuição > Cadastros > Manutenção de Edital
~~~

Selecione as listas que farão parte do Edital. Após clicar em **Incluir**, o sistema apresenta o código interno do Edital.

## Inclusão

- **Código Edital:** sequência gerada automaticamente.
- **Número do Edital:** numeração definida para o Edital, por exemplo, 001/2008.
- **Parcela de Participação (%):** percentual do custo pago pela Prefeitura; o restante cabe aos contribuintes.
- **Receita:** receita utilizada no cálculo.
- **Notificação Prévia:** tipo de documento 1701.
- **Total de Parcelas:** quantidade padrão de parcelas.
- **Primeiro Vencimento:** vencimento da primeira parcela.
- **Desconto Única:** percentual de desconto para pagamento à vista.
- **Descrição do Edital:** descrição do Edital.

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_1228b9fb715721f5.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_1228b9fb715721f5.png)
`,
  "Tipos de serviços": `
Cadastro dos serviços que serão executados na obra, como asfalto ou esgoto.

~~~
DB:TRIBUTÁRIO > Contribuição > Cadastros > Tipos de serviços
~~~

## Inclusão

**Tipo de Serviço:** código gerado automaticamente. **Descrição:** nome do tipo de serviço.

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_a4df9a78cc333632.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_a4df9a78cc333632.png)
`,
  "Contribuição de Melhoria": `
Nesta rotina, uma lista é transformada em uma Contribuição de Melhoria.

~~~
DB:TRIBUTÁRIO > Contribuição > Cadastros > Contribuição de Melhoria
~~~

## Inclusão

- **Código Edital:** informe o Edital. O sistema lista as listas disponíveis que ainda não foram transformadas em contribuições.
- **Lista:** lista vinculada ao Edital selecionado.
- **Logradouro:** logradouro da obra.
- **Profundidade:** profundidade usada no cálculo; por exemplo, 8 para uma rua com 16 metros de largura.
- **Valorização (%):** percentual de valorização do imóvel, que limita o valor cobrado ao contribuinte. É calculada sobre o valor venal do cadastro imobiliário.
- **Tipo de Serviço:** código do serviço ou selecione-o pelo link.
- **Forma de Cálculo:** forma usada como base para o cálculo.
- **Valor da Obra:** custo total da obra para calcular a contribuição.
- **Quantidade (m):** extensão da obra em metros.

Clique em **Lançar** para registrar os dados da contribuição e lançar as matrículas/lotes.

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_5918d6a7ad5bb234.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_5918d6a7ad5bb234.png)

## Alteração

Clique em **Pesquisar**, selecione a contribuição e faça as alterações necessárias. Somente podem ser alteradas contribuições que não estejam em uso; conclua clicando em **Alterar**.

## Exclusão

Pesquise e selecione a contribuição, depois clique em **Excluir**. Somente podem ser excluídas contribuições que não estejam em uso.
`,
};