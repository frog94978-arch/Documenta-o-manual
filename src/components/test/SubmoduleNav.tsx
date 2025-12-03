import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getSubmoduleById } from "@/data/submodules";

const SubmoduleNav = () => {
  const { submodule } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  
  const submoduleData = submodule ? getSubmoduleById(submodule) : null;

  useEffect(() => {
    setSelectedCategory("");
    setSelectedOption("");
  }, [submodule]);

  if (!submoduleData) return null;

  const categories = [
    { value: "cadastro", label: "Cadastro" },
    { value: "consulta", label: "Consulta" },
    { value: "relatorio", label: "Relatório" },
    { value: "procedimentos", label: "Procedimentos" }
  ];

  const currentOptions = selectedCategory 
    ? submoduleData.options[selectedCategory as keyof typeof submoduleData.options] 
    : [];

  return (
    <div className="border-b border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 h-14">
          <span className="text-sm font-medium text-foreground">
            {submoduleData.title}
          </span>
          
          <Select value={selectedCategory} onValueChange={(value) => {
            setSelectedCategory(value);
            setSelectedOption("");
          }}>
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

          {selectedCategory && currentOptions.length > 0 && (
            <Select value={selectedOption} onValueChange={setSelectedOption}>
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
    </div>
  );
};

export default SubmoduleNav;
