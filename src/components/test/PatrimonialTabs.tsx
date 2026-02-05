// removed unused useState import
import { getSubmoduleById } from "@/data/submodules";
import { comprasCadastroContent } from "@/data/compras-content";
import MarkdownContent from "@/components/test/MarkdownContent";

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
        const content =
          comprasCadastroContent[
            selectedFinalSection as keyof typeof comprasCadastroContent
          ];
        return (
        <div className="max-w-none">
          <div>
            <button
              onClick={handleBackClick}
              className="mb-4 text-sm font-bold text-muted-foreground hover:text-foreground"
            >
              &larr; Voltar para{" "}
              {selectedCategory.charAt(0).toUpperCase() +
                selectedCategory.slice(1)}
            </button>
            <h2 className="text-2xl font-bold mb-6">{selectedFinalSection}</h2>
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
          <button
            onClick={handleBackClick}
            className="mb-4 text-sm font-bold text-muted-foreground hover:text-foreground"
          >
            &larr; Voltar para {selectedSubmodule}
          </button>
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </h2>
          {renderFinalContent(currentSubmoduleId, selectedCategory, setSelectedFinalSection)}
        </div>
      );
    }

    // Category selection view
    return (
      <div>
        <button
          onClick={handleBackClick}
          className="mb-4 text-sm font-bold text-muted-foreground hover:text-foreground"
        >
          &larr; Voltar para Módulos
        </button>
        <h2 className="text-2xl font-bold mb-6">{selectedSubmodule}</h2>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <button
              key={category.value}
              className="h-32 rounded-lg p-4 flex flex-col justify-center items-center bg-muted hover:bg-muted-foreground/10 transition-colors"
              onClick={() => setSelectedCategory(category.value)}
            >
              <div className="text-lg font-bold">{category.label}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Initial submodule selection view
  return (
    <nav className="flex flex-col items-center gap-2 p-4 bg-muted mb-8 rounded-lg">
      {submodules.map((submodule) => (
        <button
          key={submodule.id || submodule.name}
          className="w-full text-lg font-bold py-2 px-4 rounded-md text-center bg-background hover:bg-muted-foreground/10 transition-colors flex items-center justify-center gap-2"
          onClick={() => handleSubmoduleClick(submodule)}
        >
          {submodule.icon}
          {submodule.name}
        </button>
      ))}
    </nav>
  );
};

export default PatrimonialTabs;