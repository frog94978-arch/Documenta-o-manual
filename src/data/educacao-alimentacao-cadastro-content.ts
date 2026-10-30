export const educacaoAlimentacaoCadastroContent: Record<string, string> = {
  Nutricionista: `## Inclusão

Cadastre o nutricionista habilitado responsável pela elaboração do cardápio. O profissional deve estar previamente cadastrado em **Escola > Cadastros > Recursos Humanos**.

[![Cadastro de nutricionista](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_cadastro_nutricionista.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_cadastro_nutricionista.png)

**Campos**
- **Código:** gerado automaticamente pelo sistema.
- **Nutricionista:** clique no link e selecione o profissional na pesquisa dos Recursos Humanos vinculados à escola.
- **Nº CRN - Região:** informe o número de registro do nutricionista no Conselho Regional de Nutricionistas.

Preencha os campos e clique em **Incluir**. Em seguida, acesse a aba **Escolas**. O sistema exibirá as escolas não vinculadas e as escolas vinculadas ao nutricionista. Selecione cada escola a vincular, use a seta **>** para transferi-la à coluna de escolas vinculadas e clique em **Atualizar**.

[![Escolas vinculadas ao nutricionista](https://e-cidade.wiki.br/educacao/alimentacao/files/cadastro_nutricionista_aba_escolas.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/cadastro_nutricionista_aba_escolas.png)`,
  "Grupo de alimentos": `## Inclusão

Cadastre os grupos aos quais os gêneros alimentícios pertencem.

[![Cadastro de grupo de alimentos](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_cadastro_grupo_de_alimentos.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_cadastro_grupo_de_alimentos.png)

Informe o **Nome do Grupo** e clique em **Incluir**.

A pirâmide alimentar possui oito grupos:
- Cereais, pães e tubérculos;
- Hortaliças;
- Frutas;
- Leguminosas;
- Carnes e ovos;
- Leite e derivados;
- Óleos e gorduras;
- Açúcares e doces.

## Alteração

O sistema abrirá uma pesquisa com os grupos cadastrados. Selecione o grupo, altere sua descrição e clique em **Alterar**.

[![Alteração de grupo de alimentos](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_de_altera%C3%A7%C3%A3o_de_grupo_de_alimentos_.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_de_altera%C3%A7%C3%A3o_de_grupo_de_alimentos_.png)

## Exclusão

O grupo somente poderá ser excluído se não estiver vinculado a nenhum gênero alimentício.`,
  "Intolerância Alimentar": `Cadastre os tipos de intolerância alimentar aplicáveis aos alunos. Informe o tipo no campo **Descrição** e clique em **Incluir**.

[![Cadastro de intolerância alimentar](https://e-cidade.wiki.br/educacao/alimentacao/files/Cadastro_de_Intoler%C3%A2ncia_alimentar.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/Cadastro_de_Intoler%C3%A2ncia_alimentar.png)

**Observação:** use as opções **A** para alterar e **E** para excluir um registro, quando necessário.`,
  Nutriente: `## Inclusão

Cadastre os nutrientes presentes nos alimentos. Informe o nome do nutriente no campo **Descrição** e clique em **Incluir**.

[![Cadastro de nutriente](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_cadastro_de_nutriente.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_cadastro_de_nutriente.png)

**Campos**
- **Código:** gerado automaticamente pelo sistema.
- **Descrição:** nome do nutriente.

## Alteração

O sistema abrirá uma pesquisa com os nutrientes cadastrados. Selecione um nutriente, altere a descrição e clique em **Alterar**.

[![Pesquisa de nutrientes](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_de_pesquisa_nutrientes.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_de_pesquisa_nutrientes.png)

## Exclusão

Um nutriente somente poderá ser excluído se não estiver vinculado a nenhuma informação nutricional.`,
  "Informação Nutricional": `Registre os nutrientes e suas quantidades em cada alimento que poderá compor o cardápio. Preencha os campos na ordem apresentada.

[![Informação nutricional](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_informacao_nutricional.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_informacao_nutricional.png)

**Campos**
- **Código:** gerado automaticamente.
- **Alimento:** nome do alimento.
- **Nome Científico:** nome científico do alimento.
- **Grupo alimentar:** selecione um grupo alimentar na pesquisa.
- **Fonte da Informação:** informe a fonte dos dados. Se deixar o campo em branco, será usada a Tabela Brasileira de Composição de Alimentos (TACO).
- **Unidade:** selecione a unidade correspondente ao alimento.

Após preencher os campos, clique em **Incluir** e siga para a aba Informação Nutricional.

## Informação Nutricional

Nesta aba são vinculados os nutrientes que compõem o alimento. Clique no link **Nutrientes**, pesquise e selecione um nutriente. Informe a **Quantidade** correspondente e clique em **Incluir**.

[![Inclusão de nutrientes do alimento](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_aba_informa%C3%A7%C3%A3o_nutriciona_inclusao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_aba_informa%C3%A7%C3%A3o_nutriciona_inclusao.png)

[![Pesquisa de nutrientes](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_de_nutrientes__pesquisa.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_de_nutrientes__pesquisa.png)

Os nutrientes incluídos serão listados na grade.

[![Nutrientes cadastrados para o alimento](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_aba_informa%C3%A7%C3%A3o_nutricional_.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_aba_informa%C3%A7%C3%A3o_nutricional_.png)

## Item do Material

Nesta aba, vincule o alimento a um item de material.

[![Vínculo de item do material](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_item_do_material_alimentacao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_item_do_material_alimentacao.png)

Clique no link **Material** e selecione o item na pesquisa. Use os filtros disponíveis, como itens da instituição e materiais com estoque; no campo **Descrição do Material**, pesquise pelo nome do material.

[![Pesquisa de material](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_de_pesquisa_material_alimentacao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_de_pesquisa_material_alimentacao.png)

Após selecionar o material, clique em **Incluir** para vinculá-lo ao alimento.

[![Item de material vinculado ao alimento](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_item_de_material_alimentacao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_item_de_material_alimentacao.png)`,
  Cardápio: `Esta rotina cadastra os tipos de cardápio que serão elaborados pelo nutricionista. Podem ser criados diferentes cardápios para atender necessidades específicas de turmas ou níveis de ensino.

## Inclusão — Aba Cardápio

Cadastre os cardápios oferecidos aos estudantes.

[![Cadastro de cardápio](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_cadastro__cardapio_aba.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_cadastro__cardapio_aba.png)

- **Nome:** nome atribuído ao cardápio.
- **Data de Validade:** período inicial e final em que atenderá à unidade escolar.
- **Ano do Cardápio:** preenchido por padrão com o ano de exercício.

Preencha os campos e clique em **Incluir**. Em seguida, configure as escolas atendidas.

## Escolas Atendidas

Vincule as unidades escolares que utilizarão o cardápio. Selecione os departamentos na coluna à esquerda e use as setas para movê-los à coluna de escolas atendidas; clique em **Atualizar**.

[![Escolas atendidas pelo cardápio](https://e-cidade.wiki.br/educacao/alimentacao/files/aba_escola_atendidas.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/aba_escola_atendidas.png)

## Etapas Atendidas

Marque as etapas que receberão o cardápio. Use **Marcar tudo** se ele se aplicar a todas as etapas e clique em **Salvar**.

[![Etapas atendidas pelo cardápio](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_etapas_atendidass.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_etapas_atendidass.png)

## Alteração

O cardápio poderá ser alterado enquanto não houver baixa de estoque. Se já houver baixa, use **Nova Versão** para criar uma cópia com a mesma estrutura e realizar as alterações.

[![Alteração de cardápio](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_alteracao_cardapio_.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_alteracao_cardapio_.png)`,
  Refeição: `## Inclusão

Cadastre as refeições que compõem o cardápio, incluindo tipo, itens, modo de preparo, características e nutricionista responsável. Cada alteração da refeição gera uma nova versão.

### Aba Refeição

Cadastre os dados iniciais da refeição.

[![Aba Refeição](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_refeicao_aba_refeicao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_refeicao_aba_refeicao.png)

**Campos**
- **Código:** gerado automaticamente.
- **Nome da refeição:** nome da refeição.
- **Cardápio:** pesquise e selecione um cardápio cadastrado.
- **Total de Alunos:** total de estudantes matriculados no calendário letivo, carregado automaticamente.
- **Alunos Atendidos:** quantidade de estudantes atendidos pela refeição.
- **Tipo de refeição:** selecione o tipo e use a seta **>** para movê-lo à lista da refeição; use **<** para removê-lo.

Preencha os campos e clique em **Incluir**. Em seguida, cadastre os itens da refeição.

## Itens da Refeição

Informe os alimentos utilizados, as quantidades e a medida caseira.

[![Itens da refeição](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_itens_da_refei%C3%A7%C3%A3o.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_itens_da_refei%C3%A7%C3%A3o.png)

- **Código:** gerado automaticamente.
- **Refeição:** preenchida conforme a aba Refeição.
- **Alimento:** pesquise e selecione o alimento.
- **Unidade:** pesquise e selecione a unidade.
- **Per Capita:** média de porções necessárias para atender aproximadamente os alunos.
- **Medida caseira:** medida padrão correspondente à unidade e quantidade do alimento.

Use as opções **A** (alterar) ou **E** (excluir) para modificar ou remover um item.

[![Pesquisa de alimento](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_pesquisa_alimento_itens_da_refeicao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_pesquisa_alimento_itens_da_refeicao.png)

[![Pesquisa de unidades](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_pesquisa_unidades.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_pesquisa_unidades.png)

## Modo de Preparo

Informe como cada alimento será preparado e o rendimento em porções.

[![Modo de preparo](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_modo_de_preparo.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_modo_de_preparo.png)

- **Código:** gerado automaticamente.
- **Refeição:** preenchida conforme a aba Refeição.
- **Alimento:** selecione um dos itens cadastrados na aba Itens da Refeição.
- **Porção:** número de porções que a receita renderá; deve corresponder ao valor informado em Per Capita.
- **Natureza:** natureza do alimento preparado, como doce ou salgado.
- **Descrição:** ingredientes utilizados e modo de preparo.

Use **A** para alterar ou **E** para excluir um registro.

## Característica do Preparo

Registre informações complementares, como grau de dificuldade, tempo de preparo e características relevantes.

[![Características do preparo](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_caracteristica_do_preparo.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_caracteristica_do_preparo.png)

- **Código:** gerado automaticamente.
- **Refeição:** preenchida automaticamente.
- **Grau de dificuldade:** informe baixo, médio ou alto.
- **Tempo de preparo:** duração estimada.
- **Descrição:** características do preparo.

Preencha os campos e clique em **Incluir**.

## Alunos com Restrição Alimentar

Esta aba exibe os alunos com restrição alimentar, o tipo de intolerância e o alimento a substituir. Também permite indicar uma substituição quando o alimento não tiver estoque.

[![Alunos com restrição alimentar](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_alunos_com_retricao_alimentarr.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_alunos_com_retricao_alimentarr.png)

Use o link para abrir a janela de substituição.

[![Link para substituição de alimento](https://e-cidade.wiki.br/educacao/alimentacao/files/linktrocar_alimento.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/linktrocar_alimento.png)

- **Alimento:** selecione o alimento oferecido no cardápio.
- **Alimento substituído:** selecione o alimento que será substituído.

Preencha os campos e clique em **Incluir**. Use **A** para alterar ou **E** para excluir.

[![Substituição de alimento para aluno com restrição](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_aluno_com_restricao_alimentar_substituicao_de_alimento.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_aluno_com_restricao_alimentar_substituicao_de_alimento.png)

## Escolas Atendidas

Exibe as unidades escolares atendidas e o total de turmas e alunos de cada uma. Clique no número de turmas para ver as turmas; um asterisco identifica as turmas com alunos com restrição alimentar.

[![Escolas atendidas](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_escolas_atendidas.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_escolas_atendidas.png)

[![Turmas com alunos com restrição alimentar](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_escolas_atendidas_turmas_sinalizadas_com_restricao_alimentar.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_escolas_atendidas_turmas_sinalizadas_com_restricao_alimentar.png)

Clique na descrição da etapa para consultar os alunos da turma, suas situações e restrições alimentares.

[![Alunos com restrições alimentares](https://e-cidade.wiki.br/educacao/alimentacao/files/lista_de_alunos_com_registricao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/lista_de_alunos_com_registricao.png)

## Nutricionista

Vincule o nutricionista que elaborou a refeição e é responsável pelo cardápio da escola.

[![Nutricionista responsável pela refeição](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_nutricionista.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_nutricionista.png)

- **Código:** gerado automaticamente.
- **Refeição:** preenchida automaticamente com o nome cadastrado na aba Refeição.
- **Nutricionista:** selecione o profissional responsável pela elaboração e aprovação da refeição; o sistema carregará seu CGM.

Use **A** para alterar ou **E** para excluir um vínculo.`,
  Restrição: `## Inclusão

Cadastre os alunos que possuem restrições alimentares, como intolerância, alergia ou outras condições. O registro identifica o aluno, o alimento que não deve consumir, o componente relacionado e o alimento substituto que pode ser oferecido.

## Aba Alunos

Pesquise e selecione o aluno que possui restrição alimentar.

[![Cadastro de restrição alimentar do aluno](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_restricao_alimentar.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_restricao_alimentar.png)

- **Código:** gerado automaticamente.
- **Alunos:** pesquise entre os alunos matriculados na escola, selecione o aluno e clique em **Incluir**. As abas Itens e Intolerância Alimentar serão habilitadas.

## Itens

Informe o alimento que o aluno não pode consumir e, se necessário, o alimento substituto.

[![Itens da restrição alimentar](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_itens_retriscao_alimentar.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_itens_retriscao_alimentar.png)

- **Código:** gerado automaticamente.
- **Aluno:** preenchido automaticamente.
- **Item:** pesquise e selecione o alimento que o aluno não deve consumir.
- **Item Substituto:** pesquise e selecione o alimento substituto, com valor nutritivo equivalente.

Preencha os campos e clique em **Incluir**. Use **A** para alterar ou **E** para excluir um item.

## Intolerância Alimentar

Clique no link **Intolerância Alimentar**, selecione uma das opções cadastradas e clique em **Incluir**.

[![Pesquisa de intolerância alimentar](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_intolerancia_alimentar_restricao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_intolerancia_alimentar_restricao.png)

[![Inclusão de intolerância alimentar](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_inclusao_de_intolerancia_alimentar.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_inclusao_de_intolerancia_alimentar.png)

Use **A** para alterar ou **E** para excluir um registro. Se a intolerância não estiver disponível, cadastre-a em **DB: EDUCAÇÃO > Alimentação Escolar > Cadastros > Intolerância Alimentar**.`,
  "Tipo Refeição": `## Inclusão

Cadastre os tipos de refeição oferecidos pela escola, como café da manhã, almoço, lanche e jantar, conforme a organização da unidade escolar.

[![Tipo de refeição](https://e-cidade.wiki.br/educacao/alimentacao/files/tipo_de_refeicao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tipo_de_refeicao.png)

**Campos**
- **Código:** gerado automaticamente.
- **Escola:** preenchida automaticamente.
- **Tipo:** nome ou descrição do tipo de refeição.
- **Hora do Início:** horário de início da refeição.
- **Hora Final:** horário de término da refeição.
- **Turno:** selecione um turno oferecido pela escola.

Preencha os campos e clique em **Incluir**. À direita da tela, o sistema permitirá ordenar ou reordenar as refeições.

## Alteração

Todos os campos podem ser alterados. Use os controles à direita para ordenar ou reordenar as refeições. Clique em **Alterar** para salvar os dados do tipo de refeição e em **Atualizar** para salvar a ordenação.

## Exclusão

Um tipo de refeição somente poderá ser excluído se não estiver vinculado a nenhum outro cadastro.`,
};
