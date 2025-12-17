import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getPageById } from "@/data/documentation";
import Breadcrumbs from "@/components/test/Breadcrumbs";
import MarkdownContent from "@/components/test/MarkdownContent";
import PatrimonialTabs from "@/components/test/PatrimonialTabs";

const DocPage = () => {
  const [selectedSubmodule, setSelectedSubmodule] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { category, page } = useParams<{ category: string; page: string }>();

  if (!page || !category) {
    return <Navigate to="/" replace />;
  }

  const docPage = getPageById(page);

  if (!docPage) {
    return (
      <div className="container mx-auto px-4 py-12 text-center max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">Página não encontrada</h1>
        <p className="text-muted-foreground">
          A página que você procura não existe ou foi removida.
        </p>
      </div>
    );
  }

  // Render special component for Patrimonial module
  if (page === "patrimonial") {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Breadcrumbs categoryId={category} pageTitle={docPage.title} submoduleTitle={selectedSubmodule} categoryTitle={selectedCategory} />
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Área Patrimonial</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Esta área é responsável pela gestão de processos administrativos e patrimoniais do sistema.
          </p>
          <p className="text-muted-foreground text-lg">
            Utilize a navegação abaixo para acessar rapidamente o módulo.
          </p>
          <PatrimonialTabs selectedSubmodule={selectedSubmodule} setSelectedSubmodule={setSelectedSubmodule} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Breadcrumbs categoryId={category} pageTitle={docPage.title} />
      <article className="prose prose-slate prose-lg max-w-none mt-8">
        <MarkdownContent content={docPage.content} />
      </article>
    </div>
  );
};

export default DocPage;
