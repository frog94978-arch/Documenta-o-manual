import { useParams, Navigate } from "react-router-dom";
import { getPageById } from "@/data/documentation";
import Breadcrumbs from "@/components/Breadcrumbs";
import MarkdownContent from "@/components/MarkdownContent";
import PatrimonialTabs from "@/components/PatrimonialTabs";

const DocPage = () => {
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
        <Breadcrumbs categoryId={category} pageTitle={docPage.title} />
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Módulo Patrimonial</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Gestão completa do patrimônio público, compras e almoxarifado.
          </p>
          <PatrimonialTabs />
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
