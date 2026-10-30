export const educacaoAlimentacaoProcedimentosContent: Record<string, string> = {
  "Cardápio Semanal": `Esta rotina destina-se à composição do cardápio. Ao abrir a tela, o sistema seleciona por padrão o calendário vigente, mas permite escolher outro. Após selecionar o mês, a semana e os dias da semana, o sistema habilita o campo **Refeição** e exibe a grade **Tipo de Refeição/Horário**.

[![Tela do cardápio semanal](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_cardapio_da_semana.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_cardapio_da_semana.png)

**Campos**
- **Calendário:** preenchido por padrão com o calendário vigente.
- **Cardápio:** lista os cardápios cadastrados no sistema.
- **Mês:** mês em que será aplicado o cardápio selecionado.
- **Semana:** selecione uma das semanas e seu período, conforme o mês selecionado. Ao escolher **Todas**, o sistema exibirá a grade do mês inteiro.
- **Dias da Semana:** selecione todos os dias ou um dia específico entre segunda e sexta-feira. O sistema exibirá o campo **Refeição** e a grade **Refeição/Horário**, de acordo com os filtros selecionados.
- **Refeição:** selecione uma das refeições cadastradas.
- **Tipo de refeição:** preenchido automaticamente após a seleção da refeição.

Clique no símbolo **[+]** para inserir a refeição no horário em que será servida. A grade destaca os dias e horários disponíveis. A data deve ser igual ou posterior à data de criação da refeição, e o tipo de refeição deve ser compatível com o horário. Depois de selecionar a refeição, clique em **Incluir**.

[![Inclusão de refeição no cardápio semanal](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_inclusao_de_refeicao_cardapio_semanal.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_inclusao_de_refeicao_cardapio_semanal.png)

Para editar uma informação, clique na refeição na grade e escolha **Alterar**, **Excluir** ou **Fechar** na tela exibida.

[![Edição de refeição do cardápio semanal](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_edicao_de_refeicao__cardapio_semanal.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_edicao_de_refeicao__cardapio_semanal.png)`,
  "Consumo de Refeição": `## Por Aluno

Informe quais estudantes da escola receberão alimentação escolar, de acordo com as turmas vinculadas ao cardápio.

[![Consumo de refeição por aluno](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consumo_de_refeicao_por_aluno.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consumo_de_refeicao_por_aluno.png)

**Campos**
- **Calendário:** calendário letivo; o sistema seleciona por padrão o vigente.
- **Cardápio:** cardápio a ser consultado.
- **Refeição:** refeição que compõe o cardápio.
- **Turma:** selecione a turma. O sistema listará seus alunos, que poderão ser selecionados para a refeição. Use **[>]** para mover os alunos selecionados ou **[>>]** para mover todos. Para retornar alunos à lista, use **[<]** ou **[<<]**.
- **Quantidade de Repetições:** informe numericamente a quantidade de repetições, se houver.

Após preencher os campos, clique em **Salvar**.

## Por turma

Informe o quantitativo de refeições a serem consumidas por turma.

[![Consumo de refeição por turma](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consumo_de_refeicao_por_turma.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_consumo_de_refeicao_por_turma.png)

**Campos**
- **Cardápio:** cardápio a ser consultado.
- **Refeição:** refeição que compõe o cardápio.
- **Turma:** lista as turmas do cardápio e seus quantitativos. Informe a quantidade de refeições a consumir no dia; caso haja repetições, informe o quantitativo correspondente.

Após preencher os campos, clique em **Salvar**.`,
  "Substituição de Alimentos": `Registre alterações nos alimentos previstos no cardápio, por exemplo, quando frutas ou legumes estiverem indisponíveis devido a mudanças climáticas ou outros fatores. Informe a refeição, o alimento substituído, o substituto, o motivo e o período da substituição.

[![Substituição de alimentos](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_substituicao_de_alimentos_.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_substituicao_de_alimentos_.png)

**Campos**
- **Código:** gerado automaticamente.
- **Refeição:** pesquise e selecione a refeição em que ocorrerá a substituição.
- **Item substituído:** selecione um dos itens que compõem a refeição.
- **Item substituto:** pesquise e selecione o alimento que substituirá o item.
- **Quantidade:** quantidade do alimento substituto.
- **Medida caseira:** medida padrão do alimento substituto, correspondente à do alimento substituído.
- **Data do início:** data inicial da substituição; por padrão, o sistema sugere a data atual. Informe também a data de término. Durante esse período, a baixa de estoque será feita para o item substituto, em vez do substituído.
- **Duração:** quantidade de dias da substituição, conforme o período informado.
- **Justificativa:** motivo da substituição.

Após a inclusão, o registro aparecerá na lista, que mantém o histórico das substituições realizadas.

[![Pesquisa de alimentos para substituição](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_pesquisa__de_alimentos_substituicao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_pesquisa__de_alimentos_substituicao.png)`,
  Desperdício: `## Inclusão

Registre as sobras resultantes das refeições, incluindo os alimentos que não foram aceitos pelos alunos.

## Aba Refeição/Data

Selecione a refeição e a data para registrar o desperdício.

[![Aba Refeição/Data do desperdício](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_desperd%C3%ADcio.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_desperd%C3%ADcio.png)

**Campos**
- **Código:** gerado automaticamente.
- **Usuário:** preenchido automaticamente com o usuário conectado.
- **Refeição:** pesquise e selecione a refeição realizada que gerou sobras.
- **Data:** preenchida automaticamente.
- **Tipo:** preenchido automaticamente conforme a refeição.

[![Pesquisa de refeição para desperdício](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_pesquisa_de_refeicao_desperdicio.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_pesquisa_de_refeicao_desperdicio.png)

## Aba Informações

Informe a quantidade que sobrou, a unidade de medida e as observações relevantes.

[![Informações do desperdício](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_desperdicio_aba_informacoes.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_desperdicio_aba_informacoes.png)

**Campos**
- **Código:** gerado automaticamente.
- **Refeição:** preenchida automaticamente.
- **Quantidade:** quantidade de alimentos que sobrou.
- **Data:** preenchida automaticamente.
- **Tipo:** preenchido automaticamente.
- **Unidade:** pesquise e selecione a unidade de medida.
- **Observação:** descreva o desperdício, como as quantidades de cada alimento e possíveis causas das sobras. O preenchimento é obrigatório.

Preencha os campos e clique em **Incluir**. O registro será exibido em **Unidades de Desperdício**.

[![Desperdício registrado](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_desperdicio_informacoes_incluidas.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_desperdicio_informacoes_incluidas.png)`,
  "Baixa do Estoque": `Registre a saída do estoque dos gêneros alimentícios utilizados no preparo da alimentação escolar. O procedimento deve ser realizado pelo responsável pelo depósito. Selecione o calendário, o cardápio, o mês, a semana e o dia da semana para exibir as refeições correspondentes.

[![Seleção do dia para baixa de estoque](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_baixa_de_estoque_selecao_dia.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_baixa_de_estoque_selecao_dia.png)

**Filtros**
- **Cardápio:** cardápio cujos gêneros alimentícios terão saída do estoque.
- **Mês:** mês em que o cardápio foi aplicado.
- **Semana:** semana desejada.
- **Dia da semana:** um ou mais dias da semana.

Marque na grade as refeições e clique em **Calcular**. Confira os gêneros alimentícios usados nas refeições e clique em **Baixar do Estoque**. Confirme a operação quando solicitado.

[![Itens para baixa de estoque](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_baixa_de_estoque.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_baixa_de_estoque.png)

[![Identificação de refeição baixada](https://e-cidade.wiki.br/educacao/alimentacao/files/descricao_baixado.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/descricao_baixado.png)

O sistema registra a saída e retorna à tela inicial. As refeições baixadas passam a exibir essa identificação.

[![Refeições com baixa de estoque](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_baixa_de_estoque_itens_baixados.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_baixa_de_estoque_itens_baixados.png)`,
  "Informações do Aluno": `## Inclusão

Cadastre informações para acompanhar o desenvolvimento físico do aluno.

[![Informações do aluno](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_informacoes_do_aluno.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_informacoes_do_aluno.png)

**Campos**
- **Código:** gerado pelo sistema.
- **Aluno:** pesquise e selecione o aluno para o registro.
- **Peso:** peso medido do aluno.
- **Altura:** altura medida do aluno.
- **Idade:** exibida conforme o cadastro do aluno.
- **IMC:** calculado automaticamente com base no peso e na altura.
- **Competência:** selecione **Mês** para escolher o mês e ano do registro ou **Período de avaliação** para selecionar o calendário letivo e o período de avaliação.

Preencha os campos e clique em **Incluir**. O registro será salvo na lista.

[![Registro das informações do aluno](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_informacao_do_aluno_inclusao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_informacao_do_aluno_inclusao.png)`,
  "Transferência entre depósitos": `Transfira materiais do estoque de um depósito para outro.

## Inclusão

O usuário deve estar conectado ao departamento de origem, que detém os materiais, e selecionar o departamento de destino.

[![Transferência entre depósitos](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_transfer%C3%AAncia_entre_depositos.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_transfer%C3%AAncia_entre_depositos.png)

**Campos**
- **Cod. Usuário:** código e nome do usuário conectado, preenchidos automaticamente.
- **Departamento de origem:** departamento do usuário conectado, preenchido automaticamente.
- **Departamento destino:** selecione o depósito que receberá o material.
- **Observação do Lançamento:** observação obrigatória sobre a transferência.

Clique em **+ Adicionar Item**. Na janela aberta, clique em **Código do Material**, selecione um material do depósito e clique em **Lançar**.

[![Lançamento de item a transferir](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_lan%C3%A7ar_item_a_transferir.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_lan%C3%A7ar_item_a_transferir.png)

Em seguida, clique em **Efetuar Transferência**. O sistema exibirá um PDF para emissão do Termo de Transferência.

[![Termo de transferência entre depósitos](https://e-cidade.wiki.br/educacao/alimentacao/files/recibo_transferencia_entre_deposito.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/recibo_transferencia_entre_deposito.png)

## Alteração

O sistema abrirá uma pesquisa com as transferências realizadas pelo departamento. Informe o código do lançamento para localizá-lo.

[![Pesquisa de transferência](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_de_pesquisa_.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_de_pesquisa_.png)

Após selecionar o lançamento, acesse a aba Itens para incluir ou excluir itens da transferência.

[![Alteração de itens da transferência](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_alteracao_transferencia_entre_depositos_aba_item.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_alteracao_transferencia_entre_depositos_aba_item.png)

## Confirmação

A confirmação deve ser feita pelo depósito de destino. Conectado a esse depósito, pesquise e selecione o lançamento recebido e clique em **Confirmar transferência**.

[![Pesquisa de confirmação da transferência](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_de_pesquisa_de_confirmacao_de_transferencia.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_de_pesquisa_de_confirmacao_de_transferencia.png)

[![Confirmação da transferência entre depósitos](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_confirmar_transferencia_entre_depositos_.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_confirmar_transferencia_entre_depositos_.png)

## Cancelar

Somente o depósito de origem pode cancelar a transferência, e apenas se o depósito de destino ainda não a tiver confirmado. Pesquise e selecione o lançamento e clique em **Cancelar transferência**.

[![Pesquisa de cancelamento da transferência](https://e-cidade.wiki.br/educacao/alimentacao/files/Cancelar__a_tranfer%C3%AAncia.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/Cancelar__a_tranfer%C3%AAncia.png)

[![Cancelamento da transferência](https://e-cidade.wiki.br/educacao/alimentacao/files/cancelar_transferencia.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/cancelar_transferencia.png)`,
  "Requisição de Saída de Materiais": `## Inclusão

### Aba Requisição

Solicite materiais ao depósito ao qual o departamento está vinculado. A requisição é realizada por usuários de departamentos vinculados a um depósito cadastrado no sistema.

[![Requisição de saída de materiais](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_requisicao_de_saida__de_materiais.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_requisicao_de_saida__de_materiais.png)

**Campos**
- **Código:** código da requisição, gerado automaticamente.
- **Data:** data de inclusão.
- **Departamento:** departamento em que o solicitante está conectado.
- **Código do Usuário:** código e nome do usuário.
- **Hora:** hora de inclusão da requisição.
- **Depósito:** depósito que contém os materiais solicitados.
- **Observação:** informações adicionais sobre a requisição, se necessário.

Clique em **Incluir** para habilitar a aba Itens.

### Aba Itens

Informe o material pelo código ou pesquise pelo link **Código do Material**. Selecione o material, informe a quantidade solicitada e, se necessário, uma observação. Clique em **Incluir** para salvar o item em **Itens Requisitados**.

[![Itens da requisição de saída de materiais](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_aba_itens__requisicao_de_saida_de_materiais.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_aba_itens__requisicao_de_saida_de_materiais.png)

Use **A** para alterar ou **E** para excluir um item. Para emitir a requisição em PDF, clique em **Emite Requisição**.

[![PDF da requisição de saída de material](https://e-cidade.wiki.br/educacao/alimentacao/files/pdf_requisicao_de_saide_de_material.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/pdf_requisicao_de_saide_de_material.png)`,
  "Atendimento de Requisição": `Procedimento realizado pelo responsável pelo depósito para atender uma requisição de saída de material feita por um departamento vinculado a esse depósito. É possível selecionar os lotes utilizados no atendimento.

Ao abrir a rotina no almoxarifado, o sistema listará as requisições em aberto para o depósito. Selecione a requisição desejada.

[![Pesquisa de atendimento de requisição](https://e-cidade.wiki.br/educacao/alimentacao/files/pesquisa_de_atendimento_de_requisicao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/pesquisa_de_atendimento_de_requisicao.png)

[![Tela de atendimento da requisição](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_efetuar_requisicao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_efetuar_requisicao.png)

Marque o item para atender a quantidade total ou parcial. Para atendimento parcial, informe a **Qtde a Entregar**. Clique em **Efetuar Atendimento** e confirme a operação. O sistema exibirá o comprovante da requisição.

[![Comprovante de atendimento da requisição](https://e-cidade.wiki.br/educacao/alimentacao/files/Relatorio_pdf_requisicao__de_saida.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/Relatorio_pdf_requisicao__de_saida.png)`,
  "Devolução de Materiais": `Use esta rotina para devolver materiais de saídas por requisição, automática ou manual, por exemplo, para corrigir uma requisição incorreta ou devolver materiais que não foram utilizados.

Pesquise pelo código do atendimento ou da requisição. Também é possível filtrar por data, hora, código e nome do usuário ou departamento de destino.

[![Pesquisa de devolução de materiais](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_pesquisa_de_devolucao_de_materiais.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_pesquisa_de_devolucao_de_materiais.png)

Após selecionar o registro, confira os dados do atendimento, da requisição, do usuário e do departamento de destino. Informe uma observação e, na coluna **Quantidade**, indique quanto será devolvido ao depósito, total ou parcialmente. Clique em **Confirmar**.

[![Devolução de materiais](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_devolucao_materiais.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_devolucao_materiais.png)`,
  "Entrada manual": `## Inclusão

Use esta rotina excepcional para corrigir erros de implantação, como divergências de contagem, registrar doações ou lançar entradas quando ainda não foi realizada a implantação ou a entrada por ordem de compra.

[![Inclusão de entrada manual](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_entrada_manual_inclusao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_entrada_manual_inclusao.png)

**Campos**
- **Código do material:** pesquise e selecione o material cadastrado.
- **Tipo:** selecione o tipo de entrada: Doação, Ajuste de estoque, Eventual, Ordinária, Permuta, Transferência/Remanejamento ou Saldo de Implantação.
- **Unidade de entrada e saída:** preenchida pelo sistema após a seleção do material.
- **Quantidade:** quantidade que entrará no depósito.
- **Valor unitário do item:** valor unitário conforme a nota fiscal.
- **Valor total:** calculado automaticamente quando quantidade e valor unitário forem informados.
- **Lote:** número do lote.
- **Validade:** validade do lote.
- **Fabricante:** selecione um fabricante cadastrado.
- **Nota Fiscal:** número da nota fiscal.
- **Data da Nota:** data da nota fiscal.
- **Observação do lançamento:** observação obrigatória sobre a entrada, para facilitar consultas futuras.

Preencha os campos e clique em **Incluir**.

## Alteração

O sistema exibirá os lançamentos de entrada manual do depósito. Se não localizar o lançamento, confirme se está consultando o mesmo depósito em que a entrada foi realizada.

[![Pesquisa de entrada manual](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_de_pesquisa_de_material_alteracao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_de_pesquisa_de_material_alteracao.png)

Informe o lançamento ou pesquise pelos dados disponíveis, como a observação. O campo **Indique o Conteúdo** permite usar o caractere **%** para localizar registros que contenham o texto informado. Após selecionar o lançamento, altere os dados disponíveis, como nota fiscal, data da nota e observações.

[![Alteração de entrada manual](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_de_entrada_manual__alteracao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/Tela_de_entrada_manual__alteracao.png)

Clique em **Alterar** para salvar.`,
  "Saída manual": `Use esta rotina excepcional após a implantação do estoque para realizar ajustes, como corrigir erros de implantação.

## Inclusão

Informe o código do material ou clique no link **Código do Material** para pesquisar e selecionar o item cuja saída será registrada.

[![Inclusão de saída manual](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_saida__manual_inclusao.png)](https://e-cidade.wiki.br/educacao/alimentacao/files/tela_saida__manual_inclusao.png)

**Campos**
- **Código do material:** pesquise e selecione o material cuja saída será realizada.
- **Observações:** informe o motivo da saída manual.

Após selecionar o material, o sistema exibirá no saldo informações como código e descrição do material, unidade de saída, quantidade em estoque, lote e campo para retirada. Informe a quantidade de material que sairá do estoque.`,
};
