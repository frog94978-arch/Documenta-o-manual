import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { categories, getPagesByCategory } from "@/data/documentation";
const Index = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ElementType;
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
  };
  return <div className="min-h-screen bg-background">
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

        {/* Categories Grid */}
        <div className="space-y-8">
          {categories.map(category => {
          const pages = getPagesByCategory(category.id);
          return <div key={category.id} className="border-b border-border pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-muted-foreground">
                    {renderIcon(category.icon)}
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    {category.title}
                  </h2>
                </div>
                
                <ul className="space-y-2 pl-8">
                  {pages.map(page => <li key={page.id}>
                      <Link to={`/docs/${category.id}/${page.id}`} className="text-base text-foreground hover:text-primary hover:underline transition-colors">Como Criar um Cadastro{page.title}
                      </Link>
                    </li>)}
                </ul>
              </div>;
        })}
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            <strong>Dica:</strong> Utilize o menu de navegação acima ou a busca para encontrar rapidamente o conteúdo desejado.
          </p>
        </div>
      </div>
    </div>;
};
export default Index;