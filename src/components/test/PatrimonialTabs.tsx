import { useEffect, useState } from "react";
import { getSubmoduleById } from "@/data/submodules";
import { comprasCadastroContent } from "@/data/compras-content";
import { comprasRelatorioContent } from "@/data/compras-relatorio-content";
import MarkdownContent from "@/components/test/MarkdownContent";
import { Button } from "@/components/test/ui/button";

import {
  ShoppingCart,
  FileText,
  Gavel,
  Box,
  Ear,
  Building,
  Server,
  Book,
  Car,
  ArrowLeft,
} from "lucide-react";

interface PatrimonialTabsProps {
  selectedSubmodule: string | null;
  setSelectedSubmodule: (submodule: string | null) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedFinalSection: string | null;
  setSelectedFinalSection: (section: string | null) => void;
}

type ConferenciaMaterialPage = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
type ConferenciaMaterialPaginationItem = ConferenciaMaterialPage | "ellipsis";

const normalizeSubmoduleId = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const PatrimonialTabs = ({
  selectedSubmodule,
  setSelectedSubmodule,
  selectedCategory,
  setSelectedCategory,
  selectedFinalSection,
  setSelectedFinalSection,
}: PatrimonialTabsProps) => {
  const [registroPrecoPage, setRegistroPrecoPage] = useState<1 | 2 | 3 | 4>(1);
  const [movimentacoesPage, setMovimentacoesPage] = useState<1 | 2>(1);
  const [movimentacoesVeiculosPage, setMovimentacoesVeiculosPage] = useState<1 | 2 | 3 | 4>(1);
  const [aditamentosPage, setAditamentosPage] = useState<1 | 2>(1);
  const [acordoPage, setAcordoPage] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [licitacaoProcedimentosPage, setLicitacaoProcedimentosPage] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(1);
  const [cadastraisMaterialPage, setCadastraisMaterialPage] = useState<1 | 2 | 3 | 4>(1);
  const [cadastraisVeiculosPage, setCadastraisVeiculosPage] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17>(1);
  const [documentosMaterialPage, setDocumentosMaterialPage] = useState<1 | 2>(1);
  const [conferenciaMaterialPage, setConferenciaMaterialPage] = useState<ConferenciaMaterialPage>(1);
  const [dadosVeiculosPage, setDadosVeiculosPage] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10>(1);
  const [transferenciaBensPage, setTransferenciaBensPage] = useState<1 | 2>(1);
  const [bensCadastroPage, setBensCadastroPage] = useState<1 | 2 | 3>(1);
  const [cadastraisPatrimonioPage, setCadastraisPatrimonioPage] = useState<1 | 2 | 3 | 4>(1);
  const [fichaBensPage, setFichaBensPage] = useState<1 | 2>(1);
  const [conferenciaPatrimonioPage, setConferenciaPatrimonioPage] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [legaisPatrimonioPage, setLegaisPatrimonioPage] = useState<1 | 2 | 3>(1);
  const [inventarioPatrimonioPage, setInventarioPatrimonioPage] = useState<1 | 2>(1);
  const [contratacaoPncpPage, setContratacaoPncpPage] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [contratoPncpPage, setContratoPncpPage] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    if (
      selectedSubmodule !== "Patrimônio" ||
      selectedCategory !== "cadastro" ||
      selectedFinalSection !== "Bens"
    ) {
      setBensCadastroPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (
      selectedSubmodule !== "Patrimônio" ||
      selectedCategory !== "relatorio" ||
      selectedFinalSection !== "Ficha de bens"
    ) {
      setFichaBensPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (
      selectedSubmodule !== "Patrimônio" ||
      selectedCategory !== "relatorio" ||
      selectedFinalSection !== "Cadastrais"
    ) {
      setCadastraisPatrimonioPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (
      selectedSubmodule !== "Patrimônio" ||
      selectedCategory !== "relatorio" ||
      selectedFinalSection !== "Conferência"
    ) {
      setConferenciaPatrimonioPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (
      selectedSubmodule !== "Patrimônio" ||
      selectedCategory !== "relatorio" ||
      selectedFinalSection !== "Legais"
    ) {
      setLegaisPatrimonioPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (
      selectedSubmodule !== "Patrimônio" ||
      selectedCategory !== "relatorio" ||
      selectedFinalSection !== "Inventário"
    ) {
      setInventarioPatrimonioPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (
      selectedSubmodule !== "PNCP" ||
      selectedCategory !== "procedimentos" ||
      selectedFinalSection !== "Contratação/Edital/Aviso"
    ) {
      setContratacaoPncpPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (
      selectedSubmodule !== "PNCP" ||
      selectedCategory !== "procedimentos" ||
      selectedFinalSection !== "Contrato"
    ) {
      setContratoPncpPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (
      selectedSubmodule !== "Patrimônio" ||
      selectedCategory !== "procedimentos" ||
      selectedFinalSection !== "Transferência de bens"
    ) {
      setTransferenciaBensPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (selectedFinalSection !== "Registro de Preço") {
      setRegistroPrecoPage(1);
    }
  }, [selectedFinalSection]);

  useEffect(() => {
    if (selectedFinalSection !== "Movimentações") {
      setMovimentacoesPage(1);
    }
  }, [selectedFinalSection]);

  useEffect(() => {
    if (selectedSubmodule !== "Veículos" || selectedCategory !== "relatorio" || selectedFinalSection !== "Movimentações") {
      setMovimentacoesVeiculosPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (selectedFinalSection !== "Aditamentos") {
      setAditamentosPage(1);
    }
  }, [selectedFinalSection]);

  useEffect(() => {
    if (selectedFinalSection !== "Acordo") {
      setAcordoPage(1);
    }
  }, [selectedFinalSection]);

  useEffect(() => {
    const isLicitacaoProcedimentosLicitacoes =
      selectedSubmodule === "Licitações" &&
      selectedCategory === "procedimentos" &&
      selectedFinalSection === "Licitação";

    if (!isLicitacaoProcedimentosLicitacoes) {
      setLicitacaoProcedimentosPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    const isCadastraisRelatorioMaterial =
      selectedSubmodule === "Material" &&
      selectedCategory === "relatorio" &&
      selectedFinalSection === "Cadastrais";

    if (!isCadastraisRelatorioMaterial) {
      setCadastraisMaterialPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (selectedSubmodule !== "Veículos" || selectedCategory !== "relatorio" || selectedFinalSection !== "Cadastrais") {
      setCadastraisVeiculosPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    const isDocumentosRelatorioMaterial =
      selectedSubmodule === "Material" &&
      selectedCategory === "relatorio" &&
      selectedFinalSection === "Documentos";

    if (!isDocumentosRelatorioMaterial) {
      setDocumentosMaterialPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    const isConferenciaRelatorioMaterial =
      selectedSubmodule === "Material" &&
      selectedCategory === "relatorio" &&
      selectedFinalSection === "Conferência";

    if (!isConferenciaRelatorioMaterial) {
      setConferenciaMaterialPage(1);
    }
  }, [selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (selectedFinalSection === "Registro de Preço") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [registroPrecoPage, selectedFinalSection]);

  useEffect(() => {
    if (selectedFinalSection !== "Dados dos Veiculos") {
      setDadosVeiculosPage(1);
    }
  }, [selectedFinalSection]);

  useEffect(() => {
    if (selectedFinalSection === "Movimentações") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [movimentacoesPage, selectedFinalSection]);

  useEffect(() => {
    if (selectedFinalSection === "Aditamentos") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [aditamentosPage, selectedFinalSection]);

  useEffect(() => {
    if (selectedFinalSection === "Acordo") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [acordoPage, selectedFinalSection]);

  useEffect(() => {
    if (selectedSubmodule === "Licitações" && selectedCategory === "procedimentos" && selectedFinalSection === "Licitação") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [licitacaoProcedimentosPage, selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (selectedSubmodule === "Material" && selectedCategory === "relatorio" && selectedFinalSection === "Cadastrais") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [cadastraisMaterialPage, selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (selectedSubmodule === "Material" && selectedCategory === "relatorio" && selectedFinalSection === "Documentos") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [documentosMaterialPage, selectedSubmodule, selectedCategory, selectedFinalSection]);

  useEffect(() => {
    if (selectedSubmodule === "Material" && selectedCategory === "relatorio" && selectedFinalSection === "Conferência") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [conferenciaMaterialPage, selectedSubmodule, selectedCategory, selectedFinalSection]);

  const submodules = [
    { id: "compras", name: "Compras", icon: <ShoppingCart size={20} /> },
    { id: "contratos", name: "Contratos", icon: <FileText size={20} /> },
    { id: "licitacoes", name: "Licitações", icon: <Gavel size={20} /> },
    { id: "material", name: "Material", icon: <Box size={20} /> },
    { id: "ouvidoria", name: "Ouvidoria", icon: <Ear size={20} /> },
    { id: "patrimonio", name: "Patrimônio", icon: <Building size={20} /> },
    { id: "pncp", name: "PNCP", icon: <Server size={20} /> },
    { id: "protocolo", name: "Protocolo", icon: <Book size={20} /> },
    { id: "veiculos", name: "Veículos", icon: <Car size={20} /> },
  ];

  const categories = [
    { value: "cadastro", label: "Cadastro" },
    { value: "consulta", label: "Consulta" },
    { value: "relatorio", label: "Relatório" },
    { value: "procedimentos", label: "Procedimentos" },
  ];

  const handleSubmoduleClick = (submodule: { id?: string; name: string }) => {
    setSelectedSubmodule(submodule.name);
    setSelectedCategory(null);
    setSelectedFinalSection(null);
  };

  const handleBackClick = () => {
    if (selectedFinalSection) {
      setSelectedFinalSection(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedSubmodule(null);
    }
  };

  const renderFinalContent = (
    submoduleId: string,
    categoryId: string,
    onSelectFinalSection: (section: string) => void
  ) => {
    const submoduleData = getSubmoduleById(submoduleId.toLowerCase());
    if (!submoduleData) return <p>Submódulo não encontrado.</p>;

    let categoryOptions =
      submoduleData.options[categoryId as keyof typeof submoduleData.options];

    // Use the options defined in submodule data (allows different labels per category)

    if (!categoryOptions || categoryOptions.length === 0)
      return <p>Nenhum item encontrado para esta categoria.</p>;

    return (
      <nav className="flex flex-col items-center gap-2 p-4 bg-muted mb-8 rounded-lg">
        {categoryOptions.map((item) => (
          <button
            key={item}
            className="w-full text-lg font-bold py-2 px-4 rounded-md text-center bg-card hover:bg-muted-foreground/10 transition-colors flex items-center justify-center gap-2"
            onClick={() => onSelectFinalSection(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    );
  };

  if (selectedSubmodule) {
    if (selectedCategory) {
      if (selectedFinalSection) {
        const normalizedSubmoduleId = normalizeSubmoduleId(selectedSubmodule);
        const currentSubmoduleId =
          submodules.find((s) => s.name === selectedSubmodule || s.id === normalizedSubmoduleId)?.id ||
          normalizedSubmoduleId;

        const submoduleData = getSubmoduleById(currentSubmoduleId);

        const isProcedimentoContratosSemNavEspecial =
          currentSubmoduleId === "contratos" &&
          selectedCategory === "procedimentos" &&
          [
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
            "Acertar Valores Item Acordo Dotação",
          ].includes(selectedFinalSection);

        const isSpecialRoot =
          ((selectedCategory === "relatorio" || selectedCategory === "procedimentos") &&
            currentSubmoduleId !== "compras" &&
            submoduleData &&
            submoduleData.options[
              selectedCategory as keyof typeof submoduleData.options
            ].includes(selectedFinalSection) &&
            !(currentSubmoduleId === "contratos" && selectedCategory === "relatorio") &&
            !(currentSubmoduleId === "licitacoes" && selectedCategory === "relatorio") &&
            !(currentSubmoduleId === "licitacoes" && selectedCategory === "procedimentos") &&
            !(currentSubmoduleId === "material" && selectedCategory === "procedimentos") &&
            !(currentSubmoduleId === "material" && selectedCategory === "relatorio") &&
            !(currentSubmoduleId === "ouvidoria" && selectedCategory === "relatorio") &&
            !(currentSubmoduleId === "ouvidoria" && selectedCategory === "procedimentos") &&
            !(currentSubmoduleId === "pncp" && selectedCategory === "procedimentos") &&
            !(currentSubmoduleId === "veiculos" && selectedCategory === "procedimentos") &&
            !(currentSubmoduleId === "veiculos" && selectedCategory === "relatorio" && selectedFinalSection === "Movimentações") &&
            !(currentSubmoduleId === "veiculos" && selectedCategory === "relatorio" && selectedFinalSection === "Documentos") &&
            !(currentSubmoduleId === "veiculos" && selectedCategory === "relatorio" && selectedFinalSection === "Cadastrais") &&
            !(currentSubmoduleId === "contratos" && selectedFinalSection === "Acordo" && selectedCategory === "procedimentos") &&
            !(currentSubmoduleId === "patrimonio" && selectedCategory === "procedimentos" && ["Transferência de bens", "Termo de Guarda", "Devolução do Termo de Guarda", "Confirmação de Transferência", "Alterar Placa", "Alterar Situação", "Parâmetros", "Processamento da Depreciação", "Baixa de Bens", "Inventário"].includes(selectedFinalSection)) &&
            !(currentSubmoduleId === "patrimonio" && selectedCategory === "relatorio" && ["Remite ficha de transferência", "Baixa de bens", "Apólices", "Termo de responsabilidade", "Emissão Termo de Guarda", "Reimpressão do Termo de Guarda", "Reimpressão da Devolução Termo de Guarda", "Bens por Classificação", "Geral de bens", "Financeiro Patrimonial", "Cadastrais", "Ficha de bens", "Conferência", "Legais", "Inventário"].includes(selectedFinalSection)) &&
            !(currentSubmoduleId === "protocolo" && selectedCategory === "procedimentos" && selectedFinalSection in comprasCadastroContent) &&
            !(currentSubmoduleId === "protocolo" && selectedCategory === "relatorio") &&
            !isProcedimentoContratosSemNavEspecial);

        if (isSpecialRoot && submoduleData) {
          if (selectedCategory === "procedimentos" || selectedCategory === "relatorio") {
            return (
              <div className="max-w-none">
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
                  <h2 className="text-2xl font-bold mb-6">{selectedFinalSection}</h2>
                  <hr className="mb-8 border-t border-border" />
                  <p>Conteúdo não encontrado.</p>
                </div>
              </div>
            );
          }

          return (
            <div className="max-w-none">
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
                <h2 className="text-2xl font-bold mb-6">{selectedFinalSection}</h2>
                <hr className="mb-8 border-t border-border" />
                <nav className="flex flex-col items-center gap-2 p-4 bg-muted mb-8 rounded-lg">
                  {submoduleData.options.cadastro.map((item) => (
                    <button
                      key={item}
                      className="w-full text-lg font-bold py-2 px-4 rounded-md text-center bg-card hover:bg-muted-foreground/10 transition-colors flex items-center justify-center gap-2"
                      onClick={() => setSelectedFinalSection(item)}
                    >
                      {item}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          );
        }

        const isRegistroPrecoProcedimento =
          currentSubmoduleId === "compras" &&
          selectedCategory === "procedimentos" &&
          selectedFinalSection === "Registro de Preço";

        const isMovimentacoesRelatorioContratos =
          currentSubmoduleId === "contratos" &&
          selectedCategory === "relatorio" &&
          selectedFinalSection === "Movimentações";

        const isAbastecimentoRelatorioVeiculos =
          currentSubmoduleId === "veiculos" &&
          selectedCategory === "relatorio" &&
          selectedFinalSection === "Movimentações";

        const isDocumentosRelatorioVeiculos =
          currentSubmoduleId === "veiculos" &&
          selectedCategory === "relatorio" &&
          selectedFinalSection === "Documentos";

        const isCadastraisRelatorioVeiculos =
          currentSubmoduleId === "veiculos" &&
          selectedCategory === "relatorio" &&
          selectedFinalSection === "Cadastrais";

        const movimentacoesVeiculosPages: Record<1 | 2 | 3 | 4, string | undefined> = {
          1: comprasRelatorioContent["Abastecimento - Relatório Veículos"],
          2: comprasRelatorioContent["Manutenção - Relatório Veículos"],
          3: comprasRelatorioContent["Ficha de Controle de Manutenção - Relatório Veículos"],
          4: comprasRelatorioContent["Controle de Hodômetro - Relatório Veículos"],
        };

        const cadastraisVeiculosPages: Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17, string | undefined> = {
          1: comprasRelatorioContent["Veículos - Relatório Cadastrais"],
          2: comprasRelatorioContent["Motoristas - Relatório Cadastrais Veículos"],
          3: comprasRelatorioContent["Oficinas - Relatório Cadastrais Veículos"],
          4: comprasRelatorioContent["Postos - Relatório Cadastrais Veículos"],
          5: comprasRelatorioContent["Modelos - Relatório Cadastrais Veículos"],
          6: comprasRelatorioContent["Marcas - Relatório Cadastrais Veículos"],
          7: comprasRelatorioContent["Categorias - Relatório Cadastrais Veículos"],
          8: comprasRelatorioContent["Categoria CNH - Relatório Cadastrais Veículos"],
          9: comprasRelatorioContent["Combustíveis - Relatório Cadastrais Veículos"],
          10: comprasRelatorioContent["Tipo de capacidade - Relatório Cadastrais Veículos"],
          11: comprasRelatorioContent["Tipos de serviços - Relatório Cadastrais Veículos"],
          12: comprasRelatorioContent["Tipos - Relatório Cadastrais Veículos"],
          13: comprasRelatorioContent["Procedências - Relatório Cadastrais Veículos"],
          14: comprasRelatorioContent["Cores - Relatório Cadastrais Veículos"],
          15: comprasRelatorioContent["Potências - Relatório Cadastrais Veículos"],
          16: comprasRelatorioContent["Situação de condutores - Relatório Cadastrais Veículos"],
          17: comprasRelatorioContent["Central de veículos - Relatório Cadastrais Veículos"],
        };

        const isAcordoProcedimentosContratos =
          currentSubmoduleId === "contratos" &&
          selectedCategory === "procedimentos" &&
          selectedFinalSection === "Acordo";

        const isAditamentosProcedimentosContratos =
          currentSubmoduleId === "contratos" &&
          selectedCategory === "procedimentos" &&
          selectedFinalSection === "Aditamentos";

        const isLicitacaoProcedimentosLicitacoes =
          currentSubmoduleId === "licitacoes" &&
          selectedCategory === "procedimentos" &&
          selectedFinalSection === "Licitação";

        const isConsultaLicitacoes =
          currentSubmoduleId === "licitacoes" &&
          selectedCategory === "consulta";

        const isRelatorioLicitacoes =
          currentSubmoduleId === "licitacoes" &&
          selectedCategory === "relatorio";

        const isProcedimentosLicitacoes =
          currentSubmoduleId === "licitacoes" &&
          selectedCategory === "procedimentos";

        const isCadastroMaterial =
          currentSubmoduleId === "material" &&
          selectedCategory === "cadastro";

        const isConsultaMaterial =
          currentSubmoduleId === "material" &&
          selectedCategory === "consulta";

        const isConsultaSolicitacoesCompras =
          currentSubmoduleId === "compras" &&
          selectedCategory === "consulta" &&
          selectedFinalSection === "Solicitações";

        const isConsultaPatrimonio =
          currentSubmoduleId === "patrimonio" &&
          selectedCategory === "consulta";

        const isCadastroPatrimonio =
          currentSubmoduleId === "patrimonio" &&
          selectedCategory === "cadastro";

        const patrimonioCadastroContentBySection: Record<string, string | undefined> = {
          "Tipos de baixa": comprasCadastroContent["Tipos de baixa - Cadastro Patrimônio"],
          "Tipo de Aquisição": comprasCadastroContent["Tipo de Aquisição - Cadastro Patrimônio"],
          "Tipo de Depreciação": comprasCadastroContent["Tipo de Depreciação - Cadastro Patrimônio"],
          "Modelo": comprasCadastroContent["Modelo - Cadastro Patrimônio"],
          "Marca": comprasCadastroContent["Marca - Cadastro Patrimônio"],
          "Medidas": comprasCadastroContent["Medidas - Cadastro Patrimônio"],
          "Convênios": comprasCadastroContent["Convênios - Cadastro Patrimônio"],
          "Comissões": comprasCadastroContent["Comissões - Cadastro Patrimônio"],
          "Seguradoras": comprasCadastroContent["Seguradoras - Cadastro Patrimônio"],
          "Apólices": comprasCadastroContent["Apólices - Cadastro Patrimônio"],
          "Situação dos Bens": comprasCadastroContent["Situação dos Bens - Cadastro Patrimônio"],
          "Classificação dos Bens": comprasCadastroContent["Classificação dos Bens - Cadastro Patrimônio"],
          "Bens": comprasCadastroContent["Bens - Cadastro Patrimônio"],
          "Tipo de Guarda": comprasCadastroContent["Tipo de Guarda - Cadastro Patrimônio"],
          "Cadastro de Divisões": comprasCadastroContent["Cadastro de Divisões - Cadastro Patrimônio"],
        };

        const patrimonioConsultaContentBySection: Record<string, string | undefined> = {
          "Bens": comprasCadastroContent["Bens - Consulta Patrimônio"],
          "Historico dos Bens": comprasCadastroContent["Historico dos Bens - Consulta Patrimônio"],
          "Consulta Empenho": comprasCadastroContent["Consulta Empenho - Consulta Patrimônio"],
        };

        const isConsultaGeralFinanceiraProtocolo =
          currentSubmoduleId === "protocolo" &&
          selectedCategory === "consulta" &&
          selectedFinalSection === "Geral Financeira";

        const isConsultaProcessoProtocolo =
          currentSubmoduleId === "protocolo" &&
          selectedCategory === "consulta" &&
          selectedFinalSection === "Processo";

        const isConsultaCgmProtocolo =
          currentSubmoduleId === "protocolo" &&
          selectedCategory === "consulta" &&
          selectedFinalSection === "CGM";

        const isConsultaCgmDuploProcessadoProtocolo =
          currentSubmoduleId === "protocolo" &&
          selectedCategory === "consulta" &&
          selectedFinalSection === "CGM Duplo Processado";

        const isCadastroProtocolo =
          currentSubmoduleId === "protocolo" && selectedCategory === "cadastro";

        const isRelatorioProtocolo =
          currentSubmoduleId === "protocolo" && selectedCategory === "relatorio";

        const protocoloRelatorioContentBySection: Record<string, string | undefined> = {
          "CGMs corretos": comprasRelatorioContent["CGMs corretos - Relatório Protocolo"],
          "Relatório de Processos/CGM": comprasRelatorioContent["Relatório de Processos/CGM - Relatório Protocolo"],
          "Variáveis": comprasRelatorioContent["Variáveis - Relatório Protocolo"],
          "Documentos": comprasRelatorioContent["Documentos - Relatório Protocolo"],
          "Tipos de Processo": comprasRelatorioContent["Tipos de Processo - Relatório Protocolo"],
          "Documentos / Tipo de Processo": comprasRelatorioContent["Documentos / Tipo de Processo - Relatório Protocolo"],
          "Duplos no CGM": comprasRelatorioContent["Duplos no CGM - Relatório Protocolo"],
          "Reimpressão da Capa do Processo": comprasRelatorioContent["Reimpressão da Capa do Processo - Relatório Protocolo"],
          "Reimpressão do Termo de Transferência": comprasRelatorioContent["Reimpressão do Termo de Transferência - Relatório Protocolo"],
          "Processos": comprasRelatorioContent["Processos - Relatório Protocolo"],
          "Consistência de CPF/CNPJ": comprasRelatorioContent["Consistência de CPF/CNPJ - Relatório Protocolo"],
          "Etiquetas": comprasRelatorioContent["Etiquetas - Relatório Protocolo"],
          "Processos por departamento": comprasRelatorioContent["Processos por departamento - Relatório Protocolo"],
          "CGMs Incluídos/Alterados": comprasRelatorioContent["CGMs Incluídos/Alterados - Relatório Protocolo"],
          "Tipo dos Processo com Receitas": comprasRelatorioContent["Tipo dos Processo com Receitas - Relatório Protocolo"],
          "Relatório de Andamento Padrão": comprasRelatorioContent["Relatório de Andamento Padrão - Relatório Protocolo"],
          "Relatório Processos/Departamentos": comprasRelatorioContent["Relatório Processos/Departamentos - Relatório Protocolo"],
        };

        const protocoloCadastroContentBySection: Record<string, string | undefined> = {
          "Cadastro de Estados": comprasCadastroContent["Cadastro de Estados - Cadastro Protocolo"],
          "Geral do Município - CGM": comprasCadastroContent["Geral do Município - CGM - Cadastro Protocolo"],
          "Geral do Município - CGM (novo)": comprasCadastroContent["Geral do Município - CGM - Cadastro Protocolo"],
          "Cadastro de Municípios": comprasCadastroContent["Cadastro de Municípios - Cadastro Protocolo"],
          Logradouro: comprasCadastroContent["Logradouro - Cadastro Protocolo"],
          Localidade: comprasCadastroContent["Localidade - Cadastro Protocolo"],
          CEP: comprasCadastroContent["CEP - Cadastro Protocolo"],
          "Tipo de Processo": comprasCadastroContent["Tipo de Processo - Cadastro Protocolo"],
          "Tipo de Processo / Receita": comprasCadastroContent["Tipo de Processo / Receita - Cadastro Protocolo"],
          Documento: comprasCadastroContent["Documento - Cadastro Protocolo"],
          "Documento / Tipo de Processo": comprasCadastroContent["Documento / Tipo de Processo - Cadastro Protocolo"],
          Variável: comprasCadastroContent["Variável - Cadastro Protocolo"],
          "Tipo de Documento": comprasCadastroContent["Tipo de Documento - Cadastro Protocolo"],
        };

        const isProcedimentosMaterial =
          currentSubmoduleId === "material" &&
          selectedCategory === "procedimentos";

        const isProcedimentosPatrimonio =
          currentSubmoduleId === "patrimonio" &&
          selectedCategory === "procedimentos";

        const patrimonioProcedimentosContentBySection: Record<string, string | undefined> = {
          "Transferência de bens": comprasCadastroContent["Transferência de bens - Procedimentos Patrimônio"],
          "Termo de Guarda": comprasCadastroContent["Termo de Guarda - Procedimentos Patrimônio"],
          "Devolução do Termo de Guarda": comprasCadastroContent["Devolução do Termo de Guarda - Procedimentos Patrimônio"],
          "Confirmação de Transferência": comprasCadastroContent["Confirmação de Transferência - Procedimentos Patrimônio"],
          "Alterar Placa": comprasCadastroContent["Alterar Placa - Procedimentos Patrimônio"],
          "Alterar Situação": comprasCadastroContent["Alterar Situação - Procedimentos Patrimônio"],
          "Parâmetros": comprasCadastroContent["Parâmetros - Procedimentos Patrimônio"],
          "Processamento da Depreciação": comprasCadastroContent["Processamento da Depreciação - Procedimentos Patrimônio"],
          "Baixa de Bens": comprasCadastroContent["Baixa de Bens - Procedimentos Patrimônio"],
          "Inventário": comprasCadastroContent["Inventário - Procedimentos Patrimônio"],
        };

        const isRelatorioMaterial =
          currentSubmoduleId === "material" &&
          selectedCategory === "relatorio";

        const isRelatorioPatrimonio =
          currentSubmoduleId === "patrimonio" &&
          selectedCategory === "relatorio";

        const patrimonioRelatorioContentBySection: Record<string, string | undefined> = {
          "Ficha de bens": comprasRelatorioContent["Ficha de bens - Relatório Patrimônio"],
          "Remite ficha de transferência": comprasRelatorioContent["Remite ficha de transferência - Relatório Patrimônio"],
          "Baixa de bens": comprasRelatorioContent["Baixa de bens - Relatório Patrimônio"],
          "Apólices": comprasRelatorioContent["Apólices - Relatório Patrimônio"],
          "Termo de responsabilidade": comprasRelatorioContent["Termo de responsabilidade - Relatório Patrimônio"],
          "Emissão Termo de Guarda": comprasRelatorioContent["Emissão Termo de Guarda - Relatório Patrimônio"],
          "Reimpressão do Termo de Guarda": comprasRelatorioContent["Reimpressão do Termo de Guarda - Relatório Patrimônio"],
          "Reimpressão da Devolução Termo de Guarda": comprasRelatorioContent["Reimpressão da Devolução Termo de Guarda - Relatório Patrimônio"],
          "Bens por Classificação": comprasRelatorioContent["Bens por Classificação - Relatório Patrimônio"],
          "Geral de bens": comprasRelatorioContent["Geral de bens - Relatório Patrimônio"],
          "Financeiro Patrimonial": comprasRelatorioContent["Financeiro Patrimonial - Relatório Patrimônio"],
          "Cadastrais": comprasRelatorioContent["Cadastrais - Relatório Patrimônio"],
          "Legais": comprasRelatorioContent["Legais - Relatório Patrimônio - Página 1"],
        };

        const patrimonioCadastraisPages: Record<1 | 2 | 3 | 4, string | undefined> = {
          1: comprasRelatorioContent["Cadastrais - Relatório Patrimônio"],
          2: comprasRelatorioContent["Cadastrais - Página 2 - Relatório Patrimônio"],
          3: comprasRelatorioContent["Cadastrais - Página 3 - Relatório Patrimônio"],
          4: comprasRelatorioContent["Cadastrais - Página 4 - Relatório Patrimônio"],
        };
        const patrimonioConferenciaPages: Record<1 | 2 | 3 | 4 | 5 | 6, string | undefined> = {
          1: comprasRelatorioContent["Conferência - Relatório Patrimônio - Página 1"],
          2: comprasRelatorioContent["Conferência - Relatório Patrimônio - Página 2"],
          3: comprasRelatorioContent["Conferência - Relatório Patrimônio - Página 3"],
          4: comprasRelatorioContent["Conferência - Relatório Patrimônio - Página 4"],
          5: comprasRelatorioContent["Conferência - Relatório Patrimônio - Página 5"],
          6: comprasRelatorioContent["Conferência - Relatório Patrimônio - Página 6"],
        };

        const patrimonioLegaisPages: Record<1 | 2 | 3, string | undefined> = {
          1: comprasRelatorioContent["Legais - Relatório Patrimônio - Página 1"],
          2: comprasRelatorioContent["Legais - Relatório Patrimônio - Página 2"],
          3: comprasRelatorioContent["Legais - Relatório Patrimônio - Página 3"],
        };

        const patrimonioInventarioPages: Record<1 | 2, string | undefined> = {
          1: comprasRelatorioContent["Inventário - Relatório Patrimônio - Página 1"],
          2: comprasRelatorioContent["Inventário - Relatório Patrimônio - Página 2"],
        };

        const fichaBensPages: Record<1 | 2, string | undefined> = {
          1: comprasRelatorioContent["Ficha de bens - Relatório Patrimônio"],
          2: comprasRelatorioContent["Ficha de bens - Página 2 - Relatório Patrimônio"],
          "Conferência": patrimonioConferenciaPages[conferenciaPatrimonioPage],
        };

        const isCadastraisRelatorioMaterial =
          currentSubmoduleId === "material" &&
          selectedCategory === "relatorio" &&
          selectedFinalSection === "Cadastrais";

        const isDocumentosRelatorioMaterial =
          currentSubmoduleId === "material" &&
          selectedCategory === "relatorio" &&
          selectedFinalSection === "Documentos";

        const isConferenciaRelatorioMaterial =
          currentSubmoduleId === "material" &&
          selectedCategory === "relatorio" &&
          selectedFinalSection === "Conferência";

        const isDocumentosRelatorioOuvidoria =
          currentSubmoduleId === "ouvidoria" &&
          selectedCategory === "relatorio" &&
          selectedFinalSection === "Documentos";

        const isProcedimentosOuvidoria =
          currentSubmoduleId === "ouvidoria" &&
          selectedCategory === "procedimentos";

        const isProcedimentosPncp =
          currentSubmoduleId === "pncp" &&
          selectedCategory === "procedimentos";

        const isContratacaoEditalAvisoPncp =
          isProcedimentosPncp &&
          selectedFinalSection === "Contratação/Edital/Aviso";

        const contratacaoEditalAvisoPncpPages: Record<1 | 2 | 3 | 4 | 5, string | undefined> = {
          1: comprasCadastroContent["Contratação/Edital/Aviso - Procedimentos PNCP - Página 1"],
          2: comprasCadastroContent["Contratação/Edital/Aviso - Procedimentos PNCP - Página 2"],
          3: comprasCadastroContent["Contratação/Edital/Aviso - Procedimentos PNCP - Página 3"],
          4: comprasCadastroContent["Contratação/Edital/Aviso - Procedimentos PNCP - Página 4"],
          5: comprasCadastroContent["Contratação/Edital/Aviso - Procedimentos PNCP - Página 5"],
        };

        const isContratoPncp =
          isProcedimentosPncp && selectedFinalSection === "Contrato";

        const contratoPncpPages: Record<1 | 2 | 3, string | undefined> = {
          1: comprasCadastroContent["Contrato - Procedimentos PNCP - Página 1"],
          2: comprasCadastroContent["Contrato - Procedimentos PNCP - Página 2"],
          3: comprasCadastroContent["Contrato - Procedimentos PNCP - Página 3"],
        };

        const pncpProcedimentosContentBySection: Record<string, string | undefined> = {
          "Ata de Registro de Preço": comprasCadastroContent["Ata de Registro de Preço - Procedimentos PNCP"],
          "Termo de Contrato": comprasCadastroContent["Termo de Contrato - Procedimentos PNCP"],
          "Plano de Contratações": comprasCadastroContent["Plano de Contratações - Procedimentos PNCP"],
        };

        const isCadastroUnidadeCompradoraPncp =
          currentSubmoduleId === "pncp" &&
          selectedCategory === "cadastro" &&
          selectedFinalSection === "Unidade Compradora";

        const isCadastroOrgaoPncp =
          currentSubmoduleId === "pncp" &&
          selectedCategory === "cadastro" &&
          selectedFinalSection === "Orgão";

        const isConsultaPncp =
          currentSubmoduleId === "pncp" &&
          selectedCategory === "consulta";

        const pncpConsultaContentBySection: Record<string, string | undefined> = {
          "Unidade Compradora": comprasCadastroContent["Unidade Compradora - Consulta PNCP"],
          "Contratos de Contratação": comprasCadastroContent["Contratos de Contratação - Consulta PNCP"],
        };

        const registroPrecoPages: Record<1 | 2 | 3 | 4, string | undefined> = {
          1: comprasCadastroContent["Registro de Preço"],
          2: comprasCadastroContent["Registro de Preço - Página 2"],
          3: comprasCadastroContent["Registro de Preço - Página 3"],
          4: comprasCadastroContent["Registro de Preço - Página 4"],
        };

        const acordoProcedimentosPages: Record<1 | 2 | 3 | 4 | 5 | 6, string | undefined> = {
          1: comprasCadastroContent["Acordo - Procedimentos"],
          2: comprasCadastroContent["Acordo - Procedimentos - Página 2"],
          3: comprasCadastroContent["Acordo - Procedimentos - Página 3"],
          4: comprasCadastroContent["Acordo - Procedimentos - Página 4"],
          5: comprasCadastroContent["Acordo - Procedimentos - Página 5"],
          6: comprasCadastroContent["Acordo - Procedimentos - Página 6"],
        };

        const licitacaoProcedimentosPages: Record<1 | 2 | 3 | 4 | 5 | 6 | 7, string | undefined> = {
          1: comprasCadastroContent["Licitação - Procedimentos Licitações"],
          2: comprasCadastroContent["Licitação - Página 2 - Procedimentos Licitações"],
          3: comprasCadastroContent["Licitação - Página 3 - Procedimentos Licitações"],
          4: comprasCadastroContent["Licitação - Página 4 - Procedimentos Licitações"],
          5: comprasCadastroContent["Licitação - Página 5 - Procedimentos Licitações"],
          6: comprasCadastroContent["Licitação - Página 6 - Procedimentos Licitações"],
          7: comprasCadastroContent["Licitação - Página 7 - Procedimentos Licitações"],
        };

        const licitacoesConsultaContentBySection: Record<string, string | undefined> = {
          "Licitação": comprasCadastroContent["Licitação - Consulta Licitações"],
          "Edital(Download)": comprasCadastroContent["Edital(Download) - Consulta Licitações"],
          "CGM": comprasCadastroContent["CGM - Consulta Licitações"],
        };

        const licitacoesRelatorioContentBySection: Record<string, string | undefined> = {
          "Licitação": comprasRelatorioContent["Licitação - Relatório Licitações"],
          "Relatório Resumido da Licitação": comprasRelatorioContent["Relatório Resumido da Licitação - Relatório Licitações"],
          "Mapa das Propostas": comprasRelatorioContent["Mapa das Propostas - Relatório Licitações"],
          "Gera Lista de Itens em TXT": comprasRelatorioContent["Gera Lista de Itens em TXT - Relatório Licitações"],
          "Homologação de Processo": comprasRelatorioContent["Homologação de Processo - Relatório Licitações"],
          "Adjudicação de Processo": comprasRelatorioContent["Adjudicação de Processo - Relatório Licitações"],
          "Licitações Liberadas na Web": comprasRelatorioContent["Licitações Liberadas na Web - Relatório Licitações"],
          "Edital (Download)": comprasRelatorioContent["Edital (Download) - Relatório Licitações"],
          "Emite Autorização de empenho": comprasRelatorioContent["Emite Autorização de empenho - Relatório Licitações"],
          "Situações da Licitação": comprasRelatorioContent["Situações da Licitação - Relatório Licitações"],
          "Fornecedores Empatados e Cotações ME/EPP": comprasRelatorioContent["Fornecedores Empatados e Cotações ME/EPP - Relatório Licitações"],
          "Historico do Julgamento da Licitação Itens Bloqueados": comprasRelatorioContent["Historico do Julgamento da Licitação Itens Bloqueados - Relatório Licitações"],
          "SICOM - Edital e Licitação": comprasRelatorioContent["SICOM - Edital e Licitação - Relatório Licitações"],
        };

        const licitacoesProcedimentosContentBySection: Record<string, string | undefined> = {
          "Configuração dos Editais": comprasCadastroContent["Configuração dos Editais - Procedimentos Licitações"],
          "Edital Web": comprasCadastroContent["Edital Web - Procedimentos Licitações"],
          "Inclusão Proposta Fornecedor": comprasCadastroContent["Inclusão Proposta Fornecedor - Procedimentos Licitações"],
          "Licitação": comprasCadastroContent["Licitação - Procedimentos Licitações"],
          "Fornecedores da Licitação": comprasCadastroContent["Fornecedores da Licitação - Procedimentos Licitações"],
          "Credenciamento de Fornecedores da Licitação": comprasCadastroContent["Credenciamento de Fornecedores da Licitação - Procedimentos Licitações"],
          "Reserva de Cotas": comprasCadastroContent["Reserva de Cotas - Procedimentos Licitações"],
          "Lançar Propostas": comprasCadastroContent["Lançar Propostas - Procedimentos Licitações"],
          "Habilitação de Fornecedores": comprasCadastroContent["Habilitação de Fornecedores - Procedimentos Licitações"],
          "Eventos": comprasCadastroContent["Eventos - Procedimentos Licitações"],
          "Trocar Fornecedor": comprasCadastroContent["Trocar Fornecedor - Procedimentos Licitações"],
          "Cancelamento de Julgamento": comprasCadastroContent["Cancelamento de Julgamento - Procedimentos Licitações"],
          "Gerar Autorização": comprasCadastroContent["Gerar Autorização - Procedimentos Licitações"],
          "Anula Autorização": comprasCadastroContent["Anula Autorização - Procedimentos Licitações"],
          "Manutenção de Licitação": comprasCadastroContent["Manutenção de Licitação - Procedimentos Licitações"],
          "Andamento da Solicitação": comprasCadastroContent["Andamento da Solicitação - Procedimentos Licitações"],
          "Acessa Itens": comprasCadastroContent["Acessa Itens - Procedimentos Licitações"],
          "Parâmetros": comprasCadastroContent["Parâmetros - Procedimentos Licitações"],
          "Registro de Preço": comprasCadastroContent["Registro de Preço - Procedimentos Licitações"],
          "Edital": comprasCadastroContent["Edital - Procedimentos Licitações"],
          "Ata": comprasCadastroContent["Ata - Procedimentos Licitações"],
          "Minuta": comprasCadastroContent["Minuta - Procedimentos Licitações"],
          "Exportação de Dados": comprasCadastroContent["Exportação de Dados - Procedimentos Licitações"],
          "Portal Compras Publicas": comprasCadastroContent["Portal Compras Publicas - Procedimentos Licitações"],
          "Integração Licitar Digital": comprasCadastroContent["Integração Licitar Digital - Procedimentos Licitações"],
        };

        const materialCadastroContentBySection: Record<string, string | undefined> = {
          "Cadastro de Unidades": comprasCadastroContent["Cadastro de Unidades - Material"],
          "Cadastro de Material": comprasCadastroContent["Cadastro de Material - Material"],
          "Cadastro de Fabricantes": comprasCadastroContent["Cadastro de Fabricantes - Material"],
          "Depósitos": comprasCadastroContent["Depósitos - Material"],
          "Grupo/Subgrupo": comprasCadastroContent["Grupo/Subgrupo - Material"],
          "Veiculos Tipo/Grupo/Subgrupo": comprasCadastroContent["Veiculos Tipo/Grupo/Subgrupo - Material"],
        };

        const materialConsultaContentBySection: Record<string, string | undefined> = {
          "Material": comprasCadastroContent["Material - Consulta Material"],
          "Ordens de Compra": comprasCadastroContent["Ordens de Compra - Consulta Material"],
          "Consulta Empenho": comprasCadastroContent["Consulta Empenho - Consulta Material"],
          "Controle de Validade": comprasCadastroContent["Controle de Validade - Consulta Material"],
        };

        const materialProcedimentosContentBySection: Record<string, string | undefined> = {
          "Implantação de estoque": comprasCadastroContent["Implantação de estoque - Procedimentos Material"],
          "Manutenção de Parâmetros": comprasCadastroContent["Manutenção de Parâmetros - Procedimentos Material"],
          "Entrada de Ordem de Compra": comprasCadastroContent["Entrada de Ordem de Compra - Procedimentos Material"],
          "Requisição de Saída de Materiais": comprasCadastroContent["Requisição de Saída de Materiais - Procedimentos Material"],
          "Atendimento de Requisição": comprasCadastroContent["Atendimento de Requisição - Procedimentos Material"],
          "Entrada manual": comprasCadastroContent["Entrada manual - Procedimentos Material"],
          "Saída manual": comprasCadastroContent["Saída manual - Procedimentos Material"],
          "Transferência entre depósitos": comprasCadastroContent["Transferência entre depósitos - Procedimentos Material"],
          "Devolução de Materiais": comprasCadastroContent["Devolução de Materiais - Procedimentos Material"],
          "Configuração de texto da ordem de compra": comprasCadastroContent["Configuração de texto da ordem de compra - Procedimentos Material"],
          "PIT": comprasCadastroContent["PIT - Procedimentos Material"],
          "Fechamento do Estoque": comprasCadastroContent["Fechamento do Estoque - Procedimentos Material"],
          "Planilha de Distribuição": comprasCadastroContent["Planilha de Distribuição - Procedimentos Material"],
        };

        const materialRelatorioContentBySection: Record<string, string | undefined> = {
          "Movimentação": comprasCadastroContent["Movimentação - Relatório Material"],
          "Conferência": comprasCadastroContent["Conferência - Relatório Material"],
          "Cadastrais": comprasCadastroContent["Cadastrais - Relatório Material"],
          "Documentos": comprasCadastroContent["Documentos - Relatório Material"],
        };

        const cadastraisMaterialPages: Record<1 | 2 | 3 | 4, string | undefined> = {
          1: comprasCadastroContent["Cadastrais - Relatório Material"],
          2: comprasCadastroContent["Cadastrais - Página 2 - Relatório Material"],
          3: comprasCadastroContent["Cadastrais - Página 3 - Relatório Material"],
          4: comprasCadastroContent["Cadastrais - Página 4 - Relatório Material"],
        };

        const documentosMaterialPages: Record<1 | 2, string | undefined> = {
          1: comprasCadastroContent["Documentos - Relatório Material"],
          2: comprasCadastroContent["Documentos - Página 2 - Relatório Material"],
        };

        const conferenciaMaterialPages: Record<ConferenciaMaterialPage, string | undefined> = {
          1: comprasCadastroContent["Conferência - Relatório Material"],
          2: comprasCadastroContent["Conferência - Página 2 - Relatório Material"],
          3: comprasCadastroContent["Conferência - Página 3 - Relatório Material"],
          4: comprasCadastroContent["Conferência - Página 4 - Relatório Material"],
          5: comprasCadastroContent["Conferência - Página 5 - Relatório Material"],
          6: comprasCadastroContent["Conferência - Página 6 - Relatório Material"],
          7: comprasCadastroContent["Conferência - Página 7 - Relatório Material"],
          8: comprasCadastroContent["Conferência - Página 8 - Relatório Material"],
          9: comprasCadastroContent["Conferência - Página 9 - Relatório Material"],
          10: comprasCadastroContent["Conferência - Página 10 - Relatório Material"],
          11: comprasCadastroContent["Conferência - Página 11 - Relatório Material"],
          12: comprasCadastroContent["Conferência - Página 12 - Relatório Material"],
          13: comprasCadastroContent["Conferência - Página 13 - Relatório Material"],
          14: comprasCadastroContent["Conferência - Página 14 - Relatório Material"],
        };

        const content =
          isConsultaSolicitacoesCompras
            ? comprasCadastroContent["Solicitações - Consulta Compras"]
            : isRegistroPrecoProcedimento
            ? registroPrecoPages[registroPrecoPage]
            : isMovimentacoesRelatorioContratos
              ? movimentacoesPage === 1
                ? comprasRelatorioContent["Movimentações"]
                : comprasRelatorioContent["Movimentações - Página 2"]
            : isAditamentosProcedimentosContratos
              ? aditamentosPage === 1
                ? comprasCadastroContent["Aditamentos"]
                : comprasCadastroContent["Aditamentos - Página 2"]
            : isAcordoProcedimentosContratos
              ? acordoProcedimentosPages[acordoPage] || acordoProcedimentosPages[1]
            : isLicitacaoProcedimentosLicitacoes
              ? licitacaoProcedimentosPages[licitacaoProcedimentosPage] || licitacaoProcedimentosPages[1]
            : isConsultaLicitacoes
              ? licitacoesConsultaContentBySection[selectedFinalSection]
            : isRelatorioLicitacoes
              ? licitacoesRelatorioContentBySection[selectedFinalSection]
            : isProcedimentosLicitacoes
              ? licitacoesProcedimentosContentBySection[selectedFinalSection]
            : isCadastroMaterial
              ? materialCadastroContentBySection[selectedFinalSection]
            : isCadastroPatrimonio
              ? selectedFinalSection === "Bens" && bensCadastroPage === 2
                ? comprasCadastroContent["Bens - Cadastro Patrimônio - Página 2"]
                : selectedFinalSection === "Bens" && bensCadastroPage === 3
                  ? comprasCadastroContent["Bens - Cadastro Patrimônio - Página 3"]
                : patrimonioCadastroContentBySection[selectedFinalSection]
            : isConsultaPatrimonio
              ? patrimonioConsultaContentBySection[selectedFinalSection]
            : isProcedimentosPatrimonio
              ? selectedFinalSection === "Transferência de bens" && transferenciaBensPage === 2
                ? comprasCadastroContent["Transferência de bens - Página 2 - Procedimentos Patrimônio"]
                : patrimonioProcedimentosContentBySection[selectedFinalSection]
            : isConsultaMaterial
              ? materialConsultaContentBySection[selectedFinalSection]
            : isProcedimentosMaterial
              ? materialProcedimentosContentBySection[selectedFinalSection]
            : isCadastraisRelatorioMaterial
              ? cadastraisMaterialPages[cadastraisMaterialPage] || cadastraisMaterialPages[1]
            : isDocumentosRelatorioMaterial
              ? documentosMaterialPages[documentosMaterialPage] || documentosMaterialPages[1]
            : isConferenciaRelatorioMaterial
              ? conferenciaMaterialPages[conferenciaMaterialPage] || conferenciaMaterialPages[1]
            : isRelatorioPatrimonio
              ? selectedFinalSection === "Cadastrais"
                ? patrimonioCadastraisPages[cadastraisPatrimonioPage]
                : selectedFinalSection === "Ficha de bens"
                  ? fichaBensPages[fichaBensPage]
                  : selectedFinalSection === "Conferência"
                    ? patrimonioConferenciaPages[conferenciaPatrimonioPage]
                    : selectedFinalSection === "Legais"
                      ? patrimonioLegaisPages[legaisPatrimonioPage]
                        : selectedFinalSection === "Inventário"
                          ? patrimonioInventarioPages[inventarioPatrimonioPage]
                  : patrimonioRelatorioContentBySection[selectedFinalSection]
            : isRelatorioMaterial
              ? materialRelatorioContentBySection[selectedFinalSection]
            : isDocumentosRelatorioOuvidoria
              ? undefined
            : isProcedimentosOuvidoria
              ? undefined
            : isContratacaoEditalAvisoPncp
              ? contratacaoEditalAvisoPncpPages[contratacaoPncpPage]
            : isContratoPncp
              ? contratoPncpPages[contratoPncpPage]
            : isProcedimentosPncp
              ? pncpProcedimentosContentBySection[selectedFinalSection]
            : isConsultaPncp
              ? pncpConsultaContentBySection[selectedFinalSection]
            : isCadastroUnidadeCompradoraPncp
              ? comprasCadastroContent["Unidade Compradora - Cadastro PNCP"]
            : isCadastroOrgaoPncp
              ? comprasCadastroContent["Orgão - Cadastro PNCP"]
            : selectedFinalSection === "Dados dos Veiculos"
              ? {
                  1: comprasCadastroContent["Dados dos Veiculos"],
                  2: comprasCadastroContent["Dados dos Veiculos - Página 2"],
                  3: comprasCadastroContent["Dados dos Veiculos - Página 3"],
                  4: comprasCadastroContent["Dados dos Veiculos - Página 4"],
                  5: comprasCadastroContent["Dados dos Veiculos - Página 5"],
                  6: comprasCadastroContent["Dados dos Veiculos - Página 6"],
                  7: comprasCadastroContent["Dados dos Veiculos - Página 7"],
                  8: comprasCadastroContent["Dados dos Veiculos - Página 8"],
                  9: comprasCadastroContent["Dados dos Veiculos - Página 9"],
                  10: comprasCadastroContent["Dados dos Veiculos - Página 10"],
                }[dadosVeiculosPage]
            : isConsultaGeralFinanceiraProtocolo
              ? comprasCadastroContent["Geral Financeira - Consulta Protocolo"]
            : isConsultaProcessoProtocolo
              ? comprasCadastroContent["Processo - Consulta Protocolo"]
            : isConsultaCgmProtocolo
              ? comprasCadastroContent["CGM - Consulta Protocolo"]
            : isConsultaCgmDuploProcessadoProtocolo
              ? comprasCadastroContent["CGM Duplo Processado - Consulta Protocolo"]
            : isRelatorioProtocolo
              ? protocoloRelatorioContentBySection[selectedFinalSection]
            : isCadastroProtocolo
              ? protocoloCadastroContentBySection[selectedFinalSection]
            : selectedCategory === "cadastro" ||
                selectedCategory === "consulta" ||
                selectedCategory === "procedimentos"
              ? comprasCadastroContent[
                  selectedFinalSection as keyof typeof comprasCadastroContent
                ]
              : selectedCategory === "relatorio"
                ? isCadastraisRelatorioVeiculos
                  ? cadastraisVeiculosPages[cadastraisVeiculosPage]
                  : isDocumentosRelatorioVeiculos
                  ? comprasRelatorioContent["Ordem de Serviço - Relatório Veículos"]
                  : isAbastecimentoRelatorioVeiculos
                  ? movimentacoesVeiculosPages[movimentacoesVeiculosPage]
                  : comprasRelatorioContent[
                      selectedFinalSection as keyof typeof comprasRelatorioContent
                    ]
                : undefined;

        return (
          <div className="max-w-none">
            <div>
              <Button
                onClick={handleBackClick}
                variant="outline"
                size="sm"
                className="mb-4 bg-card"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para{" "}
                {selectedCategory.charAt(0).toUpperCase() +
                  selectedCategory.slice(1)}
              </Button>
              <h2 className="text-2xl font-bold mb-6">{selectedFinalSection}</h2>
              <hr className="mb-8 border-t border-border" />
              {content ? (
                <>
                  <article className="prose prose-slate prose-lg max-w-none">
                    <MarkdownContent content={content} />
                  </article>

                  {isContratacaoEditalAvisoPncp ? (
                    <div className="mt-8 flex flex-wrap items-center justify-end gap-2">
                      {[1, 2, 3, 4, 5].map((page) => (
                        <Button
                          key={page}
                          size="sm"
                          variant={contratacaoPncpPage === page ? "default" : "outline"}
                          onClick={() => setContratacaoPncpPage(page as 1 | 2 | 3 | 4 | 5)}
                        >
                          Página {page}
                        </Button>
                      ))}
                    </div>
                  ) : null}

                  {isContratoPncp ? (
                    <div className="mt-8 flex flex-wrap items-center justify-end gap-2">
                      {[1, 2, 3].map((page) => (
                        <Button
                          key={page}
                          size="sm"
                          variant={contratoPncpPage === page ? "default" : "outline"}
                          onClick={() => setContratoPncpPage(page as 1 | 2 | 3)}
                        >
                          Página {page}
                        </Button>
                      ))}
                    </div>
                  ) : null}

                  {isRelatorioPatrimonio && selectedFinalSection === "Cadastrais" ? (
                    <div className="mt-8 flex items-center justify-end gap-2">
                      {[1, 2, 3, 4].map((page) => (
                        <Button
                          key={page}
                          size="sm"
                          variant={cadastraisPatrimonioPage === page ? "default" : "outline"}
                          onClick={() => setCadastraisPatrimonioPage(page as 1 | 2 | 3 | 4)}
                        >
                          Página {page}
                        </Button>
                      ))}
                    </div>
                  ) : null}

                  {isRelatorioPatrimonio && selectedFinalSection === "Ficha de bens" ? (
                    <div className="mt-8 flex items-center justify-end gap-2">
                      {[1, 2].map((page) => (
                        <Button
                          key={page}
                          size="sm"
                          variant={fichaBensPage === page ? "default" : "outline"}
                          onClick={() => setFichaBensPage(page as 1 | 2)}
                        >
                          Página {page}
                        </Button>
                      ))}
                    </div>
                  ) : null}

                  {isRelatorioPatrimonio && selectedFinalSection === "Conferência" ? (
                    <div className="mt-8 flex flex-wrap items-center justify-end gap-2">
                      {[1, 2, 3, 4, 5, 6].map((page) => (
                        <Button
                          key={page}
                          size="sm"
                          variant={conferenciaPatrimonioPage === page ? "default" : "outline"}
                          onClick={() => setConferenciaPatrimonioPage(page as 1 | 2 | 3 | 4 | 5 | 6)}
                        >
                          Página {page}
                        </Button>
                      ))}
                    </div>
                  ) : null}

                  {isRelatorioPatrimonio && selectedFinalSection === "Legais" ? (
                    <div className="mt-8 flex flex-wrap items-center justify-end gap-2">
                      {[1, 2, 3].map((page) => (
                        <Button
                          key={page}
                          size="sm"
                          variant={legaisPatrimonioPage === page ? "default" : "outline"}
                          onClick={() => setLegaisPatrimonioPage(page as 1 | 2 | 3)}
                        >
                          Página {page}
                        </Button>
                      ))}
                    </div>
                  ) : null}

                  {isRelatorioPatrimonio && selectedFinalSection === "Inventário" ? (
                    <div className="mt-8 flex items-center justify-end gap-2">
                      {[1, 2].map((page) => (
                        <Button
                          key={page}
                          size="sm"
                          variant={inventarioPatrimonioPage === page ? "default" : "outline"}
                          onClick={() => setInventarioPatrimonioPage(page as 1 | 2)}
                        >
                          Página {page}
                        </Button>
                      ))}
                    </div>
                  ) : null}

                  {isCadastroPatrimonio && selectedFinalSection === "Bens" ? (
                    <div className="mt-8 flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        variant={bensCadastroPage === 1 ? "default" : "outline"}
                        onClick={() => setBensCadastroPage(1)}
                      >
                        Página 1
                      </Button>
                      <Button
                        size="sm"
                        variant={bensCadastroPage === 2 ? "default" : "outline"}
                        onClick={() => setBensCadastroPage(2)}
                      >
                        Página 2
                      </Button>
                      <Button
                        size="sm"
                        variant={bensCadastroPage === 3 ? "default" : "outline"}
                        onClick={() => setBensCadastroPage(3)}
                      >
                        Página 3
                      </Button>
                    </div>
                  ) : null}

                  {isProcedimentosPatrimonio && selectedFinalSection === "Transferência de bens" ? (
                    <div className="mt-8 flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        variant={transferenciaBensPage === 1 ? "default" : "outline"}
                        onClick={() => setTransferenciaBensPage(1)}
                      >
                        Página 1
                      </Button>
                      <Button
                        size="sm"
                        variant={transferenciaBensPage === 2 ? "default" : "outline"}
                        onClick={() => setTransferenciaBensPage(2)}
                      >
                        Página 2
                      </Button>
                    </div>
                  ) : null}

                  {isRegistroPrecoProcedimento ? (
                    <div className="mt-8 flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        variant={registroPrecoPage === 1 ? "default" : "outline"}
                        onClick={() => setRegistroPrecoPage(1)}
                      >
                        Página 1
                      </Button>
                      <Button
                        size="sm"
                        variant={registroPrecoPage === 2 ? "default" : "outline"}
                        onClick={() => setRegistroPrecoPage(2)}
                      >
                        Página 2
                      </Button>
                      <Button
                        size="sm"
                        variant={registroPrecoPage === 3 ? "default" : "outline"}
                        onClick={() => setRegistroPrecoPage(3)}
                      >
                        Página 3
                      </Button>
                      <Button
                        size="sm"
                        variant={registroPrecoPage === 4 ? "default" : "outline"}
                        onClick={() => setRegistroPrecoPage(4)}
                      >
                        Página 4
                      </Button>
                    </div>
                  ) : null}

                  {isMovimentacoesRelatorioContratos ? (
                    <div className="mt-8 flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        variant={movimentacoesPage === 1 ? "default" : "outline"}
                        onClick={() => setMovimentacoesPage(1)}
                      >
                        Página 1
                      </Button>
                      <Button
                        size="sm"
                        variant={movimentacoesPage === 2 ? "default" : "outline"}
                        onClick={() => setMovimentacoesPage(2)}
                      >
                        Página 2
                      </Button>
                    </div>
                  ) : null}

                  {isAbastecimentoRelatorioVeiculos ? (
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-9 shrink-0 px-3"
                        disabled={movimentacoesVeiculosPage === 1}
                        onClick={() => setMovimentacoesVeiculosPage((movimentacoesVeiculosPage - 1) as 1 | 2 | 3 | 4)}
                      >
                        « Anterior
                      </Button>
                      {[1, 2, 3, 4].map((page) => (
                        <Button
                          key={page}
                          size="sm"
                          className="h-9 min-w-9 shrink-0 px-3"
                          variant={movimentacoesVeiculosPage === page ? "default" : "outline"}
                          onClick={() => setMovimentacoesVeiculosPage(page as 1 | 2 | 3 | 4)}
                        >
                          {page}
                        </Button>
                      ))}
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-9 shrink-0 px-3"
                        disabled={movimentacoesVeiculosPage === 4}
                        onClick={() => setMovimentacoesVeiculosPage((movimentacoesVeiculosPage + 1) as 1 | 2 | 3 | 4)}
                      >
                        Próximo »
                      </Button>
                    </div>
                  ) : null}

                  {isCadastraisRelatorioVeiculos ? (
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-9 shrink-0 px-3"
                        disabled={cadastraisVeiculosPage === 1}
                        onClick={() => setCadastraisVeiculosPage((cadastraisVeiculosPage - 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17)}
                      >
                        « Anterior
                      </Button>
                      {(() => {
                        const paginationPages = new Set<number>([
                          1,
                          2,
                          3,
                          15,
                          16,
                          17,
                          cadastraisVeiculosPage - 1,
                          cadastraisVeiculosPage,
                          cadastraisVeiculosPage + 1,
                        ]);
                        const orderedPages = [...paginationPages]
                          .filter((page) => page >= 1 && page <= 17)
                          .sort((firstPage, secondPage) => firstPage - secondPage);

                        return orderedPages.map((page, index) => (
                          <span key={page} className="contents">
                            {index > 0 && page - orderedPages[index - 1] > 1 ? (
                              <span className="px-1 text-muted-foreground">...</span>
                            ) : null}
                            <Button
                              size="sm"
                              className="h-9 min-w-9 shrink-0 px-3"
                              variant={cadastraisVeiculosPage === page ? "default" : "outline"}
                              onClick={() => setCadastraisVeiculosPage(page as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17)}
                            >
                              {page}
                            </Button>
                          </span>
                        ));
                      })()}
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-9 shrink-0 px-3"
                        disabled={cadastraisVeiculosPage === 17}
                        onClick={() => setCadastraisVeiculosPage((cadastraisVeiculosPage + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17)}
                      >
                        Próximo »
                      </Button>
                    </div>
                  ) : null}

                  {isAditamentosProcedimentosContratos ? (
                    <div className="mt-8 flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        variant={aditamentosPage === 1 ? "default" : "outline"}
                        onClick={() => setAditamentosPage(1)}
                      >
                        Página 1
                      </Button>
                      <Button
                        size="sm"
                        variant={aditamentosPage === 2 ? "default" : "outline"}
                        onClick={() => setAditamentosPage(2)}
                      >
                        Página 2
                      </Button>
                    </div>
                  ) : null}

                  {isAcordoProcedimentosContratos ? (
                    <div className="mt-8 flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        variant={acordoPage === 1 ? "default" : "outline"}
                        onClick={() => setAcordoPage(1)}
                      >
                        Página 1
                      </Button>
                      <Button
                        size="sm"
                        variant={acordoPage === 2 ? "default" : "outline"}
                        onClick={() => setAcordoPage(2)}
                      >
                        Página 2
                      </Button>
                      <Button
                        size="sm"
                        variant={acordoPage === 3 ? "default" : "outline"}
                        onClick={() => setAcordoPage(3)}
                      >
                        Página 3
                      </Button>
                      <Button
                        size="sm"
                        variant={acordoPage === 4 ? "default" : "outline"}
                        onClick={() => setAcordoPage(4)}
                      >
                        Página 4
                      </Button>
                      <Button
                        size="sm"
                        variant={acordoPage === 5 ? "default" : "outline"}
                        onClick={() => setAcordoPage(5)}
                      >
                        Página 5
                      </Button>
                      <Button
                        size="sm"
                        variant={acordoPage === 6 ? "default" : "outline"}
                        onClick={() => setAcordoPage(6)}
                      >
                        Página 6
                      </Button>
                    </div>
                  ) : null}

                  {isCadastraisRelatorioMaterial ? (
                    <div className="mt-8 flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        variant={cadastraisMaterialPage === 1 ? "default" : "outline"}
                        onClick={() => setCadastraisMaterialPage(1)}
                      >
                        Página 1
                      </Button>
                      <Button
                        size="sm"
                        variant={cadastraisMaterialPage === 2 ? "default" : "outline"}
                        onClick={() => setCadastraisMaterialPage(2)}
                      >
                        Página 2
                      </Button>
                      <Button
                        size="sm"
                        variant={cadastraisMaterialPage === 3 ? "default" : "outline"}
                        onClick={() => setCadastraisMaterialPage(3)}
                      >
                        Página 3
                      </Button>
                      <Button
                        size="sm"
                        variant={cadastraisMaterialPage === 4 ? "default" : "outline"}
                        onClick={() => setCadastraisMaterialPage(4)}
                      >
                        Página 4
                      </Button>
                    </div>
                  ) : null}

                  {isDocumentosRelatorioMaterial ? (
                    <div className="mt-8 flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        variant={documentosMaterialPage === 1 ? "default" : "outline"}
                        onClick={() => setDocumentosMaterialPage(1)}
                      >
                        Página 1
                      </Button>
                      <Button
                        size="sm"
                        variant={documentosMaterialPage === 2 ? "default" : "outline"}
                        onClick={() => setDocumentosMaterialPage(2)}
                      >
                        Página 2
                      </Button>
                    </div>
                  ) : null}

                  {isConferenciaRelatorioMaterial ? (
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-9 shrink-0 px-3"
                        disabled={conferenciaMaterialPage === 1}
                        onClick={() => setConferenciaMaterialPage((conferenciaMaterialPage - 1) as ConferenciaMaterialPage)}
                      >
                        « Anterior
                      </Button>
                      {(() => {
                        const paginationPages = new Set<number>([
                          1,
                          2,
                          3,
                          12,
                          13,
                          14,
                          conferenciaMaterialPage - 1,
                          conferenciaMaterialPage,
                          conferenciaMaterialPage + 1,
                        ]);
                        const orderedPages = [...paginationPages]
                          .filter((page) => page >= 1 && page <= 14)
                          .sort((firstPage, secondPage) => firstPage - secondPage);
                        const paginationItems: ConferenciaMaterialPaginationItem[] = [];

                        orderedPages.forEach((page, index) => {
                          if (index > 0 && page - orderedPages[index - 1] > 1) {
                            paginationItems.push("ellipsis");
                          }
                          paginationItems.push(page as ConferenciaMaterialPage);
                        });

                        return paginationItems.map((page, index) =>
                          page === "ellipsis" ? (
                            <span key={`ellipsis-${index}`} className="px-1 text-muted-foreground">
                              ...
                            </span>
                          ) : (
                            <Button
                              key={page}
                              size="sm"
                              className="h-9 min-w-9 shrink-0 px-3"
                              variant={conferenciaMaterialPage === page ? "default" : "outline"}
                              onClick={() => setConferenciaMaterialPage(page)}
                            >
                              {page}
                            </Button>
                          ),
                        );
                      })()}
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-9 shrink-0 px-3"
                        disabled={conferenciaMaterialPage === 14}
                        onClick={() => setConferenciaMaterialPage((conferenciaMaterialPage + 1) as ConferenciaMaterialPage)}
                      >
                        Próximo »
                      </Button>
                    </div>
                  ) : null}

                  {isLicitacaoProcedimentosLicitacoes ? (
                    <div className="mt-8 flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        variant={licitacaoProcedimentosPage === 1 ? "default" : "outline"}
                        onClick={() => setLicitacaoProcedimentosPage(1)}
                      >
                        Página 1
                      </Button>
                      <Button
                        size="sm"
                        variant={licitacaoProcedimentosPage === 2 ? "default" : "outline"}
                        onClick={() => setLicitacaoProcedimentosPage(2)}
                      >
                        Página 2
                      </Button>
                      <Button
                        size="sm"
                        variant={licitacaoProcedimentosPage === 3 ? "default" : "outline"}
                        onClick={() => setLicitacaoProcedimentosPage(3)}
                      >
                        Página 3
                      </Button>
                      <Button
                        size="sm"
                        variant={licitacaoProcedimentosPage === 4 ? "default" : "outline"}
                        onClick={() => setLicitacaoProcedimentosPage(4)}
                      >
                        Página 4
                      </Button>
                      <Button
                        size="sm"
                        variant={licitacaoProcedimentosPage === 5 ? "default" : "outline"}
                        onClick={() => setLicitacaoProcedimentosPage(5)}
                      >
                        Página 5
                      </Button>
                      <Button
                        size="sm"
                        variant={licitacaoProcedimentosPage === 6 ? "default" : "outline"}
                        onClick={() => setLicitacaoProcedimentosPage(6)}
                      >
                        Página 6
                      </Button>
                      <Button
                        size="sm"
                        variant={licitacaoProcedimentosPage === 7 ? "default" : "outline"}
                        onClick={() => setLicitacaoProcedimentosPage(7)}
                      >
                        Página 7
                      </Button>
                    </div>
                  ) : null}

                  {selectedFinalSection === "Dados dos Veiculos" ? (
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-9 shrink-0 px-3"
                        disabled={dadosVeiculosPage === 1}
                        onClick={() => setDadosVeiculosPage((Math.max(1, dadosVeiculosPage - 1)) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10)}
                      >
                        « Anterior
                      </Button>
                      {(() => {
                        const paginationPages = new Set<number>([
                          1,
                          2,
                          3,
                          10,
                          dadosVeiculosPage - 1,
                          dadosVeiculosPage,
                          dadosVeiculosPage + 1,
                        ]);
                        const orderedPages = [...paginationPages]
                          .filter((page) => page >= 1 && page <= 10)
                          .sort((firstPage, secondPage) => firstPage - secondPage);
                        const paginationItems: Array<number | "ellipsis"> = [];

                        orderedPages.forEach((page, index) => {
                          if (index > 0 && page - orderedPages[index - 1] > 1) {
                            paginationItems.push("ellipsis");
                          }
                          paginationItems.push(page);
                        });

                        return paginationItems.map((page, index) =>
                          page === "ellipsis" ? (
                            <span key={`ellipsis-${index}`} className="px-1 text-muted-foreground">
                              ...
                            </span>
                          ) : (
                            <Button
                              key={page}
                              size="sm"
                              className="h-9 min-w-9 shrink-0 px-3"
                              variant={dadosVeiculosPage === page ? "default" : "outline"}
                              onClick={() => setDadosVeiculosPage(page as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10)}
                            >
                              {page}
                            </Button>
                          ),
                        );
                      })()}
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-9 shrink-0 px-3"
                        disabled={dadosVeiculosPage === 10}
                        onClick={() => setDadosVeiculosPage((Math.min(10, dadosVeiculosPage + 1)) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10)}
                      >
                        Próximo »
                      </Button>
                    </div>
                  ) : null}
                </>
              ) : (selectedCategory === "cadastro" || selectedCategory === "consulta") && selectedFinalSection === "Solicitações" ? (
                <article className="prose prose-slate prose-lg max-w-none">
                  <MarkdownContent content={comprasCadastroContent["Solicitações"]} />
                </article>
              ) : (
                <p>Conteúdo não encontrado.</p>
              )}
            </div>
          </div>
        );
      }
      // If a category is selected, but no final section, display the options for final sections
      // find the id for the currently selected submodule (component stores the displayed name)
      const normalizedSubmoduleId = normalizeSubmoduleId(selectedSubmodule);
      const currentSubmoduleId =
        submodules.find((s) => s.name === selectedSubmodule || s.id === normalizedSubmoduleId)?.id ||
        normalizedSubmoduleId;

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
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </h2>
          <hr className="mb-8 border-t border-border" />
          {renderFinalContent(currentSubmoduleId, selectedCategory, setSelectedFinalSection)}
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
          className="mb-4 dark:bg-black dark:text-white dark:hover:bg-black/90 dark:hover:text-white"
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

export default PatrimonialTabs;