import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { categories, getPagesByCategory } from "@/data/documentation";

const Index = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[
      iconName as keyof typeof Icons
    ] as React.ElementType;
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
  };

  const getFirstPageLink = (categoryId: string) => {
    const pages = getPagesByCategory(categoryId);
    if (pages.length > 0) {
      return `/docs/${categoryId}/${pages[0].id}`;
    }
    return "#"; // Fallback if no pages are found
  };

  return (
    <div className="h-[calc(100vh-3.5rem)] flex items-center justify-center bg-background p-4 sm:p-8">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Bem-vindo à Central de Documentação
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Documentação completa do sistema com guias, tutoriais e referências
          </p>
        </div>

        {/* Horizontal Category Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={
                category.id === 'modulos' 
                  ? '/areas' 
                  : category.id === 'tutoriais' 
                    ? '/tutoriais' 
                    : category.id === 'guia-inicio'
                      ? '/guia-inicio'
                      : getFirstPageLink(category.id)
              }
              className="text-left transition-all hover:scale-[1.02] focus:outline-none"
            >
              <div className="rounded-lg text-card-foreground h-full border border-border transition-all duration-300 cursor-pointer bg-card hover:bg-muted shadow-sm hover:shadow-lg">
                <div className="p-6 flex flex-col items-center justify-center min-h-[140px] gap-3">
                  <div className="text-primary">{renderIcon(category.icon)}</div>
                  <h3 className="text-lg font-bold text-center">{category.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Note */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Dica:</strong> Utilize o menu de navegação à esquerda ou a busca
            para encontrar rapidamente o conteúdo desejado.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Index;