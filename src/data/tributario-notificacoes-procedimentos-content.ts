export const notificacoesProcedimentosContent: Record<string, string> = {
  Listas: `
Esta rotina cria listas de débitos que podem ser usadas em procedimentos como notificações, emissão de CDA e prescrição de dívida. Uma lista pode ser usada em mais de uma aplicação.

~~~
DB:TRIBUTÁRIO > Notificações > Procedimentos > Listas
~~~

Os dados financeiros são obtidos da Tabela Débitos, uma cópia dos valores corrigidos, juros e multas em uma determinada data. Verifique **Data Débitos**: se a tabela estiver desatualizada, os valores da lista podem diferir da CGF. Uma lista só pode ser excluída quando não estiver vinculada a notificações, emissão de CDA ou prescrição.

## Inclusão: aba Listas

- **Descrição:** nome obrigatório para identificar a lista.
- **Data Débitos:** data da última geração da Tabela Débitos, usada como origem dos valores.
- **Valores:** faixa de valores dos débitos; por padrão, de 0 a 999999999.
- **Quantidade a Listar:** quantidade de registros para teste da lista antes de aplicar as demais regras.
- **Tipo de Lista:** CGM (Geral) inclui todos os débitos do CGM; CGM limita ao CGM; Matrícula seleciona débitos imobiliários; Inscrição seleciona débitos mobiliários.
- **Não Considerar Notificados Até:** exclui registros notificados até a data informada, conforme escopo selecionado (Geral, Tipo de Débito ou Numpre/Parcela).
- **Massa Falida:** filtra contribuintes cadastrados como massa falida; padrão Não.
- **Loteamento:** filtra loteamentos; padrão Sim.
- **Data de Operação / Data do Vencimento:** intervalos de datas dos débitos.
- **Exercício:** intervalo de exercícios a incluir.
- **Desconsidera Exercício:** intervalo de exercícios a excluir.
- **Período Posterior:** inclui exercícios posteriores ao Exercício Inicial somente para contribuintes que tenham débito nesse exercício.
- **Número de Parcelas em Atraso:** faixa de parcelas vencidas para tipos de débito de parcelamento.
- **Cód. Parcela em Atraso:** faixa específica das parcelas vencidas.
- **Desconsiderar Débitos com recibo válido após:** exclui débitos com recibo ainda válido após a data informada.
- **Opção / Tipos de Débitos:** Somente Selecionados inclui os tipos escolhidos; Menos Selecionados inclui os demais. Sem tipos selecionados, são considerados todos.

Para tipos de débito de parcelamento, pode ser habilitado **Desconsiderar Débitos com pagamentos após**. Para débitos dos grupos 15 e 18, pode ser habilitado **Data da emissão da CDA de**.

[![](https://e-cidade.wiki.br/tributario/notificacoes/files/Manual_Notificacoes_html_ed5283508fb2ccc3.png)](https://e-cidade.wiki.br/tributario/notificacoes/files/Manual_Notificacoes_html_ed5283508fb2ccc3.png)

[![](https://e-cidade.wiki.br/tributario/notificacoes/files/manualnotf.png)](https://e-cidade.wiki.br/tributario/notificacoes/files/manualnotf.png)

## Aba Filtros

Os filtros disponíveis dependem do Tipo de Lista.

### CGM (Geral) ou Somente CGM

Em **Contribuintes**, escolha Selecionados ou Sem Selecionados e informe os Numcgms a incluir ou excluir.

[![](https://e-cidade.wiki.br/tributario/notificacoes/files/Manual_Notificacoes_html_a5070ddbee8f7e46.png)](https://e-cidade.wiki.br/tributario/notificacoes/files/Manual_Notificacoes_html_a5070ddbee8f7e46.png)

### Matrícula

Configure Contribuintes (Matrícula do Imóvel), Bairros, Logradouros e Zonas, cada um com filtro Selecionados ou Sem Selecionados. Se usar os filtros de bairro, logradouro e zona simultaneamente, só entram matrículas que satisfaçam os três.

[![](https://e-cidade.wiki.br/tributario/notificacoes/files/matricula2.png)](https://e-cidade.wiki.br/tributario/notificacoes/files/matricula2.png)

### Inscrição

Configure Contribuintes (Inscrição Municipal), Bairros, Logradouros e Zonas, cada um com filtro Selecionados ou Sem Selecionados. Se combinar bairro, logradouro e zona, os registros devem satisfazer os três filtros.

[![](https://e-cidade.wiki.br/tributario/notificacoes/files/matricula3.png)](https://e-cidade.wiki.br/tributario/notificacoes/files/matricula3.png)

[![](https://e-cidade.wiki.br/tributario/notificacoes/files/matricula4.png)](https://e-cidade.wiki.br/tributario/notificacoes/files/matricula4.png)
`,
  Notificações: `
Gera notificações para informar contribuintes sobre pendências e o prazo para regularização.

~~~
DB:TRIBUTÁRIO > Notificações > Procedimentos > Notificações
~~~

Para emitir, informe **Lista** e **Tipo de Notificação**. Opcionalmente, selecione contribuintes específicos. Se não informar contribuintes, serão notificados todos os integrantes da lista.

[![](https://e-cidade.wiki.br/tributario/notificacoes/files/Manual_Notificacoes_html_7063fa4fdea5c70c.png)](https://e-cidade.wiki.br/tributario/notificacoes/files/Manual_Notificacoes_html_7063fa4fdea5c70c.png)
`,
  "Documento da Lista": `
Vincula um documento do sistema à lista de débitos; a impressão da notificação usa o layout configurado nesse documento.

~~~
DB:TRIBUTÁRIO > Notificações > Procedimentos > Documento da Lista
~~~

O documento deve usar o padrão 1200. Para vincular, informe **Lista** e **Documento**.

[![](https://e-cidade.wiki.br/tributario/notificacoes/files/Manual_Notificacoes_html_7063fa4fdea5c700c.png)](https://e-cidade.wiki.br/tributario/notificacoes/files/Manual_Notificacoes_html_7063fa4fdea5c700c.png)
`,
  "Notificações por Edital": `
Gera notificações vinculadas à lista de débitos de um edital.

~~~
DB:TRIBUTÁRIO > Notificações > Procedimentos > Notificações por Edital
~~~

[![](https://e-cidade.wiki.br/tributario/notificacoes/files/Manual_Notificacoes_html_c3ec7d610e806449.png)](https://e-cidade.wiki.br/tributario/notificacoes/files/Manual_Notificacoes_html_c3ec7d610e806449.png)
`,
  Parâmetros: `
~~~
DB:TRIBUTÁRIO > Notificações > Procedimentos > Parâmetros
~~~

O exercício é preenchido conforme a sessão do usuário. Em **Documento Padrão**, selecione o modelo usado para débitos sem configuração específica na rotina anterior.

Em **Emitir Notificações**, escolha:

1. **Conforme Lista Gerada:** emite dados e histórico conforme estavam na lista, mesmo que algumas parcelas tenham sido pagas ou canceladas depois.
2. **Corrigir Históricos Conforme Situação Atual:** compara a lista com a situação financeira atual e atualiza o detalhamento, omitindo parcelas já pagas ou canceladas.
3. **Não Emitir Notificações com Diferença:** não emite notificações quando os dados da lista diferem da situação financeira atual; ao final, apresenta relatório dos registros não emitidos.

[![](https://e-cidade.wiki.br/tributario/notificacoes/files/Manual_Notificacoes_html_a87d807b26106902.jpg)](https://e-cidade.wiki.br/tributario/notificacoes/files/Manual_Notificacoes_html_a87d807b26106902.jpg)

[![](https://e-cidade.wiki.br/tributario/notificacoes/files/Manual_Notificacoes_html_5cd64afd66a800b3.jpg)](https://e-cidade.wiki.br/tributario/notificacoes/files/Manual_Notificacoes_html_5cd64afd66a800b3.jpg)
`,
};