import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSubmoduleById } from "@/data/submodules";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PatrimonialTabs = () => {
  const submodules = ["compras", "licitacoes", "contratos", "material", "patrimonio", "protocolo", "veiculos"];
  const [activeTab, setActiveTab] = useState("compras");
  const [selectedCategory, setSelectedCategory] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<Record<string, string>>({});

  const categories = [
    { value: "cadastro", label: "Cadastro" },
    { value: "consulta", label: "Consulta" },
    { value: "relatorio", label: "Relatório" },
    { value: "procedimentos", label: "Procedimentos" }
  ];

  const handleCategoryChange = (submodule: string, value: string) => {
    setSelectedCategory({ ...selectedCategory, [submodule]: value });
    setSelectedOption({ ...selectedOption, [submodule]: "" });
  };

  const renderSubmoduleContent = (submoduleId: string) => {
    const submoduleData = getSubmoduleById(submoduleId);
    if (!submoduleData) return null;

    const currentCategory = selectedCategory[submoduleId] || "";
    const currentOptions = currentCategory 
      ? submoduleData.options[currentCategory as keyof typeof submoduleData.options] 
      : [];

    return (
      <div className="space-y-6">
        <div className="border-b border-border bg-muted/30 rounded-lg p-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-sm font-medium text-foreground">
              {submoduleData.title}
            </span>
            
            <Select 
              value={currentCategory} 
              onValueChange={(value) => handleCategoryChange(submoduleId, value)}
            >
              <SelectTrigger className="w-[180px] bg-background">
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent className="bg-background z-50">
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {currentCategory && currentOptions.length > 0 && (
              <Select 
                value={selectedOption[submoduleId] || ""} 
                onValueChange={(value) => setSelectedOption({ ...selectedOption, [submoduleId]: value })}
              >
                <SelectTrigger className="w-[200px] bg-background">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="bg-background z-50">
                  {currentOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Cadastro</h3>
            <ul className="space-y-2">
              {submoduleData.options.cadastro.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">• {item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Consulta</h3>
            <ul className="space-y-2">
              {submoduleData.options.consulta.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">• {item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Relatório</h3>
            <ul className="space-y-2">
              {submoduleData.options.relatorio.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">• {item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Procedimentos</h3>
            <ul className="space-y-2">
              {submoduleData.options.procedimentos.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="w-full justify-start flex-wrap h-auto gap-2 bg-muted/50 p-2">
        <TabsTrigger value="compras">Compras</TabsTrigger>
        <TabsTrigger value="licitacoes">Licitações</TabsTrigger>
        <TabsTrigger value="contratos">Contratos</TabsTrigger>
        <TabsTrigger value="material">Material</TabsTrigger>
        <TabsTrigger value="patrimonio">Patrimônio</TabsTrigger>
        <TabsTrigger value="protocolo">Protocolo</TabsTrigger>
        <TabsTrigger value="veiculos">Veículos</TabsTrigger>
      </TabsList>

      {submodules.map((submodule) => (
        <TabsContent key={submodule} value={submodule} className="mt-6">
          {renderSubmoduleContent(submodule)}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default PatrimonialTabs;
