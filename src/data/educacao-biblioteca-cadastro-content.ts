export const educacaoBibliotecaCadastroContent: Record<string, string> = {
  Biblioteca: `Neste item será cadastrado o nome da biblioteca.

[![Cadastro de biblioteca](https://e-cidade.wiki.br/educacao/biblioteca/files/Tela_cadastro_biblioteca.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/Tela_cadastro_biblioteca.png)`,
  Autor: `Cadastre os autores dos livros existentes no acervo da biblioteca. Digite o nome do autor e clique em **Incluir**.

[![Cadastro de autor](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_de_autor.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_de_autor.png)

**Observação:** o sistema avisará se o autor já estiver cadastrado e não permitirá duplicá-lo. Pesquise o autor existente para vinculá-lo a outro acervo.

[![Autor já cadastrado](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_autor_duplicado.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_autor_duplicado.png)`,
  Aquisição: `Cadastre as formas de aquisição dos acervos, como compra, doação particular ou doação pública.

[![Cadastro de aquisição](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_aquisi%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_aquisi%C3%A7%C3%A3o.png)`,
  "Categoria do Leitor": `Cadastre os tipos de leitores da biblioteca, como aluno, professor, funcionário ou público em geral.

[![Categoria do leitor](https://e-cidade.wiki.br/educacao/biblioteca/files/Tela_categoria_do_leitor.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/Tela_categoria_do_leitor.png)

**Campos**
- **Nome da categoria:** nome da categoria de leitor.
- **Quantidade de livros:** quantidade de livros que a categoria pode retirar no mesmo período.
- **Tempo de empréstimo:** quantidade de dias durante os quais a categoria pode ficar com os acervos.`,
  "Classificação Literária": `Cadastre os temas ou gêneros abordados pelos acervos, como literatura infantil, brasileira ou estrangeira.

[![Cadastro de classificação literária](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_classifica%C3%A7%C3%A3o_literaria.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_classifica%C3%A7%C3%A3o_literaria.png)`,
  Editora: `Cadastre as editoras responsáveis pela publicação dos livros existentes na biblioteca, como Editora Abril, Novatec ou Brasil.

[![Cadastro de editora](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_de_editora.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_de_editora.png)

**Observação:** se a editora já estiver cadastrada, o sistema avisará e não permitirá duplicá-la. Pesquise a editora existente para vinculá-la a outro acervo.

[![Editora já cadastrada](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_editora_duplicada.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_editora_duplicada.png)`,
  "Localização do Acervo": `Cadastre os armários e as estantes onde os acervos ficam guardados, informando abreviatura e capacidade de exemplares. Exemplos: estante 01 — prateleira 01, estante 01 — prateleira 02 ou armário 01 — prateleira 03.

[![Cadastro de localização do acervo](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_localiza%C3%A7%C3%A3o_do_acervo.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_localiza%C3%A7%C3%A3o_do_acervo.png)`,
  "Tipo de Ítens": `Cadastre os tipos de itens disponíveis na biblioteca, como livros e revistas em quadrinhos.

[![Cadastro do tipo de item](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_tipo_de_%C3%ADtens.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_tipo_de_%C3%ADtens.png)`,
  Acervo: `## Aba Dados Gerais

Cadastre os dados do acervo, como título e data de edição. Preencha os campos e clique em **Incluir** para prosseguir à aba Autores.

[![Inclusão do acervo](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_de_acervos_inclus%C3%A3o.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_cadastro_de_acervos_inclus%C3%A3o.png)

**Campos**
- **Código do Acervo:** gerado automaticamente pelo sistema.
- **Biblioteca:** nome da biblioteca, carregado automaticamente.
- **Título:** título do acervo.
- **Subtítulo:** campo opcional.
- **Título Original:** campo opcional.
- **Idioma:** selecione o idioma do livro.
- **Data de Registro:** preenchida com a data atual; pode ser alterada.
- **Ano da Edição:** ano em que o acervo foi editado.
- **Edição:** número da edição.
- **Classificação C.D.D.:** Classificação Decimal de Dewey. Campo opcional; o número é encontrado nos dados bibliográficos do livro.
- **Código Cutter:** código alfanumérico que representa o sobrenome do autor para individualizar o trabalho. Campo opcional.
- **I.S.B.N.:** Número Padrão Internacional de Livro, encontrado nos dados bibliográficos. Campo opcional.
- **Volume:** número do volume.
- **Tomo:** divisão editorial da obra, que pode ou não corresponder a um volume. Campo opcional.
- **Tipo do Item:** clique no link, pesquise e selecione o tipo de item do acervo.
- **Editora:** clique no link e selecione uma editora cadastrada.
- **Classificação Literária:** clique no link e selecione uma classificação cadastrada.
- **Coleção:** clique no link e selecione uma coleção cadastrada.
- **Número do Item:** quantidade de itens conforme o cadastro da coleção.

## Aba Autores

Vincule ao acervo o autor cadastrado. Clique no link **Autor**, pesquise e selecione o autor do livro e clique em **Incluir**. Depois, siga para a aba Assuntos.

[![Vínculo de autor ao acervo](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_aba_autores_vinculo_com__acervo.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_aba_autores_vinculo_com__acervo.png)

[![Pesquisa de autor](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_pesquisa_autor_cadastro_do_acervo.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_pesquisa_autor_cadastro_do_acervo.png)

## Aba Assuntos

Informe os assuntos principais do acervo, como romance ou poesia. Clique no link **Assunto**, selecione um assunto na pesquisa e clique em **Incluir**.

[![Aba Assuntos](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_aba_assuntos.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_aba_assuntos.png)

[![Pesquisa de assunto](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_pesquisa_assunto_cadastro_de_acervo.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_pesquisa_assunto_cadastro_de_acervo.png)

## Aba Exemplares

Cadastre os exemplares pertencentes ao acervo. O sistema gera um código de barras para cada exemplar.

[![Inclusão de exemplar](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_inclus%C3%A3o_do_exemplar.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_inclus%C3%A3o_do_exemplar.png)

**Campos**
- **Acervo:** preenchido automaticamente.
- **Cód. Barras:** clique em **Gerar Código** para criar o código de barras.
- **Data de Aquisição:** data em que o acervo foi adquirido.
- **Tipo de Aquisição:** pesquise e selecione o tipo de aquisição.
- **Quantidade:** quantidade de exemplares pertencentes ao acervo.
- **Ano da Edição:** ano de publicação do exemplar.
- **Edição:** edição do exemplar, se houver.

Preencha os campos e clique em **Incluir**. Os exemplares serão listados na grade.

[![Pesquisa do tipo de aquisição](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_pesquisa_tipo_aquisi%C3%A7%C3%A3o_cadastro_de_exemplares.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_pesquisa_tipo_aquisi%C3%A7%C3%A3o_cadastro_de_exemplares.png)

[![Exemplares incluídos no acervo](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_exemplares_inclus%C3%A3o_do_acervo.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_exemplares_inclus%C3%A3o_do_acervo.png)

Após preencher a aba Exemplares, siga para Localização.

## Aba Localização

Informe onde cada exemplar está guardado para que sua localização exata (estante, prateleira e ordem) possa ser consultada.

[![Inclusão de localização](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_inclus%C3%A3o_de_localiza%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_inclus%C3%A3o_de_localiza%C3%A7%C3%A3o.png)

- **Localização:** pesquise e selecione o local do acervo.
- **Ordem de Localização:** preenchida automaticamente pelo sistema.

Clique em **Incluir**. Os exemplares serão apresentados ao lado direito, em ordem alfabética, na prateleira selecionada.

[![Pesquisa de localização](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_pesquisa_localiza%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_pesquisa_localiza%C3%A7%C3%A3o.png)

[![Ordem de localização](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_inclus%C3%A3o_de_localiza%C3%A7%C3%A3o_ordem.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_inclus%C3%A3o_de_localiza%C3%A7%C3%A3o_ordem.png)

[![Exemplares na localização](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_inclus%C3%A3o_de_exemplares_na_localiza%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_inclus%C3%A3o_de_exemplares_na_localiza%C3%A7%C3%A3o.png)

Se houver mais de um exemplar idêntico, o sistema acrescentará uma letra à ordem de localização para diferenciar os exemplares.

## Alteração

Pesquise o acervo desejado para alterar os campos de qualquer uma das abas e corrigir os dados do cadastro.`,
  Leitores: `## Inclusão

Cadastre os leitores pesquisando primeiro pelo link **Leitor**. Selecione o leitor encontrado; o sistema carregará os dados do cadastro da prefeitura. Confira as informações e clique em **Incluir**.

[![Inclusão de leitores](https://e-cidade.wiki.br/educacao/biblioteca/files/Tela_de_inclus%C3%A3o_leitores.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/Tela_de_inclus%C3%A3o_leitores.png)

[![Pesquisa de leitor](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_pesquisa_leitor.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_de_pesquisa_leitor.png)

Se a pessoa não for encontrada ou ainda não possuir cadastro no município, clique em **Novo Leitor**, preencha os dados e clique em **Incluir**. Em seguida, preencha a aba Carteira.

[![Inclusão de novo leitor](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_inclus%C3%A3o_de_novo_leitor.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_inclus%C3%A3o_de_novo_leitor.png)

## Aba Carteira

Informe a categoria do leitor e a validade da carteira.

[![Carteira do leitor](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_leitor_carteira_.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_leitor_carteira_.png)

**Campos**
- **Categoria:** pesquise e selecione uma categoria de leitor.
- **Data de Inclusão:** preenchida automaticamente com a data atual.
- **Validade:** data de vencimento da carteira.

Após preencher os campos, a situação da carteira será exibida como **Válida**.

[![Situação da carteira](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_carteira_situa%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/tela_carteira_situa%C3%A7%C3%A3o.png)

## Alteração

Nesta rotina, somente a categoria e a data de vencimento da carteira podem ser alteradas. Pesquise o leitor, abra a aba Carteira, selecione o registro, altere os dados e confirme.

Se a carteira estiver vencida, confirme a mensagem e acesse a aba Carteira. Clique na situação vencida, atualize a validade e confirme a alteração.

[![Carteira vencida](https://e-cidade.wiki.br/educacao/biblioteca/files/Leitores_carteira_vencida.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/Leitores_carteira_vencida.png)

[![Alteração da carteira vencida](https://e-cidade.wiki.br/educacao/biblioteca/files/Tela_carteira_vencida.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/Tela_carteira_vencida.png)`,
  Coleção: `Cadastre o nome das coleções mantidas pela biblioteca. Ao cadastrar os itens do acervo, eles poderão ser vinculados à coleção, permitindo consultar todos os itens que a compõem.

[![Inclusão de coleção](https://e-cidade.wiki.br/educacao/biblioteca/files/inclus%C3%A3o_de_cole%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/biblioteca/files/inclus%C3%A3o_de_cole%C3%A7%C3%A3o.png)`,
};
