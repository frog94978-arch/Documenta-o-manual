import { useState } from "react";
import { getSubmoduleById } from "@/data/submodules";
import { Utensils, Library, School, Clipboard, Bus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/test/ui/button";

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
      <nav className="flex flex-col items-center gap-2 p-4 bg-muted mb-8 rounded-lg">
        {categoryOptions.map((item) => (
          <button
            key={item}
            className="w-full text-lg font-bold py-2 px-4 rounded-md text-center bg-background hover:bg-muted-foreground/10 transition-colors"
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
        // NEW: If a final section is selected
        return (
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
            {/* Placeholder for content of the selected final section */}
            <p>Conteúdo detalhado para: {selectedFinalSection}</p>
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
            {selectedSubmodule.charAt(0).toUpperCase() +
              selectedSubmodule.slice(1)}
          </Button>
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}
          </h2>
          <hr className="mb-8 border-t border-border" />
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
          {selectedSubmodule.charAt(0).toUpperCase() +
            selectedSubmodule.slice(1)}
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
          key={submodule.name}
          className="text-left transition-all hover:scale-[1.02] focus:outline-none"
          onClick={() => handleSubmoduleClick(submodule.name)}
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
