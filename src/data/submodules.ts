export interface SubmoduleOption {
  id: string;
  label: string;
  items?: { label: string; description?: string }[];
}

export interface Submodule {
  id: string;
  title: string;
  module: string;
  options: {
    cadastro: { label: string; description?: string }[];
    consulta: { label: string; description?: string }[];
    relatorio: { label: string; description?: string }[];
    procedimentos: { label: string; description?: string }[];
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
      relatorio: [],
      procedimentos: []
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
        {
          label: "Grupos de Material/Serviço",
          description: "Os grupos compreendem a agregação de elementos de despesa que apresentam as mesmas características quanto ao objeto de gasto. Assim, formados os grupos, a cada um deles teremos ligados um ou mais elementos de despesas, que servem para identificar os objetos de gasto, tais como vencimentos e vantagens fixas, juros, diárias, material de consumo, serviços de terceiros, obras e instalações, etc. Como exemplo, pode-se citar um grupo chamado Gêneros Alimentícios que estará ligado aos elementos de despesa material de consumo e material de distribuição gratuita."
        },
        { label: "Subgrupos de Materiais/Serviços" },
        { label: "Materiais/Serviços" },
        { label: "Cadastro de Unidades" },
        { label: "Cadastro de Tipos de Certificados" },
        { label: "Cadastro de Documentos" },
        { label: "Documentos por Tipo de Certificado" },
        { label: "Fornecedores" }
      ],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "licitacoes",
    title: "Licitações",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "contratos",
    title: "Contratos",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "material",
    title: "Material",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "patrimonio",
    title: "Patrimônio",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "protocolo",
    title: "Protocolo",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  },
  {
    id: "veiculos",
    title: "Veículos",
    module: "patrimonial",
    options: {
      cadastro: [],
      consulta: [],
      relatorio: [],
      procedimentos: []
    }
  }
];

export function getSubmoduleById(id: string): Submodule | undefined {
  return submodules.find(sub => sub.id === id);
}

export function getSubmodulesByModule(module: string): Submodule[] {
  return submodules.filter(sub => sub.module === module);
}
