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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Bem-vindo à Central de Documentação
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Documentação completa do sistema com guias, tutoriais e referências
          </p>
        </div>

        {/* Horizontal Category Navigation */}
        <nav className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.id === 'modulos' ? '/areas' : getFirstPageLink(category.id)}
              className="flex flex-col items-center justify-center p-4 border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-card text-card-foreground hover:bg-muted w-40 h-40 text-center"
            >
              <div className="text-primary mb-2">{renderIcon(category.icon)}</div>
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </Link>
          ))}
        </nav>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            <strong>Dica:</strong> Utilize o menu de navegação acima ou a busca
            para encontrar rapidamente o conteúdo desejado.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Index;