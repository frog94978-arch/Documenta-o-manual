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
    id: "compras",
    title: "Compras",
    module: "patrimonial",
    options: {
      cadastro: ["Fornecedor", "Produto", "Categoria", "Unidade de Medida"],
      consulta: ["Solicitações", "Cotações", "Ordens de Compra", "Histórico"],
      relatorio: ["Compras por Período", "Fornecedores", "Produtos Mais Comprados"],
      procedimentos: ["Nova Solicitação", "Cotação de Preços", "Ordem de Compra"]
    }
  },
  {
    id: "licitacoes",
    title: "Licitações",
    module: "patrimonial",
    options: {
      cadastro: ["Processo", "Modalidade", "Comissão", "Fornecedor"],
      consulta: ["Processos Abertos", "Em Andamento", "Finalizados", "Homologados"],
      relatorio: ["Licitações por Período", "Por Modalidade", "Por Status"],
      procedimentos: ["Abertura de Processo", "Publicação de Edital", "Julgamento"]
    }
  },
  {
    id: "contratos",
    title: "Contratos",
    module: "patrimonial",
    options: {
      cadastro: ["Contrato", "Tipo de Contrato", "Aditivo", "Garantia"],
      consulta: ["Contratos Vigentes", "A Vencer", "Vencidos", "Histórico"],
      relatorio: ["Contratos por Fornecedor", "Valores Contratados", "Aditivos"],
      procedimentos: ["Novo Contrato", "Aditivo Contratual", "Medição"]
    }
  },
  {
    id: "material",
    title: "Material",
    module: "patrimonial",
    options: {
      cadastro: ["Material", "Grupo", "Local de Estoque", "Fornecedor"],
      consulta: ["Estoque Atual", "Movimentações", "Requisições", "Inventário"],
      relatorio: ["Posição de Estoque", "Movimentações", "Consumo por Setor"],
      procedimentos: ["Entrada de Material", "Saída de Material", "Requisição"]
    }
  },
  {
    id: "patrimonio",
    title: "Patrimônio",
    module: "patrimonial",
    options: {
      cadastro: ["Bem", "Tipo de Bem", "Local", "Responsável"],
      consulta: ["Bens Cadastrados", "Por Local", "Por Responsável", "Depreciação"],
      relatorio: ["Inventário Patrimonial", "Depreciação", "Transferências"],
      procedimentos: ["Tombamento", "Transferência", "Baixa de Bem"]
    }
  },
  {
    id: "protocolo",
    title: "Protocolo",
    module: "patrimonial",
    options: {
      cadastro: ["Documento", "Tipo de Documento", "Interessado", "Assunto"],
      consulta: ["Protocolos Abertos", "Em Tramitação", "Arquivados", "Histórico"],
      relatorio: ["Protocolos por Período", "Por Setor", "Tempo de Tramitação"],
      procedimentos: ["Registrar Documento", "Tramitar", "Arquivar"]
    }
  },
  {
    id: "veiculos",
    title: "Veículos",
    module: "patrimonial",
    options: {
      cadastro: ["Veículo", "Motorista", "Tipo de Manutenção", "Fornecedor"],
      consulta: ["Frota", "Manutenções", "Abastecimentos", "Quilometragem"],
      relatorio: ["Custo por Veículo", "Manutenções", "Consumo de Combustível"],
      procedimentos: ["Registrar Abastecimento", "Registrar Manutenção", "Agendamento"]
    }
  }
];

export function getSubmoduleById(id: string): Submodule | undefined {
  return submodules.find(sub => sub.id === id);
}

export function getSubmodulesByModule(module: string): Submodule[] {
  return submodules.filter(sub => sub.module === module);
}
