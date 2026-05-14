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
    id: "agua",
    title: "Água",
    module: "tributario",
    options: {
      cadastro: [
        "Cadastro de Endereço de Entrega",
        "Cadastro de Diâmetro de Hidrômetros",
        "Cadastro de Marca de Hidrômetros",
        "Cadastro de Leituristas",
        "Cadastro de Condomínios",
        "Cadastro de Imóveis/Terrenos",
        "Cadastro de Hidrômetros",
        "Cadastro de Situações de Leitura",
        "Cadastro de Tipos de Isenções",
        "Cadastro de Baixas de Imóveis",
        "Cadastro de Situação de Corte",
        "Cadastro de Coletores",
        "Cadastro de Contratos",
        "Cadastro de Tipos de Contrato"
      ],
      consulta: [
        "Consulta de imoveis/Terrenos",
        "Geral Financeira"
      ],
      relatorio: [
        "Relatório Instalação de Hidrômetros",
        "Relatório de Consumo/Excesso",
        "Relatório de Hidrômetros",
        "Relatório de Situação de Hidrômetros",
        "Posição da água calculada e arrecadada",
        "Bairros por Características",
        "Imóveis por Característica de Construção",
        "Matriculas Baixadas",
        "Imóveis/Hidrômetros por Logradouro",
        "Relatório de Consumo",
        "Relatório de Imobiliárias",
        "Aviso de Corte - Valor Dívida",
        "Leitura/Corte relação Leitura/Leiturista",
        "Relatório de receitas por bairro"
      ],
      procedimentos: [
        "Rotas",
        "Planilha de Leituras",
        "Hidrômetros",
        "Cálculo das Taxas",
        "Leitura de Hidrômetros",
        "Isenções",
        "Parâmetros",
        "Cortes/Religações",
        "Emissão de Carnês",
        "Coletores",
        "Desconto",
        "Isenções por CGM",
        "Cálculo de Tarifas",
        "Emissão de Carnês de Tarifa",
        "Configuração da Emissão de Débitos"
      ]
    }
  },
  {
    id: "arrecadacao",
    title: "Arrecadação",
    module: "tributario",
    options: {
      cadastro: [
        "Regras de Compensação de Crédito",
        "Regras p/ o Parcelamento",
        "Configuração de receitas p/ parcelamento",
        "Favorecido",
        "Taxas / Custas",
        "Cadastro de Ocorrências",
        "Modelo de Carnê",
        "Histórico Manual de Arrecadação",
        "Grupo de Taxa",
        "Taxas Específicas",
        "Grupo de Débito",
        "Tipos de Débitos",
        "Históricos",
        "Vencimentos",
        "Manutenção de Receitas",
        "Juros e Multas",
        "Convênios",
        "Autenticadoras",
        "Manutenção de Calendário",
        "Lançamento de Taxas",
        "Transação Tributária"
      ],
      consulta: [
        "Geral Financeira",
        "Numpre/Numbanco",
        "Declaração de Quitação Anual",
        "Consulta Parcelamentos",
        "Consulta Recibo"
      ],
      relatorio: [
        "Débitos Por Contribuinte",
        "Relatório de Débitos",
        "Taxas",
        "Reemite Recibo Avulso",
        "Parcelamento com entrada em aberto",
        "Débitos Cancelados",
        "Relatórios de Cadastro",
        "Pagamentos",
        "Declaração de Quitação Cancelada",
        "Relatório de Ocorrências",
        "Declaração de Quitação de Débitos",
        "Lançamentos Tributários",
        "Relatório Consolidado de Movimentações",
        "Matriculas por logradouro (csv)",
        "Descontos Concedidos por Regras",
        "Origem Numpre NFSe",
        "Relatório de Créditos",
        "Relatório de Compensações",
        "Relatório de Devoluções",
        "Baixas Parciais CSV",
        "Retorno Cobrança Registrada",
        "Demonstrativos de Anulação",
        "Cancelamentos Por Período",
        "Suspensões Por Período",
        "Tarifas de Arrecadação",
        "Débitos - IPTU e TCRS",
        "Baixas Parciais - PG Em Dia",
        "Baixas Parciais - PG Vencido",
        "Suspensões com CDA anulada",
        "Detalhamento Suspensão",
        "Débitos Suspensos",
        "Lançamento de Taxas",
        "Débito em Conta",
        "Relatório Exercício x Procedência - Cobrança Administrativa",
        "Extrato do Contribuinte",
        "Valores Atualizados de Suspensões",
        "Débitos em Aberto por CGM e Imóvel (CSV)",
        "Tributos",
        "Recibos por Protocolo Externo"
      ],
      procedimentos: [
        "Arrecadação de Receita",
        "Excessões de Agrupamento de Débitos",
        "Configuração de Regras de Emissão",
        "Prorroga Vencimento",
        "Cancelamento de Débitos",
        "Acerto Desconto Juro/Multa Parcelamento",
        "Débito em Conta",
        "Desconto",
        "Recibo de Receita",
        "Manutenção de Suspensões",
        "Processar Arquivos Retorno Banco",
        "Manutenção de Numpres Bloqueados",
        "Declaração Quitação",
        "Acerto Parcelamento Serviço Social",
        "Gerar arquivo de remessa de registro",
        "Parâmetros",
        "Parcela Única",
        "Reativa Parcelamento",
        "Créditos",
        "Desconto manual (novo)",
        "Manutenção de Abatimentos",
        "Manutenção de Vinculos de Numpre",
        "Alteração de Vencimentos para os débitos",
        "Prorroga vencimento MEI",
        "Cobrança Registrada",
        "Vincular taxas / custas ao parcelamento",
        "Alteração de Parcelamento",
        "Lançamento de Taxas",
        "Controle de parcelamentos vencidos"
      ]
    }
  },
  {
    id: "cadastro",
    title: "Cadastro",
    module: "tributario",
    options: {
      cadastro: [
        "Cadastro de Localidades Rurais",
        "Cadastro de Prédios",
        "Cadastro de Condomínios",
        "Setor",
        "Zona Fiscal",
        "Bairro",
        "Loteamento",
        "Registro de Imóveis",
        "Tipo de Testada Interna",
        "Orientação",
        "Tipo de Isenção",
        "Imobiliária",
        "Grupo de Características",
        "Característica",
        "Histórico de Cálculo do IPTU",
        "Configuração de Histórico de Cálculo",
        "Cadastro de Taxas",
        "Logradouro",
        "Faces de Quadra",
        "Massa Falida",
        "Diversos IPTU",
        "Tipo de Averbação",
        "Zona de Entrega",
        "Tipos de Posse",
        "Liberação CND com Débitos",
        "Tipos de Sujeito Passivo"
      ],
      consulta: [
        "Geral Financeira",
        "Cadastro Técnico Municipal (Novo)",
        "Cadastro Técnico Municipal",
        "ITBI",
        "Consulta situação da importação do recadastramento",
        "Consulta por Endereço"
      ],
      relatorio: [
        "Cadastrais",
        "Cálculo",
        "Financeiros",
        "Isenções",
        "Emite BIC",
        "Massa Falida",
        "Endereço de Entrega",
        "Comparativo entre face e lote",
        "Taxas / Zona Fiscal",
        "Averbações",
        "Matriculas por logradouro (csv)",
        "Matriculas por Lote",
        "Logradouros do Município (CSV)",
        "Débitos por Petição Inicial",
        "Matriculas por Face de Quadra"
      ],
      procedimentos: [
        "Manutenção de Imóveis",
        "Cálculo IPTU",
        "Digitação para o calculo",
        "Averbação",
        "Isenção",
        "Cartão Numérico",
        "Levantamento Cadastral",
        "Imobiliária / Matricula",
        "Setor Fiscal / Face de Quadra",
        "Logradouro / Características",
        "Gerar TXTs Multi Finalitário",
        "Excessões na geração dos carnes",
        "Endereço de Entrega",
        "Parcela Única",
        "Configuração IPTU",
        "Parâmetros",
        "Certidão de Existência de Prédio",
        "Endereço de entrega (Novo)",
        "Geração de Arquivos",
        "Cálculo TCRS",
        "Emissão Geral de TCRS",
        "Emissão Geral de IPTU/TCRS",
        "Emissão Geral de TCRS/Isento",
        "Observação Matricula",
        "Emissão Geral de IPTU Cobrança",
        "Civitas",
        "Emissão Geral de Certidão de Isenção",
        "Configuração Número Cadastral"
      ]
    }
  },
  {
    id: "cemiterio",
    title: "Cemitério",
    module: "tributario",
    options: {
      cadastro: [
        "Tipos de Isenção",
        "Legista",
        "Cemitério",
        "Funerárias",
        "Hospitais",
        "Quadras/Lote",
        "Campas",
        "Sepulturas",
        "Ossário/jazigo",
        "Taxa de Serviço",
        "Causas Mortis",
        "Geral do Município - CGM"
      ],
      consulta: [
        "Geral Financeira",
        "Sepultamentos",
        "Ossários / Jazigos"
      ],
      relatorio: [
        "Gera Edital",
        "Certificado de Isenção"
      ],
      procedimentos: [
        "Isenção",
        "Proprietário de Ossário",
        "Sepultamentos",
        "Itens de Serviço",
        "Transações / Retiradas",
        "Renovações de Sepulturas"
      ]
    }
  },
  {
    id: "contribuicao",
    title: "Contribuição",
    module: "tributario",
    options: {
      cadastro: [
        "Lista",
        "Manutenção de Edital",
        "Tipos de serviços",
        "Contribuição de Melhoria"
      ],
      consulta: [
        "Geral Financeira",
        "Consulta de Contribuição"
      ],
      relatorio: [
        "Lista de Projetos",
        "Lotes por Contribuição",
        "Contribuições do Edital",
        "Emite Notificações",
        "Relatório de Listas",
        "Notificação Previa"
      ],
      procedimentos: [
        "Cancela Seleção de Lotes",
        "Seleciona Matrículas",
        "Autoriza Cobrança",
        "Cálculo Geral",
        "Cálculo Parcial",
        "Exclusão de Cálculo Geral",
        "Exclusão de Cálculo Parcial",
        "Gera Notificação de Contribuição",
        "Parâmetros"
      ]
    }
  },
  {
    id: "diversos",
    title: "Diversos",
    module: "tributario",
    options: {
      cadastro: [
        "Procedência"
      ],
      consulta: [
        "Diversos",
        "Geral Financeira"
      ],
      relatorio: [
        "Diversos",
        "Pagamento Loteamento",
        "Capa dos Parc. dos Loteamentos",
        "Débitos importados"
      ],
      procedimentos: [
        "Diversos",
        "Receitas de Diversos",
        "Importação de débitos para diversos"
      ]
    }
  },
  {
    id: "divida-ativa",
    title: "Dívida Ativa",
    module: "tributario",
    options: {
      cadastro: [
        "Dívida Ativa",
        "Config. Tipo de Débito",
        "Procedências",
        "Tipo de Procedência",
        "Documento / Procedência - CDA",
        "Cadastro de Cartórios",
        "Parâmetros CRA"
      ],
      consulta: [
        "Geral Financeira",
        "Dívida Ativa",
        "Consulta Parcelamentos",
        "Certidão",
        "Movimentação Extrajudicial"
      ],
      relatorio: [
        "Termo de Parcelamento",
        "Emissão de CDA - Parcelamento",
        "Emissão de CDA",
        "Dívida Ativa",
        "Dívida por Exercício",
        "Posição dos Parcelamentos",
        "Posição da Dívida Parcial",
        "Certidão",
        "Dívida por contribuinte",
        "Parcelamentos",
        "Posição de Dívida Exercício/Procedência",
        "Inscrição em Dívida",
        "CDAs Anuladas",
        "Prescrição de Dívida",
        "Reemissão do Livro",
        "Resumo Geral da Dívida",
        "Consulta CDA por Matrícula",
        "Detalhamento do Parcelamento",
        "Divida por Exercicio CSV",
        "D.A. Posição Débitos Executados",
        "D.A. Posição Débitos Não Executados",
        "Parcelamentos por Usuário Logado",
        "Inscrições em Dívida por Período",
        "Cancelamentos de Importação de Dívida",
        "Vínculos Numpres - IPTU",
        "Parcelamentos +60 dias em atraso",
        "Acordos Anulados - csv",
        "Parcelamentos pagos por período - csv",
        "Atas - Conciliação",
        "Parcelamentos Emissão Bloqueada",
        "Histórico de Vínculos de CDA",
        "Parcelamentos por Inicial",
        "Sitação do Débito por Inicial",
        "Emissão Termo Dívida",
        "Protestos por Lista",
        "Relatório de Débitos CSV com Máscara de CPF"
      ],
      procedimentos: [
        "Recibo de Receita",
        "Prescrição de Dívida",
        "Cancela CDA",
        "Gera CDA a partir da lista",
        "Inscrição em Dívida",
        "Cancelamento de Importação de Dívida",
        "Textos das Certidões",
        "Textos do Termo de Parcelamento",
        "Textos da Petição Inicial",
        "Assinaturas",
        "Manutenção de CDA",
        "Processamento do Livro",
        "Anulação de Prescrição de Dívida",
        "Parâmetros",
        "Manutenção de Parâmetros",
        "Liberar CDA para Protesto",
        "Cancela Liberação CDA para Protesto",
        "Download CDAS - Administrador",
        "Cobrança Extrajudicial",
        "Movimentação Extrajudicial",
        "Receita"
      ]
    }
  },
  {
    id: "fiscal",
    title: "Fiscal",
    module: "tributario",
    options: {
      cadastro: [
        "Fiscais",
        "Tipo de Processo Fiscal",
        "Gráficas",
        "Procedências",
        "Tipo de Andamento",
        "Tipo de Fiscalização",
        "Tipo de Vistoria",
        "Taxas",
        "Parâmetros Obras"
      ],
      consulta: [
        "Alvará Sanitário",
        "Cadastro Municipal",
        "Geral Financeira",
        "CGM",
        "Vistorias",
        "Auto de Infração",
        "Notificação",
        "Consulta Processo Fiscal"
      ],
      relatorio: [
        "Fiscais",
        "Gráficas",
        "Tipo de Andamento",
        "Alvará Sanitário",
        "Vistorias",
        "Termo de Vistoria",
        "Auto de Infração",
        "Auto de Infração (Prazo)",
        "Notificação",
        "Notificação (Período)",
        "Atividades Baixadas",
        "Levantamento",
        "Geral de Levantamento",
        "AIDOF",
        "Inscrição por Logradouros",
        "Notas Fiscais",
        "Notas Fiscais por periodo (NFSE)",
        "Taxas"
      ],
      procedimentos: [
        "Alvará Sanitário",
        "Libera AIDOF",
        "Andamentos",
        "Levantamento",
        "Notificações",
        "Auto de Infração",
        "Auto de Lançamento",
        "Vistorias",
        "Vistoria (Geral)",
        "ISSQN Variavel",
        "Parâmetros",
        "Processo Fiscal",
        "TIAF",
        "Emissão Geral TFS",
        "Emissão Geral TFF",
        "Importação AINF - SN",
        "Taxas",
        "Taxa Proporcional"
      ]
    }
  },
  {
    id: "inflatores",
    title: "Inflatores",
    module: "tributario",
    options: {
      cadastro: [
        "Inflatores"
      ],
      consulta: [
        "Inflatores"
      ],
      relatorio: [
        "Inflatores"
      ],
      procedimentos: [
        "Atualização de Valores",
        "Cria Inflator para Exercício",
        "Manutenção de Valores"
      ]
    }
  },
  {
    id: "issqn",
    title: "ISSQN",
    module: "tributario",
    options: {
      cadastro: [
        "Tipos de Alvará",
        "Eventos",
        "Manutenção de Grupos de Serviço",
        "Motivos de Paralisação",
        "Alvará",
        "Configuração de Cálculo ISSQN",
        "Configuração da Planilha",
        "Porte",
        "Classe",
        "Atividade",
        "Vencimentos",
        "Cálculo",
        "Tipo de Cálculo",
        "Forma de Cálculo",
        "Atividade / Tipo de Cálculo",
        "Tipo de Cálculo / Atividade",
        "Escritórios Contábeis",
        "Tipo de Nota",
        "Tipo de Geração",
        "Manutenção de Pontuação",
        "Forma de Localização Alvará",
        "Fator de Cálculo por Área",
        "Tipos de Sujeito Passivo"
      ],
      consulta: [
        "Geral Financeira",
        "Cadastro Municipal",
        "Financeira ISSQN",
        "DAI",
        "Notas Avulsas"
      ],
      relatorio: [
        "Cadastrais",
        "Atividade",
        "ISSQN Calculado e Pago (Exercício)",
        "ISSQN Pago",
        "ISSQN Variável",
        "DAI(s) (Não Enviadas)",
        "Inscrição",
        "Inscrição Web",
        "Inscrição (Atividades)",
        "Lançamentos DBPREF/DBPortal",
        "Emissão Geral de ISSQN",
        "Planilha de Retenção",
        "Log (Cálculo ISSQN)",
        "MEI",
        "Simples",
        "Integração Externa",
        "Paralisação de Empresa",
        "Por Regimes do Simples - CSV",
        "REDESIM"
      ],
      procedimentos: [
        "Paralisação de Inscrição",
        "Cálculo Individual ISSQN",
        "Controle de Alteração Cadastral",
        "Cálculo Geral ISSQN",
        "Configuração do Cálculo",
        "ISSQN Estimado / Fixado",
        "ISSQN Complementar",
        "Cancela ISSQN Variável",
        "Baixa Inscrição de Alvará",
        "Excluir Baixa Inscrição de Alvará",
        "Atualiza Classe / Atividade",
        "Libera DAI",
        "Processamento Lista DBPref",
        "Empresas Optantes do Simples",
        "Processamento Arquivo Simples(DAF607)",
        "Processamento Arquivo Simples(Eventos)",
        "Notas Avulsas",
        "Movimentação de Alvará",
        "MEI",
        "Parâmetros",
        "Simples Nacional",
        "Processamento Arquivo Retenção",
        "Emissão Geral ISSQN_SC",
        "Emissão Geral ISSQN_A",
        "Arquivos Dívida - Simples Nacional"
      ]
    }
  },
  {
    id: "itbi",
    title: "ITBI",
    module: "tributario",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "juridico",
    title: "Jurídico",
    module: "tributario",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "marcas",
    title: "Marcas",
    module: "tributario",
    options: {
      cadastro: [
        "Localidades"
      ],
      consulta: [
        "Consulta Marcas",
        "Marcas Canceladas",
        "Transferências",
        "Cancelamentos"
      ],
      relatorio: [
        "Marcas por Proprietário",
        "Marcas Canceladas",
        "Histórico de Cancelamentos",
        "Histórico de Tranferências"
      ],
      procedimentos: [
        "Cadastro de Marcas",
        "Transferência de Marca",
        "Cancelamento de Marcas"
      ]
    }
  },
  {
    id: "meio-ambiente",
    title: "Meio Ambiente",
    module: "tributario",
    options: {
      cadastro: [
        "Empreendimentos",
        "Condicionantes"
      ],
      consulta: [
        "Processo"
      ],
      relatorio: [
        "Emissão de Licença",
        "Vencimento de Licenças"
      ],
      procedimentos: [
        "Emissão de Parecer Técnico"
      ]
    }
  },
  {
    id: "notificacoes",
    title: "Notificações",
    module: "tributario",
    options: {
      cadastro: [
        "Tipo de Notificação",
        "Situação da Notificação"
      ],
      consulta: [
        "Geral Financeira"
      ],
      relatorio: [
        "Listas",
        "Posição das Notificações",
        "Situação Notificação",
        "Emissão de Notificações"
      ],
      procedimentos: [
        "Listas",
        "Notificações",
        "Documento da Lista",
        "Notificações por Edital",
        "Configuração de Documento por Tipo",
        "Parâmetros"
      ]
    }
  },
  {
    id: "projetos",
    title: "Projetos",
    module: "tributario",
    options: {
      cadastro: [
        "Obras",
        "Situação do Projeto",
        "Técnicos"
      ],
      consulta: [
        "Obras",
        "Documento Sisobra"
      ],
      relatorio: [
        "Carta de Alvará",
        "Carta de Habite-se",
        "Obras com Alvará",
        "Obras",
        "Obras e Construções",
        "Construções e Habite-se",
        "Situação do Projeto",
        "Alvarás Vencidos"
      ],
      procedimentos: [
        "Situação do Projeto",
        "Liberação de Habite-se",
        "Parâmetros",
        "Texto",
        "Arquivo do INSS",
        "Texto dos alvarás",
        "Alvará de Obras"
      ]
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
    id: "agendamento",
    title: "Agendamento",
    module: "saude",
    options: {
      cadastro: [
        "Tipo de Ficha",
        "Prestadores",
        "Geral do Município - CGM (novo)",
        "Manutenção do CGS"
      ],
      consulta: [
        "Consulta Geral da Saúde",
        "Agenda"
      ],
      relatorio: [
        "Agendamento",
        "Agendamento por Período",
        "Agendamentos Anulados",
        "Controle de Cotas",
        "Agenda Médica"
      ],
      procedimentos: [
        "Agendamento de Consultas",
        "Agendamento de Exames",
        "Transferência",
        "Gerar FAs",
        "Agendamento de Consulta Simplificado",
        "Anular Agendamentos",
        "Agendamento Unificado",
        "Parâmetros",
        "Controle de Cotas",
        "Cota de Exames Municipais"
      ]
    }
  },
  {
    id: "ambulatorial",
    title: "Ambulatorial",
    module: "saude",
    options: {
      cadastro: [
        "Setor Ambulatorial",
        "Motivo de ausência",
        "Motivo Atendimento",
        "Tipo Atendimento",
        "Procedimento não Faturaveis",
        "Cartão SUS",
        "Fator de Risco",
        "Profissional de Saúde",
        "Profissionais Fora da Rede",
        "Distritos Sanitários",
        "UPS",
        "Família",
        "Micro Área",
        "Família / Micro Área",
        "Tabelas Nacionais",
        "Ações Programaticas",
        "Geral do Município - CGM (novo)",
        "Conteúdo de Medicamento",
        "Manutenção do CGS"
      ],
      consulta: [
        "Consulta Geral da Saúde",
        "Prontuarios da Familia",
        "CIDs",
        "Ficha de Atendimento Ambulatorial",
        "Cadastro Geral da Saúde"
      ],
      relatorio: [
        "BPA - Boletim de Produção Ambulatorial",
        "Atendimentos",
        "Ficha de Atendimento FAA",
        "Especiais Saúde",
        "Cadastrais - Saúde",
        "Consistênciar Lotes",
        "Cartão SUS",
        "CGS Duplos",
        "CGS Corretos",
        "Geral CGS",
        "CBO",
        "Profissionais da Saúde",
        "Produção Ambulatorial",
        "Agravo",
        "Requisição de Exame",
        "Conferência de Administração de Medicamentos"
      ],
      procedimentos: [
        "Ficha de Atendimento",
        "Recepção",
        "Triagem",
        "Atendimento",
        "Triagem Avulsa",
        "Prontuário Eletrônico",
        "Encaminhamentos",
        "Digitação FAA",
        "BPA Magnético",
        "Atualização de Tabelas",
        "Importação Cartão SUS",
        "CGS Duplos",
        "Parâmetros",
        "Importação SCNES",
        "Requisição de Saída de Materiais",
        "Descarte de Medicamentos",
        "Permitir alterar CGS",
        "Acompanhamento ACS"
      ]
    }
  },
  {
    id: "farmacia",
    title: "Farmácia",
    module: "saude",
    options: {
      cadastro: [
        "Anvisa",
        "Medicamentos",
        "Classificação",
        "Tipo Receita",
        "Ações Programaticas",
        "Farmacêutico",
        "Farmácia",
        "CGS - Cadastro Geral da Saúde",
        "Geral do Município - CGM (novo)",
        "Manutenção do CGS",
        "Demanda Reprimida"
      ],
      consulta: [
        "Consulta Geral da Saúde",
        "Paciente"
      ],
      relatorio: [
        "Medicamentos",
        "Relatórios Legais",
        "Histórico",
        "Lista Pacientes por Ações Programáticas",
        "Administração de Medicamentos (AME)",
        "Reemissão do Comprovante"
      ],
      procedimentos: [
        "Entrega de Medicamento",
        "Devolução de Medicamentos",
        "Medicamento Continuado",
        "Geração Livro dos Controlados",
        "Parâmetros",
        "Fator de Risco Farmácia",
        "Exportar CGS para Hiperdia",
        "Hórus"
      ]
    }
  },
  {
    id: "fundoassistenciamedica",
    title: "Fundo Assistência Médica",
    module: "saude",
    options: {
      cadastro: [
        "Cadastro de Servidores",
        "Assentamentos / Afastamentos",
        "Assentamentos do Servidor",
        "Conferência Recadastramento"
      ],
      consulta: [
        "Cadastro de Servidores",
        "Assentamentos / Afastamentos",
        "Assentamentos do Servidor",
        "Conferência Recadastramento"
      ],
      relatorio: [
        "Cadastro de Servidores",
        "Assentamentos / Afastamentos",
        "Assentamentos do Servidor",
        "Conferência Recadastramento"
      ],
      procedimentos: [
        "Cadastro de Servidores",
        "Assentamentos / Afastamentos",
        "Assentamentos do Servidor",
        "Conferência Recadastramento"
      ]
    }
  },
  {
    id: "hiperdia",
    title: "Hiperdia",
    module: "saude",
    options: {
      cadastro: [
        "CGS - Cadastro Geral da Saúde",
        "Geral do Município - CGM (novo)",
        "Manutenção do CGS"
      ],
      consulta: [
        "Consulta Geral da Saúde"
      ],
      relatorio: [
        "Critica Dados Para Exportação"
      ],
      procedimentos: [
        "Fatores de Risco",
        "Hipertensos e Diabeticos",
        "Exportar CGS Para Hiperdia"
      ]
    }
  },
  {
    id: "laboratorio",
    title: "Laboratório",
    module: "saude",
    options: {
      cadastro: [
        "Tipo de documento",
        "Recipiente",
        "Material coleta",
        "Setor",
        "Unidade de medida",
        "Metodologia",
        "Metodo",
        "Requisito",
        "Sinonimia",
        "Exame",
        "Grupos de Exames",
        "Laboratorio",
        "Atributos",
        "Geral do Município - CGM (novo)",
        "Medicamentos",
        "Manutenção do CGS"
      ],
      consulta: [
        "Consulta Geral da Saúde",
        "Entrega de Exame"
      ],
      relatorio: [
        "Exames Requisitados",
        "Reemissão da Requisição de Exames",
        "Produtividade",
        "Exames",
        "Laboratório / Exames",
        "Controle Físico Financeiro",
        "Mapa de Coleta"
      ],
      procedimentos: [
        "Recepção",
        "Resultado",
        "Triagem",
        "Retificar Resultado",
        "Parâmetros",
        "BPA Magnético",
        "Controle de Cotas"
      ]
    }
  },
  {
    id: "tfd",
    title: "TFD",
    module: "saude",
    options: {
      cadastro: [
        "Documento",
        "Ajuda de Custo",
        "Tipos de Tratamento",
        "Motivos de Acompanhamento",
        "Destino",
        "Prestadora",
        "Centrais de Agendamento",
        "Grade de Horários de Saída",
        "Geral do Município - CGM (novo)",
        "Passagens",
        "Manutenção do CGS"
      ],
      consulta: [
        "Consulta Geral da Saúde",
        "Pedido TFD",
        "Veículos TFD"
      ],
      relatorio: [
        "Lista Passageiros DAER",
        "Consultas/Exames Solicitados",
        "Saída de Veículo",
        "Saídas",
        "Pedidos Encerrados",
        "Relatório de Viagens",
        "Viagens por Motorista"
      ],
      procedimentos: [
        "Pedido de TFD",
        "Indique Prestadora",
        "Informe a Saída",
        "Desistência",
        "Regulador",
        "BPA Magnético",
        "Parâmetros"
      ]
    }
  },
  {
    id: "vacinas",
    title: "Vacinas",
    module: "saude",
    options: {
      cadastro: [
        "Salas de Vacinações",
        "Geral do Município - CGM (novo)",
        "Manutenção do CGS"
      ],
      consulta: [
        "Consulta Geral da Saúde"
      ],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "alimentacao-escolar",
    title: "Alimentação Escolar",
    module: "educacao",
    options: {
      cadastro: [
        "Nutricionista",
        "Grupo de alimentos",
        "Intolerância Alimentar",
        "Nutriente",
        "Informação Nutricional",
        "Cardápio",
        "Tipo Refeição",
        "Refeição",
        "Restrição"
      ],
      consulta: [
        "Histórico de Refeições",
        "Informações Nutricionais por Item",
        "Informações Nutricionais por Refeição",
        "Material",
        "Restrição Alimentar",
        "Quadro de Desenvolvimento"
      ],
      relatorio: [
        "Histórico de Refeições",
        "Desperdício",
        "Cardápio Semanal",
        "Consumo de Refeição",
        "Restrição Alimentar",
        "Quadro de Desenvolvimento"
      ],
      procedimentos: [
        "Cardápio Semanal",
        "Consumo de Refeição",
        "Substituição de Alimentos",
        "Desperdício",
        "Baixa do Estoque",
        "Informações do Aluno",
        "Transferência entre depósitos",
        "Requisição de Saída de Materiais",
        "Atendimento de Requisição",
        "Devolução de Materiais",
        "Entrada manual",
        "Saída manual"
      ]
    }
  },
  {
    id: "biblioteca",
    title: "Biblioteca",
    module: "educacao",
    options: {
      cadastro: [
        "Biblioteca",
        "Tipos de Assunto",
        "Autor",
        "Aquisição",
        "Categoria do Leitor",
        "Classificação Literária",
        "Editora",
        "Localização do Acervo",
        "Tipo de Ítens",
        "Acervo",
        "Leitores",
        "Coleção"
      ],
      consulta: [
        "Acervos",
        "Acervos por Autor",
        "Assunto do Acervo",
        "Empréstimos por Leitor",
        "Empréstimos em Aberto",
        "Empréstimos em Atraso",
        "Leitor"
      ],
      relatorio: [
        "Leitores",
        "Autores",
        "Editoras",
        "Classificação Literária",
        "Acervos",
        "Baixa de Acervo",
        "Ítens Emprestados",
        "Itens mais Emprestados",
        "Etiquetas",
        "Emissão de Carteira"
      ],
      procedimentos: [
        "Empréstimo",
        "Devolução",
        "Reservas",
        "Baixa de Acervo",
        "Cancelar Impressão de Etiquetas",
        "Parâmetros"
      ]
    }
  },
  {
    id: "escola",
    title: "Escola",
    module: "educacao",
    options: {
      cadastro: [
        "Tabelas",
        "Dados da Escola",
        "Dependências da Escola",
        "Atos / Justificativas",
        "Cursos na Escola",
        "Calendários",
        "Bases Curriculares",
        "Procedimentos de Avaliação",
        "Recursos Humanos",
        "Turmas",
        "Turmas (Atividade Complementar AEE)",
        "Remanejar Cadastro Turmas",
        "Alunos",
        "Confirmação de Rematrícula"
      ],
      consulta: [
        "Alunos",
        "Professores",
        "Recursos Humanos",
        "Diário de Classe",
        "Trocas de Turmas",
        "Matrículas Pendentes",
        "Alunos Matriculados",
        "Calendário",
        "Horário das Turmas",
        "Progressão de Alunos",
        "Turmas Encerradas",
        "Lista de Candidatos",
        "Legislação",
        "Acesso Aluno",
        "Progressão Parcial"
      ],
      relatorio: [
        "Alunos",
        "Turmas",
        "Matrículas",
        "Recursos Humanos",
        "Transferências",
        "Pareceres",
        "Calendário",
        "Censo Escolar",
        "Gráficos",
        "Confirmação de Rematrícula",
        "Progressão Parcial"
      ],
      procedimentos: [
        "Diário de Classe",
        "Matrículas",
        "Progressão de Aluno",
        "Atestado de Vaga",
        "Transferências",
        "Manutenção do Histórico Escolar",
        "Aprovação Automática",
        "Conclusão de Curso",
        "Efetividade",
        "Parâmetros",
        "Censo Escolar",
        "Cartão de Identificação do Aluno",
        "Controle de ausências e substituições"
      ]
    }
  },
  {
    id: "secretaria",
    title: "Secretaria",
    module: "educacao",
    options: {
      cadastro: [
        "Termo Resultado Final",
        "Tabelas",
        "Tipo Ausência",
        "Escolas",
        "Modalidades de Ensino",
        "Níveis de Ensinos",
        "Etapas",
        "Cursos",
        "Modelos de Relatórios",
        "Componentes Curriculares",
        "Cadastro de Regras de Arredondamento",
        "Calendário Base",
        "Tipo de Hora de Trabalho",
        "Rotinas de Implantação",
        "Procedimentos de Avaliação",
        "BNCC",
        "Tipos de Base"
      ],
      consulta: [
        "Alunos",
        "Professores",
        "Recursos Humanos",
        "Diário de Classe",
        "Trocas de Turmas",
        "Matrículas Pendentes",
        "Alunos Matriculados",
        "Calendário",
        "Horário das Turmas",
        "Progressão de Alunos",
        "Turmas Encerradas",
        "Lista de Cnadidatos",
        "Logs",
        "Progressão Parcial",
        "Lotação de Servidores",
        "Quadro Geral de Horários"
      ],
      relatorio: [
        "Alunos",
        "Turmas",
        "Matrículas",
        "Recursos Humanos",
        "Transferências",
        "Pareceres",
        "Calendário",
        "Censo Escolar",
        "Gráficos",
        "Confirmação de Rematrícula",
        "Cadastrais",
        "Registro de Aula",
        "Progressão Parcial",
        "Relatório de Infraestrutura da Escola"
      ],
      procedimentos: [
        "Exclusão Geral de Registros",
        "Censo Escolar",
        "Parâmetros",
        "Cartão de Identificação do Aluno",
        "Tira Alunos Duplos do Sistema"
      ]
    }
  },
  {
    id: "transporte-escolar",
    title: "Transporte Escolar",
    module: "educacao",
    options: {
      cadastro: [
        "Veículos",
        "Pontos de Parada",
        "Linhas"
      ],
      consulta: [],
      relatorio: [
        "Alunos por linha",
        "Linha"
      ],
      procedimentos: [
        "Itinerários"
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
