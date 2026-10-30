export const educacaoAlimentacaoConsultaContent: Record<string, string> = {
  "Histórico de Refeições": `Consulte as refeições consumidas pelas turmas vinculadas ao cardápio, cujos alimentos utilizados no preparo já tiveram baixa no estoque. A consulta permite verificar as refeições, os gêneros alimentícios e as quantidades utilizadas. Ela pode ser realizada de duas formas.

## Automática

Escolha a opção **Semana** ou **Mês**. O sistema exibirá as informações lançadas no cardápio conforme a data atual.

[![Consulta automática do histórico de refeições](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consulta_historico_refeicoes.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consulta_historico_refeicoes.png)

## Por Período

Informe as datas inicial e final para pesquisar as informações no período desejado. Os itens e as refeições que já tiveram baixa serão destacados em vermelho com a indicação **Baixado**.

[![Histórico de refeições por período](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_historico_de_refeicoes_por_periodo.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_historico_de_refeicoes_por_periodo.png)`,
  "Informações Nutricionais por Item": `Consulte os alimentos, suas quantidades e os valores nutricionais correspondentes. A pesquisa pode ser feita para um item específico ou para todos os itens. Ao selecionar **Todos**, o sistema exibirá uma tabela com os alimentos e os nutrientes cadastrados em Informações Nutricionais.

[![Informações nutricionais por item](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_informacoes_nutricionais_por_item.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_informacoes_nutricionais_por_item.png)`,
  "Informações Nutricionais por Refeição": `Consulte os alimentos e seus nutrientes por refeição, de acordo com o cardápio selecionado. É possível pesquisar todas as refeições do cardápio ou uma refeição específica. Ao pesquisar, o sistema listará os alimentos que compõem a refeição e seus valores nutricionais, permitindo avaliar o atendimento das necessidades nutricionais diárias dos alunos.

[![Informações nutricionais por refeição](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_informacoes_nutricionais_por_refeicao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_informacoes_nutricionais_por_refeicao.png)

**Filtros**
- **Cardápio:** selecione o cardápio para a pesquisa.
- **Refeição:** selecione todas as refeições ou uma refeição específica vinculada ao cardápio.
- **Data:** informe a data em que o cardápio foi ou será servido.`,
  Material: `Consulte o estoque e outras informações de um material específico. Informe o código do material no campo indicado ou abra a pesquisa e use os filtros disponíveis para localizá-lo.

Após selecionar o material, a tela apresentará as seções **Dados do Material** e **Movimentações**.

[![Consulta de material](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consulta_material.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consulta_material.png)

**Seções e informações**
- **Estoque:** depósitos que possuem o material, sua quantidade e seu valor em estoque.
- **Lançamentos:** movimentações do material, como implantação, entrada de ordem de compra, transferência, entrada manual, saída manual e devolução. Selecione **Departamento** e **Lançamento** para filtrar os registros.
- **Requisições:** requisições de saída do material. O código da requisição permite consultar os materiais e dados incluídos nela.
- **Atendimentos:** atendimentos realizados para as requisições.
- **Devoluções:** devoluções efetuadas para atendimentos do material consultado.
- **Ponto de Pedido:** quantidades de estoque mínimo, máximo e ponto de pedido definidas para o material.
- **Lotes:** lotes que contêm o material.
- **Nota Fiscal:** notas fiscais relacionadas ao material consultado.
- **Imprimir:** emite relatório das informações consultadas, permitindo escolher entre estoque, lançamentos, requisições, atendimentos, devoluções, ponto de pedido, lotes e nota fiscal.

[![Movimentações do material](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consulta_material_lancamento.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consulta_material_lancamento.png)

[![Requisições do material](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consulta_requisicao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consulta_requisicao.png)

[![Impressão da consulta de material](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consulta_material_impressao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consulta_material_impressao.png)`,
  "Restrição Alimentar": `Consulte os alunos por turma que possuem restrição alimentar. Selecione o calendário letivo, informe a turma e selecione o aluno. O sistema exibirá o nome do aluno, a etapa em que está matriculado e a restrição, incluindo o alimento restrito, o tipo de restrição e o alimento substituto.

[![Consulta de restrição alimentar](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consulta_restricao_alimentar.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consulta_restricao_alimentar.png)`,
  "Quadro de Desenvolvimento": `Consulte os dados de desenvolvimento dos alunos por turma. Informe o calendário letivo e a turma. No campo **Competência**, filtre por mês, período de avaliação ou todas as competências. Selecione os alunos na coluna da esquerda, transfira-os para a coluna da direita e clique em **Processar**. O sistema exibirá dados como altura, peso e massa.

[![Quadro de desenvolvimento](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_quadro_de_desenvolvimento.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_quadro_de_desenvolvimento.png)`,
};
