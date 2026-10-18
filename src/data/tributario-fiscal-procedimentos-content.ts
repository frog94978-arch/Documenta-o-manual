export const fiscalProcedimentosContent: Record<string, string> = {
  "Alvará Sanitário": `
Rotina para cadastrar e manter estabelecimentos comerciais, industriais, prestadores de serviços e profissionais autônomos sujeitos à inspeção da Vigilância Sanitária.

~~~
DB:TRIBUTÁRIO > Fiscal > Procedimentos > Alvará Sanitário
~~~

## Inclusão: aba Sanitário

- **Alvará Sanitário:** gerado automaticamente.
- **Código Próprio:** numeração paralela da Prefeitura; opcional.
- **Nome/Razão Social:** CGM do contribuinte cadastrado ou pesquisa pelo link.
- **Logradouro / Bairro / Número / Complemento:** endereço do estabelecimento.
- **Data:** data de liberação do Alvará.
- **Observação:** texto opcional impresso no Alvará.
- **Área:** área ocupada pelo estabelecimento; opcional.
- **Inscrição Municipal:** vínculo opcional com o Alvará de Localização, usado para consultar conjuntamente os débitos. Informe o número do Alvará ou da inscrição já cadastrada.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal51.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal51.png)

### Aba Atividades

- **Código do Alvará Sanitário:** preenchido automaticamente.
- **Sequencial:** sequência da atividade.
- **Código da Atividade:** atividade exercida pelo contribuinte; selecione pelo código ou pesquise. Usa as atividades do cadastro de Alvará de Localização.
- **Atividade Principal:** cada Alvará deve ter uma única atividade principal.
- **Tipo de Atividade:** Permanente ou Provisório.
- **Data de Início da Atividade:** obrigatória.
- **Data Final da Atividade:** obrigatória para atividade provisória.
- **Área Liberada:** área usada pela atividade.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal52.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal52.png)

### Aba Responsável Técnico

Informe o CGM do responsável técnico pelo estabelecimento, como engenheiro químico para indústria química ou farmacêutico para drogaria.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal53.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal53.png)

### Aba Cálculo

Clique em **Calcular** para processar a taxa conforme os dados do Alvará.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal54.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal54.png)

## Alteração

Selecione o registro pela lista ou pesquise pelo código ou nome do contribuinte. Os campos do cadastro podem ser alterados.

### Baixa da Atividade

É possível baixar uma atividade ou todas. Se baixar apenas uma, o Alvará permanece ativo, mas a atividade baixada é desconsiderada nos cálculos. Ao baixar todas, o Alvará fica baixado, sem alteração cadastral, impressão ou participação em cálculos.

Informe Alvará, **Data Final**, **Código do Processo**, **Tipo de Baixa** (Normal, por iniciativa do contribuinte, ou Ofício, por iniciativa do fisco) e observações. Selecione as atividades e clique em **Baixar**.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal55.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal55.png)

### Excluir Baixa

Informe ou pesquise o Alvará, selecione as atividades a reativar e clique em **Processar**.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal56.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal56.png)
`,
  "Libera AIDOF": `
Controla as Autorizações para Impressão de Documentos Fiscais (AIDOF) liberadas para cada inscrição, registrando quantidade, sequência, tipo de nota e gráfica. Os dados também ficam disponíveis no cadastro da inscrição do módulo ISSQN e podem ser impressos.

~~~
DB:TRIBUTÁRIO > Fiscal > Procedimentos > Libera AIDOF
~~~

## Inclusão

- **Código:** gerado automaticamente.
- **Tipo da Nota:** tipo de nota fiscal cadastrado no ISSQN.
- **Inscrição:** inscrição municipal vinculada ao Alvará.
- **Código do Processo:** processo de protocolo ou pesquisa pelo link.
- **Data Lançamento:** data de liberação.
- **Nota Inicial:** primeira nota; pode ser sugerida conforme a sequência da última AIDOF do mesmo tipo.
- **Quantidade Solicitada:** quantidade pedida pelo contribuinte.
- **Quantidade Liberada:** quantidade autorizada pela fiscalização; determina a Nota Final.
- **Nota Final:** calculada pela Nota Inicial e quantidade liberada.
- **Código da Gráfica:** gráfica cadastrada que imprimirá as notas.
- **Observação:** texto da fiscalização impresso na AIDOF.

Ao selecionar a inscrição, o sistema alerta sobre débitos em aberto e lista as AIDOFs já liberadas; isso não impede a liberação.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal57.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal57.png)

## Alteração

Selecione a AIDOF na lista para alterar os dados. Só é possível alterar uma AIDOF se não houver liberação posterior para a mesma inscrição e tipo de nota.

## Cancelar

Selecione a AIDOF e informe uma observação. A AIDOF cancelada deixa de participar da sequência numérica das próximas liberações.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal58.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal58.png)

## Descancelar

Selecione a AIDOF e informe uma observação. Ela volta a participar da sequência, desde que ainda não tenha sido lançado um número maior.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal59.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal59.png)
`,
  Andamentos: `
Rotina para registrar andamentos de Autos de Infração, Notificações e Vistorias.

~~~
DB:TRIBUTÁRIO > Fiscal > Procedimentos > Andamentos
~~~

### Auto de Infração

Informe ou pesquise o código do Auto e clique em **Confirmar**.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal60.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal60.png)

Na aba Andamentos, o código do Auto e o código gerado são preenchidos pelo sistema. Informe **Data do Andamento** (por padrão, a data atual), **Código do Tipo de Andamento** e **Observação do Andamento** (obrigatória); a hora é preenchida pelo servidor. Clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal61.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal61.png)

Na aba Fiscais são listados os fiscais do Auto. É possível incluir observação para um fiscal pela operação A e clicar em **Alterar**.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal62.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal62.png)

### Notificações

Informe ou pesquise o código da Notificação.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal63.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal63.png)

Na aba Andamentos, o código da Notificação e o código gerado são preenchidos automaticamente. Informe data, tipo de andamento e observação obrigatória; a hora vem do servidor. Após **Incluir**, a aba Fiscais permite consultar os fiscais vinculados e incluir observações.

### Vistorias

Informe ou pesquise o código da vistoria e clique em **Confirmar**.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal64.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal64.png)

Na aba Andamentos, informe data, tipo e observação obrigatória; código e hora são preenchidos automaticamente. Após incluir, consulte os fiscais vinculados na aba Fiscais.

## Alteração e exclusão

Selecione o andamento na lista para alterar e clique em **Alterar**. Para excluir, selecione o andamento e clique em **Excluir**.
`,
  Levantamento: `
Controla ações fiscais de agentes e auditores para homologação de lançamentos de ISSQN. Registre o faturamento mensal e o imposto recolhido para apurar diferenças e, se necessário, gerar auto de lançamento e inscrever o débito em Dívida Ativa.

~~~
DB:TRIBUTÁRIO > Fiscal > Procedimentos > Levantamento
~~~

## Inclusão

Inicie por uma Inscrição Municipal ou CGM.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal65.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal65.png)

### Aba Levantamento

- **Inscrição Municipal:** inscrição fiscalizada.
- **Levantamento:** código gerado automaticamente.
- **Data do Levantamento:** data de inclusão.
- **Contato:** pessoa responsável pelas informações da empresa.
- **Período de Início / Fim:** período fiscalizado; substitui informações de ISSQN em aberto dentro desse intervalo.
- **Processo:** processo relacionado.
- **Observação:** informações sobre o levantamento.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal66.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal66.png)

### Aba Valores

- **Sequencial:** sequência automática do registro/competência.
- **Exercício/Competência:** ano e mês dentro do período do levantamento; ao incluir, o sistema avança competência e vencimento.
- **Vencimentos:** vencimento da competência.
- **Descrição:** observação sobre o registro.
- **Valor Bruto:** faturamento da competência.
- **Levantamento Espontâneo:** Sim quando iniciado pelo contribuinte; Não quando iniciado pela Prefeitura. Parâmetros podem definir tratamento diferenciado de multa, juros, receita e procedência.
- **Processo Fiscal:** processo para acompanhamento dos andamentos.
- **Saldo a Pagar:** calculado como valor a pagar menos valor pago; corresponde ao débito a lançar.

Clique em **Incluir** para adicionar a competência. Use A para alterar ou E para excluir um registro. Também é possível lançar nota a nota: informe data, número e valor, clique em **Lançar** para cada nota e depois em **Atualizar** para somar os valores brutos. Nesse modo, não é possível informar o Valor Bruto manualmente.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal67.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal67.png)

### Aba Fiscais

Inclua ao menos um fiscal, selecionado pelo código ou link. Observações do fiscal são opcionais.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal68.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal68.png)

## Exportação

Substitui os registros de ISSQN Variável do contribuinte pelas informações do levantamento, inclusive registros com valor bruto zero. Selecione um levantamento ainda não exportado. Após exportar, não será possível alterá-lo ou excluí-lo; cancele a exportação antes de corrigir e exportar novamente.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal69.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal69.png)

## Cancela Exportação

Só é possível cancelar se nenhum débito tiver sido pago ou cancelado. Após cancelar, os registros de ISSQN Variável retornam à situação anterior na CGF e reaparecem no levantamento.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal70.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal70.png)
`,
  Notificações: `
A notificação comunica ao contribuinte o descumprimento de obrigação acessória e concede prazo para regularização. Se as exigências não forem atendidas, pode ser convertida em Auto de Infração.

~~~
DB:TRIBUTÁRIO > Fiscal > Procedimentos > Notificações
~~~

A notificação pode ser lançada para CGM, Inscrição Municipal, Matrícula, Alvará Sanitário ou Vistoria. Selecione a origem e informe ou pesquise o código.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal71.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal71.png)

### Aba Notificação

- **Código da Notificação:** gerado automaticamente.
- **Número do Bloco:** número do talonário, quando usado.
- **Prazo Para Recurso:** prazo concedido para regularização.
- **Data / Hora da Notificação:** data e hora em que o contribuinte foi notificado.
- **Observação da Notificação:** comentário que pode ser configurado para impressão.
- **Código do Departamento:** preenchido pelo departamento do usuário.
- **Nome da Pessoa Notificada:** pessoa que recebeu a notificação; inicialmente sugere o nome da origem e pode ser alterado.
- **Processo Fiscal:** processo usado para acompanhar os andamentos.
- **Endereço Registrado:** endereço cadastral, não editável nesta inclusão.
- **Endereço Localizado:** endereço onde a pessoa foi encontrada; inicialmente sugerido pelo cadastro, mas editável.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal72.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal72.png)

### Aba Procedência

O código da Notificação é preenchido automaticamente. Informe ou selecione o **Código da Procedência**, que identifica a infração constatada.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal73.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal73.png)

### Aba Receita

Disponível quando a procedência tem receita cadastrada. É possível alterar ou excluir a receita existente ou incluir **Receita**, **Descrição do Lançamento da Receita** e **Valor da Receita**.

### Aba Fiscais

Informe o código do fiscal ou pesquise pelo link; observações do fiscal são opcionais.

### Aba Testemunhas

Opcionalmente, inclua uma ou mais testemunhas cadastradas no CGM.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal74.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal74.png)

### Aba Artigos

Selecione os artigos ou parágrafos cadastrados em Configuração > Procedimentos > Manutenção de Documentos / Parágrafos.

### Aba Vencimento

Informe a data de vencimento da notificação e clique em **Salvar**.
`,
  "Auto de Infração": `
Registra a penalidade por descumprimento de obrigações tributárias acessórias ou outros deveres, gera o débito com prazo de pagamento e controla reincidências.

~~~
DB:TRIBUTÁRIO > Fiscal > Procedimentos > Auto de Infração
~~~

O Auto pode ser iniciado por CGM, Matrícula, Inscrição Municipal, Alvará Sanitário ou código de Notificação.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal75.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal75.png)

### Aba Auto de Infração

- **Código:** gerado automaticamente.
- **Número do Bloco:** número do talonário, quando usado.
- **Data / Hora:** momento da autuação.
- **Tipo de Fiscalização:** área da fiscalização, como tributária, sanitária ou posturas.
- **Observação do auto:** comentário que pode ser configurado para impressão.
- **Código do Departamento:** preenchido pelo departamento do usuário.
- **Nome da Pessoa Autuada:** pessoa que recebeu o auto no estabelecimento.
- **Data do Vencimento Atualizada:** vencimento do débito gerado.
- **Prazo Para Recurso:** prazo para recurso administrativo.
- **Processo Fiscal:** processo de acompanhamento.
- **Endereço Registrado:** endereço cadastral, não editável nesta inclusão.
- **Endereço Localizado:** endereço onde a pessoa foi encontrada; pode ser alterado.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal76.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal76.png)

### Aba Procedência

Selecione uma ou mais procedências para indicar as infrações. Se o contribuinte já tiver sido autuado pela mesma procedência, o sistema alerta sobre reincidência.

- **Valor:** valor previsto para a infração; preenchido pelo cadastro da procedência quando disponível.
- **Tipo de Correção:** sem alteração, acréscimo ou redução.
- **Fator:** quantidade de vezes que a correção será aplicada. Exemplo: multa de R$ 500,00 com acréscimo fator 2 resulta em R$ 1.000,00.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal77.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal77.png)

### Aba Fiscais e Testemunhas

Informe o fiscal responsável e, opcionalmente, observações. Testemunhas devem estar cadastradas no CGM e podem ser adicionadas opcionalmente.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal78.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal78.png)

### Aba Cálculo

Gera o débito pela soma dos valores das procedências, com vencimento informado na aba Auto de Infração. Consulte o lançamento na CGF usando a mesma origem (CGM, Inscrição, Matrícula etc.).

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal79.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal79.png)

## Alteração

Selecione o Auto pelo código ou pela lista. Todos os campos podem ser alterados, exceto o contribuinte. Se o débito já foi pago, não é possível alterar; se ainda estiver aberto, recalcule para aplicar os dados atualizados.

### Baixa

Selecione o Auto e informe **Código do processo** do recurso e a data da **Baixa**. Selecione as procedências que serão baixadas e clique em **Baixar**. A baixa pode ser parcial ou total. Para reativar um Auto baixado, use a opção **Cancelar**.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal80.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal80.png)
`,
  "Auto de Lançamento": `
Emite o Auto de Lançamento de um Levantamento Fiscal, combinando os dados registrados no levantamento com o texto configurável que notifica o contribuinte do débito apurado.

~~~
DB:TRIBUTÁRIO > Fiscal > Procedimentos > Auto de Lançamento
~~~

Informe o número do Levantamento ou selecione o registro na lista.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal81.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal81.png)

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal82.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal82.png)
`,
  Vistorias: `
A Taxa de Fiscalização e Vistoria é cobrada pelo exercício do poder de polícia e pela inspeção de estabelecimentos para verificar os requisitos de concessão do Alvará. Pode atender vistorias de localização e sanitárias.

~~~
DB:TRIBUTÁRIO > Fiscal > Procedimentos > Fiscalização/Vistorias
~~~

Há duas formas de lançamento: **Vistoria parcial**, registrada caso a caso com data, tipo e fiscal, ou **Vistoria geral**, que calcula e lança para inscrições conforme classe e atividade.

## Inclusão parcial

Escolha a origem da vistoria e informe o identificador correspondente:

- **CGM:** código do contribuinte.
- **Inscrição:** número da Inscrição Municipal.
- **Matrícula:** matrícula do imóvel.
- **Sanitário:** número do Alvará Sanitário.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal83.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal83.png)

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal84.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal84.png)

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal85.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal85.png)

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal86.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal86.png)

### Aba Vistorias

- **Código:** gerado automaticamente.
- **Número do Bloco:** número do termo de vistoria.
- **Data:** data e hora da vistoria.
- **Observação:** comentários sobre a vistoria.
- **Contato:** pessoa que assinou o termo no local.
- **Código Tipo de Vistoria:** selecione um tipo disponível para o departamento do usuário.
- **Processo Fiscal:** processo para acompanhar os andamentos.
- **Endereço Registrado:** endereço cadastral, não editável.
- **Endereço Localizado:** local onde o vistoriado foi encontrado; pode ser alterado.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal87.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal87.png)

### Aba Fiscais, Testemunhas e Cálculo

Na aba Fiscais, inclua os fiscais envolvidos e observações. Testemunhas cadastradas no CGM são opcionais. Na aba Cálculo, gere o débito da taxa configurada para a atividade; consulte-o na CGF pela mesma origem usada na inclusão.

## Alteração

Selecione a vistoria. É possível alterar os campos, exceto o contribuinte. Se a alteração afetar a taxa, gere novamente o cálculo. Não é possível recalcular se a taxa já foi paga. O sistema alerta se já houver vistoria no exercício.

## Anulação

Selecione a vistoria, informe o motivo e clique em **Incluir**. Só é possível anular quando a taxa não foi paga; se já foi paga, estorne a arrecadação antes.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal88.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal88.png)
`,
  "Vistoria (Geral)": `
Gera vistorias em lote para inscrições com atividades vinculadas a taxas de vistoria e às classes selecionadas. Também pode gerar vistorias de uma inscrição para um intervalo de exercícios.

~~~
DB:TRIBUTÁRIO > Fiscal > Procedimentos > Fiscalização/Vistoria (Geral)
~~~

Para gerar para inscrição e intervalo de exercícios, o parâmetro **Calcula vistorias para anos anteriores** deve estar como Sim.

- **Inscrição:** opcional; informe para restringir a uma inscrição.
- **Anos de cálculo:** intervalo disponível após informar a inscrição.
- **Gerar Vistoria já calculada no exercício:** define se inclui inscrições que já têm vistoria no exercício.
- **Origem:** Localização ou Sanitária.
- **Tipo de Vistoria:** selecione um tipo cadastrado.
- **Classes:** selecione as classes cujas inscrições serão incluídas. Não se aplica quando foi informada uma única inscrição.

O vencimento é formado pelo dia e mês configurados no Tipo de Vistoria e pelo ano do lançamento. Exemplo: dia 30 e mês março, em lançamento de 2008, gera vencimento em 30/03/2008.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal89.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal89.png)
`,
  "ISSQN Variavel": `
Importa para Dívida Ativa débitos de ISSQN Variável com valores lançados. Débitos sem valor não podem ser exportados. A procedência usada é definida em ISSQN > Cadastros > Configuração de Cálculo ISSQN, no campo Código da Procedência.

~~~
DB:TRIBUTÁRIO > Fiscal > Procedimentos > ISSQN Variável
~~~

Informe CGM ou Inscrição e pesquise. Preencha somente um dos campos por importação.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal90.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal90.png)
`,
  Parâmetros: `
Permite manter configurações usadas pelos procedimentos fiscais, incluindo débitos, históricos, processos, receitas, procedências, Alvará Sanitário e cálculos de Vistoria.

~~~
DB:TRIBUTÁRIO > Fiscal > Procedimentos > Parâmetros
~~~

Configure Tipo de Débito, Histórico do Cálculo, Tipo de Processo de Protocolo, Receita, Código da Procedência, impressão de datas e observações do Alvará Sanitário, Código de Atividade do Alvará e Observação do Lançamento. Também selecione os modelos de Alvará e AIDOF e a fórmula de cálculo das vistorias.

- **Controla Sanitário por Depto.:** Sim restringe visualização e alteração de registros ao departamento da sessão; Não permite acesso entre departamentos.
- **Permite baixa de sanitário com dívida:** Sim permite baixar o Alvará Sanitário mesmo com débitos.
- **Calcula vistorias para anos anteriores:** Sim habilita vistorias de exercícios anteriores.
- **Processo Baixa de Auto de Infração:** Sim exige o código do processo ao registrar a baixa; Não o torna opcional.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal91.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal91.png)
`,
  "Processo Fiscal": `
Rotina para cadastrar e acompanhar o Processo Fiscal associado à infração do notificado. Para manutenção e acompanhamento, o usuário deve estar no mesmo departamento que incluiu o processo.

~~~
DB:TRIBUTÁRIO > Fiscal > Procedimentos > Processo Fiscal
~~~

## Inclusão: aba Processo Fiscal

Localize o processo por CGM/Nome, Matrícula, Inscrição ou Alvará Sanitário. Informe:

- **Tipo de Processo Fiscal:** tipo de processo a incluir.
- **Data Inicial / Data Final:** período do processo.
- **Observações:** informações complementares.
- **Processo de Protocolo:** número do processo de protocolo.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal92.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal92.png)

### Aba Fiscal

Lista somente os fiscais vinculados ao departamento do usuário.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal93.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal93.png)
`,
};