export const saudeFarmaciaCadastroContent: Record<string, string> = {
  Medicamentos: `Este cadastro consiste em vincular os itens do módulo materiais com os medicamentos do módulo farmacia e fazer a classificação dos medicamentos, conforme o seu princípio ativo, sendo esta somente as classificações analíticas do cadastro.

\`\`\`
DB: Farmácia > Cadastros > Medicamentos
\`\`\`

### Inserir

**Código:** O código do medicamento será gerado automaticamente e corresponde ao código do item que está sendo incluído.
**Nome Genérico:** Neste campo deve ser digitado o nome genérico do medicamento a ser cadastrado.
**Medicamento:** Neste campo deve ser digitado o código do medicamento a ser cadastrado. Esse é o código cadastrado no módulo material. Ou pode-se clicar no link e fazer a pesquisa pelo nome.
**Medicamento Anvisa:** Neste campo vinculamos o medicamento a ser cadastrado a um medicamento da Anvisa. (Usado para medicamentos controlados/continuados).
**Prescrição Médica:** Neste campo selecionamos a prescrição médica do medicamento. (Usado para medicamentos controlados/continuados).
**Classe Terapêutica:** Neste campo selecionamos a classe terapêutica do medicamento. (Usado para medicamentos controlados/continuados).
**Lista Controlados:** Neste campo selecionamos o medicamento para uma lista de controlados. (Usado para medicamentos controlados/continuados).
**Medicamentos Referência:** Neste campo selecionamos o medicamento de referência do medicamento a ser cadastrado. (Usado para medicamentos controlados/continuados).
**Laboratório:** Neste campo vinculamos o medicamento a um laboratório. (Usado para medicamentos controlados/continuados).
**Forma Farmacêutica:** Neste campo vinculamos o medicamento a uma forma farmacêutica.(Usado para medicamentos controlados/continuados).
**Concentração:** Neste campo vinculamos o medicamento a uma concentração. (Usado para medicamentos controlados/continuados).
**Classificação:** Neste campo vinculamos o medicamento a uma classificação.
**Observação:** Neste campo pode-se descrever uma observação
**Farmacia Basica:** Neste campo vinculamos o código de produtos CATMAT da assistência farmacêutica do ministério da saúde.

[![](https://e-cidade.wiki.br/saude/farmacia/files/11.png)](https://e-cidade.wiki.br/saude/farmacia/files/11.png)

### Alteração

Na alteração do cadastro de medicamento não pode ser alterado o item do material, caso o medicamento possua uma saída do estoque. O campo de classificação não possui nenhuma restrição, igualmente o de observação.

### Exclusão

Na exclusão não poderá ser excluído nenhum medicamento que possuir alguma movimentação no sistema.`,
  Classificação: `Este cadastro consiste em montar a estrutura da classificação dos medicamentos. Permitindo o farmacêutico fazer uma classificação específica para a farmácia, tendo um melhor controle dos medicamentos.

\`\`\`
DB: Farmácia > Cadastros > Classificação
\`\`\`

### Inclusão

**Código:** O código de classificação será gerado automaticamente e corresponde ao código do item que está sendo incluído.
**Máscara:** Este campo busca automaticamente o estrutural cadastrado nos parâmetros do módulo farmácia.
**Classificação:** Colocar o código estrutural da classificação do medicamento. Neste caso, se a máscara for (00.00), então a primeira classificação sintética seria (01.00). O sistema não permite cadastrar um analítico que não possua uma classificação sintética.
**Tipo:** Este campo deve ser selecionado o tipo de acordo com o código da classificação acima, caso o código for 01,00 será do tipo sintético, mas se for 01,04 é analítico.
**Descrição:** Colocar o nome da classificação para sua identificação, campo obrigatório.
Observação: Este campo é para o usuário digitar alguma observação sobre classificação. (Não obrigatório).

[![](https://e-cidade.wiki.br/saude/farmacia/files/im4.png)](https://e-cidade.wiki.br/saude/farmacia/files/im4.png)

### Alteração

Na alteração do cadastro de classificação não pode ser alterado o estrutural se existir um medicamento vinculado a essa classificação. Caso não esteja vinculado pode ser alterada sua estrutura.

[![](https://e-cidade.wiki.br/saude/farmacia/files/im5.png)](https://e-cidade.wiki.br/saude/farmacia/files/im5.png)

### Exclusão

Na exclusão não poderá ser excluída nenhuma classificação que possuir alguma vinculada ao cadastro de medicamentos.`,
  "Tipo Receita": `Este cadastro consiste em configurar todos os tipos de receita que a farmácia pode receber na entrega dos medicamentos. O tipo de receita permite ao farmacêutico configurar quais campos serão obrigatórios na distribuição dos medicamentos e quantas vias será o recibo de entrega do paciente.

\`\`\`
DB: Farmácia > Cadastros > Tipo de Receita
\`\`\`

### Inclusão

**Código:** O código do tipo de receita será gerado automaticamente e corresponde ao código do item que está sendo incluído.
**Descrição:** Colocar o nome do tipo de receita para sua identificação, campo obrigatório.
**Profissional:** Este campo permite selecionar SIM para tornar o campo Profissional do procedimento Entrega de Medicamento obrigatório.
**Posologia:** Este campo permite selecionar SIM para tornar o campo Posologia do procedimento Entrega de Medicamento obrigatório.
**Requisitante:** Este campo permite selecionar SIM para tornar os campos do requisitante do procedimento Entrega de Medicamento obrigatório. Neste caso o CGM do requisitante, que deve estar com o endereço e identidade preenchidos.
**Número da Receita:** Este campo permite selecionar SIM para tornar o campo Número da Receita do procedimento Entrega de Medicamento obrigatório.
**Vias do Recibo:** Colocar a quantidade de vias do recibo de entrega.

[![](https://e-cidade.wiki.br/saude/farmacia/files/im6.png)](https://e-cidade.wiki.br/saude/farmacia/files/im6.png)

### Alteração

Na alteração do cadastro de tipo de receita pode ser alterado qualquer um dos parâmetros que estão no cadastro.

[![](https://e-cidade.wiki.br/saude/farmacia/files/im7.png)](https://e-cidade.wiki.br/saude/farmacia/files/im7.png)

### Exclusão

Na exclusão não poderá ser excluído nenhum tipo de receita que possuir alguma saída de medicamento do sistema.`,
  "Ações Programaticas": `Este cadastro consiste em cadastrar os programas de saúde em qual os pacientes serão vinculados no cadastro de Medicamentos Controlados.

\`\`\`
DB: Farmácia > Ações Programáticas > Medicamentos
\`\`\`

### Inclusão

**Código:** O código de programa será gerado automaticamente e corresponde ao código do item que está sendo incluído.
**Descrição:** Colocar o nome do programa para sua identificação, campo obrigatório.
**Tipo:** Este campo identifica a que esfera da administração este programa pertence, como: (Federal, Estadual, Municipal, Particular e Outros).

[![](https://e-cidade.wiki.br/saude/farmacia/files/im8.png)](https://e-cidade.wiki.br/saude/farmacia/files/im8.png)

### Alteração

Na alteração do cadastro de programas pode ser alterado todos os campos. Neste caso, altera os dados no cadastro de controlados.

### Exclusão

Na exclusão não poderá ser excluído nenhum programa que tenha vínculo com o cadastro de controlados.`,
  "Farmacêutico": `Este cadastro consiste em especificar o farmacêutico responsável.

\`\`\`
DB: Farmácia > Cadastros > Farmacêutico
\`\`\``,
  "Farmácia": `Esse cadastro consiste em especificar os dados da farmácia.

\`\`\`
DB: Farmácia > Cadastros > Farmácia
\`\`\``,
};
