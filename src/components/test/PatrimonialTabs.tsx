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
  const [aditamentosPage, setAditamentosPage] = useState<1 | 2>(1);
  const [acordoPage, setAcordoPage] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [licitacaoProcedimentosPage, setLicitacaoProcedimentosPage] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(1);

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
    if (selectedFinalSection === "Registro de Preço") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [registroPrecoPage, selectedFinalSection]);

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
        const currentSubmoduleId =
          submodules.find((s) => s.name === selectedSubmodule)?.id ||
          selectedSubmodule.toLowerCase();

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
            !(currentSubmoduleId === "contratos" && selectedFinalSection === "Acordo" && selectedCategory === "procedimentos") &&
            !isProcedimentoContratosSemNavEspecial);

        if (isSpecialRoot && submoduleData) {
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

        const content =
          isRegistroPrecoProcedimento
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
            : selectedCategory === "cadastro" ||
                selectedCategory === "consulta" ||
                selectedCategory === "procedimentos"
              ? comprasCadastroContent[
                  selectedFinalSection as keyof typeof comprasCadastroContent
                ]
              : selectedCategory === "relatorio"
                ? comprasRelatorioContent[
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
      const currentSubmoduleId =
        submodules.find((s) => s.name === selectedSubmodule)?.id ||
        selectedSubmodule.toLowerCase();

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

export default PatrimonialTabs;