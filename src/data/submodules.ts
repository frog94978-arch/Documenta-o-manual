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
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "licitacoes",
    title: "Licitações",
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
        "Grupos de Material/Serviço",
        "Subgrupos de Materiais/Serviços",
        "Materiais/Serviços",
        "Cadastro de Unidades",
        "Cadastro de Tipos de Certificado",
        "Fornecedores"
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
        "Acordos",
        "Consulta Empenho"
      ],
      relatorio: [
        "Grupos de Material/Serviço",
        "Subgrupos de Materiais/Serviços",
        "Materiais/Serviços",
        "Cadastro de Unidades",
        "Cadastro de Tipos de Certificado",
        "Fornecedores"
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
    id: "material",
    title: "Material",
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
        "Grupos de Material/Serviço",
        "Subgrupos de Materiais/Serviços",
        "Materiais/Serviços",
        "Cadastro de Unidades",
        "Cadastro de Tipos de Certificado",
        "Fornecedores"
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
    id: "patrimonio",
    title: "Patrimônio",
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
        "Grupos de Material/Serviço",
        "Subgrupos de Materiais/Serviços",
        "Materiais/Serviços",
        "Cadastro de Unidades",
        "Cadastro de Tipos de Certificado",
        "Fornecedores"
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
    id: "protocolo",
    title: "Protocolo",
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
        "Grupos de Material/Serviço",
        "Subgrupos de Materiais/Serviços",
        "Materiais/Serviço",
        "Cadastro de Unidades",
        "Cadastro de Tipos de Certificado",
        "Fornecedores"
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
    id: "veiculos",
    title: "Veículos",
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
        "Grupos de Material/Serviço",
        "Subgrupos de Materiais/Serviços",
        "Materiais/Serviços",
        "Cadastro de Unidades",
        "Cadastro de Tipos de Certificado",
        "Fornecedores"
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
    id: "ouvidoria",
    title: "Ouvidoria",
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
        "Grupos de Material/Serviço",
        "Subgrupos de Materiais/Serviços",
        "Materiais/Serviços",
        "Cadastro de Unidades",
        "Cadastro de Tipos de Certificado",
        "Fornecedores"
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
    id: "pncp",
    title: "PNCP",
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
        "Grupos de Material/Serviço",
        "Subgrupos de Materiais/Serviços",
        "Materiais/Serviços",
        "Cadastro de Unidades",
        "Cadastro de Tipos de Certificado",
        "Fornecedores"
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
  }
];

export function getSubmoduleById(id: string): Submodule | undefined {
  return submodules.find(sub => sub.id === id);
}

export function getSubmodulesByModule(module: string): Submodule[] {
  return submodules.filter(sub => sub.module === module);
}
