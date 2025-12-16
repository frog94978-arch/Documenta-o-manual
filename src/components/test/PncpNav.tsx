import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { getSubmoduleById } from "@/data/submodules";

const PncpNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  
  const pncpData = getSubmoduleById("pncp");

  useEffect(() => {
    // Reset selected values if navigating away from PNCP section
    if (!location.pathname.startsWith("/pncp")) {
      setSelectedCategory("");
      setSelectedOption("");
    }
  }, [location.pathname]);

  if (!pncpData) return null;

  const categories = [
    { value: "cadastro", label: "Cadastro" },
    { value: "consulta", label: "Consulta" },
    { value: "procedimentos", label: "Procedimentos" }
  ];

  const currentOptions = selectedCategory 
    ? pncpData.options[selectedCategory as keyof typeof pncpData.options] 
    : [];

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSelectedOption("");
    // TODO: Navigate to /pncp/:category
    navigate(`/pncp/${value}`);
  };

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    // TODO: Navigate to /pncp/:category/:option
    navigate(`/pncp/${selectedCategory}/${value}`);
  };

  return (
    <div className="border-b border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 h-14">
          <span className="text-sm font-medium text-foreground">
            {pncpData.title}
          </span>
          
          <Select value={selectedCategory} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Selecione uma categoria" />
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
            <Select value={selectedOption} onValueChange={handleOptionChange}>
              <SelectTrigger className="w-[200px] bg-background">
                <SelectValue placeholder="Selecione uma opção" />
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

export default PncpNav;