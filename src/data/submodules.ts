export interface SubmoduleOption {
  id: string;
  label: string;
  items?: string[];
}

export interface Submodule {
  id: string;
  title: string;
  module: string;
  options: {
    cadastro: string[];
    consulta: string[];
    relatorio: string[];
    procedimentos: string[];
  };
}

export const submodules: Submodule[] = [
  {
    id: "contabilidade",
    title: "Contabilidade",
    module: "patrimonial",
    options: {
      cadastro: [
        "Históricos de Lançamentos",
        "Plano de Contas",
        "Contas do Exercício",
        "Tipos de Compras",
        "Plano de Contas (PCASP)",
        "Plano de Contas Orçamentário",
        "Rotinas administrativas",
        "Plano de Contas"
      ],
      consulta: [
        "Lançamentos Contábeis (novo)",
        "Lançamentos",
        "Receitas",
        "Contas",
        "Consulta Empenho",
        "Consistência Contábil",
        "Conta Corrente",
        "Saldos das Contas de Disponibilidade de Recursos",
        "Conferência por Recurso DDR",
        "Auditoria",
        "EMPENHOS PELA CONTA DO PASSIVO",
        "Consistência de Lançamentos de Sup. de Fundos",
        "Liquidações com ISF iguais no 1º lançamento",
        "Liquidações e pagamentos com inconsistência no atributo ISF"
      ],
      relatorio: [
        "Balanço Geral",
        "Cadastrais",
        "Balancetes",
        "Gerenciais",
        "Razão",
        "Relatórios da LRF (anteriores a 2010)",
        "Relatórios de Conferência",
        "Extratos",
        "Renúncia de Receita",
        "Balanços para os RPPS",
        "Demonstrativos Fiscais(LRF)",
        "Incorporação Tributária",
        "Demonstrações contábeis do DCASP",
        "SICONFI",
        "Atualização do Plano de Contas",
        "Regime de competência",
        "Validação Plano de Contas MSC",
        "Nota de Lançamento",
        "Notificação de Recebimento de Recursos Federais",
        "Demonstrativo da Evolução da Receita",
        "Demonstrativo da Evolução da Despesa",
        "Índices Constitucionais e de Gestão Fiscal",
        "Licitações Não SRP com SC tipo Compilação"
      ],
      procedimentos: [
        "Parâmetros",
        "Parâmetros Lançamento Despesa",
        "Arrecadação de Receita",
        "Escriturar Reavaliação",
        "Utilitários da Contabilidade",
        "Permite alterar parâmetro de relatório",
        "Exercício Contábil",
        "Exportação de Dados para TCE",
        "Tabelas Nacionais",
        "Escrituração Contábil",
        "Retorna Data Sistema",
        "Matriz de Saldos Contábeis",
        "Conta Corrente",
        "Recria Conplanoexesaldo / Disp Financ"
      ]
    }
  },
  {
    id: "custos",
    title: "Custos",
    module: "patrimonial",
    options: {
      cadastro: [
        "Ident. da Conta",
        "Cadastro de Criterios de Rateio",
        "Plano de Custo"
      ],
      consulta: [],
      relatorio: [
        "Plano de Custo",
        "Mapa de Custos"
      ],
      procedimentos: [
        "Manutenção de Parâmetros",
        "Processamento dos Custos",
        "Encerramento dos Custos"
      ]
    }
  },
  {
    id: "empenho",
    title: "Empenho",
    module: "patrimonial",
    options: {
      cadastro: [
        "Histórico do Empenho",
        "Tipo de Empenho",
        "Cadastro de tipo de restos a pagar",
        "Cadastro de restos a pagar",
        "Tipos de Eventos",
        "Retenções",
        "Lista de Classificação de Credores"
      ],
      consulta: [
        "Consulta Empenho",
        "Autorização de Empenho",
        "Agendas",
        "Ordens de Compra",
        "Consulta de Notas Fiscais"
      ],
      relatorio: [
        "Documentos",
        "Relatorios Cadastrais",
        "Relatórios de Movimentação",
        "Relatório de Conferência",
        "Delib. 200/96 - TCE RJ"
      ],
      procedimentos: [
        "Manutenção de Parâmetros",
        "Empenho por Instituição",
        "Autorização de Empenho",
        "Manutenção de Empenho",
        "Ordem de Pagamento",
        "Manutenção de Agenda",
        "Processa Agenda Layout",
        "Prestação de contas",
        "Confere Prestação de conta",
        "Configuração do texto da ordem de compra",
        "Usuário ter acesso geral aos empenhos",
        "Manutenção de Permissões da Despesa",
        "Códigos de Arrecadação das Retenções",
        "Libera empenhos para ordem de compra",
        "Ordem Auxiliar Por Credor",
        "Prestação de Contas",
        "Manutenção da Lista de Classificação de Credores",
        "Suspensão da Classificação de Credores",
        "Rotinas administrativas",
        "Manutenção das Retenções"
      ]
    }
  },
  {
    id: "planejamento",
    title: "Planejamento",
    module: "patrimonial",
    options: {
      cadastro: [
        "PPA",
        "LDO",
        "LOA",
        "PIB",
        "Receita Corrente Líquida",
        "Manutenção de ODS"
      ],
      consulta: [],
      relatorio: [
        "Demonstrativos",
        "Anexo de Metas e Riscos Fiscais",
        "Cronograma de Desembolso",
        "Ações e Metas",
        "Programas e Indicadores"
      ],
      procedimentos: [
        "Cálculo das Projeções",
        "Manutenção",
        "Integração Orçamento",
        "Cronograma de Desembolso",
        "Lançar Resultados Ações e Metas",
        "Lançar Resultados Programas e Indicadores",
        "Reprocessar estimativa da Receita"
      ]
    }
  },
  {
    id: "orcamento",
    title: "Orçamento",
    module: "patrimonial",
    options: {
      cadastro: [
        "Parâmetros Macroeconômicos",
        "Cenário Macroeconômico",
        "Tipos de Recursos",
        "Orgãos",
        "Unidades",
        "Função",
        "Subfunção",
        "Programas",
        "Eixos PPA",
        "Atividades/Projetos",
        "Leis para Suplementação",
        "Tipos de Suplementação",
        "Desdobramento da Receita",
        "Cadastro de Indicadores PPA",
        "Cadastro de Produtos PPA",
        "PPA/LDO",
        "Período de Indicadores",
        "Cadastro de Unidades Responsáveis",
        "Subtítulo/Localizador de Gasto",
        "Pactos",
        "Manutenção de Pactos",
        "Cadastro de C. Peculiar / C. Aplicação",
        "Manutenção de Diretrizes PPA"
      ],
      consulta: [
        "Saldo da Despesa",
        "Saldo da Receita",
        "Plano Orçamentário"
      ],
      relatorio: [
        "Anexos",
        "Cadastrais",
        "Demonstrativos do Orçamento",
        "Suplementações",
        "Relatórios do PPA",
        "Reserva de Saldo",
        "Metas de Receita/Despesa",
        "Pactos",
        "Anexo de Metas e Riscos Fiscais",
        "Prog. Financeira e Cronog. de Desembolso",
        "Documentos",
        "Acompanhamento do Cronograma"
      ],
      procedimentos: [
        "Parâmetros",
        "Metas da Despesa",
        "Previsão da Receita",
        "Reserva de Saldo",
        "Suplementações/Reduções",
        "Manutenção da Receita",
        "Liberar solicitação",
        "Associação dos Parâmetros Macroeconômico",
        "PPA",
        "Pactos",
        "Prog . Financeira e Cronog de Desembolso",
        "Utilitários do Orçamento",
        "Avaliação de Metas"
      ]
    }
  },
  {
    id: "tesouraria",
    title: "Tesouraria",
    module: "patrimonial",
    options: {
      cadastro: [
        "Cadastro de conta pagadora",
        "Cadastro",
        "Cadastro de Tipo de conciliação",
        "Cadastro de Categoria de mov. bancário",
        "Cadastro de Movimento Bancário",
        "Manutenção de Receitas",
        "Autenticadoras",
        "Contas",
        "Manutenção de Bancos",
        "Juros e Multas",
        "Cadastro de Agências",
        "GRM",
        "Cadastro de Infrações de Trânsito"
      ],
      consulta: [
        "Geral Financeira",
        "Saldo da Tesouraria",
        "Extrato de Tesouraria",
        "Consulta Movimentações",
        "Consulta Empenho",
        "Arquivos",
        "Agendas",
        "Consulta de Slips",
        "Cheque",
        "GRM"
      ],
      relatorio: [
        "Relatórios de Cadastro",
        "Relatórios de Conferências",
        "Relatório de Taxas Por Período",
        "Relatório de Recibos Avulsos",
        "Reemite Recibo Avulso",
        "Conferência dos Valores Pagos Por Banco",
        "Receitas Por Período - Tesouraria",
        "Receitas Por Período(pela data da baixa)",
        "Relatório das Movimentações",
        "Emissão de Boletim",
        "Agenda",
        "Arquivos Agenda",
        "Slip",
        "Processos do empenho",
        "Receitas por Contribuinte",
        "Relatório de Repasses",
        "Razão",
        "Fornecedores com Conta",
        "Relatório de Planilha",
        "Reemissão de Planilha",
        "Estorno de pagamento",
        "Gastos por desdobramento",
        "Receitas sem Ligação Orçamento/Plano",
        "Receitas Pagas por Período",
        "Relatórios de receitas por baixa banco",
        "Demonstrativo de Pagamento a Fornecedor",
        "Arrecadações por Taxa",
        "Reemissão de Ordem de Pagamento Auxiliar",
        "Conciliação Bancária",
        "Arquivo Retorno Processado",
        "Comparativo valores Pagos/Classificados",
        "Folha de Pagamento",
        "Lista de Classificação de Credores",
        "Detalhamento da Baixa Bancaria CSV",
        "Notas de Liquidação Suspensas",
        "GRM",
        "Infração de Trânsito",
        "Relatório DJO 190",
        "Operações TEF",
        "Receitas por Período e Histórico"
      ],
      procedimentos: [
        "Arrecadação de Receita",
        "Conciliação Bancária com carga de extrato",
        "Conciliação Bancária sem carga de extrato",
        "Planilha de Lançamento",
        "Aplicações Bancárias",
        "Acerto de Autenticação",
        "Recibo de Receita",
        "Reemissão da Bobina",
        "Processar Arquivos Retorno Banco",
        "Movimentações Internas",
        "Inclusão de Parcelamentos",
        "Agenda",
        "Conta Padrão para Autenticadora",
        "Altera Conta Fornecedor",
        "Processamento Arquivo Simples(Eventos)",
        "Débito em Conta",
        "Pagamento de empenho",
        "Operação Financeira Extra Orçamentária",
        "Ordem Bancária",
        "Devolução de Adiantamento",
        "Retorna Data Sistema",
        "Importa arquivo DJO",
        "GRM",
        "Cadastro de Órgão Público",
        "Infrações de Trânsito",
        "Arquivo Tef"
      ]
    }
  },
  {
    id: "configuracoes",
    title: "Configurações",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [
        "Solicitações",
        "Ordens de Compra",
        "Consulta Fornecedor",
        "Consulta Item",
        "Saldo da Despesa",
        "Consulta Empenho",
        "CGM",
        "Cotações de Preços",
        "Abertura Registro de Preço",
        "Consulta Processo de Compras",
        "CGM (novo)"
      ],
      procedimentos: [
        "Solicitações",
        "Ordens de Compra",
        "Consulta Fornecedor",
        "Consulta Item",
        "Saldo da Despesa",
        "Consulta Empenho",
        "CGM",
        "Cotações de Preços",
        "Abertura Registro de Preço",
        "Consulta Processo de Compras",
        "CGM (novo)"
      ]
    }
  },
  {
    id: "financeiro",
    title: "Financeiro",
    module: "patrimonial",
    options: {
      cadastro: [
        "Grupos de Material/Serviço",
        "Subgrupos de Materiais/Serviços",
        "Materiais/Serviços",
        "Cadastro de Unidades",
        "Cadastro de Tipos de Certificado",
        "Fornecedores"
      ],
      consulta: [
        "Grupos de Material/Serviço",
        "Subgrupos de Materiais/Serviços",
        "Materiais/Serviços",
        "Cadastro de Unidades",
        "Cadastro de Tipos de Certificado",
        "Fornecedores"
      ],
      relatorio: [
        "Balanço Geral",
        "Cadastrais",
        "Balancetes",
        "Gerenciais",
        "Razão",
        "Relatórios da LRF (anteriores a 2010)",
        "Relatórios de Conferência",
        "Extratos",
        "Renúncia de Receita",
        "Balanços para os RPPS",
        "Demonstrativos Fiscais(LRF)",
        "Incorporação Tributária",
        "Demonstrações contábeis do DCASP",
        "SICONFI",
        "Atualização do Plano de Contas",
        "Regime de competência",
        "Validação Plano de Contas MSC",
        "Nota de Lançamento",
        "Notificação de Recebimento de Recursos Federais",
        "Demonstrativo da Evolução da Receita",
        "Demonstrativo da Evolução da Despesa",
        "Índices Constitucionais e de Gestão Fiscal",
        "Licitações Não SRP com SC tipo Compilação"
      ],
      procedimentos: [
        "Grupos de Material/Serviço",
        "Subgrupos de Materiais/Serviços",
        "Materiais/Serviços",
        "Cadastro de Unidades",
        "Cadastro de Tipos de Certificado",
        "Fornecedores"
      ]
    }
  },
  {
    id: "patrimonial",
    title: "Patrimonial",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "tributario",
    title: "Tributário",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "recursos-humanos",
    title: "Recursos Humanos",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "esocial",
    title: "eSocial",
    module: "recursos-humanos",
    options: {
      cadastro: [
        "Cadastro de formulários"
      ],
      consulta: [
        "Situação de Eventos"
      ],
      relatorio: [
        "Conferência",
        "Qualificação Cadastral",
        "Eventos de Retorno",
        "Relatório Comparativo de Configuração de Rubricas"
      ],
      procedimentos: [
        "Carga de Dados",
        "Preenchimento",
        "Configuração",
        "Envio de eventos para o eSocial",
        "Qualificação Cadastral",
        "Re-enviar Eventos para o eSocial"
      ]
    }
  },
  {
    id: "est-probatorio",
    title: "Est Probatorio",
    module: "recursos-humanos",
    options: {
      cadastro: [
        "Cadastro de Estágio",
        "Questões do Estágio",
        "Períodos do Estágio",
        "Quesitos do Estágio",
        "Comissão De Estágio",
        "Carga de Dados",
        "Preenchimento",
        "Configuração",
        "Envio de eventos para o eSocial",
        "Qualificação Cadastral",
        "Re-enviar Eventos para o eSocial"
      ],
      consulta: [
        "Avaliações",
        "Carga de Dados",
        "Preenchimento",
        "Configuração",
        "Envio de eventos para o eSocial",
        "Qualificação Cadastral",
        "Re-enviar Eventos para o eSocial"
      ],
      relatorio: [
        "Boletim de Estágio",
        "Estagios",
        "Avaliação Prévia de Estágio",
        "Rescisão estágio",
        "Contrato Estágio",
        "Carga de Dados",
        "Preenchimento",
        "Configuração",
        "Envio de eventos para o eSocial",
        "Qualificação Cadastral",
        "Re-enviar Eventos para o eSocial"
      ],
      procedimentos: [
        "Agendar Estágio",
        "Avaliação",
        "Resultado Final",
        "Carga de Dados",
        "Preenchimento",
        "Configuração",
        "Envio de eventos para o eSocial",
        "Qualificação Cadastral",
        "Re-enviar Eventos para o eSocial"
      ]
    }
  },
  {
    id: "pessoal",
    title: "Pessoal",
    module: "recursos-humanos",
    options: {
      cadastro: [
        "Servidores",
        "Tabelas",
        "Pensões Alimentícias",
        "Sindicatos",
        "Configuração das Rubricas do Ponto",
        "Calendários",
        "Contas por Recurso",
        "Seleções",
        "Desdobramentos para Empenho",
        "Arquivos Bancários",
        "Tipo de Agrupamento de Rubricas"
      ],
      consulta: [
        "Cadastro de Servidores",
        "Consulta Financeira",
        "Ficha Financeira por Código",
        "Ponto por Código",
        "Cargos",
        "Lotação",
        "Pontos por Registro"
      ],
      relatorio: [
        "Relatórios Cadastrais",
        "Relatórios Financeiros",
        "Gerador de Relatórios",
        "Salários Atrasados",
        "Rotinas Especiais 1",
        "Rotinas Especiais 2",
        "Rotinas Especiais 4",
        "Rotinas Especiais 5",
        "Rotinas Especiais 6",
        "Cálculos de aposentadoria",
        "Rotinas Especiais 7",
        "Rotinas Especiais 8",
        "Autônomos",
        "Geração",
        "Contratos Emergenciais",
        "Enquadramento",
        "Desconto Externo de Previdência (INSS)",
        "Relatório FUNDEB",
        "Atualização Cadastro e-cidadeOnline",
        "Contracheques Liberados",
        "Contagem Tempo - Externo",
        "Log de Alteração do Ponto"
      ],
      procedimentos: [
        "Manutenção de Afastamentos",
        "Manutenção de Regras de Ponto",
        "Manutenção de Rescisão",
        "Manutenção de Férias",
        "Manutenção de Vales Transporte",
        "Manutenção do Ponto",
        "Manutenção de Empréstimos Consignados",
        "Manutenção e-Cidade Online",
        "Cálculo Financeiro",
        "Geração em Disco",
        "Convênio / Efetividade",
        "Geração de Arquivos",
        "Rotinas Mensais",
        "Implantação",
        "Manutenção do 13º",
        "Fechamento da Complementar",
        "Manutenção de Salários Atrasados",
        "Reajuste de Salários",
        "Manutenção de Parâmetros",
        "Geração de Empenhos",
        "Vale Transporte Integrado",
        "Procedência",
        "Provisão",
        "Emissão de Cheques",
        "Geração de Empenhos (Novo)",
        "Autônomos",
        "Diferenças",
        "Manutenção de Grupo de Rubricas",
        "Liberação contracheque Ecidade Online",
        "Processamento de Dados do Ponto",
        "Lançamento de Assentamentos no Ponto",
        "Manutenção de Contratos Emergenciais",
        "Pagamento de Rescisões",
        "Controle de Rubricas",
        "Jetons",
        "Importa Local Ponto"
      ]
    }
  },
  {
    id: "rh",
    title: "RH",
    module: "recursos-humanos",
    options: {
      cadastro: [
        "Tipos de Assentamento",
        "Tipos de Perda",
        "Grupos de Avaliações",
        "Tipo de Avaliação",
        "Assinaturas Portaria",
        "Tabela de Cursos/Eventos",
        "Tipos de Curso",
        "Cadastro de Envolvimentos",
        "Cadastro de Tipos de Ato",
        "Cadastro de Procedimento de Resolução",
        "Atos de admissão",
        "Cadastro de Leis",
        "Cadastro de Vínculos",
        "Protelacões",
        "Efetividade"
      ],
      consulta: [
        "Cadastro de Servidores",
        "Assentamentos / Afastamentos",
        "Assentamentos do Servidor",
        "Conferência Recadastramento"
      ],
      relatorio: [
        "Grade de Efetividade",
        "Certidão de Tempo de Serviço",
        "Assentamentos Abertos",
        "Vantagens por Servidor",
        "Portaria Por Período/Tipo",
        "Reemissão de Portarias",
        "Extrato da Previdência",
        "Assentamentos Por Período",
        "Servidores por Tipos de Curso",
        "Previsão de Direitos",
        "Ponto Eletrônico",
        "Efetividade",
        "Portaria 154",
        "Recadastramento",
        "Documentos SMS",
        "Estágio"
      ],
      procedimentos: [
        "Manutenção de Assentamentos",
        "Currículos",
        "Parâmetros RH",
        "Cadastro do Interstício de Avaliação",
        "Fechamento de Interstício",
        "Banco de Horas",
        "Concessão de Direitos",
        "Efetividade",
        "Ponto Eletrônico",
        "Assinatura Digital de Portaria",
        "Processamento Recadastramento"
      ]
    }
  },
  {
    id: "educacao",
    title: "Educação",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "saude",
    title: "Saúde",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "nota-fiscal",
    title: "Nota Fiscal",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "transparencia",
    title: "Transparência",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "servicos-on-line",
    title: "Serviços On-Line",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "bi-elastic",
    title: "BI - Elastic",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "protocolo-eletronico",
    title: "Protocolo Eletrônico",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "e-storage",
    title: "e-Storage",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "compras",
    title: "Compras",
    module: "patrimonial",
    options: {
      cadastro: [
        "Grupos de Material/Serviço",
        "Subgrupos de Materiais/Serviços",
        "Materiais/Serviços",
        "Cadastro de Unidades",
        "Cadastro de Tipos de Certificado",
        "Fornecedores"
      ],
      consulta: [
        "Solicitações",
        "Ordens de Compra",
        "Consulta Fornecedor",
        "Consulta Item",
        "Saldo da Despesa",
        "Consulta Empenho",
        "CGM",
        "Cotações de Preços",
        "Abertura Registro de Preço",
        "Consulta Processo de Compras",
        "CGM (novo)"
      ],
      relatorio: [
        "Registro de preço",
        "Documentos",
        "Gerenciais",
        "Conferência",
        "Cadastrais",
        "Gera Lista de Itens em TXT"
      ],
      procedimentos: [
        "Libera Fornecedor",
        "Solicitação de Compras",
        "Orçamento de solicitação",
        "Liberar solicitação",
        "Processo de compras",
        "Orçamento de processo de compras",
        "Autorização de Empenho",
        "Parâmetros",
        "Ordem de Compra",
        "Andamento Inicial",
        "Andamento da solicitação",
        "Gera Certificado",
        "Acessa Itens",
        "Configurações do texto da ordem de compra",
        "Registro de Preço",
        "Manutenção de reserva de saldo",
        "Manutenção Solicitação de compras Registro de Preço"
      ]
    }
  },
  {
    id: "licitacoes",
    title: "Licitações",
    module: "patrimonial",
    options: {
      cadastro: [
        "Modalidades",
        "Cadastro de Locais",
        "Cadastro de Comissão",
        "Cadastro",
        "Tipo de Empresas",
        "Movimentação de Registro de Preços"
      ],
      consulta: [
        "Licitação",
        "Edital(Download)",
        "CGM"
      ],
      relatorio: [
        "Licitação",
        "Relatório Resumido da Licitação",
        "Mapa das Propostas",
        "Gera Lista de Itens em TXT",
        "Homologação de Processo",
        "Adjudicação de Processo",
        "Licitações Liberadas na Web",
        "Edital (Download)",
        "Emite Autorização de empenho",
        "Situações da Licitação",
        "Fornecedores Empatados e Cotações ME/EPP",
        "Historico do Julgamento da Licitação Itens Bloqueados",
        "SICOM - Edital e Licitação"
      ],
      procedimentos: [
        "Configuração dos Editais",
        "Edital Web",
        "Inclusão Proposta Fornecedor",
        "Licitação",
        "Fornecedores da Licitação",
        "Credenciamento de Fornecedores da Licitação",
        "Reserva de Cotas",
        "Lançar Propostas",
        "Habilitação de Fornecedores",
        "Eventos",
        "Trocar Fornecedor",
        "Cancelamento de Julgamento",
        "Gerar Autorização",
        "Anula Autorização",
        "Manutenção de Licitação",
        "Andamento da Solicitação",
        "Acessa Itens",
        "Parâmetros",
        "Registro de Preço",
        "Edital",
        "Ata",
        "Minuta",
        "Exportação de Dados",
        "Portal Compras Publicas",
        "Integração Licitar Digital"
      ]
    }
  },
  {
    id: "contratos",
    title: "Contratos",
    module: "patrimonial",
    options: {
      cadastro: [
        "Garantia",
        "Grupos de Acordos",
        "Categoria de Acordo",
        "Cadastro de Comissões",
        "Tipos de Acordos",
        "Natureza dos Acordos",
        "Penalidades"
      ],
      consulta: [
        "Acordo",
        "Consulta Empenho"
      ],
      relatorio: [
        "Movimentações",
        "Conferências",
        "Reimpressão Acordo",
        "Extrato de Contrato",
        "Contratos sem Programação de Competência"
      ],
      procedimentos: [
        "Acordo",
        "Anulação do Contrato",
        "Assinatura do Contrato",
        "Homologação",
        "Recisão do Contrato",
        "Aditamentos",
        "Regime de Competência",
        "Paralisação",
        "Reativação",
        "Parâmetros",
        "Excluir Aditamento",
        "Acertar Valores Item Acordo Dotação"
      ]
    }
  },
  {
    id: "material",
    title: "Material",
    module: "patrimonial",
    options: {
      cadastro: [
        "Cadastro de Unidades",
        "Cadastro de Material",
        "Cadastro de Fabricantes",
        "Depósitos",
        "Grupo/Subgrupo",
        "Veiculos Tipo/Grupo/Subgrupo"
      ],
      consulta: [
        "Material",
        "Ordens de Compra",
        "Consulta Empenho",
        "Arquivos Pit",
        "Controle de Validade"
      ],
      relatorio: [
        "Movimentação",
        "Conferência",
        "Cadastrais",
        "Documentos",
        "Legais"
      ],
      procedimentos: [
        "Implantação de estoque",
        "Manutenção de Parâmetros",
        "Entrada de Ordem de Compra",
        "Requisição de Saída de Materiais",
        "Atendimento de Requisição",
        "Entrada manual",
        "Saída manual",
        "Transferência entre depósitos",
        "Devolução de Materiais",
        "Zera Estoque por Departamento",
        "Zera Estoque por Item",
        "Configuração de texto da ordem de compra",
        "Centro de Custos",
        "PIT",
        "Ajuste de Preço Médio",
        "Implantação Tipo Grupo",
        "Manutenção de Estoque",
        "Fechamento do Estoque",
        "Planilha de Distribuição"
      ]
    }
  },
  {
    id: "patrimonio",
    title: "Patrimônio",
    module: "patrimonial",
    options: {
      cadastro: [
        "Tipos de baixa",
        "Tipo de Aquisição",
        "Tipo de Depreciação",
        "Modelo",
        "Marca",
        "Medidas",
        "Convênios",
        "Comissões",
        "Lançamento de Correção",
        "Seguradoras",
        "Apólices",
        "Situação dos Bens",
        "Classificação dos Bens",
        "Bens",
        "Tipo de configuração da placa",
        "Tipo de Guarda",
        "Cadastro de Divisões"
      ],
      consulta: [
        "Bens",
        "Historico dos Bens",
        "Consulta Empenho"
      ],
      relatorio: [
        "Remite ficha de transferência",
        "Baixa de bens",
        "Apólices",
        "Termo de responsabilidade",
        "Emissão Termo de Guarda",
        "Bens por Classificação",
        "Geral de bens",
        "Financeiro Patrimonial",
        "Cadastrais",
        "Ficha de bens",
        "Etiquetas emitidas",
        "Cadastro de Retenções",
        "Conferência",
        "Legais",
        "Inventário",
        "Reimpressão do Termo de Guarda",
        "Reimpressão da Devolução Termo de Guarda",
        "Relatório Lotes",
        "Relatório Imóveis",
        "Bens (Último Ano)",
        "Transferência de bens em aberto"
      ],
      procedimentos: [
        "Transferência de bens",
        "Termo de Guarda",
        "Devolução do Termo de Guarda",
        "Confirmação de Transferência",
        "Alterar Placa",
        "Alterar Situação",
        "Configuração de Etiquetas",
        "Emite etiquetas",
        "Implantação Depreciação",
        "Processamento da Depreciação",
        "Parâmetros",
        "Baixa de Bens",
        "Inventário",
        "Levantamento Patrimonial",
        "Exclusão do Histórico de Placa"
      ]
    }
  },
  {
    id: "protocolo",
    title: "Protocolo",
    module: "patrimonial",
    options: {
      cadastro: [
        "Cadastro de Estados",
        "Geral do Município - CGM",
        "Cadastro de Municípios",
        "Logradouro",
        "Localidade",
        "Estados",
        "CEP",
        "Tipo de Processo",
        "Tipo de Processo / Receita",
        "Documento",
        "Documento / Tipo de Processo",
        "Variável",
        "Geral do Município - CGM (novo)",
        "Tipo de Documento"
      ],
      consulta: [
        "Geral Financeira",
        "Processo",
        "CGM",
        "CGM Duplo Processado"
      ],
      relatorio: [
        "Relatório de Andamento Padrão",
        "Relatório Processos/Departamentos",
        "CGMs corretos",
        "Relatório de Processos/CGM",
        "Variáveis",
        "Documentos",
        "Tipos de Processo",
        "Documentos / Tipo de Processo",
        "Duplos no CGM",
        "Reimpressão da Capa do Processo",
        "Reimpressão do Termo de Transferência",
        "Processos",
        "Consistência de CPF/CNPJ",
        "Etiquetas",
        "Processos por departamento",
        "CGMs Incluídos/Alterados",
        "Tipo dos Processo com Receitas",
        "Processos em Transferência",
        "Enquete E-Cidade online",
        "Enquete E-Cidade online csv",
        "Movimentação Protocolo por Usuário",
        "Monitoramento dos Processos"
      ],
      procedimentos: [
        "CGM Duplos",
        "Processos",
        "Volumes",
        "Trâmite Inicial",
        "Despachos",
        "Transferências",
        "Recebimento",
        "Arquivamento",
        "Desarquivamento",
        "Andamento Padrão",
        "Recibo de Receita",
        "Cancela Recibo",
        "Trâmite Interno",
        "Libera CNPJ zerado",
        "Libera CPF zerado",
        "Autoriza Atualização de CGM",
        "Parâmetros",
        "Apensar Processo",
        "Andamento do processo",
        "Insere QR - PDF",
        "Atualiza PDF - QR",
        "Manutenção Sócios Fora Município",
        "Andamento de Documentos"
      ]
    }
  },
  {
    id: "veiculos",
    title: "Veículos",
    module: "patrimonial",
    options: {
      cadastro: [
        "Cadastro de Tabela ANP",
        "Dados dos Veiculos",
        "Veiculos",
        "Dados dos motoristas",
        "Motoristas",
        "Oficinas",
        "Tipo de Serviço",
        "Postos",
        "Tipo de baixa veiculo",
        "Itens obrigatorios",
        "Tipo de baixa de itens",
        "Convênios de uso veicular",
        "Centrais de Veículos"
      ],
      consulta: [
        "Veículos"
      ],
      relatorio: [
        "Movimentações",
        "Cadastrais",
        "Documentos"
      ],
      procedimentos: [
        "Manutenção de Medidas",
        "Manutenção de Parâmetros",
        "Baixa de Veículos",
        "Manutenção de Veículos",
        "Retirada de Veículos",
        "Devolução de Veículos",
        "Abastecimento",
        "Baixa de itens obrigatórios",
        "Processar Tabela ANP",
        "Autorização de Circulação"
      ]
    }
  },
  {
    id: "ouvidoria",
    title: "Ouvidoria",
    module: "patrimonial",
    options: {
      cadastro: [
        "Ouvidor",
        "Cidadão",
        "Tipo de Processo",
        "Documento / Tipo de Processo",
        "Local",
        "Categoria de Tipo de Processo",
        "Forma Reclamação"
      ],
      consulta: [
        "Ouvidoria",
        "Atendimento"
      ],
      relatorio: [
        "Atendimentos",
        "Processos Tipo / Departamento",
        "Documentos"
      ],
      procedimentos: [
        "Atendimento",
        "Vincular Atendimento a Processo",
        "Trâmite inicial",
        "Transferência",
        "Controle de Atendimento",
        "Retorno ao Cidadão",
        "Prorrogação de Prazo",
        "Arquivamento",
        "Desarquivamento",
        "Andamento padrão",
        "Manutenção de Parâmetros"
      ]
    }
  },
  {
    id: "pncp",
    title: "PNCP",
    module: "patrimonial",
    options: {
      cadastro: [
        "Unidade Compradora",
        "Orgão"
      ],
      consulta: [
        "Unidade Compradora",
        "Contratos de Contratação"
      ],
      relatorio: [],
      procedimentos: [
        "Parâmetros",
        "Contratação/Edital/Aviso",
        "Contrato",
        "Ata de Registro de Preço",
        "Termo de Contrato",
        "Plano de Contratações"
      ]
    }
  }
];

export function getSubmoduleById(id: string): Submodule | undefined {
  // Normalizar para remover acentos
  const normalizeId = (str: string) => 
    str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  const normalizedSearchId = normalizeId(id);
  return submodules.find(sub => normalizeId(sub.id) === normalizedSearchId);
}

export function getSubmodulesByModule(module: string): Submodule[] {
  return submodules.filter(sub => sub.module === module);
}
