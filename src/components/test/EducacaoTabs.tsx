import { useState } from "react";
import { getSubmoduleById } from "@/data/submodules";
import { Utensils, Library, School, Clipboard, Bus } from "lucide-react";

interface EducacaoTabsProps {
  selectedSubmodule: string | null;
  setSelectedSubmodule: (submodule: string | null) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedFinalSection: string | null; // NEW PROP
  setSelectedFinalSection: (section: string | null) => void; // NEW PROP
}

const EducacaoTabs = ({
  selectedSubmodule,
  setSelectedSubmodule,
  selectedCategory,
  setSelectedCategory,
  selectedFinalSection,
  setSelectedFinalSection,
}: EducacaoTabsProps) => {
  // ADDED new props

  const submodules = [
    { name: "Alimentação Escolar", icon: <Utensils size={20} /> },
    { name: "Biblioteca", icon: <Library size={20} /> },
    { name: "Escola", icon: <School size={20} /> },
    { name: "Secretaria", icon: <Clipboard size={20} /> },
    { name: "Transporte Escolar", icon: <Bus size={20} /> },
  ];

  const categories = [
    { value: "cadastro", label: "Cadastro" },
    { value: "consulta", label: "Consulta" },
    { value: "relatorio", label: "Relatório" },
    { value: "procedimentos", label: "Procedimentos" },
  ];

  const handleSubmoduleClick = (submodule: string) => {
    setSelectedSubmodule(submodule);
    setSelectedCategory(null); // Reset category when changing submodule
    setSelectedFinalSection(null); // NEW: Reset final section
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
      <div className="border border-border rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">
          {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
        </h3>
        <div className="flex flex-col items-center gap-2">
          {categoryOptions.map((item) => (
            <button
              key={item}
              className="w-full text-lg font-bold py-2 px-4 rounded-md text-center bg-background hover:bg-muted-foreground/10 transition-colors"
              onClick={() => onSelectFinalSection(item)} // ADD onClick handler
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  };

  if (selectedSubmodule) {
    if (selectedCategory) {
      if (selectedFinalSection) {
        // NEW: If a final section is selected
        return (
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
            {/* Placeholder for content of the selected final section */}
            <p>Conteúdo detalhado para: {selectedFinalSection}</p>
          </div>
        );
      }
      // If a category is selected, but no final section, display the options for final sections
      return (
        <div>
          <button
            onClick={handleBackClick}
            className="mb-4 text-sm font-bold text-muted-foreground hover:text-foreground"
          >
            &larr; Voltar para{" "}
            {selectedSubmodule.charAt(0).toUpperCase() +
              selectedSubmodule.slice(1)}
          </button>
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}
          </h2>
          {renderFinalContent(
            selectedSubmodule,
            selectedCategory,
            setSelectedFinalSection
          )}{" "}
          {/* Pass setter */}
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
        <h2 className="text-2xl font-bold mb-6">
          {selectedSubmodule.charAt(0).toUpperCase() +
            selectedSubmodule.slice(1)}
        </h2>
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
          key={submodule.name}
          className="w-full text-lg font-bold py-2 px-4 rounded-md text-center bg-background hover:bg-muted-foreground/10 transition-colors flex items-center justify-center gap-2"
          onClick={() => handleSubmoduleClick(submodule.name)}
        >
          {submodule.icon}
          {submodule.name}
        </button>
      ))}
    </nav>
  );
};

export default EducacaoTabs;
