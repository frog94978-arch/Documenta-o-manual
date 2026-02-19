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

O GitLab é utilizado para o controle de versão e gerenciamento do ciclo de vida do desenvolvimento de software. Aqui centralizamos nosso código-fonte, acompanhamos o progresso de tarefas e garantimos a integridade do sistema.`
  },
  {
    id: "padrao-emails",
    title: "Padrão de e-mails",
    category: "guia-inicio",
    order: 3,
    content: `# Padrão de e-mails

Diretrizes e modelos para padronização de e-mails corporativos enviados pelo sistema, incluindo assinaturas e estrutura de texto.`
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