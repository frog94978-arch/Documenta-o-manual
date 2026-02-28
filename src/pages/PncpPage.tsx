import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getSubmoduleById } from "@/data/submodules";
import { Button } from "@/components/test/ui/button";

const PncpPage = () => {
  const { category, option } = useParams();
  const pncpData = getSubmoduleById("pncp");

  if (!pncpData) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">PNCP não encontrado</h1>
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>
    );
  }

  const getTitle = () => {
    if (option) {
      return `${pncpData.title} - ${category ? category.charAt(0).toUpperCase() + category.slice(1) : ''} - ${option}`;
    }
    if (category) {
      return `${pncpData.title} - ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    }
    return pncpData.title;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="inline-block mb-6">
          <Button variant="outline" size="sm" className="bg-card">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Início
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-foreground">
          {getTitle()}
        </h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          {category && !option && (
            <>
              <p className="text-muted-foreground text-lg mb-8">
                Conteúdo para a categoria "{category.charAt(0).toUpperCase() + category.slice(1)}" do PNCP.
              </p>
              {pncpData.options[category as keyof typeof pncpData.options]?.length > 0 && (
                <div className="border border-border rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-semibold mb-4">Opções de {category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                  <ul className="space-y-2">
                    {pncpData.options[category as keyof typeof pncpData.options].map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {category && option && (
            <p className="text-muted-foreground text-lg mb-8">
              Você selecionou: "{option}" dentro de "{category.charAt(0).toUpperCase() + category.slice(1)}" do PNCP.
              Aqui será exibido o conteúdo detalhado.
            </p>
          )}

          {!category && !option && (
            <p className="text-muted-foreground text-lg mb-8">
              Utilize os selecionadores acima para acessar as funcionalidades do PNCP.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PncpPage;
