import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getPageById } from "@/data/documentation";
import Breadcrumbs from "@/components/test/Breadcrumbs";
import MarkdownContent from "@/components/test/MarkdownContent";
import PatrimonialTabs from "@/components/test/PatrimonialTabs";
import FinanceiroTabs from "@/components/test/FinanceiroTabs";
import TributarioTabs from "@/components/test/TributarioTabs";
import RecursosHumanosTabs from "@/components/test/RecursosHumanosTabs";
import EducacaoTabs from "@/components/test/EducacaoTabs";
import SaudeTabs from "@/components/test/SaudeTabs";
import ConfiguracoesTabs from "@/components/test/ConfiguracoesTabs";

const DocPage = () => {
  const [selectedSubmodule, setSelectedSubmodule] = useState<string | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    null
  );
  const [
    selectedFinalSection,
    setSelectedFinalSection,
  ] = useState<string | null>(null); // NEW STATE
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
        <Breadcrumbs
          categoryId={category}
          pageTitle={docPage.title}
          submoduleTitle={selectedSubmodule}
          categoryTitle={selectedCategory}
          selectedFinalSectionTitle={selectedFinalSection}
        />{" "}
        {/* ADDED selectedFinalSectionTitle */}
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-6 text-foreground">
            Área Patrimonial
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Com a área Patrimonial é possível o controle e gerenciamento dos
            processos de compras da instituição. Auxilia no cadastramento e
            controle de bens e da frota de veículos. Possibilita o gerenciamento
            e controle dos contratos e convênios. Também dispomos de diversos
            relatórios e consultas, a fim de garantir o gerenciamento
            patrimonial da instituição.
          </p>
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

  // Render special component for Financeiro module
  if (page === "financeiro") {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Breadcrumbs
          categoryId={category}
          pageTitle={docPage.title}
          submoduleTitle={selectedSubmodule}
          categoryTitle={selectedCategory}
          selectedFinalSectionTitle={selectedFinalSection}
        />
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-6 text-foreground">
            Área Financeira
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            A área Financeira oferece ferramentas para a gestão completa das
            finanças da instituição. Permite o controle de orçamentos,
            despesas, receitas e a geração de relatórios detalhados para
            análise e tomada de decisão.
          </p>
          <p className="text-muted-foreground text-lg">
            Utilize a navegação abaixo para acessar rapidamente o módulo.
          </p>
          <FinanceiroTabs
            selectedSubmodule={selectedSubmodule}
            setSelectedSubmodule={setSelectedSubmodule}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedFinalSection={selectedFinalSection}
            setSelectedFinalSection={setSelectedFinalSection}
          />
        </div>
      </div>
    );
  }

  // Render special component for Tributario module
  if (page === "tributario") {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Breadcrumbs
          categoryId={category}
          pageTitle={docPage.title}
          submoduleTitle={selectedSubmodule}
          categoryTitle={selectedCategory}
          selectedFinalSectionTitle={selectedFinalSection}
        />
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-6 text-foreground">
            Área Tributária
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            A área Tributária gerencia as obrigações fiscais e tributárias da
            instituição.
          </p>
          <p className="text-muted-foreground text-lg">
            Utilize a navegação abaixo para acessar rapidamente o módulo.
          </p>
          <TributarioTabs
            selectedSubmodule={selectedSubmodule}
            setSelectedSubmodule={setSelectedSubmodule}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedFinalSection={selectedFinalSection}
            setSelectedFinalSection={setSelectedFinalSection}
          />
        </div>
      </div>
    );
  }

  // Render special component for Recursos Humanos module
  if (page === "recursos-humanos") {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Breadcrumbs
          categoryId={category}
          pageTitle={docPage.title}
          submoduleTitle={selectedSubmodule}
          categoryTitle={selectedCategory}
          selectedFinalSectionTitle={selectedFinalSection}
        />
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-6 text-foreground">
            Área de Recursos Humanos
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            A área de Recursos Humanos gerencia todos os aspectos relacionados
            aos colaboradores da instituição, desde a admissão até a folha de
            pagamento e desenvolvimento profissional.
          </p>
          <p className="text-muted-foreground text-lg">
            Utilize a navegação abaixo para acessar rapidamente o módulo.
          </p>
          <RecursosHumanosTabs
            selectedSubmodule={selectedSubmodule}
            setSelectedSubmodule={setSelectedSubmodule}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedFinalSection={selectedFinalSection}
            setSelectedFinalSection={setSelectedFinalSection}
          />
        </div>
      </div>
    );
  }

  // Render special component for Educação module
  if (page === "educacao") {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Breadcrumbs
          categoryId={category}
          pageTitle={docPage.title}
          submoduleTitle={selectedSubmodule}
          categoryTitle={selectedCategory}
          selectedFinalSectionTitle={selectedFinalSection}
        />
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-6 text-foreground">
            Área de Educação
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            A área de Educação oferece recursos e informações para a gestão
            educacional.
          </p>
          <p className="text-muted-foreground text-lg">
            Utilize a navegação abaixo para acessar rapidamente o módulo.
          </p>
          <EducacaoTabs
            selectedSubmodule={selectedSubmodule}
            setSelectedSubmodule={setSelectedSubmodule}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedFinalSection={selectedFinalSection}
            setSelectedFinalSection={setSelectedFinalSection}
          />
        </div>
      </div>
    );
  }

  // Render special component for Saude module
  if (page === "saude") {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Breadcrumbs
          categoryId={category}
          pageTitle={docPage.title}
          submoduleTitle={selectedSubmodule}
          categoryTitle={selectedCategory}
          selectedFinalSectionTitle={selectedFinalSection}
        />
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-6 text-foreground">
            Área de Saúde
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            A área de Saúde gerencia as informações e processos relacionados
            aos serviços de saúde.
          </p>
          <p className="text-muted-foreground text-lg">
            Utilize a navegação abaixo para acessar rapidamente o módulo.
          </p>
          <SaudeTabs
            selectedSubmodule={selectedSubmodule}
            setSelectedSubmodule={setSelectedSubmodule}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedFinalSection={selectedFinalSection}
            setSelectedFinalSection={setSelectedFinalSection}
          />
        </div>
      </div>
    );
  }

  // Render special component for Configuracoes module
  if (page === "configuracoes") {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Breadcrumbs
          categoryId={category}
          pageTitle={docPage.title}
          submoduleTitle={selectedSubmodule}
          categoryTitle={selectedCategory}
          selectedFinalSectionTitle={selectedFinalSection}
        />
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-6 text-foreground">
            Área de Configurações
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            A área de Configurações permite gerenciar as configurações gerais
            do sistema.
          </p>
          <p className="text-muted-foreground text-lg">
            Utilize a navegação abaixo para acessar rapidamente o módulo.
          </p>
          <ConfiguracoesTabs
            selectedSubmodule={selectedSubmodule}
            setSelectedSubmodule={setSelectedSubmodule}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedFinalSection={selectedFinalSection}
            setSelectedFinalSection={setSelectedFinalSection}
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
