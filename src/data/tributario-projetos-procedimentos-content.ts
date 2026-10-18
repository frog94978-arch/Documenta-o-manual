export const projetosProcedimentosContent: Record<string, string> = {
  "Situação do Projeto": `
Rotina para registrar a situação em que se encontra o projeto da obra.

~~~
DB:TRIBUTÁRIO > Projetos > Procedimentos > Situação do Projeto
~~~

### Descrição dos campos

- **Obra:** informe ou pesquise a obra.
- **Situação do Projeto:** selecione a situação a registrar.
- **Data da Situação:** data em que a situação se aplica.
- **Observações:** informação complementar sobre a situação.

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos36.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos36.png)
`,
  "Liberação de Habite-se": `
Procedimento para cadastrar o Habite-se de construções. Só pode ser cadastrado para obras que tenham Alvará. O Habite-se é o documento de liberação da construção.

~~~
DB:TRIBUTÁRIO > Projetos > Procedimentos > Liberação de Habite-se
~~~

### Descrição dos campos

- **Código:** gerado automaticamente conforme a configuração do módulo.
- **Habite-se:** número do documento; se a numeração estiver configurada como Contador por Exercício, é gerado automaticamente.
- **Exercício:** exercício da obra.
- **Eng. Prefeitura:** engenheiro municipal responsável.
- **Código da Construção:** código da construção ou pesquisa pelo link.
- **Processo do Sistema:** Sim exige selecionar processo cadastrado; Não permite informar o processo e titular manualmente.
- **Código do Processo:** processo cadastrado ou número informado livremente conforme Processo do Sistema; opcional.
- **Nome do Titular:** exibido quando Processo do Sistema for Não.
- **Data Processo:** preenchida automaticamente quando Processo do Sistema for Sim.
- **Data do Habite-se:** data da inclusão.
- **Área:** área total da obra; no Habite-se parcial, informe a área liberada, mantendo o restante pendente.
- **Rua / Número / Complemento / Bairro / CEP:** endereço do imóvel, apresentado conforme o cadastro; campos não obrigatórios.
- **Código IBGE:** código do município no IBGE.
- **Observação:** informação sobre o Habite-se; opcional.
- **Obs. INSS:** observação para o INSS; obrigatória.
- **Ocupação:** tipo de ocupação conforme o parâmetro Grupo de Ocupação.

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos37.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos37.png)

## Alteração

Podem ser alterados Processo, Descrição, Parcial, Data, Área e Observações. Após alterar, emita novamente o documento de Habite-se.

## Exclusão

Não é permitido excluir um Habite-se cuja carta já tenha sido emitida.
`,
  "Arquivo do INSS": `
Rotina para gerar e manter arquivos de remessa das informações de obras ao INSS usando o SisobraNet. Municípios com sistema próprio devem atender às especificações exigidas para gerar o arquivo de obras, Alvarás e Habite-se.

~~~
DB:TRIBUTÁRIO > Projetos > Procedimentos > Arquivo do INSS
~~~

## Gera Arquivo (Novo)

Gera o arquivo no novo layout. Permite verificar e corrigir erros (campos obrigatórios sem informação) e avisos (campos não obrigatórios sem informação).

Informe o **Período das Obras** (mês e ano) e gere o arquivo. O sistema apresenta eventuais inconsistências; se não houver erros, permite gerar o TXT. Após processar, não é permitido gerar novamente o arquivo com os mesmos dados.

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos38.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos38.png)

## Exclusão do Arquivo

Exclui o TXT da pasta onde foi salvo e habilita novamente a geração. Informe ou pesquise o **Código** do arquivo.

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos39.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos39.png)

## Reemissão

Permite gerar novamente um arquivo já criado para envio ao INSS.

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos40.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos40.png)
`,
  "Texto dos alvarás": `
Rotina para cadastrar os parágrafos usados na emissão das cartas de Alvará e Habite-se.

~~~
DB:TRIBUTÁRIO > Projetos > Procedimentos > Texto dos alvarás
~~~

### Texto

Permite cadastrar os textos impressos nos documentos.

### Alvará

Permite configurar cabeçalho, Termo - Parágrafo 1, Assinatura 1, Assinatura 2 e Rodapé da carta de Alvará.

### Habite-se

Permite configurar cabeçalho, Termo - Parágrafo 1, Termo - Parágrafo 2 e Assinatura da carta de Habite-se.
`,
  Parâmetros: `
Rotina de configuração dos parâmetros usados no cadastro e processamento de obras.

~~~
DB:TRIBUTÁRIO > Projetos > Procedimentos > Parâmetros
~~~

- **Exercício:** exercício do parâmetro.

### Habite-se

- **Numeração do Habite-se:** Manual permite informar o número na inclusão; Contador por Exercício usa numeração automática.
- **Número Habite-se:** numeração inicial, habilitada quando selecionado Contador por Exercício.

### Grupos de Características

Configure os grupos usados nos cadastros de obra para **Tipo de Ocupação**, **Tipo de Construção** e **Tipo de Lançamento**. Informe o código ou pesquise pelo link.

### Modelos Padrão de Carta

Para **Tipo Carta Alvará** e **Tipo Carta Habite-se**, selecione o modelo padrão do sistema ou o modelo OpenOffice.

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos41.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos41.png)
`,
};