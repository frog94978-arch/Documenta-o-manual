export interface DocPage {
  id: string;
  title: string;
  category: string;
  content: string;
  order: number;
}

export interface DocCategory {
  id: string;
  title: string;
  icon: string;
  order: number;
}

export const categories: DocCategory[] = [
  { id: "introducao", title: "Introdução", icon: "Home", order: 1 },
  { id: "guia-inicio", title: "Guia de Início", icon: "BookOpen", order: 2 },
  { id: "modulos", title: "Áreas", icon: "Layers", order: 3 },

  { id: "tutoriais", title: "Tutoriais", icon: "GraduationCap", order: 4 },


];

export const pages: DocPage[] = [
  {
    id: "bem-vindo",
    title: "Bem-vindo",
    category: "introducao",
    order: 1,
    content: `# Bem-vindo à Documentação

Bem-vindo ao nosso sistema de documentação completo. Esta wiki foi criada para ajudá-lo a entender e utilizar todas as funcionalidades do sistema de forma eficiente.

## O que você encontrará aqui

Esta documentação está organizada em seções para facilitar sua navegação:

- **Introdução**: Visão geral do sistema e conceitos básicos
- **Guia de Início**: Primeiros passos e configuração inicial
- **Módulos**: Documentação detalhada de cada módulo do sistema
- **Tutoriais**: Guias práticos passo a passo

## Como usar esta documentação

### Navegação
Use o menu lateral para navegar entre as diferentes seções. Cada seção contém múltiplos artigos organizados de forma lógica.

### Busca
Utilize a barra de busca no topo para encontrar rapidamente o conteúdo que procura.

### Breadcrumbs
Os breadcrumbs no topo da página mostram onde você está e permitem navegar facilmente para níveis superiores.

## Precisa de ajuda?

Se você não encontrar o que procura, entre em contato com o suporte.

---

**Última atualização**: Novembro 2025`
  },
  {
    id: "visao-geral",
    title: "Visão Geral do Sistema",
    category: "introducao",
    order: 2,
    content: `# Visão Geral do Sistema

O sistema é uma plataforma completa que integra diversos módulos para gestão organizacional eficiente.

## Características Principais

### Arquitetura Modular
O sistema é construído em módulos independentes que podem ser utilizados separadamente ou em conjunto:

- Módulo de Recursos Humanos
- Módulo Financeiro
- Módulo de Compras
- Módulo de Estoque
- Módulo de Relatórios

### Interface Intuitiva
Desenvolvido com foco na experiência do usuário, oferecendo:

- Navegação clara e objetiva
- Design responsivo para desktop e mobile
- Atalhos de teclado para agilizar operações
- Temas claro e escuro

### Segurança
Implementação de medidas robustas de segurança:

- Autenticação multi-fator
- Controle de acesso por perfis
- Auditoria completa de operações
- Backup automático de dados

## Requisitos do Sistema

### Navegadores Suportados
- Chrome (versão 90+)
- Firefox (versão 88+)
- Safari (versão 14+)
- Edge (versão 90+)

### Resolução Mínima
- Desktop: 1280x720
- Mobile: 375x667

## Próximos Passos

Após entender a visão geral, recomendamos:

1. Ler o [Guia de Início Rápido](/docs/guia-inicio/tomticket)
2. Configurar sua conta
3. Explorar os módulos disponíveis`
  },
  {
    id: "tomticket",
    title: "Tomticket",
    category: "guia-inicio",
    order: 1,
    content: `# Tomticket

O Tomticket é a nossa plataforma de suporte e abertura de chamados. Utilize-o para relatar problemas técnicos, solicitar melhorias ou tirar dúvidas diretamente com nossa equipe de suporte especializado.`
  },
  {
    id: "gitlab",
    title: "Git Lab",
    category: "guia-inicio",
    order: 2,
    content: `# Git Lab

## Introdução

O presente documento tem como objetivo padronizar o uso do GitLab pela equipe, servindo como guia de consulta rápida sempre que surgirem dúvidas quanto aos procedimentos e boas práticas adotadas na ferramenta.

Neste manual, estão descritas as rotinas operacionais, responsabilidades de cada perfil envolvido, orientações sobre movimentação de cards, abertura de OS, uso de boards, nivelamento de demandas, entre outros pontos essenciais para garantir a organização, rastreabilidade e eficiência no uso da plataforma.

A leitura e consulta frequente deste material é fundamental para manter a equipe alinhada e o fluxo de trabalho fluindo de forma coesa.

## Acesso ao Git Libre

1. Acesse o link: https://gitlab.libresolucoes.com.br/
2. Digite seu login e senha.

Após o login, será exibida a tela inicial.

![Tela Inicial Gitlab](../../assets/images/Tela%201%20Gitlab.jpg)

## Tela Inicial

Na tela inicial, é possível:

- Visualizar os projetos disponíveis para seu perfil.
- Acessar os grupos aos quais você tem permissão.
- Consultar os projetos que foram favoritados através do menu Starred.

![Menu Starred e Projetos](../../assets/images/Tela2Gitlab.jpg)

## Acessando Grupos

1. No menu lateral, selecione Groups.
2. Todos os grupos disponíveis serão listados.
3. Selecione o grupo Libre para visualizar todos os projetos que pertencem a este grupo.

![Grupos Libre](../../assets/images/Tela3Gitlab.jpg)
![Projetos do Grupo](../../assets/images/Tela4Gitlab.jpg)

## Acessando um Projeto

Você pode visualizar os projetos disponíveis diretamente na página inicial ou utilizar a barra de pesquisa para localizar o projeto desejado.

1. Utilize a barra de pesquisa no topo da página para digitar o nome do projeto ou parte dele.
2. Clique sobre o projeto para acessá-lo.
3. Na página inicial do projeto, você verá a opção de favoritar o projeto (ícone de estrela). Isso facilita o acesso futuro, permitindo que ele apareça diretamente na tela inicial, sem necessidade de navegar pelos grupos.

![Favoritar Projeto](../../assets/images/Tela5Gitlab.jpg)

## Visualizando Boards

1. No menu lateral do projeto, clique em Issue Boards.
2. Selecione o board desejado.
3. As colunas do board e suas respectivas issues serão exibidas.
4. Para ocultar o menu lateral, clique no botão de setas no canto da tela.

![Ocultar Menu Lateral](../../assets/images/Tela6Gitlab.jpg)

Altere a opção para On. Isso permitirá que os detalhes da issue sejam exibidos diretamente na mesma página do Issue Board, facilitando a visualização e o acompanhamento.

![Habilitar Painel Lateral](../../assets/images/Tela7Gitlab.jpg)
![Detalhes da Issue no Board](../../assets/images/Tela8Gitlab.jpg)

## Pesquisa no Board

Utilize a barra de pesquisa no topo do board para localizar cards (issues) específicos dentro do board.

![Pesquisa no Board](../../assets/images/Tela9Gitlab.jpg)

## Abertura das Issues

As solicitações de abertura de OS continuam seguindo o procedimento já adotado anteriormente.

Todas as solicitações devem ser encaminhadas à equipe de Projetos, que é a responsável por criar as issues nos projetos e boards adequados.

Para criar a issue, basta clicar no ícone de + na coluna respectiva na qual deseja criar a issue.

![Botão para Criar Issue](../../assets/images/Tela10Gitlab.jpg)

**Importante:** Apenas a equipe de Projetos está autorizada a criar as issues nos projetos.

## Visualizando uma Issue

Ao clicar em um card, as informações da issue serão exibidas na lateral da tela. Para abrir a issue completa e permitir edição, clique no título da issue seja no card ou nessa aba lateral.

![Visualizando Issue](../../assets/images/Tela11Gitlab.jpg)

## Editando uma Issue

Dentro da issue, clique no botão Editar.

![Botão Editar Issue](../../assets/images/Tela12Gitlab.jpg)

Será possível:

- Alterar o título.
- Selecionar um template para padronizar a descrição.
- Preencher ou editar o conteúdo da descrição.

![Editando Descrição da Issue](../../assets/images/Tela13Gitlab.jpg)
![Template de Descrição](../../assets/images/Tela14Gitlab.jpg)
![Editor de Descrição](../../assets/images/Tela15Gitlab.jpg)

## Assinando uma Issue

A issue permite apenas um Assignee (responsável).
O programador responsável pela demanda deve ingressar como assignee.
Para indicar o responsável do suporte, inclua a menção na descrição utilizando @nomedosuporte.

![Assinando Issue](../../assets/images/Tela16Gitlab.jpg)

## Campo de Instalação

A responsabilidade de preencher o campo de instalação é exclusivamente do programador responsável pela demanda.

![Campo de Instalação](../../assets/images/Tela17Gitlab.jpg)

## Histórico da Issue

Todo o histórico de ações realizadas na issue fica disponível e pode ser consultado a qualquer momento.

![Histórico da Issue](../../assets/images/Tela18Gitlab.jpg)

## Adicionando Comentários

Para adicionar um comentário:

1. Acesse a issue.
2. Vá até a seção de comentários.
3. Escreva o comentário e clique em Comentar.

![Adicionando Comentários](../../assets/images/Tela19Gitlab.jpg)

## Vinculação de Issues entre Projetos (Linked Items)

Sempre que uma issue tiver relação de dependência com outra, é necessário utilizar a funcionalidade Linked Items (Itens vinculados) do GitLab para registrar essa ligação. Isso vale tanto para issues em projetos diferentes quanto para issues no mesmo projeto, desde que haja interdependência entre elas.

Situações em que a vinculação deve ser feita:

- Demandas com o mesmo número de chamado em projetos diferentes. Exemplo: um chamado do eSocial que envolva alterações na API e no e-Cidade.
- Demandas com números de chamados distintos, mas que dependem entre si. Exemplo: uma solicitação que exige ajustes tanto no Nota Fiscal Eletrônica quanto no e-Cidade.
- Demandas divididas em várias partes, mesmo dentro do mesmo projeto, que dependem entre si para entrega completa. Exemplo: funcionalidades fracionadas em etapas ou entregas intermediárias, mas que estão diretamente relacionadas.

Como vincular:

1. Acesse la issue principal.
2. Vá até a seção Linked Items (ou "Itens vinculados").
3. Clique em "Add" ou "Adicionar".
4. Selecione o tipo de vínculo "relates to".
5. Informe a URL ou ID da issue relacionada (mesmo que esteja em outro projeto).

![Vinculando Issues](../../assets/images/Tela20Gitlab.jpg)

## Finalização das Issues

1. Após o aceite da demanda pelo suporte, o card correspondente deve ser movido para a coluna "Aguardando Nivelamento" pelo suporte responsável no board.
2. Os líderes técnicos são responsáveis por realizar o nivelamento das demandas presentes nessa coluna, devendo:
3. Verificar a coluna "Aguardando Nivelamento" ao final de cada dia útil;
4. Realizar o nivelamento de todas as demandas que estiverem nessa etapa;
5. Movimentar o card para a coluna "Nivelado" assim que o nivelamento for concluído.
6. Caso seja um acerto em base a equipe de infra deve seguir o mesmo procedimento informado no item 5.

**Importante:** Apenas a equipe de Projetos está autorizada a fechar as issues e mover o card para a coluna "Closed".

![Finalização de Issues](../../assets/images/Tela21Gitlab.jpg)`
  },
  {
    id: "padrao-emails",
    title: "Padrão de e-mails",
    category: "guia-inicio",
    order: 3,
    content: `# Padrão de e-mails

Este guia contém os modelos oficiais de comunicação via e-mail para garantir a padronização e o profissionalismo nas interações com os clientes e entre as equipes.

## E-mail de Aprovação de UC

**Assunto:** Aprovação do Documento de UC - #[número da demanda - Título]

**Corpo do e-mail:**

Prezados,

Encaminho, em anexo, o Documento de Caso de Uso (UC) referente à regra e ao protótipo do desenvolvimento a ser realizado no sistema, com o objetivo de atender melhorias no módulo [módulo]. O documento descreve as alterações necessárias para [descreva o motivo da melhoria]. Para darmos andamento ao desenvolvimento, solicito a leitura e aprovação do Documento de UC.

Reforço que somente após a aprovação será possível dar continuidade ao desenvolvimento.

**Observação:** Mudanças de escopo após a aprovação da UC serão tratadas como novas melhorias e passarão por nova pactuação alterando o prazo de entrega.

Fico no aguardo da validação e qualquer dúvida estou à disposição.

Atenciosamente,

---

## E-mail de Aceite de Demanda

**Assunto:** Aceite de demanda #[número da demanda - Título]

**Corpo do e-mail:**

Olá, [bom dia/boa tarde/boa noite]!

Após a homologação realizada no ambiente de testes, solicito a confirmação do aceite da demanda #[número da demanda].

Por favor, confirme se os ajustes atendem às expectativas para que possamos dar andamento com a demanda para liberação em produção.

**Obs:** Mudanças de escopo serão tratadas como novas melhorias e deverão ser formalizadas por meio da abertura de um novo chamado para a pactuação e início do desenvolvimento.

Fico no aguardo da validação e qualquer dúvida estou à disposição.

Atenciosamente,

---

## E-mail de Aceite de Demanda com link do ambiente de homologação

**Assunto:** Aceite de demanda #[número da demanda - Título]

**Corpo do e-mail:**

Olá, [bom dia/boa tarde/boa noite]!

Após a homologação realizada no ambiente de testes, solicito a confirmação do aceite da demanda #[número da demanda].

Por favor, confirme se os ajustes atendem às expectativas no link a seguir para que possamos dar andamento com a demanda para liberação em produção.

[Link do ambiente de homologação]

**Obs:** Mudanças de escopo serão tratadas como novas melhorias e deverão ser formalizadas por meio da abertura de um novo chamado para a pactuação e início do desenvolvimento.

Fico no aguardo da validação e qualquer dúvida estou à disposição.

Atenciosamente,

---

## E-mail de Agendamento de Demanda

**Assunto:** Agendamento de demanda [número da demanda - Título]

**Corpo do e-mail:**

[Bom dia / Boa tarde / Boa noite],

Em atendimento à solicitação da CGTI, informo que todas as demandas devem ser acompanhadas pelos colaboradores da Libre quando forem disponibilizadas em produção. Dessa forma, gostaria de agendar o acompanhamento da demanda #[nº ticket - titulo da demanda] para [dia da semana], dia [data], a partir das [horário].

Caso este e-mail não seja respondido antes das 16h, o agendamento não poderá ocorrer no dia seguinte. Ficando remarcado para o dia útil subsequente à este.

Agradeço pela colaboração e fico à disposição para qualquer dúvida.

Atenciosamente,

---

## E-mail de Autorização para acerto em Base

**Assunto:** Acerto em base - [número do chamado - Título]

**Corpo do e-mail:**

[Bom Dia/Boa tarde/Boa noite],

Solicito autorização para o acerto em base do(s) chamado(s): [número do chamado - Título]

**Justificativa da Necessidade:** descreva o motivo pelo qual precisa do acerto em base
**Número do Chamado que Resolve a Causa Raiz do Problema:** [número do chamado - Título]

Aguardo sua aprovação,

Atenciosamente.`
  },
  {
    id: "ponto-funcao",
    title: "Ponto de Função",
    category: "guia-inicio",
    order: 4,
    content: `# Ponto de Função

Documentação sobre a metodologia de métrica para software através da contagem de pontos de função (FPA).`
  },
  {
    id: "termos-tecnicos",
    title: "Termos Técnicos",
    category: "guia-inicio",
    order: 5,
    content: `# Termos Técnicos

Este glossário reúne os principais termos técnicos e siglas utilizados no sistema, servindo como uma referência rápida para facilitar o entendimento das funcionalidades e a comunicação entre as equipes.

## Principais Termos

- **API (Application Programming Interface)**: Conjunto de definições e protocolos usado no desenvolvimento e na integração de software de aplicações.
- **CGM (Cadastro Geral do Município)**: Registro centralizado de pessoas físicas e jurídicas que possuem relação com o município.
- **FPA (Function Point Analysis)**: Metodologia para medir o tamanho funcional de um software.
- **Workflow**: Fluxo de trabalho que define a sequência de tarefas e processos dentro do sistema.
`
  },
  {
    id: "fluxo-sistema",
    title: "Fluxo do Sistema",
    category: "tutoriais",
    order: 1,
    content: `# Fluxo do Sistema

Aqui você encontra a documentação sobre o fluxo completo do sistema, desde a entrada de dados até o processamento final.`
  },
  {
    id: "erros-frequentes",
    title: "Erros Frequentes",
    category: "tutoriais",
    order: 2,
    content: `# Erros Frequentes

Guia com os erros mais comuns encontrados pelos usuários e como resolvê-los rapidamente.`
  },
  {
    id: "configuracoes",
    title: "Configurações",
    category: "modulos",
    order: 1,
    content: `# Configurações

O módulo de Configurações permite personalizar e gerenciar os parâmetros gerais do sistema.

## Funcionalidades Principais

### Configurações Gerais
Configure aspectos fundamentais do sistema:

- Dados da instituição
- Parâmetros do sistema
- Integrações externas
- Políticas de segurança

### Gestão de Usuários
Gerencie usuários e permissões:

- Criar e editar usuários
- Definir perfis de acesso
- Controle de permissões por módulo
- Auditoria de acessos

### Parametrização
Configure regras específicas:

- Regras de validação
- Fluxos de aprovação
- Alertas e notificações
- Backup automático

## Como Acessar

1. Acesse o menu **Configurações**
2. Selecione a categoria desejada
3. Faça as alterações necessárias
4. Clique em **Salvar**

> **Nota**: Alterações em configurações críticas requerem autenticação adicional.`
  },
  {
    id: "financeiro",
    title: "Financeiro",
    category: "modulos",
    order: 2,
    content: `# Módulo Financeiro

Sistema completo para gestão financeira e contábil da instituição.

## Principais Funcionalidades

### Contabilidade
Gestão contábil completa:

- Lançamentos contábeis
- Plano de contas
- Balancetes e balanços
- Demonstrativos contábeis

### Tesouraria
Controle do fluxo de caixa:

- Contas bancárias
- Movimentações financeiras
- Conciliação bancária
- Previsão de fluxo de caixa

### Orçamento
Planejamento e controle orçamentário:

- Elaboração orçamentária
- Acompanhamento de execução
- Relatórios de dotação
- Suplementações e remanejamentos

### Empenhos
Gestão de compromissos:

- Emissão de empenhos
- Liquidação
- Pagamento
- Controle de restos a pagar

## Relatórios Disponíveis

- Demonstrativo de receitas e despesas
- Balancete mensal
- Fluxo de caixa
- Relatórios legais (LRF, RREO, RGF)`
  },
  {
    id: "patrimonial",
    title: "Patrimonial",
    category: "modulos",
    order: 3,
    content: `# Área Patrimonial

Gestão completa do patrimônio público e almoxarifado.

## Áreas do Módulo

### [Compras](/docs/compras/compras)
Gestão de processos de aquisição.

### [Licitações](/modulos/patrimonial/licitacoes)
Processos licitatórios:

- Abertura de processo
- Publicação de editais
- Julgamento de propostas
- Homologação

### [Contratos](/modulos/patrimonial/contratos)
Gestão de contratos:

- Cadastro de contratos
- Aditivos contratuais
- Controle de vigência
- Medições e pagamentos

### [Material](/modulos/patrimonial/material)
Controle de materiais:

- Entrada e saída
- Controle de estoque
- Requisições
- Inventário

### [Patrimônio](/modulos/patrimonial/patrimonio)
Gestão de bens patrimoniais:

- Cadastro de bens
- Tombamento
- Depreciação
- Transferências
- Inventário patrimonial

### [Protocolo](/modulos/patrimonial/protocolo)
Controle de documentos:

- Registro de documentos
- Tramitação
- Arquivamento
- Consultas

### [Veículos](/modulos/patrimonial/veiculos)
Gestão de frota:

- Cadastro de veículos
- Controle de manutenção
- Abastecimento
- Controle de quilometragem`
  },
  {
    id: "tributario",
    title: "Tributário",
    category: "modulos",
    order: 4,
    content: `# Módulo Tributário

Sistema de gestão e arrecadação de tributos municipais.

## Funcionalidades

### Cadastro Imobiliário
Gestão do cadastro imobiliário:

- Cadastro de imóveis
- IPTU (Imposto Predial e Territorial Urbano)
- Plantas de valores
- Correção de valores

### Cadastro Mobiliário
Gestão de atividades econômicas:

- Cadastro de empresas
- ISS (Imposto Sobre Serviços)
- Taxas e contribuições
- Alvarás

### Arrecadação
Controle da arrecadação:

- Emissão de guias
- Controle de pagamentos
- Parcelamentos
- Dívida ativa

### Fiscalização
Ferramentas de fiscalização:

- Ordem de fiscalização
- Autos de infração
- Recursos
- Notificações

## Emissão de Guias

### Guia de IPTU

` + "```" + `
1. Acesse Tributário > IPTU > Emissão
2. Informe o exercício
3. Selecione os imóveis
4. Gere as guias
` + "```" + `

## Consultas Disponíveis

- Situação fiscal do contribuinte
- Histórico de pagamentos
- Débitos em aberto
- Certidões negativas`
  },
  {
    id: "recursos-humanos",
    title: "Recursos Humanos",
    category: "modulos",
    order: 5,
    content: `# Módulo Recursos Humanos

Gestão completa de pessoal e folha de pagamento.

## Principais Áreas

### Cadastro de Pessoal
Gestão de servidores e funcionários:

- Cadastro de pessoal
- Dependentes
- Documentação
- Histórico funcional

### Folha de Pagamento
Processamento da folha:

- Cálculo de folha
- Proventos e descontos
- Encargos sociais
- Adiantamentos

### Ponto Eletrônico
Controle de frequência:

- Registro de ponto
- Banco de horas
- Escalas de trabalho
- Relatórios de frequência

### Férias e Afastamentos
Gestão de ausências:

- Programação de férias
- Concessão de férias
- Licenças e afastamentos
- Atestados médicos

### Benefícios
Gestão de benefícios:

- Vale-transporte
- Vale-alimentação
- Plano de saúde
- Outros benefícios

## Relatórios

- Holerite
- Folha analítica
- Relatório de encargos
- Relatórios legais (RAIS, CAGED, DIRF)`
  },
  {
    id: "educacao",
    title: "Educação",
    category: "modulos",
    order: 6,
    content: `# Módulo Educação

Sistema de gestão escolar completo.

## Funcionalidades Principais

### Gestão Escolar
Administração de unidades educacionais:

- Cadastro de escolas
- Organização curricular
- Calendário escolar
- Turmas e períodos

### Matrícula
Processo de matrícula:

- Cadastro de alunos
- Matrícula online
- Rematrícula
- Transferências

### Ensino
Gestão pedagógica:

- Diário de classe
- Frequência
- Avaliações e notas
- Boletim escolar

### Merenda Escolar
Gestão da alimentação:

- Cardápios
- Controle de estoque
- Distribuição
- Relatórios nutricionais

### Transporte Escolar
Gestão do transporte:

- Rotas
- Veículos
- Motoristas
- Controle de passageiros

## Portal do Aluno

Acesso online para:
- Consulta de notas
- Frequência
- Calendário
- Comunicados`
  },
  {
    id: "saude",
    title: "Saúde",
    category: "modulos",
    order: 7,
    content: `# Módulo Saúde

Sistema de gestão em saúde pública.

## Áreas do Módulo

### Cadastro de Pacientes
Gestão de usuários do sistema:

- Cadastro Único (Cartão SUS)
- Histórico médico
- Prontuário eletrônico
- Atendimentos

### Agendamento
Sistema de marcação de consultas:

- Agenda médica
- Agendamento online
- Fila de espera
- Confirmação por SMS

### Atendimento
Registro de atendimentos:

- Ficha de atendimento
- Prescrições
- Exames solicitados
- Encaminhamentos

### Farmácia
Gestão farmacêutica:

- Controle de medicamentos
- Dispensação
- Receituário
- Estoque

### Vigilância Sanitária
Controle sanitário:

- Fiscalização
- Alvarás sanitários
- Notificações
- Processos

## Relatórios de Saúde

- Produção ambulatorial
- Indicadores de saúde
- Relatórios epidemiológicos
- Relatórios gerenciais`
  },
  {
    id: "nota-fiscal",
    title: "Nota Fiscal",
    category: "modulos",
    order: 8,
    content: `# Módulo Nota Fiscal

Sistema de emissão e gestão de notas fiscais eletrônicas.

## Funcionalidades

### Nota Fiscal de Serviços (NFS-e)
Emissão eletrônica de notas fiscais:

- Emissão de NFS-e
- Cancelamento
- Substituição
- Envio automático por e-mail

### Gestão de Prestadores
Controle de prestadores:

- Cadastro de prestadores
- Certificado digital
- Configurações de emissão
- Série de notas

### Recepção de Notas
Controle de notas tomadas:

- Recebimento automático
- Validação
- Escrituração
- Retenções

### Relatórios Fiscais
Relatórios para fiscalização:

- Livro de prestação
- Livro de tomada
- Declarações
- Guias de recolhimento

## Como Emitir NFS-e

` + "```" + `
1. Acesse Nota Fiscal > Emissão
2. Preencha os dados do tomador
3. Adicione os serviços prestados
4. Confira os valores e impostos
5. Emita a nota
` + "```" + `

## Integração

O módulo integra automaticamente com:
- Contabilidade
- Arrecadação
- Tributário`
  },
  {
    id: "transparencia",
    title: "Transparência",
    category: "modulos",
    order: 9,
    content: `# Módulo Transparência

Portal de transparência para atendimento à Lei de Acesso à Informação.

## Funcionalidades

### Portal da Transparência
Publicação de dados públicos:

- Receitas e despesas
- Licitações e contratos
- Pessoal e folha
- Convênios
- Obras públicas

### e-SIC
Sistema de Informação ao Cidadão:

- Recebimento de pedidos
- Protocolo eletrônico
- Gestão de prazos
- Recursos

### Dados Abertos
Disponibilização de dados:

- API de dados
- Downloads
- Formatos abertos (CSV, JSON, XML)
- Documentação

### Relatórios Legais
Publicações obrigatórias:

- Relatórios da LRF
- RREO
- RGF
- Demonstrativos contábeis

## Acesso Público

O portal é acessível em:
- transparencia.municipio.gov.br
- Consultas sem necessidade de login
- Dados atualizados diariamente
- Responsivo para mobile`
  },
  {
    id: "servicos-online",
    title: "Serviços On-Line",
    category: "modulos",
    order: 10,
    content: `# Módulo Serviços On-Line

Portal de serviços digitais para o cidadão.

## Serviços Disponíveis

### Serviços ao Cidadão
Autoatendimento online:

- Emissão de certidões
- Segunda via de guias
- Consulta de débitos
- Parcelamento online

### Protocolo Digital
Abertura de processos:

- Requerimentos
- Solicitações
- Documentação digital
- Acompanhamento

### Agendamento
Marcação de atendimentos:

- Escolha de serviço
- Data e horário
- Confirmação por e-mail/SMS
- Cancelamento online

### Ouvidoria
Canal de comunicação:

- Reclamações
- Sugestões
- Elogios
- Denúncias

## Como Usar

### Primeiro Acesso

` + "```" + `
1. Acesse o portal de serviços
2. Clique em "Cadastrar"
3. Preencha seus dados
4. Confirme o e-mail
5. Acesse com CPF e senha
` + "```" + `

### Solicitação de Serviço

1. Faça login no portal
2. Escolha o serviço desejado
3. Preencha o formulário
4. Anexe documentos (se necessário)
5. Acompanhe pelo número do protocolo

## Vantagens

- Atendimento 24/7
- Sem filas
- Economia de tempo
- Histórico de solicitações`
  },
  {
    id: "bi-elastic",
    title: "BI - Elastic",
    category: "modulos",
    order: 11,
    content: `# Módulo BI - Elastic

Business Intelligence com tecnologia Elasticsearch para análise avançada de dados.

## Características

### Dashboards Analíticos
Visualização avançada de dados:

- Dashboards interativos
- Gráficos dinâmicos
- Indicadores em tempo real
- Drill-down de informações

### Análise de Dados
Ferramentas analíticas:

- Análise multidimensional
- Séries temporais
- Comparativos
- Tendências

### Big Data
Processamento de grandes volumes:

- Indexação rápida
- Busca em tempo real
- Agregações complexas
- Análise de logs

### Relatórios Customizados
Criação de relatórios:

- Designer visual
- Filtros dinâmicos
- Agendamento
- Exportação múltiplos formatos

## Dashboards Disponíveis

### Financeiro
- Execução orçamentária
- Receitas vs despesas
- Análise de empenhos
- Projeções

### Gestão
- Indicadores de desempenho
- Metas e resultados
- Análise comparativa
- Painéis gerenciais

## Acesso

Disponível em:
- Interface web
- API REST
- Integração com sistemas
- Mobile responsivo`
  },
  {
    id: "protocolo-eletronico",
    title: "Protocolo Eletrônico",
    category: "modulos",
    order: 12,
    content: `# Módulo Protocolo Eletrônico

Sistema de gestão documental e processos eletrônicos.

## Funcionalidades

### Protocolo de Documentos
Recepção e registro:

- Protocolo de entrada
- Protocolo de saída
- Protocolo interno
- Numeração automática

### Gestão de Processos
Tramitação eletrônica:

- Abertura de processos
- Tramitação entre setores
- Despachos
- Arquivamento

### Documentos Digitais
Gestão documental:

- Upload de documentos
- Assinatura digital
- Versionamento
- Indexação e busca

### Workflow
Fluxos automatizados:

- Fluxos predefinidos
- Aprovações em cadeia
- Notificações automáticas
- Prazos e alertas

## Tramitação de Processos

### Como Tramitar

` + "```" + `
1. Abra o processo
2. Clique em "Tramitar"
3. Selecione o destino
4. Adicione despacho (opcional)
5. Confirme o envio
` + "```" + `

### Acompanhamento

- Histórico completo
- Localização atual
- Tempo em cada setor
- Prazo de resposta

## Vantagens

- Redução de papel
- Agilidade na tramitação
- Rastreabilidade total
- Segurança documental
- Economia de espaço físico`
  },
  {
    id: "e-storage",
    title: "e-Storage",
    category: "modulos",
    order: 13,
    content: `# Módulo e-Storage

Sistema de armazenamento e gestão de documentos digitais.

## Funcionalidades

### Armazenamento em Nuvem
Repositório centralizado:

- Armazenamento seguro
- Backup automático
- Redundância de dados
- Alta disponibilidade

### Organização
Estrutura hierárquica:

- Pastas e subpastas
- Tags e categorias
- Metadados
- Busca avançada

### Compartilhamento
Colaboração segura:

- Links de compartilhamento
- Controle de permissões
- Versionamento
- Histórico de alterações

### Segurança
Proteção de dados:

- Criptografia
- Controle de acesso
- Auditoria completa
- Conformidade LGPD

## Tipos de Arquivos

Suporte para diversos formatos:
- Documentos (PDF, DOC, DOCX)
- Planilhas (XLS, XLSX, CSV)
- Imagens (JPG, PNG, GIF)
- Vídeos (MP4, AVI)
- Outros formatos

## Integração

Integrado com:
- Protocolo Eletrônico
- Nota Fiscal
- Todos os módulos do sistema

## Capacidade

- Armazenamento ilimitado
- Upload de arquivos até 100MB
- Sem limite de número de arquivos
- API para integração

## Como Usar

### Upload de Arquivos

` + "```" + `
1. Acesse e-Storage
2. Selecione a pasta
3. Clique em "Upload"
4. Selecione os arquivos
5. Aguarde o processamento
` + "```" + `

### Busca de Documentos

- Busca por nome
- Busca por conteúdo
- Filtros avançados
- Busca por data`
  },


  {
    id: "solicitacoes",
    title: "Solicitações",
    category: "compras",
    order: 1,
    content: `# Submódulo Solicitações

Esta rotina possibilita a consulta e acompanhamento das principais fases do processo de aquisição de materiais/serviços realizados pela administração pública.`
  },
];


export function getPageById(id: string): DocPage | undefined {
  return pages.find(page => page.id === id);
}

export function getPagesByCategory(categoryId: string): DocPage[] {
  return pages
    .filter(page => page.category === categoryId)
    .sort((a, b) => a.order - b.order);
}

export function getCategoryById(id: string): DocCategory | undefined {
  return categories.find(cat => cat.id === id);
}

export function searchPages(query: string): DocPage[] {
  const lowerQuery = query.toLowerCase();
  return pages.filter(page => 
    page.title.toLowerCase().includes(lowerQuery) ||
    page.content.toLowerCase().includes(lowerQuery)
  );
}