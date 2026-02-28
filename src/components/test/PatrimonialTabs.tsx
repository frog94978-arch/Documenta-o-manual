// removed unused useState import
import { getSubmoduleById } from "@/data/submodules";
import { comprasCadastroContent } from "@/data/compras-content";
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
            className="w-full text-lg font-bold py-2 px-4 rounded-md text-center bg-background hover:bg-muted-foreground/10 transition-colors flex items-center justify-center gap-2"
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

        const isSpecialRoot =
          ((selectedCategory === "relatorio" || selectedCategory === "procedimentos") &&
            currentSubmoduleId !== "compras" &&
            submoduleData &&
            submoduleData.options[
              selectedCategory as keyof typeof submoduleData.options
            ].includes(selectedFinalSection));

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
                      className="w-full text-lg font-bold py-2 px-4 rounded-md text-center bg-background hover:bg-muted-foreground/10 transition-colors flex items-center justify-center gap-2"
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

        const content =
          comprasCadastroContent[
            selectedFinalSection as keyof typeof comprasCadastroContent
          ];

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
                <article className="prose prose-slate prose-lg max-w-none">
                  <MarkdownContent content={content} />
                </article>
              ) : selectedFinalSection === "Solicitações" ? (
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
          className="mb-4 bg-card"
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