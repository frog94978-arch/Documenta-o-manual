export const juridicoCadastroContent: Record<string, string> = {
  "Cadastro de Cartório": `
Rotina para cadastrar cartórios de execuções fiscais.

~~~
DB:TRIBUTÁRIO > Jurídico > Cadastros > Cadastro de Cartório
~~~

## Inclusão

- **Sequencial:** preenchido automaticamente ao concluir a inclusão.
- **Descrição:** identificação do cartório.
- **CGM:** código do CGM do cartório.
- **Observação:** informação opcional sobre o cadastro.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_2465993981f00c2b.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_2465993981f00c2b.png)
`,
  Advogados: `
Cadastro dos advogados responsáveis pelos processos da instituição. As petições geradas no sistema devem estar vinculadas a um advogado.

~~~
DB:TRIBUTÁRIO > Jurídico > Cadastros > Advogados
~~~

## Inclusão

- **Código:** CGM do advogado. Campo obrigatório.
- **OAB:** registro do advogado na OAB. Campo obrigatório.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_c7326ae0d835e9dd.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_c7326ae0d835e9dd.png)

## Alteração

Clique em **Pesquisar**, selecione o advogado, altere Código ou OAB e clique em **Alterar**. Para corrigir o nome, faça a alteração no CGM.

## Exclusão

Pesquise e selecione o advogado e clique em **Excluir**. Só é permitido excluir advogados que não estejam vinculados a nenhuma petição.
`,
  Vara: `
Cadastro das varas do foro para controle da distribuição dos processos entre os advogados. A vara é utilizada no cadastro de processos em uma petição.

~~~
DB:TRIBUTÁRIO > Jurídico > Cadastros > Vara
~~~

## Inclusão

**Código:** gerado automaticamente. **Descrição:** nome da vara do foro; campo obrigatório.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_9101bde139c91e79.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_9101bde139c91e79.png)

## Alteração

Clique em **Pesquisar**, selecione a vara, altere a descrição e clique em **Alterar**.

## Exclusão

Pesquise e selecione a vara e clique em **Excluir**. O sistema permite excluir varas sem vínculo com Inicial do Foro.
`,
  Localização: `
Cadastro da localização da comarca do foro à qual a cidade pertence. A localização é usada na inclusão da Inicial do Foro.

~~~
DB:TRIBUTÁRIO > Jurídico > Cadastros > Localização
~~~

## Inclusão

**Código:** gerado automaticamente. **Descrição:** nome da localização da comarca do foro; campo obrigatório.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_75cba898d20aa268.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_75cba898d20aa268.png)

## Alteração

Clique em **Pesquisar**, selecione a localização, altere a descrição e clique em **Alterar**.

## Exclusão

Pesquise e selecione a localização e clique em **Excluir**. O sistema permite excluir localizações sem vínculo com Inicial.
`,
  "Tipo de Petições": `
Cadastro dos tipos de petição para controlar o andamento dos processos no foro. O sistema já traz os tipos Parcelamento e Quitação. Os tipos padrão do sistema não podem ser excluídos.

~~~
DB:TRIBUTÁRIO > Jurídico > Cadastros > Tipo de Petições
~~~

## Inclusão

**Código:** gerado automaticamente. **Descrição:** nome do tipo de petição; campo obrigatório.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_5adbd4f7f373ed.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_5adbd4f7f373ed.png)

## Alteração

Clique em **Pesquisar**, selecione o tipo, altere a descrição e clique em **Alterar**.

## Exclusão

Pesquise e selecione o tipo e clique em **Excluir**. Tipos padrão do sistema não podem ser excluídos.
`,
  "Situação da Inicial": `
Cadastro das fases pelas quais a Inicial do Foro passa na instituição, permitindo ao setor jurídico acompanhar seu andamento na consulta de Inicial. As situações padrão do sistema não podem ser excluídas.

~~~
DB:TRIBUTÁRIO > Jurídico > Cadastros > Situações
~~~

## Inclusão

**Código:** gerado automaticamente. **Descrição:** nome da situação; campo obrigatório.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_52d9ecdbc096daf5.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_52d9ecdbc096daf5.png)

## Alteração

Selecione a situação na lista, altere a descrição e clique em **Alterar**.

## Exclusão

Selecione a situação e clique em **Excluir**. As situações padrão do sistema não podem ser excluídas.
`,
  "Situação Processo do Foro": `
Rotina para cadastrar situações dos Processos do Foro, como Parcelado ou Baixado.

~~~
DB:TRIBUTÁRIO > Jurídico > Cadastros > Situação Processo do Foro
~~~

## Inclusão

Preencha **Descrição** e **Tipo de Movimento** e clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_c7c4fba1c148353d.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_c7c4fba1c148353d.png)

## Alteração

Selecione o registro na lista, faça as alterações e clique em **Alterar**.

## Exclusão

Selecione o registro na lista e clique em **Excluir**.
`,
  Processos: `
Rotina para cadastrar o processo ao qual será vinculado o débito suspenso.

~~~
DB:TRIBUTÁRIO > Jurídico > Cadastros > Processos
~~~

## Inclusão: aba Dados Processo

- **Usuário:** número e nome do usuário que inclui o processo; preenchido automaticamente.
- **Tipo de Processo:** selecione o tipo Administrativo ou Judicial.
- **Descrição:** identificação do processo.
- **Data Inicial / Data Final:** período do processo.
- **Situação:** Ativa ou Finalizada.
- **Protocolo do Processo:** protocolo da solicitação; habilitado para processos Administrativos.
- **Processo do Foro:** código do processo do foro; habilitado para processos Judiciais.
- **Localização / Vara:** localização do processo no foro e vara em que foi distribuído; habilitados para processos Judiciais.
- **Observações:** informação complementar.

Preencha os dados e clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_f0c86969936a523d.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_f0c86969936a523d.png)

Modelo de cadastro de processo Administrativo.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_f0c86969936a523d89.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_f0c86969936a523d89.png)

Modelo de cadastro de processo Judicial.

### Aba Advogados

Disponível somente para processo Judicial. Informe o **Código do CGM que identifica o advogado** ou pesquise pelo link. O campo **Principal** é preenchido automaticamente. Clique em **Incluir**.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_d60de45d1d511eb5.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_d60de45d1d511eb5.png)

## Alteração

Selecione o processo na lista, faça as alterações e clique em **Alterar**.

## Exclusão

Selecione o processo na lista e clique em **Excluir**.
`,
  "Tipo Processo": `
Cadastro dos tipos de processo Administrativo e Judicial. A diferença é que processos Judiciais permitem vínculo com advogados.

~~~
DB:TRIBUTÁRIO > Jurídico > Cadastros > Tipos de Processo
~~~

## Inclusão

- **Tipo de Regra:** selecione Judicial ou Administrativo.
- **Descrição:** identificação do tipo de processo.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_b4e067aafe62f844.jpg)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_b4e067aafe62f844.jpg)

## Alteração

Selecione o tipo na lista, altere a descrição e clique em **Alterar**.

## Exclusão

Selecione o tipo e clique em **Excluir**.
`,
};