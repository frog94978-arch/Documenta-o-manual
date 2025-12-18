import { useState } from "react";
import { getSubmoduleById } from "@/data/submodules";

interface PatrimonialTabsProps {
  selectedSubmodule: string | null;
  setSelectedSubmodule: (submodule: string | null) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const PatrimonialTabs = ({ selectedSubmodule, setSelectedSubmodule, selectedCategory, setSelectedCategory }: PatrimonialTabsProps) => {
  const submodules = ["compras", "licitacoes", "contratos", "material", "patrimonio", "protocolo", "veiculos"];

  const categories = [
    { value: "cadastro", label: "Cadastro" },
    { value: "consulta", label: "Consulta" },
    { value: "relatorio", label: "Relatório" },
    { value: "procedimentos", label: "Procedimentos" }
  ];

  const handleSubmoduleClick = (submodule: string) => {
    setSelectedSubmodule(submodule);
    setSelectedCategory(null); // Reset category when changing submodule
  };

  const handleBackClick = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedSubmodule(null);
    }
  };

  const renderFinalContent = (submoduleId: string, categoryId: string) => {
    const submoduleData = getSubmoduleById(submoduleId);
    if (!submoduleData) return <p>Submódulo não encontrado.</p>;
    
    const categoryOptions = submoduleData.options[categoryId as keyof typeof submoduleData.options];
    if (!categoryOptions || categoryOptions.length === 0) return <p>Nenhum item encontrado para esta categoria.</p>;

    return (
      <div className="border border-border rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h3>
        <div className="grid grid-cols-2 gap-4">
          {categoryOptions.map((item) => (
            <button
              key={item}
              className="h-32 rounded-lg p-4 flex flex-col justify-center items-center bg-muted hover:bg-muted-foreground/10 transition-colors"
            >
              <div className="text-lg font-bold">{item}</div>
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  if (selectedSubmodule) {
    if (selectedCategory) {
      // Final content view
      return (
        <div>
          <button onClick={handleBackClick} className="mb-4 text-sm font-bold text-muted-foreground hover:text-foreground">
            &larr; Voltar para {selectedSubmodule.charAt(0).toUpperCase() + selectedSubmodule.slice(1)}
          </button>
          {renderFinalContent(selectedSubmodule, selectedCategory)}
        </div>
      );
    }
    
    // Category selection view
    return (
      <div>
        <button onClick={handleBackClick} className="mb-4 text-sm font-bold text-muted-foreground hover:text-foreground">
          &larr; Voltar para Módulos
        </button>
        <h2 className="text-2xl font-bold mb-6">{selectedSubmodule.charAt(0).toUpperCase() + selectedSubmodule.slice(1)}</h2>
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
          key={submodule}
          className="w-full text-lg font-bold py-2 px-4 rounded-md text-center bg-background hover:bg-muted-foreground/10 transition-colors"
          onClick={() => handleSubmoduleClick(submodule)}
        >
          {submodule.charAt(0).toUpperCase() + submodule.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default PatrimonialTabs;
