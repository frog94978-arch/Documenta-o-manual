export const meioAmbienteCadastroContent: Record<string, string> = {
  Empreendimentos: `
O cadastro do empreendimento é a primeira etapa do processo de licenciamento ambiental. Nesta rotina são informados os dados do empreendedor, do empreendimento, das atividades e dos responsáveis técnicos.

~~~
DB:TRIBUTÁRIO > Meio Ambiente > Cadastros > Empreendimentos
~~~

Comece informando o CGM do empreendedor. Os dados do empreendedor serão preenchidos automaticamente e, na primeira aba, deverão ser informados os dados do empreendimento. Os campos em branco são obrigatórios para avançar.

[![](https://e-cidade.wiki.br/tributario/meioambiente/files/ManualMeioAmbiente1.png)](https://e-cidade.wiki.br/tributario/meioambiente/files/ManualMeioAmbiente1.png)

[![](https://e-cidade.wiki.br/tributario/meioambiente/files/ManualMeioAmbiente2.png)](https://e-cidade.wiki.br/tributario/meioambiente/files/ManualMeioAmbiente2.png)

### Aba Atividades

Informe as atividades do empreendimento, incluindo potencial poluidor e porte, conforme a tabela de atividades para licenciamento ambiental fornecida pela FEPAM.

[![](https://e-cidade.wiki.br/tributario/meioambiente/files/ManualMeioAmbiente3.png)](https://e-cidade.wiki.br/tributario/meioambiente/files/ManualMeioAmbiente3.png)

É possível cadastrar uma ou mais atividades. A primeira cadastrada será a principal. Para mudar qual atividade é principal, escolha a atividade desejada e use a operação “A”, no lado direito da lista. Ao definir **Principal** como Sim, confirme a mensagem: a atividade selecionada será principal e as demais, secundárias.

### Aba Responsáveis Técnicos

Após incluir as atividades, informe os técnicos responsáveis pelo empreendimento. Use o link **Nome/Razão Social** para pesquisar pelo nome ou número do CGM.

[![](https://e-cidade.wiki.br/tributario/meioambiente/files/ManualMeioAmbiente4.png)](https://e-cidade.wiki.br/tributario/meioambiente/files/ManualMeioAmbiente4.png)
`,
  Condicionantes: `
Nesta rotina são cadastradas as condições e restrições das licenças ambientais, conforme o tipo de licença ou a atividade.

~~~
DB:TRIBUTÁRIO > Meio Ambiente > Cadastros > Condicionantes
~~~

Para cadastrar uma condição ou restrição, escolha se ela pertence a um tipo de licença (Prévia, Instalação ou Operação) ou a uma atividade específica.

As condicionantes marcadas como **padrão** estarão selecionadas automaticamente na emissão do parecer técnico, mas poderão ser desmarcadas pelo usuário.

Se o tipo escolhido for **Atividade**, informe a **Descrição** da condicionante e use o link para associar uma ou mais atividades.

[![](https://e-cidade.wiki.br/tributario/meioambiente/files/ManualMeioAmbiente5.png)](https://e-cidade.wiki.br/tributario/meioambiente/files/ManualMeioAmbiente5.png)
`,
};