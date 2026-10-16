import { useState } from "react";
import { getSubmoduleById } from "@/data/submodules";
import { DropletIcon, BanknoteIcon, UserPlusIcon, CrossIcon, GiftIcon, LayoutGridIcon, ScaleIcon, ReceiptTextIcon, TrendingUpIcon, BuildingIcon, HomeIcon, GavelIcon, CopyrightIcon, LeafIcon, BellIcon, ConstructionIcon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/test/ui/button";
import MarkdownContent from "@/components/test/MarkdownContent";
import { arrecadacaoCadastroContent } from "@/data/tributario-arrecadacao-cadastro-content";
import { arrecadacaoProcedimentosContent } from "@/data/tributario-arrecadacao-procedimentos-content";
import { tributarioCadastroContent } from "@/data/tributario-cadastro-content";
import { cemiterioCadastroContent } from "@/data/tributario-cemiterio-cadastro-content";
import { cemiterioProcedimentosContent } from "@/data/tributario-cemiterio-procedimentos-content";
import { contribuicaoCadastroContent } from "@/data/tributario-contribuicao-cadastro-content";
import { diversosCadastroContent } from "@/data/tributario-diversos-cadastro-content";
import { dividaAtivaCadastroContent } from "@/data/tributario-divida-ativa-cadastro-content";
import { fiscalCadastroContent } from "@/data/tributario-fiscal-cadastro-content";
import { inflatoresCadastroContent } from "@/data/tributario-inflatores-cadastro-content";
import { inflatoresProcedimentosContent } from "@/data/tributario-inflatores-procedimentos-content";
import { itbiCadastroContent } from "@/data/tributario-itbi-cadastro-content";
import { itbiProcedimentosContent } from "@/data/tributario-itbi-procedimentos-content";
import { juridicoCadastroContent } from "@/data/tributario-juridico-cadastro-content";
import { issqnCadastroContent } from "@/data/tributario-issqn-cadastro-content";
import { meioAmbienteCadastroContent } from "@/data/tributario-meio-ambiente-cadastro-content";
import { meioAmbienteProcedimentosContent } from "@/data/tributario-meio-ambiente-procedimentos-content";
import { notificacoesCadastroContent } from "@/data/tributario-notificacoes-cadastro-content";
import { projetosCadastroContent } from "@/data/tributario-projetos-cadastro-content";
import { aguaProcedimentosContent } from "@/data/tributario-agua-procedimentos-content";

interface TributarioTabsProps {
  selectedSubmodule: string | null;
  setSelectedSubmodule: (submodule: string | null) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedFinalSection: string | null; // NEW PROP
  setSelectedFinalSection: (section: string | null) => void; // NEW PROP
}

const arrecadacaoConsultaContent: Record<string, string> = {
  "Numpre/Numbanco": `
Nesta rotina é possível consultar débitos através do Numpre e do Numbanco.

~~~
DB:TRIBUTÁRIO > Arrecadação > Consultas > Numpre/Numbanco
~~~

**Numpre:** código de arrecadação do débito.

**Numbanco:** código que vincula os dados bancários do recibo ao Numpre a ser quitado.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_fa825711d4b12551.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_fa825711d4b12551.png)

### Descrição dos campos

**Numpre:** informe o código do Numpre que deseja pesquisar.

**Parcela:** informe o número da parcela do Numpre pesquisado. Para utilizar este campo, também é necessário informar o Numpre.

**Numbanco:** informe o código do Numbanco a pesquisar. Esse código pode ser encontrado no arquivo TXT de baixa de banco ou, ao emitir um recibo do tipo ficha de compensação, no campo Nosso Número.

Após informar um dos campos, clique em **Pesquisar**.

### Consulta por Numbanco

Se a consulta for feita pelo Numbanco, será aberta uma tela com as seguintes informações:

**MI:** ao clicar neste link, será aberta uma página com Numpre, Parcela, Data de Operação, Valor, Vencimento, Total de Parcelas, Receita, Numcgm, Histórico, Tipo de Débitos, Dígito e Tipo de Juro e Multa, conforme a figura 110 B.

**Numpre:** Numpre vinculado ao Numbanco consultado.

**Parcela:** número das parcelas dos Numpre vinculados ao Numbanco.

**Código do Banco:** código do banco vinculado ao convênio utilizado na emissão do recibo.

**Número Banco:** código do Numbanco consultado.

**Número Banco Anterior:** Numbanco anterior ao consultado, se houver.

Ao final da tela, é exibido o total de registros retornados na consulta.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_d1e838826a9af659.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_d1e838826a9af659.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_fadc8281ff52b099.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_fadc8281ff52b099.png)

### Consulta por Numpre e Parcela

Se a consulta for feita pelos campos Numpre e Parcela, será aberta uma tela com as seguintes informações:

**MI:** ao clicar neste link, será aberta uma página com Numpre, Parcela, Data de Operação, Valor, Vencimento, Total de Parcelas, Receita, Numcgm, Histórico, Tipo de Débitos, Dígito e Tipo de Juro e Multa.

**Numpre:** Numpre vinculado ao Numbanco consultado.

**Parcela:** número das parcelas dos Numpre vinculados ao Numbanco.

**Receita:** código e descrição da receita vinculada ao Numpre consultado.

**CGM:** código do CGM vinculado ao Numpre consultado.

**Dt. Operação:** data de criação do Numpre.

**Valor:** valor histórico do Numpre.

**Vencimento:** data de vencimento do Numpre.

**Tipo Débito:** código e descrição do tipo de débito do Numpre.

**Movimentação:** situação do Numpre consultado.

Ao clicar no link na parte superior da tela, será possível selecionar outros campos para a consulta: Histórico, Total de Parcelas e Dígito.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_a93002e8cac45071.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_a93002e8cac45071.png)

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_6f7541622fc9a642.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_6f7541622fc9a642.png)
`,
  "Declaração de Quitação Anual": `
O sistema permite consultar as Certidões de Quitação e reemitir uma certidão.

~~~
DB:TRIBUTÁRIO > Arrecadação > Consultas > Declaração de Quitação Anual
~~~

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_314966c2b7d8421c.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_314966c2b7d8421c.png)

**Tipo Origem:** realiza a pesquisa das declarações emitidas por Matrícula, Inscrição, CGM Geral ou somente CGM.

Após pesquisar, será exibida uma lista de declarações para o contribuinte selecionado, de acordo com o tipo escolhido. Para consultar a declaração, clique no número exibido na coluna **Declaração**. A tela apresentará os débitos e os dados para identificá-los, além de uma opção para reimprimir a certidão.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_7b191da99933538b.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_7b191da99933538b.png)
`,
  "Consulta Parcelamentos": `
Nesta rotina é possível consultar os dados de um parcelamento, como origem, parcelas, exercícios e envolvidos.

~~~
DB:TRIBUTÁRIO > Arrecadação > Consultas > Consulta Parcelamentos
~~~

A pesquisa pode ser realizada pelo CGM, Matrícula, Inscrição ou número do parcelamento:

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_1bae39695527193c.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_1bae39695527193c.png)

Após informar os dados da consulta, o sistema abrirá uma tela com quatro abas:

## Aba Origem

Mostra a origem do parcelamento, ou seja, o tipo de débito que o gerou.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_e4e5aa73bd0c1d4f.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_e4e5aa73bd0c1d4f.png)

## Aba Parcela

Mostra os detalhes das parcelas do parcelamento.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_35c54615301a9710.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_35c54615301a9710.png)

## Aba Exercícios

Mostra detalhes sobre os exercícios dos débitos contidos no parcelamento.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_e70cd1426bcc499b.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_e70cd1426bcc499b.png)

## Aba Envolvidos

Mostra os envolvidos no parcelamento, incluindo CGM, Matrícula ou Inscrição e a respectiva Razão Social.

[![](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_317fc67230dc7b9e.png)](https://e-cidade.wiki.br/tributario/arrecadacao/files/Manual_Arrecadacao_html_317fc67230dc7b9e.png)
`,
};

const cadastroConsultaContent: Record<string, string> = {
  "Cadastro Técnico Municipal": `
~~~
DB:TRIBUTÁRIO > Cadastro > Consultas > Cadastro Técnico Municipal
~~~

Nesta opção é possível consultar o cadastro de uma matrícula informando um dos campos abaixo:

**Matrícula do Imóvel:** informe diretamente o número da matrícula que deseja consultar.

**Cód. Condomínio:** informe diretamente o código do condomínio.

**Cód. Loteamento:** informe diretamente o código do loteamento.

**Nome / Razão Social:** informe o nome do proprietário do imóvel. Será apresentada uma relação com todas as matrículas desse proprietário.

**Imobiliárias:** informe o nome da imobiliária. Será apresentada uma lista com todas as matrículas vinculadas a ela.

**Setor / Quadra / Lote:** informe o setor, a quadra e o lote do imóvel para listar as matrículas vinculadas. Caso exista somente uma matrícula vinculada ao lote, o sistema abrirá diretamente a consulta do imóvel. Também é possível informar apenas um desses campos para listar os imóveis que possuem a informação pesquisada.

**Cód Logradouro:** informe o código do logradouro para listar as matrículas dos imóveis localizados nele.

**Logradouro:** pesquisa equivalente à realizada pelo código do logradouro, informando o nome do logradouro.

**Cód do Bairro:** informe o código do bairro para listar as matrículas dos imóveis vinculados a ele.

**Bairro:** pesquisa equivalente à realizada pelo código do bairro, informando o nome do bairro.

Os campos a seguir só permitem pesquisa quando essas informações constam no cadastro do imóvel:

**Matrícula do Registro de Imóveis:** informe o código da matrícula junto ao Registro de Imóveis.

**Registro de Imóveis:** informe a comarca do Registro de Imóveis para listar os imóveis registrados nesse cartório.

**Quadra do Registro de Imóveis:** informe a quadra do Registro de Imóveis para listar os imóveis vinculados a ela.

**Lote do Registro de Imóveis:** informe o lote do Registro de Imóveis para listar os imóveis vinculados a ele. Os campos de quadra e lote podem ser usados em conjunto para restringir a lista.

Após informar a chave de pesquisa, clique em **Pesquisar**. A demonstração a seguir apresenta uma consulta pelo número da matrícula.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros29.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros29.png)

Ao acessar a consulta do imóvel desejado, serão apresentadas as informações cadastrais, de transferência (averbação) e dos cálculos de IPTU realizados ao longo dos anos. As informações da matrícula são organizadas para facilitar a visualização:

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros30.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros30.png)

Na parte superior são exibidos os dados cadastrais, como proprietário, promitente (se houver), referência anterior, imobiliária, zona e setor fiscal, setor, quadra, lote, áreas do lote e construída, logradouro, loteamento e bairro.

Na parte inferior ficam disponíveis links para outras informações do imóvel:

- **Características do imóvel:** características relativas ao lote.
- **Isenções:** isenções lançadas para o imóvel, quando houver.
- **Construções ativas:** construções existentes que não foram demolidas; demolições parciais também são apresentadas aqui.
- **Construções demolidas:** construções totalmente demolidas que existiram sobre o imóvel.
- **Construções escrituradas:** construções lançadas na aba Construções Escrituradas da rotina de manutenção de matrículas.
- **Testada principal/secundária:** logradouros para os quais o imóvel faz divisa.
- **Testadas internas:** confrontações do imóvel que não são com logradouros.
- **Demonstrativo do cálculo:** permite selecionar um ano e visualizar as variáveis consideradas no cálculo do IPTU e das taxas.
- **Endereço de entrega:** endereço de entrega registrado para a matrícula.
- **Outros proprietários:** outros proprietários da matrícula, quando houver.
- **Promitentes compradores:** promitentes (possuidores) da matrícula, quando houver.
- **Averbação:** registros de averbação da matrícula, permitindo consultar antigos proprietários.
- **Cálculo:** cálculos anuais de IPTU e taxas da matrícula.
- **Outros dados:** observações da aba Matrícula da rotina de manutenção de matrículas.
- **Imprime BIC completa:** imprime o Boletim de Informações Cadastrais com os dados cadastrais e informações do cálculo do IPTU do ano atual.
- **Imprime BIC resumida:** imprime os dados cadastrais sem as informações do cálculo do IPTU.
- **Imprimir BIC - Modelo Novo:** permite selecionar quais dados serão listados, por exemplo, emitir a BIC sem as características do lote.

No modelo completo, podem ser listados dados do imóvel, características do lote e da face, características das construções, testadas do lote e internas, proprietários e promitentes, imobiliária, endereço de entrega, edificações, dados do Registro de Imóveis, isenções, averbações e cálculos (quando selecionados). Selecione as informações desejadas e clique em **Imprimir**.

No modelo resumido, podem ser listados dados do imóvel, características do lote e da face, características das construções, testadas do lote, proprietários e promitentes, imobiliária, endereço de entrega e edificações. Selecione as informações desejadas e clique em **Imprimir**.

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros31.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros31.png)

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros32.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros32.png)

Modelo de tela de emissão da BIC - Modelo Novo, tipo Completa:

[![](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros33.png)](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros33.png)
`,
  ITBI: `
Nesta consulta são apresentados dados do ITBI. A descrição detalhada está no manual do módulo ITBI.

~~~
DB:TRIBUTÁRIO > Cadastro > Consultas > ITBI
~~~

![Tela de consulta de ITBI](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros34.png)

Tela - Tipo de ITBI: Urbana

![Consulta de ITBI urbano](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros35.png)

Tela - Tipo de ITBI: Rural

![Consulta de ITBI rural](https://e-cidade.wiki.br/tributario/cadastro/files/ManualDosCadastros36.png)

Tela da consulta do ITBI.
`,
};

const cemiterioConsultaContent: Record<string, string> = {
  Sepultamentos: `
Consulta os dados do sepultamento, como cemitério, certidão de óbito, localização e débitos. Informe o código do sepultamento ou clique no link para pesquisar.

~~~
DB:TRIBUTÁRIO > Cemitério > Consultas > Sepultamentos
~~~

### Aba Sepultamento

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3ed32b7956aac6a000.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3ed32b7956aac6a000.png)

### Aba Certidão de Óbito

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3ed32b7956aac6a0007.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3ed32b7956aac6a0007.png)

### Aba Localização

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3ed32b7956aac6a00078.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3ed32b7956aac6a00078.png)
`,
  "Ossários / Jazigos": `
Consulta os ossários/jazigos, os sepultamentos neles contidos e as taxas em aberto. Clique no link para pesquisar o ossário/jazigo ou o proprietário.

~~~
DB:TRIBUTÁRIO > Cemitério > Consultas > Ossários / Jazigos
~~~

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3ed32b7956aac6a78.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3ed32b7956aac6a78.png)

### Aba Proprietário

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3ed32b7956aac6a00099.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3ed32b7956aac6a00099.png)

### Aba Jazigo

[![](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3ed32b7956.png)](https://e-cidade.wiki.br/tributario/cemiterio/files/Manual_Cemiterio_html_3ed32b7956.png)
`,
};

const contribuicaoConsultaContent: Record<string, string> = {
  "Consulta de Contribuição": `
Na consulta da Contribuição de Melhoria é possível verificar os dados da contribuição por matrícula envolvida, conforme a figura abaixo.

~~~
DB:TRIBUTÁRIO > Contribuição > Consultas > Consulta de Contribuição
~~~

[![](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_e03240975191a0f9.png)](https://e-cidade.wiki.br/tributario/contribuicao/files/Manual_Contribuicao_de_Melhoria_html_e03240975191a0f9.png)
`,
};

const diversosConsultaContent: Record<string, string> = {
  Diversos: `
Para consultar registros de diversos, informe uma chave de pesquisa.

~~~
DB:TRIBUTÁRIO > Diversos > Consultas > Diversos
~~~

**Código do Diverso:** informe o código do registro ou clique no link para selecioná-lo em uma lista. Os dados do registro serão apresentados.

**Numcgm:** informe o código do CGM ou clique no link para pesquisar pelo nome do contribuinte. Será apresentada uma lista com todos os registros de diversos lançados para o CGM informado. Clique no item desejado para visualizar a consulta.

**Matrícula do Imóvel:** informe o código da matrícula ou clique no link “Matrícula do Imóvel” para pesquisar pelo nome do proprietário, setor, quadra, lote etc. Será apresentada uma lista com todos os registros de diversos lançados para a matrícula informada. Clique no item desejado para visualizar a consulta.

**Inscrição Municipal:** informe o código da inscrição ou clique no link “Inscrição Municipal” para pesquisar pelo nome da empresa ou do profissional autônomo. Será apresentada uma lista com todos os registros de diversos lançados para a inscrição informada. Clique no item desejado para visualizar a consulta.

**Procedência:** informe o código da procedência ou clique no link para pesquisar pela descrição. Após clicar em **Pesquisar**, será apresentada uma lista com todos os registros de diversos lançados na procedência indicada. Clique no item desejado para visualizar a consulta.

**Data:** informe o intervalo de datas desejado. Após clicar em **Pesquisar**, será apresentada uma lista com todos os registros de diversos cuja data de inscrição esteja dentro do período informado. Clique no item desejado para visualizar a consulta.

[![](https://e-cidade.wiki.br/tributario/diversos/files/Manual_Diversos_html_85026f7cbc6036e1.png)](https://e-cidade.wiki.br/tributario/diversos/files/Manual_Diversos_html_85026f7cbc6036e1.png)

[![](https://e-cidade.wiki.br/tributario/diversos/files/Manual_Diversos_html_5f5fc300da4ff526.png)](https://e-cidade.wiki.br/tributario/diversos/files/Manual_Diversos_html_5f5fc300da4ff526.png)
`,
};

const dividaAtivaConsultaContent: Record<string, string> = {
  "Dívida Ativa": `
Na consulta da dívida ativa são exibidos todos os dados cadastrais e financeiros.

~~~
DB:TRIBUTÁRIO > Dívida Ativa > Consultas > Dívida Ativa
~~~

Ao pesquisar por contribuinte (CGM, Matrícula ou Inscrição), o sistema apresenta uma lista com todas as dívidas correspondentes ao critério escolhido. Ao pesquisar por Dívida, Certidão ou Parcelamento, o sistema abre diretamente a tela de consulta.

### Modelo de cadastro

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_953670cc41f2517a.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_953670cc41f2517a.png)

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_feed6af0c3af1408.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Divida_Ativa_html_feed6af0c3af1408.png)
`,
  "Certidão": `
Gera uma consulta das certidões selecionadas nos filtros. A consulta apresenta todos os dados da certidão.

~~~
DB:TRIBUTÁRIO > Dívida Ativa > Consultas > Certidão
~~~

### Descrição dos campos

**Matrícula:** informe o código da Matrícula ou clique no link para pesquisar.

**Inscrição:** informe o código da Inscrição Municipal ou clique no link para pesquisar.

**CGM:** informe o código do CGM ou clique no link para pesquisar.

**Certidão:** informe o código da Certidão ou clique no link para pesquisar.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Juridico_html_639438f0acee9f98.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Juridico_html_639438f0acee9f98.png)

Após informar o filtro desejado, clique em **Pesquisar**. O sistema abrirá uma tela de consulta com os dados da Certidão.

**Dados da aba Débitos Vinculados:** lista todos os débitos (Numpre) vinculados à CDA e a situação de cada um. Caso a CDA tenha sido anulada parcialmente, o sistema também lista nesta aba o débito cancelado.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Juridico_html_b7bb1db701d8c1d9.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Juridico_html_b7bb1db701d8c1d9.png)

**Dados da aba Movimentações:** lista todas as movimentações da CDA. Se ela tiver sido cancelada, os dados do cancelamento também serão apresentados.

[![](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Juridico_html_4dac4993f5e7c0d3.png)](https://e-cidade.wiki.br/tributario/dividaativa/files/Manual_Juridico_html_4dac4993f5e7c0d3.png)
`,
};

const fiscalConsultaContent: Record<string, string> = {
  "Alvará Sanitário": `
~~~
DB:TRIBUTÁRIO > Fiscal > Consultas > Alvará Sanitário
~~~

A consulta de alvará sanitário pode ser realizada das seguintes formas:

**Número do alvará:** preencha o campo com o número do alvará ou selecione-o em uma lista clicando no link **Alvará Sanitário**.

**Nome/Razão Social:** informe o número do CGM ou clique no link para pesquisar pelo nome do contribuinte.

**Data da liberação:** serão apresentados os alvarás cuja data de liberação esteja dentro do intervalo informado.

**Atividade:** informe o código da atividade ou clique no link para selecioná-la em uma lista. Serão apresentados os alvarás que possuam a atividade informada.

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal9.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal9.png)

Na rotina de consulta do Alvará Sanitário, é possível emitir o documento pelo botão **Imprimir alvará** ou imprimir um relatório com a ficha cadastral pelo botão **Imprimir**.
`,
  Vistorias: `
Para consultar uma vistoria, informe uma das chaves de pesquisa disponíveis. Dependendo da chave utilizada, podem ser apresentados vários registros para seleção. Por exemplo, a pesquisa por data da vistoria apresenta todas as vistorias cadastradas no intervalo. Somente a pesquisa pelo código da vistoria retorna diretamente um único registro.

~~~
DB:TRIBUTÁRIO > Fiscal > Consultas > Vistorias
~~~

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal10.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal10.png)
`,
  "Auto de Infração": `
Para consultar um auto de infração, informe o código do auto ou clique no link para pesquisá-lo em uma lista. Também é possível pesquisar pelo número do bloco do talonário informado no cadastro do auto.

~~~
DB:TRIBUTÁRIO > Fiscal > Consultas > Auto de Infração
~~~

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal11.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal11.png)

As informações relativas ao auto de infração serão apresentadas conforme a figura:

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal12.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal12.png)
`,
  Notificação: `
Para consultar uma notificação, informe o código desejado ou clique no link para pesquisá-la em uma lista. Também é possível pesquisar pelo número do bloco do talonário informado no cadastro da notificação.

~~~
DB:TRIBUTÁRIO > Fiscal > Consultas > Notificação
~~~

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal13.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal13.png)

As informações relativas à notificação serão apresentadas conforme a figura:

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal14.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal14.png)
`,
  "Consulta Processo Fiscal": `
Para consultar um processo fiscal, informe o número do Processo Fiscal, Numcgm, Matrícula do Imóvel, Inscrição Municipal, Processo do Protocolo ou o período nos campos Data Inicial e Data Final. Em seguida, clique em **Pesquisar**.

~~~
DB:TRIBUTÁRIO > Fiscal > Consultas > Consulta Processo Fiscal
~~~

[![](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal15.png)](https://e-cidade.wiki.br/tributario/fiscal/files/Manual.Fiscal15.png)
`,
};

const inflatoresConsultaContent: Record<string, string> = {
  Inflatores: `
Para consultar os valores de um inflator, selecione o registro pelo código ou pelo nome do inflator e escolha o exercício desejado. Para visualizar o valor do inflator em cada mês, clique no mês correspondente; o valor será apresentado.

~~~
DB:TRIBUTÁRIO > Inflatores > Consultas > Inflatores
~~~

[![](https://e-cidade.wiki.br/tributario/inflatores/files/Manual_Inflatores_html_74d9beeacf2b41b1.png)](https://e-cidade.wiki.br/tributario/inflatores/files/Manual_Inflatores_html_74d9beeacf2b41b1.png)
`,
};

const issqnConsultaContent: Record<string, string> = {
  "Cadastro Municipal": `
Neste menu é realizada a consulta dos dados cadastrais da empresa (inscrição), com pesquisa pelos campos abaixo.

~~~
DB:TRIBUTÁRIO > ISSQN > Consultas > Cadastro Municipal
~~~

**Inscrição:** informe a inscrição que deseja consultar.

**Referência anterior:** pesquise as inscrições por referências anteriores.

**Razão social:** pesquise a inscrição pelo nome da razão social.

**Nome fantasia:** pesquise a inscrição pelo nome fantasia.

**Escritório de contabilidade:** pesquise a inscrição pelo escritório de contabilidade, caso esteja vinculado.

**Código da rua:** pesquise a inscrição pelo código do logradouro.

**Nome da rua:** pesquise a inscrição pelo nome do logradouro.

**Código do bairro:** pesquise a inscrição pelo código do bairro.

**Nome do bairro:** pesquise a inscrição pelo nome do bairro.

**Matrícula do imóvel:** pesquise a inscrição pela matrícula do imóvel.

**Setor/Quadra/Lote:** pesquise a inscrição pelos dados de setor, quadra e lote da matrícula vinculada.

**Atividade:** pesquise pela atividade cadastrada para a inscrição.

**Sócios:** pesquise as inscrições pelo nome dos sócios.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_f9870d7cd33230ef.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_f9870d7cd33230ef.png)

A parte superior da consulta mostra os dados fixos da empresa. Na parte inferior esquerda, há links para os dados de configuração da inscrição utilizados no cálculo.

Esta consulta permite imprimir a BIC e o Alvará da empresa. A impressão do Alvará depende de o usuário ter permissão para essa rotina, disponível em Parâmetros deste módulo.

> Para que o logo do município seja impresso como marca d'água no Alvará, coloque no diretório "imagens/files" do servidor uma imagem nomeada brasão_“nome do município”_fundoalvará.jpg.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_a686137f4087ec5b.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_a686137f4087ec5b.png)

Se a inscrição estiver baixada, o botão **Imprime Alvará** ficará desabilitado e estará disponível o botão **Imprime Certidão de Baixa**, para imprimir a Certidão de Baixa de Alvará.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_d3253fabdc477103.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_d3253fabdc477103.png)
`,
  "Financeira ISSQN": `
Neste menu é realizada a consulta financeira da empresa para o período informado nos filtros.

~~~
DB:TRIBUTÁRIO > ISSQN > Consultas > Financeira ISSQN
~~~

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_1db2c1b3bbf4d087.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_1db2c1b3bbf4d087.png)

A tela mostra o histórico financeiro da empresa referente ao ISS Variável, às Retenções e aos Tomadores registrados no DBPref. Também permite identificar os valores pagos e as alíquotas do ISS.

### Aba Variável

Lista os valores do ISSQN Variável, pagos ou não.

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4c120292140183c2.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_4c120292140183c2.png)

### Aba Retenção

Lista as retenções da inscrição consultada.

### Aba Tomadores

Lista os serviços tomados.
`,
  "Notas Avulsas": `
Este menu permite consultar os dados e a posição da Nota Avulsa no sistema, além de reemitir a nota.

~~~
DB:TRIBUTÁRIO > ISSQN > Consultas > Notas Avulsas
~~~

### Descrição dos campos e modelo da consulta

[![](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_2a5b10d07dc89b84.png)](https://e-cidade.wiki.br/tributario/issqn/files/Manual_ISS_html_2a5b10d07dc89b84.png)
`,
};

const itbiConsultaContent: Record<string, string> = {
  ITBI: `
~~~
DB:TRIBUTÁRIO > ITBI > Consultas > ITBI
~~~

Para consultar o ITBI, informe pelo menos um dos filtros:

**Guia:** informe o número da guia de ITBI liberada.

**Adquirente:** informe o nome do adquirente para listar os cadastros de ITBI efetuados em nome dele.

**Transmitente:** informe o nome do transmitente para listar os cadastros de ITBI efetuados em nome dele.

**Data inicial / Data final:** informe o período para listar os cadastros de ITBI realizados nesse intervalo. Se informar somente a data inicial, serão listados os cadastros a partir dela até a data atual. Se informar somente a data final, serão listados os cadastros até essa data, desconsiderando a data inicial.

**Tipo de ITBI:** selecione o tipo de ITBI a apresentar, de acordo com os filtros informados.

Exemplo: informe a data inicial 01/01/2007 e a data final 31/12/2007 e selecione o tipo Urbana para listar somente os ITBIs urbanos cadastrados nesse período.

**Matrícula do imóvel:** informe o número da matrícula desejada. Se houver mais de um ITBI cadastrado para ela, serão apresentados os registros para seleção.

**Setor:** informe o setor para listar os ITBIs cadastrados para imóveis desse setor.

**Quadra:** informe a quadra para listar os ITBIs cadastrados para imóveis pertencentes a ela.

**Lote:** informe o lote para listar os ITBIs cadastrados para imóveis pertencentes a ele.

Os filtros de setor, quadra e lote podem ser usados em conjunto para restringir a lista aos imóveis correspondentes à combinação informada. Também é possível selecionar o setor, a quadra e o lote de localização aos quais a matrícula vinculada ao ITBI pertence.

**Logradouro:** informe o código do logradouro ou selecione-o pelo link para listar os ITBIs dos imóveis localizados nele.

> Os filtros Matrícula do imóvel, Setor, Quadra, Lote e Logradouro só ficam ativos quando o tipo de ITBI selecionado é Urbana.

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_7b83f01a732ca2b8.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_7b83f01a732ca2b8.png)

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_ee3039c66c73216e.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_ee3039c66c73216e.png)

[![](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_f8d77bfab358ae38.png)](https://e-cidade.wiki.br/tributario/itbi/files/Manual_ITBI_html_f8d77bfab358ae38.png)
`,
};

const juridicoConsultaContent: Record<string, string> = {
  Certidão: `
Gera uma consulta das certidões selecionadas nos filtros e apresenta todos os dados da certidão.

~~~
DB:TRIBUTÁRIO > Jurídico > Consultas > Certidão
~~~

### Descrição dos campos

**Matrícula:** informe o código da Matrícula ou clique no link para pesquisar.

**Inscrição:** informe o código da Inscrição Municipal ou clique no link para pesquisar.

**CGM:** informe o código do CGM ou clique no link para pesquisar.

**Certidão:** informe o código da Certidão ou clique no link para pesquisar.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_639438f0acee9f98.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_639438f0acee9f98.png)

Após informar o filtro desejado, clique em **Pesquisar**. O sistema abrirá uma tela de consulta com os dados da Certidão.

### Dados da aba Débitos Vinculados

Lista todos os débitos (Numpre) vinculados à CDA e a situação de cada um. Caso a CDA tenha sido anulada parcialmente, o débito cancelado também será listado nesta aba.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_b7bb1db701d8c1d9.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_b7bb1db701d8c1d9.png)

### Dados da aba Movimentações

Lista todas as movimentações da CDA. Se ela tiver sido cancelada, os dados do cancelamento também serão listados.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_4dac4993f5e7c0d3.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_4dac4993f5e7c0d3.png)
`,
  Inicial: `
Gera uma consulta das Iniciais selecionadas nos filtros. A consulta apresenta o histórico da situação da Inicial no sistema, incluindo as datas em que foi emitida, registrada no foro, parcelada ou quitada. É possível consultar petições ativas ou anuladas.

~~~
DB:TRIBUTÁRIO > Jurídico > Consultas > Inicial
~~~

### Descrição dos campos

**Código da Inicial:** informe o código da Inicial ou clique no link para pesquisar.

**Código Processo Foro:** informe o código do processo do foro ou clique no link para pesquisar.

**Numcgm:** informe o código do CGM ou clique no link para pesquisar.

**Situação:** informe o código da situação ou clique no link para pesquisar.

**Advogado:** informe o código do advogado responsável pelo(s) processo(s) ou clique no link para pesquisar.

**Localização:** informe o código de localização do foro ou clique no link para pesquisar.

**Tipo:** selecione as Iniciais ativas no sistema ou as que já foram anuladas.

**Data Inicial / Data Final:** informe o período da consulta. Os dois campos devem ser preenchidos em conjunto.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_89cc61d9af6277d4.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_89cc61d9af6277d4.png)

Após informar o número da Inicial e clicar em **Pesquisar**, o sistema apresentará o número da Inicial, o nome do advogado, o código do processo do foro, a data da Inicial, o usuário que a incluiu, a Vara e a descrição da Vara. Clique na Inicial desejada para consultar seus dados.

### Dados da aba Envolvidos

Lista todos os CGMs, Matrículas e Inscrições vinculados à Inicial.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_d3f9a01923760e86.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_d3f9a01923760e86.png)

### Dados da aba Numpres Relacionados

Lista todos os débitos (Numpres) vinculados à Inicial.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_d78b409fc05580c7.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_d78b409fc05580c7.png)

### Dados da aba Certidões Emitidas

Lista todas as CDAs vinculadas à Inicial.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_541a3a4f57023c77.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_541a3a4f57023c77.png)

### Dados da aba Movimentações da Inicial

Lista todas as movimentações da Inicial consultada.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_e45064ac84f1a6c8.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_e45064ac84f1a6c8.png)
`,
  "Processo do Foro": `
Nesta rotina é possível consultar o Processo do Foro.

~~~
DB:TRIBUTÁRIO > Jurídico > Consultas > Processo do Foro
~~~

### Filtros de consulta

**Sequencial:** informe o número sequencial atribuído na inclusão do processo do foro.

**Código do Processo do Foro:** informe o código do Processo do Foro.

**Inicial:** pesquise os processos pela Inicial vinculada.

**Numcgm:** informe o código do CGM ou clique no link para pesquisar.

**Situação:** filtre os processos Ativos, Anulados ou Todos.

**Período:** informe o período em que o processo foi incluído.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_2cced9f5ffc18c78.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_2cced9f5ffc18c78.png)

Após a busca, o sistema abre uma lista de registros. Ao selecionar um processo, são apresentados seus dados, como usuário que o incluiu, data de inclusão e valor da ação. Também é possível consultar as Iniciais vinculadas e as movimentações do processo.

### Aba Iniciais Vinculadas

Consulta das Iniciais vinculadas, movimentações do processo, nomes envolvidos nas Iniciais e no processo e custas e taxas judiciais.

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_c5b40b24e1cbb30f.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_c5b40b24e1cbb30f.png)

### Aba Movimentações

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_c5b40b24e1cbb30fff.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_c5b40b24e1cbb30fff.png)

### Aba Nomes Envolvidos

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_c5b40b24e1cbb30ff21.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_c5b40b24e1cbb30ff21.png)

### Aba Custas e Taxas Judiciais

[![](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_c5b40b24e1cbb30ff78.png)](https://e-cidade.wiki.br/tributario/juridico/files/Manual_Juridico_html_c5b40b24e1cbb30ff78.png)
`,
};

const projetosConsultaContent: Record<string, string> = {
  Obras: `
Este menu consulta todos os dados da obra cadastrada no sistema e informa se ela possui construção e alvará.

~~~
DB:TRIBUTÁRIO > Projetos > Consultas > Obras
~~~

### Descrição dos campos

Pesquise a obra pelo **Código da Obra**, pela **Matrícula** ou pelo **Proprietário**. Para listar todas as obras, clique em **Pesquisar**.

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos7.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos7.png)

Ao selecionar uma obra, o sistema lista os dados correspondentes.

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos8.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos8.png)

Informações exibidas ao clicar no botão **Dados da Construções**:

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos9.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos9.png)

Informações exibidas ao clicar no botão **Alvará**. Também é possível gerar a Carta de Alvará por esse botão.

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos10.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos10.png)

Informações exibidas ao clicar no botão **Habite-se**. Também é possível gerar a Carta de Habite-se por esse botão.

[![](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos11.png)](https://e-cidade.wiki.br/tributario/projetos/files/ManualProjetos11.png)

Informações exibidas ao clicar no botão **Técnico**.
`,
};

const aguaCadastroContent: Record<string, string> = {
  "Cadastro de Situações de Leitura": `
O cadastro de situações de leitura cria um banco de informações sobre as situações utilizadas pelos leituristas e na digitação, para referenciar fatos ocorridos durante as leituras dos hidrômetros.

~~~
DB:TRIBUTÁRIO > Água > Cadastros > Cadastro de Situações de Leitura
~~~

## Inclusão

Preencha o código, seguindo a sequência definida pelo usuário, e uma descrição abreviada para a situação.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua1.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua1.png)

O campo **Regra** possui três opções:

- **Normal:** indica que a situação é normal, sem condição especial.
- **Sem leitura:** aplica-se quando não é possível informar a leitura, mas é necessário calcular a economia referente à matrícula.
- **Cancelamento:** utilizada para informar, no cálculo, que houve troca de hidrômetro no período.

## Alteração

É possível alterar todos os itens desta rotina. Tenha atenção especial ao campo **Regra**, pois ele afeta o uso da situação de leitura digitada.

## Exclusão

A exclusão de uma situação pode afetar a leitura digitada e, indiretamente, a cobrança gerada.
`,
  "Cadastro de Tipos de Isenções": `
~~~
DB:TRIBUTÁRIO > Água > Cadastros > Cadastro de Tipos de Isenções
~~~

## Inclusão

Preencha o código, seguindo a sequência definida pelo usuário, e uma descrição abreviada com o nome da isenção.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua2.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua2.png)

## Alteração

Os itens cadastrados podem ser alterados, considerando seu uso nos cadastros.

## Exclusão

A exclusão poderá ser feita conforme o uso do item no cadastro.
`,
  "Cadastro de Endereço de Entrega": `
Esta rotina permite cadastrar um endereço alternativo para a entrega do comprovante de débito, diferente do endereço do imóvel ou do endereço do CGM, conforme solicitado pelo contribuinte ou administrador.

~~~
DB:TRIBUTÁRIO > Água > Cadastros > Cadastro de Endereço de Entrega
~~~

## Inclusão

Preencha o **Código** seguindo a sequência definida. Pesquise **Bairro** e **Logradouro** pelos links dos campos; ambos devem corresponder entre si, respeitando os logradouros de cada bairro e vice-versa. Use **Complemento** para informar particularidades, como o lado do logradouro em que se encontra o número informado.

O campo **Rota** recebe a rota de entrega dos carnês e de verificação das leituras. **Orientação** indica a posição do logradouro na carta topográfica do município (norte, sul, leste ou oeste).

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua3.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua3.png)

## Alteração

Os itens cadastrados podem ser alterados, considerando seu uso nos cadastros.

## Exclusão

A exclusão poderá ser feita conforme o uso do item no cadastro.
`,
  "Cadastro de Diâmetro de Hidrômetros": `
O cadastro de diâmetros registra os tamanhos dos equipamentos de medição utilizados pela instituição.

~~~
DB:TRIBUTÁRIO > Água > Cadastros > Cadastro de Diâmetro de Hidrômetros
~~~

## Inclusão

O cadastro apresenta os campos **Código Diâmetro** e **Diâmetro**. O usuário informa o diâmetro, que será utilizado no cadastro do equipamento; o código é preenchido automaticamente pelo sistema em sequência.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua4.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua4.png)

## Alteração

Os itens cadastrados podem ser alterados, considerando seu uso nos cadastros.

## Exclusão

A exclusão poderá ser feita conforme o uso do item no cadastro.
`,
  "Cadastro de Marca de Hidrômetros": `
O cadastro de marcas identifica o fabricante do hidrômetro, tanto para novas instalações como para identificar equipamentos que entram ou saem para manutenção.

~~~
DB:TRIBUTÁRIO > Água > Cadastros > Cadastro de Marca de Hidrômetros
~~~

## Inclusão

Preencha os campos:

- **Código:** sequência definida pelo usuário.
- **Marca:** marca do equipamento.
- **Sigla:** abreviação da marca cadastrada.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua5.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua5.png)

## Alteração

Os itens cadastrados podem ser alterados, considerando seu uso nos cadastros.

## Exclusão

A exclusão poderá ser feita conforme o uso do item no cadastro.
`,
  "Cadastro de Leituristas": `
O cadastro de leituristas reúne as informações das pessoas que coletam os dados dos hidrômetros.

~~~
DB:TRIBUTÁRIO > Água > Cadastros > Cadastro de Leituristas
~~~

## Inclusão

**Leiturista:** selecione pelo link ou informe o número do CGM. A informação é oriunda do Cadastro Geral do Município (CGM).

**Data início / Data fim:** período em que a pessoa exercerá a função de leiturista. Para funcionário da instituição, a data final pode ficar em branco, fazendo com que o cadastro não expire.

**Nova senha / Confirmar senha:** informe e confirme a senha do cadastro.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua6.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua6.png)

## Alteração

Os itens cadastrados podem ser alterados, considerando seu uso nos cadastros.

## Exclusão

A exclusão poderá ser feita conforme o uso do item no cadastro.
`,
  "Cadastro de Condomínios": `
O cadastro de condomínio permite agrupar, em uma matrícula, outras matrículas para administração.

~~~
DB:TRIBUTÁRIO > Água > Cadastros > Cadastro de Condomínios
~~~

## Inclusão

Informe a matrícula “Mãe”, que conterá as demais matrículas. Não é necessário informar o código, pois o sistema o preencherá automaticamente.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua7.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua7.png)

Na segunda aba, inclua as matrículas que farão parte do condomínio.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua60.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua60.png)

## Alteração

Os itens cadastrados podem ser alterados, considerando seu uso nos cadastros.

## Exclusão

A exclusão poderá ser feita conforme o uso do item no cadastro.
`,
  "Cadastro de Imóveis/Terrenos": `
Este item refere-se ao cadastro técnico da instituição e permite criar e manter matrículas.

~~~
DB:TRIBUTÁRIO > Água > Cadastros > Cadastro de Imóveis/Terrenos
~~~

## Inclusão

Informe a **Matrícula** a cadastrar. A sincronização das informações com o Cadastro Técnico Municipal depende do caso analisado pelo responsável.

**Proprietário:** informe o proprietário com escritura registrada. Se necessário, use o link de pesquisa no CGM.

**Promitente:** informe quem adquiriu o imóvel por contrato de compra e venda sem registro imobiliário.

**Logradouro, Bairro e Número:** informe o endereço do imóvel.

**Quadra e Distrito:** preencha conforme o cadastro da instituição.

**Zona Fiscal:** determina a zona de cobrança conforme a localização do imóvel e é utilizada no cálculo da matrícula.

**Zona de Entrega:** determina a localidade de entrega das correspondências e deve estar de acordo com as rotas de entrega cadastradas.

**Orientação:** informe a orientação do logradouro cadastrado para o imóvel, como direita ou esquerda em relação a outro logradouro.

**Rota:** agrupamento de logradouros de uma área geográfica para agilizar a entrega de documentos.

**Economias:** quantidade de famílias ou grupos de pessoas que ocupam o local.

**Multiplica economias:** utilizado também em condomínios para calcular o consumo total do prédio e dividi-lo pelo número de apartamentos.

**Cadastro:** data de inclusão da matrícula, preenchida automaticamente pelo sistema.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua8.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua8.png)

No link **Características**, podem ser informados:

- **Tipo de emissão:** mensal, anual ou sem emissão, independentemente de os débitos terem sido calculados.
- **Esgoto:** situação do esgoto, incluindo desligado, sem esgoto e instalações específicas.
- **Água:** situação do abastecimento, incluindo água cortada.
- **Hidrometria:** troca de hidrômetro.
- **Controle corte:** define se o imóvel pode ser disponibilizado para corte.

### Aba Responsável

Permite indicar um responsável pelo imóvel, que pode ser um dos envolvidos (promitente ou proprietário) ou uma terceira pessoa responsável por irregularidades.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua9.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua9.png)

### Aba Entrega

Registra o endereço de entrega das correspondências do imóvel, inclusive o endereço de um administrador previamente cadastrado em Cadastro de Endereço de Entrega.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua10.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua10.png)

### Aba Construções

Informe as características do imóvel, quantidade de construções, área construída, pavimentos, quantidade de famílias e número de pessoas que ocupam o imóvel.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua11.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua11.png)

Para incluir outras características, clique na letra “A”, abaixo de Construções, na aba Opções, e depois no link **Características**. Informe o tipo de construção (como alvenaria ou madeira), o uso da habitação (residencial, comercial etc.), a situação da construção (edifício, sobrado ou sem construção) e a espécie (casa, apartamento, sala comercial etc.).

### Aba Vencimentos

Permite alterar o vencimento de uma parcela ou de um débito inteiro, mesmo que já tenha sido calculado.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua12.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua12.png)

### Aba Ocorrências

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua13.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua13.png)

## Alteração

Disponibilizada para alterar os itens cadastrados, considerando seu uso no cadastro.

## Exclusão

A exclusão poderá ser feita conforme o uso do item no cadastro.
`,
  "Cadastro de Hidrômetros": `
O cadastro de hidrômetros reúne as informações do equipamento e os demais dados previamente cadastrados que o complementam.

~~~
DB:TRIBUTÁRIO > Água > Cadastros > Cadastro de Hidrômetros
~~~

Preencha os campos:

**Código:** informe uma sequência definida pela instituição.

**Matrícula:** matrícula de instalação do equipamento, preenchida somente para novas instalações.

**Número:** número do imóvel.

**Diâmetro:** diâmetro do equipamento, conforme o cadastro de diâmetros.

**Marca:** marca do equipamento, conforme o cadastro de marcas.

**Dígitos:** quantidade de dígitos legíveis que interessam para a leitura. Por exemplo, em um hidrômetro LAO de diâmetro 3/4 com 4(+1) dígitos, o “+1” não deve ser cadastrado, pois geralmente é um dígito vermelho que não influencia na leitura.

**Data da instalação:** data em que o equipamento foi instalado; influencia diretamente no cálculo.

**Leitura inicial:** leitura feita na instalação. Em hidrômetros novos, normalmente é 1; em casos específicos, equipamentos usados podem ter leitura inicial maior. Também influencia no cálculo.

**Ano/mês:** ano e mês da instalação do hidrômetro.

**Situação:** descreva a condição em que o hidrômetro foi instalado. Em instalações novas ou trocas, selecione a situação correspondente ao procedimento.

**Observação:** campo de texto livre.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua14.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua14.png)

## Alteração

Disponibilizada para alterar os itens cadastrados, considerando seu uso no cadastro.

## Exclusão

A exclusão poderá ser feita conforme o uso do item no cadastro.
`,
  "Cadastro de Baixas de Imóveis": `
O cadastro de baixas permite desativar um imóvel que, por algum motivo, não está mais em uso.

~~~
DB:TRIBUTÁRIO > Água > Cadastros > Cadastro de Baixas de Imóveis
~~~

## Inclusão

Informe a matrícula a baixar, a data da baixa e, se necessário, informações complementares no campo **Observações**. Há também um campo para identificar o usuário que realizou o procedimento.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua15.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua15.png)

## Alteração

Disponibilizada para alterar os itens cadastrados, considerando seu uso no cadastro.

## Exclusão

A exclusão poderá ser feita conforme o uso do item no cadastro.
`,
  "Cadastro de Situação de Corte": `
O cadastro de situação de corte permite qualificar os envolvidos nas planilhas.

~~~
DB:TRIBUTÁRIO > Água > Cadastros > Cadastro de Situação de Corte
~~~

## Inclusão

**Situação:** campo numérico preenchido conforme a sequência definida pela instituição.

**Descrição:** campo obrigatório para informar o nome da situação.

**Regra:** determina como a situação será tratada:

- **Normal:** não altera a situação; geralmente é utilizada para avisos.
- **Inicia procedimento de corte:** coloca a matrícula em situação de corte e a disponibiliza nas listas subsequentes.
- **Finaliza procedimento de corte:** encerra o procedimento e retira a matrícula da situação de corte.
- **Bloqueia corte:** impede que a matrícula seja disponibilizada para corte, por exemplo, no caso de prédios públicos municipais.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua16.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua16.png)

## Alteração

Disponibilizada para alterar os itens cadastrados, considerando seu uso no cadastro.

## Exclusão

A exclusão poderá ser feita conforme o uso do item no cadastro.
`,
  "Cadastro de Coletores": `
O cadastro de coletores registra os equipamentos utilizados para coletar as leituras.

~~~
DB:TRIBUTÁRIO > Água > Cadastros > Cadastro de Coletores
~~~

## Inclusão

**Código Coletor:** preenchido automaticamente pelo sistema.

**Descrição:** descrição resumida do equipamento.

**Observações:** informações detalhadas sobre o equipamento cadastrado.

[![](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua17.png)](https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua17.png)

## Alteração

Disponibilizada para alterar os itens cadastrados, considerando seu uso no cadastro.

## Exclusão

A exclusão poderá ser feita conforme o uso do item no cadastro.
`,
};

const TributarioTabs = ({ selectedSubmodule, setSelectedSubmodule, selectedCategory, setSelectedCategory, selectedFinalSection, setSelectedFinalSection }: TributarioTabsProps) => { // ADDED new props

  const submodules = [
    { id: "agua", name: "Água", icon: <DropletIcon size={20} /> },
    { id: "arrecadacao", name: "Arrecadação", icon: <BanknoteIcon size={20} /> },
    { id: "cadastro", name: "Cadastro", icon: <UserPlusIcon size={20} /> },
    { id: "cemiterio", name: "Cemitério", icon: <CrossIcon size={20} /> },
    { id: "contribuicao", name: "Contribuição", icon: <GiftIcon size={20} /> },
    { id: "diversos", name: "Diversos", icon: <LayoutGridIcon size={20} /> },
    { id: "divida-ativa", name: "Dívida Ativa", icon: <ScaleIcon size={20} /> },
    { id: "fiscal", name: "Fiscal", icon: <ReceiptTextIcon size={20} /> },
    { id: "inflatores", name: "Inflatores", icon: <TrendingUpIcon size={20} /> },
    { id: "issqn", name: "ISSQN", icon: <BuildingIcon size={20} /> },
    { id: "itbi", name: "ITBI", icon: <HomeIcon size={20} /> },
    { id: "juridico", name: "Jurídico", icon: <GavelIcon size={20} /> },
    { id: "marcas", name: "Marcas", icon: <CopyrightIcon size={20} /> },
    { id: "meio-ambiente", name: "Meio Ambiente", icon: <LeafIcon size={20} /> },
    { id: "notificacoes", name: "Notificações", icon: <BellIcon size={20} /> },
    { id: "projetos", name: "Projetos", icon: <ConstructionIcon size={20} /> },
  ];

  const categories = [
    { value: "cadastro", label: "Cadastro" },
    { value: "consulta", label: "Consulta" },
    { value: "relatorio", label: "Relatório" },
    { value: "procedimentos", label: "Procedimentos" }
  ];

  const handleSubmoduleClick = (submodule: { id?: string; name: string }) => {
    setSelectedSubmodule(submodule.name);
    setSelectedCategory(null); // Reset category when changing submodule
    setSelectedFinalSection(null); // NEW: Reset final section
  };

  const handleBackClick = () => {
    if (selectedFinalSection) { // NEW: If a final section is selected, go back to category options
      setSelectedFinalSection(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedSubmodule(null);
    }
  };

  const navigationButtons = [
    "Salas de Vacinações",
    "Geral do Município - CGM (novo)",
    "Manutenção do CGS"
  ];

  const renderFinalContent = (submoduleId: string, categoryId: string, onSelectFinalSection: (section: string) => void) => { // ADDED onSelectFinalSection
    const submoduleData = getSubmoduleById(submoduleId);
    if (!submoduleData) return null;
    
    const categoryOptions = submoduleData.options[categoryId as keyof typeof submoduleData.options];
    if (!categoryOptions || categoryOptions.length === 0) return null;

    return (
      <nav className="flex flex-col items-center gap-2 p-4 bg-muted mb-8 rounded-lg">
        {categoryOptions.map((item) => (
          <button
            key={item}
            className="w-full text-lg font-bold py-2 px-4 rounded-md text-center bg-card hover:bg-muted-foreground/10 transition-colors"
            onClick={() => onSelectFinalSection(item)} // ADD onClick handler
          >
            {item}
          </button>
        ))}
      </nav>
    );
  };
  
  if (selectedSubmodule) {
    if (selectedCategory) {
      if (selectedFinalSection) { // NEW: If a final section is selected
        return (
          <div>
            <Button
              onClick={handleBackClick}
              variant="outline"
              size="sm"
              className="mb-4 bg-card"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </Button>
            <h2 className="text-2xl font-bold mb-6">{selectedFinalSection}</h2>
            <hr className="mb-8 border-t border-border" />
            {selectedSubmodule === "Água" &&
            selectedCategory === "cadastro" &&
            aguaCadastroContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={aguaCadastroContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Água" &&
              selectedCategory === "procedimentos" &&
              aguaProcedimentosContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={aguaProcedimentosContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Água" &&
            selectedCategory === "consulta" &&
            selectedFinalSection === "Consulta de imoveis/Terrenos" ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={`~~~
DB:TRIBUTÁRIO > Água > Consultas > Consulta de Imóveis/Terrenos
~~~`} />

                <p>
                  Na consulta de imóveis e terrenos, é possível realizar uma consulta técnica da matrícula utilizando vários elementos, como:
                </p>

                <ul>
                  <li><strong>Matrícula:</strong> matrícula do imóvel ou do terreno.</li>
                  <li><strong>Nome/Razão social:</strong> nome do proprietário ou promitente da matrícula; esta informação é oriunda do Cadastro Geral do Município (CGM).</li>
                  <li><strong>Cód. Logradouro:</strong> código gerado para identificar ruas, avenidas, travessas etc. É possível consultar por esse código, fornecido quando um novo logradouro é criado.</li>
                  <li><strong>Logradouro:</strong> descrição dada a ruas, avenidas, travessas etc.</li>
                  <li><strong>Cód. Bairro:</strong> código gerado para identificar os bairros do município, fornecido quando um novo bairro é criado.</li>
                  <li><strong>Bairro:</strong> descrição de uma localidade do município, conforme o cadastro realizado previamente.</li>
                </ul>

                <a href="https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua18.png" target="_blank" rel="noreferrer">
                  <img
                    src="https://e-cidade.wiki.br/tributario/agua/files/Manual_Agua18.png"
                    alt="Consulta de imóveis e terrenos do módulo Água"
                    className="h-auto max-w-full"
                  />
                </a>

                <p>
                  Ao inserir qualquer uma das informações citadas, será exibida uma consulta equivalente à do Cadastro Técnico Municipal (veja o manual do módulo Cadastro), com exceção dos itens Hidrômetro, Leitura e Histórico do Corte, que apresentam, respectivamente, os dados do hidrômetro cadastrado, as leituras realizadas no hidrômetro do imóvel e o histórico de corte, se houver.
                </p>
              </article>
            ) : selectedSubmodule === "Cadastro" &&
              selectedCategory === "cadastro" &&
              tributarioCadastroContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={tributarioCadastroContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Cadastro" &&
              selectedCategory === "consulta" &&
              cadastroConsultaContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={cadastroConsultaContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Cemitério" &&
              selectedCategory === "cadastro" &&
              cemiterioCadastroContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={cemiterioCadastroContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Cemitério" &&
              selectedCategory === "procedimentos" &&
              cemiterioProcedimentosContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={cemiterioProcedimentosContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Cemitério" &&
              selectedCategory === "consulta" &&
              cemiterioConsultaContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={cemiterioConsultaContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Contribuição" &&
              selectedCategory === "cadastro" &&
              contribuicaoCadastroContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={contribuicaoCadastroContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Contribuição" &&
              selectedCategory === "consulta" &&
              contribuicaoConsultaContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={contribuicaoConsultaContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Diversos" &&
              selectedCategory === "cadastro" &&
              diversosCadastroContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={diversosCadastroContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Diversos" &&
              selectedCategory === "consulta" &&
              diversosConsultaContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={diversosConsultaContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Dívida Ativa" &&
              selectedCategory === "cadastro" &&
              dividaAtivaCadastroContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={dividaAtivaCadastroContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Dívida Ativa" &&
              selectedCategory === "consulta" &&
              dividaAtivaConsultaContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={dividaAtivaConsultaContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Fiscal" &&
              selectedCategory === "cadastro" &&
              fiscalCadastroContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={fiscalCadastroContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Fiscal" &&
              selectedCategory === "consulta" &&
              fiscalConsultaContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={fiscalConsultaContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Inflatores" &&
              selectedCategory === "cadastro" &&
              inflatoresCadastroContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={inflatoresCadastroContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Inflatores" &&
              selectedCategory === "procedimentos" &&
              inflatoresProcedimentosContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={inflatoresProcedimentosContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Inflatores" &&
              selectedCategory === "consulta" &&
              inflatoresConsultaContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={inflatoresConsultaContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "ISSQN" &&
              selectedCategory === "cadastro" &&
              issqnCadastroContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={issqnCadastroContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "ISSQN" &&
              selectedCategory === "consulta" &&
              issqnConsultaContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={issqnConsultaContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "ITBI" &&
              selectedCategory === "cadastro" &&
              itbiCadastroContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={itbiCadastroContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "ITBI" &&
              selectedCategory === "procedimentos" &&
              itbiProcedimentosContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={itbiProcedimentosContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "ITBI" &&
              selectedCategory === "consulta" &&
              itbiConsultaContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={itbiConsultaContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Jurídico" &&
              selectedCategory === "cadastro" &&
              juridicoCadastroContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={juridicoCadastroContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Jurídico" &&
              selectedCategory === "consulta" &&
              juridicoConsultaContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={juridicoConsultaContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Projetos" &&
              selectedCategory === "cadastro" &&
              projetosCadastroContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={projetosCadastroContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Projetos" &&
              selectedCategory === "consulta" &&
              projetosConsultaContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={projetosConsultaContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Notificações" &&
              selectedCategory === "cadastro" &&
              notificacoesCadastroContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={notificacoesCadastroContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Meio Ambiente" &&
              selectedCategory === "cadastro" &&
              meioAmbienteCadastroContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={meioAmbienteCadastroContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Meio Ambiente" &&
              selectedCategory === "procedimentos" &&
              meioAmbienteProcedimentosContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={meioAmbienteProcedimentosContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Arrecadação" &&
              selectedCategory === "cadastro" &&
              arrecadacaoCadastroContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={arrecadacaoCadastroContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Arrecadação" &&
              selectedCategory === "procedimentos" &&
              arrecadacaoProcedimentosContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={arrecadacaoProcedimentosContent[selectedFinalSection]} />
              </article>
            ) : selectedSubmodule === "Arrecadação" &&
              selectedCategory === "consulta" &&
              arrecadacaoConsultaContent[selectedFinalSection] ? (
              <article className="prose prose-slate prose-lg max-w-none">
                <MarkdownContent content={arrecadacaoConsultaContent[selectedFinalSection]} />
              </article>
            ) : (
              <p>Conteúdo detalhado para: {selectedFinalSection}</p>
            )}
          </div>
        );
      }
      // If a category is selected, but no final section, display the options for final sections
      const currentSubmoduleId = submodules.find((s) => s.name === selectedSubmodule)?.id || selectedSubmodule.toLowerCase();
      return (
        <div>
          <Button
            onClick={handleBackClick}
            variant="outline"
            size="sm"
            className="mb-4 bg-card"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para {selectedSubmodule}
          </Button>
          <h2 className="text-2xl font-bold mb-6">{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>
          <hr className="mb-8 border-t border-border" />
          {renderFinalContent(currentSubmoduleId, selectedCategory, setSelectedFinalSection)} {/* Pass setter */}
        </div>
      );
    }
    
    // Category selection view
    return (
      <div>
        <Button
          onClick={handleBackClick}
          variant="outline"
          size="sm"
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Módulos
        </Button>
        <h2 className="text-2xl font-bold mb-6">{selectedSubmodule}</h2>
        <hr className="mb-8 border-t border-border" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {categories.map((category) => (
            <button
              key={category.value}
              className="text-left transition-all hover:scale-[1.02] focus:outline-none"
              onClick={() => setSelectedCategory(category.value)}
            >
              <div className="rounded-lg text-card-foreground h-full border border-border transition-all duration-300 cursor-pointer bg-card hover:bg-muted shadow-sm hover:shadow-lg">
                <div className="p-6 flex items-center justify-center min-h-[100px]">
                  <h3 className="text-lg font-bold text-center">
                    {category.label}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Initial submodule selection view
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {submodules.map((submodule) => (
        <button
          key={submodule.id || submodule.name}
          className="text-left transition-all hover:scale-[1.02] focus:outline-none"
          onClick={() => handleSubmoduleClick(submodule)}
        >
          <div className="rounded-lg text-card-foreground h-full border border-border transition-all duration-300 cursor-pointer bg-card hover:bg-muted shadow-sm hover:shadow-lg">
            <div className="p-6 flex flex-col items-center justify-center min-h-[120px] gap-3">
              <div className="text-primary">{submodule.icon}</div>
              <h3 className="text-lg font-bold text-center">{submodule.name}</h3>
            </div>
          </div>
        </button>
      ))}
    </div>
  );

};

export default TributarioTabs;
