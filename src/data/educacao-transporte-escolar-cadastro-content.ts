export const educacaoTransporteEscolarCadastroContent: Record<string, string> = {
  "Veículos": `## Inclusão

Cadastre os veículos utilizados no transporte dos estudantes. Preencha os campos conforme a imagem.

[![Cadastro de veículos do transporte escolar](https://e-cidade.wiki.br/educacao/transporte/files/cadastro_de_ve%C3%ADculos_transporte_escolar.png)](https://e-cidade.wiki.br/educacao/transporte/files/cadastro_de_ve%C3%ADculos_transporte_escolar.png)

**Campos**
- **Veículo da Prefeitura:** indique Sim ou Não. Se Sim, será exibido o link **Veículo**; se Não, será exibido o link **Empresa**.
- **Veículo:** disponível quando **Veículo da Prefeitura** for Sim. Selecione um veículo cadastrado no módulo **DB: PATRIMONIAL > Veículos**. Se não estiver na lista, solicite o cadastro ao responsável pelo módulo.
- **Empresa:** disponível quando **Veículo da Prefeitura** for Não. Selecione uma empresa ou pessoa jurídica cadastrada no sistema. Se não estiver na lista, solicite o cadastro no módulo Patrimonial.
- **Tipo de Veículo:** selecione o tipo correspondente.
- **Identificação do Veículo:** informe a placa.
- **Número de Passageiros:** informe a capacidade de passageiros do veículo.

Preencha os campos e clique em **Incluir**.

## Alteração

O sistema exibirá os veículos cadastrados. Selecione o veículo para alterar os dados.

[![Alteração de veículo do transporte escolar](https://e-cidade.wiki.br/educacao/transporte/files/tela_de_altera%C3%A7%C3%A3o_de_ve%C3%ADculo_transporte_escolar.png)](https://e-cidade.wiki.br/educacao/transporte/files/tela_de_altera%C3%A7%C3%A3o_de_ve%C3%ADculo_transporte_escolar.png)`,
  "Pontos de Parada": `## Inclusão

Cadastre os pontos onde os estudantes do município embarcam ou desembarcam. Preencha os campos conforme a imagem.

[![Cadastro de pontos de parada](https://e-cidade.wiki.br/educacao/transporte/files/tela_cadastro_de_pontos_de_paradas.png)](https://e-cidade.wiki.br/educacao/transporte/files/tela_cadastro_de_pontos_de_paradas.png)

**Campos**
- **Descrição:** nome do ponto de parada.
- **Abreviatura:** abreviatura do nome.
- **Logradouro:** selecione uma rua cadastrada na pesquisa.
- **Latitude** e **Longitude:** coordenadas, se disponíveis; campos opcionais.
- **Tipo:** selecione uma das opções:
  - **Departamento:** escola da rede ou outro departamento cadastrado no sistema.
  - **Parada:** qualquer outro tipo de parada.
  - **Escolas de Procedência:** escola fora da rede que não utiliza o sistema.

Após preencher os campos, informe o **Ponto de Referência**, se houver, e clique em **Incluir**.

[![Pesquisa de logradouro para ponto de parada](https://e-cidade.wiki.br/educacao/transporte/files/tela_pesquisa_logradouro_cadastro_de_parada.png)](https://e-cidade.wiki.br/educacao/transporte/files/tela_pesquisa_logradouro_cadastro_de_parada.png)

## Alteração

O sistema exibirá os pontos de parada cadastrados. Selecione a descrição do ponto para abrir e alterar seus dados.

[![Alteração de ponto de parada](https://e-cidade.wiki.br/educacao/transporte/files/tela_alteracao_de_parada.png)](https://e-cidade.wiki.br/educacao/transporte/files/tela_alteracao_de_parada.png)`,
  Linhas: `## Inclusão

Cadastre as linhas e os itinerários usados pelos estudantes para embarque e desembarque. Informe **Nome** e **Abreviatura** da linha e clique em **Incluir**.

[![Cadastro de linha](https://e-cidade.wiki.br/educacao/transporte/files/tela_cadastro_de_linha.png)](https://e-cidade.wiki.br/educacao/transporte/files/tela_cadastro_de_linha.png)

Após incluir a linha, será habilitada a aba **Itinerário**.

### Logradouro

Vincule as ruas dos trajetos de ida e retorno. Selecione **Ida** ou **Retorno** no campo **Itinerário**; clique no link **Logradouro**, selecione a rua na pesquisa e clique em **Adicionar**. Para preencher o retorno com base na ida, clique em **Gerar Retorno Automático**.

[![Itinerário vinculado à linha](https://e-cidade.wiki.br/educacao/transporte/files/Tela_inclus%C3%A3o_de_itiner%C3%A1rio_vinculado_a_linha.png)](https://e-cidade.wiki.br/educacao/transporte/files/Tela_inclus%C3%A3o_de_itiner%C3%A1rio_vinculado_a_linha.png)

### Horários

Cadastre os horários de ida e retorno. Selecione **Ida** ou **Retorno** no campo **Itinerário**, informe as horas de partida e chegada e clique em **Adicionar**.

[![Horários do itinerário da linha](https://e-cidade.wiki.br/educacao/transporte/files/Tela_cadastro_linha_itiner%C3%A1rio_aba_hor%C3%A1rio.png)](https://e-cidade.wiki.br/educacao/transporte/files/Tela_cadastro_linha_itiner%C3%A1rio_aba_hor%C3%A1rio.png)

## Alteração

O sistema exibirá as linhas cadastradas. Selecione a linha para alterar seus dados.

[![Alteração do cadastro de linha](https://e-cidade.wiki.br/educacao/transporte/files/Tela_altera%C3%A7%C3%A3o_do_cadastro_linha_.png)](https://e-cidade.wiki.br/educacao/transporte/files/Tela_altera%C3%A7%C3%A3o_do_cadastro_linha_.png)`,
};
