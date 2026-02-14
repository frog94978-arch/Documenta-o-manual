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
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
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
  return submodules.find(sub => sub.id === id);
}

export function getSubmodulesByModule(module: string): Submodule[] {
  return submodules.filter(sub => sub.module === module);
}
