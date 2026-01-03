import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getPageById } from "@/data/documentation";
import Breadcrumbs from "@/components/test/Breadcrumbs";
import MarkdownContent from "@/components/test/MarkdownContent";
import PatrimonialTabs from "@/components/test/PatrimonialTabs";

const DocPage = () => {
  const [selectedSubmodule, setSelectedSubmodule] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFinalSection, setSelectedFinalSection] = useState<string | null>(null); // NEW STATE
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
        <Breadcrumbs categoryId={category} pageTitle={docPage.title} submoduleTitle={selectedSubmodule} categoryTitle={selectedCategory} selectedFinalSectionTitle={selectedFinalSection} /> {/* ADDED selectedFinalSectionTitle */}
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Área Patrimonial</h1>
                    <p className="text-muted-foreground text-lg mb-8">Com o modulo Patrimonial é possível o controle e gerenciamento dos processos de compras da instituição. Auxilia no cadastramento e controle de bens e da frota de veículos. Possibilita o gerenciamento e controle dos contratos e convênios. Também dispomos de diversos relatórios e consultas, a fim de garantir o gerenciamento patrimonial da instituição.</p>
          <p className="text-muted-foreground text-lg">
            Utilize a navegação abaixo para acessar rapidamente o módulo.
          </p>
          <PatrimonialTabs
            selectedSubmodule={selectedSubmodule}
            setSelectedSubmodule={setSelectedSubmodule}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedFinalSection={selectedFinalSection} // NEW PROP
            setSelectedFinalSection={setSelectedFinalSection} // NEW PROP
          />
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
