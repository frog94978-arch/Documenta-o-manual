export const projetosCadastroContent: Record<string, string> = {
  Obras: `
Neste menu são cadastradas as obras do município para controle de obras regulares e irregulares. O cadastro registra os dados do responsável e da construção conforme o layout do INSS para envio das informações.

~~~
DB:TRIBUTÁRIO > Projetos > Cadastros > Obras
~~~

## Inclusão

**Obra Regular:** verifique a situação no cadastro da matrícula, selecione Sim se estiver regular e clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos1.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos1.png)

### Aba Obras

- **Código da Obra:** gerado automaticamente.
- **Nome da Obra:** nome da obra; obrigatório.
- **Código do Tipo de Responsável:** código conforme o padrão do INSS.
- **Proprietário da Obra:** CGM do proprietário ou pesquisa pelo link. O proprietário do imóvel é o responsável legal pela obra perante impostos, taxas municipais e contribuições previdenciárias dos trabalhadores.
- **Matrícula:** matrícula vinculada à obra ou pesquisa pelo link.
- **Responsável da Obra:** CGM do responsável pela execução e andamento da obra ou pesquisa pelo link.
- **Técnico:** técnico responsável, que deve estar cadastrado no CGM.
- **Processo do Sistema:** indique se o processo está cadastrado no sistema. Sim permite selecionar um processo existente; Não permite informar livremente o processo e os demais dados.
- **Código do Processo:** selecione pelo link se Processo do Sistema for Sim; caso contrário, informe livremente. Opcional.
- **Titular do Processo / Data do Processo:** campos opcionais exibidos quando Processo do Sistema for Não.
- **Observações:** informações adicionais sobre a obra; opcional.

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos2.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos2.png)

### Aba Construções

- **Código da Construção / Código Obra:** gerados automaticamente.
- **Área:** área da construção conforme o projeto. Obrigatória para Demolição, Acréscimo ou Reforma. Construção Nova pode ser combinada com demolição se a área demolida for igual à área existente.
- **Características:** link para grupos e características de construção, utilizados no cadastro de construções do módulo Cadastro.
- **Ocupação:** Comercial, Residencial ou Mista, conforme o padrão do INSS.
- **Tipo de Construção:** Alvenaria, Madeira ou Mista, conforme o padrão do INSS.
- **Tipo de Lançamento:** Nova, Demolição, Ampliação, Reforma ou Regularização, conforme o padrão do INSS.
- **Código Rua/Avenida:** pesquise o logradouro pelo link.
- **Número:** número da matrícula; opcional.
- **Complemento:** complemento do endereço, como casa, sala, apartamento ou prédio; opcional.
- **Bairro:** código do bairro ou pesquisa pelo link.
- **Área Atual:** quando a obra for regular, o sistema busca a área cadastrada no lote.
- **Unidades:** número de unidades da obra.
- **Pavimentos:** quantidade de pavimentos.
- **Data Inicial / Data Final:** período da obra.

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos3.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos3.png)

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos4.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos4.png)

## Alteração

Permite alterar os campos que não estão bloqueados pelo sistema.

## Exclusão

Não é permitido excluir uma obra vinculada a Alvará ou Habite-se.
`,
  "Situação do Projeto": `
Rotina para cadastrar as situações em que uma obra pode estar.

~~~
DB:TRIBUTÁRIO > Projetos > Cadastros > Situação do Projeto
~~~

## Inclusão

Preencha **Descrição da Situação** e clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos5.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos5.png)

## Alteração

A lista apresenta as situações cadastradas. Somente a descrição pode ser alterada.

## Exclusão

Somente é permitido excluir situações que não estejam vinculadas a nenhuma obra.
`,
  Técnicos: `
Cadastro dos técnicos responsáveis pelas obras. Devem ser profissionais registrados no CREA, como engenheiros e arquitetos.

~~~
DB:TRIBUTÁRIO > Projetos > Cadastros > Técnicos
~~~

## Inclusão

- **CGM:** CGM do técnico responsável ou pesquisa pelo link.
- **CREA:** registro do técnico no Conselho Regional de Engenharia e Arquitetura.
- **Tipo:** selecione o tipo de técnico; para engenheiro da Prefeitura, selecione Prefeitura.

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos6.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos6.png)

## Alteração

Permite alterar o campo CREA.

## Exclusão

O técnico pode ser excluído quando não estiver vinculado a nenhuma obra.
`,
};