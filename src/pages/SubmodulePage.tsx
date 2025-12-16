import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getSubmoduleById } from "@/data/submodules";
import { Button } from "@/components/test/ui/button";

const SubmodulePage = () => {
  const { submodule } = useParams();
  const submoduleData = submodule ? getSubmoduleById(submodule) : null;

  if (!submoduleData) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Módulo não encontrado</h1>
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/docs/modulos/patrimonial" className="inline-block mb-6">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Patrimonial
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-foreground">
          {submoduleData.title}
        </h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-muted-foreground text-lg mb-8">
            Utilize os selecionadores acima para acessar as funcionalidades de {submoduleData.title}.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
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
      </div>
    </div>
  );
};

export default SubmodulePage;
