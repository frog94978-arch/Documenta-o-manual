import { useState } from "react";
import { getSubmoduleById } from "@/data/submodules";
import {
  educacaoEscolaCadastroContent,
  educacaoEscolaTabelasPages,
} from "@/data/educacao-escola-cadastro-content";
import { educacaoEscolaConsultaContent } from "@/data/educacao-escola-consulta-content";
import { educacaoBibliotecaCadastroContent } from "@/data/educacao-biblioteca-cadastro-content";
import { educacaoBibliotecaConsultaContent } from "@/data/educacao-biblioteca-consulta-content";
import { educacaoBibliotecaProcedimentosContent } from "@/data/educacao-biblioteca-procedimentos-content";
import { educacaoSecretariaCadastroContent } from "@/data/educacao-secretaria-cadastro-content";
import { educacaoSecretariaTabelasPages } from "@/data/educacao-secretaria-tabelas-pages";
import { educacaoTransporteEscolarCadastroContent } from "@/data/educacao-transporte-escolar-cadastro-content";
import { educacaoAlimentacaoCadastroContent } from "@/data/educacao-alimentacao-cadastro-content";
import { educacaoAlimentacaoConsultaContent } from "@/data/educacao-alimentacao-consulta-content";
import { educacaoAlimentacaoProcedimentosContent } from "@/data/educacao-alimentacao-procedimentos-content";
import {
  educacaoEscolaProcedimentosContent,
  educacaoEscolaProcedimentosPages,
} from "@/data/educacao-escola-procedimentos-content";
import { Utensils, Library, School, Clipboard, Bus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/test/ui/button";
import MarkdownContent from "@/components/test/MarkdownContent";

interface EducacaoTabsProps {
  selectedSubmodule: string | null;
  setSelectedSubmodule: (submodule: string | null) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedFinalSection: string | null;
  setSelectedFinalSection: (section: string | null) => void;
}

type TabelasPaginationItem = number | "ellipsis-start" | "ellipsis-end";

const getTabelasPaginationItems = (
  totalPages: number,
  currentPage: number,
): TabelasPaginationItem[] => {
  if (totalPages <= 9) {
    return Array.from({ length: totalPages }, (_, index) => index);
  }

  if (currentPage <= 4) {
    return [0, 1, 2, 3, 4, 5, 6, "ellipsis-end", totalPages - 1];
  }

  if (currentPage >= totalPages - 5) {
    return [
      0,
      "ellipsis-start",
      ...Array.from({ length: 7 }, (_, index) => totalPages - 7 + index),
    ];
  }

  return [
    0,
    "ellipsis-start",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis-end",
    totalPages - 1,
  ];
};

const EducacaoTabs = ({
  selectedSubmodule,
  setSelectedSubmodule,
  selectedCategory,
  setSelectedCategory,
  selectedFinalSection,
  setSelectedFinalSection,
}: EducacaoTabsProps) => {
  const [selectedTabelasPage, setSelectedTabelasPage] = useState(0);
  const [selectedProcedimentosPage, setSelectedProcedimentosPage] = useState(0);
  const submodules = [
    { id: "alimentacao-escolar", name: "Alimentação Escolar", icon: <Utensils size={20} /> },
    { id: "biblioteca", name: "Biblioteca", icon: <Library size={20} /> },
    { id: "escola", name: "Escola", icon: <School size={20} /> },
    { id: "secretaria", name: "Secretaria", icon: <Clipboard size={20} /> },
    { id: "transporte-escolar", name: "Transporte Escolar", icon: <Bus size={20} /> },
  ];

  const categories = [
    { value: "cadastro", label: "Cadastro" },
    { value: "consulta", label: "Consulta" },
    { value: "relatorio", label: "Relatório" },
    { value: "procedimentos", label: "Procedimentos" },
  ];

  const getSubmoduleNameById = (id: string) => {
    return submodules.find(s => s.id === id)?.name || id;
  };

  const handleSubmoduleClick = (id: string) => {
    setSelectedSubmodule(id);
    setSelectedCategory(null);
    setSelectedFinalSection(null);
  };

  const handleBackClick = () => {
    if (selectedFinalSection) {
      // NEW: If a final section is selected, go back to category options
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
    // ADDED onSelectFinalSection
    const submoduleData = getSubmoduleById(submoduleId);
    if (!submoduleData) return <p>Submódulo não encontrado.</p>;

    const categoryOptions =
      submoduleData.options[categoryId as keyof typeof submoduleData.options];
    if (!categoryOptions || categoryOptions.length === 0)
      return <p>Nenhum item encontrado para esta categoria.</p>;

    return (
      <nav className="flex flex-col items-center gap-2 p-4 bg-muted mb-8 rounded-lg">
        {categoryOptions.map((item) => (
          <button
            key={item}
            className="w-full text-lg font-bold py-2 px-4 rounded-md text-center bg-card hover:bg-muted-foreground/10 transition-colors"
            onClick={() => onSelectFinalSection(item)} // ADD onClick handler
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
        const isSchoolTables =
          selectedSubmodule === "escola" &&
          selectedCategory === "cadastro" &&
          selectedFinalSection === "Tabelas";
        const isSecretariaTables =
          selectedSubmodule === "secretaria" &&
          selectedCategory === "cadastro" &&
          selectedFinalSection === "Tabelas";
        const tabelasPages = isSchoolTables
          ? educacaoEscolaTabelasPages
          : isSecretariaTables
            ? educacaoSecretariaTabelasPages
            : undefined;
        const tabelasPaginationItems = tabelasPages
          ? getTabelasPaginationItems(tabelasPages.length, selectedTabelasPage)
          : [];
        const procedurePages =
          selectedSubmodule === "escola" && selectedCategory === "procedimentos"
            ? educacaoEscolaProcedimentosPages[selectedFinalSection]
            : undefined;
        const detailedContent = tabelasPages
          ? tabelasPages[selectedTabelasPage]?.content
          : selectedSubmodule === "escola" && selectedCategory === "cadastro"
            ? educacaoEscolaCadastroContent[selectedFinalSection]
            : selectedSubmodule === "escola" && selectedCategory === "consulta"
              ? educacaoEscolaConsultaContent[selectedFinalSection]
              : selectedSubmodule === "biblioteca" && selectedCategory === "cadastro"
                ? educacaoBibliotecaCadastroContent[selectedFinalSection]
                : selectedSubmodule === "biblioteca" && selectedCategory === "consulta"
                  ? educacaoBibliotecaConsultaContent[selectedFinalSection]
                  : selectedSubmodule === "biblioteca" && selectedCategory === "procedimentos"
                    ? educacaoBibliotecaProcedimentosContent[selectedFinalSection]
                    : selectedSubmodule === "secretaria" && selectedCategory === "cadastro"
                      ? educacaoSecretariaCadastroContent[selectedFinalSection]
                      : selectedSubmodule === "transporte-escolar" && selectedCategory === "cadastro"
                        ? educacaoTransporteEscolarCadastroContent[selectedFinalSection]
                        : selectedSubmodule === "alimentacao-escolar" && selectedCategory === "cadastro"
                          ? educacaoAlimentacaoCadastroContent[selectedFinalSection]
                          : selectedSubmodule === "alimentacao-escolar" && selectedCategory === "consulta"
                            ? educacaoAlimentacaoConsultaContent[selectedFinalSection]
                            : selectedSubmodule === "alimentacao-escolar" && selectedCategory === "procedimentos"
                              ? educacaoAlimentacaoProcedimentosContent[selectedFinalSection]
                              : procedurePages
                                ? procedurePages[selectedProcedimentosPage]?.content
                                : selectedSubmodule === "escola" && selectedCategory === "procedimentos"
                                  ? educacaoEscolaProcedimentosContent[selectedFinalSection]
                                  : undefined;
        const renderedContent = detailedContent?.replace(
          /^#\s+(.+)\r?\n+/,
          (heading, title: string) =>
            title.trim() === selectedFinalSection ? "" : heading,
        );

        return (
          <div>
            <Button
              onClick={() => {
                setSelectedTabelasPage(0);
                setSelectedProcedimentosPage(0);
                handleBackClick();
              }}
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
            {renderedContent ? (
              <>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <MarkdownContent content={renderedContent} />
                </div>
                {tabelasPages && (
                  <>
                    <nav
                      aria-label={`Páginas de Tabelas da ${isSchoolTables ? "Escola" : "Secretaria"}`}
                      className="mt-8 flex flex-wrap items-center justify-center gap-2"
                    >
                      {tabelasPaginationItems.map((item) =>
                        typeof item === "string" ? (
                          <span
                            key={item}
                            aria-hidden="true"
                            className="px-1 text-muted-foreground"
                          >
                            ...
                          </span>
                        ) : (
                          <Button
                            key={tabelasPages[item].title}
                            type="button"
                            className="min-w-9 px-2"
                            variant={selectedTabelasPage === item ? "default" : "outline"}
                            aria-current={selectedTabelasPage === item ? "page" : undefined}
                            aria-label={`Página ${item + 1}: ${tabelasPages[item].title}`}
                            onClick={() => setSelectedTabelasPage(item)}
                          >
                            {item + 1}
                          </Button>
                        ),
                      )}
                    </nav>
                    <p className="mt-2 text-center text-sm text-muted-foreground">
                      Página {selectedTabelasPage + 1} de {tabelasPages.length}:{" "}
                      {tabelasPages[selectedTabelasPage].title}
                    </p>
                  </>
                )}
                {procedurePages && (
                  <>
                    <nav
                      aria-label={`Páginas de ${selectedFinalSection}`}
                      className="mt-8 flex flex-wrap items-center justify-center gap-2"
                    >
                      {procedurePages.map((page, index) => (
                        <Button
                          key={page.title}
                          type="button"
                          className="min-w-9 px-2"
                          variant={selectedProcedimentosPage === index ? "default" : "outline"}
                          aria-current={selectedProcedimentosPage === index ? "page" : undefined}
                          aria-label={`Página ${index + 1}: ${page.title}`}
                          onClick={() => setSelectedProcedimentosPage(index)}
                        >
                          {index + 1}
                        </Button>
                      ))}
                    </nav>
                    <p className="mt-2 text-center text-sm text-muted-foreground">
                      Página {selectedProcedimentosPage + 1} de {procedurePages.length}:{" "}
                      {procedurePages[selectedProcedimentosPage].title}
                    </p>
                  </>
                )}
              </>
            ) : (
              <p>Conteúdo detalhado para: {selectedFinalSection}</p>
            )}
          </div>
        );
      }
      // If a category is selected, but no final section, display the options for final sections
      return (
        <div>
          <Button
            onClick={handleBackClick}
            variant="outline"
            size="sm"
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para{" "}
            {getSubmoduleNameById(selectedSubmodule)}
          </Button>
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}
          </h2>
          <hr className="mb-8 border-t border-border" />
          {renderFinalContent(
            selectedSubmodule,
            selectedCategory,
            (section) => {
              setSelectedTabelasPage(0);
              setSelectedProcedimentosPage(0);
              setSelectedFinalSection(section);
            }
          )}{" "}
          {/* Pass setter */}
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
        <h2 className="text-2xl font-bold mb-6">
          {getSubmoduleNameById(selectedSubmodule)}
        </h2>
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
          key={submodule.id}
          className="text-left transition-all hover:scale-[1.02] focus:outline-none"
          onClick={() => handleSubmoduleClick(submodule.id)}
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

export default EducacaoTabs;
